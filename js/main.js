const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

// Recorremos los btn para agregarles un evento
buttons.forEach(btn => {
    btn.addEventListener('click', () => {

        // Asignamos a una variable el contenido del btn
        const pressedBtn = btn.textContent;

        // Al activar el btn C (borrar) le asignamos a display el valor "0"
        if (btn.id === "c") {
            display.textContent = "0";
            return
        };

        // Al activar el btn Delete validamos, si hay 1 solo valor o Error! en display asigana el valor "0", sino va eliminando de a un valor
        if (btn.id === "delete") {
            if (display.textContent.length === 1 || display.textContent === "Error!") {
                display.textContent = "0"
            } else {
                display.textContent = display.textContent.slice(0, -1);
            };
            return
        };

        // Al activar el btn Igual, evalua string y operadores y realiza el cálculo, sino puede da error
        if (btn.id === "equal") {
            try {
                display.textContent = eval(display.textContent);
            } catch {
                display.textContent = "Error!"
            };
            return
        };

        // Validamos si el contenido es "0" o Error! asigna a display el contenido del btn activado, sino va agregando los btn activados
        if (display.textContent === "0" || display.textContent === "Error!") {
            display.textContent = pressedBtn
        } else {
            display.textContent += pressedBtn
        };
    })
})