!function(e){var t={};function n(c){if(t[c])return t[c].exports;var r=t[c]={i:c,l:!1,exports:{}};return e[c].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(c,r,function(t){return e[t]}.bind(null,r));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({0:function(e,t,n){"use strict";n.r(t);const c=e=>String(r(e)).replace(/(\d)(?=(\d{3})+([^\d]|$))/g,"$1 "),r=e=>String(e).replace(/\s/g,""),a=e=>1!=e?e*a(e-1):1,o=e=>e<0?0:Math.log10(e),l=e=>Math.sqrt(e),i=(e,t)=>Math.pow(e,t),s=(e,t,n)=>{let c="";switch(t=parseFloat(r(t)),n=parseFloat(r(n)),e){case"+":c=((e,t)=>e+t)(t,n);break;case"-":c=((e,t)=>e-t)(t,n);break;case"÷":c=((e,t)=>e/t)(t,n);break;case"x":c=((e,t)=>e*t)(t,n);break;case"xy":c=i(t,n);break;case"√y":c=((e,t)=>Math.round(i(e,1/t)))(t,n);break;case"%":c=((e,t)=>e*parseFloat(t)/100)(t,n);break;default:c=parseFloat(t)}return String(c)};function u(e){return!isNaN(parseFloat(e))&&isFinite(e)}const d=e=>{let t=e.clientWidth,n=getComputedStyle(e);return t-parseFloat(n.paddingLeft)-parseFloat(n.paddingRight)};var f={toggleMenu:function(){this.classList.toggle("burger--open"),this.closest(".calc").classList.toggle("calc--menu-open")},changeCalcTheme:function(){this.closest(".calc").classList.toggle("theme-dark")},changeCalcType:function(){this.closest(".calc").classList.toggle("calc--scientific")}};var g=function(e){let t=[];const n=document.querySelector(e+" .calc__history");function c(){!function(){let e=[];t.forEach((t,n)=>{-1!==t.search(/log|fact|√/)?e.push(n):t.startsWith("^")&&e.push(n+1)}),e.forEach(e=>{u(t[e+1])&&t.splice(e+1,1)}),e=[]}(),n.innerHTML=t.join(" ")}this.add=function(e,...n){t.push(e,...n),c()},this.remove=function(){t.pop()},this.clear=function(){t=[],c()},this.get=function(){return t.join(" ")}};var h=function(e){const t=document.querySelector(`${e} .journal`),n=document.querySelector(`${e} .log`),c=document.querySelector(`${e} .journal__clear`);n.addEventListener("click",function(){this.closest(".calc").classList.toggle("calc--journal-open")}),c.addEventListener("click",function(){let e=t.querySelector(".journal__list");e.innerHTML="";let n=document.createElement("li");n.className="journal__item journal__item--empty",n.textContent="There is no journal yet",e.appendChild(n)}),this.add=function(e){let n=t.querySelector(".journal__list");n.firstElementChild.classList.contains("journal__item--empty")&&(n.innerHTML="");let c=document.createElement("li");c.className="journal__item",c.innerHTML=e,n.insertBefore(c,n.children[0])}};n(16);new function(e){let t=!0,n="",r="",i="0",p="",y="",m=new function(e){let t=null,n=null,c=null,r=1;const a=document.querySelector(e+" .calc__display"),o=document.querySelector(e+" .calc__result"),l=document.querySelector(e+" .calc__history");this.init=function(){t=d(a),n=d(o),c=d(o)},this.action=function(e){let a=d(e),i=null,s=null;e.classList.contains("calc__result")?(i=o,s=n):(i=l,s=c),a!==s&&(s=a);let u=t/s;r=u<1?u:1,i.style.transform=`scale(${r}, ${r})`}}(e),S=new g(e),_=new h(e);function b(){let c=this.textContent.replace(/\s+/,"").trim();if(u(c))d=c,t&&"="!==p?"0"===i?i=d:i+=d:(i=d,t=!0),v();else switch(c){case".":-1===i.indexOf(".")&&(i+=".",t=!0),v();break;case"±":i=-1*parseFloat(i),i=String(i),v();break;case"%":""===n||"0"===n?i=0:t?i=n*parseFloat(i)/100:(p="%",S.remove(),S.add("%")),i=String(i),v();break;case"AC":case"C":"0"===i?(n="",p="",y="",r="",t=!0,S.clear()):i="0",v();break;case"n!":S.add(`fact(${i})`),i=String(a(i)),v();break;case"log":S.add(`log(${i})`),i=String(o(i)),v();break;case"√":S.add(`√${i}`),i=String(l(i)),v();break;case"√y":case"xy":r=i,y=c,t=!1;break;default:!function(e){""!==r&&("xy"===y?S.add(r,"^",i):"√y"===y&&S.add(r,"^",` 1/${i}`),i=s(y,r,i),r="",v()),t?(""!==n?(S.add(i,e),console.log(p,n,i),i=s(p,n,i),n=i,v()):(n=i,S.add(i,e)),p=e,t=!1):(p=e,S.remove(),S.add(p)),"="===e&&(S.add(i),_.add(S.get()),S.clear(),t=!0,n="")}(c)}var d;document.querySelector(`${e} .clearButton`).innerHTML="0"===i?"AC":"C"}function v(){const t=document.querySelector(`${e} .calc__result`);t.innerHTML=c(i),m.action(t)}this.init=function(){let t=document.querySelectorAll(`${e} .button`);const n=document.querySelector(`${e} .typeSwitcher`),c=document.querySelector(`${e} .themeSwitcher`),r=document.querySelector(`${e} .burger`),a=document.querySelector(`${e} .log`);for(let e=0;e<t.length;e++)t[e].addEventListener("click",b);n.addEventListener("change",f.changeCalcType),c.addEventListener("change",f.changeCalcTheme),r.addEventListener("click",f.toggleMenu),a.addEventListener("click",_.toggleJournal),m.init()}}("#calc-one").init()},16:function(e,t){}});