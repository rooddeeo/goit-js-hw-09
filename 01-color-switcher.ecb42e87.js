const t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]")};let e;t.start.addEventListener("click",(function(){e=setInterval((()=>{t.start.disabled=!0;document.querySelector("body").style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t.stop.addEventListener("click",(function(){clearInterval(e),t.start.disabled=!1}));
//# sourceMappingURL=01-color-switcher.ecb42e87.js.map