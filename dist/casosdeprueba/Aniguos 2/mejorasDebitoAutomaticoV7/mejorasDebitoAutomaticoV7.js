mejorasDebitoAutomaticoV7 = [
    {
        "nombre": "CP01 - Manejo de tarjeta ya tokenizada",
        "dado": "Dado que el sistema de Global Pay retorna un mensaje de 'Card already added' durante la tokenización de una tarjeta.",
        "cuando": "Cuando se procesa esta respuesta para una nueva suscripción.",
        "entonces": "Entonces el proceso de tokenización se marca como exitoso y el front-end muestra la tokenización como exitosa."
    },
    {
        "nombre": "CP02 - Registro de respuesta de tokenización con tarjeta existente",
        "dado": "Dado que una tokenización de tarjeta devuelve el mensaje de 'Card already added'.",
        "cuando": "Cuando la respuesta es almacenada en el log de tokenización.",
        "entonces": "Entonces el token se muestra enmascarado al consultar el log."
    },
    {
        "nombre": "CP03 - Validación de suscripción duplicada en front-end",
        "dado": "Dado que un cliente intenta agregar una nueva suscripción.",
        "cuando": "Cuando selecciona la misma línea y el mismo paquete de una suscripción que ya tiene activa.",
        "entonces": "Entonces el sistema muestra un modal indicando 'Ya tienes una suscripción para esta línea con el mismo paquete, por favor validar.'."
    },
    {
        "nombre": "CP04 - Unificación de formato de fechas en logs",
        "dado": "Dado que se generan entradas en los logs del sistema.",
        "cuando": "Cuando se visualizan las fechas de suscripción, compra o transacción en cualquier log.",
        "entonces": "Entonces todas las fechas se muestran en el formato 'Dia, DD/MM/AAAA - HH:MM'."
    },
    {
        "nombre": "CP05 - Renombre de columna de log de tokenización",
        "dado": "Dado que se consulta el log de tokenización.",
        "cuando": "Cuando se visualiza la columna que contiene el token enmascarado.",
        "entonces": "Entonces el título de la columna se muestra como 'Token'."
    },
    {
        "nombre": "CP06 - Renombre de título de Log Errores Suscripción",
        "dado": "Dado que se accede a la sección de logs del sistema.",
        "cuando": "Cuando se visualiza el título del log de errores de suscripción.",
        "entonces": "Entonces el título se muestra como 'Log Errores con API Suscripción'."
    },
    {
        "nombre": "CP07 - Renombre de título de Log Suscripción",
        "dado": "Dado que se accede a la sección de logs del sistema.",
        "cuando": "Cuando se visualiza el título del log de suscripción.",
        "entonces": "Entonces el título se muestra como 'Log Suscripciones'."
    },
    {
        "nombre": "CP08 - Visualización de Próxima Recarga con valor",
        "dado": "Dado que se consulta una suscripción y el valor de Próxima Recarga no es nulo.",
        "cuando": "Cuando se visualizan los detalles de la suscripción.",
        "entonces": "Entonces el campo 'Próxima Recarga' se muestra con su valor."
    },
    {
        "nombre": "CP09 - Ocultamiento de Próxima Recarga sin valor",
        "dado": "Dado que se consulta una suscripción y el valor de Próxima Recarga es nulo.",
        "cuando": "Cuando se visualizan los detalles de la suscripción.",
        "entonces": "Entonces el campo 'Próxima Recarga' no se muestra."
    }
];