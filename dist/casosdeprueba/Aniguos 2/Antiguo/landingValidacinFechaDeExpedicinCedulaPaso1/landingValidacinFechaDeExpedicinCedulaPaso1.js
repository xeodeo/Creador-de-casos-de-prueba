landingValidacionFechaExpedicionCedulaPaso1 = [
    {
        "nombre": "CP01 - Acceso exitoso a la página de validación",
        "dado": "Dado que un usuario se encuentra en el portal transaccional",
        "cuando": "Cuando navega al menú y hace clic en el enlace 'Validación Simcard'",
        "entonces": "Entonces es redirigido a la nueva landing de validación de fecha de expedición de cédula, mostrando el header, los campos 'Línea móvil éxito', 'Cédula', 'Fecha expedición', un botón 'Continuar' y un captcha"
    },
    {
        "nombre": "CP02 - Validación de entrada: Cédula no numérica",
        "dado": "Dado que el usuario se encuentra en la landing de validación de fecha de expedición de cédula",
        "cuando": "Cuando ingresa caracteres no numéricos en el campo 'Cédula' y los demás campos son válidos y hace clic en 'Continuar'",
        "entonces": "Entonces el sistema muestra un mensaje de error indicando que la cédula debe ser numérica y no procede con la validación"
    },
    {
        "nombre": "CP03 - Validación de entrada: Fecha de expedición en formato inválido",
        "dado": "Dado que el usuario se encuentra en la landing de validación de fecha de expedición de cédula",
        "cuando": "Cuando ingresa una fecha en formato incorrecto, por ejemplo '30-12-2000' o '12/30/2000', en el campo 'Fecha expedición' y los demás campos son válidos y hace clic en 'Continuar'",
        "entonces": "Entonces el sistema muestra un mensaje de error indicando el formato correcto (dd/mm/yyyy) y no procede con la validación"
    },
    {
        "nombre": "CP04 - Validación de entrada: Campos obligatorios vacíos",
        "dado": "Dado que el usuario se encuentra en la landing de validación de fecha de expedición de cédula",
        "cuando": "Cuando intenta hacer clic en 'Continuar' dejando uno o más campos obligatorios (línea, cédula, fecha de expedición) vacíos o sin diligenciar el captcha",
        "entonces": "Entonces el sistema muestra mensajes de error indicando los campos faltantes y no permite el avance"
    },
    {
        "nombre": "CP05 - Flujo exitoso: Línea y cédula requieren validación",
        "dado": "Dado que el usuario se encuentra en la landing de validación de fecha de expedición de cédula y ha ingresado datos válidos",
        "cuando": "Cuando el sistema consulta el servicio 'GetEstadoValidacionFechaExp' y este responde que la línea efectivamente se encuentra pendiente de validación, y los intentos no han superado el límite",
        "entonces": "Entonces el sistema avanza al siguiente paso del proceso de validación o muestra una confirmación de que la línea requiere validación"
    },
    {
        "nombre": "CP06 - Flujo exitoso: Línea y cédula no requieren validación",
        "dado": "Dado que el usuario se encuentra en la landing de validación de fecha de expedición de cédula y ha ingresado datos válidos",
        "cuando": "Cuando el sistema consulta el servicio 'GetEstadoValidacionFechaExp' y este responde que la línea no requiere validación (estado: 'NoValidar')",
        "entonces": "Entonces el sistema muestra un mensaje informativo indicando que la línea no necesita validación y no procede con pasos adicionales"
    },
    {
        "nombre": "CP07 - Conteo de intentos: Primer intento fallido",
        "dado": "Dado que el usuario se encuentra en la landing de validación de fecha de expedición de cédula",
        "cuando": "Cuando ingresa datos que resultan en una validación fallida (ej. fecha de expedición incorrecta o servicio 'GetEstadoValidacionFechaExp' indica un estado que no permite avanzar) por primera vez para una línea y cédula específicas",
        "entonces": "Entonces el sistema registra el intento fallido y permite al usuario reintentar"
    },
    {
        "nombre": "CP08 - Conteo de intentos: Segundo intento fallido",
        "dado": "Dado que el usuario ya realizó un intento fallido para una línea y cédula específicas",
        "cuando": "Cuando vuelve a ingresar datos incorrectos o que resultan en una validación fallida por segunda vez para la misma línea y cédula",
        "entonces": "Entonces el sistema registra el segundo intento fallido y permite al usuario un intento adicional"
    },
    {
        "nombre": "CP09 - Conteo de intentos: Tercer intento fallido (bloqueo)",
        "dado": "Dado que el usuario ya realizó dos intentos fallidos para una línea y cédula específicas",
        "cuando": "Cuando intenta ingresar datos por tercera vez para la misma línea y cédula, y la validación resulta nuevamente fallida",
        "entonces": "Entonces el sistema muestra el mensaje 'Por favor comunicarse con la línea de atención al cliente' y bloquea nuevos intentos para esa combinación de línea y cédula"
    },
    {
        "nombre": "CP10 - Validación de Captcha: Captcha incorrecto",
        "dado": "Dado que el usuario se encuentra en la landing de validación de fecha de expedición de cédula con todos los demás datos correctos",
        "cuando": "Cuando ingresa un Captcha incorrecto o no lo resuelve correctamente y hace clic en 'Continuar'",
        "entonces": "Entonces el sistema muestra un mensaje de error indicando que el Captcha es incorrecto y no procede con la validación"
    },
    {
        "nombre": "CP11 - Validación de Captcha: Captcha correcto",
        "dado": "Dado que el usuario se encuentra en la landing de validación de fecha de expedición de cédula con todos los demás datos correctos",
        "cuando": "Cuando ingresa un Captcha correcto y hace clic en 'Continuar'",
        "entonces": "Entonces el sistema procede con las validaciones de negocio y la llamada a los servicios web, siempre que los demás datos sean válidos"
    },
    {
        "nombre": "CP12 - Manejo de datos 'ErrorGeneral' en LogResultadoValidacionFecha",
        "dado": "Dado que existe un registro en el 'LogResultado ValidacionFecha' para la línea y cédula ingresadas",
        "cuando": "Cuando el estado de ese registro es 'ErrorGeneral'",
        "entonces": "Entonces el sistema ignora ese registro y continúa con las demás validaciones, incluyendo la consulta al servicio 'GetEstadoValidacionFechaExp'"
    },
    {
        "nombre": "CP13 - Consumo de servicio 'GetEstadoValidacionFechaExp' con token",
        "dado": "Dado que el usuario ha ingresado datos válidos en la landing",
        "cuando": "Cuando el sistema intenta consumir el servicio 'GetEstadoValidacionFechaExp'",
        "entonces": "Entonces el sistema utiliza el token parametrizable de forma correcta para la autenticación del servicio"
    }
];