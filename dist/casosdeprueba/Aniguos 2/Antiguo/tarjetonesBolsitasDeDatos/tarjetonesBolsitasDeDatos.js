```javascript
tarjetonesBolsitasDeDatos = [
    {
        "nombre": "CP01 - Acceso a la configuración de tarjetones",
        "dado": "Dado que el usuario Coordinador de mercadeo ha iniciado sesión en el sistema",
        "cuando": "Cuando navega a la sección de configuración de tarjetones de bolsitas de datos",
        "entonces": "Entonces la interfaz de configuración de tarjetones se carga correctamente y es accesible para su gestión"
    },
    {
        "nombre": "CP02 - Creación exitosa de un nuevo tarjetón",
        "dado": "Dado que el Coordinador de mercadeo se encuentra en la sección de configuración de tarjetones de bolsitas de datos",
        "cuando": "Cuando introduce todos los parámetros requeridos para un nuevo tarjetón incluyendo título descripción y valores y guarda la configuración",
        "entonces": "Entonces el nuevo tarjetón se crea exitosamente y aparece en la lista de tarjetones disponibles para las bolsitas de datos"
    },
    {
        "nombre": "CP03 - Modificación de tarjetón existente",
        "dado": "Dado que existe un tarjetón de bolsita de datos previamente configurado",
        "cuando": "Cuando el Coordinador de mercadeo accede a la edición de ese tarjetón modifica uno o más de sus parámetros y guarda los cambios",
        "entonces": "Entonces los cambios se aplican y el tarjetón se actualiza correctamente reflejando las nuevas configuraciones"
    },
    {
        "nombre": "CP04 - Reutilización de configuración de paquetes",
        "dado": "Dado que el Coordinador de mercadeo está configurando un tarjetón para bolsitas de datos",
        "cuando": "Cuando se observan las opciones y campos de configuración disponibles para el tarjetón",
        "entonces": "Entonces los campos y la lógica de configuración son similares o reutilizan componentes de la configuración de tarjetones de paquetes existentes"
    },
    {
        "nombre": "CP05 - Configuración de valor tachado en tarjetón",
        "dado": "Dado que el Coordinador de mercadeo está creando o editando un tarjetón de bolsitas de datos",
        "cuando": "Cuando introduce un valor en el campo destinado para el precio o dato a tachar y guarda la configuración",
        "entonces": "Entonces el tarjetón se guarda con la propiedad de valor tachado establecida correctamente"
    },
    {
        "nombre": "CP06 - Visualización correcta de valor tachado",
        "dado": "Dado que un tarjetón de bolsita de datos ha sido configurado con un valor a tachar",
        "cuando": "Cuando un usuario final accede a la landing page donde se muestra este tarjetón",
        "entonces": "Entonces el valor configurado para tachar se visualiza con la línea de tachado sobre él respetando la funcionalidad existente en los paquetes normales"
    },
    {
        "nombre": "CP07 - Cumplimiento del diseño en la landing page",
        "dado": "Dado que un tarjetón de bolsita de datos ha sido configurado y está visible en la landing page",
        "cuando": "Cuando se compara el diseño visual del tarjetón en producción con el mock up proporcionado para la landing",
        "entonces": "Entonces el diseño del tarjetón se respeta y coincide fielmente con el mock up enviado"
    }
];
```