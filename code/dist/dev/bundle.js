/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/js/calculator/helpers/format.js
/**
 * divides a number into order
 * @param {(Number|String)} number
 * @returns {number} Returns the number with spaces
 */
const addSpace = number => {
    return String(deleteSpace(number)).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
};

/**
 * Removes spaces from a number
 * @param {(Number|String)} number
 * @returns {number} Returns the number without spaces
 */
const deleteSpace = number => {
    return String(number).replace(/\s/g, '');
};
// CONCATENATED MODULE: ./src/js/calculator/helpers/calculations.js
/**
 * Returns the sum of a and b
  @param {Number} a - first term
  @param {Number} b - second term
  @returns {number} Sum of a and b
*/
const getSum = (a, b) => a + b;

/**
 * Returns the difference of a and b
  @param {Number} a - number which is substracted
  @param {Number} b - subtrahend
  @returns {number} difference of a and b
*/
const getSubtraction = (a, b) => a - b;

/**
 * Returns the attitudes of a and b
  @param {Number} a - numerator
  @param {Number} b - denominator
  @returns {number} The ratio of a to b
*/
const getDivision = (a, b) => a / b;

/**
 * Returns the multiplication of a and b
  @param {Number} a - first multiplier
  @param {Number} b - second multiplier
  @returns {number} The multiplication of a to b
*/
const getMultiplication = (a, b) => a * b;

/**
 * Returns the factorial of n
  @param {Number} n - number
  @returns {number} The factorial of n
*/
const getFactorial = n => {
  return n != 1 ? n * getFactorial(n - 1) : 1;
};

/**
 * Returns the logarithm of n
  @param {Number} n - number
  @returns {number} The logarithm of n
*/
const getLogarithm = n => {
  return n < 0 ? 0 : Math.log10(n);
};

/**
 * Returns the square root of a number
  @param {Number} n - number, must be positive
  @returns {number} Returns the square root
*/
const getSqrt = n => Math.sqrt(n);

/**
 * returns the base to the exponent power
  @param {Number} n - base
  @param {Number} y - power
  @returns {number} Returns the base to the exponent power
*/
const getPow = (n, y) => Math.pow(n, y);

/**
 * Returns the square by base of a number
  @param {Number} n - statement
  @param {Number} y - base
  @returns {number} Returns the square by base of a number
*/
const getSqrtByBase = (n, y) => getPow(n, 1 / y);

/**
 * Returns the percent of number
  @param {Number} x - number
  @param {Number} y - percent
  @returns {number} Returns the percent
*/
const getPercent = (x, y) => x * parseFloat(y) / 100;


// CONCATENATED MODULE: ./src/js/calculator/helpers/helpers.js



/**
 * Provides calculates depends of operand and values
  @param {String} operand - operand for operation
  @param {(Number|String)} prevValue - first value for operation
  @param {(Number|String)} currentValue - second value for operation
  @returns {String} result of calculations
*/
const performOperation = (operand, prevValue, currentValue) => {
    let result = '';
    prevValue = parseFloat(deleteSpace(prevValue));
    currentValue = parseFloat(deleteSpace(currentValue));
    switch (operand) {
        case '+':
            result = getSum(prevValue, currentValue);
            break;
        case '-':
            result = getSubtraction(prevValue, currentValue);
            break;
        case '÷':
            result = getDivision(prevValue, currentValue);
            break;
        case 'x':
            result = getMultiplication(prevValue, currentValue);
            break;
        case 'xy':
            result = getPow(prevValue, currentValue);
            break;
        case '√y':
            result = getSqrtByBase(prevValue, currentValue);
            break;
        case '%':
            result = getPercent(prevValue, currentValue);
            break;
        default:
            result = parseFloat(prevValue);
    }
    return String(result);
};
// CONCATENATED MODULE: ./src/js/calculator/helpers/util.js
/**
 * Checks the string for a number
 * @example
 * // returns true
 * isNumeric(12)
 * @example
 * // returns false
 * isNumeric(x12)
 * @returns {Boolean} Returns the value for comparison
 */
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

