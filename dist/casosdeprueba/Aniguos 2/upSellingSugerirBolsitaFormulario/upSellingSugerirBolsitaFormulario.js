```javascript
upSellingSugerirBolsitaFormulario = [
    {
        "nombre": "CP01 - Mostrar recuadro de sugerencia de bolsita en recarga de paquete individual",
        "dado": "Dado que un usuario está recargando un paquete de forma individual",
        "cuando": "Cuando el paquete está configurado para mostrar el carrusel de bolsitas sugeridas",
        "entonces": "Entonces se debe incluir dentro del formulario un recuadro para sugerirle una bolsita de datos, siguiendo el diseño especificado."
    },
    {
        "nombre": "CP02 - Actualizar resumen de compra al seleccionar bolsita de datos",
        "dado": "Dado que un usuario está recargando un paquete y ha seleccionado una bolsita de datos sugerida",
        "cuando": "Cuando la bolsita de datos es añadida a la transacción",
        "entonces": "Entonces el resumen de la compra debe actualizarse para reflejar el nuevo monto total."
    },
    {
        "nombre": "CP03 - No mostrar sugerencia de bolsita para plan familiar",
        "dado": "Dado que un usuario está recargando un paquete asociado a un plan familiar",
        "cuando": "Cuando se muestra el formulario de recarga",
        "entonces": "Entonces el recuadro para sugerir una bolsita de datos no debe ser visible."
    },
    {
        "nombre": "CP04 - No mostrar sugerencia de bolsita si ya se recarga una bolsita de datos",
        "dado": "Dado que un usuario está realizando una recarga que ya es una bolsita de datos",
        "cuando": "Cuando se muestra el formulario de recarga",
        "entonces": "Entonces el recuadro para sugerir una bolsita de datos adicional no debe ser visible."
    },
    {
        "nombre": "CP05 - Modificar monto a pagar con bolsita y medio de pago válido",
        "dado": "Dado que un usuario ha añadido una bolsita de datos sugerida a su transacción",
        "cuando": "Cuando selecciona un medio de pago que no es Plata ni Puntos",
        "entonces": "Entonces el monto a pagar debe modificarse para incluir el valor de la bolsita de datos."
    },
    {
        "nombre": "CP06 - Continuar a resumen sin pop up al pagar con Puntos Colombia y bolsita",
        "dado": "Dado que un usuario ha añadido una bolsita de datos sugerida a su compra",
        "cuando": "Cuando selecciona 'Puntos Colombia' como medio de pago",
        "entonces": "Entonces el sistema debe continuar directamente al resumen de la compra para pagar solo con puntos sin mostrar el pop up de selección."
    },
    {
        "nombre": "CP07 - Validar puntos insuficientes al pagar con Puntos Colombia y bolsita",
        "dado": "Dado que un usuario ha seleccionado un paquete y una bolsita de datos sugerida",
        "cuando": "Cuando intenta pagar la transacción utilizando 'Puntos Colombia' y no tiene puntos suficientes para el total de la compra",
        "entonces": "Entonces el sistema debe impedir la redención y mostrar un mensaje de error por puntos insuficientes."
    },
    {
        "nombre": "CP08 - Validar puntos suficientes al pagar con Puntos Colombia y bolsita",
        "dado": "Dado que un usuario ha seleccionado un paquete y una bolsita de datos sugerida",
        "cuando": "Cuando intenta pagar la transacción utilizando 'Puntos Colombia' y tiene puntos suficientes para el total de la compra",
        "entonces": "Entonces la transacción debe proceder correctamente con la redención de puntos."
    },
    {
        "nombre": "CP09 - Permitir solo una bolsita sugerida por transacción",
        "dado": "Dado que un usuario ha seleccionado una bolsita de datos sugerida para su transacción",
        "cuando": "Cuando intenta seleccionar o agregar una segunda bolsita de datos sugerida",
        "entonces": "Entonces el sistema debe impedir la adición de una segunda bolsita."
    },
    {
        "nombre": "CP10 - Inactivar botones de agregar bolsita tras selección",
        "dado": "Dado que el carrusel de bolsitas sugeridas está visible con múltiples opciones",
        "cuando": "Cuando el usuario selecciona una bolsita de datos del carrusel",
        "entonces": "Entonces los botones 'Agregar bolsita' de las demás opciones del carrusel deben inactivarse."
    },
    {
        "nombre": "CP11 - Carrusel de bolsitas activo para paquetes configurados por CM",
        "dado": "Dado que un usuario está recargando un paquete que ha sido configurado en el CM para tener el carrusel de bolsitas activo",
        "cuando": "Cuando el usuario visualiza el formulario de recarga",
        "entonces": "Entonces el carrusel de bolsitas de datos sugeridas debe ser visible y funcional."
    },
    {
        "nombre": "CP12 - Carrusel de bolsitas inactivo para paquetes no configurados por CM",
        "dado": "Dado que un usuario está recargando un paquete que NO ha sido configurado en el CM para tener el carrusel de bolsitas activo",
        "cuando": "Cuando el usuario visualiza el formulario de recarga",
        "entonces": "Entonces el carrusel de bolsitas de datos sugeridas no debe ser visible."
    }
];
```