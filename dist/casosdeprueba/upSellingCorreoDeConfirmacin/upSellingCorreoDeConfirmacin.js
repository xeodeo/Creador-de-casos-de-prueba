upSellingCorreoDeConfirmacion = [
    {
        "nombre": "CP01 - Envío de correo por compra exitosa de bolsita y paquete",
        "dado": "Dado que un usuario ha ingresado su email en el formulario de compra",
        "cuando": "Cuando el usuario compra exitosamente una bolsita sugerida y un paquete",
        "entonces": "Entonces se envía un correo de confirmación al email ingresado"
    },
    {
        "nombre": "CP02 - No envío de correo por compra solo de bolsita",
        "dado": "Dado que un usuario ha ingresado su email en el formulario de compra",
        "cuando": "Cuando el usuario compra exitosamente solo una bolsita sugerida",
        "entonces": "Entonces no se envía el correo de confirmación específico de la promoción bolsita más paquete"
    },
    {
        "nombre": "CP03 - No envío de correo por compra solo de paquete",
        "dado": "Dado que un usuario ha ingresado su email en el formulario de compra",
        "cuando": "Cuando el usuario compra exitosamente solo un paquete",
        "entonces": "Entonces no se envía el correo de confirmación específico de la promoción bolsita más paquete"
    },
    {
        "nombre": "CP04 - No envío de correo por compra fallida",
        "dado": "Dado que un usuario ha ingresado su email en el formulario de compra",
        "cuando": "Cuando el usuario intenta comprar una bolsita sugerida y un paquete pero la transacción no es exitosa",
        "entonces": "Entonces no se envía ningún correo de confirmación"
    }
];