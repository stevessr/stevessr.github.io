(()=>{var t={7611:(t,e,n)=>{t.exports=n.p+"assets/Title.3d47.svg"},2038:(t,e,n)=>{"use strict";t.exports=n.p+"assets/AboutUs.46b4.mp3"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t+"../"})(),(()=>{"use strict";function t(t="DIV",e={},n=[],...o){const r=t?document.createElement(t):document.createDocumentFragment();return n=[...n instanceof Array?n:[n],...o].filter((t=>0===t||""===t||!!t)),e||(e={}),e instanceof Function&&(e=e(r,t,e,n)),String(e)===e&&(e={class:e}),e instanceof Array&&(n.length?e={classList:e}:n=e,e={}),(e instanceof Element||e instanceof DocumentFragment)&&(n.unshift(e),e={}),t&&Object.entries(e).forEach((([o,i])=>{switch(o){case"_":case"class":r.className=String(i);break;case"classList":i instanceof Array||(i=[i]),i=i.reduce(((o,i)=>(i instanceof Function&&(i=i(r,t,e,n)),i instanceof Array?o.concat(...i.filter((t=>0===t||!!t))):o.concat(..."object"==typeof i?Object.keys(i).filter((t=>i[t])):String(i).split(/\s+/)))),[]),r.classList.add(...i);break;case"style":"object"==typeof i?Object.assign(r.style,i):r.style=i;break;case"data":Object.assign(r.dataset,i);break;default:i instanceof Function?r.addEventListener(o,i):r.setAttribute(o,String(i))}})),n.map((o=>o instanceof Function?o(r,t,e,n):o)).filter((t=>null!=t&&!1!==t)).forEach((t=>{"object"!=typeof t&&(t=document.createTextNode(t)),r.appendChild(t)})),t||Object.defineProperty(r,"innerHTML",{get:()=>Array.from(r.childNodes,(t=>t.outerHTML||t.textContent)).join("")}),r}function e(){return t("BR")}var o=n(2038),r=n(7611),i=n.n(r);const s=["At First / 写在前面\n\t由雨糸 (Yuameshi)\n\t如你所见，PhiCommunity是一个仿照Phigros制作基于HTML5的游戏。\n\t也感谢Pigeon Games创造出Phigros这一如此好玩的游戏。\n\t顺便这里特别感谢lchzh3473的Phigros模拟器，没有它，这个项目消耗的时间可能要长数倍。\n\tPhiCommunity已经在GitHub开源，人人皆可贡献。\n\t你可以在其中上传自己的谱面（粪谱就算了），改进代码，我十分欢迎这样做，大家共同进步。\n\n\t祝你们在这里玩得愉快\n\n\t具有较大贡献的社区人员 / Developers\n\tYuameshi\t\t\t\t\t\t开发者\n\tlchzh3473 \t\t\t\t\t\t\t开发者\n\t熙晨\t \t\t\t\t\t\t代码优化\n\tDrYeXiu\t \t\t\t\t\t背景图片\n\t万炯鸣\t\t \t\t\t\t部分背景音乐\n\t爱音乐de大神🎶\t部分背景音乐思路提供\n\t余音歆风\t\t\t\t\t\t测试人员\n\t守约\t\t\t\t\t\t\t测试人员","感谢所有为PhiCommunity提供帮助的个人或团体",["And",e(),"You.",e()]],c=function(){const e=t("div",{id:"main"},[t("pre",{class:"fromGameDirector"},s[0]),t("div",{class:"thanksAllHelpers"},s[1]),t("div",{class:"thankYou"},s[2])]);return{element:e,scrollStart:function(t){let n=window.innerHeight;e.style.setProperty("--topSize",n+"px");const o=setInterval((()=>{e.offsetTop<-2.25*window.innerHeight==1&&(console.log("The END!"),clearInterval(o),t()),e.style.setProperty("--topSize",n+"px"),n-=.5}),12)}}}(),a=function(){const e=t("div",{class:"clickToExitTag"});return{element:e,prompt:function(t){e.innerText="再点击"+t+"次以跳过",e.style.opacity="0."+(10-t)},unVisible:function(){e.style.opacity=0}}}(),l=(e=>{const n=t("div",{class:"trigger"},[t("img",{src:i(),alt:"PhiCommunity",class:"title"}),t("div",{class:"tapToStart"},"touch to start")]),r=()=>{n.removeEventListener("click",r),n.classList.add("fadeout"),setTimeout((()=>{n.remove(),(()=>{const t=new(window.AudioContext||window.webkitAudioContext||window.mozAudioContext||window.msAudioContext),e=new AbortController;fetch(o,e.signal).then((t=>t.arrayBuffer())).then((e=>{t.decodeAudioData(e,(function(e){var n=t.createBufferSource();n.buffer=e,n.loop=!0,n.connect(t.destination),n.start(0)}))})),c.scrollStart((()=>{setTimeout((()=>{null==t?e.abort():t.close(),location.href="../chapterSelect/index.html"}),3e3)}));let n=6;document.body.addEventListener("click",(()=>{n--,a.prompt(n),n<=0&&setTimeout((()=>{null==t?e.abort():t.close(),location.href="../chapterSelect/index.html"}),1e3);const o=setTimeout((()=>{n=6,a.unVisible(),clearTimeout(o)}),5e3)}))})()}),1e3)};return n.addEventListener("click",r),{element:n}})();document.body.append(...[l,a,c].map((t=>t.element)))})()})();