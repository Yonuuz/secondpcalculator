let displayValue = "0";

const displayElement = document.querySelector('.display');

function updateDisplay() {
    displayElement.value = displayValue;
}

function appendValue(char) {
    if (displayValue === "0" && char !== ".") {
        displayValue = char;
    } else {
        displayValue += char;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = "0";
    updateDisplay();
}

function deleteLast() {
    if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, -1);
    } else {
        displayValue = "0";
    }
    updateDisplay();
}

function calculate() {
    try {
        let expression = displayValue.replace(/×/g, '*').replace(/÷/g, '/');
        let result = eval(expression);
        
        displayValue = Number.isInteger(result) ? result.toString() : result.toFixed(4).toString();
        
        updateDisplay();
    } catch (error) {
        displayValue = "Error";
        updateDisplay();
        setTimeout(clearDisplay, 1500);
    }
}