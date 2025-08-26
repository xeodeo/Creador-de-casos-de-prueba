bolsitasCorreoConfirmacion = [
    {
        "nombre": "CP01 - Envío exitoso de correo de confirmación de compra",
        "dado": "Dado que un usuario ha completado de manera exitosa la compra de una bolsita de datos.",
        "cuando": "Cuando el sistema procesa la transacción de compra finalizada.",
        "entonces": "Entonces se envía automáticamente un correo de confirmación al email que el usuario ingresó en el formulario."
    },
    {
        "nombre": "CP02 - Validación de contenido y diseño del correo de confirmación",
        "dado": "Dado que un correo de confirmación de compra de bolsita de datos ha sido enviado.",
        "cuando": "Cuando el usuario abre el correo de confirmación en su cliente de email en un dispositivo móvil.",
        "entonces": "Entonces el contenido del correo y su diseño se corresponden con los prototipos de Figma proporcionados para la vista mobile."
    },
    {
        "nombre": "CP03 - Validación de contenido y diseño del correo en desktop",
        "dado": "Dado que un correo de confirmación de compra de bolsita de datos ha sido enviado.",
        "cuando": "Cuando el usuario abre el correo de confirmación en su cliente de email en un dispositivo de escritorio.",
        "entonces": "Entonces el contenido del correo y su diseño se corresponden con los prototipos de Figma proporcionados para la vista desktop."
    },
    {
        "nombre": "CP04 - Verificación de dirección de destino del correo",
        "dado": "Dado que el usuario ha ingresado una dirección de email válida en el formulario de compra de la bolsita de datos.",
        "cuando": "Cuando se envía el correo de confirmación de la compra exitosa.",
        "entonces": "Entonces el correo de confirmación llega a la bandeja de entrada de la dirección de email exactamente igual a la ingresada por el usuario en el formulario."
    }
];