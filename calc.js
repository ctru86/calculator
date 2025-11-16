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


const calculate = function(a, operator, b) {
    console.log(a)
    console.log(operator)
    console.log(b)
    if (operator === "+") {
        return("= " + add(a,b));
    }
    if (operator === "-") {
        return("= " + subtract(a,b));
    }
    if (operator === "*") {
        return("= " + multiply(a,b));
    }
    if (operator === "/") {
        return("= " + divide(a,b));
    }
}

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let displayValue = '0';
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent;
         if (buttonText === '=') {
            
            const operators = ['+', '-', '*', '/'];
            let operator = '';
            let operatorIndex = -1;
            
            for (let op of operators) {
                operatorIndex = displayValue.indexOf(op);
                if (operatorIndex > 0) {                      operator = op;
                    break;
                }
            }
            
            if (operator && operatorIndex > 0) {
                
                const num1 = parseFloat(displayValue.substring(0, operatorIndex));
                const num2 = parseFloat(displayValue.substring(operatorIndex + 1));
                
               
                const result = calculate(num1, operator, num2);
                displayValue = result.toString();
            }
            
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



