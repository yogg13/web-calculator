let firstNumber = null, tempFirstNumber = '';
let displayNumber = '', tempDisplayNumber = '';
let operator = null;

let displayResult = '';

function updateDisplay() {
    document.querySelector('#displayNumber').innerText = displayResult;
}

function inputDisplay(number) {
    if (displayNumber === '') {
        displayNumber = number;

        tempDisplayNumber = displayNumber;
        displayResult = tempDisplayNumber;
    } else if (displayNumber !== '' && displayNumber !== null) {
        tempDisplayNumber += number;
        displayResult += number;
    }

    if (firstNumber === '') {
        firstNumber = number;

        tempFirstNumber = firstNumber;
        displayResult += tempFirstNumber;
    } else if (firstNumber !== '' && displayNumber === null) {
        tempFirstNumber += number;
        displayResult += number;
    }
}

function inputOperator(aritmatika) {
    operator = aritmatika;
    displayResult += operator;

    firstNumber = '';
    displayNumber = null;
}

function calculation() {
    if (displayNumber === null && firstNumber === null && operator === null) {
        alert("Input Not Found!");
        return;
    }

    let result = 0;

    if (operator === '+') {
        result = parseInt(tempDisplayNumber) + parseInt(tempFirstNumber);
    }

    if (operator === '-') {
        result = parseInt(tempDisplayNumber) - parseInt(tempFirstNumber);
    }

    if (operator === 'x') {
        result = parseInt(tempDisplayNumber) * parseInt(tempFirstNumber);
    }

    if (operator === '÷') {
        result = parseInt(tempDisplayNumber) / parseInt(tempFirstNumber);
    }

    if (operator === '%') {
        result = parseInt(tempDisplayNumber) % parseInt(tempFirstNumber);
    }

    displayResult = result;
}

function clearDisplay() {
    document.querySelector('#displayNumber').innerText = '0';
    firstNumber = null;
    tempFirstNumber = '';
    displayNumber = '';
    tempDisplayNumber = '';

}

const buttons = document.querySelectorAll('.button');
for (const button of buttons) {
    button.addEventListener('click', function (event) {

        const target = event.target;
        console.log(target);

        if (target.classList.contains('operator')) {
            inputOperator(target.textContent);
            updateDisplay();
            return;
        }

        if (target.classList.contains('equals')) {
            calculation();
            updateDisplay();
            return;
        }

        if (target.classList.contains('clear')) {
            clearDisplay();
            return;
        }

        inputDisplay(target.innerText);
        updateDisplay();
    })
}
