landingValidacionFechaExpedicionCedulaOtpPaso2 = [
    {
        "nombre": "CP01 - Manejo de estado Pendiente Validacion Cliente",
        "dado": "Dado que el servicio GetEstadoValidacionFechaExp retorna el estado Pendiente_Validacion_Cliente",
        "cuando": "Cuando la aplicación carga la pantalla de validación de fecha de expedición",
        "entonces": "Entonces se envía un código OTP a la línea móvil, se muestran los campos para ingresar el código, el botón de reenviar, el botón de confirmar y el texto Hemos enviado un Código de Seguridad a la Línea indicada, para continuar por favor ingrésalo acá."
    },
    {
        "nombre": "CP02 - Manejo de estado Bloqueada",
        "dado": "Dado que el servicio GetEstadoValidacionFechaExp retorna el estado Bloqueada",
        "cuando": "Cuando la aplicación carga la pantalla de validación de fecha de expedición",
        "entonces": "Entonces se envía un código OTP a la línea móvil, se muestran los campos para ingresar el código, el botón de reenviar, el botón de confirmar y el texto Hemos enviado un Código de Seguridad a la Línea indicada, para continuar por favor ingrésalo acá."
    },
    {
        "nombre": "CP03 - Ingreso de OTP correcto",
        "dado": "Dado que se ha enviado un código OTP a la línea móvil y los campos de ingreso están visibles",
        "cuando": "Cuando el cliente ingresa un código OTP correcto y presiona el botón de confirmar",
        "entonces": "Entonces se consume el servicio ValidarOTP y, si el código es correcto, se procede al Paso 3 para validar la fecha de expedición."
    },
    {
        "nombre": "CP04 - Ingreso de OTP incorrecto",
        "dado": "Dado que se ha enviado un código OTP a la línea móvil y los campos de ingreso están visibles",
        "cuando": "Cuando el cliente ingresa un código OTP incorrecto y presiona el botón de confirmar",
        "entonces": "Entonces se consume el servicio ValidarOTP y se muestra el mensaje La información no es correcta, por favor validar."
    },
    {
        "nombre": "CP05 - Reenvío de OTP",
        "dado": "Dado que se ha enviado un código OTP a la línea móvil y el botón de reenviar está visible",
        "cuando": "Cuando el cliente presiona el botón para reenviar el OTP",
        "entonces": "Entonces se envía un nuevo código OTP a la línea móvil."
    },
    {
        "nombre": "CP06 - Servicio retorna estado diferente a Pendiente o Bloqueada",
        "dado": "Dado que el servicio GetEstadoValidacionFechaExp retorna un estado diferente a Pendiente_Validacion_Cliente o Bloqueada",
        "cuando": "Cuando la aplicación carga la pantalla de validación de fecha de expedición",
        "entonces": "Entonces se muestra el mensaje Los datos ingresados no tienen pendientes de validación."
    }
];