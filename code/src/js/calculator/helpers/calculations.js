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
const getPercent = (x, y) => (x * parseFloat(y)) / 100;

export {
    getSum,
    getSubtraction,
    getDivision,
    getMultiplication,
    getFactorial,
    getLogarithm,
    getSqrt,
    getPow,
    getSqrtByBase,
    getPercent
};
