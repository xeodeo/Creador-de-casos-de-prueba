import os
import requests
from requests.utils import quote  # Asegúrate de agregar esta importación
from bs4 import BeautifulSoup

def obtener_hus(config, log):
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

        # Obtener el sprint actual
        sprint_url = f"https://dev.azure.com/{org}/{proj}/{team_encoded}/_apis/work/teamsettings/iterations?$timeframe=current&api-version=7.0"
        sprint_resp = requests.get(sprint_url, auth=auth, headers=headers)
        sprint_resp.raise_for_status()

        sprint_data = sprint_resp.json().get("value", [])
        if not sprint_data:
            log("❌ No se encontró un sprint actual.")
            return

        sprint = sprint_data[0]
        iteration_name = sprint["name"].replace(" ", "_")
        log(f"✔️ Sprint detectado: {iteration_name}")

        # Crear carpeta para guardar HUs
        hu_dir = os.path.join(config["input_dir"], f"HU_Txts_{iteration_name}")
        os.makedirs(hu_dir, exist_ok=True)

        # Obtener IDs de work items del sprint
        wi_url = f"https://dev.azure.com/{org}/{proj}/{team_encoded}/_apis/work/teamsettings/iterations/{sprint['id']}/workitems?api-version=7.0"
        wi_resp = requests.get(wi_url, auth=auth, headers=headers)
        wi_resp.raise_for_status()
        work_items = wi_resp.json().get("workItemRelations", [])

        # Descargar cada historia
        for wi in work_items:
            if "target" not in wi: continue

            hu_id = wi["target"]["id"]
            hu_url = f"https://dev.azure.com/{org}/{proj}/_apis/wit/workitems/{hu_id}?api-version=7.0"
            hu_resp = requests.get(hu_url, auth=auth, headers=headers)
            hu_resp.raise_for_status()
            hu = hu_resp.json()

            tipo = hu["fields"].get("System.WorkItemType", "").lower()
            if tipo == "task":  # Excluir tareas (tasks) directamente
                continue  # No procesar tareas ni mostrar nada en el log

            if tipo not in ["user story", "product backlog item", "historia de usuario", "technical story", "hu técnica" ]:
                continue  # Solo procesar historias de usuario y elementos del backlog

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
        log(f"❌ Error al obtener HUs: {e}") 
