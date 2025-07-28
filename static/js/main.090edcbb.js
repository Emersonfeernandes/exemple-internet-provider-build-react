/*! For license information please see main.090edcbb.js.LICENSE.txt */
(()=>{var e={483:(e,t,n)=>{"use strict";e.exports=n(592)},556:(e,t,n)=>{"use strict";var r=n(557),a=n(483),o=n(998);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function s(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function u(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function c(e){if(s(e)!==e)throw Error(i(188))}function d(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=d(e)))return t;e=e.sibling}return null}var f=Object.assign,p=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),w=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),E=Symbol.for("react.lazy");Symbol.for("react.scope");var P=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var _=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var z=Symbol.iterator;function L(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=z&&e[z]||e["@@iterator"])?e:null}var T=Symbol.for("react.client.reference");function N(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===T?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case g:return"Fragment";case y:return"Profiler";case v:return"StrictMode";case S:return"Suspense";case j:return"SuspenseList";case P:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case m:return"Portal";case w:return(e.displayName||"Context")+".Provider";case x:return(e._context.displayName||"Context")+".Consumer";case k:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case C:return null!==(t=e.displayName||null)?t:N(e.type)||"Memo";case E:t=e._payload,e=e._init;try{return N(e(t))}catch(n){}}return null}var O=Array.isArray,R=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},$=[],D=-1;function M(e){return{current:e}}function I(e){0>D||(e.current=$[D],$[D]=null,D--)}function U(e,t){D++,$[D]=e.current,e.current=t}var B=M(null),W=M(null),H=M(null),V=M(null);function q(e,t){switch(U(H,t),U(W,e),U(B,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ad(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=od(t=ad(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}I(B),U(B,e)}function K(){I(B),I(W),I(H)}function Q(e){null!==e.memoizedState&&U(V,e);var t=B.current,n=od(t,e.type);t!==n&&(U(W,e),U(B,n))}function G(e){W.current===e&&(I(B),I(W)),V.current===e&&(I(V),Qd._currentValue=F)}var Y=Object.prototype.hasOwnProperty,X=r.unstable_scheduleCallback,J=r.unstable_cancelCallback,Z=r.unstable_shouldYield,ee=r.unstable_requestPaint,te=r.unstable_now,ne=r.unstable_getCurrentPriorityLevel,re=r.unstable_ImmediatePriority,ae=r.unstable_UserBlockingPriority,oe=r.unstable_NormalPriority,ie=r.unstable_LowPriority,le=r.unstable_IdlePriority,se=r.log,ue=r.unstable_setDisableYieldValue,ce=null,de=null;function fe(e){if("function"===typeof se&&ue(e),de&&"function"===typeof de.setStrictMode)try{de.setStrictMode(ce,e)}catch(t){}}var pe=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(he(e)/me|0)|0},he=Math.log,me=Math.LN2;var ge=256,ve=4194304;function ye(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194048&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function be(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var a=0,o=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var l=134217727&r;return 0!==l?0!==(r=l&~o)?a=ye(r):0!==(i&=l)?a=ye(i):n||0!==(n=l&~e)&&(a=ye(n)):0!==(l=r&~o)?a=ye(l):0!==i?a=ye(i):n||0!==(n=r&~e)&&(a=ye(n)),0===a?0:0!==t&&t!==a&&0===(t&o)&&((o=a&-a)>=(n=t&-t)||32===o&&0!==(4194048&n))?t:a}function xe(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function we(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ke(){var e=ge;return 0===(4194048&(ge<<=1))&&(ge=256),e}function Se(){var e=ve;return 0===(62914560&(ve<<=1))&&(ve=4194304),e}function je(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ce(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ee(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-pe(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|4194090&n}function Pe(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pe(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}function _e(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ze(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Le(){var e=A.p;return 0!==e?e:void 0===(e=window.event)?32:cf(e.type)}var Te=Math.random().toString(36).slice(2),Ne="__reactFiber$"+Te,Oe="__reactProps$"+Te,Re="__reactContainer$"+Te,Ae="__reactEvents$"+Te,Fe="__reactListeners$"+Te,$e="__reactHandles$"+Te,De="__reactResources$"+Te,Me="__reactMarker$"+Te;function Ie(e){delete e[Ne],delete e[Oe],delete e[Ae],delete e[Fe],delete e[$e]}function Ue(e){var t=e[Ne];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Re]||n[Ne]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=bd(e);null!==e;){if(n=e[Ne])return n;e=bd(e)}return t}n=(e=n).parentNode}return null}function Be(e){if(e=e[Ne]||e[Re]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function We(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(i(33))}function He(e){var t=e[De];return t||(t=e[De]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ve(e){e[Me]=!0}var qe=new Set,Ke={};function Qe(e,t){Ge(e,t),Ge(e+"Capture",t)}function Ge(e,t){for(Ke[e]=t,e=0;e<t.length;e++)qe.add(t[e])}var Ye,Xe,Je=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ze={},et={};function tt(e,t,n){if(a=t,Y.call(et,a)||!Y.call(Ze,a)&&(Je.test(a)?et[a]=!0:(Ze[a]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var a}function nt(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function rt(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function at(e){if(void 0===Ye)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ye=t&&t[1]||"",Xe=-1<n.stack.indexOf("\n    at")?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+Ye+e+Xe}var ot=!1;function it(e,t){if(!e||ot)return"";ot=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(a){var r=a}Reflect.construct(e,[],n)}else{try{n.call()}catch(o){r=o}e.call(n.prototype)}}else{try{throw Error()}catch(i){r=i}(n=e())&&"function"===typeof n.catch&&n.catch((function(){}))}}catch(l){if(l&&r&&"string"===typeof l.stack)return[l.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=r.DetermineComponentFrameRoot(),i=o[0],l=o[1];if(i&&l){var s=i.split("\n"),u=l.split("\n");for(a=r=0;r<s.length&&!s[r].includes("DetermineComponentFrameRoot");)r++;for(;a<u.length&&!u[a].includes("DetermineComponentFrameRoot");)a++;if(r===s.length||a===u.length)for(r=s.length-1,a=u.length-1;1<=r&&0<=a&&s[r]!==u[a];)a--;for(;1<=r&&0<=a;r--,a--)if(s[r]!==u[a]){if(1!==r||1!==a)do{if(r--,0>--a||s[r]!==u[a]){var c="\n"+s[r].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}}while(1<=r&&0<=a);break}}}finally{ot=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?at(n):""}function lt(e){switch(e.tag){case 26:case 27:case 5:return at(e.type);case 16:return at("Lazy");case 13:return at("Suspense");case 19:return at("SuspenseList");case 0:case 15:return it(e.type,!1);case 11:return it(e.type.render,!1);case 1:return it(e.type,!0);case 31:return at("Activity");default:return""}}function st(e){try{var t="";do{t+=lt(e),e=e.return}while(e);return t}catch(n){return"\nError generating stack: "+n.message+"\n"+n.stack}}function ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ct(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function dt(e){e._valueTracker||(e._valueTracker=function(e){var t=ct(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function ft(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ct(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function pt(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var ht=/[\n"\\]/g;function mt(e){return e.replace(ht,(function(e){return"\\"+e.charCodeAt(0).toString(16)+" "}))}function gt(e,t,n,r,a,o,i,l){e.name="",null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i?e.type=i:e.removeAttribute("type"),null!=t?"number"===i?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ut(t)):e.value!==""+ut(t)&&(e.value=""+ut(t)):"submit"!==i&&"reset"!==i||e.removeAttribute("value"),null!=t?yt(e,i,ut(t)):null!=n?yt(e,i,ut(n)):null!=r&&e.removeAttribute("value"),null==a&&null!=o&&(e.defaultChecked=!!o),null!=a&&(e.checked=a&&"function"!==typeof a&&"symbol"!==typeof a),null!=l&&"function"!==typeof l&&"symbol"!==typeof l&&"boolean"!==typeof l?e.name=""+ut(l):e.removeAttribute("name")}function vt(e,t,n,r,a,o,i,l){if(null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.type=o),null!=t||null!=n){if(!("submit"!==o&&"reset"!==o||void 0!==t&&null!==t))return;n=null!=n?""+ut(n):"",t=null!=t?""+ut(t):n,l||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:a)&&"symbol"!==typeof r&&!!r,e.checked=l?e.checked:!!r,e.defaultChecked=!!r,null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i&&(e.name=i)}function yt(e,t,n){"number"===t&&pt(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function bt(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ut(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function xt(e,t,n){null==t||((t=""+ut(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+ut(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function wt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(i(92));if(O(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=ut(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r)}function kt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var St=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jt(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||St.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ct(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(i(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&jt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&jt(e,o,t[o])}function Et(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_t=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zt(e){return _t.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Lt=null;function Tt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Nt=null,Ot=null;function Rt(e){var t=Be(e);if(t&&(e=t.stateNode)){var n=e[Oe]||null;e:switch(e=t.stateNode,t.type){case"input":if(gt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Oe]||null;if(!a)throw Error(i(90));gt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&ft(r)}break e;case"textarea":xt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&bt(e,!!n.multiple,t,!1)}}}var At=!1;function Ft(e,t,n){if(At)return e(t,n);At=!0;try{return e(t)}finally{if(At=!1,(null!==Nt||null!==Ot)&&(Uu(),Nt&&(t=Nt,e=Ot,Ot=Nt=null,Rt(t),e)))for(t=0;t<e.length;t++)Rt(e[t])}}function $t(e,t){var n=e.stateNode;if(null===n)return null;var r=n[Oe]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(i(231,t,typeof n));return n}var Dt=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Mt=!1;if(Dt)try{var It={};Object.defineProperty(It,"passive",{get:function(){Mt=!0}}),window.addEventListener("test",It,It),window.removeEventListener("test",It,It)}catch(Rf){Mt=!1}var Ut=null,Bt=null,Wt=null;function Ht(){if(Wt)return Wt;var e,t,n=Bt,r=n.length,a="value"in Ut?Ut.value:Ut.textContent,o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===a[o-t];t++);return Wt=a.slice(e,1<t?1-t:void 0)}function Vt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function qt(){return!0}function Kt(){return!1}function Qt(e){function t(t,n,r,a,o){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?qt:Kt,this.isPropagationStopped=Kt,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=qt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=qt)},persist:function(){},isPersistent:qt}),t}var Gt,Yt,Xt,Jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zt=Qt(Jt),en=f({},Jt,{view:0,detail:0}),tn=Qt(en),nn=f({},en,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xt&&(Xt&&"mousemove"===e.type?(Gt=e.screenX-Xt.screenX,Yt=e.screenY-Xt.screenY):Yt=Gt=0,Xt=e),Gt)},movementY:function(e){return"movementY"in e?e.movementY:Yt}}),rn=Qt(nn),an=Qt(f({},nn,{dataTransfer:0})),on=Qt(f({},en,{relatedTarget:0})),ln=Qt(f({},Jt,{animationName:0,elapsedTime:0,pseudoElement:0})),sn=Qt(f({},Jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),un=Qt(f({},Jt,{data:0})),cn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=fn[e])&&!!t[e]}function hn(){return pn}var mn=Qt(f({},en,{key:function(e){if(e.key){var t=cn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Vt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?dn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hn,charCode:function(e){return"keypress"===e.type?Vt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Vt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),gn=Qt(f({},nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),vn=Qt(f({},en,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hn})),yn=Qt(f({},Jt,{propertyName:0,elapsedTime:0,pseudoElement:0})),bn=Qt(f({},nn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),xn=Qt(f({},Jt,{newState:0,oldState:0})),wn=[9,13,27,32],kn=Dt&&"CompositionEvent"in window,Sn=null;Dt&&"documentMode"in document&&(Sn=document.documentMode);var jn=Dt&&"TextEvent"in window&&!Sn,Cn=Dt&&(!kn||Sn&&8<Sn&&11>=Sn),En=String.fromCharCode(32),Pn=!1;function _n(e,t){switch(e){case"keyup":return-1!==wn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Ln=!1;var Tn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Tn[e.type]:"textarea"===t}function On(e,t,n,r){Nt?Ot?Ot.push(r):Ot=[r]:Nt=r,0<(t=Hc(t,"onChange")).length&&(n=new Zt("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Rn=null,An=null;function Fn(e){Fc(e,0)}function $n(e){if(ft(We(e)))return e}function Dn(e,t){if("change"===e)return t}var Mn=!1;if(Dt){var In;if(Dt){var Un="oninput"in document;if(!Un){var Bn=document.createElement("div");Bn.setAttribute("oninput","return;"),Un="function"===typeof Bn.oninput}In=Un}else In=!1;Mn=In&&(!document.documentMode||9<document.documentMode)}function Wn(){Rn&&(Rn.detachEvent("onpropertychange",Hn),An=Rn=null)}function Hn(e){if("value"===e.propertyName&&$n(An)){var t=[];On(t,An,e,Tt(e)),Ft(Fn,t)}}function Vn(e,t,n){"focusin"===e?(Wn(),An=n,(Rn=t).attachEvent("onpropertychange",Hn)):"focusout"===e&&Wn()}function qn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return $n(An)}function Kn(e,t){if("click"===e)return $n(t)}function Qn(e,t){if("input"===e||"change"===e)return $n(t)}var Gn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function Yn(e,t){if(Gn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Y.call(t,a)||!Gn(e[a],t[a]))return!1}return!0}function Xn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jn(e,t){var n,r=Xn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Xn(r)}}function Zn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Zn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function er(e){for(var t=pt((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=pt((e=t.contentWindow).document)}return t}function tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var nr=Dt&&"documentMode"in document&&11>=document.documentMode,rr=null,ar=null,or=null,ir=!1;function lr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;ir||null==rr||rr!==pt(r)||("selectionStart"in(r=rr)&&tr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},or&&Yn(or,r)||(or=r,0<(r=Hc(ar,"onSelect")).length&&(t=new Zt("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function sr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ur={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionrun:sr("Transition","TransitionRun"),transitionstart:sr("Transition","TransitionStart"),transitioncancel:sr("Transition","TransitionCancel"),transitionend:sr("Transition","TransitionEnd")},cr={},dr={};function fr(e){if(cr[e])return cr[e];if(!ur[e])return e;var t,n=ur[e];for(t in n)if(n.hasOwnProperty(t)&&t in dr)return cr[e]=n[t];return e}Dt&&(dr=document.createElement("div").style,"AnimationEvent"in window||(delete ur.animationend.animation,delete ur.animationiteration.animation,delete ur.animationstart.animation),"TransitionEvent"in window||delete ur.transitionend.transition);var pr=fr("animationend"),hr=fr("animationiteration"),mr=fr("animationstart"),gr=fr("transitionrun"),vr=fr("transitionstart"),yr=fr("transitioncancel"),br=fr("transitionend"),xr=new Map,wr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(e,t){xr.set(e,t),Qe(t,[e])}wr.push("scrollEnd");var Sr=new WeakMap;function jr(e,t){if("object"===typeof e&&null!==e){var n=Sr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:st(t)},Sr.set(e,t),t)}return{value:e,source:t,stack:st(t)}}var Cr=[],Er=0,Pr=0;function _r(){for(var e=Er,t=Pr=Er=0;t<e;){var n=Cr[t];Cr[t++]=null;var r=Cr[t];Cr[t++]=null;var a=Cr[t];Cr[t++]=null;var o=Cr[t];if(Cr[t++]=null,null!==r&&null!==a){var i=r.pending;null===i?a.next=a:(a.next=i.next,i.next=a),r.pending=a}0!==o&&Nr(n,a,o)}}function zr(e,t,n,r){Cr[Er++]=e,Cr[Er++]=t,Cr[Er++]=n,Cr[Er++]=r,Pr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Lr(e,t,n,r){return zr(e,t,n,r),Or(e)}function Tr(e,t){return zr(e,null,null,t),Or(e)}function Nr(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var a=!1,o=e.return;null!==o;)o.childLanes|=n,null!==(r=o.alternate)&&(r.childLanes|=n),22===o.tag&&(null===(e=o.stateNode)||1&e._visibility||(a=!0)),e=o,o=o.return;return 3===e.tag?(o=e.stateNode,a&&null!==t&&(a=31-pe(n),null===(r=(e=o.hiddenUpdates)[a])?e[a]=[t]:r.push(t),t.lane=536870912|n),o):null}function Or(e){if(50<Nu)throw Nu=0,Ou=null,Error(i(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Rr={};function Ar(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fr(e,t,n,r){return new Ar(e,t,n,r)}function $r(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Dr(e,t){var n=e.alternate;return null===n?((n=Fr(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Mr(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ir(e,t,n,r,a,o){var l=0;if(r=e,"function"===typeof e)$r(e)&&(l=1);else if("string"===typeof e)l=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,B.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case P:return(e=Fr(31,n,t,a)).elementType=P,e.lanes=o,e;case g:return Ur(n.children,a,o,t);case v:l=8,a|=24;break;case y:return(e=Fr(12,n,t,2|a)).elementType=y,e.lanes=o,e;case S:return(e=Fr(13,n,t,a)).elementType=S,e.lanes=o,e;case j:return(e=Fr(19,n,t,a)).elementType=j,e.lanes=o,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case b:case w:l=10;break e;case x:l=9;break e;case k:l=11;break e;case C:l=14;break e;case E:l=16,r=null;break e}l=29,n=Error(i(130,null===e?"null":typeof e,"")),r=null}return(t=Fr(l,n,t,a)).elementType=e,t.type=r,t.lanes=o,t}function Ur(e,t,n,r){return(e=Fr(7,e,r,t)).lanes=n,e}function Br(e,t,n){return(e=Fr(6,e,null,t)).lanes=n,e}function Wr(e,t,n){return(t=Fr(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Hr=[],Vr=0,qr=null,Kr=0,Qr=[],Gr=0,Yr=null,Xr=1,Jr="";function Zr(e,t){Hr[Vr++]=Kr,Hr[Vr++]=qr,qr=e,Kr=t}function ea(e,t,n){Qr[Gr++]=Xr,Qr[Gr++]=Jr,Qr[Gr++]=Yr,Yr=e;var r=Xr;e=Jr;var a=32-pe(r)-1;r&=~(1<<a),n+=1;var o=32-pe(t)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,Xr=1<<32-pe(t)+a|n<<a|r,Jr=o+e}else Xr=1<<o|n<<a|r,Jr=e}function ta(e){null!==e.return&&(Zr(e,1),ea(e,1,0))}function na(e){for(;e===qr;)qr=Hr[--Vr],Hr[Vr]=null,Kr=Hr[--Vr],Hr[Vr]=null;for(;e===Yr;)Yr=Qr[--Gr],Qr[Gr]=null,Jr=Qr[--Gr],Qr[Gr]=null,Xr=Qr[--Gr],Qr[Gr]=null}var ra=null,aa=null,oa=!1,ia=null,la=!1,sa=Error(i(519));function ua(e){throw ma(jr(Error(i(418,"")),e)),sa}function ca(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Ne]=e,t[Oe]=r,n){case"dialog":$c("cancel",t),$c("close",t);break;case"iframe":case"object":case"embed":$c("load",t);break;case"video":case"audio":for(n=0;n<Rc.length;n++)$c(Rc[n],t);break;case"source":$c("error",t);break;case"img":case"image":case"link":$c("error",t),$c("load",t);break;case"details":$c("toggle",t);break;case"input":$c("invalid",t),vt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),dt(t);break;case"select":$c("invalid",t);break;case"textarea":$c("invalid",t),wt(t,r.value,r.defaultValue,r.children),dt(t)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||Yc(t.textContent,n)?(null!=r.popover&&($c("beforetoggle",t),$c("toggle",t)),null!=r.onScroll&&$c("scroll",t),null!=r.onScrollEnd&&$c("scrollend",t),null!=r.onClick&&(t.onclick=Xc),t=!0):t=!1,t||ua(e)}function da(e){for(ra=e.return;ra;)switch(ra.tag){case 5:case 13:return void(la=!1);case 27:case 3:return void(la=!0);default:ra=ra.return}}function fa(e){if(e!==ra)return!1;if(!oa)return da(e),oa=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||id(e.type,e.memoizedProps)),t=!t),t&&aa&&ua(e),da(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===n){aa=vd(e.nextSibling);break e}n--}else"$"!==t&&"$!"!==t&&"$?"!==t||n++;e=e.nextSibling}aa=null}}else 27===n?(n=aa,pd(e.type)?(e=yd,yd=null,aa=e):aa=n):aa=ra?vd(e.stateNode.nextSibling):null;return!0}function pa(){aa=ra=null,oa=!1}function ha(){var e=ia;return null!==e&&(null===bu?bu=e:bu.push.apply(bu,e),ia=null),e}function ma(e){null===ia?ia=[e]:ia.push(e)}var ga=M(null),va=null,ya=null;function ba(e,t,n){U(ga,t._currentValue),t._currentValue=n}function xa(e){e._currentValue=ga.current,I(ga)}function wa(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ka(e,t,n,r){var a=e.child;for(null!==a&&(a.return=e);null!==a;){var o=a.dependencies;if(null!==o){var l=a.child;o=o.firstContext;e:for(;null!==o;){var s=o;o=a;for(var u=0;u<t.length;u++)if(s.context===t[u]){o.lanes|=n,null!==(s=o.alternate)&&(s.lanes|=n),wa(o.return,n,e),r||(l=null);break e}o=s.next}}else if(18===a.tag){if(null===(l=a.return))throw Error(i(341));l.lanes|=n,null!==(o=l.alternate)&&(o.lanes|=n),wa(l,n,e),l=null}else l=a.child;if(null!==l)l.return=a;else for(l=a;null!==l;){if(l===e){l=null;break}if(null!==(a=l.sibling)){a.return=l.return,l=a;break}l=l.return}a=l}}function Sa(e,t,n,r){e=null;for(var a=t,o=!1;null!==a;){if(!o)if(0!==(524288&a.flags))o=!0;else if(0!==(262144&a.flags))break;if(10===a.tag){var l=a.alternate;if(null===l)throw Error(i(387));if(null!==(l=l.memoizedProps)){var s=a.type;Gn(a.pendingProps.value,l.value)||(null!==e?e.push(s):e=[s])}}else if(a===V.current){if(null===(l=a.alternate))throw Error(i(387));l.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(null!==e?e.push(Qd):e=[Qd])}a=a.return}null!==e&&ka(t,e,n,r),t.flags|=262144}function ja(e){for(e=e.firstContext;null!==e;){if(!Gn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ca(e){va=e,ya=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Ea(e){return _a(va,e)}function Pa(e,t){return null===va&&Ca(e),_a(e,t)}function _a(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===ya){if(null===e)throw Error(i(308));ya=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ya=ya.next=t;return n}var za="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach((function(e){return e()}))}},La=r.unstable_scheduleCallback,Ta=r.unstable_NormalPriority,Na={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Oa(){return{controller:new za,data:new Map,refCount:0}}function Ra(e){e.refCount--,0===e.refCount&&La(Ta,(function(){e.controller.abort()}))}var Aa=null,Fa=0,$a=0,Da=null;function Ma(){if(0===--Fa&&null!==Aa){null!==Da&&(Da.status="fulfilled");var e=Aa;Aa=null,$a=0,Da=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Ia=R.S;R.S=function(e,t){"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===Aa){var n=Aa=[];Fa=0,$a=zc(),Da={status:"pending",value:void 0,then:function(e){n.push(e)}}}Fa++,t.then(Ma,Ma)}(0,t),null!==Ia&&Ia(e,t)};var Ua=M(null);function Ba(){var e=Ua.current;return null!==e?e:ru.pooledCache}function Wa(e,t){U(Ua,null===t?Ua.current:t.pool)}function Ha(){var e=Ba();return null===e?null:{parent:Na._currentValue,pool:e}}var Va=Error(i(460)),qa=Error(i(474)),Ka=Error(i(542)),Qa={then:function(){}};function Ga(e){return"fulfilled"===(e=e.status)||"rejected"===e}function Ya(){}function Xa(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Ya,Ya),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw eo(e=t.reason),e;default:if("string"===typeof t.status)t.then(Ya,Ya);else{if(null!==(e=ru)&&100<e.shellSuspendCounter)throw Error(i(482));(e=t).status="pending",e.then((function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}}),(function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}}))}switch(t.status){case"fulfilled":return t.value;case"rejected":throw eo(e=t.reason),e}throw Ja=t,Va}}var Ja=null;function Za(){if(null===Ja)throw Error(i(459));var e=Ja;return Ja=null,e}function eo(e){if(e===Va||e===Ka)throw Error(i(483))}var to=!1;function no(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ro(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ao(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function oo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&nu)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,t=Or(e),Nr(e,null,n),t}return zr(e,r,t,n),Or(e)}function io(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Pe(e,n)}}function lo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var i={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===o?a=o=i:o=o.next=i,n=n.next}while(null!==n);null===o?a=o=t:o=o.next=t}else a=o=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var so=!1;function uo(){if(so){if(null!==Da)throw Da}}function co(e,t,n,r){so=!1;var a=e.updateQueue;to=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,u=s.next;s.next=null,null===i?o=u:i.next=u,i=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==i&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==o){var d=a.baseState;for(i=0,c=u=s=null,l=o;;){var p=-536870913&l.lane,h=p!==l.lane;if(h?(ou&p)===p:(r&p)===p){0!==p&&p===$a&&(so=!0),null!==c&&(c=c.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var m=e,g=l;p=t;var v=n;switch(g.tag){case 1:if("function"===typeof(m=g.payload)){d=m.call(v,d,p);break e}d=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(p="function"===typeof(m=g.payload)?m.call(v,d,p):m)||void 0===p)break e;d=f({},d,p);break e;case 2:to=!0}}null!==(p=l.callback)&&(e.flags|=64,h&&(e.flags|=8192),null===(h=a.callbacks)?a.callbacks=[p]:h.push(p))}else h={lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=h,s=d):c=c.next=h,i|=p;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(h=l).next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}null===c&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null===o&&(a.shared.lanes=0),pu|=i,e.lanes=i,e.memoizedState=d}}function fo(e,t){if("function"!==typeof e)throw Error(i(191,e));e.call(t)}function po(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)fo(n[e],t)}var ho=M(null),mo=M(0);function go(e,t){U(mo,e=du),U(ho,t),du=e|t.baseLanes}function vo(){U(mo,du),U(ho,ho.current)}function yo(){du=mo.current,I(ho),I(mo)}var bo=0,xo=null,wo=null,ko=null,So=!1,jo=!1,Co=!1,Eo=0,Po=0,_o=null,zo=0;function Lo(){throw Error(i(321))}function To(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Gn(e[n],t[n]))return!1;return!0}function No(e,t,n,r,a,o){return bo=o,xo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=null===e||null===e.memoizedState?qi:Ki,Co=!1,o=n(r,a),Co=!1,jo&&(o=Ro(t,n,r,a)),Oo(e),o}function Oo(e){R.H=Vi;var t=null!==wo&&null!==wo.next;if(bo=0,ko=wo=xo=null,So=!1,Po=0,_o=null,t)throw Error(i(300));null===e||Pl||null!==(e=e.dependencies)&&ja(e)&&(Pl=!0)}function Ro(e,t,n,r){xo=e;var a=0;do{if(jo&&(_o=null),Po=0,jo=!1,25<=a)throw Error(i(301));if(a+=1,ko=wo=null,null!=e.updateQueue){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,null!=o.memoCache&&(o.memoCache.index=0)}R.H=Qi,o=t(n,r)}while(jo);return o}function Ao(){var e=R.H,t=e.useState()[0];return t="function"===typeof t.then?Uo(t):t,e=e.useState()[0],(null!==wo?wo.memoizedState:null)!==e&&(xo.flags|=1024),t}function Fo(){var e=0!==Eo;return Eo=0,e}function $o(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Do(e){if(So){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}So=!1}bo=0,ko=wo=xo=null,jo=!1,Po=Eo=0,_o=null}function Mo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ko?xo.memoizedState=ko=e:ko=ko.next=e,ko}function Io(){if(null===wo){var e=xo.alternate;e=null!==e?e.memoizedState:null}else e=wo.next;var t=null===ko?xo.memoizedState:ko.next;if(null!==t)ko=t,wo=e;else{if(null===e){if(null===xo.alternate)throw Error(i(467));throw Error(i(310))}e={memoizedState:(wo=e).memoizedState,baseState:wo.baseState,baseQueue:wo.baseQueue,queue:wo.queue,next:null},null===ko?xo.memoizedState=ko=e:ko=ko.next=e}return ko}function Uo(e){var t=Po;return Po+=1,null===_o&&(_o=[]),e=Xa(_o,e,t),t=xo,null===(null===ko?t.memoizedState:ko.next)&&(t=t.alternate,R.H=null===t||null===t.memoizedState?qi:Ki),e}function Bo(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return Uo(e);if(e.$$typeof===w)return Ea(e)}throw Error(i(438,String(e)))}function Wo(e){var t=null,n=xo.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=xo.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map((function(e){return e.slice()})),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},xo.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=_;return t.index++,n}function Ho(e,t){return"function"===typeof t?t(e):t}function Vo(e){return qo(Io(),wo,e)}function qo(e,t,n){var r=e.queue;if(null===r)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(null!==o){if(null!==a){var l=a.next;a.next=o.next,o.next=l}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,null===a)e.memoizedState=o;else{var s=l=null,u=null,c=t=a.next,d=!1;do{var f=-536870913&c.lane;if(f!==c.lane?(ou&f)===f:(bo&f)===f){var p=c.revertLane;if(0===p)null!==u&&(u=u.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),f===$a&&(d=!0);else{if((bo&p)===p){c=c.next,p===$a&&(d=!0);continue}f={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===u?(s=u=f,l=o):u=u.next=f,xo.lanes|=p,pu|=p}f=c.action,Co&&n(o,f),o=c.hasEagerState?c.eagerState:n(o,f)}else p={lane:f,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===u?(s=u=p,l=o):u=u.next=p,xo.lanes|=f,pu|=f;c=c.next}while(null!==c&&c!==t);if(null===u?l=o:u.next=s,!Gn(o,e.memoizedState)&&(Pl=!0,d&&null!==(n=Da)))throw n;e.memoizedState=o,e.baseState=l,e.baseQueue=u,r.lastRenderedState=o}return null===a&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ko(e){var t=Io(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{o=e(o,l.action),l=l.next}while(l!==a);Gn(o,t.memoizedState)||(Pl=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Qo(e,t,n){var r=xo,a=Io(),o=oa;if(o){if(void 0===n)throw Error(i(407));n=n()}else n=t();var l=!Gn((wo||a).memoizedState,n);if(l&&(a.memoizedState=n,Pl=!0),a=a.queue,vi(2048,8,Xo.bind(null,r,a,e),[e]),a.getSnapshot!==t||l||null!==ko&&1&ko.memoizedState.tag){if(r.flags|=2048,hi(9,{destroy:void 0,resource:void 0},Yo.bind(null,r,a,n,t),null),null===ru)throw Error(i(349));o||0!==(124&bo)||Go(r,t,n)}return n}function Go(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=xo.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},xo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Yo(e,t,n,r){t.value=n,t.getSnapshot=r,Jo(t)&&Zo(e)}function Xo(e,t,n){return n((function(){Jo(t)&&Zo(e)}))}function Jo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Gn(e,n)}catch(r){return!0}}function Zo(e){var t=Tr(e,2);null!==t&&Fu(t,e,2)}function ei(e){var t=Mo();if("function"===typeof e){var n=e;if(e=n(),Co){fe(!0);try{n()}finally{fe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:e},t}function ti(e,t,n,r){return e.baseState=n,qo(e,wo,"function"===typeof r?r:Ho)}function ni(e,t,n,r,a){if(Bi(e))throw Error(i(485));if(null!==(e=t.action)){var o={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};null!==R.T?n(!0):o.isTransition=!1,r(o),null===(n=t.pending)?(o.next=t.pending=o,ri(t,o)):(o.next=n.next,t.pending=n.next=o)}}function ri(e,t){var n=t.action,r=t.payload,a=e.state;if(t.isTransition){var o=R.T,i={};R.T=i;try{var l=n(a,r),s=R.S;null!==s&&s(i,l),ai(e,t,l)}catch(u){ii(e,t,u)}finally{R.T=o}}else try{ai(e,t,o=n(a,r))}catch(c){ii(e,t,c)}}function ai(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then((function(n){oi(e,t,n)}),(function(n){return ii(e,t,n)})):oi(e,t,n)}function oi(e,t,n){t.status="fulfilled",t.value=n,li(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,ri(e,n)))}function ii(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,li(t),t=t.next}while(t!==r)}e.action=null}function li(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function si(e,t){return t}function ui(e,t){if(oa){var n=ru.formState;if(null!==n){e:{var r=xo;if(oa){if(aa){t:{for(var a=aa,o=la;8!==a.nodeType;){if(!o){a=null;break t}if(null===(a=vd(a.nextSibling))){a=null;break t}}a="F!"===(o=a.data)||"F"===o?a:null}if(a){aa=vd(a.nextSibling),r="F!"===a.data;break e}}ua(r)}r=!1}r&&(t=n[0])}}return(n=Mo()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:si,lastRenderedState:t},n.queue=r,n=Mi.bind(null,xo,r),r.dispatch=n,r=ei(!1),o=Ui.bind(null,xo,!1,r.queue),a={state:t,dispatch:null,action:e,pending:null},(r=Mo()).queue=a,n=ni.bind(null,xo,a,o,n),a.dispatch=n,r.memoizedState=e,[t,n,!1]}function ci(e){return di(Io(),wo,e)}function di(e,t,n){if(t=qo(e,t,si)[0],e=Vo(Ho)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var r=Uo(t)}catch(i){if(i===Va)throw Ka;throw i}else r=t;var a=(t=Io()).queue,o=a.dispatch;return n!==t.memoizedState&&(xo.flags|=2048,hi(9,{destroy:void 0,resource:void 0},fi.bind(null,a,n),null)),[r,o,e]}function fi(e,t){e.action=t}function pi(e){var t=Io(),n=wo;if(null!==n)return di(t,n,e);Io(),t=t.memoizedState;var r=(n=Io()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function hi(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=xo.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},xo.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function mi(){return Io().memoizedState}function gi(e,t,n,r){var a=Mo();r=void 0===r?null:r,xo.flags|=e,a.memoizedState=hi(1|t,{destroy:void 0,resource:void 0},n,r)}function vi(e,t,n,r){var a=Io();r=void 0===r?null:r;var o=a.memoizedState.inst;null!==wo&&null!==r&&To(r,wo.memoizedState.deps)?a.memoizedState=hi(t,o,n,r):(xo.flags|=e,a.memoizedState=hi(1|t,o,n,r))}function yi(e,t){gi(8390656,8,e,t)}function bi(e,t){vi(2048,8,e,t)}function xi(e,t){return vi(4,2,e,t)}function wi(e,t){return vi(4,4,e,t)}function ki(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function Si(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,vi(4,4,ki.bind(null,t,e),n)}function ji(){}function Ci(e,t){var n=Io();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ei(e,t){var n=Io();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&To(t,r[1]))return r[0];if(r=e(),Co){fe(!0);try{e()}finally{fe(!1)}}return n.memoizedState=[r,t],r}function Pi(e,t,n){return void 0===n||0!==(1073741824&bo)?e.memoizedState=t:(e.memoizedState=n,e=Au(),xo.lanes|=e,pu|=e,n)}function _i(e,t,n,r){return Gn(n,t)?n:null!==ho.current?(e=Pi(e,n,r),Gn(e,t)||(Pl=!0),e):0===(42&bo)?(Pl=!0,e.memoizedState=n):(e=Au(),xo.lanes|=e,pu|=e,t)}function zi(e,t,n,r,a){var o=A.p;A.p=0!==o&&8>o?o:8;var i=R.T,l={};R.T=l,Ui(e,!1,t,n);try{var s=a(),u=R.S;if(null!==u&&u(l,s),null!==s&&"object"===typeof s&&"function"===typeof s.then)Ii(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then((function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)}),(function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)})),r}(s,r),Ru());else Ii(e,t,r,Ru())}catch(c){Ii(e,t,{then:function(){},status:"rejected",reason:c},Ru())}finally{A.p=o,R.T=i}}function Li(){}function Ti(e,t,n,r){if(5!==e.tag)throw Error(i(476));var a=Ni(e).queue;zi(e,a,t,F,null===n?Li:function(){return Oi(e),n(r)})}function Ni(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:F},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function Oi(e){Ii(e,Ni(e).next.queue,{},Ru())}function Ri(){return Ea(Qd)}function Ai(){return Io().memoizedState}function Fi(){return Io().memoizedState}function $i(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Ru(),r=oo(t,e=ao(n),n);return null!==r&&(Fu(r,t,n),io(r,t,n)),t={cache:Oa()},void(e.payload=t)}t=t.return}}function Di(e,t,n){var r=Ru();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Bi(e)?Wi(t,n):null!==(n=Lr(e,t,n,r))&&(Fu(n,e,r),Hi(n,t,r))}function Mi(e,t,n){Ii(e,t,n,Ru())}function Ii(e,t,n,r){var a={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bi(e))Wi(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=o(i,n);if(a.hasEagerState=!0,a.eagerState=l,Gn(l,i))return zr(e,t,a,0),null===ru&&_r(),!1}catch(s){}if(null!==(n=Lr(e,t,a,r)))return Fu(n,e,r),Hi(n,t,r),!0}return!1}function Ui(e,t,n,r){if(r={lane:2,revertLane:zc(),action:r,hasEagerState:!1,eagerState:null,next:null},Bi(e)){if(t)throw Error(i(479))}else null!==(t=Lr(e,n,r,2))&&Fu(t,e,2)}function Bi(e){var t=e.alternate;return e===xo||null!==t&&t===xo}function Wi(e,t){jo=So=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hi(e,t,n){if(0!==(4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Pe(e,n)}}var Vi={readContext:Ea,use:Bo,useCallback:Lo,useContext:Lo,useEffect:Lo,useImperativeHandle:Lo,useLayoutEffect:Lo,useInsertionEffect:Lo,useMemo:Lo,useReducer:Lo,useRef:Lo,useState:Lo,useDebugValue:Lo,useDeferredValue:Lo,useTransition:Lo,useSyncExternalStore:Lo,useId:Lo,useHostTransitionStatus:Lo,useFormState:Lo,useActionState:Lo,useOptimistic:Lo,useMemoCache:Lo,useCacheRefresh:Lo},qi={readContext:Ea,use:Bo,useCallback:function(e,t){return Mo().memoizedState=[e,void 0===t?null:t],e},useContext:Ea,useEffect:yi,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,gi(4194308,4,ki.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gi(4194308,4,e,t)},useInsertionEffect:function(e,t){gi(4,2,e,t)},useMemo:function(e,t){var n=Mo();t=void 0===t?null:t;var r=e();if(Co){fe(!0);try{e()}finally{fe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Mo();if(void 0!==n){var a=n(t);if(Co){fe(!0);try{n(t)}finally{fe(!1)}}}else a=t;return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=Di.bind(null,xo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Mo().memoizedState=e},useState:function(e){var t=(e=ei(e)).queue,n=Mi.bind(null,xo,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ji,useDeferredValue:function(e,t){return Pi(Mo(),e,t)},useTransition:function(){var e=ei(!1);return e=zi.bind(null,xo,e.queue,!0,!1),Mo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=xo,a=Mo();if(oa){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===ru)throw Error(i(349));0!==(124&ou)||Go(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,yi(Xo.bind(null,r,o,e),[e]),r.flags|=2048,hi(9,{destroy:void 0,resource:void 0},Yo.bind(null,r,o,n,t),null),n},useId:function(){var e=Mo(),t=ru.identifierPrefix;if(oa){var n=Jr;t="\xab"+t+"R"+(n=(Xr&~(1<<32-pe(Xr)-1)).toString(32)+n),0<(n=Eo++)&&(t+="H"+n.toString(32)),t+="\xbb"}else t="\xab"+t+"r"+(n=zo++).toString(32)+"\xbb";return e.memoizedState=t},useHostTransitionStatus:Ri,useFormState:ui,useActionState:ui,useOptimistic:function(e){var t=Mo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ui.bind(null,xo,!0,n),n.dispatch=t,[e,t]},useMemoCache:Wo,useCacheRefresh:function(){return Mo().memoizedState=$i.bind(null,xo)}},Ki={readContext:Ea,use:Bo,useCallback:Ci,useContext:Ea,useEffect:bi,useImperativeHandle:Si,useInsertionEffect:xi,useLayoutEffect:wi,useMemo:Ei,useReducer:Vo,useRef:mi,useState:function(){return Vo(Ho)},useDebugValue:ji,useDeferredValue:function(e,t){return _i(Io(),wo.memoizedState,e,t)},useTransition:function(){var e=Vo(Ho)[0],t=Io().memoizedState;return["boolean"===typeof e?e:Uo(e),t]},useSyncExternalStore:Qo,useId:Ai,useHostTransitionStatus:Ri,useFormState:ci,useActionState:ci,useOptimistic:function(e,t){return ti(Io(),0,e,t)},useMemoCache:Wo,useCacheRefresh:Fi},Qi={readContext:Ea,use:Bo,useCallback:Ci,useContext:Ea,useEffect:bi,useImperativeHandle:Si,useInsertionEffect:xi,useLayoutEffect:wi,useMemo:Ei,useReducer:Ko,useRef:mi,useState:function(){return Ko(Ho)},useDebugValue:ji,useDeferredValue:function(e,t){var n=Io();return null===wo?Pi(n,e,t):_i(n,wo.memoizedState,e,t)},useTransition:function(){var e=Ko(Ho)[0],t=Io().memoizedState;return["boolean"===typeof e?e:Uo(e),t]},useSyncExternalStore:Qo,useId:Ai,useHostTransitionStatus:Ri,useFormState:pi,useActionState:pi,useOptimistic:function(e,t){var n=Io();return null!==wo?ti(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Wo,useCacheRefresh:Fi},Gi=null,Yi=0;function Xi(e){var t=Yi;return Yi+=1,null===Gi&&(Gi=[]),Xa(Gi,e,t)}function Ji(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function Zi(e,t){if(t.$$typeof===p)throw Error(i(525));throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function el(e){return(0,e._init)(e._payload)}function tl(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function a(e,t){return(e=Dr(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Br(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var o=n.type;return o===g?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===E&&el(o)===t.type)?(Ji(t=a(t,n.props),n),t.return=e,t):(Ji(t=Ir(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Wr(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Ur(n,e.mode,r,o)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Br(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case h:return Ji(n=Ir(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case m:return(t=Wr(t,e.mode,n)).return=e,t;case E:return f(e,t=(0,t._init)(t._payload),n)}if(O(t)||L(t))return(t=Ur(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return f(e,Xi(t),n);if(t.$$typeof===w)return f(e,Pa(e,t),n);Zi(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case h:return n.key===a?u(e,t,n,r):null;case m:return n.key===a?c(e,t,n,r):null;case E:return p(e,t,n=(a=n._init)(n._payload),r)}if(O(n)||L(n))return null!==a?null:d(e,t,n,r,null);if("function"===typeof n.then)return p(e,t,Xi(n),r);if(n.$$typeof===w)return p(e,t,Pa(e,n),r);Zi(e,n)}return null}function v(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case h:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case m:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case E:return v(e,t,n,r=(0,r._init)(r._payload),a)}if(O(r)||L(r))return d(t,e=e.get(n)||null,r,a,null);if("function"===typeof r.then)return v(e,t,n,Xi(r),a);if(r.$$typeof===w)return v(e,t,n,Pa(t,r),a);Zi(t,r)}return null}function y(s,u,c,d){if("object"===typeof c&&null!==c&&c.type===g&&null===c.key&&(c=c.props.children),"object"===typeof c&&null!==c){switch(c.$$typeof){case h:e:{for(var b=c.key;null!==u;){if(u.key===b){if((b=c.type)===g){if(7===u.tag){n(s,u.sibling),(d=a(u,c.props.children)).return=s,s=d;break e}}else if(u.elementType===b||"object"===typeof b&&null!==b&&b.$$typeof===E&&el(b)===u.type){n(s,u.sibling),Ji(d=a(u,c.props),c),d.return=s,s=d;break e}n(s,u);break}t(s,u),u=u.sibling}c.type===g?((d=Ur(c.props.children,s.mode,d,c.key)).return=s,s=d):(Ji(d=Ir(c.type,c.key,c.props,null,s.mode,d),c),d.return=s,s=d)}return l(s);case m:e:{for(b=c.key;null!==u;){if(u.key===b){if(4===u.tag&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(s,u.sibling),(d=a(u,c.children||[])).return=s,s=d;break e}n(s,u);break}t(s,u),u=u.sibling}(d=Wr(c,s.mode,d)).return=s,s=d}return l(s);case E:return y(s,u,c=(b=c._init)(c._payload),d)}if(O(c))return function(a,i,l,s){for(var u=null,c=null,d=i,h=i=0,m=null;null!==d&&h<l.length;h++){d.index>h?(m=d,d=null):m=d.sibling;var g=p(a,d,l[h],s);if(null===g){null===d&&(d=m);break}e&&d&&null===g.alternate&&t(a,d),i=o(g,i,h),null===c?u=g:c.sibling=g,c=g,d=m}if(h===l.length)return n(a,d),oa&&Zr(a,h),u;if(null===d){for(;h<l.length;h++)null!==(d=f(a,l[h],s))&&(i=o(d,i,h),null===c?u=d:c.sibling=d,c=d);return oa&&Zr(a,h),u}for(d=r(d);h<l.length;h++)null!==(m=v(d,a,h,l[h],s))&&(e&&null!==m.alternate&&d.delete(null===m.key?h:m.key),i=o(m,i,h),null===c?u=m:c.sibling=m,c=m);return e&&d.forEach((function(e){return t(a,e)})),oa&&Zr(a,h),u}(s,u,c,d);if(L(c)){if("function"!==typeof(b=L(c)))throw Error(i(150));return function(a,l,s,u){if(null==s)throw Error(i(151));for(var c=null,d=null,h=l,m=l=0,g=null,y=s.next();null!==h&&!y.done;m++,y=s.next()){h.index>m?(g=h,h=null):g=h.sibling;var b=p(a,h,y.value,u);if(null===b){null===h&&(h=g);break}e&&h&&null===b.alternate&&t(a,h),l=o(b,l,m),null===d?c=b:d.sibling=b,d=b,h=g}if(y.done)return n(a,h),oa&&Zr(a,m),c;if(null===h){for(;!y.done;m++,y=s.next())null!==(y=f(a,y.value,u))&&(l=o(y,l,m),null===d?c=y:d.sibling=y,d=y);return oa&&Zr(a,m),c}for(h=r(h);!y.done;m++,y=s.next())null!==(y=v(h,a,m,y.value,u))&&(e&&null!==y.alternate&&h.delete(null===y.key?m:y.key),l=o(y,l,m),null===d?c=y:d.sibling=y,d=y);return e&&h.forEach((function(e){return t(a,e)})),oa&&Zr(a,m),c}(s,u,c=b.call(c),d)}if("function"===typeof c.then)return y(s,u,Xi(c),d);if(c.$$typeof===w)return y(s,u,Pa(s,c),d);Zi(s,c)}return"string"===typeof c&&""!==c||"number"===typeof c||"bigint"===typeof c?(c=""+c,null!==u&&6===u.tag?(n(s,u.sibling),(d=a(u,c)).return=s,s=d):(n(s,u),(d=Br(c,s.mode,d)).return=s,s=d),l(s)):n(s,u)}return function(e,t,n,r){try{Yi=0;var a=y(e,t,n,r);return Gi=null,a}catch(i){if(i===Va||i===Ka)throw i;var o=Fr(29,i,null,e.mode);return o.lanes=r,o.return=e,o}}}var nl=tl(!0),rl=tl(!1),al=M(null),ol=null;function il(e){var t=e.alternate;U(cl,1&cl.current),U(al,e),null===ol&&(null===t||null!==ho.current||null!==t.memoizedState)&&(ol=e)}function ll(e){if(22===e.tag){if(U(cl,cl.current),U(al,e),null===ol){var t=e.alternate;null!==t&&null!==t.memoizedState&&(ol=e)}}else sl()}function sl(){U(cl,cl.current),U(al,al.current)}function ul(e){I(al),ol===e&&(ol=null),I(cl)}var cl=M(0);function dl(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||gd(n)))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function fl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:f({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var pl={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ru(),a=ao(r);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=oo(e,a,r))&&(Fu(t,e,r),io(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ru(),a=ao(r);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=oo(e,a,r))&&(Fu(t,e,r),io(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ru(),r=ao(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=oo(e,r,n))&&(Fu(t,e,n),io(t,e,n))}};function hl(e,t,n,r,a,o,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,i):!t.prototype||!t.prototype.isPureReactComponent||(!Yn(n,r)||!Yn(a,o))}function ml(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&pl.enqueueReplaceState(t,t.state,null)}function gl(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var a in n===t&&(n=f({},n)),e)void 0===n[a]&&(n[a]=e[a]);return n}var vl="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function yl(e){vl(e)}function bl(e){console.error(e)}function xl(e){vl(e)}function wl(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout((function(){throw n}))}}function kl(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout((function(){throw r}))}}function Sl(e,t,n){return(n=ao(n)).tag=3,n.payload={element:null},n.callback=function(){wl(e,t)},n}function jl(e){return(e=ao(e)).tag=3,e}function Cl(e,t,n,r){var a=n.type.getDerivedStateFromError;if("function"===typeof a){var o=r.value;e.payload=function(){return a(o)},e.callback=function(){kl(t,n,r)}}var i=n.stateNode;null!==i&&"function"===typeof i.componentDidCatch&&(e.callback=function(){kl(t,n,r),"function"!==typeof a&&(null===ju?ju=new Set([this]):ju.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var El=Error(i(461)),Pl=!1;function _l(e,t,n,r){t.child=null===e?rl(t,null,n,r):nl(t,e.child,n,r)}function zl(e,t,n,r,a){n=n.render;var o=t.ref;if("ref"in r){var i={};for(var l in r)"ref"!==l&&(i[l]=r[l])}else i=r;return Ca(t),r=No(e,t,n,i,o,a),l=Fo(),null===e||Pl?(oa&&l&&ta(t),t.flags|=1,_l(e,t,r,a),t.child):($o(e,t,a),Gl(e,t,a))}function Ll(e,t,n,r,a){if(null===e){var o=n.type;return"function"!==typeof o||$r(o)||void 0!==o.defaultProps||null!==n.compare?((e=Ir(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Tl(e,t,o,r,a))}if(o=e.child,!Yl(e,a)){var i=o.memoizedProps;if((n=null!==(n=n.compare)?n:Yn)(i,r)&&e.ref===t.ref)return Gl(e,t,a)}return t.flags|=1,(e=Dr(o,r)).ref=t.ref,e.return=t,t.child=e}function Tl(e,t,n,r,a){if(null!==e){var o=e.memoizedProps;if(Yn(o,r)&&e.ref===t.ref){if(Pl=!1,t.pendingProps=r=o,!Yl(e,a))return t.lanes=e.lanes,Gl(e,t,a);0!==(131072&e.flags)&&(Pl=!0)}}return Al(e,t,n,r,a)}function Nl(e,t,n){var r=t.pendingProps,a=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode){if(0!==(128&t.flags)){if(r=null!==o?o.baseLanes|n:n,null!==e){for(a=t.child=e.child,o=0;null!==a;)o=o|a.lanes|a.childLanes,a=a.sibling;t.childLanes=o&~r}else t.childLanes=0,t.child=null;return Ol(e,t,r,n)}if(0===(536870912&n))return t.lanes=t.childLanes=536870912,Ol(e,t,null!==o?o.baseLanes|n:n,n);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Wa(0,null!==o?o.cachePool:null),null!==o?go(t,o):vo(),ll(t)}else null!==o?(Wa(0,o.cachePool),go(t,o),sl(),t.memoizedState=null):(null!==e&&Wa(0,null),vo(),sl());return _l(e,t,a,n),t.child}function Ol(e,t,n,r){var a=Ba();return a=null===a?null:{parent:Na._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},null!==e&&Wa(0,null),vo(),ll(t),null!==e&&Sa(e,t,r,!0),null}function Rl(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(i(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function Al(e,t,n,r,a){return Ca(t),n=No(e,t,n,r,void 0,a),r=Fo(),null===e||Pl?(oa&&r&&ta(t),t.flags|=1,_l(e,t,n,a),t.child):($o(e,t,a),Gl(e,t,a))}function Fl(e,t,n,r,a,o){return Ca(t),t.updateQueue=null,n=Ro(t,r,n,a),Oo(e),r=Fo(),null===e||Pl?(oa&&r&&ta(t),t.flags|=1,_l(e,t,n,o),t.child):($o(e,t,o),Gl(e,t,o))}function $l(e,t,n,r,a){if(Ca(t),null===t.stateNode){var o=Rr,i=n.contextType;"object"===typeof i&&null!==i&&(o=Ea(i)),o=new n(r,o),t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,o.updater=pl,t.stateNode=o,o._reactInternals=t,(o=t.stateNode).props=r,o.state=t.memoizedState,o.refs={},no(t),i=n.contextType,o.context="object"===typeof i&&null!==i?Ea(i):Rr,o.state=t.memoizedState,"function"===typeof(i=n.getDerivedStateFromProps)&&(fl(t,n,i,r),o.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(i=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),i!==o.state&&pl.enqueueReplaceState(o,o.state,null),co(t,r,o,a),uo(),o.state=t.memoizedState),"function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){o=t.stateNode;var l=t.memoizedProps,s=gl(n,l);o.props=s;var u=o.context,c=n.contextType;i=Rr,"object"===typeof c&&null!==c&&(i=Ea(c));var d=n.getDerivedStateFromProps;c="function"===typeof d||"function"===typeof o.getSnapshotBeforeUpdate,l=t.pendingProps!==l,c||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l||u!==i)&&ml(t,o,r,i),to=!1;var f=t.memoizedState;o.state=f,co(t,r,o,a),uo(),u=t.memoizedState,l||f!==u||to?("function"===typeof d&&(fl(t,n,d,r),u=t.memoizedState),(s=to||hl(t,n,s,r,f,u,i))?(c||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=i,r=s):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ro(e,t),c=gl(n,i=t.memoizedProps),o.props=c,d=t.pendingProps,f=o.context,u=n.contextType,s=Rr,"object"===typeof u&&null!==u&&(s=Ea(u)),(u="function"===typeof(l=n.getDerivedStateFromProps)||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(i!==d||f!==s)&&ml(t,o,r,s),to=!1,f=t.memoizedState,o.state=f,co(t,r,o,a),uo();var p=t.memoizedState;i!==d||f!==p||to||null!==e&&null!==e.dependencies&&ja(e.dependencies)?("function"===typeof l&&(fl(t,n,l,r),p=t.memoizedState),(c=to||hl(t,n,c,r,f,p,s)||null!==e&&null!==e.dependencies&&ja(e.dependencies))?(u||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,p,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,p,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=s,r=c):("function"!==typeof o.componentDidUpdate||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return o=r,Rl(e,t),r=0!==(128&t.flags),o||r?(o=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:o.render(),t.flags|=1,null!==e&&r?(t.child=nl(t,e.child,null,a),t.child=nl(t,null,n,a)):_l(e,t,n,a),t.memoizedState=o.state,e=t.child):e=Gl(e,t,a),e}function Dl(e,t,n,r){return pa(),t.flags|=256,_l(e,t,n,r),t.child}var Ml={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Il(e){return{baseLanes:e,cachePool:Ha()}}function Ul(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=gu),e}function Bl(e,t,n){var r,a=t.pendingProps,o=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&cl.current)),r&&(o=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(oa){if(o?il(t):sl(),oa){var s,u=aa;if(s=u){e:{for(s=u,u=la;8!==s.nodeType;){if(!u){u=null;break e}if(null===(s=vd(s.nextSibling))){u=null;break e}}u=s}null!==u?(t.memoizedState={dehydrated:u,treeContext:null!==Yr?{id:Xr,overflow:Jr}:null,retryLane:536870912,hydrationErrors:null},(s=Fr(18,null,null,0)).stateNode=u,s.return=t,t.child=s,ra=t,aa=null,s=!0):s=!1}s||ua(t)}if(null!==(u=t.memoizedState)&&null!==(u=u.dehydrated))return gd(u)?t.lanes=32:t.lanes=536870912,null;ul(t)}return u=a.children,a=a.fallback,o?(sl(),u=Hl({mode:"hidden",children:u},o=t.mode),a=Ur(a,o,n,null),u.return=t,a.return=t,u.sibling=a,t.child=u,(o=t.child).memoizedState=Il(n),o.childLanes=Ul(e,r,n),t.memoizedState=Ml,a):(il(t),Wl(t,u))}if(null!==(s=e.memoizedState)&&null!==(u=s.dehydrated)){if(l)256&t.flags?(il(t),t.flags&=-257,t=Vl(e,t,n)):null!==t.memoizedState?(sl(),t.child=e.child,t.flags|=128,t=null):(sl(),o=a.fallback,u=t.mode,a=Hl({mode:"visible",children:a.children},u),(o=Ur(o,u,n,null)).flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,nl(t,e.child,null,n),(a=t.child).memoizedState=Il(n),a.childLanes=Ul(e,r,n),t.memoizedState=Ml,t=o);else if(il(t),gd(u)){if(r=u.nextSibling&&u.nextSibling.dataset)var c=r.dgst;r=c,(a=Error(i(419))).stack="",a.digest=r,ma({value:a,source:null,stack:null}),t=Vl(e,t,n)}else if(Pl||Sa(e,t,n,!1),r=0!==(n&e.childLanes),Pl||r){if(null!==(r=ru)&&(0!==(a=0!==((a=0!==(42&(a=n&-n))?1:_e(a))&(r.suspendedLanes|n))?0:a)&&a!==s.retryLane))throw s.retryLane=a,Tr(e,a),Fu(r,e,a),El;"$?"===u.data||Ku(),t=Vl(e,t,n)}else"$?"===u.data?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,aa=vd(u.nextSibling),ra=t,oa=!0,ia=null,la=!1,null!==e&&(Qr[Gr++]=Xr,Qr[Gr++]=Jr,Qr[Gr++]=Yr,Xr=e.id,Jr=e.overflow,Yr=t),(t=Wl(t,a.children)).flags|=4096);return t}return o?(sl(),o=a.fallback,u=t.mode,c=(s=e.child).sibling,(a=Dr(s,{mode:"hidden",children:a.children})).subtreeFlags=65011712&s.subtreeFlags,null!==c?o=Dr(c,o):(o=Ur(o,u,n,null)).flags|=2,o.return=t,a.return=t,a.sibling=o,t.child=a,a=o,o=t.child,null===(u=e.child.memoizedState)?u=Il(n):(null!==(s=u.cachePool)?(c=Na._currentValue,s=s.parent!==c?{parent:c,pool:c}:s):s=Ha(),u={baseLanes:u.baseLanes|n,cachePool:s}),o.memoizedState=u,o.childLanes=Ul(e,r,n),t.memoizedState=Ml,a):(il(t),e=(n=e.child).sibling,(n=Dr(n,{mode:"visible",children:a.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Wl(e,t){return(t=Hl({mode:"visible",children:t},e.mode)).return=e,e.child=t}function Hl(e,t){return(e=Fr(22,e,null,t)).lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Vl(e,t,n){return nl(t,e.child,null,n),(e=Wl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function ql(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),wa(e.return,t,n)}function Kl(e,t,n,r,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function Ql(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(_l(e,t,r.children,n),0!==(2&(r=cl.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&ql(e,n,t);else if(19===e.tag)ql(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(U(cl,r),a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===dl(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Kl(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===dl(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Kl(t,!0,n,null,o);break;case"together":Kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),pu|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(Sa(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=Dr(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Dr(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Yl(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!ja(e))}function Xl(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Pl=!0;else{if(!Yl(e,n)&&0===(128&t.flags))return Pl=!1,function(e,t,n){switch(t.tag){case 3:q(t,t.stateNode.containerInfo),ba(0,Na,e.memoizedState.cache),pa();break;case 27:case 5:Q(t);break;case 4:q(t,t.stateNode.containerInfo);break;case 10:ba(0,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(il(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Bl(e,t,n):(il(t),null!==(e=Gl(e,t,n))?e.sibling:null);il(t);break;case 19:var a=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(Sa(e,t,n,!1),r=0!==(n&t.childLanes)),a){if(r)return Ql(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),U(cl,cl.current),r)break;return null;case 22:case 23:return t.lanes=0,Nl(e,t,n);case 24:ba(0,Na,e.memoizedState.cache)}return Gl(e,t,n)}(e,t,n);Pl=0!==(131072&e.flags)}else Pl=!1,oa&&0!==(1048576&t.flags)&&ea(t,Kr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,a=r._init;if(r=a(r._payload),t.type=r,"function"!==typeof r){if(void 0!==r&&null!==r){if((a=r.$$typeof)===k){t.tag=11,t=zl(null,t,r,e,n);break e}if(a===C){t.tag=14,t=Ll(null,t,r,e,n);break e}}throw t=N(r)||r,Error(i(306,t,""))}$r(r)?(e=gl(r,e),t.tag=1,t=$l(null,t,r,e,n)):(t.tag=0,t=Al(null,t,r,e,n))}return t;case 0:return Al(e,t,t.type,t.pendingProps,n);case 1:return $l(e,t,r=t.type,a=gl(r,t.pendingProps),n);case 3:e:{if(q(t,t.stateNode.containerInfo),null===e)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,ro(e,t),co(t,r,null,n);var l=t.memoizedState;if(r=l.cache,ba(0,Na,r),r!==o.cache&&ka(t,[Na],n,!0),uo(),r=l.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Dl(e,t,r,n);break e}if(r!==a){ma(a=jr(Error(i(424)),t)),t=Dl(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(aa=vd(e.firstChild),ra=t,oa=!0,ia=null,la=!0,n=rl(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(pa(),r===a){t=Gl(e,t,n);break e}_l(e,t,r,n)}t=t.child}return t;case 26:return Rl(e,t),null===e?(n=_d(t.type,null,t.pendingProps,null))?t.memoizedState=n:oa||(n=t.type,e=t.pendingProps,(r=rd(H.current).createElement(n))[Ne]=t,r[Oe]=e,ed(r,n,e),Ve(r),t.stateNode=r):t.memoizedState=_d(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Q(t),null===e&&oa&&(r=t.stateNode=xd(t.type,t.pendingProps,H.current),ra=t,la=!0,a=aa,pd(t.type)?(yd=a,aa=vd(r.firstChild)):aa=a),_l(e,t,t.pendingProps.children,n),Rl(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&oa&&((a=r=aa)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[Me])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(o=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(o!==a.rel||e.getAttribute("href")!==(null==a.href||""===a.href?null:a.href)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin)||e.getAttribute("title")!==(null==a.title?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((o=e.getAttribute("src"))!==(null==a.src?null:a.src)||e.getAttribute("type")!==(null==a.type?null:a.type)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var o=null==a.name?null:""+a.name;if("hidden"===a.type&&e.getAttribute("name")===o)return e}if(null===(e=vd(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,la))?(t.stateNode=r,ra=t,aa=vd(r.firstChild),la=!1,a=!0):a=!1),a||ua(t)),Q(t),a=t.type,o=t.pendingProps,l=null!==e?e.memoizedProps:null,r=o.children,id(a,o)?r=null:null!==l&&id(a,l)&&(t.flags|=32),null!==t.memoizedState&&(a=No(e,t,Ao,null,null,n),Qd._currentValue=a),Rl(e,t),_l(e,t,r,n),t.child;case 6:return null===e&&oa&&((e=n=aa)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=vd(e.nextSibling)))return null}return e}(n,t.pendingProps,la))?(t.stateNode=n,ra=t,aa=null,e=!0):e=!1),e||ua(t)),null;case 13:return Bl(e,t,n);case 4:return q(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=nl(t,null,r,n):_l(e,t,r,n),t.child;case 11:return zl(e,t,t.type,t.pendingProps,n);case 7:return _l(e,t,t.pendingProps,n),t.child;case 8:case 12:return _l(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ba(0,t.type,r.value),_l(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Ca(t),r=r(a=Ea(a)),t.flags|=1,_l(e,t,r,n),t.child;case 14:return Ll(e,t,t.type,t.pendingProps,n);case 15:return Tl(e,t,t.type,t.pendingProps,n);case 19:return Ql(e,t,n);case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},null===e?((n=Hl(r,n)).ref=t.ref,t.child=n,n.return=t,t=n):((n=Dr(e.child,r)).ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Nl(e,t,n);case 24:return Ca(t),r=Ea(Na),null===e?(null===(a=Ba())&&(a=ru,o=Oa(),a.pooledCache=o,o.refCount++,null!==o&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},no(t),ba(0,Na,a)):(0!==(e.lanes&n)&&(ro(e,t),co(t,null,null,n),uo()),a=e.memoizedState,o=t.memoizedState,a.parent!==r?(a={parent:r,cache:r},t.memoizedState=a,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=a),ba(0,Na,r)):(r=o.cache,ba(0,Na,r),r!==a.cache&&ka(t,[Na],n,!0))),_l(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Jl(e){e.flags|=4}function Zl(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!Ud(t)){if(null!==(t=al.current)&&((4194048&ou)===ou?null!==ol:(62914560&ou)!==ou&&0===(536870912&ou)||t!==ol))throw Ja=Qa,qa;e.flags|=8192}}function es(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Se():536870912,e.lanes|=t,vu|=t)}function ts(e,t){if(!oa)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ns(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=65011712&a.subtreeFlags,r|=65011712&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rs(e,t,n){var r=t.pendingProps;switch(na(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return ns(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),xa(Na),K(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(fa(t)?Jl(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,ha())),ns(t),null;case 26:return n=t.memoizedState,null===e?(Jl(t),null!==n?(ns(t),Zl(t,n)):(ns(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Jl(t),ns(t),Zl(t,n)):(ns(t),t.flags&=-16777217):(e.memoizedProps!==r&&Jl(t),ns(t),t.flags&=-16777217),null;case 27:G(t),n=H.current;var a=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Jl(t);else{if(!r){if(null===t.stateNode)throw Error(i(166));return ns(t),null}e=B.current,fa(t)?ca(t):(e=xd(a,r,n),t.stateNode=e,Jl(t))}return ns(t),null;case 5:if(G(t),n=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Jl(t);else{if(!r){if(null===t.stateNode)throw Error(i(166));return ns(t),null}if(e=B.current,fa(t))ca(t);else{switch(a=rd(H.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":(e=a.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"===typeof r.is?a.createElement("select",{is:r.is}):a.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e="string"===typeof r.is?a.createElement(n,{is:r.is}):a.createElement(n)}}e[Ne]=t,e[Oe]=r;e:for(a=t.child;null!==a;){if(5===a.tag||6===a.tag)e.appendChild(a.stateNode);else if(4!==a.tag&&27!==a.tag&&null!==a.child){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;null===a.sibling;){if(null===a.return||a.return===t)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;e:switch(ed(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Jl(t)}}return ns(t),t.flags&=-16777217,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&Jl(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(i(166));if(e=H.current,fa(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(a=ra))switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Ne]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||Yc(e.nodeValue,n)))||ua(t)}else(e=rd(e).createTextNode(r))[Ne]=t,t.stateNode=e}return ns(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(a=fa(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(i(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(i(317));a[Ne]=t}else pa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ns(t),a=!1}else a=ha(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return 256&t.flags?(ul(t),t):(ul(t),null)}if(ul(t),0!==(128&t.flags))return t.lanes=n,t;if(n=null!==r,e=null!==e&&null!==e.memoizedState,n){a=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(a=r.alternate.memoizedState.cachePool.pool);var o=null;null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),es(t,t.updateQueue),ns(t),null;case 4:return K(),null===e&&Ic(t.stateNode.containerInfo),ns(t),null;case 10:return xa(t.type),ns(t),null;case 19:if(I(cl),null===(a=t.memoizedState))return ns(t),null;if(r=0!==(128&t.flags),null===(o=a.rendering))if(r)ts(a,!1);else{if(0!==fu||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(o=dl(e))){for(t.flags|=128,ts(a,!1),e=o.updateQueue,t.updateQueue=e,es(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Mr(n,e),n=n.sibling;return U(cl,1&cl.current|2),t.child}e=e.sibling}null!==a.tail&&te()>ku&&(t.flags|=128,r=!0,ts(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=dl(o))){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,es(t,e),ts(a,!0),null===a.tail&&"hidden"===a.tailMode&&!o.alternate&&!oa)return ns(t),null}else 2*te()-a.renderingStartTime>ku&&536870912!==n&&(t.flags|=128,r=!0,ts(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(null!==(e=a.last)?e.sibling=o:t.child=o,a.last=o)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=te(),t.sibling=null,e=cl.current,U(cl,r?1&e|2:1&e),t):(ns(t),null);case 22:case 23:return ul(t),yo(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(ns(t),6&t.subtreeFlags&&(t.flags|=8192)):ns(t),null!==(n=t.updateQueue)&&es(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&I(Ua),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xa(Na),ns(t),null;case 25:case 30:return null}throw Error(i(156,t.tag))}function as(e,t){switch(na(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return xa(Na),K(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return G(t),null;case 13:if(ul(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));pa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return I(cl),null;case 4:return K(),null;case 10:return xa(t.type),null;case 22:case 23:return ul(t),yo(),null!==e&&I(Ua),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return xa(Na),null;default:return null}}function os(e,t){switch(na(t),t.tag){case 3:xa(Na),K();break;case 26:case 27:case 5:G(t);break;case 4:K();break;case 13:ul(t);break;case 19:I(cl);break;case 10:xa(t.type);break;case 22:case 23:ul(t),yo(),null!==e&&I(Ua);break;case 24:xa(Na)}}function is(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var a=r.next;n=a;do{if((n.tag&e)===e){r=void 0;var o=n.create,i=n.inst;r=o(),i.destroy=r}n=n.next}while(n!==a)}}catch(l){cc(t,t.return,l)}}function ls(e,t,n){try{var r=t.updateQueue,a=null!==r?r.lastEffect:null;if(null!==a){var o=a.next;r=o;do{if((r.tag&e)===e){var i=r.inst,l=i.destroy;if(void 0!==l){i.destroy=void 0,a=t;var s=n,u=l;try{u()}catch(c){cc(a,s,c)}}}r=r.next}while(r!==o)}}catch(c){cc(t,t.return,c)}}function ss(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{po(t,n)}catch(r){cc(e,e.return,r)}}}function us(e,t,n){n.props=gl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){cc(e,t,r)}}function cs(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;default:r=e.stateNode}"function"===typeof n?e.refCleanup=n(r):n.current=r}}catch(a){cc(e,t,a)}}function ds(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(a){cc(e,t,a)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(o){cc(e,t,o)}else n.current=null}function fs(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(a){cc(e,e.return,a)}}function ps(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,o=null,l=null,s=null,u=null,c=null,d=null;for(h in n){var f=n[h];if(n.hasOwnProperty(h)&&null!=f)switch(h){case"checked":case"value":break;case"defaultValue":u=f;default:r.hasOwnProperty(h)||Jc(e,t,h,null,r,f)}}for(var p in r){var h=r[p];if(f=n[p],r.hasOwnProperty(p)&&(null!=h||null!=f))switch(p){case"type":o=h;break;case"name":a=h;break;case"checked":c=h;break;case"defaultChecked":d=h;break;case"value":l=h;break;case"defaultValue":s=h;break;case"children":case"dangerouslySetInnerHTML":if(null!=h)throw Error(i(137,t));break;default:h!==f&&Jc(e,t,p,h,r,f)}}return void gt(e,l,s,u,c,d,o,a);case"select":for(o in h=l=s=p=null,n)if(u=n[o],n.hasOwnProperty(o)&&null!=u)switch(o){case"value":break;case"multiple":h=u;default:r.hasOwnProperty(o)||Jc(e,t,o,null,r,u)}for(a in r)if(o=r[a],u=n[a],r.hasOwnProperty(a)&&(null!=o||null!=u))switch(a){case"value":p=o;break;case"defaultValue":s=o;break;case"multiple":l=o;default:o!==u&&Jc(e,t,a,o,r,u)}return t=s,n=l,r=h,void(null!=p?bt(e,!!n,p,!1):!!r!==!!n&&(null!=t?bt(e,!!n,t,!0):bt(e,!!n,n?[]:"",!1)));case"textarea":for(s in h=p=null,n)if(a=n[s],n.hasOwnProperty(s)&&null!=a&&!r.hasOwnProperty(s))switch(s){case"value":case"children":break;default:Jc(e,t,s,null,r,a)}for(l in r)if(a=r[l],o=n[l],r.hasOwnProperty(l)&&(null!=a||null!=o))switch(l){case"value":p=a;break;case"defaultValue":h=a;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=a)throw Error(i(91));break;default:a!==o&&Jc(e,t,l,a,r,o)}return void xt(e,p,h);case"option":for(var m in n)if(p=n[m],n.hasOwnProperty(m)&&null!=p&&!r.hasOwnProperty(m))if("selected"===m)e.selected=!1;else Jc(e,t,m,null,r,p);for(u in r)if(p=r[u],h=n[u],r.hasOwnProperty(u)&&p!==h&&(null!=p||null!=h))if("selected"===u)e.selected=p&&"function"!==typeof p&&"symbol"!==typeof p;else Jc(e,t,u,p,r,h);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)p=n[g],n.hasOwnProperty(g)&&null!=p&&!r.hasOwnProperty(g)&&Jc(e,t,g,null,r,p);for(c in r)if(p=r[c],h=n[c],r.hasOwnProperty(c)&&p!==h&&(null!=p||null!=h))switch(c){case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(i(137,t));break;default:Jc(e,t,c,p,r,h)}return;default:if(Et(t)){for(var v in n)p=n[v],n.hasOwnProperty(v)&&void 0!==p&&!r.hasOwnProperty(v)&&Zc(e,t,v,void 0,r,p);for(d in r)p=r[d],h=n[d],!r.hasOwnProperty(d)||p===h||void 0===p&&void 0===h||Zc(e,t,d,p,r,h);return}}for(var y in n)p=n[y],n.hasOwnProperty(y)&&null!=p&&!r.hasOwnProperty(y)&&Jc(e,t,y,null,r,p);for(f in r)p=r[f],h=n[f],!r.hasOwnProperty(f)||p===h||null==p&&null==h||Jc(e,t,f,p,r,h)}(r,e.type,n,t),r[Oe]=t}catch(a){cc(e,e.return,a)}}function hs(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&pd(e.type)||4===e.tag}function ms(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||hs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&pd(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function gs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Xc));else if(4!==r&&(27===r&&pd(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(gs(e,t,n),e=e.sibling;null!==e;)gs(e,t,n),e=e.sibling}function vs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(27===r&&pd(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(vs(e,t,n),e=e.sibling;null!==e;)vs(e,t,n),e=e.sibling}function ys(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);ed(t,r,n),t[Ne]=e,t[Oe]=n}catch(o){cc(e,e.return,o)}}var bs=!1,xs=!1,ws=!1,ks="function"===typeof WeakSet?WeakSet:Set,Ss=null;function js(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:$s(e,n),4&r&&is(5,n);break;case 1:if($s(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(i){cc(n,n.return,i)}else{var a=gl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){cc(n,n.return,l)}}64&r&&ss(n),512&r&&cs(n,n.return);break;case 3:if($s(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{po(e,t)}catch(i){cc(n,n.return,i)}}break;case 27:null===t&&4&r&&ys(n);case 26:case 5:$s(e,n),null===t&&4&r&&fs(n),512&r&&cs(n,n.return);break;case 12:$s(e,n);break;case 13:$s(e,n),4&r&&Ls(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$?"!==e.data||"complete"===n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=hc.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||bs)){t=null!==t&&null!==t.memoizedState||xs,a=bs;var o=xs;bs=r,(xs=t)&&!o?Ms(e,n,0!==(8772&n.subtreeFlags)):$s(e,n),bs=a,xs=o}break;case 30:break;default:$s(e,n)}}function Cs(e){var t=e.alternate;null!==t&&(e.alternate=null,Cs(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&Ie(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Es=null,Ps=!1;function _s(e,t,n){for(n=n.child;null!==n;)zs(e,t,n),n=n.sibling}function zs(e,t,n){if(de&&"function"===typeof de.onCommitFiberUnmount)try{de.onCommitFiberUnmount(ce,n)}catch(o){}switch(n.tag){case 26:xs||ds(n,t),_s(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:xs||ds(n,t);var r=Es,a=Ps;pd(n.type)&&(Es=n.stateNode,Ps=!1),_s(e,t,n),wd(n.stateNode),Es=r,Ps=a;break;case 5:xs||ds(n,t);case 6:if(r=Es,a=Ps,Es=null,_s(e,t,n),Ps=a,null!==(Es=r))if(Ps)try{(9===Es.nodeType?Es.body:"HTML"===Es.nodeName?Es.ownerDocument.body:Es).removeChild(n.stateNode)}catch(i){cc(n,t,i)}else try{Es.removeChild(n.stateNode)}catch(i){cc(n,t,i)}break;case 18:null!==Es&&(Ps?(hd(9===(e=Es).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),_f(e)):hd(Es,n.stateNode));break;case 4:r=Es,a=Ps,Es=n.stateNode.containerInfo,Ps=!0,_s(e,t,n),Es=r,Ps=a;break;case 0:case 11:case 14:case 15:xs||ls(2,n,t),xs||ls(4,n,t),_s(e,t,n);break;case 1:xs||(ds(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&us(n,t,r)),_s(e,t,n);break;case 21:_s(e,t,n);break;case 22:xs=(r=xs)||null!==n.memoizedState,_s(e,t,n),xs=r;break;default:_s(e,t,n)}}function Ls(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{_f(e)}catch(n){cc(t,t.return,n)}}function Ts(e,t){var n=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new ks),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new ks),t;default:throw Error(i(435,e.tag))}}(e);t.forEach((function(t){var r=mc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}function Ns(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r],o=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 27:if(pd(s.type)){Es=s.stateNode,Ps=!1;break e}break;case 5:Es=s.stateNode,Ps=!1;break e;case 3:case 4:Es=s.stateNode.containerInfo,Ps=!0;break e}s=s.return}if(null===Es)throw Error(i(160));zs(o,l,a),Es=null,Ps=!1,null!==(o=a.alternate)&&(o.return=null),a.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)Rs(t,e),t=t.sibling}var Os=null;function Rs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ns(t,e),As(e),4&r&&(ls(3,e,e.return),is(3,e),ls(5,e,e.return));break;case 1:Ns(t,e),As(e),512&r&&(xs||null===n||ds(n,n.return)),64&r&&bs&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var a=Os;if(Ns(t,e),As(e),512&r&&(xs||null===n||ds(n,n.return)),4&r){var o=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(r){case"title":(!(o=a.getElementsByTagName("title")[0])||o[Me]||o[Ne]||"http://www.w3.org/2000/svg"===o.namespaceURI||o.hasAttribute("itemprop"))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector("head > title"))),ed(o,r,n),o[Ne]=e,Ve(o),r=o;break e;case"link":var l=Md("link","href",a).get(r+(n.href||""));if(l)for(var s=0;s<l.length;s++)if((o=l[s]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&o.getAttribute("rel")===(null==n.rel?null:n.rel)&&o.getAttribute("title")===(null==n.title?null:n.title)&&o.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){l.splice(s,1);break t}ed(o=a.createElement(r),r,n),a.head.appendChild(o);break;case"meta":if(l=Md("meta","content",a).get(r+(n.content||"")))for(s=0;s<l.length;s++)if((o=l[s]).getAttribute("content")===(null==n.content?null:""+n.content)&&o.getAttribute("name")===(null==n.name?null:n.name)&&o.getAttribute("property")===(null==n.property?null:n.property)&&o.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&o.getAttribute("charset")===(null==n.charSet?null:n.charSet)){l.splice(s,1);break t}ed(o=a.createElement(r),r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[Ne]=e,Ve(o),r=o}e.stateNode=r}else Id(a,e.type,e.stateNode);else e.stateNode=Rd(a,r,e.memoizedProps);else o!==r?(null===o?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):o.count--,null===r?Id(a,e.type,e.stateNode):Rd(a,r,e.memoizedProps)):null===r&&null!==e.stateNode&&ps(e,e.memoizedProps,n.memoizedProps)}break;case 27:Ns(t,e),As(e),512&r&&(xs||null===n||ds(n,n.return)),null!==n&&4&r&&ps(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ns(t,e),As(e),512&r&&(xs||null===n||ds(n,n.return)),32&e.flags){a=e.stateNode;try{kt(a,"")}catch(h){cc(e,e.return,h)}}4&r&&null!=e.stateNode&&ps(e,a=e.memoizedProps,null!==n?n.memoizedProps:a),1024&r&&(ws=!0);break;case 6:if(Ns(t,e),As(e),4&r){if(null===e.stateNode)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(h){cc(e,e.return,h)}}break;case 3:if(Dd=null,a=Os,Os=jd(t.containerInfo),Ns(t,e),Os=a,As(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{_f(t.containerInfo)}catch(h){cc(e,e.return,h)}ws&&(ws=!1,Fs(e));break;case 4:r=Os,Os=jd(e.stateNode.containerInfo),Ns(t,e),As(e),Os=r;break;case 12:default:Ns(t,e),As(e);break;case 13:Ns(t,e),As(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(wu=te()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Ts(e,r)));break;case 22:a=null!==e.memoizedState;var u=null!==n&&null!==n.memoizedState,c=bs,d=xs;if(bs=c||a,xs=d||u,Ns(t,e),xs=d,bs=c,As(e),8192&r)e:for(t=e.stateNode,t._visibility=a?-2&t._visibility:1|t._visibility,a&&(null===n||u||bs||xs||Ds(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){u=n=t;try{if(o=u.stateNode,a)"function"===typeof(l=o.style).setProperty?l.setProperty("display","none","important"):l.display="none";else{s=u.stateNode;var f=u.memoizedProps.style,p=void 0!==f&&null!==f&&f.hasOwnProperty("display")?f.display:null;s.style.display=null==p||"boolean"===typeof p?"":(""+p).trim()}}catch(h){cc(u,u.return,h)}}}else if(6===t.tag){if(null===n){u=t;try{u.stateNode.nodeValue=a?"":u.memoizedProps}catch(h){cc(u,u.return,h)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,Ts(e,n))));break;case 19:Ns(t,e),As(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Ts(e,r)));case 30:case 21:}}function As(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(hs(r)){n=r;break}r=r.return}if(null==n)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;vs(e,ms(e),a);break;case 5:var o=n.stateNode;32&n.flags&&(kt(o,""),n.flags&=-33),vs(e,ms(e),o);break;case 3:case 4:var l=n.stateNode.containerInfo;gs(e,ms(e),l);break;default:throw Error(i(161))}}catch(s){cc(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Fs(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;Fs(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function $s(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)js(e,t.alternate,t),t=t.sibling}function Ds(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ls(4,t,t.return),Ds(t);break;case 1:ds(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&us(t,t.return,n),Ds(t);break;case 27:wd(t.stateNode);case 26:case 5:ds(t,t.return),Ds(t);break;case 22:null===t.memoizedState&&Ds(t);break;default:Ds(t)}e=e.sibling}}function Ms(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,a=e,o=t,i=o.flags;switch(o.tag){case 0:case 11:case 15:Ms(a,o,n),is(4,o);break;case 1:if(Ms(a,o,n),"function"===typeof(a=(r=o).stateNode).componentDidMount)try{a.componentDidMount()}catch(u){cc(r,r.return,u)}if(null!==(a=(r=o).updateQueue)){var l=r.stateNode;try{var s=a.shared.hiddenCallbacks;if(null!==s)for(a.shared.hiddenCallbacks=null,a=0;a<s.length;a++)fo(s[a],l)}catch(u){cc(r,r.return,u)}}n&&64&i&&ss(o),cs(o,o.return);break;case 27:ys(o);case 26:case 5:Ms(a,o,n),n&&null===r&&4&i&&fs(o),cs(o,o.return);break;case 12:Ms(a,o,n);break;case 13:Ms(a,o,n),n&&4&i&&Ls(a,o);break;case 22:null===o.memoizedState&&Ms(a,o,n),cs(o,o.return);break;case 30:break;default:Ms(a,o,n)}t=t.sibling}}function Is(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Ra(n))}function Us(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ra(e))}function Bs(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)Ws(e,t,n,r),t=t.sibling}function Ws(e,t,n,r){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Bs(e,t,n,r),2048&a&&is(9,t);break;case 1:case 13:default:Bs(e,t,n,r);break;case 3:Bs(e,t,n,r),2048&a&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ra(e)));break;case 12:if(2048&a){Bs(e,t,n,r),e=t.stateNode;try{var o=t.memoizedProps,i=o.id,l=o.onPostCommit;"function"===typeof l&&l(i,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(s){cc(t,t.return,s)}}else Bs(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,i=t.alternate,null!==t.memoizedState?2&o._visibility?Bs(e,t,n,r):Vs(e,t):2&o._visibility?Bs(e,t,n,r):(o._visibility|=2,Hs(e,t,n,r,0!==(10256&t.subtreeFlags))),2048&a&&Is(i,t);break;case 24:Bs(e,t,n,r),2048&a&&Us(t.alternate,t)}}function Hs(e,t,n,r,a){for(a=a&&0!==(10256&t.subtreeFlags),t=t.child;null!==t;){var o=e,i=t,l=n,s=r,u=i.flags;switch(i.tag){case 0:case 11:case 15:Hs(o,i,l,s,a),is(8,i);break;case 23:break;case 22:var c=i.stateNode;null!==i.memoizedState?2&c._visibility?Hs(o,i,l,s,a):Vs(o,i):(c._visibility|=2,Hs(o,i,l,s,a)),a&&2048&u&&Is(i.alternate,i);break;case 24:Hs(o,i,l,s,a),a&&2048&u&&Us(i.alternate,i);break;default:Hs(o,i,l,s,a)}t=t.sibling}}function Vs(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,a=r.flags;switch(r.tag){case 22:Vs(n,r),2048&a&&Is(r.alternate,r);break;case 24:Vs(n,r),2048&a&&Us(r.alternate,r);break;default:Vs(n,r)}t=t.sibling}}var qs=8192;function Ks(e){if(e.subtreeFlags&qs)for(e=e.child;null!==e;)Qs(e),e=e.sibling}function Qs(e){switch(e.tag){case 26:Ks(e),e.flags&qs&&null!==e.memoizedState&&function(e,t,n){if(null===Bd)throw Error(i(475));var r=Bd;if("stylesheet"===t.type&&("string"!==typeof n.media||!1!==matchMedia(n.media).matches)&&0===(4&t.state.loading)){if(null===t.instance){var a=zd(n.href),o=e.querySelector(Ld(a));if(o)return null!==(e=o._p)&&"object"===typeof e&&"function"===typeof e.then&&(r.count++,r=Hd.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=o,void Ve(o);o=e.ownerDocument||e,n=Td(n),(a=kd.get(a))&&Fd(n,a),Ve(o=o.createElement("link"));var l=o;l._p=new Promise((function(e,t){l.onload=e,l.onerror=t})),ed(o,"link",n),t.instance=o}null===r.stylesheets&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&0===(3&t.state.loading)&&(r.count++,t=Hd.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}(Os,e.memoizedState,e.memoizedProps);break;case 5:default:Ks(e);break;case 3:case 4:var t=Os;Os=jd(e.stateNode.containerInfo),Ks(e),Os=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=qs,qs=16777216,Ks(e),qs=t):Ks(e))}}function Gs(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function Ys(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Ss=r,Zs(r,e)}Gs(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Xs(e),e=e.sibling}function Xs(e){switch(e.tag){case 0:case 11:case 15:Ys(e),2048&e.flags&&ls(9,e,e.return);break;case 3:case 12:default:Ys(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,Js(e)):Ys(e)}}function Js(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Ss=r,Zs(r,e)}Gs(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:ls(8,t,t.return),Js(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,Js(t));break;default:Js(t)}e=e.sibling}}function Zs(e,t){for(;null!==Ss;){var n=Ss;switch(n.tag){case 0:case 11:case 15:ls(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:Ra(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,Ss=r;else e:for(n=e;null!==Ss;){var a=(r=Ss).sibling,o=r.return;if(Cs(r),r===n){Ss=null;break e}if(null!==a){a.return=o,Ss=a;break e}Ss=o}}}var eu={getCacheForType:function(e){var t=Ea(Na),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n}},tu="function"===typeof WeakMap?WeakMap:Map,nu=0,ru=null,au=null,ou=0,iu=0,lu=null,su=!1,uu=!1,cu=!1,du=0,fu=0,pu=0,hu=0,mu=0,gu=0,vu=0,yu=null,bu=null,xu=!1,wu=0,ku=1/0,Su=null,ju=null,Cu=0,Eu=null,Pu=null,_u=0,zu=0,Lu=null,Tu=null,Nu=0,Ou=null;function Ru(){if(0!==(2&nu)&&0!==ou)return ou&-ou;if(null!==R.T){return 0!==$a?$a:zc()}return Le()}function Au(){0===gu&&(gu=0===(536870912&ou)||oa?ke():536870912);var e=al.current;return null!==e&&(e.flags|=32),gu}function Fu(e,t,n){(e!==ru||2!==iu&&9!==iu)&&null===e.cancelPendingCommit||(Wu(e,0),Iu(e,ou,gu,!1)),Ce(e,n),0!==(2&nu)&&e===ru||(e===ru&&(0===(2&nu)&&(hu|=n),4===fu&&Iu(e,ou,gu,!1)),kc(e))}function $u(e,t,n){if(0!==(6&nu))throw Error(i(327));for(var r=!n&&0===(124&t)&&0===(t&e.expiredLanes)||xe(e,t),a=r?function(e,t){var n=nu;nu|=2;var r=Vu(),a=qu();ru!==e||ou!==t?(Su=null,ku=te()+500,Wu(e,t)):uu=xe(e,t);e:for(;;)try{if(0!==iu&&null!==au){t=au;var o=lu;t:switch(iu){case 1:iu=0,lu=null,Zu(e,t,o,1);break;case 2:case 9:if(Ga(o)){iu=0,lu=null,Ju(t);break}t=function(){2!==iu&&9!==iu||ru!==e||(iu=7),kc(e)},o.then(t,t);break e;case 3:iu=7;break e;case 4:iu=5;break e;case 7:Ga(o)?(iu=0,lu=null,Ju(t)):(iu=0,lu=null,Zu(e,t,o,7));break;case 5:var l=null;switch(au.tag){case 26:l=au.memoizedState;case 5:case 27:var s=au;if(!l||Ud(l)){iu=0,lu=null;var u=s.sibling;if(null!==u)au=u;else{var c=s.return;null!==c?(au=c,ec(c)):au=null}break t}}iu=0,lu=null,Zu(e,t,o,5);break;case 6:iu=0,lu=null,Zu(e,t,o,6);break;case 8:Bu(),fu=6;break e;default:throw Error(i(462))}}Yu();break}catch(d){Hu(e,d)}return ya=va=null,R.H=r,R.A=a,nu=n,null!==au?0:(ru=null,ou=0,_r(),fu)}(e,t):Qu(e,t,!0),o=r;;){if(0===a){uu&&!r&&Iu(e,t,0,!1);break}if(n=e.current.alternate,!o||Mu(n)){if(2===a){if(o=t,e.errorRecoveryDisabledLanes&o)var l=0;else l=0!==(l=-536870913&e.pendingLanes)?l:536870912&l?536870912:0;if(0!==l){t=l;e:{var s=e;a=yu;var u=s.current.memoizedState.isDehydrated;if(u&&(Wu(s,l).flags|=256),2!==(l=Qu(s,l,!1))){if(cu&&!u){s.errorRecoveryDisabledLanes|=o,hu|=o,a=4;break e}o=bu,bu=a,null!==o&&(null===bu?bu=o:bu.push.apply(bu,o))}a=l}if(o=!1,2!==a)continue}}if(1===a){Wu(e,0),Iu(e,t,0,!0);break}e:{switch(r=e,o=a){case 0:case 1:throw Error(i(345));case 4:if((4194048&t)!==t)break;case 6:Iu(r,t,gu,!su);break e;case 2:bu=null;break;case 3:case 5:break;default:throw Error(i(329))}if((62914560&t)===t&&10<(a=wu+300-te())){if(Iu(r,t,gu,!su),0!==be(r,0,!0))break e;r.timeoutHandle=sd(Du.bind(null,r,n,bu,Su,xu,t,gu,hu,vu,su,o,2,-0,0),a)}else Du(r,n,bu,Su,xu,t,gu,hu,vu,su,o,0,-0,0)}break}a=Qu(e,t,!1),o=!1}kc(e)}function Du(e,t,n,r,a,o,l,s,u,c,d,f,p,h){if(e.timeoutHandle=-1,(8192&(f=t.subtreeFlags)||16785408===(16785408&f))&&(Bd={stylesheets:null,count:0,unsuspend:Wd},Qs(t),null!==(f=function(){if(null===Bd)throw Error(i(475));var e=Bd;return e.stylesheets&&0===e.count&&qd(e,e.stylesheets),0<e.count?function(t){var n=setTimeout((function(){if(e.stylesheets&&qd(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}),6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}())))return e.cancelPendingCommit=f(nc.bind(null,e,t,o,n,r,a,l,s,u,d,1,p,h)),void Iu(e,o,l,!c);nc(e,t,o,n,r,a,l,s,u)}function Mu(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!Gn(o(),a))return!1}catch(i){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Iu(e,t,n,r){t&=~mu,t&=~hu,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var a=t;0<a;){var o=31-pe(a),i=1<<o;r[o]=-1,a&=~i}0!==n&&Ee(e,n,t)}function Uu(){return 0!==(6&nu)||(Sc(0,!1),!1)}function Bu(){if(null!==au){if(0===iu)var e=au.return;else ya=va=null,Do(e=au),Gi=null,Yi=0,e=au;for(;null!==e;)os(e.alternate,e),e=e.return;au=null}}function Wu(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,ud(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Bu(),ru=e,au=n=Dr(e.current,null),ou=t,iu=0,lu=null,su=!1,uu=xe(e,t),cu=!1,vu=gu=mu=hu=pu=fu=0,bu=yu=null,xu=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var a=31-pe(r),o=1<<a;t|=e[a],r&=~o}return du=t,_r(),n}function Hu(e,t){xo=null,R.H=Vi,t===Va||t===Ka?(t=Za(),iu=3):t===qa?(t=Za(),iu=4):iu=t===El?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,lu=t,null===au&&(fu=1,wl(e,jr(t,e.current)))}function Vu(){var e=R.H;return R.H=Vi,null===e?Vi:e}function qu(){var e=R.A;return R.A=eu,e}function Ku(){fu=4,su||(4194048&ou)!==ou&&null!==al.current||(uu=!0),0===(134217727&pu)&&0===(134217727&hu)||null===ru||Iu(ru,ou,gu,!1)}function Qu(e,t,n){var r=nu;nu|=2;var a=Vu(),o=qu();ru===e&&ou===t||(Su=null,Wu(e,t)),t=!1;var i=fu;e:for(;;)try{if(0!==iu&&null!==au){var l=au,s=lu;switch(iu){case 8:Bu(),i=6;break e;case 3:case 2:case 9:case 6:null===al.current&&(t=!0);var u=iu;if(iu=0,lu=null,Zu(e,l,s,u),n&&uu){i=0;break e}break;default:u=iu,iu=0,lu=null,Zu(e,l,s,u)}}Gu(),i=fu;break}catch(c){Hu(e,c)}return t&&e.shellSuspendCounter++,ya=va=null,nu=r,R.H=a,R.A=o,null===au&&(ru=null,ou=0,_r()),i}function Gu(){for(;null!==au;)Xu(au)}function Yu(){for(;null!==au&&!Z();)Xu(au)}function Xu(e){var t=Xl(e.alternate,e,du);e.memoizedProps=e.pendingProps,null===t?ec(e):au=t}function Ju(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Fl(n,t,t.pendingProps,t.type,void 0,ou);break;case 11:t=Fl(n,t,t.pendingProps,t.type.render,t.ref,ou);break;case 5:Do(t);default:os(n,t),t=Xl(n,t=au=Mr(t,du),du)}e.memoizedProps=e.pendingProps,null===t?ec(e):au=t}function Zu(e,t,n,r){ya=va=null,Do(t),Gi=null,Yi=0;var a=t.return;try{if(function(e,t,n,r,a){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&Sa(t,n,a,!0),null!==(n=al.current)){switch(n.tag){case 13:return null===ol?Ku():null===n.alternate&&0===fu&&(fu=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Qa?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),dc(e,r,a)),!1;case 22:return n.flags|=65536,r===Qa?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),dc(e,r,a)),!1}throw Error(i(435,n.tag))}return dc(e,r,a),Ku(),!1}if(oa)return null!==(t=al.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==sa&&ma(jr(e=Error(i(422),{cause:r}),n))):(r!==sa&&ma(jr(t=Error(i(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,a&=-a,e.lanes|=a,r=jr(r,n),lo(e,a=Sl(e.stateNode,r,a)),4!==fu&&(fu=2)),!1;var o=Error(i(520),{cause:r});if(o=jr(o,n),null===yu?yu=[o]:yu.push(o),4!==fu&&(fu=2),null===t)return!0;r=jr(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,lo(n,e=Sl(n.stateNode,r,e)),!1;case 1:if(t=n.type,o=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==o&&"function"===typeof o.componentDidCatch&&(null===ju||!ju.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,Cl(a=jl(a),e,n,r),lo(n,a),!1}n=n.return}while(null!==n);return!1}(e,a,t,n,ou))return fu=1,wl(e,jr(n,e.current)),void(au=null)}catch(o){if(null!==a)throw au=a,o;return fu=1,wl(e,jr(n,e.current)),void(au=null)}32768&t.flags?(oa||1===r?e=!0:uu||0!==(536870912&ou)?e=!1:(su=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=al.current)&&13===r.tag&&(r.flags|=16384))),tc(t,e)):ec(t)}function ec(e){var t=e;do{if(0!==(32768&t.flags))return void tc(t,su);e=t.return;var n=rs(t.alternate,t,du);if(null!==n)return void(au=n);if(null!==(t=t.sibling))return void(au=t);au=t=e}while(null!==t);0===fu&&(fu=5)}function tc(e,t){do{var n=as(e.alternate,e);if(null!==n)return n.flags&=32767,void(au=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(au=e);au=e=n}while(null!==e);fu=6,au=null}function nc(e,t,n,r,a,o,l,s,u){e.cancelPendingCommit=null;do{lc()}while(0!==Cu);if(0!==(6&nu))throw Error(i(327));if(null!==t){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,function(e,t,n,r,a,o){var i=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var l=e.entanglements,s=e.expirationTimes,u=e.hiddenUpdates;for(n=i&~n;0<n;){var c=31-pe(n),d=1<<c;l[c]=0,s[c]=-1;var f=u[c];if(null!==f)for(u[c]=null,c=0;c<f.length;c++){var p=f[c];null!==p&&(p.lane&=-536870913)}n&=~d}0!==r&&Ee(e,r,0),0!==o&&0===a&&0!==e.tag&&(e.suspendedLanes|=o&~(i&~t))}(e,n,o|=Pr,l,s,u),e===ru&&(au=ru=null,ou=0),Pu=t,Eu=e,_u=n,zu=o,Lu=a,Tu=r,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,X(oe,(function(){return sc(),null}))):(e.callbackNode=null,e.callbackPriority=0),r=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||r){r=R.T,R.T=null,a=A.p,A.p=2,l=nu,nu|=4;try{!function(e,t){if(e=e.containerInfo,td=nf,tr(e=er(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(g){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==a&&3!==f.nodeType||(s=l+a),f!==o||0!==r&&3!==f.nodeType||(u=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===a&&(s=l),p===o&&++d===r&&(u=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(nd={focusedElem:e,selectionRange:n},nf=!1,Ss=t;null!==Ss;)if(e=(t=Ss).child,0!==(1024&t.subtreeFlags)&&null!==e)e.return=t,Ss=e;else for(;null!==Ss;){switch(o=(t=Ss).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==o){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var m=gl(n.type,a,(n.elementType,n.type));e=r.getSnapshotBeforeUpdate(m,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(v){cc(n,n.return,v)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))md(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":md(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(i(163))}if(null!==(e=t.sibling)){e.return=t.return,Ss=e;break}Ss=t.return}}(e,t)}finally{nu=l,A.p=a,R.T=r}}Cu=1,rc(),ac(),oc()}}function rc(){if(1===Cu){Cu=0;var e=Eu,t=Pu,n=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||n){n=R.T,R.T=null;var r=A.p;A.p=2;var a=nu;nu|=4;try{Rs(t,e);var o=nd,i=er(e.containerInfo),l=o.focusedElem,s=o.selectionRange;if(i!==l&&l&&l.ownerDocument&&Zn(l.ownerDocument.documentElement,l)){if(null!==s&&tr(l)){var u=s.start,c=s.end;if(void 0===c&&(c=u),"selectionStart"in l)l.selectionStart=u,l.selectionEnd=Math.min(c,l.value.length);else{var d=l.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),h=l.textContent.length,m=Math.min(s.start,h),g=void 0===s.end?m:Math.min(s.end,h);!p.extend&&m>g&&(i=g,g=m,m=i);var v=Jn(l,m),y=Jn(l,g);if(v&&y&&(1!==p.rangeCount||p.anchorNode!==v.node||p.anchorOffset!==v.offset||p.focusNode!==y.node||p.focusOffset!==y.offset)){var b=d.createRange();b.setStart(v.node,v.offset),p.removeAllRanges(),m>g?(p.addRange(b),p.extend(y.node,y.offset)):(b.setEnd(y.node,y.offset),p.addRange(b))}}}}for(d=[],p=l;p=p.parentNode;)1===p.nodeType&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for("function"===typeof l.focus&&l.focus(),l=0;l<d.length;l++){var x=d[l];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}nf=!!td,nd=td=null}finally{nu=a,A.p=r,R.T=n}}e.current=t,Cu=2}}function ac(){if(2===Cu){Cu=0;var e=Eu,t=Pu,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=R.T,R.T=null;var r=A.p;A.p=2;var a=nu;nu|=4;try{js(e,t.alternate,t)}finally{nu=a,A.p=r,R.T=n}}Cu=3}}function oc(){if(4===Cu||3===Cu){Cu=0,ee();var e=Eu,t=Pu,n=_u,r=Tu;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Cu=5:(Cu=0,Pu=Eu=null,ic(e,e.pendingLanes));var a=e.pendingLanes;if(0===a&&(ju=null),ze(n),t=t.stateNode,de&&"function"===typeof de.onCommitFiberRoot)try{de.onCommitFiberRoot(ce,t,void 0,128===(128&t.current.flags))}catch(s){}if(null!==r){t=R.T,a=A.p,A.p=2,R.T=null;try{for(var o=e.onRecoverableError,i=0;i<r.length;i++){var l=r[i];o(l.value,{componentStack:l.stack})}}finally{R.T=t,A.p=a}}0!==(3&_u)&&lc(),kc(e),a=e.pendingLanes,0!==(4194090&n)&&0!==(42&a)?e===Ou?Nu++:(Nu=0,Ou=e):Nu=0,Sc(0,!1)}}function ic(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Ra(t)))}function lc(e){return rc(),ac(),oc(),sc()}function sc(){if(5!==Cu)return!1;var e=Eu,t=zu;zu=0;var n=ze(_u),r=R.T,a=A.p;try{A.p=32>n?32:n,R.T=null,n=Lu,Lu=null;var o=Eu,l=_u;if(Cu=0,Pu=Eu=null,_u=0,0!==(6&nu))throw Error(i(331));var s=nu;if(nu|=4,Xs(o.current),Ws(o,o.current,l,n),nu=s,Sc(0,!1),de&&"function"===typeof de.onPostCommitFiberRoot)try{de.onPostCommitFiberRoot(ce,o)}catch(u){}return!0}finally{A.p=a,R.T=r,ic(e,t)}}function uc(e,t,n){t=jr(n,t),null!==(e=oo(e,t=Sl(e.stateNode,t,2),2))&&(Ce(e,2),kc(e))}function cc(e,t,n){if(3===e.tag)uc(e,e,n);else for(;null!==t;){if(3===t.tag){uc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===ju||!ju.has(r))){e=jr(n,e),null!==(r=oo(t,n=jl(2),2))&&(Cl(n,r,t,e),Ce(r,2),kc(r));break}}t=t.return}}function dc(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new tu;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(cu=!0,a.add(n),e=fc.bind(null,e,t,n),t.then(e,e))}function fc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ru===e&&(ou&n)===n&&(4===fu||3===fu&&(62914560&ou)===ou&&300>te()-wu?0===(2&nu)&&Wu(e,0):mu|=n,vu===ou&&(vu=0)),kc(e)}function pc(e,t){0===t&&(t=Se()),null!==(e=Tr(e,t))&&(Ce(e,t),kc(e))}function hc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),pc(e,n)}function mc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}null!==r&&r.delete(t),pc(e,n)}var gc=null,vc=null,yc=!1,bc=!1,xc=!1,wc=0;function kc(e){e!==vc&&null===e.next&&(null===vc?gc=vc=e:vc=vc.next=e),bc=!0,yc||(yc=!0,dd((function(){0!==(6&nu)?X(re,jc):Cc()})))}function Sc(e,t){if(!xc&&bc){xc=!0;do{for(var n=!1,r=gc;null!==r;){if(!t)if(0!==e){var a=r.pendingLanes;if(0===a)var o=0;else{var i=r.suspendedLanes,l=r.pingedLanes;o=(1<<31-pe(42|e)+1)-1,o=201326741&(o&=a&~(i&~l))?201326741&o|1:o?2|o:0}0!==o&&(n=!0,_c(r,o))}else o=ou,0===(3&(o=be(r,r===ru?o:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||xe(r,o)||(n=!0,_c(r,o));r=r.next}}while(n);xc=!1}}function jc(){Cc()}function Cc(){bc=yc=!1;var e=0;0!==wc&&(function(){var e=window.event;if(e&&"popstate"===e.type)return e!==ld&&(ld=e,!0);return ld=null,!1}()&&(e=wc),wc=0);for(var t=te(),n=null,r=gc;null!==r;){var a=r.next,o=Ec(r,t);0===o?(r.next=null,null===n?gc=a:n.next=a,null===a&&(vc=n)):(n=r,(0!==e||0!==(3&o))&&(bc=!0)),r=a}Sc(e,!1)}function Ec(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=-62914561&e.pendingLanes;0<o;){var i=31-pe(o),l=1<<i,s=a[i];-1===s?0!==(l&n)&&0===(l&r)||(a[i]=we(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}if(n=ou,n=be(e,e===(t=ru)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===iu||9===iu)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&J(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||xe(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&J(r),ze(n)){case 2:case 8:n=ae;break;case 32:default:n=oe;break;case 268435456:n=le}return r=Pc.bind(null,e),n=X(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&J(r),e.callbackPriority=2,e.callbackNode=null,2}function Pc(e,t){if(0!==Cu&&5!==Cu)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(lc()&&e.callbackNode!==n)return null;var r=ou;return 0===(r=be(e,e===ru?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:($u(e,r,t),Ec(e,te()),null!=e.callbackNode&&e.callbackNode===n?Pc.bind(null,e):null)}function _c(e,t){if(lc())return null;$u(e,t,!0)}function zc(){return 0===wc&&(wc=ke()),wc}function Lc(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:zt(""+e)}function Tc(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Nc=0;Nc<wr.length;Nc++){var Oc=wr[Nc];kr(Oc.toLowerCase(),"on"+(Oc[0].toUpperCase()+Oc.slice(1)))}kr(pr,"onAnimationEnd"),kr(hr,"onAnimationIteration"),kr(mr,"onAnimationStart"),kr("dblclick","onDoubleClick"),kr("focusin","onFocus"),kr("focusout","onBlur"),kr(gr,"onTransitionRun"),kr(vr,"onTransitionStart"),kr(yr,"onTransitionCancel"),kr(br,"onTransitionEnd"),Ge("onMouseEnter",["mouseout","mouseover"]),Ge("onMouseLeave",["mouseout","mouseover"]),Ge("onPointerEnter",["pointerout","pointerover"]),Ge("onPointerLeave",["pointerout","pointerover"]),Qe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ac=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rc));function Fc(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&a.isPropagationStopped())break e;o=l,a.currentTarget=u;try{o(a)}catch(c){vl(c)}a.currentTarget=null,o=s}else for(i=0;i<r.length;i++){if(s=(l=r[i]).instance,u=l.currentTarget,l=l.listener,s!==o&&a.isPropagationStopped())break e;o=l,a.currentTarget=u;try{o(a)}catch(c){vl(c)}a.currentTarget=null,o=s}}}}function $c(e,t){var n=t[Ae];void 0===n&&(n=t[Ae]=new Set);var r=e+"__bubble";n.has(r)||(Uc(t,e,2,!1),n.add(r))}function Dc(e,t,n){var r=0;t&&(r|=4),Uc(n,e,r,t)}var Mc="_reactListening"+Math.random().toString(36).slice(2);function Ic(e){if(!e[Mc]){e[Mc]=!0,qe.forEach((function(t){"selectionchange"!==t&&(Ac.has(t)||Dc(t,!1,e),Dc(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Mc]||(t[Mc]=!0,Dc("selectionchange",!1,t))}}function Uc(e,t,n,r){switch(cf(t)){case 2:var a=rf;break;case 8:a=af;break;default:a=of}n=a.bind(null,t,n,e),a=void 0,!Mt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Bc(e,t,n,r,a){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===a)break;if(4===i)for(i=r.return;null!==i;){var u=i.tag;if((3===u||4===u)&&i.stateNode.containerInfo===a)return;i=i.return}for(;null!==l;){if(null===(i=Ue(l)))return;if(5===(u=i.tag)||6===u||26===u||27===u){r=o=i;continue e}l=l.parentNode}}r=r.return}Ft((function(){var r=o,a=Tt(n),i=[];e:{var l=xr.get(e);if(void 0!==l){var u=Zt,c=e;switch(e){case"keypress":if(0===Vt(n))break e;case"keydown":case"keyup":u=mn;break;case"focusin":c="focus",u=on;break;case"focusout":c="blur",u=on;break;case"beforeblur":case"afterblur":u=on;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":u=rn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":u=an;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":u=vn;break;case pr:case hr:case mr:u=ln;break;case br:u=yn;break;case"scroll":case"scrollend":u=tn;break;case"wheel":u=bn;break;case"copy":case"cut":case"paste":u=sn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":u=gn;break;case"toggle":case"beforetoggle":u=xn}var d=0!==(4&t),f=!d&&("scroll"===e||"scrollend"===e),p=d?null!==l?l+"Capture":null:l;d=[];for(var h,m=r;null!==m;){var g=m;if(h=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===h||null===p||null!=(g=$t(m,p))&&d.push(Wc(m,g,h)),f)break;m=m.return}0<d.length&&(l=new u(l,c,null,n,a),i.push({event:l,listeners:d}))}}if(0===(7&t)){if(u="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===Lt||!(c=n.relatedTarget||n.fromElement)||!Ue(c)&&!c[Re])&&(u||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,u?(u=r,null!==(c=(c=n.relatedTarget||n.toElement)?Ue(c):null)&&(f=s(c),d=c.tag,c!==f||5!==d&&27!==d&&6!==d)&&(c=null)):(u=null,c=r),u!==c)){if(d=rn,g="onMouseLeave",p="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(d=gn,g="onPointerLeave",p="onPointerEnter",m="pointer"),f=null==u?l:We(u),h=null==c?l:We(c),(l=new d(g,m+"leave",u,n,a)).target=f,l.relatedTarget=h,g=null,Ue(a)===r&&((d=new d(p,m+"enter",c,n,a)).target=h,d.relatedTarget=f,g=d),f=g,u&&c)e:{for(p=c,m=0,h=d=u;h;h=Vc(h))m++;for(h=0,g=p;g;g=Vc(g))h++;for(;0<m-h;)d=Vc(d),m--;for(;0<h-m;)p=Vc(p),h--;for(;m--;){if(d===p||null!==p&&d===p.alternate)break e;d=Vc(d),p=Vc(p)}d=null}else d=null;null!==u&&qc(i,l,u,d,!1),null!==c&&null!==f&&qc(i,f,c,d,!0)}if("select"===(u=(l=r?We(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===u&&"file"===l.type)var v=Dn;else if(Nn(l))if(Mn)v=Qn;else{v=qn;var y=Vn}else!(u=l.nodeName)||"input"!==u.toLowerCase()||"checkbox"!==l.type&&"radio"!==l.type?r&&Et(r.elementType)&&(v=Dn):v=Kn;switch(v&&(v=v(e,r))?On(i,v,n,a):(y&&y(e,l,r),"focusout"===e&&r&&"number"===l.type&&null!=r.memoizedProps.value&&yt(l,"number",l.value)),y=r?We(r):window,e){case"focusin":(Nn(y)||"true"===y.contentEditable)&&(rr=y,ar=r,or=null);break;case"focusout":or=ar=rr=null;break;case"mousedown":ir=!0;break;case"contextmenu":case"mouseup":case"dragend":ir=!1,lr(i,n,a);break;case"selectionchange":if(nr)break;case"keydown":case"keyup":lr(i,n,a)}var b;if(kn)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Ln?_n(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(Cn&&"ko"!==n.locale&&(Ln||"onCompositionStart"!==x?"onCompositionEnd"===x&&Ln&&(b=Ht()):(Bt="value"in(Ut=a)?Ut.value:Ut.textContent,Ln=!0)),0<(y=Hc(r,x)).length&&(x=new un(x,e,null,n,a),i.push({event:x,listeners:y}),b?x.data=b:null!==(b=zn(n))&&(x.data=b))),(b=jn?function(e,t){switch(e){case"compositionend":return zn(t);case"keypress":return 32!==t.which?null:(Pn=!0,En);case"textInput":return(e=t.data)===En&&Pn?null:e;default:return null}}(e,n):function(e,t){if(Ln)return"compositionend"===e||!kn&&_n(e,t)?(e=Ht(),Wt=Bt=Ut=null,Ln=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(x=Hc(r,"onBeforeInput")).length&&(y=new un("onBeforeInput","beforeinput",null,n,a),i.push({event:y,listeners:x}),y.data=b)),function(e,t,n,r,a){if("submit"===t&&n&&n.stateNode===a){var o=Lc((a[Oe]||null).action),i=r.submitter;i&&null!==(t=(t=i[Oe]||null)?Lc(t.formAction):i.getAttribute("formAction"))&&(o=t,i=null);var l=new Zt("action","action",null,r,a);e.push({event:l,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==wc){var e=i?Tc(a,i):new FormData(a);Ti(n,{pending:!0,data:e,method:a.method,action:o},null,e)}}else"function"===typeof o&&(l.preventDefault(),e=i?Tc(a,i):new FormData(a),Ti(n,{pending:!0,data:e,method:a.method,action:o},o,e))},currentTarget:a}]})}}(i,e,r,n,a)}Fc(i,t)}))}function Wc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hc(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,o=a.stateNode;if(5!==(a=a.tag)&&26!==a&&27!==a||null===o||(null!=(a=$t(e,n))&&r.unshift(Wc(e,a,o)),null!=(a=$t(e,t))&&r.push(Wc(e,a,o))),3===e.tag)return r;e=e.return}return[]}function Vc(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function qc(e,t,n,r,a){for(var o=t._reactName,i=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(l=l.tag,null!==s&&s===r)break;5!==l&&26!==l&&27!==l||null===u||(s=u,a?null!=(u=$t(n,o))&&i.unshift(Wc(n,u,s)):a||null!=(u=$t(n,o))&&i.push(Wc(n,u,s))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var Kc=/\r\n?/g,Qc=/\u0000|\uFFFD/g;function Gc(e){return("string"===typeof e?e:""+e).replace(Kc,"\n").replace(Qc,"")}function Yc(e,t){return t=Gc(t),Gc(e)===t}function Xc(){}function Jc(e,t,n,r,a,o){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||kt(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&kt(e,""+r);break;case"className":nt(e,"class",r);break;case"tabIndex":nt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":nt(e,n,r);break;case"style":Ct(e,r,o);break;case"data":if("object"!==t){nt(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=zt(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof o&&("formAction"===n?("input"!==t&&Jc(e,t,"name",a.name,a,null),Jc(e,t,"formEncType",a.formEncType,a,null),Jc(e,t,"formMethod",a.formMethod,a,null),Jc(e,t,"formTarget",a.formTarget,a,null)):(Jc(e,t,"encType",a.encType,a,null),Jc(e,t,"method",a.method,a,null),Jc(e,t,"target",a.target,a,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=zt(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Xc);break;case"onScroll":null!=r&&$c("scroll",e);break;case"onScrollEnd":null!=r&&$c("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(i(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(i(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=zt(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":$c("beforetoggle",e),$c("toggle",e),tt(e,"popover",r);break;case"xlinkActuate":rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":rt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":rt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":rt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":rt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":tt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&tt(e,n=Pt.get(n)||n,r)}}function Zc(e,t,n,r,a,o){switch(n){case"style":Ct(e,r,o);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(i(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(i(60));e.innerHTML=n}}break;case"children":"string"===typeof r?kt(e,r):("number"===typeof r||"bigint"===typeof r)&&kt(e,""+r);break;case"onScroll":null!=r&&$c("scroll",e);break;case"onScrollEnd":null!=r&&$c("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Xc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:Ke.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),"function"===typeof(o=null!=(o=e[Oe]||null)?o[n]:null)&&e.removeEventListener(t,o,a),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):tt(e,n,r):("function"!==typeof o&&null!==o&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a)))}}function ed(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":$c("error",e),$c("load",e);var r,a=!1,o=!1;for(r in n)if(n.hasOwnProperty(r)){var l=n[r];if(null!=l)switch(r){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Jc(e,t,r,l,n,null)}}return o&&Jc(e,t,"srcSet",n.srcSet,n,null),void(a&&Jc(e,t,"src",n.src,n,null));case"input":$c("invalid",e);var s=r=l=o=null,u=null,c=null;for(a in n)if(n.hasOwnProperty(a)){var d=n[a];if(null!=d)switch(a){case"name":o=d;break;case"type":l=d;break;case"checked":u=d;break;case"defaultChecked":c=d;break;case"value":r=d;break;case"defaultValue":s=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(i(137,t));break;default:Jc(e,t,a,d,n,null)}}return vt(e,r,s,u,c,l,o,!1),void dt(e);case"select":for(o in $c("invalid",e),a=l=r=null,n)if(n.hasOwnProperty(o)&&null!=(s=n[o]))switch(o){case"value":r=s;break;case"defaultValue":l=s;break;case"multiple":a=s;default:Jc(e,t,o,s,n,null)}return t=r,n=l,e.multiple=!!a,void(null!=t?bt(e,!!a,t,!1):null!=n&&bt(e,!!a,n,!0));case"textarea":for(l in $c("invalid",e),r=o=a=null,n)if(n.hasOwnProperty(l)&&null!=(s=n[l]))switch(l){case"value":a=s;break;case"defaultValue":o=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(null!=s)throw Error(i(91));break;default:Jc(e,t,l,s,n,null)}return wt(e,a,o,r),void dt(e);case"option":for(u in n)if(n.hasOwnProperty(u)&&null!=(a=n[u]))if("selected"===u)e.selected=a&&"function"!==typeof a&&"symbol"!==typeof a;else Jc(e,t,u,a,n,null);return;case"dialog":$c("beforetoggle",e),$c("toggle",e),$c("cancel",e),$c("close",e);break;case"iframe":case"object":$c("load",e);break;case"video":case"audio":for(a=0;a<Rc.length;a++)$c(Rc[a],e);break;case"image":$c("error",e),$c("load",e);break;case"details":$c("toggle",e);break;case"embed":case"source":case"link":$c("error",e),$c("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&null!=(a=n[c]))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Jc(e,t,c,a,n,null)}return;default:if(Et(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(a=n[d])&&Zc(e,t,d,a,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(null!=(a=n[s])&&Jc(e,t,s,a,n,null))}var td=null,nd=null;function rd(e){return 9===e.nodeType?e:e.ownerDocument}function ad(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function od(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function id(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ld=null;var sd="function"===typeof setTimeout?setTimeout:void 0,ud="function"===typeof clearTimeout?clearTimeout:void 0,cd="function"===typeof Promise?Promise:void 0,dd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof cd?function(e){return cd.resolve(null).then(e).catch(fd)}:sd;function fd(e){setTimeout((function(){throw e}))}function pd(e){return"head"===e}function hd(e,t){var n=t,r=0,a=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType)if("/$"===(n=o.data)){if(0<r&&8>r){n=r;var i=e.ownerDocument;if(1&n&&wd(i.documentElement),2&n&&wd(i.body),4&n)for(wd(n=i.head),i=n.firstChild;i;){var l=i.nextSibling,s=i.nodeName;i[Me]||"SCRIPT"===s||"STYLE"===s||"LINK"===s&&"stylesheet"===i.rel.toLowerCase()||n.removeChild(i),i=l}}if(0===a)return e.removeChild(o),void _f(t);a--}else"$"===n||"$?"===n||"$!"===n?a++:r=n.charCodeAt(0)-48;else r=0;n=o}while(n);_f(t)}function md(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":md(n),Ie(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function gd(e){return"$!"===e.data||"$?"===e.data&&"complete"===e.ownerDocument.readyState}function vd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}var yd=null;function bd(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}function xd(e,t,n){switch(t=rd(n),e){case"html":if(!(e=t.documentElement))throw Error(i(452));return e;case"head":if(!(e=t.head))throw Error(i(453));return e;case"body":if(!(e=t.body))throw Error(i(454));return e;default:throw Error(i(451))}}function wd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ie(e)}var kd=new Map,Sd=new Set;function jd(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Cd=A.d;A.d={f:function(){var e=Cd.f(),t=Uu();return e||t},r:function(e){var t=Be(e);null!==t&&5===t.tag&&"form"===t.type?Oi(t):Cd.r(e)},D:function(e){Cd.D(e),Pd("dns-prefetch",e,null)},C:function(e,t){Cd.C(e,t),Pd("preconnect",e,t)},L:function(e,t,n){Cd.L(e,t,n);var r=Ed;if(r&&e&&t){var a='link[rel="preload"][as="'+mt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(a+='[imagesrcset="'+mt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(a+='[imagesizes="'+mt(n.imageSizes)+'"]')):a+='[href="'+mt(e)+'"]';var o=a;switch(t){case"style":o=zd(e);break;case"script":o=Nd(e)}kd.has(o)||(e=f({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),kd.set(o,e),null!==r.querySelector(a)||"style"===t&&r.querySelector(Ld(o))||"script"===t&&r.querySelector(Od(o))||(ed(t=r.createElement("link"),"link",e),Ve(t),r.head.appendChild(t)))}},m:function(e,t){Cd.m(e,t);var n=Ed;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",a='link[rel="modulepreload"][as="'+mt(r)+'"][href="'+mt(e)+'"]',o=a;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Nd(e)}if(!kd.has(o)&&(e=f({rel:"modulepreload",href:e},t),kd.set(o,e),null===n.querySelector(a))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Od(o)))return}ed(r=n.createElement("link"),"link",e),Ve(r),n.head.appendChild(r)}}},X:function(e,t){Cd.X(e,t);var n=Ed;if(n&&e){var r=He(n).hoistableScripts,a=Nd(e),o=r.get(a);o||((o=n.querySelector(Od(a)))||(e=f({src:e,async:!0},t),(t=kd.get(a))&&$d(e,t),Ve(o=n.createElement("script")),ed(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(a,o))}},S:function(e,t,n){Cd.S(e,t,n);var r=Ed;if(r&&e){var a=He(r).hoistableStyles,o=zd(e);t=t||"default";var i=a.get(o);if(!i){var l={loading:0,preload:null};if(i=r.querySelector(Ld(o)))l.loading=5;else{e=f({rel:"stylesheet",href:e,"data-precedence":t},n),(n=kd.get(o))&&Fd(e,n);var s=i=r.createElement("link");Ve(s),ed(s,"link",e),s._p=new Promise((function(e,t){s.onload=e,s.onerror=t})),s.addEventListener("load",(function(){l.loading|=1})),s.addEventListener("error",(function(){l.loading|=2})),l.loading|=4,Ad(i,t,r)}i={type:"stylesheet",instance:i,count:1,state:l},a.set(o,i)}}},M:function(e,t){Cd.M(e,t);var n=Ed;if(n&&e){var r=He(n).hoistableScripts,a=Nd(e),o=r.get(a);o||((o=n.querySelector(Od(a)))||(e=f({src:e,async:!0,type:"module"},t),(t=kd.get(a))&&$d(e,t),Ve(o=n.createElement("script")),ed(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(a,o))}}};var Ed="undefined"===typeof document?null:document;function Pd(e,t,n){var r=Ed;if(r&&"string"===typeof t&&t){var a=mt(t);a='link[rel="'+e+'"][href="'+a+'"]',"string"===typeof n&&(a+='[crossorigin="'+n+'"]'),Sd.has(a)||(Sd.add(a),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(a)&&(ed(t=r.createElement("link"),"link",e),Ve(t),r.head.appendChild(t)))}}function _d(e,t,n,r){var a,o,l,s,u=(u=H.current)?jd(u):null;if(!u)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=zd(n.href),(r=(n=He(u).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=zd(n.href);var c=He(u).hoistableStyles,d=c.get(e);if(d||(u=u.ownerDocument||u,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,d),(c=u.querySelector(Ld(e)))&&!c._p&&(d.instance=c,d.state.loading=5),kd.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},kd.set(e,n),c||(a=u,o=e,l=n,s=d.state,a.querySelector('link[rel="preload"][as="style"]['+o+"]")?s.loading=1:(o=a.createElement("link"),s.preload=o,o.addEventListener("load",(function(){return s.loading|=1})),o.addEventListener("error",(function(){return s.loading|=2})),ed(o,"link",l),Ve(o),a.head.appendChild(o))))),t&&null===r)throw Error(i(528,""));return d}if(t&&null!==r)throw Error(i(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=Nd(n),(r=(n=He(u).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function zd(e){return'href="'+mt(e)+'"'}function Ld(e){return'link[rel="stylesheet"]['+e+"]"}function Td(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function Nd(e){return'[src="'+mt(e)+'"]'}function Od(e){return"script[async]"+e}function Rd(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+mt(n.href)+'"]');if(r)return t.instance=r,Ve(r),r;var a=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return Ve(r=(e.ownerDocument||e).createElement("style")),ed(r,"style",a),Ad(r,n.precedence,e),t.instance=r;case"stylesheet":a=zd(n.href);var o=e.querySelector(Ld(a));if(o)return t.state.loading|=4,t.instance=o,Ve(o),o;r=Td(n),(a=kd.get(a))&&Fd(r,a),Ve(o=(e.ownerDocument||e).createElement("link"));var l=o;return l._p=new Promise((function(e,t){l.onload=e,l.onerror=t})),ed(o,"link",r),t.state.loading|=4,Ad(o,n.precedence,e),t.instance=o;case"script":return o=Nd(n.src),(a=e.querySelector(Od(o)))?(t.instance=a,Ve(a),a):(r=n,(a=kd.get(o))&&$d(r=f({},n),a),Ve(a=(e=e.ownerDocument||e).createElement("script")),ed(a,"link",r),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(i(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Ad(r,n.precedence,e));return t.instance}function Ad(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,o=a,i=0;i<r.length;i++){var l=r[i];if(l.dataset.precedence===t)o=l;else if(o!==a)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function Fd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function $d(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var Dd=null;function Md(e,t,n){if(null===Dd){var r=new Map,a=Dd=new Map;a.set(n,r)}else(r=(a=Dd).get(n))||(r=new Map,a.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var o=n[a];if(!(o[Me]||o[Ne]||"link"===e&&"stylesheet"===o.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==o.namespaceURI){var i=o.getAttribute(t)||"";i=e+i;var l=r.get(i);l?l.push(o):r.set(i,[o])}}return r}function Id(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function Ud(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var Bd=null;function Wd(){}function Hd(){if(this.count--,0===this.count)if(this.stylesheets)qd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var Vd=null;function qd(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,Vd=new Map,t.forEach(Kd,e),Vd=null,Hd.call(e))}function Kd(e,t){if(!(4&t.state.loading)){var n=Vd.get(e);if(n)var r=n.get(null);else{n=new Map,Vd.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<a.length;o++){var i=a[o];"LINK"!==i.nodeName&&"not all"===i.getAttribute("media")||(n.set(i.dataset.precedence,i),r=i)}r&&n.set(null,r)}i=(a=t.instance).getAttribute("data-precedence"),(o=n.get(i)||r)===r&&n.set(null,a),n.set(i,a),this.count++,r=Hd.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),o?o.parentNode.insertBefore(a,o.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(a,e.firstChild),t.state.loading|=4}}var Qd={$$typeof:w,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function Gd(e,t,n,r,a,o,i,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=je(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=je(0),this.hiddenUpdates=je(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=o,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function Yd(e,t,n,r,a,o,i,l,s,u,c,d){return e=new Gd(e,t,n,i,l,s,u,d),t=1,!0===o&&(t|=24),o=Fr(3,null,null,t),e.current=o,o.stateNode=e,(t=Oa()).refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:r,isDehydrated:n,cache:t},no(o),e}function Xd(e){return e?e=Rr:Rr}function Jd(e,t,n,r,a,o){a=Xd(a),null===r.context?r.context=a:r.pendingContext=a,(r=ao(t)).payload={element:n},null!==(o=void 0===o?null:o)&&(r.callback=o),null!==(n=oo(e,r,t))&&(Fu(n,0,t),io(n,e,t))}function Zd(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function ef(e,t){Zd(e,t),(e=e.alternate)&&Zd(e,t)}function tf(e){if(13===e.tag){var t=Tr(e,67108864);null!==t&&Fu(t,0,67108864),ef(e,67108864)}}var nf=!0;function rf(e,t,n,r){var a=R.T;R.T=null;var o=A.p;try{A.p=2,of(e,t,n,r)}finally{A.p=o,R.T=a}}function af(e,t,n,r){var a=R.T;R.T=null;var o=A.p;try{A.p=8,of(e,t,n,r)}finally{A.p=o,R.T=a}}function of(e,t,n,r){if(nf){var a=lf(r);if(null===a)Bc(e,t,r,sf,n),bf(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return ff=xf(ff,e,t,n,r,a),!0;case"dragenter":return pf=xf(pf,e,t,n,r,a),!0;case"mouseover":return hf=xf(hf,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return mf.set(o,xf(mf.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,gf.set(o,xf(gf.get(o)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(bf(e,r),4&t&&-1<yf.indexOf(e)){for(;null!==a;){var o=Be(a);if(null!==o)switch(o.tag){case 3:if((o=o.stateNode).current.memoizedState.isDehydrated){var i=ye(o.pendingLanes);if(0!==i){var l=o;for(l.pendingLanes|=2,l.entangledLanes|=2;i;){var s=1<<31-pe(i);l.entanglements[1]|=s,i&=~s}kc(o),0===(6&nu)&&(ku=te()+500,Sc(0,!1))}}break;case 13:null!==(l=Tr(o,2))&&Fu(l,0,2),Uu(),ef(o,2)}if(null===(o=lf(r))&&Bc(e,t,r,sf,n),o===a)break;a=o}null!==a&&r.stopPropagation()}else Bc(e,t,r,null,n)}}function lf(e){return uf(e=Tt(e))}var sf=null;function uf(e){if(sf=null,null!==(e=Ue(e))){var t=s(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=u(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return sf=e,null}function cf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case re:return 2;case ae:return 8;case oe:case ie:return 32;case le:return 268435456;default:return 32}default:return 32}}var df=!1,ff=null,pf=null,hf=null,mf=new Map,gf=new Map,vf=[],yf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bf(e,t){switch(e){case"focusin":case"focusout":ff=null;break;case"dragenter":case"dragleave":pf=null;break;case"mouseover":case"mouseout":hf=null;break;case"pointerover":case"pointerout":mf.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gf.delete(t.pointerId)}}function xf(e,t,n,r,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},null!==t&&(null!==(t=Be(t))&&tf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function wf(e){var t=Ue(e.target);if(null!==t){var n=s(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=u(n)))return e.blockedOn=t,void function(e,t){var n=A.p;try{return A.p=e,t()}finally{A.p=n}}(e.priority,(function(){if(13===n.tag){var e=Ru();e=_e(e);var t=Tr(n,e);null!==t&&Fu(t,0,e),ef(n,e)}}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function kf(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=lf(e.nativeEvent);if(null!==n)return null!==(t=Be(n))&&tf(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Lt=r,n.target.dispatchEvent(r),Lt=null,t.shift()}return!0}function Sf(e,t,n){kf(e)&&n.delete(t)}function jf(){df=!1,null!==ff&&kf(ff)&&(ff=null),null!==pf&&kf(pf)&&(pf=null),null!==hf&&kf(hf)&&(hf=null),mf.forEach(Sf),gf.forEach(Sf)}function Cf(e,t){e.blockedOn===t&&(e.blockedOn=null,df||(df=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,jf)))}var Ef=null;function Pf(e){Ef!==e&&(Ef=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,(function(){Ef===e&&(Ef=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],a=e[t+2];if("function"!==typeof r){if(null===uf(r||n))continue;break}var o=Be(n);null!==o&&(e.splice(t,3),t-=3,Ti(o,{pending:!0,data:a,method:n.method,action:r},r,a))}})))}function _f(e){function t(t){return Cf(t,e)}null!==ff&&Cf(ff,e),null!==pf&&Cf(pf,e),null!==hf&&Cf(hf,e),mf.forEach(t),gf.forEach(t);for(var n=0;n<vf.length;n++){var r=vf[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<vf.length&&null===(n=vf[0]).blockedOn;)wf(n),null===n.blockedOn&&vf.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var a=n[r],o=n[r+1],i=a[Oe]||null;if("function"===typeof o)i||Pf(n);else if(i){var l=null;if(o&&o.hasAttribute("formAction")){if(a=o,i=o[Oe]||null)l=i.formAction;else if(null!==uf(a))continue}else l=i.action;"function"===typeof l?n[r+1]=l:(n.splice(r,3),r-=3),Pf(n)}}}function zf(e){this._internalRoot=e}function Lf(e){this._internalRoot=e}Lf.prototype.render=zf.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));Jd(t.current,Ru(),e,t,null,null)},Lf.prototype.unmount=zf.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;Jd(e.current,2,null,e,null,null),Uu(),t[Re]=null}},Lf.prototype.unstable_scheduleHydration=function(e){if(e){var t=Le();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vf.length&&0!==t&&t<vf[n].priority;n++);vf.splice(n,0,e),0===n&&wf(e)}};var Tf=a.version;if("19.1.0"!==Tf)throw Error(i(527,Tf,"19.1.0"));A.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=s(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var o=a.alternate;if(null===o){if(null!==(r=a.return)){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return c(a),e;if(o===r)return c(a),t;o=o.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=o;else{for(var l=!1,u=a.child;u;){if(u===n){l=!0,n=a,r=o;break}if(u===r){l=!0,r=a,n=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===n){l=!0,n=o,r=a;break}if(u===r){l=!0,r=o,n=a;break}u=u.sibling}if(!l)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?d(e):null)?null:e.stateNode};var Nf={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.1.0"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Of=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Of.isDisabled&&Of.supportsFiber)try{ce=Of.inject(Nf),de=Of}catch(Af){}}t.createRoot=function(e,t){if(!l(e))throw Error(i(299));var n=!1,r="",a=yl,o=bl,s=xl;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(a=t.onUncaughtError),void 0!==t.onCaughtError&&(o=t.onCaughtError),void 0!==t.onRecoverableError&&(s=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=Yd(e,1,!1,null,0,n,r,a,o,s,0,null),e[Re]=t.current,Ic(e),new zf(t)},t.hydrateRoot=function(e,t,n){if(!l(e))throw Error(i(299));var r=!1,a="",o=yl,s=bl,u=xl,c=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onUncaughtError&&(o=n.onUncaughtError),void 0!==n.onCaughtError&&(s=n.onCaughtError),void 0!==n.onRecoverableError&&(u=n.onRecoverableError),void 0!==n.unstable_transitionCallbacks&&n.unstable_transitionCallbacks,void 0!==n.formState&&(c=n.formState)),(t=Yd(e,1,!0,t,0,r,a,o,s,u,0,c)).context=Xd(null),n=t.current,(a=ao(r=_e(r=Ru()))).callback=null,oo(n,a,r),n=r,t.current.lanes=n,Ce(t,n),kc(t),e[Re]=t.current,Ic(e),new Lf(t)},t.version="19.1.0"},557:(e,t,n)=>{"use strict";e.exports=n(696)},592:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var x=b.prototype=new y;x.constructor=b,m(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,k={H:null,A:null,T:null,S:null,V:null},S=Object.prototype.hasOwnProperty;function j(e,t,r,a,o,i){return r=i.ref,{$$typeof:n,type:e,key:t,ref:void 0!==r?r:null,props:i}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function P(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(){}function z(e,t,a,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s,u,c=!1;if(null===e)c=!0;else switch(l){case"bigint":case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0;break;case f:return z((c=e._init)(e._payload),t,a,o,i)}}if(c)return i=i(e),c=""===o?"."+P(e,0):o,w(i)?(a="",null!=c&&(a=c.replace(E,"$&/")+"/"),z(i,t,a,"",(function(e){return e}))):null!=i&&(C(i)&&(s=i,u=a+(null==i.key||e&&e.key===i.key?"":(""+i.key).replace(E,"$&/")+"/")+c,i=j(s.type,u,void 0,0,0,s.props)),t.push(i)),1;c=0;var d,h=""===o?".":o+":";if(w(e))for(var m=0;m<e.length;m++)c+=z(o=e[m],t,a,l=h+P(o,m),i);else if("function"===typeof(m=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=p&&d[p]||d["@@iterator"])?d:null))for(e=m.call(e),m=0;!(o=e.next()).done;)c+=z(o=o.value,t,a,l=h+P(o,m++),i);else if("object"===l){if("function"===typeof e.then)return z(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(_,_):(e.status="pending",e.then((function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)}),(function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)}))),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,a,o,i);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return c}function L(e,t,n){if(null==e)return e;var r=[],a=0;return z(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function O(){}t.Children={map:L,forEach:function(e,t,n){L(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return L(e,(function(){t++})),t},toArray:function(e){return L(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=a,t.Profiler=i,t.PureComponent=b,t.StrictMode=o,t.Suspense=c,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return k.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=m({},e.props),a=e.key;if(null!=t)for(o in void 0!==t.ref&&void 0,void 0!==t.key&&(a=""+t.key),t)!S.call(t,o)||"key"===o||"__self"===o||"__source"===o||"ref"===o&&void 0===t.ref||(r[o]=t[o]);var o=arguments.length-2;if(1===o)r.children=n;else if(1<o){for(var i=Array(o),l=0;l<o;l++)i[l]=arguments[l+2];r.children=i}return j(e.type,a,void 0,0,0,r)},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:l,_context:e},e},t.createElement=function(e,t,n){var r,a={},o=null;if(null!=t)for(r in void 0!==t.key&&(o=""+t.key),t)S.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(a[r]=t[r]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];a.children=l}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===a[r]&&(a[r]=i[r]);return j(e,o,void 0,0,0,a)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=k.T,n={};k.T=n;try{var r=e(),a=k.S;null!==a&&a(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(O,N)}catch(o){N(o)}finally{k.T=t}},t.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},t.use=function(e){return k.H.use(e)},t.useActionState=function(e,t,n){return k.H.useActionState(e,t,n)},t.useCallback=function(e,t){return k.H.useCallback(e,t)},t.useContext=function(e){return k.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return k.H.useDeferredValue(e,t)},t.useEffect=function(e,t,n){var r=k.H;if("function"===typeof n)throw Error("useEffect CRUD overload is not enabled in this build of React.");return r.useEffect(e,t)},t.useId=function(){return k.H.useId()},t.useImperativeHandle=function(e,t,n){return k.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return k.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return k.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return k.H.useMemo(e,t)},t.useOptimistic=function(e,t){return k.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return k.H.useReducer(e,t,n)},t.useRef=function(e){return k.H.useRef(e)},t.useState=function(e){return k.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return k.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return k.H.useTransition()},t.version="19.1.0"},696:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<o(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>o(s,n))u<a&&0>o(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<a&&0>o(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,v=!1,y="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function k(e){if(g=!1,w(e),!m)if(null!==r(u))m=!0,j||(j=!0,S());else{var t=r(c);null!==t&&N(k,t.startTime-e)}}var S,j=!1,C=-1,E=5,P=-1;function _(){return!!v||!(t.unstable_now()-P<E)}function z(){if(v=!1,j){var e=t.unstable_now();P=e;var n=!0;try{e:{m=!1,g&&(g=!1,b(C),C=-1),h=!0;var o=p;try{t:{for(w(e),f=r(u);null!==f&&!(f.expirationTime>e&&_());){var i=f.callback;if("function"===typeof i){f.callback=null,p=f.priorityLevel;var l=i(f.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof l){f.callback=l,w(e),n=!0;break t}f===r(u)&&a(u),w(e)}else a(u);f=r(u)}if(null!==f)n=!0;else{var s=r(c);null!==s&&N(k,s.startTime-e),n=!1}}break e}finally{f=null,p=o,h=!1}n=void 0}}finally{n?S():j=!1}}}if("function"===typeof x)S=function(){x(z)};else if("undefined"!==typeof MessageChannel){var L=new MessageChannel,T=L.port2;L.port1.onmessage=z,S=function(){T.postMessage(null)}}else S=function(){y(z,0)};function N(e,n){C=y((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_requestPaint=function(){v=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,o){var i=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?i+o:i:o=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>i?(e.sortIndex=o,n(c,e),null===r(u)&&e===r(c)&&(g?(b(C),C=-1):g=!0,N(k,o-i))):(e.sortIndex=l,n(u,e),m||h||(m=!0,j||(j=!0,S()))),e},t.unstable_shouldYield=_,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},719:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(e,t,r){var a=null;if(void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),"key"in t)for(var o in r={},t)"key"!==o&&(r[o]=t[o]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:a,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=a,t.jsxs=a},723:(e,t,n)=>{"use strict";e.exports=n(719)},775:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(556)},904:(e,t,n)=>{"use strict";var r=n(483);function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var i={d:{f:o,r:function(){throw Error(a(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},l=Symbol.for("react.portal");var s=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(a(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:l,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,i.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&i.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=u(n,t.crossOrigin),a="string"===typeof t.integrity?t.integrity:void 0,o="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?i.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):"script"===n&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=u(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&i.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=u(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=u(t.as,t.crossOrigin);i.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else i.d.m(e)},t.requestFormReset=function(e){i.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},t.useFormStatus=function(){return s.H.useHostTransitionStatus()},t.version="19.1.0"},916:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var u=o[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(a=n?n.call(r,c,d,u):void 0)||void 0===a&&c!==d)return!1}return!0}},998:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(904)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&a&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>r[e]));return i.default=()=>r,n.d(o,i),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{"use strict";var e,t=n(483),r=n.t(t,2),a=n(775);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const i="popstate";function l(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function s(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function u(e,t){return{usr:e.state,key:e.key,idx:t}}function c(e,t,n,r){return void 0===n&&(n=null),o({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?f(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function d(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function f(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function p(t,n,r,a){void 0===a&&(a={});let{window:s=document.defaultView,v5Compat:f=!1}=a,p=s.history,h=e.Pop,m=null,g=v();function v(){return(p.state||{idx:null}).idx}function y(){h=e.Pop;let t=v(),n=null==t?null:t-g;g=t,m&&m({action:h,location:x.location,delta:n})}function b(e){let t="null"!==s.location.origin?s.location.origin:s.location.href,n="string"===typeof e?e:d(e);return n=n.replace(/ $/,"%20"),l(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,p.replaceState(o({},p.state,{idx:g}),""));let x={get action(){return h},get location(){return t(s,p)},listen(e){if(m)throw new Error("A history only accepts one active listener");return s.addEventListener(i,y),m=e,()=>{s.removeEventListener(i,y),m=null}},createHref:e=>n(s,e),createURL:b,encodeLocation(e){let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,n){h=e.Push;let a=c(x.location,t,n);r&&r(a,t),g=v()+1;let o=u(a,g),i=x.createHref(a);try{p.pushState(o,"",i)}catch(l){if(l instanceof DOMException&&"DataCloneError"===l.name)throw l;s.location.assign(i)}f&&m&&m({action:h,location:x.location,delta:1})},replace:function(t,n){h=e.Replace;let a=c(x.location,t,n);r&&r(a,t),g=v();let o=u(a,g),i=x.createHref(a);p.replaceState(o,"",i),f&&m&&m({action:h,location:x.location,delta:0})},go:e=>p.go(e)};return x}var h;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(h||(h={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function m(e,t,n){return void 0===n&&(n="/"),g(e,t,n,!1)}function g(e,t,n,r){let a=L(("string"===typeof t?f(t):t).pathname||"/",n);if(null==a)return null;let o=v(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let i=null;for(let l=0;null==i&&l<o.length;++l){let e=z(a);i=P(o[l],e,r)}return i}function v(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let a=(e,a,o)=>{let i={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};i.relativePath.startsWith("/")&&(l(i.relativePath.startsWith(r),'Absolute route path "'+i.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(r.length));let s=A([r,i.relativePath]),u=n.concat(i);e.children&&e.children.length>0&&(l(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),v(e.children,t,u,s)),(null!=e.path||e.index)&&t.push({path:s,score:E(s,e.index),routesMeta:u})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of y(e.path))a(e,t,r);else a(e,t)})),t}function y(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return a?[o,""]:[o];let i=y(r.join("/")),l=[];return l.push(...i.map((e=>""===e?o:[o,e].join("/")))),a&&l.push(...i),l.map((t=>e.startsWith("/")&&""===t?"/":t))}const b=/^:[\w-]+$/,x=3,w=2,k=1,S=10,j=-2,C=e=>"*"===e;function E(e,t){let n=e.split("/"),r=n.length;return n.some(C)&&(r+=j),t&&(r+=w),n.filter((e=>!C(e))).reduce(((e,t)=>e+(b.test(t)?x:""===t?k:S)),r)}function P(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,a={},o="/",i=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,u="/"===o?t:t.slice(o.length)||"/",c=_({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},u),d=e.route;if(!c&&s&&n&&!r[r.length-1].route.index&&(c=_({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(a,c.params),i.push({params:a,pathname:A([o,c.pathname]),pathnameBase:F(A([o,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(o=A([o,c.pathnameBase]))}return i}function _(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);s("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");let o=new RegExp(a,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=l[n]||"";i=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=a&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:o,pathnameBase:i,pattern:e}}function z(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return s(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function L(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function T(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function N(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function O(e,t){let n=N(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function R(e,t,n,r){let a;void 0===r&&(r=!1),"string"===typeof e?a=f(e):(a=o({},e),l(!a.pathname||!a.pathname.includes("?"),T("?","pathname","search",a)),l(!a.pathname||!a.pathname.includes("#"),T("#","pathname","hash",a)),l(!a.search||!a.search.includes("#"),T("#","search","hash",a)));let i,s=""===e||""===a.pathname,u=s?"/":a.pathname;if(null==u)i=n;else{let e=t.length-1;if(!r&&u.startsWith("..")){let t=u.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}i=e>=0?t[e]:"/"}let c=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"===typeof e?f(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:$(r),hash:D(a)}}(a,i),d=u&&"/"!==u&&u.endsWith("/"),p=(s||"."===u)&&n.endsWith("/");return c.pathname.endsWith("/")||!d&&!p||(c.pathname+="/"),c}const A=e=>e.join("/").replace(/\/\/+/g,"/"),F=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),$=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",D=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function M(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const I=["post","put","patch","delete"],U=(new Set(I),["get",...I]);new Set(U),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}const W=t.createContext(null);const H=t.createContext(null);const V=t.createContext(null);const q=t.createContext(null);const K=t.createContext({outlet:null,matches:[],isDataRoute:!1});const Q=t.createContext(null);function G(){return null!=t.useContext(q)}function Y(){return G()||l(!1),t.useContext(q).location}function X(e){t.useContext(V).static||t.useLayoutEffect(e)}function J(){let{isDataRoute:e}=t.useContext(K);return e?function(){let{router:e}=ue(le.UseNavigateStable),n=de(se.UseNavigateStable),r=t.useRef(!1);return X((()=>{r.current=!0})),t.useCallback((function(t,a){void 0===a&&(a={}),r.current&&("number"===typeof t?e.navigate(t):e.navigate(t,B({fromRouteId:n},a)))}),[e,n])}():function(){G()||l(!1);let e=t.useContext(W),{basename:n,future:r,navigator:a}=t.useContext(V),{matches:o}=t.useContext(K),{pathname:i}=Y(),s=JSON.stringify(O(o,r.v7_relativeSplatPath)),u=t.useRef(!1);return X((()=>{u.current=!0})),t.useCallback((function(t,r){if(void 0===r&&(r={}),!u.current)return;if("number"===typeof t)return void a.go(t);let o=R(t,JSON.parse(s),i,"path"===r.relative);null==e&&"/"!==n&&(o.pathname="/"===o.pathname?n:A([n,o.pathname])),(r.replace?a.replace:a.push)(o,r.state,r)}),[n,a,s,i,e])}()}const Z=t.createContext(null);function ee(e,n){let{relative:r}=void 0===n?{}:n,{future:a}=t.useContext(V),{matches:o}=t.useContext(K),{pathname:i}=Y(),l=JSON.stringify(O(o,a.v7_relativeSplatPath));return t.useMemo((()=>R(e,JSON.parse(l),i,"path"===r)),[e,l,i,r])}function te(n,r,a,o){G()||l(!1);let{navigator:i,static:s}=t.useContext(V),{matches:u}=t.useContext(K),c=u[u.length-1],d=c?c.params:{},p=(c&&c.pathname,c?c.pathnameBase:"/");c&&c.route;let h,g=Y();if(r){var v;let e="string"===typeof r?f(r):r;"/"===p||(null==(v=e.pathname)?void 0:v.startsWith(p))||l(!1),h=e}else h=g;let y=h.pathname||"/",b=y;if("/"!==p){let e=p.replace(/^\//,"").split("/");b="/"+y.replace(/^\//,"").split("/").slice(e.length).join("/")}let x=!s&&a&&a.matches&&a.matches.length>0?a.matches:m(n,{pathname:b});let w=ie(x&&x.map((e=>Object.assign({},e,{params:Object.assign({},d,e.params),pathname:A([p,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?p:A([p,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),u,a,o);return r&&w?t.createElement(q.Provider,{value:{location:B({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:e.Pop}},w):w}function ne(){let e=function(){var e;let n=t.useContext(Q),r=ce(se.UseRouteError),a=de(se.UseRouteError);if(void 0!==n)return n;return null==(e=r.errors)?void 0:e[a]}(),n=M(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:o},r):null,null)}const re=t.createElement(ne,null);class ae extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(K.Provider,{value:this.props.routeContext},t.createElement(Q.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function oe(e){let{routeContext:n,match:r,children:a}=e,o=t.useContext(W);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(K.Provider,{value:n},a)}function ie(e,n,r,a){var o;if(void 0===n&&(n=[]),void 0===r&&(r=null),void 0===a&&(a=null),null==e){var i;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(i=a)&&i.v7_partialHydration&&0===n.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let s=e,u=null==(o=r)?void 0:o.errors;if(null!=u){let e=s.findIndex((e=>e.route.id&&void 0!==(null==u?void 0:u[e.route.id])));e>=0||l(!1),s=s.slice(0,Math.min(s.length,e+1))}let c=!1,d=-1;if(r&&a&&a.v7_partialHydration)for(let t=0;t<s.length;t++){let e=s[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=t),e.route.id){let{loaderData:t,errors:n}=r,a=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||a){c=!0,s=d>=0?s.slice(0,d+1):[s[0]];break}}}return s.reduceRight(((e,a,o)=>{let i,l=!1,f=null,p=null;var h;r&&(i=u&&a.route.id?u[a.route.id]:void 0,f=a.route.errorElement||re,c&&(d<0&&0===o?(h="route-fallback",!1||fe[h]||(fe[h]=!0),l=!0,p=null):d===o&&(l=!0,p=a.route.hydrateFallbackElement||null)));let m=n.concat(s.slice(0,o+1)),g=()=>{let n;return n=i?f:l?p:a.route.Component?t.createElement(a.route.Component,null):a.route.element?a.route.element:e,t.createElement(oe,{match:a,routeContext:{outlet:e,matches:m,isDataRoute:null!=r},children:n})};return r&&(a.route.ErrorBoundary||a.route.errorElement||0===o)?t.createElement(ae,{location:r.location,revalidation:r.revalidation,component:f,error:i,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()}),null)}var le=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(le||{}),se=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(se||{});function ue(e){let n=t.useContext(W);return n||l(!1),n}function ce(e){let n=t.useContext(H);return n||l(!1),n}function de(e){let n=function(){let e=t.useContext(K);return e||l(!1),e}(),r=n.matches[n.matches.length-1];return r.route.id||l(!1),r.route.id}const fe={};function pe(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}r.startTransition;function he(e){let{to:n,replace:r,state:a,relative:o}=e;G()||l(!1);let{future:i,static:s}=t.useContext(V),{matches:u}=t.useContext(K),{pathname:c}=Y(),d=J(),f=R(n,O(u,i.v7_relativeSplatPath),c,"path"===o),p=JSON.stringify(f);return t.useEffect((()=>d(JSON.parse(p),{replace:r,state:a,relative:o})),[d,p,o,r,a]),null}function me(e){return function(e){let n=t.useContext(K).outlet;return n?t.createElement(Z.Provider,{value:e},n):n}(e.context)}function ge(e){l(!1)}function ve(n){let{basename:r="/",children:a=null,location:o,navigationType:i=e.Pop,navigator:s,static:u=!1,future:c}=n;G()&&l(!1);let d=r.replace(/^\/*/,"/"),p=t.useMemo((()=>({basename:d,navigator:s,static:u,future:B({v7_relativeSplatPath:!1},c)})),[d,c,s,u]);"string"===typeof o&&(o=f(o));let{pathname:h="/",search:m="",hash:g="",state:v=null,key:y="default"}=o,b=t.useMemo((()=>{let e=L(h,d);return null==e?null:{location:{pathname:e,search:m,hash:g,state:v,key:y},navigationType:i}}),[d,h,m,g,v,y,i]);return null==b?null:t.createElement(V.Provider,{value:p},t.createElement(q.Provider,{children:a,value:b}))}function ye(e){let{children:t,location:n}=e;return te(be(t),n)}new Promise((()=>{}));t.Component;function be(e,n){void 0===n&&(n=[]);let r=[];return t.Children.forEach(e,((e,a)=>{if(!t.isValidElement(e))return;let o=[...n,a];if(e.type===t.Fragment)return void r.push.apply(r,be(e.props.children,o));e.type!==ge&&l(!1),e.props.index&&e.props.children&&l(!1);let i={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=be(e.props.children,o)),r.push(i)})),r}var xe=n(723);const we=(0,t.createContext)();function ke(){return(0,t.useContext)(we)}function Se(e){let{children:n}=e;const[r,a]=(0,t.useState)(null),[o,i]=(0,t.useState)(!0);(0,t.useEffect)((()=>{const e=localStorage.getItem("user");e&&a(JSON.parse(e)),i(!1)}),[]);const l={currentUser:r,login:async(e,t)=>{if(e&&t){const t={id:"1",name:"Admin",email:e,role:"admin",token:"fake-jwt-token"};return localStorage.setItem("user",JSON.stringify(t)),a(t),t}throw new Error("Email and password are required")},register:async(e,t,n)=>{if(e&&t&&n){const n={id:"1",name:e,email:t,role:"admin",token:"fake-jwt-token"};return localStorage.setItem("user",JSON.stringify(n)),a(n),n}throw new Error("Name, email and password are required")},logout:()=>{localStorage.removeItem("user"),a(null)},loading:o};return(0,xe.jsx)(we.Provider,{value:l,children:!o&&n})}var je=function(){return je=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},je.apply(this,arguments)};Object.create;function Ce(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Ee=n(916),Pe=n.n(Ee),_e="-ms-",ze="-moz-",Le="-webkit-",Te="comm",Ne="rule",Oe="decl",Re="@keyframes",Ae=Math.abs,Fe=String.fromCharCode,$e=Object.assign;function De(e){return e.trim()}function Me(e,t){return(e=t.exec(e))?e[0]:e}function Ie(e,t,n){return e.replace(t,n)}function Ue(e,t,n){return e.indexOf(t,n)}function Be(e,t){return 0|e.charCodeAt(t)}function We(e,t,n){return e.slice(t,n)}function He(e){return e.length}function Ve(e){return e.length}function qe(e,t){return t.push(e),e}function Ke(e,t){return e.filter((function(e){return!Me(e,t)}))}var Qe=1,Ge=1,Ye=0,Xe=0,Je=0,Ze="";function et(e,t,n,r,a,o,i,l){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:Qe,column:Ge,length:i,return:"",siblings:l}}function tt(e,t){return $e(et("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function nt(e){for(;e.root;)e=tt(e.root,{children:[e]});qe(e,e.siblings)}function rt(){return Je=Xe>0?Be(Ze,--Xe):0,Ge--,10===Je&&(Ge=1,Qe--),Je}function at(){return Je=Xe<Ye?Be(Ze,Xe++):0,Ge++,10===Je&&(Ge=1,Qe++),Je}function ot(){return Be(Ze,Xe)}function it(){return Xe}function lt(e,t){return We(Ze,e,t)}function st(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ut(e){return Qe=Ge=1,Ye=He(Ze=e),Xe=0,[]}function ct(e){return Ze="",e}function dt(e){return De(lt(Xe-1,ht(91===e?e+2:40===e?e+1:e)))}function ft(e){for(;(Je=ot())&&Je<33;)at();return st(e)>2||st(Je)>3?"":" "}function pt(e,t){for(;--t&&at()&&!(Je<48||Je>102||Je>57&&Je<65||Je>70&&Je<97););return lt(e,it()+(t<6&&32==ot()&&32==at()))}function ht(e){for(;at();)switch(Je){case e:return Xe;case 34:case 39:34!==e&&39!==e&&ht(Je);break;case 40:41===e&&ht(e);break;case 92:at()}return Xe}function mt(e,t){for(;at()&&e+Je!==57&&(e+Je!==84||47!==ot()););return"/*"+lt(t,Xe-1)+"*"+Fe(47===e?e:at())}function gt(e){for(;!st(ot());)at();return lt(e,Xe)}function vt(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function yt(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case Oe:return e.return=e.return||e.value;case Te:return"";case Re:return e.return=e.value+"{"+vt(e.children,r)+"}";case Ne:if(!He(e.value=e.props.join(",")))return""}return He(n=vt(e.children,r))?e.return=e.value+"{"+n+"}":""}function bt(e,t,n){switch(function(e,t){return 45^Be(e,0)?(((t<<2^Be(e,0))<<2^Be(e,1))<<2^Be(e,2))<<2^Be(e,3):0}(e,t)){case 5103:return Le+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Le+e+e;case 4789:return ze+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Le+e+ze+e+_e+e+e;case 5936:switch(Be(e,t+11)){case 114:return Le+e+_e+Ie(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Le+e+_e+Ie(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Le+e+_e+Ie(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Le+e+_e+e+e;case 6165:return Le+e+_e+"flex-"+e+e;case 5187:return Le+e+Ie(e,/(\w+).+(:[^]+)/,Le+"box-$1$2"+_e+"flex-$1$2")+e;case 5443:return Le+e+_e+"flex-item-"+Ie(e,/flex-|-self/g,"")+(Me(e,/flex-|baseline/)?"":_e+"grid-row-"+Ie(e,/flex-|-self/g,""))+e;case 4675:return Le+e+_e+"flex-line-pack"+Ie(e,/align-content|flex-|-self/g,"")+e;case 5548:return Le+e+_e+Ie(e,"shrink","negative")+e;case 5292:return Le+e+_e+Ie(e,"basis","preferred-size")+e;case 6060:return Le+"box-"+Ie(e,"-grow","")+Le+e+_e+Ie(e,"grow","positive")+e;case 4554:return Le+Ie(e,/([^-])(transform)/g,"$1"+Le+"$2")+e;case 6187:return Ie(Ie(Ie(e,/(zoom-|grab)/,Le+"$1"),/(image-set)/,Le+"$1"),e,"")+e;case 5495:case 3959:return Ie(e,/(image-set\([^]*)/,Le+"$1$`$1");case 4968:return Ie(Ie(e,/(.+:)(flex-)?(.*)/,Le+"box-pack:$3"+_e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Le+e+e;case 4200:if(!Me(e,/flex-|baseline/))return _e+"grid-column-align"+We(e,t)+e;break;case 2592:case 3360:return _e+Ie(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,Me(e.props,/grid-\w+-end/)}))?~Ue(e+(n=n[t].value),"span",0)?e:_e+Ie(e,"-start","")+e+_e+"grid-row-span:"+(~Ue(n,"span",0)?Me(n,/\d+/):+Me(n,/\d+/)-+Me(e,/\d+/))+";":_e+Ie(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return Me(e.props,/grid-\w+-start/)}))?e:_e+Ie(Ie(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Ie(e,/(.+)-inline(.+)/,Le+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(He(e)-1-t>6)switch(Be(e,t+1)){case 109:if(45!==Be(e,t+4))break;case 102:return Ie(e,/(.+:)(.+)-([^]+)/,"$1"+Le+"$2-$3$1"+ze+(108==Be(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Ue(e,"stretch",0)?bt(Ie(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Ie(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,a,o,i,l){return _e+n+":"+r+l+(a?_e+n+"-span:"+(o?i:+i-+r)+l:"")+e}));case 4949:if(121===Be(e,t+6))return Ie(e,":",":"+Le)+e;break;case 6444:switch(Be(e,45===Be(e,14)?18:11)){case 120:return Ie(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Le+(45===Be(e,14)?"inline-":"")+"box$3$1"+Le+"$2$3$1"+_e+"$2box$3")+e;case 100:return Ie(e,":",":"+_e)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ie(e,"scroll-","scroll-snap-")+e}return e}function xt(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Oe:return void(e.return=bt(e.value,e.length,n));case Re:return vt([tt(e,{value:Ie(e.value,"@","@"+Le)})],r);case Ne:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(Me(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":nt(tt(e,{props:[Ie(t,/:(read-\w+)/,":-moz-$1")]})),nt(tt(e,{props:[t]})),$e(e,{props:Ke(n,r)});break;case"::placeholder":nt(tt(e,{props:[Ie(t,/:(plac\w+)/,":"+Le+"input-$1")]})),nt(tt(e,{props:[Ie(t,/:(plac\w+)/,":-moz-$1")]})),nt(tt(e,{props:[Ie(t,/:(plac\w+)/,_e+"input-$1")]})),nt(tt(e,{props:[t]})),$e(e,{props:Ke(n,r)})}return""}))}}function wt(e){return ct(kt("",null,null,null,[""],e=ut(e),0,[0],e))}function kt(e,t,n,r,a,o,i,l,s){for(var u=0,c=0,d=i,f=0,p=0,h=0,m=1,g=1,v=1,y=0,b="",x=a,w=o,k=r,S=b;g;)switch(h=y,y=at()){case 40:if(108!=h&&58==Be(S,d-1)){-1!=Ue(S+=Ie(dt(y),"&","&\f"),"&\f",Ae(u?l[u-1]:0))&&(v=-1);break}case 34:case 39:case 91:S+=dt(y);break;case 9:case 10:case 13:case 32:S+=ft(h);break;case 92:S+=pt(it()-1,7);continue;case 47:switch(ot()){case 42:case 47:qe(jt(mt(at(),it()),t,n,s),s);break;default:S+="/"}break;case 123*m:l[u++]=He(S)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+c:-1==v&&(S=Ie(S,/\f/g,"")),p>0&&He(S)-d&&qe(p>32?Ct(S+";",r,n,d-1,s):Ct(Ie(S," ","")+";",r,n,d-2,s),s);break;case 59:S+=";";default:if(qe(k=St(S,t,n,u,c,a,l,b,x=[],w=[],d,o),o),123===y)if(0===c)kt(S,t,k,k,x,o,d,l,w);else switch(99===f&&110===Be(S,3)?100:f){case 100:case 108:case 109:case 115:kt(e,k,k,r&&qe(St(e,k,k,0,0,a,l,b,a,x=[],d,w),w),a,w,d,l,r?x:w);break;default:kt(S,k,k,k,[""],w,0,l,w)}}u=c=p=0,m=v=1,b=S="",d=i;break;case 58:d=1+He(S),p=h;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==rt())continue;switch(S+=Fe(y),y*m){case 38:v=c>0?1:(S+="\f",-1);break;case 44:l[u++]=(He(S)-1)*v,v=1;break;case 64:45===ot()&&(S+=dt(at())),f=ot(),c=d=He(b=S+=gt(it())),y++;break;case 45:45===h&&2==He(S)&&(m=0)}}return o}function St(e,t,n,r,a,o,i,l,s,u,c,d){for(var f=a-1,p=0===a?o:[""],h=Ve(p),m=0,g=0,v=0;m<r;++m)for(var y=0,b=We(e,f+1,f=Ae(g=i[m])),x=e;y<h;++y)(x=De(g>0?p[y]+" "+b:Ie(b,/&\f/g,p[y])))&&(s[v++]=x);return et(e,t,n,0===a?Ne:l,s,u,c,d)}function jt(e,t,n,r){return et(e,t,n,Te,Fe(Je),We(e,2,-2),0,r)}function Ct(e,t,n,r,a){return et(e,t,n,Oe,We(e,0,r),We(e,r+1,-1),r,a)}var Et={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Pt="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/exemple-internet-provider-build-React",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/exemple-internet-provider-build-React",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/exemple-internet-provider-build-React",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",_t="active",zt="data-styled-version",Lt="6.1.17",Tt="/*!sc*/\n",Nt="undefined"!=typeof window&&"HTMLElement"in window,Ot=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/exemple-internet-provider-build-React",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/exemple-internet-provider-build-React",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/exemple-internet-provider-build-React",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/exemple-internet-provider-build-React",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/exemple-internet-provider-build-React",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/exemple-internet-provider-build-React",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/exemple-internet-provider-build-React",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/exemple-internet-provider-build-React",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/exemple-internet-provider-build-React",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/exemple-internet-provider-build-React",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),Rt={},At=(new Set,Object.freeze([])),Ft=Object.freeze({});function $t(e,t,n){return void 0===n&&(n=Ft),e.theme!==n.theme&&e.theme||t||n.theme}var Dt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Mt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,It=/(^-|-$)/g;function Ut(e){return e.replace(Mt,"-").replace(It,"")}var Bt=/(a)(d)/gi,Wt=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ht(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Wt(t%52)+n;return(Wt(t%52)+n).replace(Bt,"$1-$2")}var Vt,qt=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Kt=function(e){return qt(5381,e)};function Qt(e){return Ht(Kt(e)>>>0)}function Gt(e){return e.displayName||e.name||"Component"}function Yt(e){return"string"==typeof e&&!0}var Xt="function"==typeof Symbol&&Symbol.for,Jt=Xt?Symbol.for("react.memo"):60115,Zt=Xt?Symbol.for("react.forward_ref"):60112,en={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},tn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},nn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},rn=((Vt={})[Zt]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Vt[Jt]=nn,Vt);function an(e){return("type"in(t=e)&&t.type.$$typeof)===Jt?nn:"$$typeof"in e?rn[e.$$typeof]:en;var t}var on=Object.defineProperty,ln=Object.getOwnPropertyNames,sn=Object.getOwnPropertySymbols,un=Object.getOwnPropertyDescriptor,cn=Object.getPrototypeOf,dn=Object.prototype;function fn(e,t,n){if("string"!=typeof t){if(dn){var r=cn(t);r&&r!==dn&&fn(e,r,n)}var a=ln(t);sn&&(a=a.concat(sn(t)));for(var o=an(e),i=an(t),l=0;l<a.length;++l){var s=a[l];if(!(s in tn||n&&n[s]||i&&s in i||o&&s in o)){var u=un(t,s);try{on(e,s,u)}catch(e){}}}}return e}function pn(e){return"function"==typeof e}function hn(e){return"object"==typeof e&&"styledComponentId"in e}function mn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function gn(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function vn(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function yn(e,t,n){if(void 0===n&&(n=!1),!n&&!vn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=yn(e[r],t[r]);else if(vn(t))for(var r in t)e[r]=yn(e[r],t[r]);return e}function bn(e,t){Object.defineProperty(e,"toString",{value:t})}function xn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var wn=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw xn(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var o=r;o<a;o++)this.groupSizes[o]=0}for(var i=this.indexOfGroup(e+1),l=(o=0,t.length);o<l;o++)this.tag.insertRule(i,t[o])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,o=r;o<a;o++)t+="".concat(this.tag.getRule(o)).concat(Tt);return t},e}(),kn=new Map,Sn=new Map,jn=1,Cn=function(e){if(kn.has(e))return kn.get(e);for(;Sn.has(jn);)jn++;var t=jn++;return kn.set(e,t),Sn.set(t,e),t},En=function(e,t){jn=t+1,kn.set(e,t),Sn.set(t,e)},Pn="style[".concat(Pt,"][").concat(zt,'="').concat(Lt,'"]'),_n=new RegExp("^".concat(Pt,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),zn=function(e,t,n){for(var r,a=n.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(t,r)},Ln=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Tt),a=[],o=0,i=r.length;o<i;o++){var l=r[o].trim();if(l){var s=l.match(_n);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(En(c,u),zn(e,c,s[3]),e.getTag().insertRules(u,a)),a.length=0}else a.push(l)}}},Tn=function(e){for(var t=document.querySelectorAll(Pn),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(Pt)!==_t&&(Ln(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function Nn(){return n.nc}var On=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(Pt,"]")));return t[t.length-1]}(n),o=void 0!==a?a.nextSibling:null;r.setAttribute(Pt,_t),r.setAttribute(zt,Lt);var i=Nn();return i&&r.setAttribute("nonce",i),n.insertBefore(r,o),r},Rn=function(){function e(e){this.element=On(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}throw xn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),An=function(){function e(e){this.element=On(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Fn=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),$n=Nt,Dn={isServer:!Nt,useCSSOMInjection:!Ot},Mn=function(){function e(e,t,n){void 0===e&&(e=Ft),void 0===t&&(t={});var r=this;this.options=je(je({},Dn),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Nt&&$n&&($n=!1,Tn(this)),bn(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return Sn.get(e)}(n);if(void 0===a)return"continue";var o=e.names.get(a),i=t.getGroup(n);if(void 0===o||!o.size||0===i.length)return"continue";var l="".concat(Pt,".g").concat(n,'[id="').concat(a,'"]'),s="";void 0!==o&&o.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(i).concat(l,'{content:"').concat(s,'"}').concat(Tt)},o=0;o<n;o++)a(o);return r}(r)}))}return e.registerId=function(e){return Cn(e)},e.prototype.rehydrate=function(){!this.server&&Nt&&Tn(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(je(je({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Fn(n):t?new Rn(n):new An(n)}(this.options),new wn(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Cn(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Cn(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Cn(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),In=/&/g,Un=/^\s*\/\/.*$/gm;function Bn(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Bn(e.children,t)),e}))}function Wn(e){var t,n,r,a=void 0===e?Ft:e,o=a.options,i=void 0===o?Ft:o,l=a.plugins,s=void 0===l?At:l,u=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push((function(e){e.type===Ne&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(In,n).replace(r,u))})),i.prefix&&c.push(xt),c.push(yt);var d=function(e,a,o,l){void 0===a&&(a=""),void 0===o&&(o=""),void 0===l&&(l="&"),t=l,n=a,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(Un,""),u=wt(o||a?"".concat(o," ").concat(a," { ").concat(s," }"):s);i.namespace&&(u=Bn(u,i.namespace));var d,f=[];return vt(u,function(e){var t=Ve(e);return function(n,r,a,o){for(var i="",l=0;l<t;l++)i+=e[l](n,r,a,o)||"";return i}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=s.length?s.reduce((function(e,t){return t.name||xn(15),qt(e,t.name)}),5381).toString():"",d}var Hn=new Mn,Vn=Wn(),qn=t.createContext({shouldForwardProp:void 0,styleSheet:Hn,stylis:Vn}),Kn=(qn.Consumer,t.createContext(void 0));function Qn(){return(0,t.useContext)(qn)}function Gn(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],a=n[1],o=Qn().styleSheet,i=(0,t.useMemo)((function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,o]),l=(0,t.useMemo)((function(){return Wn({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})}),[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)((function(){Pe()(r,e.stylisPlugins)||a(e.stylisPlugins)}),[e.stylisPlugins]);var s=(0,t.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:l}}),[e.shouldForwardProp,i,l]);return t.createElement(qn.Provider,{value:s},t.createElement(Kn.Provider,{value:l},e.children))}var Yn=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Vn);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,bn(this,(function(){throw xn(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Vn),this.name+e.hash},e}(),Xn=function(e){return e>="A"&&e<="Z"};function Jn(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Xn(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Zn=function(e){return null==e||!1===e||""===e},er=function(e){var t,n,r=[];for(var a in e){var o=e[a];e.hasOwnProperty(a)&&!Zn(o)&&(Array.isArray(o)&&o.isCss||pn(o)?r.push("".concat(Jn(a),":"),o,";"):vn(o)?r.push.apply(r,Ce(Ce(["".concat(a," {")],er(o),!1),["}"],!1)):r.push("".concat(Jn(a),": ").concat((t=a,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in Et||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function tr(e,t,n,r){return Zn(e)?[]:hn(e)?[".".concat(e.styledComponentId)]:pn(e)?!pn(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:tr(e(t),t,n,r):e instanceof Yn?n?(e.inject(n,r),[e.getName(r)]):[e]:vn(e)?er(e):Array.isArray(e)?Array.prototype.concat.apply(At,e.map((function(e){return tr(e,t,n,r)}))):[e.toString()];var a}function nr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(pn(n)&&!hn(n))return!1}return!0}var rr=Kt(Lt),ar=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&nr(e),this.componentId=t,this.baseHash=qt(rr,t),this.baseStyle=n,Mn.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=mn(r,this.staticRulesId);else{var a=gn(tr(this.rules,e,t,n)),o=Ht(qt(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,o)){var i=n(a,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,i)}r=mn(r,o),this.staticRulesId=o}else{for(var l=qt(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=gn(tr(c,e,t,n));l=qt(l,d+u),s+=d}}if(s){var f=Ht(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=mn(r,f)}}return r},e}(),or=t.createContext(void 0);or.Consumer;var ir={};new Set;function lr(e,n,r){var a=hn(e),o=e,i=!Yt(e),l=n.attrs,s=void 0===l?At:l,u=n.componentId,c=void 0===u?function(e,t){var n="string"!=typeof e?"sc":Ut(e);ir[n]=(ir[n]||0)+1;var r="".concat(n,"-").concat(Qt(Lt+n+ir[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):u,d=n.displayName,f=void 0===d?function(e){return Yt(e)?"styled.".concat(e):"Styled(".concat(Gt(e),")")}(e):d,p=n.displayName&&n.componentId?"".concat(Ut(n.displayName),"-").concat(n.componentId):n.componentId||c,h=a&&o.attrs?o.attrs.concat(s).filter(Boolean):s,m=n.shouldForwardProp;if(a&&o.shouldForwardProp){var g=o.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;m=function(e,t){return g(e,t)&&v(e,t)}}else m=g}var y=new ar(r,p,a?o.componentStyle:void 0);function b(e,n){return function(e,n,r){var a=e.attrs,o=e.componentStyle,i=e.defaultProps,l=e.foldedComponentIds,s=e.styledComponentId,u=e.target,c=t.useContext(or),d=Qn(),f=e.shouldForwardProp||d.shouldForwardProp,p=$t(n,c,i)||Ft,h=function(e,t,n){for(var r,a=je(je({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var i=pn(r=e[o])?r(a):r;for(var l in i)a[l]="className"===l?mn(a[l],i[l]):"style"===l?je(je({},a[l]),i[l]):i[l]}return t.className&&(a.className=mn(a.className,t.className)),a}(a,n,p),m=h.as||u,g={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v&&h.theme===p||("forwardedAs"===v?g.as=h.forwardedAs:f&&!f(v,m)||(g[v]=h[v]));var y=function(e,t){var n=Qn();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,h),b=mn(l,s);return y&&(b+=" "+y),h.className&&(b+=" "+h.className),g[Yt(m)&&!Dt.has(m)?"class":"className"]=b,r&&(g.ref=r),(0,t.createElement)(m,g)}(x,e,n)}b.displayName=f;var x=t.forwardRef(b);return x.attrs=h,x.componentStyle=y,x.displayName=f,x.shouldForwardProp=m,x.foldedComponentIds=a?mn(o.foldedComponentIds,o.styledComponentId):"",x.styledComponentId=p,x.target=a?o.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)yn(e,a[r],!0);return e}({},o.defaultProps,e):e}}),bn(x,(function(){return".".concat(x.styledComponentId)})),i&&fn(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function sr(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var ur=function(e){return Object.assign(e,{isCss:!0})};function cr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(pn(e)||vn(e))return ur(tr(sr(At,Ce([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?tr(r):ur(tr(sr(r,t)))}function dr(e,t,n){if(void 0===n&&(n=Ft),!t)throw xn(1,t);var r=function(r){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,cr.apply(void 0,Ce([r],a,!1)))};return r.attrs=function(r){return dr(e,t,je(je({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return dr(e,t,je(je({},n),r))},r}var fr=function(e){return dr(lr,e)},pr=fr;Dt.forEach((function(e){pr[e]=fr(e)}));var hr=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=nr(e),Mn.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var a=r(gn(tr(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Mn.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Nn(),r=gn([n&&'nonce="'.concat(n,'"'),"".concat(Pt,'="true"'),"".concat(zt,'="').concat(Lt,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw xn(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw xn(2);var r=e.instance.toString();if(!r)return[];var a=((n={})[Pt]="",n[zt]=Lt,n.dangerouslySetInnerHTML={__html:r},n),o=Nn();return o&&(a.nonce=o),[t.createElement("style",je({},a,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Mn({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw xn(2);return t.createElement(Gn,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw xn(3)}})(),"__sc-".concat(Pt,"__");const mr=(function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var a=cr.apply(void 0,Ce([e],n,!1)),o="sc-global-".concat(Qt(JSON.stringify(a))),i=new hr(a,o),l=function(e){var n=Qn(),r=t.useContext(or),a=t.useRef(n.styleSheet.allocateGSInstance(o)).current;return n.styleSheet.server&&s(a,e,n.styleSheet,r,n.stylis),t.useLayoutEffect((function(){if(!n.styleSheet.server)return s(a,e,n.styleSheet,r,n.stylis),function(){return i.removeStyles(a,n.styleSheet)}}),[a,e,n.styleSheet,r,n.stylis]),null};function s(e,t,n,r,a){if(i.isStatic)i.renderStyles(e,Rt,n,a);else{var o=je(je({},t),{theme:$t(t,r,l.defaultProps)});i.renderStyles(e,o,n,a)}}return t.memo(l)})`
  :root {
    /* Primary Colors */
    --primary: #1E88E5;
    --primary-dark: #1565C0;
    --primary-light: #64B5F6;
    
    /* Neutral Colors */
    --dark: #263238;
    --gray: #607D8B;
    --light: #ECEFF1;
    --white: #FFFFFF;
    
    /* Feedback Colors */
    --success: #4CAF50;
    --warning: #FFC107;
    --danger: #F44336;
    --info: #03A9F4;

    /* Shadows */
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
    
    /* Layout */
    --header-height: 60px;
    --sidebar-width: 250px;
    --footer-height: 50px;
    
    /* Font */
    --font-family: 'Inter', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-md: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.875rem;
    --font-size-4xl: 2.25rem;
    
    /* Spacing */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-2xl: 3rem;
    
    /* Border Radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
    --radius-full: 9999px;
    
    /* Z-Index */
    --z-nav: 100;
    --z-dropdown: 200;
    --z-modal: 300;
    --z-tooltip: 400;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    font-family: var(--font-family);
    font-size: 16px;
    color: var(--dark);
    background-color: #F5F7FA;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  a {
    text-decoration: none;
    color: var(--primary);
    transition: color 0.3s;
    
    &:hover {
      color: var(--primary-dark);
    }
  }
  
  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 0.5em;
  }
  
  h1 {
    font-size: var(--font-size-3xl);
  }
  
  h2 {
    font-size: var(--font-size-2xl);
  }
  
  h3 {
    font-size: var(--font-size-xl);
  }
  
  h4 {
    font-size: var(--font-size-lg);
  }
  
  h5 {
    font-size: var(--font-size-md);
  }
  
  h6 {
    font-size: var(--font-size-sm);
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  ul, ol {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
  }
  
  .page-title {
    margin-bottom: 1.5rem;
    font-weight: 700;
    color: var(--dark);
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;var gr=n(998),vr=n.t(gr,2);function yr(){return yr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yr.apply(this,arguments)}function br(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const xr=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],wr=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"];try{window.__reactRouterVersion="6"}catch(ws){}const kr=t.createContext({isTransitioning:!1});new Map;const Sr=r.startTransition;vr.flushSync,r.useId;function jr(e){let{basename:n,children:r,future:a,window:o}=e,i=t.useRef();var l;null==i.current&&(i.current=(void 0===(l={window:o,v5Compat:!0})&&(l={}),p((function(e,t){let{pathname:n,search:r,hash:a}=e.location;return c("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:d(t)}),null,l)));let s=i.current,[u,f]=t.useState({action:s.action,location:s.location}),{v7_startTransition:h}=a||{},m=t.useCallback((e=>{h&&Sr?Sr((()=>f(e))):f(e)}),[f,h]);return t.useLayoutEffect((()=>s.listen(m)),[s,m]),t.useEffect((()=>pe(a)),[a]),t.createElement(ve,{basename:n,children:r,location:u.location,navigationType:u.action,navigator:s,future:a})}const Cr="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,Er=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pr=t.forwardRef((function(e,n){let r,{onClick:a,relative:o,reloadDocument:i,replace:s,state:u,target:c,to:f,preventScrollReset:p,viewTransition:h}=e,m=br(e,xr),{basename:g}=t.useContext(V),v=!1;if("string"===typeof f&&Er.test(f)&&(r=f,Cr))try{let e=new URL(window.location.href),t=f.startsWith("//")?new URL(e.protocol+f):new URL(f),n=L(t.pathname,g);t.origin===e.origin&&null!=n?f=n+t.search+t.hash:v=!0}catch(ws){}let y=function(e,n){let{relative:r}=void 0===n?{}:n;G()||l(!1);let{basename:a,navigator:o}=t.useContext(V),{hash:i,pathname:s,search:u}=ee(e,{relative:r}),c=s;return"/"!==a&&(c="/"===s?a:A([a,s])),o.createHref({pathname:c,search:u,hash:i})}(f,{relative:o}),b=function(e,n){let{target:r,replace:a,state:o,preventScrollReset:i,relative:l,viewTransition:s}=void 0===n?{}:n,u=J(),c=Y(),f=ee(e,{relative:l});return t.useCallback((t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,r)){t.preventDefault();let n=void 0!==a?a:d(c)===d(f);u(e,{replace:n,state:o,preventScrollReset:i,relative:l,viewTransition:s})}}),[c,u,f,a,o,r,e,i,l,s])}(f,{replace:s,state:u,target:c,preventScrollReset:p,relative:o,viewTransition:h});return t.createElement("a",yr({},m,{href:r||y,onClick:v||i?a:function(e){a&&a(e),e.defaultPrevented||b(e)},ref:n,target:c}))}));const _r=t.forwardRef((function(e,n){let{"aria-current":r="page",caseSensitive:a=!1,className:o="",end:i=!1,style:s,to:u,viewTransition:c,children:d}=e,f=br(e,wr),p=ee(u,{relative:f.relative}),h=Y(),m=t.useContext(H),{navigator:g,basename:v}=t.useContext(V),y=null!=m&&function(e,n){void 0===n&&(n={});let r=t.useContext(kr);null==r&&l(!1);let{basename:a}=Tr(zr.useViewTransitionState),o=ee(e,{relative:n.relative});if(!r.isTransitioning)return!1;let i=L(r.currentLocation.pathname,a)||r.currentLocation.pathname,s=L(r.nextLocation.pathname,a)||r.nextLocation.pathname;return null!=_(o.pathname,s)||null!=_(o.pathname,i)}(p)&&!0===c,b=g.encodeLocation?g.encodeLocation(p).pathname:p.pathname,x=h.pathname,w=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;a||(x=x.toLowerCase(),w=w?w.toLowerCase():null,b=b.toLowerCase()),w&&v&&(w=L(w,v)||w);const k="/"!==b&&b.endsWith("/")?b.length-1:b.length;let S,j=x===b||!i&&x.startsWith(b)&&"/"===x.charAt(k),C=null!=w&&(w===b||!i&&w.startsWith(b)&&"/"===w.charAt(b.length)),E={isActive:j,isPending:C,isTransitioning:y},P=j?r:void 0;S="function"===typeof o?o(E):[o,j?"active":null,C?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let z="function"===typeof s?s(E):s;return t.createElement(Pr,yr({},f,{"aria-current":P,className:S,ref:n,style:z,to:u,viewTransition:c}),"function"===typeof d?d(E):d)}));var zr,Lr;function Tr(e){let n=t.useContext(W);return n||l(!1),n}(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(zr||(zr={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Lr||(Lr={}));var Nr={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Or=t.createContext&&t.createContext(Nr),Rr=function(){return Rr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},Rr.apply(this,arguments)},Ar=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function Fr(e){return e&&e.map((function(e,n){return t.createElement(e.tag,Rr({key:n},e.attr),Fr(e.child))}))}function $r(e){return function(n){return t.createElement(Dr,Rr({attr:Rr({},e.attr)},n),Fr(e.child))}}function Dr(e){var n=function(n){var r,a=e.attr,o=e.size,i=e.title,l=Ar(e,["attr","size","title"]),s=o||n.size||"1em";return n.className&&(r=n.className),e.className&&(r=(r?r+" ":"")+e.className),t.createElement("svg",Rr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,l,{className:r,style:Rr(Rr({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&t.createElement("title",null,i),e.children)};return void 0!==Or?t.createElement(Or.Consumer,null,(function(e){return n(e)})):n(Nr)}function Mr(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"}},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"}}]})(e)}function Ir(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"7",y1:"7",x2:"17",y2:"17"}},{tag:"polyline",attr:{points:"17 7 17 17 7 17"}}]})(e)}function Ur(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"}},{tag:"polyline",attr:{points:"12 19 5 12 12 5"}}]})(e)}function Br(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"}},{tag:"polyline",attr:{points:"12 5 19 12 12 19"}}]})(e)}function Wr(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"7",y1:"17",x2:"17",y2:"7"}},{tag:"polyline",attr:{points:"7 7 17 7 17 17"}}]})(e)}function Hr(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"20",x2:"18",y2:"10"}},{tag:"line",attr:{x1:"12",y1:"20",x2:"12",y2:"4"}},{tag:"line",attr:{x1:"6",y1:"20",x2:"6",y2:"14"}}]})(e)}function Vr(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}},{tag:"path",attr:{d:"M13.73 21a2 2 0 0 1-3.46 0"}}]})(e)}function qr(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"}},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"}}]})(e)}function Kr(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"}}]})(e)}function Qr(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"}}]})(e)}function Gr(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"polyline",attr:{points:"12 6 12 12 16 14"}}]})(e)}function Yr(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"1",y1:"10",x2:"23",y2:"10"}}]})(e)}function Xr(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"23"}},{tag:"path",attr:{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}}]})(e)}function Jr(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"}}]})(e)}function Zr(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}},{tag:"polyline",attr:{points:"13 2 13 9 20 9"}}]})(e)}function ea(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}}]})(e)}function ta(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 18v-6a9 9 0 0 1 18 0v6"}},{tag:"path",attr:{d:"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"}}]})(e)}function na(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"}}]})(e)}function ra(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"}}]})(e)}function aa(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}},{tag:"polyline",attr:{points:"16 17 21 12 16 7"}},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"}}]})(e)}function oa(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}},{tag:"polyline",attr:{points:"22,6 12,13 2,6"}}]})(e)}function ia(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"}}]})(e)}function la(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}}]})(e)}function sa(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"}},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"}},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"}}]})(e)}function ua(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(e)}function ca(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"}},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"}}]})(e)}function da(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}},{tag:"polyline",attr:{points:"17 21 17 13 7 13 7 21"}},{tag:"polyline",attr:{points:"7 3 7 8 15 8"}}]})(e)}function fa(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}}]})(e)}function pa(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"}},{tag:"rect",attr:{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"6.01",y2:"6"}},{tag:"line",attr:{x1:"6",y1:"18",x2:"6.01",y2:"18"}}]})(e)}function ha(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"}},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}}]})(e)}function ma(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}}]})(e)}function ga(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"1",y:"5",width:"22",height:"14",rx:"7",ry:"7"}},{tag:"circle",attr:{cx:"8",cy:"12",r:"3"}}]})(e)}function va(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"1",y:"5",width:"22",height:"14",rx:"7",ry:"7"}},{tag:"circle",attr:{cx:"16",cy:"12",r:"3"}}]})(e)}function ya(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"}},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"}},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"}}]})(e)}function ba(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"}}]})(e)}function xa(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"}},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"}},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"}}]})(e)}function wa(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12.55a11 11 0 0 1 14.08 0"}},{tag:"path",attr:{d:"M1.42 9a16 16 0 0 1 21.16 0"}},{tag:"path",attr:{d:"M8.53 16.11a6 6 0 0 1 6.95 0"}},{tag:"line",attr:{x1:"12",y1:"20",x2:"12.01",y2:"20"}}]})(e)}function ka(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"15",y1:"9",x2:"9",y2:"15"}},{tag:"line",attr:{x1:"9",y1:"9",x2:"15",y2:"15"}}]})(e)}function Sa(e){return $r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}}]})(e)}const ja=pr.div`
  display: flex;
  min-height: 100vh;
`,Ca=pr.div`
  width: 250px;
  background-color: var(--white);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  z-index: 100;

  @media (max-width: 768px) {
    position: fixed;
    left: ${e=>e.$isOpen?"0":"-250px"};
    height: 100vh;
  }
`,Ea=pr.div`
  padding: 1.5rem;
  border-bottom: 1px solid var(--light);
`,Pa=pr.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary);
`,_a=pr.ul`
  list-style: none;
  padding: 1rem 0;
`,za=pr.li`
  margin-bottom: 0.5rem;
`,La=pr(_r)`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  color: var(--gray);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(30, 136, 229, 0.1);
    color: var(--primary);
  }
  
  &.active {
    background-color: rgba(30, 136, 229, 0.1);
    color: var(--primary);
    border-left: 3px solid var(--primary);
  }
`,Ta=pr.span`
  font-size: 1.2rem;
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
`,Na=pr.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,Oa=pr.header`
  background-color: var(--white);
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`,Ra=pr.button`
  background: none;
  border: none;
  color: var(--gray);
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
  }
`,Aa=pr.div`
  display: flex;
  align-items: center;
`,Fa=pr.button`
  background: none;
  border: none;
  color: var(--gray);
  font-size: 1.2rem;
  margin-right: 1rem;
  cursor: pointer;
  position: relative;
`,$a=pr.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: var(--danger);
  color: white;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
`,Da=pr.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  
  &:hover {
    background-color: var(--light);
  }
`,Ma=pr.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
`,Ia=pr.span`
  font-weight: 500;
`,Ua=pr.main`
  flex: 1;
  padding: 2rem;
  background-color: #F5F7FA;
`;const Ba=function(){const[e,n]=(0,t.useState)(!1),{currentUser:r,logout:a}=ke(),o=J();return(0,xe.jsxs)(ja,{children:[(0,xe.jsxs)(Ca,{$isOpen:e,children:[(0,xe.jsx)(Ea,{children:(0,xe.jsx)(Pa,{children:"Gestor Provedor"})}),(0,xe.jsxs)(_a,{children:[(0,xe.jsx)(za,{children:(0,xe.jsxs)(La,{to:"/dashboard",onClick:()=>n(!1),children:[(0,xe.jsx)(Ta,{children:(0,xe.jsx)(na,{})}),"Dashboard"]})}),(0,xe.jsx)(za,{children:(0,xe.jsxs)(La,{to:"/clientes",onClick:()=>n(!1),children:[(0,xe.jsx)(Ta,{children:(0,xe.jsx)(xa,{})}),"Clientes"]})}),(0,xe.jsx)(za,{children:(0,xe.jsxs)(La,{to:"/planos",onClick:()=>n(!1),children:[(0,xe.jsx)(Ta,{children:(0,xe.jsx)(sa,{})}),"Planos"]})}),(0,xe.jsx)(za,{children:(0,xe.jsxs)(La,{to:"/financeiro",onClick:()=>n(!1),children:[(0,xe.jsx)(Ta,{children:(0,xe.jsx)(Xr,{})}),"Financeiro"]})}),(0,xe.jsx)(za,{children:(0,xe.jsxs)(La,{to:"/suporte",onClick:()=>n(!1),children:[(0,xe.jsx)(Ta,{children:(0,xe.jsx)(ta,{})}),"Suporte"]})}),(0,xe.jsx)(za,{children:(0,xe.jsxs)(La,{to:"/configuracoes",onClick:()=>n(!1),children:[(0,xe.jsx)(Ta,{children:(0,xe.jsx)(ha,{})}),"Configura\xe7\xf5es"]})}),(0,xe.jsx)(za,{children:(0,xe.jsxs)(La,{as:"button",onClick:()=>{a(),o("/login")},style:{width:"100%",textAlign:"left",border:"none",background:"none",cursor:"pointer"},children:[(0,xe.jsx)(Ta,{children:(0,xe.jsx)(aa,{})}),"Sair"]})})]})]}),(0,xe.jsxs)(Na,{children:[(0,xe.jsxs)(Oa,{children:[(0,xe.jsx)(Ra,{onClick:()=>{n(!e)},children:(0,xe.jsx)(ia,{})}),(0,xe.jsxs)(Aa,{children:[(0,xe.jsxs)(Fa,{children:[(0,xe.jsx)(Vr,{}),(0,xe.jsx)($a,{children:"3"})]}),(0,xe.jsxs)(Da,{children:[(0,xe.jsx)(Ma,{children:(0,xe.jsx)(ba,{})}),(0,xe.jsx)(Ia,{children:(null===r||void 0===r?void 0:r.name)||"Usu\xe1rio"})]})]})]}),(0,xe.jsx)(Ua,{children:(0,xe.jsx)(me,{})})]})]})},Wa=pr.div`
  display: flex;
  min-height: 100vh;
`,Ha=pr.div`
  background-color: var(--primary);
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: white;
  
  @media (max-width: 768px) {
    display: none;
  }
`,Va=pr.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: var(--white);
`,qa=pr.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`,Ka=pr.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
`,Qa=pr.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  text-align: center;
  line-height: 1.6;
`;const Ga=function(){const{currentUser:e}=ke();return e?(0,xe.jsx)(he,{to:"/",replace:!0}):(0,xe.jsxs)(Wa,{children:[(0,xe.jsxs)(Ha,{children:[(0,xe.jsx)(qa,{children:"Gestor Provedor"}),(0,xe.jsx)(Ka,{children:"Automatize os processos do seu provedor de internet"}),(0,xe.jsx)(Qa,{children:"Tenha sua empresa na palma da m\xe3o com nosso sistema completo para gest\xe3o de provedores de internet. F\xe1cil, intuitivo e poderoso."})]}),(0,xe.jsx)(Va,{children:(0,xe.jsx)(me,{})})]})},Ya=pr.div`
  width: 100%;
  max-width: 400px;
`,Xa=pr.h2`
  font-size: 2rem;
  font-weight: 600;
  color: var(--dark);
  margin-bottom: 0.5rem;
  text-align: center;
`,Ja=pr.p`
  font-size: 1rem;
  color: var(--gray);
  margin-bottom: 2rem;
  text-align: center;
`,Za=pr.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,eo=pr.div`
  display: flex;
  flex-direction: column;
`,to=pr.div`
  position: relative;
`,no=pr.span`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--gray);
`,ro=pr.input`
  width: 100%;
  padding: 12px 12px 12px 40px;
  border: 1px solid ${e=>e.$error?"var(--danger)":"var(--light)"};
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    border-color: ${e=>e.$error?"var(--danger)":"var(--primary)"};
    outline: none;
  }
`,ao=pr.label`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: var(--dark);
  font-weight: 500;
`,oo=pr.div`
  color: var(--danger);
  font-size: 0.8rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,io=pr.button`
  background-color: var(--primary);
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: var(--primary-dark);
  }
  
  &:disabled {
    background-color: var(--gray);
    cursor: not-allowed;
  }
`,lo=pr(Pr)`
  text-align: right;
  font-size: 0.9rem;
  margin-top: -0.5rem;
  color: var(--primary);
  
  &:hover {
    text-decoration: underline;
  }
`,so=pr.div`
  margin-top: 2rem;
  text-align: center;
  font-size: 0.9rem;
  color: var(--gray);
  
  a {
    color: var(--primary);
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;const uo=function(){const[e,n]=(0,t.useState)(""),[r,a]=(0,t.useState)(""),[o,i]=(0,t.useState)(""),[l,s]=(0,t.useState)(!1),{login:u}=ke(),c=J();return(0,xe.jsxs)(Ya,{children:[(0,xe.jsx)(Xa,{children:"Bem-vindo de volta"}),(0,xe.jsx)(Ja,{children:"Fa\xe7a login para acessar sua conta"}),(0,xe.jsxs)(Za,{onSubmit:async t=>{if(t.preventDefault(),!e||!r)return i("Preencha todos os campos");try{i(""),s(!0),await u(e,r),c("/")}catch(n){i("Falha no login. Verifique suas credenciais.")}finally{s(!1)}},children:[o&&(0,xe.jsxs)(oo,{children:[(0,xe.jsx)(Mr,{}),o]}),(0,xe.jsxs)(eo,{children:[(0,xe.jsx)(ao,{htmlFor:"email",children:"Email"}),(0,xe.jsxs)(to,{children:[(0,xe.jsx)(no,{children:(0,xe.jsx)(oa,{})}),(0,xe.jsx)(ro,{id:"email",type:"email",placeholder:"seu@email.com",value:e,onChange:e=>n(e.target.value),$error:o&&!e})]})]}),(0,xe.jsxs)(eo,{children:[(0,xe.jsx)(ao,{htmlFor:"password",children:"Senha"}),(0,xe.jsxs)(to,{children:[(0,xe.jsx)(no,{children:(0,xe.jsx)(ra,{})}),(0,xe.jsx)(ro,{id:"password",type:"password",placeholder:"Sua senha",value:r,onChange:e=>a(e.target.value),$error:o&&!r})]})]}),(0,xe.jsx)(lo,{to:"/forgot-password",children:"Esqueceu sua senha?"}),(0,xe.jsx)(io,{type:"submit",disabled:l,children:l?"Entrando...":"Entrar"})]}),(0,xe.jsxs)(so,{children:["N\xe3o tem uma conta? ",(0,xe.jsx)(Pr,{to:"/register",children:"Cadastre-se"})]})]})},co=pr.div`
  width: 100%;
  max-width: ${e=>2===e.$step?"800px":"400px"};
  transition: max-width 0.3s ease;
`,fo=pr.h2`
  font-size: 2rem;
  font-weight: 600;
  color: var(--dark);
  margin-bottom: 0.5rem;
  text-align: center;
`,po=pr.p`
  font-size: 1rem;
  color: var(--gray);
  margin-bottom: 2rem;
  text-align: center;
`,ho=pr.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,mo=pr.div`
  display: flex;
  flex-direction: column;
`,go=pr.div`
  position: relative;
`,vo=pr.span`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--gray);
`,yo=pr.input`
  width: 100%;
  padding: 12px 12px 12px 40px;
  border: 1px solid ${e=>e.$error?"var(--danger)":"var(--light)"};
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    border-color: ${e=>e.$error?"var(--danger)":"var(--primary)"};
    outline: none;
  }
`,bo=pr.label`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: var(--dark);
  font-weight: 500;
`,xo=pr.div`
  color: var(--danger);
  font-size: 0.8rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,wo=pr.button`
  background-color: var(--primary);
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    background-color: var(--primary-dark);
  }
  
  &:disabled {
    background-color: var(--gray);
    cursor: not-allowed;
  }
`,ko=pr(wo)`
  background-color: white;
  color: var(--primary);
  border: 1px solid var(--primary);
  
  &:hover {
    background-color: rgba(30, 136, 229, 0.1);
  }
`,So=pr.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  button {
    flex: 1;
  }
`,jo=pr.div`
  margin-top: 2rem;
  text-align: center;
  font-size: 0.9rem;
  color: var(--gray);
  
  a {
    color: var(--primary);
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`,Co=pr.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`,Eo=pr.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${e=>e.$active?"var(--primary)":"var(--light)"};
  color: ${e=>e.$active?"white":"var(--gray)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  position: relative;
  
  &:not(:last-child) {
    margin-right: 40px;
    
    &::after {
      content: '';
      position: absolute;
      height: 2px;
      width: 40px;
      background-color: ${e=>e.$completed?"var(--primary)":"var(--light)"};
      right: -40px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`,Po=pr.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,_o=pr.div`
  border: 2px solid ${e=>e.$selected?"var(--primary)":"var(--light)"};
  border-radius: 8px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  background-color: ${e=>e.$selected?"rgba(30, 136, 229, 0.05)":"white"};
  
  &:hover {
    border-color: ${e=>e.$selected?"var(--primary)":"var(--primary-light)"};
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`,zo=pr.div`
  text-align: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--light);
`,Lo=pr.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`,To=pr.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.25rem;
  
  span {
    font-size: 1rem;
    font-weight: 400;
    color: var(--gray);
  }
`,No=pr.div`
  font-size: 0.8rem;
  color: var(--success);
  font-weight: 500;
  margin-top: 0.5rem;
`,Oo=pr.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Ro=pr.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
  
  svg {
    color: var(--success);
    margin-right: 0.5rem;
    flex-shrink: 0;
  }
`,Ao=pr.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`,Fo=pr.div`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--primary);
  color: white;
  padding: 0.25rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;const $o=function(){const[e,n]=(0,t.useState)(1),[r,a]=(0,t.useState)(""),[o,i]=(0,t.useState)(""),[l,s]=(0,t.useState)(""),[u,c]=(0,t.useState)(""),[d,f]=(0,t.useState)(null),[p,h]=(0,t.useState)(""),[m,g]=(0,t.useState)(!1),{register:v}=ke(),y=J(),b=[{id:1,name:"B\xe1sico",price:99.9,features:["At\xe9 500 clientes cadastrados","Gest\xe3o financeira b\xe1sica","Suporte por e-mail","Painel administrativo"],popular:!1},{id:2,name:"Profissional",price:199.9,features:["At\xe9 2000 clientes cadastrados","Gest\xe3o financeira completa","Emiss\xe3o de boletos","Suporte por e-mail e chat","Dashboard avan\xe7ado","Relat\xf3rios personalizados"],popular:!0},{id:3,name:"Enterprise",price:299.9,features:["Clientes ilimitados","Gest\xe3o financeira completa","Emiss\xe3o de boletos e NF-e","Suporte personalizado","Dashboard avan\xe7ado","Relat\xf3rios personalizados","API para integra\xe7\xf5es"],popular:!1}],x=()=>{if(1===e){if(!r||!o||!l||!u)return h("Preencha todos os campos");if(l!==u)return h("As senhas n\xe3o correspondem");if(l.length<6)return h("A senha deve ter pelo menos 6 caracteres");h(""),n(2)}},w=()=>{n(1)};return(0,xe.jsxs)(co,{$step:e,children:[(0,xe.jsx)(fo,{children:"Crie sua conta"}),(0,xe.jsx)(po,{children:1===e?"Comece a gerenciar seu provedor agora mesmo":"Escolha o plano ideal para o seu provedor"}),(0,xe.jsxs)(Co,{children:[(0,xe.jsx)(Eo,{$active:1===e,$completed:e>1,children:"1"}),(0,xe.jsx)(Eo,{$active:2===e,$completed:e>2,children:"2"})]}),(0,xe.jsxs)(ho,{onSubmit:async t=>{if(t.preventDefault(),1!==e){if(!d)return h("Selecione um plano para continuar");try{h(""),g(!0),await v(r,o,l),y("/")}catch(n){h("Falha no cadastro. Tente novamente.")}finally{g(!1)}}else x()},children:[p&&(0,xe.jsxs)(xo,{children:[(0,xe.jsx)(Mr,{}),p]}),1===e?(0,xe.jsxs)(xe.Fragment,{children:[(0,xe.jsxs)(mo,{children:[(0,xe.jsx)(bo,{htmlFor:"name",children:"Nome"}),(0,xe.jsxs)(go,{children:[(0,xe.jsx)(vo,{children:(0,xe.jsx)(ba,{})}),(0,xe.jsx)(yo,{id:"name",type:"text",placeholder:"Seu nome completo",value:r,onChange:e=>a(e.target.value),$error:p&&!r})]})]}),(0,xe.jsxs)(mo,{children:[(0,xe.jsx)(bo,{htmlFor:"email",children:"Email"}),(0,xe.jsxs)(go,{children:[(0,xe.jsx)(vo,{children:(0,xe.jsx)(oa,{})}),(0,xe.jsx)(yo,{id:"email",type:"email",placeholder:"seu@email.com",value:o,onChange:e=>i(e.target.value),$error:p&&!o})]})]}),(0,xe.jsxs)(mo,{children:[(0,xe.jsx)(bo,{htmlFor:"password",children:"Senha"}),(0,xe.jsxs)(go,{children:[(0,xe.jsx)(vo,{children:(0,xe.jsx)(ra,{})}),(0,xe.jsx)(yo,{id:"password",type:"password",placeholder:"Crie uma senha forte",value:l,onChange:e=>s(e.target.value),$error:p&&(!l||l.length<6||l!==u)})]})]}),(0,xe.jsxs)(mo,{children:[(0,xe.jsx)(bo,{htmlFor:"confirmPassword",children:"Confirme sua senha"}),(0,xe.jsxs)(go,{children:[(0,xe.jsx)(vo,{children:(0,xe.jsx)(ra,{})}),(0,xe.jsx)(yo,{id:"confirmPassword",type:"password",placeholder:"Confirme sua senha",value:u,onChange:e=>c(e.target.value),$error:p&&(!u||l!==u)})]})]}),(0,xe.jsxs)(wo,{type:"button",onClick:x,children:["Continuar ",(0,xe.jsx)(Br,{})]})]}):(0,xe.jsxs)(xe.Fragment,{children:[(0,xe.jsx)(Po,{children:b.map((e=>(0,xe.jsxs)(_o,{$selected:d===e.id,onClick:()=>f(e.id),children:[e.popular&&(0,xe.jsxs)(Fo,{children:[(0,xe.jsx)(ma,{})," Mais popular"]}),d===e.id&&(0,xe.jsx)(Ao,{children:(0,xe.jsx)(Qr,{size:12})}),(0,xe.jsxs)(zo,{children:[(0,xe.jsx)(Lo,{children:e.name}),(0,xe.jsxs)(To,{children:["R$ ",e.price.toFixed(2).replace(".",","),(0,xe.jsx)("span",{children:"/m\xeas"})]}),(0,xe.jsx)(No,{children:"7 dias gr\xe1tis"})]}),(0,xe.jsx)(Oo,{children:e.features.map(((e,t)=>(0,xe.jsxs)(Ro,{children:[(0,xe.jsx)(Qr,{})," ",e]},t)))})]},e.id)))}),(0,xe.jsxs)(So,{children:[(0,xe.jsxs)(ko,{type:"button",onClick:w,children:[(0,xe.jsx)(Ur,{})," Voltar"]}),(0,xe.jsx)(wo,{type:"submit",disabled:m,children:m?"Criando conta...":"Finalizar cadastro"})]})]})]}),(0,xe.jsxs)(jo,{children:["J\xe1 tem uma conta? ",(0,xe.jsx)(Pr,{to:"/login",children:"Fa\xe7a login"})]})]})},Do=pr.div`
  width: 100%;
  max-width: 400px;
`,Mo=pr.h2`
  font-size: 2rem;
  font-weight: 600;
  color: var(--dark);
  margin-bottom: 0.5rem;
  text-align: center;
`,Io=pr.p`
  font-size: 1rem;
  color: var(--gray);
  margin-bottom: 2rem;
  text-align: center;
`,Uo=pr.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,Bo=pr.div`
  display: flex;
  flex-direction: column;
`,Wo=pr.div`
  position: relative;
`,Ho=pr.span`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--gray);
`,Vo=pr.input`
  width: 100%;
  padding: 12px 12px 12px 40px;
  border: 1px solid ${e=>e.$error?"var(--danger)":"var(--light)"};
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    border-color: ${e=>e.$error?"var(--danger)":"var(--primary)"};
    outline: none;
  }
`,qo=pr.label`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: var(--dark);
  font-weight: 500;
`,Ko=pr.div`
  color: var(--danger);
  font-size: 0.8rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,Qo=pr.div`
  color: var(--success);
  font-size: 0.9rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(76, 175, 80, 0.1);
  padding: 1rem;
  border-radius: 4px;
  border-left: 3px solid var(--success);
`,Go=pr.button`
  background-color: var(--primary);
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: var(--primary-dark);
  }
  
  &:disabled {
    background-color: var(--gray);
    cursor: not-allowed;
  }
`,Yo=pr.div`
  margin-top: 2rem;
  text-align: center;
  font-size: 0.9rem;
  color: var(--gray);
  
  a {
    color: var(--primary);
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;const Xo=function(){const[e,n]=(0,t.useState)(""),[r,a]=(0,t.useState)(""),[o,i]=(0,t.useState)(""),[l,s]=(0,t.useState)(!1);return(0,xe.jsxs)(Do,{children:[(0,xe.jsx)(Mo,{children:"Esqueceu sua senha?"}),(0,xe.jsx)(Io,{children:"Enviaremos um link para redefinir sua senha"}),(0,xe.jsxs)(Uo,{onSubmit:async t=>{if(t.preventDefault(),!e)return a("Por favor, digite seu email");try{a(""),s(!0),setTimeout((()=>{i("Email de redefini\xe7\xe3o de senha enviado. Verifique sua caixa de entrada."),s(!1)}),1500)}catch(n){a("Falha ao enviar o email de redefini\xe7\xe3o. Tente novamente."),s(!1)}},children:[r&&(0,xe.jsxs)(Ko,{children:[(0,xe.jsx)(Mr,{}),r]}),o&&(0,xe.jsxs)(Qo,{children:[(0,xe.jsx)(Kr,{}),o]}),(0,xe.jsxs)(Bo,{children:[(0,xe.jsx)(qo,{htmlFor:"email",children:"Email"}),(0,xe.jsxs)(Wo,{children:[(0,xe.jsx)(Ho,{children:(0,xe.jsx)(oa,{})}),(0,xe.jsx)(Vo,{id:"email",type:"email",placeholder:"seu@email.com",value:e,onChange:e=>n(e.target.value),$error:r&&!e,disabled:!!o})]})]}),!o&&(0,xe.jsx)(Go,{type:"submit",disabled:l,children:l?"Enviando...":"Enviar link de redefini\xe7\xe3o"})]}),(0,xe.jsx)(Yo,{children:(0,xe.jsx)(Pr,{to:"/login",children:"Voltar para o login"})})]})},Jo=pr.div``,Zo=pr.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,ei=pr.div`
  background-color: var(--white);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`,ti=pr.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`,ni=pr.div`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>`rgba(${e.$bgColor}, 0.1)`};
  color: ${e=>e.$color};
  font-size: 1.5rem;
`,ri=pr.h3`
  font-size: 0.9rem;
  color: var(--gray);
  font-weight: 500;
`,ai=pr.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--dark);
  margin-bottom: 0.5rem;
`,oi=pr.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: ${e=>e.$isPositive?"var(--success)":"var(--danger)"};
  
  svg {
    margin-right: 4px;
  }
`,ii=pr.p`
  font-size: 0.85rem;
  color: var(--gray);
  margin-top: 0.5rem;
`,li=pr.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,si=pr.div`
  background-color: var(--white);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`,ui=pr.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`,ci=pr.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--dark);
`,di=pr.div`
  width: 100%;
  height: 300px;
  background-color: #f5f5f5;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray);
  border: 1px dashed #ddd;
`,fi=pr.div`
  background-color: var(--white);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`,pi=pr.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`,hi=pr.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--dark);
`,mi=pr.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,gi=pr.div`
  display: flex;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--light);
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`,vi=pr.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.$color?`rgba(${e.$bgColor}, 0.1)`:"rgba(96, 125, 139, 0.1)"};
  color: ${e=>e.$color||"var(--gray)"};
`,yi=pr.div`
  flex: 1;
`,bi=pr.h4`
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--dark);
  margin-bottom: 0.25rem;
`,xi=pr.p`
  font-size: 0.8rem;
  color: var(--gray);
`;const wi=function(){return(0,xe.jsxs)(Jo,{children:[(0,xe.jsx)("h1",{className:"page-title",children:"Dashboard"}),(0,xe.jsxs)(Zo,{children:[(0,xe.jsxs)(ei,{children:[(0,xe.jsxs)(ti,{children:[(0,xe.jsx)(ni,{$color:"var(--primary)",$bgColor:"30, 136, 229",children:(0,xe.jsx)(xa,{})}),(0,xe.jsx)(ri,{children:"CLIENTES ATIVOS"})]}),(0,xe.jsx)(ai,{children:"487"}),(0,xe.jsxs)(oi,{$isPositive:!0,children:[(0,xe.jsx)(Wr,{})," +5.3% este m\xeas"]}),(0,xe.jsx)(ii,{children:"17 novos clientes na \xfaltima semana"})]}),(0,xe.jsxs)(ei,{children:[(0,xe.jsxs)(ti,{children:[(0,xe.jsx)(ni,{$color:"var(--secondary)",$bgColor:"255, 87, 34",children:(0,xe.jsx)(sa,{})}),(0,xe.jsx)(ri,{children:"PLANOS VENDIDOS"})]}),(0,xe.jsx)(ai,{children:"512"}),(0,xe.jsxs)(oi,{$isPositive:!0,children:[(0,xe.jsx)(Wr,{})," +2.7% este m\xeas"]}),(0,xe.jsx)(ii,{children:"35 novos planos vendidos este m\xeas"})]}),(0,xe.jsxs)(ei,{children:[(0,xe.jsxs)(ti,{children:[(0,xe.jsx)(ni,{$color:"var(--success)",$bgColor:"76, 175, 80",children:(0,xe.jsx)(Xr,{})}),(0,xe.jsx)(ri,{children:"RECEITA MENSAL"})]}),(0,xe.jsx)(ai,{children:"R$ 42.650"}),(0,xe.jsxs)(oi,{$isPositive:!0,children:[(0,xe.jsx)(Wr,{})," +8.1% este m\xeas"]}),(0,xe.jsx)(ii,{children:"Meta mensal: R$ 45.000"})]}),(0,xe.jsxs)(ei,{children:[(0,xe.jsxs)(ti,{children:[(0,xe.jsx)(ni,{$color:"var(--danger)",$bgColor:"244, 67, 54",children:(0,xe.jsx)(Mr,{})}),(0,xe.jsx)(ri,{children:"INADIMPL\xcaNCIA"})]}),(0,xe.jsx)(ai,{children:"4.7%"}),(0,xe.jsxs)(oi,{$isPositive:!1,children:[(0,xe.jsx)(Ir,{})," +0.5% este m\xeas"]}),(0,xe.jsx)(ii,{children:"23 clientes inadimplentes"})]})]}),(0,xe.jsxs)(li,{children:[(0,xe.jsxs)(si,{children:[(0,xe.jsx)(ui,{children:(0,xe.jsx)(ci,{children:"Receita x Inadimpl\xeancia (\xfaltimos 12 meses)"})}),(0,xe.jsx)(di,{children:"Gr\xe1fico de Receita x Inadimpl\xeancia"})]}),(0,xe.jsxs)(si,{children:[(0,xe.jsx)(ui,{children:(0,xe.jsx)(ci,{children:"Planos Populares"})}),(0,xe.jsx)(di,{children:"Gr\xe1fico de Popularidade dos Planos"})]})]}),(0,xe.jsxs)(fi,{children:[(0,xe.jsx)(pi,{children:(0,xe.jsx)(hi,{children:"Atividades Recentes"})}),(0,xe.jsxs)(mi,{children:[(0,xe.jsxs)(gi,{children:[(0,xe.jsx)(vi,{$color:"var(--primary)",$bgColor:"30, 136, 229",children:(0,xe.jsx)(xa,{})}),(0,xe.jsxs)(yi,{children:[(0,xe.jsx)(bi,{children:"Novo cliente cadastrado"}),(0,xe.jsx)(xi,{children:"Hoje, 14:25"})]})]}),(0,xe.jsxs)(gi,{children:[(0,xe.jsx)(vi,{$color:"var(--secondary)",$bgColor:"255, 87, 34",children:(0,xe.jsx)(sa,{})}),(0,xe.jsxs)(yi,{children:[(0,xe.jsx)(bi,{children:"Nova venda de plano: Fibra 300MB"}),(0,xe.jsx)(xi,{children:"Hoje, 11:48"})]})]}),(0,xe.jsxs)(gi,{children:[(0,xe.jsx)(vi,{$color:"var(--success)",$bgColor:"76, 175, 80",children:(0,xe.jsx)(Xr,{})}),(0,xe.jsxs)(yi,{children:[(0,xe.jsx)(bi,{children:"Pagamento recebido: R$ 129,90"}),(0,xe.jsx)(xi,{children:"Ontem, 16:32"})]})]}),(0,xe.jsxs)(gi,{children:[(0,xe.jsx)(vi,{$color:"var(--danger)",$bgColor:"244, 67, 54",children:(0,xe.jsx)(Mr,{})}),(0,xe.jsxs)(yi,{children:[(0,xe.jsx)(bi,{children:"Cliente com fatura atrasada"}),(0,xe.jsx)(xi,{children:"Ontem, 09:15"})]})]})]})]})]})},ki=pr.div``,Si=pr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`,ji=pr.div`
  display: flex;
  gap: 0.5rem;
  flex: 1;
  max-width: 500px;
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`,Ci=pr.div`
  position: relative;
  flex: 1;
`,Ei=pr.span`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--gray);
`,Pi=pr.input`
  width: 100%;
  padding: 10px 10px 10px 40px;
  border: 1px solid var(--light);
  border-radius: 4px;
  font-size: 0.9rem;
  
  &:focus {
    border-color: var(--primary);
    outline: none;
  }
`,_i=pr.div`
  display: flex;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`,zi=pr.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: ${e=>e.$iconOnly?"0.625rem":"0.625rem 1rem"};
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  background-color: ${e=>e.$primary?"var(--primary)":"var(--white)"};
  color: ${e=>e.$primary?"var(--white)":"var(--gray)"};
  border: ${e=>e.$primary?"none":"1px solid var(--light)"};
  
  &:hover {
    background-color: ${e=>e.$primary?"var(--primary-dark)":"var(--light)"};
  }
  
  @media (max-width: 768px) {
    flex: ${e=>e.$grow?"1":"initial"};
  }
`,Li=pr.div`
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`,Ti=pr.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  background-color: #F5F7FA;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--light);
  font-weight: 600;
  color: var(--gray);
  
  @media (max-width: 768px) {
    display: none;
  }
`,Ni=pr.div`
  font-size: 0.85rem;
  text-transform: uppercase;
`,Oi=pr.div``,Ri=pr.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--light);
  align-items: center;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: rgba(30, 136, 229, 0.05);
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    padding: 1rem;
  }
`,Ai=pr.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`,Fi=pr.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--light);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
`,$i=pr.div`
  display: flex;
  flex-direction: column;
`,Di=pr.span`
  font-weight: 500;
  color: var(--dark);
  margin-bottom: 0.25rem;
`,Mi=pr.span`
  font-size: 0.8rem;
  color: var(--gray);
`,Ii=pr.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 0.25rem 0;
    border-bottom: 1px dashed var(--light);
    
    &:last-child {
      border-bottom: none;
    }
  }
`,Ui=pr.span`
  display: none;
  font-weight: 500;
  color: var(--gray);
  font-size: 0.85rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`,Bi=pr.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  background-color: rgba(30, 136, 229, 0.1);
  color: var(--primary);
`,Wi=pr.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  background-color: ${e=>e.$active?"rgba(76, 175, 80, 0.1)":"rgba(244, 67, 54, 0.1)"};
  color: ${e=>e.$active?"var(--success)":"var(--danger)"};
`,Hi=pr.div`
  display: flex;
  gap: 0.5rem;
`,Vi=pr.button`
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: var(--gray);
  
  &:hover {
    color: ${e=>e.$delete?"var(--danger)":"var(--primary)"};
  }
`,qi=pr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  padding: 0 0.5rem;
`,Ki=pr.div`
  font-size: 0.9rem;
  color: var(--gray);
`,Qi=pr.div`
  display: flex;
  gap: 0.25rem;
`,Gi=pr.button`
  width: 36px;
  height: 36px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${e=>e.$active?"var(--primary)":"var(--white)"};
  color: ${e=>e.$active?"var(--white)":"var(--gray)"};
  font-weight: ${e=>e.$active?"600":"normal"};
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background-color: ${e=>e.$active?"var(--primary)":"var(--light)"};
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`,Yi=[{id:1,name:"Jo\xe3o Silva",email:"joao.silva@email.com",plan:"Fibra 300MB",installation:"15/04/2023",status:!0},{id:2,name:"Maria Oliveira",email:"maria.oliveira@email.com",plan:"Fibra 500MB",installation:"22/05/2023",status:!0},{id:3,name:"Carlos Santos",email:"carlos.santos@email.com",plan:"Fibra 200MB",installation:"10/02/2023",status:!1},{id:4,name:"Ana Pereira",email:"ana.pereira@email.com",plan:"Fibra 300MB",installation:"18/03/2023",status:!0},{id:5,name:"Pedro Souza",email:"pedro.souza@email.com",plan:"Fibra 100MB",installation:"05/01/2023",status:!0},{id:6,name:"L\xfacia Fernandes",email:"lucia.fernandes@email.com",plan:"Fibra 500MB",installation:"30/06/2023",status:!1}];const Xi=function(){const[e,n]=(0,t.useState)(),[r,a]=(0,t.useState)("");n(Yi);const o=e.filter((e=>e.name.toLowerCase().includes(r.toLowerCase())||e.email.toLowerCase().includes(r.toLowerCase())||e.plan.toLowerCase().includes(r.toLowerCase())));return(0,xe.jsxs)(ki,{children:[(0,xe.jsx)("h1",{className:"page-title",children:"Clientes"}),(0,xe.jsxs)(Si,{children:[(0,xe.jsxs)(ji,{children:[(0,xe.jsxs)(Ci,{children:[(0,xe.jsx)(Ei,{children:(0,xe.jsx)(fa,{})}),(0,xe.jsx)(Pi,{type:"text",placeholder:"Buscar cliente...",value:r,onChange:e=>a(e.target.value)})]}),(0,xe.jsx)(zi,{$iconOnly:!0,children:(0,xe.jsx)(ea,{})})]}),(0,xe.jsx)(_i,{children:(0,xe.jsxs)(zi,{$primary:!0,$grow:!0,children:[(0,xe.jsx)(ca,{}),"Novo Cliente"]})})]}),(0,xe.jsxs)(Li,{children:[(0,xe.jsxs)(Ti,{children:[(0,xe.jsx)(Ni,{children:"Cliente"}),(0,xe.jsx)(Ni,{children:"Plano"}),(0,xe.jsx)(Ni,{children:"Instala\xe7\xe3o"}),(0,xe.jsx)(Ni,{children:"Status"}),(0,xe.jsx)(Ni,{children:"A\xe7\xf5es"})]}),(0,xe.jsx)(Oi,{children:o.map((e=>(0,xe.jsxs)(Ri,{children:[(0,xe.jsxs)(Ai,{children:[(0,xe.jsx)(Fi,{children:(0,xe.jsx)(ba,{})}),(0,xe.jsxs)($i,{children:[(0,xe.jsx)(Di,{children:e.name}),(0,xe.jsx)(Mi,{children:e.email})]})]}),(0,xe.jsxs)(Ii,{children:[(0,xe.jsx)(Ui,{children:"Plano"}),(0,xe.jsx)(Bi,{children:e.plan})]}),(0,xe.jsxs)(Ii,{children:[(0,xe.jsx)(Ui,{children:"Instala\xe7\xe3o"}),e.installation]}),(0,xe.jsxs)(Ii,{children:[(0,xe.jsx)(Ui,{children:"Status"}),(0,xe.jsxs)(Wi,{$active:e.status,children:[e.status?(0,xe.jsx)(Kr,{}):(0,xe.jsx)(ka,{}),e.status?"Ativo":"Inativo"]})]}),(0,xe.jsxs)(Ii,{children:[(0,xe.jsx)(Ui,{children:"A\xe7\xf5es"}),(0,xe.jsxs)(Hi,{children:[(0,xe.jsx)(Vi,{children:(0,xe.jsx)(Jr,{})}),(0,xe.jsx)(Vi,{$delete:!0,children:(0,xe.jsx)(ya,{})})]})]})]},e.id)))})]}),(0,xe.jsxs)(qi,{children:[(0,xe.jsx)(Ki,{children:"Mostrando 1-6 de 6 clientes"}),(0,xe.jsxs)(Qi,{children:[(0,xe.jsx)(Gi,{disabled:!0,children:"\xab"}),(0,xe.jsx)(Gi,{$active:!0,children:"1"}),(0,xe.jsx)(Gi,{disabled:!0,children:"\xbb"})]})]})]})},Ji=pr.div``,Zi=pr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`,el=pr.div`
  position: relative;
  flex: 1;
  max-width: 300px;
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`,tl=pr.span`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--gray);
`,nl=pr.input`
  width: 100%;
  padding: 10px 10px 10px 40px;
  border: 1px solid var(--light);
  border-radius: 4px;
  font-size: 0.9rem;
  
  &:focus {
    border-color: var(--primary);
    outline: none;
  }
`,rl=pr.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: var(--primary);
  color: var(--white);
  border: none;
  
  &:hover {
    background-color: var(--primary-dark);
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`,al=pr.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,ol=pr.div`
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`,il=pr.div`
  background-color: ${e=>e.$featured?"var(--primary)":"var(--light)"};
  color: ${e=>e.$featured?"var(--white)":"var(--dark)"};
  padding: 1.5rem;
  text-align: center;
  position: relative;
`,ll=pr.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
`,sl=pr.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`,ul=pr.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  
  span {
    font-size: 1rem;
    font-weight: 400;
  }
`,cl=pr.div`
  font-size: 0.85rem;
  opacity: 0.8;
`,dl=pr.div`
  padding: 1.5rem;
`,fl=pr.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
`,pl=pr.li`
  padding: 0.5rem 0;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  
  &:not(:last-child) {
    border-bottom: 1px solid var(--light);
  }
  
  strong {
    margin-right: 0.25rem;
  }
`,hl=pr.div`
  display: flex;
  padding: 0 1.5rem 1.5rem;
  gap: 0.5rem;
`,ml=pr.button`
  flex: 1;
  padding: 0.625rem;
  border-radius: 4px;
  border: 1px solid var(--primary);
  background-color: var(--white);
  color: var(--primary);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: rgba(30, 136, 229, 0.1);
  }
`,gl=pr.button`
  flex: 1;
  padding: 0.625rem;
  border-radius: 4px;
  border: 1px solid var(--light);
  background-color: var(--white);
  color: var(--gray);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: var(--danger);
    border-color: var(--danger);
  }
`,vl=[{id:1,name:"Fibra 100MB",price:89.9,featured:!1,type:"residential",speed:"100 Mbps",wifi:!0,installation:"Gr\xe1tis",support:"24/7"},{id:2,name:"Fibra 300MB",price:129.9,featured:!0,type:"residential",speed:"300 Mbps",wifi:!0,installation:"Gr\xe1tis",support:"24/7"},{id:3,name:"Fibra 500MB",price:179.9,featured:!1,type:"residential",speed:"500 Mbps",wifi:!0,installation:"Gr\xe1tis",support:"24/7"},{id:4,name:"Fibra 1GB",price:249.9,featured:!1,type:"residential",speed:"1 Gbps",wifi:!0,installation:"Gr\xe1tis",support:"24/7"},{id:5,name:"Empresarial 500MB",price:399.9,featured:!1,type:"business",speed:"500 Mbps",wifi:!0,installation:"Gr\xe1tis",support:"Dedicado 24/7",ip:"IP Fixo"},{id:6,name:"Empresarial 1GB",price:599.9,featured:!1,type:"business",speed:"1 Gbps",wifi:!0,installation:"Gr\xe1tis",support:"Dedicado 24/7",ip:"IP Fixo"}];const yl=function(){const[e,n]=(0,t.useState)(),[r,a]=(0,t.useState)("");n(vl);const o=e.filter((e=>e.name.toLowerCase().includes(r.toLowerCase())||e.type.toLowerCase().includes(r.toLowerCase())));return(0,xe.jsxs)(Ji,{children:[(0,xe.jsx)("h1",{className:"page-title",children:"Planos"}),(0,xe.jsxs)(Zi,{children:[(0,xe.jsxs)(el,{children:[(0,xe.jsx)(tl,{children:(0,xe.jsx)(fa,{})}),(0,xe.jsx)(nl,{type:"text",placeholder:"Buscar plano...",value:r,onChange:e=>a(e.target.value)})]}),(0,xe.jsxs)(rl,{children:[(0,xe.jsx)(ca,{}),"Novo Plano"]})]}),(0,xe.jsx)(al,{children:o.map((e=>(0,xe.jsxs)(ol,{children:[(0,xe.jsxs)(il,{$featured:e.featured,children:[(0,xe.jsx)(ll,{children:"residential"===e.type?(0,xe.jsx)(wa,{}):(0,xe.jsx)(Sa,{})}),(0,xe.jsx)(sl,{children:e.name}),(0,xe.jsxs)(ul,{children:["R$ ",e.price.toFixed(2).replace(".",","),(0,xe.jsx)("span",{children:"/m\xeas"})]}),(0,xe.jsx)(cl,{children:"Fidelidade de 12 meses"})]}),(0,xe.jsx)(dl,{children:(0,xe.jsxs)(fl,{children:[(0,xe.jsxs)(pl,{children:[(0,xe.jsx)("strong",{children:"Velocidade:"})," ",e.speed]}),(0,xe.jsxs)(pl,{children:[(0,xe.jsx)("strong",{children:"Wi-Fi:"})," ",e.wifi?"Incluso":"N\xe3o incluso"]}),(0,xe.jsxs)(pl,{children:[(0,xe.jsx)("strong",{children:"Instala\xe7\xe3o:"})," ",e.installation]}),(0,xe.jsxs)(pl,{children:[(0,xe.jsx)("strong",{children:"Suporte:"})," ",e.support]}),e.ip&&(0,xe.jsxs)(pl,{children:[(0,xe.jsx)("strong",{children:"IP:"})," ",e.ip]})]})}),(0,xe.jsxs)(hl,{children:[(0,xe.jsx)(ml,{children:(0,xe.jsx)(Jr,{})}),(0,xe.jsx)(gl,{children:(0,xe.jsx)(ya,{})})]})]},e.id)))})]})},bl=pr.div``,xl=pr.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,wl=pr.div`
  background-color: var(--white);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
`,kl=pr.h3`
  font-size: 0.9rem;
  color: var(--gray);
  margin-bottom: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`,Sl=pr.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--dark);
`,jl=pr.div`
  background-color: var(--white);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 400px;
  color: var(--gray);
  margin-bottom: 1.5rem;
  
  svg {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--primary);
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--dark);
  }
  
  p {
    max-width: 500px;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`,Cl=pr.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: var(--primary-dark);
  }
`;const El=function(){return(0,xe.jsxs)(bl,{children:[(0,xe.jsx)("h1",{className:"page-title",children:"Financeiro"}),(0,xe.jsxs)(xl,{children:[(0,xe.jsxs)(wl,{children:[(0,xe.jsxs)(kl,{children:[(0,xe.jsx)(Xr,{})," Receita Mensal"]}),(0,xe.jsx)(Sl,{children:"R$ 42.650,00"})]}),(0,xe.jsxs)(wl,{children:[(0,xe.jsxs)(kl,{children:[(0,xe.jsx)(Hr,{})," Crescimento"]}),(0,xe.jsx)(Sl,{children:"+8.1%"})]}),(0,xe.jsxs)(wl,{children:[(0,xe.jsxs)(kl,{children:[(0,xe.jsx)(qr,{})," Mensalidades Pendentes"]}),(0,xe.jsx)(Sl,{children:"23"})]}),(0,xe.jsxs)(wl,{children:[(0,xe.jsxs)(kl,{children:[(0,xe.jsx)(Zr,{})," Notas Fiscais"]}),(0,xe.jsx)(Sl,{children:"487"})]})]}),(0,xe.jsxs)(jl,{children:[(0,xe.jsx)(Hr,{}),(0,xe.jsx)("h3",{children:"Painel Financeiro"}),(0,xe.jsx)("p",{children:"Acompanhe todas as suas m\xe9tricas financeiras em um s\xf3 lugar. Visualize receitas, despesas, inadimpl\xeancia e muito mais. Esta p\xe1gina est\xe1 em desenvolvimento."}),(0,xe.jsx)(Cl,{children:"Explorar Recursos"})]})]})},Pl=pr.div``,_l=pr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`,zl=pr.div`
  display: flex;
  gap: 0.5rem;
  flex: 1;
  max-width: 500px;
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`,Ll=pr.div`
  position: relative;
  flex: 1;
`,Tl=pr.span`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--gray);
`,Nl=pr.input`
  width: 100%;
  padding: 10px 10px 10px 40px;
  border: 1px solid var(--light);
  border-radius: 4px;
  font-size: 0.9rem;
  
  &:focus {
    border-color: var(--primary);
    outline: none;
  }
`,Ol=pr.div`
  display: flex;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`,Rl=pr.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: ${e=>e.$iconOnly?"0.625rem":"0.625rem 1rem"};
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  background-color: ${e=>e.$primary?"var(--primary)":"var(--white)"};
  color: ${e=>e.$primary?"var(--white)":"var(--gray)"};
  border: ${e=>e.$primary?"none":"1px solid var(--light)"};
  
  &:hover {
    background-color: ${e=>e.$primary?"var(--primary-dark)":"var(--light)"};
  }
  
  @media (max-width: 768px) {
    flex: ${e=>e.$grow?"1":"initial"};
  }
`,Al=pr.div`
  display: flex;
  border-bottom: 1px solid var(--light);
  margin-bottom: 1.5rem;
  
  @media (max-width: 576px) {
    overflow-x: auto;
    padding-bottom: 5px;
    
    &::-webkit-scrollbar {
      height: 2px;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: var(--light);
    }
  }
`,Fl=pr.button`
  padding: 0.75rem 1.5rem;
  background: none;
  border: none;
  border-bottom: 2px solid ${e=>e.$active?"var(--primary)":"transparent"};
  color: ${e=>e.$active?"var(--primary)":"var(--gray)"};
  font-weight: ${e=>e.$active?"600":"400"};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;
  
  &:hover {
    color: var(--primary);
  }
`,$l=pr.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Dl=pr.div`
  background-color: var(--white);
  border-radius: 8px;
  padding: 1.25rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`,Ml=pr.div`
  flex: 1;
`,Il=pr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`,Ul=pr.span`
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--gray);
`,Bl=pr.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 500;
  
  &.open {
    background-color: rgba(30, 136, 229, 0.1);
    color: var(--primary);
  }
  
  &.pending {
    background-color: rgba(255, 193, 7, 0.1);
    color: var(--warning);
  }
  
  &.closed {
    background-color: rgba(76, 175, 80, 0.1);
    color: var(--success);
  }
  
  &.canceled {
    background-color: rgba(244, 67, 54, 0.1);
    color: var(--danger);
  }
`,Wl=pr.h3`
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--dark);
  margin-bottom: 0.5rem;
`,Hl=pr.p`
  font-size: 0.9rem;
  color: var(--gray);
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Vl=pr.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,ql=pr.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8rem;
  color: var(--gray);
  
  svg {
    font-size: 0.9rem;
  }
`,Kl=pr.div`
  display: flex;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`,Ql=pr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--gray);
  background-color: var(--white);
  border-radius: 8px;
  padding: 3rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  
  svg {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--primary);
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--dark);
  }
  
  p {
    max-width: 500px;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`,Gl=[{id:1,number:"TIC-001",title:"Internet lenta",description:"Cliente relatou que sua internet est\xe1 lenta nas \xfaltimas 2 horas.",status:"open",client:"Jo\xe3o Silva",createdAt:"23/04/2023 14:25",messages:3},{id:2,number:"TIC-002",title:"Sinal caindo frequentemente",description:"Cliente relatou quedas de sinal frequentes durante o dia.",status:"pending",client:"Maria Oliveira",createdAt:"22/04/2023 10:15",messages:5},{id:3,number:"TIC-003",title:"Erro na fatura",description:"Cliente informou cobran\xe7a indevida na fatura de abril.",status:"closed",client:"Carlos Santos",createdAt:"20/04/2023 09:30",messages:4},{id:4,number:"TIC-004",title:"Mudan\xe7a de endere\xe7o",description:"Cliente solicitou transfer\xeancia do servi\xe7o para novo endere\xe7o.",status:"open",client:"Ana Pereira",createdAt:"19/04/2023 16:45",messages:2},{id:5,number:"TIC-005",title:"Cancelamento de servi\xe7o",description:"Cliente solicitou cancelamento do servi\xe7o.",status:"canceled",client:"Pedro Souza",createdAt:"18/04/2023 11:20",messages:3}];const Yl=function(){const[e,n]=(0,t.useState)(),[r,a]=(0,t.useState)(""),[o,i]=(0,t.useState)("all");n(Gl);const l=e.filter((e=>{const t=e.number.toLowerCase().includes(r.toLowerCase())||e.title.toLowerCase().includes(r.toLowerCase())||e.client.toLowerCase().includes(r.toLowerCase());return"all"===o?t:t&&e.status===o})),s=e=>{switch(e){case"open":default:return(0,xe.jsx)(la,{});case"pending":return(0,xe.jsx)(Gr,{});case"closed":return(0,xe.jsx)(Kr,{});case"canceled":return(0,xe.jsx)(ka,{})}},u=e=>{switch(e){case"open":return"Aberto";case"pending":return"Pendente";case"closed":return"Resolvido";case"canceled":return"Cancelado";default:return e}};return(0,xe.jsxs)(Pl,{children:[(0,xe.jsx)("h1",{className:"page-title",children:"Suporte"}),(0,xe.jsxs)(_l,{children:[(0,xe.jsxs)(zl,{children:[(0,xe.jsxs)(Ll,{children:[(0,xe.jsx)(Tl,{children:(0,xe.jsx)(fa,{})}),(0,xe.jsx)(Nl,{type:"text",placeholder:"Buscar ticket...",value:r,onChange:e=>a(e.target.value)})]}),(0,xe.jsx)(Rl,{$iconOnly:!0,children:(0,xe.jsx)(ea,{})})]}),(0,xe.jsx)(Ol,{children:(0,xe.jsxs)(Rl,{$primary:!0,$grow:!0,children:[(0,xe.jsx)(ca,{}),"Novo Ticket"]})})]}),(0,xe.jsxs)(Al,{children:[(0,xe.jsx)(Fl,{$active:"all"===o,onClick:()=>i("all"),children:"Todos"}),(0,xe.jsx)(Fl,{$active:"open"===o,onClick:()=>i("open"),children:"Abertos"}),(0,xe.jsx)(Fl,{$active:"pending"===o,onClick:()=>i("pending"),children:"Pendentes"}),(0,xe.jsx)(Fl,{$active:"closed"===o,onClick:()=>i("closed"),children:"Resolvidos"}),(0,xe.jsx)(Fl,{$active:"canceled"===o,onClick:()=>i("canceled"),children:"Cancelados"})]}),l.length>0?(0,xe.jsx)($l,{children:l.map((e=>(0,xe.jsxs)(Dl,{children:[(0,xe.jsxs)(Ml,{children:[(0,xe.jsxs)(Il,{children:[(0,xe.jsx)(Ul,{children:e.number}),(0,xe.jsxs)(Bl,{className:e.status,children:[s(e.status),u(e.status)]})]}),(0,xe.jsx)(Wl,{children:e.title}),(0,xe.jsx)(Hl,{children:e.description}),(0,xe.jsxs)(Vl,{children:[(0,xe.jsxs)(ql,{children:["Cliente: ",e.client]}),(0,xe.jsxs)(ql,{children:[(0,xe.jsx)(Gr,{}),e.createdAt]}),(0,xe.jsxs)(ql,{children:[(0,xe.jsx)(la,{}),e.messages," mensagens"]})]})]}),(0,xe.jsx)(Kl,{children:(0,xe.jsx)(Rl,{children:"Ver Detalhes"})})]},e.id)))}):(0,xe.jsxs)(Ql,{children:[(0,xe.jsx)(la,{}),(0,xe.jsx)("h3",{children:"Nenhum ticket encontrado"}),(0,xe.jsx)("p",{children:"N\xe3o h\xe1 tickets que correspondam aos crit\xe9rios de busca ou filtro selecionado. Tente ajustar seus filtros ou criar um novo ticket."}),(0,xe.jsxs)(Rl,{$primary:!0,children:[(0,xe.jsx)(ca,{})," Novo Ticket"]})]})]})},Xl=pr.div``,Jl=pr.div`
  display: flex;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--light);
  
  @media (max-width: 768px) {
    overflow-x: auto;
    white-space: nowrap;
    
    &::-webkit-scrollbar {
      height: 0;
    }
  }
`,Zl=pr.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  border: none;
  background: none;
  border-bottom: 2px solid ${e=>e.$active?"var(--primary)":"transparent"};
  color: ${e=>e.$active?"var(--primary)":"var(--gray)"};
  font-weight: ${e=>e.$active?"600":"400"};
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    color: var(--primary);
  }
  
  svg {
    font-size: 1.1rem;
  }
`,es=pr.div`
  background-color: var(--white);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`,ts=pr.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,ns=pr.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,rs=pr.div`
  display: grid;
  grid-template-columns: repeat(${e=>e.$columns||2}, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,as=pr.div`
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,os=pr.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--dark);
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--light);
`,is=pr.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--dark);
`,ls=pr.div`
  position: relative;
`,ss=pr.span`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--gray);
`,us=pr.input`
  width: 100%;
  padding: ${e=>e.$leftIcon?"0.75rem 0.75rem 0.75rem 2.5rem":"0.75rem"};
  border: 1px solid var(--light);
  border-radius: 4px;
  font-size: 0.9rem;
  
  &:focus {
    border-color: var(--primary);
    outline: none;
  }
  
  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`,cs=pr.p`
  font-size: 0.8rem;
  color: var(--gray);
  margin-top: 0.25rem;
`,ds=pr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,fs=pr.div`
  display: inline-flex;
  align-items: center;
  font-size: 1.5rem;
  color: ${e=>e.$checked?"var(--primary)":"var(--gray)"};
  cursor: pointer;
`,ps=pr.span`
  font-size: 0.9rem;
  color: var(--dark);
`,hs=pr.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--light);
  border-radius: 4px;
  font-size: 0.9rem;
  background-color: white;
  
  &:focus {
    border-color: var(--primary);
    outline: none;
  }
`,ms=pr.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`,gs=pr.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: var(--primary-dark);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`,vs=pr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background-color: rgba(76, 175, 80, 0.1);
  border-left: 3px solid var(--success);
  color: var(--success);
  margin-bottom: 1.5rem;
  border-radius: 0 4px 4px 0;
  font-weight: 500;
`;const ys=function(){const[e,n]=(0,t.useState)("company"),[r,a]=(0,t.useState)(!1),[o,i]=(0,t.useState)({name:"Gestor Provedor",cnpj:"12.345.678/0001-90",address:"Av. Principal, 123",city:"S\xe3o Paulo",state:"SP",postal:"01234-567",email:"contato@gestorprovedor.com.br",phone:"(11) 91234-5678",website:"www.gestorprovedor.com.br"}),[l,s]=(0,t.useState)({emailNotifications:!0,smsNotifications:!1,paymentReminders:!0,supportUpdates:!0,marketingEmails:!1}),[u,c]=(0,t.useState)({dateFormat:"dd/mm/yyyy",timezone:"America/Sao_Paulo",language:"pt-BR",autoLogout:"30",theme:"light"}),d=e=>{const{name:t,value:n}=e.target;i((e=>({...e,[t]:n})))},f=e=>{s((t=>({...t,[e]:!t[e]})))},p=e=>{const{name:t,value:n}=e.target;c((e=>({...e,[t]:n})))};return(0,xe.jsxs)(Xl,{children:[(0,xe.jsx)("h1",{className:"page-title",children:"Configura\xe7\xf5es"}),r&&(0,xe.jsxs)(vs,{children:[(0,xe.jsx)(Qr,{}),"Configura\xe7\xf5es salvas com sucesso!"]}),(0,xe.jsxs)(Jl,{children:[(0,xe.jsxs)(Zl,{$active:"company"===e,onClick:()=>n("company"),children:[(0,xe.jsx)(na,{})," Empresa"]}),(0,xe.jsxs)(Zl,{$active:"notifications"===e,onClick:()=>n("notifications"),children:[(0,xe.jsx)(Vr,{})," Notifica\xe7\xf5es"]}),(0,xe.jsxs)(Zl,{$active:"system"===e,onClick:()=>n("system"),children:[(0,xe.jsx)(pa,{})," Sistema"]}),(0,xe.jsxs)(Zl,{$active:"security"===e,onClick:()=>n("security"),children:[(0,xe.jsx)(ra,{})," Seguran\xe7a"]}),(0,xe.jsxs)(Zl,{$active:"billing"===e,onClick:()=>n("billing"),children:[(0,xe.jsx)(Yr,{})," Faturamento"]})]}),(0,xe.jsx)(es,{children:(0,xe.jsxs)(ts,{onSubmit:e=>{e.preventDefault(),a(!0),setTimeout((()=>a(!1)),3e3)},children:["company"===e&&(0,xe.jsxs)(as,{children:[(0,xe.jsx)(os,{children:"Informa\xe7\xf5es da Empresa"}),(0,xe.jsxs)(rs,{children:[(0,xe.jsxs)(ns,{children:[(0,xe.jsx)(is,{htmlFor:"name",children:"Nome da Empresa"}),(0,xe.jsxs)(ls,{children:[(0,xe.jsx)(ss,{children:(0,xe.jsx)(na,{})}),(0,xe.jsx)(us,{id:"name",name:"name",$leftIcon:!0,value:o.name,onChange:d})]})]}),(0,xe.jsxs)(ns,{children:[(0,xe.jsx)(is,{htmlFor:"cnpj",children:"CNPJ"}),(0,xe.jsxs)(ls,{children:[(0,xe.jsx)(ss,{children:(0,xe.jsx)(ba,{})}),(0,xe.jsx)(us,{id:"cnpj",name:"cnpj",$leftIcon:!0,value:o.cnpj,onChange:d})]})]})]}),(0,xe.jsxs)(ns,{children:[(0,xe.jsx)(is,{htmlFor:"address",children:"Endere\xe7o"}),(0,xe.jsxs)(ls,{children:[(0,xe.jsx)(ss,{children:(0,xe.jsx)(na,{})}),(0,xe.jsx)(us,{id:"address",name:"address",$leftIcon:!0,value:o.address,onChange:d})]})]}),(0,xe.jsxs)(rs,{$columns:3,children:[(0,xe.jsxs)(ns,{children:[(0,xe.jsx)(is,{htmlFor:"city",children:"Cidade"}),(0,xe.jsx)(us,{id:"city",name:"city",value:o.city,onChange:d})]}),(0,xe.jsxs)(ns,{children:[(0,xe.jsx)(is,{htmlFor:"state",children:"Estado"}),(0,xe.jsx)(us,{id:"state",name:"state",value:o.state,onChange:d})]}),(0,xe.jsxs)(ns,{children:[(0,xe.jsx)(is,{htmlFor:"postal",children:"CEP"}),(0,xe.jsx)(us,{id:"postal",name:"postal",value:o.postal,onChange:d})]})]}),(0,xe.jsx)(os,{children:"Contato"}),(0,xe.jsxs)(rs,{children:[(0,xe.jsxs)(ns,{children:[(0,xe.jsx)(is,{htmlFor:"email",children:"Email"}),(0,xe.jsxs)(ls,{children:[(0,xe.jsx)(ss,{children:(0,xe.jsx)(oa,{})}),(0,xe.jsx)(us,{id:"email",name:"email",type:"email",$leftIcon:!0,value:o.email,onChange:d})]})]}),(0,xe.jsxs)(ns,{children:[(0,xe.jsx)(is,{htmlFor:"phone",children:"Telefone"}),(0,xe.jsxs)(ls,{children:[(0,xe.jsx)(ss,{children:(0,xe.jsx)(ua,{})}),(0,xe.jsx)(us,{id:"phone",name:"phone",$leftIcon:!0,value:o.phone,onChange:d})]})]})]}),(0,xe.jsxs)(ns,{children:[(0,xe.jsx)(is,{htmlFor:"website",children:"Website"}),(0,xe.jsx)(us,{id:"website",name:"website",value:o.website,onChange:d})]})]}),"notifications"===e&&(0,xe.jsxs)(as,{children:[(0,xe.jsx)(os,{children:"Configura\xe7\xf5es de Notifica\xe7\xf5es"}),(0,xe.jsxs)(ns,{children:[(0,xe.jsxs)(ds,{children:[(0,xe.jsx)(fs,{$checked:l.emailNotifications,onClick:()=>f("emailNotifications"),children:l.emailNotifications?(0,xe.jsx)(va,{}):(0,xe.jsx)(ga,{})}),(0,xe.jsx)(ps,{children:"Notifica\xe7\xf5es por Email"})]}),(0,xe.jsx)(cs,{children:"Receba atualiza\xe7\xf5es e alertas importantes por email"})]}),(0,xe.jsxs)(ns,{children:[(0,xe.jsxs)(ds,{children:[(0,xe.jsx)(fs,{$checked:l.smsNotifications,onClick:()=>f("smsNotifications"),children:l.smsNotifications?(0,xe.jsx)(va,{}):(0,xe.jsx)(ga,{})}),(0,xe.jsx)(ps,{children:"Notifica\xe7\xf5es por SMS"})]}),(0,xe.jsx)(cs,{children:"Receba atualiza\xe7\xf5es e alertas importantes por SMS"})]}),(0,xe.jsxs)(ns,{children:[(0,xe.jsxs)(ds,{children:[(0,xe.jsx)(fs,{$checked:l.paymentReminders,onClick:()=>f("paymentReminders"),children:l.paymentReminders?(0,xe.jsx)(va,{}):(0,xe.jsx)(ga,{})}),(0,xe.jsx)(ps,{children:"Lembretes de Pagamento"})]}),(0,xe.jsx)(cs,{children:"Receba lembretes de pagamentos pendentes"})]}),(0,xe.jsxs)(ns,{children:[(0,xe.jsxs)(ds,{children:[(0,xe.jsx)(fs,{$checked:l.supportUpdates,onClick:()=>f("supportUpdates"),children:l.supportUpdates?(0,xe.jsx)(va,{}):(0,xe.jsx)(ga,{})}),(0,xe.jsx)(ps,{children:"Atualiza\xe7\xf5es de Suporte"})]}),(0,xe.jsx)(cs,{children:"Receba notifica\xe7\xf5es quando houver respostas em seus tickets de suporte"})]}),(0,xe.jsxs)(ns,{children:[(0,xe.jsxs)(ds,{children:[(0,xe.jsx)(fs,{$checked:l.marketingEmails,onClick:()=>f("marketingEmails"),children:l.marketingEmails?(0,xe.jsx)(va,{}):(0,xe.jsx)(ga,{})}),(0,xe.jsx)(ps,{children:"Emails de Marketing"})]}),(0,xe.jsx)(cs,{children:"Receba emails sobre promo\xe7\xf5es e novidades"})]})]}),"system"===e&&(0,xe.jsxs)(as,{children:[(0,xe.jsx)(os,{children:"Configura\xe7\xf5es do Sistema"}),(0,xe.jsxs)(rs,{children:[(0,xe.jsxs)(ns,{children:[(0,xe.jsx)(is,{htmlFor:"dateFormat",children:"Formato de Data"}),(0,xe.jsxs)(hs,{id:"dateFormat",name:"dateFormat",value:u.dateFormat,onChange:p,children:[(0,xe.jsx)("option",{value:"dd/mm/yyyy",children:"DD/MM/YYYY"}),(0,xe.jsx)("option",{value:"mm/dd/yyyy",children:"MM/DD/YYYY"}),(0,xe.jsx)("option",{value:"yyyy-mm-dd",children:"YYYY-MM-DD"})]})]}),(0,xe.jsxs)(ns,{children:[(0,xe.jsx)(is,{htmlFor:"timezone",children:"Fuso Hor\xe1rio"}),(0,xe.jsxs)(hs,{id:"timezone",name:"timezone",value:u.timezone,onChange:p,children:[(0,xe.jsx)("option",{value:"America/Sao_Paulo",children:"Am\xe9rica/S\xe3o Paulo"}),(0,xe.jsx)("option",{value:"America/Fortaleza",children:"Am\xe9rica/Fortaleza"}),(0,xe.jsx)("option",{value:"America/Manaus",children:"Am\xe9rica/Manaus"}),(0,xe.jsx)("option",{value:"America/Rio_Branco",children:"Am\xe9rica/Rio Branco"})]})]})]}),(0,xe.jsxs)(rs,{children:[(0,xe.jsxs)(ns,{children:[(0,xe.jsx)(is,{htmlFor:"language",children:"Idioma"}),(0,xe.jsxs)(hs,{id:"language",name:"language",value:u.language,onChange:p,children:[(0,xe.jsx)("option",{value:"pt-BR",children:"Portugu\xeas (Brasil)"}),(0,xe.jsx)("option",{value:"en-US",children:"English (US)"}),(0,xe.jsx)("option",{value:"es",children:"Espa\xf1ol"})]})]}),(0,xe.jsxs)(ns,{children:[(0,xe.jsx)(is,{htmlFor:"autoLogout",children:"Logout Autom\xe1tico (minutos)"}),(0,xe.jsx)(us,{id:"autoLogout",name:"autoLogout",type:"number",min:"5",max:"120",value:u.autoLogout,onChange:p}),(0,xe.jsx)(cs,{children:"Define o tempo de inatividade at\xe9 o logout autom\xe1tico"})]})]}),(0,xe.jsxs)(ns,{children:[(0,xe.jsx)(is,{htmlFor:"theme",children:"Tema"}),(0,xe.jsxs)(hs,{id:"theme",name:"theme",value:u.theme,onChange:p,children:[(0,xe.jsx)("option",{value:"light",children:"Claro"}),(0,xe.jsx)("option",{value:"dark",children:"Escuro"}),(0,xe.jsx)("option",{value:"system",children:"Sistema (Autom\xe1tico)"})]})]})]}),("security"===e||"billing"===e)&&(0,xe.jsx)("div",{style:{textAlign:"center",padding:"2rem",color:"var(--gray)"},children:"Esta se\xe7\xe3o est\xe1 em desenvolvimento."}),(0,xe.jsx)(ms,{children:(0,xe.jsxs)(gs,{type:"submit",children:[(0,xe.jsx)(da,{})," Salvar Configura\xe7\xf5es"]})})]})})]})},bs=e=>{let{children:t}=e;const{currentUser:n}=ke();return n?t:(0,xe.jsx)(he,{to:"/login",replace:!0})},xs=()=>(0,xe.jsxs)(xe.Fragment,{children:[(0,xe.jsx)(mr,{}),(0,xe.jsxs)(ye,{children:[(0,xe.jsxs)(ge,{element:(0,xe.jsx)(Ga,{}),children:[(0,xe.jsx)(ge,{path:"/login",element:(0,xe.jsx)(uo,{})}),(0,xe.jsx)(ge,{path:"/register",element:(0,xe.jsx)($o,{})}),(0,xe.jsx)(ge,{path:"/forgot-password",element:(0,xe.jsx)(Xo,{})})]}),(0,xe.jsx)(ge,{path:"/",element:(0,xe.jsx)(he,{to:"/dashboard",replace:!0})}),(0,xe.jsxs)(ge,{element:(0,xe.jsx)(bs,{children:(0,xe.jsx)(Ba,{})}),children:[(0,xe.jsx)(ge,{path:"/dashboard",element:(0,xe.jsx)(wi,{})}),(0,xe.jsx)(ge,{path:"/clientes",element:(0,xe.jsx)(Xi,{})}),(0,xe.jsx)(ge,{path:"/planos",element:(0,xe.jsx)(yl,{})}),(0,xe.jsx)(ge,{path:"/financeiro",element:(0,xe.jsx)(El,{})}),(0,xe.jsx)(ge,{path:"/suporte",element:(0,xe.jsx)(Yl,{})}),(0,xe.jsx)(ge,{path:"/configuracoes",element:(0,xe.jsx)(ys,{})})]})]})]});a.createRoot(document.getElementById("root")).render((0,xe.jsx)(t.StrictMode,{children:(0,xe.jsx)(jr,{children:(0,xe.jsx)(Se,{children:(0,xe.jsx)(xs,{})})})}))})()})();
//# sourceMappingURL=main.090edcbb.js.map