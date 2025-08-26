```js
upSellingBolsitasDeDatos = [
    {
        "nombre": "CP01 - Bolsita sugerida no visible en parrillas de producto",
        "dado": "Dado que existe una bolsita de datos marcada como sugerida exclusiva en el sistema",
        "cuando": "Cuando un usuario navega por las parrillas de producto estándar",
        "entonces": "Entonces la bolsita de datos sugerida no debe aparecer listada."
    },
    {
        "nombre": "CP02 - Bolsita sugerida no visible en paquetes",
        "dado": "Dado que existe una bolsita de datos marcada como sugerida exclusiva",
        "cuando": "Cuando un usuario revisa la composición o detalles de los paquetes de datos estándar",
        "entonces": "Entonces la bolsita de datos sugerida no debe aparecer como parte de ningún paquete."
    },
    {
        "nombre": "CP03 - Bolsita sugerida no visible en landing de bolsitas",
        "dado": "Dado que existe una bolsita de datos marcada como sugerida exclusiva",
        "cuando": "Cuando un usuario accede a la nueva landing de bolsitas de datos",
        "entonces": "Entonces la bolsita de datos sugerida no debe ser visible en esta página."
    },
    {
        "nombre": "CP04 - Bolsita sugerida no visible en otra categoría",
        "dado": "Dado que existe una bolsita de datos marcada como sugerida exclusiva",
        "cuando": "Cuando un usuario navega por otras categorías de productos o servicios",
        "entonces": "Entonces la bolsita de datos sugerida no debe aparecer en ninguna otra categoría."
    },
    {
        "nombre": "CP05 - Parametrización de bolsita sugerida exclusiva",
        "dado": "Dado que un administrador ha accedido al módulo de configuración de productos",
        "cuando": "Cuando el administrador selecciona una bolsita de datos y la marca como sugerida exclusiva para el carrusel de up selling",
        "entonces": "Entonces la bolsita de datos debe ser correctamente registrada y aparecerá únicamente en el carrusel de up selling."
    },
    {
        "nombre": "CP06 - No permite eliminar paquete con bolsita sugerida",
        "dado": "Dado que un usuario ha agregado un paquete y una bolsita sugerida exclusiva a su carrito de compra",
        "cuando": "Cuando el usuario intenta eliminar el paquete del carrito",
        "entonces": "Entonces el sistema no debe permitir la eliminación del paquete."
    },
    {
        "nombre": "CP07 - Compra exitosa de bolsita sugerida con paquete",
        "dado": "Dado que un usuario tiene un paquete y una bolsita sugerida exclusiva en su carrito de compra",
        "cuando": "Cuando el usuario procede a finalizar la compra",
        "entonces": "Entonces el sistema debe permitir la compra conjunta del paquete y la bolsita sugerida."
    },
    {
        "nombre": "CP08 - No permite comprar bolsita sugerida sin paquete",
        "dado": "Dado que un usuario ha agregado solo una bolsita sugerida exclusiva a su carrito de compra",
        "cuando": "Cuando el usuario intenta finalizar la compra",
        "entonces": "Entonces el sistema debe impedir la compra de la bolsita sugerida y solicitar la adición de un paquete."
    },
    {
        "nombre": "CP09 - Eliminar bolsita sugerida en resumen de compra",
        "dado": "Dado que un usuario ha agregado un paquete y una bolsita sugerida exclusiva a su carrito de compra",
        "cuando": "Cuando el usuario visualiza el resumen de la compra y hace clic en el icono de papelera junto a la bolsita de datos",
        "entonces": "Entonces la bolsita de datos sugerida debe ser eliminada exitosamente del carrito."
    }
];
```