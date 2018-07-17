import { isNumeric } from "../helpers/util";
function History(selector) {
    let result = [];

    const historyBlock = document.querySelector(selector + ' .calc__history');

    this.add = function(text, ...rest) {
        result.push(text, ...rest);
        printHistory();
    };
    this.remove = function() {
        result.pop();
    };
    this.clear = function() {
        result = [];
        printHistory();
    };
    this.get = function() {
        return result.join(' ');
    }
    function filterHistory() {
        let utilArray = [];
        result.forEach((value,index) => {
            if ( value.search(/log|fact|√/) !== -1 ) {
                utilArray.push(index);
            } else if ( value.startsWith('^') ) {
                utilArray.push(index + 1)
            }
        })
        //if after log/fact/etc number, delete this
        utilArray.forEach((value) => {
            isNumeric(result[value + 1]) ? result.splice(value + 1, 1) : null;
        })
        utilArray = [];
    }
    function printHistory() {
        filterHistory();
        historyBlock.innerHTML = result.join(' ');
    }
}

export default History;