/**Calculates width of DOM element
 * @param {Object} element must be DOM element
 * @returns {number} Returns the width of DOM element
 */
const getElementWidth = element => {
    let fullWidth = element.clientWidth;
    let computedStyle = getComputedStyle(element);
    return fullWidth - parseFloat(computedStyle.paddingLeft) - parseFloat(computedStyle.paddingRight);
};
// CONCATENATED MODULE: ./src/js/calculator/core/display.js


function Display(selector) {
    let displayWidth = null;
    let resultWidth = null;
    let historyWidth = null;
    let scale = 1;
    const display = document.querySelector(selector + ' .calc__display');
    const result = document.querySelector(selector + ' .calc__result');
    const history = document.querySelector(selector + ' .calc__history');

    this.init = function () {
        displayWidth = getElementWidth(display);
        resultWidth = getElementWidth(result);
        historyWidth = getElementWidth(result);
    };

    /** @function changeElementScale
     * @param {Object} element - The element that scale will change
     */
    this.action = function (element) {
        let actualResultWidth = getElementWidth(element),
            type = null,
            width = null;
        if (element.classList.contains('calc__result')) {
            type = result;
            width = resultWidth;
        } else {
            type = history;
            width = historyWidth;
        }
        if (actualResultWidth !== width) {
            width = actualResultWidth;
        }
        let actualScale = displayWidth / width;
        if (actualScale < 1) {
            scale = actualScale;
        } else {
            scale = 1;
        }
        type.style.transform = `scale(${scale}, ${scale})`;
    };
}
// CONCATENATED MODULE: ./src/js/calculator/core/menu.js
class Menu {
    static toggleMenu() {
        let calc = this.closest('.calc');
        this.classList.toggle('burger--open');
        calc.classList.toggle('calc--menu-open');
    }
    static changeCalcTheme() {
        this.closest('.calc').classList.toggle('theme-dark');
    }
    static changeCalcType() {
        this.closest('.calc').classList.toggle('calc--scientific');
    }
    static closeMenu() {
        this.querySelector('.burger--open').classList.remove('burger--open');
        this.classList.remove('calc--menu-open');
    }
}
/* harmony default export */ var menu = (Menu);
// CONCATENATED MODULE: ./src/js/calculator/core/history.js


class history_History {
    constructor(selector) {
        this.result = [];
        this.historyBlock = document.querySelector(selector + ' .calc__history');
    }
    //add new elem in results array   
    add(text, ...rest) {
        this.result.push(text, ...rest);
        this.printHistory();
    }
    //remove last elem in results array
    remove() {
        this.result.pop();
    }
    //clear results array
    clear() {
        this.result = [];
        this.printHistory();
    }
    //transform result array to string
    get() {
        return this.result.join(' ');
    }
    //filster history
    filterHistory() {
        let utilArray = [];
        this.result.forEach((value, index) => {
            if (value.search(/log|fact|√/) !== -1) {
                utilArray.push(index);
            } else if (value.startsWith('^')) {
                utilArray.push(index + 1);
            }
        });
        //if after log/fact/etc number, delete this
        utilArray.forEach(value => {
            isNumeric(this.result[value + 1]) ? this.result.splice(value + 1, 1) : null;
        });
        utilArray = [];
    }
    //print history in display
    printHistory() {
        this.filterHistory();
        this.historyBlock.innerHTML = this.result.join(' ');
    }
}

