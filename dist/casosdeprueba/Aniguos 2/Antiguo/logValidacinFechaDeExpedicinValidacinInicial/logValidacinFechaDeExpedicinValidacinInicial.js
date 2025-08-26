logValidacionFechaExpedicion = [
    {
        "nombre": "CP01 - Registro exitoso de intento de validación",
        "dado": "Dado que el cliente inicia el proceso de validación de fecha de expedición.",
        "cuando": "Cuando ingresa una fecha de expedición válida y el servicio GetEstadoValidacionFechaExp responde exitosamente.",
        "entonces": "Entonces se registra un log transaccional con el estado de validación exitoso, identificador único, fecha y hora de transacción, línea, cédula, fecha de expedición enmascarada, y los datos completos del request y response del servicio."
    },
    {
        "nombre": "CP02 - Registro de intento fallido de validación",
        "dado": "Dado que el cliente inicia el proceso de validación de fecha de expedición.",
        "cuando": "Cuando ingresa una fecha de expedición inválida y el servicio GetEstadoValidacionFechaExp responde con un error.",
        "entonces": "Entonces se registra un log transaccional con el estado de validación fallido, identificador único, fecha y hora de transacción, línea, cédula, fecha de expedición enmascarada, y los datos completos del request y response del servicio."
    },
    {
        "nombre": "CP03 - Registro de rechazo por máximo de intentos",
        "dado": "Dado que el cliente ha realizado un intento previo fallido de validación de fecha de expedición.",
        "cuando": "Cuando realiza un segundo intento fallido, alcanzando el límite de 2 intentos.",
        "entonces": "Entonces se registra un log transaccional con el estado 'RechazadoPorMaximoIntentos', identificador único, fecha y hora de transacción, línea, cédula, fecha de expedición enmascarada, y los campos request y response vacíos."
    },
    {
        "nombre": "CP04 - Acceso a la consulta de logs desde el panel administrativo",
        "dado": "Dado que un usuario administrador ha iniciado sesión en el sistema Móvil Éxito.",
        "cuando": "Cuando navega al Menú de Logs.",
        "entonces": "Entonces encuentra una opción llamada 'LogValidacionFecha' que le permite acceder al listado de logs de validación de fecha de expedición."
    },
    {
        "nombre": "CP05 - Filtrado de logs en el panel administrativo",
        "dado": "Dado que el administrador está visualizando el LogValidacionFecha.",
        "cuando": "Cuando aplica filtros por Línea, Cédula, FechaInicial, FechaFinal de registro y EstadoConsulta.",
        "entonces": "Entonces el listado de logs se actualiza mostrando solo las transacciones que cumplen con los criterios de filtro especificados."
    },
    {
        "nombre": "CP06 - Visualización de datos enmascarados en el log",
        "dado": "Dado que un log de validación de fecha de expedición ha sido registrado.",
        "cuando": "Cuando el administrador consulta este log en el panel administrativo.",
        "entonces": "Entonces la FechaExpedicion se muestra enmascarada como *******YYYY, y el Request y Response están enmascarados o vacíos según las reglas de negocio."
    }
];