import {
  performOperation,
  isNumeric,
  addSpace,
  getFactorial,
  getLogarithm,
  getSqrt
} from "../helpers/helpers";

import { changeElementScale } from "./display";

let waitingForOperand = true;
let buffer = "";
let scientificBuffer = "";
let history = [];
let result = "0";
let operand = "";
let scientificOperand = "";

(function initCalc() {
  const buttons = document.querySelectorAll(".button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", addToCalculate);
  }
})();

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
      case "n!":
        calcFactorial();
        break;
      case "log":
        calcLogarithm();
        break;
      case "√":
        calcSqrt();
        break;
      case "xy":
        addScientificOperand(text);
        break;
      case "x2":
        calcSquare();
        break;
      default:
        addOperand(text);
    }
  }
  changeClearButton();
}
/** @function addDigit
 * @param {string} digit - The number is displayed on the screen
 */
function addDigit(digit) {
  if (waitingForOperand) {
    if (result === "0") {
      result = digit;
    } else {
      result += digit;
    }
  } else {
    result = digit;
    waitingForOperand = true;
  }
  printResult();
}

function printResult() {
  let resultString = document.querySelector(".calc__result");
  resultString.innerHTML = addSpace(result);
  changeElementScale(resultString);
}

function addOperand(nextOperand) {
  updateHistory(nextOperand);
  if (scientificBuffer !== "") {
    result = performOperation(scientificOperand, scientificBuffer, result);
    scientificBuffer = "";
    printResult();
  }
  if (waitingForOperand) {
    if (buffer !== "") {
      result = performOperation(operand, buffer, result);
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
}

function addScientificOperand(nextOperand) {
  scientificBuffer = result;
  scientificOperand = nextOperand;
  updateHistory(nextOperand);
  waitingForOperand = false;
}

function clearResult() {
  if (result === "0") {
    buffer = "";
    operand = "";
    scientificOperand = "";
    scientificBuffer = "";
    history = [];
    waitingForOperand = true;
  } else {
    result = "0";
  }
  printHistory();
  printResult();
}

function calcPercentage() {
  if (buffer === "" || buffer === "0") {
    result = 0;
  } else {
    result = (buffer * parseFloat(result)) / 100;
  }
  result = String(result);
  printResult();
}
function calcFactorial() {
  updateHistory(`fact(${result})`);
  result = String(getFactorial(result));
  printResult();
}

function calcLogarithm() {
  updateHistory(`log(${result})`);
  result = String(getLogarithm(result));
  printResult();
}
function calcSqrt() {
  updateHistory(`√(${result})`);
  result = String(getSqrt(result));
  printResult();
}
function calcSquare() {
  updateHistory(`sqr(${result})`);
  result = String(result * result);
  printResult();
}
function changeSign() {
  result = parseFloat(result) * -1;
  result = String(result);
  printResult();
}

function addDot() {
  if (result.indexOf(".") === -1) {
    result += ".";
    waitingForOperand = true;
  }
  printResult();
}

function changeClearButton() {
  let button = document.querySelector(".clearButton");
  button.innerHTML = result === "0" ? "AC" : "C";
}
/**
 * Push item in history depends of sign
 * @example
 * // push "fact(3)"
 * updateHistory("fact(3)")
 * @example
 * // push result, "+"
 * updateHistory("+")
 */
function updateHistory(sign) {
  let text = document.querySelector(".calc__result").textContent;
  switch (sign) {
    case "+":
    case "-":
    case "÷":
    case "x":
    case "xy":
      if (waitingForOperand || history.length === 0) {
        let lastElem = history[history.length - 1];
        if (lastElem && lastElem.length > 2) {
          history.push(sign === "xy" ? "^" : sign);
        } else {
          history.push(text, sign === "xy" ? "^" : sign);
        }
      } else {
        history.pop();
        history.push(sign === "xy" ? "^" : sign);
      }
      break;
    case "=":
      history = [];
      break;
    default:
      history.push(sign);
  }
  printHistory();
}
function printHistory() {
  let historyString = document.querySelector(".calc__history");
  historyString.innerHTML = history.join(" ");
  changeElementScale(historyString);
}
