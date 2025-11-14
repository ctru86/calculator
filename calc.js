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

