```javascript
upSellingResumenCompra = [
    {
        "nombre": "CP01 - Visualización de resumen con todos los datos",
        "dado": "Dado que el usuario ha completado el formulario de compra, ha seleccionado una bolsita de datos sugerida, un paquete principal y un medio de pago.",
        "cuando": "Cuando el sistema lo redirige a la página de Resumen de la compra.",
        "entonces": "Entonces se muestran todos los datos de la compra para verificación incluyendo la bolsita de datos sugerida, el paquete y el medio de pago."
    },
    {
        "nombre": "CP02 - Acumulación correcta de puntos con bolsita sugerida",
        "dado": "Dado que el usuario se encuentra en la página de Resumen de la compra y ha seleccionado una bolsita de datos sugerida junto con un paquete principal.",
        "cuando": "Cuando se revisa la sección de acumulación de puntos.",
        "entonces": "Entonces los puntos acumulados reflejan la suma de los puntos de ambos, la bolsita de datos sugerida y el paquete principal."
    },
    {
        "nombre": "CP03 - Inclusión del precio de la bolsita de datos sugerida",
        "dado": "Dado que el usuario se encuentra en la página de Resumen de la compra y ha seleccionado una bolsita de datos sugerida.",
        "cuando": "Cuando se visualiza el detalle del total de la compra.",
        "entonces": "Entonces el precio de la bolsita de datos sugerida se adiciona correctamente al precio total del resumen."
    },
    {
        "nombre": "CP04 - Resumen de compra sin bolsita de datos sugerida",
        "dado": "Dado que el usuario ha completado el formulario de compra, ha seleccionado un paquete principal y un medio de pago, pero no ha seleccionado la bolsita de datos sugerida o la ha eliminado.",
        "cuando": "Cuando el sistema lo redirige a la página de Resumen de la compra.",
        "entonces": "Entonces se muestran solo los datos del paquete principal y el medio de pago, sin incluir la información de la bolsita de datos sugerida."
    },
    {
        "nombre": "CP05 - Redirección a pasarela de pagos al finalizar compra",
        "dado": "Dado que el usuario ha verificado los datos en la página de Resumen de la compra.",
        "cuando": "Cuando el usuario hace clic en el botón 'Finalizar compra'.",
        "entonces": "Entonces el sistema lo redirecciona correctamente a la pasarela de pagos."
    }
];
```