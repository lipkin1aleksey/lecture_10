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
}

/**
 * Descriptions
  @param {Number} n - number
*/
const getLogarithm = n => {
    return n < 0 ? 0 : Math.log10(n);
}

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

export {
    getSum,
    getSubtraction,
    getDivision,
    getMultiplication,
    getFactorial,
    getLogarithm,
    getSqrt,
    getPow,
    getSqrtByBase
};