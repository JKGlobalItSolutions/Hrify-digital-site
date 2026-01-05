function jm(t,s){for(var n=0;n<s.length;n++){const i=s[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const a=Object.getOwnPropertyDescriptor(i,r);a&&Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function vm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Yo={exports:{}},Ni={},Go={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hn=Symbol.for("react.element"),bm=Symbol.for("react.portal"),wm=Symbol.for("react.fragment"),Nm=Symbol.for("react.strict_mode"),km=Symbol.for("react.profiler"),Sm=Symbol.for("react.provider"),Bm=Symbol.for("react.context"),Dm=Symbol.for("react.forward_ref"),Cm=Symbol.for("react.suspense"),zm=Symbol.for("react.memo"),Wm=Symbol.for("react.lazy"),fl=Symbol.iterator;function Mm(t){return t===null||typeof t!="object"?null:(t=fl&&t[fl]||t["@@iterator"],typeof t=="function"?t:null)}var Qo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ko=Object.assign,Xo={};function js(t,s,n){this.props=t,this.context=s,this.refs=Xo,this.updater=n||Qo}js.prototype.isReactComponent={};js.prototype.setState=function(t,s){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,s,"setState")};js.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Zo(){}Zo.prototype=js.prototype;function ja(t,s,n){this.props=t,this.context=s,this.refs=Xo,this.updater=n||Qo}var va=ja.prototype=new Zo;va.constructor=ja;Ko(va,js.prototype);va.isPureReactComponent=!0;var yl=Array.isArray,Jo=Object.prototype.hasOwnProperty,ba={current:null},ec={key:!0,ref:!0,__self:!0,__source:!0};function tc(t,s,n){var i,r={},a=null,l=null;if(s!=null)for(i in s.ref!==void 0&&(l=s.ref),s.key!==void 0&&(a=""+s.key),s)Jo.call(s,i)&&!ec.hasOwnProperty(i)&&(r[i]=s[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var c=Array(o),m=0;m<o;m++)c[m]=arguments[m+2];r.children=c}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:hn,type:t,key:a,ref:l,props:r,_owner:ba.current}}function Em(t,s){return{$$typeof:hn,type:t.type,key:s,ref:t.ref,props:t.props,_owner:t._owner}}function wa(t){return typeof t=="object"&&t!==null&&t.$$typeof===hn}function Im(t){var s={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return s[n]})}var jl=/\/+/g;function Ui(t,s){return typeof t=="object"&&t!==null&&t.key!=null?Im(""+t.key):s.toString(36)}function Pn(t,s,n,i,r){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case hn:case bm:l=!0}}if(l)return l=t,r=r(l),t=i===""?"."+Ui(l,0):i,yl(r)?(n="",t!=null&&(n=t.replace(jl,"$&/")+"/"),Pn(r,s,n,"",function(m){return m})):r!=null&&(wa(r)&&(r=Em(r,n+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(jl,"$&/")+"/")+t)),s.push(r)),1;if(l=0,i=i===""?".":i+":",yl(t))for(var o=0;o<t.length;o++){a=t[o];var c=i+Ui(a,o);l+=Pn(a,s,n,c,r)}else if(c=Mm(t),typeof c=="function")for(t=c.call(t),o=0;!(a=t.next()).done;)a=a.value,c=i+Ui(a,o++),l+=Pn(a,s,n,c,r);else if(a==="object")throw s=String(t),Error("Objects are not valid as a React child (found: "+(s==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":s)+"). If you meant to render a collection of children, use an array instead.");return l}function wn(t,s,n){if(t==null)return t;var i=[],r=0;return Pn(t,i,"","",function(a){return s.call(n,a,r++)}),i}function Am(t){if(t._status===-1){var s=t._result;s=s(),s.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=s)}if(t._status===1)return t._result.default;throw t._result}var ue={current:null},On={transition:null},Tm={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:On,ReactCurrentOwner:ba};function sc(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:wn,forEach:function(t,s,n){wn(t,function(){s.apply(this,arguments)},n)},count:function(t){var s=0;return wn(t,function(){s++}),s},toArray:function(t){return wn(t,function(s){return s})||[]},only:function(t){if(!wa(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};T.Component=js;T.Fragment=wm;T.Profiler=km;T.PureComponent=ja;T.StrictMode=Nm;T.Suspense=Cm;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tm;T.act=sc;T.cloneElement=function(t,s,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Ko({},t.props),r=t.key,a=t.ref,l=t._owner;if(s!=null){if(s.ref!==void 0&&(a=s.ref,l=ba.current),s.key!==void 0&&(r=""+s.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(c in s)Jo.call(s,c)&&!ec.hasOwnProperty(c)&&(i[c]=s[c]===void 0&&o!==void 0?o[c]:s[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){o=Array(c);for(var m=0;m<c;m++)o[m]=arguments[m+2];i.children=o}return{$$typeof:hn,type:t.type,key:r,ref:a,props:i,_owner:l}};T.createContext=function(t){return t={$$typeof:Bm,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Sm,_context:t},t.Consumer=t};T.createElement=tc;T.createFactory=function(t){var s=tc.bind(null,t);return s.type=t,s};T.createRef=function(){return{current:null}};T.forwardRef=function(t){return{$$typeof:Dm,render:t}};T.isValidElement=wa;T.lazy=function(t){return{$$typeof:Wm,_payload:{_status:-1,_result:t},_init:Am}};T.memo=function(t,s){return{$$typeof:zm,type:t,compare:s===void 0?null:s}};T.startTransition=function(t){var s=On.transition;On.transition={};try{t()}finally{On.transition=s}};T.unstable_act=sc;T.useCallback=function(t,s){return ue.current.useCallback(t,s)};T.useContext=function(t){return ue.current.useContext(t)};T.useDebugValue=function(){};T.useDeferredValue=function(t){return ue.current.useDeferredValue(t)};T.useEffect=function(t,s){return ue.current.useEffect(t,s)};T.useId=function(){return ue.current.useId()};T.useImperativeHandle=function(t,s,n){return ue.current.useImperativeHandle(t,s,n)};T.useInsertionEffect=function(t,s){return ue.current.useInsertionEffect(t,s)};T.useLayoutEffect=function(t,s){return ue.current.useLayoutEffect(t,s)};T.useMemo=function(t,s){return ue.current.useMemo(t,s)};T.useReducer=function(t,s,n){return ue.current.useReducer(t,s,n)};T.useRef=function(t){return ue.current.useRef(t)};T.useState=function(t){return ue.current.useState(t)};T.useSyncExternalStore=function(t,s,n){return ue.current.useSyncExternalStore(t,s,n)};T.useTransition=function(){return ue.current.useTransition()};T.version="18.3.1";Go.exports=T;var S=Go.exports;const nc=vm(S),Fm=jm({__proto__:null,default:nc},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm=S,Rm=Symbol.for("react.element"),Hm=Symbol.for("react.fragment"),Pm=Object.prototype.hasOwnProperty,Om=Lm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_m={key:!0,ref:!0,__self:!0,__source:!0};function ic(t,s,n){var i,r={},a=null,l=null;n!==void 0&&(a=""+n),s.key!==void 0&&(a=""+s.key),s.ref!==void 0&&(l=s.ref);for(i in s)Pm.call(s,i)&&!_m.hasOwnProperty(i)&&(r[i]=s[i]);if(t&&t.defaultProps)for(i in s=t.defaultProps,s)r[i]===void 0&&(r[i]=s[i]);return{$$typeof:Rm,type:t,key:a,ref:l,props:r,_owner:Om.current}}Ni.Fragment=Hm;Ni.jsx=ic;Ni.jsxs=ic;Yo.exports=Ni;var e=Yo.exports,Nr={},rc={exports:{}},Ne={},ac={exports:{}},lc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function s(z,I){var A=z.length;z.push(I);e:for(;0<A;){var G=A-1>>>1,ee=z[G];if(0<r(ee,I))z[G]=I,z[A]=ee,A=G;else break e}}function n(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var I=z[0],A=z.pop();if(A!==I){z[0]=A;e:for(var G=0,ee=z.length,vn=ee>>>1;G<vn;){var wt=2*(G+1)-1,_i=z[wt],Nt=wt+1,bn=z[Nt];if(0>r(_i,A))Nt<ee&&0>r(bn,_i)?(z[G]=bn,z[Nt]=A,G=Nt):(z[G]=_i,z[wt]=A,G=wt);else if(Nt<ee&&0>r(bn,A))z[G]=bn,z[Nt]=A,G=Nt;else break e}}return I}function r(z,I){var A=z.sortIndex-I.sortIndex;return A!==0?A:z.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var l=Date,o=l.now();t.unstable_now=function(){return l.now()-o}}var c=[],m=[],u=1,y=null,h=3,w=!1,j=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(z){for(var I=n(m);I!==null;){if(I.callback===null)i(m);else if(I.startTime<=z)i(m),I.sortIndex=I.expirationTime,s(c,I);else break;I=n(m)}}function b(z){if(v=!1,f(z),!j)if(n(c)!==null)j=!0,Pi(B);else{var I=n(m);I!==null&&Oi(b,I.startTime-z)}}function B(z,I){j=!1,v&&(v=!1,g(E),E=-1),w=!0;var A=h;try{for(f(I),y=n(c);y!==null&&(!(y.expirationTime>I)||z&&!Me());){var G=y.callback;if(typeof G=="function"){y.callback=null,h=y.priorityLevel;var ee=G(y.expirationTime<=I);I=t.unstable_now(),typeof ee=="function"?y.callback=ee:y===n(c)&&i(c),f(I)}else i(c);y=n(c)}if(y!==null)var vn=!0;else{var wt=n(m);wt!==null&&Oi(b,wt.startTime-I),vn=!1}return vn}finally{y=null,h=A,w=!1}}var W=!1,M=null,E=-1,Y=5,F=-1;function Me(){return!(t.unstable_now()-F<Y)}function Ns(){if(M!==null){var z=t.unstable_now();F=z;var I=!0;try{I=M(!0,z)}finally{I?ks():(W=!1,M=null)}}else W=!1}var ks;if(typeof p=="function")ks=function(){p(Ns)};else if(typeof MessageChannel<"u"){var xl=new MessageChannel,ym=xl.port2;xl.port1.onmessage=Ns,ks=function(){ym.postMessage(null)}}else ks=function(){k(Ns,0)};function Pi(z){M=z,W||(W=!0,ks())}function Oi(z,I){E=k(function(){z(t.unstable_now())},I)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){j||w||(j=!0,Pi(B))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(z){switch(h){case 1:case 2:case 3:var I=3;break;default:I=h}var A=h;h=I;try{return z()}finally{h=A}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,I){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var A=h;h=z;try{return I()}finally{h=A}},t.unstable_scheduleCallback=function(z,I,A){var G=t.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?G+A:G):A=G,z){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=A+ee,z={id:u++,callback:I,priorityLevel:z,startTime:A,expirationTime:ee,sortIndex:-1},A>G?(z.sortIndex=A,s(m,z),n(c)===null&&z===n(m)&&(v?(g(E),E=-1):v=!0,Oi(b,A-G))):(z.sortIndex=ee,s(c,z),j||w||(j=!0,Pi(B))),z},t.unstable_shouldYield=Me,t.unstable_wrapCallback=function(z){var I=h;return function(){var A=h;h=I;try{return z.apply(this,arguments)}finally{h=A}}}})(lc);ac.exports=lc;var Um=ac.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m=S,we=Um;function N(t){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)s+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var oc=new Set,Ys={};function Ut(t,s){us(t,s),us(t+"Capture",s)}function us(t,s){for(Ys[t]=s,t=0;t<s.length;t++)oc.add(s[t])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kr=Object.prototype.hasOwnProperty,Vm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vl={},bl={};function qm(t){return kr.call(bl,t)?!0:kr.call(vl,t)?!1:Vm.test(t)?bl[t]=!0:(vl[t]=!0,!1)}function Ym(t,s,n,i){if(n!==null&&n.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Gm(t,s,n,i){if(s===null||typeof s>"u"||Ym(t,s,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function he(t,s,n,i,r,a,l){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=s,this.sanitizeURL=a,this.removeEmptyString=l}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){re[t]=new he(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var s=t[0];re[s]=new he(s,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){re[t]=new he(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){re[t]=new he(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){re[t]=new he(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){re[t]=new he(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){re[t]=new he(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){re[t]=new he(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){re[t]=new he(t,5,!1,t.toLowerCase(),null,!1,!1)});var Na=/[\-:]([a-z])/g;function ka(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var s=t.replace(Na,ka);re[s]=new he(s,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var s=t.replace(Na,ka);re[s]=new he(s,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var s=t.replace(Na,ka);re[s]=new he(s,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){re[t]=new he(t,1,!1,t.toLowerCase(),null,!1,!1)});re.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){re[t]=new he(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sa(t,s,n,i){var r=re.hasOwnProperty(s)?re[s]:null;(r!==null?r.type!==0:i||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(Gm(s,n,r,i)&&(n=null),i||r===null?qm(s)&&(n===null?t.removeAttribute(s):t.setAttribute(s,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(s=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(s):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,s,n):t.setAttribute(s,n))))}var Je=$m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Nn=Symbol.for("react.element"),Gt=Symbol.for("react.portal"),Qt=Symbol.for("react.fragment"),Ba=Symbol.for("react.strict_mode"),Sr=Symbol.for("react.profiler"),cc=Symbol.for("react.provider"),dc=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Br=Symbol.for("react.suspense"),Dr=Symbol.for("react.suspense_list"),Ca=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),mc=Symbol.for("react.offscreen"),wl=Symbol.iterator;function Ss(t){return t===null||typeof t!="object"?null:(t=wl&&t[wl]||t["@@iterator"],typeof t=="function"?t:null)}var V=Object.assign,$i;function As(t){if($i===void 0)try{throw Error()}catch(n){var s=n.stack.trim().match(/\n( *(at )?)/);$i=s&&s[1]||""}return`
`+$i+t}var Vi=!1;function qi(t,s){if(!t||Vi)return"";Vi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(m){var i=m}Reflect.construct(t,[],s)}else{try{s.call()}catch(m){i=m}t.call(s.prototype)}else{try{throw Error()}catch(m){i=m}t()}}catch(m){if(m&&i&&typeof m.stack=="string"){for(var r=m.stack.split(`
`),a=i.stack.split(`
`),l=r.length-1,o=a.length-1;1<=l&&0<=o&&r[l]!==a[o];)o--;for(;1<=l&&0<=o;l--,o--)if(r[l]!==a[o]){if(l!==1||o!==1)do if(l--,o--,0>o||r[l]!==a[o]){var c=`
`+r[l].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=l&&0<=o);break}}}finally{Vi=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?As(t):""}function Qm(t){switch(t.tag){case 5:return As(t.type);case 16:return As("Lazy");case 13:return As("Suspense");case 19:return As("SuspenseList");case 0:case 2:case 15:return t=qi(t.type,!1),t;case 11:return t=qi(t.type.render,!1),t;case 1:return t=qi(t.type,!0),t;default:return""}}function Cr(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qt:return"Fragment";case Gt:return"Portal";case Sr:return"Profiler";case Ba:return"StrictMode";case Br:return"Suspense";case Dr:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case dc:return(t.displayName||"Context")+".Consumer";case cc:return(t._context.displayName||"Context")+".Provider";case Da:var s=t.render;return t=t.displayName,t||(t=s.displayName||s.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ca:return s=t.displayName||null,s!==null?s:Cr(t.type)||"Memo";case tt:s=t._payload,t=t._init;try{return Cr(t(s))}catch{}}return null}function Km(t){var s=t.type;switch(t.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=s.render,t=t.displayName||t.name||"",s.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cr(s);case 8:return s===Ba?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ft(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function uc(t){var s=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Xm(t){var s=uc(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,s),i=""+t[s];if(!t.hasOwnProperty(s)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,a=n.set;return Object.defineProperty(t,s,{configurable:!0,get:function(){return r.call(this)},set:function(l){i=""+l,a.call(this,l)}}),Object.defineProperty(t,s,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(l){i=""+l},stopTracking:function(){t._valueTracker=null,delete t[s]}}}}function kn(t){t._valueTracker||(t._valueTracker=Xm(t))}function hc(t){if(!t)return!1;var s=t._valueTracker;if(!s)return!0;var n=s.getValue(),i="";return t&&(i=uc(t)?t.checked?"true":"false":t.value),t=i,t!==n?(s.setValue(t),!0):!1}function Zn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zr(t,s){var n=s.checked;return V({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Nl(t,s){var n=s.defaultValue==null?"":s.defaultValue,i=s.checked!=null?s.checked:s.defaultChecked;n=ft(s.value!=null?s.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function pc(t,s){s=s.checked,s!=null&&Sa(t,"checked",s,!1)}function Wr(t,s){pc(t,s);var n=ft(s.value),i=s.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}s.hasOwnProperty("value")?Mr(t,s.type,n):s.hasOwnProperty("defaultValue")&&Mr(t,s.type,ft(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(t.defaultChecked=!!s.defaultChecked)}function kl(t,s,n){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var i=s.type;if(!(i!=="submit"&&i!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+t._wrapperState.initialValue,n||s===t.value||(t.value=s),t.defaultValue=s}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Mr(t,s,n){(s!=="number"||Zn(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ts=Array.isArray;function as(t,s,n,i){if(t=t.options,s){s={};for(var r=0;r<n.length;r++)s["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=s.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ft(n),s=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}s!==null||t[r].disabled||(s=t[r])}s!==null&&(s.selected=!0)}}function Er(t,s){if(s.dangerouslySetInnerHTML!=null)throw Error(N(91));return V({},s,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sl(t,s){var n=s.value;if(n==null){if(n=s.children,s=s.defaultValue,n!=null){if(s!=null)throw Error(N(92));if(Ts(n)){if(1<n.length)throw Error(N(93));n=n[0]}s=n}s==null&&(s=""),n=s}t._wrapperState={initialValue:ft(n)}}function gc(t,s){var n=ft(s.value),i=ft(s.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),s.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Bl(t){var s=t.textContent;s===t._wrapperState.initialValue&&s!==""&&s!==null&&(t.value=s)}function xc(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ir(t,s){return t==null||t==="http://www.w3.org/1999/xhtml"?xc(s):t==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Sn,fc=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(s,n,i,r)})}:t}(function(t,s){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=s;else{for(Sn=Sn||document.createElement("div"),Sn.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Sn.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;s.firstChild;)t.appendChild(s.firstChild)}});function Gs(t,s){if(s){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=s;return}}t.textContent=s}var Rs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zm=["Webkit","ms","Moz","O"];Object.keys(Rs).forEach(function(t){Zm.forEach(function(s){s=s+t.charAt(0).toUpperCase()+t.substring(1),Rs[s]=Rs[t]})});function yc(t,s,n){return s==null||typeof s=="boolean"||s===""?"":n||typeof s!="number"||s===0||Rs.hasOwnProperty(t)&&Rs[t]?(""+s).trim():s+"px"}function jc(t,s){t=t.style;for(var n in s)if(s.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=yc(n,s[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Jm=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ar(t,s){if(s){if(Jm[t]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(N(137,t));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(N(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(N(61))}if(s.style!=null&&typeof s.style!="object")throw Error(N(62))}}function Tr(t,s){if(t.indexOf("-")===-1)return typeof s.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fr=null;function za(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Lr=null,ls=null,os=null;function Dl(t){if(t=xn(t)){if(typeof Lr!="function")throw Error(N(280));var s=t.stateNode;s&&(s=Ci(s),Lr(t.stateNode,t.type,s))}}function vc(t){ls?os?os.push(t):os=[t]:ls=t}function bc(){if(ls){var t=ls,s=os;if(os=ls=null,Dl(t),s)for(t=0;t<s.length;t++)Dl(s[t])}}function wc(t,s){return t(s)}function Nc(){}var Yi=!1;function kc(t,s,n){if(Yi)return t(s,n);Yi=!0;try{return wc(t,s,n)}finally{Yi=!1,(ls!==null||os!==null)&&(Nc(),bc())}}function Qs(t,s){var n=t.stateNode;if(n===null)return null;var i=Ci(n);if(i===null)return null;n=i[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(N(231,s,typeof n));return n}var Rr=!1;if(Qe)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){Rr=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{Rr=!1}function eu(t,s,n,i,r,a,l,o,c){var m=Array.prototype.slice.call(arguments,3);try{s.apply(n,m)}catch(u){this.onError(u)}}var Hs=!1,Jn=null,ei=!1,Hr=null,tu={onError:function(t){Hs=!0,Jn=t}};function su(t,s,n,i,r,a,l,o,c){Hs=!1,Jn=null,eu.apply(tu,arguments)}function nu(t,s,n,i,r,a,l,o,c){if(su.apply(this,arguments),Hs){if(Hs){var m=Jn;Hs=!1,Jn=null}else throw Error(N(198));ei||(ei=!0,Hr=m)}}function $t(t){var s=t,n=t;if(t.alternate)for(;s.return;)s=s.return;else{t=s;do s=t,s.flags&4098&&(n=s.return),t=s.return;while(t)}return s.tag===3?n:null}function Sc(t){if(t.tag===13){var s=t.memoizedState;if(s===null&&(t=t.alternate,t!==null&&(s=t.memoizedState)),s!==null)return s.dehydrated}return null}function Cl(t){if($t(t)!==t)throw Error(N(188))}function iu(t){var s=t.alternate;if(!s){if(s=$t(t),s===null)throw Error(N(188));return s!==t?null:t}for(var n=t,i=s;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return Cl(r),t;if(a===i)return Cl(r),s;a=a.sibling}throw Error(N(188))}if(n.return!==i.return)n=r,i=a;else{for(var l=!1,o=r.child;o;){if(o===n){l=!0,n=r,i=a;break}if(o===i){l=!0,i=r,n=a;break}o=o.sibling}if(!l){for(o=a.child;o;){if(o===n){l=!0,n=a,i=r;break}if(o===i){l=!0,i=a,n=r;break}o=o.sibling}if(!l)throw Error(N(189))}}if(n.alternate!==i)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?t:s}function Bc(t){return t=iu(t),t!==null?Dc(t):null}function Dc(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var s=Dc(t);if(s!==null)return s;t=t.sibling}return null}var Cc=we.unstable_scheduleCallback,zl=we.unstable_cancelCallback,ru=we.unstable_shouldYield,au=we.unstable_requestPaint,Q=we.unstable_now,lu=we.unstable_getCurrentPriorityLevel,Wa=we.unstable_ImmediatePriority,zc=we.unstable_UserBlockingPriority,ti=we.unstable_NormalPriority,ou=we.unstable_LowPriority,Wc=we.unstable_IdlePriority,ki=null,_e=null;function cu(t){if(_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(ki,t,void 0,(t.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:uu,du=Math.log,mu=Math.LN2;function uu(t){return t>>>=0,t===0?32:31-(du(t)/mu|0)|0}var Bn=64,Dn=4194304;function Fs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function si(t,s){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,a=t.pingedLanes,l=n&268435455;if(l!==0){var o=l&~r;o!==0?i=Fs(o):(a&=l,a!==0&&(i=Fs(a)))}else l=n&~r,l!==0?i=Fs(l):a!==0&&(i=Fs(a));if(i===0)return 0;if(s!==0&&s!==i&&!(s&r)&&(r=i&-i,a=s&-s,r>=a||r===16&&(a&4194240)!==0))return s;if(i&4&&(i|=n&16),s=t.entangledLanes,s!==0)for(t=t.entanglements,s&=i;0<s;)n=31-Fe(s),r=1<<n,i|=t[n],s&=~r;return i}function hu(t,s){switch(t){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pu(t,s){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,a=t.pendingLanes;0<a;){var l=31-Fe(a),o=1<<l,c=r[l];c===-1?(!(o&n)||o&i)&&(r[l]=hu(o,s)):c<=s&&(t.expiredLanes|=o),a&=~o}}function Pr(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Mc(){var t=Bn;return Bn<<=1,!(Bn&4194240)&&(Bn=64),t}function Gi(t){for(var s=[],n=0;31>n;n++)s.push(t);return s}function pn(t,s,n){t.pendingLanes|=s,s!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,s=31-Fe(s),t[s]=n}function gu(t,s){var n=t.pendingLanes&~s;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=s,t.mutableReadLanes&=s,t.entangledLanes&=s,s=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Fe(n),a=1<<r;s[r]=0,i[r]=-1,t[r]=-1,n&=~a}}function Ma(t,s){var n=t.entangledLanes|=s;for(t=t.entanglements;n;){var i=31-Fe(n),r=1<<i;r&s|t[i]&s&&(t[i]|=s),n&=~r}}var R=0;function Ec(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ic,Ea,Ac,Tc,Fc,Or=!1,Cn=[],ot=null,ct=null,dt=null,Ks=new Map,Xs=new Map,nt=[],xu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wl(t,s){switch(t){case"focusin":case"focusout":ot=null;break;case"dragenter":case"dragleave":ct=null;break;case"mouseover":case"mouseout":dt=null;break;case"pointerover":case"pointerout":Ks.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xs.delete(s.pointerId)}}function Ds(t,s,n,i,r,a){return t===null||t.nativeEvent!==a?(t={blockedOn:s,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},s!==null&&(s=xn(s),s!==null&&Ea(s)),t):(t.eventSystemFlags|=i,s=t.targetContainers,r!==null&&s.indexOf(r)===-1&&s.push(r),t)}function fu(t,s,n,i,r){switch(s){case"focusin":return ot=Ds(ot,t,s,n,i,r),!0;case"dragenter":return ct=Ds(ct,t,s,n,i,r),!0;case"mouseover":return dt=Ds(dt,t,s,n,i,r),!0;case"pointerover":var a=r.pointerId;return Ks.set(a,Ds(Ks.get(a)||null,t,s,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,Xs.set(a,Ds(Xs.get(a)||null,t,s,n,i,r)),!0}return!1}function Lc(t){var s=It(t.target);if(s!==null){var n=$t(s);if(n!==null){if(s=n.tag,s===13){if(s=Sc(n),s!==null){t.blockedOn=s,Fc(t.priority,function(){Ac(n)});return}}else if(s===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _n(t){if(t.blockedOn!==null)return!1;for(var s=t.targetContainers;0<s.length;){var n=_r(t.domEventName,t.eventSystemFlags,s[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Fr=i,n.target.dispatchEvent(i),Fr=null}else return s=xn(n),s!==null&&Ea(s),t.blockedOn=n,!1;s.shift()}return!0}function Ml(t,s,n){_n(t)&&n.delete(s)}function yu(){Or=!1,ot!==null&&_n(ot)&&(ot=null),ct!==null&&_n(ct)&&(ct=null),dt!==null&&_n(dt)&&(dt=null),Ks.forEach(Ml),Xs.forEach(Ml)}function Cs(t,s){t.blockedOn===s&&(t.blockedOn=null,Or||(Or=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,yu)))}function Zs(t){function s(r){return Cs(r,t)}if(0<Cn.length){Cs(Cn[0],t);for(var n=1;n<Cn.length;n++){var i=Cn[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ot!==null&&Cs(ot,t),ct!==null&&Cs(ct,t),dt!==null&&Cs(dt,t),Ks.forEach(s),Xs.forEach(s),n=0;n<nt.length;n++)i=nt[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<nt.length&&(n=nt[0],n.blockedOn===null);)Lc(n),n.blockedOn===null&&nt.shift()}var cs=Je.ReactCurrentBatchConfig,ni=!0;function ju(t,s,n,i){var r=R,a=cs.transition;cs.transition=null;try{R=1,Ia(t,s,n,i)}finally{R=r,cs.transition=a}}function vu(t,s,n,i){var r=R,a=cs.transition;cs.transition=null;try{R=4,Ia(t,s,n,i)}finally{R=r,cs.transition=a}}function Ia(t,s,n,i){if(ni){var r=_r(t,s,n,i);if(r===null)ir(t,s,i,ii,n),Wl(t,i);else if(fu(r,t,s,n,i))i.stopPropagation();else if(Wl(t,i),s&4&&-1<xu.indexOf(t)){for(;r!==null;){var a=xn(r);if(a!==null&&Ic(a),a=_r(t,s,n,i),a===null&&ir(t,s,i,ii,n),a===r)break;r=a}r!==null&&i.stopPropagation()}else ir(t,s,i,null,n)}}var ii=null;function _r(t,s,n,i){if(ii=null,t=za(i),t=It(t),t!==null)if(s=$t(t),s===null)t=null;else if(n=s.tag,n===13){if(t=Sc(s),t!==null)return t;t=null}else if(n===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;t=null}else s!==t&&(t=null);return ii=t,null}function Rc(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lu()){case Wa:return 1;case zc:return 4;case ti:case ou:return 16;case Wc:return 536870912;default:return 16}default:return 16}}var rt=null,Aa=null,Un=null;function Hc(){if(Un)return Un;var t,s=Aa,n=s.length,i,r="value"in rt?rt.value:rt.textContent,a=r.length;for(t=0;t<n&&s[t]===r[t];t++);var l=n-t;for(i=1;i<=l&&s[n-i]===r[a-i];i++);return Un=r.slice(t,1<i?1-i:void 0)}function $n(t){var s=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&s===13&&(t=13)):t=s,t===10&&(t=13),32<=t||t===13?t:0}function zn(){return!0}function El(){return!1}function ke(t){function s(n,i,r,a,l){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?zn:El,this.isPropagationStopped=El,this}return V(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zn)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zn)},persist:function(){},isPersistent:zn}),s}var vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ta=ke(vs),gn=V({},vs,{view:0,detail:0}),bu=ke(gn),Qi,Ki,zs,Si=V({},gn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fa,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zs&&(zs&&t.type==="mousemove"?(Qi=t.screenX-zs.screenX,Ki=t.screenY-zs.screenY):Ki=Qi=0,zs=t),Qi)},movementY:function(t){return"movementY"in t?t.movementY:Ki}}),Il=ke(Si),wu=V({},Si,{dataTransfer:0}),Nu=ke(wu),ku=V({},gn,{relatedTarget:0}),Xi=ke(ku),Su=V({},vs,{animationName:0,elapsedTime:0,pseudoElement:0}),Bu=ke(Su),Du=V({},vs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Cu=ke(Du),zu=V({},vs,{data:0}),Al=ke(zu),Wu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Eu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Iu(t){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(t):(t=Eu[t])?!!s[t]:!1}function Fa(){return Iu}var Au=V({},gn,{key:function(t){if(t.key){var s=Wu[t.key]||t.key;if(s!=="Unidentified")return s}return t.type==="keypress"?(t=$n(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Mu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fa,charCode:function(t){return t.type==="keypress"?$n(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$n(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Tu=ke(Au),Fu=V({},Si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tl=ke(Fu),Lu=V({},gn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fa}),Ru=ke(Lu),Hu=V({},vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pu=ke(Hu),Ou=V({},Si,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_u=ke(Ou),Uu=[9,13,27,32],La=Qe&&"CompositionEvent"in window,Ps=null;Qe&&"documentMode"in document&&(Ps=document.documentMode);var $u=Qe&&"TextEvent"in window&&!Ps,Pc=Qe&&(!La||Ps&&8<Ps&&11>=Ps),Fl=" ",Ll=!1;function Oc(t,s){switch(t){case"keyup":return Uu.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _c(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Kt=!1;function Vu(t,s){switch(t){case"compositionend":return _c(s);case"keypress":return s.which!==32?null:(Ll=!0,Fl);case"textInput":return t=s.data,t===Fl&&Ll?null:t;default:return null}}function qu(t,s){if(Kt)return t==="compositionend"||!La&&Oc(t,s)?(t=Hc(),Un=Aa=rt=null,Kt=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Pc&&s.locale!=="ko"?null:s.data;default:return null}}var Yu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rl(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s==="input"?!!Yu[t.type]:s==="textarea"}function Uc(t,s,n,i){vc(i),s=ri(s,"onChange"),0<s.length&&(n=new Ta("onChange","change",null,n,i),t.push({event:n,listeners:s}))}var Os=null,Js=null;function Gu(t){ed(t,0)}function Bi(t){var s=Jt(t);if(hc(s))return t}function Qu(t,s){if(t==="change")return s}var $c=!1;if(Qe){var Zi;if(Qe){var Ji="oninput"in document;if(!Ji){var Hl=document.createElement("div");Hl.setAttribute("oninput","return;"),Ji=typeof Hl.oninput=="function"}Zi=Ji}else Zi=!1;$c=Zi&&(!document.documentMode||9<document.documentMode)}function Pl(){Os&&(Os.detachEvent("onpropertychange",Vc),Js=Os=null)}function Vc(t){if(t.propertyName==="value"&&Bi(Js)){var s=[];Uc(s,Js,t,za(t)),kc(Gu,s)}}function Ku(t,s,n){t==="focusin"?(Pl(),Os=s,Js=n,Os.attachEvent("onpropertychange",Vc)):t==="focusout"&&Pl()}function Xu(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bi(Js)}function Zu(t,s){if(t==="click")return Bi(s)}function Ju(t,s){if(t==="input"||t==="change")return Bi(s)}function eh(t,s){return t===s&&(t!==0||1/t===1/s)||t!==t&&s!==s}var Re=typeof Object.is=="function"?Object.is:eh;function en(t,s){if(Re(t,s))return!0;if(typeof t!="object"||t===null||typeof s!="object"||s===null)return!1;var n=Object.keys(t),i=Object.keys(s);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!kr.call(s,r)||!Re(t[r],s[r]))return!1}return!0}function Ol(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _l(t,s){var n=Ol(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=s&&i>=s)return{node:n,offset:s-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ol(n)}}function qc(t,s){return t&&s?t===s?!0:t&&t.nodeType===3?!1:s&&s.nodeType===3?qc(t,s.parentNode):"contains"in t?t.contains(s):t.compareDocumentPosition?!!(t.compareDocumentPosition(s)&16):!1:!1}function Yc(){for(var t=window,s=Zn();s instanceof t.HTMLIFrameElement;){try{var n=typeof s.contentWindow.location.href=="string"}catch{n=!1}if(n)t=s.contentWindow;else break;s=Zn(t.document)}return s}function Ra(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s&&(s==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||s==="textarea"||t.contentEditable==="true")}function th(t){var s=Yc(),n=t.focusedElem,i=t.selectionRange;if(s!==n&&n&&n.ownerDocument&&qc(n.ownerDocument.documentElement,n)){if(i!==null&&Ra(n)){if(s=i.start,t=i.end,t===void 0&&(t=s),"selectionStart"in n)n.selectionStart=s,n.selectionEnd=Math.min(t,n.value.length);else if(t=(s=n.ownerDocument||document)&&s.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,a=Math.min(i.start,r);i=i.end===void 0?a:Math.min(i.end,r),!t.extend&&a>i&&(r=i,i=a,a=r),r=_l(n,a);var l=_l(n,i);r&&l&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(s=s.createRange(),s.setStart(r.node,r.offset),t.removeAllRanges(),a>i?(t.addRange(s),t.extend(l.node,l.offset)):(s.setEnd(l.node,l.offset),t.addRange(s)))}}for(s=[],t=n;t=t.parentNode;)t.nodeType===1&&s.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<s.length;n++)t=s[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var sh=Qe&&"documentMode"in document&&11>=document.documentMode,Xt=null,Ur=null,_s=null,$r=!1;function Ul(t,s,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$r||Xt==null||Xt!==Zn(i)||(i=Xt,"selectionStart"in i&&Ra(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),_s&&en(_s,i)||(_s=i,i=ri(Ur,"onSelect"),0<i.length&&(s=new Ta("onSelect","select",null,s,n),t.push({event:s,listeners:i}),s.target=Xt)))}function Wn(t,s){var n={};return n[t.toLowerCase()]=s.toLowerCase(),n["Webkit"+t]="webkit"+s,n["Moz"+t]="moz"+s,n}var Zt={animationend:Wn("Animation","AnimationEnd"),animationiteration:Wn("Animation","AnimationIteration"),animationstart:Wn("Animation","AnimationStart"),transitionend:Wn("Transition","TransitionEnd")},er={},Gc={};Qe&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Zt.animationend.animation,delete Zt.animationiteration.animation,delete Zt.animationstart.animation),"TransitionEvent"in window||delete Zt.transitionend.transition);function Di(t){if(er[t])return er[t];if(!Zt[t])return t;var s=Zt[t],n;for(n in s)if(s.hasOwnProperty(n)&&n in Gc)return er[t]=s[n];return t}var Qc=Di("animationend"),Kc=Di("animationiteration"),Xc=Di("animationstart"),Zc=Di("transitionend"),Jc=new Map,$l="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jt(t,s){Jc.set(t,s),Ut(s,[t])}for(var tr=0;tr<$l.length;tr++){var sr=$l[tr],nh=sr.toLowerCase(),ih=sr[0].toUpperCase()+sr.slice(1);jt(nh,"on"+ih)}jt(Qc,"onAnimationEnd");jt(Kc,"onAnimationIteration");jt(Xc,"onAnimationStart");jt("dblclick","onDoubleClick");jt("focusin","onFocus");jt("focusout","onBlur");jt(Zc,"onTransitionEnd");us("onMouseEnter",["mouseout","mouseover"]);us("onMouseLeave",["mouseout","mouseover"]);us("onPointerEnter",["pointerout","pointerover"]);us("onPointerLeave",["pointerout","pointerover"]);Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ls="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ls));function Vl(t,s,n){var i=t.type||"unknown-event";t.currentTarget=n,nu(i,s,void 0,t),t.currentTarget=null}function ed(t,s){s=(s&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var a=void 0;if(s)for(var l=i.length-1;0<=l;l--){var o=i[l],c=o.instance,m=o.currentTarget;if(o=o.listener,c!==a&&r.isPropagationStopped())break e;Vl(r,o,m),a=c}else for(l=0;l<i.length;l++){if(o=i[l],c=o.instance,m=o.currentTarget,o=o.listener,c!==a&&r.isPropagationStopped())break e;Vl(r,o,m),a=c}}}if(ei)throw t=Hr,ei=!1,Hr=null,t}function P(t,s){var n=s[Qr];n===void 0&&(n=s[Qr]=new Set);var i=t+"__bubble";n.has(i)||(td(s,t,2,!1),n.add(i))}function nr(t,s,n){var i=0;s&&(i|=4),td(n,t,i,s)}var Mn="_reactListening"+Math.random().toString(36).slice(2);function tn(t){if(!t[Mn]){t[Mn]=!0,oc.forEach(function(n){n!=="selectionchange"&&(rh.has(n)||nr(n,!1,t),nr(n,!0,t))});var s=t.nodeType===9?t:t.ownerDocument;s===null||s[Mn]||(s[Mn]=!0,nr("selectionchange",!1,s))}}function td(t,s,n,i){switch(Rc(s)){case 1:var r=ju;break;case 4:r=vu;break;default:r=Ia}n=r.bind(null,s,n,t),r=void 0,!Rr||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(s,n,{capture:!0,passive:r}):t.addEventListener(s,n,!0):r!==void 0?t.addEventListener(s,n,{passive:r}):t.addEventListener(s,n,!1)}function ir(t,s,n,i,r){var a=i;if(!(s&1)&&!(s&2)&&i!==null)e:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(l===4)for(l=i.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;l=l.return}for(;o!==null;){if(l=It(o),l===null)return;if(c=l.tag,c===5||c===6){i=a=l;continue e}o=o.parentNode}}i=i.return}kc(function(){var m=a,u=za(n),y=[];e:{var h=Jc.get(t);if(h!==void 0){var w=Ta,j=t;switch(t){case"keypress":if($n(n)===0)break e;case"keydown":case"keyup":w=Tu;break;case"focusin":j="focus",w=Xi;break;case"focusout":j="blur",w=Xi;break;case"beforeblur":case"afterblur":w=Xi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Il;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Nu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Ru;break;case Qc:case Kc:case Xc:w=Bu;break;case Zc:w=Pu;break;case"scroll":w=bu;break;case"wheel":w=_u;break;case"copy":case"cut":case"paste":w=Cu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Tl}var v=(s&4)!==0,k=!v&&t==="scroll",g=v?h!==null?h+"Capture":null:h;v=[];for(var p=m,f;p!==null;){f=p;var b=f.stateNode;if(f.tag===5&&b!==null&&(f=b,g!==null&&(b=Qs(p,g),b!=null&&v.push(sn(p,b,f)))),k)break;p=p.return}0<v.length&&(h=new w(h,j,null,n,u),y.push({event:h,listeners:v}))}}if(!(s&7)){e:{if(h=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",h&&n!==Fr&&(j=n.relatedTarget||n.fromElement)&&(It(j)||j[Ke]))break e;if((w||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,w?(j=n.relatedTarget||n.toElement,w=m,j=j?It(j):null,j!==null&&(k=$t(j),j!==k||j.tag!==5&&j.tag!==6)&&(j=null)):(w=null,j=m),w!==j)){if(v=Il,b="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(v=Tl,b="onPointerLeave",g="onPointerEnter",p="pointer"),k=w==null?h:Jt(w),f=j==null?h:Jt(j),h=new v(b,p+"leave",w,n,u),h.target=k,h.relatedTarget=f,b=null,It(u)===m&&(v=new v(g,p+"enter",j,n,u),v.target=f,v.relatedTarget=k,b=v),k=b,w&&j)t:{for(v=w,g=j,p=0,f=v;f;f=Yt(f))p++;for(f=0,b=g;b;b=Yt(b))f++;for(;0<p-f;)v=Yt(v),p--;for(;0<f-p;)g=Yt(g),f--;for(;p--;){if(v===g||g!==null&&v===g.alternate)break t;v=Yt(v),g=Yt(g)}v=null}else v=null;w!==null&&ql(y,h,w,v,!1),j!==null&&k!==null&&ql(y,k,j,v,!0)}}e:{if(h=m?Jt(m):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var B=Qu;else if(Rl(h))if($c)B=Ju;else{B=Xu;var W=Ku}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(B=Zu);if(B&&(B=B(t,m))){Uc(y,B,n,u);break e}W&&W(t,h,m),t==="focusout"&&(W=h._wrapperState)&&W.controlled&&h.type==="number"&&Mr(h,"number",h.value)}switch(W=m?Jt(m):window,t){case"focusin":(Rl(W)||W.contentEditable==="true")&&(Xt=W,Ur=m,_s=null);break;case"focusout":_s=Ur=Xt=null;break;case"mousedown":$r=!0;break;case"contextmenu":case"mouseup":case"dragend":$r=!1,Ul(y,n,u);break;case"selectionchange":if(sh)break;case"keydown":case"keyup":Ul(y,n,u)}var M;if(La)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Kt?Oc(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Pc&&n.locale!=="ko"&&(Kt||E!=="onCompositionStart"?E==="onCompositionEnd"&&Kt&&(M=Hc()):(rt=u,Aa="value"in rt?rt.value:rt.textContent,Kt=!0)),W=ri(m,E),0<W.length&&(E=new Al(E,t,null,n,u),y.push({event:E,listeners:W}),M?E.data=M:(M=_c(n),M!==null&&(E.data=M)))),(M=$u?Vu(t,n):qu(t,n))&&(m=ri(m,"onBeforeInput"),0<m.length&&(u=new Al("onBeforeInput","beforeinput",null,n,u),y.push({event:u,listeners:m}),u.data=M))}ed(y,s)})}function sn(t,s,n){return{instance:t,listener:s,currentTarget:n}}function ri(t,s){for(var n=s+"Capture",i=[];t!==null;){var r=t,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=Qs(t,n),a!=null&&i.unshift(sn(t,a,r)),a=Qs(t,s),a!=null&&i.push(sn(t,a,r))),t=t.return}return i}function Yt(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ql(t,s,n,i,r){for(var a=s._reactName,l=[];n!==null&&n!==i;){var o=n,c=o.alternate,m=o.stateNode;if(c!==null&&c===i)break;o.tag===5&&m!==null&&(o=m,r?(c=Qs(n,a),c!=null&&l.unshift(sn(n,c,o))):r||(c=Qs(n,a),c!=null&&l.push(sn(n,c,o)))),n=n.return}l.length!==0&&t.push({event:s,listeners:l})}var ah=/\r\n?/g,lh=/\u0000|\uFFFD/g;function Yl(t){return(typeof t=="string"?t:""+t).replace(ah,`
`).replace(lh,"")}function En(t,s,n){if(s=Yl(s),Yl(t)!==s&&n)throw Error(N(425))}function ai(){}var Vr=null,qr=null;function Yr(t,s){return t==="textarea"||t==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Gr=typeof setTimeout=="function"?setTimeout:void 0,oh=typeof clearTimeout=="function"?clearTimeout:void 0,Gl=typeof Promise=="function"?Promise:void 0,ch=typeof queueMicrotask=="function"?queueMicrotask:typeof Gl<"u"?function(t){return Gl.resolve(null).then(t).catch(dh)}:Gr;function dh(t){setTimeout(function(){throw t})}function rr(t,s){var n=s,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Zs(s);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Zs(s)}function mt(t){for(;t!=null;t=t.nextSibling){var s=t.nodeType;if(s===1||s===3)break;if(s===8){if(s=t.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return t}function Ql(t){t=t.previousSibling;for(var s=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(s===0)return t;s--}else n==="/$"&&s++}t=t.previousSibling}return null}var bs=Math.random().toString(36).slice(2),Oe="__reactFiber$"+bs,nn="__reactProps$"+bs,Ke="__reactContainer$"+bs,Qr="__reactEvents$"+bs,mh="__reactListeners$"+bs,uh="__reactHandles$"+bs;function It(t){var s=t[Oe];if(s)return s;for(var n=t.parentNode;n;){if(s=n[Ke]||n[Oe]){if(n=s.alternate,s.child!==null||n!==null&&n.child!==null)for(t=Ql(t);t!==null;){if(n=t[Oe])return n;t=Ql(t)}return s}t=n,n=t.parentNode}return null}function xn(t){return t=t[Oe]||t[Ke],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Jt(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(N(33))}function Ci(t){return t[nn]||null}var Kr=[],es=-1;function vt(t){return{current:t}}function O(t){0>es||(t.current=Kr[es],Kr[es]=null,es--)}function H(t,s){es++,Kr[es]=t.current,t.current=s}var yt={},ce=vt(yt),xe=vt(!1),Rt=yt;function hs(t,s){var n=t.type.contextTypes;if(!n)return yt;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===s)return i.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in n)r[a]=s[a];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=r),r}function fe(t){return t=t.childContextTypes,t!=null}function li(){O(xe),O(ce)}function Kl(t,s,n){if(ce.current!==yt)throw Error(N(168));H(ce,s),H(xe,n)}function sd(t,s,n){var i=t.stateNode;if(s=s.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in s))throw Error(N(108,Km(t)||"Unknown",r));return V({},n,i)}function oi(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yt,Rt=ce.current,H(ce,t),H(xe,xe.current),!0}function Xl(t,s,n){var i=t.stateNode;if(!i)throw Error(N(169));n?(t=sd(t,s,Rt),i.__reactInternalMemoizedMergedChildContext=t,O(xe),O(ce),H(ce,t)):O(xe),H(xe,n)}var Ve=null,zi=!1,ar=!1;function nd(t){Ve===null?Ve=[t]:Ve.push(t)}function hh(t){zi=!0,nd(t)}function bt(){if(!ar&&Ve!==null){ar=!0;var t=0,s=R;try{var n=Ve;for(R=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ve=null,zi=!1}catch(r){throw Ve!==null&&(Ve=Ve.slice(t+1)),Cc(Wa,bt),r}finally{R=s,ar=!1}}return null}var ts=[],ss=0,ci=null,di=0,Se=[],Be=0,Ht=null,qe=1,Ye="";function Mt(t,s){ts[ss++]=di,ts[ss++]=ci,ci=t,di=s}function id(t,s,n){Se[Be++]=qe,Se[Be++]=Ye,Se[Be++]=Ht,Ht=t;var i=qe;t=Ye;var r=32-Fe(i)-1;i&=~(1<<r),n+=1;var a=32-Fe(s)+r;if(30<a){var l=r-r%5;a=(i&(1<<l)-1).toString(32),i>>=l,r-=l,qe=1<<32-Fe(s)+r|n<<r|i,Ye=a+t}else qe=1<<a|n<<r|i,Ye=t}function Ha(t){t.return!==null&&(Mt(t,1),id(t,1,0))}function Pa(t){for(;t===ci;)ci=ts[--ss],ts[ss]=null,di=ts[--ss],ts[ss]=null;for(;t===Ht;)Ht=Se[--Be],Se[Be]=null,Ye=Se[--Be],Se[Be]=null,qe=Se[--Be],Se[Be]=null}var be=null,ve=null,_=!1,Te=null;function rd(t,s){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=s,n.return=t,s=t.deletions,s===null?(t.deletions=[n],t.flags|=16):s.push(n)}function Zl(t,s){switch(t.tag){case 5:var n=t.type;return s=s.nodeType!==1||n.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(t.stateNode=s,be=t,ve=mt(s.firstChild),!0):!1;case 6:return s=t.pendingProps===""||s.nodeType!==3?null:s,s!==null?(t.stateNode=s,be=t,ve=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(n=Ht!==null?{id:qe,overflow:Ye}:null,t.memoizedState={dehydrated:s,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=s,n.return=t,t.child=n,be=t,ve=null,!0):!1;default:return!1}}function Xr(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zr(t){if(_){var s=ve;if(s){var n=s;if(!Zl(t,s)){if(Xr(t))throw Error(N(418));s=mt(n.nextSibling);var i=be;s&&Zl(t,s)?rd(i,n):(t.flags=t.flags&-4097|2,_=!1,be=t)}}else{if(Xr(t))throw Error(N(418));t.flags=t.flags&-4097|2,_=!1,be=t}}}function Jl(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;be=t}function In(t){if(t!==be)return!1;if(!_)return Jl(t),_=!0,!1;var s;if((s=t.tag!==3)&&!(s=t.tag!==5)&&(s=t.type,s=s!=="head"&&s!=="body"&&!Yr(t.type,t.memoizedProps)),s&&(s=ve)){if(Xr(t))throw ad(),Error(N(418));for(;s;)rd(t,s),s=mt(s.nextSibling)}if(Jl(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(N(317));e:{for(t=t.nextSibling,s=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(s===0){ve=mt(t.nextSibling);break e}s--}else n!=="$"&&n!=="$!"&&n!=="$?"||s++}t=t.nextSibling}ve=null}}else ve=be?mt(t.stateNode.nextSibling):null;return!0}function ad(){for(var t=ve;t;)t=mt(t.nextSibling)}function ps(){ve=be=null,_=!1}function Oa(t){Te===null?Te=[t]:Te.push(t)}var ph=Je.ReactCurrentBatchConfig;function Ws(t,s,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var i=n.stateNode}if(!i)throw Error(N(147,t));var r=i,a=""+t;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===a?s.ref:(s=function(l){var o=r.refs;l===null?delete o[a]:o[a]=l},s._stringRef=a,s)}if(typeof t!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,t))}return t}function An(t,s){throw t=Object.prototype.toString.call(s),Error(N(31,t==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":t))}function eo(t){var s=t._init;return s(t._payload)}function ld(t){function s(g,p){if(t){var f=g.deletions;f===null?(g.deletions=[p],g.flags|=16):f.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)s(g,p),p=p.sibling;return null}function i(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function r(g,p){return g=gt(g,p),g.index=0,g.sibling=null,g}function a(g,p,f){return g.index=f,t?(f=g.alternate,f!==null?(f=f.index,f<p?(g.flags|=2,p):f):(g.flags|=2,p)):(g.flags|=1048576,p)}function l(g){return t&&g.alternate===null&&(g.flags|=2),g}function o(g,p,f,b){return p===null||p.tag!==6?(p=hr(f,g.mode,b),p.return=g,p):(p=r(p,f),p.return=g,p)}function c(g,p,f,b){var B=f.type;return B===Qt?u(g,p,f.props.children,b,f.key):p!==null&&(p.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===tt&&eo(B)===p.type)?(b=r(p,f.props),b.ref=Ws(g,p,f),b.return=g,b):(b=Xn(f.type,f.key,f.props,null,g.mode,b),b.ref=Ws(g,p,f),b.return=g,b)}function m(g,p,f,b){return p===null||p.tag!==4||p.stateNode.containerInfo!==f.containerInfo||p.stateNode.implementation!==f.implementation?(p=pr(f,g.mode,b),p.return=g,p):(p=r(p,f.children||[]),p.return=g,p)}function u(g,p,f,b,B){return p===null||p.tag!==7?(p=Lt(f,g.mode,b,B),p.return=g,p):(p=r(p,f),p.return=g,p)}function y(g,p,f){if(typeof p=="string"&&p!==""||typeof p=="number")return p=hr(""+p,g.mode,f),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Nn:return f=Xn(p.type,p.key,p.props,null,g.mode,f),f.ref=Ws(g,null,p),f.return=g,f;case Gt:return p=pr(p,g.mode,f),p.return=g,p;case tt:var b=p._init;return y(g,b(p._payload),f)}if(Ts(p)||Ss(p))return p=Lt(p,g.mode,f,null),p.return=g,p;An(g,p)}return null}function h(g,p,f,b){var B=p!==null?p.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return B!==null?null:o(g,p,""+f,b);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Nn:return f.key===B?c(g,p,f,b):null;case Gt:return f.key===B?m(g,p,f,b):null;case tt:return B=f._init,h(g,p,B(f._payload),b)}if(Ts(f)||Ss(f))return B!==null?null:u(g,p,f,b,null);An(g,f)}return null}function w(g,p,f,b,B){if(typeof b=="string"&&b!==""||typeof b=="number")return g=g.get(f)||null,o(p,g,""+b,B);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Nn:return g=g.get(b.key===null?f:b.key)||null,c(p,g,b,B);case Gt:return g=g.get(b.key===null?f:b.key)||null,m(p,g,b,B);case tt:var W=b._init;return w(g,p,f,W(b._payload),B)}if(Ts(b)||Ss(b))return g=g.get(f)||null,u(p,g,b,B,null);An(p,b)}return null}function j(g,p,f,b){for(var B=null,W=null,M=p,E=p=0,Y=null;M!==null&&E<f.length;E++){M.index>E?(Y=M,M=null):Y=M.sibling;var F=h(g,M,f[E],b);if(F===null){M===null&&(M=Y);break}t&&M&&F.alternate===null&&s(g,M),p=a(F,p,E),W===null?B=F:W.sibling=F,W=F,M=Y}if(E===f.length)return n(g,M),_&&Mt(g,E),B;if(M===null){for(;E<f.length;E++)M=y(g,f[E],b),M!==null&&(p=a(M,p,E),W===null?B=M:W.sibling=M,W=M);return _&&Mt(g,E),B}for(M=i(g,M);E<f.length;E++)Y=w(M,g,E,f[E],b),Y!==null&&(t&&Y.alternate!==null&&M.delete(Y.key===null?E:Y.key),p=a(Y,p,E),W===null?B=Y:W.sibling=Y,W=Y);return t&&M.forEach(function(Me){return s(g,Me)}),_&&Mt(g,E),B}function v(g,p,f,b){var B=Ss(f);if(typeof B!="function")throw Error(N(150));if(f=B.call(f),f==null)throw Error(N(151));for(var W=B=null,M=p,E=p=0,Y=null,F=f.next();M!==null&&!F.done;E++,F=f.next()){M.index>E?(Y=M,M=null):Y=M.sibling;var Me=h(g,M,F.value,b);if(Me===null){M===null&&(M=Y);break}t&&M&&Me.alternate===null&&s(g,M),p=a(Me,p,E),W===null?B=Me:W.sibling=Me,W=Me,M=Y}if(F.done)return n(g,M),_&&Mt(g,E),B;if(M===null){for(;!F.done;E++,F=f.next())F=y(g,F.value,b),F!==null&&(p=a(F,p,E),W===null?B=F:W.sibling=F,W=F);return _&&Mt(g,E),B}for(M=i(g,M);!F.done;E++,F=f.next())F=w(M,g,E,F.value,b),F!==null&&(t&&F.alternate!==null&&M.delete(F.key===null?E:F.key),p=a(F,p,E),W===null?B=F:W.sibling=F,W=F);return t&&M.forEach(function(Ns){return s(g,Ns)}),_&&Mt(g,E),B}function k(g,p,f,b){if(typeof f=="object"&&f!==null&&f.type===Qt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Nn:e:{for(var B=f.key,W=p;W!==null;){if(W.key===B){if(B=f.type,B===Qt){if(W.tag===7){n(g,W.sibling),p=r(W,f.props.children),p.return=g,g=p;break e}}else if(W.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===tt&&eo(B)===W.type){n(g,W.sibling),p=r(W,f.props),p.ref=Ws(g,W,f),p.return=g,g=p;break e}n(g,W);break}else s(g,W);W=W.sibling}f.type===Qt?(p=Lt(f.props.children,g.mode,b,f.key),p.return=g,g=p):(b=Xn(f.type,f.key,f.props,null,g.mode,b),b.ref=Ws(g,p,f),b.return=g,g=b)}return l(g);case Gt:e:{for(W=f.key;p!==null;){if(p.key===W)if(p.tag===4&&p.stateNode.containerInfo===f.containerInfo&&p.stateNode.implementation===f.implementation){n(g,p.sibling),p=r(p,f.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else s(g,p);p=p.sibling}p=pr(f,g.mode,b),p.return=g,g=p}return l(g);case tt:return W=f._init,k(g,p,W(f._payload),b)}if(Ts(f))return j(g,p,f,b);if(Ss(f))return v(g,p,f,b);An(g,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,p!==null&&p.tag===6?(n(g,p.sibling),p=r(p,f),p.return=g,g=p):(n(g,p),p=hr(f,g.mode,b),p.return=g,g=p),l(g)):n(g,p)}return k}var gs=ld(!0),od=ld(!1),mi=vt(null),ui=null,ns=null,_a=null;function Ua(){_a=ns=ui=null}function $a(t){var s=mi.current;O(mi),t._currentValue=s}function Jr(t,s,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&s)!==s?(t.childLanes|=s,i!==null&&(i.childLanes|=s)):i!==null&&(i.childLanes&s)!==s&&(i.childLanes|=s),t===n)break;t=t.return}}function ds(t,s){ui=t,_a=ns=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&s&&(ge=!0),t.firstContext=null)}function ze(t){var s=t._currentValue;if(_a!==t)if(t={context:t,memoizedValue:s,next:null},ns===null){if(ui===null)throw Error(N(308));ns=t,ui.dependencies={lanes:0,firstContext:t}}else ns=ns.next=t;return s}var At=null;function Va(t){At===null?At=[t]:At.push(t)}function cd(t,s,n,i){var r=s.interleaved;return r===null?(n.next=n,Va(s)):(n.next=r.next,r.next=n),s.interleaved=n,Xe(t,i)}function Xe(t,s){t.lanes|=s;var n=t.alternate;for(n!==null&&(n.lanes|=s),n=t,t=t.return;t!==null;)t.childLanes|=s,n=t.alternate,n!==null&&(n.childLanes|=s),n=t,t=t.return;return n.tag===3?n.stateNode:null}var st=!1;function qa(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dd(t,s){t=t.updateQueue,s.updateQueue===t&&(s.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ge(t,s){return{eventTime:t,lane:s,tag:0,payload:null,callback:null,next:null}}function ut(t,s,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,L&2){var r=i.pending;return r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s,Xe(t,n)}return r=i.interleaved,r===null?(s.next=s,Va(i)):(s.next=r.next,r.next=s),i.interleaved=s,Xe(t,n)}function Vn(t,s,n){if(s=s.updateQueue,s!==null&&(s=s.shared,(n&4194240)!==0)){var i=s.lanes;i&=t.pendingLanes,n|=i,s.lanes=n,Ma(t,n)}}function to(t,s){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?r=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?r=a=s:a=a.next=s}else r=a=s;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=s:t.next=s,n.lastBaseUpdate=s}function hi(t,s,n,i){var r=t.updateQueue;st=!1;var a=r.firstBaseUpdate,l=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var c=o,m=c.next;c.next=null,l===null?a=m:l.next=m,l=c;var u=t.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==l&&(o===null?u.firstBaseUpdate=m:o.next=m,u.lastBaseUpdate=c))}if(a!==null){var y=r.baseState;l=0,u=m=c=null,o=a;do{var h=o.lane,w=o.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:w,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var j=t,v=o;switch(h=s,w=n,v.tag){case 1:if(j=v.payload,typeof j=="function"){y=j.call(w,y,h);break e}y=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=v.payload,h=typeof j=="function"?j.call(w,y,h):j,h==null)break e;y=V({},y,h);break e;case 2:st=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else w={eventTime:w,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(m=u=w,c=y):u=u.next=w,l|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(c=y),r.baseState=c,r.firstBaseUpdate=m,r.lastBaseUpdate=u,s=r.shared.interleaved,s!==null){r=s;do l|=r.lane,r=r.next;while(r!==s)}else a===null&&(r.shared.lanes=0);Ot|=l,t.lanes=l,t.memoizedState=y}}function so(t,s,n){if(t=s.effects,s.effects=null,t!==null)for(s=0;s<t.length;s++){var i=t[s],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(N(191,r));r.call(i)}}}var fn={},Ue=vt(fn),rn=vt(fn),an=vt(fn);function Tt(t){if(t===fn)throw Error(N(174));return t}function Ya(t,s){switch(H(an,s),H(rn,t),H(Ue,fn),t=s.nodeType,t){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Ir(null,"");break;default:t=t===8?s.parentNode:s,s=t.namespaceURI||null,t=t.tagName,s=Ir(s,t)}O(Ue),H(Ue,s)}function xs(){O(Ue),O(rn),O(an)}function md(t){Tt(an.current);var s=Tt(Ue.current),n=Ir(s,t.type);s!==n&&(H(rn,t),H(Ue,n))}function Ga(t){rn.current===t&&(O(Ue),O(rn))}var U=vt(0);function pi(t){for(var s=t;s!==null;){if(s.tag===13){var n=s.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var lr=[];function Qa(){for(var t=0;t<lr.length;t++)lr[t]._workInProgressVersionPrimary=null;lr.length=0}var qn=Je.ReactCurrentDispatcher,or=Je.ReactCurrentBatchConfig,Pt=0,$=null,Z=null,te=null,gi=!1,Us=!1,ln=0,gh=0;function ae(){throw Error(N(321))}function Ka(t,s){if(s===null)return!1;for(var n=0;n<s.length&&n<t.length;n++)if(!Re(t[n],s[n]))return!1;return!0}function Xa(t,s,n,i,r,a){if(Pt=a,$=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,qn.current=t===null||t.memoizedState===null?jh:vh,t=n(i,r),Us){a=0;do{if(Us=!1,ln=0,25<=a)throw Error(N(301));a+=1,te=Z=null,s.updateQueue=null,qn.current=bh,t=n(i,r)}while(Us)}if(qn.current=xi,s=Z!==null&&Z.next!==null,Pt=0,te=Z=$=null,gi=!1,s)throw Error(N(300));return t}function Za(){var t=ln!==0;return ln=0,t}function Pe(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?$.memoizedState=te=t:te=te.next=t,te}function We(){if(Z===null){var t=$.alternate;t=t!==null?t.memoizedState:null}else t=Z.next;var s=te===null?$.memoizedState:te.next;if(s!==null)te=s,Z=t;else{if(t===null)throw Error(N(310));Z=t,t={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},te===null?$.memoizedState=te=t:te=te.next=t}return te}function on(t,s){return typeof s=="function"?s(t):s}function cr(t){var s=We(),n=s.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var i=Z,r=i.baseQueue,a=n.pending;if(a!==null){if(r!==null){var l=r.next;r.next=a.next,a.next=l}i.baseQueue=r=a,n.pending=null}if(r!==null){a=r.next,i=i.baseState;var o=l=null,c=null,m=a;do{var u=m.lane;if((Pt&u)===u)c!==null&&(c=c.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),i=m.hasEagerState?m.eagerState:t(i,m.action);else{var y={lane:u,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};c===null?(o=c=y,l=i):c=c.next=y,$.lanes|=u,Ot|=u}m=m.next}while(m!==null&&m!==a);c===null?l=i:c.next=o,Re(i,s.memoizedState)||(ge=!0),s.memoizedState=i,s.baseState=l,s.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do a=r.lane,$.lanes|=a,Ot|=a,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[s.memoizedState,n.dispatch]}function dr(t){var s=We(),n=s.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,a=s.memoizedState;if(r!==null){n.pending=null;var l=r=r.next;do a=t(a,l.action),l=l.next;while(l!==r);Re(a,s.memoizedState)||(ge=!0),s.memoizedState=a,s.baseQueue===null&&(s.baseState=a),n.lastRenderedState=a}return[a,i]}function ud(){}function hd(t,s){var n=$,i=We(),r=s(),a=!Re(i.memoizedState,r);if(a&&(i.memoizedState=r,ge=!0),i=i.queue,Ja(xd.bind(null,n,i,t),[t]),i.getSnapshot!==s||a||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,cn(9,gd.bind(null,n,i,r,s),void 0,null),se===null)throw Error(N(349));Pt&30||pd(n,s,r)}return r}function pd(t,s,n){t.flags|=16384,t={getSnapshot:s,value:n},s=$.updateQueue,s===null?(s={lastEffect:null,stores:null},$.updateQueue=s,s.stores=[t]):(n=s.stores,n===null?s.stores=[t]:n.push(t))}function gd(t,s,n,i){s.value=n,s.getSnapshot=i,fd(s)&&yd(t)}function xd(t,s,n){return n(function(){fd(s)&&yd(t)})}function fd(t){var s=t.getSnapshot;t=t.value;try{var n=s();return!Re(t,n)}catch{return!0}}function yd(t){var s=Xe(t,1);s!==null&&Le(s,t,1,-1)}function no(t){var s=Pe();return typeof t=="function"&&(t=t()),s.memoizedState=s.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:on,lastRenderedState:t},s.queue=t,t=t.dispatch=yh.bind(null,$,t),[s.memoizedState,t]}function cn(t,s,n,i){return t={tag:t,create:s,destroy:n,deps:i,next:null},s=$.updateQueue,s===null?(s={lastEffect:null,stores:null},$.updateQueue=s,s.lastEffect=t.next=t):(n=s.lastEffect,n===null?s.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,s.lastEffect=t)),t}function jd(){return We().memoizedState}function Yn(t,s,n,i){var r=Pe();$.flags|=t,r.memoizedState=cn(1|s,n,void 0,i===void 0?null:i)}function Wi(t,s,n,i){var r=We();i=i===void 0?null:i;var a=void 0;if(Z!==null){var l=Z.memoizedState;if(a=l.destroy,i!==null&&Ka(i,l.deps)){r.memoizedState=cn(s,n,a,i);return}}$.flags|=t,r.memoizedState=cn(1|s,n,a,i)}function io(t,s){return Yn(8390656,8,t,s)}function Ja(t,s){return Wi(2048,8,t,s)}function vd(t,s){return Wi(4,2,t,s)}function bd(t,s){return Wi(4,4,t,s)}function wd(t,s){if(typeof s=="function")return t=t(),s(t),function(){s(null)};if(s!=null)return t=t(),s.current=t,function(){s.current=null}}function Nd(t,s,n){return n=n!=null?n.concat([t]):null,Wi(4,4,wd.bind(null,s,t),n)}function el(){}function kd(t,s){var n=We();s=s===void 0?null:s;var i=n.memoizedState;return i!==null&&s!==null&&Ka(s,i[1])?i[0]:(n.memoizedState=[t,s],t)}function Sd(t,s){var n=We();s=s===void 0?null:s;var i=n.memoizedState;return i!==null&&s!==null&&Ka(s,i[1])?i[0]:(t=t(),n.memoizedState=[t,s],t)}function Bd(t,s,n){return Pt&21?(Re(n,s)||(n=Mc(),$.lanes|=n,Ot|=n,t.baseState=!0),s):(t.baseState&&(t.baseState=!1,ge=!0),t.memoizedState=n)}function xh(t,s){var n=R;R=n!==0&&4>n?n:4,t(!0);var i=or.transition;or.transition={};try{t(!1),s()}finally{R=n,or.transition=i}}function Dd(){return We().memoizedState}function fh(t,s,n){var i=pt(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Cd(t))zd(s,n);else if(n=cd(t,s,n,i),n!==null){var r=me();Le(n,t,i,r),Wd(n,s,i)}}function yh(t,s,n){var i=pt(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cd(t))zd(s,r);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=s.lastRenderedReducer,a!==null))try{var l=s.lastRenderedState,o=a(l,n);if(r.hasEagerState=!0,r.eagerState=o,Re(o,l)){var c=s.interleaved;c===null?(r.next=r,Va(s)):(r.next=c.next,c.next=r),s.interleaved=r;return}}catch{}finally{}n=cd(t,s,r,i),n!==null&&(r=me(),Le(n,t,i,r),Wd(n,s,i))}}function Cd(t){var s=t.alternate;return t===$||s!==null&&s===$}function zd(t,s){Us=gi=!0;var n=t.pending;n===null?s.next=s:(s.next=n.next,n.next=s),t.pending=s}function Wd(t,s,n){if(n&4194240){var i=s.lanes;i&=t.pendingLanes,n|=i,s.lanes=n,Ma(t,n)}}var xi={readContext:ze,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},jh={readContext:ze,useCallback:function(t,s){return Pe().memoizedState=[t,s===void 0?null:s],t},useContext:ze,useEffect:io,useImperativeHandle:function(t,s,n){return n=n!=null?n.concat([t]):null,Yn(4194308,4,wd.bind(null,s,t),n)},useLayoutEffect:function(t,s){return Yn(4194308,4,t,s)},useInsertionEffect:function(t,s){return Yn(4,2,t,s)},useMemo:function(t,s){var n=Pe();return s=s===void 0?null:s,t=t(),n.memoizedState=[t,s],t},useReducer:function(t,s,n){var i=Pe();return s=n!==void 0?n(s):s,i.memoizedState=i.baseState=s,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:s},i.queue=t,t=t.dispatch=fh.bind(null,$,t),[i.memoizedState,t]},useRef:function(t){var s=Pe();return t={current:t},s.memoizedState=t},useState:no,useDebugValue:el,useDeferredValue:function(t){return Pe().memoizedState=t},useTransition:function(){var t=no(!1),s=t[0];return t=xh.bind(null,t[1]),Pe().memoizedState=t,[s,t]},useMutableSource:function(){},useSyncExternalStore:function(t,s,n){var i=$,r=Pe();if(_){if(n===void 0)throw Error(N(407));n=n()}else{if(n=s(),se===null)throw Error(N(349));Pt&30||pd(i,s,n)}r.memoizedState=n;var a={value:n,getSnapshot:s};return r.queue=a,io(xd.bind(null,i,a,t),[t]),i.flags|=2048,cn(9,gd.bind(null,i,a,n,s),void 0,null),n},useId:function(){var t=Pe(),s=se.identifierPrefix;if(_){var n=Ye,i=qe;n=(i&~(1<<32-Fe(i)-1)).toString(32)+n,s=":"+s+"R"+n,n=ln++,0<n&&(s+="H"+n.toString(32)),s+=":"}else n=gh++,s=":"+s+"r"+n.toString(32)+":";return t.memoizedState=s},unstable_isNewReconciler:!1},vh={readContext:ze,useCallback:kd,useContext:ze,useEffect:Ja,useImperativeHandle:Nd,useInsertionEffect:vd,useLayoutEffect:bd,useMemo:Sd,useReducer:cr,useRef:jd,useState:function(){return cr(on)},useDebugValue:el,useDeferredValue:function(t){var s=We();return Bd(s,Z.memoizedState,t)},useTransition:function(){var t=cr(on)[0],s=We().memoizedState;return[t,s]},useMutableSource:ud,useSyncExternalStore:hd,useId:Dd,unstable_isNewReconciler:!1},bh={readContext:ze,useCallback:kd,useContext:ze,useEffect:Ja,useImperativeHandle:Nd,useInsertionEffect:vd,useLayoutEffect:bd,useMemo:Sd,useReducer:dr,useRef:jd,useState:function(){return dr(on)},useDebugValue:el,useDeferredValue:function(t){var s=We();return Z===null?s.memoizedState=t:Bd(s,Z.memoizedState,t)},useTransition:function(){var t=dr(on)[0],s=We().memoizedState;return[t,s]},useMutableSource:ud,useSyncExternalStore:hd,useId:Dd,unstable_isNewReconciler:!1};function Ie(t,s){if(t&&t.defaultProps){s=V({},s),t=t.defaultProps;for(var n in t)s[n]===void 0&&(s[n]=t[n]);return s}return s}function ea(t,s,n,i){s=t.memoizedState,n=n(i,s),n=n==null?s:V({},s,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Mi={isMounted:function(t){return(t=t._reactInternals)?$t(t)===t:!1},enqueueSetState:function(t,s,n){t=t._reactInternals;var i=me(),r=pt(t),a=Ge(i,r);a.payload=s,n!=null&&(a.callback=n),s=ut(t,a,r),s!==null&&(Le(s,t,r,i),Vn(s,t,r))},enqueueReplaceState:function(t,s,n){t=t._reactInternals;var i=me(),r=pt(t),a=Ge(i,r);a.tag=1,a.payload=s,n!=null&&(a.callback=n),s=ut(t,a,r),s!==null&&(Le(s,t,r,i),Vn(s,t,r))},enqueueForceUpdate:function(t,s){t=t._reactInternals;var n=me(),i=pt(t),r=Ge(n,i);r.tag=2,s!=null&&(r.callback=s),s=ut(t,r,i),s!==null&&(Le(s,t,i,n),Vn(s,t,i))}};function ro(t,s,n,i,r,a,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,a,l):s.prototype&&s.prototype.isPureReactComponent?!en(n,i)||!en(r,a):!0}function Md(t,s,n){var i=!1,r=yt,a=s.contextType;return typeof a=="object"&&a!==null?a=ze(a):(r=fe(s)?Rt:ce.current,i=s.contextTypes,a=(i=i!=null)?hs(t,r):yt),s=new s(n,a),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Mi,t.stateNode=s,s._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=a),s}function ao(t,s,n,i){t=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(n,i),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(n,i),s.state!==t&&Mi.enqueueReplaceState(s,s.state,null)}function ta(t,s,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},qa(t);var a=s.contextType;typeof a=="object"&&a!==null?r.context=ze(a):(a=fe(s)?Rt:ce.current,r.context=hs(t,a)),r.state=t.memoizedState,a=s.getDerivedStateFromProps,typeof a=="function"&&(ea(t,s,a,n),r.state=t.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&Mi.enqueueReplaceState(r,r.state,null),hi(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function fs(t,s){try{var n="",i=s;do n+=Qm(i),i=i.return;while(i);var r=n}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:s,stack:r,digest:null}}function mr(t,s,n){return{value:t,source:null,stack:n??null,digest:s??null}}function sa(t,s){try{console.error(s.value)}catch(n){setTimeout(function(){throw n})}}var wh=typeof WeakMap=="function"?WeakMap:Map;function Ed(t,s,n){n=Ge(-1,n),n.tag=3,n.payload={element:null};var i=s.value;return n.callback=function(){yi||(yi=!0,ua=i),sa(t,s)},n}function Id(t,s,n){n=Ge(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=s.value;n.payload=function(){return i(r)},n.callback=function(){sa(t,s)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){sa(t,s),typeof i!="function"&&(ht===null?ht=new Set([this]):ht.add(this));var l=s.stack;this.componentDidCatch(s.value,{componentStack:l!==null?l:""})}),n}function lo(t,s,n){var i=t.pingCache;if(i===null){i=t.pingCache=new wh;var r=new Set;i.set(s,r)}else r=i.get(s),r===void 0&&(r=new Set,i.set(s,r));r.has(n)||(r.add(n),t=Fh.bind(null,t,s,n),s.then(t,t))}function oo(t){do{var s;if((s=t.tag===13)&&(s=t.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return t;t=t.return}while(t!==null);return null}function co(t,s,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===s?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(s=Ge(-1,1),s.tag=2,ut(n,s,1))),n.lanes|=1),t)}var Nh=Je.ReactCurrentOwner,ge=!1;function de(t,s,n,i){s.child=t===null?od(s,null,n,i):gs(s,t.child,n,i)}function mo(t,s,n,i,r){n=n.render;var a=s.ref;return ds(s,r),i=Xa(t,s,n,i,a,r),n=Za(),t!==null&&!ge?(s.updateQueue=t.updateQueue,s.flags&=-2053,t.lanes&=~r,Ze(t,s,r)):(_&&n&&Ha(s),s.flags|=1,de(t,s,i,r),s.child)}function uo(t,s,n,i,r){if(t===null){var a=n.type;return typeof a=="function"&&!ol(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(s.tag=15,s.type=a,Ad(t,s,a,i,r)):(t=Xn(n.type,null,i,s,s.mode,r),t.ref=s.ref,t.return=s,s.child=t)}if(a=t.child,!(t.lanes&r)){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:en,n(l,i)&&t.ref===s.ref)return Ze(t,s,r)}return s.flags|=1,t=gt(a,i),t.ref=s.ref,t.return=s,s.child=t}function Ad(t,s,n,i,r){if(t!==null){var a=t.memoizedProps;if(en(a,i)&&t.ref===s.ref)if(ge=!1,s.pendingProps=i=a,(t.lanes&r)!==0)t.flags&131072&&(ge=!0);else return s.lanes=t.lanes,Ze(t,s,r)}return na(t,s,n,i,r)}function Td(t,s,n){var i=s.pendingProps,r=i.children,a=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(rs,je),je|=n;else{if(!(n&1073741824))return t=a!==null?a.baseLanes|n:n,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:t,cachePool:null,transitions:null},s.updateQueue=null,H(rs,je),je|=t,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,H(rs,je),je|=i}else a!==null?(i=a.baseLanes|n,s.memoizedState=null):i=n,H(rs,je),je|=i;return de(t,s,r,n),s.child}function Fd(t,s){var n=s.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(s.flags|=512,s.flags|=2097152)}function na(t,s,n,i,r){var a=fe(n)?Rt:ce.current;return a=hs(s,a),ds(s,r),n=Xa(t,s,n,i,a,r),i=Za(),t!==null&&!ge?(s.updateQueue=t.updateQueue,s.flags&=-2053,t.lanes&=~r,Ze(t,s,r)):(_&&i&&Ha(s),s.flags|=1,de(t,s,n,r),s.child)}function ho(t,s,n,i,r){if(fe(n)){var a=!0;oi(s)}else a=!1;if(ds(s,r),s.stateNode===null)Gn(t,s),Md(s,n,i),ta(s,n,i,r),i=!0;else if(t===null){var l=s.stateNode,o=s.memoizedProps;l.props=o;var c=l.context,m=n.contextType;typeof m=="object"&&m!==null?m=ze(m):(m=fe(n)?Rt:ce.current,m=hs(s,m));var u=n.getDerivedStateFromProps,y=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function";y||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==i||c!==m)&&ao(s,l,i,m),st=!1;var h=s.memoizedState;l.state=h,hi(s,i,l,r),c=s.memoizedState,o!==i||h!==c||xe.current||st?(typeof u=="function"&&(ea(s,n,u,i),c=s.memoizedState),(o=st||ro(s,n,o,i,h,c,m))?(y||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(s.flags|=4194308)):(typeof l.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=i,s.memoizedState=c),l.props=i,l.state=c,l.context=m,i=o):(typeof l.componentDidMount=="function"&&(s.flags|=4194308),i=!1)}else{l=s.stateNode,dd(t,s),o=s.memoizedProps,m=s.type===s.elementType?o:Ie(s.type,o),l.props=m,y=s.pendingProps,h=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=ze(c):(c=fe(n)?Rt:ce.current,c=hs(s,c));var w=n.getDerivedStateFromProps;(u=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==y||h!==c)&&ao(s,l,i,c),st=!1,h=s.memoizedState,l.state=h,hi(s,i,l,r);var j=s.memoizedState;o!==y||h!==j||xe.current||st?(typeof w=="function"&&(ea(s,n,w,i),j=s.memoizedState),(m=st||ro(s,n,m,i,h,j,c)||!1)?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,j,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,j,c)),typeof l.componentDidUpdate=="function"&&(s.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(s.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(s.flags|=1024),s.memoizedProps=i,s.memoizedState=j),l.props=i,l.state=j,l.context=c,i=m):(typeof l.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(s.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(s.flags|=1024),i=!1)}return ia(t,s,n,i,a,r)}function ia(t,s,n,i,r,a){Fd(t,s);var l=(s.flags&128)!==0;if(!i&&!l)return r&&Xl(s,n,!1),Ze(t,s,a);i=s.stateNode,Nh.current=s;var o=l&&typeof n.getDerivedStateFromError!="function"?null:i.render();return s.flags|=1,t!==null&&l?(s.child=gs(s,t.child,null,a),s.child=gs(s,null,o,a)):de(t,s,o,a),s.memoizedState=i.state,r&&Xl(s,n,!0),s.child}function Ld(t){var s=t.stateNode;s.pendingContext?Kl(t,s.pendingContext,s.pendingContext!==s.context):s.context&&Kl(t,s.context,!1),Ya(t,s.containerInfo)}function po(t,s,n,i,r){return ps(),Oa(r),s.flags|=256,de(t,s,n,i),s.child}var ra={dehydrated:null,treeContext:null,retryLane:0};function aa(t){return{baseLanes:t,cachePool:null,transitions:null}}function Rd(t,s,n){var i=s.pendingProps,r=U.current,a=!1,l=(s.flags&128)!==0,o;if((o=l)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(a=!0,s.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),H(U,r&1),t===null)return Zr(s),t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(s.mode&1?t.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(l=i.children,t=i.fallback,a?(i=s.mode,a=s.child,l={mode:"hidden",children:l},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=Ai(l,i,0,null),t=Lt(t,i,n,null),a.return=s,t.return=s,a.sibling=t,s.child=a,s.child.memoizedState=aa(n),s.memoizedState=ra,t):tl(s,l));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return kh(t,s,l,i,o,r,n);if(a){a=i.fallback,l=s.mode,r=t.child,o=r.sibling;var c={mode:"hidden",children:i.children};return!(l&1)&&s.child!==r?(i=s.child,i.childLanes=0,i.pendingProps=c,s.deletions=null):(i=gt(r,c),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?a=gt(o,a):(a=Lt(a,l,n,null),a.flags|=2),a.return=s,i.return=s,i.sibling=a,s.child=i,i=a,a=s.child,l=t.child.memoizedState,l=l===null?aa(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=t.childLanes&~n,s.memoizedState=ra,i}return a=t.child,t=a.sibling,i=gt(a,{mode:"visible",children:i.children}),!(s.mode&1)&&(i.lanes=n),i.return=s,i.sibling=null,t!==null&&(n=s.deletions,n===null?(s.deletions=[t],s.flags|=16):n.push(t)),s.child=i,s.memoizedState=null,i}function tl(t,s){return s=Ai({mode:"visible",children:s},t.mode,0,null),s.return=t,t.child=s}function Tn(t,s,n,i){return i!==null&&Oa(i),gs(s,t.child,null,n),t=tl(s,s.pendingProps.children),t.flags|=2,s.memoizedState=null,t}function kh(t,s,n,i,r,a,l){if(n)return s.flags&256?(s.flags&=-257,i=mr(Error(N(422))),Tn(t,s,l,i)):s.memoizedState!==null?(s.child=t.child,s.flags|=128,null):(a=i.fallback,r=s.mode,i=Ai({mode:"visible",children:i.children},r,0,null),a=Lt(a,r,l,null),a.flags|=2,i.return=s,a.return=s,i.sibling=a,s.child=i,s.mode&1&&gs(s,t.child,null,l),s.child.memoizedState=aa(l),s.memoizedState=ra,a);if(!(s.mode&1))return Tn(t,s,l,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,a=Error(N(419)),i=mr(a,i,void 0),Tn(t,s,l,i)}if(o=(l&t.childLanes)!==0,ge||o){if(i=se,i!==null){switch(l&-l){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|l)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,Xe(t,r),Le(i,t,r,-1))}return ll(),i=mr(Error(N(421))),Tn(t,s,l,i)}return r.data==="$?"?(s.flags|=128,s.child=t.child,s=Lh.bind(null,t),r._reactRetry=s,null):(t=a.treeContext,ve=mt(r.nextSibling),be=s,_=!0,Te=null,t!==null&&(Se[Be++]=qe,Se[Be++]=Ye,Se[Be++]=Ht,qe=t.id,Ye=t.overflow,Ht=s),s=tl(s,i.children),s.flags|=4096,s)}function go(t,s,n){t.lanes|=s;var i=t.alternate;i!==null&&(i.lanes|=s),Jr(t.return,s,n)}function ur(t,s,n,i,r){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(a.isBackwards=s,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r)}function Hd(t,s,n){var i=s.pendingProps,r=i.revealOrder,a=i.tail;if(de(t,s,i.children,n),i=U.current,i&2)i=i&1|2,s.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=s.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&go(t,n,s);else if(t.tag===19)go(t,n,s);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===s)break e;for(;t.sibling===null;){if(t.return===null||t.return===s)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(H(U,i),!(s.mode&1))s.memoizedState=null;else switch(r){case"forwards":for(n=s.child,r=null;n!==null;)t=n.alternate,t!==null&&pi(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=s.child,s.child=null):(r=n.sibling,n.sibling=null),ur(s,!1,r,n,a);break;case"backwards":for(n=null,r=s.child,s.child=null;r!==null;){if(t=r.alternate,t!==null&&pi(t)===null){s.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ur(s,!0,n,null,a);break;case"together":ur(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Gn(t,s){!(s.mode&1)&&t!==null&&(t.alternate=null,s.alternate=null,s.flags|=2)}function Ze(t,s,n){if(t!==null&&(s.dependencies=t.dependencies),Ot|=s.lanes,!(n&s.childLanes))return null;if(t!==null&&s.child!==t.child)throw Error(N(153));if(s.child!==null){for(t=s.child,n=gt(t,t.pendingProps),s.child=n,n.return=s;t.sibling!==null;)t=t.sibling,n=n.sibling=gt(t,t.pendingProps),n.return=s;n.sibling=null}return s.child}function Sh(t,s,n){switch(s.tag){case 3:Ld(s),ps();break;case 5:md(s);break;case 1:fe(s.type)&&oi(s);break;case 4:Ya(s,s.stateNode.containerInfo);break;case 10:var i=s.type._context,r=s.memoizedProps.value;H(mi,i._currentValue),i._currentValue=r;break;case 13:if(i=s.memoizedState,i!==null)return i.dehydrated!==null?(H(U,U.current&1),s.flags|=128,null):n&s.child.childLanes?Rd(t,s,n):(H(U,U.current&1),t=Ze(t,s,n),t!==null?t.sibling:null);H(U,U.current&1);break;case 19:if(i=(n&s.childLanes)!==0,t.flags&128){if(i)return Hd(t,s,n);s.flags|=128}if(r=s.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),H(U,U.current),i)break;return null;case 22:case 23:return s.lanes=0,Td(t,s,n)}return Ze(t,s,n)}var Pd,la,Od,_d;Pd=function(t,s){for(var n=s.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break;for(;n.sibling===null;){if(n.return===null||n.return===s)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};la=function(){};Od=function(t,s,n,i){var r=t.memoizedProps;if(r!==i){t=s.stateNode,Tt(Ue.current);var a=null;switch(n){case"input":r=zr(t,r),i=zr(t,i),a=[];break;case"select":r=V({},r,{value:void 0}),i=V({},i,{value:void 0}),a=[];break;case"textarea":r=Er(t,r),i=Er(t,i),a=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ai)}Ar(n,i);var l;n=null;for(m in r)if(!i.hasOwnProperty(m)&&r.hasOwnProperty(m)&&r[m]!=null)if(m==="style"){var o=r[m];for(l in o)o.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else m!=="dangerouslySetInnerHTML"&&m!=="children"&&m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(Ys.hasOwnProperty(m)?a||(a=[]):(a=a||[]).push(m,null));for(m in i){var c=i[m];if(o=r!=null?r[m]:void 0,i.hasOwnProperty(m)&&c!==o&&(c!=null||o!=null))if(m==="style")if(o){for(l in o)!o.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&o[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(a||(a=[]),a.push(m,n)),n=c;else m==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(a=a||[]).push(m,c)):m==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(m,""+c):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&(Ys.hasOwnProperty(m)?(c!=null&&m==="onScroll"&&P("scroll",t),a||o===c||(a=[])):(a=a||[]).push(m,c))}n&&(a=a||[]).push("style",n);var m=a;(s.updateQueue=m)&&(s.flags|=4)}};_d=function(t,s,n,i){n!==i&&(s.flags|=4)};function Ms(t,s){if(!_)switch(t.tailMode){case"hidden":s=t.tail;for(var n=null;s!==null;)s.alternate!==null&&(n=s),s=s.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?s||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function le(t){var s=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(s)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,s}function Bh(t,s,n){var i=s.pendingProps;switch(Pa(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(s),null;case 1:return fe(s.type)&&li(),le(s),null;case 3:return i=s.stateNode,xs(),O(xe),O(ce),Qa(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(In(s)?s.flags|=4:t===null||t.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,Te!==null&&(ga(Te),Te=null))),la(t,s),le(s),null;case 5:Ga(s);var r=Tt(an.current);if(n=s.type,t!==null&&s.stateNode!=null)Od(t,s,n,i,r),t.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!i){if(s.stateNode===null)throw Error(N(166));return le(s),null}if(t=Tt(Ue.current),In(s)){i=s.stateNode,n=s.type;var a=s.memoizedProps;switch(i[Oe]=s,i[nn]=a,t=(s.mode&1)!==0,n){case"dialog":P("cancel",i),P("close",i);break;case"iframe":case"object":case"embed":P("load",i);break;case"video":case"audio":for(r=0;r<Ls.length;r++)P(Ls[r],i);break;case"source":P("error",i);break;case"img":case"image":case"link":P("error",i),P("load",i);break;case"details":P("toggle",i);break;case"input":Nl(i,a),P("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},P("invalid",i);break;case"textarea":Sl(i,a),P("invalid",i)}Ar(n,a),r=null;for(var l in a)if(a.hasOwnProperty(l)){var o=a[l];l==="children"?typeof o=="string"?i.textContent!==o&&(a.suppressHydrationWarning!==!0&&En(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&En(i.textContent,o,t),r=["children",""+o]):Ys.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&P("scroll",i)}switch(n){case"input":kn(i),kl(i,a,!0);break;case"textarea":kn(i),Bl(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=ai)}i=r,s.updateQueue=i,i!==null&&(s.flags|=4)}else{l=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=xc(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=l.createElement(n,{is:i.is}):(t=l.createElement(n),n==="select"&&(l=t,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):t=l.createElementNS(t,n),t[Oe]=s,t[nn]=i,Pd(t,s,!1,!1),s.stateNode=t;e:{switch(l=Tr(n,i),n){case"dialog":P("cancel",t),P("close",t),r=i;break;case"iframe":case"object":case"embed":P("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ls.length;r++)P(Ls[r],t);r=i;break;case"source":P("error",t),r=i;break;case"img":case"image":case"link":P("error",t),P("load",t),r=i;break;case"details":P("toggle",t),r=i;break;case"input":Nl(t,i),r=zr(t,i),P("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=V({},i,{value:void 0}),P("invalid",t);break;case"textarea":Sl(t,i),r=Er(t,i),P("invalid",t);break;default:r=i}Ar(n,r),o=r;for(a in o)if(o.hasOwnProperty(a)){var c=o[a];a==="style"?jc(t,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&fc(t,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Gs(t,c):typeof c=="number"&&Gs(t,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ys.hasOwnProperty(a)?c!=null&&a==="onScroll"&&P("scroll",t):c!=null&&Sa(t,a,c,l))}switch(n){case"input":kn(t),kl(t,i,!1);break;case"textarea":kn(t),Bl(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ft(i.value));break;case"select":t.multiple=!!i.multiple,a=i.value,a!=null?as(t,!!i.multiple,a,!1):i.defaultValue!=null&&as(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ai)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return le(s),null;case 6:if(t&&s.stateNode!=null)_d(t,s,t.memoizedProps,i);else{if(typeof i!="string"&&s.stateNode===null)throw Error(N(166));if(n=Tt(an.current),Tt(Ue.current),In(s)){if(i=s.stateNode,n=s.memoizedProps,i[Oe]=s,(a=i.nodeValue!==n)&&(t=be,t!==null))switch(t.tag){case 3:En(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&En(i.nodeValue,n,(t.mode&1)!==0)}a&&(s.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Oe]=s,s.stateNode=i}return le(s),null;case 13:if(O(U),i=s.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_&&ve!==null&&s.mode&1&&!(s.flags&128))ad(),ps(),s.flags|=98560,a=!1;else if(a=In(s),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(N(318));if(a=s.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(N(317));a[Oe]=s}else ps(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;le(s),a=!1}else Te!==null&&(ga(Te),Te=null),a=!0;if(!a)return s.flags&65536?s:null}return s.flags&128?(s.lanes=n,s):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(s.child.flags|=8192,s.mode&1&&(t===null||U.current&1?J===0&&(J=3):ll())),s.updateQueue!==null&&(s.flags|=4),le(s),null);case 4:return xs(),la(t,s),t===null&&tn(s.stateNode.containerInfo),le(s),null;case 10:return $a(s.type._context),le(s),null;case 17:return fe(s.type)&&li(),le(s),null;case 19:if(O(U),a=s.memoizedState,a===null)return le(s),null;if(i=(s.flags&128)!==0,l=a.rendering,l===null)if(i)Ms(a,!1);else{if(J!==0||t!==null&&t.flags&128)for(t=s.child;t!==null;){if(l=pi(t),l!==null){for(s.flags|=128,Ms(a,!1),i=l.updateQueue,i!==null&&(s.updateQueue=i,s.flags|=4),s.subtreeFlags=0,i=n,n=s.child;n!==null;)a=n,t=i,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,t=l.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return H(U,U.current&1|2),s.child}t=t.sibling}a.tail!==null&&Q()>ys&&(s.flags|=128,i=!0,Ms(a,!1),s.lanes=4194304)}else{if(!i)if(t=pi(l),t!==null){if(s.flags|=128,i=!0,n=t.updateQueue,n!==null&&(s.updateQueue=n,s.flags|=4),Ms(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!_)return le(s),null}else 2*Q()-a.renderingStartTime>ys&&n!==1073741824&&(s.flags|=128,i=!0,Ms(a,!1),s.lanes=4194304);a.isBackwards?(l.sibling=s.child,s.child=l):(n=a.last,n!==null?n.sibling=l:s.child=l,a.last=l)}return a.tail!==null?(s=a.tail,a.rendering=s,a.tail=s.sibling,a.renderingStartTime=Q(),s.sibling=null,n=U.current,H(U,i?n&1|2:n&1),s):(le(s),null);case 22:case 23:return al(),i=s.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(s.flags|=8192),i&&s.mode&1?je&1073741824&&(le(s),s.subtreeFlags&6&&(s.flags|=8192)):le(s),null;case 24:return null;case 25:return null}throw Error(N(156,s.tag))}function Dh(t,s){switch(Pa(s),s.tag){case 1:return fe(s.type)&&li(),t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 3:return xs(),O(xe),O(ce),Qa(),t=s.flags,t&65536&&!(t&128)?(s.flags=t&-65537|128,s):null;case 5:return Ga(s),null;case 13:if(O(U),t=s.memoizedState,t!==null&&t.dehydrated!==null){if(s.alternate===null)throw Error(N(340));ps()}return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 19:return O(U),null;case 4:return xs(),null;case 10:return $a(s.type._context),null;case 22:case 23:return al(),null;case 24:return null;default:return null}}var Fn=!1,oe=!1,Ch=typeof WeakSet=="function"?WeakSet:Set,C=null;function is(t,s){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){q(t,s,i)}else n.current=null}function oa(t,s,n){try{n()}catch(i){q(t,s,i)}}var xo=!1;function zh(t,s){if(Vr=ni,t=Yc(),Ra(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,o=-1,c=-1,m=0,u=0,y=t,h=null;t:for(;;){for(var w;y!==n||r!==0&&y.nodeType!==3||(o=l+r),y!==a||i!==0&&y.nodeType!==3||(c=l+i),y.nodeType===3&&(l+=y.nodeValue.length),(w=y.firstChild)!==null;)h=y,y=w;for(;;){if(y===t)break t;if(h===n&&++m===r&&(o=l),h===a&&++u===i&&(c=l),(w=y.nextSibling)!==null)break;y=h,h=y.parentNode}y=w}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(qr={focusedElem:t,selectionRange:n},ni=!1,C=s;C!==null;)if(s=C,t=s.child,(s.subtreeFlags&1028)!==0&&t!==null)t.return=s,C=t;else for(;C!==null;){s=C;try{var j=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var v=j.memoizedProps,k=j.memoizedState,g=s.stateNode,p=g.getSnapshotBeforeUpdate(s.elementType===s.type?v:Ie(s.type,v),k);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var f=s.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(b){q(s,s.return,b)}if(t=s.sibling,t!==null){t.return=s.return,C=t;break}C=s.return}return j=xo,xo=!1,j}function $s(t,s,n){var i=s.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var a=r.destroy;r.destroy=void 0,a!==void 0&&oa(s,n,a)}r=r.next}while(r!==i)}}function Ei(t,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var n=s=s.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==s)}}function ca(t){var s=t.ref;if(s!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof s=="function"?s(t):s.current=t}}function Ud(t){var s=t.alternate;s!==null&&(t.alternate=null,Ud(s)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(s=t.stateNode,s!==null&&(delete s[Oe],delete s[nn],delete s[Qr],delete s[mh],delete s[uh])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $d(t){return t.tag===5||t.tag===3||t.tag===4}function fo(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$d(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function da(t,s,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,s?n.nodeType===8?n.parentNode.insertBefore(t,s):n.insertBefore(t,s):(n.nodeType===8?(s=n.parentNode,s.insertBefore(t,n)):(s=n,s.appendChild(t)),n=n._reactRootContainer,n!=null||s.onclick!==null||(s.onclick=ai));else if(i!==4&&(t=t.child,t!==null))for(da(t,s,n),t=t.sibling;t!==null;)da(t,s,n),t=t.sibling}function ma(t,s,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,s?n.insertBefore(t,s):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ma(t,s,n),t=t.sibling;t!==null;)ma(t,s,n),t=t.sibling}var ne=null,Ae=!1;function et(t,s,n){for(n=n.child;n!==null;)Vd(t,s,n),n=n.sibling}function Vd(t,s,n){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(ki,n)}catch{}switch(n.tag){case 5:oe||is(n,s);case 6:var i=ne,r=Ae;ne=null,et(t,s,n),ne=i,Ae=r,ne!==null&&(Ae?(t=ne,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Ae?(t=ne,n=n.stateNode,t.nodeType===8?rr(t.parentNode,n):t.nodeType===1&&rr(t,n),Zs(t)):rr(ne,n.stateNode));break;case 4:i=ne,r=Ae,ne=n.stateNode.containerInfo,Ae=!0,et(t,s,n),ne=i,Ae=r;break;case 0:case 11:case 14:case 15:if(!oe&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var a=r,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&oa(n,s,l),r=r.next}while(r!==i)}et(t,s,n);break;case 1:if(!oe&&(is(n,s),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){q(n,s,o)}et(t,s,n);break;case 21:et(t,s,n);break;case 22:n.mode&1?(oe=(i=oe)||n.memoizedState!==null,et(t,s,n),oe=i):et(t,s,n);break;default:et(t,s,n)}}function yo(t){var s=t.updateQueue;if(s!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ch),s.forEach(function(i){var r=Rh.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ee(t,s){var n=s.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var a=t,l=s,o=l;e:for(;o!==null;){switch(o.tag){case 5:ne=o.stateNode,Ae=!1;break e;case 3:ne=o.stateNode.containerInfo,Ae=!0;break e;case 4:ne=o.stateNode.containerInfo,Ae=!0;break e}o=o.return}if(ne===null)throw Error(N(160));Vd(a,l,r),ne=null,Ae=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(m){q(r,s,m)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)qd(s,t),s=s.sibling}function qd(t,s){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ee(s,t),He(t),i&4){try{$s(3,t,t.return),Ei(3,t)}catch(v){q(t,t.return,v)}try{$s(5,t,t.return)}catch(v){q(t,t.return,v)}}break;case 1:Ee(s,t),He(t),i&512&&n!==null&&is(n,n.return);break;case 5:if(Ee(s,t),He(t),i&512&&n!==null&&is(n,n.return),t.flags&32){var r=t.stateNode;try{Gs(r,"")}catch(v){q(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var a=t.memoizedProps,l=n!==null?n.memoizedProps:a,o=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&pc(r,a),Tr(o,l);var m=Tr(o,a);for(l=0;l<c.length;l+=2){var u=c[l],y=c[l+1];u==="style"?jc(r,y):u==="dangerouslySetInnerHTML"?fc(r,y):u==="children"?Gs(r,y):Sa(r,u,y,m)}switch(o){case"input":Wr(r,a);break;case"textarea":gc(r,a);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var w=a.value;w!=null?as(r,!!a.multiple,w,!1):h!==!!a.multiple&&(a.defaultValue!=null?as(r,!!a.multiple,a.defaultValue,!0):as(r,!!a.multiple,a.multiple?[]:"",!1))}r[nn]=a}catch(v){q(t,t.return,v)}}break;case 6:if(Ee(s,t),He(t),i&4){if(t.stateNode===null)throw Error(N(162));r=t.stateNode,a=t.memoizedProps;try{r.nodeValue=a}catch(v){q(t,t.return,v)}}break;case 3:if(Ee(s,t),He(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Zs(s.containerInfo)}catch(v){q(t,t.return,v)}break;case 4:Ee(s,t),He(t);break;case 13:Ee(s,t),He(t),r=t.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(il=Q())),i&4&&yo(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(oe=(m=oe)||u,Ee(s,t),oe=m):Ee(s,t),He(t),i&8192){if(m=t.memoizedState!==null,(t.stateNode.isHidden=m)&&!u&&t.mode&1)for(C=t,u=t.child;u!==null;){for(y=C=u;C!==null;){switch(h=C,w=h.child,h.tag){case 0:case 11:case 14:case 15:$s(4,h,h.return);break;case 1:is(h,h.return);var j=h.stateNode;if(typeof j.componentWillUnmount=="function"){i=h,n=h.return;try{s=i,j.props=s.memoizedProps,j.state=s.memoizedState,j.componentWillUnmount()}catch(v){q(i,n,v)}}break;case 5:is(h,h.return);break;case 22:if(h.memoizedState!==null){vo(y);continue}}w!==null?(w.return=h,C=w):vo(y)}u=u.sibling}e:for(u=null,y=t;;){if(y.tag===5){if(u===null){u=y;try{r=y.stateNode,m?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=y.stateNode,c=y.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=yc("display",l))}catch(v){q(t,t.return,v)}}}else if(y.tag===6){if(u===null)try{y.stateNode.nodeValue=m?"":y.memoizedProps}catch(v){q(t,t.return,v)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===t)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;u===y&&(u=null),y=y.return}u===y&&(u=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Ee(s,t),He(t),i&4&&yo(t);break;case 21:break;default:Ee(s,t),He(t)}}function He(t){var s=t.flags;if(s&2){try{e:{for(var n=t.return;n!==null;){if($d(n)){var i=n;break e}n=n.return}throw Error(N(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Gs(r,""),i.flags&=-33);var a=fo(t);ma(t,a,r);break;case 3:case 4:var l=i.stateNode.containerInfo,o=fo(t);da(t,o,l);break;default:throw Error(N(161))}}catch(c){q(t,t.return,c)}t.flags&=-3}s&4096&&(t.flags&=-4097)}function Wh(t,s,n){C=t,Yd(t)}function Yd(t,s,n){for(var i=(t.mode&1)!==0;C!==null;){var r=C,a=r.child;if(r.tag===22&&i){var l=r.memoizedState!==null||Fn;if(!l){var o=r.alternate,c=o!==null&&o.memoizedState!==null||oe;o=Fn;var m=oe;if(Fn=l,(oe=c)&&!m)for(C=r;C!==null;)l=C,c=l.child,l.tag===22&&l.memoizedState!==null?bo(r):c!==null?(c.return=l,C=c):bo(r);for(;a!==null;)C=a,Yd(a),a=a.sibling;C=r,Fn=o,oe=m}jo(t)}else r.subtreeFlags&8772&&a!==null?(a.return=r,C=a):jo(t)}}function jo(t){for(;C!==null;){var s=C;if(s.flags&8772){var n=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:oe||Ei(5,s);break;case 1:var i=s.stateNode;if(s.flags&4&&!oe)if(n===null)i.componentDidMount();else{var r=s.elementType===s.type?n.memoizedProps:Ie(s.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=s.updateQueue;a!==null&&so(s,a,i);break;case 3:var l=s.updateQueue;if(l!==null){if(n=null,s.child!==null)switch(s.child.tag){case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}so(s,l,n)}break;case 5:var o=s.stateNode;if(n===null&&s.flags&4){n=o;var c=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var m=s.alternate;if(m!==null){var u=m.memoizedState;if(u!==null){var y=u.dehydrated;y!==null&&Zs(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}oe||s.flags&512&&ca(s)}catch(h){q(s,s.return,h)}}if(s===t){C=null;break}if(n=s.sibling,n!==null){n.return=s.return,C=n;break}C=s.return}}function vo(t){for(;C!==null;){var s=C;if(s===t){C=null;break}var n=s.sibling;if(n!==null){n.return=s.return,C=n;break}C=s.return}}function bo(t){for(;C!==null;){var s=C;try{switch(s.tag){case 0:case 11:case 15:var n=s.return;try{Ei(4,s)}catch(c){q(s,n,c)}break;case 1:var i=s.stateNode;if(typeof i.componentDidMount=="function"){var r=s.return;try{i.componentDidMount()}catch(c){q(s,r,c)}}var a=s.return;try{ca(s)}catch(c){q(s,a,c)}break;case 5:var l=s.return;try{ca(s)}catch(c){q(s,l,c)}}}catch(c){q(s,s.return,c)}if(s===t){C=null;break}var o=s.sibling;if(o!==null){o.return=s.return,C=o;break}C=s.return}}var Mh=Math.ceil,fi=Je.ReactCurrentDispatcher,sl=Je.ReactCurrentOwner,Ce=Je.ReactCurrentBatchConfig,L=0,se=null,K=null,ie=0,je=0,rs=vt(0),J=0,dn=null,Ot=0,Ii=0,nl=0,Vs=null,pe=null,il=0,ys=1/0,$e=null,yi=!1,ua=null,ht=null,Ln=!1,at=null,ji=0,qs=0,ha=null,Qn=-1,Kn=0;function me(){return L&6?Q():Qn!==-1?Qn:Qn=Q()}function pt(t){return t.mode&1?L&2&&ie!==0?ie&-ie:ph.transition!==null?(Kn===0&&(Kn=Mc()),Kn):(t=R,t!==0||(t=window.event,t=t===void 0?16:Rc(t.type)),t):1}function Le(t,s,n,i){if(50<qs)throw qs=0,ha=null,Error(N(185));pn(t,n,i),(!(L&2)||t!==se)&&(t===se&&(!(L&2)&&(Ii|=n),J===4&&it(t,ie)),ye(t,i),n===1&&L===0&&!(s.mode&1)&&(ys=Q()+500,zi&&bt()))}function ye(t,s){var n=t.callbackNode;pu(t,s);var i=si(t,t===se?ie:0);if(i===0)n!==null&&zl(n),t.callbackNode=null,t.callbackPriority=0;else if(s=i&-i,t.callbackPriority!==s){if(n!=null&&zl(n),s===1)t.tag===0?hh(wo.bind(null,t)):nd(wo.bind(null,t)),ch(function(){!(L&6)&&bt()}),n=null;else{switch(Ec(i)){case 1:n=Wa;break;case 4:n=zc;break;case 16:n=ti;break;case 536870912:n=Wc;break;default:n=ti}n=tm(n,Gd.bind(null,t))}t.callbackPriority=s,t.callbackNode=n}}function Gd(t,s){if(Qn=-1,Kn=0,L&6)throw Error(N(327));var n=t.callbackNode;if(ms()&&t.callbackNode!==n)return null;var i=si(t,t===se?ie:0);if(i===0)return null;if(i&30||i&t.expiredLanes||s)s=vi(t,i);else{s=i;var r=L;L|=2;var a=Kd();(se!==t||ie!==s)&&($e=null,ys=Q()+500,Ft(t,s));do try{Ah();break}catch(o){Qd(t,o)}while(!0);Ua(),fi.current=a,L=r,K!==null?s=0:(se=null,ie=0,s=J)}if(s!==0){if(s===2&&(r=Pr(t),r!==0&&(i=r,s=pa(t,r))),s===1)throw n=dn,Ft(t,0),it(t,i),ye(t,Q()),n;if(s===6)it(t,i);else{if(r=t.current.alternate,!(i&30)&&!Eh(r)&&(s=vi(t,i),s===2&&(a=Pr(t),a!==0&&(i=a,s=pa(t,a))),s===1))throw n=dn,Ft(t,0),it(t,i),ye(t,Q()),n;switch(t.finishedWork=r,t.finishedLanes=i,s){case 0:case 1:throw Error(N(345));case 2:Et(t,pe,$e);break;case 3:if(it(t,i),(i&130023424)===i&&(s=il+500-Q(),10<s)){if(si(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){me(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Gr(Et.bind(null,t,pe,$e),s);break}Et(t,pe,$e);break;case 4:if(it(t,i),(i&4194240)===i)break;for(s=t.eventTimes,r=-1;0<i;){var l=31-Fe(i);a=1<<l,l=s[l],l>r&&(r=l),i&=~a}if(i=r,i=Q()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Mh(i/1960))-i,10<i){t.timeoutHandle=Gr(Et.bind(null,t,pe,$e),i);break}Et(t,pe,$e);break;case 5:Et(t,pe,$e);break;default:throw Error(N(329))}}}return ye(t,Q()),t.callbackNode===n?Gd.bind(null,t):null}function pa(t,s){var n=Vs;return t.current.memoizedState.isDehydrated&&(Ft(t,s).flags|=256),t=vi(t,s),t!==2&&(s=pe,pe=n,s!==null&&ga(s)),t}function ga(t){pe===null?pe=t:pe.push.apply(pe,t)}function Eh(t){for(var s=t;;){if(s.flags&16384){var n=s.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!Re(a(),r))return!1}catch{return!1}}}if(n=s.child,s.subtreeFlags&16384&&n!==null)n.return=s,s=n;else{if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function it(t,s){for(s&=~nl,s&=~Ii,t.suspendedLanes|=s,t.pingedLanes&=~s,t=t.expirationTimes;0<s;){var n=31-Fe(s),i=1<<n;t[n]=-1,s&=~i}}function wo(t){if(L&6)throw Error(N(327));ms();var s=si(t,0);if(!(s&1))return ye(t,Q()),null;var n=vi(t,s);if(t.tag!==0&&n===2){var i=Pr(t);i!==0&&(s=i,n=pa(t,i))}if(n===1)throw n=dn,Ft(t,0),it(t,s),ye(t,Q()),n;if(n===6)throw Error(N(345));return t.finishedWork=t.current.alternate,t.finishedLanes=s,Et(t,pe,$e),ye(t,Q()),null}function rl(t,s){var n=L;L|=1;try{return t(s)}finally{L=n,L===0&&(ys=Q()+500,zi&&bt())}}function _t(t){at!==null&&at.tag===0&&!(L&6)&&ms();var s=L;L|=1;var n=Ce.transition,i=R;try{if(Ce.transition=null,R=1,t)return t()}finally{R=i,Ce.transition=n,L=s,!(L&6)&&bt()}}function al(){je=rs.current,O(rs)}function Ft(t,s){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,oh(n)),K!==null)for(n=K.return;n!==null;){var i=n;switch(Pa(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&li();break;case 3:xs(),O(xe),O(ce),Qa();break;case 5:Ga(i);break;case 4:xs();break;case 13:O(U);break;case 19:O(U);break;case 10:$a(i.type._context);break;case 22:case 23:al()}n=n.return}if(se=t,K=t=gt(t.current,null),ie=je=s,J=0,dn=null,nl=Ii=Ot=0,pe=Vs=null,At!==null){for(s=0;s<At.length;s++)if(n=At[s],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,a=n.pending;if(a!==null){var l=a.next;a.next=r,i.next=l}n.pending=i}At=null}return t}function Qd(t,s){do{var n=K;try{if(Ua(),qn.current=xi,gi){for(var i=$.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}gi=!1}if(Pt=0,te=Z=$=null,Us=!1,ln=0,sl.current=null,n===null||n.return===null){J=1,dn=s,K=null;break}e:{var a=t,l=n.return,o=n,c=s;if(s=ie,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var m=c,u=o,y=u.tag;if(!(u.mode&1)&&(y===0||y===11||y===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var w=oo(l);if(w!==null){w.flags&=-257,co(w,l,o,a,s),w.mode&1&&lo(a,m,s),s=w,c=m;var j=s.updateQueue;if(j===null){var v=new Set;v.add(c),s.updateQueue=v}else j.add(c);break e}else{if(!(s&1)){lo(a,m,s),ll();break e}c=Error(N(426))}}else if(_&&o.mode&1){var k=oo(l);if(k!==null){!(k.flags&65536)&&(k.flags|=256),co(k,l,o,a,s),Oa(fs(c,o));break e}}a=c=fs(c,o),J!==4&&(J=2),Vs===null?Vs=[a]:Vs.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,s&=-s,a.lanes|=s;var g=Ed(a,c,s);to(a,g);break e;case 1:o=c;var p=a.type,f=a.stateNode;if(!(a.flags&128)&&(typeof p.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ht===null||!ht.has(f)))){a.flags|=65536,s&=-s,a.lanes|=s;var b=Id(a,o,s);to(a,b);break e}}a=a.return}while(a!==null)}Zd(n)}catch(B){s=B,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function Kd(){var t=fi.current;return fi.current=xi,t===null?xi:t}function ll(){(J===0||J===3||J===2)&&(J=4),se===null||!(Ot&268435455)&&!(Ii&268435455)||it(se,ie)}function vi(t,s){var n=L;L|=2;var i=Kd();(se!==t||ie!==s)&&($e=null,Ft(t,s));do try{Ih();break}catch(r){Qd(t,r)}while(!0);if(Ua(),L=n,fi.current=i,K!==null)throw Error(N(261));return se=null,ie=0,J}function Ih(){for(;K!==null;)Xd(K)}function Ah(){for(;K!==null&&!ru();)Xd(K)}function Xd(t){var s=em(t.alternate,t,je);t.memoizedProps=t.pendingProps,s===null?Zd(t):K=s,sl.current=null}function Zd(t){var s=t;do{var n=s.alternate;if(t=s.return,s.flags&32768){if(n=Dh(n,s),n!==null){n.flags&=32767,K=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{J=6,K=null;return}}else if(n=Bh(n,s,je),n!==null){K=n;return}if(s=s.sibling,s!==null){K=s;return}K=s=t}while(s!==null);J===0&&(J=5)}function Et(t,s,n){var i=R,r=Ce.transition;try{Ce.transition=null,R=1,Th(t,s,n,i)}finally{Ce.transition=r,R=i}return null}function Th(t,s,n,i){do ms();while(at!==null);if(L&6)throw Error(N(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(N(177));t.callbackNode=null,t.callbackPriority=0;var a=n.lanes|n.childLanes;if(gu(t,a),t===se&&(K=se=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ln||(Ln=!0,tm(ti,function(){return ms(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Ce.transition,Ce.transition=null;var l=R;R=1;var o=L;L|=4,sl.current=null,zh(t,n),qd(n,t),th(qr),ni=!!Vr,qr=Vr=null,t.current=n,Wh(n),au(),L=o,R=l,Ce.transition=a}else t.current=n;if(Ln&&(Ln=!1,at=t,ji=r),a=t.pendingLanes,a===0&&(ht=null),cu(n.stateNode),ye(t,Q()),s!==null)for(i=t.onRecoverableError,n=0;n<s.length;n++)r=s[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(yi)throw yi=!1,t=ua,ua=null,t;return ji&1&&t.tag!==0&&ms(),a=t.pendingLanes,a&1?t===ha?qs++:(qs=0,ha=t):qs=0,bt(),null}function ms(){if(at!==null){var t=Ec(ji),s=Ce.transition,n=R;try{if(Ce.transition=null,R=16>t?16:t,at===null)var i=!1;else{if(t=at,at=null,ji=0,L&6)throw Error(N(331));var r=L;for(L|=4,C=t.current;C!==null;){var a=C,l=a.child;if(C.flags&16){var o=a.deletions;if(o!==null){for(var c=0;c<o.length;c++){var m=o[c];for(C=m;C!==null;){var u=C;switch(u.tag){case 0:case 11:case 15:$s(8,u,a)}var y=u.child;if(y!==null)y.return=u,C=y;else for(;C!==null;){u=C;var h=u.sibling,w=u.return;if(Ud(u),u===m){C=null;break}if(h!==null){h.return=w,C=h;break}C=w}}}var j=a.alternate;if(j!==null){var v=j.child;if(v!==null){j.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}C=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,C=l;else e:for(;C!==null;){if(a=C,a.flags&2048)switch(a.tag){case 0:case 11:case 15:$s(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,C=g;break e}C=a.return}}var p=t.current;for(C=p;C!==null;){l=C;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,C=f;else e:for(l=p;C!==null;){if(o=C,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Ei(9,o)}}catch(B){q(o,o.return,B)}if(o===l){C=null;break e}var b=o.sibling;if(b!==null){b.return=o.return,C=b;break e}C=o.return}}if(L=r,bt(),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(ki,t)}catch{}i=!0}return i}finally{R=n,Ce.transition=s}}return!1}function No(t,s,n){s=fs(n,s),s=Ed(t,s,1),t=ut(t,s,1),s=me(),t!==null&&(pn(t,1,s),ye(t,s))}function q(t,s,n){if(t.tag===3)No(t,t,n);else for(;s!==null;){if(s.tag===3){No(s,t,n);break}else if(s.tag===1){var i=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ht===null||!ht.has(i))){t=fs(n,t),t=Id(s,t,1),s=ut(s,t,1),t=me(),s!==null&&(pn(s,1,t),ye(s,t));break}}s=s.return}}function Fh(t,s,n){var i=t.pingCache;i!==null&&i.delete(s),s=me(),t.pingedLanes|=t.suspendedLanes&n,se===t&&(ie&n)===n&&(J===4||J===3&&(ie&130023424)===ie&&500>Q()-il?Ft(t,0):nl|=n),ye(t,s)}function Jd(t,s){s===0&&(t.mode&1?(s=Dn,Dn<<=1,!(Dn&130023424)&&(Dn=4194304)):s=1);var n=me();t=Xe(t,s),t!==null&&(pn(t,s,n),ye(t,n))}function Lh(t){var s=t.memoizedState,n=0;s!==null&&(n=s.retryLane),Jd(t,n)}function Rh(t,s){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(N(314))}i!==null&&i.delete(s),Jd(t,n)}var em;em=function(t,s,n){if(t!==null)if(t.memoizedProps!==s.pendingProps||xe.current)ge=!0;else{if(!(t.lanes&n)&&!(s.flags&128))return ge=!1,Sh(t,s,n);ge=!!(t.flags&131072)}else ge=!1,_&&s.flags&1048576&&id(s,di,s.index);switch(s.lanes=0,s.tag){case 2:var i=s.type;Gn(t,s),t=s.pendingProps;var r=hs(s,ce.current);ds(s,n),r=Xa(null,s,i,t,r,n);var a=Za();return s.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,fe(i)?(a=!0,oi(s)):a=!1,s.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,qa(s),r.updater=Mi,s.stateNode=r,r._reactInternals=s,ta(s,i,t,n),s=ia(null,s,i,!0,a,n)):(s.tag=0,_&&a&&Ha(s),de(null,s,r,n),s=s.child),s;case 16:i=s.elementType;e:{switch(Gn(t,s),t=s.pendingProps,r=i._init,i=r(i._payload),s.type=i,r=s.tag=Ph(i),t=Ie(i,t),r){case 0:s=na(null,s,i,t,n);break e;case 1:s=ho(null,s,i,t,n);break e;case 11:s=mo(null,s,i,t,n);break e;case 14:s=uo(null,s,i,Ie(i.type,t),n);break e}throw Error(N(306,i,""))}return s;case 0:return i=s.type,r=s.pendingProps,r=s.elementType===i?r:Ie(i,r),na(t,s,i,r,n);case 1:return i=s.type,r=s.pendingProps,r=s.elementType===i?r:Ie(i,r),ho(t,s,i,r,n);case 3:e:{if(Ld(s),t===null)throw Error(N(387));i=s.pendingProps,a=s.memoizedState,r=a.element,dd(t,s),hi(s,i,null,n);var l=s.memoizedState;if(i=l.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},s.updateQueue.baseState=a,s.memoizedState=a,s.flags&256){r=fs(Error(N(423)),s),s=po(t,s,i,n,r);break e}else if(i!==r){r=fs(Error(N(424)),s),s=po(t,s,i,n,r);break e}else for(ve=mt(s.stateNode.containerInfo.firstChild),be=s,_=!0,Te=null,n=od(s,null,i,n),s.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ps(),i===r){s=Ze(t,s,n);break e}de(t,s,i,n)}s=s.child}return s;case 5:return md(s),t===null&&Zr(s),i=s.type,r=s.pendingProps,a=t!==null?t.memoizedProps:null,l=r.children,Yr(i,r)?l=null:a!==null&&Yr(i,a)&&(s.flags|=32),Fd(t,s),de(t,s,l,n),s.child;case 6:return t===null&&Zr(s),null;case 13:return Rd(t,s,n);case 4:return Ya(s,s.stateNode.containerInfo),i=s.pendingProps,t===null?s.child=gs(s,null,i,n):de(t,s,i,n),s.child;case 11:return i=s.type,r=s.pendingProps,r=s.elementType===i?r:Ie(i,r),mo(t,s,i,r,n);case 7:return de(t,s,s.pendingProps,n),s.child;case 8:return de(t,s,s.pendingProps.children,n),s.child;case 12:return de(t,s,s.pendingProps.children,n),s.child;case 10:e:{if(i=s.type._context,r=s.pendingProps,a=s.memoizedProps,l=r.value,H(mi,i._currentValue),i._currentValue=l,a!==null)if(Re(a.value,l)){if(a.children===r.children&&!xe.current){s=Ze(t,s,n);break e}}else for(a=s.child,a!==null&&(a.return=s);a!==null;){var o=a.dependencies;if(o!==null){l=a.child;for(var c=o.firstContext;c!==null;){if(c.context===i){if(a.tag===1){c=Ge(-1,n&-n),c.tag=2;var m=a.updateQueue;if(m!==null){m=m.shared;var u=m.pending;u===null?c.next=c:(c.next=u.next,u.next=c),m.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Jr(a.return,n,s),o.lanes|=n;break}c=c.next}}else if(a.tag===10)l=a.type===s.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(N(341));l.lanes|=n,o=l.alternate,o!==null&&(o.lanes|=n),Jr(l,n,s),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===s){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}de(t,s,r.children,n),s=s.child}return s;case 9:return r=s.type,i=s.pendingProps.children,ds(s,n),r=ze(r),i=i(r),s.flags|=1,de(t,s,i,n),s.child;case 14:return i=s.type,r=Ie(i,s.pendingProps),r=Ie(i.type,r),uo(t,s,i,r,n);case 15:return Ad(t,s,s.type,s.pendingProps,n);case 17:return i=s.type,r=s.pendingProps,r=s.elementType===i?r:Ie(i,r),Gn(t,s),s.tag=1,fe(i)?(t=!0,oi(s)):t=!1,ds(s,n),Md(s,i,r),ta(s,i,r,n),ia(null,s,i,!0,t,n);case 19:return Hd(t,s,n);case 22:return Td(t,s,n)}throw Error(N(156,s.tag))};function tm(t,s){return Cc(t,s)}function Hh(t,s,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(t,s,n,i){return new Hh(t,s,n,i)}function ol(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ph(t){if(typeof t=="function")return ol(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Da)return 11;if(t===Ca)return 14}return 2}function gt(t,s){var n=t.alternate;return n===null?(n=De(t.tag,s,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=s,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,s=t.dependencies,n.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Xn(t,s,n,i,r,a){var l=2;if(i=t,typeof t=="function")ol(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case Qt:return Lt(n.children,r,a,s);case Ba:l=8,r|=8;break;case Sr:return t=De(12,n,s,r|2),t.elementType=Sr,t.lanes=a,t;case Br:return t=De(13,n,s,r),t.elementType=Br,t.lanes=a,t;case Dr:return t=De(19,n,s,r),t.elementType=Dr,t.lanes=a,t;case mc:return Ai(n,r,a,s);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case cc:l=10;break e;case dc:l=9;break e;case Da:l=11;break e;case Ca:l=14;break e;case tt:l=16,i=null;break e}throw Error(N(130,t==null?t:typeof t,""))}return s=De(l,n,s,r),s.elementType=t,s.type=i,s.lanes=a,s}function Lt(t,s,n,i){return t=De(7,t,i,s),t.lanes=n,t}function Ai(t,s,n,i){return t=De(22,t,i,s),t.elementType=mc,t.lanes=n,t.stateNode={isHidden:!1},t}function hr(t,s,n){return t=De(6,t,null,s),t.lanes=n,t}function pr(t,s,n){return s=De(4,t.children!==null?t.children:[],t.key,s),s.lanes=n,s.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},s}function Oh(t,s,n,i,r){this.tag=s,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gi(0),this.expirationTimes=Gi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gi(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function cl(t,s,n,i,r,a,l,o,c){return t=new Oh(t,s,n,o,c),s===1?(s=1,a===!0&&(s|=8)):s=0,a=De(3,null,null,s),t.current=a,a.stateNode=t,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qa(a),t}function _h(t,s,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gt,key:i==null?null:""+i,children:t,containerInfo:s,implementation:n}}function sm(t){if(!t)return yt;t=t._reactInternals;e:{if($t(t)!==t||t.tag!==1)throw Error(N(170));var s=t;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(fe(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(N(171))}if(t.tag===1){var n=t.type;if(fe(n))return sd(t,n,s)}return s}function nm(t,s,n,i,r,a,l,o,c){return t=cl(n,i,!0,t,r,a,l,o,c),t.context=sm(null),n=t.current,i=me(),r=pt(n),a=Ge(i,r),a.callback=s??null,ut(n,a,r),t.current.lanes=r,pn(t,r,i),ye(t,i),t}function Ti(t,s,n,i){var r=s.current,a=me(),l=pt(r);return n=sm(n),s.context===null?s.context=n:s.pendingContext=n,s=Ge(a,l),s.payload={element:t},i=i===void 0?null:i,i!==null&&(s.callback=i),t=ut(r,s,l),t!==null&&(Le(t,r,l,a),Vn(t,r,l)),l}function bi(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ko(t,s){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<s?n:s}}function dl(t,s){ko(t,s),(t=t.alternate)&&ko(t,s)}function Uh(){return null}var im=typeof reportError=="function"?reportError:function(t){console.error(t)};function ml(t){this._internalRoot=t}Fi.prototype.render=ml.prototype.render=function(t){var s=this._internalRoot;if(s===null)throw Error(N(409));Ti(t,s,null,null)};Fi.prototype.unmount=ml.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var s=t.containerInfo;_t(function(){Ti(null,t,null,null)}),s[Ke]=null}};function Fi(t){this._internalRoot=t}Fi.prototype.unstable_scheduleHydration=function(t){if(t){var s=Tc();t={blockedOn:null,target:t,priority:s};for(var n=0;n<nt.length&&s!==0&&s<nt[n].priority;n++);nt.splice(n,0,t),n===0&&Lc(t)}};function ul(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Li(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function So(){}function $h(t,s,n,i,r){if(r){if(typeof i=="function"){var a=i;i=function(){var m=bi(l);a.call(m)}}var l=nm(s,i,t,0,null,!1,!1,"",So);return t._reactRootContainer=l,t[Ke]=l.current,tn(t.nodeType===8?t.parentNode:t),_t(),l}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var m=bi(c);o.call(m)}}var c=cl(t,0,!1,null,null,!1,!1,"",So);return t._reactRootContainer=c,t[Ke]=c.current,tn(t.nodeType===8?t.parentNode:t),_t(function(){Ti(s,c,n,i)}),c}function Ri(t,s,n,i,r){var a=n._reactRootContainer;if(a){var l=a;if(typeof r=="function"){var o=r;r=function(){var c=bi(l);o.call(c)}}Ti(s,l,t,r)}else l=$h(n,s,t,r,i);return bi(l)}Ic=function(t){switch(t.tag){case 3:var s=t.stateNode;if(s.current.memoizedState.isDehydrated){var n=Fs(s.pendingLanes);n!==0&&(Ma(s,n|1),ye(s,Q()),!(L&6)&&(ys=Q()+500,bt()))}break;case 13:_t(function(){var i=Xe(t,1);if(i!==null){var r=me();Le(i,t,1,r)}}),dl(t,1)}};Ea=function(t){if(t.tag===13){var s=Xe(t,134217728);if(s!==null){var n=me();Le(s,t,134217728,n)}dl(t,134217728)}};Ac=function(t){if(t.tag===13){var s=pt(t),n=Xe(t,s);if(n!==null){var i=me();Le(n,t,s,i)}dl(t,s)}};Tc=function(){return R};Fc=function(t,s){var n=R;try{return R=t,s()}finally{R=n}};Lr=function(t,s,n){switch(s){case"input":if(Wr(t,n),s=n.name,n.type==="radio"&&s!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<n.length;s++){var i=n[s];if(i!==t&&i.form===t.form){var r=Ci(i);if(!r)throw Error(N(90));hc(i),Wr(i,r)}}}break;case"textarea":gc(t,n);break;case"select":s=n.value,s!=null&&as(t,!!n.multiple,s,!1)}};wc=rl;Nc=_t;var Vh={usingClientEntryPoint:!1,Events:[xn,Jt,Ci,vc,bc,rl]},Es={findFiberByHostInstance:It,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qh={bundleType:Es.bundleType,version:Es.version,rendererPackageName:Es.rendererPackageName,rendererConfig:Es.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Bc(t),t===null?null:t.stateNode},findFiberByHostInstance:Es.findFiberByHostInstance||Uh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rn.isDisabled&&Rn.supportsFiber)try{ki=Rn.inject(qh),_e=Rn}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vh;Ne.createPortal=function(t,s){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ul(s))throw Error(N(200));return _h(t,s,null,n)};Ne.createRoot=function(t,s){if(!ul(t))throw Error(N(299));var n=!1,i="",r=im;return s!=null&&(s.unstable_strictMode===!0&&(n=!0),s.identifierPrefix!==void 0&&(i=s.identifierPrefix),s.onRecoverableError!==void 0&&(r=s.onRecoverableError)),s=cl(t,1,!1,null,null,n,!1,i,r),t[Ke]=s.current,tn(t.nodeType===8?t.parentNode:t),new ml(s)};Ne.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var s=t._reactInternals;if(s===void 0)throw typeof t.render=="function"?Error(N(188)):(t=Object.keys(t).join(","),Error(N(268,t)));return t=Bc(s),t=t===null?null:t.stateNode,t};Ne.flushSync=function(t){return _t(t)};Ne.hydrate=function(t,s,n){if(!Li(s))throw Error(N(200));return Ri(null,t,s,!0,n)};Ne.hydrateRoot=function(t,s,n){if(!ul(t))throw Error(N(405));var i=n!=null&&n.hydratedSources||null,r=!1,a="",l=im;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),s=nm(s,null,t,1,n??null,r,!1,a,l),t[Ke]=s.current,tn(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[n,r]:s.mutableSourceEagerHydrationData.push(n,r);return new Fi(s)};Ne.render=function(t,s,n){if(!Li(s))throw Error(N(200));return Ri(null,t,s,!1,n)};Ne.unmountComponentAtNode=function(t){if(!Li(t))throw Error(N(40));return t._reactRootContainer?(_t(function(){Ri(null,null,t,!1,function(){t._reactRootContainer=null,t[Ke]=null})}),!0):!1};Ne.unstable_batchedUpdates=rl;Ne.unstable_renderSubtreeIntoContainer=function(t,s,n,i){if(!Li(n))throw Error(N(200));if(t==null||t._reactInternals===void 0)throw Error(N(38));return Ri(t,s,n,!1,i)};Ne.version="18.3.1-next-f1338f8080-20240426";function rm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rm)}catch(t){console.error(t)}}rm(),rc.exports=Ne;var Yh=rc.exports,Bo=Yh;Nr.createRoot=Bo.createRoot,Nr.hydrateRoot=Bo.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mn(){return mn=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},mn.apply(this,arguments)}var lt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(lt||(lt={}));const Do="popstate";function Gh(t){t===void 0&&(t={});function s(i,r){let{pathname:a,search:l,hash:o}=i.location;return xa("",{pathname:a,search:l,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:wi(r)}return Kh(s,n,null,t)}function X(t,s){if(t===!1||t===null||typeof t>"u")throw new Error(s)}function hl(t,s){if(!t){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Qh(){return Math.random().toString(36).substr(2,8)}function Co(t,s){return{usr:t.state,key:t.key,idx:s}}function xa(t,s,n,i){return n===void 0&&(n=null),mn({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof s=="string"?ws(s):s,{state:n,key:s&&s.key||i||Qh()})}function wi(t){let{pathname:s="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(s+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function ws(t){let s={};if(t){let n=t.indexOf("#");n>=0&&(s.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(s.search=t.substr(i),t=t.substr(0,i)),t&&(s.pathname=t)}return s}function Kh(t,s,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:a=!1}=i,l=r.history,o=lt.Pop,c=null,m=u();m==null&&(m=0,l.replaceState(mn({},l.state,{idx:m}),""));function u(){return(l.state||{idx:null}).idx}function y(){o=lt.Pop;let k=u(),g=k==null?null:k-m;m=k,c&&c({action:o,location:v.location,delta:g})}function h(k,g){o=lt.Push;let p=xa(v.location,k,g);m=u()+1;let f=Co(p,m),b=v.createHref(p);try{l.pushState(f,"",b)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;r.location.assign(b)}a&&c&&c({action:o,location:v.location,delta:1})}function w(k,g){o=lt.Replace;let p=xa(v.location,k,g);m=u();let f=Co(p,m),b=v.createHref(p);l.replaceState(f,"",b),a&&c&&c({action:o,location:v.location,delta:0})}function j(k){let g=r.location.origin!=="null"?r.location.origin:r.location.href,p=typeof k=="string"?k:wi(k);return p=p.replace(/ $/,"%20"),X(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let v={get action(){return o},get location(){return t(r,l)},listen(k){if(c)throw new Error("A history only accepts one active listener");return r.addEventListener(Do,y),c=k,()=>{r.removeEventListener(Do,y),c=null}},createHref(k){return s(r,k)},createURL:j,encodeLocation(k){let g=j(k);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:w,go(k){return l.go(k)}};return v}var zo;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(zo||(zo={}));function Xh(t,s,n){return n===void 0&&(n="/"),Zh(t,s,n)}function Zh(t,s,n,i){let r=typeof s=="string"?ws(s):s,a=pl(r.pathname||"/",n);if(a==null)return null;let l=am(t);Jh(l);let o=null;for(let c=0;o==null&&c<l.length;++c){let m=mp(a);o=op(l[c],m)}return o}function am(t,s,n,i){s===void 0&&(s=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(a,l,o)=>{let c={relativePath:o===void 0?a.path||"":o,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};c.relativePath.startsWith("/")&&(X(c.relativePath.startsWith(i),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(i.length));let m=xt([i,c.relativePath]),u=n.concat(c);a.children&&a.children.length>0&&(X(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+m+'".')),am(a.children,s,u,m)),!(a.path==null&&!a.index)&&s.push({path:m,score:ap(m,a.index),routesMeta:u})};return t.forEach((a,l)=>{var o;if(a.path===""||!((o=a.path)!=null&&o.includes("?")))r(a,l);else for(let c of lm(a.path))r(a,l,c)}),s}function lm(t){let s=t.split("/");if(s.length===0)return[];let[n,...i]=s,r=n.endsWith("?"),a=n.replace(/\?$/,"");if(i.length===0)return r?[a,""]:[a];let l=lm(i.join("/")),o=[];return o.push(...l.map(c=>c===""?a:[a,c].join("/"))),r&&o.push(...l),o.map(c=>t.startsWith("/")&&c===""?"/":c)}function Jh(t){t.sort((s,n)=>s.score!==n.score?n.score-s.score:lp(s.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const ep=/^:[\w-]+$/,tp=3,sp=2,np=1,ip=10,rp=-2,Wo=t=>t==="*";function ap(t,s){let n=t.split("/"),i=n.length;return n.some(Wo)&&(i+=rp),s&&(i+=sp),n.filter(r=>!Wo(r)).reduce((r,a)=>r+(ep.test(a)?tp:a===""?np:ip),i)}function lp(t,s){return t.length===s.length&&t.slice(0,-1).every((i,r)=>i===s[r])?t[t.length-1]-s[s.length-1]:0}function op(t,s,n){let{routesMeta:i}=t,r={},a="/",l=[];for(let o=0;o<i.length;++o){let c=i[o],m=o===i.length-1,u=a==="/"?s:s.slice(a.length)||"/",y=cp({path:c.relativePath,caseSensitive:c.caseSensitive,end:m},u),h=c.route;if(!y)return null;Object.assign(r,y.params),l.push({params:r,pathname:xt([a,y.pathname]),pathnameBase:xp(xt([a,y.pathnameBase])),route:h}),y.pathnameBase!=="/"&&(a=xt([a,y.pathnameBase]))}return l}function cp(t,s){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=dp(t.path,t.caseSensitive,t.end),r=s.match(n);if(!r)return null;let a=r[0],l=a.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((m,u,y)=>{let{paramName:h,isOptional:w}=u;if(h==="*"){let v=o[y]||"";l=a.slice(0,a.length-v.length).replace(/(.)\/+$/,"$1")}const j=o[y];return w&&!j?m[h]=void 0:m[h]=(j||"").replace(/%2F/g,"/"),m},{}),pathname:a,pathnameBase:l,pattern:t}}function dp(t,s,n){s===void 0&&(s=!1),n===void 0&&(n=!0),hl(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,o,c)=>(i.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,s?void 0:"i"),i]}function mp(t){try{return t.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return hl(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+s+").")),t}}function pl(t,s){if(s==="/")return t;if(!t.toLowerCase().startsWith(s.toLowerCase()))return null;let n=s.endsWith("/")?s.length-1:s.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const up=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hp=t=>up.test(t);function pp(t,s){s===void 0&&(s="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?ws(t):t,a;if(n)if(hp(n))a=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),hl(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?a=Mo(n.substring(1),"/"):a=Mo(n,s)}else a=s;return{pathname:a,search:fp(i),hash:yp(r)}}function Mo(t,s){let n=s.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function gr(t,s,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+s+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gp(t){return t.filter((s,n)=>n===0||s.route.path&&s.route.path.length>0)}function om(t,s){let n=gp(t);return s?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function cm(t,s,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=ws(t):(r=mn({},t),X(!r.pathname||!r.pathname.includes("?"),gr("?","pathname","search",r)),X(!r.pathname||!r.pathname.includes("#"),gr("#","pathname","hash",r)),X(!r.search||!r.search.includes("#"),gr("#","search","hash",r)));let a=t===""||r.pathname==="",l=a?"/":r.pathname,o;if(l==null)o=n;else{let y=s.length-1;if(!i&&l.startsWith("..")){let h=l.split("/");for(;h[0]==="..";)h.shift(),y-=1;r.pathname=h.join("/")}o=y>=0?s[y]:"/"}let c=pp(r,o),m=l&&l!=="/"&&l.endsWith("/"),u=(a||l===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(m||u)&&(c.pathname+="/"),c}const xt=t=>t.join("/").replace(/\/\/+/g,"/"),xp=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),fp=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,yp=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function jp(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const dm=["post","put","patch","delete"];new Set(dm);const vp=["get",...dm];new Set(vp);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function un(){return un=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},un.apply(this,arguments)}const gl=S.createContext(null),bp=S.createContext(null),Vt=S.createContext(null),Hi=S.createContext(null),qt=S.createContext({outlet:null,matches:[],isDataRoute:!1}),mm=S.createContext(null);function wp(t,s){let{relative:n}=s===void 0?{}:s;yn()||X(!1);let{basename:i,navigator:r}=S.useContext(Vt),{hash:a,pathname:l,search:o}=hm(t,{relative:n}),c=l;return i!=="/"&&(c=l==="/"?i:xt([i,l])),r.createHref({pathname:c,search:o,hash:a})}function yn(){return S.useContext(Hi)!=null}function jn(){return yn()||X(!1),S.useContext(Hi).location}function um(t){S.useContext(Vt).static||S.useLayoutEffect(t)}function Np(){let{isDataRoute:t}=S.useContext(qt);return t?Fp():kp()}function kp(){yn()||X(!1);let t=S.useContext(gl),{basename:s,future:n,navigator:i}=S.useContext(Vt),{matches:r}=S.useContext(qt),{pathname:a}=jn(),l=JSON.stringify(om(r,n.v7_relativeSplatPath)),o=S.useRef(!1);return um(()=>{o.current=!0}),S.useCallback(function(m,u){if(u===void 0&&(u={}),!o.current)return;if(typeof m=="number"){i.go(m);return}let y=cm(m,JSON.parse(l),a,u.relative==="path");t==null&&s!=="/"&&(y.pathname=y.pathname==="/"?s:xt([s,y.pathname])),(u.replace?i.replace:i.push)(y,u.state,u)},[s,i,l,a,t])}function hm(t,s){let{relative:n}=s===void 0?{}:s,{future:i}=S.useContext(Vt),{matches:r}=S.useContext(qt),{pathname:a}=jn(),l=JSON.stringify(om(r,i.v7_relativeSplatPath));return S.useMemo(()=>cm(t,JSON.parse(l),a,n==="path"),[t,l,a,n])}function Sp(t,s){return Bp(t,s)}function Bp(t,s,n,i){yn()||X(!1);let{navigator:r}=S.useContext(Vt),{matches:a}=S.useContext(qt),l=a[a.length-1],o=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let m=jn(),u;if(s){var y;let k=typeof s=="string"?ws(s):s;c==="/"||(y=k.pathname)!=null&&y.startsWith(c)||X(!1),u=k}else u=m;let h=u.pathname||"/",w=h;if(c!=="/"){let k=c.replace(/^\//,"").split("/");w="/"+h.replace(/^\//,"").split("/").slice(k.length).join("/")}let j=Xh(t,{pathname:w}),v=Mp(j&&j.map(k=>Object.assign({},k,{params:Object.assign({},o,k.params),pathname:xt([c,r.encodeLocation?r.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?c:xt([c,r.encodeLocation?r.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),a,n,i);return s&&v?S.createElement(Hi.Provider,{value:{location:un({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:lt.Pop}},v):v}function Dp(){let t=Tp(),s=jp(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},s),n?S.createElement("pre",{style:r},n):null,null)}const Cp=S.createElement(Dp,null);class zp extends S.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,n){return n.location!==s.location||n.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:n.error,location:n.location,revalidation:s.revalidation||n.revalidation}}componentDidCatch(s,n){console.error("React Router caught the following error during render",s,n)}render(){return this.state.error!==void 0?S.createElement(qt.Provider,{value:this.props.routeContext},S.createElement(mm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Wp(t){let{routeContext:s,match:n,children:i}=t,r=S.useContext(gl);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(qt.Provider,{value:s},i)}function Mp(t,s,n,i){var r;if(s===void 0&&(s=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var a;if(!n)return null;if(n.errors)t=n.matches;else if((a=i)!=null&&a.v7_partialHydration&&s.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let l=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let u=l.findIndex(y=>y.route.id&&(o==null?void 0:o[y.route.id])!==void 0);u>=0||X(!1),l=l.slice(0,Math.min(l.length,u+1))}let c=!1,m=-1;if(n&&i&&i.v7_partialHydration)for(let u=0;u<l.length;u++){let y=l[u];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(m=u),y.route.id){let{loaderData:h,errors:w}=n,j=y.route.loader&&h[y.route.id]===void 0&&(!w||w[y.route.id]===void 0);if(y.route.lazy||j){c=!0,m>=0?l=l.slice(0,m+1):l=[l[0]];break}}}return l.reduceRight((u,y,h)=>{let w,j=!1,v=null,k=null;n&&(w=o&&y.route.id?o[y.route.id]:void 0,v=y.route.errorElement||Cp,c&&(m<0&&h===0?(Lp("route-fallback"),j=!0,k=null):m===h&&(j=!0,k=y.route.hydrateFallbackElement||null)));let g=s.concat(l.slice(0,h+1)),p=()=>{let f;return w?f=v:j?f=k:y.route.Component?f=S.createElement(y.route.Component,null):y.route.element?f=y.route.element:f=u,S.createElement(Wp,{match:y,routeContext:{outlet:u,matches:g,isDataRoute:n!=null},children:f})};return n&&(y.route.ErrorBoundary||y.route.errorElement||h===0)?S.createElement(zp,{location:n.location,revalidation:n.revalidation,component:v,error:w,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var pm=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(pm||{}),gm=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(gm||{});function Ep(t){let s=S.useContext(gl);return s||X(!1),s}function Ip(t){let s=S.useContext(bp);return s||X(!1),s}function Ap(t){let s=S.useContext(qt);return s||X(!1),s}function xm(t){let s=Ap(),n=s.matches[s.matches.length-1];return n.route.id||X(!1),n.route.id}function Tp(){var t;let s=S.useContext(mm),n=Ip(),i=xm();return s!==void 0?s:(t=n.errors)==null?void 0:t[i]}function Fp(){let{router:t}=Ep(pm.UseNavigateStable),s=xm(gm.UseNavigateStable),n=S.useRef(!1);return um(()=>{n.current=!0}),S.useCallback(function(r,a){a===void 0&&(a={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,un({fromRouteId:s},a)))},[t,s])}const Eo={};function Lp(t,s,n){Eo[t]||(Eo[t]=!0)}function Rp(t,s){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function D(t){X(!1)}function Hp(t){let{basename:s="/",children:n=null,location:i,navigationType:r=lt.Pop,navigator:a,static:l=!1,future:o}=t;yn()&&X(!1);let c=s.replace(/^\/*/,"/"),m=S.useMemo(()=>({basename:c,navigator:a,static:l,future:un({v7_relativeSplatPath:!1},o)}),[c,o,a,l]);typeof i=="string"&&(i=ws(i));let{pathname:u="/",search:y="",hash:h="",state:w=null,key:j="default"}=i,v=S.useMemo(()=>{let k=pl(u,c);return k==null?null:{location:{pathname:k,search:y,hash:h,state:w,key:j},navigationType:r}},[c,u,y,h,w,j,r]);return v==null?null:S.createElement(Vt.Provider,{value:m},S.createElement(Hi.Provider,{children:n,value:v}))}function Pp(t){let{children:s,location:n}=t;return Sp(fa(s),n)}new Promise(()=>{});function fa(t,s){s===void 0&&(s=[]);let n=[];return S.Children.forEach(t,(i,r)=>{if(!S.isValidElement(i))return;let a=[...s,r];if(i.type===S.Fragment){n.push.apply(n,fa(i.props.children,a));return}i.type!==D&&X(!1),!i.props.index||!i.props.children||X(!1);let l={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(l.children=fa(i.props.children,a)),n.push(l)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ya(){return ya=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ya.apply(this,arguments)}function Op(t,s){if(t==null)return{};var n={},i=Object.keys(t),r,a;for(a=0;a<i.length;a++)r=i[a],!(s.indexOf(r)>=0)&&(n[r]=t[r]);return n}function _p(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Up(t,s){return t.button===0&&(!s||s==="_self")&&!_p(t)}const $p=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Vp="6";try{window.__reactRouterVersion=Vp}catch{}const qp="startTransition",Io=Fm[qp];function Yp(t){let{basename:s,children:n,future:i,window:r}=t,a=S.useRef();a.current==null&&(a.current=Gh({window:r,v5Compat:!0}));let l=a.current,[o,c]=S.useState({action:l.action,location:l.location}),{v7_startTransition:m}=i||{},u=S.useCallback(y=>{m&&Io?Io(()=>c(y)):c(y)},[c,m]);return S.useLayoutEffect(()=>l.listen(u),[l,u]),S.useEffect(()=>Rp(i),[i]),S.createElement(Hp,{basename:s,children:n,location:o.location,navigationType:o.action,navigator:l,future:i})}const Gp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Qp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,x=S.forwardRef(function(s,n){let{onClick:i,relative:r,reloadDocument:a,replace:l,state:o,target:c,to:m,preventScrollReset:u,viewTransition:y}=s,h=Op(s,$p),{basename:w}=S.useContext(Vt),j,v=!1;if(typeof m=="string"&&Qp.test(m)&&(j=m,Gp))try{let f=new URL(window.location.href),b=m.startsWith("//")?new URL(f.protocol+m):new URL(m),B=pl(b.pathname,w);b.origin===f.origin&&B!=null?m=B+b.search+b.hash:v=!0}catch{}let k=wp(m,{relative:r}),g=Kp(m,{replace:l,state:o,target:c,preventScrollReset:u,relative:r,viewTransition:y});function p(f){i&&i(f),f.defaultPrevented||g(f)}return S.createElement("a",ya({},h,{href:j||k,onClick:v||a?i:p,ref:n,target:c}))});var Ao;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ao||(Ao={}));var To;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(To||(To={}));function Kp(t,s){let{target:n,replace:i,state:r,preventScrollReset:a,relative:l,viewTransition:o}=s===void 0?{}:s,c=Np(),m=jn(),u=hm(t,{relative:l});return S.useCallback(y=>{if(Up(y,n)){y.preventDefault();let h=i!==void 0?i:wi(m)===wi(u);c(t,{replace:h,state:r,preventScrollReset:a,relative:l,viewTransition:o})}},[m,c,u,i,r,n,t,a,l,o])}const d=t=>`/Hrify-digital-site/${t.startsWith("/")?t.slice(1):t}`,Xp=d("assets/images/Hrify-dark-bg.webp"),Is={services:[{category:"Web Development",items:[{to:"/businessweb",label:"Business Web Design"},{to:"/resweb",label:"Responsive Web Design"},{to:"/cmsweb",label:"CMS Web Design"},{to:"/webapp",label:"Web Applications"},{to:"/ecommerceweb",label:"E-Commerce Solutions"}]},{category:"Digital Solutions",items:[{to:"/mobileapp",label:"Mobile Applications"},{to:"/awsimpl",label:"AWS Services"},{to:"/digitalmarketing",label:"Digital Marketing"},{to:"/designbranding",label:"Design & Branding"},{to:"/marketting",label:"Marketing Support"}]},{category:"Security & IT",items:[{to:"/cybersecurity",label:"Cybersecurity"},{to:"/networksecurity",label:"Network Security"},{to:"/cloudnative",label:"Cloud Solutions"},{to:"/infrastructure",label:"Infrastructure"},{to:"/enterprise",label:"Enterprise Solutions"}]},{category:"AI & ML",items:[{to:"/datascience",label:"Data Science"},{to:"/analytics",label:"Analytics"},{to:"/ai_nlp",label:"AI & NLP"},{to:"/ml_mlops",label:"ML & MLOps"},{to:"/bigdata_datalake",label:"Big Data"}]}],products:[{to:"/sonachala",label:"Sonachala"}],careers:[{to:"/careers",label:"Careers"},{to:"/internship",label:"Internship"},{to:"/referral-program",label:"Referral Program"}]},Zp=()=>{const[t,s]=S.useState(!1),[n,i]=S.useState(!1),[r,a]=S.useState([]),[l,o]=S.useState([]),c=jn();S.useEffect(()=>{const v=w(()=>{s(window.scrollY>100)},100);return window.addEventListener("scroll",v),()=>window.removeEventListener("scroll",v)},[]),S.useEffect(()=>{const j=v=>{v.key==="Escape"&&u()};return n&&window.addEventListener("keydown",j),()=>window.removeEventListener("keydown",j)},[n]);const m=()=>{i(!n),a([]),o([])},u=()=>{i(!1),a([]),o([])},y=j=>{a(v=>v.includes(j)?v.filter(k=>k!==j):[...v,j])},h=j=>c.pathname===j?"active":"",w=(j,v)=>{let k;return(...g)=>{clearTimeout(k),k=setTimeout(()=>j(...g),v)}};return e.jsxs("header",{className:`modern-navbar-header ${t?"scrolled":""}`,children:[e.jsx("nav",{className:"navbar navbar-expand-lg navbar-light modern-navbar",children:e.jsxs("div",{className:"container-fluid",children:[e.jsx(x,{className:"navbar-brand",to:"/",onClick:u,children:e.jsx("img",{src:Xp,alt:"Hrify Digital",style:{marginLeft:"100px",height:"60px",width:"auto"}})}),e.jsx("button",{className:`navbar-toggler ${n?"active":""}`,type:"button",onClick:m,"aria-controls":"navbarNav","aria-expanded":n,"aria-label":"Toggle navigation",children:e.jsx("span",{className:"navbar-toggler-icon"})}),e.jsx("div",{className:"collapse navbar-collapse desktop-menu",id:"navbarNav",children:e.jsxs("ul",{className:"navbar-nav ms-auto",children:[e.jsx("li",{className:"nav-item",children:e.jsx(x,{className:`nav-link ${h("/")}`,to:"/",onClick:u,children:"Home"})}),e.jsx("li",{className:"nav-item",children:e.jsx(x,{className:`nav-link ${h("/about")}`,to:"/about",onClick:u,children:"About"})}),e.jsxs("li",{className:"nav-item dropdown",children:[e.jsx("a",{className:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Services"}),e.jsxs("ul",{className:"dropdown-menu services-dropdown",children:[e.jsxs("li",{className:"dropdown-submenu",children:[e.jsx("a",{className:"dropdown-item dropdown-toggle",href:"#","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Design & Development"}),e.jsxs("ul",{className:"dropdown-menu",children:[e.jsxs("li",{className:"dropdown-submenu",children:[e.jsx("a",{className:"dropdown-item dropdown-toggle",href:"#","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Web Design"}),e.jsxs("ul",{className:"dropdown-menu",children:[e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/businessweb")}`,to:"/businessweb",onClick:u,children:"Business Web Design"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/resweb")}`,to:"/resweb",onClick:u,children:"Responsive Web Design"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/cmsweb")}`,to:"/cmsweb",onClick:u,children:"CMS Web Design"})})]})]}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/webmaintenance")}`,to:"/webmaintenance",onClick:u,children:"Web Maintenance"})}),e.jsxs("li",{className:"dropdown-submenu",children:[e.jsx("a",{className:"dropdown-item dropdown-toggle",href:"#","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Web Application"}),e.jsxs("ul",{className:"dropdown-menu",children:[e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/customweb")}`,to:"/customweb",onClick:u,children:"Custom Web Applications"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/ecommerceweb")}`,to:"/ecommerceweb",onClick:u,children:"E-Commerce Web Solutions"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/matrimonyweb")}`,to:"/matrimonyweb",onClick:u,children:"Matrimony Web Solutions"})})]})]}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/mobileapp")}`,to:"/mobileapp",onClick:u,children:"Mobile Application"})})]})]}),e.jsxs("li",{className:"dropdown-submenu",children:[e.jsx("a",{className:"dropdown-item dropdown-toggle",href:"#","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Business Solutions"}),e.jsxs("ul",{className:"dropdown-menu",children:[e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/domains")}`,to:"/domains",onClick:u,children:"Domains, Hosting and Cloud Solutions"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/personalemail")}`,to:"/personalemail",onClick:u,children:"Personal and Enterprise Email Solutions"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/googlework")}`,to:"/googlework",onClick:u,children:"Google Work Partner"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/emailcampaign")}`,to:"/emailcampaign",onClick:u,children:"Email Campaign Management Solutions"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/awsimpl")}`,to:"/awsimpl",onClick:u,children:"AWS Services Implementations"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/designbranding")}`,to:"/designbranding",onClick:u,children:"Design and Branding Solutions"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/digitalmarketing")}`,to:"/digitalmarketing",onClick:u,children:"Digital Marketing & Social Media Solutions"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/marketting")}`,to:"/marketting",onClick:u,children:"Marketing Support Services"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/webaudit")}`,to:"/webaudit",onClick:u,children:"Website Auditing Consulting Services"})})]})]}),e.jsxs("li",{className:"dropdown-submenu",children:[e.jsx("a",{className:"dropdown-item dropdown-toggle",href:"#","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Networking Solutions"}),e.jsxs("ul",{className:"dropdown-menu",children:[e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/systemintegration")}`,to:"/systemintegration",onClick:u,children:"System Integration & Maintenance"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/infrastructure")}`,to:"/infrastructure",onClick:u,children:"Infrastructure Management"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/serverstorage")}`,to:"/serverstorage",onClick:u,children:"Server & Storage"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/networksecurity")}`,to:"/networksecurity",onClick:u,children:"Network Security"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/structuredcabling")}`,to:"/structuredcabling",onClick:u,children:"Structured Cabling"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/cloudnative")}`,to:"/cloudnative",onClick:u,children:"Cloud Native Solutions"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/workplace")}`,to:"/workplace",onClick:u,children:"Workplace Surveillance"})})]})]}),e.jsxs("li",{className:"dropdown-submenu",children:[e.jsx("a",{className:"dropdown-item dropdown-toggle",href:"#","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Cybersecurity"}),e.jsxs("ul",{className:"dropdown-menu",children:[e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/ciam")}`,to:"/ciam",onClick:u,children:"CIAM"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/workforceidentity")}`,to:"/workforceidentity",onClick:u,children:"Workforce Identity"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/securityengineering")}`,to:"/securityengineering",onClick:u,children:"Security Engineering"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/zerotrustarchitecture")}`,to:"/zerotrustarchitecture",onClick:u,children:"Zero Trust Architecture"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/governanceriskmanagementcompliance")}`,to:"/governanceriskmanagementcompliance",onClick:u,children:"Governance Risk Management & Compliance"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/cyberdefenseinvestigation")}`,to:"/cyberdefenseinvestigation",onClick:u,children:"Cyber Defense & Investigation"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/cyberadvisory")}`,to:"/cyberadvisory",onClick:u,children:"Cyber Advisory"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/cyberresilience")}`,to:"/cyberresilience",onClick:u,children:"Cyber Resilience"})})]})]}),e.jsxs("li",{className:"dropdown-submenu",children:[e.jsx("a",{className:"dropdown-item dropdown-toggle",href:"#","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Blockchain"}),e.jsxs("ul",{className:"dropdown-menu",children:[e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/distributedtrust")}`,to:"/distributedtrust",onClick:u,children:"Distributed Trust"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/ethereum")}`,to:"/ethereum",onClick:u,children:"Ethereum"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/hyperledger")}`,to:"/hyperledger",onClick:u,children:"Hyperledger"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/dapps")}`,to:"/dapps",onClick:u,children:"dApps"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/nft")}`,to:"/nft",onClick:u,children:"NFT"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/ipfs")}`,to:"/ipfs",onClick:u,children:"IPFS"})})]})]}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/enterprise")}`,to:"/enterprise",onClick:u,children:"Enterprise"})}),e.jsxs("li",{className:"dropdown-submenu",children:[e.jsx("a",{className:"dropdown-item dropdown-toggle",href:"#","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Managed Services"}),e.jsxs("ul",{className:"dropdown-menu",children:[e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/securitymanagement")}`,to:"/securitymanagement",onClick:u,children:"Security Management"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/sitereliability")}`,to:"/sitereliability",onClick:u,children:"Site Reliability"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/monitoringmaintenance")}`,to:"/monitoringmaintenance",onClick:u,children:"Monitoring & Maintenance"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/helpdesk")}`,to:"/helpdesk",onClick:u,children:"Help Desk / End User Compute"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/vendormanagement")}`,to:"/vendormanagement",onClick:u,children:"Vendor Management"})})]})]}),e.jsxs("li",{className:"dropdown-submenu",children:[e.jsx("a",{className:"dropdown-item dropdown-toggle",href:"#","data-bs-toggle":"dropdown","aria-expanded":"false",children:"AI & ML"}),e.jsxs("ul",{className:"dropdown-menu",children:[e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/internetofthings")}`,to:"/internetofthings",onClick:u,children:"internet of things(iot)"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/ai_nlp")}`,to:"/ai_nlp",onClick:u,children:"Ai & Nlp"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/computervision")}`,to:"/computervision",onClick:u,children:"computer vision"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/ml_mlops")}`,to:"/ml_mlops",onClick:u,children:"ML,ML Ops"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/datascience")}`,to:"/datascience",onClick:u,children:"Data Science"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/analytics")}`,to:"/analytics",onClick:u,children:"Analytics"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/reports")}`,to:"/reports",onClick:u,children:"Reports"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/bigdata_datalake")}`,to:"/bigdata_datalake",onClick:u,children:"Big Data ,Data Lake"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/datafabric")}`,to:"/datafabric",onClick:u,children:"Data Fabric"})})]})]}),e.jsxs("li",{className:"dropdown-submenu",children:[e.jsx("a",{className:"dropdown-item dropdown-toggle",href:"#","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Quality Engineering"}),e.jsxs("ul",{className:"dropdown-menu",children:[e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/qa_consulting_strategy")}`,to:"/qa_consulting_strategy",onClick:u,children:"QA Consulting & Strategy"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/agile_testing")}`,to:"/agile_testing",onClick:u,children:"Agile Testing"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/independent_certification")}`,to:"/independent_certification",onClick:u,children:"Independent Certification"})}),e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h("/managed_testing_services")}`,to:"/managed_testing_services",onClick:u,children:"Managed Testing Services"})})]})]})]})]}),e.jsxs("li",{className:"nav-item dropdown",children:[e.jsx("a",{className:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Products"}),e.jsx("ul",{className:"dropdown-menu",children:Is.products.map(j=>e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h(j.to)}`,to:j.to,onClick:u,children:j.label})},j.to))})]}),e.jsxs("li",{className:"nav-item dropdown",children:[e.jsx("a",{className:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Careers"}),e.jsx("ul",{className:"dropdown-menu",children:Is.careers.map(j=>e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h(j.to)}`,to:j.to,onClick:u,children:j.label})},j.to))})]}),e.jsx("li",{className:"nav-item",children:e.jsx(x,{className:"btn btn-primary contact-btn",to:"/contact",onClick:u,children:"Contact Us"})})]})})]})}),e.jsx("div",{className:`mobile-menu-overlay ${n?"active":""}`,onClick:u,children:e.jsxs("div",{className:"mobile-menu",onClick:j=>j.stopPropagation(),children:[e.jsx("button",{className:"close-btn",onClick:u,"aria-label":"Close menu",children:"×"}),e.jsxs("ul",{className:"mobile-nav",children:[e.jsx("li",{children:e.jsx(x,{className:h("/"),to:"/",onClick:u,children:"Home"})}),e.jsx("li",{children:e.jsx(x,{className:h("/about"),to:"/about",onClick:u,children:"About"})}),e.jsxs("li",{className:"nav-item dropdown",children:[e.jsx("a",{className:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Services"}),e.jsxs("div",{className:"dropdown-menu mega-menu",children:["  ",e.jsx("div",{className:"container",children:e.jsx("div",{className:"row g-4",children:Is.services.map((j,v)=>e.jsxs("div",{className:"col-lg-3 col-md-6",children:[e.jsx("h6",{className:"dropdown-header",children:j.category}),e.jsx("ul",{className:"list-unstyled",children:j.items.map(k=>e.jsx("li",{children:e.jsx(x,{className:`dropdown-item ${h(k.to)}`,to:k.to,onClick:u,children:k.label})},k.to))})]},v))})})]})]}),e.jsxs("li",{className:`mobile-dropdown ${r.includes("products")?"active":""}`,children:[e.jsx("button",{className:"mobile-toggle",onClick:()=>y("products"),onKeyDown:j=>{(j.key==="Enter"||j.key===" ")&&y("products")},role:"button",tabIndex:0,"aria-expanded":r.includes("products"),"aria-controls":"products-submenu",children:"Products"}),e.jsx("ul",{className:"mobile-submenu",id:"products-submenu",children:Is.products.map(j=>e.jsx("li",{children:e.jsx(x,{className:h(j.to),to:j.to,onClick:u,children:j.label})},j.to))})]}),e.jsxs("li",{className:`mobile-dropdown ${r.includes("careers")?"active":""}`,children:[e.jsx("button",{className:"mobile-toggle",onClick:()=>y("careers"),onKeyDown:j=>{(j.key==="Enter"||j.key===" ")&&y("careers")},role:"button",tabIndex:0,"aria-expanded":r.includes("careers"),"aria-controls":"careers-submenu",children:"Careers"}),e.jsx("ul",{className:"mobile-submenu",id:"careers-submenu",children:Is.careers.map(j=>e.jsx("li",{children:e.jsx(x,{className:h(j.to),to:j.to,onClick:u,children:j.label})},j.to))})]}),e.jsx("li",{children:e.jsx(x,{className:h("/contact"),to:"/contact",onClick:u,children:"Contact Us"})})]})]})})]})},Jp=d("assets/images/Hrify-white-bg.webp");d("assets/images/footer-icon/fb.webp");d("assets/images/youtube-icon.webp");d("assets/images/footer-icon/x.webp");d("assets/images/footer-icon/linkdin.webp");d("assets/images/footer-icon/insta.webp");d("assets/images/whatsapp_symbol.svg.webp");const eg=()=>e.jsx(e.Fragment,{children:e.jsx("footer",{style:{backgroundColor:"black"},className:"container-fluid p-5 fw-normal",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-12 col-lg-8 col-md-8",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-12 col-md-4 mb-4",style:{textAlign:"left"},children:[e.jsx("h6",{style:{fontWeight:"400",color:"#686D76"},children:"Home"}),e.jsx("h6",{style:{fontWeight:"400",color:"#686D76"},children:"About"}),e.jsx("h6",{style:{fontWeight:"400",color:"#686D76"},children:"Contact"}),e.jsx("h6",{style:{fontWeight:"400",color:"#686D76"},children:"Careers"}),e.jsx("h6",{style:{fontWeight:"400",color:"#686D76"},children:"Clients"}),e.jsx("h6",{style:{fontWeight:"400",color:"#686D76"},children:"Responsive Web Design"}),e.jsx("h6",{style:{fontWeight:"400",color:"#686D76"},children:"Web Design"}),e.jsx("h6",{style:{fontWeight:"400",color:"#686D76"},children:"Web Maintenance"})]}),e.jsxs("div",{className:"col-12 col-md-4 mb-4",style:{textAlign:"left"},children:[e.jsx("h6",{style:{fontWeight:"400",color:"#686D76"},children:"Custom Web Applications"}),e.jsx("h6",{style:{fontWeight:"400",color:"#686D76"},children:"E Commerce Web Solutions"}),e.jsx("h6",{style:{fontWeight:"400",color:"#686D76"},children:"Business Web Design"}),e.jsx("h6",{style:{fontWeight:"400",color:"#686D76"},children:"CMS Web Design"}),e.jsx("h6",{style:{fontWeight:"400",color:"#686D76"},children:"Web Application"}),e.jsx("h6",{style:{fontWeight:"400",color:"#686D76"},children:"Matrimony Web Solutions"}),e.jsx("h6",{style:{fontWeight:"400",color:"#686D76"},children:"Business Solutions"}),e.jsx("h6",{style:{fontWeight:"400",color:"#686D76"},children:"Talent Management"})]}),e.jsxs("div",{className:"col-12 col-md-4 mb-4",style:{textAlign:"left"},children:[e.jsx("h6",{style:{fontWeight:"400",color:"#686D76"},children:"Domains, Hosting and Cloud"}),e.jsx("h6",{style:{fontWeight:"400",color:"#686D76"},children:"Google Work Partner"}),e.jsx("h6",{style:{fontWeight:"400",color:"#686D76"},children:"AWS Services Implementations"}),e.jsx("h6",{style:{fontWeight:"400",color:"#686D76"},children:"Digital Marketing and Social Media"}),e.jsx("h6",{style:{fontWeight:"400",color:"#686D76"},children:"Mobile Applications"}),e.jsx("h6",{style:{fontWeight:"400",color:"#686D76"},children:"Marketing Support Services"}),e.jsx("h6",{style:{fontWeight:"400",color:"#686D76"},children:"Personal and Enterprise Email"}),e.jsx("h6",{style:{fontWeight:"400",color:"#686D76"},children:"Email Campaign Management"})]})]})}),e.jsxs("div",{className:"col-12 col-lg-4 col-md-4 d-flex flex-column justify-content-center align-items-center",children:[e.jsx("div",{className:"py-2 mb-3 d-flex justify-content-center align-items-center",children:e.jsx("img",{src:Jp,style:{width:"auto",height:"70px",display:"block"},alt:"HRify Logo"})}),e.jsx("p",{style:{fontSize:"15px",color:"#686D76",textAlign:"center"},className:"mb-4",children:e.jsx("a",{href:"mailto:hrifydigital@gmail.com",children:"hrifydigital@gmail.com"})}),e.jsx("p",{style:{fontSize:"15px",color:"#686D76",textAlign:"center"},className:"mb-2",children:e.jsx("a",{href:"tel:+918438438413",children:"+91 8438438413"})}),e.jsxs("div",{className:"d-flex justify-content-center align-items-center mt-3",children:[e.jsx("a",{href:"https://www.facebook.com/profile.php?id=61559888076422",style:{color:"#686D76",margin:"0 10px",fontSize:"20px",textDecoration:"none"},children:"f"}),e.jsx("a",{href:"http://www.youtube.com/@Jkglobalitsolutions_official",style:{color:"#686D76",margin:"0 10px",fontSize:"20px",textDecoration:"none"},children:"▶"}),e.jsx("a",{href:"https://x.com/Jkglobalitsol",style:{color:"#686D76",margin:"0 10px",fontSize:"20px",textDecoration:"none"},children:"𝕏"}),e.jsx("a",{href:"https://www.linkedin.com/company/jk-global-it-solutions/",style:{color:"#686D76",margin:"0 10px",fontSize:"20px",textDecoration:"none"},children:"in"}),e.jsx("a",{href:"https://www.instagram.com/jkglobalitsolutions_officials/",style:{color:"#686D76",margin:"0 10px",fontSize:"20px",textDecoration:"none"},children:"📷"}),e.jsx("a",{href:`https://api.whatsapp.com/send?phone=${encodeURIComponent("+91 8438438413")}`,style:{color:"#686D76",margin:"0 10px",fontSize:"20px",textDecoration:"none"},children:"💬"})]})]})]})})}),Fo=d("assets/images/HomeSlider/AI&ML.png"),Lo=d("assets/images/HomeSlider/BlockChain.png"),Ro=d("assets/images/HomeSlider/BusinessSolutions.png"),Ho=d("assets/images/HomeSlider/CyberSecurity.png"),Po=d("assets/images/HomeSlider/Design&Development.png"),Oo=d("assets/images/HomeSlider/Enterprise.png"),_o=d("assets/images/HomeSlider/ManagedService.png"),Uo=d("assets/images/HomeSlider/NetworkingSolutions.png"),$o=d("assets/images/HomeSlider/QualityEngineering.png"),tg=d("assets/images/Talent/img3-(2).webp"),sg=d("assets/images/Talent/im7.webp");d("assets/images/Talent/icon3-(2).webp");d("assets/images/Talent/icon4-(2).webp");d("assets/images/Talent/icon5-(2).webp");d("assets/images/Talent/icon6-(2).webp");const ng=d("assets/images/OurDigital.png"),ig=()=>(S.useEffect(()=>{var u,y;const t=document.querySelector(".slides");if(!t)return;const s=document.querySelectorAll(".slide").length,n=100;let i=0,r;const a=h=>{t.style.transition="transform 0.5s ease",t.style.transform=`translateX(-${h*n}%)`,i=h,h>=s/2&&setTimeout(()=>{t.style.transition="none",t.style.transform="translateX(0)",i=0},500)},l=()=>{a(i+1)},o=()=>{i>0?a(i-1):(t.style.transition="none",t.style.transform=`translateX(-${(s/2-1)*n}%)`,i=s/2-1,setTimeout(()=>{t.style.transition="transform 0.5s ease",a(i-1)},0))},c=()=>{r=setInterval(l,6e3)},m=()=>{clearInterval(r)};return(u=document.querySelector(".next"))==null||u.addEventListener("click",()=>{l(),m(),c()}),(y=document.querySelector(".prev"))==null||y.addEventListener("click",()=>{o(),m(),c()}),c(),()=>{m()}},[]),e.jsxs("div",{children:[e.jsxs("div",{className:"slider",children:[e.jsxs("div",{className:"slides",children:[e.jsx("div",{className:"slide",children:e.jsx("img",{src:Po,alt:"Design & Development"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:Ro,alt:"Business Solutions"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:Ho,alt:"Cyber Security"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:Uo,alt:"Networking Solutions"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:Lo,alt:"Block Chain"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:Oo,alt:"Enterprise"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:_o,alt:"Managed Service"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:Fo,alt:"AI & ML"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:$o,alt:"Quality Engineering"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:Po,alt:"Design & Development"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:Ro,alt:"Business Solutions"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:Ho,alt:"Cyber Security"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:Uo,alt:"Networking Solutions"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:Lo,alt:"Block Chain"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:Oo,alt:"Enterprise"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:_o,alt:"Managed Service"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:Fo,alt:"AI & ML"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:$o,alt:"Quality Engineering"})})]}),e.jsx("button",{className:"nav-button prev",children:"❮"}),e.jsx("button",{className:"nav-button next",children:"❯"})]}),e.jsx("div",{className:"container p-4",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsxs("div",{className:"col-12 col-lg-8",children:[e.jsx("h3",{className:"fw-bolder",style:{color:"#1B8DBB"},children:"Software Development"})," ",e.jsx("br",{}),e.jsx("p",{style:{fontFamily:"urbanist"},children:"Our Software Development Services turn your ideas into innovative, functional, and scalable solutions tailored to your business needs. We provide end-to-end services, including requirements analysis, design, development, testing, and deployment, ensuring a seamless process. Using the latest technologies and agile methodologies, we deliver secure, efficient, and user-friendly software. Whether you need custom applications, system integration, or software enhancements, our solutions are designed to streamline operations, boost productivity, and drive business success."})]}),e.jsx("div",{className:"col-12 col-lg-4",children:e.jsx("img",{className:"img-fluid",src:tg,alt:""})})]})}),e.jsx("div",{className:"container mt-5",children:e.jsx("img",{src:ng,alt:"Our Digital Services",className:"img-fluid"})}),e.jsxs("div",{className:"container p-lg-5 p-3",children:[e.jsx("h3",{className:"text-center fw-bolder",style:{color:"#1B8DBB"},children:"Why Choose Us?"}),e.jsxs("div",{className:"row align-items-center",children:[e.jsxs("div",{className:"col-12 col-lg-8",children:[e.jsxs("p",{className:"fw-bolder",style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",color:"#1B8DBB"}}),"  Commitment to core values and mission empowers clients with effective solutions."]}),e.jsxs("p",{className:"fw-bolder",style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",color:"#1B8DBB"}}),"   Maintaining client trust and delivering exceptional results consistently."]}),e.jsxs("p",{className:"fw-bolder",style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",color:"#1B8DBB"}}),"  Skilled experts and established processes ensure efficient business support."]}),e.jsxs("p",{className:"fw-bolder",style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",color:"#1B8DBB"}}),"  Prioritizing clients' technological investments for optimal outcomes."]}),e.jsxs("p",{className:"fw-bolder",style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",color:"#1B8DBB"}}),"  Leading software development company in Tiruvannamalai, dedicated to client satisfaction."]})]}),e.jsx("div",{className:"col-12 col-lg-4 text-center",children:e.jsx("img",{className:"img-fluid col-9 text-end",src:sg,alt:""})})]})]})]})),rg=d("assets/images/About.png"),Vo=d("assets/images/biggest.webp"),ag=d("assets/images/about-banner.webp"),lg=()=>e.jsxs("div",{children:[e.jsx("div",{className:"slider",children:e.jsx("div",{className:"slides",children:e.jsx("div",{className:"slide",children:e.jsx("img",{src:rg,alt:"About Banner"})})})}),e.jsx("section",{className:"py-5 bg-white",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"row align-items-center mb-5",children:[e.jsx("div",{className:"col-12 col-lg-6",children:e.jsx("img",{className:"img-fluid",src:ag,alt:"About Hrify Digital"})}),e.jsxs("div",{className:"col-12 col-lg-6",children:[e.jsx("h2",{style:{color:"#1B8DBB"},className:"fw-bold mb-4",children:"About Hrify Digital"}),e.jsx("p",{className:"text-muted",children:"Hrify Digital is a leading provider of comprehensive IT services and solutions. With years of experience in the industry, we have established ourselves as a trusted partner for businesses seeking innovative technology solutions."}),e.jsx("p",{className:"text-muted",children:"Our team of skilled professionals brings together expertise in software development, web design, cloud computing, cybersecurity, and digital transformation. We are committed to delivering high-quality services that drive business growth and success."})]})]}),e.jsxs("div",{className:"row align-items-center mb-5",children:[e.jsxs("div",{className:"col-12 col-lg-6 order-lg-2",children:[e.jsx("h3",{style:{color:"#1B8DBB"},className:"fw-bold mb-4",children:"Our Mission"}),e.jsx("p",{className:"text-muted",children:"To empower businesses with cutting-edge technology solutions that enhance productivity, security, and competitiveness in the digital age."}),e.jsx("p",{className:"text-muted",children:"We strive to deliver innovative IT services that not only meet current business needs but also anticipate future challenges and opportunities."})]}),e.jsx("div",{className:"col-12 col-lg-6 order-lg-1",children:e.jsx("img",{className:"img-fluid",src:Vo,alt:"Mission"})})]}),e.jsxs("div",{className:"row align-items-center",children:[e.jsxs("div",{className:"col-12 col-lg-6",children:[e.jsx("h3",{style:{color:"#1B8DBB"},className:"fw-bold mb-4",children:"Our Vision"}),e.jsx("p",{className:"text-muted",children:"To be the premier IT solutions provider, recognized for excellence in service delivery, technological innovation, and customer satisfaction."}),e.jsx("p",{className:"text-muted",children:"We envision a future where businesses leverage technology seamlessly to achieve their goals and create lasting value for their stakeholders."})]}),e.jsx("div",{className:"col-12 col-lg-6",children:e.jsx("img",{className:"img-fluid",src:Vo,alt:"Vision"})})]})]})}),e.jsx("section",{className:"py-5 bg-light",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{style:{color:"#1B8DBB"},className:"text-center fw-bold mb-5",children:"Why Choose Us?"}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"text-center",children:[e.jsx("i",{className:"fas fa-users fa-3x mb-3",style:{color:"#1B8DBB"}}),e.jsx("h4",{className:"fw-bold mb-3",children:"Expert Team"}),e.jsx("p",{className:"text-muted",children:"Our certified professionals bring years of experience and expertise to every project."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"text-center",children:[e.jsx("i",{className:"fas fa-cogs fa-3x mb-3",style:{color:"#1B8DBB"}}),e.jsx("h4",{className:"fw-bold mb-3",children:"Customized Solutions"}),e.jsx("p",{className:"text-muted",children:"We tailor our services to meet your specific business requirements and goals."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"text-center",children:[e.jsx("i",{className:"fas fa-clock fa-3x mb-3",style:{color:"#1B8DBB"}}),e.jsx("h4",{className:"fw-bold mb-3",children:"Timely Delivery"}),e.jsx("p",{className:"text-muted",children:"We are committed to delivering projects on time without compromising quality."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"text-center",children:[e.jsx("i",{className:"fas fa-shield-alt fa-3x mb-3",style:{color:"#1B8DBB"}}),e.jsx("h4",{className:"fw-bold mb-3",children:"Security First"}),e.jsx("p",{className:"text-muted",children:"We prioritize the security and confidentiality of your data and systems."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"text-center",children:[e.jsx("i",{className:"fas fa-handshake fa-3x mb-3",style:{color:"#1B8DBB"}}),e.jsx("h4",{className:"fw-bold mb-3",children:"Reliable Partnership"}),e.jsx("p",{className:"text-muted",children:"We build long-term relationships based on trust, transparency, and mutual success."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"text-center",children:[e.jsx("i",{className:"fas fa-award fa-3x mb-3",style:{color:"#1B8DBB"}}),e.jsx("h4",{className:"fw-bold mb-3",children:"Proven Track Record"}),e.jsx("p",{className:"text-muted",children:"Our satisfied clients and successful projects speak to our commitment to excellence."})]})})]})]})}),e.jsx("section",{className:"py-5 text-white text-center",style:{backgroundColor:"#1B8DBB"},children:e.jsxs("div",{className:"container",children:[e.jsx("h3",{className:"fw-bold mb-3",children:"Ready to Transform Your Business?"}),e.jsx("p",{className:"mb-4",style:{textAlign:"center"},children:"Contact us today to discuss how we can help you achieve your technology goals."}),e.jsx("a",{href:"/contact",className:"btn btn-light btn-lg px-5 py-3 fw-bold",children:"Get In Touch"})]})})]}),og=d("assets/images/Contact.png"),cg=d("assets/images/contactLogos/Frame 637.png"),dg=d("assets/images/contactLogos/Frame 636.png");d("assets/images/contactLogos/Frame 638.png");const mg=d("assets/images/contactLogos/Frame 639.png"),ug=d("assets/images/contactLogos/Frame 641.png"),hg=d("assets/images/contactLogos/Frame 640.png"),pg=()=>(S.useEffect(()=>{const t=document.getElementById("enquiry-link"),s=document.getElementById("popup-form"),n=document.getElementById("close-btn");if(t&&s&&n){const i=()=>{s.style.display="flex"},r=()=>{s.style.display="none"};t.addEventListener("click",l=>{l.preventDefault(),i()}),n.addEventListener("click",r),window.addEventListener("click",l=>{l.target===s&&r()}),document.getElementById("enquiry-form").addEventListener("submit",l=>{l.preventDefault(),alert("Form submitted!"),r()})}},[]),e.jsxs("div",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:og,alt:"Contact Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container my-4 p-4",children:e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col-12 text-center",children:[e.jsx("h3",{style:{color:"#1B8DBB",fontWeight:700},className:"my-2",children:"Registered Office:"}),e.jsxs("h6",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-map-marker",style:{fontSize:"30px",WebkitBackgroundClip:"border-box",WebkitTextFillColor:"initial",color:"#1B8DBB"},"aria-hidden":"true"})," ","Annai Parvathi Nagar, Opp. collectorate Office, Vengikkal, Tiruvannamalai - 606 604."]})]})})}),e.jsx("div",{className:"container p-4",children:e.jsxs("div",{className:"row align-items-center text-center",children:[e.jsxs("div",{className:"col-lg-5 col-12",children:[e.jsx("h3",{style:{color:"#1B8DBB"},children:"Phone"}),e.jsx("h6",{style:{color:"#686D76"},children:"8438438413"})]}),e.jsx("div",{className:"col-2 d-none d-lg-block",children:e.jsx("h1",{style:{color:"#686D76"},children:"|"})}),e.jsxs("div",{className:"col-lg-5 col-12",children:[e.jsx("h3",{style:{background:"linear-gradient(135deg, #1B8DBB 0%, #1B8DBB 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Email"}),e.jsx("h6",{children:"hrifydigital@gmail.com"})]})]})}),e.jsxs("div",{className:"container my-4 p-4",children:[e.jsxs("div",{className:"row text-center",children:[e.jsxs("div",{className:"col-6 d-flex flex-column align-items-center justify-content-center",style:{minHeight:"150px"},children:[e.jsx("img",{src:dg,alt:"Payment Options",className:"img-fluid mb-2",style:{width:"60px",height:"60px",objectFit:"contain"}}),e.jsx("p",{style:{color:"#686D76",margin:0},children:"Payment Options"})]}),e.jsxs("div",{className:"col-6 d-flex flex-column align-items-center justify-content-center",style:{minHeight:"150px"},children:[e.jsx("a",{href:"careers.html",style:{textDecoration:"none",color:"inherit"},children:e.jsx("img",{src:cg,alt:"Career",className:"img-fluid mb-2",style:{width:"60px",height:"60px",objectFit:"contain"}})}),e.jsx("p",{style:{color:"#686D76",margin:0},children:"Career"})]})]}),e.jsxs("div",{className:"row my-4 text-center",children:[e.jsxs("div",{className:"col-4 d-flex flex-column align-items-center justify-content-center",style:{minHeight:"150px"},children:[e.jsx("img",{src:mg,alt:"Feedback",className:"img-fluid mb-2",style:{width:"60px",height:"60px",objectFit:"contain"}}),e.jsx("p",{style:{color:"#686D76",margin:0},children:"Feedback"})]}),e.jsxs("div",{className:"col-4 d-flex flex-column align-items-center justify-content-center",style:{minHeight:"150px"},children:[e.jsx("img",{src:ug,alt:"Privacy Policy",className:"img-fluid mb-2",style:{width:"60px",height:"60px",objectFit:"contain"}}),e.jsx("p",{style:{color:"#686D76",margin:0},children:"Privacy Policy"})]}),e.jsxs("div",{className:"col-4 d-flex flex-column align-items-center justify-content-center",style:{minHeight:"150px"},children:[e.jsx("img",{src:hg,alt:"FAQ",className:"img-fluid mb-2",style:{width:"60px",height:"60px",objectFit:"contain"}}),e.jsx("p",{style:{color:"#686D76",margin:0},children:"FAQ"})]})]})]}),e.jsx("div",{id:"popup-form",className:"popup-form",style:{display:"none"},children:e.jsxs("div",{className:"form-container",children:[e.jsx("span",{className:"close-btn",id:"close-btn",children:"×"}),e.jsx("h2",{children:"Enquiry Form"}),e.jsxs("form",{id:"enquiry-form",children:[e.jsx("label",{htmlFor:"name",children:"Name:"}),e.jsx("input",{type:"text",id:"name",name:"name",required:!0}),e.jsx("label",{htmlFor:"email",children:"Email:"}),e.jsx("input",{type:"email",id:"email",name:"email",required:!0}),e.jsx("label",{htmlFor:"mobile",children:"Mobile:"}),e.jsx("input",{type:"tel",id:"mobile",name:"mobile",required:!0}),e.jsx("label",{htmlFor:"company",children:"Your Company:"}),e.jsx("input",{type:"text",id:"company",name:"company",required:!0}),e.jsx("label",{htmlFor:"description",children:"Describe what you need:"}),e.jsx("textarea",{id:"description",name:"description",rows:4,required:!0}),e.jsx("button",{type:"submit",children:"Send"})]})]})}),e.jsx("style",{children:`
        .popup {
          display: none;
          position: fixed;
          z-index: 1000;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          overflow: auto;
        }

        .popup-content {
          position: relative;
          margin: 10% auto;
          padding: 20px;
          background-color: white;
          width: 90%;
          max-width: 700px;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .brochure {
          margin-bottom: 15px;
        }

        .popup-form {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          justify-content: center;
          align-items: center;
          z-index: 1001;
        }

        .form-container {
          background: #fff;
          padding: 30px;
          border-radius: 8px;
          width: 90%;
          max-width: 500px;
          position: relative;
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 15px;
          font-size: 28px;
          font-weight: bold;
          cursor: pointer;
          color: #aaa;
        }

        .close-btn:hover {
          color: #000;
        }

        label {
          margin-top: 15px;
          font-weight: 500;
        }

        input,
        textarea {
          width: 100%;
          padding: 10px;
          margin-top: 5px;
          border: 1px solid #1B8DBB;
          border-radius: 4px;
        }

        button {
          margin-top: 20px;
          padding: 12px;
          background-color: #1B8DBB;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }

        button:hover {
          background-color: #15749A;
        }

        @media (max-width: 768px) {
          .popup-content {
            width: 95%;
            margin: 20% auto;
          }
          .brochure {
            flex-direction: column;
          }
          .brochure img {
            margin-top: 15px;
            width: 60%;
          }
        }

        @media (max-width: 480px) {
          .brochure img {
            width: 80%;
          }
        }
      `})]})),gg=()=>e.jsx("main",{children:e.jsxs("div",{className:"container p-4",children:[e.jsx("h1",{children:"Our Services"}),e.jsx("p",{children:"Explore our comprehensive IT services..."})]})}),xg=()=>e.jsx("main",{children:e.jsxs("div",{className:"container p-4",children:[e.jsx("h1",{children:"Our Clients"}),e.jsx("p",{children:"Trusted by many..."})]})}),fg=d("assets/images/Career.png"),yg=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:fg,alt:"Career Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            .careers-hero {
              background: linear-gradient(135deg, #1B8DBB 0%, #1B8DBB 100%);
              border-radius: 16px;
              padding: 4rem 2rem;
              margin-bottom: 4rem;
              text-align: center;
            }

            .careers-hero h2 {
              font-size: 2.8rem;
              font-weight: 700;
              color: white;
              margin-bottom: 1.5rem;
              line-height: 1.3;
            }

            .careers-hero p {
              font-size: 1.2rem;
              color: #555;
              max-width: 900px;
              margin: 0 auto 2rem;
              line-height: 1.7;
            }

            .values-section {
              padding: 4rem 0;
            }

            .section-title {
              text-align: center;
              font-size: 2.5rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 3rem;
            }

            .section-subtitle {
              text-align: center;
              font-size: 1.2rem;
              color: #666;
              max-width: 800px;
              margin: -2rem auto 3rem;
            }

            .value-card {
              background: white;
              border-radius: 16px;
              padding: 2.5rem;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: all 0.3s ease;
              height: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .value-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 8px 25px rgba(0,0,0,0.15);
            }

            .icon-circle {
              width: 100px;
              height: 100px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 1.5rem;
              transition: all 0.3s ease;
            }

            .icon-circle.blue {
              background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
            }

            .icon-circle.green {
              background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
            }

            .icon-circle.purple {
              background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
            }

            .value-card:hover .icon-circle {
              transform: scale(1.1) rotate(5deg);
            }

            .icon-circle svg {
              width: 50px;
              height: 50px;
              stroke-width: 2;
            }

            .value-card h3 {
              font-size: 1.5rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .value-card p {
              color: #666;
              line-height: 1.7;
              font-size: 1rem;
            }

            .application-section {
              background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
              border-radius: 16px;
              padding: 4rem 2rem;
              margin: 4rem 0;
            }

            .form-card {
              background: white;
              border-radius: 20px;
              box-shadow: 0 8px 30px rgba(0,0,0,0.12);
              padding: 3rem;
              max-width: 900px;
              margin: 0 auto;
            }

            .form-label {
              color: #1B8DBB;
              font-weight: 600;
              margin-bottom: 0.5rem;
              font-size: 0.95rem;
            }

            .form-control, .form-select {
              border: 2px solid #e0e0e0;
              border-radius: 10px;
              padding: 0.75rem 1rem;
              font-size: 1rem;
              transition: all 0.3s ease;
            }

            .form-control:focus, .form-select:focus {
              border-color: #1B8DBB;
              box-shadow: 0 0 0 0.2rem rgba(27, 141, 187, 0.1);
            }

            textarea.form-control {
              min-height: 120px;
              resize: vertical;
            }

            .submit-btn {
              background: linear-gradient(135deg, #1B8DBB 0%, #1B8DBB 100%);
              color: white;
              border: none;
              border-radius: 50px;
              padding: 1rem 3rem;
              font-size: 1.1rem;
              font-weight: 600;
              transition: all 0.3s ease;
              box-shadow: 0 4px 15px rgba(27, 141, 187, 0.3);
            }

            .submit-btn:hover {
              transform: translateY(-2px);
              box-shadow: 0 6px 20px rgba(27, 141, 187, 0.4);
              background: linear-gradient(135deg, #15749A 0%, #1B8DBB 100%);
            }

            .privacy-notice {
              text-align: center;
              color: #666;
              font-size: 0.9rem;
              margin-top: 1.5rem;
              line-height: 1.6;
            }

            .upload-link {
              display: inline-block;
              background: #f8f9fa;
              border: 2px dashed #1e3a8a;
              border-radius: 10px;
              padding: 0.75rem 1.5rem;
              color: #1e3a8a;
              text-decoration: none;
              transition: all 0.3s ease;
              font-weight: 500;
            }

            .upload-link:hover {
              background: #1e3a8a;
              color: white;
              border-style: solid;
            }

            @media (max-width: 768px) {
              .careers-hero h2 {
                font-size: 2.2rem;
              }
              .careers-hero p {
                font-size: 1.1rem;
              }
              .section-title {
                font-size: 2rem;
              }
              .form-card {
                padding: 2rem 1.5rem;
              }
              .value-card {
                margin-bottom: 1.5rem;
              }
            }
          `}),e.jsx("section",{className:"careers-hero",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Shape the Future of IT Excellence with Us"}),e.jsx("p",{style:{color:"black",fontWeight:"bold"},children:"At Hrify Digital, we're building innovative technology solutions and connecting top talent with exceptional opportunities. Join a team that values growth, collaboration, and meaningful impact in the world of technology."})]})}),e.jsxs("section",{className:"values-section",children:[e.jsx("h2",{className:"section-title",children:"Why Hrify Digital?"}),e.jsx("p",{className:"section-subtitle",children:"We believe in empowering our people to do their best work while making a meaningful difference in the tech industry."}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-12 col-md-4",children:e.jsxs("div",{className:"value-card",children:[e.jsx("div",{className:"icon-circle blue",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"#1976d2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})})}),e.jsx("h3",{children:"Collaborative Culture"}),e.jsx("p",{children:"Work alongside talented professionals in an inclusive, supportive environment where your ideas matter and teamwork drives innovation."})]})}),e.jsx("div",{className:"col-12 col-md-4",children:e.jsxs("div",{className:"value-card",children:[e.jsx("div",{className:"icon-circle green",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"#388e3c",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})})}),e.jsx("h3",{children:"Growth Opportunities"}),e.jsx("p",{children:"Continuous learning, skill development programs, and clear career progression paths to help you reach your full potential."})]})}),e.jsx("div",{className:"col-12 col-md-4",children:e.jsxs("div",{className:"value-card",children:[e.jsx("div",{className:"icon-circle purple",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"#7b1fa2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.663 17h4.674M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"})})}),e.jsx("h3",{children:"Innovation First"}),e.jsx("p",{children:"Tackle challenging problems using cutting-edge technology, creative thinking, and modern development practices."})]})})]})]}),e.jsx("section",{className:"application-section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Apply Today"}),e.jsx("p",{className:"section-subtitle",children:"We're excited to learn more about you and how you can contribute to our mission of delivering excellence in IT solutions."}),e.jsx("div",{className:"form-card",children:e.jsx("form",{children:e.jsxs("div",{className:"row g-4",children:[e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Full Name *"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"John Doe",required:!0})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Email Address *"}),e.jsx("input",{type:"email",className:"form-control",placeholder:"john.doe@example.com",required:!0})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Phone Number *"}),e.jsx("input",{type:"tel",className:"form-control",placeholder:"+1 (555) 123-4567",required:!0})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"LinkedIn Profile"}),e.jsx("input",{type:"url",className:"form-control",placeholder:"https://linkedin.com/in/johndoe"})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Position Interested In *"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"e.g., Senior React Developer",required:!0})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Preferred Location *"}),e.jsxs("select",{className:"form-select",required:!0,children:[e.jsx("option",{value:"",disabled:!0,selected:!0,children:"Select Location"}),e.jsx("option",{children:"Remote"}),e.jsx("option",{children:"India"}),e.jsx("option",{children:"United States"}),e.jsx("option",{children:"United Kingdom"}),e.jsx("option",{children:"Canada"}),e.jsx("option",{children:"Australia"}),e.jsx("option",{children:"Singapore"}),e.jsx("option",{children:"United Arab Emirates"}),e.jsx("option",{children:"Germany"}),e.jsx("option",{children:"Other"})]})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Job Type Preference *"}),e.jsxs("select",{className:"form-select",required:!0,children:[e.jsx("option",{value:"",disabled:!0,selected:!0,children:"Select Job Type"}),e.jsx("option",{children:"Full-Time"}),e.jsx("option",{children:"Part-Time"}),e.jsx("option",{children:"Contract"}),e.jsx("option",{children:"Freelance"}),e.jsx("option",{children:"Internship"})]})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Resume Upload"}),e.jsx("a",{href:"https://forms.google.com/your-form-link",target:"_blank",rel:"noopener noreferrer",className:"upload-link d-block text-center",children:"📄 Upload via Google Form"})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Professional Experience & Skills *"}),e.jsx("textarea",{className:"form-control",placeholder:"Tell us about your relevant experience, technical skills, achievements, and what makes you a great fit for this role...",required:!0})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Why Hrify Digital? *"}),e.jsx("textarea",{className:"form-control",placeholder:"What excites you about joining our team? How do you see yourself contributing to our mission?",required:!0})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Additional Information"}),e.jsx("textarea",{className:"form-control",placeholder:"Any other information you'd like to share (e.g., availability, salary expectations, portfolio links)..."})]}),e.jsxs("div",{className:"col-12 text-center mt-4",children:[e.jsx("button",{type:"submit",className:"submit-btn",children:"Submit Application"}),e.jsx("p",{className:"privacy-notice",children:"By submitting your application, you consent to the processing of your personal information as per our privacy policy. Your details will only be used for recruitment purposes and will be handled with the utmost confidentiality."})]})]})})})]})}),e.jsx("section",{className:"text-center py-5",children:e.jsx("div",{className:"container",children:e.jsxs("div",{style:{background:"linear-gradient(135deg, #1B8DBB, #1B8DBB)",color:"white",padding:"3rem 2rem",borderRadius:"16px",boxShadow:"0 8px 30px rgba(27, 141, 187, 0.2)"},children:[e.jsx("h2",{className:"text-white mb-3",style:{fontSize:"2.2rem",fontWeight:"700"},children:"Questions About Joining Our Team?"}),e.jsx("p",{className:"mb-4",style:{fontSize:"1.1rem",maxWidth:"700px",margin:"0 auto 2rem",opacity:"0.95"},children:"Reach out to our HR team at careers@hrifyglobalit.com or call us at +91 123-456-7890. We're here to help!"}),e.jsx("a",{href:"/contact",style:{background:"white",color:"#1B8DBB",padding:"1rem 2.5rem",borderRadius:"50px",fontWeight:"600",fontSize:"1rem",textDecoration:"none",display:"inline-block",transition:"all 0.3s ease"},onMouseOver:t=>t.target.style.background="#f0f0f0",onMouseOut:t=>t.target.style.background="white",children:"Contact HR Team"})]})})})]}),e.jsx("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"})]}),qo=d("assets/images/Internship.png"),jg=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:qo,alt:"Internship Program Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            .internship-hero {
              background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
              border-radius: 16px;
              padding: 4rem 2rem;
              margin-bottom: 4rem;
            }

            .internship-hero h2 {
              font-size: 2.8rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 1.5rem;
              line-height: 1.3;
            }

            .internship-hero p {
              font-size: 1.2rem;
              color: #555;
              line-height: 1.7;
              margin-bottom: 1.5rem;
            }

            .section-title {
              text-align: center;
              font-size: 2.5rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 3rem;
            }

            .section-subtitle {
              text-align: center;
              font-size: 1.2rem;
              color: #666;
              max-width: 800px;
              margin: -2rem auto 3rem;
            }

            .program-card {
              background: white;
              border-radius: 12px;
              padding: 1rem 1.25rem;
              box-shadow: 0 8px 24px rgba(0,0,0,0.06);
              transition: all 0.3s ease;
              height: 100%;
              border-left: 4px solid #1B8DBB;
            }

            .program-card:hover {
              transform: translateY(-8px);
              box-shadow: 0 8px 25px rgba(0,0,0,0.15);
            }

            .program-card h3 {
              font-size: 1.4rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .program-card ul {
              padding-left: 1.25rem;
              margin: 0;
            }

            .program-card li {
              color: #666;
              line-height: 1.8;
              margin-bottom: 0.75rem;
            }

            .benefit-card {
              background: white;
              border-radius: 12px;
              padding: 1rem 1.25rem;
              text-align: center;
              box-shadow: 0 8px 24px rgba(0,0,0,0.06);
              transition: all 0.3s ease;
              height: 100%;
            }

            .benefit-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 8px 25px rgba(0,0,0,0.15);
            }

            .icon-circle {
              width: 100px;
              height: 100px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 1.5rem;
              transition: all 0.3s ease;
            }

            .icon-circle.orange {
              background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
            }

            .icon-circle.teal {
              background: linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%);
            }

            .icon-circle.pink {
              background: linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%);
            }

            .benefit-card:hover .icon-circle {
              transform: scale(1.1) rotate(5deg);
            }

            .icon-circle svg {
              width: 50px;
              height: 50px;
              stroke-width: 2;
            }

            .benefit-card h3 {
              font-size: 1.5rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .benefit-card p {
              color: #666;
              line-height: 1.7;
              font-size: 1rem;
            }

            .application-section {
              background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
              border-radius: 16px;
              padding: 4rem 2rem;
              margin: 4rem 0;
            }

            .form-card {
              background: white;
              border-radius: 20px;
              box-shadow: 0 8px 30px rgba(0,0,0,0.12);
              padding: 3rem;
              max-width: 1000px;
              margin: 0 auto;
            }

            .form-section-title {
              font-size: 1.3rem;
              font-weight: 600;
              color: #1B8DBB;
              margin: 2rem 0 1.5rem;
              padding-bottom: 0.5rem;
              border-bottom: 2px solid #e0e0e0;
            }

            .form-section-title:first-of-type {
              margin-top: 0;
            }

            .form-label {
              color: #1B8DBB;
              font-weight: 600;
              margin-bottom: 0.5rem;
              font-size: 0.95rem;
            }

            .form-control, .form-select {
              border: 2px solid #e0e0e0;
              border-radius: 10px;
              padding: 0.75rem 1rem;
              font-size: 1rem;
              transition: all 0.3s ease;
            }

            .form-control:focus, .form-select:focus {
              border-color: #1B8DBB;
              box-shadow: 0 0 0 0.2rem rgba(27, 141, 187, 0.1);
            }

            textarea.form-control {
              min-height: 100px;
              resize: vertical;
            }

            .form-check-input:checked {
              background-color: #1B8DBB;
              border-color: #1B8DBB;
            }

            .form-check-input:focus {
              box-shadow: 0 0 0 0.2rem rgba(27, 141, 187, 0.1);
              border-color: #1B8DBB;
            }

            .submit-btn {
              background: linear-gradient(135deg, #1B8DBB 0%, #1B8DBB 100%);
              color: white;
              border: none;
              border-radius: 50px;
              padding: 1rem 3rem;
              font-size: 1.1rem;
              font-weight: 600;
              transition: all 0.3s ease;
              box-shadow: 0 4px 15px rgba(27, 141, 187, 0.3);
            }

            .submit-btn:hover {
              transform: translateY(-2px);
              box-shadow: 0 6px 20px rgba(27, 141, 187, 0.4);
              background: linear-gradient(135deg, #15749A 0%, #1B8DBB 100%);
            }

            .privacy-notice {
              text-align: center;
              color: #666;
              font-size: 0.9rem;
              margin-top: 1.5rem;
              line-height: 1.6;
            }

            .domain-badge {
              display: inline-block;
              background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
              color: #6a1b9a;
              padding: 0.5rem 1rem;
              border-radius: 20px;
              font-size: 0.9rem;
              font-weight: 500;
              margin: 0.25rem;
            }

            .success-story {
              background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
              border-left: 4px solid #388e3c;
              padding: 1.5rem;
              border-radius: 12px;
              margin-bottom: 1rem;
            }

            .success-story h4 {
              color: #388e3c;
              font-size: 1.1rem;
              font-weight: 600;
              margin-bottom: 0.5rem;
            }

            .success-story p {
              color: #555;
              margin: 0;
              line-height: 1.7;
            }

            @media (max-width: 768px) {
              .internship-hero h2 {
                font-size: 2.2rem;
              }
              .internship-hero p {
                font-size: 1.1rem;
              }
              .section-title {
                font-size: 2rem;
              }
              .form-card {
                padding: 2rem 1.5rem;
              }
              .benefit-card {
                margin-bottom: 1.5rem;
              }
            }
          `}),e.jsx("section",{className:"internship-hero",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsxs("div",{className:"col-12 col-lg-8",children:[e.jsx("h2",{children:"Unlock Your Potential with Real-World Experience"}),e.jsx("p",{children:"At Hrify Digital, our internship program is designed to unlock the true potential of students and young professionals by providing hands-on learning experiences. We nurture talent, spark innovation, and help interns discover their strengths through structured training and real-world projects."}),e.jsx("p",{children:"Join us to transform your academic knowledge into practical skills while working alongside experienced professionals in a collaborative, growth-focused environment."})]}),e.jsx("div",{className:"col-12 col-lg-4 text-center",children:e.jsx("img",{src:qo,alt:"Internship Program",className:"img-fluid rounded shadow-lg",style:{maxWidth:"100%",borderRadius:"16px"}})})]})}),e.jsxs("section",{className:"mb-5",children:[e.jsx("h2",{className:"section-title",children:"Program Highlights"}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-12 col-md-6 col-lg-3",children:e.jsxs("div",{className:"program-card",children:[e.jsx("h3",{children:"🚀 Live Projects"}),e.jsx("p",{children:"Work on real-time projects in tech, design, marketing, or operations, gaining practical exposure to industry challenges."})]})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-3",children:e.jsxs("div",{className:"program-card",children:[e.jsx("h3",{children:"👨‍🏫 Mentorship"}),e.jsx("p",{children:"One-on-one sessions with experienced professionals to guide, refine your skills, and accelerate your growth."})]})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-3",children:e.jsxs("div",{className:"program-card",children:[e.jsx("h3",{children:"📊 Performance Reviews"}),e.jsx("p",{children:"Weekly feedback and assessments to track improvement, identify strengths, and ensure readiness for the job market."})]})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-3",children:e.jsxs("div",{className:"program-card",children:[e.jsx("h3",{children:"🎓 Certifications"}),e.jsx("p",{children:"Recognized certification of internship completion with individual performance insights and recommendations."})]})})]})]}),e.jsxs("section",{className:"mb-5",children:[e.jsx("h2",{className:"section-title",children:"Internship Domains"}),e.jsx("p",{className:"section-subtitle",children:"We offer diverse internship opportunities across multiple domains to match your interests and career goals."}),e.jsxs("div",{className:"text-center",children:[e.jsx("span",{className:"domain-badge",children:"Frontend Development (React, HTML/CSS/JS)"}),e.jsx("span",{className:"domain-badge",children:"Backend Development (Node.js, Express, MongoDB)"}),e.jsx("span",{className:"domain-badge",children:"UI/UX Design (Figma, Adobe XD)"}),e.jsx("span",{className:"domain-badge",children:"Data Analytics (Python, Power BI, Excel)"}),e.jsx("span",{className:"domain-badge",children:"Digital Marketing (SEO, Google Ads, Social Media)"}),e.jsx("span",{className:"domain-badge",children:"HR & Talent Acquisition"}),e.jsx("span",{className:"domain-badge",children:"Mobile Development"}),e.jsx("span",{className:"domain-badge",children:"Cloud Computing"})]})]}),e.jsxs("section",{className:"mb-5",children:[e.jsx("h2",{className:"section-title",children:"Why Intern With Us?"}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-12 col-md-4",children:e.jsxs("div",{className:"benefit-card",children:[e.jsx("div",{className:"icon-circle orange",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"#f57c00",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"})})}),e.jsx("h3",{children:"Hands-On Learning"}),e.jsx("p",{children:"Work on real projects and build a portfolio that showcases your skills to future employers."})]})}),e.jsx("div",{className:"col-12 col-md-4",children:e.jsxs("div",{className:"benefit-card",children:[e.jsx("div",{className:"icon-circle teal",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"#00897b",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"})})}),e.jsx("h3",{children:"Career Growth"}),e.jsx("p",{children:"Access to career-building webinars, workshops, and potential PPO opportunities from us or partner companies."})]})}),e.jsx("div",{className:"col-12 col-md-4",children:e.jsxs("div",{className:"benefit-card",children:[e.jsx("div",{className:"icon-circle pink",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"#c2185b",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsx("h3",{children:"Flexible & Rewarding"}),e.jsx("p",{children:"Work-from-home flexibility with stipends for top performers and recognition for outstanding work."})]})})]})]}),e.jsxs("section",{className:"mb-5",children:[e.jsx("h2",{className:"section-title",children:"Success Stories"}),e.jsx("p",{className:"section-subtitle",children:"Many of our interns have transitioned into full-time roles at Hrify Digital or leading companies worldwide."}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-12 col-md-6",children:e.jsxs("div",{className:"success-story",children:[e.jsx("h4",{children:"Priya Kumar - Data Analytics"}),e.jsx("p",{children:'"Joined as a Data Analytics intern and now working with a global analytics firm. The hands-on experience and mentorship I received were invaluable in preparing me for my career."'})]})}),e.jsx("div",{className:"col-12 col-md-6",children:e.jsxs("div",{className:"success-story",children:[e.jsx("h4",{children:"Arjun Menon - Frontend Developer"}),e.jsx("p",{children:'"Started as a frontend intern and was hired by an ed-tech startup after showcasing my React-based portfolio built during my time here. Hrify Digital launched my career!"'})]})})]})]}),e.jsx("section",{className:"application-section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Apply for Internship"}),e.jsx("p",{className:"section-subtitle",children:"Ready to kickstart your career with real-world experience? Fill out the form below and take the first step toward your future."}),e.jsx("div",{className:"form-card",children:e.jsxs("form",{children:[e.jsx("h3",{className:"form-section-title",children:"Personal Information"}),e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Full Name *"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"John Doe",required:!0})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Email Address *"}),e.jsx("input",{type:"email",className:"form-control",placeholder:"john.doe@example.com",required:!0})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Phone Number *"}),e.jsx("input",{type:"tel",className:"form-control",placeholder:"+1 (555) 123-4567",required:!0})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Current School/University"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"University Name"})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Current Year/Semester"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"e.g., 3rd Year"})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Field of Study"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"e.g., Computer Science"})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"GPA/CGPA"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"e.g., 8.5/10"})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Country *"}),e.jsxs("select",{className:"form-select",required:!0,children:[e.jsx("option",{value:"",disabled:!0,selected:!0,children:"Select Country"}),e.jsx("option",{children:"India"}),e.jsx("option",{children:"United States"}),e.jsx("option",{children:"United Kingdom"}),e.jsx("option",{children:"Canada"}),e.jsx("option",{children:"Australia"}),e.jsx("option",{children:"Singapore"}),e.jsx("option",{children:"Germany"}),e.jsx("option",{children:"Other"})]})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Complete Address"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"Street Address"})]}),e.jsx("div",{className:"col-12 col-md-4",children:e.jsx("input",{type:"text",className:"form-control",placeholder:"City"})}),e.jsx("div",{className:"col-12 col-md-4",children:e.jsx("input",{type:"text",className:"form-control",placeholder:"State/Province"})}),e.jsx("div",{className:"col-12 col-md-4",children:e.jsx("input",{type:"text",className:"form-control",placeholder:"ZIP/Postal Code"})}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Time Zone"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"e.g., IST, EST, GMT"})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Previous Work Experience"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"Any internships or jobs"})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"How did you find out about us?"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"e.g., LinkedIn, University Career Fair, etc."})]})]}),e.jsx("h3",{className:"form-section-title",children:"Internship Preferences"}),e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Preferred Start Date *"}),e.jsx("input",{type:"date",className:"form-control",required:!0})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Preferred End Date *"}),e.jsx("input",{type:"date",className:"form-control",required:!0})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Is this your first internship? *"}),e.jsxs("select",{className:"form-select",required:!0,children:[e.jsx("option",{value:"",disabled:!0,selected:!0,children:"Select"}),e.jsx("option",{children:"Yes"}),e.jsx("option",{children:"No"})]})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Select Specialization *"}),e.jsxs("select",{className:"form-select",required:!0,children:[e.jsx("option",{value:"",disabled:!0,selected:!0,children:"Choose Domain"}),e.jsx("option",{children:"Frontend Development"}),e.jsx("option",{children:"Backend Development"}),e.jsx("option",{children:"UI/UX Design"}),e.jsx("option",{children:"Data Analytics"}),e.jsx("option",{children:"Digital Marketing"}),e.jsx("option",{children:"HR & Talent Acquisition"}),e.jsx("option",{children:"Mobile Development"}),e.jsx("option",{children:"Cloud Computing"})]})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"What are you hoping to achieve in this internship? *"}),e.jsx("textarea",{className:"form-control",placeholder:"Describe your learning goals and what you want to accomplish...",required:!0})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"What skills will you demonstrate?"}),e.jsx("textarea",{className:"form-control",placeholder:"List your technical and soft skills relevant to the internship..."})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Describe your work style"}),e.jsx("textarea",{className:"form-control",placeholder:"How do you approach tasks, collaborate with teams, and manage deadlines?"})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Anything specific you want to learn?"}),e.jsx("textarea",{className:"form-control",placeholder:"Any particular technologies, tools, or concepts you're eager to explore..."})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Resume Upload (Optional)"}),e.jsx("input",{type:"file",className:"form-control",accept:".pdf,.doc,.docx"})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"d-flex align-items-start mb-3",children:[e.jsx("input",{className:"form-check-input me-3 mt-1",type:"checkbox",id:"codeOfConduct",required:!0,style:{flexShrink:0}}),e.jsx("label",{className:"form-check-label text-start",htmlFor:"codeOfConduct",children:"I agree to follow Hrify Digital's code of conduct and professional standards *"})]})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"d-flex align-items-start mb-4",children:[e.jsx("input",{className:"form-check-input me-3 mt-1",type:"checkbox",id:"consent",required:!0,style:{flexShrink:0}}),e.jsx("label",{className:"form-check-label text-start",htmlFor:"consent",children:"I consent to the processing of my personal information for internship purposes *"})]})})})]}),e.jsxs("div",{className:"text-center mt-4",children:[e.jsx("button",{type:"submit",className:"submit-btn",children:"Submit Application"}),e.jsx("p",{className:"privacy-notice",children:"By submitting your application, you consent to the processing of your personal information as per our privacy policy. Your details will only be used for internship recruitment purposes and will be handled with the utmost confidentiality."})]})]})})]})}),e.jsx("section",{className:"text-center py-5",children:e.jsx("div",{className:"container",children:e.jsxs("div",{style:{background:"linear-gradient(135deg, #1B8DBB, #1B8DBB)",color:"white",padding:"3rem 2rem",borderRadius:"16px",boxShadow:"0 8px 30px rgba(27, 141, 187, 0.2)"},children:[e.jsx("h2",{className:"text-white mb-3",style:{fontSize:"2.2rem",fontWeight:"700"},children:"Questions About Our Internship Program?"}),e.jsx("p",{className:"mb-4",style:{fontSize:"1.1rem",maxWidth:"700px",margin:"0 auto 2rem",opacity:"0.95"},children:"Reach out to our internship coordinator at internships@jkglobalit.com or call us at +91 123-456-7890"}),e.jsx("a",{href:"/contact",style:{background:"white",color:"#1B8DBB",padding:"1rem 2.5rem",borderRadius:"50px",fontWeight:"600",fontSize:"1rem",textDecoration:"none",display:"inline-block",transition:"all 0.3s ease"},onMouseOver:t=>t.target.style.background="#f0f0f0",onMouseOut:t=>t.target.style.background="white",children:"Contact Us"})]})})})]}),e.jsx("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"})]}),vg=d("assets/images/ReferralProgram.png"),bg=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:vg,alt:"Referral Program Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            .internship-hero {
              background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
              border-radius: 16px;
              padding: 4rem 2rem;
              margin-bottom: 4rem;
            }

            .internship-hero h2 {
              font-size: 2.8rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 1.5rem;
              line-height: 1.3;
            }

            .internship-hero p {
              font-size: 1.2rem;
              color: #555;
              line-height: 1.7;
              margin-bottom: 1.5rem;
            }

            .section-title {
              text-align: center;
              font-size: 2.5rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 3rem;
            }

            .section-subtitle {
              text-align: center;
              font-size: 1.2rem;
              color: #666;
              max-width: 800px;
              margin: -2rem auto 3rem;
            }

            .text-content p {
              font-size: 1.1rem;
              color: #555;
              line-height: 1.8;
              margin-bottom: 1.5rem;
              text-align: justify;
            }

            .text-content h2 {
              font-size: 1.8rem;
              font-weight: 700;
              color: #1B8DBB;
              margin: 2.5rem 0 1.5rem;
            }

            .application-section {
              background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
              border-radius: 16px;
              padding: 4rem 2rem;
              margin: 4rem 0;
            }

            .form-card {
              background: white;
              border-radius: 12px;
              box-shadow: 0 8px 24px rgba(0,0,0,0.06);
              padding: 1rem 1.25rem;
              max-width: 1200px;
              margin: 0 auto;
            }

            .form-section-title {
              font-size: 1.3rem;
              font-weight: 600;
              color: #1B8DBB;
              margin: 2rem 0 1.5rem;
              padding-bottom: 0.5rem;
              border-bottom: 2px solid #e0e0e0;
            }

            .form-section-title:first-of-type {
              margin-top: 0;
            }

            .form-label {
              color: #1B8DBB;
              font-weight: 600;
              margin-bottom: 0.5rem;
              font-size: 0.95rem;
            }

            .form-control, .form-select {
              border: 2px solid #e0e0e0;
              border-radius: 10px;
              padding: 0.75rem 1rem;
              font-size: 1rem;
              transition: all 0.3s ease;
            }

            .form-control:focus, .form-select:focus {
              border-color: #1B8DBB;
              box-shadow: 0 0 0 0.2rem rgba(27, 141, 187, 0.1);
            }

            textarea.form-control {
              min-height: 100px;
              resize: vertical;
            }

            .form-check-input:checked {
              background-color: #1B8DBB;
              border-color: #1B8DBB;
            }

            .form-check-input:focus {
              box-shadow: 0 0 0 0.2rem rgba(27, 141, 187, 0.1);
              border-color: #1B8DBB;
            }

            .submit-btn {
              background: linear-gradient(135deg, #1B8DBB 0%, #1B8DBB 100%);
              color: white;
              border: none;
              border-radius: 8px;
              padding: 1rem 3rem;
              font-size: 1.1rem;
              font-weight: 600;
              transition: all 0.3s ease;
              box-shadow: 0 4px 15px rgba(27, 141, 187, 0.3);
            }

            .submit-btn:hover {
              transform: translateY(-2px);
              box-shadow: 0 6px 20px rgba(27, 141, 187, 0.4);
              background: linear-gradient(135deg, #15749A 0%, #1B8DBB 100%);
            }

            .upload-btn {
              background: white;
              border: 2px dashed #e0e0e0;
              border-radius: 12px;
              padding: 2rem;
              text-align: center;
              transition: all 0.3s ease;
              color: #1B8DBB;
              text-decoration: none;
              display: block;
            }

            .upload-btn:hover {
              border-color: #1B8DBB;
              background: #e3f2fd;
              color: #1B8DBB;
            }

            .privacy-notice, .confirmation-message {
              text-align: center;
              color: #666;
              font-size: 0.9rem;
              margin-top: 1.5rem;
              line-height: 1.6;
            }

            @media (max-width: 768px) {
              .internship-hero h2 {
                font-size: 2.2rem;
              }
              .internship-hero p {
                font-size: 1.1rem;
              }
              .section-title {
                font-size: 2rem;
              }
              .form-card {
                padding: 2rem 1.5rem;
              }
              .text-content h2 {
                font-size: 1.6rem;
              }
            }
          `}),e.jsx("section",{className:"internship-hero",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{children:"Spot Great Talent? Refer Them to Hrify Digital!"}),e.jsx("p",{children:"We're always looking for talented individuals to join our dynamic team at Hrify Digital. If you know someone who would thrive in our innovative environment and align with our vision, refer them to us! Let's work together to create incredible opportunities."})]})}),e.jsx("section",{className:"mb-5",children:e.jsxs("div",{className:"text-content",children:[e.jsx("h2",{className:"text-center section-title",children:"Hrify Digital Candidate Referral Program"}),e.jsx("p",{children:"Introduce us to exceptional talent! Refer a friend, former colleague, or family member with the right skills to join Hrify Digital. We are always looking for skilled professionals across diverse fields, including IT and non-IT roles."}),e.jsx("p",{children:"By participating in our referral program, you play a vital role in helping us identify top candidates who align with our company's mission and values. Your recommendations contribute to building a stronger and more dynamic team at Hrify Digital."}),e.jsx("h2",{children:"Specialized IT Talent"}),e.jsx("p",{children:"Access a pool of skilled IT professionals with expertise across various technologies, including software development, networking, cybersecurity, and cloud computing."}),e.jsx("p",{children:"We are constantly expanding our network of IT specialists who are proficient in modern frameworks and tools such as React, Angular, Python, Java, AWS, and DevOps practices. Your referrals can help us discover new talents that can innovate and drive technological advancements."}),e.jsx("p",{children:"Successfully referring a candidate can earn you a one-time bonus. Refer to the Hrify Digital policy below for more details. It's our way of saying thank you for connecting us with high-quality candidates who fit our culture and contribute to our success."}),e.jsx("p",{children:"Your continued support in identifying and recommending candidates helps us maintain a robust pipeline of professionals ready to make an impact. Let's grow together!"}),e.jsx("h2",{children:"Referral Bonus Policy"}),e.jsx("p",{children:"Hrify Digital values your referrals! Earn a referral bonus when the candidate you refer is hired by Hrify Digital or its clients, subject to the following conditions."}),e.jsx("p",{children:"The bonus structure is designed to reward you fairly for your contribution. Payouts are processed promptly upon successful completion of the candidate's employment milestones, ensuring transparency and trust in our process."}),e.jsx("h2",{children:"Eligibility"}),e.jsx("p",{children:"The referred candidate should not have been in contact with a Hrify Digital recruiter in the past 3 months."}),e.jsx("p",{children:"This policy ensures that your referrals are unique and genuinely add to our candidate pool. We encourage you to refer professionals from your network who you believe will be a great fit for our organization."}),e.jsx("h2",{children:"Employment Duration"}),e.jsx("p",{children:"The referred candidate must successfully complete 90 days of active employment before the referral bonus is awarded."}),e.jsx("p",{children:"This time frame allows us to evaluate the candidate's performance and commitment while ensuring fair and consistent application of the referral bonus policy."}),e.jsx("h2",{children:"Policy Updates"}),e.jsx("p",{children:"Hrify Digital reserves the right to modify, update, or discontinue this policy at any time."}),e.jsx("p",{children:"We are committed to keeping you informed of any changes in our referral program. Regular updates will be shared through official communication channels, ensuring you are always aware of the latest policies."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," The referral bonus currently applies only to candidates and referrers within the North America region. However, we encourage you to refer talented professionals from any location, as we are always eager to connect with exceptional individuals."]}),e.jsx("p",{children:"Let's work together to build a stronger, more talented team! Your referrals help us find outstanding professionals who contribute to our shared success and drive Hrify Digital's mission forward."}),e.jsx("p",{children:"If you have any questions about the referral process or need assistance, feel free to contact our HR team. We are here to support you every step of the way and make your experience seamless and rewarding."})]})}),e.jsx("section",{className:"application-section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Submit a Referral"}),e.jsx("p",{className:"section-subtitle",children:"Know someone who would be a great fit? Share their details below and help us grow our team."}),e.jsx("div",{className:"form-card",children:e.jsxs("form",{children:[e.jsx("h3",{className:"form-section-title",children:"Your Details"}),e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Full Name *"}),e.jsx("input",{type:"text",className:"form-control",required:!0})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Email Address *"}),e.jsx("input",{type:"email",className:"form-control",required:!0})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Phone Number *"}),e.jsx("input",{type:"tel",className:"form-control",required:!0})]})]}),e.jsx("h3",{className:"form-section-title",children:"Candidate Details"}),e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Full Name *"}),e.jsx("input",{type:"text",className:"form-control",required:!0})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Email Address *"}),e.jsx("input",{type:"email",className:"form-control",required:!0})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Phone Number *"}),e.jsx("input",{type:"tel",className:"form-control",required:!0})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Current Job Title *"}),e.jsx("input",{type:"text",className:"form-control",required:!0})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Relevant Skills/Expertise *"}),e.jsx("input",{type:"text",className:"form-control",required:!0})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Preferred Role/Department *"}),e.jsxs("select",{className:"form-select",required:!0,children:[e.jsx("option",{value:"",disabled:!0,selected:!0,children:"Select Department"}),e.jsx("option",{children:"IT"}),e.jsx("option",{children:"HR"}),e.jsx("option",{children:"Marketing"}),e.jsx("option",{children:"Engineering"}),e.jsx("option",{children:"Legal"})]})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"How do you know this candidate? *"}),e.jsx("textarea",{className:"form-control",rows:4,required:!0})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Any comments or notes about the candidate"}),e.jsx("textarea",{className:"form-control",rows:4})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Upload Resume (Optional)"}),e.jsxs("a",{href:"https://forms.google.com/your-form-link",target:"_blank",className:"upload-btn d-block text-decoration-none",children:[e.jsx("i",{className:"fas fa-cloud-upload-alt fa-2x mb-2"}),e.jsx("p",{className:"mb-0",children:"Click to upload via Google Form"})]})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsxs("div",{className:"form-check mb-4",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",required:!0,id:"confirmCheck"}),e.jsx("label",{className:"form-check-label",htmlFor:"confirmCheck",children:"I confirm that the information provided is accurate and that I have obtained the candidate's consent to share their details with Hrify Digital. *"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("button",{type:"submit",className:"submit-btn",children:"Submit Referral"}),e.jsx("p",{className:"confirmation-message",children:"Thank you for your referral! We will review the candidate's details and get in touch if there's a suitable opportunity. Stay tuned for updates!"})]})]})]})})]})}),e.jsx("section",{className:"text-center py-5",children:e.jsx("div",{className:"container",children:e.jsxs("div",{style:{background:"linear-gradient(135deg, #1B8DBB, #1B8DBB)",color:"white",padding:"3rem 2rem",borderRadius:"16px",boxShadow:"0 8px 30px rgba(27, 141, 187, 0.2)"},children:[e.jsx("h2",{className:"text-white mb-3",style:{fontSize:"2.2rem",fontWeight:"700"},children:"Have Questions About Referrals?"}),e.jsx("p",{className:"mb-4",style:{fontSize:"1.1rem",maxWidth:"700px",margin:"0 auto 2rem",opacity:"0.95"},children:"Contact our HR team for any clarification regarding the referral program or process."}),e.jsx("a",{href:"/contact",style:{background:"white",color:"#1B8DBB",padding:"1rem 2.5rem",borderRadius:"50px",fontWeight:"600",fontSize:"1rem",textDecoration:"none",display:"inline-block",transition:"all 0.3s ease"},onMouseOver:t=>t.target.style.background="#f0f0f0",onMouseOut:t=>t.target.style.background="white",children:"Contact HR"})]})})})]}),e.jsx("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"})]}),wg=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner container-fluid",children:e.jsxs("div",{className:"row h-100",children:[e.jsx("div",{className:"col-12 col-lg-6 d-flex justify-content-center align-items-center text-light",children:e.jsx("h2",{className:"fw-bolder text-center",children:"Web Design"})}),e.jsx("div",{className:"col-12 col-lg-6 d-flex justify-content-center align-items-center",children:e.jsx("img",{className:"img-fluid",src:"/assets/images/design image 1.webp",alt:""})})]})}),e.jsx("style",{children:`
          .banner {
            background-image: url(/assets/images/business web design banner.webp);
            height: 600px;
          }
          h2 {
            font-size: 36px;
            color: black;
          }
          @media only screen and (max-width: 600px) {
            .banner {
              height: 400px;
            }
            h2 {
              font-size: 30px;
            }
          }
        `}),e.jsx("section",{className:"py-5 bg-white text-center",children:e.jsxs("div",{className:"container py-4",children:[e.jsx("h2",{className:"display-5 text-primary fw-bold mb-4",children:"Web Design Services"}),e.jsx("p",{className:"lead text-muted mx-auto mb-3",style:{maxWidth:"800px"},children:"Create Stunning, User-Friendly Websites with Our Expert Web Design Services"}),e.jsx("p",{className:"text-muted mx-auto mb-5",style:{maxWidth:"900px"},children:"Our web design services focus on creating visually appealing, responsive, and functional websites that drive results. We combine creativity with technical expertise to deliver designs that engage users and support your business goals."}),e.jsx("p",{className:"text-dark mx-auto mb-5",style:{maxWidth:"900px"},children:"At Hrify Digital, we specialize in custom web design that reflects your brand identity and provides an exceptional user experience. Our team uses the latest design trends and technologies to build websites that are not only beautiful but also optimized for performance and SEO."}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-palette"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"Custom Design"}),e.jsx("p",{className:"text-muted",children:"Unique, tailored designs that match your brand vision and audience preferences."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-mobile-alt"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"Responsive Design"}),e.jsx("p",{className:"text-muted",children:"Mobile-first approach ensuring perfect display across all devices and screen sizes."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-search"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"SEO Optimized"}),e.jsx("p",{className:"text-muted",children:"Built-in SEO best practices to improve search engine visibility and rankings."})]})})]}),e.jsxs("div",{className:"row g-4 mt-4",children:[e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-rocket"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"Fast Loading"}),e.jsx("p",{className:"text-muted",children:"Optimized code and assets for lightning-fast page load times."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-shield-alt"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"Security Focused"}),e.jsx("p",{className:"text-muted",children:"Built with security best practices to protect your website and users."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-headset"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"Ongoing Support"}),e.jsx("p",{className:"text-muted",children:"Continuous maintenance and updates to keep your website current and secure."})]})})]}),e.jsx("p",{className:"text-dark mx-auto mt-5",style:{maxWidth:"900px"},children:"Our web design process involves thorough research, strategic planning, creative design, and rigorous testing to ensure your website not only looks great but also performs exceptionally. We work closely with you throughout the project to bring your vision to life."}),e.jsx("div",{className:"mt-5",children:e.jsx("a",{href:"#",className:"btn btn-danger btn-lg px-5 py-3 fw-bold rounded-pill",children:"Get Your Website Designed"})})]})})]});d("assets/images/Rectangle-27.webp");const Ng=d("assets/images/Web-Maintence.png"),kg=d("assets/images/web-main-image-2.webp"),Sg=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Ng,alt:"Web Maintenance Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
            .banner-full-image {
              width: 100%;
              overflow: hidden;
            }

            .banner-img {
              width: 100%;
              display: block;
            }
          `}}),e.jsx("div",{className:"content container p-3",children:e.jsxs("div",{className:"row h-100 justify-content-center align-items-center mt-4",children:[e.jsx("div",{className:"col-12 col-lg-8 d-flex flex-column justify-content-center ",children:e.jsxs("p",{style:{color:"#686D76"},children:["Launching a website or web application online marks the initial phase in achieving business results on the web, but the journey doesn't conclude there; it's where the real process and responsibility begin. The ultimate success hinges on the meticulous maintenance and upkeep of your website or web application online.",e.jsx("br",{}),e.jsx("br",{}),"Web maintenance is a core service that Hrify Digital offers. We take on the duty of keeping your website updated and up to date, meeting all necessary standards and requirements. Web maintenance is a core service that Hrify Digital offers. We take on the duty of keeping your website updated and up to date, meeting all necessary standards and requirements.",e.jsx("br",{})," ",e.jsx("br",{}),"We offer ongoing support to ensure your website receives timely updates, fixes, redesigns, and more. Our priority is to provide dedicated support, addressing your queries promptly to enhance your online performance effectively."]})}),e.jsx("div",{className:"col-12 col-lg-4 d-flex flex-column justify-content-center ",children:e.jsx("img",{className:"",src:kg,alt:""})})]})}),e.jsxs("div",{className:"container p-3",style:{textAlign:"justify"},children:[e.jsx("br",{}),e.jsx("h1",{style:{color:"#1B8DBB",fontSize:"30px",fontFamily:'"Google Sans", sans-serif'},children:"WE ENSURE THE AFTERGOING"}),e.jsx("br",{}),e.jsxs("ul",{children:[e.jsx("li",{style:{color:"#1B8DBB",fontSize:"20px"},children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1B8DBB 0%, #1B8DBB 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"     Maintaining the uniqueness of your website."]})}),e.jsx("li",{style:{color:"#2110bdff",fontSize:"20px"},children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"    Ensures seamless navigation and readability across devices, enhancing user satisfaction."]})}),e.jsx("li",{style:{color:"#2110bdff",fontSize:"20px"},children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"    Updating the core and guaranteeing uptime and security will help you maintain your website and hosting."]})}),e.jsx("li",{style:{color:"#2110bdff",fontSize:"20px"},children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"    In the event that a problem arises, offer prompt restoration support."]})}),e.jsx("li",{style:{color:"#2110bdff",fontSize:"20px"},children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Providing responsive assistance for any issues or inquiries."]})}),e.jsx("li",{style:{color:"#2110bdff",fontSize:"20px"},children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"    Improving your site's performance and user experience over time."]})}),e.jsx("li",{style:{color:"#2110bdff",fontSize:"20px"},children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"    Keeping your website secure and protected from cyber threats."]})}),e.jsx("li",{style:{color:"#2110bdff",fontSize:"20px"},children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"    Keeping your website secure and protected from cyber threats."]})}),e.jsx("li",{style:{color:"#2110bdff",fontSize:"20px"},children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Timely reminders and information regarding your hosting and domain."]})}),e.jsx("li",{style:{color:"#2110bdff",fontSize:"20px"},children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"    Ensuring that your website is responsive and user-friendly."]})}),e.jsx("li",{style:{color:"#2110bdff",fontSize:"20px"},children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"    Assistance with mail servers, analytics, and hosting servers."]})})]})]}),e.jsx("br",{}),e.jsx("br",{})]}),Bg=d("assets/images/cloud-native-banner.webp"),Dg=d("assets/images/aws-image-1.webp"),Cg=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner container-fluid",children:e.jsxs("div",{className:"row h-100",children:[e.jsx("div",{className:"col-12 col-lg-6 d-flex justify-content-center align-items-center text-light",children:e.jsx("h2",{className:"fw-bolder text-center",children:"AWS Services Implementation"})}),e.jsx("div",{className:"col-12 col-lg-6 d-flex justify-content-center align-items-center",children:e.jsx("img",{className:"img-fluid",src:Dg,alt:""})})]})}),e.jsx("style",{children:`
          .banner {
            background-image: url(${Bg});
            height: 600px;
          }
          h2 {
            font-size: 36px;
            color: black;
          }
          @media only screen and (max-width: 600px) {
            .banner {
              height: 400px;
            }
            h2 {
              font-size: 30px;
            }
          }
        `}),e.jsx("section",{className:"py-5 bg-white text-center",children:e.jsxs("div",{className:"container py-4",children:[e.jsx("h2",{className:"display-5 text-primary fw-bold mb-4",children:"AWS Services Implementation"}),e.jsx("p",{className:"lead text-muted mx-auto mb-3",style:{maxWidth:"800px"},children:"Leverage the Power of Amazon Web Services for Scalable Cloud Solutions"}),e.jsx("p",{className:"text-muted mx-auto mb-5",style:{maxWidth:"900px"},children:"AWS offers a comprehensive suite of cloud services that can transform your business operations. Our expert team helps you implement, migrate to, and optimize AWS services for maximum efficiency and cost savings."}),e.jsx("p",{className:"text-dark mx-auto mb-5",style:{maxWidth:"900px"},children:"At Hrify Digital, we provide end-to-end AWS implementation services, from initial assessment and migration planning to deployment and ongoing management. Our certified AWS professionals ensure your cloud infrastructure is secure, scalable, and cost-effective."}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-cloud"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"Cloud Migration"}),e.jsx("p",{className:"text-muted",children:"Seamless migration of your applications and data to AWS cloud infrastructure."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-server"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"Infrastructure Setup"}),e.jsx("p",{className:"text-muted",children:"Design and implementation of scalable AWS infrastructure components."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-shield-alt"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"Security Implementation"}),e.jsx("p",{className:"text-muted",children:"AWS security best practices and compliance framework implementation."})]})})]}),e.jsxs("div",{className:"row g-4 mt-4",children:[e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-chart-line"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"Cost Optimization"}),e.jsx("p",{className:"text-muted",children:"AWS cost management and optimization strategies for maximum ROI."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-tools"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"DevOps Integration"}),e.jsx("p",{className:"text-muted",children:"CI/CD pipeline setup and automation using AWS developer tools."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-headset"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"24/7 Monitoring"}),e.jsx("p",{className:"text-muted",children:"Continuous monitoring and support for your AWS environment."})]})})]}),e.jsx("p",{className:"text-dark mx-auto mt-5",style:{maxWidth:"900px"},children:"Our AWS implementation services help businesses of all sizes harness the full potential of cloud computing. From startups to enterprises, we provide tailored solutions that drive innovation and growth."}),e.jsx("div",{className:"mt-5",children:e.jsx("a",{href:"#",className:"btn btn-danger btn-lg px-5 py-3 fw-bold rounded-pill",children:"Implement AWS Solutions"})})]})})]}),zg=d("assets/images/Rectangle-27.webp"),Wg=d("assets/images/cyber-security.webp"),Mg=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner container-fluid",children:e.jsxs("div",{className:"row h-100",children:[e.jsx("div",{className:"col-12 col-lg-6 d-flex justify-content-center align-items-center text-light",children:e.jsx("h2",{className:"fw-bolder text-center",children:"Cybersecurity"})}),e.jsx("div",{className:"col-12 col-lg-6 d-flex justify-content-center align-items-center",children:e.jsx("img",{className:"img-fluid",src:Wg,alt:""})})]})}),e.jsx("style",{children:`
          .banner {
            background-image: url(${zg});
            height: 600px;
          }
          h2 {
            font-size: 36px;
            color: black;
          }
          @media only screen and (max-width: 600px) {
            .banner {
              height: 400px;
            }
            h2 {
              font-size: 30px;
            }
          }
        `}),e.jsx("section",{className:"py-5 bg-white text-center",children:e.jsxs("div",{className:"container py-4",children:[e.jsx("h2",{className:"display-5 text-primary fw-bold mb-4",children:"Cybersecurity Services"}),e.jsx("p",{className:"lead text-muted mx-auto mb-3",style:{maxWidth:"800px"},children:"Protect Your Digital Assets with Advanced Cybersecurity Solutions"}),e.jsx("p",{className:"text-muted mx-auto mb-5",style:{maxWidth:"900px"},children:"In today's digital landscape, cybersecurity is paramount. Our comprehensive cybersecurity services protect your organization from evolving threats, ensuring data integrity, compliance, and business continuity."}),e.jsx("p",{className:"text-dark mx-auto mb-5",style:{maxWidth:"900px"},children:"At Hrify Digital, we offer end-to-end cybersecurity solutions tailored to your specific needs. From threat assessment and risk management to incident response and compliance, our expert team implements robust security measures to safeguard your valuable assets."}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-shield-alt"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"Threat Assessment"}),e.jsx("p",{className:"text-muted",children:"Comprehensive vulnerability assessments and threat analysis to identify potential risks."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-lock"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"Access Control"}),e.jsx("p",{className:"text-muted",children:"Multi-factor authentication and role-based access control implementation."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-eye"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"Monitoring & Detection"}),e.jsx("p",{className:"text-muted",children:"24/7 security monitoring and real-time threat detection systems."})]})})]}),e.jsxs("div",{className:"row g-4 mt-4",children:[e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-user-shield"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"Incident Response"}),e.jsx("p",{className:"text-muted",children:"Rapid response plans and procedures for cybersecurity incidents."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-gavel"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"Compliance Management"}),e.jsx("p",{className:"text-muted",children:"GDPR, HIPAA, and other regulatory compliance assistance."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-graduation-cap"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"Security Training"}),e.jsx("p",{className:"text-muted",children:"Employee awareness programs and cybersecurity training sessions."})]})})]}),e.jsx("p",{className:"text-dark mx-auto mt-5",style:{maxWidth:"900px"},children:"Our cybersecurity experts stay ahead of emerging threats, implementing cutting-edge technologies and best practices to protect your organization. Partner with us for comprehensive security that evolves with your business needs."}),e.jsx("div",{className:"mt-5",children:e.jsx("a",{href:"#",className:"btn btn-danger btn-lg px-5 py-3 fw-bold rounded-pill",children:"Secure Your Business"})})]})})]});d("assets/images/Rectangle-27.webp");const Eg=d("assets/images/Business-Web-Design.png"),Ig=d("assets/images/work-flow.webp"),xr=d("assets/images/trip.webp"),Ag=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Eg,alt:"Business Web Design Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"container mb-5",children:e.jsxs("div",{className:"row justify-content-center align-items-center",children:[e.jsxs("div",{className:"col-12 col-lg-8",children:[e.jsx("h3",{style:{color:"#1B8DBB"},children:e.jsx("b",{children:"Website Design Services"})}),e.jsx("br",{}),e.jsx("p",{style:{color:"#686D76"},children:"Our wide range of web design solutions caters to each customer's unique requirements, taking into account their industry and the kind of solution needed. Any business, no matter how big or little, needs a dedicated website that caters to a certain audience. It is crucial to identify the target and create an engaging website that will fulfill the objective of the company."}),e.jsx("p",{style:{color:"#686D76"},children:"Hrify Digital is aware of this, and we use our knowledge and experience to recommend the best website design for your company. Business web design is appropriate for individual professionals seeking a website for their portfolio or for multinational companies needing a large corporate gateway. A basic static website or a complex website with a content-management system for regularly updated content are the options available here. We provide our professional services for both custom and template-driven mobile responsive website designs."})]}),e.jsx("div",{className:"col-12 col-lg-4",children:e.jsx("img",{className:"img-fluid my-4",src:Ig,alt:""})})]})}),e.jsxs("div",{className:"container mobile-only",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:"Leading Web Design Firms"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/businessweb",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:xr,alt:"",className:"me-2"}),"Business web-design"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/resweb",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:xr,alt:"",className:"me-2"}),"Responsive web-design"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/cmsweb",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:xr,alt:"",className:"me-2"}),"CMS Web-design solution"]})})})]})]}),e.jsx("style",{children:`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
        `})]}),Tg=d("assets/images/Responsive-Web-Design.png"),Fg=d("assets/images/res web image 2.webp"),fr=d("assets/images/trip.webp"),Lg=()=>(S.useEffect(()=>{const t=document.getElementById("enquiry-link"),s=document.getElementById("popup-form"),n=document.getElementById("close-btn");if(t&&s&&n){t.addEventListener("click",()=>{s.style.display="flex"}),n.addEventListener("click",()=>{s.style.display="none"}),window.addEventListener("click",r=>{r.target===s&&(s.style.display="none")});const i=document.getElementById("enquiry-form");i&&i.addEventListener("submit",r=>{r.preventDefault(),alert("Form submitted!")})}},[]),e.jsxs(e.Fragment,{children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
          .popup-form {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            justify-content: center;
            align-items: center;
          }
          .form-container {
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            width: 80%;
            max-width: 500px;
            position: relative;
          }
          .close-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 24px;
            cursor: pointer;
          }
          form {
            display: flex;
            flex-direction: column;
          }
          label {
            margin-top: 10px;
          }
          input, textarea {
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #d21312;
            border-radius: 4px;
          }
          button {
            margin-top: 10px;
            padding: 10px;
            background-color: #d21312;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          button:hover {
            background-color: #a10c0c;
          }
          p {
            text-align: justify;
            hyphens: auto;
          }
        `}}),e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Tg,alt:"Responsive Web Design Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
            .banner-full-image {
              width: 100%;
              overflow: hidden;
            }

            .banner-img {
              width: 100%;
              display: block;
            }
          `}}),e.jsx("div",{className:"container my-4",children:e.jsxs("div",{className:"row justify-content-center",children:[e.jsxs("div",{className:"col-12 col-lg-8",children:[e.jsx("p",{style:{color:"#686D76"},children:"At Hrify Digital, we assist companies in creating standards-compliant, mobile-friendly websites. We can help you with responsive design even if your website isn't functional on other internet-connected devices. Google's most recent search algorithm filters out webpages that are mobile-friendly and displays them when users search on a mobile device."}),e.jsx("p",{style:{color:"#686D76"},children:"Our professionals are well-aware of this and provide purpose-specific, lightweight, responsive web design solutions. A responsive site design that works on all platforms or a mobile-specific design layout are the two options available."}),e.jsx("p",{style:{color:"#686D76"},children:"As responsive web design is widely recognized as a standard in the online world, we ensure that all our new web design solutions include this feature by default. However, if you currently have a website that lacks a responsive layout, we are equipped to assist you in converting it to a responsive design."}),e.jsx("p",{style:{color:"#686D76"},children:"As responsive web design is widely recognized as a standard in the online world, we ensure that all our new web design solutions include this feature by default. However, if you currently have a website that lacks a responsive layout, we are equipped to assist you in converting it to a responsive design."}),e.jsx("p",{style:{color:"#686D76"},children:"Benefits of having a responsive website"}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Enhanced search engine ranking and a well-established online presence"]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Fixing your domain name will relieve you of the burden of maintaining separate desktop and mobile webpages."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Reduced bounces as a result of the website's structured content display"]})]}),e.jsx("div",{className:"col-12 col-lg-4",children:e.jsx("img",{className:"img-fluid",src:Fg,alt:""})})]})}),e.jsxs("div",{className:"container mobile-only",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:"Leading Web Design Firms"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx("a",{style:{textDecoration:"none"},href:"businessweb.html",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:fr,alt:"",className:"me-2"}),"Business web-design"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx("a",{style:{textDecoration:"none"},href:"resweb.html",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:fr,alt:"",className:"me-2"}),"Responsive web-design"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx("a",{style:{textDecoration:"none"},href:"cmsweb.html",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:fr,alt:"",className:"me-2"}),"CMS Web-design solution"]})})})]})]})]}),e.jsx("div",{id:"popup-form",className:"popup-form",children:e.jsxs("div",{className:"form-container",children:[e.jsx("span",{className:"close-btn",id:"close-btn",children:"×"}),e.jsx("h2",{children:"Enquiry Form"}),e.jsxs("form",{id:"enquiry-form",children:[e.jsx("label",{htmlFor:"name",children:"Name:"}),e.jsx("input",{type:"text",id:"name",name:"name",required:!0}),e.jsx("label",{htmlFor:"email",children:"Email:"}),e.jsx("input",{type:"email",id:"email",name:"email",required:!0}),e.jsx("label",{htmlFor:"mobile",children:"Mobile:"}),e.jsx("input",{type:"tel",id:"mobile",name:"mobile",required:!0}),e.jsx("label",{htmlFor:"company",children:"Your Company:"}),e.jsx("input",{type:"text",id:"company",name:"company",required:!0}),e.jsx("label",{htmlFor:"description",children:"Describe what you need:"}),e.jsx("textarea",{id:"description",name:"description",rows:4,required:!0}),e.jsx("button",{type:"submit",children:"Send"})]})]})})]}));d("assets/images/Rectangle-27.webp");const Rg=d("assets/images/CMS-Web-Design.png"),Hg=d("assets/images/cms-image-2.webp"),yr=d("assets/images/trip.webp"),Pg=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Rg,alt:"CMS Web Design Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
            .banner-full-image {
              width: 100%;
              overflow: hidden;
            }

            .banner-img {
              width: 100%;
              display: block;
            }
          `}}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"container my- p-3",children:e.jsxs("div",{className:"row justify-content-center",style:{textAlign:"justify"},children:[e.jsxs("div",{className:"col-12 col-lg-8",children:[e.jsx("p",{style:{color:"#686D76"},children:"Websites have been the most successful marketing tool since the beginning of the internet, and the one thing on these websites that guarantees your target traffic is brought towards you and allows you to conduct business is the content. The king is the content."}),e.jsx("p",{style:{color:"#686D76"},children:"A content management system is essential if you want your website's material to be current, relevant, and green at all times. Hrify Digital offers CMS websites on WordPress with the newest trends in technology and security by utilizing the characteristics of the WordPress backend system."}),e.jsx("p",{style:{color:"#686D76"},children:"Our CMS solutions are easy to use and quick to pick up, giving business owners the advantage of being able to update their websites constantly. With our extensive blogging features, they can even publish regular content that benefits their target audience and brings in more revenue."})]}),e.jsx("div",{className:"col-12 col-lg-4",children:e.jsx("img",{className:"img-fluid",src:Hg,alt:""})})]})}),e.jsx("div",{className:"container",children:e.jsx("div",{className:"row",children:e.jsxs("div",{className:"p-4  col-12",style:{textAlign:"justify"},children:[" ",e.jsx("br",{}),e.jsx("h3",{style:{color:"##1B8DBB"},children:"Benefits of Content Management System"})," ",e.jsx("br",{}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   we provide effortless website maintenance and seamless platform updates for smooth operation."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Small adjustments can be performed quickly."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Infinite production of pages"]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Editing with CMS is feasible anywhere and on any device."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   We specialize in seamless plugin integration for optimizing websites effortlessly."]})]})})}),e.jsxs("div",{className:"container mobile-only",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:"Leading Web Design Firms"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx("a",{style:{textDecoration:"none"},href:"businessweb.html",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{className:"img-fluid",src:yr,alt:""}),"Business web-design"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx("a",{style:{textDecoration:"none"},href:"resweb.html",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{className:"img-fluid me-2",src:yr,alt:""}),"Responsive web-design"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx("a",{style:{textDecoration:"none"},href:"cmsweb.html",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{className:"img-fluid me-2",src:yr,alt:""}),"CMS Web-design solution"]})})})]})]}),e.jsx("style",{children:`
            /* Hide the container by default */
            .container.mobile-only {
              display: none;
            }

            /* Display the container only on mobile devices */
            @media (max-width: 768px) {
              .container.mobile-only {
                display: block;
              }
            }
          `})]}),Og=d("assets/images/custom-image-1.webp"),_g=d("assets/images/custom-web-image-2.webp"),Ug=d("assets/images/Rectangle-27.webp"),jr=d("assets/images/trip.webp"),$g=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner container-fluid",style:{backgroundImage:`url(${Ug})`,height:"400px"},children:e.jsxs("div",{className:"row h-100",children:[e.jsxs("div",{className:" col-12 col-lg-6 d-flex justify-content-center align-items-center text-light",children:[e.jsx("h2",{style:{color:"black"},className:"fw-bolder text-center",children:"Custom Web Applications"}),e.jsx("style",{children:`
                    h2 {
                      font-size: 50px;
                      color: black;
                    }
                    @media only screen and (max-width: 600px) {
                      h2 {
                        font-size: 30px;
                      }
                    }
                  `})]}),e.jsx("div",{className:"col-12 col-lg-6 d-flex justify-content-center align-items-center",children:e.jsx("img",{className:"img-fluid",src:Og,alt:""})})]})}),e.jsx("div",{className:"container my-4",children:e.jsxs("div",{className:"row justify-content-center align-items-center",children:[e.jsxs("div",{className:"col-12 col-lg-8",children:[e.jsx("p",{style:{color:"#686D76"},children:"Customized web apps are now in high demand. Custom web apps are necessary for providing more functionality or sophistication to your team or consumers after establishing a website. Hrify Digital can provide extra capabilities based on your specific requirements."}),e.jsx("p",{style:{color:"#686D76"},children:"Hrify Digital has provided high-quality, cost-effective IT solutions to organizations of all sizes for over a decade. We can handle both small and large scale bespoke web applications. Our services include third-party integrations and API implementations. Our team has extensive expertise dealing with APIs such as eBay, Amazon, AWS, Facebook, MailChimp, SMS gateways, and payment gateways."})]}),e.jsx("div",{className:"col-12 col-lg-4",children:e.jsx("img",{className:"img-fluid",src:_g,alt:""})})]})}),e.jsxs("div",{className:"container mobile-only",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:"Distinguished Online Programs"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/customweb",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:jr,alt:"",className:"me-2"}),"Custom web applications"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/ecommerceweb",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:jr,alt:"",className:"me-2"}),"E-Commerce web solutions"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/matrimonyweb",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:jr,alt:"",className:"me-2"}),"Matrimony Web Solutions"]})})})]})]}),e.jsx("style",{children:`
              .container.mobile-only {
                display: none;
              }
              @media (max-width: 768px) {
                .container.mobile-only {
                  display: block;
                }
              }
            `})]}),Vg=d("assets/images/Custom-Web-Applications.png"),qg=d("assets/images/custom-web-image-2.webp");d("assets/images/Rectangle-27.webp");const vr=d("assets/images/trip.webp"),Yg=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Vg,alt:"Custom Web Applications Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container my-4",children:e.jsxs("div",{className:"row justify-content-center align-items-center",style:{color:"#686D76",textAlign:"justify"},children:[e.jsxs("div",{className:"col-12 col-lg-8",children:[e.jsx("p",{style:{color:"#686D76"},children:"Customized web apps are now in high demand. Custom web apps are necessary for providing more functionality or sophistication to your team or consumers after establishing a website. Hrify Digital can provide extra capabilities based on your specific requirements."}),e.jsx("p",{style:{color:"#686D76"},children:"Hrify Digital has provided high-quality, cost-effective IT solutions to organizations of all sizes for over a decade. We can handle both small and large scale bespoke web applications. Our services include third-party integrations and API implementations. Our team has extensive expertise dealing with APIs such as eBay, Amazon, AWS, Facebook, MailChimp, SMS gateways, and payment gateways."})]}),e.jsx("div",{className:"col-12 col-lg-4",children:e.jsx("img",{className:"img-fluid",src:qg,alt:""})})]})}),e.jsxs("div",{className:"container mobile-only",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:"Distinguished Online Programs"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/customweb",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:vr,alt:"",className:"me-2"}),"Custom web applications"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/ecommerceweb",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:vr,alt:"",className:"me-2"}),"E-Commerce web solutions"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/matrimonyweb",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:vr,alt:"",className:"me-2"}),"Matrimony Web Solutions"]})})})]})]}),e.jsx("style",{children:`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
        `})]}),Gg=d("assets/images/E-Commerce-Web-Solutions.png"),Qg=d("assets/images/e-commerce-image-2.webp");d("assets/images/Rectangle-27.webp");const br=d("assets/images/trip.webp"),Kg=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Gg,alt:"E-Commerce Web Solutions Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container my-4",children:e.jsxs("div",{className:"row justify-content-center align-items-center",style:{textAlign:"justify"},children:[e.jsxs("div",{className:"col-12 col-lg-8",children:[e.jsx("p",{style:{color:"#686D76"},children:"Selling your products or services online is the simplest method to operate in this digital age, and it is far simpler with our specialized e-Commerce Web Solutions. We offer adaptable e-commerce and shopping cart solutions that are full featured, safe, and simple to use for small and medium-sized enterprises. Our solutions at Hrify Digital are tailored to your product type, target market, business procedure, and operability. We have effectively provided simple-to-manage B2C and B2B e-Commerce solutions. We create e-commerce solutions for WordPress and Opencart as , which may be adjusted to your specifications and integrated with extra plugins to function."}),e.jsx("p",{style:{color:"#686D76"},children:"Our e-commerce and shopping cart solutions are safe and user-friendly, making them suitable for small and medium enterprises. Hrify Digital offers solutions tailored to your product type, target audience, business process, and operability. We have implemented manageable e-Commerce solutions for both B2C and B2B. We offer customized eCommerce solutions for Wordpress and Opencart, with optional plugins to meet your specific needs."})]}),e.jsx("div",{className:"col-12 col-lg-4",children:e.jsx("img",{className:"img-fluid",src:Qg,alt:""})})]})}),e.jsxs("div",{className:"container",style:{textAlign:"justify"},children:[e.jsx("h3",{className:"my-3",style:{color:"#686D76"},children:"Typical features that come with our products"}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-12 col-lg-4 ",children:e.jsxs("ul",{className:"",style:{color:"#686D76"},children:[e.jsx("li",{className:"my-2",children:"Personalized Front End Layout"}),e.jsx("li",{className:"my-2",children:"Endless possibilities"}),e.jsx("li",{className:"my-2",children:"Multilingual capabilities"}),e.jsx("li",{className:"my-2",children:"Customer feedback and ratings"}),e.jsx("li",{className:"my-2",children:"infinite pages of information"}),e.jsx("li",{className:"my-2",children:"Data insights"}),e.jsx("li",{className:"my-2",children:"Integration of Social Sharing"})]})}),e.jsx("div",{className:"col-12 col-lg-4",children:e.jsxs("ul",{style:{color:"#686D76"},children:[e.jsx("li",{className:"my-2",children:"Automatic Image Resizing"}),e.jsx("li",{className:"my-2",children:"No End to the Categories"}),e.jsx("li",{className:"my-2",children:"Support for multiple currencies"}),e.jsx("li",{className:"my-2",children:"Support for multiple tax rates."}),e.jsx("li",{className:"my-2",children:"Incorporating payment gateways."}),e.jsx("li",{className:"my-2",children:"Orders via Email"}),e.jsx("li",{className:"my-2",children:"Education and Assistance for Managing"})]})})]})]}),e.jsxs("div",{className:"container mobile-only",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:"Distinguished Online Programs"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/customweb",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:br,alt:"",className:"me-2"}),"Custom web applications"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/ecommerceweb",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:br,alt:"",className:"me-2"}),"E-Commerce web solutions"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/matrimonyweb",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:br,alt:"",className:"me-2"}),"Matrimony Web Solutions"]})})})]})]}),e.jsx("style",{children:`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
        `})]}),Xg=d("assets/images/Matrimony-Web-Solutions.png"),Zg=d("assets/images/matrimony-image-2.webp");d("assets/images/Rectangle-27.webp");const wr=d("assets/images/trip.webp"),Jg=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Xg,alt:"Matrimony Web Solutions Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container my-4 justify-content-center p-3",style:{textAlign:"justify"},children:e.jsxs("div",{className:"row justify-content-center align-items-center",children:[e.jsxs("div",{className:"col-12 col-lg-8",children:[e.jsx("p",{style:{color:"#686D76"},children:"Marriages are formed in paradise, and marriage websites are built using the Hrify Digital. We are well-known for the numerous successful matrimony websites that we have supplied to our clientele. We have developed successful matrimonial websites with thousands of profiles. Our expertise in understanding marriage requirements and user experience distinguishes us in providing exceptional solutions."}),e.jsx("p",{style:{color:"#686D76"},children:"We specialize in creating highly effective marriage matching websites capable of managing thousands of profiles. What sets us apart is our deep understanding of user experience and matrimonial needs. Our solutions range from simple profiling systems to complex, multi-database platforms with optional services. We provide expert guidance to implement the right solution for your needs."})]}),e.jsx("div",{className:"col-12 col-lg-4",children:e.jsx("img",{className:"img-fluid ",src:Zg,alt:""})})]})}),e.jsxs("div",{className:"container p-4",style:{textAlign:"justify"},children:[e.jsx("h3",{style:{color:"#686D76"},children:"Standard Features Our Matrimony Solutions Offer"}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Thorough user registration that collects all personal information"]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Beautiful and distinctive website design created by our gifted designers"]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Completely individualized for your hobbies and community "]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Easy and efficient matchmaking services"]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Search for profiles in full according to community, age, religion, location, and a host of other factors. "]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   extensive administrative panel for controlling every aspect of the website "]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Outstanding returns on investment, as demonstrated by our current clientele"]})," ",e.jsx("br",{}),e.jsx("h3",{style:{color:"#686D76"},children:"Matrimony websites are accessible to who?"}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Matrimony consultants operating independently can elevate their business with our feature-rich solutions designed to efficiently manage large member bases."]}),e.jsxs("p",{style:{color:"#686D76",textAlign:"justify"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Prospective investors looking to launch a matrimony business can kickstart their venture with our comprehensive solutions, equipped with everything necessary to initiate and           successfully operate a matrimony business."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"    Individuals who currently operate a matrimony website with a substantial profile base and aim to expand their business to the next level. "]})]}),e.jsxs("div",{className:"container mobile-only",style:{textAlign:"justify"},children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:"Distinguished Online Programs"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/customweb",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:wr,alt:"",className:"me-2"}),"Custom web applications"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/ecommerceweb",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:wr,alt:"",className:"me-2"}),"E-Commerce web solutions"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/matrimonyweb",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:wr,alt:"",className:"me-2"}),"Matrimony Web Solutions"]})})})]})]}),e.jsx("style",{children:`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
        `})]}),ex=d("assets/images/Mobile Application.png"),tx=d("assets/images/mobile-image-2.webp");d("assets/images/Rectangle-27.webp");const sx=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:ex,alt:"Mobile Application Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"content container-fluid ",children:e.jsxs("div",{className:"row h-100 justify-content-center align-items-center p-2 p-lg-2 mx-lg-5 mb-0",children:[e.jsxs("div",{className:"col-12 col-lg-8 d-flex flex-column justify-content-center ",children:[e.jsx("h1",{style:{textAlign:"justify"},children:"Mobile Application Company In Chennai"}),e.jsxs("p",{style:{color:"#686D76"},children:["Hrify Digital, established in 2023, has emerged as a leading app development firm in Tiruvannamalai, serving a wide range of industries. With a proven track record of over 100+ successful app development projects, we are recognized as a premier app development company in Tiruvannamalai. Our expertise extends to delivering innovative app solutions for startups, entrepreneurs, and enterprises worldwide.",e.jsx("br",{}),e.jsx("br",{}),"In today's digital age, mobile apps play a crucial role in connecting businesses with their customers and enhancing user experiences. For small businesses aiming to expand their reach and engage with users effectively, partnering with a reliable app development company like Hrify Digital is essential. With our extensive experience in crafting high-quality, cost-effective app solutions, we are dedicated to helping your business excel in the mobile landscape."]})]}),e.jsx("div",{className:"col-12 col-lg-4 d-flex flex-column justify-content-center",children:e.jsx("img",{className:"img-fluid",src:tx,alt:""})})]})}),e.jsxs("div",{className:"container",style:{textAlign:"justify"},children:[e.jsx("h3",{style:{color:"#686D76"},children:"Our three-step method is used in the development of mobile applications."}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"","Planning and Analysis This first phase entails gathering requirements, defining the scope of the project, performing market research and developing a thorough project plan. It comprises determining the app's goals, target audience, and important capabilities."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"","Design & Development When the planning is finished, the design process begins. This involves UI/UX design, prototyping and developing wireframes. Development is the process of actually creating the software, integrating features, and assuring compatibility across various devices and platforms."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"","Testing and deployment. In this final phase, comprehensive testing is carried out to detect and resolve any faults or issues. This comprises functional and usability testing, performance testing, and security testing. Once testing is completed and the app fulfills quality standards, it is released to the appropriate app stores for customers to download and install."]})]})]}),nx=d("assets/images/Domains,Hosting-and-Cloud-Solutions.png"),ix=d("assets/images/domain-image-2.webp"),rx=d("assets/images/domain-image-3.webp");d("assets/images/Rectangle-27.webp");const kt=d("assets/images/trip.webp"),ax=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:nx,alt:"Domains, Hosting and Cloud Solutions Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container",style:{textAlign:"justify"},children:e.jsxs("div",{className:"row p-lg-4 p-2 align-items-center justify-content-center",children:[e.jsx("div",{className:"col-12 col-lg-8",children:e.jsx("p",{style:{color:"#686D76"},children:"    Hrify Digital offers comprehensive hosting services including domain registration, SSL certificates, and maintenance, all backed by superior support. We cater to specific hosting and cloud solution needs with customized options that align with your requirements and budget. Our dedicated Server Support Team and partnerships with global hosting companies and data centers ensure seamless handling of even the most complex demands. We also provide expert assistance in selecting and installing SSL certificates, ensuring you choose the right solution for your business and receive professional setup and installation support."})}),e.jsx("div",{className:"col-12 col-lg-4 my-5 my-lg-0",children:e.jsx("img",{className:"img-fluid",src:ix,alt:""})})]})}),e.jsx("div",{className:"container",style:{textAlign:"justify"},children:e.jsxs("div",{className:"row align-items-center justify-content-center",children:[e.jsxs("div",{className:"col-12 col-lg-8 p-4",children:[e.jsx("h3",{children:"Advantages of choosing our Hosting and Cloud Services:"})," ",e.jsx("br",{}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"Customized Remedies tailored cloud and hosting solutions to meet your unique requirements and financial constraints."]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"Constant monitoring of websites"]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"Our Server Support Team delivers efficient management and troubleshooting assistance."]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}})," 99.9% uptime assurance"]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"Enhance operational effectiveness and flexibility with our customized hosting and cloud services."]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"committed backup upkeep"]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"specific server assistance"]})})]})]}),e.jsx("div",{className:"col-12 col-lg-4",children:e.jsx("img",{className:"img-fluid",src:rx,alt:""})})]})}),e.jsxs("div",{className:"container mobile-only",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:"Prime Commercial Services"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/domains",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:kt,alt:"",className:"me-2"}),"Dominas, HGosting and Cloud"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/personalemail",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:kt,alt:"",className:"me-2"}),"Personal and Enterprise Email"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/googlework",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:kt,alt:"",className:"me-2"}),"Google Apps and Services"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/emailcampaign",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:kt,alt:"",className:"me-2"}),"Email Campaign Management"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/awsimpl",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:kt,alt:"",className:"me-2"}),"AWS Servcies Implementations"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/designbranding",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:kt,alt:"",className:"me-2"}),"Design and Branding"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/digitalmarketing",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:kt,alt:"",className:"me-2"}),"Digital Marketing and Social Media"]})})})]})]}),e.jsx("style",{children:`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
        `})]}),lx=d("assets/images/Personal-and-Enterprise-Email-Solutions.png"),ox=d("assets/images/personal-image-2.webp");d("assets/images/Rectangle-27.webp");const St=d("assets/images/trip.webp"),cx=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:lx,alt:"Personal and Enterprise Email Solutions Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("br",{}),e.jsx("div",{className:"container",style:{textAlign:"justify"},children:e.jsxs("div",{className:"row p-lg-4 p-2 align-items-center justify-content-center",children:[e.jsx("div",{className:"col-12 col-lg-8",children:e.jsx("p",{style:{color:"#686D76"},children:" Emails have always been the most important form of formal communication, even though digital technology has advanced to the point where new channels and modes of communication appear on a daily basis. Email solutions are still getting better nowadays in terms of simplicity, versatility, and new features.  A professional email address is necessary for any size of organization. It builds your professionalism and brand while also enhancing the quality of your communications. The major competitors like Google and Microsoft have made the email channels more feature-rich and streamlined."})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"col-12 col-lg-4 my-5 my-lg-5",children:e.jsx("img",{className:"img-fluid",src:ox,alt:""})})]})}),e.jsxs("div",{className:"container mobile-only",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:"Prime Commercial Services"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/domains",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:St,alt:"",className:"me-2"}),"Dominas, HGosting and Cloud"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/personalemail",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:St,alt:"",className:"me-2"}),"Personal and Enterprise Email"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/googlework",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:St,alt:"",className:"me-2"}),"Google Apps and Services"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/emailcampaign",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:St,alt:"",className:"me-2"}),"Email Campaign Management"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/awsimpl",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:St,alt:"",className:"me-2"}),"AWS Servcies Implementations"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/designbranding",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:St,alt:"",className:"me-2"}),"Design and Branding"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/digitalmarketing",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:St,alt:"",className:"me-2"}),"Digital Marketing and Social Media"]})})})]})]}),e.jsx("style",{children:`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
        `})]}),dx=d("assets/images/Google-Work-Partner.png"),mx=d("assets/images/google-image-2.webp"),ux=d("assets/images/g-im-1.webp"),hx=d("assets/images/g-im-2.webp"),px=d("assets/images/g-im-3.webp"),gx=d("assets/images/g-im-4.webp"),xx=d("assets/images/g-im-5.webp"),fx=d("assets/images/g-im-6.webp"),yx=d("assets/images/g-im-7.webp"),jx=d("assets/images/g-im-8.webp"),vx=d("assets/images/g-im-9.webp");d("assets/images/Rectangle-27.webp");const Bt=d("assets/images/trip.webp"),bx=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:dx,alt:"Google Work Partner Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container my-3",style:{textAlign:"justify"},children:e.jsxs("div",{className:"row p-lg-1 align-items-center justify-content-center",children:[e.jsx("div",{className:"col-12 col-lg-8",children:e.jsx("p",{style:{color:"#686D76"},children:" We provide G Suite implementations that are customized for companies of all sizes and give the highest caliber of expert support for any required number of user accounts. G Suite, originally Google Apps for Work, is a collection of Google Cloud's intelligent business apps. As a licensed reseller, we help you with implementation, support, and administration to guarantee a smooth integration and operation."})})," ",e.jsx("br",{})," ",e.jsx("br",{}),e.jsx("div",{className:"col-12 col-lg-4 my-5 my-lg-0",children:e.jsx("img",{className:"img-fluid",src:mx,alt:""})})]})}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"row align-items-center justify-content-center",children:[e.jsxs("div",{className:"col-12 col-lg-4 justify-content-center align-items-center text-center p-5",children:[e.jsx("img",{className:"img-fluid mx-auto d-block",src:ux,alt:""}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h3",{style:{color:"#686D76"},children:"Drive"}),e.jsx("br",{}),e.jsx("p",{style:{color:"#686D76",textAlign:"center"},children:"Organize all of your files in one location so you can always have the most recent version with you. Sync files automatically from your desktop."})]}),e.jsxs("div",{className:"col-12 col-lg-4 justify-content-center align-items-center text-center p-5",children:[e.jsx("img",{className:"img-fluid mx-auto d-block",src:hx,alt:""}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h3",{style:{color:"#686D76"},children:"Gmail"}),e.jsx("br",{}),e.jsx("p",{style:{color:"#686D76",textAlign:"center"},children:"Expert, ad-free email with 40GB of mailbox space and round-the-clock help. Compatible with different email clients as well as Microsoft Outlook."})]}),e.jsxs("div",{className:"col-12 col-lg-4 justify-content-center align-items-center text-center p-5",children:[e.jsx("img",{className:"img-fluid mx-auto d-block",src:px,alt:""}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h3",{style:{color:"#686D76"},children:"Slides"}),e.jsx("br",{}),e.jsx("p",{style:{color:"#686D76",textAlign:"center"},children:"You can create, edit, and deliver polished presentations from any smart device. Multiple collaborators can simultaneously work on the presentation."})]})]}),e.jsxs("div",{className:"row align-items-center justify-content-center",children:[e.jsxs("div",{className:"col-12 col-lg-4 justify-content-center align-items-center text-center p-5",children:[e.jsx("img",{className:"img-fluid mx-auto d-block",src:gx,alt:""}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h3",{style:{color:"#686D76"},children:"DOCS"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("p",{style:{color:"#686D76",textAlign:"center"},children:"You can create and modify text documents using any smart device. Multiple users can collaborate on the same document simultaneously, with changes being automatically saved."})]}),e.jsxs("div",{className:"col-12 col-lg-4 justify-content-center align-items-center text-center p-5",children:[e.jsx("img",{className:"img-fluid mx-auto d-block",src:xx,alt:""}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h3",{style:{color:"#686D76"},children:"Meet"}),e.jsx("br",{}),e.jsx("p",{style:{color:"#686D76",textAlign:"center"},children:"Easily communicate through text chats, voice calls, or high-definition video calls with integrated screen sharing. Save both time and costs on travel while enjoying the advantages of face-to-face interactions."})]}),e.jsxs("div",{className:"col-12 col-lg-4 justify-content-center align-items-center text-center p-5",children:[e.jsx("img",{className:"img-fluid mx-auto d-block",src:fx,alt:""}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h3",{style:{color:"#686D76"},children:"Sites"}),e.jsx("br",{}),e.jsx("p",{style:{color:"#686D76",textAlign:"center"},children:"Create a mobile-friendly website for your team or project, or a customer portal effortlessly using intuitive drag-and-drop tools."})]})]}),e.jsxs("div",{className:"row align-items-center justify-content-center",children:[e.jsxs("div",{className:"col-12 col-lg-4 justify-content-center align-items-center text-center p-5",children:[e.jsx("img",{className:"img-fluid mx-auto d-block",src:yx,alt:""}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h3",{style:{color:"#686D76"},children:"Sheets"}),e.jsx("br",{}),e.jsx("p",{style:{color:"#686D76",textAlign:"center"},children:"You can create and modify spreadsheets on any smart device. Manage everything from basic task lists to advanced data analysis, including charts, filters, and pivot tables."})]}),e.jsxs("div",{className:"col-12 col-lg-4 justify-content-center align-items-center text-center p-5",children:[e.jsx("img",{className:"img-fluid mx-auto d-block",src:jx,alt:""}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h3",{style:{color:"#686D76"},children:"Calendar"}),e.jsx("br",{}),e.jsx("p",{style:{color:"#686D76",textAlign:"center"},children:"Save time organizing your schedule and focus more on productivity with shareable calendars that seamlessly integrate with Gmail, Drive, and Hangouts, keeping you informed about upcoming events and tasks."})]}),e.jsxs("div",{className:"col-12 col-lg-4 justify-content-center align-items-center text-center p-5",children:[e.jsx("img",{className:"img-fluid mx-auto d-block",src:vx,alt:""}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h3",{style:{color:"#686D76"},children:"Admin"}),e.jsx("br",{}),e.jsx("p",{style:{color:"#686D76",textAlign:"center"},children:"Managing your system shouldn't be complicated. Effortlessly add users, oversee devices, and adjust security and settings to ensure your data remains secure without the need for extensive manuals or guides."})]})]})]}),e.jsxs("div",{className:"container mobile-only",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:"Prime Commercial Services"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/domains",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Bt,alt:"",className:"me-2"}),"Dominas, HGosting and Cloud"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/personalemail",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Bt,alt:"",className:"me-2"}),"Personal and Enterprise Email"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/googlework",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Bt,alt:"",className:"me-2"}),"Google Apps and Services"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/emailcampaign",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Bt,alt:"",className:"me-2"}),"Email Campaign Management"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/awsimpl",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Bt,alt:"",className:"me-2"}),"AWS Servcies Implementations"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/designbranding",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Bt,alt:"",className:"me-2"}),"Design and Branding"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/digitalmarketing",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Bt,alt:"",className:"me-2"}),"Digital Marketing and Social Media"]})})})]})]}),e.jsx("style",{children:`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
        `})]});d("assets/images/Rectangle-27.webp");const wx=d("assets/images/Email-Campaign-Management-Solutions.png"),Nx=d("assets/images/email-image-2.webp"),kx=d("assets/images/email-image-3.webp"),Dt=d("assets/images/trip.webp"),Sx=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:wx,alt:"Email Campaign Management Solutions Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row p-lg-4 p-2 align-items-center justify-content-center",children:[e.jsx("div",{className:"col-12 col-lg-9",children:e.jsx("p",{style:{color:"#686D76",textAlign:"justify"},children:" Sending email campaigns to your customers and authorized leads has long been a fundamental marketing practice. However, due to advancements in spam filters and increasing complexities, this task has become more challenging. This is where Hrify Digital offers a straightforward Email Campaign Management Solution for your business, leveraging the AWS SES mailing platform. This system is tailored for managing large volumes of email IDs efficiently. While focused on genuine user mailing and mail list management, its robust features make it a compelling choice."})}),e.jsx("div",{className:"col-12 col-lg-3 my-5 my-lg-0 justify-content-center",children:e.jsx("img",{className:"img-fluid",src:Nx,alt:""})})]})}),e.jsx("div",{style:{backgroundColor:"#F1F1F1",textAlign:"justify"},className:"p-4",children:e.jsxs("div",{className:"row align-items-center justify-content-center ms-lg-3",children:[e.jsxs("div",{className:"col-12 col-lg-8 p-4",children:[e.jsx("h3",{children:"Advantages of choosing our Hosting and Cloud Services:"})," ",e.jsx("br",{}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Simplified Management: Easily handle email campaigns with streamlined processes."]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Management of mailing lists"]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Scheduling of campaign mail"]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   99.9% uptime assurance"]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   All-inclusive Features: Get strong instruments designed for actual user mailing and list administration."]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"  Plans that are adaptable and solely limit the quantity of emails sent, rather than the number of contacts addressed"]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Reliable Support Take advantage of Hrify Digital' proficiency in email campaign optimization."]})})]})]}),e.jsx("div",{className:"col-12 col-lg-3",children:e.jsx("img",{className:"img-fluid",src:kx,alt:""})})]})}),e.jsxs("div",{className:"container mobile-only",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:"Prime Commercial Services"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/domains",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Dt,alt:"",className:"me-2"}),"Domains, Hosting and Cloud"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/personalemail",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Dt,alt:"",className:"me-2"}),"Personal and Enterprise Email"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/googlework",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Dt,alt:"",className:"me-2"}),"Google Apps and Services"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/emailcampaign",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Dt,alt:"",className:"me-2"}),"Email Campaign Management"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/awsimpl",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Dt,alt:"",className:"me-2"}),"AWS Services Implementations"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/designbranding",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Dt,alt:"",className:"me-2"}),"Design and Branding"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/digitalmarketing",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Dt,alt:"",className:"me-2"}),"Digital Marketing and Social Media"]})})})]})]}),e.jsx("style",{children:`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
        `})]});d("assets/images/Rectangle-27.webp");const Bx=d("assets/images/AWS-Services-Implementations.png"),Dx=d("assets/images/aws-image-2.webp"),Cx=d("assets/images/a-im-1.webp");d("assets/images/a-im-2.webp");const zx=d("assets/images/a-im-3.webp"),Wx=d("assets/images/a-im-4.webp"),Mx=d("assets/images/a-im-5.webp"),Ex=d("assets/images/a-im-6.webp"),Ix=d("assets/images/a-im-7.webp"),Ax=d("assets/images/a-im-8.webp"),Tx=d("assets/images/a-im-9.webp"),Fx=d("assets/images/a-im-10.webp"),Lx=d("assets/images/a-im-11.webp"),Rx=d("assets/images/a-im-12.webp"),Hx=d("assets/images/construction.webp"),Ct=d("assets/images/trip.webp"),Px=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Bx,alt:"AWS Services Implementations Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row p-lg-4 p-2 align-items-center justify-content-center",children:[e.jsx("div",{className:"col-12 col-lg-9",children:e.jsx("p",{style:{color:"#686D76",textAlign:"justify"},children:" Amazon Web Services (AWS) has significantly impacted the cloud market and is now the preferred choice for businesses ranging from startups to large corporations. As a partner, Hrify Digital offers expertise in leveraging AWS advantages for your business. We specialize in providing dedicated support to implement AWS Solutions tailored to enhance your operational efficiency and scalability."})}),e.jsx("div",{className:"col-12 col-lg-3 my-5 my-lg-0 justify-content-center",children:e.jsx("img",{className:"img-fluid",src:Dx,alt:""})})]})})," ",e.jsx("br",{}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"row text-center",children:[e.jsx("h3",{style:{fontWeight:"700"},children:"Services offered by Amazon"})," ",e.jsx("br",{})," ",e.jsx("br",{})]}),e.jsxs("div",{className:"row text-center align-items-center",children:[e.jsxs("div",{className:"col-12 col-lg-3 justify-content-center p-4",children:[e.jsx("img",{src:Cx,alt:"",className:"img-fluid mx-auto d-block"}),e.jsx("h3",{style:{color:"#686D76",textAlign:"center"},children:"Computer"})]}),e.jsxs("div",{className:"col-12 col-lg-3 justify-content-center p-4",children:[e.jsx("img",{src:Hx,alt:"",className:"img-fluid mx-auto d-block"}),e.jsx("h3",{style:{color:"#686D76",textAlign:"center"},children:"Developer Tools"})]}),e.jsxs("div",{className:"col-12 col-lg-3 justify-content-center p-4",children:[e.jsx("img",{src:zx,alt:"",className:"img-fluid mx-auto d-block"}),e.jsx("h3",{style:{color:"#686D76",textAlign:"center"},children:"Management Tools"})]}),e.jsxs("div",{className:"col-12 col-lg-3 justify-content-center p-4",children:[e.jsx("img",{src:Wx,alt:"",className:"img-fluid mx-auto d-block"}),e.jsx("h3",{style:{color:"#686D76",textAlign:"center"},children:"Internet of Things"})]})]}),e.jsxs("div",{className:"row text-center align-items-center",children:[e.jsxs("div",{className:"col-12 col-lg-3 justify-content-center p-4",children:[e.jsx("img",{src:Mx,alt:"",className:"img-fluid mx-auto d-block"}),e.jsx("h3",{style:{color:"#686D76",textAlign:"center"},children:"Storage"})]}),e.jsxs("div",{className:"col-12 col-lg-3 justify-content-center p-4",children:[e.jsx("img",{src:Ex,alt:"",className:"img-fluid mx-auto d-block"}),e.jsxs("h3",{style:{color:"#686D76",textAlign:"center"},children:["Security Identity &",e.jsx("br",{}),"Compliance"]})]}),e.jsxs("div",{className:"col-12 col-lg-3 justify-content-center p-4",children:[e.jsx("img",{src:Ix,alt:"",className:"img-fluid mx-auto d-block"}),e.jsx("h3",{style:{color:"#686D76",textAlign:"center"},children:"Application Services"})]}),e.jsxs("div",{className:"col-12 col-lg-3 justify-content-center p-4",children:[e.jsx("img",{src:Ax,alt:"",className:"img-fluid mx-auto d-block"}),e.jsxs("h3",{style:{color:"#686D76",textAlign:"center"},children:["Desktop & App",e.jsx("br",{}),"Streaming"]})]})]}),e.jsxs("div",{className:"row text-center align-items-center",children:[e.jsxs("div",{className:"col-12 col-lg-3 justify-content-center",children:[e.jsx("img",{src:Tx,alt:"",className:"img-fluid mx-auto d-block"}),e.jsx("h3",{style:{color:"#686D76",textAlign:"center"},children:"Database"})]}),e.jsxs("div",{className:"col-12 col-lg-3 justify-content-center",children:[e.jsx("img",{src:Fx,alt:"",className:"img-fluid mx-auto d-block"}),e.jsx("h3",{style:{color:"#686D76",textAlign:"center"},children:"Analytics"})]}),e.jsxs("div",{className:"col-12 col-lg-3 justify-content-center",children:[e.jsx("img",{src:Lx,alt:"",className:"img-fluid mx-auto d-block"}),e.jsx("h3",{style:{color:"#686D76",textAlign:"center"},children:"Messaging"})]}),e.jsxs("div",{className:"col-12 col-lg-3 justify-content-center",children:[e.jsx("img",{src:Rx,alt:"",className:"img-fluid mx-auto d-block"}),e.jsx("h3",{style:{color:"#686D76",textAlign:"center"},children:"Game Development"})]})]})]})," ",e.jsx("br",{})," ",e.jsx("br",{}),e.jsxs("div",{className:"container mobile-only",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:"Prime Commercial Services"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/domains",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Ct,alt:"",className:"me-2"}),"Domains, Hosting and Cloud"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/personalemail",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Ct,alt:"",className:"me-2"}),"Personal and Enterprise Email"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/googlework",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Ct,alt:"",className:"me-2"}),"Google Apps and Services"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/emailcampaign",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Ct,alt:"",className:"me-2"}),"Email Campaign Management"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/awsimpl",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Ct,alt:"",className:"me-2"}),"AWS Services Implementations"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/designbranding",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Ct,alt:"",className:"me-2"}),"Design and Branding"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/digitalmarketing",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Ct,alt:"",className:"me-2"}),"Digital Marketing and Social Media"]})})})]})]}),e.jsx("style",{children:`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
        `})]});d("assets/images/Rectangle-27.webp");const Ox=d("assets/images/Design-and-Branding-Solutions.png"),_x=d("assets/images/design-image-2.webp"),zt=d("assets/images/trip.webp"),Ux=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Ox,alt:"Design and Branding Solutions Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center justify-content-center ms-lg-0",children:[e.jsxs("div",{className:"col-12 col-lg-8 p-4",style:{textAlign:"justify"},children:[e.jsx("p",{style:{color:"#686D76",textAlign:"justify"},children:"Whether you need a logo designed or a complete branding solution that includes design for all of your business props, Hrify Digital provides customized design and branding solutions for your company. To deliver the greatest results for your business design expectations, we have devoted designers that only use Photoshop and Illustrator. Please provide me with a concise explanation in the exact same terms."})," ",e.jsx("br",{}),e.jsx("h3",{children:"Services Included in Our Design Solutions:"})," ",e.jsx("br",{}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Design of a Logo Make unique, enduring logos for your company."]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Solutions for Branding Create thorough branding materials and tactics."]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Graphic Design Create a range of marketing collateral and business accessories."]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Proficiency in Software For detailed design work, use Adobe Illustrator and Photoshop."]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Banner Image Designs & Visiting Card Custom Designs"]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"  Print Material and Label Designs"]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"  Social Media Promotion Image Designs"]})})]})]}),e.jsx("div",{className:"col-12 col-lg-3",children:e.jsx("img",{className:"img-fluid",src:_x,alt:""})})]})}),e.jsxs("div",{className:"container mobile-only",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:"Prime Commercial Services"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/domains",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:zt,alt:"",className:"me-2"}),"Domains, Hosting and Cloud"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/personalemail",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:zt,alt:"",className:"me-2"}),"Personal and Enterprise Email"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/googlework",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:zt,alt:"",className:"me-2"}),"Google Apps and Services"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/emailcampaign",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:zt,alt:"",className:"me-2"}),"Email Campaign Management"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/awsimpl",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:zt,alt:"",className:"me-2"}),"AWS Services Implementations"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/designbranding",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:zt,alt:"",className:"me-2"}),"Design and Branding"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/digitalmarketing",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:zt,alt:"",className:"me-2"}),"Digital Marketing and Social Media"]})})})]})]}),e.jsx("style",{children:`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
        `})]});d("assets/images/Rectangle-27.webp");const $x=d("assets/images/DigitalMarketing&SocialMediaSolutions.png"),Vx=d("assets/images/digital-image-2.webp"),Wt=d("assets/images/trip.webp"),qx=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:$x,alt:"Digital Marketing & Social Media Solutions Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container my-4",children:e.jsxs("div",{className:"row align-items-center justify-content-center ms-lg-3",children:[e.jsxs("div",{className:"col-12 col-lg-8 p-4",children:[e.jsx("p",{style:{color:"#686D76",textAlign:"justify"},children:"Over the last ten years, social media and digital marketing have emerged as the most sought-after strategies for driving online sales and clientele for businesses. The method of advertising websites to search engines and social media platforms has never changed, even when the platforms, algorithms, and techniques for these are updated annually."}),e.jsx("p",{style:{color:"#686D76",textAlign:"justify"},children:"At Hrify Digital, we have a particular plan that uses only a few tactics to have targeted digital marketing for businesses. Better ranking, more traffic, and more traction are the outcomes of this.  We carefully combine off-page advertising and organic SEO to improve your search engine ranking. Improved traffic and more business conversions are the outcomes when combined with our focused social media marketing."})]}),e.jsx("div",{className:"col-12 col-lg-4",children:e.jsx("img",{className:"img-fluid",src:Vx,alt:""})})]})}),e.jsxs("div",{className:"container mobile-only",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:"Prime Commercial Services"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/domains",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Wt,alt:"",className:"me-2"}),"Domains, Hosting and Cloud"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/personalemail",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Wt,alt:"",className:"me-2"}),"Personal and Enterprise Email"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/googlework",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Wt,alt:"",className:"me-2"}),"Google Apps and Services"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/emailcampaign",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Wt,alt:"",className:"me-2"}),"Email Campaign Management"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/awsimpl",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Wt,alt:"",className:"me-2"}),"AWS Services Implementations"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/designbranding",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Wt,alt:"",className:"me-2"}),"Design and Branding"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/digitalmarketing",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Wt,alt:"",className:"me-2"}),"Digital Marketing and Social Media"]})})})]})]}),e.jsx("style",{children:`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
        `})]}),Yx=d("assets/images/MarketingSupportServices.png"),Gx=d("assets/images/market-image-2.webp"),Qx=d("assets/images/market-image-3.webp"),Kx=()=>(S.useEffect(()=>{const t=document.getElementById("enquiry-link"),s=document.getElementById("popup-form"),n=document.getElementById("close-btn");if(t&&s&&n){const a=()=>{s.style.display="flex"},l=()=>{s.style.display="none"};t.addEventListener("click",c=>{c.preventDefault(),a()}),n.addEventListener("click",l),window.addEventListener("click",c=>{c.target===s&&l()}),document.getElementById("enquiry-form").addEventListener("submit",c=>{c.preventDefault(),alert("Form submitted!"),l()})}const i=document.getElementById("downloadBtn"),r=document.getElementById("popup");i&&r&&(i.onclick=function(a){a.preventDefault(),r.style.display="block"},r.onclick=function(a){a.target===r&&(r.style.display="none")})},[]),e.jsxs("div",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Yx,alt:"Marketing Support Services Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"content container-fluid",children:e.jsxs("div",{className:"row h-100 justify-content-center align-items-center",children:[e.jsx("div",{className:"col d-flex flex-column justify-content-center m-4",children:e.jsx("p",{style:{color:"#686D76"},children:"In order to connect with new customers and prospects who are interested in their goods and services, a firm must first engage in the lead generation process, which is known as marketing support services. The sales cycle and sales funnel start with this phase. The deliberate process of generating leads, tracking them, and converting them is known as lead generation. While there are many different lead generation strategies utilized by sales and business professionals worldwide, we provide a tried-and-true approach that can help you grow your company. We produce high-quality leads for your company, which multiplies the likelihood that they will convert."})}),e.jsx("div",{className:"col d-flex flex-column justify-content-center m-4",children:e.jsx("img",{className:"img-fluid",src:Gx,alt:"Marketing Support Services"})})]})}),e.jsxs("div",{style:{backgroundColor:"#F1F1F1"},className:"container p-4",children:[e.jsx("h3",{style:{color:"#686D76"},children:"Significance of Marketing Support Services for Businesses:"}),e.jsx("p",{style:{color:"#686D76"},children:"Any firm must do it, and if you do it well, you can boost revenue for your enterprise. The process of generating leads has been made much simpler by social media and search engines. To convert into sales, a corporation must first create potential customers and pique people's interest in its efforts, operations, goods, and other offerings. Understanding the quality of leads and how to handle them is essential for successful lead creation."}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h3",{style:{color:"#686D76"},children:"For what reason are marketing support services needed?"}),e.jsx("div",{className:"content container-fluid",children:e.jsxs("div",{className:"row h-100 justify-content-center align-items-center",children:[e.jsxs("div",{className:"col-12 col-lg-3 d-flex flex-column justify-content-center m-4",children:[e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Business uninterruptedness"]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Knowledge of the market"]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Increased Revenue and Turnover"]})]}),e.jsxs("div",{className:"col-12 col-lg-3 d-flex flex-column justify-content-center m-4",children:[e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Sales forecasting"]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   steady pipeline"]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Cross selling opportunities"]})]}),e.jsxs("div",{className:"col-12 col-lg-3 d-flex flex-column justify-content-center m-4",children:[e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Customer Engagement"]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Business Growth"]}),e.jsx("p",{children:" "})]})]})})]}),e.jsxs("div",{className:"container p-4",children:[e.jsx("h3",{style:{color:"#686D76"},children:"Our Priceless Offering:"}),e.jsx("p",{style:{color:"#686D76"},children:"In Tiruvanaamalai, Hrify Digital was a pioneer in the internet industry. We have created thousands of portals that are successfully used by several enterprises. We also have experience creating, managing, and advertising public interface sites that have a large audience and generate a lot of traffic."}),e.jsx("p",{style:{color:"#686D76"},children:"We have built tools to monitor and operate the leads in addition to strategizing the right lead production formula thanks to our combined knowledge and exposure. Our firms' experiments have led to this evolving experience. With this knowledge, we can provide businesses with real lead generating services that will spur their expansion. We can provide quality leads that are well-targeted and have a high conversion rate. Our combined experience with our changing tactics gives companies a cutting-edge marketing advantage and a reliable platform for generating leads."})]}),e.jsx("div",{className:"container p-4",children:e.jsxs("div",{className:"row h-100 justify-content-center align-items-center",children:[e.jsx("div",{className:"row",children:e.jsx("h2",{style:{color:"#686D76"},children:"Several strategies used in lead generation include:"})}),e.jsxs("div",{className:"col-12 col-lg-3 d-flex flex-column justify-content m-4",children:[e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   campaigns for digital marketing"]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   email marketing"]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Google ad words"]})]}),e.jsxs("div",{className:"col-12 col-lg-3 d-flex flex-column justify-content-center m-4",children:[e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Advertisements on Portals"]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Website search engine optimization"]}),e.jsxs("div",{className:"d-flex",children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),e.jsx("p",{style:{color:"#686D76"},children:"   Social media marketing and promotions"})]})]}),e.jsx("div",{className:"col-12 col-lg-3 d-flex flex-column justify-content-center m-4",children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   SMS marketing"]})})]})}),e.jsx("div",{className:"container p-4",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsxs("div",{className:"col-12 col-md-6 mb-4 mb-md-0",children:[e.jsx("h3",{className:"text-muted",children:"Our System of Values:"}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   We don't sell leads to other people twice."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Our sole method of generating leads is pull marketing."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   We only use safe techniques to provide high-quality leads."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   We abide by all GDPR regulations."]}),e.jsx("br",{}),e.jsx("h3",{className:"text-muted",children:"Benefits of Services:"}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Authentic outcomes in full."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Delivery depending on ROI."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Thorough reporting and updates."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Frequent advice for enhancing business operations."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Technology-driven strategies."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Additional resources and services."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Advantage of network."]})]}),e.jsx("div",{className:"col-12 col-md-6 d-flex justify-content-center",children:e.jsx("img",{className:"img-fluid",src:Qx,alt:"Marketing Support Services"})})]})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{id:"popup-form",className:"popup-form",style:{display:"none"},children:e.jsxs("div",{className:"form-container",children:[e.jsx("span",{className:"close-btn",id:"close-btn",children:"×"}),e.jsx("h2",{children:"Enquiry Form"}),e.jsxs("form",{id:"enquiry-form",children:[e.jsx("label",{htmlFor:"name",children:"Name:"}),e.jsx("input",{type:"text",id:"name",name:"name",required:!0}),e.jsx("label",{htmlFor:"email",children:"Email:"}),e.jsx("input",{type:"email",id:"email",name:"email",required:!0}),e.jsx("label",{htmlFor:"mobile",children:"Mobile:"}),e.jsx("input",{type:"tel",id:"mobile",name:"mobile",required:!0}),e.jsx("label",{htmlFor:"company",children:"Your Company:"}),e.jsx("input",{type:"text",id:"company",name:"company",required:!0}),e.jsx("label",{htmlFor:"description",children:"Describe what you need:"}),e.jsx("textarea",{id:"description",name:"description",rows:4,required:!0}),e.jsx("button",{type:"submit",children:"Send"})]})]})}),e.jsx("style",{children:`
          .popup-form {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            justify-content: center;
            align-items: center;
          }

          .form-container {
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            width: 80%;
            max-width: 500px;
            position: relative;
          }

          .close-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 24px;
            cursor: pointer;
          }

          form {
            display: flex;
            flex-direction: column;
          }

          label {
            margin-top: 10px;
          }

          input, textarea {
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #d21312;
            border-radius: 4px;
          }

          button {
            margin-top: 10px;
            padding: 10px;
            background-color: #d21312;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }

          button:hover {
            background-color: #a10c0c;
          }
        `})]})),Xx=d("assets/images/WebsiteAuditing&ConsultingService.png"),Zx=d("assets/images/web-audit-image-2.webp"),Jx=()=>(S.useEffect(()=>{const t=document.getElementById("enquiry-link"),s=document.getElementById("popup-form"),n=document.getElementById("close-btn");if(t&&s&&n){const a=()=>{s.style.display="flex"},l=()=>{s.style.display="none"};t.addEventListener("click",c=>{c.preventDefault(),a()}),n.addEventListener("click",l),window.addEventListener("click",c=>{c.target===s&&l()}),document.getElementById("enquiry-form").addEventListener("submit",c=>{c.preventDefault(),alert("Form submitted!"),l()})}const i=document.getElementById("downloadBtn"),r=document.getElementById("popup");i&&r&&(i.onclick=function(a){a.preventDefault(),r.style.display="block"},r.onclick=function(a){a.target===r&&(r.style.display="none")})},[]),e.jsxs("div",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Xx,alt:"Website Auditing & Consulting Service Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"content container-fluid",children:e.jsxs("div",{className:"row h-100 justify-content-center align-items-center",children:[e.jsxs("div",{className:"col d-flex flex-column justify-content-center m-4",children:[e.jsx("h3",{style:{color:"#686D76"},children:"Welcome to our Website Auditing & Consulting Service."}),e.jsx("p",{style:{color:"#686D76"},children:"Does your website's performance fall short of your expectations? Are you having trouble bringing in leads, converting visitors into customers, or drawing in visitors? Our website audits and consulting service can assist you in determining the problems with your website and offer practical suggestions for enhancing its functionality."}),e.jsx("p",{style:{color:"#686D76"},children:"Your website will get a thorough audit by our team of knowledgeable website auditors and consultants, who will examine several aspects including user experience, design, functionality, and content. We'll point out any technical problems or potential areas for development and give you a thorough report with our conclusions and suggestions."}),e.jsx("p",{style:{color:"#686D76"},children:"We offer more than simply problem identification with our website consulting service. We'll collaborate closely with you to put the suggested adjustments and website optimizations into action. Since every website is different, we'll work with you to create a personalized plan that complements your company's aims and ambitions."})]}),e.jsx("div",{className:"col d-flex flex-column justify-content-center m-4",children:e.jsx("img",{className:"img-fluid",src:Zx,alt:"Website Auditing Service"})})]})}),e.jsxs("div",{className:"p-4",style:{backgroundColor:"#F1F1F1"},children:[e.jsx("h3",{className:"text-muted",children:"For what reason are marketing support services needed?"}),e.jsxs("div",{className:"col-12 col-md-6 mb-4 mb-md-0",children:[e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Make the user experience on your website better"]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Increase the number of leads and sales."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Boost traffic to websites"]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Make your website conversion-friendly."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Boost the visibility of your website in search engines"]}),e.jsx("br",{})]})]}),e.jsxs("div",{className:"container p-5",children:[e.jsx("p",{style:{color:"#686D76"},children:"We take great satisfaction in our ability to offer companies of all sizes and sectors top-notch website audits and consulting services. We are dedicated to exceeding your expectations with our exceptional results, and we have years of expertise working with clients in a variety of industries."}),e.jsx("p",{style:{color:"#686D76"},children:"Reach out to us to discover more about our website audits and consulting services if you're prepared to elevate your website to new heights. Our goal is to support your success!"})]}),e.jsx("div",{id:"popup-form",className:"popup-form",style:{display:"none"},children:e.jsxs("div",{className:"form-container",children:[e.jsx("span",{className:"close-btn",id:"close-btn",children:"×"}),e.jsx("h2",{children:"Enquiry Form"}),e.jsxs("form",{id:"enquiry-form",children:[e.jsx("label",{htmlFor:"name",children:"Name:"}),e.jsx("input",{type:"text",id:"name",name:"name",required:!0}),e.jsx("label",{htmlFor:"email",children:"Email:"}),e.jsx("input",{type:"email",id:"email",name:"email",required:!0}),e.jsx("label",{htmlFor:"mobile",children:"Mobile:"}),e.jsx("input",{type:"tel",id:"mobile",name:"mobile",required:!0}),e.jsx("label",{htmlFor:"company",children:"Your Company:"}),e.jsx("input",{type:"text",id:"company",name:"company",required:!0}),e.jsx("label",{htmlFor:"description",children:"Describe what you need:"}),e.jsx("textarea",{id:"description",name:"description",rows:4,required:!0}),e.jsx("button",{type:"submit",children:"Send"})]})]})}),e.jsx("style",{children:`
          .popup-form {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            justify-content: center;
            align-items: center;
          }

          .form-container {
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            width: 80%;
            max-width: 500px;
            position: relative;
          }

          .close-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 24px;
            cursor: pointer;
          }

          form {
            display: flex;
            flex-direction: column;
          }

          label {
            margin-top: 10px;
          }

          input, textarea {
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #1B8DBB;
            border-radius: 4px;
          }

          button {
            margin-top: 10px;
            padding: 10px;
            background-color: #1B8DBB;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }

          button:hover {
            background-color: #15749A;
          }
        `})]}));d("assets/images/Rectangle-27.webp");const ef=d("assets/images/SystemIntegrationMaintenance.png"),tf=d("assets/images/intern-image-2.webp"),sf=d("assets/images/sys-log-1.webp"),nf=d("assets/images/sys-logo-2.webp"),rf=d("assets/images/sys-logo-3.webp"),af=d("assets/images/sys-logo-4.webp"),lf=d("assets/images/sys-logo-5.webp"),of=d("assets/images/sys-logo-6.webp"),cf=d("assets/images/sys-logo-7.webp"),df=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:ef,alt:"System Integration Maintenance Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center my-5",children:[e.jsxs("div",{className:"col-12 col-lg-7",children:[e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",textAlign:"justify"},children:" At Hrify Digital we specialize in seamless systems integration and reliable maintenance services. Our team ensures that your IT infrastructure operates efficiently by integrating various systems into a cohesive and optimized environment. We provide ongoing support and maintenance to keep your systems running smoothly, minimizing downtime and enhancing overall performance. With our expertise, your technology infrastructure will be robust, scalable, and aligned with your business needs."}),e.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},children:[e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Seamless Integration"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Optimized Performance"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Scalability"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Reliability"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Proactive Maintenance"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Customization"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Cost efficiency"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Expert Support"})]})]})]}),e.jsx("div",{className:"col-12 col-lg-5 text-center",children:e.jsx("img",{className:"img-fluid ",src:tf,alt:""})})]})}),e.jsxs("div",{className:"container",children:[e.jsxs("h1",{style:{color:"#686D76",textAlign:"center"},children:[e.jsx("b",{children:"Networking Solutions"})," "]}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/systemintegration",children:e.jsxs("span",{style:{backgroundColor:"black",border:"none"},className:"box",children:[e.jsx("img",{src:sf,alt:"",className:"me-2"}),e.jsx("b",{children:"System Integration &Maintenance"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/infrastructure",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:nf,alt:"",className:"me-2"}),e.jsx("b",{children:"Infrastructure Management"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/serverstorage",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:rf,alt:"",className:"me-2"}),e.jsx("b",{children:"Server & Storage"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/networksecurity",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:af,alt:"",className:"me-2"}),e.jsx("b",{children:"Network security"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/structuredcabling",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:lf,alt:"",className:"me-2"}),e.jsx("b",{children:"Structured Cabling"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/cloudnative",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:of,alt:"",className:"me-2"}),e.jsx("b",{children:"Cloud Native Solution"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/workplace",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:cf,alt:"",className:"me-2"}),e.jsx("b",{children:"Workpalce Surveillance"})]})})})]})]}),e.jsx("style",{children:`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
        `})]});d("assets/images/Rectangle-27.webp");const mf=d("assets/images/InfrastructureManagement.png"),uf=d("assets/images/infra-image-2.webp"),hf=d("assets/images/infra-l-1.webp"),pf=d("assets/images/infra-l-2.webp"),gf=d("assets/images/infra-l-3.webp"),xf=d("assets/images/infra-l-4.webp"),ff=d("assets/images/sys-log-1.webp"),yf=d("assets/images/sys-logo-2.webp"),jf=d("assets/images/sys-logo-3.webp"),vf=d("assets/images/sys-logo-4.webp"),bf=d("assets/images/sys-logo-5.webp"),wf=d("assets/images/sys-logo-6.webp"),Nf=d("assets/images/sys-logo-7.webp"),kf=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:mf,alt:"Infrastructure Management Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center my-5",children:[e.jsx("div",{className:"col-12 col-lg-8",children:e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",textAlign:"justify"},children:"At Hrify Digital, our Infrastructure Management services are designed to ensure that your IT environment operates at peak efficiency. We manage and optimize your entire infrastructure, from servers and networks to cloud services and data centers. Our proactive approach includes continuous monitoring, regular updates, and strategic planning to prevent issues and minimize downtime. By leveraging the latest technologies and best practices, we provide a stable, scalable, and secure infrastructure that supports your business's growth and adaptability in an ever-changing digital landscape."})}),e.jsx("div",{className:"col-12 col-lg-4 text-center",children:e.jsx("img",{className:"img-fluid",src:uf,alt:""})})]})}),e.jsxs("div",{className:"container",children:[e.jsx("h5",{className:"text-center",style:{color:"#1B8DBB"},children:e.jsx("b",{children:"Our Offerings"})}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-12 col-lg-6 justify-content-center",children:[e.jsx("div",{className:"text-center",children:e.jsx("img",{className:"text-center",style:{height:"50px",filter:"hue-rotate(180deg) saturate(1.5) brightness(0.8)"},src:hf,alt:""})}),e.jsx("p",{children:"A complete range of server and storage solutions with reliable backup systems to securely manage your data."})]}),e.jsxs("div",{className:"col-12 col-lg-6 justify-content-center",children:[e.jsx("div",{className:"text-center",children:e.jsx("img",{className:"text-center",style:{height:"50px",filter:"hue-rotate(180deg) saturate(1.5) brightness(0.8)"},src:pf,alt:""})}),e.jsx("p",{children:"We offer high-performance laptops with licensed software, the latest Windows OS, and fast M.2 SSDs, plus customizable desktops and laptops from authorized vendors, all ready for instant use."})]})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-12 col-lg-6 justify-content-center",children:[e.jsx("div",{className:"text-center",children:e.jsx("img",{className:"text-center",style:{height:"50px",filter:"hue-rotate(180deg) saturate(1.5) brightness(0.8)"},src:gf,alt:""})}),e.jsx("p",{children:"Hrify Digital delivers SaaS solutions tailored to meet customers' on-demand and dynamic needs."})]}),e.jsxs("div",{className:"col-12 col-lg-6 justify-content-center",children:[e.jsx("div",{className:"text-center",children:e.jsx("img",{className:"text-center",style:{height:"50px",filter:"hue-rotate(180deg) saturate(1.5) brightness(0.8)"},src:xf,alt:""})}),e.jsx("p",{children:"Hrify Digital designs and delivers high-end, Intel-based IT infrastructure with customizable configurations and top processors on demand."})]})]})]}),e.jsxs("div",{className:"container mobile-only",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:e.jsx("b",{children:"Networking Solutions"})}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-12 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/systemintegration",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:ff,alt:"",className:"me-2"}),e.jsx("b",{children:"System Integration &Maintenance"})]})})}),e.jsx("div",{className:"col-12 col-md-12 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/infrastructure",children:e.jsxs("span",{style:{backgroundColor:"black",border:"none"},className:"box",children:[e.jsx("img",{src:yf,alt:"",className:"me-2"}),e.jsx("b",{children:"Infrastructure Management"})]})})}),e.jsx("div",{className:"col-12 col-md-12 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/serverstorage",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:jf,alt:"",className:"me-2"}),e.jsx("b",{children:"Server & Storage"})]})})}),e.jsx("div",{className:"col-12 col-md-12 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/networksecurity",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:vf,alt:"",className:"me-2"}),e.jsx("b",{children:"Network security"})]})})}),e.jsx("div",{className:"col-12 col-md-12 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/structuredcabling",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:bf,alt:"",className:"me-2"}),e.jsx("b",{children:"Structured Cabling"})]})})}),e.jsx("div",{className:"col-12 col-md-12 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/cloudnative",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:wf,alt:"",className:"me-2"}),e.jsx("b",{children:"Cloud Native Solution"})]})})}),e.jsx("div",{className:"col-12 col-md-12 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/workplace",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Nf,alt:"",className:"me-2"}),e.jsx("b",{children:"Workpalce Surveillance"})]})})})]})]}),e.jsx("style",{children:`
          .container.mobile-only {
            display: block;
          }
        `})]}),Sf=d("assets/images/ServerStorage.png"),Bf=d("assets/images/server-image-2.webp"),Df=d("assets/images/vast-1.webp"),Cf=d("assets/images/vast-2.webp"),zf=d("assets/images/vast-3.webp"),Wf=d("assets/images/vast4.webp"),Mf=d("assets/images/vast-5.webp"),Ef=d("assets/images/vast-6.webp"),If=d("assets/images/sys-log-1.webp"),Af=d("assets/images/sys-logo-2.webp"),Tf=d("assets/images/sys-logo-3.webp"),Ff=d("assets/images/sys-logo-4.webp"),Lf=d("assets/images/sys-logo-5.webp"),Rf=d("assets/images/sys-logo-6.webp"),Hf=d("assets/images/sys-logo-7.webp");d("assets/images/Rectangle-27.webp");const Pf=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Sf,alt:"Server & Storage Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center my-5",children:[e.jsxs("div",{className:"col-12 col-lg-7",style:{textAlign:"justify"},children:[e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},children:"The volume of data generated by expanding businesses increases exponentially. Effectively managing this data becomes a complex and difficult undertaking when choosing the appropriate resources, storage, and backup options. We at Hrify Digital are available to help you set up a reliable server and storage system. With a cost-effective strategy, we help you get the most out of your IT expenditures by guaranteeing optimal data use, immediate accessibility, and improved security, all of which eventually improve business performance."}),e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},children:"At Hrify Digital, we provide the latest and most suitable servers and storage devices to help you tackle your challenges effectively. We stay ahead of the curve by regularly upgrading to the latest industry trends. In today's rapidly growing business environment, scalability and operational efficiency are crucial. That's why we custom-build server solutions tailored to your specific needs in terms of performance, scalability, and data capacity. Share your data processing requirements with us, so you can focus on your core business while we handle all your storage needs."}),e.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},children:[e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Latest Servers and Storage Devices"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Custom-Built Solutions"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Regular Upgrades"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Scalability and Operational Efficiency"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Focus on Core Business"})]})]})]}),e.jsx("div",{className:"col-12 col-lg-5 text-center",children:e.jsx("img",{className:"img-fluid",src:Bf,alt:""})})]})}),e.jsxs("div",{className:"container-fluid",children:[e.jsx("h2",{className:"text-center fw-bolder",style:{color:"#1B8DBB"},children:"Vast Selection of Storage Options"}),e.jsxs("div",{style:{gap:"50px"},className:"row container justify-content-center w-100 h-100 d-flex ms-0 ms-lg-5 mt-5",children:[e.jsxs("div",{style:{boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"},className:"col-12 col-lg-3 p-4 text-center rounded justify-content-center align-items-center",children:[e.jsx("img",{className:"img-fluid",src:Df,alt:""}),e.jsx("h3",{style:{color:"#1B8DBB"},className:"fw-bolder",children:"Monitoring Platform"}),e.jsx("p",{className:"text-start",children:'This server is utilized for applications that require several "virtual" servers in order to save costs and for intensive video analytics. With Windows Server 2012R2, these U series servers include dual octa-core processors and 32GB of RAM.'})]}),e.jsxs("div",{style:{boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"},className:"col-12 col-lg-3 p-4 text-center rounded align-items-center",children:[e.jsx("img",{className:"img-fluid",src:Cf,alt:""}),e.jsx("h3",{style:{color:"#1B8DBB"},className:"fw-bolder mt-4",children:"Broadcast Server"}),e.jsx("p",{className:"text-start",children:"specialized broadcast servers to provide flawless live news performance. These servers are utilized for continuous, high-traffic operation."})]}),e.jsxs("div",{style:{boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"},className:"col-12 col-lg-3 p-4 text-center rounded align-items-center",children:[e.jsx("img",{style:{height:"80px"},className:"img-fluid",src:zf,alt:""}),e.jsx("h3",{style:{color:"#1B8DBB"},className:"fw-bolder mt-3",children:"NAS"}),e.jsx("p",{className:"text-start",children:"Data can be retrieved from a centralized, authorized network using NAS storage. NAS is the ideal option if you require a highly scalable and flexible central storage solution."})]})]}),e.jsxs("div",{style:{gap:"50px"},className:"row container justify-content-center w-100 h-100 d-flex ms-0 ms-lg-5 mt-5 mb-5",children:[e.jsxs("div",{style:{boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"},className:"col-12 col-lg-3 p-4 text-center rounded align-items-center",children:[e.jsx("img",{className:"img-fluid",src:Wf,alt:""}),e.jsx("h3",{style:{color:"#1B8DBB"},className:"fw-bolder",children:"Rackmount"}),e.jsx("p",{className:"text-start",children:"At Hrify Digital, we provide rack-mounted servers that optimize space, offer easy scalability, improve airflow with advanced cooling, and simplify maintenance—making them perfect for efficient data center operations."})]}),e.jsxs("div",{style:{boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"},className:"col-12 col-lg-3 p-4 text-center rounded align-items-center",children:[e.jsx("img",{className:"img-fluid",src:Mf,alt:""}),e.jsx("h3",{style:{color:"#1B8DBB"},className:"fw-bolder",children:"Enterprise Servers"}),e.jsx("p",{className:"text-start",children:"Hrify Digital meets enterprise data storage requirements with a range of solutions, including Linux, Apache, VMWare, Windows, and more, tailored to your data center needs."})]}),e.jsxs("div",{style:{boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"},className:"col-12 col-lg-3 p-4 text-center rounded align-items-center",children:[e.jsx("img",{className:"img-fluid",src:Ef,alt:""}),e.jsx("h3",{style:{color:"#1B8DBB"},className:"fw-bolder mt-4",children:"PowerEdge R730"}),e.jsx("p",{className:"text-start",children:"Data can be retrieved from a centralized, authorized network using NAS storage. NAS is the ideal option if you require a highly scalable and flexible central storage solution."})]})]})]}),e.jsxs("div",{className:"container",children:[e.jsxs("h1",{style:{color:"#686D76",textAlign:"center"},children:[e.jsx("b",{children:"Networking Solutions"})," "]}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/systemintegration",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:If,alt:"",className:"me-2"}),e.jsx("b",{children:"System Integration &Maintenance"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/infrastructure",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Af,alt:"",className:"me-2"}),e.jsx("b",{children:"Infrastructure Management"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/serverstorage",children:e.jsxs("span",{style:{backgroundColor:"black",border:"none"},className:"box",children:[e.jsx("img",{src:Tf,alt:"",className:"me-2"}),e.jsx("b",{children:"Server & Storage"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/networksecurity",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Ff,alt:"",className:"me-2"}),e.jsx("b",{children:"Network security"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/structuredcabling",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Lf,alt:"",className:"me-2"}),e.jsx("b",{children:"Structured Cabling"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/cloudnative",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Rf,alt:"",className:"me-2"}),e.jsx("b",{children:"Cloud Native Solution"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/workplace",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Hf,alt:"",className:"me-2"}),e.jsx("b",{children:"Workpalce Surveillance"})]})})})]})]}),e.jsx("style",{children:`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
          .box {
            display: inline-block;
            padding: 10px 20px;
            background-color: #f0ebe3;
            border: 2px solid #1B8DBB;
            border-radius: 8px;
            text-align: center;
            transition: background-color 0.3s ease;
          }
          .box:hover {
            background-color: #1B8DBB;
            color: white;
          }
        `})]}),Of=d("assets/images/NetworkSecurity.png"),_f=d("assets/images/network-image-2.webp"),Uf=d("assets/images/network-logo-1.webp"),$f=d("assets/images/network-logo-2.webp"),Vf=d("assets/images/network-logo-3.webp"),qf=d("assets/images/network-logo-4.webp"),Yf=d("assets/images/network-logo-5.webp"),Gf=d("assets/images/network-logo-6.webp"),Qf=d("assets/images/sys-log-1.webp"),Kf=d("assets/images/sys-logo-2.webp"),Xf=d("assets/images/sys-logo-3.webp"),Zf=d("assets/images/sys-logo-4.webp"),Jf=d("assets/images/sys-logo-5.webp"),e0=d("assets/images/sys-logo-6.webp"),t0=d("assets/images/sys-logo-7.webp");d("assets/images/Rectangle-27.webp");const s0=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Of,alt:"Network Security Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center my-5",children:[e.jsxs("div",{className:"col-12 col-lg-7",children:[e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",textAlign:"justify"},children:"At Hrify Digital, we understand that securing a network is essential for enhancing performance and ensuring continuous access to information by safeguarding business assets from potential threats. As businesses rapidly transition to the digital world, they face new risks, vulnerabilities, and attacks. By strengthening your cyber resilience, we help keep your business running smoothly and securely. Protecting your software systems is critical, and securing your IT infrastructure with the right firewall is equally important. Computer networks are increasingly vulnerable to ransomware, Denial-of-Service (DoS) attacks, and destructive viruses that can compromise valuable data across your network. Let us help you fortify your defenses and protect your business."}),e.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},children:[e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Maintain network security"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Cyber Resilience"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Critical IT Infrastructure Protection"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Threat Mitigation"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Safeguarding Valuable Data"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Avoids unauthorized entry"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Effectively stop data leakages"})]})]})]}),e.jsx("div",{className:"col-12 col-lg-5",children:e.jsx("img",{className:"img-fluid",src:_f,alt:""})})]})}),e.jsxs("div",{className:"container",children:[e.jsx("h1",{style:{color:"#1B8DBB"},className:"text-center fw-bolder d-none d-lg-block",children:"Solutions for Network Security in Tamilnadu | Guarantee Network Security | Chennai Display Solution Service"}),e.jsx("h5",{style:{color:"#1B8DBB"},className:"text-center fw-bolder d-lg-none",children:"Solutions for Network Security in Tamilnadu | Guarantee Network Security | Chennai Display Solution Service"}),e.jsxs("div",{className:"row mt-4",children:[e.jsxs("div",{className:"col-12 col-lg-4 align-items-center text-center",children:[e.jsx("img",{style:{height:"50px",display:"block",margin:"0 auto",filter:"hue-rotate(180deg) saturate(2) brightness(0.8)"},src:Uf,alt:""}),e.jsx("p",{className:"mt-3 fw-bolder",children:" Network Defense As a Service ( NDaas )"})]}),e.jsxs("div",{className:"col-12 col-lg-4 align-items-center text-center",children:[e.jsx("img",{style:{height:"50px",display:"block",margin:"0 auto",filter:"hue-rotate(180deg) saturate(2) brightness(0.8)"},src:$f,alt:""}),e.jsx("p",{className:"mt-3 fw-bolder",children:"Backup Solutions"})]}),e.jsxs("div",{className:"col-12 col-lg-4 align-items-center text-center",children:[e.jsx("img",{style:{height:"50px",display:"block",margin:"0 auto",filter:"hue-rotate(180deg) saturate(2) brightness(0.8)"},src:Vf,alt:""}),e.jsx("p",{className:"mt-3 fw-bolder",children:"Server Security"})]})]}),e.jsxs("div",{className:"row mt-4",children:[e.jsxs("div",{className:"col-12 col-lg-4 align-items-center text-center",children:[e.jsx("img",{style:{height:"50px",display:"block",margin:"0 auto",filter:"hue-rotate(180deg) saturate(2) brightness(0.8)"},src:qf,alt:""}),e.jsx("p",{className:"mt-3 fw-bolder",children:"Endpoint Security"})]}),e.jsxs("div",{className:"col-12 col-lg-4 align-items-center text-center",children:[e.jsx("img",{style:{height:"50px",display:"block",margin:"0 auto",filter:"hue-rotate(180deg) saturate(2) brightness(0.8)"},src:Yf,alt:""}),e.jsx("p",{className:"mt-3 fw-bolder",children:"Secure Remote Enabling"})]}),e.jsxs("div",{className:"col-12 col-lg-4 align-items-center text-center",children:[e.jsx("img",{style:{height:"50px",display:"block",margin:"0 auto",filter:"hue-rotate(180deg) saturate(2) brightness(0.8)"},src:Gf,alt:""}),e.jsx("p",{className:"mt-3 fw-bolder",children:"Gateway Audits"})]})]})]}),e.jsxs("div",{className:"container",children:[e.jsxs("h1",{style:{color:"#686D76",textAlign:"center"},children:[e.jsx("b",{children:"Networking Solutions"})," "]}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/systemintegration",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Qf,alt:"",className:"me-2"}),e.jsx("b",{children:"System Integration &Maintenance"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/infrastructure",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Kf,alt:"",className:"me-2"}),e.jsx("b",{children:"Infrastructure Management"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/serverstorage",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Xf,alt:"",className:"me-2"}),e.jsx("b",{children:"Server & Storage"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/networksecurity",children:e.jsxs("span",{style:{backgroundColor:"black",border:"none"},className:"box",children:[e.jsx("img",{src:Zf,alt:"",className:"me-2"}),e.jsx("b",{children:"Network security"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/structuredcabling",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Jf,alt:"",className:"me-2"}),e.jsx("b",{children:"Structured Cabling"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/cloudnative",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:e0,alt:"",className:"me-2"}),e.jsx("b",{children:"Cloud Native Solution"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/workplace",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:t0,alt:"",className:"me-2"}),e.jsx("b",{children:"Workpalce Surveillance"})]})})})]})]}),e.jsx("style",{children:`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
          .box {
            display: inline-block;
            padding: 10px 20px;
            background-color: #f0ebe3;
            border: 2px solid #1B8DBB;
            border-radius: 8px;
            text-align: center;
            transition: background-color 0.3s ease;
          }
          .box:hover {
            background-color: #1B8DBB;
            color: white;
          }
        `})]});d("assets/images/Rectangle-27.webp");const n0=d("assets/images/StructuredCabling.png"),i0=d("assets/images/strucutred-image-2.webp"),r0=d("assets/images/bring-logo-1.webp"),a0=d("assets/images/bring-logo-2.webp"),l0=d("assets/images/bring-logo-3.webp"),o0=d("assets/images/bring-logo-4.webp"),c0=d("assets/images/bring-logo-5.webp"),d0=d("assets/images/sys-log-1.webp"),m0=d("assets/images/sys-logo-2.webp"),u0=d("assets/images/sys-logo-3.webp"),h0=d("assets/images/sys-logo-4.webp"),p0=d("assets/images/sys-logo-5.webp"),g0=d("assets/images/sys-logo-6.webp"),x0=d("assets/images/sys-logo-7.webp"),f0=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:n0,alt:"Structured Cabling Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center my-5",children:[e.jsxs("div",{className:"col-12 col-lg-8",children:[e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",textAlign:"justify"},children:"At Hrify Digital, we recognize that digitization drives the demand for seamless online collaboration with partners, customers, and employees. As markets become increasingly dynamic, the need for reliable and continuous network services and infrastructure grows. Unlike outdated point-to-point cabling, the demand for efficient cable networking is on the rise. Our structured cabling systems provide a streamlined, clutter-free solution, eliminating the complexities of traditional wiring and enhancing your commercial network's efficiency and performance."}),e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",textAlign:"justify"},children:"Hrify Digital offers fast, reliable, and scalable wired and wireless connectivity solutions. Our comprehensive networking package includes advanced Layer 2/3 VLANs, paired with top-tier switching and routing technologies, to ensure seamless connectivity. Stay ahead in the digital transformation journey with our robust and efficient networking solutions designed to meet the evolving needs of your business."}),e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",textAlign:"justify"},children:"Be it high-performance cabling or the new optical fiber network adopt to structured cabling systems with cables and associated hardware for all kinds of needs within a specific building or across buildings or within a huge campus"})]}),e.jsx("div",{className:"col-12 col-lg-4",children:e.jsx("img",{className:"img-fluid",src:i0,alt:""})})]})}),e.jsxs("div",{className:"container",children:[e.jsx("h2",{style:{color:"#1B8DBB"},className:"text-center fw-bolder",children:"What We Bring"}),e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",textAlign:"justify"},children:"Hrify Digital specializes in building robust infrastructure using copper and fiber, offering end-to-end networking solutions for secure and well-managed systems—from data center networks to end-user needs. Our core focus areas include high-intensity network consultation, structured cabling, and setting up wireless and fiber-optic-based networks to ensure seamless connectivity and performance."})]}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"row justify-content-center",children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
              .hov-container {
                position: relative;
                overflow: hidden;
              }

              .hov {
                position: relative;
                display: inline-block;
                width: 100%;
              }

              .hov img {
                border-radius: 50%;
                transition: opacity 0.3s ease, filter 0.3s ease;
              }

              .hov:hover img {
                filter: brightness(50%);
              }

              .description {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: white;
                text-align: center;
                width: 100%;
                opacity: 0;
                transition: opacity 0.3s ease;
                padding: 0 10px;
              }

              .hov:hover .description {
                opacity: 1;
              }

              .mobile-font {
                font-size: inherit;
              }

              @media (max-width: 767px) {
                .mobile-font {
                  font-size: 13px;
                }
                .mob-font {
                  font-size: 13px;
                }
              }
            `}}),e.jsx("div",{className:"col-12 col-lg-4 hov-container",children:e.jsxs("div",{className:"hov",children:[e.jsx("img",{className:"img-fluid",src:r0,alt:""}),e.jsxs("div",{className:"description p-5",children:[e.jsx("p",{style:{backgroundColor:"#1B8DBB",border:"1px solid #1B8DBB",borderRadius:"20px"},className:"fw-bolder py-3 mobile-font",children:"Structured Cabling Solutions"}),e.jsx("p",{className:"fw-bold mob-font",children:"Modern, organized cabling systems that replace outdated point-to-point models, providing a cleaner and more efficient infrastructure."})]})]})}),e.jsx("div",{className:"col-12 col-lg-4 hov-container my-3 my-lg-0",children:e.jsxs("div",{className:"hov",children:[e.jsx("img",{className:"img-fluid",src:a0,alt:""}),e.jsxs("div",{className:"description p-5",children:[e.jsx("p",{style:{backgroundColor:"#1B8DBB",border:"1px solid #1B8DBB",borderRadius:"20px"},className:"fw-bolder py-3 mobile-font",children:"Reliable and Scalable Networking Services"}),e.jsx("p",{className:"fw-bold mob-font",children:"Ensuring continuous and dependable network performance to support dynamic business needs and seamless online collaboration."})]})]})}),e.jsx("div",{className:"col-12 col-lg-4 hov-container my-3 my-lg-0",children:e.jsxs("div",{className:"hov",children:[e.jsx("img",{className:"img-fluid",src:l0,alt:""}),e.jsxs("div",{className:"description p-5",children:[e.jsx("p",{style:{backgroundColor:"#1B8DBB",border:"1px solid #1B8DBB",borderRadius:"20px"},className:"fw-bolder py-3 mobile-font",children:"End-to-End Network Infrastructure"}),e.jsx("p",{className:"fw-bold mob-font",children:"From data centers to end-user requirements, we deliver comprehensive networking solutions tailored to enhance connectivity and efficiency."})]})]})})]}),e.jsxs("div",{className:"row justify-content-center mt-5 my-3 my-lg-0",children:[e.jsx("div",{className:"col-12 col-lg-4 hov-container",children:e.jsxs("div",{className:"hov",children:[e.jsx("img",{className:"img-fluid",src:o0,alt:""}),e.jsxs("div",{className:"description p-5",children:[e.jsx("p",{style:{backgroundColor:"#1B8DBB",border:"1px solid #1B8DBB",borderRadius:"20px"},className:"fw-bolder py-3 mobile-font",children:"Customized IT Solutions"}),e.jsx("p",{className:"fw-bold mob-font",children:"We adapt our services to meet the specific needs of your business, ensuring optimal performance and scalability as you grow."})]})]})}),e.jsx("div",{className:"col-12 col-lg-4 hov-container my-3 my-lg-0",children:e.jsxs("div",{className:"hov",children:[e.jsx("img",{className:"img-fluid",src:c0,alt:""}),e.jsxs("div",{className:"description p-5",children:[e.jsx("p",{style:{backgroundColor:"#1B8DBB",border:"1px solid #1B8DBB",borderRadius:"20px"},className:"fw-bolder py-3 mobile-font",children:"Network Performance Optimization"}),e.jsx("p",{className:"fw-bold mob-font",children:"Continuous monitoring and optimization services to ensure your network performs at its best, supporting your business operations without interruptions."})]})]})})]})]}),e.jsxs("div",{className:"container",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:e.jsx("b",{children:"Networking Solutions"})}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/systemintegration",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:d0,alt:"",className:"me-2"}),e.jsx("b",{children:"System Integration &Maintenance"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/infrastructure",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:m0,alt:"",className:"me-2"}),e.jsx("b",{children:"Infrastructure Management"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/serverstorage",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:u0,alt:"",className:"me-2"}),e.jsx("b",{children:"Server & Storage"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/networksecurity",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:h0,alt:"",className:"me-2"}),e.jsx("b",{children:"Network security"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/structuredcabling",children:e.jsxs("span",{style:{backgroundColor:"black",border:"none"},className:"box",children:[e.jsx("img",{src:p0,alt:"",className:"me-2"}),e.jsx("b",{children:"Structured Cabling"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/cloudnative",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:g0,alt:"",className:"me-2"}),e.jsx("b",{children:"Cloud Native Solution"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/workplace",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:x0,alt:"",className:"me-2"}),e.jsx("b",{children:"Workpalce Surveillance"})]})})})]})]}),e.jsx("style",{children:`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
          .box {
            display: inline-block;
            padding: 10px 20px;
            background-color: #f0ebe3;
            border: 2px solid #1B8DBB;
            border-radius: 8px;
            text-align: center;
            transition: background-color 0.3s ease;
          }
          .box:hover {
            background-color: #1B8DBB;
            color: white;
          }
        `})]}),y0=d("/assets/images/CloudNativeSolutions.png"),j0=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:y0,alt:"Cloud Native Solutions Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container",style:{textAlign:"justify"},children:e.jsxs("div",{className:"row align-items-center my-5",children:[e.jsxs("div",{className:"col-12 col-lg-8",children:[e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},children:"Stay ahead in today's fast-changing business environment and climb the ladder of success by embracing innovative business models. By adopting a wide range of cloud services, you can enhance cost-efficiency, boost productivity, and improve operational effectiveness. This approach not only reduces operational costs but also optimizes your business processes, setting you on a path of accelerated growth and success."}),e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},children:"We have collaborated with Crayon to provide Infrastructure-as-a-Service (IaaS), allowing organizations to employ cloud-native tools that streamline software application management and operation via cloud computing. The pay-per-usage model, which is now popular, allows businesses to pay only for the services that they use. Our cloud solutions are designed to be adaptable, allowing businesses to optimize expenses while leveraging cloud capabilities."}),e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},children:"Be it high-performance cabling or the new optical fiber network adopt to structured cabling systems with cables and associated hardware for all kinds of needs within a specific building or across buildings or within a huge campus"})]}),e.jsx("div",{className:"col-12 col-lg-4",children:e.jsx("img",{className:"img-fluid",src:"/assets/images/cloud native image 1.webp",alt:""})})]})}),e.jsx("div",{style:{backgroundColor:"#F1F1F1",textAlign:"justify"},className:"container-fluid p-2 p-lg-5 py-5",children:e.jsxs("div",{className:"container",children:[e.jsx("h3",{style:{color:"#1B8DBB"},className:" fw-bolder text-center",children:"Secure Cloud Solution"}),e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},children:"At Hrify Digital, in partnership with Crayon, we offer Infrastructure-as-a-Service (IaaS) and design private cloud solutions tailored for individual organizations. We provide training and knowledge transfer to empower clients to manage their private clouds independently."}),e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},children:"Experience the benefits of an 'Intelligent Cloud' with our flexible pay-as-you-go model and a broad range of cloud services to meet your project or managed service needs. We help build smart multi-cloud strategies to optimize business costs and operations, ensuring a secure and centralized cloud environment."}),e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},children:"Easily migrate your existing software to our intelligent cloud platform, and modernize your workplace with seamless, cost-effective transitions—guided every step of the way by Hrify Digital and Crayon."}),e.jsxs("div",{style:{gap:"5px",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},className:"d-flex",children:[e.jsx("span",{style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"○"}),e.jsx("p",{style:{color:"#686D76"},children:"Infra iQ – A centralized platform to monitor, analyze, and manage all your infrastructure environments efficiently."})]}),e.jsxs("div",{style:{gap:"5px",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},className:"d-flex",children:[e.jsx("span",{style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"○"}),e.jsx("p",{style:{color:"#686D76"},children:"Cloud iQ – A one-stop comprehensive self-service portal enabling you to manage Amazon Web Services and Microsoft Cloud Suite of Technology products."})]}),e.jsxs("div",{style:{gap:"5px",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},className:"d-flex",children:[e.jsx("span",{style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"○"}),e.jsx("p",{style:{color:"#686D76"},children:"Cloud Easy – A huge cloud portfolio to manage project-specific or managed cloud services."})]})]})}),e.jsxs("div",{className:"container",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:e.jsx("b",{children:"Networking Solutions"})}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/systemintegration",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:"/assets/images/sys log 1.webp",alt:"",className:"me-2"}),e.jsx("b",{children:"System Integration &Maintenance"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/infrastructure",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:"/assets/images/sys logo 2.webp",alt:"",className:"me-2"}),e.jsx("b",{children:"Infrastructure Management"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/serverstorage",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:"/assets/images/sys logo 3.webp",alt:"",className:"me-2"}),e.jsx("b",{children:"Server & Storage"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/networksecurity",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:"/assets/images/sys logo 4.webp",alt:"",className:"me-2"}),e.jsx("b",{children:"Network security"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/structuredcabling",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:"/assets/images/sys logo 5.webp",alt:"",className:"me-2"}),e.jsx("b",{children:"Structured Cabling"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/cloudnative",children:e.jsxs("span",{style:{backgroundColor:"black",border:"none"},className:"box",children:[e.jsx("img",{src:"/assets/images/sys logo 6.webp",alt:"",className:"me-2"}),e.jsx("b",{children:"Cloud Native Solution"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/workplace",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:"/assets/images/sys logo 7.webp",alt:"",className:"me-2"}),e.jsx("b",{children:"Workpalce Surveillance"})]})})})]})]}),e.jsx("style",{children:`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
          .box {
            display: inline-block;
            padding: 10px 20px;
            background-color: #f0ebe3;
            border: 2px solid #1B8DBB;
            border-radius: 8px;
            text-align: center;
            transition: background-color 0.3s ease;
          }
          .box:hover {
            background-color: #1B8DBB;
            color: white;
          }
        `})]});d("assets/images/Rectangle-27.webp");const v0=d("assets/images/WorkplaceSurveillance.png"),b0=d("assets/images/woekplace-image-2.webp"),Hn=d("assets/images/workplace-globe-1.webp"),w0=d("assets/images/sys-log-1.webp"),N0=d("assets/images/sys-logo-2.webp"),k0=d("assets/images/sys-logo-3.webp"),S0=d("assets/images/sys-logo-4.webp"),B0=d("assets/images/sys-logo-5.webp"),D0=d("assets/images/sys-logo-6.webp"),C0=d("assets/images/sys-logo-7.webp"),z0=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:v0,alt:"Workplace Surveillance Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container",style:{textAlign:"justify"},children:e.jsxs("div",{className:"row align-items-center my-5",children:[e.jsxs("div",{className:"col-12 col-lg-8",children:[e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},children:"At Hrify Digital, we understand the critical importance of workplace surveillance in enhancing security, monitoring activities, and ensuring safety. Our advanced surveillance solutions provide real-time oversight, helping businesses deter potential threats, manage access, and address compliance issues promptly. By integrating our cutting-edge technologies, companies can protect their operations, secure sensitive information, and maintain a safe, productive environment for employees and assets."}),e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},children:"We offer a range of customizable solutions, from high-definition CCTV cameras and biometric access control systems to integrated fire alarms and remote monitoring capabilities. These tools collectively ensure that your workplace is continuously monitored, compliant with safety regulations, and prepared to respond effectively to any incident."}),e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},children:"By partnering with Hrify Digital, you're investing in a secure, well-managed, and efficient workplace where safety and productivity go hand in hand. Our goal is to empower your business with the technology needed to stay ahead of security challenges, enabling you to focus on growth and success with peace of mind."}),e.jsxs("div",{style:{gap:"5px",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},className:"d-flex",children:[e.jsx("span",{style:{fontSize:"20px",backgroundColor:"#1B8DBB",color:"white",borderRadius:"50%",padding:"5px",display:"inline-block"},children:"○"}),e.jsx("p",{style:{color:"#686D76"},children:"Enhanced Security"})]}),e.jsxs("div",{style:{gap:"5px",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},className:"d-flex",children:[e.jsx("span",{style:{fontSize:"20px",backgroundColor:"#1B8DBB",color:"white",borderRadius:"50%",padding:"5px",display:"inline-block"},children:"○"}),e.jsx("p",{style:{color:"#686D76"},children:"Real-Time Monitoring"})]}),e.jsxs("div",{style:{gap:"5px",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},className:"d-flex",children:[e.jsx("span",{style:{fontSize:"20px",backgroundColor:"#1B8DBB",color:"white",borderRadius:"50%",padding:"5px",display:"inline-block"},children:"○"}),e.jsx("p",{style:{color:"#686D76"},children:"Improved Compliance and Safety"})]})]}),e.jsx("div",{className:"col-12 col-lg-4",children:e.jsx("img",{className:"img-fluid",src:b0,alt:""})})]})}),e.jsx("div",{style:{backgroundColor:"#F1F1F1"},className:"container-fluid p-2 p-lg-5 py-5",children:e.jsxs("div",{className:"container",children:[e.jsx("h3",{style:{background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},className:" fw-bolder text-center",children:"Comprehensive Surveillance Solutions"})," ",e.jsx("br",{}),e.jsxs("div",{style:{gap:"5px",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},className:"d-flex",children:[e.jsx("span",{style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"○"}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("span",{style:{fontWeight:"700",color:"black"},children:"CCTV Systems:"})," High-definition cameras with night vision, motion detection, and remote access features."]})]}),e.jsxs("div",{style:{gap:"5px",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},className:"d-flex",children:[e.jsx("span",{style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"○"}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("span",{style:{color:"black",fontWeight:"700"},children:"Access Control:"})," Secure entry systems including biometric scanners, keycards, and smart locks."]})]}),e.jsxs("div",{style:{gap:"5px",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},className:"d-flex",children:[e.jsx("span",{style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"○"}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("span",{style:{fontWeight:"700",color:"black"},children:"Biometric Surveillance:"})," Facial recognition, fingerprint scanning, and other biometric solutions for high security."]})]}),e.jsxs("div",{style:{gap:"5px",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},className:"d-flex",children:[e.jsx("span",{style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"○"}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("span",{style:{fontWeight:"700",color:"black"},children:"Fire Alarm and Safety Systems:"})," Integration of fire alarms and emergency response systems for comprehensive safety."]})]})]})})," ",e.jsx("br",{}),e.jsxs("div",{className:"container justify-content-center ",children:[e.jsx("div",{className:"row d-flex justify-content-center",children:e.jsx("div",{className:"col-12 col-lg-8 col-md-8 text-center d-flex justify-content-center  ",children:e.jsxs("h4",{style:{color:"#F1F1F1",border:"1px solid #1B8DBB",borderRadius:"100px",backgroundColor:"#1B8DBB"},className:"text-center ninety my-3 py-4 px-3",children:[e.jsx("b",{children:'"Why Choose Our Surveillance Solutions?"'})," "]})})})," ",e.jsx("br",{}),e.jsxs("div",{className:"row my-4",children:[e.jsxs("div",{className:"col-12 col-lg-3 image-container my-4 my-lg-0",children:[e.jsx("img",{className:"img-fluid",src:Hn,alt:"Workplace Globe"}),e.jsxs("div",{className:"description",children:[e.jsx("h3",{className:"fw-bolder",style:{color:"#1B8DBB"},children:"24/7 Monitoring"}),e.jsx("p",{style:{color:"black"},className:"fw-bolder",children:"Continuous surveillance to ensure round-the-clock security."})]})]}),e.jsxs("div",{className:"col-12 col-lg-3 image-container my-4 my-lg-0",children:[e.jsx("img",{className:"img-fluid",src:Hn,alt:"Workplace Globe"}),e.jsxs("div",{className:"description",children:[e.jsx("h3",{className:"fw-bolder",style:{color:"#1B8DBB"},children:"Scalable Solutions"}),e.jsx("p",{style:{color:"black"},className:"fw-bolder",children:"Tailored for businesses of all sizes, from small offices to large enterprises."})]})]}),e.jsxs("div",{className:"col-12 col-lg-3 image-container my-4 my-lg-0",children:[e.jsx("img",{className:"img-fluid",src:Hn,alt:"Workplace Globe"}),e.jsxs("div",{className:"description",children:[e.jsx("h3",{className:"fw-bolder",style:{color:"#1B8DBB"},children:"Easy Integration"}),e.jsx("p",{style:{color:"black"},className:"fw-bolder",children:"Compatible with existing IT infrastructure and scalable to future needs."})]})]}),e.jsxs("div",{className:"col-12 col-lg-3 image-container my-4 my-lg-0",children:[e.jsx("img",{src:Hn,alt:"Workplace Globe"}),e.jsxs("div",{className:"description",children:[e.jsx("h3",{className:"fw-bolder",style:{color:"#1B8DBB"},children:"Remote Access"}),e.jsx("p",{style:{color:"black"},className:"fw-bolder",children:"Monitor your workplace from anywhere via mobile or web applications."})]})]})," ",e.jsx("br",{}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
              .image-container {
                position: relative;
                display: inline-block;
              }

              .image-container img {
                display: block;
                width: 100%;
                height: auto;
              }

              .description {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: white;
                text-align: center;
                padding: 10px;
                border-radius: 5px;
                width: 80%;
              }
            `}}),e.jsx("div",{className:"col-12 col-lg-3"}),e.jsx("div",{className:"col-12 col-lg-3"}),e.jsx("div",{className:"col-12 col-lg-3"})]})]}),e.jsx("br",{}),e.jsxs("div",{className:"container",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:e.jsx("b",{children:"Networking Solutions"})})," ",e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/systemintegration",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:w0,alt:"",className:"me-2"}),e.jsx("b",{children:"System Integration &Maintenance"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/infrastructure",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:N0,alt:"",className:"me-2"}),e.jsx("b",{children:"Infrastructure Management"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/serverstorage",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:k0,alt:"",className:"me-2"}),e.jsx("b",{children:"Server & Storage"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/networksecurity",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:S0,alt:"",className:"me-2"}),e.jsx("b",{children:"Network security"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/structuredcabling",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:B0,alt:"",className:"me-2"}),e.jsx("b",{children:"Structured Cabling"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/cloudnative",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:D0,alt:"",className:"me-2"}),e.jsx("b",{children:"Cloud Native Solution"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(x,{style:{textDecoration:"none"},to:"/workplace",children:e.jsxs("span",{style:{backgroundColor:"black",border:"none"},className:"box",children:[e.jsx("img",{src:C0,alt:"",className:"me-2"}),e.jsx("b",{children:"Workpalce Surveillance"})]})})})]})]}),e.jsx("style",{children:`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
          .box {
            display: inline-block;
            padding: 10px 20px;
            background-color: #f0ebe3;
            border: 2px solid #1B8DBB;
            border-radius: 8px;
            text-align: center;
            transition: background-color 0.3s ease;
          }
          .box:hover {
            background-color: #1B8DBB;
            color: white;
          }
        `})]}),W0=d("assets/images/newBanner/cy9.webp");d("assets/images/Rectangle-27.webp");d("assets/images/about-image.webp");const M0=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:W0,alt:"CIAM Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("section",{className:"overview",style:{backgroundColor:"#f8fafc",padding:"60px 0",textAlign:"center"},children:e.jsxs("div",{className:"container",children:[e.jsx("p",{style:{maxWidth:"800px",margin:"0 auto 30px",fontSize:"1.1rem",color:"#475569",textAlign:"justify"},children:"Our CIAM integration services provide secure cloud infrastructure, seamless user experience, and compliance with data regulations. We offer comprehensive APIs and integration support to facilitate smooth integration with client systems. Our up-to-date data protection regulations, advanced identity verification, and consent management tools give you complete control over your data. Our dedicated maintenance support ensures that your data remains secure at all times."}),e.jsx("a",{href:"#",className:"btn btn-primary",style:{display:"inline-block",padding:"12px 24px",borderRadius:"6px",fontWeight:600,textAlign:"center",cursor:"pointer",transition:"all 0.3s ease",backgroundColor:"#1B8DBB",color:"white",border:"2px solid #1B8DBB",textDecoration:"none"},children:"Book a Meeting"})]})}),e.jsx("section",{className:"features",style:{padding:"80px 0"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",style:{textAlign:"center",fontSize:"2rem",marginBottom:"60px"},children:"Support Features"}),e.jsxs("div",{className:"features-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"30px"},children:[e.jsxs("div",{className:"feature-card",style:{border:"1px solid #e2e8f0",borderRadius:"10px",padding:"20px",transition:"all 0.3s ease",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.05)"},children:[e.jsx("div",{className:"feature-icon",style:{width:"50px",height:"50px",backgroundColor:"rgba(27, 141, 187, 0.1)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",style:{width:"24px",height:"24px",color:"#1B8DBB"},children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})})}),e.jsx("h3",{style:{fontSize:"1.3rem",marginBottom:"15px"},children:"Identity Verification"}),e.jsx("p",{style:{color:"#64748b"},children:"We provide various identity verification options such as two-factor authentication, biometric verification, or identity proofing services, collaborating with trusted providers for accurate results."})]}),e.jsxs("div",{className:"feature-card",style:{border:"1px solid #e2e8f0",borderRadius:"10px",padding:"20px",transition:"all 0.3s ease",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.05)"},children:[e.jsx("div",{className:"feature-icon",style:{width:"50px",height:"50px",backgroundColor:"rgba(27, 141, 187, 0.1)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",style:{width:"24px",height:"24px",color:"#1B8DBB"},children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})})}),e.jsx("h3",{style:{fontSize:"1.3rem",marginBottom:"15px"},children:"Data Security"}),e.jsx("p",{style:{color:"#64748b"},children:"We use encryption and access controls to protect customer data in their CIAM system and regularly conduct security audits to identify and address vulnerabilities."})]}),e.jsxs("div",{className:"feature-card",style:{border:"1px solid #e2e8f0",borderRadius:"10px",padding:"20px",transition:"all 0.3s ease",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.05)"},children:[e.jsx("div",{className:"feature-icon",style:{width:"50px",height:"50px",backgroundColor:"rgba(27, 141, 187, 0.1)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",style:{width:"24px",height:"24px",color:"#1B8DBB"},children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}),e.jsx("h3",{style:{fontSize:"1.3rem",marginBottom:"15px"},children:"User Experience"}),e.jsx("p",{style:{color:"#64748b"},children:"We offer a smooth registration and login experience. Our streamlined form has minimal required fields, and we provide social login options for easy account access."})]}),e.jsxs("div",{className:"feature-card",style:{border:"1px solid #e2e8f0",borderRadius:"10px",padding:"20px",transition:"all 0.3s ease",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.05)"},children:[e.jsx("div",{className:"feature-icon",style:{width:"50px",height:"50px",backgroundColor:"rgba(27, 141, 187, 0.1)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",style:{width:"24px",height:"24px",color:"#1B8DBB"},children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})})}),e.jsx("h3",{style:{fontSize:"1.3rem",marginBottom:"15px"},children:"Scalability"}),e.jsx("p",{style:{color:"#64748b"},children:"Our CIAM system is scalable and flexible, utilizing cloud-based infrastructure. We ensure efficient traffic handling with load balancing and caching and proactively scale resources for growth."})]}),e.jsxs("div",{className:"feature-card",style:{border:"1px solid #e2e8f0",borderRadius:"10px",padding:"20px",transition:"all 0.3s ease",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.05)"},children:[e.jsx("div",{className:"feature-icon",style:{width:"50px",height:"50px",backgroundColor:"rgba(27, 141, 187, 0.1)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",style:{width:"24px",height:"24px",color:"#1B8DBB"},children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),e.jsx("h3",{style:{fontSize:"1.3rem",marginBottom:"15px"},children:"User Consent & Privacy"}),e.jsx("p",{style:{color:"#64748b"},children:"We help clients manage their data-sharing preferences and privacy settings. We provide clear privacy policies that align with regulations and offer guidance for implementing best practices."})]}),e.jsxs("div",{className:"feature-card",style:{border:"1px solid #e2e8f0",borderRadius:"10px",padding:"20px",transition:"all 0.3s ease",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.05)"},children:[e.jsx("div",{className:"feature-icon",style:{width:"50px",height:"50px",backgroundColor:"rgba(27, 141, 187, 0.1)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",style:{width:"24px",height:"24px",color:"#1B8DBB"},children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})}),e.jsx("h3",{style:{fontSize:"1.3rem",marginBottom:"15px"},children:"Maintenance & Updates"}),e.jsx("p",{style:{color:"#64748b"},children:"We have a team dedicated to maintaining our CIAM system. We regularly patch security, update software, and scan for vulnerabilities. Our monitoring and alert systems detect issues and provide timely support."})]})]})]})}),e.jsx("section",{className:"cta",style:{backgroundColor:"#1B8DBB",color:"white",padding:"80px 0",textAlign:"center"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{style:{fontSize:"2rem",marginBottom:"20px"},children:"Leading with Integrity"}),e.jsx("p",{style:{maxWidth:"800px",margin:"0 auto 30px",fontSize:"1.1rem"},children:"Ready to secure your customer identity and access management with our cloud solutions? Contact us today to learn how we can help protect your data while providing a seamless user experience."}),e.jsxs("div",{className:"button-group",style:{display:"flex",gap:"15px",justifyContent:"center",flexWrap:"wrap"},children:[e.jsx("a",{href:"#",className:"btn btn-secondary",style:{display:"inline-block",padding:"12px 24px",borderRadius:"6px",fontWeight:600,textAlign:"center",cursor:"pointer",transition:"all 0.3s ease",backgroundColor:"white",color:"#1B8DBB",border:"2px solid white",textDecoration:"none"},children:"Book a Meeting"}),e.jsx("a",{href:"#",className:"btn btn-outline",style:{display:"inline-block",padding:"12px 24px",borderRadius:"6px",fontWeight:600,textAlign:"center",cursor:"pointer",transition:"all 0.3s ease",backgroundColor:"transparent",color:"white",border:"2px solid white",textDecoration:"none"},children:"View Case Studies"})]})]})})]}),E0=d("assets/images/newBanner/cy16.webp");d("assets/images/Rectangle-27.webp");const I0=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:E0,alt:"Workforce Identity Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("section",{style:{background:"linear-gradient(to bottom, hsl(210, 40%, 96.1%, 0.5), hsl(210, 40%, 96.1%))",padding:"3rem 0 6rem 0"},children:e.jsx("div",{className:"container px-4 md:px-6 mx-auto",children:e.jsxs("div",{className:"flex flex-col items-center gap-4 text-center",children:[e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsx("h1",{style:{fontSize:"3rem",fontWeight:800,lineHeight:1.2,color:"#1B8DBB"},className:"tracking-tighter sm:text-4xl md:text-5xl",children:"Workforce Identity Service to Ensure Secured Access Against Threats"}),e.jsx("p",{style:{margin:"0 auto 1.5rem",maxWidth:"700px",color:"#64748b"},className:"text-xl",children:"Meticulously manage all your user identities' lifecycle, ensuring everyone has every necessary access to resources."})]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"1rem"},children:[e.jsxs("button",{className:"btn btn-primary",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:"0.75rem 2rem",borderRadius:"0.375rem",fontWeight:600,fontSize:"0.875rem",cursor:"pointer",transition:"all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",backgroundColor:"#1B8DBB",color:"white",border:"2px solid #1B8DBB"},children:["Talk to Our Experts",e.jsx("svg",{style:{marginLeft:"0.5rem",width:"1rem",height:"1rem"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5l7 7-7 7"})})]}),e.jsx("button",{className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:"0.75rem 2rem",borderRadius:"0.375rem",fontWeight:600,fontSize:"0.875rem",cursor:"pointer",transition:"all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",backgroundColor:"white",color:"#1B8DBB",border:"2px solid #64748b"},children:"Learn More"})]})]})})}),e.jsx("section",{style:{padding:"3rem 0 4rem 0"},children:e.jsxs("div",{className:"container px-4 md:px-6 mx-auto",children:[e.jsx("div",{className:"flex flex-col items-center justify-center gap-4 text-center",children:e.jsxs("div",{style:{marginBottom:"3rem"},children:[e.jsx("h2",{style:{fontSize:"3rem",fontWeight:800,lineHeight:1.2,color:"#1B8DBB"},className:"tracking-tighter sm:text-4xl md:text-5xl",children:"Cybersecurity Services"}),e.jsx("p",{style:{margin:"0 auto",maxWidth:"700px",color:"#64748b"},className:"text-xl",children:"Implement adaptive authentication, centralized privilege access management, and seamless integration with Hrify Digital Workforce Identity solutions."})]})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"1.5rem"},children:[e.jsxs("div",{className:"feature-card",style:{borderRadius:"0.5rem",border:"1px solid #e2e8f0",backgroundColor:"white",color:"black",transition:"all 0.3s ease",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)",cursor:"pointer"},onMouseEnter:t=>{t.currentTarget.style.transform="translateY(-5px)",t.currentTarget.style.boxShadow="0 8px 20px rgba(0, 0, 0, 0.15)";const s=t.currentTarget.querySelector("svg");s&&(s.style.transform="scale(1.1)",s.style.color="#15749A",s.style.filter="drop-shadow(0 4px 8px rgba(27, 141, 187, 0.3))")},onMouseLeave:t=>{t.currentTarget.style.transform="translateY(0)",t.currentTarget.style.boxShadow="0 1px 3px rgba(0, 0, 0, 0.1)";const s=t.currentTarget.querySelector("svg");s&&(s.style.transform="scale(1)",s.style.color="#1B8DBB",s.style.filter="none")},children:[e.jsx("div",{style:{padding:"1.5rem 1.5rem 0.5rem"},children:e.jsxs("h3",{style:{fontSize:"1.5rem",fontWeight:600,display:"flex",alignItems:"center",gap:"0.5rem",color:"#1B8DBB"},children:[e.jsx("svg",{style:{width:"1.25rem",height:"1.25rem",color:"#1B8DBB"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),"Authentication"]})}),e.jsx("div",{style:{padding:"0 1.5rem 1.5rem"},children:e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Secure your organization with adaptive and multi-factor authentication mechanisms for robust remote access security."})})]}),e.jsxs("div",{className:"feature-card",style:{borderRadius:"0.5rem",border:"1px solid #e2e8f0",backgroundColor:"white",color:"black",transition:"all 0.3s ease",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)",cursor:"pointer"},onMouseEnter:t=>{t.currentTarget.style.transform="translateY(-5px)",t.currentTarget.style.boxShadow="0 8px 20px rgba(0, 0, 0, 0.15)";const s=t.currentTarget.querySelector("svg");s&&(s.style.transform="scale(1.1)",s.style.color="#15749A",s.style.filter="drop-shadow(0 4px 8px rgba(27, 141, 187, 0.3))")},onMouseLeave:t=>{t.currentTarget.style.transform="translateY(0)",t.currentTarget.style.boxShadow="0 1px 3px rgba(0, 0, 0, 0.1)";const s=t.currentTarget.querySelector("svg");s&&(s.style.transform="scale(1)",s.style.color="#1B8DBB",s.style.filter="none")},children:[e.jsx("div",{style:{padding:"1.5rem 1.5rem 0.5rem"},children:e.jsxs("h3",{style:{fontSize:"1.5rem",fontWeight:600,display:"flex",alignItems:"center",gap:"0.5rem",color:"#1B8DBB"},children:[e.jsx("svg",{style:{width:"1.25rem",height:"1.25rem",color:"#1B8DBB"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),"Authorization"]})}),e.jsx("div",{style:{padding:"0 1.5rem 1.5rem"},children:e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Implement granular control over who can access what resources, ensuring the right people have the right access."})})]}),e.jsxs("div",{className:"feature-card",style:{borderRadius:"0.5rem",border:"1px solid #e2e8f0",backgroundColor:"white",color:"black",transition:"all 0.3s ease",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[e.jsx("div",{style:{padding:"1.5rem 1.5rem 0.5rem"},children:e.jsxs("h3",{style:{fontSize:"1.5rem",fontWeight:600,display:"flex",alignItems:"center",gap:"0.5rem",color:"#1B8DBB"},children:[e.jsx("svg",{style:{width:"1.25rem",height:"1.25rem",color:"#1B8DBB"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),"Access Control"]})}),e.jsx("div",{style:{padding:"0 1.5rem 1.5rem"},children:e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Centralized privilege access management providing visibility and control over sensitive resources."})})]})]})]})}),e.jsx("section",{style:{backgroundColor:"#f8fafc",padding:"3rem 0 4rem 0"},children:e.jsxs("div",{className:"container px-4 md:px-6 mx-auto",children:[e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12 text-center mb-5",children:e.jsx("h2",{style:{fontSize:"3rem",fontWeight:800,lineHeight:1.2,color:"#1B8DBB"},className:"tracking-tighter sm:text-4xl",children:"About Hrify Digital"})})}),e.jsxs("div",{className:"row align-items-start",children:[e.jsx("div",{className:"col-12 col-lg-6 mb-4 mb-lg-0",children:e.jsxs("div",{style:{gap:"1rem",display:"flex",flexDirection:"column"},children:[e.jsx("p",{style:{color:"#64748b",textAlign:"justify",marginBottom:"1rem"},children:"Hrify Digital, pioneering the way in workforce identity solutions, is revolutionizing the post-pandemic world by addressing the critical aspects of remote work security and identity management."}),e.jsx("p",{style:{color:"#64748b",textAlign:"justify",marginBottom:"1rem"},children:"Our expert team excels in implementing adaptive and multi-factor authentication mechanisms, ensuring robust security for remote access across applications and end-user devices."})]})}),e.jsx("div",{className:"col-12 col-lg-6",children:e.jsxs("div",{style:{gap:"1rem",display:"flex",flexDirection:"column"},children:[e.jsx("p",{style:{color:"#64748b",textAlign:"justify",marginBottom:"1rem"},children:"With centralized privilege access management, we provide granular control and visibility, safeguarding sensitive resources."}),e.jsx("p",{style:{color:"#64748b",textAlign:"justify",marginBottom:"2rem"},children:"Our customized solutions are designed to seamlessly integrate into remote work environments, enabling organizations to navigate the evolving cybersecurity landscape with confidence."}),e.jsx("div",{style:{justifyContent:"flex-start",marginTop:"1rem",display:"flex",flexWrap:"wrap",gap:"1rem",marginLeft:"-7rem"},children:e.jsxs("button",{className:"btn btn-primary",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:"0.5rem 1rem",borderRadius:"0.375rem",fontWeight:600,fontSize:"0.875rem",cursor:"pointer",transition:"all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",backgroundColor:"#1B8DBB",color:"white"},children:["Talk to Our Experts",e.jsx("svg",{style:{marginLeft:"0.5rem",width:"1rem",height:"1rem"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5l7 7-7 7"})})]})})]})})]})]})}),e.jsx("section",{style:{padding:"3rem 0 6rem 0"},children:e.jsxs("div",{className:"container px-4 md:px-6 mx-auto",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center gap-4 text-center",children:[e.jsx("h2",{style:{fontSize:"3rem",fontWeight:800,lineHeight:1.2,color:"#1B8DBB"},className:"tracking-tighter sm:text-4xl md:text-5xl",children:"Support Features"}),e.jsx("p",{style:{margin:"0 auto",maxWidth:"700px",color:"#64748b"},className:"text-xl",children:"Comprehensive cybersecurity solutions to protect your organization"})]}),e.jsxs("div",{style:{marginTop:"3rem",display:"grid",gap:"2rem",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))"},children:[e.jsxs("div",{className:"feature-card",style:{borderRadius:"0.5rem",border:"1px solid #e2e8f0",backgroundColor:"white",color:"black",transition:"all 0.3s ease",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[e.jsx("div",{style:{padding:"1.5rem"},children:e.jsxs("h3",{style:{fontSize:"1.5rem",fontWeight:600,display:"flex",alignItems:"center",gap:"0.5rem",color:"#1B8DBB"},children:[e.jsx("svg",{style:{width:"1.25rem",height:"1.25rem",color:"#1B8DBB"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),"Identity & Access Management (IAM)"]})}),e.jsx("div",{style:{padding:"0 1.5rem 1.5rem"},children:e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Hrify Digital improves digital security with IAM strategies, multi-factor authentication, and identity governance solutions. We monitor and prevent unauthorized access."})})]}),e.jsxs("div",{className:"feature-card",style:{borderRadius:"0.5rem",border:"1px solid #e2e8f0",backgroundColor:"white",color:"black",transition:"all 0.3s ease",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[e.jsx("div",{style:{padding:"1.5rem"},children:e.jsxs("h3",{style:{fontSize:"1.5rem",fontWeight:600,display:"flex",alignItems:"center",gap:"0.5rem",color:"#1B8DBB"},children:[e.jsx("svg",{style:{width:"1.25rem",height:"1.25rem",color:"#1B8DBB"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),"Data Protection"]})}),e.jsx("div",{style:{padding:"0 1.5rem 1.5rem"},children:e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Hrify Digitals offers robust data security measures, including encryption, classification frameworks, secure storage and backups, data retention policies, and disposal practices to prevent breaches."})})]}),e.jsxs("div",{className:"feature-card",style:{borderRadius:"0.5rem",border:"1px solid #e2e8f0",backgroundColor:"white",color:"black",transition:"all 0.3s ease",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[e.jsx("div",{style:{padding:"1.5rem"},children:e.jsxs("h3",{style:{fontSize:"1.5rem",fontWeight:600,display:"flex",alignItems:"center",gap:"0.5rem",color:"#1B8DBB"},children:[e.jsx("svg",{style:{width:"1.25rem",height:"1.25rem",color:"#1B8DBB"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"})}),"Threat Detection & Response"]})}),e.jsx("div",{style:{padding:"0 1.5rem 1.5rem"},children:e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Hrify Digital provides security solutions that integrate advanced monitoring tools and technologies for proactive threat detection. We offer real-time alerts, incident response planning, and vulnerability assessments."})})]}),e.jsxs("div",{className:"feature-card",style:{borderRadius:"0.5rem",border:"1px solid #e2e8f0",backgroundColor:"white",color:"black",transition:"all 0.3s ease",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[e.jsx("div",{style:{padding:"1.5rem"},children:e.jsxs("h3",{style:{fontSize:"1.5rem",fontWeight:600,display:"flex",alignItems:"center",gap:"0.5rem",color:"#1B8DBB"},children:[e.jsx("svg",{style:{width:"1.25rem",height:"1.25rem",color:"#1B8DBB"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})}),"User Awareness & Training"]})}),e.jsx("div",{style:{padding:"0 1.5rem 1.5rem"},children:e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Hrify Digital offers customizable security awareness programs, training modules, and simulated phishing campaigns to mitigate social engineering and phishing risks."})})]}),e.jsxs("div",{className:"feature-card",style:{borderRadius:"0.5rem",border:"1px solid #e2e8f0",backgroundColor:"white",color:"black",transition:"all 0.3s ease",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[e.jsx("div",{style:{padding:"1.5rem"},children:e.jsxs("h3",{style:{fontSize:"1.5rem",fontWeight:600,display:"flex",alignItems:"center",gap:"0.5rem",color:"#1B8DBB"},children:[e.jsx("svg",{style:{width:"1.25rem",height:"1.25rem",color:"#1B8DBB"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),"Privileged Access Management (PAM)"]})}),e.jsx("div",{style:{padding:"0 1.5rem 1.5rem"},children:e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Hrify Digital offers PAM solutions to protect privileged accounts, enforce strong passwords, monitor sessions, employ just-in-time access controls, and implement least privilege principles."})})]}),e.jsxs("div",{className:"feature-card",style:{borderRadius:"0.5rem",border:"1px solid #e2e8f0",backgroundColor:"white",color:"black",transition:"all 0.3s ease",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[e.jsx("div",{style:{padding:"1.5rem"},children:e.jsxs("h3",{style:{fontSize:"1.5rem",fontWeight:600,display:"flex",alignItems:"center",gap:"0.5rem",color:"#1B8DBB"},children:[e.jsx("svg",{style:{width:"1.25rem",height:"1.25rem",color:"#1B8DBB"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),"Compliance & Regulatory Support"]})}),e.jsx("div",{style:{padding:"0 1.5rem 1.5rem"},children:e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Hrify Digital ensures clients meet cybersecurity regulations and standards, including GDPR, HIPAA, and PCI DSS. We provide tools for compliance audits and stay up-to-date on the latest regulations."})})]})]})]})}),e.jsx("section",{style:{backgroundColor:"#1B8DBB",color:"white",padding:"3rem 0 4rem 0",textAlign:"center"},children:e.jsx("div",{className:"container px-4 md:px-6 mx-auto",children:e.jsxs("div",{className:"flex flex-col items-center justify-center gap-4 text-center",children:[e.jsx("h2",{style:{fontSize:"3rem",fontWeight:800,lineHeight:1.2},className:"tracking-tighter sm:text-4xl md:text-5xl",children:"Ready to Secure Your Workforce?"}),e.jsx("p",{style:{margin:"0 auto 1.5rem",maxWidth:"700px",fontSize:"1.1rem"},children:"Talk to our experts today and discover how Dimiour can transform your cybersecurity posture."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"1rem"},children:[e.jsxs("button",{className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:"0.75rem 2rem",borderRadius:"0.375rem",fontWeight:600,fontSize:"0.875rem",cursor:"pointer",transition:"all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",backgroundColor:"white",color:"#1B8DBB"},children:[e.jsx("svg",{style:{marginRight:"0.5rem",width:"1rem",height:"1rem"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),"Contact Us"]}),e.jsxs("button",{className:"btn btn-outline",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:"0.75rem 2rem",borderRadius:"0.375rem",fontWeight:600,fontSize:"0.875rem",cursor:"pointer",transition:"all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",backgroundColor:"transparent",color:"white",border:"2px solid white"},children:[e.jsx("svg",{style:{marginRight:"0.5rem",width:"1rem",height:"1rem"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})}),"Schedule a Call"]})]})]})})})]}),A0=d("assets/images/newBanner/cy10.webp"),T0=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:A0,alt:"Security Engineering Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            .main-title {
              font-size: 2.8rem;
              font-weight: 700;
              color: #1B8DBB;
              text-align: center;
              margin: 3rem 0 1.5rem;
            }

            .main-subtitle {
              text-align: center;
              color: #666;
              max-width: 800px;
              margin: 0 auto 2.5rem;
              font-size: 1.15rem;
            }

            .tags-container {
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              gap: 1rem;
              margin-bottom: 4rem;
            }

            .tag-btn {
              border: 1px solid #ddd;
              background: white;
              color: #333;
              padding: 0.5rem 1.5rem;
              border-radius: 9999px;
              font-size: 0.95rem;
              text-decoration: none;
              transition: all 0.2s;
            }

            .tag-btn:hover {
              background: #f5f5f5;
            }

            .intro-para, .long-para {
              text-align: center;
              max-width: 900px;
              margin: 0 auto 2rem;
              color: #555;
              line-height: 1.8;
              font-size: 1.05rem;
            }

            .cta-button {
              display: block;
              width: fit-content;
              margin: 3rem auto;
              background: #1B8DBB;
              color: white;
              padding: 0.85rem 2rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 500;
              font-size: 1.1rem;
            }

            .cta-button:hover {
              background: #15749A;
            }

            .features-title {
              text-align: center;
              font-size: 2.2rem;
              font-weight: 700;
              color: #1B8DBB;
              margin: 4rem 0 3rem;
            }

            .cards-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 2rem;
              margin-bottom: 4rem;
            }

            @media (min-width: 768px) {
              .cards-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }

            @media (min-width: 1024px) {
              .cards-grid {
                grid-template-columns: repeat(3, 1fr);
              }
            }

            .card {
              background: white;
              border: 1px solid #eaeaea;
              border-radius: 12px;
              padding: 2rem 1.5rem;
              text-align: center;
              box-shadow: 0 4px 12px rgba(0,0,0,0.05);
              transition: transform 0.3s;
            }

            .card:hover {
              transform: translateY(-8px);
            }

            .card-icon {
              width: 56px;
              height: 56px;
              color: #1B8DBB;
              margin: 0 auto 1.2rem;
            }

            .card-title {
              font-size: 1.3rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .card-desc {
              color: #666;
              font-size: 0.98rem;
              line-height: 1.6;
            }

            .case-section {
              text-align: center;
              padding: 4rem 0;
            }

            .case-title {
              font-size: 2rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 1.5rem;
            }

            .view-btn {
              background: #1B8DBB;
              color: white;
              padding: 0.85rem 2rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 500;
            }

            .view-btn:hover {
              background: #15749A;
            }
          `}),e.jsx("h1",{className:"main-title",children:"Resilience & Trust Through Security Engineering"}),e.jsx("p",{className:"main-subtitle",children:"Secure architectures by identifying potential threats & implementing effective measures to uphold confidentiality & compliance."}),e.jsxs("div",{className:"tags-container",children:[e.jsx("a",{href:"#",className:"tag-btn",children:"Awareness"}),e.jsx("a",{href:"#",className:"tag-btn",children:"Compliance"}),e.jsx("a",{href:"#",className:"tag-btn",children:"Compatibility"}),e.jsx("a",{href:"#",className:"tag-btn",children:"Cybersecurity Services"})]}),e.jsx("p",{className:"intro-para",children:"Experience Hrify Digital's innovative approach to Security Engineering Solutions through threat monitoring, user-centric design, tailored solutions, training, partnerships, and cutting-edge technology."}),e.jsx("p",{className:"long-para",children:"Hrify Digital, with a strategic focus on Security Engineering Solutions, prioritizes training and development for up-to-date security practices. We allocate resources based on client needs and partnerships. Our research team monitors threats and collaborates, and we focus on user-centric design, ensuring that time-to-market pressure doesn't compromise necessary security considerations. Dimiour conducts assessments, provides tailored solutions, and offers comprehensive security training and compliance services. We stay abreast of technology advancements to give businesses a competitive edge."}),e.jsxs("a",{href:"#",className:"cta-button",children:["Schedule a Consultation",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginLeft:"0.5rem",verticalAlign:"middle"},children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]}),e.jsx("h2",{className:"features-title",children:"Support Features"}),e.jsxs("div",{className:"cards-grid",children:[e.jsxs("div",{className:"card",children:[e.jsx("svg",{className:"card-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"})}),e.jsx("h3",{className:"card-title",children:"Intuitive Security Solutions"}),e.jsx("p",{className:"card-desc",children:"Hrify Digital invests in security training and development, leveraging expertise to create user-friendly solutions. We provide comprehensive documentation for streamlined processes."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("svg",{className:"card-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),e.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),e.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),e.jsx("h3",{className:"card-title",children:"Data Security & Compliance"}),e.jsx("p",{className:"card-desc",children:"Hrify Digital prioritizes client security needs and strategically develops collaborations with specialists to expand the resource pool to offer comprehensive security services."})]}),e.jsxs("div",{className:"card",children:[e.jsx("svg",{className:"card-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),e.jsx("h3",{className:"card-title",children:"Rapid Technology Advancements"}),e.jsx("p",{className:"card-desc",children:"At Hrify Digital, security is our top priority, and we achieve this by constantly assessing new technologies, investing in research and development, and collaborating with vendors and experts."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("svg",{className:"card-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M9 11V6a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-5"}),e.jsx("path",{d:"M13 13 4 4"}),e.jsx("path",{d:"M9 17v-5H4v5h5Z"})]}),e.jsx("h3",{className:"card-title",children:"Regulatory Compliance"}),e.jsx("p",{className:"card-desc",children:"Hrify Digital creates customized compliance frameworks and tools for our security services to meet industry regulations and data protection laws. Additionally, we offer compliance auditing services to identify gaps and ensure adherence to necessary standards."})]}),e.jsxs("div",{className:"card",children:[e.jsx("svg",{className:"card-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"})}),e.jsx("h3",{className:"card-title",children:"Legacy Systems & Compatibility"}),e.jsx("p",{className:"card-desc",children:"Hrify Digital provides security assessments and migration services to ensure clients' systems are secure and compatible. We can also develop custom security gateways for legacy systems."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("svg",{className:"card-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),e.jsx("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]}),e.jsx("h3",{className:"card-title",children:"Awareness & Training"}),e.jsx("p",{className:"card-desc",children:"Hrify Digital offers industry-specific security awareness training programs, ongoing education through webinars, and user-friendly security controls and dashboards for real-time feedback and reminders to make secure choices."})]})]})," ",e.jsx("br",{}),e.jsxs("div",{className:"case-section",children:[e.jsx("h2",{className:"case-title",children:"Cybersecurity Case Studies"})," ",e.jsx("br",{}),e.jsxs("a",{href:"#",className:"view-btn",children:["View Case Studies",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginLeft:"0.5rem",verticalAlign:"middle"},children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})]})]})]}),F0=d("assets/images/newBanner/cy12.webp");d("assets/images/Banner/newbanimg/zero-trust-1.webp");const L0=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:F0,alt:"Zero Trust Architecture Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            .main-title {
              font-size: 2.8rem;
              font-weight: 700;
              color: #1B8DBB;
              text-align: center;
              margin: 4rem 0 1.5rem;
            }

            .main-subtitle {
              text-align: center;
              color: #444;
              max-width: 900px;
              margin: 0 auto 3rem;
              font-size: 1.2rem;
              line-height: 1.7;
            }

            .btn-group {
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              gap: 1.5rem;
              margin: 3rem 0;
            }

            .btn-primary {
              background-color: #1B8DBB;
              color: white;
              padding: 0.9rem 2rem;
              border-radius: 9999px;
              font-weight: 600;
              text-decoration: none;
              display: inline-flex;
              align-items: center;
              gap: 0.5rem;
            }

            .btn-primary:hover {
              background-color: #15749A;
            }

            .btn-outline {
              border: 2px solid #333;
              color: #333;
              background: transparent;
              padding: 0.9rem 2rem;
              border-radius: 9999px;
              font-weight: 600;
              text-decoration: none;
            }

            .btn-outline:hover {
              background: #333;
              color: white;
            }

            .feature-grid {
              background: #f0f0f0;
              border-radius: 16px;
              padding: 2rem;
              max-width: 500px;
              margin: 0 auto;
            }

            .grid-2col {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 1.5rem;
            }

            .feature-box {
              text-align: center;
              padding: 1rem;
            }

            .feature-box i {
              font-size: 2.8rem;
              color: #1B8DBB;
              margin-bottom: 0.8rem;
            }

            .feature-box h3 {
              font-size: 1.1rem;
              font-weight: 600;
            }

            .section {
              padding: 4rem 0;
            }

            .section-title {
              text-align: center;
              font-size: 2.4rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 3rem;
            }

            .section-intro {
              text-align: center;
              max-width: 900px;
              margin: 0 auto 4rem;
              color: #555;
              font-size: 1.1rem;
              line-height: 1.8;
            }

            .card-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 2rem;
              margin-bottom: 4rem;
            }

            @media (min-width: 768px) {
              .card-grid {
                grid-template-columns: repeat(3, 1fr);
              }
            }

            .card {
              background: white;
              border: 1px solid #eaeaea;
              border-radius: 12px;
              padding: 2rem;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: all 0.3s ease;
            }

            .card:hover {
              transform: translateY(-10px);
              box-shadow: 0 12px 25px rgba(0,0,0,0.12);
            }

            .card i {
              font-size: 3rem;
              color: #1B8DBB;
              margin-bottom: 1.2rem;
            }

            .card-title {
              font-size: 1.4rem;
              font-weight: 600;
              color: #333;
              margin-bottom: 1rem;
            }

            .card-body p {
              color: #666;
              line-height: 1.7;
            }

            .features-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 3rem;
            }

            @media (min-width: 768px) {
              .features-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }

            .feature-item {
              display: flex;
              gap: 1.5rem;
              align-items: start;
            }

            .feature-icon {
              width: 60px;
              height: 60px;
              background: rgba(27, 141, 187, 0.1);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
            }

            .feature-icon i {
              font-size: 1.8rem;
              color: #1B8DBB;
            }

            .feature-content h3 {
              font-size: 1.3rem;
              font-weight: 600;
              margin-bottom: 0.8rem;
            }

            .feature-content p {
              color: #666;
              line-height: 1.7;
            }

            .cta-section {
              background: linear-gradient(135deg, #1B8DBB, #15749A);
              color: white;
              padding: 5rem 0;
              text-align: center;
            }

            .cta-content h2 {
              font-size: 2.5rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
            }

            .cta-content p {
              font-size: 1.3rem;
              max-width: 800px;
              margin: 0 auto 2.5rem;
              opacity: 0.95;
            }

            .btn-white {
              background: white;
              color: #1B8DBB;
              padding: 1rem 2.5rem;
              border-radius: 9999px;
              font-weight: 600;
              font-size: 1.1rem;
              text-decoration: none;
            }

            .btn-white:hover {
              background: #f0f0f0;
              transform: scale(1.05);
            }
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Get Your Access Authorized, Encrypted, & Secured With Zero Trust Architecture"}),e.jsx("p",{className:"main-subtitle",children:"Minimize the attack surface, prevent data breaches, and eliminate threats with Hrify Digital's comprehensive Zero Trust approach."}),e.jsxs("div",{className:"btn-group",children:[e.jsxs("a",{href:"#contact",className:"btn-primary",children:["Talk to Our Expert",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]}),e.jsx("a",{href:"#learn-more",className:"btn-outline",children:"Learn More"})]}),e.jsx("div",{className:"feature-grid",children:e.jsxs("div",{className:"grid-2col",children:[e.jsxs("div",{className:"feature-box",children:[e.jsx("i",{className:"fas fa-shield-alt"}),e.jsx("h3",{children:"Verify Identity"})]}),e.jsxs("div",{className:"feature-box",children:[e.jsx("i",{className:"fas fa-lock"}),e.jsx("h3",{children:"Control Risk"})]}),e.jsxs("div",{className:"feature-box",children:[e.jsx("i",{className:"fas fa-check-circle"}),e.jsx("h3",{children:"Enforce Policy"})]}),e.jsxs("div",{className:"feature-box",children:[e.jsx("i",{className:"fas fa-eye"}),e.jsx("h3",{children:"Monitor Access"})]})]})})]}),e.jsx("section",{className:"section bg-white",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Streamlined Zero Trust Implementation"}),e.jsx("p",{className:"section-intro",children:"Hrify Digital simplifies Zero Trust Architecture implementation and offers tailored solutions to tackle implementation challenges. We assess compatibility, upgrade legacy systems, and prioritize user experience with friendly authentication and training."}),e.jsxs("div",{className:"card-grid",children:[e.jsxs("div",{className:"card",children:[e.jsx("i",{className:"fas fa-shield-alt"}),e.jsx("h3",{className:"card-title",children:"Comprehensive Security"}),e.jsx("p",{className:"card-body",children:"We tackle cultural resistance, optimize resources, and ensure seamless integration for a highly effective ZTA implementation."})]}),e.jsxs("div",{className:"card",children:[e.jsx("i",{className:"fas fa-chart-bar"}),e.jsx("h3",{className:"card-title",children:"Customized Monitoring"}),e.jsx("p",{className:"card-body",children:"Our customized monitoring, automation, and communication enable successful change management and ongoing security."})]}),e.jsxs("div",{className:"card",children:[e.jsx("i",{className:"fas fa-users"}),e.jsx("h3",{className:"card-title",children:"Expert Training"}),e.jsx("p",{className:"card-body",children:"Trust Hrify Digital for effective implementation of Zero Trust Architecture with comprehensive training and support."})]})]})]})}),e.jsx("section",{className:"section bg-light",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Support Features"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-item",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-bolt"})}),e.jsxs("div",{className:"feature-content",children:[e.jsx("h3",{children:"Comprehensive Implementation Strategy"}),e.jsx("p",{children:"Hrify Digital creates customized implementation plans for clients to implement Zero Trust Architecture and offers guidance and support throughout the process."})]})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-shield-alt"})}),e.jsxs("div",{className:"feature-content",children:[e.jsx("h3",{children:"Legacy Systems"}),e.jsx("p",{children:"Hrify Digital assesses client legacy systems for compatibility with Zero Trust principles. We help clients upgrade or replace systems and give modernization recommendations."})]})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-users"})}),e.jsxs("div",{className:"feature-content",children:[e.jsx("h3",{children:"User Experience"}),e.jsx("p",{children:"Hrify Digital designs user-friendly authentication methods tailored to clients' needs and offers expertise in implementing these technologies with training and documentation."})]})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-check-circle"})}),e.jsxs("div",{className:"feature-content",children:[e.jsx("h3",{children:"Tackling Cultural Resistance"}),e.jsx("p",{children:"Hrify Digital creates change management strategies for organizational culture and customized communication plans, showcasing successful Zero Trust implementations."})]})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-eye"})}),e.jsxs("div",{className:"feature-content",children:[e.jsx("h3",{children:"Visibility & Monitoring"}),e.jsx("p",{children:"Hrify Digital offers customizable security monitoring solutions to meet clients' specific needs and regulatory requirements with real-time visibility into network traffic."})]})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-chart-bar"})}),e.jsxs("div",{className:"feature-content",children:[e.jsx("h3",{children:"Change Management"}),e.jsx("p",{children:"Hrify Digital develops customized communication plans for clients, with industry-specific training and resources to address challenges during implementation."})]})]})]})]})}),e.jsx("section",{className:"cta-section",id:"contact",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"cta-content",children:[e.jsx("h2",{children:"Ready to Secure Your Organization?"}),e.jsx("p",{children:"Trust our expertise for a streamlined and highly effective Zero Trust Architecture implementation."}),e.jsx("a",{href:"#contact-form",className:"btn-white",children:"Talk to Our Expert Today"})]})})})]})]}),R0=d("assets/images/newBanner/cy13.webp"),H0=d("assets/images/govtrisk1-(1).webp"),P0=d("assets/images/govtrisk1-(2).webp"),O0=d("assets/images/govtrisk1-(3).webp");d("assets/images/govtrisk.webp");const _0=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:R0,alt:"Governance Risk Management Compliance Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            .main-title {
              font-size: 2.8rem;
              font-weight: 700;
              color: #1B8DBB;
              text-align: center;
              margin: 4rem 0 1.5rem;
            }

            .main-subtitle {
              text-align: center;
              color: #444;
              max-width: 900px;
              margin: 0 auto 3rem;
              font-size: 1.2rem;
              line-height: 1.7;
            }

            .tags-container {
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              gap: 1rem;
              margin-bottom: 4rem;
            }

            .tag-btn {
              background-color: #1B8DBB;
              color: white;
              padding: 0.6rem 1.8rem;
              border-radius: 9999px;
              font-size: 1rem;
              font-weight: 500;
            }

            .cta-button {
              display: block;
              width: fit-content;
              margin: 3rem auto;
              background: #1B8DBB;
              color: white;
              padding: 0.9rem 2.5rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 600;
              font-size: 1.1rem;
            }

            .cta-button:hover {
              background: #15749A;
            }

            .section {
              padding: 4rem 0;
            }

            .section-title {
              text-align: center;
              font-size: 2.4rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 3rem;
            }

            .section-intro {
              text-align: center;
              max-width: 900px;
              margin: 0 auto 4rem;
              color: #555;
              font-size: 1.1rem;
              line-height: 1.8;
            }

            .service-card {
              background: white;
              border-radius: 16px;
              padding: 3rem;
              box-shadow: 0 8px 25px rgba(0,0,0,0.1);
              text-align: center;
              max-width: 1000px;
              margin: 0 auto;
            }

            .service-card p {
              font-size: 1.15rem;
              line-height: 1.8;
              color: #444;
            }

            .features-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 2rem;
              margin-bottom: 4rem;
            }

            @media (min-width: 768px) {
              .features-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }

            @media (min-width: 1024px) {
              .features-grid {
                grid-template-columns: repeat(3, 1fr);
              }
            }

            .feature-card {
              background: #E8F4FA;
              border: 1px solid #B3D9FF;
              border-radius: 12px;
              padding: 2rem;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: all 0.3s ease;
              height: 100%;
            }

            .feature-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 12px 25px rgba(0,0,0,0.12);
            }

            .feature-icon {
              width: 70px;
              height: 70px;
              color: #1B8DBB;
              margin: 0 auto 1.5rem;
            }

            .feature-title {
              font-size: 1.4rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .feature-desc {
              color: #666;
              line-height: 1.7;
            }

            .case-studies-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 2.5rem;
            }

            @media (min-width: 768px) {
              .case-studies-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }

            @media (min-width: 1024px) {
              .case-studies-grid {
                grid-template-columns: repeat(3, 1fr);
              }
            }

            .case-card {
              background: white;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 8px 25px rgba(0,0,0,0.1);
              transition: all 0.3s ease;
            }

            .case-card:hover {
              transform: translateY(-10px);
            }

            .case-image-wrapper {
              overflow: hidden;
              height: 220px;
            }

            .case-image {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.4s ease;
            }

            .case-card:hover .case-image {
              transform: scale(1.08);
            }

            .case-content {
              padding: 2rem;
              text-align: left;
            }

            .case-title {
              font-size: 1.3rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .case-desc {
              color: #666;
              line-height: 1.7;
            }
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Streamline Your Approach to Operations With Governance, Risk Management & Compliance"}),e.jsx("p",{className:"main-subtitle",children:"Improve decision-making for your ideal IT investments, avoid reputational damage and legal hassles, and ensure your business operates at the highest level of responsibility."}),e.jsxs("div",{className:"tags-container",children:[e.jsx("div",{className:"tag-btn",children:"Risk Management"}),e.jsx("div",{className:"tag-btn",children:"Compliance"}),e.jsx("div",{className:"tag-btn",children:"Strategy"})]}),e.jsxs("a",{href:"#",className:"cta-button",children:["Get a Free Consultation",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginLeft:"0.5rem",verticalAlign:"middle"},children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})]}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Cybersecurity Services"}),e.jsx("p",{className:"section-intro",children:"Enhance the security of your digital environment and stay up-to-date with Hrify Digital's state-of-the-art Governance, Risk Management & Compliance solutions."}),e.jsxs("div",{className:"service-card",children:[e.jsx("p",{children:"Hrify Digital specializes in cybersecurity, providing top-notch GRC services. We navigate complex frameworks and regulations to align robust cybersecurity measures with clients' business objectives. Leveraging technology advancements, Hrify Digital delivers cutting-edge GRC services to provide real-time risk monitoring and compliance tracking. With proactive monitoring and a security-conscious culture, Hrify Digital empowers clients to navigate the cybersecurity landscape confidently."}),e.jsx("div",{className:"text-center mt-4",children:e.jsx("a",{href:"#",className:"cta-button",children:"Get a Free Consultation"})})]})]})}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Support Features"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"})}),e.jsx("h3",{className:"feature-title",children:"Unparalleled Expertise"}),e.jsx("p",{className:"feature-desc",children:"Our professionals have extensive GRC knowledge and guide organizations to adopt robust practices aligned with their business objectives."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"18",y1:"20",x2:"18",y2:"10"}),e.jsx("line",{x1:"12",y1:"20",x2:"12",y2:"4"}),e.jsx("line",{x1:"6",y1:"20",x2:"6",y2:"14"})]}),e.jsx("h3",{className:"feature-title",children:"Optimal Resource Allocation"}),e.jsx("p",{className:"feature-desc",children:"Our team provides tailored GRC services with qualified personnel and ample budgets to meet client requirements."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),e.jsx("polyline",{points:"2 17 12 22 22 17"}),e.jsx("polyline",{points:"2 12 12 17 22 12"})]}),e.jsx("h3",{className:"feature-title",children:"Streamlined Integration"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital integrates GRC practices into clients' processes and systems, working closely with departments and teams for smooth implementation and optimized efficiency."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38"})}),e.jsx("h3",{className:"feature-title",children:"Continuous Monitoring & Improvement"}),e.jsx("p",{className:"feature-desc",children:"We at Hrify Digital regularly monitor and review clients' GRC activities to ensure compliance, identify areas for improvement, and provide proactive recommendations for a strong cybersecurity posture."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),e.jsx("h3",{className:"feature-title",children:"Promoting a Security-Conscious Culture"}),e.jsx("p",{className:"feature-desc",children:"We promote security and compliance culture in clients' organizations by prioritizing cybersecurity awareness and accountability and embedding security practices into their culture."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"}),e.jsx("rect",{x:"9",y:"9",width:"6",height:"6"}),e.jsx("line",{x1:"9",y1:"1",x2:"9",y2:"4"}),e.jsx("line",{x1:"15",y1:"1",x2:"15",y2:"4"}),e.jsx("line",{x1:"9",y1:"20",x2:"9",y2:"23"}),e.jsx("line",{x1:"15",y1:"20",x2:"15",y2:"23"}),e.jsx("line",{x1:"20",y1:"9",x2:"23",y2:"9"}),e.jsx("line",{x1:"20",y1:"14",x2:"23",y2:"14"}),e.jsx("line",{x1:"1",y1:"9",x2:"4",y2:"9"}),e.jsx("line",{x1:"1",y1:"14",x2:"4",y2:"14"})]}),e.jsx("h3",{className:"feature-title",children:"Technological Advancements"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital uses advanced technology to improve services. With GRC software and automation tools, Dimiour streamlines processes, monitors risk, tracks compliance, and generates reports in real-time."})]})]})]})}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Cybersecurity Case Studies"}),e.jsxs("div",{className:"case-studies-grid",children:[e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image-wrapper",children:e.jsx("img",{src:H0,alt:"Financial Services Security",className:"case-image"})}),e.jsxs("div",{className:"case-content",children:[e.jsx("h3",{className:"case-title",children:"Financial Services Security"}),e.jsx("p",{className:"case-desc",children:"How we helped a major bank implement robust GRC practices to protect sensitive financial data."})]})]}),e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image-wrapper",children:e.jsx("img",{src:P0,alt:"Healthcare Compliance",className:"case-image"})}),e.jsxs("div",{className:"case-content",children:[e.jsx("h3",{className:"case-title",children:"Healthcare Compliance"}),e.jsx("p",{className:"case-desc",children:"Ensuring HIPAA compliance while strengthening security posture for a healthcare provider."})]})]}),e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image-wrapper",children:e.jsx("img",{src:O0,alt:"Retail Risk Management",className:"case-image"})}),e.jsxs("div",{className:"case-content",children:[e.jsx("h3",{className:"case-title",children:"Retail Risk Management"}),e.jsx("p",{className:"case-desc",children:"Developing a comprehensive risk management strategy for a multinational retail chain."})]})]})]})]})})]})]}),U0=d("assets/images/newBanner/cy14.webp");d("assets/images/cyberdefrnse.webp");const $0=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:U0,alt:"Cyber Defense Investigation Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            .main-title {
              font-size: 2.8rem;
              font-weight: 700;
              color: #1B8DBB;
              text-align: center;
              margin: 4rem 0 1.5rem;
            }

            .main-subtitle {
              text-align: center;
              color: #444;
              max-width: 900px;
              margin: 0 auto 3rem;
              font-size: 1.2rem;
              line-height: 1.7;
            }

            .icon-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 1.5rem;
              max-width: 600px;
              margin: 4rem auto;
            }

            .icon-card {
              text-align: center;
              padding: 1.5rem;
              background: #f9f9f9;
              border-radius: 12px;
            }

            .icon-card svg {
              width: 48px;
              height: 48px;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .icon-card span {
              font-weight: 600;
              font-size: 1.1rem;
            }

            .cta-button {
              display: block;
              width: fit-content;
              margin: 3rem auto;
              background: #1B8DBB;
              color: white;
              padding: 0.9rem 2.5rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 600;
              font-size: 1.1rem;
            }

            .cta-button:hover {
              background: #15749A;
            }

            .section {
              padding: 4rem 0;
            }

            .section-title {
              text-align: center;
              font-size: 2.4rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 3rem;
            }

            .section-intro {
              text-align: center;
              max-width: 900px;
              margin: 0 auto 4rem;
              color: #555;
              font-size: 1.1rem;
              line-height: 1.8;
            }

            .service-card {
              background: white;
              border-radius: 16px;
              padding: 3rem;
              box-shadow: 0 8px 25px rgba(0,0,0,0.1);
              text-align: center;
              max-width: 1000px;
              margin: 0 auto;
            }

            .service-card p {
              font-size: 1.15rem;
              line-height: 1.8;
              color: #444;
              margin-bottom: 2rem;
            }

            .features-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 2rem;
              margin-bottom: 4rem;
            }

            @media (min-width: 768px) {
              .features-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }

            @media (min-width: 1024px) {
              .features-grid {
                grid-template-columns: repeat(3, 1fr);
              }
            }

            .feature-card {
              background: #E8F4FA;
              border: 1px solid #B3D9FF;
              border-radius: 12px;
              padding: 2rem;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: all 0.3s ease;
              height: 100%;
            }

            .feature-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 12px 25px rgba(0,0,0,0.12);
            }

            .feature-icon {
              width: 70px;
              height: 70px;
              color: #1B8DBB;
              margin: 0 auto 1.5rem;
              transition: all 0.3s ease;
              z-index: 2;
              position: relative;
            }

            .feature-card:hover .feature-icon {
              transform: scale(1.1);
              color: #15749A;
              filter: drop-shadow(0 4px 8px rgba(27, 141, 187, 0.3));
            }

            .feature-title {
              font-size: 1.4rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .feature-desc {
              color: #666;
              line-height: 1.7;
            }

            .case-studies-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 2.5rem;
            }

            @media (min-width: 768px) {
              .case-studies-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }

            @media (min-width: 1024px) {
              .case-studies-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }

            .case-card {
              background: white;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 8px 25px rgba(0,0,0,0.1);
              transition: all 0.3s ease;
            }

            .case-card:hover {
              transform: translateY(-10px);
            }

            .case-image-wrapper {
              overflow: hidden;
              height: 220px;
              background: #e9ecef;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .case-image-wrapper svg {
              width: 80px;
              height: 80px;
              color: #adb5bd;
            }

            .case-content {
              padding: 2rem;
              text-align: left;
            }

            .case-category {
              font-size: 0.95rem;
              color: #888;
              margin-bottom: 0.5rem;
            }

            .case-title {
              font-size: 1.4rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .case-desc {
              color: #666;
              line-height: 1.7;
            }

            .contact-section {
              background: linear-gradient(135deg, #1B8DBB, #15749A);
              color: white;
              padding: 5rem 0;
            }

            .contact-form {
              max-width: 600px;
              margin: 3rem auto 0;
              background: rgba(255,255,255,0.1);
              padding: 2.5rem;
              border-radius: 16px;
              backdrop-filter: blur(10px);
            }

            .contact-form label {
              display: block;
              margin-bottom: 0.5rem;
              font-weight: 500;
            }

            .contact-form input,
            .contact-form textarea {
              width: 100%;
              padding: 0.8rem 1rem;
              border-radius: 8px;
              border: none;
              margin-bottom: 1.5rem;
              background: rgba(255,255,255,0.9);
              color: #333;
            }

            .contact-form textarea {
              min-height: 120px;
              resize: vertical;
            }

            .submit-btn {
              background: white;
              color: #1B8DBB;
              padding: 0.9rem 2.5rem;
              border-radius: 9999px;
              font-weight: 600;
              border: none;
              cursor: pointer;
              width: 100%;
            }

            .submit-btn:hover {
              background: #f0f0f0;
            }
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Identify, Analyze & Mitigate Malicious Activities"}),e.jsx("p",{className:"main-subtitle",children:"A strong cyber defense solution where everything and everyone is accounted for to uphold security and ensure the countermeasures are up-to-date with current innovations."}),e.jsxs("div",{className:"icon-grid",children:[e.jsxs("div",{className:"icon-card",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),e.jsx("span",{children:"Confidentiality"})]}),e.jsxs("div",{className:"icon-card",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),e.jsx("span",{children:"Integrity"})]}),e.jsxs("div",{className:"icon-card",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),e.jsx("span",{children:"Availability"})]})]}),e.jsxs("a",{href:"#contact",className:"cta-button",children:["Schedule a Consultation",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginLeft:"0.5rem",verticalAlign:"middle"},children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})]}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Elevate your Cyber Defense withHrify Digital"}),e.jsx("p",{className:"section-intro",children:"Align, automate, collaborate, excel in investigations, and ensure compliance effortlessly."}),e.jsxs("div",{className:"service-card",children:[e.jsx("p",{children:"Hrify Digital, a leading provider of integrated Cyber Defense and Investigation services, seamlessly aligns cybersecurity measures with your organizational goals. Skilled professionals and legal experts tackle complexities, ensuring compliance. With robust data acquisition and preservation, including advanced forensics, evidence integrity is maintained. Facilitating collaboration through a centralized system, we advocate for increased budgets and prioritize resource investments. Committed to fortifying cyber defense, Hrify Digital excels in investigations."}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Schedule a Consultation"})]})]})}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Support Features"}),e.jsx("p",{className:"section-intro",children:"Comprehensive cybersecurity solutions tailored to your organization's needs"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),e.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),e.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),e.jsx("h3",{className:"feature-title",children:"Threat Intelligence Network"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital extensive partnerships provide real-time threat intelligence, trend updates, and collaborative sharing."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),e.jsx("h3",{className:"feature-title",children:"User-Centric Security Measures"}),e.jsx("p",{className:"feature-desc",children:"We use employee input to create user-friendly security measures, including multi-factor authentication, secure remote access, and password managers."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),e.jsx("h3",{className:"feature-title",children:"Legacy System Risk Mitigation Plan"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital addresses vulnerable legacy systems using network segmentation, intrusion detection, patching, and upgrades/replacements."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),e.jsx("polyline",{points:"14 2 14 8 20 8"}),e.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),e.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),e.jsx("polyline",{points:"10 9 9 9 8 9"})]}),e.jsx("h3",{className:"feature-title",children:"Compliance Management Framework"}),e.jsx("p",{className:"feature-desc",children:"Our expert team ensures compliance with cybersecurity regulations and standards using automated tools."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),e.jsx("h3",{className:"feature-title",children:"Strategic Budget Allocation"}),e.jsx("p",{className:"feature-desc",children:"We at Hrify Digital take cybersecurity seriously, investing in tech and skilled professionals to avoid financial and reputational harm from cyber attacks."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),e.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),e.jsx("h3",{className:"feature-title",children:"Cybersecurity Awareness Program"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital implements a comprehensive cybersecurity awareness program, encompassing training, workshops, and campaigns to educate employees on threats and best practices for security."})]})]})]})}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Cybersecurity Case Studies"}),e.jsx("p",{className:"section-intro",children:"Real-world examples of how we've helped organizations strengthen their security posture"}),e.jsxs("div",{className:"case-studies-grid",children:[e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})}),e.jsxs("div",{className:"case-content",children:[e.jsx("p",{className:"case-category",children:"Banking & Finance"}),e.jsx("h3",{className:"case-title",children:"Financial Institution Breach Prevention"}),e.jsx("p",{className:"case-desc",children:"A major financial institution faced sophisticated phishing attacks targeting customer data. Hrify Digital implemented advanced threat detection systems and employee training, reducing successful attacks by 98% within three months."})]})]}),e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image-wrapper",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})})}),e.jsxs("div",{className:"case-content",children:[e.jsx("p",{className:"case-category",children:"Healthcare"}),e.jsx("h3",{className:"case-title",children:"Healthcare Data Protection"}),e.jsx("p",{className:"case-desc",children:"A healthcare network with 12 facilities needed to strengthen HIPAA compliance and protect patient data. Our team implemented a comprehensive security framework that achieved 100% compliance while improving system performance."})]})]}),e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}),e.jsxs("div",{className:"case-content",children:[e.jsx("p",{className:"case-category",children:"Manufacturing"}),e.jsx("h3",{className:"case-title",children:"Manufacturing Supply Chain Security"}),e.jsx("p",{className:"case-desc",children:"A global manufacturer experienced supply chain disruptions due to security vulnerabilities. Hrify Digital secured their entire supply chain network, preventing an estimated $4.2M in potential losses from future attacks."})]})]}),e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]})}),e.jsxs("div",{className:"case-content",children:[e.jsx("p",{className:"case-category",children:"Public Sector"}),e.jsx("h3",{className:"case-title",children:"Government Agency Compliance"}),e.jsx("p",{className:"case-desc",children:"A government agency needed to meet stringent new cybersecurity requirements. Our team implemented a compliance management framework that achieved certification in record time while strengthening overall security posture."})]})]})]})]})}),e.jsx("section",{className:"contact-section",id:"contact",children:e.jsxs("div",{className:"container text-center",children:[e.jsx("h2",{className:"section-title",style:{color:"white"},children:"Schedule a Consultation"}),e.jsx("p",{className:"section-intro",style:{color:"#f0f0f0"},children:"Ready to strengthen your cybersecurity posture? Our experts are ready to help."}),e.jsx("div",{className:"contact-form",children:e.jsxs("form",{children:[e.jsx("label",{htmlFor:"name",children:"Name"}),e.jsx("input",{id:"name",type:"text",placeholder:"Enter your name",required:!0}),e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{id:"email",type:"email",placeholder:"Enter your email",required:!0}),e.jsx("label",{htmlFor:"message",children:"Message"}),e.jsx("textarea",{id:"message",placeholder:"Tell us about your cybersecurity needs",required:!0}),e.jsx("button",{type:"submit",className:"submit-btn",children:"Submit"})]})})]})})]})]}),V0=d("assets/images/newBanner/cy15.webp"),q0=d("assets/images/cyber_manifacter-(1).webp");d("assets/images/cyber-security.webp");const Y0=d("assets/images/cyber_finace.webp"),G0=d("assets/images/cyber_helth.webp"),Q0=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:V0,alt:"Cyber Advisory Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            .main-title {
              font-size: 2.8rem;
              font-weight: 700;
              color: #1B8DBB;
              text-align: center;
              margin: 4rem 0 1.5rem;
            }

            .main-subtitle {
              text-align: center;
              color: #444;
              max-width: 900px;
              margin: 0 auto 3rem;
              font-size: 1.2rem;
              line-height: 1.7;
            }

            .icon-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 1.5rem;
              max-width: 700px;
              margin: 4rem auto;
            }

            .icon-card {
              text-align: center;
              padding: 1.8rem;
              background: white;
              border: 1px solid #eaeaea;
              border-radius: 16px;
              box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            }

            .icon-card h3 {
              font-size: 1.3rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-top: 1rem;
            }

            .cta-button {
              display: block;
              width: fit-content;
              margin: 3rem auto;
              background: #1B8DBB;
              color: white;
              padding: 0.9rem 2.5rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 600;
              font-size: 1.1rem;
            }

            .cta-button:hover {
              background: #1B8DBB;
            }

            .section {
              padding: 4rem 0;
            }

            .section-title {
              text-align: center;
              font-size: 2.4rem;
              font-weight: 700;
              color: white;
              margin-bottom: 3rem;
            }

            .section-intro {
              text-align: center;
              max-width: 900px;
              margin: 0 auto 4rem;
              color: #555;
              font-size: 1.1rem;
              line-height: 1.8;
            }

            .service-card {
              background: white;
              border-radius: 16px;
              padding: 3rem;
              box-shadow: 0 8px 25px rgba(0,0,0,0.1);
              text-align: center;
              max-width: 1000px;
              margin: 0 auto;
            }

            .service-card p {
              font-size: 1.15rem;
              line-height: 1.8;
              color: #444;
              margin-bottom: 2rem;
            }

            .features-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 2rem;
              margin-bottom: 4rem;
            }

            @media (min-width: 768px) {
              .features-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }

            @media (min-width: 1024px) {
              .features-grid {
                grid-template-columns: repeat(3, 1fr);
              }
            }

            .feature-card {
              background: #E8F4FA;
              border: 1px solid #B3D9FF;
              border-radius: 12px;
              padding: 2rem;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: all 0.3s ease;
              height: 100%;
            }

            .feature-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 12px 25px rgba(0,0,0,0.12);
            }

            .feature-icon {
              width: 70px;
              height: 70px;
              color: #1B8DBB;
              margin: 0 auto 1.5rem;
            }

            .feature-title {
              font-size: 1.4rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .feature-desc {
              color: #666;
              line-height: 1.7;
            }

            .case-studies-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 2.5rem;
            }

            @media (min-width: 768px) {
              .case-studies-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }

            @media (min-width: 1024px) {
              .case-studies-grid {
                grid-template-columns: repeat(3, 1fr);
              }
            }

            .case-card {
              background: white;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 8px 25px rgba(0,0,0,0.1);
              transition: all 0.3s ease;
            }

            .case-card:hover {
              transform: translateY(-10px);
            }

            .case-image-wrapper {
              overflow: hidden;
              height: 220px;
            }

            .case-image {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.4s ease;
            }

            .case-card:hover .case-image {
              transform: scale(1.08);
            }

            .case-content {
              padding: 2rem;
              text-align: left;
            }

            .case-title {
              font-size: 1.4rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .case-desc {
              color: #666;
              line-height: 1.7;
            }

            .cta-section {
              background: linear-gradient(135deg, #1B8DBB, #15749A);
              color: white;
              padding: 5rem 0;
              text-align: center;
            }

            .cta-content h2 {
              font-size: 2.5rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
            }

            .cta-content p {
              font-size: 1.3rem;
              max-width: 800px;
              margin: 0 auto 2.5rem;
              opacity: 0.95;
            }

            .btn-white {
              background: white;
              color: #1B8DBB;
              padding: 1rem 2.5rem;
              border-radius: 9999px;
              font-weight: 600;
              font-size: 1.1rem;
              text-decoration: none;
            }

            .btn-white:hover {
              background: #f0f0f0;
            }
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"A Risk-Conscious Approach to Cyber Threats With Our Cyber Advisory"}),e.jsx("p",{className:"main-subtitle",children:"Necessary insights to navigate through all evolving threats, assess risks, and create response strategies that blend in within your organization's core operations to meet the required security regulations."}),e.jsxs("div",{className:"icon-grid",children:[e.jsx("div",{className:"icon-card",children:e.jsx("h3",{children:"Communication"})}),e.jsx("div",{className:"icon-card",children:e.jsx("h3",{children:"Decision"})}),e.jsx("div",{className:"icon-card",children:e.jsx("h3",{children:"Incident Response"})}),e.jsx("div",{className:"icon-card",children:e.jsx("h3",{children:"IT Services"})})]}),e.jsxs("div",{className:"d-flex justify-content-center gap-4 flex-wrap",children:[e.jsxs("a",{href:"#schedule",className:"cta-button",children:["Schedule a Meeting",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginLeft:"0.5rem",verticalAlign:"middle"},children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]}),e.jsx("a",{href:"#learn-more",className:"cta-button",style:{background:"transparent",border:"2px solid #1B8DBB",color:"#1B8DBB"},children:"Learn More"})]})]}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Cyber Security Services"}),e.jsx("p",{className:"section-intro",children:"Safeguard your digital assets with Hrify Digital's Advisory Services through comprehensive risk management, threat intelligence, incident response planning, and security awareness training."}),e.jsxs("div",{className:"service-card",children:[e.jsx("p",{children:"Hrify Digital extends IT Advisory Services to encompass a comprehensive risk management process, bolstering organizations' capabilities in threat intelligence, incident response planning, and security awareness training. Our expertise enables us to assess and address emerging cyber threats while providing proactive guidance and strategies to our clients. With a focus on risk mitigation and resilience, Hrify Digitalempowers organizations to enhance their security posture and effectively respond to incidents."}),e.jsx("a",{href:"#schedule",className:"cta-button",children:"Schedule a Meeting"})]})]})}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Support Features"}),e.jsx("p",{className:"section-intro",children:"Comprehensive IT solutions tailored to your organization's needs"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),e.jsx("h3",{className:"feature-title",children:"Balancing Security & Usability"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital balances security and usability for clients by optimizing workflow practices without compromising security."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),e.jsx("polyline",{points:"14 2 14 8 20 8"}),e.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),e.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),e.jsx("polyline",{points:"10 9 9 9 8 9"})]}),e.jsx("h3",{className:"feature-title",children:"Regulatory Compliance"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital helps organizations with regulatory compliance, including audits, policy development, and guidance for IT security requirements."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),e.jsx("h3",{className:"feature-title",children:"Stay Updated"}),e.jsx("p",{className:"feature-desc",children:"Our team is highly trained in the latest technology trends to provide proactive solutions for emerging IT challenges."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),e.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}),e.jsx("h3",{className:"feature-title",children:"Scalable Solutions"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital offers flexible pricing models to accommodate clients with limited resources, ensuring they receive necessary IT services within their budget."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"}),e.jsx("rect",{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"}),e.jsx("line",{x1:"6",y1:"6",x2:"6.01",y2:"6"}),e.jsx("line",{x1:"6",y1:"18",x2:"6.01",y2:"18"})]}),e.jsx("h3",{className:"feature-title",children:"Legacy Systems & Infrastructure"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital consults on legacy system vulnerabilities, updating and securing infrastructure for modern IT requirements."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),e.jsx("h3",{className:"feature-title",children:"Vendor Risk Management"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital manages vendor risk for clients, ensuring third-party vendors meet IT security standards."})]})]})]})}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Cyber Solution Case Studies"}),e.jsx("p",{className:"section-intro",children:"See how we've helped organizations strengthen their IT infrastructure"}),e.jsxs("div",{className:"case-studies-grid",children:[e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image-wrapper",children:e.jsx("img",{src:Y0,alt:"Financial Services",className:"case-image"})}),e.jsxs("div",{className:"case-content",children:[e.jsx("h3",{className:"case-title",children:"Financial Services"}),e.jsx("p",{className:"case-desc",children:"How we helped a financial institution secure their digital infrastructure and meet compliance requirements."})]})]}),e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image-wrapper",children:e.jsx("img",{src:G0,alt:"Healthcare",className:"case-image"})}),e.jsxs("div",{className:"case-content",children:[e.jsx("h3",{className:"case-title",children:"Healthcare"}),e.jsx("p",{className:"case-desc",children:"Implementing robust security measures for a healthcare provider while ensuring HIPAA compliance."})]})]}),e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image-wrapper",children:e.jsx("img",{src:q0,alt:"Manufacturing",className:"case-image"})}),e.jsxs("div",{className:"case-content",children:[e.jsx("h3",{className:"case-title",children:"Manufacturing"}),e.jsx("p",{className:"case-desc",children:"Securing operational technology and IT infrastructure for a global manufacturing company."})]})]})]})]})}),e.jsx("section",{className:"cta-section",id:"contact",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Ready to Secure Your Organization?"}),e.jsx("p",{className:"section-intro",style:{color:"black"},children:"Schedule a consultation with our IT experts today"}),e.jsx("a",{href:"#schedule",className:"btn-white",children:"Schedule a Meeting"})," ",e.jsx("br",{})," ",e.jsx("br",{}),e.jsx("p",{className:"mt-3 opacity-90",style:{textAlign:"center"},children:"Our team will get back to you within 24 hours"})]})})]})]}),K0=d("assets/images/newBanner/cy11.webp"),X0=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:K0,alt:"Cyber Resilience Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            .main-title {
              font-size: 2.8rem;
              font-weight: 700;
              color: #1B8DBB;
              text-align: center;
              margin: 4rem 0 1.5rem;
            }

            .main-subtitle {
              text-align: center;
              color: #444;
              max-width: 900px;
              margin: 0 auto 3rem;
              font-size: 1.2rem;
              line-height: 1.7;
            }

            .tags-container {
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              gap: 1rem;
              margin: 4rem 0;
            }

            .tag-btn {
              background-color: #1B8DBB;
              color: white;
              padding: 0.7rem 1.8rem;
              border-radius: 9999px;
              font-size: 1.1rem;
              font-weight: 600;
            }

            .cta-button {
              display: block;
              width: fit-content;
              margin: 3rem auto;
              background: #1B8DBB;
              color: white;
              padding: 0.9rem 2.5rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 600;
              font-size: 1.1rem;
            }

            .cta-button:hover {
              background: #15749A;
            }

            .section {
              padding: 4rem 0;
            }

            .section-title {
              text-align: center;
              font-size: 2.4rem;
              font-weight: 700;
              color: white;
              margin-bottom: 3rem;
            }

            .section-intro {
              text-align: center;
              max-width: 900px;
              margin: 0 auto 4rem;
              color: #555;
              font-size: 1.1rem;
              line-height: 1.8;
            }

            .service-card {
              background: white;
              border-radius: 16px;
              padding: 3rem;
              box-shadow: 0 8px 25px rgba(0,0,0,0.1);
              text-align: center;
              max-width: 1000px;
              margin: 0 auto;
            }

            .service-card p {
              font-size: 1.15rem;
              line-height: 1.8;
              color: #444;
              margin-bottom: 2rem;
            }

            .features-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 2rem;
              margin-bottom: 4rem;
            }

            @media (min-width: 768px) {
              .features-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }

            @media (min-width: 1024px) {
              .features-grid {
                grid-template-columns: repeat(3, 1fr);
              }
            }

            .feature-card {
              background: #E8F4FA;
              border: 1px solid #B3D9FF;
              border-radius: 12px;
              padding: 2rem;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: all 0.3s ease;
              height: 100%;
            }

            .feature-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 12px 25px rgba(0,0,0,0.12);
            }

            .feature-icon {
              width: 70px;
              height: 70px;
              color: #1B8DBB;
              margin: 0 auto 1.5rem;
              transition: all 0.3s ease;
              z-index: 2;
              position: relative;
            }

            .feature-card:hover .feature-icon {
              transform: scale(1.1);
              color: #15749A;
              filter: drop-shadow(0 4px 8px rgba(27, 141, 187, 0.3));
            }

            .feature-title {
              font-size: 1.4rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .feature-desc {
              color: #666;
              line-height: 1.7;
            }
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"A Resilient Cyber Network Built on Cyber-Resilient Solutions"}),e.jsx("p",{className:"main-subtitle",children:"A holistic approach to safeguarding your digital infrastructure, ensuring continuous operation, and swiftly implementing recovering and adapting strategies to stay ahead of evolving cyber threats."}),e.jsxs("div",{className:"tags-container",children:[e.jsx("div",{className:"tag-btn",children:"Preparedness"}),e.jsx("div",{className:"tag-btn",children:"Response"}),e.jsx("div",{className:"tag-btn",children:"Recovery"})]})]}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Cybersecurity Services"}),e.jsx("p",{className:"section-intro",children:"From end-to-end detection capabilities to data-led intelligence solutions, Hrify Digital, using advanced expertise and cutting-edge technology, excels in delivering comprehensive Cyber resilience solutions that help businesses mitigate various cyber risks effectively."}),e.jsxs("div",{className:"service-card",children:[e.jsx("p",{children:"Hrify Digital provides robust cyber resilience solutions for organizations to ensure uninterrupted business continuity amidst complex IT landscapes and challenging cyber threats. With customized awareness programs, optimized resource allocation, threat intelligence collaboration, and user-centric security measures, trust Hrify Digital to safeguard your business swiftly and expertly against all cyber threats."}),e.jsxs("a",{href:"#contact",className:"cta-button",children:["Talk to Our Expert",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginLeft:"0.5rem",verticalAlign:"middle"},children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})]})]})}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Support Features"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"})}),e.jsx("h3",{className:"feature-title",children:"Resource Optimization"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital helps clients optimize cybersecurity investments through thorough risk assessments and prioritization of resource allocation based on risk levels."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),e.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),e.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),e.jsx("h3",{className:"feature-title",children:"Threat Intelligence & Collaboration"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital partners with industry peers and threat intelligence providers to gather and share timely threat information with clients, helping them defend against emerging cyber threats."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),e.jsx("h3",{className:"feature-title",children:"Simplified Security Solutions"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital provides user-friendly security platforms with centralized dashboards for effective management and monitoring of comprehensive protection for clients."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),e.jsx("polyline",{points:"14 2 14 8 20 8"})]}),e.jsx("h3",{className:"feature-title",children:"Legacy System Upgrades"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital helps clients upgrade or replace legacy systems while implementing compensating controls to reduce vulnerabilities and risks."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),e.jsx("h3",{className:"feature-title",children:"Third-Party Risk Management"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital provides third-party risk management services, ensuring clients' vendors and partners meet high-security standards through assessments and contractual agreements."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),e.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),e.jsx("h3",{className:"feature-title",children:"Awareness"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital provides tailored cybersecurity awareness programs, including webinars, to help organizations educate their employees on cyber resilience and threat recognition."})]})]})]})})]})]}),Z0=d("assets/images/newBanner/bl7.webp"),J0=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Z0,alt:"Distributed Trust Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            .main-title {
              font-size: 2.8rem;
              font-weight: 700;
              color: #1B8DBB;
              text-align: center;
              margin: 4rem 0 1.5rem;
            }

            .main-subtitle {
              text-align: center;
              color: #444;
              max-width: 900px;
              margin: 0 auto 3rem;
              font-size: 1.2rem;
              line-height: 1.7;
            }

            .image-showcase {
              display: flex;
              justify-content: center;
              margin: 4rem 0;
            }

            .image-showcase img {
              max-width: 100%;
              height: auto;
              border-radius: 16px;
              box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            }

            .features-list {
              list-style: none;
              padding: 0;
              max-width: 800px;
              margin: 3rem auto;
            }

            .features-list li {
              padding: 1rem 0;
              font-size: 1.1rem;
              display: flex;
              align-items: center;
              border-bottom: 1px solid #eee;
            }

            .features-list li::before {
              content: "✔️";
              font-size: 1.4rem;
              margin-right: 1rem;
              color: #1B8DBB;
            }

            .cta-button {
              display: block;
              width: fit-content;
              margin: 4rem auto;
              background: #1B8DBB;
              color: white;
              padding: 0.9rem 2.5rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 600;
              font-size: 1.1rem;
            }

            .cta-button:hover {
              background: #15749A;
            }

            .section {
              padding: 4rem 0;
            }

            .section-title {
              text-align: center;
              font-size: 2.4rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 3rem;
            }

            .content-text {
              max-width: 900px;
              margin: 0 auto 3rem;
              text-align: center;
              color: #555;
              font-size: 1.15rem;
              line-height: 1.8;
            }

            .testimonial-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 2rem;
              max-width: 1000px;
              margin: 4rem auto;
            }

            @media (min-width: 768px) {
              .testimonial-grid {
                grid-template-columns: repeat(3, 1fr);
              }
            }

            .testimonial-card {
              background: #fafafa;
              border-left: 5px solid #1B8DBB;
              border-radius: 12px;
              padding: 2rem;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
            }

            .testimonial-card p {
              font-style: italic;
              color: #555;
              margin-bottom: 1.5rem;
            }

            .testimonial-author {
              font-weight: 600;
              color: #333;
              text-align: right;
            }
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Execute and Validate Smart Contracts with Confidence"}),e.jsx("p",{className:"main-subtitle",children:"Harness Ethereum's Ecosystem to Build Next-Gen Decentralized Solutions"}),e.jsx("div",{className:"image-showcase",children:e.jsx("img",{src:"/assets/images/blockchain/bitcoin.webp",alt:"Blockchain Network"})}),e.jsxs("p",{className:"content-text",children:[e.jsx("strong",{children:"What We Offer:"})," Smart Contract Development, ERC Protocol Implementations, Community & Ecosystem Support, Comprehensive Blockchain Solutions tailored to your business needs."]}),e.jsxs("p",{className:"content-text",children:[e.jsx("strong",{children:"Hrify Digital"})," leverages Ethereum's rapid transaction capabilities to empower businesses and developers alike. By providing seamless decentralized applications (DApps) and robust smart contract creation without intermediaries, we are committed to fostering transparency, security, and innovation across industries."]}),e.jsxs("p",{className:"content-text",children:[e.jsx("strong",{children:"Why Choose Hrify Digital Ethereum Solutions?"})," Our strategic partnership with Ethereum opens opportunities for industries to leverage decentralized finance (DeFi), supply chain transparency, healthcare, gaming, real estate, and more."]}),e.jsxs("ul",{className:"features-list",children:[e.jsx("li",{children:"Transparent processes for trust and reliability"}),e.jsx("li",{children:"Uncompromising security through robust audits"}),e.jsx("li",{children:"Scalable solutions that grow with your business"}),e.jsx("li",{children:"Accountability through immutable records"})]}),e.jsx("p",{className:"content-text",children:"Our expert team enables businesses to minimize fraud, increase efficiency, and stay ahead in the decentralized ecosystem. With Hrify Digital, you gain access to an evolving infrastructure that delivers real-world value through blockchain technology."}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Schedule a Consultation"})]}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Key Features & Capabilities"}),e.jsx("div",{className:"image-showcase",children:e.jsx("img",{src:"/assets/images/blockchain/blockchain.webp",alt:"Key Features"})}),e.jsxs("p",{className:"content-text",children:[e.jsx("strong",{children:"🚀 Enhanced Scalability:"})," Adopting Ethereum 2.0's Proof-of-Stake and sharding mechanisms, we offer optimized transaction processing and scalability for high-performance decentralized applications."]}),e.jsxs("p",{className:"content-text",children:[e.jsx("strong",{children:"💰 Predictable & Lower Transaction Fees:"})," Utilizing EIP-1559 and Layer 2 solutions, we provide cost-effective and predictable transaction models with customizable options for businesses of any size."]}),e.jsxs("p",{className:"content-text",children:[e.jsx("strong",{children:"🛡️ Smart Contract Security:"})," Formal verification, penetration testing, and third-party audits ensure our smart contracts are secure, reliable, and fully tested before deployment."]}),e.jsxs("p",{className:"content-text",children:[e.jsx("strong",{children:"🔧 Seamless Upgrade Pathways:"})," Our proactive involvement in Ethereum's Improvement Proposals (EIPs) allows us to stay ahead of the curve and deliver seamless upgrades that ensure compatibility and efficiency."]}),e.jsxs("p",{className:"content-text",children:[e.jsx("strong",{children:"👨‍💻 User-Centric Interfaces:"})," We design intuitive interfaces and user-friendly wallets that simplify onboarding for users while integrating Layer 2 scaling solutions for seamless user experiences."]}),e.jsxs("p",{className:"content-text",children:[e.jsx("strong",{children:"📜 Regulatory Compliance:"})," Hrify Digital collaborates with legal teams and regulatory experts to ensure our solutions are compliant with evolving regulations across multiple jurisdictions."]})]})}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Explore Real-World Blockchain Applications"}),e.jsx("div",{className:"image-showcase",children:e.jsx("img",{src:"/assets/images/blockchain/bitcon1.webp",alt:"Blockchain Use Cases"})}),e.jsxs("ul",{className:"features-list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"DeFi Platforms:"})," Peer-to-peer lending, staking, and yield farming with security and transparency."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Supply Chain Management:"})," End-to-end product tracking and verification with immutable blockchain records."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Healthcare:"})," Secure and interoperable electronic health records management with patient privacy."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Real Estate:"})," Tokenization of property assets for fractional ownership and simplified transactions."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Gaming:"})," NFT-based asset ownership and play-to-earn gaming ecosystems on Ethereum."]})]}),e.jsx("h2",{className:"section-title",children:"Innovative Use Cases Powered by Ethereum"}),e.jsxs("ul",{className:"features-list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Cross-Border Payments:"})," Fast and affordable remittance services powered by Ethereum's decentralized network."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Identity Verification:"})," Decentralized Identity (DID) frameworks ensuring secure and verifiable digital identities."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Voting Systems:"})," Transparent and tamper-proof election systems powered by smart contracts."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Charity & Donations:"})," Traceable and transparent fund distribution to ensure accountability in charitable organizations."]})]}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Discover More Solutions"})]})}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"What Our Clients Say"}),e.jsxs("div",{className:"testimonial-grid",children:[e.jsxs("div",{className:"testimonial-card",children:[e.jsx("p",{children:'"Hrify Digital transformed our supply chain transparency with their Ethereum blockchain solutions. We now have real-time product tracking and complete trust from our customers!"'}),e.jsx("div",{className:"testimonial-author",children:"— Rahul V., Supply Chain Manager"})]}),e.jsxs("div",{className:"testimonial-card",children:[e.jsx("p",{children:`"With Hrify Digital's help, we launched our DeFi lending platform in record time. Their smart contract expertise is unmatched!"`}),e.jsx("div",{className:"testimonial-author",children:"— Anjali K., CEO of FinTech Startup"})]}),e.jsxs("div",{className:"testimonial-card",children:[e.jsx("p",{children:'"The team at Hrify Digital guided us through every step of our NFT-based game development. They made complex blockchain technology simple and effective!"'}),e.jsx("div",{className:"testimonial-author",children:"— Varun S., Lead Game Developer"})]})]}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Get Started with Hrify Digital"})]})})]})]}),ey=d("assets/images/newBanner/bl10.webp"),ty=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:ey,alt:"Ethereum Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            .main-title {
              font-size: 2.8rem;
              font-weight: 700;
              color: #1B8DBB;
              text-align: center;
              margin: 4rem 0 1.5rem;
            }

            .main-subtitle {
              text-align: center;
              color: #444;
              max-width: 900px;
              margin: 0 auto 3rem;
              font-size: 1.2rem;
              line-height: 1.7;
            }

            .image-showcase {
              display: flex;
              justify-content: center;
              margin: 4rem 0;
            }

            .image-showcase img {
              max-width: 100%;
              height: auto;
              border-radius: 16px;
              box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            }

            .features-list {
              list-style: none;
              padding: 0;
              max-width: 800px;
              margin: 3rem auto;
            }

            .features-list li {
              padding: 1rem 0;
              font-size: 1.1rem;
              display: flex;
              align-items: center;
              border-bottom: 1px solid #eee;
            }

            .features-list li::before {
              content: "";
              display: inline-block;
              width: 1.5rem;
              height: 1.5rem;
              background: #1B8DBB;
              color: white;
              border-radius: 50%;
              text-align: center;
              line-height: 1.5rem;
              margin-right: 1rem;
              font-weight: bold;
            }

            .features-list li span {
              color: #444;
            }

            .cta-button {
              display: block;
              width: fit-content;
              margin: 4rem auto;
              background: #1B8DBB;
              color: white;
              padding: 0.9rem 2.5rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 600;
              font-size: 1.1rem;
            }

            .cta-button:hover {
              background: #15749A;
            }

            .section {
              padding: 4rem 0;
            }

            .section-title {
              text-align: center;
              font-size: 2.4rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 3rem;
            }

            .content-text {
              max-width: 900px;
              margin: 0 auto 3rem;
              text-align: center;
              color: #555;
              font-size: 1.15rem;
              line-height: 1.8;
            }

            .use-case-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .use-case-card {
              background: #E8F4FA;
              border: 1px solid #B3D9FF;
              border-radius: 16px;
              padding: 2rem;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0,0,0,0.05);
              transition: transform 0.3s ease;
            }

            .use-case-card:hover {
              transform: translateY(-8px);
            }

            .use-case-card h4 {
              font-size: 1.3rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .use-case-card p {
              color: #666;
              line-height: 1.7;
            }

            .testimonial-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 2rem;
              max-width: 1000px;
              margin: 4rem auto;
            }

            @media (min-width: 768px) {
              .testimonial-grid {
                grid-template-columns: repeat(3, 1fr);
              }
            }

            .testimonial-card {
              background: #fafafa;
              border-left: 5px solid #1B8DBB;
              border-radius: 12px;
              padding: 2rem;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
            }

            .testimonial-card p {
              font-style: italic;
              color: #555;
              margin-bottom: 1.5rem;
            }

            .testimonial-author {
              font-weight: 600;
              color: #333;
              text-align: right;
            }
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Empower Your Business with Ethereum Smart Contracts"}),e.jsx("p",{className:"main-subtitle",children:"Secure, scalable, and decentralized solutions powered by Ethereum Blockchain technology."}),e.jsx("div",{className:"image-showcase",children:e.jsx("img",{src:"/assets/images/blockchain/ethereumvector.webp",alt:"Ethereum Network"})}),e.jsx("h2",{className:"section-title",children:"Why Choose Ethereum?"}),e.jsxs("ul",{className:"features-list",children:[e.jsx("li",{children:e.jsx("span",{children:"Unmatched Security with Smart Contract Audits"})}),e.jsx("li",{children:e.jsx("span",{children:"Fast & Scalable Layer 2 Solutions"})}),e.jsx("li",{children:e.jsx("span",{children:"Lower Transaction Costs with Optimized Gas Fees"})}),e.jsx("li",{children:e.jsx("span",{children:"Seamless Integration for DApps & DeFi Platforms"})}),e.jsx("li",{children:e.jsx("span",{children:"Regulatory Compliant & Transparent Solutions"})})]}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Schedule a Demo"})]}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Real-World Applications on Ethereum"}),e.jsxs("div",{className:"use-case-grid",children:[e.jsxs("div",{className:"use-case-card",children:[e.jsx("h4",{children:"DeFi Platforms"}),e.jsx("p",{children:"Enable lending, staking, and yield farming through decentralized finance protocols."})]}),e.jsxs("div",{className:"use-case-card",children:[e.jsx("h4",{children:"Tokenization"}),e.jsx("p",{children:"Fractional ownership of assets including real estate, art, and intellectual property."})]}),e.jsxs("div",{className:"use-case-card",children:[e.jsx("h4",{children:"Supply Chain Transparency"}),e.jsx("p",{children:"Track products end-to-end with tamper-proof records on Ethereum."})]}),e.jsxs("div",{className:"use-case-card",children:[e.jsx("h4",{children:"Healthcare Data"}),e.jsx("p",{children:"Secure and interoperable EHRs to improve data privacy and sharing."})]}),e.jsxs("div",{className:"use-case-card",children:[e.jsx("h4",{children:"Digital Identity Verification"}),e.jsx("p",{children:"Enable secure and decentralized identity management for individuals and organizations."})]}),e.jsxs("div",{className:"use-case-card",children:[e.jsx("h4",{children:"Gaming & NFTs"}),e.jsx("p",{children:"Create and trade NFTs, power play-to-earn models, and ensure asset ownership in blockchain games."})]})]})]})}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"What Our Clients Say"}),e.jsxs("div",{className:"testimonial-grid",children:[e.jsxs("div",{className:"testimonial-card",children:[e.jsx("p",{children:'"Their Ethereum smart contract expertise helped us launch our DeFi platform in record time. Highly recommend!"'}),e.jsx("div",{className:"testimonial-author",children:"— Anjali K., CEO of FinTech Startup"})]}),e.jsxs("div",{className:"testimonial-card",children:[e.jsx("p",{children:'"We streamlined our supply chain using Ethereum-based solutions by this amazing team. Complete transparency and efficiency!"'}),e.jsx("div",{className:"testimonial-author",children:"— Rahul V., Supply Chain Manager"})]}),e.jsxs("div",{className:"testimonial-card",children:[e.jsx("p",{children:'"The NFT marketplace they built for us is intuitive and secure. Ethereum was the right choice!"'}),e.jsx("div",{className:"testimonial-author",children:"— Varun S., Game Developer"})]})]}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Get Started with Ethereum"})]})})]})]});d("assets/images/Banner/newbanimg/Hyperledger.webp");const sy=d("assets/images/newBanner/BL_11.webp"),ny=d("assets/images/blockchain/blockchain.webp"),iy=()=>e.jsxs("main",{children:[e.jsx("div",{className:"slider",children:e.jsx("div",{className:"slides",children:e.jsx("div",{className:"slide",children:e.jsx("img",{src:sy,alt:"Hyperledger Banner"})})})}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            .main-title {
              font-size: 2.8rem;
              font-weight: 700;
              color: #1B8DBB;
              text-align: center;
              margin: 4rem 0 1.5rem;
            }

            .main-subtitle {
              text-align: center;
              color: #444;
              max-width: 900px;
              margin: 0 auto 3rem;
              font-size: 1.2rem;
              line-height: 1.7;
            }

            .image-showcase {
              display: flex;
              justify-content: center;
              margin: 3rem 0; /* Reduced margin */
            }

            .image-showcase img {
              max-width: 700px; /* Medium size instead of full-width large */
              width: 100%;
              height: auto;
              border-radius: 16px;
              box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            }

            @media (max-width: 768px) {
              .image-showcase img {
                max-width: 500px;
              }
            }

            @media (max-width: 576px) {
              .image-showcase img {
                max-width: 100%;
              }
            }

            .cta-button {
              display: block;
              width: fit-content;
              margin: 4rem auto;
              background: #1B8DBB;
              color: white;
              padding: 0.9rem 2.5rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 600;
              font-size: 1.1rem;
            }

            .cta-button:hover {
              background: #15749A;
            }

            .section {
              padding: 4rem 0;
            }

            .section-title {
              text-align: center;
              font-size: 2.4rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 3rem;
            }

            .section-intro {
              text-align: center;
              max-width: 900px;
              margin: 0 auto 4rem;
              color: #555;
              font-size: 1.1rem;
              line-height: 1.8;
            }

            .process-grid,
            .benefits-grid,
            .industries-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .process-card,
            .benefit-card,
            .industry-card {
              background: white;
              border-top: 4px solid #1B8DBB;
              border-radius: 16px;
              padding: 2rem;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: transform 0.3s ease;
            }

            .process-card:hover,
            .benefit-card:hover,
            .industry-card:hover {
              transform: translateY(-8px);
            }

            .process-card h3,
            .benefit-card h3,
            .industry-card h3 {
              font-size: 1.4rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .process-card p,
            .benefit-card p,
            .industry-card p {
              color: #666;
              line-height: 1.7;
            }

            .testimonial-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 2rem;
              max-width: 1000px;
              margin: 4rem auto;
            }

            @media (min-width: 768px) {
              .testimonial-grid {
                grid-template-columns: repeat(3, 1fr);
              }
            }

            .testimonial-card {
              background: #fafafa;
              border-left: 5px solid #1B8DBB;
              border-radius: 12px;
              padding: 2rem;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
            }

            .testimonial-card p {
              font-style: italic;
              color: #555;
              margin-bottom: 1.5rem;
            }

            .testimonial-author {
              font-weight: 600;
              color: #333;
              text-align: right;
            }

            .final-cta {
              background: linear-gradient(135deg, #1B8DBB, #15749A);
              color: white;
              padding: 5rem 0;
              text-align: center;
              border-radius: 16px;
              margin: 4rem 0;
            }

            .final-cta h2 {
              font-size: 2.5rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
            }

            .final-cta p {
              font-size: 1.3rem;
              max-width: 800px;
              margin: 0 auto 2.5rem;
              opacity: 0.95;
            }

            .btn-white {
              background: white;
              color: #1B8DBB;
              padding: 1rem 2.5rem;
              border-radius: 9999px;
              font-weight: 600;
              font-size: 1.1rem;
              text-decoration: none;
            }

            .btn-white:hover {
              background: #f0f0f0;
            }
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Empower Your Enterprise with Hyperledger"}),e.jsx("p",{className:"main-subtitle",children:"Unlock the future of secure and scalable blockchain solutions with Hyperledger technology."}),e.jsx("div",{className:"image-showcase",children:e.jsx("img",{src:ny,alt:"Enterprise Blockchain Solution"})})]}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Our Process"}),e.jsx("p",{className:"section-intro",children:"From idea to implementation, we deliver secure blockchain solutions tailored to your business needs."}),e.jsxs("div",{className:"process-grid",children:[e.jsxs("div",{className:"process-card",children:[e.jsx("h3",{children:"Discovery & Planning"}),e.jsx("p",{children:"Analyze your business challenges and identify how Hyperledger can drive efficiency and security."})]}),e.jsxs("div",{className:"process-card",children:[e.jsx("h3",{children:"Development"}),e.jsx("p",{children:"Design and build customized blockchain solutions leveraging Hyperledger frameworks."})]}),e.jsxs("div",{className:"process-card",children:[e.jsx("h3",{children:"Integration"}),e.jsx("p",{children:"Integrate blockchain seamlessly with your existing systems, ensuring smooth data flow and transparency."})]}),e.jsxs("div",{className:"process-card",children:[e.jsx("h3",{children:"Deployment & Support"}),e.jsx("p",{children:"Deploy robust solutions with ongoing monitoring, updates, and support to ensure continued success."})]})]})]})}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Key Benefits"}),e.jsx("p",{className:"section-intro",children:"Why choose Hyperledger for your enterprise blockchain solution?"}),e.jsxs("div",{className:"benefits-grid",children:[e.jsxs("div",{className:"benefit-card",children:[e.jsx("h3",{children:"Enhanced Security"}),e.jsx("p",{children:"Permissioned networks ensure data privacy and control over sensitive business transactions."})]}),e.jsxs("div",{className:"benefit-card",children:[e.jsx("h3",{children:"Scalable & Modular"}),e.jsx("p",{children:"Hyperledger frameworks offer scalability and flexibility to meet evolving business demands."})]}),e.jsxs("div",{className:"benefit-card",children:[e.jsx("h3",{children:"Faster Transactions"}),e.jsx("p",{children:"Streamline processes and reduce transaction time with distributed ledger technology."})]}),e.jsxs("div",{className:"benefit-card",children:[e.jsx("h3",{children:"Cost Efficiency"}),e.jsx("p",{children:"Lower operational costs by reducing intermediaries and automating complex processes."})]})]})]})}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Industries We Serve"}),e.jsx("p",{className:"section-intro",children:"Hyperledger solutions designed for a variety of industries."}),e.jsxs("div",{className:"industries-grid",children:[e.jsxs("div",{className:"industry-card",children:[e.jsx("h3",{children:"Finance & Banking"}),e.jsx("p",{children:"Enhance transparency and security for cross-border payments, KYC, and asset management."})]}),e.jsxs("div",{className:"industry-card",children:[e.jsx("h3",{children:"Healthcare"}),e.jsx("p",{children:"Enable secure data sharing, patient consent management, and interoperable EHR systems."})]}),e.jsxs("div",{className:"industry-card",children:[e.jsx("h3",{children:"Supply Chain"}),e.jsx("p",{children:"Track and trace goods from source to destination with real-time verification and trust."})]}),e.jsxs("div",{className:"industry-card",children:[e.jsx("h3",{children:"Government"}),e.jsx("p",{children:"Digitize public services, improve identity verification, and ensure transparent governance."})]})]})]})}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"What Our Clients Say"}),e.jsxs("div",{className:"testimonial-grid",children:[e.jsxs("div",{className:"testimonial-card",children:[e.jsx("p",{children:'"The Hyperledger solution they implemented streamlined our entire supply chain process. We now have complete transparency and trust in our data!"'}),e.jsx("div",{className:"testimonial-author",children:"— Rohan M., Supply Chain Director"})]}),e.jsxs("div",{className:"testimonial-card",children:[e.jsx("p",{children:'"We successfully launched our blockchain-based health record system. Data privacy and interoperability have improved significantly!"'}),e.jsx("div",{className:"testimonial-author",children:"— Dr. Priya S., Healthcare Administrator"})]}),e.jsxs("div",{className:"testimonial-card",children:[e.jsx("p",{children:'"Their expertise in Hyperledger helped us modernize government services with secure digital identity management."'}),e.jsx("div",{className:"testimonial-author",children:"— Arun K., E-Governance Consultant"})]})]})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Ready to Start Your Blockchain Journey?"}),e.jsx("p",{children:"Partner with us to implement enterprise-grade blockchain solutions powered by Hyperledger."}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Get a Free Consultation"})]})})]})]}),ry=d("assets/images/newBanner/bl12.webp");d("assets/images/Banner/newbanimg/dapps.webp");const ay=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:ry,alt:"DApps Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            .main-title {
              font-size: 2.8rem;
              font-weight: 700;
              color: #1B8DBB;
              text-align: center;
              margin: 4rem 0 1.5rem;
            }

            .main-subtitle {
              text-align: center;
              color: #444;
              max-width: 900px;
              margin: 0 auto 3rem;
              font-size: 1.2rem;
              line-height: 1.7;
            }

            .cta-button {
              display: block;
              width: fit-content;
              margin: 4rem auto;
              background: #1B8DBB;
              color: white;
              padding: 0.9rem 2.5rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 600;
              font-size: 1.1rem;
            }

            .cta-button:hover {
              background: #15749A;
            }

            .section {
              padding: 4rem 0;
            }

            .section-title {
              text-align: center;
              font-size: 2.4rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 3rem;
            }

            .section-intro {
              text-align: center;
              max-width: 900px;
              margin: 0 auto 4rem;
              color: #555;
              font-size: 1.1rem;
              line-height: 1.8;
            }

            .benefits-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .benefit-card {
              background: white;
              border-radius: 16px;
              padding: 2.5rem 2rem;
              text-align: center;
              box-shadow: 0 8px 30px rgba(27, 141, 187, 0.1);
              transition: transform 0.3s ease;
            }

            .benefit-card:hover {
              transform: translateY(-10px);
            }

            .benefit-card i {
              font-size: 3rem;
              color: #1B8DBB;
              margin-bottom: 1.5rem;
            }

            .benefit-card h3 {
              font-size: 1.4rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .benefit-card p {
              color: #666;
              line-height: 1.7;
            }

            .features-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .feature-card {
              background: #1B8DBB;
              border-radius: 16px;
              padding: 2rem;
              border: 1px solid #B3D9FF;
              transition: border-color 0.3s ease;
            }

            .feature-card:hover {
              border-color: white;
            }

            .feature-card h3 {
              color: white;
              font-size: 1.4rem;
              font-weight: 600;
              margin-bottom: 1rem;
            }

            .feature-card p {
              color: #E8F4FA;
              line-height: 1.7;
            }

            .industries-list {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .industry-card {
              background: white;
              border-radius: 16px;
              padding: 2rem;
              text-align: center;
              box-shadow: 0 6px 20px rgba(27, 141, 187, 0.15);
              transition: transform 0.3s ease;
            }

            .industry-card:hover {
              transform: translateY(-8px);
            }

            .industry-card h4 {
              font-size: 1.3rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .industry-card p {
              color: #666;
              line-height: 1.7;
            }

            .final-cta {
              background: linear-gradient(135deg, #1B8DBB, #15749A);
              color: white;
              padding: 5rem 0;
              text-align: center;
              border-radius: 16px;
              margin: 4rem 0;
            }

            .final-cta h2 {
              font-size: 2.5rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
            }

            .final-cta p {
              font-size: 1.3rem;
              max-width: 800px;
              margin: 0 auto 2.5rem;
              opacity: 0.95;
            }

            .btn-white {
              background: white;
              color: #1B8DBB;
              padding: 1rem 2.5rem;
              border-radius: 9999px;
              font-weight: 600;
              font-size: 1.1rem;
              text-decoration: none;
            }

            .btn-white:hover {
              background: #f0f0f0;
            }
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Unleash DApps Power for Your Business"}),e.jsx("p",{className:"main-subtitle",children:"We deliver cutting-edge decentralized applications with secure, scalable blockchain solutions tailored to your needs."}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Get Started"})]}),e.jsx("section",{className:"section",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"benefits-grid",children:[e.jsxs("div",{className:"benefit-card",children:[e.jsx("i",{className:"fas fa-lock"}),e.jsx("h3",{children:"Secure & Transparent"}),e.jsx("p",{children:"Enjoy unparalleled security and transparency with blockchain-backed decentralized applications."})]}),e.jsxs("div",{className:"benefit-card",children:[e.jsx("i",{className:"fas fa-coins"}),e.jsx("h3",{children:"Reduced Costs"}),e.jsx("p",{children:"Streamline operations and reduce fees by eliminating middlemen with automated smart contracts."})]}),e.jsxs("div",{className:"benefit-card",children:[e.jsx("i",{className:"fas fa-network-wired"}),e.jsx("h3",{children:"Global Access"}),e.jsx("p",{children:"Reach users worldwide anytime, with 24/7 decentralized systems that never sleep."})]}),e.jsxs("div",{className:"benefit-card",children:[e.jsx("i",{className:"fas fa-cogs"}),e.jsx("h3",{children:"Flexible Solutions"}),e.jsx("p",{children:"We design DApps to fit your industry and specific business needs, ensuring perfect integration."})]})]})})}),e.jsx("section",{className:"section",style:{backgroundColor:"white"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"DApp Features You Can Trust"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("h3",{children:"Smart Contract Creation"}),e.jsx("p",{children:"Robust, tamper-proof contracts to automate processes, ensuring reliability and security."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h3",{children:"Custom Token Launch"}),e.jsx("p",{children:"Launch your native tokens or NFTs to unlock new opportunities and customer engagement."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h3",{children:"DeFi Solutions"}),e.jsx("p",{children:"Build decentralized finance platforms for lending, staking, and seamless financial services."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h3",{children:"Scalable Blockchain Networks"}),e.jsx("p",{children:"From Ethereum to Polygon, we build on the most trusted blockchains for scalability and speed."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h3",{children:"Wallet Integration"}),e.jsx("p",{children:"Seamlessly integrate popular crypto wallets like MetaMask for easy and secure user transactions."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h3",{children:"DAO Development"}),e.jsx("p",{children:"Empower your community with decentralized autonomous organization (DAO) platforms for transparent governance."})]})]})]})}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Industries We Empower"}),e.jsxs("div",{className:"industries-list",children:[e.jsxs("div",{className:"industry-card",children:[e.jsx("h4",{children:"Finance & DeFi"}),e.jsx("p",{children:"Revolutionize financial services with decentralized and peer-to-peer transactions."})]}),e.jsxs("div",{className:"industry-card",children:[e.jsx("h4",{children:"Healthcare"}),e.jsx("p",{children:"Protect sensitive data and streamline healthcare processes with secure DApps."})]}),e.jsxs("div",{className:"industry-card",children:[e.jsx("h4",{children:"Supply Chain"}),e.jsx("p",{children:"Ensure end-to-end transparency and traceability across your supply chain networks."})]}),e.jsxs("div",{className:"industry-card",children:[e.jsx("h4",{children:"Gaming & Metaverse"}),e.jsx("p",{children:"Develop NFT economies and immersive experiences for the next-gen virtual world."})]}),e.jsxs("div",{className:"industry-card",children:[e.jsx("h4",{children:"Real Estate"}),e.jsx("p",{children:"Automate real estate deals with secure smart contracts and reduce paperwork."})]})]})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Ready to Embrace the Future?"}),e.jsx("p",{children:"Let us build your decentralized app today. Book a free consultation and take the first step!"}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Schedule Now"})]})})]})]}),ly=d("assets/images/newBanner/bl8.webp");d("assets/images/Banner/newbanimg/nft.webp");const oy=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:ly,alt:"NFT Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            .main-title {
              font-size: 2.8rem;
              font-weight: 700;
              color: #1B8DBB;
              text-align: center;
              margin: 4rem 0 1.5rem;
            }

            .main-subtitle {
              text-align: center;
              color: #444;
              max-width: 900px;
              margin: 0 auto 3rem;
              font-size: 1.2rem;
              line-height: 1.7;
            }

            .tags-container {
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              gap: 1rem;
              margin: 4rem 0;
            }

            .tag-btn {
              background-color: #1B8DBB;
              color: white;
              padding: 0.7rem 1.8rem;
              border-radius: 9999px;
              font-size: 1.1rem;
              font-weight: 600;
            }

            .cta-button {
              display: block;
              width: fit-content;
              margin: 4rem auto;
              background: #1B8DBB;
              color: white;
              padding: 0.9rem 2.5rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 600;
              font-size: 1.1rem;
            }

            .cta-button:hover {
              background: #15749A;
            }

            .section {
              padding: 4rem 0;
            }

            .section-title {
              text-align: center;
              font-size: 2.4rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 3rem;
            }

            .section-intro {
              text-align: center;
              max-width: 900px;
              margin: 0 auto 4rem;
              color: #555;
              font-size: 1.1rem;
              line-height: 1.8;
            }

            .service-card {
              background: #E8F4FA;
              border-radius: 16px;
              padding: 3rem;
              box-shadow: 0 8px 25px rgba(27, 141, 187, 0.1);
              text-align: center;
              max-width: 1000px;
              margin: 0 auto;
            }

            .service-card p {
              font-size: 1.15rem;
              line-height: 1.8;
              color: #444;
              margin-bottom: 2rem;
            }

            .features-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .feature-card {
              background: white;
              border: 1px solid #B3D9FF;
              border-radius: 16px;
              padding: 2rem;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: border-color 0.3s ease;
            }

            .feature-card:hover {
              border-color: #1B8DBB;
            }

            .feature-card h4 {
              font-size: 1.3rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .feature-card p {
              color: #666;
              line-height: 1.7;
            }

            .final-cta {
              background: linear-gradient(135deg, #1B8DBB, #15749A);
              color: white;
              padding: 5rem 0;
              text-align: center;
              border-radius: 16px;
              margin: 4rem 0;
            }

            .final-cta h2 {
              font-size: 2.5rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
            }

            .final-cta p {
              font-size: 1.3rem;
              max-width: 800px;
              margin: 0 auto 2.5rem;
              opacity: 0.95;
            }

            .btn-white {
              background: white;
              color: #1B8DBB;
              padding: 1rem 2.5rem;
              border-radius: 9999px;
              font-weight: 600;
              font-size: 1.1rem;
              text-decoration: none;
            }

            .btn-white:hover {
              background: #f0f0f0;
            }
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Unleash the Power of NFTs for Your Business"}),e.jsx("p",{className:"main-subtitle",children:"We craft innovative NFT solutions to help you engage audiences, create value, and lead the decentralized future."}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Get Started"})]}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Claim Unique Ownership for Your Digital Assets With NFT"}),e.jsx("p",{className:"section-intro",children:"Utilize NFT services on blockchain to acquire ownership of all your digital assets and virtual items with unique cryptographic tokens built for authenticity."}),e.jsxs("div",{className:"tags-container",children:[e.jsx("div",{className:"tag-btn",children:"Unique Digital Assets"}),e.jsx("div",{className:"tag-btn",children:"Blockchain Authentication"}),e.jsx("div",{className:"tag-btn",children:"Ownership"}),e.jsx("div",{className:"tag-btn",children:"Blockchain Services"})]}),e.jsxs("div",{className:"service-card",children:[e.jsx("p",{children:"Discover Hrify Digital's NFT services, offering a seamless solution for digital asset ownership and secure exchanges. Safeguard your NFTs hassle-free, with easy ownership claims and smooth transfers during selling."}),e.jsx("p",{children:"Hrify Digital cutting-edge NFT services can help protect your creative work, whether it is your digital art, music album, design, or property, making hefty processes like ownership claims and transactions easier than ever in the digital marketplace. Our expert team offers user-friendly interfaces, eco-conscious practices, and secure blockchain technology to ensure a seamless experience for our users. With Hrify Digital NFT services, you can protect your intellectual property and enjoy the benefits of automated royalties while exploring exclusive partnerships and cross-chain support for added value."}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Schedule a Consultation"})]}),e.jsx("h2",{className:"section-title",children:"Support Features"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Copyright & IP Protection"}),e.jsx("p",{children:"Hrify Digital automatically allocates a percentage of secondary sales to creators through smart contracts and implements a robust DRM system for intellectual property protection."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Security Concerns"}),e.jsx("p",{children:"Hrify Digital conducts regular security audits, offers optional cold wallet storage, and strongly focuses on user asset protection."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Environmental Impact"}),e.jsx("p",{children:"Hrify Digital migrates to a proof-of-stake blockchain and supports environmental initiatives to offset the platform's carbon footprint."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Cost of Transactions"}),e.jsx("p",{children:"Hrify Digital optimizes gas fees through efficient smart contract coding and implements Layer 2 scaling solutions for cost-effectiveness."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Regulatory Compliance"}),e.jsx("p",{children:"Hrify Digital collaborates with legal experts, communicates platform policies transparently, and ensures compliance with relevant regulations."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Optimizing Market Saturation"}),e.jsx("p",{children:"Hrify Digital forms exclusive partnerships with renowned creators and emphasizes the long-term value and utility of NFTs."})]})]})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Ready to Embrace the Future?"}),e.jsx("p",{children:"Let us build your NFT solution today. Book a free consultation and take the first step!"}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Schedule Now"})]})})]})]}),cy=d("assets/images/newBanner/bl9.webp");d("assets/images/Banner/newbanimg/ipfs.webp");const dy=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:cy,alt:"IPFS Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            .main-title {
              font-size: 2.8rem;
              font-weight: 700;
              color: #1B8DBB;
              text-align: center;
              margin: 4rem 0 1.5rem;
            }

            .main-subtitle {
              text-align: center;
              color: #444;
              max-width: 900px;
              margin: 0 auto 3rem;
              font-size: 1.2rem;
              line-height: 1.7;
            }

            .image-showcase {
              display: flex;
              justify-content: center;
              margin: 3rem 0;
            }

            .image-showcase img {
              max-width: 700px;
              width: 100%;
              height: auto;
              border-radius: 16px;
              box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            }

            @media (max-width: 768px) {
              .image-showcase img {
                max-width: 500px;
              }
            }

            @media (max-width: 576px) {
              .image-showcase img {
                max-width: 100%;
              }
            }

            .cta-button {
              display: block;
              width: fit-content;
              margin: 4rem auto;
              background: #1B8DBB;
              color: white;
              padding: 0.9rem 2.5rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 600;
              font-size: 1.1rem;
            }

            .cta-button:hover {
              background: #15749A;
            }

            .section {
              padding: 4rem 0;
            }

            .section-title {
              text-align: center;
              font-size: 2.4rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 3rem;
            }

            .section-intro {
              text-align: center;
              max-width: 900px;
              margin: 0 auto 4rem;
              color: #555;
              font-size: 1.1rem;
              line-height: 1.8;
            }

            .about-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 4rem;
              align-items: center;
              max-width: 1200px;
              margin: 4rem auto;
            }

            @media (max-width: 992px) {
              .about-grid {
                grid-template-columns: 1fr;
                text-align: center;
              }
            }

            .about-text h2 {
              font-size: 2.2rem;
              color: #1B8DBB;
              margin-bottom: 1.5rem;
            }

            .features-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .feature-card {
              background: white;
              border: 2px solid #1B8DBB;
              border-radius: 16px;
              padding: 2rem;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: transform 0.3s ease;
            }

            .feature-card:hover {
              transform: translateY(-8px);
            }

            .feature-card h3 {
              font-size: 1.4rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .feature-card p {
              color: #666;
              line-height: 1.7;
            }

            .final-cta {
              background: linear-gradient(135deg, #1B8DBB, #15749A);
              color: white;
              padding: 5rem 0;
              text-align: center;
              border-radius: 16px;
              margin: 4rem 0;
            }

            .final-cta h2 {
              font-size: 2.5rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
            }

            .final-cta p {
              font-size: 1.3rem;
              max-width: 800px;
              margin: 0 auto 2.5rem;
              opacity: 0.95;
            }

            .btn-white {
              background: white;
              color: #1B8DBB;
              padding: 1rem 2.5rem;
              border-radius: 9999px;
              font-weight: 600;
              font-size: 1.1rem;
              text-decoration: none;
            }

            .btn-white:hover {
              background: #f0f0f0;
            }
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Faster, Safer & Decentralized Web With IPFS"}),e.jsx("p",{className:"main-subtitle",children:"Eliminate centralized servers, accelerate content delivery, and scale applications efficiently with Hrify Digital IPFS solutions."}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Get Started"})]}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Why Choose IPFS?"}),e.jsxs("div",{className:"about-grid",children:[e.jsxs("div",{className:"about-text",children:[e.jsx("p",{className:"section-intro",children:"IPFS revolutionizes web storage by tracking file versions, enabling direct interactions, and removing reliance on centralized servers. Hrify Digital solution ensures reliable access, privacy, and decentralized file sharing."}),e.jsx("p",{className:"section-intro",children:"With blockchain integration, advanced encryption, and efficient content delivery, we provide an optimal storage system that enhances security while reducing costs."}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Learn More"})]}),e.jsx("div",{className:"image-showcase",children:e.jsx("img",{src:"/assets/images/blockchain/blockchain.webp",alt:"IPFS Storage"})})]})]})}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Key Features"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("h3",{children:"Decentralized Storage"}),e.jsx("p",{children:"IPFS removes reliance on a single server, ensuring your data is always available."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h3",{children:"Enhanced Security"}),e.jsx("p",{children:"Data encryption and blockchain integration protect your digital assets from unauthorized access."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h3",{children:"Scalability"}),e.jsx("p",{children:"Designed to support high traffic and large-scale applications without slowdowns."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h3",{children:"Efficient File Sharing"}),e.jsx("p",{children:"Quick and direct peer-to-peer transfers make data retrieval seamless."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h3",{children:"Version Control"}),e.jsx("p",{children:"IPFS ensures access to past versions of files, preventing accidental data loss."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h3",{children:"Cost Optimization"}),e.jsx("p",{children:"Storage costs are reduced by leveraging decentralized providers."})]})]})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Secure Your Data With IPFS"}),e.jsx("p",{children:"Join the decentralized web revolution with Hrify Digital advanced storage solutions."}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Schedule a Consultation"})]})})]})]}),my=d("assets/images/newBanner/enterprise.webp");d("assets/images/Banner/newbanimg/enterprise.webp");const uy=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:my,alt:"Enterprise Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            .main-title {
              font-size: 2.8rem;
              font-weight: 700;
              color: #1B8DBB;
              text-align: center;
              margin: 4rem 0 1.5rem;
            }

            .main-subtitle {
              text-align: center;
              color: #444;
              max-width: 900px;
              margin: 0 auto 3rem;
              font-size: 1.2rem;
              line-height: 1.7;
            }

            .cta-button {
              display: block;
              width: fit-content;
              margin: 4rem auto;
              background: #1B8DBB;
              color: white;
              padding: 0.9rem 2.5rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 600;
              font-size: 1.1rem;
            }

            .cta-button:hover {
              background: #15749A;
            }

            .section {
              padding: 4rem 0;
            }

            .section-title {
              text-align: center;
              font-size: 2.4rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 3rem;
            }

            .section-intro {
              text-align: center;
              max-width: 900px;
              margin: 0 auto 4rem;
              color: #555;
              font-size: 1.1rem;
              line-height: 1.8;
            }

            .features-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              gap: 2rem;
              max-width: 1400px;
              margin: 4rem auto;
            }

            .feature-card {
              background: white;
              border-radius: 16px;
              padding: 2.5rem 2rem;
              text-align: center;
              box-shadow: 0 8px 25px rgba(0,0,0,0.08);
              transition: transform 0.3s ease;
            }

            .feature-card:hover {
              transform: translateY(-10px);
            }

            .feature-card img {
              width: 120px;
              height: 120px;
              object-fit: contain;
              margin-bottom: 1.5rem;
            }

            .feature-card h4 {
              font-size: 1.4rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .feature-card p {
              color: #666;
              line-height: 1.7;
            }

            .benefits-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .benefit-card {
              background: linear-gradient(135deg, #1B8DBB, #15749A);
              color: white;
              border-radius: 16px;
              padding: 2.5rem;
              text-align: left;
              box-shadow: 0 8px 25px rgba(0,0,0,0.15);
              transition: transform 0.3s ease;
            }

            .benefit-card:hover {
              transform: translateY(-8px);
            }

            .benefit-number {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              width: 50px;
              height: 50px;
              background: rgba(255,255,255,0.2);
              border-radius: 50%;
              font-size: 1.4rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
            }

            .benefit-card h4 {
              font-size: 1.4rem;
              margin-bottom: 1rem;
            }

            .benefit-card p {
              opacity: 0.95;
              line-height: 1.7;
            }

            .empower-list {
              max-width: 900px;
              margin: 4rem auto;
              padding: 0 2rem;
            }

            .empower-list li {
              font-size: 1.2rem;
              margin-bottom: 1.5rem;
              padding-left: 2rem;
              position: relative;
              color: #555;
            }

            .empower-list li::before {
              content: '→';
              position: absolute;
              left: 0;
              color: #1B8DBB;
              font-size: 1.5rem;
              font-weight: bold;
            }

            .empower-list strong {
              color: #1B8DBB;
            }

            .final-cta {
              background: linear-gradient(135deg, #1B8DBB, #15749A);
              color: white;
              padding: 5rem 0;
              text-align: center;
              border-radius: 16px;
              margin: 4rem 0;
            }

            .final-cta h2 {
              font-size: 2.5rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
            }

            .final-cta p {
              font-size: 1.3rem;
              max-width: 800px;
              margin: 0 auto 2.5rem;
              opacity: 0.95;
            }

            .btn-white {
              background: white;
              color: #1B8DBB;
              padding: 1rem 2.5rem;
              border-radius: 9999px;
              font-weight: 600;
              font-size: 1.1rem;
              text-decoration: none;
            }

            .btn-white:hover {
              background: #f0f0f0;
            }
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Streamline Your Business with Hrify ERP Solutions"}),e.jsx("p",{className:"main-subtitle",children:"Experience seamless integration of finance, HR, operations, and more ERP. Manage every aspect of your business efficiently and effectively, all from a single, powerful platform."}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Explore Features"})]}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Transform Your Business with Hrify ERP"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("img",{src:"/assets/images/erp/finace.png",alt:"Finance Management"}),e.jsx("h4",{children:"Finance Management"}),e.jsx("p",{children:"Streamline financial operations, manage budgets, automate financial reporting, and ensure cash flow for better decision-making."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("img",{src:"/assets/images/erp/procumment.png",alt:"Procurement Simplified"}),e.jsx("h4",{children:"Procurement Simplified"}),e.jsx("p",{children:"Streamline vendor management, automate procurement processes, and ensure cost-effective purchasing."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("img",{src:"/assets/images/erp/inventory.png",alt:"Inventory Control"}),e.jsx("h4",{children:"Inventory Control"}),e.jsx("p",{children:"Monitor stock levels, manage inventory across multiple locations, and ensure optimal stock with real-time tracking."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("img",{src:"/assets/images/erp/hrm.png",alt:"Human Resource Management"}),e.jsx("h4",{children:"Human Resource Management"}),e.jsx("p",{children:"Simplify HR tasks, manage employee records, payroll, and performance seamlessly on a unified platform."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("img",{src:"/assets/images/erp/crm.png",alt:"Customer Relationship Management"}),e.jsx("h4",{children:"Customer Relationship Management"}),e.jsx("p",{children:"Build and manage customer relationships, track sales, and drive actionable insights with CRM tools."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("img",{src:"/assets/images/erp/vendormanagement.jpg",alt:"Supply Chain Optimization"}),e.jsx("h4",{children:"Supply Chain Optimization"}),e.jsx("p",{children:"Enhance supply chain efficiency, improve demand planning, and reduce operational costs in real-time."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("img",{src:"/assets/images/erp/warehouse.png",alt:"Warehouse Management"}),e.jsx("h4",{children:"Warehouse Management"}),e.jsx("p",{children:"Optimize warehouse operations, improve inventory tracking, and manage storage efficiently."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("img",{src:"/assets/images/erp/marketing.png",alt:"Marketing Automation"}),e.jsx("h4",{children:"Marketing Automation"}),e.jsx("p",{children:"Automate marketing campaigns, monitor lead generation, and measure ROI effortlessly."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("img",{src:"/assets/images/erp/procumment.png",alt:"E-commerce Integration"}),e.jsx("h4",{children:"E-commerce Integration"}),e.jsx("p",{children:"Integrate seamlessly with e-commerce platforms, manage orders, and sync inventory with ease."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("img",{src:"/assets/images/erp/bi.png",alt:"Business Intelligence"}),e.jsx("h4",{children:"Business Intelligence"}),e.jsx("p",{children:"Unlock actionable insights with advanced analytics, reporting, and data-driven strategies for growth."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("img",{src:"/assets/images/erp/rolebasedaccess.png",alt:"Role-Based Access"}),e.jsx("h4",{children:"Role-Based Access"}),e.jsx("p",{children:"Ensure data security with role-specific access to sensitive data and features."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("img",{src:"/assets/images/erp/mobilefrendly.png",alt:"Mobile Accessibility"}),e.jsx("h4",{children:"Mobile Accessibility"}),e.jsx("p",{children:"Access Hrify ERP on the go with a user-friendly mobile app, anywhere, anytime."})]})]})]})}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Unlock Your Business Potential with Our Game-Changing ERP Software"}),e.jsxs("div",{className:"benefits-grid",children:[e.jsxs("div",{className:"benefit-card",children:[e.jsx("div",{className:"benefit-number",children:"1"}),e.jsx("h4",{children:"User-Friendly Interface"}),e.jsx("p",{children:"Our intuitive design ensures easy navigation and quick adoption for all users, enhancing productivity."})]}),e.jsxs("div",{className:"benefit-card",children:[e.jsx("div",{className:"benefit-number",children:"2"}),e.jsx("h4",{children:"Seamless Management"}),e.jsx("p",{children:"Integrate and manage all business operations—finance, HR, inventory, and more—from a single platform."})]}),e.jsxs("div",{className:"benefit-card",children:[e.jsx("div",{className:"benefit-number",children:"3"}),e.jsx("h4",{children:"Tailored for Every Industry"}),e.jsx("p",{children:"Customizable solutions to meet the unique needs of various industries, ensuring flexibility and scalability."})]})]})]})}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Empower Your Business with Hrify ERP"}),e.jsxs("ul",{className:"empower-list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Reduce Manual Work and Human Errors:"})," Automate processes to increase efficiency and accuracy, minimizing human errors."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Access Real-Time Data:"})," Stay updated with live data, enabling smarter and more timely decisions."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Scale Seamlessly as Your Business Grows:"})," Hrify Digital ERP adapts to your growing business, ensuring consistent performance as you expand."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"24/7 Access to All Modules:"})," Stay connected and manage your business from anywhere, at any time."]})]})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Ready to Transform Your Business?"}),e.jsx("p",{children:"Partner with us to implement powerful, scalable ERP solutions tailored to your enterprise."}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Get a Free Consultation"})]})})]})]}),hy=d("assets/images/newBanner/cy10.webp");d("assets/images/security-management.webp");const py=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:hy,alt:"Security Management Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            .main-title {
              font-size: 2.8rem;
              font-weight: 700;
              color: #1B8DBB;
              text-align: center;
              margin: 4rem 0 1.5rem;
            }

            .main-subtitle {
              text-align: center;
              color: #444;
              max-width: 900px;
              margin: 0 auto 3rem;
              font-size: 1.2rem;
              line-height: 1.7;
            }

            .tags-container {
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              gap: 1rem;
              margin: 4rem 0;
            }

            .tag-btn {
              background-color: #1B8DBB;
              color: white;
              padding: 0.7rem 1.8rem;
              border-radius: 9999px;
              font-size: 1.1rem;
              font-weight: 600;
            }

            .cta-button {
              display: block;
              width: fit-content;
              margin: 4rem auto;
              background: #1B8DBB;
              color: white;
              padding: 0.9rem 2.5rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 600;
              font-size: 1.1rem;
            }

            .cta-button:hover {
              background: #15749A;
            }

            .section {
              padding: 4rem 0;
            }

            .section-title {
              text-align: center;
              font-size: 2.4rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 3rem;
            }

            .section-intro {
              text-align: center;
              max-width: 900px;
              margin: 0 auto 4rem;
              color: #555;
              font-size: 1.1rem;
              line-height: 1.8;
            }

            .service-card {
              background: white;
              border-radius: 16px;
              padding: 3rem;
              box-shadow: 0 8px 25px rgba(0,0,0,0.1);
              text-align: center;
              max-width: 1000px;
              margin: 0 auto;
            }

            .service-card p {
              font-size: 1.15rem;
              line-height: 1.8;
              color: #444;
              margin-bottom: 2rem;
            }

            .managed-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .managed-card {
              background: white;
              border-radius: 16px;
              padding: 2rem;
              text-align: left;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: transform 0.3s ease;
            }

            .managed-card:hover {
              transform: translateY(-8px);
            }

            .managed-card h4 {
              font-size: 1.4rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .managed-card p {
              color: #666;
              line-height: 1.7;
              margin-bottom: 1.5rem;
            }

            .managed-card a {
              color: #1B8DBB;
              font-weight: 600;
              text-decoration: none;
            }

            .managed-card a:hover {
              text-decoration: underline;
            }
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Managed Services"}),e.jsx("p",{className:"main-subtitle",children:"Protect Your Investments & Accelerate The Outcomes With Managed Services"}),e.jsx("p",{className:"main-subtitle",children:"Boost success and keep your business ahead with trusted managed services."}),e.jsxs("div",{className:"tags-container",children:[e.jsx("div",{className:"tag-btn",children:"Cloud Managed Services"}),e.jsx("div",{className:"tag-btn",children:"Endpoint Management"}),e.jsx("div",{className:"tag-btn",children:"Data Center Management"})]}),e.jsx("p",{className:"section-intro",children:"In today's volatile business environment, having a dependable IT infrastructure to support your operations is critical. With Hrify Digital managed services, businesses can ensure their systems run efficiently and securely."})]}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"managed-grid",children:[e.jsxs("div",{className:"managed-card",children:[e.jsx("h4",{children:"Security Management"}),e.jsx("p",{children:"Fortifying Your Business at Every Step"}),e.jsx("a",{href:"/securitymanagement",children:"Know More →"})]}),e.jsxs("div",{className:"managed-card",children:[e.jsx("h4",{children:"Monitoring & Maintenance"}),e.jsx("p",{children:"Maximize Performance With the Full Spectrum of Monitoring & Maintenance"}),e.jsx("a",{href:"/monitoringmaintenance",children:"Know More →"})]}),e.jsxs("div",{className:"managed-card",children:[e.jsx("h4",{children:"Cloud Services"}),e.jsx("p",{children:"Empower A Seamless Business With Hrify Digital Cloud Services"}),e.jsx("a",{href:"/cloudnative",children:"Know More →"})]}),e.jsxs("div",{className:"managed-card",children:[e.jsx("h4",{children:"Vendor Management"}),e.jsx("p",{children:"Streamline Your IT Operations With Vendor Management Expertise"}),e.jsx("a",{href:"/vendormanagement",children:"Know More →"})]}),e.jsxs("div",{className:"managed-card",children:[e.jsx("h4",{children:"Site Reliability Engineering"}),e.jsx("p",{children:"Embrace The Unwavering Software Performance With Hrify Digital"}),e.jsx("a",{href:"/sitereliability",children:"Know More →"})]}),e.jsxs("div",{className:"managed-card",children:[e.jsx("h4",{children:"Help Desk/End User Compute"}),e.jsx("p",{children:"Streamline Operations with Reliable Help Desk Support"}),e.jsx("a",{href:"/helpdesk",children:"Know More →"})]})]}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Contact Us"})]})})]})]}),gy=d("/assets/images/newBanner/ma_ser4.webp"),xy=()=>e.jsxs("main",{children:[e.jsx("div",{className:"slider",children:e.jsx("div",{className:"slides",children:e.jsx("div",{className:"slide",children:e.jsx("img",{src:gy,alt:"Site Reliability Banner"})})})}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            .main-title {
              font-size: 2.8rem;
              font-weight: 700;
              color: #1B8DBB;
              text-align: center;
              margin: 4rem 0 1.5rem;
            }

            .main-subtitle {
              text-align: center;
              color: #444;
              max-width: 900px;
              margin: 0 auto 3rem;
              font-size: 1.2rem;
              line-height: 1.7;
            }

            .tags-container {
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              gap: 1rem;
              margin: 4rem 0;
            }

            .tag-btn {
              background-color: #1B8DBB;
              color: white;
              padding: 0.7rem 1.8rem;
              border-radius: 9999px;
              font-size: 1.1rem;
              font-weight: 600;
            }

            .cta-button {
              display: block;
              width: fit-content;
              margin: 4rem auto;
              background: #1B8DBB;
              color: white;
              padding: 0.9rem 2.5rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 600;
              font-size: 1.1rem;
            }

            .cta-button:hover {
              background: #15749A;
            }

            .section {
              padding: 4rem 0;
            }

            .section-title {
              text-align: center;
              font-size: 2.4rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 3rem;
            }

            .section-intro {
              text-align: center;
              max-width: 900px;
              margin: 0 auto 4rem;
              color: #555;
              font-size: 1.1rem;
              line-height: 1.8;
            }

            .features-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .feature-card {
              background: white;
              border-radius: 16px;
              padding: 2rem;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: transform 0.3s ease;
              height: 100%;
            }

            .feature-card:hover {
              transform: translateY(-10px);
            }

            .feature-card h4 {
              font-size: 1.4rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .feature-card p {
              color: #666;
              line-height: 1.7;
            }

            .final-cta {
              background: linear-gradient(135deg, #1B8DBB, #15749A);
              color: white;
              padding: 5rem 0;
              text-align: center;
              border-radius: 16px;
              margin: 4rem 0;
            }

            .final-cta h2 {
              font-size: 2.5rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
            }

            .final-cta p {
              font-size: 1.3rem;
              max-width: 800px;
              margin: 0 auto 2.5rem;
              opacity: 0.95;
            }

            .btn-white {
              background: white;
              color: #1B8DBB;
              padding: 1rem 2.5rem;
              border-radius: 9999px;
              font-weight: 600;
              font-size: 1.1rem;
              text-decoration: none;
            }

            .btn-white:hover {
              background: #f0f0f0;
            }
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Site Reliability Engineering"}),e.jsx("p",{className:"main-subtitle",children:"Ensure the Smooth Run of Your System With Site Reliability Engineering"}),e.jsx("p",{className:"main-subtitle",children:"Elevate efficiency and improve collaboration and operations planning in automation for reliability improvement."}),e.jsxs("div",{className:"tags-container",children:[e.jsx("div",{className:"tag-btn",children:"SLAs / SLOs / SLIs"}),e.jsx("div",{className:"tag-btn",children:"Performance Metric"}),e.jsx("div",{className:"tag-btn",children:"Monitors & Alerts"}),e.jsx("div",{className:"tag-btn",children:"Managed Services"})]}),e.jsx("p",{className:"main-subtitle",children:"Hrify Digital's Site Reliability Solutions automate IT operations tasks, speed software delivery, and reduce IT risks, easing the friction between development and operations teams. Experience seamless software performances with Hrify Digital's Site Reliability Solutions! We at Hrify Digital bridge the gap between development and operations teams, streamlining the process for continuous updates and reducing operational risks."})]}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Key Capabilities"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Cultural Collaboration"}),e.jsx("p",{children:"Hrify Digital fosters a culture of collaboration, breaking down silos between development and operations teams."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Vendor Support & SLAs"}),e.jsx("p",{children:"Hrify Digital strategically phases the implementation, using automation to simplify complex challenges."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Performance Metrics"}),e.jsx("p",{children:"Our experts define meaningful SLOs and continuously review performance to optimize SRE processes."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Incident Response"}),e.jsx("p",{children:"Hrify Digital's proactive monitoring ensures swift incident detection and resolution, reducing downtime."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Monitoring & Alerting"}),e.jsx("p",{children:"We deploy intelligent monitoring with actionable alerts and fine-tuned configurations for real-time insights."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Risk Management"}),e.jsx("p",{children:"Our team's risk management framework prioritizes and mitigates risks, ensuring stability and future-proofing for clients."})]})]}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Book a Meeting"})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Ready to Achieve Unwavering Reliability?"}),e.jsx("p",{children:"Let us help you build resilient, high-performance systems with expert Site Reliability Engineering."}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Schedule a Consultation"})]})})]})]}),fy=d("/assets/images/newBanner/data.an.webp"),yy=()=>e.jsxs("main",{children:[e.jsx("div",{className:"slider",children:e.jsx("div",{className:"slides",children:e.jsx("div",{className:"slide",children:e.jsx("img",{src:fy,alt:"Monitoring & Maintenance Banner"})})})}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            .main-title {
              font-size: 2.8rem;
              font-weight: 700;
              color: #1B8DBB;
              text-align: center;
              margin: 4rem 0 1.5rem;
            }

            .main-subtitle {
              text-align: center;
              color: #444;
              max-width: 900px;
              margin: 0 auto 3rem;
              font-size: 1.2rem;
              line-height: 1.7;
            }

            .tags-container {
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              gap: 1rem;
              margin: 4rem 0;
            }

            .tag-btn {
              background-color: #1B8DBB;
              color: white;
              padding: 0.7rem 1.8rem;
              border-radius: 9999px;
              font-size: 1.1rem;
              font-weight: 600;
            }

            .cta-button {
              display: block;
              width: fit-content;
              margin: 4rem auto;
              background: #1B8DBB;
              color: white;
              padding: 0.9rem 2.5rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 600;
              font-size: 1.1rem;
            }

            .cta-button:hover {
              background: #15749A;
            }

            .section {
              padding: 4rem 0;
            }

            .section-title {
              text-align: center;
              font-size: 2.4rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 3rem;
            }

            .section-intro {
              text-align: center;
              max-width: 900px;
              margin: 0 auto 4rem;
              color: #555;
              font-size: 1.1rem;
              line-height: 1.8;
            }

            .features-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .feature-card {
              background: white;
              border-radius: 16px;
              padding: 2rem;
              text-align: left;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: transform 0.3s ease;
              height: 100%;
            }

            .feature-card:hover {
              transform: translateY(-10px);
            }

            .feature-card h4 {
              font-size: 1.4rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .feature-card p {
              color: #666;
              line-height: 1.7;
            }

            .final-cta {
              background: linear-gradient(135deg, #1B8DBB, #15749A);
              color: white;
              padding: 5rem 0;
              text-align: center;
              border-radius: 16px;
              margin: 4rem 0;
            }

            .final-cta h2 {
              font-size: 2.5rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
            }

            .final-cta p {
              font-size: 1.3rem;
              max-width: 800px;
              margin: 0 auto 2.5rem;
              opacity: 0.95;
            }

            .btn-white {
              background: white;
              color: #1B8DBB;
              padding: 1rem 2.5rem;
              border-radius: 9999px;
              font-weight: 600;
              font-size: 1.1rem;
              text-decoration: none;
            }

            .btn-white:hover {
              background: #f0f0f0;
            }
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Monitoring & Maintenance"}),e.jsx("p",{className:"main-subtitle",children:"Maximize Outputs & Ensure Service Excellence"}),e.jsx("p",{className:"main-subtitle",children:"Hrify Digital's 360 Monitoring and Maintenance services deliver rapid response times and reliable systems, tailored to your unique needs—on-site or remote."}),e.jsxs("div",{className:"tags-container",children:[e.jsx("div",{className:"tag-btn",children:"Managed Services"}),e.jsx("div",{className:"tag-btn",children:"Compliance & Transparency"}),e.jsx("div",{className:"tag-btn",children:"Escalation Procedures"}),e.jsx("div",{className:"tag-btn",children:"Root Cause Analysis"})]}),e.jsx("p",{className:"main-subtitle",children:"At Hrify Digital, we provide agile 360 Managed Services to monitor and maintain your business infrastructure. By overseeing a vast array of devices and ensuring they stay updated, we emphasize compliance, transparency, and regular communication. Our well-defined escalation procedures and integration requirements minimize disruptions, reduce risks, and optimize operational costs."})]}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Key Capabilities"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Reliable IT Operations"}),e.jsx("p",{children:"Our flexible approach handles complex IT environments with clear onboarding and customization."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Cost Efficiency"}),e.jsx("p",{children:"Continuous assessments optimize costs and minimize disruptions with defined integration timelines."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Proactive Support"}),e.jsx("p",{children:"Regular checkpoints and clear escalation procedures ensure rapid response and SLA alignment."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Compliance & Security"}),e.jsx("p",{children:"Industry-standard protocols and transparent processes uphold brand reliability and regulatory adherence."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"System Availability"}),e.jsx("p",{children:"Root cause analysis and proactive monitoring maximize content availability and node reliability."})]})]}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Talk to Our Experts"})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Ready to Maximize Your IT Performance?"}),e.jsx("p",{children:"Let us provide proactive monitoring and maintenance to keep your systems running smoothly."}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Schedule a Consultation"})]})})]})]}),jy=d("assets/images/newBanner/ma_ser4.webp");d("assets/images/Banner/newbanimg/endusercom.webp");const vy=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:jy,alt:"Help Desk Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            .main-title {
              font-size: 2.8rem;
              font-weight: 700;
              color: #1B8DBB;
              text-align: center;
              margin: 4rem 0 1.5rem;
            }

            .main-subtitle {
              text-align: center;
              color: #444;
              max-width: 900px;
              margin: 0 auto 3rem;
              font-size: 1.2rem;
              line-height: 1.7;
            }

            .tags-container {
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              gap: 1rem;
              margin: 4rem 0;
            }

            .tag-btn {
              background-color: #1B8DBB;
              color: white;
              padding: 0.7rem 1.8rem;
              border-radius: 9999px;
              font-size: 1.1rem;
              font-weight: 600;
            }

            .cta-button {
              display: block;
              width: fit-content;
              margin: 4rem auto;
              background: #1B8DBB;
              color: white;
              padding: 0.9rem 2.5rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 600;
              font-size: 1.1rem;
            }

            .cta-button:hover {
              background: #15749A;
            }

            .section {
              padding: 4rem 0;
            }

            .section-title {
              text-align: center;
              font-size: 2.4rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 3rem;
            }

            .section-intro {
              text-align: center;
              max-width: 900px;
              margin: 0 auto 4rem;
              color: #555;
              font-size: 1.1rem;
              line-height: 1.8;
            }

            .features-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .feature-card {
              background: white;
              border-radius: 16px;
              padding: 2rem;
              text-align: left;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: transform 0.3s ease;
              height: 100%;
            }

            .feature-card:hover {
              transform: translateY(-10px);
            }

            .feature-card h4 {
              font-size: 1.4rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .feature-card p {
              color: #666;
              line-height: 1.7;
            }

            .final-cta {
              background: linear-gradient(135deg, #1B8DBB, #15749A);
              color: white;
              padding: 5rem 0;
              text-align: center;
              border-radius: 16px;
              margin: 4rem 0;
            }

            .final-cta h2 {
              font-size: 2.5rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
            }

            .final-cta p {
              font-size: 1.3rem;
              max-width: 800px;
              margin: 0 auto 2.5rem;
              opacity: 0.95;
            }

            .btn-white {
              background: white;
              color: #1B8DBB;
              padding: 1rem 2.5rem;
              border-radius: 9999px;
              font-weight: 600;
              font-size: 1.1rem;
              text-decoration: none;
            }

            .btn-white:hover {
              background: #f0f0f0;
            }
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"End User Compute"}),e.jsx("p",{className:"main-subtitle",children:"Configure Streamline Operations With Reliable Help Desk Compute"}),e.jsx("p",{className:"main-subtitle",children:"Ensure your business tasks with End-User assistance and Help desk support."}),e.jsxs("div",{className:"tags-container",children:[e.jsx("div",{className:"tag-btn",children:"User Diversity"}),e.jsx("div",{className:"tag-btn",children:"IT Help Desk"}),e.jsx("div",{className:"tag-btn",children:"Workspace Management"}),e.jsx("div",{className:"tag-btn",children:"Managed Services"})]}),e.jsx("p",{className:"main-subtitle",children:"Offering the right computer support services and assistance, Hrify Digital's Help Desk/End User services provide efficient IT issue resolution, ensuring smooth business functioning, enhanced productivity, and long-term success."}),e.jsx("p",{className:"main-subtitle",children:"Hrify Digital srecognizes the significance of Help Desk/End User Computing services in minimizing business IT risks. Our team provides prompt and dependable support to end-users, reducing the downtime associated with IT issues. By proactively addressing challenges, we help maximize productivity, reduce costs associated with expensive downtime, and minimize the need for costly IT repairs. We recognize the significance of a robust support system that can elevate your business operations, and with a customer-centric mindset, our team strives to promptly address real-time queries, ensuring that your team can work seamlessly without disruptions."}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Book a Meeting"})]}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Support Features"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Vendor Support & SLAs"}),e.jsx("p",{children:"Hrify Digital sempowers its users by offering a comprehensive knowledge base and intuitive self-help resources, allowing them to resolve common issues independently. Regular user training sessions are conducted to enhance technical skills and optimize IT resource utilization."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Ticket Volume Management"}),e.jsx("p",{children:"Hrify Digital sefficiently manages ticket volume through a streamlined ticket triage process that prioritizes urgent issues. Leveraging automation tools, routine tasks are automated, enabling the support team to focus on complex challenges."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Handling Complex IT Environment"}),e.jsx("p",{children:"Hrify Digital's standardized hardware and software configurations facilitate seamless troubleshooting and support. Our support tiers efficiently handle different levels of complexity within the diverse IT environment."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Ticket Escalation Procedures"}),e.jsx("p",{children:"Hrify Digital's well-defined escalation procedures enable swift handling of complex issues, ensuring that they reach the appropriate teams promptly for resolution."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Remote Support"}),e.jsx("p",{children:"Through remote desktop software and other advanced tools, Hrify Digital delivers efficient support to off-site users, resolving issues promptly."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Integration & Automation"}),e.jsx("p",{children:"We optimize our operations by implementing integrated IT service management (ITSM) platforms, automating routine tasks, and enhancing overall efficiency."})]})]})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Ready to Streamline Your IT Support?"}),e.jsx("p",{children:"Let us deliver reliable, proactive Help Desk and End User Compute services for your team."}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Schedule a Consultation"})]})})]})]}),by=d("assets/images/newBanner/enterprise.webp"),wy=()=>e.jsxs("main",{children:[e.jsx("div",{className:"slider",children:e.jsx("div",{className:"slides",children:e.jsx("div",{className:"slide",children:e.jsx("img",{src:by,alt:"Vendor Management Banner"})})})}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            .main-title {
              font-size: 2.8rem;
              font-weight: 700;
              color: #1B8DBB;
              text-align: center;
              margin: 4rem 0 1.5rem;
            }

            .main-subtitle {
              text-align: justify;
              color: #444;
              max-width: 900px;
              margin: 0 auto 3rem;
              font-size: 1.2rem;
              line-height: 1.7;
            }

            .cta-button {
              display: block;
              width: fit-content;
              margin: 4rem auto;
              background: #1B8DBB;
              color: white;
              padding: 0.9rem 2.5rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 600;
              font-size: 1.1rem;
            }

            .cta-button:hover {
              background: #15749A;
            }

            .section {
              padding: 4rem 0;
            }

            .section-title {
              text-align: center;
              font-size: 2.4rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 3rem;
            }

            .section-intro {
              text-align: center;
              max-width: 900px;
              margin: 0 auto 4rem;
              color: #555;
              font-size: 1.1rem;
              line-height: 1.8;
            }

            .features-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .feature-card {
              background: white;
              border-radius: 16px;
              padding: 2.5rem 2rem;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: transform 0.3s ease;
              height: 100%;
            }

            .feature-card:hover {
              transform: translateY(-10px);
            }

            .icon-wrapper {
              width: 80px;
              height: 80px;
              background: #1B8DBB;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 1.5rem;
            }

            .icon-wrapper i {
              font-size: 2.2rem;
              color: white;
            }

            .feature-card h4 {
              font-size: 1.4rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .feature-card p {
              color: #666;
              line-height: 1.7;
            }

            .final-cta {
              background: linear-gradient(135deg, #1B8DBB, #15749A);
              color: white;
              padding: 5rem 0;
              text-align: center;
              border-radius: 16px;
              margin: 4rem 0;
            }

            .final-cta h2 {
              font-size: 2.5rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
            }

            .final-cta p {
              font-size: 1.3rem;
              max-width: 800px;
              margin: 0 auto 2.5rem;
              opacity: 0.95;
            }

            .btn-white {
              background: white;
              color: #1B8DBB;
              padding: 1rem 2.5rem;
              border-radius: 9999px;
              font-weight: 600;
              font-size: 1.1rem;
              text-decoration: none;
            }

            .btn-white:hover {
              background: #f0f0f0;
            }
          `}),e.jsxs("div",{className:"text-justify",children:[e.jsx("h1",{className:"main-title",children:"Vendor Management"}),e.jsx("p",{className:"main-subtitle",children:"Manage Contracts, Risk & Procurement With Vendor Management"}),e.jsx("p",{className:"main-subtitle",children:"Identify new technological breakthroughs and experience our ongoing support for your business value. Our expert vendor management services help streamline processes, mitigate risks, and enhance cost efficiencies."}),e.jsx("p",{className:"main-subtitle",children:"At Hrify Digital, we ensure effective vendor selection and contract management, reducing operational risks and maximizing business efficiency. Our team fosters strong vendor relationships by maintaining transparency and adhering to industry best practices. By leveraging innovative vendor management strategies, we help businesses gain a competitive edge and optimize resources for sustainable growth."}),e.jsx("p",{className:"main-subtitle",children:"Our vendor management solutions empower businesses by integrating automation, data-driven decision-making, and customized procurement strategies. Whether you're seeking better contract negotiations or improving supplier performance, our expert solutions ensure seamless and strategic vendor operations."})]}),e.jsx("section",{className:"section",style:{backgroundColor:"#fff5f5"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Key Capabilities"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-handshake"})}),e.jsx("h4",{children:"Vendor Relationship Management"}),e.jsx("p",{children:"Strengthen vendor relationships through structured management and consistent communication."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-shield-alt"})}),e.jsx("h4",{children:"Risk Management"}),e.jsx("p",{children:"Mitigate potential vendor risks through careful assessment and proactive strategies."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-users"})}),e.jsx("h4",{children:"Supplier Diversity"}),e.jsx("p",{children:"Promote inclusivity and growth with a diverse vendor and supplier network."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-chart-line"})}),e.jsx("h4",{children:"Vendor Performance Monitoring"}),e.jsx("p",{children:"Track vendor performance with KPI-aligned assessments and regular feedback mechanisms."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-cogs"})}),e.jsx("h4",{children:"Integration & Data Management"}),e.jsx("p",{children:"Leverage integrated vendor platforms for secure data exchange and governance adherence."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-balance-scale"})}),e.jsx("h4",{children:"Vendor Consolidation"}),e.jsx("p",{children:"Optimize vendor relationships by identifying consolidation opportunities based on performance and cost."})]})]}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Consult Our Experts"})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Ready to Optimize Your Vendor Relationships?"}),e.jsx("p",{children:"Let us help you streamline procurement, reduce risks, and drive greater value from your vendors."}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Schedule a Consultation"})]})})]})]}),Ny=d("assets/images/newBanner/data.an.webp");d("assets/images/Banner/newbanimg/Internet-of-Things.webp");const ky=d("assets/images/erp/iot.webp"),Sy=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Ny,alt:"Internet of Things Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            .main-title {
              font-size: 2.8rem;
              font-weight: 700;
              color: #1B8DBB;
              text-align: center;
              margin: 4rem 0 1.5rem;
            }

            .main-subtitle {
              text-align: Justify;
              color: #444;
              max-width: 900px;
              margin: 0 auto 3rem;
              font-size: 1.2rem;
              line-height: 1.7;
            }

            .image-showcase {
              display: flex;
              justify-content: center;
              margin: 3rem 0;
            }

            .image-showcase img {
              max-width: 700px;
              width: 100%;
              height: auto;
              border-radius: 16px;
              box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            }

            @media (max-width: 768px) {
              .image-showcase img {
                max-width: 500px;
              }
            }

            @media (max-width: 576px) {
              .image-showcase img {
                max-width: 100%;
              }
            }

            .cta-button {
              display: block;
              width: fit-content;
              margin: 4rem auto;
              background: #1B8DBB;
              color: white;
              padding: 0.9rem 2.5rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 600;
              font-size: 1.1rem;
            }

            .cta-button:hover {
              background: #15749A;
            }

            .section {
              padding: 4rem 0;
            }

            .section-title {
              text-align: center;
              font-size: 2.4rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 3rem;
            }

            .features-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .feature-card {
              background: #E8F4FA;
              border-radius: 16px;
              padding: 2.5rem 2rem;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: transform 0.3s ease;
              height: 100%;
            }

            .feature-card:hover {
              transform: translateY(-10px);
            }

            .icon-wrapper {
              width: 80px;
              height: 80px;
              background: #1B8DBB;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 1.5rem;
            }

            .icon-wrapper i {
              font-size: 2.2rem;
              color: white;
            }

            .feature-card h4 {
              font-size: 1.4rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .feature-card p {
              color: #666;
              line-height: 1.7;
            }

            .final-cta {
              background: linear-gradient(135deg, #1B8DBB, #15749A);
              color: white;
              padding: 5rem 0;
              text-align: center;
              border-radius: 16px;
              margin: 4rem 0;
            }

            .final-cta h2 {
              font-size: 2.5rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
            }

            .final-cta p {
              font-size: 1.3rem;
              max-width: 800px;
              margin: 0 auto 2.5rem;
              opacity: 0.95;
            }

            .btn-white {
              background: white;
              color: #1B8DBB;
              padding: 1rem 2.5rem;
              border-radius: 9999px;
              font-weight: 600;
              font-size: 1.1rem;
              text-decoration: none;
            }

            .btn-white:hover {
              background: #f0f0f0;
            }
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Internet of Things (IoT)"}),e.jsx("p",{className:"main-subtitle",children:"Lead Enterprise Integrity & Monetize Your Experience With IoT"}),e.jsx("p",{className:"main-subtitle",children:"Develop and encompass user experience with IoT-powered data aggregation layer. Our solutions provide unrivaled edge-to-cloud connectivity, robust data security, and seamless device management for businesses of all scales."}),e.jsx("p",{className:"main-subtitle",children:"At Hrify Digital, we take IoT to the next level by offering a comprehensive suite of services that include governance, security, data analytics, and seamless integration. Our layered IoT architecture ensures smooth connectivity and intelligent automation, empowering businesses to make informed decisions."}),e.jsx("div",{className:"image-showcase",children:e.jsx("img",{src:ky,alt:"IoT Solutions"})}),e.jsx("p",{className:"main-subtitle",children:"Our IoT solutions integrate automation, data-driven decision-making, and robust security protocols, enabling businesses to unlock new opportunities and optimize performance. Whether you're improving device connectivity, securing data exchange, or leveraging real-time analytics, we have the expertise to transform your IoT vision into reality."})]}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Key Capabilities"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-cloud"})}),e.jsx("h4",{children:"Edge-To-Cloud Connectivity"}),e.jsx("p",{children:"Seamless data flow between edge devices and the cloud ensures uninterrupted performance."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-shield-alt"})}),e.jsx("h4",{children:"End-To-End Security"}),e.jsx("p",{children:"Encryption and authentication mechanisms ensure safe and reliable data exchange."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-cogs"})}),e.jsx("h4",{children:"Simplified Device Management"}),e.jsx("p",{children:"Effortless management and configuration of IoT devices through an intuitive platform."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-lock"})}),e.jsx("h4",{children:"Security Measures for Data Integrity"}),e.jsx("p",{children:"Advanced encryption techniques protect data against unauthorized access and breaches."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-chart-line"})}),e.jsx("h4",{children:"Advanced Analytics Capabilities"}),e.jsx("p",{children:"Leverage real-time data insights to drive strategic decision-making and operational efficiency."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-network-wired"})}),e.jsx("h4",{children:"Standardized Communication Protocols"}),e.jsx("p",{children:"Ensuring seamless integration of diverse systems and IoT devices through standard protocols."})]})]}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Talk to Our Experts"})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Ready to Transform with IoT?"}),e.jsx("p",{children:"Let us build intelligent, connected solutions that drive your business forward."}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Schedule a Consultation"})]})})]})]}),By=d("assets/images/newBanner/data.an1.webp");d("assets/images/Banner/newbanimg/NLP-ai.webp");const Dy=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:By,alt:"AI & NLP Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            .main-title {
              font-size: 2.8rem;
              font-weight: 700;
              color: #1B8DBB;
              text-align: center;
              margin: 4rem 0 1.5rem;
            }

            .main-subtitle {
              text-align: center;
              color: #444;
              max-width: 900px;
              margin: 0 auto 3rem;
              font-size: 1.2rem;
              line-height: 1.7;
            }

            .image-showcase {
              display: flex;
              justify-content: center;
              margin: 3rem 0;
            }

            .image-showcase img {
              max-width: 700px;
              width: 100%;
              height: auto;
              border-radius: 16px;
              box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            }

            @media (max-width: 768px) {
              .image-showcase img {
                max-width: 500px;
              }
            }

            @media (max-width: 576px) {
              .image-showcase img {
                max-width: 100%;
              }
            }

            .cta-button {
              display: block;
              width: fit-content;
              margin: 4rem auto;
              background: #1B8DBB;
              color: white;
              padding: 0.9rem 2.5rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 600;
              font-size: 1.1rem;
            }

            .cta-button:hover {
              background: #15749A;
            }

            .section {
              padding: 4rem 0;
            }

            .section-title {
              text-align: center;
              font-size: 2.4rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 3rem;
            }

            .features-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .feature-card {
              background: white;
              border-radius: 16px;
              padding: 2.5rem 2rem;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: transform 0.3s ease;
              height: 100%;
            }

            .feature-card:hover {
              transform: translateY(-10px);
            }

            .icon-wrapper {
              width: 80px;
              height: 80px;
              background: #1B8DBB;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 1.5rem;
            }

            .icon-wrapper i {
              font-size: 2.2rem;
              color: white;
            }

            .feature-card h4 {
              font-size: 1.4rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .feature-card p {
              color: #666;
              line-height: 1.7;
            }

            .final-cta {
              background: linear-gradient(135deg, #1B8DBB, #15749A);
              color: white;
              padding: 5rem 0;
              text-align: center;
              border-radius: 16px;
              margin: 4rem 0;
            }

            .final-cta h2 {
              font-size: 2.5rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
            }

            .final-cta p {
              font-size: 1.3rem;
              max-width: 800px;
              margin: 0 auto 2.5rem;
              opacity: 0.95;
            }

            .btn-white {
              background: white;
              color: #1B8DBB;
              padding: 1rem 2.5rem;
              border-radius: 9999px;
              font-weight: 600;
              font-size: 1.1rem;
              text-decoration: none;
            }

            .btn-white:hover {
              background: #f0f0f0;
            }
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Elevate Your Business Success With AI & NLP"}),e.jsx("p",{className:"main-subtitle",children:"Empower your enterprise with AI-based intelligent automation and smarter insights."}),e.jsx("div",{className:"image-showcase",children:e.jsx("img",{src:"https://via.placeholder.com/600x400",alt:"AI & NLP Solutions"})}),e.jsx("p",{className:"main-subtitle",children:"Unlock the potential of AI with our advanced NLP services to automate data analytics, anomaly detection, and extract valuable insights from unstructured data. Our intelligent solutions improve efficiency and decision-making while maintaining data security and ethical AI practices."}),e.jsx("p",{className:"main-subtitle",children:"Our AI/NLP solutions enhance business capabilities by leveraging automation, real-time insights, and smart decision-making. Whether you're looking for AI-driven chatbots, fraud detection, or data privacy solutions, we ensure high accuracy, efficiency, and ethical AI standards."})]}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Key Capabilities"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-microchip"})}),e.jsx("h4",{children:"API & SDK"}),e.jsx("p",{children:"Seamlessly integrate AI capabilities into your business with easy-to-use APIs & SDKs."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-comment-alt"})}),e.jsx("h4",{children:"Language Generation"}),e.jsx("p",{children:"Generate high-quality text responses with advanced NLP models."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-brain"})}),e.jsx("h4",{children:"Cognitive AI Computing"}),e.jsx("p",{children:"Utilize AI-driven cognitive computing for smarter decision-making."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-comments"})}),e.jsx("h4",{children:"Multilingual Chatbot"}),e.jsx("p",{children:"Understand and respond in multiple languages with NLP-powered chatbots."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-eye"})}),e.jsx("h4",{children:"Visual Monitoring"}),e.jsx("p",{children:"Enhance security by analyzing real-time video feeds with AI."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-user-shield"})}),e.jsx("h4",{children:"Fake Content Detection"}),e.jsx("p",{children:"Identify fraudulent users and misinformation with AI-driven analysis."})]})]}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Book a Meeting"})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Ready to Harness AI & NLP?"}),e.jsx("p",{children:"Let us build intelligent, language-powered solutions that transform your business."}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Schedule a Consultation"})]})})]})]}),Cy=d("/assets/images/newBanner/Data_an.webp"),zy=()=>e.jsxs("main",{children:[e.jsx("div",{className:"slider",children:e.jsx("div",{className:"slides",children:e.jsx("div",{className:"slide",children:e.jsx("img",{src:Cy,alt:"Computer Vision Banner"})})})}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            .main-title {
              font-size: 2.8rem;
              font-weight: 700;
              color: #1B8DBB;
              text-align: center;
              margin: 4rem 0 1.5rem;
            }

            .main-subtitle {
              text-align: center;
              color: #444;
              max-width: 900px;
              margin: 0 auto 3rem;
              font-size: 1.2rem;
              line-height: 1.7;
            }

            .image-showcase {
              display: flex;
              justify-content: center;
              margin: 3rem 0;
            }

            .image-showcase img {
              max-width: 700px;
              width: 100%;
              height: auto;
              border-radius: 16px;
              box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            }

            @media (max-width: 768px) {
              .image-showcase img {
                max-width: 500px;
              }
            }

            @media (max-width: 576px) {
              .image-showcase img {
                max-width: 100%;
              }
            }

            .cta-button {
              display: block;
              width: fit-content;
              margin: 4rem auto;
              background: #1B8DBB;
              color: white;
              padding: 0.9rem 2.5rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 600;
              font-size: 1.1rem;
            }

            .cta-button:hover {
              background: #15749A;
            }

            .section {
              padding: 4rem 0;
            }

            .section-title {
              text-align: center;
              font-size: 2.4rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 3rem;
            }

            .features-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .feature-card {
              background: #E8F4FA;
              border-radius: 16px;
              padding: 2.5rem 2rem;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: transform 0.3s ease;
              height: 100%;
            }

            .feature-card:hover {
              transform: translateY(-10px);
            }

            .icon-wrapper {
              width: 80px;
              height: 80px;
              background: #1B8DBB;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 1.5rem;
            }

            .icon-wrapper i {
              font-size: 2.2rem;
              color: white;
            }

            .feature-card h4 {
              font-size: 1.4rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .feature-card p {
              color: #666;
              line-height: 1.7;
            }

            .final-cta {
              background: linear-gradient(135deg, #1B8DBB, #15749A);
              color: white;
              padding: 5rem 0;
              text-align: center;
              border-radius: 16px;
              margin: 4rem 0;
            }

            .final-cta h2 {
              font-size: 2.5rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
            }

            .final-cta p {
              font-size: 1.3rem;
              max-width: 800px;
              margin: 0 auto 2.5rem;
              opacity: 0.95;
            }

            .btn-white {
              background: white;
              color: #1B8DBB;
              padding: 1rem 2.5rem;
              border-radius: 9999px;
              font-weight: 600;
              font-size: 1.1rem;
              text-decoration: none;
            }

            .btn-white:hover {
              background: #f0f0f0;
            }
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Computer Vision"}),e.jsx("p",{className:"main-subtitle",children:"Advance Your Business With Computer Vision"}),e.jsx("p",{className:"main-subtitle",children:"Create flawless products and a safe working environment with visual data recognition."}),e.jsx("p",{className:"main-subtitle",children:"Hrify Digital's Computer Vision is a powerful tool for your business that enables machines to interpret and understand visual data, providing valuable insights that can inform decision-making and improve processes for more streamlined business operations. From manufacturing to healthcare, our solutions leverage advanced algorithms to enhance efficiency, safety, and innovation."}),e.jsx("p",{className:"main-subtitle",children:"Our Computer Vision services go beyond basic functionality, offering robust support features that ensure reliability, adaptability, and performance in real-world applications. We empower businesses to harness visual data for actionable outcomes."}),e.jsx("p",{className:"main-subtitle",children:"Hrify Digital's cutting-edge Computer Vision services empower AI experts to analyze visuals, unlock facial recognition, object detection, autonomous vehicles, and medical image analysis. Whether you're enhancing quality control, improving safety protocols, or driving innovation, our tailored solutions deliver measurable results that transform how businesses operate and compete in a data-driven world."})]}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Core Capabilities"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-font"})}),e.jsx("h4",{children:"Optical Character Recognition (OCR)"}),e.jsx("p",{children:"Extract text from images and documents with high accuracy for automated data processing."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-tachometer-alt"})}),e.jsx("h4",{children:"Real-Time Processing"}),e.jsx("p",{children:"Optimize for real-time results with lightweight models for seamless edge device integration."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-video"})}),e.jsx("h4",{children:"Automate Surveillance"}),e.jsx("p",{children:"Enhance security with automated monitoring and detection of unusual activities."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-database"})}),e.jsx("h4",{children:"Data Quality & Quantity"}),e.jsx("p",{children:"Prioritize data curation and augmentation to ensure high-quality training datasets."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-globe"})}),e.jsx("h4",{children:"Real-World Variability"}),e.jsx("p",{children:"Specialized datasets for unique scenarios ensure effective performance in diverse environments."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-cogs"})}),e.jsx("h4",{children:"Model Size & Deployment"}),e.jsx("p",{children:"Flexible model options and continuous support for various computational needs."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-sync"})}),e.jsx("h4",{children:"Updates & Maintenance"}),e.jsx("p",{children:"Structured updates and proactive communication keep services reliable and current."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-bug"})}),e.jsx("h4",{children:"Edge Cases & Errors"}),e.jsx("p",{children:"Feedback-driven improvements enhance model robustness for challenging scenarios."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-chart-bar"})}),e.jsx("h4",{children:"Data & Analytics"}),e.jsx("p",{children:"Unlock valuable insights through advanced visual data analysis and case studies."})]})]}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Schedule a Consultation"})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Ready to See the Future?"}),e.jsx("p",{children:"Let us implement powerful Computer Vision solutions that transform how your business sees the world."}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Talk to Our Experts"})]})})]})]}),Wy=d("assets/images/M_MLOPS.jpg"),My=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Wy,alt:"ML / MLOps Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
            .banner-full-image {
              width: 100%;
              overflow: hidden;
            }

            .banner-img {
              width: 100%;
              display: block;
            }
          `}}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            .main-title {
              font-size: 2.8rem;
              font-weight: 700;
              color: #1B8DBB;
              text-align: center;
              margin: 4rem 0 1.5rem;
            }

            .main-subtitle {
              text-align: center;
              color: #444;
              max-width: 900px;
              margin: 0 auto 3rem;
              font-size: 1.2rem;
              line-height: 1.7;
            }

            .cta-button {
              display: block;
              width: fit-content;
              margin: 4rem auto;
              background: #1B8DBB;
              color: white;
              padding: 0.9rem 2.5rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 600;
              font-size: 1.1rem;
            }

            .cta-button:hover {
              background: #15749A;
            }

            .section {
              padding: 4rem 0;
            }

            .section-title {
              text-align: center;
              font-size: 2.4rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 3rem;
            }

            .features-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .feature-card {
              background: white;
              border-radius: 16px;
              padding: 2.5rem 2rem;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: transform 0.3s ease;
              height: 100%;
            }

            .feature-card:hover {
              transform: translateY(-10px);
            }

            .icon-wrapper {
              width: 80px;
              height: 80px;
              background: #1B8DBB;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 1.5rem;
            }

            .icon-wrapper i {
              font-size: 2.2rem;
              color: white;
            }

            .feature-card h4 {
              font-size: 1.4rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .feature-card p {
              color: #666;
              line-height: 1.7;
            }

            .case-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .case-card {
              background: white;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
            }

            .case-image {
              height: 200px;
              background: #1B8DBB;
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.2rem;
              font-weight: 600;
            }

            .case-content {
              padding: 2rem;
            }

            .case-content h4 {
              font-size: 1.3rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .case-content p {
              color: #666;
              line-height: 1.7;
              margin-bottom: 1.5rem;
            }

            .case-link {
              color: #1B8DBB;
              font-weight: 600;
              text-decoration: none;
            }

            .final-cta {
              background: linear-gradient(135deg, #1B8DBB, #15749A);
              color: white;
              padding: 5rem 0;
              text-align: center;
              border-radius: 16px;
              margin: 4rem 0;
            }

            .final-cta h2 {
              font-size: 2.5rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
            }

            .final-cta p {
              font-size: 1.3rem;
              max-width: 800px;
              margin: 0 auto 2.5rem;
              opacity: 0.95;
            }

            .btn-white {
              background: white;
              color: #1B8DBB;
              padding: 1rem 2.5rem;
              border-radius: 9999px;
              font-weight: 600;
              font-size: 1.1rem;
              text-decoration: none;
            }

            .btn-white:hover {
              background: #f0f0f0;
            }
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Transform Your Business with AI Excellence"}),e.jsx("p",{className:"main-subtitle",children:"Leverage cutting-edge machine learning solutions to drive innovation and stay ahead of the competition."}),e.jsxs("div",{className:"d-flex justify-content-center gap-4 flex-wrap mb-5",children:[e.jsx("div",{className:"bg-white px-4 py-3 rounded-pill shadow-sm",children:e.jsx("strong",{children:"Rapid Deployment"})}),e.jsx("div",{className:"bg-white px-4 py-3 rounded-pill shadow-sm",children:e.jsx("strong",{children:"Enhanced Accuracy"})}),e.jsx("div",{className:"bg-white px-4 py-3 rounded-pill shadow-sm",children:e.jsx("strong",{children:"Scalable Solutions"})})]}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Get a Free Consultation"})]}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Intelligent Data Solutions"}),e.jsx("p",{className:"main-subtitle",children:"Hrify Digital delivers state-of-the-art ML & MLOps services that transform raw data into actionable intelligence for your business."}),e.jsx("p",{className:"main-subtitle",children:"Our advanced machine learning algorithms unlock hidden patterns in your data, enabling smarter decision-making across your organization. With our MLOps expertise, we ensure your AI models remain accurate, up-to-date, and continuously improving. From predictive analytics to natural language processing, our solutions are tailored to your specific industry challenges. We don't just implement technology – we partner with you to create sustainable competitive advantages through data-driven innovation."}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Request a Demo"})]})}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Our AI Capabilities"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-microchip"})}),e.jsx("h4",{children:"Industry Expertise"}),e.jsx("p",{children:"Our team works closely with industry specialists to develop ML solutions that address specific challenges in healthcare, finance, retail, and manufacturing sectors."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-server"})}),e.jsx("h4",{children:"High-Performance Computing"}),e.jsx("p",{children:"We leverage cutting-edge GPU clusters and distributed computing frameworks to train complex models in a fraction of the time required by traditional methods."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-cogs"})}),e.jsx("h4",{children:"Automated Optimization"}),e.jsx("p",{children:"Our proprietary optimization engine automatically tunes model parameters, saving countless hours of manual adjustment while achieving superior performance metrics."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-box"})}),e.jsx("h4",{children:"Containerized Deployment"}),e.jsx("p",{children:"We package models in Docker containers with Kubernetes orchestration, ensuring consistent performance across development, testing, and production environments."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-eye"})}),e.jsx("h4",{children:"Continuous Monitoring"}),e.jsx("p",{children:"Our advanced monitoring systems track model performance in real-time, alerting you to potential issues before they impact your business operations."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-sync-alt"})}),e.jsx("h4",{children:"Adaptive Learning"}),e.jsx("p",{children:"Our models continuously learn from new data, automatically adapting to changing market conditions and customer behaviors without manual intervention."})]})]})]})}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Success Stories"}),e.jsx("p",{className:"section-intro",children:"See how our AI solutions have delivered measurable results for organizations like yours."}),e.jsxs("div",{className:"case-grid",children:[e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image",children:"Financial Services"}),e.jsxs("div",{className:"case-content",children:[e.jsx("h4",{children:"Fraud Detection System"}),e.jsx("p",{children:"Reduced fraudulent transactions by 87% for a major credit card provider using our advanced anomaly detection algorithms."}),e.jsx("a",{href:"#",className:"case-link",children:"View Case Study →"})]})]}),e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image",children:"Healthcare"}),e.jsxs("div",{className:"case-content",children:[e.jsx("h4",{children:"Patient Outcome Prediction"}),e.jsx("p",{children:"Improved treatment planning accuracy by 42% for a hospital network using our predictive analytics platform."}),e.jsx("a",{href:"#",className:"case-link",children:"View Case Study →"})]})]}),e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image",children:"E-Commerce"}),e.jsxs("div",{className:"case-content",children:[e.jsx("h4",{children:"Personalization Engine"}),e.jsx("p",{children:"Boosted conversion rates by 53% and average order value by 27% for an online retailer with our recommendation system."}),e.jsx("a",{href:"#",className:"case-link",children:"View Case Study →"})]})]})]})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Start Your AI Journey Today"}),e.jsx("p",{children:"Our experts are ready to discuss your unique challenges and how our AI solutions can drive measurable results for your business."}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Get a Free Consultation"})]})})]})]}),Ey=d("assets/images/newBanner/data.an4.webp");d("assets/images/Banner/newbanimg/datascience.webp");const Iy=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Ey,alt:"Data Science Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            .main-title {
              font-size: 2.8rem;
              font-weight: 700;
              color: #1B8DBB;
              text-align: center;
              margin: 4rem 0 1.5rem;
            }

            .main-subtitle {
              text-align: justify;
              color: #444;
              max-width: 900px;
              margin: 0 auto 3rem;
              font-size: 1.2rem;
              line-height: 1.7;
            }

            .image-showcase {
              display: flex;
              justify-content: center;
              margin: 3rem 0;
            }

            .image-showcase img {
              max-width: 700px;
              width: 100%;
              height: auto;
              border-radius: 16px;
              box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            }

            @media (max-width: 768px) {
              .image-showcase img {
                max-width: 500px;
              }
            }

            @media (max-width: 576px) {
              .image-showcase img {
                max-width: 100%;
              }
            }

            .cta-button {
              display: block;
              width: fit-content;
              margin: 4rem auto;
              background: #1B8DBB;
              color: white;
              padding: 0.9rem 2.5rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 600;
              font-size: 1.1rem;
            }

            .cta-button:hover {
              background: #15749A;
            }

            .section {
              padding: 4rem 0;
            }

            .section-title {
              text-align: center;
              font-size: 2.4rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 3rem;
            }

            .features-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .feature-card {
              background: white;
              border-radius: 16px;
              padding: 2.5rem 2rem;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: transform 0.3s ease;
              height: 100%;
            }

            .feature-card:hover {
              transform: translateY(-10px);
            }

            .icon-wrapper {
              width: 80px;
              height: 80px;
              background: #1B8DBB;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 1.5rem;
            }

            .icon-wrapper i {
              font-size: 2.2rem;
              color: white;
            }

            .feature-card h4 {
              font-size: 1.4rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .feature-card p {
              color: #666;
              line-height: 1.7;
            }

            .case-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .case-card {
              background: white;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
            }

            .case-image {
              height: 200px;
              background: linear-gradient(135deg, #1B8DBB, #15749A);
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
            }

            .case-tag {
              position: absolute;
              top: 1rem;
              left: 1rem;
              background: rgba(255,255,255,0.2);
              padding: 0.5rem 1rem;
              border-radius: 9999px;
              font-size: 0.9rem;
              font-weight: 600;
            }

            .case-content {
              padding: 2rem;
            }

            .case-content h4 {
              font-size: 1.3rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .case-content p {
              color: #666;
              line-height: 1.7;
              margin-bottom: 1.5rem;
            }

            .case-link {
              color: #1B8DBB;
              font-weight: 600;
              text-decoration: none;
            }

            .final-cta {
              background: linear-gradient(135deg, #1B8DBB, #15749A);
              color: white;
              padding: 5rem 0;
              text-align: center;
              border-radius: 16px;
              margin: 4rem 0;
            }

            .final-cta h2 {
              font-size: 2.5rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
            }

            .final-cta p {
              font-size: 1.3rem;
              max-width: 800px;
              margin: 0 auto 2.5rem;
              opacity: 0.95;
            }

            .btn-white {
              background: white;
              color: #1B8DBB;
              padding: 1rem 2.5rem;
              border-radius: 9999px;
              font-weight: 600;
              font-size: 1.1rem;
              text-decoration: none;
            }

            .btn-white:hover {
              background: #f0f0f0;
            }
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"From Data to Insights"}),e.jsx("p",{className:"main-subtitle",children:"Transform raw data into actionable insights and extract meaningful information to solve complex business problems."}),e.jsxs("div",{className:"d-flex justify-content-center gap-4 flex-wrap mb-5",children:[e.jsx("div",{className:"bg-white px-4 py-3 rounded-pill shadow-sm",children:e.jsx("strong",{children:"Data-Driven Decisions"})}),e.jsx("div",{className:"bg-white px-4 py-3 rounded-pill shadow-sm",children:e.jsx("strong",{children:"Improved Efficiency"})}),e.jsx("div",{className:"bg-white px-4 py-3 rounded-pill shadow-sm",children:e.jsx("strong",{children:"Predictive Analytics"})})]}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Book a Meeting"})]}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Data & Analytics"}),e.jsx("p",{className:"main-subtitle",children:"Hrify Digital's expert Data Science services use statistical analysis, Machine Learning, and Data Insights for accurate prediction models and solutions."}),e.jsx("p",{className:"main-subtitle",children:"Hrify Digital's Data Science strategy helps businesses make better decisions by analyzing a large amount of data and identifying patterns and trends, which ensures data-driven decisions that are more accurate, reliable, and informed. Our strategy also helps your business detect and prevent fraud by analyzing transactional data and identifying anomalous patterns. This can help your business minimize losses and protect your reputation."}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Book a Meeting"})]})}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Support Features"}),e.jsx("p",{className:"section-intro",children:"Our comprehensive data science capabilities to help you extract maximum value from your data."}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-users"})}),e.jsx("h4",{children:"Collaborating for Success"}),e.jsx("p",{children:"Hrify Digital facilitates interdisciplinary collaboration through regular meetings, workshops, and data visualization techniques to ensure insights are accessible to all stakeholders."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-shield-alt"})}),e.jsx("h4",{children:"Robust Privacy Measures"}),e.jsx("p",{children:"At Hrify Digital, we prioritize data privacy and security by implementing robust measures, including encryption and strict access controls."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-lightbulb"})}),e.jsx("h4",{children:"Understanding Complexity"}),e.jsx("p",{children:"Hrify Digital offers model interpretability solutions, including the use of interpretable models and model-agnostic techniques for complex models."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-chart-pie"})}),e.jsx("h4",{children:"Maximizing ROI"}),e.jsx("p",{children:"Hrify Digital defines clear objectives and KPIs for Data Science projects, regularly assessing and measuring their impact for a strong ROI."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-cogs"})}),e.jsx("h4",{children:"Seamless Integration"}),e.jsx("p",{children:"We at Hrify Digital ensure the seamless adoption and integration of Data Science solutions by involving stakeholders from the beginning and providing ongoing support."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-balance-scale"})}),e.jsx("h4",{children:"Ethical Data Governance"}),e.jsx("p",{children:"Hrify Digital emphasizes ethical data governance through well-defined policies, designated data stewards, and continuous education for our Data Science teams."})]})]})]})}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Data & Analytics Case Studies"}),e.jsx("p",{className:"section-intro",children:"Discover how our Data Science solutions have helped organizations unlock the value of their data."}),e.jsxs("div",{className:"case-grid",children:[e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image",children:e.jsx("span",{className:"case-tag",children:"Retail Analytics"})}),e.jsxs("div",{className:"case-content",children:[e.jsx("h4",{children:"Customer Segmentation"}),e.jsx("p",{children:"Increased marketing ROI by 45% for a retail chain through advanced customer segmentation and personalized targeting strategies."}),e.jsx("a",{href:"#",className:"case-link",children:"View Case Study →"})]})]}),e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image",children:e.jsx("span",{className:"case-tag",children:"Financial Services"})}),e.jsxs("div",{className:"case-content",children:[e.jsx("h4",{children:"Fraud Detection System"}),e.jsx("p",{children:"Reduced fraudulent transactions by 78% for a banking institution using our anomaly detection and machine learning algorithms."}),e.jsx("a",{href:"#",className:"case-link",children:"View Case Study →"})]})]}),e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image",children:e.jsx("span",{className:"case-tag",children:"Manufacturing"})}),e.jsxs("div",{className:"case-content",children:[e.jsx("h4",{children:"Predictive Maintenance"}),e.jsx("p",{children:"Decreased equipment downtime by 62% and maintenance costs by 35% through our predictive maintenance data science solution."}),e.jsx("a",{href:"#",className:"case-link",children:"View Case Study →"})]})]})]})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Ready to Unlock the Power of Your Data?"}),e.jsx("p",{children:"Our data science experts are ready to help you transform your raw data into valuable business insights."}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Schedule a Consultation"})]})})]})]}),Ay=d("assets/images/newBanner/data.an5.webp"),Ty=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Ay,alt:"Analytics Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            :root {
              --primary: #1B8DBB;
              --primary-dark: #15749A;
              --secondary: #4FC3F7;
              --dark: #1e293b;
              --light: #f8fafc;
              --gray: #64748b;
              --light-gray: #e2e8f0;
              --gradient-start: #15749A;
              --gradient-end: #1B8DBB;
              --light-red: #E8F4FA;
            }

            body {
              font-family: 'Poppins', sans-serif;
              color: var(--dark);
              background-color: var(--light);
              line-height: 1.6;
            }

            .section-title {
              font-weight: 700;
              margin-bottom: 1rem;
              position: relative;
              display: inline-block;
              color: var(--primary);
            }

            .section-title::after {
              content: '';
              position: absolute;
              bottom: -10px;
              left: 0;
              width: 50px;
              height: 4px;
              background: var(--secondary);
              border-radius: 2px;
            }

            .text-center .section-title::after {
              left: 50%;
              transform: translateX(-50%);
            }

            .hero-section {
              background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
              color: white;
              padding: 7rem 0;
              position: relative;
              overflow: hidden;
            }

            .hero-section::before {
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              width: 100%;
              height: 100%;
              background-image: url('https://via.placeholder.com/1920x1080');
              background-size: cover;
              opacity: 0.1;
              z-index: 0;
            }

            .hero-content {
              position: relative;
              z-index: 1;
            }

            .hero-image {
              position: relative;
              z-index: 1;
            }

            .benefit-card {
              background-color: rgba(255, 255, 255, 0.15);
              backdrop-filter: blur(10px);
              border-radius: 12px;
              padding: 1.5rem;
              transition: transform 0.3s ease;
              height: 100%;
              border: 1px solid rgba(255, 255, 255, 0.2);
            }

            .benefit-card:hover {
              transform: translateY(-5px);
            }

            .feature-card {
              background-color: white;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
              transition: all 0.3s ease;
              height: 100%;
              border: 1px solid var(--light-gray);
            }

            .feature-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
            }

            .feature-icon {
              width: 80px;
              height: 80px;
              background-color: var(--light-red);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 1.5rem;
              color: var(--primary);
              font-size: 2rem;
            }

            .feature-card h3 {
              color: var(--primary);
              font-weight: 600;
              margin-bottom: 1rem;
            }

            .case-study-card {
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
              height: 100%;
              background-color: white;
              border: 1px solid var(--light-gray);
              transition: all 0.3s ease;
            }

            .case-study-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
            }

            .case-study-image {
              height: 200px;
              background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
            }

            .case-study-tag {
              position: absolute;
              top: 1rem;
              left: 1rem;
              background-color: rgba(255, 255, 255, 0.2);
              backdrop-filter: blur(5px);
              padding: 0.5rem 1rem;
              border-radius: 30px;
              font-size: 0.8rem;
              font-weight: 500;
            }

            .contact-section {
              background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
              color: white;
              padding: 5rem 0;
              position: relative;
              overflow: hidden;
            }

            .contact-section::before {
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              width: 100%;
              height: 100%;
              background-image: url('https://via.placeholder.com/1920x1080');
              background-size: cover;
              opacity: 0.05;
              z-index: 0;
            }

            .contact-form {
              background-color: white;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
              padding: 2.5rem;
              position: relative;
              z-index: 1;
            }

            .form-control, .form-select {
              padding: 0.8rem 1.2rem;
              border-radius: 8px;
              border: 1px solid var(--light-gray);
              background-color: var(--light);
              transition: all 0.3s ease;
            }

            .form-control:focus, .form-select:focus {
              border-color: var(--primary);
              box-shadow: 0 0 0 3px rgba(27, 141, 187, 0.1);
            }

            .btn-primary {
              background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
              border: none;
              padding: 0.8rem 2rem;
              border-radius: 8px;
              font-weight: 500;
              transition: all 0.3s ease;
            }

            .btn-primary:hover {
              background: linear-gradient(135deg, var(--primary-dark), var(--gradient-start));
              transform: translateY(-3px);
              box-shadow: 0 10px 20px rgba(27, 141, 187, 0.2);
            }

            .btn-outline {
              background: transparent;
              border: 2px solid white;
              color: white;
              padding: 0.8rem 2rem;
              border-radius: 8px;
              font-weight: 500;
              transition: all 0.3s ease;
            }

            .btn-outline:hover {
              background: white;
              color: var(--primary);
              transform: translateY(-3px);
              box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
            }

            .section-bg {
              background-color: var(--light-red);
            }

            .service-box {
              background-color: white;
              border-radius: 16px;
              padding: 2.5rem;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
              border: 1px solid var(--light-gray);
            }

            .floating-shape {
              position: absolute;
              opacity: 0.1;
              z-index: 0;
            }

            .shape-1 {
              top: 10%;
              left: 5%;
              width: 300px;
              height: 300px;
              border-radius: 50%;
              background: var(--secondary);
            }

            .shape-2 {
              bottom: 10%;
              right: 5%;
              width: 200px;
              height: 200px;
              border-radius: 50%;
              background: var(--primary);
            }
          `}),e.jsxs("section",{className:"hero-section",style:{borderRadius:10},children:[e.jsx("div",{className:"floating-shape shape-1"}),e.jsx("div",{className:"floating-shape shape-2"}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsxs("div",{className:"col-lg-6 mb-5 mb-lg-0 hero-content",children:[e.jsx("div",{className:"d-flex align-items-center mb-3",children:e.jsx("div",{className:"me-2 bg-white text-primary px-3 py-1 rounded-pill",style:{fontSize:"0.8rem",fontWeight:"600"},children:"Home » Data Analytics » Analytics"})}),e.jsx("h1",{className:"display-4 fw-bold mb-4",children:"Make Every Decision Count"}),e.jsx("p",{className:"lead mb-5",children:"Go beyond basic reporting to uncover hidden patterns, predict future trends, with actionable insights to optimize performance and achieve your business goals."}),e.jsxs("div",{className:"row mb-4",children:[e.jsx("div",{className:"col-md-4",children:e.jsx("div",{className:"benefit-card",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"fas fa-lightbulb me-3",style:{fontSize:"1.5rem"}}),e.jsx("h5",{className:"fw-semibold mb-0",children:"Actionable Insights"})]})})}),e.jsx("div",{className:"col-md-4",children:e.jsx("div",{className:"benefit-card",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"fas fa-chart-bar me-3",style:{fontSize:"1.5rem"}}),e.jsx("h5",{className:"fw-semibold mb-0",children:"Data-Driven Decisions"})]})})}),e.jsx("div",{className:"col-md-4",children:e.jsx("div",{className:"benefit-card",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"fas fa-rocket me-3",style:{fontSize:"1.5rem"}}),e.jsx("h5",{className:"fw-semibold mb-0",children:"Optimize Performance"})]})})})]}),e.jsx("a",{href:"#contact",className:"btn btn-outline btn-lg px-4 rounded-pill",children:"Schedule a Meeting"})]}),e.jsx("div",{className:"col-lg-6 hero-image",children:e.jsx("img",{src:"https://placehold.co/600x400",alt:"Analytics Visualization",className:"img-fluid rounded-4 shadow"})})]})})]}),e.jsx("section",{className:"py-5 section-bg",children:e.jsxs("div",{className:"container py-5",children:[e.jsx("div",{className:"row justify-content-center mb-5",children:e.jsxs("div",{className:"col-lg-8 text-center",children:[e.jsx("h2",{className:"display-5 fw-bold section-title mb-4",children:"Data & Analytics"}),e.jsx("p",{className:"lead text-muted",children:"Explore Hrify Digital's Analytics For Advanced Statistics, Powerful Visualization, And Cutting-Edge Machine Learning For Precise Insights And Smart Decisions."})]})}),e.jsx("div",{className:"service-box mb-5",children:e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital's Data Analytics can offer top-notch risk management where analytics can identify potential threats and vulnerabilities by analyzing data, helping your business minimize losses and protect your reputation. In contrast, predictive analysis helps to anticipate changes in the markets and optimize operations and strategic decisions based on reliable data to ready your business for radical changes in the ever-changing business environment."})}),e.jsx("div",{className:"text-center",children:e.jsx("a",{href:"#contact",className:"btn btn-primary btn-lg px-5 rounded-pill",children:"Schedule a Meeting"})})]})}),e.jsx("section",{className:"py-5",children:e.jsxs("div",{className:"container py-5",children:[e.jsx("div",{className:"row justify-content-center mb-5",children:e.jsxs("div",{className:"col-lg-8 text-center",children:[e.jsx("h2",{className:"display-5 fw-bold section-title mb-4",children:"Support Features"}),e.jsx("p",{className:"lead text-muted",children:"Our comprehensive analytics capabilities to help you transform data into strategic business advantages."})]})}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-database"})}),e.jsx("h3",{children:"Data Quality & Availability"}),e.jsx("p",{className:"text-muted mb-0",children:"We at Hrify Digital have successfully implemented data quality checks and data cleansing processes, ensuring accurate and reliable insights. Centralizing data sources will streamline access, enabling our team to collaborate more efficiently."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-shield-alt"})}),e.jsx("h3",{children:"Data Security & Privacy"}),e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital takes data security seriously, enforcing strict access controls and authentication mechanisms, safeguarding sensitive information. Our commitment to compliance with data privacy regulations builds trust with customers and partners."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-link"})}),e.jsx("h3",{children:"Integration of Data Sources"}),e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital's centralized data landscape fosters better cross-departmental collaboration and data-driven decision-making. Data governance protocols facilitate seamless integration, minimizing data silos."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-coins"})}),e.jsx("h3",{children:"Costs & Infrastructure"}),e.jsx("p",{className:"text-muted mb-0",children:"By adopting cloud-based solutions, Hrify Digital optimizes costs and gains scalable data analytics resources. Utilizing open-source tools strategically maximizes our return on investment."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-balance-scale"})}),e.jsx("h3",{children:"Data Governance & Compliance"}),e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital's centralized data landscape fosters better cross-departmental collaboration and data-driven decision-making. Data governance protocols facilitate seamless integration, minimizing data silos."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-clock"})}),e.jsx("h3",{children:"Time Constraints"}),e.jsx("p",{className:"text-muted mb-0",children:"Our team prioritizes analytics projects based on impact and efficiently manages resources. Automating data processing tasks allows us to focus on strategic analysis."})]})})]})]})}),e.jsx("section",{className:"py-5 section-bg",children:e.jsxs("div",{className:"container py-5",children:[e.jsx("div",{className:"row justify-content-center mb-5",children:e.jsxs("div",{className:"col-lg-8 text-center",children:[e.jsx("h2",{className:"display-5 fw-bold section-title mb-4",children:"Data & Analytics Case Studies"}),e.jsx("p",{className:"lead text-muted",children:"Discover how our Analytics solutions have transformed businesses through data-driven insights."})]})}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"case-study-card",children:[e.jsxs("div",{className:"case-study-image",children:[e.jsx("span",{className:"case-study-tag",children:"E-Commerce"}),e.jsx("i",{className:"fas fa-shopping-cart",style:{fontSize:"3rem"}})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"h4 fw-bold mb-3",children:"Customer Behavior Analysis"}),e.jsx("p",{className:"text-muted mb-3",children:"Increased conversion rates by 37% for an online retailer through advanced customer journey analytics and personalized recommendations."}),e.jsx("a",{href:"#",className:"btn btn-primary btn-sm px-3 rounded-pill",children:"View Case Study"})]})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"case-study-card",children:[e.jsxs("div",{className:"case-study-image",children:[e.jsx("span",{className:"case-study-tag",children:"Healthcare"}),e.jsx("i",{className:"fas fa-heartbeat",style:{fontSize:"3rem"}})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"h4 fw-bold mb-3",children:"Operational Efficiency"}),e.jsx("p",{className:"text-muted mb-3",children:"Reduced patient wait times by 42% and optimized resource allocation for a hospital network using our advanced analytics platform."}),e.jsx("a",{href:"#",className:"btn btn-primary btn-sm px-3 rounded-pill",children:"View Case Study"})]})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"case-study-card",children:[e.jsxs("div",{className:"case-study-image",children:[e.jsx("span",{className:"case-study-tag",children:"Financial Services"}),e.jsx("i",{className:"fas fa-chart-line",style:{fontSize:"3rem"}})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"h4 fw-bold mb-3",children:"Risk Management"}),e.jsx("p",{className:"text-muted mb-3",children:"Improved fraud detection accuracy by 68% and reduced false positives by 45% for a major financial institution using our predictive analytics."}),e.jsx("a",{href:"#",className:"btn btn-primary btn-sm px-3 rounded-pill",children:"View Case Study"})]})]})})]})]})}),e.jsxs("section",{id:"contact",className:"contact-section",children:[e.jsx("div",{className:"floating-shape shape-1"}),e.jsx("div",{className:"floating-shape shape-2"}),e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"row justify-content-center mb-5",children:e.jsxs("div",{className:"col-lg-8 text-center",children:[e.jsx("h2",{className:"display-5 fw-bold mb-3",children:"Transform Your Data Into Strategic Advantage"}),e.jsx("p",{className:"lead mb-0",children:"Our analytics experts are ready to help you uncover actionable insights that drive business growth."})]})}),e.jsx("div",{className:"row justify-content-center",children:e.jsx("div",{className:"col-lg-8",children:e.jsx("div",{className:"contact-form",children:e.jsx("form",{children:e.jsxs("div",{className:"row g-4",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{htmlFor:"name",className:"form-label fw-semibold text-dark",children:"Your Name"}),e.jsx("input",{type:"text",className:"form-control",id:"name",placeholder:"John Smith"})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{htmlFor:"email",className:"form-label fw-semibold text-dark",children:"Business Email"}),e.jsx("input",{type:"email",className:"form-control",id:"email",placeholder:"john@company.com"})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{htmlFor:"company",className:"form-label fw-semibold text-dark",children:"Company Name"}),e.jsx("input",{type:"text",className:"form-control",id:"company",placeholder:"Your Company, Inc."})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{htmlFor:"industry",className:"form-label fw-semibold text-dark",children:"Industry"}),e.jsxs("select",{className:"form-select",id:"industry",children:[e.jsx("option",{selected:!0,children:"Select your industry"}),e.jsx("option",{value:"finance",children:"Finance & Banking"}),e.jsx("option",{value:"healthcare",children:"Healthcare"}),e.jsx("option",{value:"retail",children:"Retail & E-commerce"}),e.jsx("option",{value:"manufacturing",children:"Manufacturing"}),e.jsx("option",{value:"technology",children:"Technology"}),e.jsx("option",{value:"other",children:"Other"})]})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{htmlFor:"message",className:"form-label fw-semibold text-dark",children:"Tell Us About Your Analytics Needs"}),e.jsx("textarea",{className:"form-control",id:"message",rows:4,placeholder:"Describe your current analytics challenges and goals..."})]}),e.jsx("div",{className:"col-12 text-center",children:e.jsx("button",{type:"submit",className:"btn btn-primary px-5 py-3 rounded-pill mt-3",children:"Schedule a Meeting"})})]})})})})})]})]})]})]}),Fy=d("/assets/images/newBanner/Evaluation.webp"),Ly=()=>e.jsxs("main",{children:[e.jsx("div",{className:"slider",children:e.jsx("div",{className:"slides",children:e.jsx("div",{className:"slide",children:e.jsx("img",{src:Fy,alt:"Reports Banner"})})})}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            :root {
              --primary: #1B8DBB;
              --primary-dark: #15749A;
              --secondary: #4FC3F7;
              --dark: #1e293b;
              --light: #f8fafc;
              --gray: #64748b;
              --light-gray: #e2e8f0;
              --gradient-start: #15749A;
              --gradient-end: #1B8DBB;
              --light-red: #E8F4FA;
            }

            body {
              font-family: 'Poppins', sans-serif;
              color: var(--dark);
              background-color: var(--light);
              line-height: 1.6;
            }

            .section-title {
              font-weight: 700;
              margin-bottom: 1rem;
              position: relative;
              display: inline-block;
              color: var(--primary);
            }

            .section-title::after {
              content: '';
              position: absolute;
              bottom: -10px;
              left: 0;
              width: 50px;
              height: 4px;
              background: var(--secondary);
              border-radius: 2px;
            }

            .text-center .section-title::after {
              left: 50%;
              transform: translateX(-50%);
            }

            .hero-section {
              background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
              color: white;
              padding: 7rem 0;
              position: relative;
              overflow: hidden;
            }

            .hero-section::before {
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              width: 100%;
              height: 100%;
              background-image: url('https://via.placeholder.com/1920x1080');
              background-size: cover;
              opacity: 0.1;
              z-index: 0;
            }

            .hero-content {
              position: relative;
              z-index: 1;
            }

            .hero-image {
              position: relative;
              z-index: 1;
            }

            .benefit-card {
              background-color: rgba(255, 255, 255, 0.15);
              backdrop-filter: blur(10px);
              border-radius: 12px;
              padding: 1.5rem;
              transition: transform 0.3s ease;
              height: 100%;
              border: 1px solid rgba(255, 255, 255, 0.2);
            }

            .benefit-card:hover {
              transform: translateY(-5px);
            }

            .feature-card {
              background-color: white;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
              transition: all 0.3s ease;
              height: 100%;
              border: 1px solid var(--light-gray);
            }

            .feature-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
            }

            .feature-icon {
              width: 80px;
              height: 80px;
              background-color: var(--light-red);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 1.5rem;
              color: var(--primary);
              font-size: 2rem;
            }

            .feature-card h3 {
              color: var(--primary);
              font-weight: 600;
              margin-bottom: 1rem;
            }

            .case-study-card {
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
              height: 100%;
              background-color: white;
              border: 1px solid var(--light-gray);
              transition: all 0.3s ease;
            }

            .case-study-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
            }

            .case-study-image {
              height: 200px;
              background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
            }

            .case-study-tag {
              position: absolute;
              top: 1rem;
              left: 1rem;
              background-color: rgba(255, 255, 255, 0.2);
              backdrop-filter: blur(5px);
              padding: 0.5rem 1rem;
              border-radius: 30px;
              font-size: 0.8rem;
              font-weight: 500;
            }

            .contact-section {
              background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
              color: white;
              padding: 5rem 0;
              position: relative;
              overflow: hidden;
            }

            .contact-section::before {
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              width: 100%;
              height: 100%;
              background-image: url('https://via.placeholder.com/1920x1080');
              background-size: cover;
              opacity: 0.05;
              z-index: 0;
            }

            .contact-form {
              background-color: white;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
              padding: 2.5rem;
              position: relative;
              z-index: 1;
            }

            .form-control, .form-select {
              padding: 0.8rem 1.2rem;
              border-radius: 8px;
              border: 1px solid var(--light-gray);
              background-color: var(--light);
              transition: all 0.3s ease;
            }

            .form-control:focus, .form-select:focus {
              border-color: var(--primary);
              box-shadow: 0 0 0 3px rgba(27, 141, 187, 0.1);
            }

            .btn-primary {
              background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
              border: none;
              padding: 0.8rem 2rem;
              border-radius: 8px;
              font-weight: 500;
              transition: all 0.3s ease;
            }

            .btn-primary:hover {
              background: linear-gradient(135deg, var(--primary-dark), var(--gradient-start));
              transform: translateY(-3px);
              box-shadow: 0 10px 20px rgba(27, 141, 187, 0.2);
            }

            .btn-outline {
              background: transparent;
              border: 2px solid white;
              color: white;
              padding: 0.8rem 2rem;
              border-radius: 8px;
              font-weight: 500;
              transition: all 0.3s ease;
            }

            .btn-outline:hover {
              background: white;
              color: var(--primary);
              transform: translateY(-3px);
              box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
            }

            .section-bg {
              background-color: var(--light-red);
            }

            .service-box {
              background-color: white;
              border-radius: 16px;
              padding: 2.5rem;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
              border: 1px solid var(--light-gray);
            }

            .floating-shape {
              position: absolute;
              opacity: 0.1;
              z-index: 0;
            }

            .shape-1 {
              top: 10%;
              left: 5%;
              width: 300px;
              height: 300px;
              border-radius: 50%;
              background: var(--secondary);
            }

            .shape-2 {
              bottom: 10%;
              right: 5%;
              width: 200px;
              height: 200px;
              border-radius: 50%;
              background: var(--primary);
            }
          `}),e.jsxs("section",{className:"hero-section",children:[e.jsx("div",{className:"floating-shape shape-1"}),e.jsx("div",{className:"floating-shape shape-2"}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsxs("div",{className:"col-lg-6 mb-5 mb-lg-0 hero-content",children:[e.jsx("div",{className:"d-flex align-items-center mb-3",children:e.jsx("div",{className:"me-2 bg-white text-primary px-3 py-1 rounded-pill",style:{fontSize:"0.8rem",fontWeight:"600"},children:"Home » Data Analytics » Reporting"})}),e.jsx("h1",{className:"display-4 fw-bold mb-4",children:"Streamline Reporting & Gain Strategic Advantage"}),e.jsx("p",{className:"lead mb-5",children:"Simplify complex data workflows and unlock strategic insights with our intelligent Reporting solutions."}),e.jsxs("div",{className:"row mb-4",children:[e.jsx("div",{className:"col-md-4",children:e.jsx("div",{className:"benefit-card",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"fas fa-robot me-3",style:{fontSize:"1.5rem"}}),e.jsx("h5",{className:"fw-semibold mb-0",children:"Automated Efficiency"})]})})}),e.jsx("div",{className:"col-md-4",children:e.jsx("div",{className:"benefit-card",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"fas fa-sliders-h me-3",style:{fontSize:"1.5rem"}}),e.jsx("h5",{className:"fw-semibold mb-0",children:"Customizable Insights"})]})})}),e.jsx("div",{className:"col-md-4",children:e.jsx("div",{className:"benefit-card",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"fas fa-bolt me-3",style:{fontSize:"1.5rem"}}),e.jsx("h5",{className:"fw-semibold mb-0",children:"Real-Time Advantage"})]})})})]}),e.jsx("a",{href:"#contact",className:"btn btn-outline btn-lg px-4 rounded-pill",children:"Schedule a Consultation"})]}),e.jsx("div",{className:"col-lg-6 hero-image",children:e.jsx("img",{src:"https://placehold.co/600x400",alt:"Reporting Solutions Visualization",className:"img-fluid rounded-4 shadow"})})]})})]}),e.jsx("section",{className:"py-5 section-bg",children:e.jsxs("div",{className:"container py-5",children:[e.jsx("div",{className:"row justify-content-center mb-5",children:e.jsxs("div",{className:"col-lg-8 text-center",children:[e.jsx("h2",{className:"display-5 fw-bold section-title mb-4",children:"Data & Analytics"}),e.jsx("p",{className:"lead text-muted",children:"Gain valuable insights for performance monitoring, business intelligence, risk management, forecasting, and informed decision-making with Hrify Digital's Report solutions."})]})}),e.jsx("div",{className:"service-box mb-5",children:e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital's approach in reports with Data & Analytics is very valuable, enabling your business to analyze data, gain insights, and make informed decisions. In our structured format, reports can further help your business monitor performance, gain business intelligence, manage risks, and forecast future trends and outcomes, ultimately helping them to achieve better business outcomes."})}),e.jsx("div",{className:"text-center",children:e.jsx("a",{href:"#contact",className:"btn btn-primary btn-lg px-5 rounded-pill",children:"Schedule a Consultation"})})]})}),e.jsx("section",{className:"py-5",children:e.jsxs("div",{className:"container py-5",children:[e.jsx("div",{className:"row justify-content-center mb-5",children:e.jsxs("div",{className:"col-lg-8 text-center",children:[e.jsx("h2",{className:"display-5 fw-bold section-title mb-4",children:"Support Features"}),e.jsx("p",{className:"lead text-muted",children:"Our comprehensive reporting capabilities to help you transform raw data into actionable business intelligence."})]})}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-tachometer-alt"})}),e.jsx("h3",{children:"Performance & Latency"}),e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital's experienced database optimization team continuously fine-tunes queries and indexing, ensuring efficient data retrieval for faster report generation."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-desktop"})}),e.jsx("h3",{children:"User Interface & Experience"}),e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital's customizable report templates and interactive visualizations allow clients to tailor reports according to their preferences easily."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-plug"})}),e.jsx("h3",{children:"Integration with Existing Systems"}),e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital offers seamless integration with various data warehouses and analytics tools, supported by their extensive library of data connectors and APIs."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-edit"})}),e.jsx("h3",{children:"Report Customization"}),e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital's report is designed with flexibility in mind, allowing clients to create custom reports using the company's intuitive report builder."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-dollar-sign"})}),e.jsx("h3",{children:"Costs & Licensing"}),e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital offers transparent pricing models, tailoring solutions to each client's unique needs, ensuring a cost-effective service without compromising quality."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-rocket"})}),e.jsx("h3",{children:"Report Performance Optimization"}),e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital implements data optimization strategies, such as materialized views and query optimization, to enhance report performance and reduce processing times for their clients."})]})})]})]})}),e.jsx("section",{className:"py-5 section-bg",children:e.jsxs("div",{className:"container py-5",children:[e.jsx("div",{className:"row justify-content-center mb-5",children:e.jsxs("div",{className:"col-lg-8 text-center",children:[e.jsx("h2",{className:"display-5 fw-bold section-title mb-4",children:"Data & Analytics Case Studies"}),e.jsx("p",{className:"lead text-muted",children:"Discover how our Reporting solutions have transformed businesses through streamlined data insights."})]})}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"case-study-card",children:[e.jsxs("div",{className:"case-study-image",children:[e.jsx("span",{className:"case-study-tag",children:"Retail"}),e.jsx("i",{className:"fas fa-chart-pie",style:{fontSize:"3rem"}})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"h4 fw-bold mb-3",children:"Sales Performance Dashboard"}),e.jsx("p",{className:"text-muted mb-3",children:"Reduced reporting time by 85% and increased sales team productivity by 32% through automated daily performance dashboards for a national retail chain."}),e.jsx("a",{href:"#",className:"btn btn-primary btn-sm px-3 rounded-pill",children:"View Case Study"})]})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"case-study-card",children:[e.jsxs("div",{className:"case-study-image",children:[e.jsx("span",{className:"case-study-tag",children:"Manufacturing"}),e.jsx("i",{className:"fas fa-industry",style:{fontSize:"3rem"}})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"h4 fw-bold mb-3",children:"Supply Chain Visibility"}),e.jsx("p",{className:"text-muted mb-3",children:"Improved inventory management by 47% and reduced stockouts by 62% with real-time supply chain reporting for a global manufacturing company."}),e.jsx("a",{href:"#",className:"btn btn-primary btn-sm px-3 rounded-pill",children:"View Case Study"})]})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"case-study-card",children:[e.jsxs("div",{className:"case-study-image",children:[e.jsx("span",{className:"case-study-tag",children:"Healthcare"}),e.jsx("i",{className:"fas fa-heartbeat",style:{fontSize:"3rem"}})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"h4 fw-bold mb-3",children:"Patient Care Analytics"}),e.jsx("p",{className:"text-muted mb-3",children:"Enabled data-driven decision making that improved patient outcomes by 28% and reduced administrative reporting time by 75% for a regional hospital network."}),e.jsx("a",{href:"#",className:"btn btn-primary btn-sm px-3 rounded-pill",children:"View Case Study"})]})]})})]})]})})]})]}),Ry=d("assets/images/newBanner/data.an7.webp");d("assets/images/Banner/newbanimg/bigdata.webp");const Hy=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Ry,alt:"Big Data & Data Lake Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            :root {
              --primary: #1B8DBB;
              --primary-dark: #15749A;
              --secondary: #4FC3F7;
              --dark: #1e293b;
              --light: #f8fafc;
              --gray: #64748b;
              --light-gray: #e2e8f0;
              --gradient-start: #15749A;
              --gradient-end: #1B8DBB;
              --light-red: #E8F4FA;
            }

            body {
              font-family: 'Poppins', sans-serif;
              color: var(--dark);
              background-color: var(--light);
              line-height: 1.6;
            }

            .section-title {
              font-weight: 700;
              margin-bottom: 1rem;
              position: relative;
              display: inline-block;
              color: var(--primary);
            }

            .section-title::after {
              content: '';
              position: absolute;
              bottom: -10px;
              left: 0;
              width: 50px;
              height: 4px;
              background: var(--secondary);
              border-radius: 2px;
            }

            .text-center .section-title::after {
              left: 50%;
              transform: translateX(-50%);
            }

            .hero-section {
              background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
              color: white;
              padding: 7rem 0;
              position: relative;
              overflow: hidden;
            }

            .hero-section::before {
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0,0,0,0.1);
              z-index: 0;
            }

            .hero-content {
              position: relative;
              z-index: 1;
            }

            .hero-image {
              position: relative;
              z-index: 1;
            }

            .benefit-card {
              background-color: rgba(255, 255, 255, 0.15);
              backdrop-filter: blur(10px);
              border-radius: 12px;
              padding: 1.5rem;
              transition: transform 0.3s ease;
              height: 100%;
              border: 1px solid rgba(255, 255, 255, 0.2);
            }

            .benefit-card:hover {
              transform: translateY(-5px);
            }

            .feature-card {
              background-color: white;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
              transition: all 0.3s ease;
              height: 100%;
              border: 1px solid var(--light-gray);
            }

            .feature-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
            }

            .feature-icon {
              width: 80px;
              height: 80px;
              background-color: var(--light-red);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 1.5rem;
              color: var(--primary);
              font-size: 2rem;
            }

            .feature-card h3 {
              color: var(--primary);
              font-weight: 600;
              margin-bottom: 1rem;
            }

            .case-study-card {
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
              height: 100%;
              background-color: white;
              border: 1px solid var(--light-gray);
              transition: all 0.3s ease;
            }

            .case-study-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
            }

            .case-study-image {
              height: 200px;
              background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
            }

            .case-study-tag {
              position: absolute;
              top: 1rem;
              left: 1rem;
              background-color: rgba(255, 255, 255, 0.2);
              backdrop-filter: blur(5px);
              padding: 0.5rem 1rem;
              border-radius: 30px;
              font-size: 0.8rem;
              font-weight: 500;
            }

            .contact-section {
              background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
              color: white;
              padding: 5rem 0;
              position: relative;
              overflow: hidden;
            }

            .contact-section::before {
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0,0,0,0.05);
              z-index: 0;
            }

            .contact-form {
              background-color: white;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
              padding: 2.5rem;
              position: relative;
              z-index: 1;
            }

            .form-control, .form-select {
              padding: 0.8rem 1.2rem;
              border-radius: 8px;
              border: 1px solid var(--light-gray);
              background-color: var(--light);
              transition: all 0.3s ease;
            }

            .form-control:focus, .form-select:focus {
              border-color: var(--primary);
              box-shadow: 0 0 0 3px rgba(27, 141, 187, 0.1);
            }

            .btn-primary {
              background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
              border: none;
              padding: 0.8rem 2rem;
              border-radius: 8px;
              font-weight: 500;
              transition: all 0.3s ease;
            }

            .btn-primary:hover {
              background: linear-gradient(135deg, var(--primary-dark), var(--gradient-start));
              transform: translateY(-3px);
              box-shadow: 0 10px 20px rgba(27, 141, 187, 0.2);
            }

            .btn-outline {
              background: transparent;
              border: 2px solid white;
              color: white;
              padding: 0.8rem 2rem;
              border-radius: 8px;
              font-weight: 500;
              transition: all 0.3s ease;
            }

            .btn-outline:hover {
              background: white;
              color: var(--primary);
              transform: translateY(-3px);
              box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
            }

            .section-bg {
              background-color: var(--light-red);
            }

            .service-box {
              background-color: white;
              border-radius: 16px;
              padding: 2.5rem;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
              border: 1px solid var(--light-gray);
            }

            .floating-shape {
              position: absolute;
              opacity: 0.1;
              z-index: 0;
            }

            .shape-1 {
              top: 10%;
              left: 5%;
              width: 300px;
              height: 300px;
              border-radius: 50%;
              background: var(--secondary);
            }

            .shape-2 {
              bottom: 10%;
              right: 5%;
              width: 200px;
              height: 200px;
              border-radius: 50%;
              background: var(--primary);
            }
          `}),e.jsxs("section",{className:"hero-section",children:[e.jsx("div",{className:"floating-shape shape-1"}),e.jsx("div",{className:"floating-shape shape-2"}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsxs("div",{className:"col-lg-6 mb-5 mb-lg-0 hero-content",children:[e.jsx("div",{className:"d-flex align-items-center mb-3",children:e.jsx("div",{className:"me-2 bg-white text-primary px-3 py-1 rounded-pill",style:{fontSize:"0.8rem",fontWeight:"600"},children:"Home » Data Analytics » Big Data & Data Lake"})}),e.jsx("h1",{className:"display-4 fw-bold mb-4",children:"Unlock Valuable Insights From Big Data & Data Lake"}),e.jsx("p",{className:"lead mb-5",children:"Consolidate all your Data Assets-Structured, Semi-Structured, and Unstructured—to gain a holistic view of your business and make confident data-driven decisions."}),e.jsxs("div",{className:"row mb-4",children:[e.jsx("div",{className:"col-md-4",children:e.jsx("div",{className:"benefit-card",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"fas fa-database me-3",style:{fontSize:"1.5rem"}}),e.jsx("h5",{className:"fw-semibold mb-0",children:"Unified Data Management"})]})})}),e.jsx("div",{className:"col-md-4",children:e.jsx("div",{className:"benefit-card",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"fas fa-chart-line me-3",style:{fontSize:"1.5rem"}}),e.jsx("h5",{className:"fw-semibold mb-0",children:"Actionable Insights at Scale"})]})})}),e.jsx("div",{className:"col-md-4",children:e.jsx("div",{className:"benefit-card",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"fas fa-brain me-3",style:{fontSize:"1.5rem"}}),e.jsx("h5",{className:"fw-semibold mb-0",children:"Advanced Analytics Capabilities"})]})})})]}),e.jsx("a",{href:"#contact",className:"btn btn-outline btn-lg px-4 rounded-pill",children:"Talk to Our Experts"})]}),e.jsx("div",{className:"col-lg-6 hero-image",children:e.jsx("img",{src:"https://via.placeholder.com/600x500",alt:"Big Data & Data Lake Visualization",className:"img-fluid rounded-4 shadow"})})]})})]}),e.jsx("section",{className:"py-5 section-bg",children:e.jsxs("div",{className:"container py-5",children:[e.jsx("div",{className:"row justify-content-center mb-5",children:e.jsxs("div",{className:"col-lg-8 text-center",children:[e.jsx("h2",{className:"display-5 fw-bold section-title mb-4",children:"Data & Analytics"}),e.jsx("p",{className:"lead text-muted",children:"Excel in managing diverse information by leveraging Hrify Digital's Big Data and Data Lake services, unlocking valuable insights and empowering informed decision-making."})]})}),e.jsx("div",{className:"service-box mb-5",children:e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital's comprehensive Big Data services allow businesses to optimize their operations by effectively integrating, managing, and analyzing their data. Our cutting-edge Data Lake solution empowers organizations to scale their data infrastructure and facilitates more informed decision-making processes, leading to superior outcomes and increased success."})}),e.jsx("div",{className:"text-center",children:e.jsx("a",{href:"#contact",className:"btn btn-primary btn-lg px-5 rounded-pill",children:"Talk to Our Experts"})})]})}),e.jsx("section",{className:"py-5",children:e.jsxs("div",{className:"container py-5",children:[e.jsx("div",{className:"row justify-content-center mb-5",children:e.jsxs("div",{className:"col-lg-8 text-center",children:[e.jsx("h2",{className:"display-5 fw-bold section-title mb-4",children:"Support Features"}),e.jsx("p",{className:"lead text-muted",children:"Our comprehensive Big Data & Data Lake capabilities to help you harness the full potential of your data assets."})]})}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-check-circle"})}),e.jsx("h3",{children:"Data Quality Framework"}),e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital has established robust data quality standards and implemented data validation processes. Our team regularly monitors data quality metrics and has automated data cleansing routines to ensure high-quality data."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-shield-alt"})}),e.jsx("h3",{children:"Advanced-Data Security Measures"}),e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital employs cutting-edge encryption techniques and access controls to safeguard sensitive data from unauthorized access. We also perform regular security audits to identify and address potential vulnerabilities."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-user-lock"})}),e.jsx("h3",{children:"Centralized Access Control"}),e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital has implemented a centralized access control system based on role-based access control (RBAC), ensuring that data access is governed based on user roles and responsibilities."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-tags"})}),e.jsx("h3",{children:"Robust Metadata Management"}),e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital has implemented advanced metadata management tools that provide comprehensive data cataloging and documentation, enabling users to quickly discover and understand the data stored in their Data Lake."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-bolt"})}),e.jsx("h3",{children:"Real-time Data Ingestion"}),e.jsx("p",{className:"text-muted mb-0",children:"We at Hrify Digital utilize real-time data ingestion solutions that enable them to process streaming data efficiently, reducing data latency and supporting critical applications."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-layer-group"})}),e.jsx("h3",{children:"Optimized Data Lake Architecture"}),e.jsx("p",{className:"text-muted mb-0",children:"Our expert team has designed our Data Lake architecture using best practices, such as data partitioning, compression, and indexing, to optimize data storage, processing, and retrieval."})]})})]})]})}),e.jsx("section",{className:"py-5 section-bg",children:e.jsxs("div",{className:"container py-5",children:[e.jsx("div",{className:"row justify-content-center mb-5",children:e.jsxs("div",{className:"col-lg-8 text-center",children:[e.jsx("h2",{className:"display-5 fw-bold section-title mb-4",children:"Data & Analytics Case Studies"}),e.jsx("p",{className:"lead text-muted",children:"Discover how our Big Data & Data Lake solutions have transformed businesses through advanced data management and analytics."})]})}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"case-study-card",children:[e.jsxs("div",{className:"case-study-image",children:[e.jsx("span",{className:"case-study-tag",children:"Financial Services"}),e.jsx("i",{className:"fas fa-university",style:{fontSize:"3rem"}})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"h4 fw-bold mb-3",children:"Customer 360° View"}),e.jsx("p",{className:"text-muted mb-3",children:"Increased cross-selling opportunities by 42% and improved customer retention by 28% through a unified customer data platform for a major financial institution."}),e.jsx("a",{href:"#",className:"btn btn-primary btn-sm px-3 rounded-pill",children:"View Case Study"})]})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"case-study-card",children:[e.jsxs("div",{className:"case-study-image",children:[e.jsx("span",{className:"case-study-tag",children:"E-Commerce"}),e.jsx("i",{className:"fas fa-shopping-cart",style:{fontSize:"3rem"}})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"h4 fw-bold mb-3",children:"Real-time Personalization"}),e.jsx("p",{className:"text-muted mb-3",children:"Boosted conversion rates by 65% and average order value by 31% with real-time personalization powered by our scalable Data Lake solution for an online retailer."}),e.jsx("a",{href:"#",className:"btn btn-primary btn-sm px-3 rounded-pill",children:"View Case Study"})]})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"case-study-card",children:[e.jsxs("div",{className:"case-study-image",children:[e.jsx("span",{className:"case-study-tag",children:"Manufacturing"}),e.jsx("i",{className:"fas fa-industry",style:{fontSize:"3rem"}})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"h4 fw-bold mb-3",children:"Predictive Maintenance"}),e.jsx("p",{className:"text-muted mb-3",children:"Reduced equipment downtime by 73% and maintenance costs by 45% through IoT data analysis and predictive maintenance models for a global manufacturing company."}),e.jsx("a",{href:"#",className:"btn btn-primary btn-sm px-3 rounded-pill",children:"View Case Study"})]})]})})]})]})})]})]}),Py=d("assets/images/newBanner/data.an8.webp");d("assets/images/Banner/newbanimg/Data-Fabric.webp");const Oy=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Py,alt:"Data Fabric Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            :root {
              --primary: #1B8DBB;
              --primary-dark: #15749A;
              --secondary: #4FC3F7;
              --dark: #1e293b;
              --light: #f8fafc;
              --gray: #64748b;
              --light-gray: #e2e8f0;
              --gradient-start: #15749A;
              --gradient-end: #1B8DBB;
              --light-red: #E8F4FA;
            }

            body {
              font-family: 'Poppins', sans-serif;
              color: var(--dark);
              background-color: var(--light);
              line-height: 1.6;
            }

            .section-title {
              font-weight: 700;
              margin-bottom: 1rem;
              position: relative;
              display: inline-block;
              color: var(--primary);
            }

            .section-title::after {
              content: '';
              position: absolute;
              bottom: -10px;
              left: 0;
              width: 50px;
              height: 4px;
              background: var(--secondary);
              border-radius: 2px;
            }

            .text-center .section-title::after {
              left: 50%;
              transform: translateX(-50%);
            }

            .hero-section {
              background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
              color: white;
              padding: 7rem 0;
              position: relative;
              overflow: hidden;
            }

            .hero-section::before {
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0,0,0,0.1);
              z-index: 0;
            }

            .hero-content {
              position: relative;
              z-index: 1;
            }

            .hero-image {
              position: relative;
              z-index: 1;
            }

            .benefit-card {
              background-color: rgba(255, 255, 255, 0.15);
              backdrop-filter: blur(10px);
              border-radius: 12px;
              padding: 1.5rem;
              transition: transform 0.3s ease;
              height: 100%;
              border: 1px solid rgba(255, 255, 255, 0.2);
            }

            .benefit-card:hover {
              transform: translateY(-5px);
            }

            .feature-card {
              background-color: white;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
              transition: all 0.3s ease;
              height: 100%;
              border: 1px solid var(--light-gray);
            }

            .feature-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
            }

            .feature-icon {
              width: 80px;
              height: 80px;
              background-color: var(--light-red);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 1.5rem;
              color: var(--primary);
              font-size: 2rem;
            }

            .feature-card h3 {
              color: var(--primary);
              font-weight: 600;
              margin-bottom: 1rem;
            }

            .case-study-card {
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
              height: 100%;
              background-color: white;
              border: 1px solid var(--light-gray);
              transition: all 0.3s ease;
            }

            .case-study-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
            }

            .case-study-image {
              height: 200px;
              background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
            }

            .case-study-tag {
              position: absolute;
              top: 1rem;
              left: 1rem;
              background-color: rgba(255, 255, 255, 0.2);
              backdrop-filter: blur(5px);
              padding: 0.5rem 1rem;
              border-radius: 30px;
              font-size: 0.8rem;
              font-weight: 500;
            }

            .contact-section {
              background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
              color: white;
              padding: 5rem 0;
              position: relative;
              overflow: hidden;
            }

            .contact-section::before {
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0,0,0,0.05);
              z-index: 0;
            }

            .contact-form {
              background-color: white;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
              padding: 2.5rem;
              position: relative;
              z-index: 1;
            }

            .form-control, .form-select {
              padding: 0.8rem 1.2rem;
              border-radius: 8px;
              border: 1px solid var(--light-gray);
              background-color: var(--light);
              transition: all 0.3s ease;
            }

            .form-control:focus, .form-select:focus {
              border-color: var(--primary);
              box-shadow: 0 0 0 3px rgba(27, 141, 187, 0.1);
            }

            .btn-primary {
              background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
              border: none;
              padding: 0.8rem 2rem;
              border-radius: 8px;
              font-weight: 500;
              transition: all 0.3s ease;
            }

            .btn-primary:hover {
              background: linear-gradient(135deg, var(--primary-dark), var(--gradient-start));
              transform: translateY(-3px);
              box-shadow: 0 10px 20px rgba(27, 141, 187, 0.2);
            }

            .btn-outline {
              background: transparent;
              border: 2px solid white;
              color: white;
              padding: 0.8rem 2rem;
              border-radius: 8px;
              font-weight: 500;
              transition: all 0.3s ease;
            }

            .btn-outline:hover {
              background: white;
              color: var(--primary);
              transform: translateY(-3px);
              box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
            }

            .section-bg {
              background-color: var(--light-red);
            }

            .service-box {
              background-color: white;
              border-radius: 16px;
              padding: 2.5rem;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
              border: 1px solid var(--light-gray);
            }

            .floating-shape {
              position: absolute;
              opacity: 0.1;
              z-index: 0;
            }

            .shape-1 {
              top: 10%;
              left: 5%;
              width: 300px;
              height: 300px;
              border-radius: 50%;
              background: var(--secondary);
            }

            .shape-2 {
              bottom: 10%;
              right: 5%;
              width: 200px;
              height: 200px;
              border-radius: 50%;
              background: var(--primary);
            }
          `}),e.jsxs("section",{className:"hero-section",children:[e.jsx("div",{className:"floating-shape shape-1"}),e.jsx("div",{className:"floating-shape shape-2"}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsxs("div",{className:"col-lg-6 mb-5 mb-lg-0 hero-content",children:[e.jsx("div",{className:"d-flex align-items-center mb-3",children:e.jsx("div",{className:"me-2 bg-white text-primary px-3 py-1 rounded-pill",style:{fontSize:"0.8rem",fontWeight:"600"},children:"Home » Data Analytics » Data Fabric"})}),e.jsx("h1",{className:"display-4 fw-bold mb-4",children:"Connect Data & Synchronize With Data Fabric"}),e.jsx("p",{className:"lead mb-5",children:"Data is challenging. It always has been. With our data fabric solutions, enable your company to make more informed decisions and stay one step ahead of the competition."}),e.jsxs("div",{className:"row mb-4",children:[e.jsx("div",{className:"col-md-4",children:e.jsx("div",{className:"benefit-card",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"fas fa-network-wired me-3",style:{fontSize:"1.5rem"}}),e.jsx("h5",{className:"fw-semibold mb-0",children:"Data Fabric Architecture"})]})})}),e.jsx("div",{className:"col-md-4",children:e.jsx("div",{className:"benefit-card",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"fas fa-expand-arrows-alt me-3",style:{fontSize:"1.5rem"}}),e.jsx("h5",{className:"fw-semibold mb-0",children:"Data Scalable Solutions"})]})})}),e.jsx("div",{className:"col-md-4",children:e.jsx("div",{className:"benefit-card",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"fas fa-project-diagram me-3",style:{fontSize:"1.5rem"}}),e.jsx("h5",{className:"fw-semibold mb-0",children:"Enterprise Data Integration"})]})})})]}),e.jsx("a",{href:"#contact",className:"btn btn-outline btn-lg px-4 rounded-pill",children:"Book a Meeting"})]}),e.jsx("div",{className:"col-lg-6 hero-image",children:e.jsx("img",{src:"https://via.placeholder.com/600x500",alt:"Data Fabric Visualization",className:"img-fluid rounded-4 shadow"})})]})})]}),e.jsx("section",{className:"py-5 section-bg",children:e.jsxs("div",{className:"container py-5",children:[e.jsx("div",{className:"row justify-content-center mb-5",children:e.jsxs("div",{className:"col-lg-8 text-center",children:[e.jsx("h2",{className:"display-5 fw-bold section-title mb-4",children:"Data & Analytics"}),e.jsx("p",{className:"lead text-muted",children:"By integrating and synchronizing data from various sources in real-time, Hrify Digital ensures accuracy and security for your business with Data Fabric solutions."})]})}),e.jsx("div",{className:"service-box mb-5",children:e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital's data fabric solution is designed to provide your business with the best-in-class data integration to provide a unified view of data from various sources, allowing your business to integrate data from different systems and applications quickly. Our team ensures accuracy and real-time access while maintaining strong data security against unauthorized access or loss. Seamlessly integrate, access, and protect your data with our comprehensive solution."})}),e.jsx("div",{className:"text-center",children:e.jsx("a",{href:"#contact",className:"btn btn-primary btn-lg px-5 rounded-pill",children:"Book a Meeting"})})]})}),e.jsx("section",{className:"py-5",children:e.jsxs("div",{className:"container py-5",children:[e.jsx("div",{className:"row justify-content-center mb-5",children:e.jsxs("div",{className:"col-lg-8 text-center",children:[e.jsx("h2",{className:"display-5 fw-bold section-title mb-4",children:"Support Features"}),e.jsx("p",{className:"lead text-muted",children:"Our comprehensive Data Fabric capabilities to help you connect, integrate, and synchronize your enterprise data."})]})}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-link"})}),e.jsx("h3",{children:"Seamless Data Integration"}),e.jsx("p",{className:"text-muted mb-0",children:"We at Hrify Digital excel in connecting data sources seamlessly, empowering our clients with easy access to unified data."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-shield-alt"})}),e.jsx("h3",{children:"Top-tier Data Security"}),e.jsx("p",{className:"text-muted mb-0",children:"At Hrify Digital, Data Security is our top priority. We implement strong encryption, strict access controls, and regulatory compliance to ensure data safety."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-arrows-alt"})}),e.jsx("h3",{children:"Scalability on Demand"}),e.jsx("p",{className:"text-muted mb-0",children:"Our team at Hrify Digital offers cloud-based solutions that scale effortlessly to meet our clients' growing data demands."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-balance-scale"})}),e.jsx("h3",{children:"Empowering Data Governance"}),e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital empowers our clients with comprehensive data cataloging and lineage tracking, fostering better data governance practices."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-check-circle"})}),e.jsx("h3",{children:"Reliable Data Quality"}),e.jsx("p",{className:"text-muted mb-0",children:"At Hrify Digital, we are committed to delivering reliable data quality management, providing our clients with accurate and consistent data."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-history"})}),e.jsx("h3",{children:"Legacy Systems Compatibility"}),e.jsx("p",{className:"text-muted mb-0",children:"Our team at Hrify Digital specializes in the seamless integration of legacy systems with modern data fabric technologies."})]})})]})]})}),e.jsx("section",{className:"py-5 section-bg",children:e.jsxs("div",{className:"container py-5",children:[e.jsx("div",{className:"row justify-content-center mb-5",children:e.jsxs("div",{className:"col-lg-8 text-center",children:[e.jsx("h2",{className:"display-5 fw-bold section-title mb-4",children:"Data & Analytics Case Studies"}),e.jsx("p",{className:"lead text-muted",children:"Discover how our Data Fabric solutions have transformed businesses through seamless data integration and synchronization."})]})}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"case-study-card",children:[e.jsxs("div",{className:"case-study-image",children:[e.jsx("span",{className:"case-study-tag",children:"Healthcare"}),e.jsx("i",{className:"fas fa-heartbeat",style:{fontSize:"3rem"}})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"h4 fw-bold mb-3",children:"Unified Patient Data"}),e.jsx("p",{className:"text-muted mb-3",children:"Reduced data access time by 85% and improved care coordination by 47% through a unified patient data platform for a major healthcare provider."}),e.jsx("a",{href:"#",className:"btn btn-primary btn-sm px-3 rounded-pill",children:"View Case Study"})]})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"case-study-card",children:[e.jsxs("div",{className:"case-study-image",children:[e.jsx("span",{className:"case-study-tag",children:"Financial Services"}),e.jsx("i",{className:"fas fa-university",style:{fontSize:"3rem"}})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"h4 fw-bold mb-3",children:"Real-time Risk Assessment"}),e.jsx("p",{className:"text-muted mb-3",children:"Enhanced fraud detection by 68% and reduced risk assessment time by 73% with our real-time data fabric solution for a global financial institution."}),e.jsx("a",{href:"#",className:"btn btn-primary btn-sm px-3 rounded-pill",children:"View Case Study"})]})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"case-study-card",children:[e.jsxs("div",{className:"case-study-image",children:[e.jsx("span",{className:"case-study-tag",children:"Retail"}),e.jsx("i",{className:"fas fa-shopping-cart",style:{fontSize:"3rem"}})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"h4 fw-bold mb-3",children:"Omnichannel Data Integration"}),e.jsx("p",{className:"text-muted mb-3",children:"Increased cross-channel sales by 52% and improved inventory accuracy by 38% through seamless omnichannel data integration for a national retail chain."}),e.jsx("a",{href:"#",className:"btn btn-primary btn-sm px-3 rounded-pill",children:"View Case Study"})]})]})})]})]})})]})]});d("assets/images/Banner/newbanimg/qa_con.webp");const _y=d("assets/images/newBanner/Qua.Eng (2).webp"),Uy=()=>e.jsxs("main",{children:[e.jsx("div",{className:"slider",children:e.jsx("div",{className:"slides",children:e.jsx("div",{className:"slide",children:e.jsx("img",{src:_y,alt:"QA Consulting Strategy Banner"})})})}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            .main-title {
              font-size: 2.8rem;
              font-weight: 700;
              color: #1B8DBB;
              text-align: center;
              margin: 4rem 0 1.5rem;
            }

            .main-subtitle {
              text-align: center;
              color: #444;
              max-width: 900px;
              margin: 0 auto 3rem;
              font-size: 1.2rem;
              line-height: 1.7;
            }

            .cta-button {
              display: block;
              width: fit-content;
              margin: 4rem auto;
              background: #1B8DBB;
              color: white;
              padding: 0.9rem 2.5rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 600;
              font-size: 1.1rem;
            }

            .cta-button:hover {
              background: #15749A;
            }

            .section {
              padding: 4rem 0;
            }

            .section-title {
              text-align: center;
              font-size: 2.4rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 3rem;
            }

            .features-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .feature-card {
              background: white;
              border-radius: 16px;
              padding: 2rem;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: transform 0.3s ease;
              height: 100%;
            }

            .feature-card:hover {
              transform: translateY(-10px);
            }

            .icon-wrapper {
              width: 80px;
              height: 80px;
              background: #1B8DBB;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 1.5rem;
            }

            .icon-wrapper svg {
              width: 40px;
              height: 40px;
              stroke: white;
            }

            .feature-card h4 {
              font-size: 1.4rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .feature-card p {
              color: #666;
              line-height: 1.7;
            }

            .final-cta {
              background: linear-gradient(135deg, #1B8DBB, #15749A);
              color: white;
              padding: 5rem 0;
              text-align: center;
              border-radius: 16px;
              margin: 4rem 0;
            }

            .final-cta h2 {
              font-size: 2.5rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
            }

            .final-cta p {
              font-size: 1.3rem;
              max-width: 800px;
              margin: 0 auto 2.5rem;
              opacity: 0.95;
            }

            .btn-white {
              background: white;
              color: #1B8DBB;
              padding: 1rem 2.5rem;
              border-radius: 9999px;
              font-weight: 600;
              font-size: 1.1rem;
              text-decoration: none;
            }

            .btn-white:hover {
              background: #f0f0f0;
            }
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Superior Product Quality With QA Consulting & Strategy"}),e.jsx("p",{className:"main-subtitle",children:"A tailored quality engineering strategy that aligns with your business goals, best practices, appropriate tools, and robust testing frameworks to ensure quality."}),e.jsxs("div",{className:"features-grid",style:{gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"},children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Assessment"}),e.jsx("p",{children:"Comprehensive evaluation of your current QA processes"})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Strategy"}),e.jsx("p",{children:"Tailored QA approach aligned with your business goals"})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Implementation"}),e.jsx("p",{children:"Seamless execution of QA strategies and frameworks"})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Quality Engineering"}),e.jsx("p",{children:"End-to-end quality assurance throughout development"})]})]}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Schedule a Consultation"})]}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Our Approach"}),e.jsx("p",{className:"main-subtitle",children:"Entrust your software development to Hrify Digital's QA Consulting & Strategy solutions, experts in shift left testing, test automation, and agile & DevOps methodologies to experience seamless, reliable, and setback-free software development."}),e.jsx("p",{className:"main-subtitle",children:"Hrify Digital's QA Consulting & Strategy solutions streamline early-stage software development by efficiently managing test data, non-functional validations, and test cycles. Hrify Digital minimizes deployment time and enhances overall software quality with a focus on optimal testing processes. Through automation, test data management, and result utilization, we at Hrify Digital ensure a smooth and effective software development journey, allowing you to save time and resources while achieving top-notch software quality."})]})}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Support Features"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"})})}),e.jsx("h4",{children:"Regulatory Compliance"}),e.jsx("p",{children:"Agile QA Implementation: Our team seamlessly integrates agile QA practices into the existing development workflow of our clients. We adopt a gradual approach, starting with smaller pilot projects and then expanding to larger engagements, minimizing resistance and disruption."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})})}),e.jsx("h4",{children:"Security Protocols"}),e.jsx("p",{children:"Customized QA Metrics: Hrify Digital collaborates closely with each client to define tailor-made QA objectives and metrics that align with their unique business goals. These metrics include defect density, test coverage, customer feedback, and response time."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("path",{d:"m9 11 3 3L22 4"})]})}),e.jsx("h4",{children:"Control Preferences"}),e.jsx("p",{children:"Optimal QA Tool Selection: Hrify Digital diligently evaluates and recommends QA testing tools that perfectly fit the technologies and systems used by our clients, enhancing the efficiency and effectiveness of testing."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M3 3v18h18"}),e.jsx("path",{d:"m19 9-5 5-4-4-3 3"})]})}),e.jsx("h4",{children:"Costs & Infrastructure"}),e.jsx("p",{children:"Client-Specific Cost-Benefit Analysis: Hrify Digital provides comprehensive client-specific cost-benefit analyses, showcasing the tangible value of our QA services. Our expert team highlights how investing in QA upfront leads to long-term benefits, such as reduced bug-fixing costs and increased customer loyalty."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),e.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),e.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]})}),e.jsx("h4",{children:"Empowering Data Governance"}),e.jsx("p",{children:"Advanced Automated Testing Frameworks: Hrify Digital develops and implements customized automated testing frameworks, streamlining the testing process and expediting time-to-market for their clients."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}),e.jsx("path",{d:"M12 9v4"}),e.jsx("path",{d:"M12 17h.01"})]})}),e.jsx("h4",{children:"Risk-based Testing Approach"}),e.jsx("p",{children:"We collaborate with clients to identify critical areas of our services, focusing QA efforts on high-priority items to ensure comprehensive testing where it matters most."})]})]})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Ready for Superior Product Quality?"}),e.jsx("p",{children:"Let us design a tailored QA strategy that ensures flawless software delivery."}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Schedule a Consultation"})]})})]})]});d("assets/images/Banner/newbanimg/testengineer.webp");const $y=d("assets/images/newBanner/Qua.Eng (1).webp"),Vy=()=>e.jsxs("main",{children:[e.jsx("div",{className:"slider",children:e.jsx("div",{className:"slides",children:e.jsx("div",{className:"slide",children:e.jsx("img",{src:$y,alt:"Agile Testing Banner"})})})}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            .main-title {
              font-size: 2.8rem;
              font-weight: 700;
              color: #1B8DBB;
              text-align: center;
              margin: 4rem 0 1.5rem;
            }

            .main-subtitle {
              text-align: center;
              color: #444;
              max-width: 900px;
              margin: 0 auto 3rem;
              font-size: 1.2rem;
              line-height: 1.7;
            }

            .cta-button {
              display: block;
              width: fit-content;
              margin: 4rem auto;
              background: #1B8DBB;
              color: white;
              padding: 0.9rem 2.5rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 600;
              font-size: 1.1rem;
            }

            .cta-button:hover {
              background: #15749A;
            }

            .section {
              padding: 4rem 0;
            }

            .section-title {
              text-align: center;
              font-size: 2.4rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 3rem;
            }

            .features-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 2rem;
              max-width: 1200px;
              margin: 4rem auto;
            }

            .feature-card {
              background: white;
              border-radius: 16px;
              padding: 2rem;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: transform 0.3s ease;
              height: 100%;
            }

            .feature-card:hover {
              transform: translateY(-10px);
            }

            .icon-wrapper {
              width: 80px;
              height: 80px;
              background: #1B8DBB;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 1.5rem;
            }

            .icon-wrapper svg {
              width: 40px;
              height: 40px;
              stroke: white;
            }

            .feature-card h4 {
              font-size: 1.4rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .feature-card p {
              color: #666;
              line-height: 1.7;
            }

            .final-cta {
              background: linear-gradient(135deg, #1B8DBB, #15749A);
              color: white;
              padding: 5rem 0;
              text-align: center;
              border-radius: 16px;
              margin: 4rem 0;
            }

            .final-cta h2 {
              font-size: 2.5rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
            }

            .final-cta p {
              font-size: 1.3rem;
              max-width: 800px;
              margin: 0 auto 2.5rem;
              opacity: 0.95;
            }

            .btn-white {
              background: white;
              color: #1B8DBB;
              padding: 1rem 2.5rem;
              border-radius: 9999px;
              font-weight: 600;
              font-size: 1.1rem;
              text-decoration: none;
            }

            .btn-white:hover {
              background: #f0f0f0;
            }
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Continuous Integration & Issue Resolution With Agile Testing"}),e.jsx("p",{className:"main-subtitle",children:"A strong collaboration involving integration and testing, ensuring new changes do not negatively impact existing functionality of all operations."}),e.jsxs("div",{className:"features-grid",style:{gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"},children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Result Driven"}),e.jsx("p",{children:"Focused on delivering measurable outcomes and tangible results"})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Systematic"}),e.jsx("p",{children:"Organized approach to testing with clear methodologies"})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Scalable"}),e.jsx("p",{children:"Adaptable testing solutions that grow with your needs"})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Quality Engineering"}),e.jsx("p",{children:"End-to-end quality assurance throughout development"})]})]}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Talk to Our Experts"})]}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Our Approach"}),e.jsx("p",{className:"main-subtitle",children:"With Hrify Digital's Agile Testing services, achieve continuous testing in software development by automated tests and a collaborative team, ensuring adaptability to changing requirements for effective results."}),e.jsx("p",{className:"main-subtitle",children:"Hrify Digital's Agile Testing services, seamlessly embedded with development, ensure swift feature verification, defect identification, and rapid fixes, minimizing bugs in production. With continuous integration and delivery, our expert team provides your business experience with faster, high-quality software delivery aligned with your goals for enhanced productivity. Hrify Digital's technology pods ensure close collaboration with your teams, shifting quality gates to the left and providing superior testing support at every step of the development process."})]})}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Support Features"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}),e.jsx("h4",{children:"Integrated Agile Teams"}),e.jsx("p",{children:"Our cross-functional Agile teams at Hrify Digital work collaboratively, ensuring seamless communication and integration between team members."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})})}),e.jsx("h4",{children:"Contextual Understanding"}),e.jsx("p",{children:"We at Hrify Digital use test impact analysis tools to identify critical areas affected by changes and prioritize testing efforts accordingly."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 2v4"}),e.jsx("path",{d:"M12 18v4"}),e.jsx("path",{d:"m4.93 4.93 2.83 2.83"}),e.jsx("path",{d:"m16.24 16.24 2.83 2.83"}),e.jsx("path",{d:"M2 12h4"}),e.jsx("path",{d:"M18 12h4"}),e.jsx("path",{d:"m4.93 19.07 2.83-2.83"}),e.jsx("path",{d:"m16.24 7.76 2.83-2.83"})]})}),e.jsx("h4",{children:"Real-world Variability"}),e.jsx("p",{children:"We promote a culture of teamwork and resource pooling at Hrify Digital, facilitating support among testers during peak workloads."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),e.jsx("path",{d:"M14 2v6h6"}),e.jsx("path",{d:"M16 13H8"}),e.jsx("path",{d:"M16 17H8"}),e.jsx("path",{d:"M10 9H8"})]})}),e.jsx("h4",{children:"Report Customization"}),e.jsx("p",{children:"Hrify Digital uses an automated regression reporting system to swiftly detect and resolve regressions, ensuring smooth and stable software updates."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})}),e.jsx("h4",{children:"Security Concerns"}),e.jsx("p",{children:"Our Team at Hrify Digital prioritizes testing efforts based on critical features and functionalities, following a risk-based testing strategy."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M3 9h.01M21 9h.01M3 15h.01M21 15h.01M15 3v.01M15 21v.01M9 3v.01M9 21v.01M3.5 3.5l17 17"})})}),e.jsx("h4",{children:"Cloud-Based Device Labs"}),e.jsx("p",{children:"Hrify Digital utilizes cloud-based device labs to access diverse environments for testing, optimizing time and resources."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M21 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"})})}),e.jsx("h4",{children:"Seamless Model Deployment & Version Control"}),e.jsx("p",{children:"We at Hrify Digital have implemented dynamic data masking techniques to protect sensitive data in testing environments without compromising data integrity."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"})})}),e.jsx("h4",{children:"Optimized Data Lake Architecture"}),e.jsx("p",{children:"At Hrify Digital, we employ an innovative Smart Data Generator tool to create realistic and relevant test data tailored to our clients' application requirements."})]})]})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Ready for Continuous Integration & Issue Resolution?"}),e.jsx("p",{children:"Let us implement agile testing that ensures seamless, high-quality software delivery."}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Talk to Our Experts"})]})})]})]}),qy=d("/assets/images/newBanner/Qua.Eng.webp"),Yy=()=>e.jsxs("main",{children:[e.jsx("div",{className:"slider",children:e.jsx("div",{className:"slides",children:e.jsx("div",{className:"slide",children:e.jsx("img",{src:qy,alt:"Independent Certification Banner"})})})}),e.jsx("script",{src:"https://kit.fontawesome.com/a076d05399.js",crossOrigin:"anonymous"}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .bg-muted {
            background-color: #f5f5f5;
          }
          .text-primary {
            color: #1B8DBB;
          }
          .bg-primary {
            background-color: #1B8DBB;
          }
          .text-muted-foreground {
            color: #6b7280;
          }
          .card {
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
            padding: 1rem 1.25rem;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .card-header {
            margin-bottom: 1rem;
          }
          .card-title {
            font-weight: 600;
            font-size: 1.125rem;
            margin-bottom: 0.5rem;
          }
          .card-description {
            color: #6b7280;
            font-size: 0.875rem;
          }
          .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            font-weight: 500;
            padding: 0.75rem 1.5rem;
            transition: all 0.2s;
            cursor: pointer;
          }
          .btn-primary {
            background-color: #1B8DBB;
            color: white;
          }
          .btn-primary:hover {
            background-color: #15749A;
          }

          /* Fixed spacing between sections and inside cards */
          section {
            padding-top: 4rem !important;
            padding-bottom: 4rem !important;
          }
          .space-y-6 > * + * {
            margin-top: 1.5rem;
          }
          .grid-gap-6 {
            gap: 1.5rem;
          }
          .grid-gap-8 {
            gap: 2rem;
          }
        `}}),e.jsxs("main",{className:"flex-1",children:[e.jsx("section",{className:"py-12 md:py-24 bg-muted",children:e.jsx("div",{className:"container px-4 md:px-6 mx-auto",children:e.jsxs("div",{className:"grid gap-12 md:grid-cols-2 md:gap-16 items-center",children:[e.jsxs("div",{className:"space-y-6 text-left",children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl",children:"Get Unbiased Certification With Independent Certification"}),e.jsx("p",{className:"text-muted-foreground md:text-xl",children:"Verify compliance with industry standards, regulations, best practices, and other benchmarks, ensuring your system meets the highest standards."}),e.jsx("div",{className:"flex justify-center md:justify-start",children:e.jsxs("a",{href:"#contact",className:"btn btn-primary",children:["Schedule a Consultation",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"ml-2 h-4 w-4",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header",children:e.jsx("h3",{className:"card-title",children:"Objective Assessment"})}),e.jsx("div",{className:"card-content",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Unbiased evaluation of your systems and processes"})})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header",children:e.jsx("h3",{className:"card-title",children:"Compliance & Standards"})}),e.jsx("div",{className:"card-content",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Ensuring adherence to industry regulations and best practices"})})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header",children:e.jsx("h3",{className:"card-title",children:"Credibility & Trust"})}),e.jsx("div",{className:"card-content",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Building confidence with stakeholders and customers"})})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header",children:e.jsx("h3",{className:"card-title",children:"Quality Engineering"})}),e.jsx("div",{className:"card-content",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"End-to-end quality assurance throughout development"})})]})]})]})})}),e.jsx("section",{className:"py-12 md:py-24",children:e.jsx("div",{className:"container px-4 md:px-6 mx-auto",children:e.jsxs("div",{className:"mx-auto max-w-3xl text-center space-y-8",children:[e.jsx("h2",{className:"text-4xl font-bold tracking-tighter sm:text-5xl",children:"Our Approach"}),e.jsx("p",{className:"text-muted-foreground md:text-xl",children:"Hrify Digital's user-centric Independent Certification solutions excel with behavior-driven black box testing, effectively addressing context difficulty, time constraints, and test boundary ambiguity."}),e.jsx("p",{className:"text-muted-foreground text-lg leading-relaxed",children:"We at Hrify Digital offer cutting-edge, Independent Certification service with behavior-driven black box testing, ensuring feature completion and timely software deployment, regardless of mainframe or cloud-native platforms. Our user-centric approach, coupled with our in-depth understanding of the latest technologies and industry best practices, creates a compelling production environment that fosters business growth. Through thorough testing, we meet all requirements, unlocking your software's fullest potential for successful implementation, and empowering your development team to make informed decisions, leading to more robust and reliable software. Trust Hrify Digital for reliable, high-quality certification services that empower businesses to excel."})]})})}),e.jsx("section",{className:"py-12 md:py-24 bg-muted",children:e.jsxs("div",{className:"container px-4 md:px-6 mx-auto",children:[e.jsx("h2",{className:"text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12",children:"Support Features"}),e.jsxs("div",{className:"grid gap-8 md:grid-cols-2 lg:grid-cols-3",children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#1B8DBB",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-10 w-10 mb-4",children:[e.jsx("path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2z"}),e.jsx("path",{d:"M9 10h.01M12 10h.01M15 10h.01"})]}),e.jsx("h3",{className:"card-title",children:"Tailored Implementation"}),e.jsx("div",{className:"card-description",children:"Transparent Standards Development"})]}),e.jsx("div",{className:"card-content",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"We involve key stakeholders, including clients, experts, and industry representatives, in developing and reviewing our certification standards. This transparency ensures that the standards are widely accepted and meet the industry's evolving needs."})})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#1B8DBB",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-10 w-10 mb-4",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"})}),e.jsx("h3",{className:"card-title",children:"Regulatory Compliance"}),e.jsx("div",{className:"card-description",children:"Our Clear Conflict of Interest Policy"})]}),e.jsx("div",{className:"card-content",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"We have a strict policy that prohibits any conflicts of interest among our evaluators and clients and guarantees the independence and impartiality of the certification process."})})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#1B8DBB",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-10 w-10 mb-4",children:[e.jsx("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),e.jsx("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]}),e.jsx("h3",{className:"card-title",children:"Regulatory & Legal Compliance"}),e.jsx("div",{className:"card-description",children:"Legal Consultation"})]}),e.jsx("div",{className:"card-content",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Hrify Digital has legal experts on board who guide to ensure that the certification process complies with all relevant laws and regulations. We also address any liability concerns professionally."})})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#1B8DBB",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-10 w-10 mb-4",children:[e.jsx("path",{d:"M21 7v6h-6"}),e.jsx("path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"})]}),e.jsx("h3",{className:"card-title",children:"Versioning & Mutable Data Management"}),e.jsx("div",{className:"card-description",children:"Streamlined Processes"})]}),e.jsx("div",{className:"card-content",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Our expert team continuously reviews and optimizes our certification processes to ensure efficiency and minimize unnecessary steps, resulting in faster certification turnaround times."})})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#1B8DBB",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-10 w-10 mb-4",children:[e.jsx("path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}),e.jsx("path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}),e.jsx("path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}),e.jsx("path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}),e.jsx("path",{d:"M12 8v8"}),e.jsx("path",{d:"M8 12h8"})]}),e.jsx("h3",{className:"card-title",children:"Communication & Coordination"}),e.jsx("div",{className:"card-description",children:"Periodic Reviews"})]}),e.jsx("div",{className:"card-content",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"We at Hrify Digital regularly review and update our certification procedures to adapt to industry advancements and emerging challenges, maintaining the highest level of credibility."})})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#1B8DBB",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-10 w-10 mb-4",children:[e.jsx("rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}),e.jsx("path",{d:"M8 21h8"}),e.jsx("path",{d:"M12 17v4"})]}),e.jsx("h3",{className:"card-title",children:"Vendor Consolidation"}),e.jsx("div",{className:"card-description",children:"Technology Adoption"})]}),e.jsx("div",{className:"card-content",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Hrify Digital has embraced cutting-edge technology to improve data management, monitoring, and reporting capabilities. This ensures accuracy, transparency, and efficiency in the certification process."})})]})]})]})}),e.jsx("section",{className:"py-12 md:py-24",children:e.jsxs("div",{className:"container px-4 md:px-6 mx-auto text-center",children:[e.jsx("h2",{className:"text-4xl font-bold tracking-tighter sm:text-5xl mb-8",children:"Quality Engineering Case Studies"}),e.jsxs("a",{href:"#",className:"btn btn-primary mx-auto",children:["View Case Studies",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"ml-2 h-4 w-4",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})]})})]}),e.jsx("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"})]}),Gy=d("/assets/images/newBanner/ma.ser.webp"),Qy=d("assets/images/placeholder.webp"),Ky=d("assets/images/placeholder.webp"),Xy=d("assets/images/placeholder.webp"),Zy=d("assets/images/placeholder.webp"),Jy=()=>e.jsxs("main",{children:[e.jsx("div",{className:"slider",children:e.jsx("div",{className:"slides",children:e.jsx("div",{className:"slide",children:e.jsx("img",{src:Gy,alt:"Managed Testing Services Banner"})})})}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
            .main-title {
              font-size: 2.8rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 1.5rem;
            }

            .main-subtitle {
              color: #444;
              max-width: 900px;
              font-size: 1.2rem;
              line-height: 1.7;
              margin-bottom: 2rem;
            }

            .cta-button {
              display: block;
              width: fit-content;
              background: #1B8DBB;
              color: white;
              padding: 0.9rem 2.5rem;
              border-radius: 9999px;
              text-decoration: none;
              font-weight: 600;
              font-size: 1.1rem;
              transition: all 0.3s ease;
              border: none;
            }

            .cta-button:hover {
              background: #15749A;
              color: white;
              transform: translateY(-2px);
              box-shadow: 0 4px 12px rgba(27, 141, 187, 0.3);
            }

            .section {
              padding: 4rem 0;
            }

            .section-title {
              text-align: center;
              font-size: 2.4rem;
              font-weight: 700;
              color: #1B8DBB;
              margin-bottom: 3rem;
            }

            .feature-card {
              background: #E8F4FA;
              border: 1px solid #B3D9FF;
              border-radius: 16px;
              padding: 2rem;
              text-align: center;
              box-shadow: 0 4px 15px rgba(0,0,0,0.08);
              transition: transform 0.3s ease, box-shadow 0.3s ease;
              height: 100%;
              display: flex;
              flex-direction: column;
            }

            .feature-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 8px 25px rgba(0,0,0,0.15);
            }

            .feature-card h4 {
              font-size: 1.4rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 1rem;
            }

            .feature-card p {
              color: #666;
              line-height: 1.7;
              flex-grow: 1;
            }

            .icon-wrapper {
              width: 80px;
              height: 80px;
              background: transparent;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 1.5rem;
            }

            .icon-wrapper svg {
              width: 40px;
              height: 40px;
              stroke: #1B8DBB;
            }

            .image-grid-container {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 16px;
              max-width: 500px;
              width: 100%;
            }

            .grid-card {
              background: white;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 2px 8px rgba(0,0,0,0.1);
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }

            .grid-card:hover {
              transform: translateY(-4px);
              box-shadow: 0 6px 16px rgba(0,0,0,0.15);
            }

            .grid-image {
              width: 100%;
              height: 140px;
              object-fit: cover;
            }

            .grid-card-content {
              padding: 1rem;
              text-align: center;
            }

            .grid-card-title {
              font-size: 1rem;
              font-weight: 600;
              color: #1B8DBB;
              margin-bottom: 0.5rem;
            }

            .grid-card-description {
              font-size: 0.75rem;
              color: #666;
              line-height: 1.4;
            }

            @media (max-width: 992px) {
              .main-title {
                font-size: 2.4rem;
              }
              .image-grid-container {
                max-width: 450px;
              }
              .grid-image {
                height: 120px;
              }
              .grid-card-title {
                font-size: 0.95rem;
              }
              .grid-card-description {
                font-size: 0.7rem;
              }
            }

            @media (max-width: 768px) {
              .main-title {
                font-size: 2rem;
              }
              .main-subtitle {
                font-size: 1.1rem;
              }
              .image-grid-container {
                max-width: 400px;
                margin: 0 auto;
              }
              .grid-image {
                height: 110px;
              }
            }

            @media (max-width: 576px) {
              .main-title {
                font-size: 1.8rem;
              }
              .image-grid-container {
                max-width: 350px;
              }
              .grid-image {
                height: 100px;
              }
              .grid-card-content {
                padding: 0.75rem;
              }
            }

            .hero-section-bg {
              background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            }
          `}),e.jsx("section",{className:"hero-section-bg py-5",style:{marginTop:"0",borderRadius:"16px"},children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsxs("div",{className:"col-12 col-lg-7 mb-4 mb-lg-0",children:[e.jsx("h1",{className:"main-title",children:"Managed Testing Services That Ensure Precise Software Execution"}),e.jsx("p",{className:"main-subtitle",children:"Alleviate testing complexities with confidence. Get comprehensive testing solutions and deliver high-quality results with software excellence."}),e.jsxs("a",{href:"#contact",className:"cta-button",children:["Book a Meeting",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginLeft:"8px",display:"inline-block",verticalAlign:"middle"},children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})]}),e.jsx("div",{className:"col-12 col-lg-5 d-flex justify-content-center justify-content-lg-end",children:e.jsxs("div",{className:"image-grid-container",children:[e.jsxs("div",{className:"grid-card",children:[e.jsx("img",{className:"grid-image",src:Qy,alt:"Performance Testing"}),e.jsxs("div",{className:"grid-card-content",children:[e.jsx("h3",{className:"grid-card-title",children:"Performance Testing"}),e.jsx("p",{className:"grid-card-description",children:"Comprehensive evaluation of system performance under various conditions"})]})]}),e.jsxs("div",{className:"grid-card",children:[e.jsx("img",{className:"grid-image",src:Ky,alt:"Continuous Integration"}),e.jsxs("div",{className:"grid-card-content",children:[e.jsx("h3",{className:"grid-card-title",children:"Continuous Integration"}),e.jsx("p",{className:"grid-card-description",children:"Seamless integration of testing into your development pipeline"})]})]}),e.jsxs("div",{className:"grid-card",children:[e.jsx("img",{className:"grid-image",src:Xy,alt:"Software Validation"}),e.jsxs("div",{className:"grid-card-content",children:[e.jsx("h3",{className:"grid-card-title",children:"Software Validation"}),e.jsx("p",{className:"grid-card-description",children:"Ensuring your software meets all requirements and specifications"})]})]}),e.jsxs("div",{className:"grid-card",children:[e.jsx("img",{className:"grid-image",src:Zy,alt:"Quality Engineering"}),e.jsxs("div",{className:"grid-card-content",children:[e.jsx("h3",{className:"grid-card-title",children:"Quality Engineering"}),e.jsx("p",{className:"grid-card-description",children:"End-to-end quality assurance throughout development"})]})]})]})})]})})}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Our Approach"}),e.jsx("p",{className:"main-subtitle ",style:{textAlign:"justify",alignItems:"center"},children:"Hrify Digital's Managed Testing Services deliver meticulous and specialized testing, ensuring precise software execution. We alleviate testing complexities and time-to-market pressures, empowering excellence in applications."}),e.jsx("p",{className:"main-subtitle ",style:{textAlign:"justify"},children:"Hrify Digital's Managed Testing Services offer a complete solution for testing and certifying business functionality, performance, and security. We use our in-house tools and our team's expertise to deliver high-quality output, measurable improvements, and effective defect identification in the production ecosystem. By maintaining proactive and transparent communication with our clients, Hrify Digital enhances businesses to focus on their core activities with confidence, knowing that their software is reliable and precise."})]})}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA",borderRadius:"16px",padding:"4rem 2rem"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Support Features"}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-12 col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})})}),e.jsx("h4",{children:"Costs & Infrastructure"}),e.jsx("p",{className:"text-muted",children:"Cost Management"}),e.jsx("p",{children:"Our team consistently evaluates the cost-effectiveness of our Managed Testing Services through careful analysis of expenses and benefits to optimize our pricing models."})]})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})}),e.jsx("h4",{children:"Data Security & Privacy"}),e.jsx("p",{className:"text-muted",children:"Data Security & Confidentiality"}),e.jsx("p",{children:"Hrify Digital prioritizes data security and confidentiality. By implementing robust encryption protocols, secure data storage practices, and adherence to industry regulations, we instill confidence in clients regarding protecting their sensitive information."})]})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"}),e.jsx("path",{d:"M12 13v8"}),e.jsx("path",{d:"M5 13v6a2 2 0 0 0 2 2h8"})]})}),e.jsx("h4",{children:"Minimizing Business Outages"}),e.jsx("p",{className:"text-muted",children:"Reducing Dependency"}),e.jsx("p",{children:"We actively engage our clients' development teams during testing. By involving clients in planning sessions and discussions, we ensure seamless integration of our services with the development process."})]})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"}),e.jsx("path",{d:"m9 12 2 2 4-4"})]})}),e.jsx("h4",{children:"Parameter Optimization"}),e.jsx("p",{className:"text-muted",children:"Integration With Development"}),e.jsx("p",{children:"We position ourselves as a strategic partner in the development process. By collaborating closely with clients from the early stages, we align our testing efforts with development goals and timelines."})]})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 7v6h-6"}),e.jsx("path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"})]})}),e.jsx("h4",{children:"Continuous Improvement"}),e.jsx("p",{className:"text-muted",children:"Flexibility & Scalability"}),e.jsx("p",{children:"Hrify Digital offers flexible service packages to accommodate varying testing needs. The ability to scale resources ensures clients receive tailored testing solutions."})]})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}),e.jsx("path",{d:"M8 21h8"}),e.jsx("path",{d:"M12 17v4"})]})}),e.jsx("h4",{children:"Legacy Systems Compatibility"}),e.jsx("p",{className:"text-muted",children:"Monitoring & Accountability"}),e.jsx("p",{children:"We adhere to clear SLAs with our clients, defining key performance indicators (KPIs) and ensuring regular reporting and progress updates."})]})})]})]})}),e.jsx("section",{className:"section",children:e.jsx("div",{className:"container text-center",children:e.jsxs("div",{style:{background:"#1B8DBB",color:"white",padding:"4rem 2rem",borderRadius:"16px",boxShadow:"0 8px 30px rgba(27, 141, 187, 0.2)"},children:[e.jsx("h2",{className:"text-white mb-4",style:{fontSize:"2.5rem",fontWeight:"700"},children:"Quality Engineering Case Studies"}),e.jsx("p",{className:"mb-4",style:{fontSize:"1.2rem",maxWidth:"700px",margin:"0 auto 2rem",opacity:"0.95"},children:"Discover how we've helped businesses achieve excellence through our comprehensive testing solutions"}),e.jsxs("a",{href:"#",style:{background:"#1B8DBB",color:"white",padding:"1rem 2.5rem",borderRadius:"9999px",fontWeight:"600",fontSize:"1.1rem",textDecoration:"none",display:"inline-block",transition:"all 0.3s ease"},onMouseOver:t=>t.target.style.background="#15749A",onMouseOut:t=>t.target.style.background="#1B8DBB",children:["View Case Studies",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginLeft:"8px",display:"inline-block",verticalAlign:"middle"},children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})]})})})]}),e.jsx("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"})]}),ej=d("assets/images/Products/sonachala-logo.png"),tj=d("assets/images/Products/img2.png"),sj=d("assets/images/Products/img3.png"),nj=d("assets/images/Products/img4.png"),ij=d("assets/images/Products/img5.png"),rj=d("assets/images/Products/img6.png"),aj=d("assets/images/Products/img7.png"),lj=d("assets/images/Products/img8.png"),oj=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb-5",style:{background:"linear-gradient(135deg, #038A5F, #012419)",minHeight:"clamp(300px, 45vh, 450px)",padding:"2rem 0"},children:e.jsx("div",{className:"container h-100",children:e.jsxs("div",{className:"row h-100 align-items-center",children:[e.jsx("div",{className:"col-lg-6 col-md-12 d-flex justify-content-center align-items-center mb-4 mb-lg-0",children:e.jsx("img",{src:ej,alt:"Hotel",style:{width:"100%",maxWidth:"350px",height:"auto",objectFit:"contain",borderRadius:"12px"}})}),e.jsx("div",{className:"col-lg-6 col-md-12 d-flex align-items-center",children:e.jsx("div",{className:"text-white text-center text-lg-start px-3 px-lg-0",children:e.jsx("h1",{style:{fontWeight:"600",fontSize:"clamp(1.5rem, 4vw, 2.5rem)",lineHeight:"1.2"},children:"Hotel Revenue Management Solutions"})})})]})})}),e.jsx("div",{style:{minHeight:"clamp(300px, 45vh, 450px)"},children:e.jsx("div",{className:"container h-100",children:e.jsxs("div",{className:"row h-100 align-items-start align-items-lg-center",children:[e.jsxs("div",{className:"col-lg-8 col-md-12 text-dark",children:[e.jsx("h3",{style:{fontWeight:"600",marginBottom:"12px",color:"#038A5F"},children:e.jsx("b",{children:"Revenue Management"})}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95},children:"Sonachala equips hotels with intelligent pricing strategies to maximize revenue while maintaining high occupancy rates. Our system analyzes market demand, seasonal trends, and competitor pricing in real time."}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95},children:"Whether it's peak season or a slow period, dynamic pricing ensures that your rooms are always competitively priced — attracting more guests without sacrificing profitability."}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95,marginBottom:0},children:"Our platform empowers hoteliers to adjust rates instantly, run promotions, and monitor performance from a single dashboard. Make every room night count with data-driven decision-making."})]}),e.jsx("div",{className:"col-lg-4 col-md-12 text-center",children:e.jsx("img",{src:tj,alt:"Revenue Management",style:{width:"100%",height:"clamp(200px, 25vh, 300px)",objectFit:"contain",borderRadius:"12px"}})})]})})}),e.jsx("div",{className:"container-fluid p-4 mb-5",style:{color:"white",background:"linear-gradient(135deg, #038A5F, #012419)"},children:e.jsx("p",{children:"✅ Dynamic pricing based on demand and competition ✅ Automated seasonal and event-based rate adjustments ✅ Real-time performance tracking and insights ✅ Maximize occupancy without undercutting revenue"})}),e.jsx("div",{style:{},children:e.jsx("div",{className:"container h-100",children:e.jsxs("div",{className:"row h-100 align-items-start align-items-lg-center",children:[e.jsx("div",{className:"col-lg-4 col-md-12 text-center",children:e.jsx("img",{src:sj,alt:"Revenue Management",style:{width:"100%",height:"clamp(200px, 25vh, 300px)",objectFit:"contain",borderRadius:"12px"}})}),e.jsxs("div",{className:"col-lg-8 col-md-12 text-dark",children:[e.jsx("h3",{style:{fontWeight:"600",marginBottom:"12px",color:"#038A5F"},children:e.jsx("b",{children:"Booking Engine"})}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95},children:"Sonachala's next-generation booking engine helps hotels capture direct bookings with ease. From quick searches to instant reservations, every step is optimized for speed, convenience, and conversion."}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95},children:"Guests can view real-time room availability, compare options, and lock in their stay within seconds. Transparent pricing, secure payments, and instant confirmations ensure a frictionless booking experience."}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95},children:"Whether you run a boutique property or a chain of hotels, our booking engine integrates seamlessly into your website, allowing you to sell rooms 24/7 without relying solely on third-party platforms."})]})]})})}),e.jsx("div",{className:"container-fluid p-4 mt-5 mb-5",style:{color:"white",background:"linear-gradient(135deg, #038A5F, #012419)"},children:e.jsx("p",{children:"⚡ Lightning-fast search & booking in under a minute    📅 Live availability synced with hotel inventory 🔐 Secure, multi-option payments (UPI, Cards, Wallets)📩 Instant confirmation via email & SMS 📲 Fully responsive design for mobile & desktop users"})}),e.jsx("div",{style:{},children:e.jsx("div",{className:"container h-100",children:e.jsxs("div",{className:"row h-100 align-items-start align-items-lg-center",children:[e.jsxs("div",{className:"col-lg-8 col-md-12 text-dark",children:[e.jsx("h3",{style:{fontWeight:"600",marginBottom:"12px",color:"#038A5F"},children:e.jsx("b",{children:"Software"})}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95},children:"Sonachala's integrated Property Management System (PMS) and Channel Manager help hotels streamline operations, manage bookings, and boost revenue — all from a single platform."}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95},children:"Our PMS handles reservations, guest profiles, billing, and housekeeping tasks with ease, while the Channel Manager syncs your inventory across OTAs like Booking.com, Expedia, and Agoda in real time — eliminating overbookings and manual updates."}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95},children:"With automation, smart reporting, and a user-friendly dashboard, you can focus on delivering exceptional guest experiences while our software handles the heavy lifting."})]}),e.jsx("div",{className:"col-lg-4 col-md-12 text-center",children:e.jsx("img",{src:nj,alt:"Revenue Management",style:{width:"100%",height:"clamp(200px, 25vh, 300px)",objectFit:"contain",borderRadius:"12px"}})})]})})}),e.jsx("div",{className:"container-fluid p-4 mt-5 mb-5",style:{color:"white",background:"linear-gradient(135deg, #038A5F, #012419)"},children:e.jsx("p",{children:"⚡ Centralized dashboard for all hotel operations 🔄 Real-time OTA sync to avoid double bookings 📊 Revenue reports, occupancy stats, and performance insights💳 Integrated billing & payment processing 📱 Mobile-friendly interface for on-the-go management"})}),e.jsx("div",{style:{},children:e.jsx("div",{className:"container h-100",children:e.jsxs("div",{className:"row h-100 align-items-start align-items-lg-center",children:[e.jsx("div",{className:"col-lg-4 col-md-12 text-center",children:e.jsx("img",{src:ij,alt:"Revenue Management",style:{width:"100%",height:"300px",objectFit:"contain",borderRadius:"12px"}})}),e.jsxs("div",{className:"col-lg-8 col-md-12 text-dark",children:[e.jsx("h3",{style:{fontWeight:"600",marginBottom:"12px",color:"#038A5F"},children:e.jsx("b",{children:"Tech Solutions"})}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95},children:"We provide businesses with cutting-edge technology services to help them grow, scale, and stay competitive in the digital era. From building powerful websites and mobile apps to creating impactful marketing campaigns, our solutions are designed for success."}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95},children:"Our expert team delivers secure, scalable, and high-performance systems — ensuring your business operates smoothly, reaches the right audience, and stays ahead in the market."})]})]})})}),e.jsx("div",{className:"container-fluid p-4 mt-5 mb-5",style:{color:"white",background:"linear-gradient(135deg, #038A5F, #012419)"},children:e.jsx("p",{children:"💻 Custom Website Design & Development 📱 Android & iOS Mobile App  evelopment 📣 Digital Marketing (SEO, Social Media, Paid Ads)🌐 Networking & IT Infrastructure Solutions 🛠️ Ongoing Maintenance & Technical Support 📊 Data Analytics & Performance Tracking"})}),e.jsx("div",{style:{},children:e.jsx("div",{className:"container h-100",children:e.jsxs("div",{className:"row h-100 align-items-start align-items-lg-center",children:[e.jsxs("div",{className:"col-lg-8 col-md-12 text-dark",children:[e.jsx("h3",{style:{fontWeight:"600",marginBottom:"12px",color:"#038A5F"},children:e.jsx("b",{children:"Hotel Facility Booking Engine"})}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95},children:"Our advanced booking engine goes beyond room reservations — it lets guests instantly book hotel facilities like conference halls, banquet spaces, spas, gyms, and other amenities with ease."}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95},children:"Designed for speed, transparency, and convenience, the system allows guests to view real-time availability, select services, and confirm their bookings in just a few clicks — whether on desktop or mobile."}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95},children:"For hoteliers, the platform centralizes facility management, prevents double bookings, and provides analytics to optimize usage and maximize revenue from every service offered."})]}),e.jsx("div",{className:"col-lg-4 col-md-12 text-center",children:e.jsx("img",{src:rj,alt:"Revenue Management",style:{width:"100%",height:"300px",objectFit:"contain",borderRadius:"12px"}})})]})})}),e.jsx("div",{className:"container-fluid p-4",style:{color:"white",background:"linear-gradient(135deg, #038A5F, #012419)"},children:e.jsx("p",{children:"🏨 Real-time facility availability and instant booking 📅 Calendar-based scheduling for events and amenities 💳 Secure payment integration for add-on services 📊 Usage reports and revenue tracking for facilities 📲 Mobile-friendly interface for guests and staff"})}),e.jsx("div",{style:{height:"450px",marginBottom:"20px"},children:e.jsx("div",{className:"container h-100",children:e.jsxs("div",{className:"row h-100 align-items-start align-items-lg-center",children:[e.jsx("div",{className:"col-lg-4 col-md-12 text-center",children:e.jsx("img",{src:aj,alt:"Revenue Management",style:{width:"100%",height:"300px",objectFit:"contain",borderRadius:"12px"}})}),e.jsxs("div",{className:"col-lg-8 col-md-12 text-dark",children:[e.jsx("h3",{style:{fontWeight:"600",marginBottom:"12px",color:"#038A5F"},children:e.jsx("b",{children:"OTA Management"})}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95},children:"Sonachala provides a powerful OTA (Online Travel Agency) management system designed to help hotels and resorts efficiently manage listings, pricing, and availability across multiple online channels — all from one centralized platform.Our tools ensure real-time updates to room inventory, rates, and promotions, eliminating overbookings and manual updates. Whether you manage one property or a large chain, our OTA management system simplifies distribution while boosting bookings."})]})]})})}),e.jsx("div",{className:"container-fluid p-4",style:{color:"white",background:"linear-gradient(135deg, #038A5F, #012419)"},children:e.jsx("p",{children:"🔄 Centralized control for all OTA listings 📊 Real-time rate & availability synchronization 💹 Dynamic pricing tools to maximize revenue 🌍 Increased visibility across global booking platforms ✅ Automated booking updates to prevent overbooking"})}),e.jsx("div",{style:{height:"450px",marginBottom:"20px"},children:e.jsx("div",{className:"container h-100",children:e.jsxs("div",{className:"row h-100 align-items-start align-items-lg-center",children:[e.jsxs("div",{className:"col-lg-8 col-md-12 text-dark",children:[e.jsx("h3",{style:{fontWeight:"600",marginBottom:"12px",color:"#038A5F"},children:e.jsx("b",{children:"Online Travel Agent Management"})}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95},children:"Sonachala's OTA Management solution enables hotels, resorts, and homestays to efficiently manage their presence across multiple online travel agencies from a single, unified platform.Our system updates room rates, availability, and promotions in real-time, ensuring accuracy across all channels while preventing overbookings and missed opportunities. With detailed analytics, revenue optimization tools, and centralized communication, you can grow your bookings and maintain a consistent brand presence across global platforms."})]}),e.jsx("div",{className:"col-lg-4 col-md-12 text-center",children:e.jsx("img",{src:lj,alt:"Revenue Management",style:{width:"100%",height:"300px",objectFit:"contain",borderRadius:"12px"}})})]})})}),e.jsx("div",{className:"container-fluid p-4",style:{color:"white",background:"linear-gradient(135deg, #038A5F, #012419)"},children:e.jsx("p",{children:"🌍 Multi-OTA connectivity from a single dashboard 🔄 Real-time inventory & pricing synchronization 📊 Channel performance reports & analytics 💹 Revenue optimization & promotional tools ✅ Automatic booking updates to prevent double bookings"})}),e.jsxs("div",{className:"text-center mt-5 mb-5 px-3",children:[e.jsx("h1",{style:{fontSize:"clamp(1.5rem, 5vw, 2.5rem)",marginBottom:"1rem"},children:e.jsx("b",{children:"Want to Explore More?"})}),e.jsx("p",{style:{textAlign:"center",fontSize:"clamp(0.9rem, 3vw, 1.1rem)",marginBottom:"2rem",maxWidth:"600px",margin:"0 auto 2rem"},children:"Visit our official website to browse properties, manage bookings, or become a partner"}),e.jsx("a",{href:"https://sonachala.com",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",padding:"clamp(10px, 3vw, 15px) clamp(20px, 5vw, 40px)",background:"linear-gradient(135deg, #038A5F, #012419)",color:"#ffffff",textDecoration:"none",borderRadius:"50px",fontWeight:"500",fontSize:"clamp(0.9rem, 3vw, 1.1rem)",boxShadow:"0 4px 10px rgba(0,0,0,0.15)",transition:"all 0.3s ease",minWidth:"200px"},onMouseEnter:t=>{const s=t.target;s.style.transform="translateY(-2px)",s.style.boxShadow="0 6px 14px rgba(0,0,0,0.25)"},onMouseLeave:t=>{const s=t.target;s.style.transform="translateY(0)",s.style.boxShadow="0 4px 10px rgba(0,0,0,0.15)"},children:"Go To Main Sonachala Site"})]}),e.jsx("style",{children:`
                /* Mobile Responsiveness */
                @media (max-width: 768px) {
                    /* Content sections padding and spacing */
                    .container h-100 .row {
                        padding: 1rem 0;
                    }

                    /* Section headings */
                    h3 {
                        font-size: clamp(1.2rem, 4vw, 1.5rem) !important;
                        margin-bottom: 1rem !important;
                    }

                    /* Paragraph text */
                    p {
                        font-size: clamp(0.85rem, 3vw, 1rem) !important;
                        line-height: 1.6 !important;
                    }

                    /* Feature list styling */
                    .container-fluid p {
                        font-size: clamp(0.8rem, 3vw, 0.95rem) !important;
                        line-height: 1.5 !important;
                        padding: 0.5rem 1rem !important;
                    }

                    /* Image containers */
                    .col-lg-4.col-md-12 {
                        margin-bottom: 2rem;
                    }

                    /* Content order adjustments for mobile */
                    .row.align-items-start.align-items-lg-center {
                        flex-direction: column-reverse;
                    }

                    .row.align-items-start.align-items-lg-center .col-lg-8 {
                        order: 2;
                        text-align: center !important;
                        margin-bottom: 2rem;
                    }

                    .row.align-items-start.align-items-lg-center .col-lg-4 {
                        order: 1;
                        margin-bottom: 2rem;
                    }

                    /* Specific adjustments for alternating layouts */
                    .row:nth-child(odd) .col-lg-8 {
                        order: 1 !important;
                    }

                    .row:nth-child(odd) .col-lg-4 {
                        order: 2 !important;
                    }

                    /* Banner section adjustments */
                    .mb-5 .container .row .col-lg-6 {
                        padding: 0 1rem;
                    }

                    /* Feature sections spacing */
                    .container-fluid.p-4.mb-5,
                    .container-fluid.p-4.mt-5.mb-5 {
                        padding: 2rem 1rem !important;
                    }

                    /* Section heights for mobile */
                    div[style*="minHeight"] {
                        min-height: auto !important;
                        padding: 3rem 0 !important;
                    }

                    /* Fixed height sections */
                    div[style*="height: 450px"] {
                        height: auto !important;
                        padding: 3rem 0 !important;
                    }

                    /* Image responsiveness */
                    img[style*="height: clamp"] {
                        height: clamp(150px, 30vh, 250px) !important;
                    }

                    img[style*="height: 300px"] {
                        height: clamp(150px, 25vh, 200px) !important;
                    }

                    /* Container padding adjustments */
                    .container.h-100 {
                        padding-left: 15px !important;
                        padding-right: 15px !important;
                    }
                }

                @media (max-width: 480px) {
                    /* Extra small screens */
                    .container-fluid p {
                        font-size: 0.8rem !important;
                        text-align: left !important;
                    }

                    /* Button full width on very small screens */
                    .text-center a[href="https://sonachala.com"] {
                        width: 100% !important;
                        max-width: 300px !important;
                        display: block !important;
                        margin: 0 auto !important;
                    }

                    /* Reduce padding further */
                    .container-fluid.p-4 {
                        padding: 1.5rem 1rem !important;
                    }

                    /* Banner section */
                    .mb-5 {
                        padding: 1rem 0 !important;
                    }

                    .mb-5 .container .row .col-lg-6 img {
                        max-width: 250px !important;
                    }
                }

                /* Tablet adjustments */
                @media (min-width: 769px) and (max-width: 1024px) {
                    .col-lg-8 {
                        padding: 0 2rem;
                    }

                    .col-lg-4 img {
                        max-height: 250px;
                    }
                }
            `})]});function cj(){return e.jsx(Yp,{basename:"/Hrify-digital-site/",children:e.jsxs("div",{className:"App d-flex flex-column min-vh-100",children:[e.jsx(Zp,{}),e.jsx("main",{className:"flex-grow-1",children:e.jsxs(Pp,{children:[e.jsx(D,{path:"/",element:e.jsx(ig,{})}),e.jsx(D,{path:"/about",element:e.jsx(lg,{})}),e.jsx(D,{path:"/contact",element:e.jsx(pg,{})}),e.jsx(D,{path:"/services",element:e.jsx(gg,{})}),e.jsx(D,{path:"/clients",element:e.jsx(xg,{})}),e.jsx(D,{path:"/careers",element:e.jsx(yg,{})}),e.jsx(D,{path:"/internship",element:e.jsx(jg,{})}),e.jsx(D,{path:"/referral-program",element:e.jsx(bg,{})}),e.jsx(D,{path:"/webdesign",element:e.jsx(wg,{})}),e.jsx(D,{path:"/webmaintenance",element:e.jsx(Sg,{})}),e.jsx(D,{path:"/aws",element:e.jsx(Cg,{})}),e.jsx(D,{path:"/cybersecurity",element:e.jsx(Mg,{})}),e.jsx(D,{path:"/businessweb",element:e.jsx(Ag,{})}),e.jsx(D,{path:"/resweb",element:e.jsx(Lg,{})}),e.jsx(D,{path:"/cmsweb",element:e.jsx(Pg,{})}),e.jsx(D,{path:"/webapp",element:e.jsx($g,{})}),e.jsx(D,{path:"/customweb",element:e.jsx(Yg,{})}),e.jsx(D,{path:"/ecommerceweb",element:e.jsx(Kg,{})}),e.jsx(D,{path:"/matrimonyweb",element:e.jsx(Jg,{})}),e.jsx(D,{path:"/mobileapp",element:e.jsx(sx,{})}),e.jsx(D,{path:"/domains",element:e.jsx(ax,{})}),e.jsx(D,{path:"/personalemail",element:e.jsx(cx,{})}),e.jsx(D,{path:"/googlework",element:e.jsx(bx,{})}),e.jsx(D,{path:"/emailcampaign",element:e.jsx(Sx,{})}),e.jsx(D,{path:"/awsimpl",element:e.jsx(Px,{})}),e.jsx(D,{path:"/designbranding",element:e.jsx(Ux,{})}),e.jsx(D,{path:"/digitalmarketing",element:e.jsx(qx,{})}),e.jsx(D,{path:"/marketting",element:e.jsx(Kx,{})}),e.jsx(D,{path:"/webaudit",element:e.jsx(Jx,{})}),e.jsx(D,{path:"/systemintegration",element:e.jsx(df,{})}),e.jsx(D,{path:"/infrastructure",element:e.jsx(kf,{})}),e.jsx(D,{path:"/serverstorage",element:e.jsx(Pf,{})}),e.jsx(D,{path:"/networksecurity",element:e.jsx(s0,{})}),e.jsx(D,{path:"/structuredcabling",element:e.jsx(f0,{})}),e.jsx(D,{path:"/cloudnative",element:e.jsx(j0,{})}),e.jsx(D,{path:"/workplace",element:e.jsx(z0,{})}),e.jsx(D,{path:"/ciam",element:e.jsx(M0,{})}),e.jsx(D,{path:"/workforceidentity",element:e.jsx(I0,{})}),e.jsx(D,{path:"/securityengineering",element:e.jsx(T0,{})}),e.jsx(D,{path:"/zerotrustarchitecture",element:e.jsx(L0,{})}),e.jsx(D,{path:"/governanceriskmanagementcompliance",element:e.jsx(_0,{})}),e.jsx(D,{path:"/cyberdefenseinvestigation",element:e.jsx($0,{})}),e.jsx(D,{path:"/cyberadvisory",element:e.jsx(Q0,{})}),e.jsx(D,{path:"/cyberresilience",element:e.jsx(X0,{})}),e.jsx(D,{path:"/distributedtrust",element:e.jsx(J0,{})}),e.jsx(D,{path:"/ethereum",element:e.jsx(ty,{})}),e.jsx(D,{path:"/hyperledger",element:e.jsx(iy,{})}),e.jsx(D,{path:"/dapps",element:e.jsx(ay,{})}),e.jsx(D,{path:"/nft",element:e.jsx(oy,{})}),e.jsx(D,{path:"/ipfs",element:e.jsx(dy,{})}),e.jsx(D,{path:"/enterprise",element:e.jsx(uy,{})}),e.jsx(D,{path:"/securitymanagement",element:e.jsx(py,{})}),e.jsx(D,{path:"/sitereliability",element:e.jsx(xy,{})}),e.jsx(D,{path:"/monitoringmaintenance",element:e.jsx(yy,{})}),e.jsx(D,{path:"/helpdesk",element:e.jsx(vy,{})}),e.jsx(D,{path:"/vendormanagement",element:e.jsx(wy,{})}),e.jsx(D,{path:"/internetofthings",element:e.jsx(Sy,{})}),e.jsx(D,{path:"/ai_nlp",element:e.jsx(Dy,{})}),e.jsx(D,{path:"/computervision",element:e.jsx(zy,{})}),e.jsx(D,{path:"/ml_mlops",element:e.jsx(My,{})}),e.jsx(D,{path:"/datascience",element:e.jsx(Iy,{})}),e.jsx(D,{path:"/analytics",element:e.jsx(Ty,{})}),e.jsx(D,{path:"/reports",element:e.jsx(Ly,{})}),e.jsx(D,{path:"/bigdata_datalake",element:e.jsx(Hy,{})}),e.jsx(D,{path:"/datafabric",element:e.jsx(Oy,{})}),e.jsx(D,{path:"/qa_consulting_strategy",element:e.jsx(Uy,{})}),e.jsx(D,{path:"/agile_testing",element:e.jsx(Vy,{})}),e.jsx(D,{path:"/independent_certification",element:e.jsx(Yy,{})}),e.jsx(D,{path:"/managed_testing_services",element:e.jsx(Jy,{})}),e.jsx(D,{path:"/sonachala",element:e.jsx(oj,{})})]})}),e.jsx(eg,{})]})})}const fm=document.getElementById("root");if(!fm)throw new Error("Failed to find the root element");const dj=Nr.createRoot(fm);dj.render(e.jsx(nc.StrictMode,{children:e.jsx(cj,{})}));
