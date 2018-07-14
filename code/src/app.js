import {Calculator} from "./js/calc/calc";
import "./js/calc/display";
import "./js/calc/menu";
//styles
import "./style.scss";

let calcOne = new Calculator("#calc-one");
let calcTwo = new Calculator("#calc-two");

calcOne.init();
calcTwo.init();