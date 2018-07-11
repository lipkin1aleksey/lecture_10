!function(t){var e={};function i(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(s,r,function(e){return t[e]}.bind(null,r));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}({0:function(t,e,i){"use strict";i.r(e);const s=t=>String(r(t)).replace(/(\d)(?=(\d{3})+([^\d]|$))/g,"$1 "),r=t=>String(t).replace(/\s/g,""),n=(t,e,i)=>{let s="";switch(h=c(h),u=c(u),a=c(a),l=c(l),o=c(o),f=c(f),t){case"+":s=h(e,i);break;case"-":s=u(e,i);break;case"÷":s=a(e,i);break;case"x":s=l(e,i);break;case"xy":s=o(e,i);break;case"√y":s=f(e,i);break;default:s=parseFloat(e)}return String(s)};function c(t){return function(){let e=[];for(var i=0;i<arguments.length;i++)e.push(parseFloat(r(arguments[i])));return t.apply(null,e)}}function h(t,e){return t+e}function u(t,e){return t-e}function a(t,e){return t/e}function l(t,e){return t*e}function o(t,e){return Math.pow(t,e)}function f(t,e){return Math.round(o(t,1/e))}const d=t=>{let e=t.clientWidth,i=getComputedStyle(t);return e-parseFloat(i.paddingLeft)-parseFloat(i.paddingRight)};var p={toggleMenu:function(){this.classList.toggle("burger--open"),this.closest(".calc").classList.toggle("calc--menu-open")},changeCalcTheme:function(){this.closest(".calc").classList.toggle("theme-dark")},changeCalcType:function(){this.closest(".calc").classList.toggle("calc--scientific")}};function y(t){this.waitingForOperand=!0,this.buffer="",this.scientificBuffer="",this.history=[],this.result="0",this.operand="",this.scientificOperand="";let e=this,i=new function(t){this.displayWidth=null,this.resultWidth=null,this.historyWidth=null,this.scale=1;const e=document.querySelector(t+" .calc__display"),i=document.querySelector(t+" .calc__result"),s=document.querySelector(t+" .calc__history");this.init=function(){this.displayWidth=d(e),this.resultWidth=d(i),this.historyWidth=d(i)},this.action=function(t){let e=d(t),r=null,n=null;t.classList.contains("calc__result")?(r=i,n=this.resultWidth):(r=s,n=this.historyWidth),e!==n&&(n=e);let c=this.displayWidth/n;this.scale=c<1?c:1,r.style.transform=`scale(${this.scale}, ${this.scale})`}}(t);this.init=function(){let s=document.querySelectorAll(t+" .button");const r=document.querySelector(t+" .typeSwitcher"),n=document.querySelector(t+" .themeSwitcher"),c=document.querySelector(t+" .burger");for(let t=0;t<s.length;t++)s[t].addEventListener("click",e.addToCalculate);r.addEventListener("change",p.changeCalcType),n.addEventListener("change",p.changeCalcTheme),c.addEventListener("click",p.toggleMenu),i.init()},this.addToCalculate=function(){let t=this.textContent;if(i=t,!isNaN(parseFloat(i))&&isFinite(i))e.addDigit(t);else{switch(t){case".":e.addDot();break;case"±":e.changeSign();break;case"%":e.calcPercentage();break;case"AC":case"C":e.clearResult();break;case"n!":e.calcFactorial();break;case"log":e.calcLogarithm();break;case"√":e.calcSqrt();break;case"xy":case"√y":e.addScientificOperand(t);break;default:e.addOperand(t)}e.changeClearButton()}var i},this.addDigit=function(t){this.waitingForOperand?"0"===this.result?this.result=t:this.result+=t:(this.result=t,this.waitingForOperand=!0),this.printResult()},this.printResult=function(){let e=document.querySelector(t+" .calc__result");e.innerHTML=s(this.result),i.action(e)},this.addOperand=function(t){this.updateHistory(t),""!==this.scientificBuffer&&(this.result=n(this.scientificOperand,this.scientificBuffer,this.result),this.scientificBuffer="",this.printResult()),this.waitingForOperand?(""!==this.buffer?(this.result=n(this.operand,this.buffer,this.result),this.buffer=this.result,this.printResult()):this.buffer=this.result,this.operand=t,this.waitingForOperand=!1):this.operand=t},this.updateHistory=function(e){let i=document.querySelector(t+" .calc__result").textContent;switch(e){case"+":case"-":case"÷":case"x":case"xy":case"√y":if(this.waitingForOperand||0===this.history.length){let t=this.history[history.length-1];t&&t.length>2?"xy"===e?this.history.push("^"):"√y"===e?this.history.push("√"):this.history.push(e):"xy"===e?this.history.push(i,"^"):"√y"===e?this.history.push("√",i):this.history.push(i,e)}else this.history.pop(),"xy"===e?this.history.push("^"):"√y"===e?this.history.push("√"):this.history.push(e);break;case"=":this.history=[];break;default:this.history.push(e)}this.printHistory()},this.printHistory=function(){let e=document.querySelector(t+" .calc__history");this.history.length>9&&this.history.splice(0,2),e.innerHTML=this.history.join(" "),i.action(e)},this.addScientificOperand=function(t){this.scientificBuffer=this.result,this.scientificOperand=t,this.updateHistory(t),this.waitingForOperand=!1},this.clearResult=function(){"0"===this.result?(this.buffer="",this.operand="",this.scientificOperand="",this.scientificBuffer="",this.history=[],this.waitingForOperand=!0):this.result="0",this.printHistory(),this.printResult()},this.calcPercentage=function(){""===this.buffer||"0"===this.buffer?this.result=0:this.result=this.buffer*parseFloat(this.result)/100,this.result=String(this.result),this.printResult()},this.calcFactorial=function(){this.updateHistory(`fact(${this.result})`),this.result=String(function t(e){return 1!=e?e*t(e-1):1}(this.result)),this.printResult()},this.calcLogarithm=function(){var t;this.updateHistory(`log(${this.result})`),this.result=String((t=this.result)<0?0:Math.log10(t)),this.printResult()},this.calcSqrt=function(){var t;this.updateHistory(`√(${this.result})`),this.result=String((t=this.result,Math.sqrt(t))),this.printResult()},this.calcSquare=function(){this.updateHistory(`sqr(${this.result})`),this.result=String(this.result*this.result),this.printResult()},this.changeSign=function(){this.result=-1*parseFloat(this.result),this.result=String(this.result),this.printResult()},this.addDot=function(){-1===this.result.indexOf(".")&&(this.result+=".",this.waitingForOperand=!0),this.printResult()},this.changeClearButton=function(){document.querySelector(t+" .clearButton").innerHTML="0"===this.result?"AC":"C"}}i(14);let g=new y("#calc-one"),b=new y("#calc-two");g.init(),b.init()},14:function(t,e){}});