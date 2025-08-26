```javascript
logValidacionFechaExpedicion = [
    {
        "nombre": "CP01 - Registro exitoso de validación",
        "dado": "Dado que un cliente intenta validar su fecha de expedición de documento",
        "cuando": "Cuando la validación de la fecha de expedición es exitosa y los datos son enviados al servicio",
        "entonces": "Entonces se debe guardar un registro en el log transaccional con todos los datos requeridos como Identificador FechaHoraTransaccion Linea Cedula FechaExpedicion enmascarada EstadoValidacion Request enmascarado y Response"
    },
    {
        "nombre": "CP02 - Registro de validación fallida",
        "dado": "Dado que un cliente intenta validar su fecha de expedición de documento",
        "cuando": "Cuando la validación de la fecha de expedición falla y los datos son enviados al servicio",
        "entonces": "Entonces se debe guardar un registro en el log transaccional indicando el estado de validación fallido junto con todos los datos requeridos como Identificador FechaHoraTransaccion Linea Cedula FechaExpedicion enmascarada Request enmascarado y Response"
    },
    {
        "nombre": "CP03 - Acceso al menú de logs",
        "dado": "Dado que un usuario administrativo ha iniciado sesión en Móvil Éxito",
        "cuando": "Cuando navega al Menú de Logs",
        "entonces": "Entonces debe encontrar y poder seleccionar la opción LogResultado ValidacionFecha"
    },
    {
        "nombre": "CP04 - Filtrado por Línea",
        "dado": "Dado que el usuario administrativo está en la consulta de LogResultado ValidacionFecha",
        "cuando": "Cuando aplica un filtro por una Línea específica",
        "entonces": "Entonces la tabla de resultados debe mostrar únicamente los registros asociados a esa Línea"
    },
    {
        "nombre": "CP05 - Filtrado por Cédula",
        "dado": "Dado que el usuario administrativo está en la consulta de LogResultado ValidacionFecha",
        "cuando": "Cuando aplica un filtro por un número de Cédula específico",
        "entonces": "Entonces la tabla de resultados debe mostrar únicamente los registros asociados a esa Cédula"
    },
    {
        "nombre": "CP06 - Filtrado por rango de fechas",
        "dado": "Dado que el usuario administrativo está en la consulta de LogResultado ValidacionFecha",
        "cuando": "Cuando aplica un filtro por un rango de FechaInicial y FechaFinal de registro",
        "entonces": "Entonces la tabla de resultados debe mostrar únicamente los registros que se encuentran dentro de ese rango de fechas"
    },
    {
        "nombre": "CP07 - Filtrado por Estado de Validación",
        "dado": "Dado que el usuario administrativo está en la consulta de LogResultado ValidacionFecha",
        "cuando": "Cuando aplica un filtro por un Estado de validación específico",
        "entonces": "Entonces la tabla de resultados debe mostrar únicamente los registros que coinciden con ese Estado de validación"
    },
    {
        "nombre": "CP08 - Visualización de FechaExpedicion enmascarada",
        "dado": "Dado que el usuario administrativo consulta el LogResultado ValidacionFecha",
        "cuando": "Cuando visualiza la columna FechaExpedicion de un registro",
        "entonces": "Entonces la fecha de expedición debe mostrarse enmascarada en el formato *******YYYY"
    },
    {
        "nombre": "CP09 - Visualización de Request enmascarado",
        "dado": "Dado que el usuario administrativo consulta el LogResultado ValidacionFecha",
        "cuando": "Cuando visualiza la columna Request de un registro",
        "entonces": "Entonces la fecha dentro del campo Request debe mostrarse enmascarada"
    },
    {
        "nombre": "CP10 - Correlación de Identificador GUID",
        "dado": "Dado que un cliente realiza una validación de fecha de expedición",
        "cuando": "Cuando se registra el evento en el log transaccional",
        "entonces": "Entonces el campo Identificador debe corresponder al GUID enviado al servicio web de validación de fecha de expedición"
    }
];
```