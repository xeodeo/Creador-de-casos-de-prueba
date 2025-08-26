```javascript
bolsitasFormularioCompra = [
    {
        "nombre": "CP01 - Navegación a formulario de compra",
        "dado": "Dado que el usuario ha seleccionado una bolsita de datos previamente",
        "cuando": "Cuando es dirigido al siguiente paso",
        "entonces": "Entonces se muestra el formulario para llenar los datos de su línea para la compra del paquete seleccionado."
    },
    {
        "nombre": "CP02 - Límite de una bolsita de datos",
        "dado": "Dado que el usuario se encuentra en el formulario de compra con una bolsita de datos ya seleccionada",
        "cuando": "Cuando intenta seleccionar una segunda bolsita de datos",
        "entonces": "Entonces el sistema no permite la adición de una segunda bolsita de datos."
    },
    {
        "nombre": "CP03 - Actualización de resumen de compra",
        "dado": "Dado que el usuario está en el formulario de compra",
        "cuando": "Cuando una bolsita de datos es seleccionada o modificada",
        "entonces": "Entonces el resumen de la compra se actualiza de acuerdo a la bolsita seleccionada."
    },
    {
        "nombre": "CP04 - Eliminar bolsita de compra",
        "dado": "Dado que el usuario tiene una bolsita de datos seleccionada y visible en el resumen de compra",
        "cuando": "Cuando hace clic en el ícono de la caneca de basura asociado a la bolsita",
        "entonces": "Entonces la bolsita de datos es eliminada del resumen de compra."
    },
    {
        "nombre": "CP05 - Mostrar Puntos Colombia",
        "dado": "Dado que el usuario está en el formulario de compra con una bolsita de datos seleccionada",
        "cuando": "Cuando el resumen de compra se visualiza",
        "entonces": "Entonces se muestran los Puntos Colombia que el cliente puede acumular."
    },
    {
        "nombre": "CP06 - Ausencia de modal de sugerencia",
        "dado": "Dado que el usuario se encuentra en el formulario de compra de bolsitas de datos",
        "cuando": "Cuando se muestra el contenido del formulario",
        "entonces": "Entonces no se muestra un modal donde se sugiera al usuario adicionar otra bolsita de datos."
    },
    {
        "nombre": "CP07 - Redirección a resumen y pasarela de pagos",
        "dado": "Dado que el usuario ha completado los datos requeridos en el formulario de compra",
        "cuando": "Cuando hace clic en el botón Continuar",
        "entonces": "Entonces es redireccionado al resumen de la compra para verificar sus datos y posteriormente a la pasarela de pagos."
    }
];
```