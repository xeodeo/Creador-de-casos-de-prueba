landingValidacionFechaExpedicionCedulaPaso3 = [
    {
        "nombre": "CP01 - Validacion exitosa de fecha de expedicion para linea pendiente",
        "dado": "Dado que el cliente ha ingresado un codigo OTP correcto y el estado de la linea era Pendiente_Validacion_Cliente.",
        "cuando": "Cuando el sistema consume el servicio ValidacionFechaExpedicion con los datos proporcionados y este responde exitosamente con codigoRespuesta Exitoso.",
        "entonces": "Entonces se muestra el mensaje parametrizable Tu linea ha sido validada exitosamente."
    },
    {
        "nombre": "CP02 - Validacion exitosa de fecha de expedicion para linea bloqueada",
        "dado": "Dado que el cliente ha ingresado un codigo OTP correcto y el estado de la linea era Bloqueada.",
        "cuando": "Cuando el sistema consume el servicio ValidacionFechaExpedicion con los datos proporcionados y este responde exitosamente con codigoRespuesta Exitoso.",
        "entonces": "Entonces se muestra el mensaje parametrizable Tu linea ha sido validada exitosamente y sera desbloqueada en los proximos minutos."
    },
    {
        "nombre": "CP03 - Validacion de fecha de expedicion no exitosa",
        "dado": "Dado que el cliente ha ingresado un codigo OTP correcto.",
        "cuando": "Cuando el sistema consume el servicio ValidacionFechaExpedicion con los datos proporcionados y este responde con un codigo de respuesta diferente a Exitoso.",
        "entonces": "Entonces se muestra el mensaje parametrizable La validacion no fue exitosa. Valida la informacion e intenta de nuevo."
    },
    {
        "nombre": "CP04 - Error al consumir el servicio de validacion de fecha de expedicion",
        "dado": "Dado que el cliente ha ingresado un codigo OTP correcto.",
        "cuando": "Cuando el sistema intenta consumir el servicio ValidacionFechaExpedicion y ocurre un error tecnico.",
        "entonces": "Entonces se muestra el mensaje En este momento no es posible realizar la validacion solicitada por favor intenta mas tarde. y se registra un log de tipo ErrorGeneral."
    }
];