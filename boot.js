!function(e){var n={};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=0)}([function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const t=o(1);function r(){return process.argv.includes("--dev")}t.app.whenReady().then(()=>async function(){const e=new t.BrowserWindow({width:1280,height:720,webPreferences:{nodeIntegration:!0,additionalArguments:[...r()?["--dev"]:[]]},title:"Incubed Example Dashboard | Muhammet Ali AKBAY",show:!1,frame:!1});r()&&e.webContents.openDevTools({mode:"detach"}),e.removeMenu(),await Promise.all([e.loadFile("bundle/index.html"),new Promise(n=>{e.once("ready-to-show",()=>{e.show(),n(void 0)})})])}()).catch(e=>{console.error("ERROR",e),t.app.quit()}),t.app.on("window-all-closed",()=>{"darwin"!==process.platform&&t.app.quit()}),t.app.on("activate",()=>{0===t.BrowserWindow.getAllWindows().length&&t.app.quit()}),process.on("uncaughtException",e=>console.error("uncaughtException on main",e)),process.on("unhandledRejection",e=>console.error("unhandledRejection on main",e))},function(e,n){e.exports=require("electron")}]);
//# sourceMappingURL=boot.js.map