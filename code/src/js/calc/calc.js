import { performOperation } from '../helpers/helpers';
import { getFactorial, getLogarithm, getSqrt } from '../helpers/helpers';
import { addSpace } from '../helpers/format';
import { isNumeric } from '../helpers/util';
import { Display } from './display';
import menu from './menu';

export function Calculator(selector) {
    let waitingForOperand = true;
    let buffer = '';
    let scientificBuffer = '';
    let history = [];
    let result = '0';
    let operand = '';
    let scientificOperand = '';

    let display = new Display(selector);

    this.init = function() {
        let buttons = document.querySelectorAll(`${selector} .button`);
        const typeSwitcher = document.querySelector(
            `${selector} .typeSwitcher`
        );
        const themeSwitcher = document.querySelector(
            `${selector} .themeSwitcher`
        );
        const burger = document.querySelector(`${selector} .burger`);

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', addToCalculate);
        }
        console.log(burger);
        typeSwitcher.addEventListener('change', menu.changeCalcType);
        themeSwitcher.addEventListener('change', menu.changeCalcTheme);
        burger.addEventListener('click', menu.toggleMenu);
        display.init();
    };
    function addToCalculate() {
        let text = this.textContent;
        if (isNumeric(text)) {
            addDigit(text);
        } else {
            switch (text) {
                case '.':
                    addDot();
                    break;
                case '±':
                    changeSign();
                    break;
                case '%':
                    calcPercentage();
                    break;
                case 'AC':
                case 'C':
                    clearResult();
                    break;
                case 'n!':
                    calcFactorial();
                    break;
                case 'log':
                    calcLogarithm();
                    break;
                case '√':
                    calcSqrt();
                    break;
                case 'xy':
                    addScientificOperand(text);
                    break;
                case '√y':
                    addScientificOperand(text);
                    break;
                default:
                    addOperand(text);
            }
            changeClearButton();
        }
    }
    /** @function addDigit
     * @param {string} digit - The number is displayed on the screen
     */
    function addDigit(digit) {
        if (waitingForOperand) {
            if (result === '0') {
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
        const resultString = document.querySelector(
            `${selector} .calc__result`
        );
        resultString.innerHTML = addSpace(result);
        display.action(resultString);
    }
    function addOperand(nextOperand) {
        updateHistory(nextOperand);
        if (scientificBuffer !== '') {
            result = performOperation(
                scientificOperand,
                scientificBuffer,
                result
            );
            scientificBuffer = '';
            printResult();
        }
        if (waitingForOperand) {
            if (buffer !== '') {
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
    function updateHistory(sign) {
        let text = document.querySelector(`${selector} .calc__result`)
            .textContent;
        switch (sign) {
            case '+':
            case '-':
            case '÷':
            case 'x':
            case 'xy':
            case '√y':
                if (waitingForOperand || history.length === 0) {
                    let lastElem = history[history.length - 1];
                    if (lastElem && lastElem.length > 2) {
                        if (sign === 'xy') {
                            history.push('^');
                        } else if (sign === '√y') {
                            history.push('√');
                        } else {
                            history.push(sign);
                        }
                    } else {
                        if (sign === 'xy') {
                            history.push(text, '^');
                        } else if (sign === '√y') {
                            history.push('√', text);
                        } else {
                            history.push(text, sign);
                        }
                    }
                } else {
                    history.pop();
                    if (sign === 'xy') {
                        history.push('^');
                    } else if (sign === '√y') {
                        history.push('√');
                    } else {
                        history.push(sign);
                    }
                }
                break;
            case '=':
                history = [];
                break;
            default:
                history.push(sign);
        }
        printHistory();
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
    function printHistory() {
        const historyString = document.querySelector(
            `${selector} .calc__history`
        );
        if (history.length > 9) history.splice(0, 2);
        historyString.innerHTML = history.join(' ');
        display.action(historyString);
    }
    function addScientificOperand(nextOperand) {
        scientificBuffer = result;
        scientificOperand = nextOperand;
        updateHistory(nextOperand);
        waitingForOperand = false;
    }
    function clearResult() {
        if (result === '0') {
            buffer = '';
            operand = '';
            scientificOperand = '';
            scientificBuffer = '';
            history = [];
            waitingForOperand = true;
        } else {
            result = '0';
        }
        printHistory();
        printResult();
    }
    function calcPercentage() {
        if (buffer === '' || buffer === '0') {
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
        if (result.indexOf('.') === -1) {
            result += '.';
            waitingForOperand = true;
        }
        printResult();
    }
    function changeClearButton() {
        const button = document.querySelector(`${selector} .clearButton`);
        button.innerHTML = result === '0' ? 'AC' : 'C';
    }
}
