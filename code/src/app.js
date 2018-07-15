import {Calculator} from "./js/calc/calc";
//styles
import "./style.scss";

let calcOne = new Calculator("#calc-one");
let calcTwo = new Calculator("#calc-two");

calcOne.init();
calcTwo.init();