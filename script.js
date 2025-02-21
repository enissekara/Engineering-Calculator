let result = document.getElementById("result");
let currentInput = "0";

function updateDisplay() {
    result.value = currentInput;
}

function appendNumber(num) {
    if (currentInput === "0") {
        currentInput = num.toString();
    } else {
        currentInput += num;
    }
    updateDisplay();
}

function appendOperator(op) {
    currentInput += ` ${op} `;
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
    }
    updateDisplay();
}

function appendFunction(func) {
    try {
        switch (func) {
            case "sqrt":
                currentInput = Math.sqrt(eval(currentInput)).toString();
                break;
            case "pow":
                currentInput = Math.pow(eval(currentInput), 2).toString();
                break;
            case "reciprocal":
                currentInput = (1 / eval(currentInput)).toString();
                break;
            case "log":
                currentInput = Math.log10(eval(currentInput)).toString();
                break;
            case "ln":
                currentInput = Math.log(eval(currentInput)).toString();
                break;
            case "sin":
                currentInput = Math.sin(eval(currentInput)).toString();
                break;
            case "cos":
                currentInput = Math.cos(eval(currentInput)).toString();
                break;
            case "tan":
                currentInput = Math.tan(eval(currentInput)).toString();
                break;
            case "exp":
                currentInput = Math.exp(eval(currentInput)).toString();
                break;
            case "factorial":
                let n = parseInt(eval(currentInput));
                let fact = 1;
                for (let i = 1; i <= n; i++) {
                    fact *= i;
                }
                currentInput = fact.toString();
                break;
        }
        updateDisplay();
    } catch {
        currentInput = "Error";
        updateDisplay();
    }
}

function clearEntry() {
    currentInput = "0";
    updateDisplay();
}

function clearAll() {
    currentInput = "0";
    updateDisplay();
}

function calculateResult() {
    currentInput = eval(currentInput).toString();
    updateDisplay();
}