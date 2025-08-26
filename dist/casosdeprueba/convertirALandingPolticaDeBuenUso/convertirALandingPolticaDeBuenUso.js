js
convertirALandingPoliticaDeBuenUso = [
    {
        "nombre": "CP01 - Visualización de la landing de Política de Buen Uso",
        "dado": "Dado que el usuario accede a la URL de la Política de Buen Uso",
        "cuando": "Cuando la página se carga en el navegador",
        "entonces": "Entonces el contenido de la política se muestra como una página web navegable y no como un PDF descargable."
    },
    {
        "nombre": "CP02 - Diseño coherente con Política de Privacidad en desktop",
        "dado": "Dado que el usuario visualiza la landing de Política de Buen Uso en un dispositivo desktop",
        "cuando": "Cuando se compara el diseño general, estilos de fuente y jerarquía de títulos con la landing de Política de Privacidad",
        "entonces": "Entonces la Política de Buen Uso mantiene una consistencia visual y de diseño con la Política de Privacidad."
    },
    {
        "nombre": "CP03 - Diseño coherente con Política de Privacidad en mobile",
        "dado": "Dado que el usuario visualiza la landing de Política de Buen Uso en un dispositivo móvil",
        "cuando": "Cuando se compara el diseño general, estilos de fuente y jerarquía de títulos con la landing de Política de Privacidad",
        "entonces": "Entonces la Política de Buen Uso mantiene una consistencia visual y de diseño con la Política de Privacidad de forma responsiva."
    },
    {
        "nombre": "CP04 - Visualización del banner en desktop",
        "dado": "Dado que el usuario accede a la landing de Política de Buen Uso en un dispositivo desktop",
        "cuando": "Cuando la página se carga completamente",
        "entonces": "Entonces se visualiza un banner en la parte superior con una imagen y un texto de título."
    },
    {
        "nombre": "CP05 - Visualización del banner en mobile",
        "dado": "Dado que el usuario accede a la landing de Política de Buen Uso en un dispositivo móvil",
        "cuando": "Cuando la página se carga completamente",
        "entonces": "Entonces se visualiza el banner de forma responsiva con su imagen y título, siendo legible y correctamente adaptado a la pantalla."
    },
    {
        "nombre": "CP06 - Parametrización del título del banner",
        "dado": "Dado que un administrador ha iniciado sesión en el sistema de gestión de contenido",
        "cuando": "Cuando el administrador modifica el texto del título del banner para la Política de Buen Uso y guarda los cambios",
        "entonces": "Entonces el nuevo título del banner se muestra correctamente en la landing de Política de Buen Uso en el frontend."
    },
    {
        "nombre": "CP07 - Parametrización de la imagen del banner",
        "dado": "Dado que un administrador ha iniciado sesión en el sistema de gestión de contenido",
        "cuando": "Cuando el administrador sube una nueva imagen para el banner de la Política de Buen Uso y guarda los cambios",
        "entonces": "Entonces la nueva imagen del banner se muestra correctamente en la landing de Política de Buen Uso en el frontend."
    },
    {
        "nombre": "CP08 - Parametrización del contenido del texto principal",
        "dado": "Dado que un administrador ha iniciado sesión en el sistema de gestión de contenido",
        "cuando": "Cuando el administrador edita una sección del texto principal de la Política de Buen Uso y guarda los cambios",
        "entonces": "Entonces el texto modificado se refleja de forma precisa en el contenido de la landing de Política de Buen Uso en el frontend."
    },
    {
        "nombre": "CP09 - Integridad del contenido convertido",
        "dado": "Dado que el usuario accede a la landing de Política de Buen Uso",
        "cuando": "Cuando se compara el contenido de la landing con el PDF original de Política de Buen Uso",
        "entonces": "Entonces todo el texto y la información presente en el PDF original se encuentran replicados fielmente en la nueva landing page."
    },
    {
        "nombre": "CP10 - Responsividad general del contenido en mobile",
        "dado": "Dado que el usuario visualiza la landing de Política de Buen Uso en un dispositivo móvil con diferentes anchos de pantalla",
        "cuando": "Cuando el diseño de la página se adapta al tamaño de la ventana o la orientación del dispositivo",
        "entonces": "Entonces el texto es legible, los elementos se reordenan correctamente y no hay superposiciones ni cortes de contenido."
    }
];