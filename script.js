let displayValue = '';
let isResultDisplayed = false;

function appendToDisplay(value) {
  if (isResultDisplayed) {
    clearDisplay();
    isResultDisplayed = false;
  }
  displayValue += value;
  updateDisplay(displayValue);
}

function appendDecimal(decimal) {
  if (isResultDisplayed) {
    clearDisplay();
    isResultDisplayed = false;
  }
  if (!displayValue.includes(decimal)) {
    displayValue += decimal;
    updateDisplay(displayValue);
  }
}

function appendOperator(operator) {
  if (isResultDisplayed) {
    isResultDisplayed = false;
  }
  if (displayValue === '') return; // Do not allow operators at the start
  const lastChar = displayValue[displayValue.length - 1];
  if (isOperator(lastChar)) {
    displayValue = displayValue.slice(0, -1); // Replace the last operator
  }
  displayValue += operator;
  updateDisplay(displayValue);
}

function removeLastElement() {
  if (isResultDisplayed) {
    clearDisplay();
    isResultDisplayed = false;
    return;
  }
  displayValue = displayValue.slice(0, -1);
  updateDisplay(displayValue);
}

function clearDisplay() {
  displayValue = '';
  updateDisplay(displayValue);
}

function calculate() {
  try {
    let result = eval(displayValue);
    if (result === Infinity || result === -Infinity || isNaN(result)) {
      updateDisplay('Error');
    } else {
      updateDisplay(result);
    }
    displayValue = result.toString();
    isResultDisplayed = true;
  } catch (error) {
    updateDisplay('Error');
  }
}

function updateDisplay(value) {
  const display = document.getElementById('display');
  display.value = value;
}

function isOperator(value) {
  return ['+', '-', '*', '/'].includes(value);
}
