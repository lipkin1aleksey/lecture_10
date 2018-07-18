/**
 * divides a number into order
 * @param {(Number|String)} number
 * @returns {number} Returns the number with spaces
 */
export const addSpace = number => {
    return String(deleteSpace(number)).replace(
        /(\d)(?=(\d{3})+([^\d]|$))/g,
        '$1 '
    );
};

/**
 * Removes spaces from a number
 * @param {(Number|String)} number
 * @returns {number} Returns the number without spaces
 */
export const deleteSpace = number => {
    return String(number).replace(/\s/g, '');
};