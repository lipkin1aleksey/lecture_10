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
    this.waitingForOperand = true;
    this.buffer = '';
    this.scientificBuffer = '';
    this.history = [];
    this.result = '0';
    this.operand = '';
    this.scientificOperand = '';

    let self = this;
    let display = new Display(selector);

    this.init = function () {
        let buttons = document.querySelectorAll(selector + ' .button');
        const typeSwitcher = document.querySelector(selector + ' .typeSwitcher');
        const themeSwitcher = document.querySelector(selector + ' .themeSwitcher');
        const burger = document.querySelector(selector + ' .burger');

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', self.addToCalculate);
        }
        typeSwitcher.addEventListener('change', calc_menu.changeCalcType);
        themeSwitcher.addEventListener('change', calc_menu.changeCalcTheme);
        burger.addEventListener('click', calc_menu.toggleMenu);
        display.init();
    };
    this.addToCalculate = function () {
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
    this.addDigit = function (digit) {
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
    this.printResult = function () {
        let resultString = document.querySelector(selector + ' .calc__result');
        resultString.innerHTML = addSpace(this.result);
        display.action(resultString);
    };
    this.addOperand = function (nextOperand) {
        this.updateHistory(nextOperand);
        if (this.scientificBuffer !== '') {
            this.result = performOperation(this.scientificOperand, this.scientificBuffer, this.result);
            this.scientificBuffer = '';
            this.printResult();
        }
        if (this.waitingForOperand) {
            if (this.buffer !== '') {
                this.result = performOperation(this.operand, this.buffer, this.result);
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
    this.updateHistory = function (sign) {
        let text = document.querySelector(selector + ' .calc__result').textContent;
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
    this.printHistory = function () {
        let historyString = document.querySelector(selector + ' .calc__history');
        if (this.history.length > 9) this.history.splice(0, 2);
        historyString.innerHTML = this.history.join(' ');
        display.action(historyString);
    };
    this.addScientificOperand = function (nextOperand) {
        this.scientificBuffer = this.result;
        this.scientificOperand = nextOperand;
        this.updateHistory(nextOperand);
        this.waitingForOperand = false;
    };
    this.clearResult = function () {
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
    this.calcPercentage = function () {
        if (this.buffer === '' || this.buffer === '0') {
            this.result = 0;
        } else {
            this.result = this.buffer * parseFloat(this.result) / 100;
        }
        this.result = String(this.result);
        this.printResult();
    };
    this.calcFactorial = function () {
        this.updateHistory(`fact(${this.result})`);
        this.result = String(getFactorial(this.result));
        this.printResult();
    };
    this.calcLogarithm = function () {
        this.updateHistory(`log(${this.result})`);
        this.result = String(getLogarithm(this.result));
        this.printResult();
    };
    this.calcSqrt = function () {
        this.updateHistory(`√(${this.result})`);
        this.result = String(getSqrt(this.result));
        this.printResult();
    };
    this.calcSquare = function () {
        this.updateHistory(`sqr(${this.result})`);
        this.result = String(this.result * this.result);
        this.printResult();
    };
    this.changeSign = function () {
        this.result = parseFloat(this.result) * -1;
        this.result = String(this.result);
        this.printResult();
    };
    this.addDot = function () {
        if (this.result.indexOf('.') === -1) {
            this.result += '.';
            this.waitingForOperand = true;
        }
        this.printResult();
    };
    this.changeClearButton = function () {
        let button = document.querySelector(selector + ' .clearButton');
        button.innerHTML = this.result === '0' ? 'AC' : 'C';
    };
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