"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[141],{141:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(4870);t.default=o.WebApp},4870:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.WebApp=void 0,r(1419);var o=window;t.WebApp=o.Telegram.WebApp},1419:function(){!function(){var e={},t="";try{t=location.hash.toString()}catch(e){}var r=l(t),o=d("initParams");if(o)for(var n in o)void 0===r[n]&&(r[n]=o[n]);b("initParams",r);var i,a=!1;try{if(a=null!=window.parent&&window!=window.parent){window.addEventListener("message",function(e){if(e.source===window.parent){try{var t=JSON.parse(e.data)}catch(e){return}if(t&&t.eventType){if("set_custom_style"==t.eventType)"https://web.telegram.org"===e.origin&&(i.innerHTML=t.eventData);else if("reload_iframe"==t.eventType){try{window.parent.postMessage(JSON.stringify({eventType:"iframe_will_reload"}),"*")}catch(e){}location.reload()}else c(t.eventType,t.eventData)}}}),i=document.createElement("style"),document.head.appendChild(i);try{window.parent.postMessage(JSON.stringify({eventType:"iframe_ready",eventData:{reload_supported:!0}}),"*")}catch(e){}}}catch(e){}function s(e){try{return e=e.replace(/\+/g,"%20"),decodeURIComponent(e)}catch(t){return e}}function l(e){e=e.replace(/^#/,"");var t={};if(!e.length)return t;if(0>e.indexOf("=")&&0>e.indexOf("?"))return t._path=s(e),t;var r=e.indexOf("?");if(r>=0){var o=e.substr(0,r);t._path=s(o),e=e.substr(r+1)}var n=p(e);for(var i in n)t[i]=n[i];return t}function p(e){var t,r,o,n,i={};if(!e.length)return i;var a=e.split("&");for(t=0;t<a.length;t++)o=s((r=a[t].split("="))[0]),n=null==r[1]?null:s(r[1]),i[o]=n;return i}function c(e,t){console.log("[Telegram.WebView] < receiveEvent",e,t),u(e,function(r){r(e,t)})}function u(t,r){var o=e[t];if(void 0!==o&&o.length)for(var n=0;n<o.length;n++)try{r(o[n])}catch(e){}}function b(e,t){try{return window.sessionStorage.setItem("__telegram__"+e,JSON.stringify(t)),!0}catch(e){}return!1}function d(e){try{return JSON.parse(window.sessionStorage.getItem("__telegram__"+e))}catch(e){}return null}window.Telegram||(window.Telegram={}),window.Telegram.WebView={initParams:r,isIframe:a,onEvent:function(t,r){void 0===e[t]&&(e[t]=[]),-1===e[t].indexOf(r)&&e[t].push(r)},offEvent:function(t,r){if(void 0!==e[t]){var o=e[t].indexOf(r);-1!==o&&e[t].splice(o,1)}},postEvent:function(e,t,r){if(t||(t=function(){}),void 0===r&&(r=""),console.log("[Telegram.WebView] > postEvent",e,r),void 0!==window.TelegramWebviewProxy)TelegramWebviewProxy.postEvent(e,JSON.stringify(r)),t();else if(window.external&&"notify"in window.external)window.external.notify(JSON.stringify({eventType:e,eventData:r})),t();else if(a)try{var o="https://web.telegram.org";o="*",window.parent.postMessage(JSON.stringify({eventType:e,eventData:r}),o),t()}catch(e){t(e)}else t({notAvailable:!0})},receiveEvent:c,callEventCallbacks:u},window.Telegram.Utils={urlSafeDecode:s,urlParseQueryString:p,urlParseHashParams:l,urlAppendHashParams:function(e,t){var r=e.indexOf("#");if(r<0)return e+"#"+t;var o=e.substr(r+1);return o.indexOf("=")>=0||o.indexOf("?")>=0?e+"&"+t:o.length>0?e+"?"+t:e+t},sessionStorageSet:b,sessionStorageGet:d},window.TelegramGameProxy_receiveEvent=c,window.TelegramGameProxy={receiveEvent:c}}(),function(){var e=window.Telegram.Utils,t=window.Telegram.WebView,r=t.initParams,o=t.isIframe,n={},i="",a={},s={},l="light",p="6.0",c="unknown";if(r.tgWebAppData&&r.tgWebAppData.length)for(var u in i=r.tgWebAppData,a=e.urlParseQueryString(i)){var b=a[u];try{("{"==b.substr(0,1)&&"}"==b.substr(-1)||"["==b.substr(0,1)&&"]"==b.substr(-1))&&(a[u]=JSON.parse(b))}catch(e){}}if(r.tgWebAppThemeParams&&r.tgWebAppThemeParams.length){var d=r.tgWebAppThemeParams;try{var f=JSON.parse(d);f&&A(f)}catch(e){}}var f=e.sessionStorageGet("themeParams");f&&A(f),r.tgWebAppVersion&&(p=r.tgWebAppVersion),r.tgWebAppPlatform&&(c=r.tgWebAppPlatform);var g=window.innerHeight;function m(e){g!=window.innerHeight&&(g=window.innerHeight,_("viewportChanged",{isStateStable:!0}))}function v(e){return e.toString().replace(/^\s+|\s+$/g,"")}function _(e){var r=Array.prototype.slice.call(arguments);e=r.shift(),t.callEventCallbacks("webview:"+e,function(e){e.apply(n,r)})}function h(e,r){t.onEvent("webview:"+e,r)}function w(e,r){t.offEvent("webview:"+e,r)}function y(e,t){var r=document.documentElement;r&&r.style&&r.style.setProperty&&r.style.setProperty("--tg-"+e,t)}function A(t){var r;for(var o in"#1c1c1d"==t.bg_color&&t.bg_color==t.secondary_bg_color&&(t.secondary_bg_color="#2c2c2e"),t)(r=J(t[o]))&&(s[o]=r,"bg_color"==o&&y("color-scheme",l=!function(e){3==(e=e.replace(/[\s#]/g,"")).length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var t=parseInt(e.substr(0,2),16),r=parseInt(e.substr(2,2),16),o=parseInt(e.substr(4,2),16);return 120>Math.sqrt(t*t*.299+r*r*.587+o*o*.114)}(r)?"light":"dark"),y(o="theme-"+o.split("_").join("-"),r));e.sessionStorageSet("themeParams",s)}var W={};function E(e){for(var t=100;--t;){for(var r="",o="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",n=o.length,i=0;i<e;i++)r+=o[Math.floor(Math.random()*n)];if(!W[r])return W[r]={},r}throw Error("WebAppCallbackIdGenerateFailed")}var T=!1,k=!1,P=!0;function x(e){var t,r;void 0!==e&&(P=!!e.is_expanded,T=e.height,e.is_state_stable&&(k=e.height),_("viewportChanged",{isStateStable:!!e.is_state_stable})),t=!1!==T?T-F+"px":F?"calc(100vh - "+F+"px)":"100vh",r=!1!==k?k-F+"px":F?"calc(100vh - "+F+"px)":"100vh",y("viewport-height",t),y("viewport-stable-height",r)}var B=!1,C=!0,I="bg_color",S=null,O=null,q=null;function M(){(O!=I||q!=S)&&(O=I,(q=S)?t.postEvent("web_app_set_header_color",!1,{color:S}):t.postEvent("web_app_set_header_color",!1,{color_key:I}))}var j="bg_color";function N(){return"secondary_bg_color"==j?s.secondary_bg_color:"bg_color"==j?s.bg_color:j}var U=null;function D(){var e=N();U!=e&&(U=e,t.postEvent("web_app_set_background_color",!1,{color:e}))}var H="bottom_bar_bg_color";function V(){return"bottom_bar_bg_color"==H?s.bottom_bar_bg_color||s.secondary_bg_color||"#ffffff":"secondary_bg_color"==H?s.secondary_bg_color:"bg_color"==H?s.bg_color:H}var L=null;function R(){var e=V();L!=e&&(L=e,t.postEvent("web_app_set_bottom_bar_color",!1,{color:e})),r.tgWebAppDebug&&Y()}function J(e){if(e+="",t=/^\s*#([0-9a-f]{6})\s*$/i.exec(e))return"#"+t[1].toLowerCase();if(t=/^\s*#([0-9a-f])([0-9a-f])([0-9a-f])\s*$/i.exec(e))return("#"+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]).toLowerCase();if(t=/^\s*rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)\s*$/.exec(e)){var t,r=parseInt(t[1]),o=parseInt(t[2]),n=parseInt(t[3]);return"#"+(r=(r<16?"0":"")+r.toString(16))+(o=(o<16?"0":"")+o.toString(16))+(n=(n<16?"0":"")+n.toString(16))}return!1}function Q(e){return function(e,t){"string"!=typeof e&&(e=""),"string"!=typeof t&&(t=""),e=e.replace(/^\s+|\s+$/g,"").split("."),t=t.replace(/^\s+|\s+$/g,"").split(".");var r,o,n,i=Math.max(e.length,t.length);for(r=0;r<i;r++)if((o=parseInt(e[r])||0)!=(n=parseInt(t[r])||0)){if(o>n)return 1;return -1}return 0}(p,e)>=0}var z=function(){var e=!1,r={};Object.defineProperty(r,"isVisible",{set:function(e){a({is_visible:e})},get:function(){return e},enumerable:!0});var o=null;function n(){return{is_visible:e}}function i(){return!!Q("6.1")||(console.warn("[Telegram.WebApp] BackButton is not supported in version "+p),!1)}function a(a){var s,l,p;return i()&&(void 0!==a.is_visible&&(e=!!a.is_visible),void 0===(s=l=n())&&(s=n()),p=JSON.stringify(s),o!==p&&(o=p,t.postEvent("web_app_setup_back_button",!1,l))),r}return t.onEvent("back_button_pressed",function(){_("backButtonClicked")}),r.onClick=function(e){return i()&&h("backButtonClicked",e),r},r.offClick=function(e){return i()&&w("backButtonClicked",e),r},r.show=function(){return a({is_visible:!0})},r.hide=function(){return a({is_visible:!1})},r}(),G=null,$={},F=0;if(r.tgWebAppDebug){G=document.createElement("tg-bottom-bar");var K={display:"flex",gap:"7px",font:"600 14px/18px sans-serif",width:"100%",background:V(),position:"fixed",left:"0",right:"0",bottom:"0",margin:"0",padding:"7px",textAlign:"center",boxSizing:"border-box",zIndex:"10000"};for(var X in K)G.style[X]=K[X];document.addEventListener("DOMContentLoaded",function e(t){document.removeEventListener("DOMContentLoaded",e),document.body.appendChild(G)});var Z=document.createElement("style");Z.innerHTML='tg-bottom-button.shine { position: relative; overflow: hidden; } tg-bottom-button.shine:before { content:""; position: absolute; top: 0; width: 100%; height: 100%; background: linear-gradient(120deg, transparent, rgba(255, 255, 255, .2), transparent); animation: tg-bottom-button-shine 5s ease-in-out infinite; } @-webkit-keyframes tg-bottom-button-shine { 0% {left: -100%;} 12%,100% {left: 100%}} @keyframes tg-bottom-button-shine { 0% {left: -100%;} 12%,100% {left: 100%}}',G.appendChild(Z)}function Y(){var e=$.main._bottomButton,t=$.secondary._bottomButton;e.isVisible||t.isVisible?(G.style.display="flex",F=58,e.isVisible&&t.isVisible&&("top"==t.position?(G.style.flexDirection="column-reverse",F+=51):"bottom"==t.position?(G.style.flexDirection="column",F+=51):"left"==t.position?G.style.flexDirection="row-reverse":"right"==t.position&&(G.style.flexDirection="row"))):(G.style.display="none",F=0),G.style.background=V(),document.documentElement&&(document.documentElement.style.boxSizing="border-box",document.documentElement.style.paddingBottom=F+"px"),x()}var ee=function(e){var o="main"==e;if(o)var n="web_app_setup_main_button",i="main_button_pressed",a="mainButtonClicked",l="Continue",p=function(){return s.button_color||"#2481cc"},c=function(){return s.button_text_color||"#ffffff"};else var n="web_app_setup_secondary_button",i="secondary_button_pressed",a="secondaryButtonClicked",l="Cancel",p=function(){return V()},c=function(){return s.button_color||"#2481cc"};var u=!1,b=!0,d=!1,f=!1,g=l,m=!1,y=!1,A="left",W={};Object.defineProperty(W,"type",{get:function(){return e},enumerable:!0}),Object.defineProperty(W,"text",{set:function(e){W.setParams({text:e})},get:function(){return g},enumerable:!0}),Object.defineProperty(W,"color",{set:function(e){W.setParams({color:e})},get:function(){return m||p()},enumerable:!0}),Object.defineProperty(W,"textColor",{set:function(e){W.setParams({text_color:e})},get:function(){return y||c()},enumerable:!0}),Object.defineProperty(W,"isVisible",{set:function(e){W.setParams({is_visible:e})},get:function(){return u},enumerable:!0}),Object.defineProperty(W,"isProgressVisible",{get:function(){return f},enumerable:!0}),Object.defineProperty(W,"isActive",{set:function(e){W.setParams({is_active:e})},get:function(){return b},enumerable:!0}),Object.defineProperty(W,"hasShineEffect",{set:function(e){W.setParams({has_shine_effect:e})},get:function(){return d},enumerable:!0}),o||Object.defineProperty(W,"position",{set:function(e){W.setParams({position:e})},get:function(){return A},enumerable:!0});var E=null;t.onEvent(i,x);var T=null;if(r.tgWebAppDebug){T=document.createElement("tg-bottom-button");var k={display:"none",width:"100%",height:"44px",borderRadius:"0",background:"no-repeat right center",padding:"13px 15px",textAlign:"center",boxSizing:"border-box"};for(var P in k)T.style[P]=k[P];G.appendChild(T),T.addEventListener("click",x,!1),T._bottomButton=W,$[e]=T}function x(){b&&_(a)}function B(){var e=W.color,t=W.textColor;if(u){var r={is_visible:!0,is_active:b,is_progress_visible:f,text:g,color:e,text_color:t,has_shine_effect:d&&b&&!f};o||(r.position=A)}else var r={is_visible:!1};return r}function C(){var e,o=B(),i=(void 0===(e=o)&&(e=B()),JSON.stringify(e));E!==i&&(E=i,t.postEvent(n,!1,o),r.tgWebAppDebug&&(o.is_visible?(T.style.display="block",T.style.opacity=o.is_active?"1":"0.8",T.style.cursor=o.is_active?"pointer":"auto",T.disabled=!o.is_active,T.innerText=o.text,T.className=o.has_shine_effect?"shine":"",T.style.backgroundImage=o.is_progress_visible?"url('data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewport="0 0 48 48" width="48px" height="48px"><circle cx="50%" cy="50%" stroke="'+o.text_color+'" stroke-width="2.25" stroke-linecap="round" fill="none" stroke-dashoffset="106" r="9" stroke-dasharray="56.52" rotate="-90"><animate attributeName="stroke-dashoffset" attributeType="XML" dur="360s" from="0" to="12500" repeatCount="indefinite"></animate><animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="-90 24 24" to="630 24 24" repeatCount="indefinite"></animateTransform></circle></svg>')+"')":"none",T.style.backgroundColor=o.color,T.style.color=o.text_color):T.style.display="none",Y()))}return W.setText=function(e){return W.setParams({text:e})},W.onClick=function(e){return h(a,e),W},W.offClick=function(e){return w(a,e),W},W.show=function(){return W.setParams({is_visible:!0})},W.hide=function(){return W.setParams({is_visible:!1})},W.enable=function(){return W.setParams({is_active:!0})},W.disable=function(){return W.setParams({is_active:!1})},W.showProgress=function(e){return b=!!e,f=!0,C(),W},W.hideProgress=function(){return W.isActive||(b=!0),f=!1,C(),W},W.setParams=function(e){if(void 0!==e.text){var t=v(e.text);if(!t.length)throw console.error("[Telegram.WebApp] Bottom button text is required",e.text),Error("WebAppBottomButtonParamInvalid");if(t.length>64)throw console.error("[Telegram.WebApp] Bottom button text is too long",t),Error("WebAppBottomButtonParamInvalid");g=t}if(void 0!==e.color){if(!1===e.color||null===e.color)m=!1;else{var r=J(e.color);if(!r)throw console.error("[Telegram.WebApp] Bottom button color format is invalid",e.color),Error("WebAppBottomButtonParamInvalid");m=r}}if(void 0!==e.text_color){if(!1===e.text_color||null===e.text_color)y=!1;else{var n=J(e.text_color);if(!n)throw console.error("[Telegram.WebApp] Bottom button text color format is invalid",e.text_color),Error("WebAppBottomButtonParamInvalid");y=n}}if(void 0!==e.is_visible){if(e.is_visible&&!W.text.length)throw console.error("[Telegram.WebApp] Bottom button text is required"),Error("WebAppBottomButtonParamInvalid");u=!!e.is_visible}if(void 0!==e.has_shine_effect&&(d=!!e.has_shine_effect),!o&&void 0!==e.position){if("left"!=e.position&&"right"!=e.position&&"top"!=e.position&&"bottom"!=e.position)throw console.error("[Telegram.WebApp] Bottom button posiition is invalid",e.position),Error("WebAppBottomButtonParamInvalid");A=e.position}return void 0!==e.is_active&&(b=!!e.is_active),C(),W},W},et=ee("main"),er=ee("secondary"),eo=function(){var e=!1,r={};Object.defineProperty(r,"isVisible",{set:function(e){a({is_visible:e})},get:function(){return e},enumerable:!0});var o=null;function n(){return{is_visible:e}}function i(){return!!Q("6.10")||(console.warn("[Telegram.WebApp] SettingsButton is not supported in version "+p),!1)}function a(a){var s,l,p;return i()&&(void 0!==a.is_visible&&(e=!!a.is_visible),void 0===(s=l=n())&&(s=n()),p=JSON.stringify(s),o!==p&&(o=p,t.postEvent("web_app_setup_settings_button",!1,l))),r}return t.onEvent("settings_button_pressed",function(){_("settingsButtonClicked")}),r.onClick=function(e){return i()&&h("settingsButtonClicked",e),r},r.offClick=function(e){return i()&&w("settingsButtonClicked",e),r},r.show=function(){return a({is_visible:!0})},r.hide=function(){return a({is_visible:!1})},r}(),en=function(){var e={};function r(r){if(!Q("6.1"))return console.warn("[Telegram.WebApp] HapticFeedback is not supported in version "+p),e;if("impact"==r.type){if("light"!=r.impact_style&&"medium"!=r.impact_style&&"heavy"!=r.impact_style&&"rigid"!=r.impact_style&&"soft"!=r.impact_style)throw console.error("[Telegram.WebApp] Haptic impact style is invalid",r.impact_style),Error("WebAppHapticImpactStyleInvalid")}else if("notification"==r.type){if("error"!=r.notification_type&&"success"!=r.notification_type&&"warning"!=r.notification_type)throw console.error("[Telegram.WebApp] Haptic notification type is invalid",r.notification_type),Error("WebAppHapticNotificationTypeInvalid")}else if("selection_change"==r.type);else throw console.error("[Telegram.WebApp] Haptic feedback type is invalid",r.type),Error("WebAppHapticFeedbackTypeInvalid");return t.postEvent("web_app_trigger_haptic_feedback",!1,r),e}return e.impactOccurred=function(e){return r({type:"impact",impact_style:e})},e.notificationOccurred=function(e){return r({type:"notification",notification_type:e})},e.selectionChanged=function(){return r({type:"selection_change"})},e}(),ei=function(){var e={};function t(t,r,o){if(!Q("6.9"))throw console.error("[Telegram.WebApp] CloudStorage is not supported in version "+p),Error("WebAppMethodUnsupported");return eb(t,r,o),e}return e.setItem=function(e,r,o){return t("saveStorageValue",{key:e,value:r},o)},e.getItem=function(t,r){return e.getItems([t],r?function(e,o){e?r(e):r(null,o[t])}:null)},e.getItems=function(e,r){return t("getStorageValues",{keys:e},r)},e.removeItem=function(t,r){return e.removeItems([t],r)},e.removeItems=function(e,r){return t("deleteStorageValues",{keys:e},r)},e.getKeys=function(e){return t("getStorageKeys",{},e)},e}(),ea=function(){var e=!1,r=!1,o="unknown",n=!1,i=!1,a=!1,s="",l={};Object.defineProperty(l,"isInited",{get:function(){return e},enumerable:!0}),Object.defineProperty(l,"isBiometricAvailable",{get:function(){return e&&r},enumerable:!0}),Object.defineProperty(l,"biometricType",{get:function(){return o||"unknown"},enumerable:!0}),Object.defineProperty(l,"isAccessRequested",{get:function(){return n},enumerable:!0}),Object.defineProperty(l,"isAccessGranted",{get:function(){return n&&i},enumerable:!0}),Object.defineProperty(l,"isBiometricTokenSaved",{get:function(){return a},enumerable:!0}),Object.defineProperty(l,"deviceId",{get:function(){return s||""},enumerable:!0});var c={callbacks:[]},u=!1,b=!1,d=!1;function f(){return!!Q("7.2")||(console.warn("[Telegram.WebApp] BiometricManager is not supported in version "+p),!1)}function g(){if(!e)throw console.error("[Telegram.WebApp] BiometricManager should be inited before using."),Error("WebAppBiometricManagerNotInited");return!0}return t.onEvent("biometry_info_received",function(t,l){if(e=!0,l.available?(r=!0,o=l.type||"unknown",l.access_requested?(n=!0,i=!!l.access_granted,a=!!l.token_saved):(n=!1,i=!1,a=!1)):(r=!1,o="unknown",n=!1,i=!1,a=!1),s=l.device_id||"",c.callbacks.length>0)for(var p=0;p<c.callbacks.length;p++)(0,c.callbacks[p])();if(u){var b=u;u=!1,b.callback&&b.callback(i)}_("biometricManagerUpdated")}),t.onEvent("biometry_auth_requested",function(e,t){var r="authorized"==t.status,o=t.token||"";if(b){var n=b;b=!1,n.callback&&n.callback(r,r?o:null)}_("biometricAuthRequested",r?{isAuthenticated:!0,biometricToken:o}:{isAuthenticated:!1})}),t.onEvent("biometry_token_updated",function(e,t){var o=!1;if(r&&n&&("updated"==t.status?(a=!0,o=!0):"removed"==t.status&&(a=!1,o=!0)),d){var i=d;d=!1,i.callback&&i.callback(o)}_("biometricTokenUpdated",{isUpdated:o})}),l.init=function(r){return!f()||e||(r&&c.callbacks.push(r),t.postEvent("web_app_biometry_get_info",!1)),l},l.requestAccess=function(e,o){if(!f())return l;if(g(),!r)throw console.error("[Telegram.WebApp] Biometrics is not available on this device."),Error("WebAppBiometricManagerBiometricsNotAvailable");if(u)throw console.error("[Telegram.WebApp] Access is already requested"),Error("WebAppBiometricManagerAccessRequested");var n={};if(void 0!==e.reason){var i=v(e.reason);if(i.length>128)throw console.error("[Telegram.WebApp] Biometric reason is too long",i),Error("WebAppBiometricRequestAccessParamInvalid");i.length>0&&(n.reason=i)}return u={callback:o},t.postEvent("web_app_biometry_request_access",!1,n),l},l.authenticate=function(e,o){if(!f())return l;if(g(),!r)throw console.error("[Telegram.WebApp] Biometrics is not available on this device."),Error("WebAppBiometricManagerBiometricsNotAvailable");if(!i)throw console.error("[Telegram.WebApp] Biometric access was not granted by the user."),Error("WebAppBiometricManagerBiometricAccessNotGranted");if(b)throw console.error("[Telegram.WebApp] Authentication request is already in progress."),Error("WebAppBiometricManagerAuthenticationRequested");var n={};if(void 0!==e.reason){var a=v(e.reason);if(a.length>128)throw console.error("[Telegram.WebApp] Biometric reason is too long",a),Error("WebAppBiometricRequestAccessParamInvalid");a.length>0&&(n.reason=a)}return b={callback:o},t.postEvent("web_app_biometry_request_auth",!1,n),l},l.updateBiometricToken=function(e,o){if(!f())return l;if((e=e||"").length>1024)throw console.error("[Telegram.WebApp] Token is too long",e),Error("WebAppBiometricManagerTokenInvalid");if(g(),!r)throw console.error("[Telegram.WebApp] Biometrics is not available on this device."),Error("WebAppBiometricManagerBiometricsNotAvailable");if(!i)throw console.error("[Telegram.WebApp] Biometric access was not granted by the user."),Error("WebAppBiometricManagerBiometricAccessNotGranted");if(d)throw console.error("[Telegram.WebApp] Token request is already in progress."),Error("WebAppBiometricManagerTokenUpdateRequested");return d={callback:o},t.postEvent("web_app_biometry_update_token",!1,{token:e}),l},l.openSettings=function(){if(!f())return l;if(g(),!r)throw console.error("[Telegram.WebApp] Biometrics is not available on this device."),Error("WebAppBiometricManagerBiometricsNotAvailable");if(!n)throw console.error("[Telegram.WebApp] Biometric access was not requested yet."),Error("WebAppBiometricManagerBiometricsAccessNotRequested");return i?console.warn("[Telegram.WebApp] Biometric access was granted by the user, no need to go to settings."):t.postEvent("web_app_biometry_open_settings",!1),l},l}(),es={},el=!1,ep=!1,ec=!1,eu=!1;function eb(e,r,o){if(!Q("6.9"))throw console.error("[Telegram.WebApp] Method invokeCustomMethod is not supported in version "+p),Error("WebAppMethodUnsupported");var n=E(16);W[n]={callback:o},t.postEvent("web_app_invoke_custom_method",!1,{req_id:n,method:e,params:r||{}})}window.Telegram||(window.Telegram={}),Object.defineProperty(n,"initData",{get:function(){return i},enumerable:!0}),Object.defineProperty(n,"initDataUnsafe",{get:function(){return a},enumerable:!0}),Object.defineProperty(n,"version",{get:function(){return p},enumerable:!0}),Object.defineProperty(n,"platform",{get:function(){return c},enumerable:!0}),Object.defineProperty(n,"colorScheme",{get:function(){return l},enumerable:!0}),Object.defineProperty(n,"themeParams",{get:function(){return s},enumerable:!0}),Object.defineProperty(n,"isExpanded",{get:function(){return P},enumerable:!0}),Object.defineProperty(n,"viewportHeight",{get:function(){return(!1===T?window.innerHeight:T)-F},enumerable:!0}),Object.defineProperty(n,"viewportStableHeight",{get:function(){return(!1===k?window.innerHeight:k)-F},enumerable:!0}),Object.defineProperty(n,"isClosingConfirmationEnabled",{set:function(e){!function(e){if(!Q("6.2")){console.warn("[Telegram.WebApp] Closing confirmation is not supported in version "+p);return}B=!!e,t.postEvent("web_app_setup_closing_behavior",!1,{need_confirmation:B})}(e)},get:function(){return B},enumerable:!0}),Object.defineProperty(n,"isVerticalSwipesEnabled",{set:function(e){!function(e){if(!Q("7.7")){console.warn("[Telegram.WebApp] Changing swipes behavior is not supported in version "+p);return}C=!!e,t.postEvent("web_app_setup_swipe_behavior",!1,{allow_vertical_swipe:C})}(e)},get:function(){return C},enumerable:!0}),Object.defineProperty(n,"headerColor",{set:function(e){!function(e){if(!Q("6.1")){console.warn("[Telegram.WebApp] Header color is not supported in version "+p);return}!Q("6.9")&&(s.bg_color&&s.bg_color==e?e="bg_color":s.secondary_bg_color&&s.secondary_bg_color==e&&(e="secondary_bg_color"));var t=null,r=null;if("bg_color"==e||"secondary_bg_color"==e)r=e;else if(Q("6.9")&&!(t=J(e)))throw console.error("[Telegram.WebApp] Header color format is invalid",e),Error("WebAppHeaderColorInvalid");if(!Q("6.9")&&"bg_color"!=r&&"secondary_bg_color"!=r)throw console.error("[Telegram.WebApp] Header color key should be one of Telegram.WebApp.themeParams.bg_color, Telegram.WebApp.themeParams.secondary_bg_color, 'bg_color', 'secondary_bg_color'",e),Error("WebAppHeaderColorKeyInvalid");I=r,S=t,M()}(e)},get:function(){return"secondary_bg_color"==I?s.secondary_bg_color:"bg_color"==I?s.bg_color:S},enumerable:!0}),Object.defineProperty(n,"backgroundColor",{set:function(e){!function(e){var t;if(!Q("6.1")){console.warn("[Telegram.WebApp] Background color is not supported in version "+p);return}if("bg_color"==e||"secondary_bg_color"==e)t=e;else if(!(t=J(e)))throw console.error("[Telegram.WebApp] Background color format is invalid",e),Error("WebAppBackgroundColorInvalid");j=t,D()}(e)},get:function(){return N()},enumerable:!0}),Object.defineProperty(n,"bottomBarColor",{set:function(e){!function(e){var t;if(!Q("7.10")){console.warn("[Telegram.WebApp] Bottom bar color is not supported in version "+p);return}if("bg_color"==e||"secondary_bg_color"==e||"bottom_bar_bg_color"==e)t=e;else if(!(t=J(e)))throw console.error("[Telegram.WebApp] Bottom bar color format is invalid",e),Error("WebAppBottomBarColorInvalid");H=t,R(),window.Telegram.WebApp.SecondaryButton.setParams({})}(e)},get:function(){return V()},enumerable:!0}),Object.defineProperty(n,"BackButton",{value:z,enumerable:!0}),Object.defineProperty(n,"MainButton",{value:et,enumerable:!0}),Object.defineProperty(n,"SecondaryButton",{value:er,enumerable:!0}),Object.defineProperty(n,"SettingsButton",{value:eo,enumerable:!0}),Object.defineProperty(n,"HapticFeedback",{value:en,enumerable:!0}),Object.defineProperty(n,"CloudStorage",{value:ei,enumerable:!0}),Object.defineProperty(n,"BiometricManager",{value:ea,enumerable:!0}),n.setHeaderColor=function(e){n.headerColor=e},n.setBackgroundColor=function(e){n.backgroundColor=e},n.setBottomBarColor=function(e){n.bottomBarColor=e},n.enableClosingConfirmation=function(){n.isClosingConfirmationEnabled=!0},n.disableClosingConfirmation=function(){n.isClosingConfirmationEnabled=!1},n.enableVerticalSwipes=function(){n.isVerticalSwipesEnabled=!0},n.disableVerticalSwipes=function(){n.isVerticalSwipesEnabled=!1},n.isVersionAtLeast=function(e){return Q(e)},n.onEvent=function(e,t){h(e,t)},n.offEvent=function(e,t){w(e,t)},n.sendData=function(e){if(!e||!e.length)throw console.error("[Telegram.WebApp] Data is required",e),Error("WebAppDataInvalid");if(function(e){if(window.Blob)try{return new Blob([e]).size}catch(e){}for(var t=e.length,r=e.length-1;r>=0;r--){var o=e.charCodeAt(r);o>127&&o<=2047?t++:o>2047&&o<=65535&&(t+=2),o>=56320&&o<=57343&&r--}return t}(e)>4096)throw console.error("[Telegram.WebApp] Data is too long",e),Error("WebAppDataInvalid");t.postEvent("web_app_data_send",!1,{data:e})},n.switchInlineQuery=function(e,o){if(!Q("6.6"))throw console.error("[Telegram.WebApp] Method switchInlineQuery is not supported in version "+p),Error("WebAppMethodUnsupported");if(!r.tgWebAppBotInline)throw console.error("[Telegram.WebApp] Inline mode is disabled for this bot. Read more about inline mode: https://core.telegram.org/bots/inline"),Error("WebAppInlineModeDisabled");if((e=e||"").length>256)throw console.error("[Telegram.WebApp] Inline query is too long",e),Error("WebAppInlineQueryInvalid");var n=[];if(o){if(!Array.isArray(o))throw console.error("[Telegram.WebApp] Choose chat types should be an array",o),Error("WebAppInlineChooseChatTypesInvalid");for(var i={users:1,bots:1,groups:1,channels:1},a=0;a<o.length;a++){var s=o[a];if(!i[s])throw console.error("[Telegram.WebApp] Choose chat type is invalid",s),Error("WebAppInlineChooseChatTypeInvalid");2!=i[s]&&(i[s]=2,n.push(s))}}t.postEvent("web_app_switch_inline_query",!1,{query:e,chat_types:n})},n.openLink=function(e,r){var o=document.createElement("A");if(o.href=e,"http:"!=o.protocol&&"https:"!=o.protocol)throw console.error("[Telegram.WebApp] Url protocol is not supported",e),Error("WebAppTgUrlInvalid");var e=o.href;if(r=r||{},Q("6.1")){var n={url:e};Q("6.4")&&r.try_instant_view&&(n.try_instant_view=!0),Q("7.6")&&r.try_browser&&(n.try_browser=r.try_browser),t.postEvent("web_app_open_link",!1,n)}else window.open(e,"_blank")},n.openTelegramLink=function(e){var r=document.createElement("A");if(r.href=e,"http:"!=r.protocol&&"https:"!=r.protocol)throw console.error("[Telegram.WebApp] Url protocol is not supported",e),Error("WebAppTgUrlInvalid");if("t.me"!=r.hostname)throw console.error("[Telegram.WebApp] Url host is not supported",e),Error("WebAppTgUrlInvalid");var n=r.pathname+r.search;o||Q("6.1")?t.postEvent("web_app_open_tg_link",!1,{path_full:n}):location.href="https://t.me"+n},n.openInvoice=function(e,r){var o,n,i=document.createElement("A");if(i.href=e,"http:"!=i.protocol&&"https:"!=i.protocol||"t.me"!=i.hostname||!(o=i.pathname.match(/^\/(\$|invoice\/)([A-Za-z0-9\-_=]+)$/))||!(n=o[2]))throw console.error("[Telegram.WebApp] Invoice url is invalid",e),Error("WebAppInvoiceUrlInvalid");if(!Q("6.1"))throw console.error("[Telegram.WebApp] Method openInvoice is not supported in version "+p),Error("WebAppMethodUnsupported");if(es[n])throw console.error("[Telegram.WebApp] Invoice is already opened"),Error("WebAppInvoiceOpened");es[n]={url:e,callback:r},t.postEvent("web_app_open_invoice",!1,{slug:n})},n.showPopup=function(e,r){if(!Q("6.2"))throw console.error("[Telegram.WebApp] Method showPopup is not supported in version "+p),Error("WebAppMethodUnsupported");if(el)throw console.error("[Telegram.WebApp] Popup is already opened"),Error("WebAppPopupOpened");var o="",n="",i=[],a={};if(void 0!==e.title){if((o=v(e.title)).length>64)throw console.error("[Telegram.WebApp] Popup title is too long",o),Error("WebAppPopupParamInvalid");o.length>0&&(a.title=o)}if(void 0!==e.message&&(n=v(e.message)),!n.length)throw console.error("[Telegram.WebApp] Popup message is required",e.message),Error("WebAppPopupParamInvalid");if(n.length>256)throw console.error("[Telegram.WebApp] Popup message is too long",n),Error("WebAppPopupParamInvalid");if(a.message=n,void 0!==e.buttons){if(!Array.isArray(e.buttons))throw console.error("[Telegram.WebApp] Popup buttons should be an array",e.buttons),Error("WebAppPopupParamInvalid");for(var s=0;s<e.buttons.length;s++){var l=e.buttons[s],c={},u="";if(void 0!==l.id&&(u=l.id.toString()).length>64)throw console.error("[Telegram.WebApp] Popup button id is too long",u),Error("WebAppPopupParamInvalid");c.id=u;var b=l.type;if(void 0===b&&(b="default"),c.type=b,"ok"==b||"close"==b||"cancel"==b);else if("default"==b||"destructive"==b){var d="";if(void 0!==l.text&&(d=v(l.text)),!d.length)throw console.error("[Telegram.WebApp] Popup button text is required for type "+b,l.text),Error("WebAppPopupParamInvalid");if(d.length>64)throw console.error("[Telegram.WebApp] Popup button text is too long",d),Error("WebAppPopupParamInvalid");c.text=d}else throw console.error("[Telegram.WebApp] Popup button type is invalid",b),Error("WebAppPopupParamInvalid");i.push(c)}}else i.push({id:"",type:"close"});if(i.length<1)throw console.error("[Telegram.WebApp] Popup should have at least one button"),Error("WebAppPopupParamInvalid");if(i.length>3)throw console.error("[Telegram.WebApp] Popup should not have more than 3 buttons"),Error("WebAppPopupParamInvalid");a.buttons=i,el={callback:r},t.postEvent("web_app_open_popup",!1,a)},n.showAlert=function(e,t){n.showPopup({message:e},t?function(){t()}:null)},n.showConfirm=function(e,t){n.showPopup({message:e,buttons:[{type:"ok",id:"ok"},{type:"cancel"}]},t?function(e){t("ok"==e)}:null)},n.showScanQrPopup=function(e,r){if(!Q("6.4"))throw console.error("[Telegram.WebApp] Method showScanQrPopup is not supported in version "+p),Error("WebAppMethodUnsupported");if(ep)throw console.error("[Telegram.WebApp] Popup is already opened"),Error("WebAppScanQrPopupOpened");var o="",n={};if(void 0!==e.text){if((o=v(e.text)).length>64)throw console.error("[Telegram.WebApp] Scan QR popup text is too long",o),Error("WebAppScanQrPopupParamInvalid");o.length>0&&(n.text=o)}ep={callback:r},t.postEvent("web_app_open_scan_qr_popup",!1,n)},n.closeScanQrPopup=function(){if(!Q("6.4"))throw console.error("[Telegram.WebApp] Method closeScanQrPopup is not supported in version "+p),Error("WebAppMethodUnsupported");ep=!1,t.postEvent("web_app_close_scan_qr_popup",!1)},n.readTextFromClipboard=function(e){if(!Q("6.4"))throw console.error("[Telegram.WebApp] Method readTextFromClipboard is not supported in version "+p),Error("WebAppMethodUnsupported");var r=E(16);W[r]={callback:e},t.postEvent("web_app_read_text_from_clipboard",!1,{req_id:r})},n.requestWriteAccess=function(e){if(!Q("6.9"))throw console.error("[Telegram.WebApp] Method requestWriteAccess is not supported in version "+p),Error("WebAppMethodUnsupported");if(ec)throw console.error("[Telegram.WebApp] Write access is already requested"),Error("WebAppWriteAccessRequested");ec={callback:e},t.postEvent("web_app_request_write_access")},n.requestContact=function(e){if(!Q("6.9"))throw console.error("[Telegram.WebApp] Method requestContact is not supported in version "+p),Error("WebAppMethodUnsupported");if(eu)throw console.error("[Telegram.WebApp] Contact is already requested"),Error("WebAppContactRequested");eu={callback:e},t.postEvent("web_app_request_phone")},n.shareToStory=function(e,r){if(r=r||{},!Q("7.8"))throw console.error("[Telegram.WebApp] Method shareToStory is not supported in version "+p),Error("WebAppMethodUnsupported");var o=document.createElement("A");if(o.href=e,"http:"!=o.protocol&&"https:"!=o.protocol)throw console.error("[Telegram.WebApp] Media url protocol is not supported",url),Error("WebAppMediaUrlInvalid");var n={};if(n.media_url=o.href,void 0!==r.text){var i=v(r.text);if(i.length>2048)throw console.error("[Telegram.WebApp] Text is too long",i),Error("WebAppShareToStoryParamInvalid");i.length>0&&(n.text=i)}if(void 0!==r.widget_link){if(r.widget_link=r.widget_link||{},o.href=r.widget_link.url,"http:"!=o.protocol&&"https:"!=o.protocol)throw console.error("[Telegram.WebApp] Link protocol is not supported",url),Error("WebAppShareToStoryParamInvalid");var a={url:o.href};if(void 0!==r.widget_link.name){var s=v(r.widget_link.name);if(s.length>48)throw console.error("[Telegram.WebApp] Link name is too long",s),Error("WebAppShareToStoryParamInvalid");s.length>0&&(a.name=s)}n.widget_link=a}t.postEvent("web_app_share_to_story",!1,n)},n.invokeCustomMethod=function(e,t,r){eb(e,t,r)},n.ready=function(){t.postEvent("web_app_ready")},n.expand=function(){t.postEvent("web_app_expand")},n.close=function(e){e=e||{};var r={};Q("7.6")&&e.return_back&&(r.return_back=!0),t.postEvent("web_app_close",!1,r)},window.Telegram.WebApp=n,M(),D(),R(),x(),r.tgWebAppShowSettings&&eo.show(),window.addEventListener("resize",m),o&&document.addEventListener("click",function(e){if(!e.metaKey&&!e.ctrlKey){for(var t=e.target;"A"!=t.tagName&&t.parentNode;)t=t.parentNode;"A"==t.tagName&&"_blank"!=t.target&&("http:"==t.protocol||"https:"==t.protocol)&&"t.me"==t.hostname&&(n.openTgLink(t.href),e.preventDefault())}}),t.onEvent("theme_changed",function(e,t){t.theme_params&&(A(t.theme_params),window.Telegram.WebApp.MainButton.setParams({}),window.Telegram.WebApp.SecondaryButton.setParams({}),M(),D(),R(),_("themeChanged"))}),t.onEvent("viewport_changed",function(e,t){t.height&&(window.removeEventListener("resize",m),x(t))}),t.onEvent("invoice_closed",function(e,t){if(t.slug&&es[t.slug]){var r=es[t.slug];delete es[t.slug],r.callback&&r.callback(t.status),_("invoiceClosed",{url:r.url,status:t.status})}}),t.onEvent("popup_closed",function(e,t){if(el){var r=el;el=!1;var o=null;void 0!==t.button_id&&(o=t.button_id),r.callback&&r.callback(o),_("popupClosed",{button_id:o})}}),t.onEvent("qr_text_received",function(e,r){if(ep){var o=ep,n=null;void 0!==r.data&&(n=r.data),o.callback&&o.callback(n)&&(ep=!1,t.postEvent("web_app_close_scan_qr_popup",!1)),_("qrTextReceived",{data:n})}}),t.onEvent("scan_qr_popup_closed",function(e,t){ep=!1,_("scanQrPopupClosed")}),t.onEvent("clipboard_text_received",function(e,t){if(t.req_id&&W[t.req_id]){var r=W[t.req_id];delete W[t.req_id];var o=null;void 0!==t.data&&(o=t.data),r.callback&&r.callback(o),_("clipboardTextReceived",{data:o})}}),t.onEvent("write_access_requested",function(e,t){if(ec){var r=ec;ec=!1,r.callback&&r.callback("allowed"==t.status),_("writeAccessRequested",{status:t.status})}}),t.onEvent("phone_requested",function(t,r){if(eu){var o,n,i,a,s,l=eu;eu=!1;var p="sent"==r.status,c={status:r.status};p?(o=function(t){if(t&&t.length)for(var r in c.response=t,c.responseUnsafe=e.urlParseQueryString(t),c.responseUnsafe){var o=c.responseUnsafe[r];try{("{"==o.substr(0,1)&&"}"==o.substr(-1)||"["==o.substr(0,1)&&"]"==o.substr(-1))&&(c.responseUnsafe[r]=JSON.parse(o))}catch(e){}}l.callback&&l.callback(p,c),_("contactRequested",c)},a=0,s=function(){eb("getRequestedContact",{},function(e,t){t&&t.length?(clearTimeout(i),o(t)):(a+=50,n=setTimeout(s,a))})},i=setTimeout(function(){clearTimeout(n),o("")},3e3),s()):(l.callback&&l.callback(p,c),_("contactRequested",c))}}),t.onEvent("custom_method_invoked",function(e,t){if(t.req_id&&W[t.req_id]){var r=W[t.req_id];delete W[t.req_id];var o=null,n=null;void 0!==t.result&&(o=t.result),void 0!==t.error&&(n=t.error),r.callback&&r.callback(n,o)}}),t.postEvent("web_app_request_theme"),t.postEvent("web_app_request_viewport")}()}}]);