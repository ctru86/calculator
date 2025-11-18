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

function calculate(a, operator, b) {
    a = Number(a); 
    b = Number(b); 
    if (operator === "+") {
        return(add(a,b));
    }
    if (operator === "-") {
        return(subtract(a,b));
    }
    if (operator === "*") {
        return(multiply(a,b));
    }
    if (operator === "/") {
        return(divide(a,b));
    }
}

let firstNumber = ""; 
let operator = ""; 
let secondNumber = ""; 

const display = document.querySelector("#display");
const numberButton = document.querySelectorAll(".number");
const opsButton = document.querySelectorAll(".operator");
const deleteButton = document.querySelector("#delete");
const equalsButton = document.querySelector("#equals"); 

numberButton.forEach(button => {
  button.addEventListener('click', () => {
    if (operator === "" && secondNumber === "" && firstNumber !== "") {
        firstNumber += button.textContent;
        operator = "";
        secondNumber = "";
        display.textContent = firstNumber;
    }
    else if (operator === "") {
        firstNumber += button.textContent;
        display.textContent = firstNumber + operator + secondNumber;
    }
    else {
        secondNumber += button.textContent;
        display.textContent = firstNumber + operator + secondNumber; 
    }
  });
});

opsButton.forEach(button => {
  button.addEventListener('click', () => {
    if (operator === "") {
    operator = button.textContent;
    display.textContent = firstNumber + operator + secondNumber;
    }
    else {
    let total = calculate(firstNumber, operator, secondNumber);
    firstNumber = String(total); 
    secondNumber = ""; 
    operator = button.textContent;
    display.textContent = firstNumber + operator + secondNumber
    }
  });
});

deleteButton.addEventListener('click', () => {
    firstNumber = "";    
    operator = "";
    secondNumber = "";
    display.textContent = "";
  });

equalsButton.addEventListener('click', () => {
    if (secondNumber === "") {
        firstNumber = "";
        operator = "";
        secondNumber = "";
        display.textContent = "";
    } else {
        let total = calculate(firstNumber, operator, secondNumber);
        display.textContent = total; 
        firstNumber = String(total);
        operator = "";
        secondNumber = "";
    }
});
