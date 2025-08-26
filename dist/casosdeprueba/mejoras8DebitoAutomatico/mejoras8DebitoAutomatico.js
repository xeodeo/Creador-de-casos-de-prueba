mejoras8DebitoAutomatico = [
    {
        "nombre": "CP01 - Indicador de interactividad en selección de paquete",
        "dado": "Dado que el usuario se encuentra en la sección de selección de paquetes.",
        "cuando": "Cuando el puntero del mouse se posiciona sobre un paquete en el carrusel.",
        "entonces": "Entonces el puntero cambia a un ícono de mano indicando que el paquete es seleccionable."
    },
    {
        "nombre": "CP02 - Feedback visual al hacer clic en paquete",
        "dado": "Dado que el usuario ha posicionado el puntero sobre un paquete en el carrusel y este ha cambiado a ícono de mano.",
        "cuando": "Cuando el usuario hace clic en un paquete específico del carrusel.",
        "entonces": "Entonces el recuadro del paquete seleccionado muestra una sombrita sutil como feedback visual."
    },
    {
        "nombre": "CP03 - Selección exitosa de paquete con feedback",
        "dado": "Dado que el usuario ha hecho clic en un paquete y este muestra la sombrita de selección.",
        "cuando": "Cuando el usuario procede a la siguiente etapa después de la selección del paquete.",
        "entonces": "Entonces el sistema registra correctamente el paquete seleccionado y permite continuar con el proceso."
    },
    {
        "nombre": "CP04 - Ausencia de opción para modificar tarjeta de crédito",
        "dado": "Dado que el usuario ha ingresado una tarjeta de crédito en la sección de medio de pago.",
        "cuando": "Cuando el usuario revisa las opciones disponibles para la tarjeta de crédito ya ingresada.",
        "entonces": "Entonces no se presenta una opción explícita para modificar los detalles de la tarjeta de crédito."
    },
    {
        "nombre": "CP05 - Visualización de precio con signo pesos",
        "dado": "Dado que el usuario se encuentra en la sección donde se muestran los detalles y el precio de un paquete.",
        "cuando": "Cuando el sistema despliega el precio del paquete.",
        "entonces": "Entonces el precio del paquete debe mostrar el signo de pesos ($) antes del valor numérico."
    },
    {
        "nombre": "CP06 - Etiqueta 'tarjeta' con 't' minúscula",
        "dado": "Dado que el usuario navega a la sección de configuración o visualización del medio de pago.",
        "cuando": "Cuando el sistema muestra la palabra 'tarjeta' en cualquier contexto como etiqueta o descripción.",
        "entonces": "Entonces la palabra 'tarjeta' aparece escrita con la 't' en minúscula."
    }
];