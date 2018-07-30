import { performOperation } from './helpers/helpers';
import { getFactorial, getLogarithm, getSqrt } from './helpers/calculations';
import { addSpace } from './helpers/format';
import { isNumeric } from './helpers/util';
import { Display } from './core/display';
import Menu from './core/menu';
import History from './core/history';
import Journal from './core/journal';
import Connection from './core/connection';

class Calculator {
    constructor(selector) {
        this.selector = selector;
        this.waitingForOperand = true;
        this.buffer = '';
        this.scientificBuffer = '';
        this.result = '0';
        this.operand = '';
        this.scientificOperand = '';
        this.display = new Display(selector);
        this.history = new History(selector);
        this.journal = new Journal(selector);
        this.menu = new Menu();
    }
    init() {
        let buttons = document.querySelectorAll(`${this.selector} .button`);
        const typeSwitcher = document.querySelector(
            `${this.selector} .typeSwitcher`
        );
        const themeSwitcher = document.querySelector(
            `${this.selector} .themeSwitcher`
        );
        const burger = document.querySelector(`${this.selector} .burger`);
        const log = document.querySelector(`${this.selector} .log`);
        const self = this;

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', addToCalculate);
        }

        typeSwitcher.addEventListener('change', Menu.changeCalcType);
        themeSwitcher.addEventListener('change', Menu.changeCalcTheme);
        burger.addEventListener('click', Menu.toggleMenu);
        log.addEventListener('click', this.journal.toggleJournal);

        document
            .querySelector(this.selector)
            .addEventListener('click', function(e) {
                if (
                    !this.classList.contains('calc--menu-open') ||
                    e.target.closest('.menu') ||
                    e.target.closest('.burger')
                ) {
                    return false;
                } else {
                    Menu.closeMenu.bind(this)();
                }
            });

        this.display.init();
        function addToCalculate() {
            let text = this.textContent.replace(/\s+/, '').trim();
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
                    case '√y':
                    case 'xy':
                        self.addScientificOperand(text);
                        break;
                    case 'S':
                        self.sendRequest()
                            .then(server => {
                                server.send('get secret data');
                                return server;
                            })
                            .then(server => {
                                server.onmessage = event => {
                                    let incomingMessage = event.data;
                                    self.showMessage(incomingMessage);
                                };
                            })
                            .catch(err => {
                                console.log(err);
                                self.showMessage(err);
                            });
                        break;
                    default:
                        self.addOperand(text);
                }
            }
            self.changeClearButton();
        }
    }
    /** @function addDigit
     * @param {string} digit - The number is displayed on the screen
     */
    addDigit(digit) {
        if (this.waitingForOperand && this.operand !== '=') {
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
    }

    /**
     * Print current result to display
     */
    printResult() {
        const resultString = document.querySelector(
            `${this.selector} .calc__result`
        );
        resultString.innerHTML = addSpace(this.result);
        this.display.action(resultString);
    }

    /** @function addOperand
     *   @param {string} nextOperand - The next operand to queue
     */
    addOperand(nextOperand) {
        if (this.scientificBuffer !== '') {
            if (this.scientificOperand === 'xy') {
                this.history.add(this.scientificBuffer, '^', this.result);
            } else if (this.scientificOperand === '√y') {
                this.history.add(
                    this.scientificBuffer,
                    '^',
                    ` 1/${this.result}`
                );
            }
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
                this.history.add(this.result, nextOperand);
                this.result = performOperation(
                    this.operand,
                    this.buffer,
                    this.result
                );
                this.buffer = this.result;
                this.printResult();
            } else {
                this.buffer = this.result;
                this.history.add(this.result, nextOperand);
            }
            this.operand = nextOperand;
            this.waitingForOperand = false;
        } else {
            this.operand = nextOperand;
            this.history.remove();
            this.history.add(this.operand);
        }
        if (nextOperand === '=') {
            this.history.add(this.result);
            this.journal.add(this.history.get());
            this.history.clear();
            this.waitingForOperand = true;
            this.buffer = '';
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
    addScientificOperand(nextOperand) {
        this.scientificBuffer = this.result;
        this.scientificOperand = nextOperand;
        this.waitingForOperand = false;
    }

    /**
     *   Clear all variables
     */
    clearResult() {
        if (this.result === '0') {
            this.buffer = '';
            this.operand = '';
            this.scientificOperand = '';
            this.scientificBuffer = '';
            this.waitingForOperand = true;
            this.history.clear();
        } else {
            this.result = '0';
        }
        this.printResult();
    }

    /**
     * Processes the pressing of the percent button
     */
    calcPercentage() {
        if (this.buffer === '' || this.buffer === '0') {
            this.result = 0;
        } else if (!this.waitingForOperand) {
            this.operand = '%';
            this.history.remove();
            this.history.add('%');
        } else {
            this.result = (this.buffer * parseFloat(this.result)) / 100;
        }
        this.result = String(this.result);
        this.printResult();
    }

    /**
     * Processes the pressing of the factorial button
     */
    calcFactorial() {
        this.history.add(`fact(${this.result})`);
        this.result = String(getFactorial(this.result));
        this.printResult();
    }

    /**
     * Processes the pressing of the logarithm button
     */
    calcLogarithm() {
        this.history.add(`log(${this.result})`);
        this.result = String(getLogarithm(this.result));
        this.printResult();
    }

    /**
     * Processes the pressing of the sqrt button
     */
    calcSqrt() {
        this.history.add(`√${this.result}`);
        this.result = String(getSqrt(this.result));
        this.printResult();
    }

    /**
     * Processes the pressing of the sign change button
     */
    changeSign() {
        this.result = parseFloat(this.result) * -1;
        this.result = String(this.result);
        this.printResult();
    }

    /**
     * Processes the pressing of the dot button
     */
    addDot() {
        if (this.result.indexOf('.') === -1) {
            this.result += '.';
            this.waitingForOperand = true;
        }
        this.printResult();
    }

    /**
     * Track the status of the reset button
     */
    changeClearButton() {
        let button = document.querySelector(`${this.selector} .clearButton`);
        button.innerHTML = this.result === '0' ? 'AC' : 'C';
    }
    sendRequest() {
        return new Promise(function(resolve, reject) {
            var server = new WebSocket('ws://localhost:8081');
            server.onopen = function() {
                resolve(server);
            };
            server.onerror = function(err) {
                reject(err);
            };
        });
    }
    showMessage(message) {
        let result = document.querySelector(`${this.selector} .calc__result`);
        result.innerHTML = message;
    }
}
export default Calculator;
