noAbrirPestanasNuevas = [
    {
        "nombre": "CP01 - Navegación en misma pestaña al hacer clic en banner de escritorio",
        "dado": "Dado que el usuario está navegando la página web desde un dispositivo de escritorio. Existe al menos un banner visible en la página.",
        "cuando": "Cuando el usuario hace clic en cualquiera de los banners disponibles en la página.",
        "entonces": "Entonces el contenido enlazado al banner se carga en la misma pestaña del navegador sin abrir una pestaña nueva."
    },
    {
        "nombre": "CP02 - Comportamiento consistente para múltiples banners de escritorio",
        "dado": "Dado que el usuario está en la página web usando un dispositivo de escritorio. Existen múltiples banners diferentes en la página.",
        "cuando": "Cuando el usuario hace clic sucesivamente en varios banners distintos de la página.",
        "entonces": "Entonces cada clic en un banner redirige a la página correspondiente cargándola en la misma pestaña, sin que se abra ninguna pestaña nueva en ningún caso."
    }
];