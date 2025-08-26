```javascript
convertirALandingSeguridadEnLaRed = [
    {
        "nombre": "CP01 - Carga de contenido del PDF en la landing",
        "dado": "Dado que el PDF de seguridad en la red existe y su contenido ha sido migrado al CMS",
        "cuando": "Cuando se accede a la URL de la nueva landing de seguridad en la red",
        "entonces": "Entonces la landing se carga mostrando todo el contenido textual del PDF original"
    },
    {
        "nombre": "CP02 - Consistencia de diseño con Política de Privacidad",
        "dado": "Dado que la landing de 'Seguridad en la red' está visible",
        "cuando": "Cuando se compara su estilo de diseño general con la landing de 'Política de Privacidad'",
        "entonces": "Entonces el diseño general tipos de fuente y disposición de elementos son coherentes con la landing de 'Política de Privacidad'"
    },
    {
        "nombre": "CP03 - Parametrización de imagen del banner",
        "dado": "Dado que el administrador de contenido tiene acceso al CMS y a la sección de la landing de seguridad",
        "cuando": "Cuando sube una nueva imagen para el banner y guarda los cambios",
        "entonces": "Entonces la landing de seguridad muestra la nueva imagen en su banner principal"
    },
    {
        "nombre": "CP04 - Parametrización de texto del título del banner",
        "dado": "Dado que el administrador de contenido tiene acceso al CMS y a la sección de la landing de seguridad",
        "cuando": "Cuando introduce un nuevo texto para el título del banner y guarda los cambios",
        "entonces": "Entonces la landing de seguridad muestra el nuevo texto como título del banner"
    },
    {
        "nombre": "CP05 - Contenido principal de texto parametrizable",
        "dado": "Dado que el administrador de contenido tiene acceso al CMS y a la sección de la landing de seguridad",
        "cuando": "Cuando modifica el contenido de texto principal de la landing y guarda los cambios",
        "entonces": "Entonces la landing de seguridad muestra el contenido de texto principal actualizado"
    },
    {
        "nombre": "CP06 - Visualización correcta en desktop",
        "dado": "Dado que la landing de 'Seguridad en la red' ha sido publicada",
        "cuando": "Cuando se accede a la landing desde un navegador de escritorio",
        "entonces": "Entonces la landing se muestra correctamente adaptada a la pantalla de escritorio con todos sus elementos visibles y organizados"
    },
    {
        "nombre": "CP07 - Visualización correcta en mobile",
        "dado": "Dado que la landing de 'Seguridad en la red' ha sido publicada",
        "cuando": "Cuando se accede a la landing desde un dispositivo móvil o en vista responsive",
        "entonces": "Entonces la landing se muestra correctamente adaptada a la pantalla móvil con todos sus elementos visibles y organizados"
    },
    {
        "nombre": "CP08 - Adaptación responsive del banner",
        "dado": "Dado que la landing de 'Seguridad en la red' tiene un banner configurado",
        "cuando": "Cuando se visualiza la landing en diferentes tamaños de pantalla (desktop mobile)",
        "entonces": "Entonces el banner (imagen y título) se adapta correctamente a cada tamaño de pantalla manteniendo su legibilidad y proporciones"
    },
    {
        "nombre": "CP09 - Persistencia de formato en el contenido parametrizable",
        "dado": "Dado que el administrador ha aplicado formato (negrita cursiva listas) al texto principal desde el CMS",
        "cuando": "Cuando se visualiza la landing de 'Seguridad en la red' en el navegador",
        "entonces": "Entonces el texto principal mantiene los formatos aplicados desde el CMS"
    },
    {
        "nombre": "CP10 - Integración con la navegación del sitio",
        "dado": "Dado que la landing de 'Seguridad en la red' ha sido creada",
        "cuando": "Cuando se verifica su enlace en el pie de página o en el menú correspondiente",
        "entonces": "Entonces la landing es accesible a través de la navegación esperada del sitio web"
    }
];
```