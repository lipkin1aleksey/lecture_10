import { addSpace, deleteSpace } from './format';
import {
    getSum,
    getSubtraction,
    getDivision,
    getMultiplication,
    getPow,
    getSqrtByBase
} from './calculations';

/**
 * Descriptions
  @param {String} operand - operand for operation
  @param {(Number|String)} prevValue - first value for operation
  @param {(Number|String)} currentValue - second value for operation
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
        default:
            result = parseFloat(prevValue);
    }
    return String(result);
};
