/**
 * Descriptions
  @param {String} operand - operand for operation
  @param {(Number|String)} prevValue - first value for operation
  @param {(Number|String)} currentValue - second value for operation
*/
export const performOperation = (operand, prevValue, currentValue) => {
  let result = "";
  prevValue = deleteSpace(prevValue);
  prevValue = parseFloat(prevValue);
  currentValue = deleteSpace(currentValue);
  currentValue = parseFloat(currentValue);
  switch (operand) {
    case "+":
      result = getSum(prevValue, currentValue);
      break;
    case "-":
      result = getSubtraction(prevValue, currentValue);
      break;
    case "÷":
      result = getDivision(prevValue, currentValue);
      break;
    case "x":
      result = getMultiplication(prevValue, currentValue);
      break;
    case "xy":
      result = getPow(prevValue, currentValue);
      break;
    default:
      result = parseFloat(prevValue);
  }
  return String(result);
};
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
 * Checks the string for a number
 * @example
 * // returns true
 * isNumeric(12)
 * @example
 * // returns false
 * isNumeric(x12)
 * @returns {Boolean} Returns the value for comparison
 */
export function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * @param {Object} element must be DOM element
 */
export const getElementWidth = element => {
  let fullWidth = element.clientWidth;
  let computedStyle = getComputedStyle(element);
  return (
    fullWidth -
    parseFloat(computedStyle.paddingLeft) -
    parseFloat(computedStyle.paddingRight)
  );
};
/**
 * @param {(Number|String)} number
 */
export const addSpace = number => {
  return String(deleteSpace(number)).replace(
    /(\d)(?=(\d{3})+([^\d]|$))/g,
    "$1 "
  );
};
/**
 * @param {(Number|String)} number
 */
export const deleteSpace = number => {
  return String(number).replace(/\s/g, "");
};
