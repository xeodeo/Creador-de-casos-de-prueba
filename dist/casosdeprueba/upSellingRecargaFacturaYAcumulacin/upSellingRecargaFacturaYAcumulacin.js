```javascript
upSellingRecargaFacturaAcumulacion = [
    {
        "nombre": "CP01 - Recarga y facturación exitosa sin cupón",
        "dado": "Dado que el usuario selecciona un paquete y una bolsita sugerida. El pago se confirma exitosamente en la pasarela de pago sin aplicar cupón de descuento.",
        "cuando": "Cuando el sistema procesa la transacción de compra.",
        "entonces": "Entonces el paquete es recargado. La bolsita sugerida es recargada con su PLU y precio de venta específicos. Se consume el servicio de facturación electrónica para el paquete. Se consume el servicio de facturación electrónica para la bolsita. La acumulación se realiza una única vez por el monto total pagado."
    },
    {
        "nombre": "CP02 - Recarga y facturación con cupón aplicado",
        "dado": "Dado que el usuario selecciona un paquete y una bolsita sugerida. Ha aplicado un cupón de descuento válido al paquete. El pago se confirma exitosamente en la pasarela de pago.",
        "cuando": "Cuando el sistema procesa la transacción de compra.",
        "entonces": "Entonces el paquete es recargado y el valor del cupón aparece en el log de recarga del paquete. La bolsita sugerida es recargada con su PLU y precio de venta específicos. Se consume el servicio de facturación electrónica para el paquete incluyendo el valor del descuento. Se consume el servicio de facturación electrónica para la bolsita sin aplicar descuento. La acumulación se realiza una única vez por el monto total pagado después del descuento."
    },
    {
        "nombre": "CP03 - Verificación de parámetros de bolsita sugerida",
        "dado": "Dado que el usuario compra un paquete y una bolsita sugerida. El pago se confirma exitosamente.",
        "cuando": "Cuando el sistema realiza la recarga de la bolsita sugerida.",
        "entonces": "Entonces la recarga de la bolsita utiliza el PLU y el precio de venta correctos definidos para la bolsita."
    },
    {
        "nombre": "CP04 - Acumulación única por monto total pagado",
        "dado": "Dado que el usuario compra un paquete y una bolsita sugerida con o sin cupón de descuento. El pago se confirma exitosamente.",
        "cuando": "Cuando el sistema procesa la acumulación de puntos o beneficios por la compra.",
        "entonces": "Entonces se realiza una única acumulación que corresponde al monto total final pagado por el usuario."
    }
];
```