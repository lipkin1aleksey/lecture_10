import Calculator from "./calculator/calc";
//styles
import "../sass/style.scss";

// initialization of first calculator
let calcOne = new Calculator("#calc-one");
calcOne.init();

// initialization of second calculator
let calcTwo = new Calculator("#calc-two");
calcTwo.init();