(()=>{"use strict";window.addEventListener("DOMContentLoaded",(()=>{fetch("https://api.github.com/repos/Yuameshi/PhiCommunity/commits").then((e=>e.json())).then((e=>{const t=document.querySelector("div#changelogContainer");e.forEach((({commit:e,html_url:o,sha:n})=>{const c=document.createElement("a");c.classList.add("item"),c.href=o,c.setAttribute("data-sha",n.slice(0,7)),c.innerText=e.message,t.appendChild(c)}))}));const e=document.querySelector("#installPWA");e.style.display="none",window.addEventListener("beforeinstallprompt",(t=>{t.preventDefault(),e.style.display="unset",e.addEventListener("click",(({prompt:e,userChoice:t})=>{e(),t.then((({outcome:e})=>{"accepted"===e?console.log("准备添加到主屏幕"):console.log("用户拒绝了添加到主屏幕")}))}))})),document.querySelector("button#go").addEventListener("click",(()=>{location.href="./tapToStart/index.html"})),document.querySelector("button#gotoCFPages").addEventListener("click",(()=>{location.href="https://cf.phicommunity.com.cn"})),document.querySelector("button#gotoVercel").addEventListener("click",(()=>{location.href="https://vercel.phicommunity.com.cn"})),document.querySelector("button#gotoGHPages").addEventListener("click",(()=>{location.href="https://phicommunity.com.cn"})),location.href.match("cf")?document.querySelector("button#gotoCFPages").style.display="none":location.href.match("vercel")?document.querySelector("button#gotoVercel").style.display="none":document.querySelector("button#gotoGHPages").style.display="none",document.querySelector("button#ghRepo").addEventListener("click",(()=>{window.open("https://github.com/Yuameshi/PhiCommunity")})),document.querySelector("button#deviceReq").addEventListener("click",(()=>{document.querySelector("div#devRequirementPopupOverlay").classList.add("show")})),document.querySelector("div#devRequirementPopupOverlay").addEventListener("click",(e=>{e.target!==document.querySelector("#devReq")&&document.querySelector("div#devRequirementPopupOverlay").classList.remove("show")})),document.querySelector("button#changeLog").addEventListener("click",(()=>{document.querySelector("div#changeLogContainerPopupOverlay").classList.add("show")})),document.querySelector("div#changeLogContainerPopupOverlay").addEventListener("click",(e=>{e.target!==document.querySelector("#changelogContainer")&&document.querySelector("div#changeLogContainerPopupOverlay").classList.remove("show")})),document.querySelector("button#ContactUs").addEventListener("click",(()=>{document.querySelector("div#ContactUsPopupOverlay").classList.add("show")})),document.querySelector("div#ContactUsPopupOverlay").addEventListener("click",(e=>{e.target!==document.querySelector("#ContactUs")&&document.querySelector("div#ContactUsPopupOverlay").classList.remove("show")}))})),"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("/service-worker.js").then((e=>{console.log("SW registered: ",e)})).catch((e=>{console.log("SW registration failed: ",e)}))}))})();