import { addSpace, deleteSpace } from './format';


/**
 * Descriptions
  @param {String} operand - operand for operation
  @param {(Number|String)} prevValue - first value for operation
  @param {(Number|String)} currentValue - second value for operation
*/
export const performOperation = (operand, prevValue, currentValue) => {
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
    return function() {
        let newArgs = [];
        for (var i = 0; i < arguments.length; i++) {
            newArgs.push(parseFloat(deleteSpace(arguments[i])))
        }
        return f.apply(null, newArgs);
    };
}

/**
 * Descriptions
  @param {Number} a - first term
  @param {Number} b - second term
*/
export function getSum(a, b) {
    return a + b;
}

/**
 * Descriptions
  @param {Number} a - number which is substracted
  @param {Number} b - subtrahend
*/
export function getSubtraction(a, b) {
    return a - b;
}

/**
 * Descriptions
  @param {Number} a - numerator
  @param {Number} b - denominator
*/
export function getDivision(a, b) {
    return a / b;
}

/**
 * Descriptions
  @param {Number} a - first multiplier
  @param {Number} b - second multiplier
*/
export function getMultiplication(a, b) {
    return a * b;
}

/**
 * Descriptions
  @param {Number} n - number
*/
export function getFactorial(n) {
    return n != 1 ? n * getFactorial(n - 1) : 1;
}

/**
 * Descriptions
  @param {Number} n - number
*/
export function getLogarithm(n) {
    return n < 0 ? 0 : Math.log10(n);
}

/**
 * Descriptions
  @param {Number} n - number, must be positive
*/
export function getSqrt(n) {
    return Math.sqrt(n);
}

/**
 * Descriptions
  @param {Number} n - base
  @param {Number} y - power
*/
export function getPow(n, y) {
    return Math.pow(n, y);
}

/**
 * Descriptions
  @param {Number} n - statement
  @param {Number} y - base
*/
export function getSqrtByBase(n, y) {
    return Math.round(getPow(n, 1 / y));
}