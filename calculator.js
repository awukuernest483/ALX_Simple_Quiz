document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("add");    
    const subtractButton = document.getElementById("subtract");
    const multiplyButton = document.getElementById("multiply");
    const divideButton = document.getElementById("divide");
    const resultDisplay = document.getElementById("result");

    const number1Input = document.getElementById("number1");
    const number2Input = document.getElementById("number2");

    function add(number1, number2){
        return number1 + number2;
    }

    function subtract(number1, number2){
        return number1 - number2;
    }

    function multiply(number1, number2){
        return number1 * number2;
    }

    function divide(number1, number2){
        if (number2 === 0) {
            return "Cannot divide by zero";
        }
        return number1 / number2;
    }

    addButton.addEventListener("click", function() {
        const number1 = parseFloat(number1Input.value);
        const number2 = parseFloat(number2Input.value);
        const result = add(number1, number2);
        resultDisplay.textContent = `Result: ${result}`;
    }, false);
    subtractButton.addEventListener("click", function() {
        const number1 = parseFloat(number1Input.value);
        const number2 = parseFloat(number2Input.value);
        const result = subtract(number1, number2);
        resultDisplay.textContent = `Result: ${result}`;
    }, false);  
    multiplyButton.addEventListener("click", function() {
        const number1 = parseFloat(number1Input.value);
        const number2 = parseFloat(number2Input.value);
        const result = multiply(number1, number2);
        resultDisplay.textContent = `Result: ${result}`;
    }, false);
    divideButton.addEventListener("click", function() {
        const number1 = parseFloat(number1Input.value);
        const number2 = parseFloat(number2Input.value);
        const result = divide(number1, number2);
        resultDisplay.textContent = `Result: ${result}`;
    }, false);
});