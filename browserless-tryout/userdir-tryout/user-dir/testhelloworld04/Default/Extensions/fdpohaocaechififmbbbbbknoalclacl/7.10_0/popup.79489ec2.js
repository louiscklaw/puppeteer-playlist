function e(e,t,o,r){Object.defineProperty(e,t,{get:o,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},n=t.parcelRequire60cc;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},t.parcelRequire60cc=n),n.register("3A0PR",(function(t,o){e(t.exports,"ERROR_TYPE",(()=>s)),e(t.exports,"getZoom",(()=>i)),e(t.exports,"captureVisibleTab",(()=>l)),e(t.exports,"isCaptureVisibleTabQuotaError",(()=>c)),e(t.exports,"executeScript",(()=>d)),e(t.exports,"isExecuteScriptChromeError",(()=>m)),e(t.exports,"sendMessage",(()=>h)),e(t.exports,"getCurrentTab",(()=>u)),e(t.exports,"openInTabs",(()=>f));var r=n("5dZ7N");const s="ChromeTabsError",a=(0,r.genLastErrorFmt)(s),i=e=>new Promise(((t,o)=>{chrome.tabs.getZoom(e,(e=>{const r=chrome.runtime.lastError;return r?o(a(r,"getZoom")):t(e)}))})),l=(e,t)=>new Promise(((o,r)=>{chrome.tabs.captureVisibleTab(e,t,(e=>{const t=chrome.runtime.lastError;return t?r(a(t,"captureVisibleTab")):o(e)}))})),c=e=>e&&"object"==typeof e&&e.name===s&&"captureVisibleTab"===e.via&&e.message&&-1!==e.message.indexOf("MAX_CAPTURE_VISIBLE_TAB_CALLS_PER_SECOND"),d=(e,t)=>new Promise(((o,r)=>{chrome.tabs.executeScript(e,t,(e=>{const t=chrome.runtime.lastError;return t?r(a(t,"executeScript")):o(e)}))})),m=e=>e&&"object"==typeof e&&e.name===s&&"executeScript"===e.via&&e.message&&(["Extension manifest must request permission","The tab was closed.","The frame was removed."].some((t=>-1!==e.message.indexOf(t)))||-1!==e.message.indexOf('"chrome-error://')),h=(e,t,o)=>new Promise(((r,n)=>{chrome.tabs.sendMessage(e,t,o,(e=>{const t=chrome.runtime.lastError;return t?n(a(t,"sendMessage")):r(e)}))})),u=()=>{return(e={active:!0,currentWindow:!0},new Promise(((t,o)=>{chrome.tabs.query(e,(e=>{const r=chrome.runtime.lastError;return r?o(a(r,"query")):t(e)}))}))).then((e=>e[0]));var e},f=async(e,t)=>{let o,r=t.length;const n=s=>{if(s>=t.length)return t;let i=t[s],l=s===r-1;return e.incognito&&0===s?(c={url:i,incognito:!1,focused:l},new Promise(((e,t)=>{chrome.windows.create(c,(o=>{const r=chrome.runtime.lastError;return r?t(a(r,"windowsCreate")):e(o)}))}))).then((e=>(o=e.id,n(s+1)))):(e=>new Promise(((t,o)=>{chrome.tabs.create(e,(e=>{const r=chrome.runtime.lastError;return r?o(a(r,"create")):t(e)}))})))({url:i,active:l,windowId:o,openerTabId:e.id,index:(e.incognito?0:e.index)+1+s}).then((e=>n(s+1)));var c};return n(0)}}));var s=n("aQWOf"),a=n("jmw9X"),i=n("830oE"),l=n("1BBN9"),c=n("3A0PR"),d=n("8ABn4"),m=n("h4XuO"),h=n("iMjBX"),u=n("9X70u");c=n("3A0PR"),a=n("jmw9X"),m=n("h4XuO");var f={[u.ERROR_INCOGNITO_NETWORK_NAME]:{title:"Network error downloading file",body:"You might be experiencing a bug that was introduced to the Chrome browser in v68. In the meantime, you can try either of the following.\n\n1. right-click and “Save image as” or just click and drag the image to your desktop (if you are not using auto-download)\n\n2. disable “Allow in incognito” from the Chrome settings page for this extension (you can return to this capture from the history view within this extension):",buttons:()=>{let e=`${a.CUR_BROWSER_INFO.browser_protocol}extensions?id=${chrome.runtime.id}`,t=document.createElement("a");return t.href="#",t.innerText=e,Object.assign(t.style,{display:"block",fontWeight:"bold",margin:"1em 0"}),m.$.on(t,"click",(t=>{t.preventDefault(),(0,c.getCurrentTab)().then((t=>(0,c.openInTabs)(t,[e])))})),[t]}}},p=n("8P88O");var w=n("cEw93"),g=n("ebCbw");var x=function(){let e=`chrome-extension://${chrome.runtime.id}`,t=[{title:"Extensions gallery",explanation:"Chrome policy does not allow extensions to access the webstore extensions gallery because of security risks.",starts_with:"https://chrome.google.com/webstore/",examples:["https://chrome.google.com/webstore/detail/full-page-screen-capture/fdpohaocaechififmbbbbbknoalclacl?hl=en-US"],error_message:"The extensions gallery cannot be scripted."},{title:"Chrome URL",explanation:"Chrome policy does not allow extensions to access URLs that start with “chrome://” because of security risks.",starts_with:"chrome://",examples:["chrome://extensions/","chrome://downloads/","chrome://apps/"],error_message:"Cannot access a chrome:// URL"},{title:"Own extension",explanation:"A recent release of Chrome has removed the ability from extensions to take screenshots of themselves. This is under review and may change. Stay tuned!",starts_with:e,examples:[e],error_message:"Issue screenshotting own chrome URL"},{title:"Another extension",explanation:"Chrome policy does not allow extensions to access to other extensions because of security risks.",starts_with:"chrome-extension://",examples:["chrome-extension://poompllcagmhgifahnbpaofdeikafkan/index.html"],error_message:"Cannot access a chrome-extension:// URL of different extension"},{title:"Extension file",explanation:"Chrome policy does not allow this extension to capture the current file. Is it already an image?",starts_with:"filesystem:chrome-extension://",examples:["filesystem:chrome-extension://poompllcagmhgifahnbpaofdeikafkan/temporary/screencapture-developer-chrome-extensions-manifest-web_accessible_resources-1517807774768.png"],error_message:"Cannot access contents of the page. Extension manifest must request permission to access the respective host."},{title:"Microsoft Add-ons Store",explanation:"The browser does not allow extensions to access the add-on store because of security risks.",starts_with:"https://microsoftedge.microsoft.com/",examples:["https://microsoftedge.microsoft.com/addons/detail/grammarly-for-microsoft-e/cnlefmmeadmemmdciolhbnfeacpdfbkd"],error_message:"The extensions gallery cannot be scripted."},{title:"Edge URL",explanation:"The browser does not allow extensions to access URLs that start with edge://” because of security risks.",starts_with:"edge://",examples:["edge://extensions","edge://downloads","edge://apps"],error_message:"Cannot access an edge:// URL"},{title:"Another extension",explanation:"The browser does not allow extensions to access to other extensions because of security risks.",starts_with:"extension://",examples:["extension://poompllcagmhgifahnbpaofdeikafkan/index.html"],error_message:"Cannot access an extension:// URL of different extension"},{title:"Extension file",explanation:"The browser is not allowing this extension to capture the current file. Is it already an image?",starts_with:"filesystem:extension://",examples:["filesystem:extension://poompllcagmhgifahnbpaofdeikafkan/temporary/screencapture-developer-chrome-extensions-manifest-web_accessible_resources-1517807774768.png"],error_message:"Cannot access contents of the page. Extension manifest must request permission to access the respective host."}];return{URLS:t,getMatch:function(e){return t.find((t=>e.startsWith(t.starts_with)))},isOwnUrl:function(t){return t.startsWith(e)}}}(),b=n("2xkva"),y=n("alm1K"),_=n("aiU1O"),E=n("7i7LO"),$=n("03QYZ");let R=!1,T=[];function v(e){return new Promise(((t,o)=>{if(R)return t();e&&e(),T.push(t)}))}window.addEventListener("load",(function(){window.setTimeout((()=>{R=!0,T.forEach((e=>e()))}),100)}));const C="production",k=parseInt("1687033180",10)||0,O="ExpiredBetaError";Array.prototype.slice.call(document.querySelectorAll("a[data-href]")).forEach((e=>{e.href=e.dataset.href})),(0,h.updateHtml)(),window.setTimeout((()=>{w.default.pageview()}),0);let S,U=null,L=null;function P(e){let t="[_errorHandler] ";if(e){let o=["name","via","message"].map((t=>e[t]?`${t} = ${e[t]}`:null)).filter((e=>e)).join("\n");o&&(t+="\n"+o+"\n")}b.default.error(t),e&&e.stack&&(0,b.default)(e.stack),v((()=>m.$.hidden("loading"))).then((()=>{m.$.show("close");const t=M(),o=e&&e.name===i.ERROR_TYPES.CHROME_TABS&&("executeScript"===e.via||"captureVisibleTab"===e.via&&x.isOwnUrl(t)),r=e&&e.name===O;if(o){let o=x.getMatch(t),r=(0,m.$)("invalid-desc-detail");if(!r.dataset.default){const e=(0,h.tr)("The browser does not allow access to some URLs for security reasons. This includes the web store gallery, other extensions, and $browser_protocol$ URLs. The current page appears to be a restricted URL.",null,[a.CUR_BROWSER_INFO.browser_protocol],{browser_protocol:{content:"$1",example:"chrome://"}});r.dataset.default=e}return r.textContent=o?o.explanation:r.dataset.default,(n=e,N("invalid-link",n)).then((()=>{o||B(),m.$.show("invalid")}))}if(r){const e=(0,m.$)("expired-beta");e.textContent="This test version has expired. Please reach out to get an update or switch over to the proper extension in the";const t=document.createElement("a");Object.assign(t,{targt:"_blank",rel:"noopener noreferrer",href:a.CUR_BROWSER_INFO.store_url,textContent:a.CUR_BROWSER_INFO.store}),e.textContent.appendChild(t),m.$.show("expired-beta")}else{if(!e||!f[e.name])return A(e).then((()=>{m.$.show("uh-oh")}));{let t=f[e.name];(0,m.$)("generic-error-title").innerText=t.title,(0,m.$)("generic-error-body").innerText=t.body;let o=(0,m.$)("generic-error-buttons");o.innerHTML="",t.buttons&&t.buttons().forEach((e=>{o.appendChild(e)})),m.$.show("generic-error")}}var n})).then((()=>m.$.hide("loading")))}function I(e){0===e&&m.$.show("loading");let t=Math.floor(100*e,10);(0,m.$)("bar").style.width=t+"%",(0,m.$)("dots").style.width=100-t+2+"%"}function A(e){return N("report-link",e)}function N(e,t){return(0,_.getReportUrlAsync)({url:M(),error:t}).then((t=>((0,m.$)(e).setAttribute("href",t),t))).catch((e=>b.default.error(e)))}function B(){(0,m.$)("invalid").classList.add("show-desc")}function M(){return S?S.url:window.location.href}if("?test"===window.location.search)window._progress=I,I(.18),(0,$.asArray)(document.querySelectorAll("#wrap > div")).forEach((e=>{e.style.display="block"})),[document.documentElement,document.body,document.getElementById("wrap")].forEach((e=>{e.style.overflow="auto"}));else window.addEventListener("load",(function(){m.$.on((0,m.$)("invalid-desc-a"),"click",(e=>{e.preventDefault(),B()})),m.$.on((0,m.$)("close"),"click",(e=>{e.preventDefault(),window.close()})),m.$.findClass("fp-btn",(0,m.$)("frame-perms")).forEach((e=>{let t=e.dataset.action;m.$.on(e,"click",(e=>{p.trigger("clicked",{action:t}),m.$.hide("frame-perms"),m.$.show("loading")}))})),p.on("needFramePermsClick",(e=>{let t="frame-perms-iframe",o="frame-perms-frame",[r,n]="iframe"===e.tagName?[t,o]:[o,t];m.$.hide(n),m.$.show(r,"inline"),m.$.hide("loading"),m.$.show("frame-perms");let s=document.querySelector("#frame-perms .button-primary");s&&s.focus()}));let e=`${a.CUR_BROWSER_INFO.browser_protocol}extensions/?id=${chrome.runtime.id}`;m.$.findClass("ext-link",(0,m.$)("file-perms")).forEach((t=>{m.$.on(t,"click",(()=>{let t={url:e};S&&!S.incognito&&(t.index=S.index+1),chrome.tabs.create(t)}))})),p.on("needFilePermsClick",(()=>{m.$.hide("loading"),m.$.show("file-perms");let e=document.querySelector("#file-perms .button-primary");e&&e.focus()})),c.getCurrentTab().then((e=>{if(S=e,"beta"===C&&k){const e=s.DateTime.fromSeconds(k);if(s.DateTime.now().diff(e,"days").days>90){const e=new Error("This build is no longer valid.");throw e.name=O,e}}})).then((async()=>{try{L=await c.getZoom(S.id)}catch(e){console.error("Error getting zoom",e)}U=await E.default.load(),U.auto_dl2&&(await l.contains(l.PERMISSIONS.DOWNLOADS)||(U.auto_dl2=!1,U.auto_dl_was_disabled=!0,await E.default.remove("auto_dl2")))})).then((()=>A())).then((()=>{U.auto_dl2?v().then((()=>{m.$.show("auto-dl")})):U.auto_dl_was_disabled&&v().then((()=>{m.$.show("auto-dl-was-disabled")})),function(e){let t=m.$.findClass("frame_persist-toggle",(0,m.$)("frame-perms"))[0],o=t.getElementsByClassName("frame_persist-input")[0],r=t.getElementsByClassName("frame_persist-text")[0],n="frame_persist",s=E.default.getField(n);o.checked=e[n],r.innerText=s.help,m.$.on(o,"change",(function(e){let t=e.target.checked;E.default.set(n,t).then((()=>{U[n]=t})).catch((o=>{e.target.checked=!t,P(o)}))}))}(U)})).then((()=>{let e=S.url,t="filesystem:"+chrome.extension.getURL("/persistent/");if(e.startsWith(t)&&[".jpg",".png"].some((t=>e.endsWith(t))))return d.Capture.findSrc(e.split("/").pop())})).then((e=>{if(e)return e;const t=S.url||"about:blank",o=S.title,r=(0,g.getImageFormat)(U.fmt);U.fmt_details=r;const n=(0,$.asFilename)(t,r.ext);return i.captureToFiles(S,n,I,(e=>{m.$.show("split-image"),(0,m.$)("screenshot-count").innerText=e,e>10&&window.setTimeout((()=>{m.$.show("split-image-extra")}),2e3)}),U).then((({files:e,scaleMultiplier:r,metadata:n})=>{if(!e||!e.length){let t=new Error("No files passed to `displayCaptures` "+e);throw t.name="NoFiles",t}return n=n||{},1!==L&&(n.z=L),n.ww&&n.ww===S.width||(n.tw=S.width),n.wh&&n.wh===S.height||(n.th=S.height),i.filesToRecord(t,o,U.fmt,r,e,n)}))})).then((e=>(0,y.sleep)(U.auto_dl_was_disabled?2e3:0).then((()=>e)))).then((e=>U&&U.auto_dl2?async function(e){const{hasPerms:t,results:o,failCount:r}=await(0,$.fullServiceDownload)(e,!0);if(!t){const e=new Error("Does not have permission.");throw e.name="ChromePermissions",e}if(r)throw o.find((e=>!1===e.success)).error;await(0,y.sleep)(2e3),window.close()}(e.fullPaths):c.openInTabs(S,[e.displayURL]))).catch((e=>P(e)))}));
//# sourceMappingURL=popup.79489ec2.js.map
