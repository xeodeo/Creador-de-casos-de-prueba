import json
import os
import re
import glob
import google.generativeai as genai
import pandas as pd
from logic.utils import cargar_config


def generar_casos_prueba(config, log):
    try:
        api_key = config.get("api_key", "")
        if not api_key:
            log("❌ API Key vacía.")
            return
        genai.configure(api_key=api_key)

        carpeta_hus = config.get("input_dir", "")
        carpeta_salida = config.get("output_dir", "")
        modelo = config.get("modelo", "gemini-2.5-flash")

        archivos = glob.glob(os.path.join(carpeta_hus, "*.txt"))
        if not archivos:
            log("❌ No hay archivos .txt en la carpeta de HUs")
            return

        prompt_base = """Eres un analista experto en calidad de software. Tu tarea es generar casos de prueba en formato JSON dentro de un archivo .js, basados en historias de usuario y criterios de aceptación. Los casos deben cumplir el siguiente formato exacto:

1. Cada archivo debe comenzar con el nombre de la historia de usuario en formato camelCase seguido de = [ (por ejemplo: aprobacionPago = [).
2. Cada objeto dentro del array representa un caso de prueba y debe tener los siguientes campos:
   - "nombre": debe iniciar con un identificador único en formato CP01, CP02, etc., seguido de un guion y el título breve del caso.
   - "dado": debe iniciar con la palabra **Dado**, seguido del contexto inicial.
   - "cuando": debe iniciar con la palabra **Cuando**, seguido de la acción o evento ejecutado.
   - "entonces": debe iniciar con la palabra **Entonces**, seguido del resultado esperado.

3. Los campos deben estar en **formato texto plano**, sin etiquetas ni formato adicional. Todos los textos deben estar en español.

4. No incluyas const, let, ni export, solo la variable en camelCase con el contenido en formato JSON. No agregues comentarios ni explicaciones adicionales.

5. Usa punto al final de cada frase si corresponde, pero nunca comas para separar cláusulas internas.

Ejemplo de salida:
js

loginUsuario = [
    {
        "nombre": "CP01 - Inicio de sesión exitoso",
        "dado": "Dado que el usuario se encuentra en la página de login",
        "cuando": "Cuando introduce sus credenciales válidas",
        "entonces": "Entonces accede al sistema correctamente"
    }
];"""  # ← Usa aquí el mismo prompt completo que te di antes

        for ruta in archivos:
            with open(ruta, "r", encoding="utf-8") as f:
                contenido = f.read()

            titulo = next((l for l in contenido.splitlines() if l.lower().startswith("titulo:")), None)
            if not titulo:
                log(f"⚠️ Título no encontrado en {os.path.basename(ruta)}")
                continue

            nombre_array = to_camel_case(titulo.replace("Titulo:", "").strip())
            carpeta_destino = os.path.join(carpeta_salida, nombre_array)
            os.makedirs(carpeta_destino, exist_ok=True)

            prompt = prompt_base + "\n\n" + contenido
            model = genai.GenerativeModel(modelo)
            log(f"🧠 Generando para: {nombre_array}...")
            log("Pensando...")

            try:
                respuesta = model.generate_content(prompt)
                js_texto = respuesta.text
            except Exception as e:
                log(f"❌ Error con {nombre_array}: {e}")
                continue

            ruta_js = os.path.join(carpeta_destino, f"{nombre_array}.js")
            with open(ruta_js, "w", encoding="utf-8") as f:
                f.write(js_texto)

            try:
                array = extraer_array(js_texto)
            except Exception as e:
                log(f"❌ Error al extraer JSON: {e}")
                continue

            filas = []
            for c in array:
                filas.append([c["nombre"], ""])
                filas.append(["", c["dado"]])
                filas.append(["", c["cuando"]])
                filas.append(["", c["entonces"]])

            df = pd.DataFrame(filas, columns=["Caso de Prueba", "Detalle"])
            ruta_excel = os.path.join(carpeta_destino, f"{nombre_array}.xlsx")
            df.to_excel(ruta_excel, index=False)

            log(f"✅ {nombre_array} generado correctamente.")
            log("----------------------------------------------------------")

        log("🎉 Proceso finalizado.")

    except Exception as e:
        log(f"❌ Error al generar los casos de prueba: {e}")


def to_camel_case(texto):
    palabras = re.sub(r'[^a-zA-Z0-9 ]', '', texto).split()
    return palabras[0].lower() + ''.join(p.capitalize() for p in palabras[1:])


def extraer_array(texto):
    texto = re.sub(r'//.*', '', texto)
    match = re.search(r'(\w+)\s*=\s*(\[[\s\S]+?\])\s*;', texto, re.DOTALL)
    if match:
        return json.loads(match.group(2))
    raise ValueError("No se encontró un array válido.")
