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
// CONCATENATED MODULE: ./src/js/helpers/calculations.js
/**
 * Descriptions
  @param {Number} a - first term
  @param {Number} b - second term
*/
const getSum = (a, b) => a + b;

/**
 * Descriptions
  @param {Number} a - number which is substracted
  @param {Number} b - subtrahend
*/
const getSubtraction = (a, b) => a - b;

/**
 * Descriptions
  @param {Number} a - numerator
  @param {Number} b - denominator
*/
const getDivision = (a, b) => a / b;

/**
 * Descriptions
  @param {Number} a - first multiplier
  @param {Number} b - second multiplier
*/
const getMultiplication = (a, b) => a * b;

/**
 * Descriptions
  @param {Number} n - number
*/
const getFactorial = n => {
  return n != 1 ? n * getFactorial(n - 1) : 1;
};

/**
 * Descriptions
  @param {Number} n - number
*/
const getLogarithm = n => {
  return n < 0 ? 0 : Math.log10(n);
};

/**
 * Descriptions
  @param {Number} n - number, must be positive
*/
const getSqrt = n => Math.sqrt(n);

/**
 * Descriptions
  @param {Number} n - base
  @param {Number} y - power
*/
const getPow = (n, y) => Math.pow(n, y);

/**
 * Descriptions
  @param {Number} n - statement
  @param {Number} y - base
*/
const getSqrtByBase = (n, y) => Math.round(getPow(n, 1 / y));


// CONCATENATED MODULE: ./src/js/helpers/helpers.js



/**
 * Descriptions
  @param {String} operand - operand for operation
  @param {(Number|String)} prevValue - first value for operation
  @param {(Number|String)} currentValue - second value for operation
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
        default:
            result = parseFloat(prevValue);
    }
    return String(result);
};
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
  let displayWidth = null;
  let resultWidth = null;
  let historyWidth = null;
  let scale = 1;
  const display = document.querySelector(selector + " .calc__display");
  const result = document.querySelector(selector + " .calc__result");
  const history = document.querySelector(selector + " .calc__history");

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
    if (element.classList.contains("calc__result")) {
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
// CONCATENATED MODULE: ./src/js/calc/history.js

function History(selector) {
    let result = [];

    const historyBlock = document.querySelector(selector + ' .calc__history');

    this.add = function (text, ...rest) {
        result.push(text, ...rest);
        printHistory();
    };
    this.remove = function () {
        result.pop();
    };
    this.clear = function () {
        result = [];
        printHistory();
    };
    this.get = function () {
        return result.join(' ');
    };
    function filterHistory() {
        let utilArray = [];
        result.forEach((value, index) => {
            if (value.search(/log|fact|√/) !== -1) {
                utilArray.push(index);
            } else if (value.startsWith('^')) {
                utilArray.push(index + 1);
            }
        });
        //if after log/fact/etc number, delete this
        utilArray.forEach(value => {
            isNumeric(result[value + 1]) ? result.splice(value + 1, 1) : null;
        });
        utilArray = [];
    }
    function printHistory() {
        filterHistory();
        historyBlock.innerHTML = result.join(' ');
    }
}

/* harmony default export */ var calc_history = (History);
// CONCATENATED MODULE: ./src/js/calc/journal.js
function Journal(selector) {
    let result = '';

    const journal = document.querySelector(`${selector} .journal`);
    const showButton = document.querySelector(`${selector} .log`);
    const clearButton = document.querySelector(`${selector} .journal__clear`);

    showButton.addEventListener('click', toggleJournal);
    clearButton.addEventListener('click', clearJournal);

    function toggleJournal() {
        this.closest('.calc').classList.toggle('calc--journal-open');
    };
    function clearJournal() {
        let list = journal.querySelector('.journal__list');
        list.innerHTML = '';
        let item = document.createElement('li');
        item.className = 'journal__item journal__item--empty';
        item.textContent = 'There is no journal yet';
        list.appendChild(item);
    }
    this.add = function (string) {
        let list = journal.querySelector('.journal__list');
        if (list.firstElementChild.classList.contains('journal__item--empty')) {
            list.innerHTML = '';
        }
        let item = document.createElement('li');
        item.className = 'journal__item';
        item.innerHTML = string;
        list.insertBefore(item, list.children[0]);
    };
}

/* harmony default export */ var calc_journal = (Journal);
// CONCATENATED MODULE: ./src/js/calc/calc.js









function Calculator(selector) {
    let waitingForOperand = true;
    let buffer = '';
    let scientificBuffer = '';
    let result = '0';
    let operand = '';
    let scientificOperand = '';

    let display = new Display(selector);
    let history = new calc_history(selector);
    let journal = new calc_journal(selector);

    this.init = function () {
        let buttons = document.querySelectorAll(`${selector} .button`);
        const typeSwitcher = document.querySelector(`${selector} .typeSwitcher`);
        const themeSwitcher = document.querySelector(`${selector} .themeSwitcher`);
        const burger = document.querySelector(`${selector} .burger`);
        const log = document.querySelector(`${selector} .log`);

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', addToCalculate);
        }

        typeSwitcher.addEventListener('change', calc_menu.changeCalcType);
        themeSwitcher.addEventListener('change', calc_menu.changeCalcTheme);
        burger.addEventListener('click', calc_menu.toggleMenu);
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
        const resultString = document.querySelector(`${selector} .calc__result`);
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
            result = performOperation(scientificOperand, scientificBuffer, result);
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
            result = buffer * parseFloat(result) / 100;
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
// EXTERNAL MODULE: ./src/style.scss
var style = __webpack_require__(16);

// CONCATENATED MODULE: ./src/app.js

//styles


let calcOne = new Calculator("#calc-one");
let calcTwo = new Calculator("#calc-two");

calcOne.init();
calcTwo.init();

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });