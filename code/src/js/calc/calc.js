import {performOperation, isNumeric, addSpace} from "../helpers/helpers";
import {changeResultScale} from "./display";

let buttons = document.querySelectorAll(".button");
let waitingForOperand = true;
let buffer = "";
let result = "0";
let operand = "";

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", addToCalculate);
}

function addToCalculate() {
    let text = this.textContent;
    if (isNumeric(text)) {
        addDigit(text);
    } else {
        switch (text) {
            case ".":
                addDot();
                break;
            case "±":
                changeSign();
                break;
            case "%":
                calcPercentage();
                break;
            case "AC":
            case "C":
                clearResult();
                break;
            default:
                addOperand(text);
        }
    }
    changeClearButton();
};

function addDigit(digit) {
    if (waitingForOperand) {
        if (result === "0") {
            result = digit;
        } else {
            result +=digit;
        }
    } else {
        result = digit;
        waitingForOperand = true;
    }
    printResult();
};

function printResult() {
    document.querySelector(".calc__result").innerHTML = addSpace(result);
    changeResultScale();
};

function addOperand(nextOperand) {
    if (waitingForOperand) {
        if (buffer != "") {
            result = performOperation(operand, buffer, result)
            buffer = result;
            printResult();
        } else {
            buffer = result;
        }
        operand = nextOperand;
        waitingForOperand = false;
    } else {
        operand = nextOperand;
    }
    // console.log("result: " + result, "buffer: " + buffer, "operand: " + operand, waitingForOperand);
};

function clearResult() {
    if (result === "0") {
        buffer = "";
        operand = "";
        waitingForOperand = true;
    } else {
        result = "0";
    }
    printResult();
};

function calcPercentage() {
    result = parseFloat(result) / 100;
    result = String(result);
    printResult();
};

function changeSign() {
    result = parseFloat(result) * -1;
    result = String(result);
    printResult();
};

function addDot() {
    if (result.indexOf(".") === -1) {
        result += ".";
        waitingForOperand = true;
    }
    printResult();
};

function changeClearButton() {
    let button = document.querySelector(".clearButton");
    button.innerHTML = result === "0" ? "AC" : "C";
}