import os
import requests
from requests.utils import quote
from bs4 import BeautifulSoup
import re  # Para manejar los caracteres inválidos

def obtener_hu_por_id(config, log, hu_id):
    try:
        org = config.get("organization", "")
        proj = config.get("project", "")
        team = config.get("team", "")
        pat = config.get("pat", "")
        custom_fields = config.get("custom_fields", [])

        if not all([org, proj, team, pat]):
            log("❌ Faltan campos obligatorios en la configuración.")
            return

        auth = ("", pat)
        headers = {"Content-Type": "application/json"}
        team_encoded = quote(team)

        # Obtener la historia de usuario específica por ID
        hu_url = f"https://dev.azure.com/{org}/{proj}/_apis/wit/workitems/{hu_id}?api-version=7.0"
        hu_resp = requests.get(hu_url, auth=auth, headers=headers)
        hu_resp.raise_for_status()
        hu = hu_resp.json()

        titulo = hu["fields"].get("System.Title", "")
        descripcion_html = hu["fields"].get("System.Description", "")
        descripcion = BeautifulSoup(descripcion_html, "html.parser").get_text().strip()

        # Agregar Criterios de Aceptación y otros campos personalizados
        criterios = []
        for field in custom_fields:
            # Buscar los campos personalizados que existan y que tengan valores
            custom_field_value = hu["fields"].get(field.get("id", ""), "")
            if custom_field_value:
                clean_value = BeautifulSoup(custom_field_value, "html.parser").get_text().strip()
                criterios.append(f"{field['name']} (ID: {field['id']}):\n----------------\n{clean_value}\n")

        # Crear nombre de la carpeta y reemplazar caracteres inválidos
        valid_titulo = re.sub(r'[<>:"/\\|?*]', '_', titulo)  # Reemplazar caracteres no válidos
        hu_dir = os.path.join(config["input_dir"], f"HU_Txts_{valid_titulo}")
        os.makedirs(hu_dir, exist_ok=True)

        # Guardar archivo TXT
        archivo = os.path.join(hu_dir, f"HU_{hu_id}.txt")
        with open(archivo, "w", encoding="utf-8") as f:
            f.write(f"Titulo:{titulo}\n\n")
            f.write("Descripcion:\n----------------\n")
            f.write(descripcion + "\n\n")

            # Escribir los criterios personalizados y el de aceptación si existe
            if criterios:
                f.write("\n".join(criterios))

        log(f"✅ HU {hu_id} guardada.")
        log(f"\n📁 Archivos guardados en: {hu_dir}")

    except Exception as e:
        log(f"❌ Error al obtener HU: {e}")
