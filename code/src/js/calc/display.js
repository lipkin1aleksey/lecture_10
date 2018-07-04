import {getElementWidth} from "../helpers/helpers";

let displayWidth = null,
    resultWidth = null,
    historyWidth = null,
    scale = 1;

let display = document.querySelector(".calc__display");
let result = document.querySelector(".calc__result");
let history = document.querySelector(".calc__history");

initDisplayWidth();

function initDisplayWidth() {
    displayWidth = getElementWidth(display);
    resultWidth = getElementWidth(result);
    historyWidth = getElementWidth(result);
};
/** @function changeElementScale 
 * @param {Object} element - The element that scale will change
*/
export function changeElementScale(element) {
    let actualResultWidth = getElementWidth(element);
    let type = null;
    let width = null;
    if (element.classList.contains("calc__result")) {
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
}