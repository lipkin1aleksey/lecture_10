import { getElementWidth } from '../helpers/util';

export function Display(selector) {
    let displayWidth = null;
    let resultWidth = null;
    let historyWidth = null;
    let scale = 1;
    const display = document.querySelector(selector + ' .calc__display');
    const result = document.querySelector(selector + ' .calc__result');
    const history = document.querySelector(selector + ' .calc__history');

    this.init = function() {
        displayWidth = getElementWidth(display);
        resultWidth = getElementWidth(result);
        historyWidth = getElementWidth(result);
    };

    /** @function changeElementScale
     * @param {Object} element - The element that scale will change
     */
    this.action = function(element) {
        let actualResultWidth = getElementWidth(element),
            type = null,
            width = null;
        if (element.classList.contains('calc__result')) {
            type = result;
            width = resultWidth;
        } else {
            type = history;
            width = historyWidth;
        }
        if (actualResultWidth !== width) {
            width = actualResultWidth;
        }
        let actualScale = displayWidth / width;
        if (actualScale < 1) {
            scale = actualScale;
        } else {
            scale = 1;
        }
        type.style.transform = `scale(${scale}, ${scale})`;
    };
}
