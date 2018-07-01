import {getElementWidth} from "../helpers/helpers";

let displayWidth = null,
    resultWidth = null,
    scale = 1;

let display = document.querySelector(".calc__display");
let result = document.querySelector(".calc__result");

initDisplayWidth();

function initDisplayWidth() {
    displayWidth = getElementWidth(display);
    resultWidth = getElementWidth(result);
};

export function changeResultScale() {
    let actualResultWidth = getElementWidth(result);
    if (actualResultWidth !== resultWidth) {
        resultWidth = actualResultWidth;
    }
    let actualScale = displayWidth / resultWidth;
    if (actualScale < 1) {
        scale = actualScale;
    } else {
        scale = 1;
    }
    // console.log(scale, actualScale);
    result.style.transform = `scale(${scale}, ${scale})`;
}