import { getElementWidth } from "../helpers/util";

export function Display(selector) {
  this.displayWidth = null;
  this.resultWidth = null;
  this.historyWidth = null;
  this.scale = 1;
  const display = document.querySelector(selector + " .calc__display");
  const result = document.querySelector(selector + " .calc__result");
  const history = document.querySelector(selector + " .calc__history");

  this.init = function() {
    this.displayWidth = getElementWidth(display);
    this.resultWidth = getElementWidth(result);
    this.historyWidth = getElementWidth(result);
  };

  /** @function changeElementScale
   * @param {Object} element - The element that scale will change
   */
  this.action = function(element) {
    let actualResultWidth = getElementWidth(element),
      type = null,
      width = null;
    if (element.classList.contains("calc__result")) {
      type = result;
      width = this.resultWidth;
    } else {
      type = history;
      width = this.historyWidth;
    }
    if (actualResultWidth !== width) {
      width = actualResultWidth;
    }
    let actualScale = this.displayWidth / width;
    if (actualScale < 1) {
      this.scale = actualScale;
    } else {
      this.scale = 1;
    }
    type.style.transform = `scale(${this.scale}, ${this.scale})`;
  };
}
