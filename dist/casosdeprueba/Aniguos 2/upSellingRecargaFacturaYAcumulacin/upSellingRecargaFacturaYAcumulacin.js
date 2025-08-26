```javascript
upSellingRecargaFacturaAcumulacion = [
    {
        "nombre": "CP01 - Recarga y facturación exitosa de paquete y bolsita",
        "dado": "Dado que el pago ha sido confirmado exitosamente en la pasarela seleccionada por el usuario.",
        "cuando": "Cuando el sistema procesa la transacción de upselling.",
        "entonces": "Entonces el paquete se recarga la bolsita sugerida se recarga utilizando su PLU y precio de venta el servicio de facturación electrónica se consume para el paquete y para la bolsita."
    },
    {
        "nombre": "CP02 - Acumulación única por monto total pagado",
        "dado": "Dado que se ha confirmado el pago de un paquete y una bolsita sugerida.",
        "cuando": "Cuando el sistema realiza el proceso de acumulación de beneficios.",
        "entonces": "Entonces la acumulación es única y se basa en el monto total pagado."
    },
    {
        "nombre": "CP03 - Aplicación de cupón de descuento solo al paquete",
        "dado": "Dado que existe un cupón de descuento válido para la compra.",
        "cuando": "Cuando el usuario aplica el cupón durante el proceso de compra.",
        "entonces": "Entonces el cupón de descuento se aplica únicamente a la compra del paquete."
    },
    {
        "nombre": "CP04 - Registro del valor del cupón en el log del paquete",
        "dado": "Dado que un cupón de descuento fue aplicado a la compra del paquete.",
        "cuando": "Cuando se consulta el log de la recarga del paquete.",
        "entonces": "Entonces el valor del cupón de descuento aparece reflejado en el log de la recarga del paquete."
    },
    {
        "nombre": "CP05 - Envío del descuento en la factura electrónica del paquete",
        "dado": "Dado que un cupón de descuento fue aplicado al paquete.",
        "cuando": "Cuando se consume el servicio de facturación electrónica para el paquete.",
        "entonces": "Entonces el valor del descuento se envía en la facturación electrónica del paquete."
    },
    {
        "nombre": "CP06 - Bolsita enviada sin descuento en la factura electrónica",
        "dado": "Dado que un cupón de descuento fue aplicado al paquete pero no a la bolsita sugerida.",
        "cuando": "Cuando se consume el servicio de facturación electrónica para la bolsita.",
        "entonces": "Entonces la bolsita se envía sin descuento en su facturación electrónica."
    }
];
```