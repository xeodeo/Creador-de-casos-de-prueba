upSellingLogsRecargasYFacturas = [
    {
        "nombre": "CP01 - Registro de recarga de bolsita sugerida en logs de recargas",
        "dado": "Dado que el usuario ha realizado la compra de una bolsita sugerida",
        "cuando": "Cuando el sistema procesa la transacción de la recarga",
        "entonces": "Entonces la transacción de la recarga de la bolsita sugerida se registra correctamente en los logs de recargas."
    },
    {
        "nombre": "CP02 - Registro de recarga de bolsita sugerida en logs de facturación electrónica",
        "dado": "Dado que el usuario ha realizado la compra de una bolsita sugerida",
        "cuando": "Cuando el sistema procesa la transacción de la recarga y genera la factura electrónica",
        "entonces": "Entonces la transacción de la recarga de la bolsita sugerida se registra correctamente en los logs de facturación electrónica."
    },
    {
        "nombre": "CP03 - Filtro de búsqueda por tipo de paquete 'Bolsitas' disponible",
        "dado": "Dado que el usuario se encuentra en la interfaz de búsqueda de logs de recargas",
        "cuando": "Cuando el usuario accede a las opciones de filtro por tipo de paquete",
        "entonces": "Entonces la opción 'Bolsitas' está disponible para seleccionar dentro de los tipos de paquete."
    },
    {
        "nombre": "CP04 - Nuevo filtro para clasificar 'Bolsitas de datos' o 'Bolsitas sugeridas'",
        "dado": "Dado que el usuario se encuentra en la interfaz de búsqueda de logs de recargas",
        "cuando": "Cuando el usuario busca un filtro para especificar el tipo de bolsita",
        "entonces": "Entonces un nuevo filtro permite seleccionar entre 'Bolsitas de datos' y 'Bolsitas sugeridas'."
    },
    {
        "nombre": "CP05 - Columna indicadora de tipo de bolsita en logs de recargas",
        "dado": "Dado que el usuario consulta el listado de transacciones en los logs de recargas",
        "cuando": "Cuando el usuario revisa las columnas de información de cada registro",
        "entonces": "Entonces una nueva columna en el log indica claramente si la transacción corresponde a una 'Bolsita sugerida' o una 'Bolsita de datos'."
    }
];
