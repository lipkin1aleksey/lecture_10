/**
 * @param {(Number|String)} number
 */
export const addSpace = number => {
    return String(deleteSpace(number)).replace(
        /(\d)(?=(\d{3})+([^\d]|$))/g,
        '$1 '
    );
};

/**
 * @param {(Number|String)} number
 */
export const deleteSpace = number => {
    return String(number).replace(/\s/g, '');
};