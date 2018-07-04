/**
 * Solves equations
 * @example
 * // returns 5
 * performOperation("+", "2", "3")
 * @example
 * // returns 8
 * performOperation("xy", "2", "3")
 * @returns {Number} Returns the value of the equation.
 */
export const performOperation = (operand, prevValue, currentValue) => {
    let result = "";
    prevValue = deleteSpace(prevValue);
    currentValue = deleteSpace(currentValue);
    switch (operand) {
        case "+":
            result = parseFloat(prevValue) + parseFloat(currentValue);
            break;
        case "-":
            result = parseFloat(prevValue) - parseFloat(currentValue);
            break;
        case "÷":
            result = parseFloat(prevValue) / parseFloat(currentValue);
            break;
        case "x":
            result = parseFloat(prevValue) * parseFloat(currentValue);
            break;
        case "xy":
            result = Math.pow(parseFloat(prevValue), parseFloat(currentValue));
            break;
        default:
            result = parseFloat(prevValue);
    }
    return String(result);
};
/**
 * Solves equations of the form x = n!
 * @example
 * // returns 6
 * getFactorial(3);
 * @example
 * // returns 24
 * getFactorial(4);
 * @returns {Number} Returns the value of x for the equation.
 */
export function getFactorial(n) {
    return (n != 1) ? n * getFactorial(n - 1) : 1;
};
/**
 * Solves equations of the form x = log(n)
 * @example
 * // returns 2
 * getLogarithm(100)
 * @example
 * // returns 1
 * getLogarithm(10)
 * @returns {Number} Returns the value of x for the equation.
 */
export function getLogarithm(n) {
    return (n < 0 ) ? 0 : Math.log10(n);
};
/**
 * Solves equations of the form x = sqrt(n)
 * @example
 * // returns 2
 * getSqrt(4)
 * @example
 * // returns 4
 * getSqrt(16)
 * @returns {Number} Returns the value of x for the equation.
 */
export function getSqrt(n) {
    return Math.sqrt(n);
};
/**
 * Solves equations of the form x = n^y
 * @example
 * // returns 8
 * getPow(2, 3)
 * @example
 * // returns 16
 * getPow(4, 2)
 * @returns {Number} Returns the value of x for the equation.
 */
export function getPow(n, y) {
    return Math.pow(n, y);
};
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
export const getElementWidth = (element) => {
    let fullWidth = element.clientWidth;
    let computedStyle = getComputedStyle(element);
    return fullWidth - parseFloat(computedStyle.paddingLeft) - parseFloat(computedStyle.paddingRight);
};
export const addSpace = (number) => {
    return String(deleteSpace(number)).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
};
export const deleteSpace = (number) => {
    return String(number).replace(/\s/g, "");
};