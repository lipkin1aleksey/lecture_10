import { isNumeric } from "../helpers/util";

class History {
    constructor(selector) {
        this.result = [];
        this.historyBlock = document.querySelector(selector + ' .calc__history');
    }
    //add new elem in results array   
    add(text, ...rest) {
        this.result.push(text, ...rest);
        this.printHistory();
    }
    //remove last elem in results array
    remove() {
        this.result.pop();
    };
    //clear results array
    clear() {
        this.result = [];
        this.printHistory();
    };
    //transform result array to string
    get() {
        return this.result.join(' ');
    }
    //filster history
    filterHistory() {
        let utilArray = [];
        this.result.forEach((value,index) => {
            if ( value.search(/log|fact|√/) !== -1 ) {
                utilArray.push(index);
            } else if ( value.startsWith('^') ) {
                utilArray.push(index + 1)
            }
        })
        //if after log/fact/etc number, delete this
        utilArray.forEach((value) => {
            isNumeric(this.result[value + 1]) ? this.result.splice(value + 1, 1) : null;
        })
        utilArray = [];
    }
    //print history in display
    printHistory() {
        this.filterHistory();
        this.historyBlock.innerHTML = this.result.join(' ');
    }
}

export default History;