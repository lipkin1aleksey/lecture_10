!function(t){var e={};function s(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(i,r,function(e){return t[e]}.bind(null,r));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}({0:function(t,e,s){"use strict";s.r(e);const i=t=>String(r(t)).replace(/(\d)(?=(\d{3})+([^\d]|$))/g,"$1 "),r=t=>String(t).replace(/\s/g,""),n=t=>1!=t?t*n(t-1):1,l=t=>t<0?0:Math.log10(t),c=t=>Math.sqrt(t),a=(t,e)=>Math.pow(t,e),o=(t,e,s)=>{let i="";switch(e=parseFloat(r(e)),s=parseFloat(r(s)),t){case"+":i=((t,e)=>t+e)(e,s);break;case"-":i=((t,e)=>t-e)(e,s);break;case"÷":i=((t,e)=>t/e)(e,s);break;case"x":i=((t,e)=>t*e)(e,s);break;case"xy":i=a(e,s);break;case"√y":i=((t,e)=>a(t,1/e))(e,s);break;case"%":i=((t,e)=>t*parseFloat(e)/100)(e,s);break;default:i=parseFloat(e)}return String(i)};function u(t){return!isNaN(parseFloat(t))&&isFinite(t)}const h=t=>{let e=t.clientWidth,s=getComputedStyle(t);return e-parseFloat(s.paddingLeft)-parseFloat(s.paddingRight)};var d=class{static toggleMenu(){let t=this.closest(".calc");this.classList.toggle("burger--open"),t.classList.toggle("calc--menu-open")}static changeCalcTheme(){this.closest(".calc").classList.toggle("theme-dark")}static changeCalcType(){this.closest(".calc").classList.toggle("calc--scientific")}static closeMenu(){this.querySelector(".burger--open").classList.remove("burger--open"),this.classList.remove("calc--menu-open")}};var f=class{constructor(t){this.result=[],this.historyBlock=document.querySelector(t+" .calc__history")}add(t,...e){this.result.push(t,...e),this.printHistory()}remove(){this.result.pop()}clear(){this.result=[],this.printHistory()}get(){return this.result.join(" ")}filterHistory(){let t=[];this.result.forEach((e,s)=>{-1!==e.search(/log|fact|√/)?t.push(s):e.startsWith("^")&&t.push(s+1)}),t.forEach(t=>{u(this.result[t+1])&&this.result.splice(t+1,1)}),t=[]}printHistory(){this.filterHistory(),this.historyBlock.innerHTML=this.result.join(" ")}};var p=class{constructor(t){this.journal=document.querySelector(`${t} .journal`),this.showButton=document.querySelector(`${t} .log`),this.clearButton=document.querySelector(`${t} .journal__clear`),this.showButton.addEventListener("click",this.toggleJournal),this.clearButton.addEventListener("click",this.clearJournal.bind(this))}toggleJournal(){this.closest(".calc").classList.toggle("calc--journal-open")}clearJournal(){let t=this.journal.querySelector(".journal__list");t.innerHTML="";let e=document.createElement("li");e.className="journal__item journal__item--empty",e.textContent="There is no journal yet",t.appendChild(e)}add(t){let e=this.journal.querySelector(".journal__list");e.firstElementChild.classList.contains("journal__item--empty")&&(e.innerHTML="");let s=document.createElement("li");s.className="journal__item",s.innerHTML=t,e.insertBefore(s,e.children[0])}};var g=class{constructor(t){this.selector=t,this.waitingForOperand=!0,this.buffer="",this.scientificBuffer="",this.result="0",this.operand="",this.scientificOperand="",this.display=new function(t){let e=null,s=null,i=null,r=1;const n=document.querySelector(t+" .calc__display"),l=document.querySelector(t+" .calc__result"),c=document.querySelector(t+" .calc__history");this.init=function(){e=h(n),s=h(l),i=h(l)},this.action=function(t){let n=h(t),a=null,o=null;t.classList.contains("calc__result")?(a=l,o=s):(a=c,o=i),n!==o&&(o=n);let u=e/o;r=u<1?u:1,a.style.transform=`scale(${r}, ${r})`}}(t),this.history=new f(t),this.journal=new p(t),this.menu=new d}init(){let t=document.querySelectorAll(`${this.selector} .button`);const e=document.querySelector(`${this.selector} .typeSwitcher`),s=document.querySelector(`${this.selector} .themeSwitcher`),i=document.querySelector(`${this.selector} .burger`),r=document.querySelector(`${this.selector} .log`),n=this;for(let e=0;e<t.length;e++)t[e].addEventListener("click",l);function l(){let t=this.textContent.replace(/\s+/,"").trim();if(u(t))n.addDigit(t);else switch(t){case".":n.addDot();break;case"±":n.changeSign();break;case"%":n.calcPercentage();break;case"AC":case"C":n.clearResult();break;case"n!":n.calcFactorial();break;case"log":n.calcLogarithm();break;case"√":n.calcSqrt();break;case"√y":case"xy":n.addScientificOperand(t);break;default:n.addOperand(t)}n.changeClearButton()}e.addEventListener("change",d.changeCalcType),s.addEventListener("change",d.changeCalcTheme),i.addEventListener("click",d.toggleMenu),r.addEventListener("click",this.journal.toggleJournal),document.querySelector(this.selector).addEventListener("click",function(t){if(!this.classList.contains("calc--menu-open")||t.target.closest(".menu")||t.target.closest(".burger"))return!1;d.closeMenu.bind(this)()}),this.display.init()}addDigit(t){this.waitingForOperand&&"="!==this.operand?"0"===this.result?this.result=t:this.result+=t:(this.result=t,this.waitingForOperand=!0),this.printResult()}printResult(){const t=document.querySelector(`${this.selector} .calc__result`);t.innerHTML=i(this.result),this.display.action(t)}addOperand(t){""!==this.scientificBuffer&&("xy"===this.scientificOperand?this.history.add(this.scientificBuffer,"^",this.result):"√y"===this.scientificOperand&&this.history.add(this.scientificBuffer,"^",` 1/${this.result}`),this.result=o(this.scientificOperand,this.scientificBuffer,this.result),this.scientificBuffer="",this.printResult()),this.waitingForOperand?(""!==this.buffer?(this.history.add(this.result,t),this.result=o(this.operand,this.buffer,this.result),this.buffer=this.result,this.printResult()):(this.buffer=this.result,this.history.add(this.result,t)),this.operand=t,this.waitingForOperand=!1):(this.operand=t,this.history.remove(),this.history.add(this.operand)),"="===t&&(this.history.add(this.result),this.journal.add(this.history.get()),this.history.clear(),this.waitingForOperand=!0,this.buffer="")}addScientificOperand(t){this.scientificBuffer=this.result,this.scientificOperand=t,this.waitingForOperand=!1}clearResult(){"0"===this.result?(this.buffer="",this.operand="",this.scientificOperand="",this.scientificBuffer="",this.waitingForOperand=!0,this.history.clear()):this.result="0",this.printResult()}calcPercentage(){""===this.buffer||"0"===this.buffer?this.result=0:this.waitingForOperand?this.result=this.buffer*parseFloat(this.result)/100:(this.operand="%",this.history.remove(),this.history.add("%")),this.result=String(this.result),this.printResult()}calcFactorial(){this.history.add(`fact(${this.result})`),this.result=String(n(this.result)),this.printResult()}calcLogarithm(){this.history.add(`log(${this.result})`),this.result=String(l(this.result)),this.printResult()}calcSqrt(){this.history.add(`√${this.result}`),this.result=String(c(this.result)),this.printResult()}changeSign(){this.result=-1*parseFloat(this.result),this.result=String(this.result),this.printResult()}addDot(){-1===this.result.indexOf(".")&&(this.result+=".",this.waitingForOperand=!0),this.printResult()}changeClearButton(){document.querySelector(`${this.selector} .clearButton`).innerHTML="0"===this.result?"AC":"C"}};s(16);let y=new g("#calc-one"),m=new g("#calc-two");y.init(),m.init()},16:function(t,e){}});