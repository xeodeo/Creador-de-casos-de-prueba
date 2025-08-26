js

colorCabezoteTarjetones = [
    {
        "nombre": "CP01 - Configuración de color de cabezote exitosa",
        "dado": "Dado que un administrador se encuentra en la interfaz de edición de un paquete específico",
        "cuando": "Cuando selecciona un color para el cabezote del tarjetón y guarda los cambios",
        "entonces": "Entonces el cabezote del tarjetón de ese paquete muestra el color configurado en la parrilla de productos de la página web tanto en desktop como en mobile"
    },
    {
        "nombre": "CP02 - Configuración de color de texto exitosa",
        "dado": "Dado que un administrador se encuentra en la interfaz de edición de un paquete específico",
        "cuando": "Cuando selecciona un color para el texto del tarjetón y guarda los cambios",
        "entonces": "Entonces el texto del tarjetón de ese paquete muestra el color configurado en la parrilla de productos de la página web tanto en desktop como en mobile"
    },
    {
        "nombre": "CP03 - Aplicación de colores por producto",
        "dado": "Dado que se han configurado colores de cabezote y texto distintos para Paquete A y Paquete B",
        "cuando": "Cuando un usuario visita la parrilla de productos en la página web",
        "entonces": "Entonces el tarjetón del Paquete A muestra sus colores configurados y el tarjetón del Paquete B muestra los suyos sin afectar a otros paquetes"
    },
    {
        "nombre": "CP04 - Visualización en desktop",
        "dado": "Dado que un paquete tiene colores de cabezote y texto personalizados configurados",
        "cuando": "Cuando un usuario accede a la parrilla de productos en la página web desde un dispositivo desktop",
        "entonces": "Entonces el tarjetón del paquete muestra correctamente los colores personalizados configurados"
    },
    {
        "nombre": "CP05 - Visualización en mobile",
        "dado": "Dado que un paquete tiene colores de cabezote y texto personalizados configurados",
        "cuando": "Cuando un usuario accede a la parrilla de productos en la página web desde un dispositivo móvil",
        "entonces": "Entonces el tarjetón del paquete muestra correctamente los colores personalizados configurados"
    },
    {
        "nombre": "CP06 - Persistencia de la configuración de colores",
        "dado": "Dado que un administrador ha configurado colores para el cabezote y texto de un paquete y ha guardado los cambios",
        "cuando": "Cuando el administrador vuelve a la interfaz de edición de ese paquete después de un tiempo",
        "entonces": "Entonces los colores previamente configurados para el cabezote y el texto se mantienen guardados y visibles correctamente"
    }
];