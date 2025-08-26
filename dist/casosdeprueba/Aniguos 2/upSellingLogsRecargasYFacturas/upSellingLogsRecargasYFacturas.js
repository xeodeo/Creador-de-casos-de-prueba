upSellingLogsRecargasYFacturas = [
    {
        "nombre": "CP01 - Registro de recarga de bolsita sugerida en log de recargas",
        "dado": "Dado que un usuario ha realizado una recarga exitosa de una bolsita sugerida.",
        "cuando": "Cuando el sistema procesa la transacción de la recarga.",
        "entonces": "Entonces la transacción de la recarga de la bolsita sugerida se guarda correctamente en los logs de recargas."
    },
    {
        "nombre": "CP02 - Registro de recarga de bolsita sugerida en log de facturación electrónica",
        "dado": "Dado que un usuario ha realizado una recarga exitosa de una bolsita sugerida.",
        "cuando": "Cuando el sistema genera la factura electrónica asociada a la recarga.",
        "entonces": "Entonces la transacción de la recarga de la bolsita sugerida se guarda correctamente en los logs de facturación electrónica."
    },
    {
        "nombre": "CP03 - Inclusión de bolsitas sugeridas en filtro de tipo de paquete",
        "dado": "Dado que la Coordinadora de mercadeo accede a la interfaz de búsqueda de logs de recargas.",
        "cuando": "Cuando visualiza las opciones del filtro de tipo de paquete.",
        "entonces": "Entonces la opción 'Bolsitas Sugeridas' está disponible para selección."
    },
    {
        "nombre": "CP04 - Filtrado exitoso por bolsitas sugeridas en log de recargas por tipo de paquete",
        "dado": "Dado que la Coordinadora de mercadeo accede a la interfaz de búsqueda de logs de recargas con transacciones de bolsitas sugeridas existentes.",
        "cuando": "Cuando selecciona la opción 'Bolsitas Sugeridas' en el filtro de tipo de paquete y aplica la búsqueda.",
        "entonces": "Entonces la lista de logs de recargas muestra únicamente las recargas correspondientes a bolsitas sugeridas."
    },
    {
        "nombre": "CP05 - Nuevo filtro para seleccionar tipo de bolsita en log de recargas",
        "dado": "Dado que la Coordinadora de mercadeo accede a la interfaz de logs de recargas.",
        "cuando": "Cuando examina los filtros disponibles.",
        "entonces": "Entonces encuentra un nuevo filtro que permite seleccionar entre 'Bolsitas de Datos' y 'Bolsitas Sugeridas'."
    },
    {
        "nombre": "CP06 - Filtrado exitoso por bolsitas de datos usando el nuevo filtro",
        "dado": "Dado que la Coordinadora de mercadeo accede a la interfaz de logs de recargas y el nuevo filtro de tipo de bolsita está disponible.",
        "cuando": "Cuando selecciona la opción 'Bolsitas de Datos' en el nuevo filtro de tipo de bolsita y aplica la búsqueda.",
        "entonces": "Entonces la lista de logs de recargas muestra únicamente las recargas correspondientes a bolsitas de datos."
    },
    {
        "nombre": "CP07 - Filtrado exitoso por bolsitas sugeridas usando el nuevo filtro",
        "dado": "Dado que la Coordinadora de mercadeo accede a la interfaz de logs de recargas y el nuevo filtro de tipo de bolsita está disponible.",
        "cuando": "Cuando selecciona la opción 'Bolsitas Sugeridas' en el nuevo filtro de tipo de bolsita y aplica la búsqueda.",
        "entonces": "Entonces la lista de logs de recargas muestra únicamente las recargas correspondientes a bolsitas sugeridas."
    },
    {
        "nombre": "CP08 - Columna de tipo de bolsita visible en logs de recarga",
        "dado": "Dado que la Coordinadora de mercadeo visualiza la tabla de logs de recargas.",
        "cuando": "Cuando examina las columnas de la tabla de resultados.",
        "entonces": "Entonces existe una nueva columna que indica si cada recarga corresponde a una 'Bolsita Sugerida' o una 'Bolsita de Datos'."
    }
];