/* harmony default export */ var core_history = (history_History);
// CONCATENATED MODULE: ./src/js/calculator/core/journal.js
class Journal {
    constructor(selector) {
        this.journal = document.querySelector(`${selector} .journal`);
        this.showButton = document.querySelector(`${selector} .log`);
        this.clearButton = document.querySelector(`${selector} .journal__clear`);

        this.showButton.addEventListener('click', this.toggleJournal);
        this.clearButton.addEventListener('click', this.clearJournal.bind(this));
    }
    //toggle journal state from open to close and vise versa
    toggleJournal() {
        this.closest('.calc').classList.toggle('calc--journal-open');
    }
    //clear journal
    clearJournal() {
        let list = this.journal.querySelector('.journal__list');
        list.innerHTML = '';
        let item = document.createElement('li');
        item.className = 'journal__item journal__item--empty';
        item.textContent = 'There is no journal yet';
        list.appendChild(item);
    }
    //add new element for journal
    add(string) {
        let list = this.journal.querySelector('.journal__list');
        if (list.firstElementChild.classList.contains('journal__item--empty')) {
            list.innerHTML = '';
        }
        let item = document.createElement('li');
        item.className = 'journal__item';
        item.innerHTML = string;
        list.insertBefore(item, list.children[0]);
    }
}

/* harmony default export */ var journal = (Journal);
// EXTERNAL MODULE: ./src/js/calculator/core/connection.js
var connection = __webpack_require__(1);

// CONCATENATED MODULE: ./src/js/calculator/calc.js










class calc_Calculator {
    constructor(selector) {
        this.selector = selector;
        this.waitingForOperand = true;
        this.buffer = '';
        this.scientificBuffer = '';
        this.result = '0';
        this.operand = '';
        this.scientificOperand = '';
        this.display = new Display(selector);
        this.history = new core_history(selector);
        this.journal = new journal(selector);
        this.menu = new menu();
    }
    init() {
        let buttons = document.querySelectorAll(`${this.selector} .button`);
        const typeSwitcher = document.querySelector(`${this.selector} .typeSwitcher`);
        const themeSwitcher = document.querySelector(`${this.selector} .themeSwitcher`);
        const burger = document.querySelector(`${this.selector} .burger`);
        const log = document.querySelector(`${this.selector} .log`);
        const self = this;

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', addToCalculate);
        }

        typeSwitcher.addEventListener('change', menu.changeCalcType);
        themeSwitcher.addEventListener('change', menu.changeCalcTheme);
        burger.addEventListener('click', menu.toggleMenu);
        log.addEventListener('click', this.journal.toggleJournal);

        document.querySelector(this.selector).addEventListener('click', function (e) {
            if (!this.classList.contains('calc--menu-open') || e.target.closest('.menu') || e.target.closest('.burger')) {
                return false;
            } else {
                menu.closeMenu.bind(this)();
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
                        self.sendRequest().then(server => {
                            server.send('get secret data');
                            return server;
                        }).then(server => {
                            server.onmessage = event => {
                                let incomingMessage = event.data;
                                self.showMessage(incomingMessage);
                            };
                        }).catch(err => {
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
        const resultString = document.querySelector(`${this.selector} .calc__result`);
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
                this.history.add(this.scientificBuffer, '^', ` 1/${this.result}`);
            }
            this.result = performOperation(this.scientificOperand, this.scientificBuffer, this.result);
            this.scientificBuffer = '';
            this.printResult();
        }
        if (this.waitingForOperand) {
            if (this.buffer !== '') {
                this.history.add(this.result, nextOperand);
                this.result = performOperation(this.operand, this.buffer, this.result);
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
            this.result = this.buffer * parseFloat(this.result) / 100;
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
        return new Promise(function (resolve, reject) {
            var server = new WebSocket('ws://localhost:8081');
            server.onopen = function () {
                resolve(server);
            };
            server.onerror = function (err) {
                reject(err);
            };
        });
    }
    showMessage(message) {
        let result = document.querySelector(`${this.selector} .calc__result`);
        result.innerHTML = message;
    }
}
/* harmony default export */ var calc = (calc_Calculator);
// EXTERNAL MODULE: ./src/sass/style.scss
var style = __webpack_require__(18);

// CONCATENATED MODULE: ./src/js/app.js

//styles


// initialization of first calculator
let calcOne = new calc("#calc-one");
calcOne.init();

// initialization of second calculator
let calcTwo = new calc("#calc-two");
calcTwo.init();

/***/ }),

/***/ 1:
/***/ (function(module, exports) {



/***/ }),

/***/ 18:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });