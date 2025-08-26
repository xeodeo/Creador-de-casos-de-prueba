import tkinter as tk
from tkinter import filedialog, ttk
from logic.utils import cargar_config, guardar_config
from logic.generator import generar_casos_prueba
from logic.azure import obtener_hus
from logic.soloid import obtener_hu_por_id  # Importar la función para obtener la HU por ID

class AutoCaseUI:
    def __init__(self, root):
        self.root = root
        self.root.title("AutoCase")
        self.root.configure(bg="#2b2d31")
        self.root.geometry("620x640")

        # Cargar la configuración
        self.config = cargar_config()

        # Crear la interfaz
        self.frame = tk.Frame(self.root, bg="#2b2d31")
        self.frame.pack(pady=20)

        # Crear botones y campos
        self.crear_interfaz()

    def crear_interfaz(self):
        self.crear_campos_api_y_modelo()
        self.crear_log_texto()
        self.crear_engrane()
        self.crear_botones()
        self.crear_campos_hu_id()

    def crear_campos_api_y_modelo(self):
        # API Key
        self.api_label = tk.Label(self.frame, text="API Key Gemini:", bg="#2b2d31", fg="white")
        self.api_label.grid(row=0, column=0, sticky="w")
        self.input_api = tk.Entry(self.frame, width=40, bg="#1e1f22", fg="white", insertbackground="white")
        self.input_api.grid(row=1, column=0, padx=5, pady=5)
        self.input_api.insert(0, self.config.get("api_key", ""))

        # Modelo de Gemini
        self.modelo_label = tk.Label(self.frame, text="Modelo Gemini:", bg="#2b2d31", fg="white")
        self.modelo_label.grid(row=2, column=0, sticky="w")
        self.combo_modelo = ttk.Combobox(self.frame)
        self.combo_modelo["values"] = [
            "gemini-2.5-flash", "gemini-2.5-pro", "gemini-2.5-flash-preview-tts",
            "gemini-2.5-pro-preview-tts", "gemini-2.0-flash", "gemini-2.0-pro"
        ]
        self.combo_modelo.set(self.config.get("modelo", "gemini-2.5-flash"))
        self.combo_modelo.grid(row=3, column=0, padx=5, pady=5, sticky="w")

        # Botón guardar configuración
        self.btn_guardar_api = tk.Button(self.frame, text="Guardar", command=self.guardar_api_key)
        self.btn_guardar_api.grid(row=1, column=1, padx=5, pady=5)

    def crear_log_texto(self):
        # Crear área de log
        self.log_text = tk.Text(self.root, height=15, bg="#1e1f22", fg="white")
        self.log_text.pack(padx=10, pady=10, fill="both", expand=True)

    def crear_engrane(self):
        # Crear el botón de engranaje para abrir el popup de configuración
        self.btn_config = tk.Button(self.root, text="⚙", command=self.abrir_config_popup, font=("Arial", 16), bg="#2b2d31", fg="white", bd=0)
        self.btn_config.place(relx=1.0, rely=0.0, anchor="ne")

    def crear_botones(self):
        # Botones de obtener HUs y generar casos de prueba
        self.btn_obtener_hus = ttk.Button(self.frame, text="Obtener HUs de Sprint", command=self.obtener_hus)
        self.btn_obtener_hus.grid(row=4, column=0, padx=10, pady=10, sticky="w")

        self.btn_generar = ttk.Button(self.frame, text="🧪 Generar Casos de Prueba", command=self.generar_casos)
        self.btn_generar.grid(row=4, column=1, padx=10, pady=10)

    def crear_campos_hu_id(self):
        # Campo para ingresar HU ID
        self.hu_id_label = tk.Label(self.frame, text="HU ID:", bg="#2b2d31", fg="white")
        self.hu_id_label.grid(row=5, column=0, sticky="w", padx=10)

        self.hu_id_input = tk.Entry(self.frame, width=40, bg="#1e1f22", fg="white", insertbackground="white")
        self.hu_id_input.grid(row=6, column=0, padx=10, pady=5)

        self.btn_obtener_hu_id = ttk.Button(self.frame, text="Obtener HU por ID", command=self.obtener_hu_por_id)
        self.btn_obtener_hu_id.grid(row=6, column=1, padx=10, pady=10)

    def guardar_api_key(self):
        self.config["api_key"] = self.input_api.get().strip()
        self.config["modelo"] = self.combo_modelo.get()
        guardar_config(self.config)
        self.log("✅ API Key y modelo guardados.")

    def obtener_hus(self):
        # Llama a la función para obtener todas las HUs desde Azure
        log = self.log
        obtener_hus(self.config, log)

    def obtener_hu_por_id(self):
        # Llama a la función para obtener una HU por su ID desde Azure
        hu_id = self.hu_id_input.get().strip()
        if hu_id:
            log = self.log
            obtener_hu_por_id(self.config, log, hu_id)
        else:
            self.log("❌ Por favor ingrese un ID de HU.")

    def generar_casos(self):
        # Llama a la función para generar los casos de prueba
        log = self.log
        generar_casos_prueba(self.config, log)

    def log(self, msg):
        self.log_text.insert("end", msg + "\n")
        self.log_text.see("end")

    def abrir_config_popup(self):
        popup = tk.Toplevel(self.root)
        popup.title("Configuración de Rutas y Azure")
        popup.configure(bg="#2b2d31")
        popup.geometry("450x500")

        # Crear un contenedor de pestañas
        notebook = ttk.Notebook(popup)
        notebook.pack(padx=10, pady=10, fill="both", expand=True)

        # Pestaña 1: Configuración de Azure
        tab1 = tk.Frame(notebook, bg="#2b2d31")
        notebook.add(tab1, text="Azure Config")

        def crear_input(label_text, key, row):
            tk.Label(tab1, text=label_text, bg="#2b2d31", fg="white").grid(row=row, column=0, sticky="w", padx=10)
            var = tk.StringVar(value=self.config.get(key, ""))
            entry = tk.Entry(tab1, textvariable=var, width=45, bg="#1e1f22", fg="white")
            entry.grid(row=row+1, column=0, columnspan=2, padx=10, pady=2)
            return var

        org_var = crear_input("ORGANIZATION:", "organization", 0)
        proj_var = crear_input("PROJECT:", "project", 2)
        team_var = crear_input("TEAM:", "team", 4)
        pat_var = crear_input("PAT:", "pat", 6)

        # Pestaña 2: Campos Personalizados
        tab2 = tk.Frame(notebook, bg="#2b2d31")
        notebook.add(tab2, text="Campos Personalizados")

        # Mostrar los campos personalizados guardados
        self.mostrar_campos_personalizados(tab2)

        # Campos para agregar un nuevo campo personalizado con su nombre y ID
        custom_field_name_label = tk.Label(tab2, text="Nombre del Campo Personalizado:", bg="#2b2d31", fg="white")
        custom_field_name_label.grid(row=0, column=0, sticky="w", padx=10)
        custom_field_name_var = tk.StringVar()
        custom_field_name_entry = tk.Entry(tab2, textvariable=custom_field_name_var, width=45, bg="#1e1f22", fg="white")
        custom_field_name_entry.grid(row=1, column=0, columnspan=2, padx=10, pady=2)

        custom_field_id_label = tk.Label(tab2, text="ID del Campo Personalizado:", bg="#2b2d31", fg="white")
        custom_field_id_label.grid(row=2, column=0, sticky="w", padx=10)
        custom_field_id_var = tk.StringVar()
        custom_field_id_entry = tk.Entry(tab2, textvariable=custom_field_id_var, width=45, bg="#1e1f22", fg="white")
        custom_field_id_entry.grid(row=3, column=0, columnspan=2, padx=10, pady=2)

        # Agregar el campo personalizado a la configuración al guardar
        def agregar_custom_field():
            custom_field_name = custom_field_name_var.get().strip()
            custom_field_id = custom_field_id_var.get().strip()

            if custom_field_name and custom_field_id:
                # Asignar nombre e ID al campo personalizado y guardarlo
                self.config["custom_fields"].append({"name": custom_field_name, "id": custom_field_id})
                guardar_config(self.config)
                self.log(f"✅ Campo personalizado agregado: {custom_field_name} (ID: {custom_field_id})")
                self.mostrar_campos_personalizados(tab2)

        tk.Button(tab2, text="Agregar Campo", command=agregar_custom_field).grid(row=4, column=0, columnspan=2, pady=5)

        # Pestaña 3: Rutas de HUs y Casos de Prueba
        tab3 = tk.Frame(notebook, bg="#2b2d31")
        notebook.add(tab3, text="Rutas")

        def crear_input_ruta(label_text, key, row):
            tk.Label(tab3, text=label_text, bg="#2b2d31", fg="white").grid(row=row, column=0, sticky="w", padx=10)
            var = tk.StringVar(value=self.config.get(key, ""))
            entry = tk.Entry(tab3, textvariable=var, width=45, bg="#1e1f22", fg="white")
            entry.grid(row=row+1, column=0, columnspan=2, padx=10, pady=2)
            return var

        hus_var = crear_input_ruta("Carpeta HUs:", "input_dir", 0)
        out_var = crear_input_ruta("Carpeta Salida:", "output_dir", 2)

        tk.Button(tab3, text="Buscar", command=lambda: hus_var.set(filedialog.askdirectory())).grid(row=1, column=2)
        tk.Button(tab3, text="Buscar", command=lambda: out_var.set(filedialog.askdirectory())).grid(row=3, column=2)

        def guardar_rutas():
            self.config["input_dir"] = hus_var.get()
            self.config["output_dir"] = out_var.get()
            self.config["organization"] = org_var.get()
            self.config["project"] = proj_var.get()
            self.config["team"] = team_var.get()
            self.config["pat"] = pat_var.get()
            guardar_config(self.config)
            self.log("✅ Rutas y credenciales Azure actualizadas.")
            popup.destroy()

        tk.Button(popup, text="Guardar", command=guardar_rutas).pack(pady=10)

        popup.mainloop()

    def mostrar_campos_personalizados(self, tab):
        # Mostrar los campos personalizados guardados
        if self.config.get("custom_fields"):
            for i, campo in enumerate(self.config["custom_fields"]):
                label = tk.Label(tab, text=f"{campo['name']} (ID: {campo['id']})", bg="#2b2d31", fg="white")
                label.grid(row=5 + i, column=0, columnspan=2, sticky="w", padx=10, pady=5)
                # Botón de eliminación
                btn_delete = tk.Button(tab, text="Eliminar", command=lambda i=i: self.eliminar_custom_field(i, tab))
                btn_delete.grid(row=5 + i, column=2, padx=5, pady=5)

    def eliminar_custom_field(self, index, tab):
        # Eliminar campo personalizado y actualizar la configuración
        del self.config["custom_fields"][index]
        guardar_config(self.config)
        self.mostrar_campos_personalizados(tab)
        self.log(f"✅ Campo personalizado eliminado.")
