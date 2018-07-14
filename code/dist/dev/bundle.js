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

// CONCATENATED MODULE: ./src/js/helpers/format.js
/**
 * @param {(Number|String)} number
 */
const addSpace = number => {
    return String(deleteSpace(number)).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
};

/**
 * @param {(Number|String)} number
 */
const deleteSpace = number => {
    return String(number).replace(/\s/g, '');
};
// CONCATENATED MODULE: ./src/js/helpers/helpers.js


/**
 * Descriptions
  @param {String} operand - operand for operation
  @param {(Number|String)} prevValue - first value for operation
  @param {(Number|String)} currentValue - second value for operation
*/
const performOperation = (operand, prevValue, currentValue) => {
    let result = '';
    getSum = convertStringToNumber(getSum);
    getSubtraction = convertStringToNumber(getSubtraction);
    getDivision = convertStringToNumber(getDivision);
    getMultiplication = convertStringToNumber(getMultiplication);
    getPow = convertStringToNumber(getPow);
    getSqrtByBase = convertStringToNumber(getSqrtByBase);
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
        default:
            result = parseFloat(prevValue);
    }
    return String(result);
};

function convertStringToNumber(f) {
    return function () {
        let newArgs = [];
        for (var i = 0; i < arguments.length; i++) {
            newArgs.push(parseFloat(deleteSpace(arguments[i])));
        }
        return f.apply(null, newArgs);
    };
}

/**
 * Descriptions
  @param {Number} a - first term
  @param {Number} b - second term
*/
function getSum(a, b) {
    return a + b;
}

/**
 * Descriptions
  @param {Number} a - number which is substracted
  @param {Number} b - subtrahend
*/
function getSubtraction(a, b) {
    return a - b;
}

/**
 * Descriptions
  @param {Number} a - numerator
  @param {Number} b - denominator
*/
function getDivision(a, b) {
    return a / b;
}

/**
 * Descriptions
  @param {Number} a - first multiplier
  @param {Number} b - second multiplier
*/
function getMultiplication(a, b) {
    return a * b;
}

/**
 * Descriptions
  @param {Number} n - number
*/
function getFactorial(n) {
    return n != 1 ? n * getFactorial(n - 1) : 1;
}

/**
 * Descriptions
  @param {Number} n - number
*/
function getLogarithm(n) {
    return n < 0 ? 0 : Math.log10(n);
}

/**
 * Descriptions
  @param {Number} n - number, must be positive
*/
function getSqrt(n) {
    return Math.sqrt(n);
}

/**
 * Descriptions
  @param {Number} n - base
  @param {Number} y - power
*/
function getPow(n, y) {
    return Math.pow(n, y);
}

/**
 * Descriptions
  @param {Number} n - statement
  @param {Number} y - base
*/
function getSqrtByBase(n, y) {
    return Math.round(getPow(n, 1 / y));
}
// CONCATENATED MODULE: ./src/js/helpers/util.js
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

/**
 * @param {Object} element must be DOM element
 */
const getElementWidth = element => {
    let fullWidth = element.clientWidth;
    let computedStyle = getComputedStyle(element);
    return fullWidth - parseFloat(computedStyle.paddingLeft) - parseFloat(computedStyle.paddingRight);
};
// CONCATENATED MODULE: ./src/js/calc/display.js


function Display(selector) {
  this.displayWidth = null;
  this.resultWidth = null;
  this.historyWidth = null;
  this.scale = 1;
  const display = document.querySelector(selector + " .calc__display");
  const result = document.querySelector(selector + " .calc__result");
  const history = document.querySelector(selector + " .calc__history");

  this.init = function () {
    this.displayWidth = getElementWidth(display);
    this.resultWidth = getElementWidth(result);
    this.historyWidth = getElementWidth(result);
  };

  /** @function changeElementScale
   * @param {Object} element - The element that scale will change
   */
  this.action = function (element) {
    let actualResultWidth = getElementWidth(element),
        type = null,
        width = null;
    if (element.classList.contains("calc__result")) {
      type = result;
      width = this.resultWidth;
    } else {
      type = history;
      width = this.historyWidth;
    }
    if (actualResultWidth !== width) {
      width = actualResultWidth;
    }
    let actualScale = this.displayWidth / width;
    if (actualScale < 1) {
      this.scale = actualScale;
    } else {
      this.scale = 1;
    }
    type.style.transform = `scale(${this.scale}, ${this.scale})`;
  };
}
// CONCATENATED MODULE: ./src/js/calc/menu.js
const menu = {
    toggleMenu: function () {
        this.classList.toggle('burger--open');
        this.closest('.calc').classList.toggle('calc--menu-open');
    },
    changeCalcTheme: function () {
        this.closest('.calc').classList.toggle('theme-dark');
    },
    changeCalcType: function () {
        this.closest('.calc').classList.toggle('calc--scientific');
    }
};
/* harmony default export */ var calc_menu = (menu);
// CONCATENATED MODULE: ./src/js/calc/calc.js







function Calculator(selector) {
    let waitingForOperand = true;
    let buffer = '';
    let scientificBuffer = '';
    let history = [];
    let result = '0';
    let operand = '';
    let scientificOperand = '';

    let display = new Display(selector);

    this.init = function () {
        let buttons = document.querySelectorAll(`${selector} .button`);
        const typeSwitcher = document.querySelector(`${selector} .typeSwitcher`);
        const themeSwitcher = document.querySelector(`${selector} .themeSwitcher`);
        const burger = document.querySelector(`${selector} .burger`);

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', addToCalculate);
        }
        console.log(burger);
        typeSwitcher.addEventListener('change', calc_menu.changeCalcType);
        themeSwitcher.addEventListener('change', calc_menu.changeCalcTheme);
        burger.addEventListener('click', calc_menu.toggleMenu);
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
        const resultString = document.querySelector(`${selector} .calc__result`);
        resultString.innerHTML = addSpace(result);
        display.action(resultString);
    }
    function addOperand(nextOperand) {
        updateHistory(nextOperand);
        if (scientificBuffer !== '') {
            result = performOperation(scientificOperand, scientificBuffer, result);
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
        let text = document.querySelector(`${selector} .calc__result`).textContent;
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
        const historyString = document.querySelector(`${selector} .calc__history`);
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
            result = buffer * parseFloat(result) / 100;
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
// EXTERNAL MODULE: ./src/style.scss
var style = __webpack_require__(14);

// CONCATENATED MODULE: ./src/app.js



//styles


let calcOne = new Calculator("#calc-one");
let calcTwo = new Calculator("#calc-two");

calcOne.init();
calcTwo.init();

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });