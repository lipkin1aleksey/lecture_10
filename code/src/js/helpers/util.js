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