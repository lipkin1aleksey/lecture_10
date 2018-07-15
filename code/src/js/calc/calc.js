import { performOperation } from '../helpers/helpers';
import { getFactorial, getLogarithm, getSqrt } from '../helpers/calculations';
import { addSpace } from '../helpers/format';
import { isNumeric } from '../helpers/util';
import { Display } from './display';
import menu from './menu';
import History from "./history";
import Journal from './journal';

export function Calculator(selector) {
    let waitingForOperand = true;
    let buffer = '';
    let scientificBuffer = '';
    let result = '0';
    let operand = '';
    let scientificOperand = '';

    let display = new Display(selector);
    let history = new History(selector);
    let journal = new Journal(selector);

    this.init = function() {
        let buttons = document.querySelectorAll(`${selector} .button`);
        const typeSwitcher = document.querySelector(
            `${selector} .typeSwitcher`
        );
        const themeSwitcher = document.querySelector(
            `${selector} .themeSwitcher`
        );
        const burger = document.querySelector(`${selector} .burger`);
        const log = document.querySelector(`${selector} .log`);

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', addToCalculate);
        }

        typeSwitcher.addEventListener('change', menu.changeCalcType);
        themeSwitcher.addEventListener('change', menu.changeCalcTheme);
        burger.addEventListener('click', menu.toggleMenu);
        log.addEventListener('click', journal.toggleJournal);
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
                case '√y':
                case 'xy':
                    addScientificOperand(text);
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
        if (waitingForOperand && operand !== '=') {
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
        if (scientificBuffer !== '') {
            if (scientificOperand === 'xy') {
                history.add(scientificBuffer, '^', result);
            } else if (scientificOperand === '√y') {
                history.add(scientificBuffer, '^', ` 1/${result}`);
            }
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
                history.add(result, nextOperand);
                result = performOperation(operand, buffer, result);
                buffer = result;
                printResult();
            } else {
                buffer = result;
                history.add(result, nextOperand);
            }
            operand = nextOperand;
            waitingForOperand = false;
        } else {
            operand = nextOperand;
            history.remove();
            history.add(operand);
        }
        if (nextOperand === '=') {
            history.add(result);
            journal.add(history.get());
            history.clear();
            waitingForOperand = true;
            buffer = '';
        }
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
    function addScientificOperand(nextOperand) {
        scientificBuffer = result;
        scientificOperand = nextOperand;
        waitingForOperand = false;
    }
    function clearResult() {
        if (result === '0') {
            buffer = '';
            operand = '';
            scientificOperand = '';
            scientificBuffer = '';
            waitingForOperand = true;
            history.clear();
        } else {
            result = '0';
        }
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
        history.add(`fact(${result})`);
        result = String(getFactorial(result));
        printResult();
    }
    function calcLogarithm() {
        history.add(`log(${result})`);
        result = String(getLogarithm(result));
        printResult();
    }
    function calcSqrt() {
        history.add(`√${result}`);
        result = String(getSqrt(result));
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
        let button = document.querySelector(`${selector} .clearButton`);
        button.innerHTML = result === '0' ? 'AC' : 'C';
    }
}
