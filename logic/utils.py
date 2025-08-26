import os
import json

CONFIG_FILE = os.path.join(os.getcwd(), "config.json")  # Esto asegura que el archivo se cree en la carpeta donde está el script

def cargar_config():
    # Si no existe el archivo de configuración, crear uno con valores por defecto
    if not os.path.exists(CONFIG_FILE):
        return {
            "api_key": "",
            "modelo": "gemini-2.5-flash",
            "input_dir": os.path.join(os.getcwd(), "HUs"),
            "output_dir": os.path.join(os.getcwd(), "casosdeprueba"),
            "organization": "",
            "project": "",
            "team": "",
            "pat": "",
            "custom_fields": []  # Lista vacía para los campos personalizados
        }
    
    # Si el archivo de configuración existe, cargarlo
    with open(CONFIG_FILE, "r", encoding="utf-8") as f:
        config = json.load(f)
    
    # Si no hay campos personalizados, inicializarlos como una lista vacía
    if "custom_fields" not in config:
        config["custom_fields"] = []
    
    # Asegurarse de que cada campo personalizado sea un diccionario con 'name' e 'id'
    for i, field in enumerate(config["custom_fields"]):
        if isinstance(field, str):  # Si el campo es una cadena, convertirlo a un diccionario
            config["custom_fields"][i] = {"name": field, "id": ""}
        if not isinstance(field, dict):
            continue  # Si ya es un diccionario, no hace falta hacer nada

        # Asegurarse de que el diccionario tenga los campos 'name' e 'id'
        if "name" not in field:
            field["name"] = "Campo Personalizado"  # Nombre por defecto
        if "id" not in field:
            field["id"] = ""  # ID por defecto

    return config

def guardar_config(config):
    # Guardar la configuración (con los campos personalizados) en el archivo config.json
    with open(CONFIG_FILE, "w", encoding="utf-8") as f:
        json.dump(config, f, indent=4)
