```javascript
mejorasFechaExpedicion = [
    {
        "nombre": "CP01 - Indicador de carga al continuar",
        "dado": "Dado que el usuario ha ingresado los datos en el formulario de validación de SIM Card.",
        "cuando": "Cuando hace clic en el botón Continuar.",
        "entonces": "Entonces se muestra un spinner con el texto 'Cargando...' indicando que la solicitud está en proceso."
    },
    {
        "nombre": "CP02 - Reintento de validación con datos precargados",
        "dado": "Dado que el usuario se encuentra en el modal de 'Validación no exitosa'.",
        "cuando": "Cuando hace clic en el botón Reintentar.",
        "entonces": "Entonces es redirigido al formulario de validación de SIM Card con los datos previamente ingresados precargados."
    },
    {
        "nombre": "CP03 - Mensaje para línea sin pendiente de validación",
        "dado": "Dado que un registro de cliente tiene un EstadoValidacionFExp diferente de Pendiente_validacion_Cliente Bloqueado o No Existe y el sistema intentó validar la línea.",
        "cuando": "Cuando el modal de error se muestra después de un intento de validación.",
        "entonces": "Entonces el modal muestra un ícono de warning junto al mensaje 'Los datos ingresados no tienen ningún pendiente de validacion.'."
    },
    {
        "nombre": "CP04 - Modal de procesamiento durante validación OTP",
        "dado": "Dado que el usuario ha ingresado el código OTP.",
        "cuando": "Cuando el sistema está validando el código OTP.",
        "entonces": "Entonces se muestra un modal con el texto 'Procesando...' en lugar de 'Validando OTP'."
    }
];
```