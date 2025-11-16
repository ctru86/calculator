function add(a,b) {
  return a + b;
};

function subtract (a, b) {
  return a - b;
};

function multiply (a, b) {
  return a * b;  
};

function divide (a, b) {
  return a / b; 
};

let firstNum = 4.6
let operator = "+"
let secondNum = 5

function calculate(a, operator, b) {
    console.log(a)
    console.log(operator)
    console.log(b)
    if (operator === "+") {
        console.log("= " + add(a,b));
    }
    if (operator === "-") {
        console.log("= " + subtract(a,b));
    }
    if (operator === "*") {
        console.log("= " + multiply(a,b));
    }
    if (operator === "/") {
        console.log("= " + divide(a,b));
    }
}

calculate(firstNum, operator, secondNum)

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let displayValue = '0';
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent;
        if (buttonText === '=') {
            calculateResult();
        } else if (buttonText === '⌫') {
            displayValue = displayValue.slice(0, -1) || '0';
        } else {
            if (displayValue === '0') {
                displayValue = buttonText;
            } else {
                displayValue += buttonText;
            }
        }
        display.textContent = displayValue;
    });
});

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
        display.textContent = displayValue;
    } catch (error) {
        display.textContent = 'Error';
        displayValue = '0';
    }
}

