mejorasDebitoAutomaticaV6 = [
    {
        "nombre": "CP01 - Sugerencia de fecha y ocultamiento de texto para cliente desde portal transaccional",
        "dado": "Dado que un cliente nuevo o existente ingresa al débito automático desde el banner del portal transaccional después de comprar un paquete",
        "cuando": "Cuando se carga la interfaz de configuración del débito automático",
        "entonces": "Entonces se le sugiere la fecha de recarga 'hoy + 30 días' y no se muestra el texto adicional de la fecha de la recarga"
    },
    {
        "nombre": "CP02 - Visualización de mensaje de hora al cambiar paquete o fecha (portal transaccional)",
        "dado": "Dado que un cliente ingresó al débito automático desde el portal transaccional y se le sugirió la fecha de recarga",
        "cuando": "Cuando el cliente modifica el paquete seleccionado o cambia la fecha de recarga sugerida",
        "entonces": "Entonces se muestra el mensaje 'la recarga se hará entre las 8 y 10 am'"
    },
    {
        "nombre": "CP03 - Consistencia de información en correo de activación",
        "dado": "Dado que un cliente activa el débito automático y se le muestra un resumen en el front",
        "cuando": "Cuando el sistema envía el correo de confirmación de activación",
        "entonces": "Entonces el contenido del correo de activación es consistente con la información mostrada en el front"
    },
    {
        "nombre": "CP04 - Comportamiento de fecha y hora para cliente desde portal autogestión",
        "dado": "Dado que un cliente ingresa al débito automático desde el portal de autogestión",
        "cuando": "Cuando se carga la interfaz de configuración del débito automático",
        "entonces": "Entonces se muestra el texto de la hora de la recarga 'entre las 8 y 10 am' y no se le sugiere una fecha de recarga"
    },
    {
        "nombre": "CP05 - Verificación de tilde en Débito Automático",
        "dado": "Dado que el cliente navega por las diferentes pantallas y mensajes de la experiencia de débito automático",
        "cuando": "Cuando se visualizan los textos relacionados con 'débito automático'",
        "entonces": "Entonces la palabra 'débito automático' siempre se muestra con tilde en la 'e' de 'Débito'"
    },
    {
        "nombre": "CP06 - Cambio de texto en botón u opción 'Inscribir línea'",
        "dado": "Dado que el cliente se encuentra en la sección donde se muestra la opción para inscribir una nueva línea",
        "cuando": "Cuando el cliente visualiza la opción para añadir una línea",
        "entonces": "Entonces el texto 'Inscribir línea' ha sido reemplazado por 'Otra línea'"
    },
    {
        "nombre": "CP07 - Resaltado del botón 'Activar débito automático' al completar campos",
        "dado": "Dado que el cliente se encuentra en el formulario de débito automático",
        "cuando": "Cuando todos los campos obligatorios del formulario son completados",
        "entonces": "Entonces el botón 'Activar débito automático' se resalta visiblemente para indicar al cliente que puede finalizar el proceso"
    },
    {
        "nombre": "CP08 - Mantenimiento de opción de modificación después de completar campos",
        "dado": "Dado que el cliente ha completado todos los campos obligatorios del formulario de débito automático y el botón 'Activar débito automático' está resaltado",
        "cuando": "Cuando el cliente decide no activar y vuelve a modificar algún campo",
        "entonces": "Entonces el formulario permite la modificación de los campos sin activar el débito automático automáticamente"
    },
    {
        "nombre": "CP09 - Visualización inicial de paquetes para cliente desde portal transaccional",
        "dado": "Dado que un cliente ingresa al débito automático desde el portal transaccional después de comprar un paquete",
        "cuando": "Cuando se carga la interfaz de selección de paquetes",
        "entonces": "Entonces se muestra directamente el carrusel de paquetes con el paquete comprado por el cliente seleccionado por defecto y no se muestra el tarjetón del paquete por separado"
    },
    {
        "nombre": "CP10 - Cambio de paquete y actualización de resumen (portal transaccional)",
        "dado": "Dado que el cliente se encuentra en la interfaz de débito automático desde el portal transaccional con el carrusel de paquetes visible y el paquete comprado seleccionado",
        "cuando": "Cuando el cliente selecciona un paquete diferente en el carrusel",
        "entonces": "Entonces el resumen del débito automático se actualiza para reflejar la información del paquete recién seleccionado"
    },
    {
        "nombre": "CP11 - Mantenimiento de texto 'selecciono paquete' (portal transaccional)",
        "dado": "Dado que el cliente está en la interfaz de débito automático desde el portal transaccional",
        "cuando": "Cuando se visualiza el proceso de selección de paquetes",
        "entonces": "Entonces el texto 'selecciono paquete' se mantiene visible y funcional"
    },
    {
        "nombre": "CP12 - Visualización inicial de paquetes para cliente desde portal autogestión",
        "dado": "Dado que un cliente ingresa al débito automático desde el portal de autogestión",
        "cuando": "Cuando se carga la interfaz de selección de paquetes",
        "entonces": "Entonces se muestra el carrusel de paquetes con un paquete seleccionado por defecto"
    },
    {
        "nombre": "CP13 - Eliminación del botón 'Cambiar' en la selección de paquetes",
        "dado": "Dado que el cliente se encuentra en la interfaz de selección de paquetes para el débito automático",
        "cuando": "Cuando el cliente interactúa con los paquetes disponibles",
        "entonces": "Entonces el botón 'Cambiar' asociado a los paquetes ha sido eliminado y la selección se realiza únicamente a través del carrusel"
    }
];