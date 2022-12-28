let operator = '';
let previousValue = '';
let currentValue = '';


document.addEventListener("DOMContentLoaded", function() {
    let allClear = document.querySelector('.btn-ac');
    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.btn-equal');

    let operators = document.querySelectorAll('.operator');
    let numbers = document.querySelectorAll('.number');
    let decimal = document.querySelector('.decimal');

    let previousOperand = document.querySelector('.previous-operand');
    let currentOperand = document.querySelector('.current-operand');


    numbers.forEach((number) => number.addEventListener('click', function(e) {
        takeNum(e.target.textContent)
        currentOperand.textContent = currentValue;
    }));

    operators.forEach((op) => op.addEventListener('click', function(e) {
        takeOperator(e.target.textContent);
        previousOperand.textContent = previousValue + " " + operator;
        currentOperand.textContent = currentValue;
    }))

    allClear.addEventListener('click', function() {
        operator = '';
        currentValue = '';
        previousValue = '';
        currentOperand.textContent = currentValue;
        previousOperand.textContent = previousValue;
    })

    clear.addEventListener('click', function() {
        currentValue = currentValue.toString().slice(0, -1);
    })

    equal.addEventListener('click', function() {
        calculate()
        previousOperand.textContent = '';
        currentOperand.textContent = previousValue;
    })

    decimal.addEventListener('click', function() {
        addDecimal();
    })
})

function takeNum(num){
    if(currentValue.length <= 10){
        currentValue += num;
    }
}

function takeOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === "+") {
        previousValue += currentValue;
    } else if (operator === "-") {
        previousValue -= currentValue
    } else if (operator === "÷") {
        previousValue /= currentValue;
    } else {
        Math.round((previousValue / currentValue) * 100);
    } 
    console.log(previousValue)
    previousValue = roundNum(previousValue)
    previousValue = previousValue.toString();
    currentValue = currentValue.toString();
}

function roundNum(num) {
    return Math.round(num * 1000) / 1000;
}

function addDecimal(){
    if(!currentValue.includes('.')) {
        currentValue += '.';
    }
}