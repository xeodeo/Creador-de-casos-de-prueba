```javascript
adicionarPiezaEnElSlider = [
    {
        "nombre": "CP01 - Verificación de 5 espacios en Desktop",
        "dado": "Dado que un usuario accede al home de la página en una computadora de escritorio.",
        "cuando": "Cuando el slider de banners es cargado.",
        "entonces": "Entonces se visualizan 5 espacios o banners en el slider en la versión de escritorio."
    },
    {
        "nombre": "CP02 - Verificación de 5 espacios en Mobile",
        "dado": "Dado que un usuario accede al home de la página en un dispositivo móvil.",
        "cuando": "Cuando el slider de banners es cargado.",
        "entonces": "Entonces se visualizan 5 espacios o banners en el slider en la versión móvil."
    },
    {
        "nombre": "CP03 - Funcionalidad de rotación con 5 banners",
        "dado": "Dado que el slider del home contiene 5 banners activos.",
        "cuando": "Cuando se permite la rotación automática o se navega manualmente entre los banners.",
        "entonces": "Entonces los 5 banners rotan y se muestran correctamente en secuencia."
    },
    {
        "nombre": "CP04 - Clic en el quinto banner",
        "dado": "Dado que el quinto banner en el slider del home tiene un enlace configurado.",
        "cuando": "Cuando un usuario hace clic en el quinto banner.",
        "entonces": "Entonces el usuario es redirigido correctamente a la URL asociada con ese banner."
    },
    {
        "nombre": "CP05 - Parametrización para habilitar el quinto espacio",
        "dado": "Dado que el sistema de administración permite configurar el número de banners activos en el slider.",
        "cuando": "Cuando se habilita el quinto espacio en el panel de administración y se le asigna contenido válido.",
        "entonces": "Entonces el home muestra 5 banners funcionales en el slider."
    },
    {
        "nombre": "CP06 - Parametrización para deshabilitar el quinto espacio",
        "dado": "Dado que el sistema de administración permite configurar el número de banners activos en el slider.",
        "cuando": "Cuando se deshabilita el quinto espacio o no se le asigna contenido en el panel de administración.",
        "entonces": "Entonces el slider muestra 4 banners y el quinto espacio no es visible o se muestra vacío sin afectar el layout ni la funcionalidad de los otros banners."
    },
    {
        "nombre": "CP07 - Responsividad del slider con 5 banners",
        "dado": "Dado que el slider del home contiene 5 banners.",
        "cuando": "Cuando se redimensiona la ventana del navegador desde desktop a mobile o viceversa.",
        "entonces": "Entonces los 5 banners se adaptan correctamente al tamaño de la pantalla manteniendo su visibilidad y funcionalidad."
    }
];
```