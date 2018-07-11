import { performOperation } from '../helpers/helpers';
import { getFactorial, getLogarithm, getSqrt } from '../helpers/helpers';
import { addSpace } from '../helpers/format';
import { isNumeric } from '../helpers/util';
import { Display } from './display';
import menu from './menu';

export function Calculator(selector) {
    this.waitingForOperand = true;
    this.buffer = '';
    this.scientificBuffer = '';
    this.history = [];
    this.result = '0';
    this.operand = '';
    this.scientificOperand = '';
    
    let self = this;
    let display = new Display(selector);
    
    this.init = function() {
        let buttons = document.querySelectorAll(selector + ' .button');
        const typeSwitcher = document.querySelector(
            selector + ' .typeSwitcher'
        );
        const themeSwitcher = document.querySelector(
            selector + ' .themeSwitcher'
        );
        const burger = document.querySelector(selector + ' .burger');

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', self.addToCalculate);
        }
        typeSwitcher.addEventListener('change', menu.changeCalcType);
        themeSwitcher.addEventListener('change', menu.changeCalcTheme);
        burger.addEventListener('click', menu.toggleMenu);
        display.init();
    };
    this.addToCalculate = function() {
        let text = this.textContent;
        if (isNumeric(text)) {
            self.addDigit(text);
        } else {
            switch (text) {
                case '.':
                    self.addDot();
                    break;
                case '±':
                    self.changeSign();
                    break;
                case '%':
                    self.calcPercentage();
                    break;
                case 'AC':
                case 'C':
                    self.clearResult();
                    break;
                case 'n!':
                    self.calcFactorial();
                    break;
                case 'log':
                    self.calcLogarithm();
                    break;
                case '√':
                    self.calcSqrt();
                    break;
                case 'xy':
                    self.addScientificOperand(text);
                    break;
                case '√y':
                    self.addScientificOperand(text);
                    break;
                default:
                    self.addOperand(text);
            }
            self.changeClearButton();
        }
    };
    /** @function addDigit
     * @param {string} digit - The number is displayed on the screen
     */
    this.addDigit = function(digit) {
        if (this.waitingForOperand) {
            if (this.result === '0') {
                this.result = digit;
            } else {
                this.result += digit;
            }
        } else {
            this.result = digit;
            this.waitingForOperand = true;
        }
        this.printResult();
    };
    this.printResult = function() {
        let resultString = document.querySelector(selector + ' .calc__result');
        resultString.innerHTML = addSpace(this.result);
        display.action(resultString);
    };
    this.addOperand = function(nextOperand) {
        this.updateHistory(nextOperand);
        if (this.scientificBuffer !== '') {
            this.result = performOperation(
                this.scientificOperand,
                this.scientificBuffer,
                this.result
            );
            this.scientificBuffer = '';
            this.printResult();
        }
        if (this.waitingForOperand) {
            if (this.buffer !== '') {
                this.result = performOperation(
                    this.operand,
                    this.buffer,
                    this.result
                );
                this.buffer = this.result;
                this.printResult();
            } else {
                this.buffer = this.result;
            }
            this.operand = nextOperand;
            this.waitingForOperand = false;
        } else {
            this.operand = nextOperand;
        }
    };
    this.updateHistory = function(sign) {
        let text = document.querySelector(selector + ' .calc__result')
            .textContent;
        switch (sign) {
            case '+':
            case '-':
            case '÷':
            case 'x':
            case 'xy':
            case '√y':
                if (this.waitingForOperand || this.history.length === 0) {
                    let lastElem = this.history[history.length - 1];
                    if (lastElem && lastElem.length > 2) {
                        if (sign === 'xy') {
                            this.history.push('^');
                        } else if (sign === '√y') {
                            this.history.push('√');
                        } else {
                            this.history.push(sign);
                        }
                    } else {
                        if (sign === 'xy') {
                            this.history.push(text, '^');
                        } else if (sign === '√y') {
                            this.history.push('√', text);
                        } else {
                            this.history.push(text, sign);
                        }
                    }
                } else {
                    this.history.pop();
                    if (sign === 'xy') {
                        this.history.push('^');
                    } else if (sign === '√y') {
                        this.history.push('√');
                    } else {
                        this.history.push(sign);
                    }
                }
                break;
            case '=':
                this.history = [];
                break;
            default:
                this.history.push(sign);
        }
        this.printHistory();
    };
    // /**
    //  * Push item in history depends of sign
    //  * @example
    //  * // push "fact(3)"
    //  * updateHistory("fact(3)")
    //  * @example
    //  * // push result, "+"
    //  * updateHistory("+")
    //  */
    this.printHistory = function() {
        let historyString = document.querySelector(
            selector + ' .calc__history'
        );
        if (this.history.length > 9) this.history.splice(0, 2);
        historyString.innerHTML = this.history.join(' ');
        display.action(historyString);
    };
    this.addScientificOperand = function(nextOperand) {
        this.scientificBuffer = this.result;
        this.scientificOperand = nextOperand;
        this.updateHistory(nextOperand);
        this.waitingForOperand = false;
    };
    this.clearResult = function() {
        if (this.result === '0') {
            this.buffer = '';
            this.operand = '';
            this.scientificOperand = '';
            this.scientificBuffer = '';
            this.history = [];
            this.waitingForOperand = true;
        } else {
            this.result = '0';
        }
        this.printHistory();
        this.printResult();
    };
    this.calcPercentage = function() {
        if (this.buffer === '' || this.buffer === '0') {
            this.result = 0;
        } else {
            this.result = (this.buffer * parseFloat(this.result)) / 100;
        }
        this.result = String(this.result);
        this.printResult();
    };
    this.calcFactorial = function() {
        this.updateHistory(`fact(${this.result})`);
        this.result = String(getFactorial(this.result));
        this.printResult();
    };
    this.calcLogarithm = function() {
        this.updateHistory(`log(${this.result})`);
        this.result = String(getLogarithm(this.result));
        this.printResult();
    };
    this.calcSqrt = function() {
        this.updateHistory(`√(${this.result})`);
        this.result = String(getSqrt(this.result));
        this.printResult();
    };
    this.calcSquare = function() {
        this.updateHistory(`sqr(${this.result})`);
        this.result = String(this.result * this.result);
        this.printResult();
    };
    this.changeSign = function() {
        this.result = parseFloat(this.result) * -1;
        this.result = String(this.result);
        this.printResult();
    };
    this.addDot = function() {
        if (this.result.indexOf('.') === -1) {
            this.result += '.';
            this.waitingForOperand = true;
        }
        this.printResult();
    };
    this.changeClearButton = function() {
        let button = document.querySelector(selector + ' .clearButton');
        button.innerHTML = this.result === '0' ? 'AC' : 'C';
    };
}
