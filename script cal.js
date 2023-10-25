
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Use the eval() function to evaluate the expression in the display
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

document.getElementById('clear').addEventListener('click', clearDisplay);
document.getElementById('calculate').addEventListener('click', calculateResult);

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        const value = button.textContent;
        appendToDisplay(value);
    });
});
