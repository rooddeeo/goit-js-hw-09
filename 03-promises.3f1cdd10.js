!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("h6c0i"),i=document.querySelector('input[name="delay"]'),u=document.querySelector('input[name="step"]'),c=document.querySelector('input[name="amount"]');document.querySelector("button").addEventListener("click",(function(e){var n=function(e){var n=e+1;setTimeout((function(e){var t,o;(t=n,o=e,new Promise((function(e,n){Math.random()>.3?e({position:t,currentDelay:o}):n({position:t,currentDelay:o})}))).then((function(e){var n=e.position,t=e.currentDelay;r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.currentDelay;r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}),t,t),t+=o};e.preventDefault();for(var t=Number(i.value),o=Number(u.value),a=Number(c.value),l=0;l<a;l+=1)n(l)}))}();
//# sourceMappingURL=03-promises.3f1cdd10.js.map
