let operator = ''
let previousValue = ''
let currentValue = ''

document.addEventListener('DOMContentLoaded', function () {
  const allClear = document.querySelector('.btn-ac')
  const clearBtn = document.querySelector('.clear')
  const equal = document.querySelector('.btn-equal')

  const operators = document.querySelectorAll('.operator')
  const numbers = document.querySelectorAll('.number')
  const decimal = document.querySelector('.decimal')

  const previousOperand = document.querySelector('.previous-operand')
  const currentOperand = document.querySelector('.current-operand')

  numbers.forEach((number) => number.addEventListener('click', function (e) {
    takeNum(e.target.textContent)
    currentOperand.textContent = currentValue
  }))

  operators.forEach((op) => op.addEventListener('click', function (e) {
    takeOperator(e.target.textContent)
    previousOperand.textContent = previousValue + ' ' + operator
    currentOperand.textContent = currentValue
  }))

  allClear.addEventListener('click', function () {
    operator = ''
    currentValue = ''
    previousValue = ''
    currentOperand.textContent = currentValue
    previousOperand.textContent = previousValue
  })

  clearBtn.addEventListener('click', function () {
    currentValue = currentValue.toString().slice(0, -1)
    currentOperand.textContent = currentValue
    console.log(currentOperand)
  })

  equal.addEventListener('click', function () {
    calculate()
    previousOperand.textContent = ''
    currentOperand.textContent = previousValue
  })

  decimal.addEventListener('click', function () {
    addDecimal()
  })
})

function takeNum (num) {
  if (currentValue.length <= 10) {
    currentValue += num
  }
}

function takeOperator (op) {
  operator = op
  previousValue = currentValue
  currentValue = ''
}

function calculate () {
  previousValue = Number(previousValue)
  currentValue = Number(currentValue)

  if (operator === '+') {
    previousValue += currentValue
  } else if (operator === '-') {
    previousValue -= currentValue
  } else if (operator === '÷') {
    previousValue /= currentValue
  } else if (operator === 'x') {
    previousValue *= currentValue
  }
  console.log(previousValue)
  previousValue = roundNum(previousValue)
  previousValue = previousValue.toString()
  currentValue = currentValue.toString()
}

function roundNum (num) {
  return Math.round(num * 1000) / 1000
}

function addDecimal () {
  if (!currentValue.includes('.')) {
    currentValue += '.'
  }
}
