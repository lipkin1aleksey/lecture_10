import { deleteSpace } from './format';
import {
    getSum,
    getSubtraction,
    getDivision,
    getMultiplication,
    getPow,
    getSqrtByBase,
    getPercent
} from './calculations';

/**
 * Provides calculates depends of operand and values
  @param {String} operand - operand for operation
  @param {(Number|String)} prevValue - first value for operation
  @param {(Number|String)} currentValue - second value for operation
  @returns {String} result of calculations
*/
export const performOperation = (operand, prevValue, currentValue) => {
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
        case '%':
            result = getPercent(prevValue, currentValue);
            break;
        default:
            result = parseFloat(prevValue);
    }
    return String(result);
};
