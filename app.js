const display = document.getElementById('display');

function press(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function delLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // eval is okay for a simple calculator, but 
        // it's better to sanitize it in real apps.
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
        setTimeout(clearDisplay, 1500);
    }
}
