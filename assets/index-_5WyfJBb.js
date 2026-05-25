function Um(t,s){for(var n=0;n<s.length;n++){const i=s[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const a=Object.getOwnPropertyDescriptor(i,r);a&&Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function $m(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var xc={exports:{}},Ri={},fc={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xn=Symbol.for("react.element"),Vm=Symbol.for("react.portal"),qm=Symbol.for("react.fragment"),Ym=Symbol.for("react.strict_mode"),Gm=Symbol.for("react.profiler"),Qm=Symbol.for("react.provider"),Km=Symbol.for("react.context"),Xm=Symbol.for("react.forward_ref"),Zm=Symbol.for("react.suspense"),Jm=Symbol.for("react.memo"),eu=Symbol.for("react.lazy"),Wl=Symbol.iterator;function tu(t){return t===null||typeof t!="object"?null:(t=Wl&&t[Wl]||t["@@iterator"],typeof t=="function"?t:null)}var yc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jc=Object.assign,vc={};function ws(t,s,n){this.props=t,this.context=s,this.refs=vc,this.updater=n||yc}ws.prototype.isReactComponent={};ws.prototype.setState=function(t,s){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,s,"setState")};ws.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function bc(){}bc.prototype=ws.prototype;function Ta(t,s,n){this.props=t,this.context=s,this.refs=vc,this.updater=n||yc}var Fa=Ta.prototype=new bc;Fa.constructor=Ta;jc(Fa,ws.prototype);Fa.isPureReactComponent=!0;var Il=Array.isArray,wc=Object.prototype.hasOwnProperty,La={current:null},Nc={key:!0,ref:!0,__self:!0,__source:!0};function kc(t,s,n){var i,r={},a=null,l=null;if(s!=null)for(i in s.ref!==void 0&&(l=s.ref),s.key!==void 0&&(a=""+s.key),s)wc.call(s,i)&&!Nc.hasOwnProperty(i)&&(r[i]=s[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];r.children=c}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:xn,type:t,key:a,ref:l,props:r,_owner:La.current}}function su(t,s){return{$$typeof:xn,type:t.type,key:s,ref:t.ref,props:t.props,_owner:t._owner}}function Ra(t){return typeof t=="object"&&t!==null&&t.$$typeof===xn}function nu(t){var s={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return s[n]})}var Al=/\/+/g;function rr(t,s){return typeof t=="object"&&t!==null&&t.key!=null?nu(""+t.key):s.toString(36)}function Jn(t,s,n,i,r){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case xn:case Vm:l=!0}}if(l)return l=t,r=r(l),t=i===""?"."+rr(l,0):i,Il(r)?(n="",t!=null&&(n=t.replace(Al,"$&/")+"/"),Jn(r,s,n,"",function(u){return u})):r!=null&&(Ra(r)&&(r=su(r,n+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(Al,"$&/")+"/")+t)),s.push(r)),1;if(l=0,i=i===""?".":i+":",Il(t))for(var o=0;o<t.length;o++){a=t[o];var c=i+rr(a,o);l+=Jn(a,s,n,c,r)}else if(c=tu(t),typeof c=="function")for(t=c.call(t),o=0;!(a=t.next()).done;)a=a.value,c=i+rr(a,o++),l+=Jn(a,s,n,c,r);else if(a==="object")throw s=String(t),Error("Objects are not valid as a React child (found: "+(s==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":s)+"). If you meant to render a collection of children, use an array instead.");return l}function kn(t,s,n){if(t==null)return t;var i=[],r=0;return Jn(t,i,"","",function(a){return s.call(n,a,r++)}),i}function iu(t){if(t._status===-1){var s=t._result;s=s(),s.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=s)}if(t._status===1)return t._result.default;throw t._result}var ue={current:null},ei={transition:null},ru={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:ei,ReactCurrentOwner:La};function Sc(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:kn,forEach:function(t,s,n){kn(t,function(){s.apply(this,arguments)},n)},count:function(t){var s=0;return kn(t,function(){s++}),s},toArray:function(t){return kn(t,function(s){return s})||[]},only:function(t){if(!Ra(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};T.Component=ws;T.Fragment=qm;T.Profiler=Gm;T.PureComponent=Ta;T.StrictMode=Ym;T.Suspense=Zm;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ru;T.act=Sc;T.cloneElement=function(t,s,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=jc({},t.props),r=t.key,a=t.ref,l=t._owner;if(s!=null){if(s.ref!==void 0&&(a=s.ref,l=La.current),s.key!==void 0&&(r=""+s.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(c in s)wc.call(s,c)&&!Nc.hasOwnProperty(c)&&(i[c]=s[c]===void 0&&o!==void 0?o[c]:s[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:xn,type:t.type,key:r,ref:a,props:i,_owner:l}};T.createContext=function(t){return t={$$typeof:Km,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Qm,_context:t},t.Consumer=t};T.createElement=kc;T.createFactory=function(t){var s=kc.bind(null,t);return s.type=t,s};T.createRef=function(){return{current:null}};T.forwardRef=function(t){return{$$typeof:Xm,render:t}};T.isValidElement=Ra;T.lazy=function(t){return{$$typeof:eu,_payload:{_status:-1,_result:t},_init:iu}};T.memo=function(t,s){return{$$typeof:Jm,type:t,compare:s===void 0?null:s}};T.startTransition=function(t){var s=ei.transition;ei.transition={};try{t()}finally{ei.transition=s}};T.unstable_act=Sc;T.useCallback=function(t,s){return ue.current.useCallback(t,s)};T.useContext=function(t){return ue.current.useContext(t)};T.useDebugValue=function(){};T.useDeferredValue=function(t){return ue.current.useDeferredValue(t)};T.useEffect=function(t,s){return ue.current.useEffect(t,s)};T.useId=function(){return ue.current.useId()};T.useImperativeHandle=function(t,s,n){return ue.current.useImperativeHandle(t,s,n)};T.useInsertionEffect=function(t,s){return ue.current.useInsertionEffect(t,s)};T.useLayoutEffect=function(t,s){return ue.current.useLayoutEffect(t,s)};T.useMemo=function(t,s){return ue.current.useMemo(t,s)};T.useReducer=function(t,s,n){return ue.current.useReducer(t,s,n)};T.useRef=function(t){return ue.current.useRef(t)};T.useState=function(t){return ue.current.useState(t)};T.useSyncExternalStore=function(t,s,n){return ue.current.useSyncExternalStore(t,s,n)};T.useTransition=function(){return ue.current.useTransition()};T.version="18.3.1";fc.exports=T;var B=fc.exports;const Ge=$m(B),au=Um({__proto__:null,default:Ge},[B]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lu=B,ou=Symbol.for("react.element"),cu=Symbol.for("react.fragment"),du=Object.prototype.hasOwnProperty,mu=lu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,uu={key:!0,ref:!0,__self:!0,__source:!0};function Bc(t,s,n){var i,r={},a=null,l=null;n!==void 0&&(a=""+n),s.key!==void 0&&(a=""+s.key),s.ref!==void 0&&(l=s.ref);for(i in s)du.call(s,i)&&!uu.hasOwnProperty(i)&&(r[i]=s[i]);if(t&&t.defaultProps)for(i in s=t.defaultProps,s)r[i]===void 0&&(r[i]=s[i]);return{$$typeof:ou,type:t,key:a,ref:l,props:r,_owner:mu.current}}Ri.Fragment=cu;Ri.jsx=Bc;Ri.jsxs=Bc;xc.exports=Ri;var e=xc.exports,Pr={},Dc={exports:{}},Ne={},Cc={exports:{}},zc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function s(M,I){var A=M.length;M.push(I);e:for(;0<A;){var G=A-1>>>1,ee=M[G];if(0<r(ee,I))M[G]=I,M[A]=ee,A=G;else break e}}function n(M){return M.length===0?null:M[0]}function i(M){if(M.length===0)return null;var I=M[0],A=M.pop();if(A!==I){M[0]=A;e:for(var G=0,ee=M.length,wn=ee>>>1;G<wn;){var kt=2*(G+1)-1,ir=M[kt],St=kt+1,Nn=M[St];if(0>r(ir,A))St<ee&&0>r(Nn,ir)?(M[G]=Nn,M[St]=A,G=St):(M[G]=ir,M[kt]=A,G=kt);else if(St<ee&&0>r(Nn,A))M[G]=Nn,M[St]=A,G=St;else break e}}return I}function r(M,I){var A=M.sortIndex-I.sortIndex;return A!==0?A:M.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var l=Date,o=l.now();t.unstable_now=function(){return l.now()-o}}var c=[],u=[],y=1,f=null,h=3,b=!1,w=!1,N=!1,j=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(M){for(var I=n(u);I!==null;){if(I.callback===null)i(u);else if(I.startTime<=M)i(u),I.sortIndex=I.expirationTime,s(c,I);else break;I=n(u)}}function v(M){if(N=!1,p(M),!w)if(n(c)!==null)w=!0,sr(S);else{var I=n(u);I!==null&&nr(v,I.startTime-M)}}function S(M,I){w=!1,N&&(N=!1,x(W),W=-1),b=!0;var A=h;try{for(p(I),f=n(c);f!==null&&(!(f.expirationTime>I)||M&&!Ee());){var G=f.callback;if(typeof G=="function"){f.callback=null,h=f.priorityLevel;var ee=G(f.expirationTime<=I);I=t.unstable_now(),typeof ee=="function"?f.callback=ee:f===n(c)&&i(c),p(I)}else i(c);f=n(c)}if(f!==null)var wn=!0;else{var kt=n(u);kt!==null&&nr(v,kt.startTime-I),wn=!1}return wn}finally{f=null,h=A,b=!1}}var z=!1,E=null,W=-1,Y=5,F=-1;function Ee(){return!(t.unstable_now()-F<Y)}function Bs(){if(E!==null){var M=t.unstable_now();F=M;var I=!0;try{I=E(!0,M)}finally{I?Ds():(z=!1,E=null)}}else z=!1}var Ds;if(typeof m=="function")Ds=function(){m(Bs)};else if(typeof MessageChannel<"u"){var El=new MessageChannel,_m=El.port2;El.port1.onmessage=Bs,Ds=function(){_m.postMessage(null)}}else Ds=function(){j(Bs,0)};function sr(M){E=M,z||(z=!0,Ds())}function nr(M,I){W=j(function(){M(t.unstable_now())},I)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(M){M.callback=null},t.unstable_continueExecution=function(){w||b||(w=!0,sr(S))},t.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<M?Math.floor(1e3/M):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(M){switch(h){case 1:case 2:case 3:var I=3;break;default:I=h}var A=h;h=I;try{return M()}finally{h=A}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(M,I){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var A=h;h=M;try{return I()}finally{h=A}},t.unstable_scheduleCallback=function(M,I,A){var G=t.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?G+A:G):A=G,M){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=A+ee,M={id:y++,callback:I,priorityLevel:M,startTime:A,expirationTime:ee,sortIndex:-1},A>G?(M.sortIndex=A,s(u,M),n(c)===null&&M===n(u)&&(N?(x(W),W=-1):N=!0,nr(v,A-G))):(M.sortIndex=ee,s(c,M),w||b||(w=!0,sr(S))),M},t.unstable_shouldYield=Ee,t.unstable_wrapCallback=function(M){var I=h;return function(){var A=h;h=I;try{return M.apply(this,arguments)}finally{h=A}}}})(zc);Cc.exports=zc;var hu=Cc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pu=B,we=hu;function k(t){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)s+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mc=new Set,Ks={};function Vt(t,s){gs(t,s),gs(t+"Capture",s)}function gs(t,s){for(Ks[t]=s,t=0;t<s.length;t++)Mc.add(s[t])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hr=Object.prototype.hasOwnProperty,gu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Tl={},Fl={};function xu(t){return Hr.call(Fl,t)?!0:Hr.call(Tl,t)?!1:gu.test(t)?Fl[t]=!0:(Tl[t]=!0,!1)}function fu(t,s,n,i){if(n!==null&&n.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function yu(t,s,n,i){if(s===null||typeof s>"u"||fu(t,s,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function he(t,s,n,i,r,a,l){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=s,this.sanitizeURL=a,this.removeEmptyString=l}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){re[t]=new he(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var s=t[0];re[s]=new he(s,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){re[t]=new he(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){re[t]=new he(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){re[t]=new he(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){re[t]=new he(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){re[t]=new he(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){re[t]=new he(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){re[t]=new he(t,5,!1,t.toLowerCase(),null,!1,!1)});var Pa=/[\-:]([a-z])/g;function Ha(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var s=t.replace(Pa,Ha);re[s]=new he(s,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var s=t.replace(Pa,Ha);re[s]=new he(s,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var s=t.replace(Pa,Ha);re[s]=new he(s,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){re[t]=new he(t,1,!1,t.toLowerCase(),null,!1,!1)});re.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){re[t]=new he(t,1,!1,t.toLowerCase(),null,!0,!0)});function Oa(t,s,n,i){var r=re.hasOwnProperty(s)?re[s]:null;(r!==null?r.type!==0:i||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(yu(s,n,r,i)&&(n=null),i||r===null?xu(s)&&(n===null?t.removeAttribute(s):t.setAttribute(s,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(s=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(s):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,s,n):t.setAttribute(s,n))))}var et=pu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sn=Symbol.for("react.element"),Xt=Symbol.for("react.portal"),Zt=Symbol.for("react.fragment"),_a=Symbol.for("react.strict_mode"),Or=Symbol.for("react.profiler"),Ec=Symbol.for("react.provider"),Wc=Symbol.for("react.context"),Ua=Symbol.for("react.forward_ref"),_r=Symbol.for("react.suspense"),Ur=Symbol.for("react.suspense_list"),$a=Symbol.for("react.memo"),st=Symbol.for("react.lazy"),Ic=Symbol.for("react.offscreen"),Ll=Symbol.iterator;function Cs(t){return t===null||typeof t!="object"?null:(t=Ll&&t[Ll]||t["@@iterator"],typeof t=="function"?t:null)}var V=Object.assign,ar;function Ls(t){if(ar===void 0)try{throw Error()}catch(n){var s=n.stack.trim().match(/\n( *(at )?)/);ar=s&&s[1]||""}return`
`+ar+t}var lr=!1;function or(t,s){if(!t||lr)return"";lr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(u){var i=u}Reflect.construct(t,[],s)}else{try{s.call()}catch(u){i=u}t.call(s.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),a=i.stack.split(`
`),l=r.length-1,o=a.length-1;1<=l&&0<=o&&r[l]!==a[o];)o--;for(;1<=l&&0<=o;l--,o--)if(r[l]!==a[o]){if(l!==1||o!==1)do if(l--,o--,0>o||r[l]!==a[o]){var c=`
`+r[l].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=l&&0<=o);break}}}finally{lr=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ls(t):""}function ju(t){switch(t.tag){case 5:return Ls(t.type);case 16:return Ls("Lazy");case 13:return Ls("Suspense");case 19:return Ls("SuspenseList");case 0:case 2:case 15:return t=or(t.type,!1),t;case 11:return t=or(t.type.render,!1),t;case 1:return t=or(t.type,!0),t;default:return""}}function $r(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Zt:return"Fragment";case Xt:return"Portal";case Or:return"Profiler";case _a:return"StrictMode";case _r:return"Suspense";case Ur:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Wc:return(t.displayName||"Context")+".Consumer";case Ec:return(t._context.displayName||"Context")+".Provider";case Ua:var s=t.render;return t=t.displayName,t||(t=s.displayName||s.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $a:return s=t.displayName||null,s!==null?s:$r(t.type)||"Memo";case st:s=t._payload,t=t._init;try{return $r(t(s))}catch{}}return null}function vu(t){var s=t.type;switch(t.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=s.render,t=t.displayName||t.name||"",s.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $r(s);case 8:return s===_a?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function yt(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ac(t){var s=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function bu(t){var s=Ac(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,s),i=""+t[s];if(!t.hasOwnProperty(s)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,a=n.set;return Object.defineProperty(t,s,{configurable:!0,get:function(){return r.call(this)},set:function(l){i=""+l,a.call(this,l)}}),Object.defineProperty(t,s,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(l){i=""+l},stopTracking:function(){t._valueTracker=null,delete t[s]}}}}function Bn(t){t._valueTracker||(t._valueTracker=bu(t))}function Tc(t){if(!t)return!1;var s=t._valueTracker;if(!s)return!0;var n=s.getValue(),i="";return t&&(i=Ac(t)?t.checked?"true":"false":t.value),t=i,t!==n?(s.setValue(t),!0):!1}function mi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vr(t,s){var n=s.checked;return V({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Rl(t,s){var n=s.defaultValue==null?"":s.defaultValue,i=s.checked!=null?s.checked:s.defaultChecked;n=yt(s.value!=null?s.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Fc(t,s){s=s.checked,s!=null&&Oa(t,"checked",s,!1)}function qr(t,s){Fc(t,s);var n=yt(s.value),i=s.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}s.hasOwnProperty("value")?Yr(t,s.type,n):s.hasOwnProperty("defaultValue")&&Yr(t,s.type,yt(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(t.defaultChecked=!!s.defaultChecked)}function Pl(t,s,n){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var i=s.type;if(!(i!=="submit"&&i!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+t._wrapperState.initialValue,n||s===t.value||(t.value=s),t.defaultValue=s}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yr(t,s,n){(s!=="number"||mi(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Rs=Array.isArray;function cs(t,s,n,i){if(t=t.options,s){s={};for(var r=0;r<n.length;r++)s["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=s.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+yt(n),s=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}s!==null||t[r].disabled||(s=t[r])}s!==null&&(s.selected=!0)}}function Gr(t,s){if(s.dangerouslySetInnerHTML!=null)throw Error(k(91));return V({},s,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hl(t,s){var n=s.value;if(n==null){if(n=s.children,s=s.defaultValue,n!=null){if(s!=null)throw Error(k(92));if(Rs(n)){if(1<n.length)throw Error(k(93));n=n[0]}s=n}s==null&&(s=""),n=s}t._wrapperState={initialValue:yt(n)}}function Lc(t,s){var n=yt(s.value),i=yt(s.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),s.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ol(t){var s=t.textContent;s===t._wrapperState.initialValue&&s!==""&&s!==null&&(t.value=s)}function Rc(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qr(t,s){return t==null||t==="http://www.w3.org/1999/xhtml"?Rc(s):t==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Dn,Pc=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(s,n,i,r)})}:t}(function(t,s){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=s;else{for(Dn=Dn||document.createElement("div"),Dn.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Dn.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;s.firstChild;)t.appendChild(s.firstChild)}});function Xs(t,s){if(s){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=s;return}}t.textContent=s}var Os={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wu=["Webkit","ms","Moz","O"];Object.keys(Os).forEach(function(t){wu.forEach(function(s){s=s+t.charAt(0).toUpperCase()+t.substring(1),Os[s]=Os[t]})});function Hc(t,s,n){return s==null||typeof s=="boolean"||s===""?"":n||typeof s!="number"||s===0||Os.hasOwnProperty(t)&&Os[t]?(""+s).trim():s+"px"}function Oc(t,s){t=t.style;for(var n in s)if(s.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Hc(n,s[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Nu=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kr(t,s){if(s){if(Nu[t]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(k(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(k(61))}if(s.style!=null&&typeof s.style!="object")throw Error(k(62))}}function Xr(t,s){if(t.indexOf("-")===-1)return typeof s.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zr=null;function Va(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jr=null,ds=null,ms=null;function _l(t){if(t=jn(t)){if(typeof Jr!="function")throw Error(k(280));var s=t.stateNode;s&&(s=Ui(s),Jr(t.stateNode,t.type,s))}}function _c(t){ds?ms?ms.push(t):ms=[t]:ds=t}function Uc(){if(ds){var t=ds,s=ms;if(ms=ds=null,_l(t),s)for(t=0;t<s.length;t++)_l(s[t])}}function $c(t,s){return t(s)}function Vc(){}var cr=!1;function qc(t,s,n){if(cr)return t(s,n);cr=!0;try{return $c(t,s,n)}finally{cr=!1,(ds!==null||ms!==null)&&(Vc(),Uc())}}function Zs(t,s){var n=t.stateNode;if(n===null)return null;var i=Ui(n);if(i===null)return null;n=i[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,s,typeof n));return n}var ea=!1;if(Ke)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){ea=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{ea=!1}function ku(t,s,n,i,r,a,l,o,c){var u=Array.prototype.slice.call(arguments,3);try{s.apply(n,u)}catch(y){this.onError(y)}}var _s=!1,ui=null,hi=!1,ta=null,Su={onError:function(t){_s=!0,ui=t}};function Bu(t,s,n,i,r,a,l,o,c){_s=!1,ui=null,ku.apply(Su,arguments)}function Du(t,s,n,i,r,a,l,o,c){if(Bu.apply(this,arguments),_s){if(_s){var u=ui;_s=!1,ui=null}else throw Error(k(198));hi||(hi=!0,ta=u)}}function qt(t){var s=t,n=t;if(t.alternate)for(;s.return;)s=s.return;else{t=s;do s=t,s.flags&4098&&(n=s.return),t=s.return;while(t)}return s.tag===3?n:null}function Yc(t){if(t.tag===13){var s=t.memoizedState;if(s===null&&(t=t.alternate,t!==null&&(s=t.memoizedState)),s!==null)return s.dehydrated}return null}function Ul(t){if(qt(t)!==t)throw Error(k(188))}function Cu(t){var s=t.alternate;if(!s){if(s=qt(t),s===null)throw Error(k(188));return s!==t?null:t}for(var n=t,i=s;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return Ul(r),t;if(a===i)return Ul(r),s;a=a.sibling}throw Error(k(188))}if(n.return!==i.return)n=r,i=a;else{for(var l=!1,o=r.child;o;){if(o===n){l=!0,n=r,i=a;break}if(o===i){l=!0,i=r,n=a;break}o=o.sibling}if(!l){for(o=a.child;o;){if(o===n){l=!0,n=a,i=r;break}if(o===i){l=!0,i=a,n=r;break}o=o.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==i)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:s}function Gc(t){return t=Cu(t),t!==null?Qc(t):null}function Qc(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var s=Qc(t);if(s!==null)return s;t=t.sibling}return null}var Kc=we.unstable_scheduleCallback,$l=we.unstable_cancelCallback,zu=we.unstable_shouldYield,Mu=we.unstable_requestPaint,Q=we.unstable_now,Eu=we.unstable_getCurrentPriorityLevel,qa=we.unstable_ImmediatePriority,Xc=we.unstable_UserBlockingPriority,pi=we.unstable_NormalPriority,Wu=we.unstable_LowPriority,Zc=we.unstable_IdlePriority,Pi=null,_e=null;function Iu(t){if(_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(Pi,t,void 0,(t.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:Fu,Au=Math.log,Tu=Math.LN2;function Fu(t){return t>>>=0,t===0?32:31-(Au(t)/Tu|0)|0}var Cn=64,zn=4194304;function Ps(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gi(t,s){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,a=t.pingedLanes,l=n&268435455;if(l!==0){var o=l&~r;o!==0?i=Ps(o):(a&=l,a!==0&&(i=Ps(a)))}else l=n&~r,l!==0?i=Ps(l):a!==0&&(i=Ps(a));if(i===0)return 0;if(s!==0&&s!==i&&!(s&r)&&(r=i&-i,a=s&-s,r>=a||r===16&&(a&4194240)!==0))return s;if(i&4&&(i|=n&16),s=t.entangledLanes,s!==0)for(t=t.entanglements,s&=i;0<s;)n=31-Fe(s),r=1<<n,i|=t[n],s&=~r;return i}function Lu(t,s){switch(t){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ru(t,s){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,a=t.pendingLanes;0<a;){var l=31-Fe(a),o=1<<l,c=r[l];c===-1?(!(o&n)||o&i)&&(r[l]=Lu(o,s)):c<=s&&(t.expiredLanes|=o),a&=~o}}function sa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Jc(){var t=Cn;return Cn<<=1,!(Cn&4194240)&&(Cn=64),t}function dr(t){for(var s=[],n=0;31>n;n++)s.push(t);return s}function fn(t,s,n){t.pendingLanes|=s,s!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,s=31-Fe(s),t[s]=n}function Pu(t,s){var n=t.pendingLanes&~s;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=s,t.mutableReadLanes&=s,t.entangledLanes&=s,s=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Fe(n),a=1<<r;s[r]=0,i[r]=-1,t[r]=-1,n&=~a}}function Ya(t,s){var n=t.entangledLanes|=s;for(t=t.entanglements;n;){var i=31-Fe(n),r=1<<i;r&s|t[i]&s&&(t[i]|=s),n&=~r}}var R=0;function ed(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var td,Ga,sd,nd,id,na=!1,Mn=[],ct=null,dt=null,mt=null,Js=new Map,en=new Map,it=[],Hu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vl(t,s){switch(t){case"focusin":case"focusout":ct=null;break;case"dragenter":case"dragleave":dt=null;break;case"mouseover":case"mouseout":mt=null;break;case"pointerover":case"pointerout":Js.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":en.delete(s.pointerId)}}function Ms(t,s,n,i,r,a){return t===null||t.nativeEvent!==a?(t={blockedOn:s,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},s!==null&&(s=jn(s),s!==null&&Ga(s)),t):(t.eventSystemFlags|=i,s=t.targetContainers,r!==null&&s.indexOf(r)===-1&&s.push(r),t)}function Ou(t,s,n,i,r){switch(s){case"focusin":return ct=Ms(ct,t,s,n,i,r),!0;case"dragenter":return dt=Ms(dt,t,s,n,i,r),!0;case"mouseover":return mt=Ms(mt,t,s,n,i,r),!0;case"pointerover":var a=r.pointerId;return Js.set(a,Ms(Js.get(a)||null,t,s,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,en.set(a,Ms(en.get(a)||null,t,s,n,i,r)),!0}return!1}function rd(t){var s=Tt(t.target);if(s!==null){var n=qt(s);if(n!==null){if(s=n.tag,s===13){if(s=Yc(n),s!==null){t.blockedOn=s,id(t.priority,function(){sd(n)});return}}else if(s===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ti(t){if(t.blockedOn!==null)return!1;for(var s=t.targetContainers;0<s.length;){var n=ia(t.domEventName,t.eventSystemFlags,s[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Zr=i,n.target.dispatchEvent(i),Zr=null}else return s=jn(n),s!==null&&Ga(s),t.blockedOn=n,!1;s.shift()}return!0}function ql(t,s,n){ti(t)&&n.delete(s)}function _u(){na=!1,ct!==null&&ti(ct)&&(ct=null),dt!==null&&ti(dt)&&(dt=null),mt!==null&&ti(mt)&&(mt=null),Js.forEach(ql),en.forEach(ql)}function Es(t,s){t.blockedOn===s&&(t.blockedOn=null,na||(na=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,_u)))}function tn(t){function s(r){return Es(r,t)}if(0<Mn.length){Es(Mn[0],t);for(var n=1;n<Mn.length;n++){var i=Mn[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ct!==null&&Es(ct,t),dt!==null&&Es(dt,t),mt!==null&&Es(mt,t),Js.forEach(s),en.forEach(s),n=0;n<it.length;n++)i=it[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<it.length&&(n=it[0],n.blockedOn===null);)rd(n),n.blockedOn===null&&it.shift()}var us=et.ReactCurrentBatchConfig,xi=!0;function Uu(t,s,n,i){var r=R,a=us.transition;us.transition=null;try{R=1,Qa(t,s,n,i)}finally{R=r,us.transition=a}}function $u(t,s,n,i){var r=R,a=us.transition;us.transition=null;try{R=4,Qa(t,s,n,i)}finally{R=r,us.transition=a}}function Qa(t,s,n,i){if(xi){var r=ia(t,s,n,i);if(r===null)vr(t,s,i,fi,n),Vl(t,i);else if(Ou(r,t,s,n,i))i.stopPropagation();else if(Vl(t,i),s&4&&-1<Hu.indexOf(t)){for(;r!==null;){var a=jn(r);if(a!==null&&td(a),a=ia(t,s,n,i),a===null&&vr(t,s,i,fi,n),a===r)break;r=a}r!==null&&i.stopPropagation()}else vr(t,s,i,null,n)}}var fi=null;function ia(t,s,n,i){if(fi=null,t=Va(i),t=Tt(t),t!==null)if(s=qt(t),s===null)t=null;else if(n=s.tag,n===13){if(t=Yc(s),t!==null)return t;t=null}else if(n===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;t=null}else s!==t&&(t=null);return fi=t,null}function ad(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Eu()){case qa:return 1;case Xc:return 4;case pi:case Wu:return 16;case Zc:return 536870912;default:return 16}default:return 16}}var at=null,Ka=null,si=null;function ld(){if(si)return si;var t,s=Ka,n=s.length,i,r="value"in at?at.value:at.textContent,a=r.length;for(t=0;t<n&&s[t]===r[t];t++);var l=n-t;for(i=1;i<=l&&s[n-i]===r[a-i];i++);return si=r.slice(t,1<i?1-i:void 0)}function ni(t){var s=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&s===13&&(t=13)):t=s,t===10&&(t=13),32<=t||t===13?t:0}function En(){return!0}function Yl(){return!1}function ke(t){function s(n,i,r,a,l){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?En:Yl,this.isPropagationStopped=Yl,this}return V(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),s}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xa=ke(Ns),yn=V({},Ns,{view:0,detail:0}),Vu=ke(yn),mr,ur,Ws,Hi=V({},yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Za,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(mr=t.screenX-Ws.screenX,ur=t.screenY-Ws.screenY):ur=mr=0,Ws=t),mr)},movementY:function(t){return"movementY"in t?t.movementY:ur}}),Gl=ke(Hi),qu=V({},Hi,{dataTransfer:0}),Yu=ke(qu),Gu=V({},yn,{relatedTarget:0}),hr=ke(Gu),Qu=V({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),Ku=ke(Qu),Xu=V({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Zu=ke(Xu),Ju=V({},Ns,{data:0}),Ql=ke(Ju),eh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},th={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nh(t){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(t):(t=sh[t])?!!s[t]:!1}function Za(){return nh}var ih=V({},yn,{key:function(t){if(t.key){var s=eh[t.key]||t.key;if(s!=="Unidentified")return s}return t.type==="keypress"?(t=ni(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?th[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Za,charCode:function(t){return t.type==="keypress"?ni(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ni(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rh=ke(ih),ah=V({},Hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kl=ke(ah),lh=V({},yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Za}),oh=ke(lh),ch=V({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),dh=ke(ch),mh=V({},Hi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),uh=ke(mh),hh=[9,13,27,32],Ja=Ke&&"CompositionEvent"in window,Us=null;Ke&&"documentMode"in document&&(Us=document.documentMode);var ph=Ke&&"TextEvent"in window&&!Us,od=Ke&&(!Ja||Us&&8<Us&&11>=Us),Xl=" ",Zl=!1;function cd(t,s){switch(t){case"keyup":return hh.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jt=!1;function gh(t,s){switch(t){case"compositionend":return dd(s);case"keypress":return s.which!==32?null:(Zl=!0,Xl);case"textInput":return t=s.data,t===Xl&&Zl?null:t;default:return null}}function xh(t,s){if(Jt)return t==="compositionend"||!Ja&&cd(t,s)?(t=ld(),si=Ka=at=null,Jt=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return od&&s.locale!=="ko"?null:s.data;default:return null}}var fh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jl(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s==="input"?!!fh[t.type]:s==="textarea"}function md(t,s,n,i){_c(i),s=yi(s,"onChange"),0<s.length&&(n=new Xa("onChange","change",null,n,i),t.push({event:n,listeners:s}))}var $s=null,sn=null;function yh(t){wd(t,0)}function Oi(t){var s=ss(t);if(Tc(s))return t}function jh(t,s){if(t==="change")return s}var ud=!1;if(Ke){var pr;if(Ke){var gr="oninput"in document;if(!gr){var eo=document.createElement("div");eo.setAttribute("oninput","return;"),gr=typeof eo.oninput=="function"}pr=gr}else pr=!1;ud=pr&&(!document.documentMode||9<document.documentMode)}function to(){$s&&($s.detachEvent("onpropertychange",hd),sn=$s=null)}function hd(t){if(t.propertyName==="value"&&Oi(sn)){var s=[];md(s,sn,t,Va(t)),qc(yh,s)}}function vh(t,s,n){t==="focusin"?(to(),$s=s,sn=n,$s.attachEvent("onpropertychange",hd)):t==="focusout"&&to()}function bh(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Oi(sn)}function wh(t,s){if(t==="click")return Oi(s)}function Nh(t,s){if(t==="input"||t==="change")return Oi(s)}function kh(t,s){return t===s&&(t!==0||1/t===1/s)||t!==t&&s!==s}var Re=typeof Object.is=="function"?Object.is:kh;function nn(t,s){if(Re(t,s))return!0;if(typeof t!="object"||t===null||typeof s!="object"||s===null)return!1;var n=Object.keys(t),i=Object.keys(s);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Hr.call(s,r)||!Re(t[r],s[r]))return!1}return!0}function so(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function no(t,s){var n=so(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=s&&i>=s)return{node:n,offset:s-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=so(n)}}function pd(t,s){return t&&s?t===s?!0:t&&t.nodeType===3?!1:s&&s.nodeType===3?pd(t,s.parentNode):"contains"in t?t.contains(s):t.compareDocumentPosition?!!(t.compareDocumentPosition(s)&16):!1:!1}function gd(){for(var t=window,s=mi();s instanceof t.HTMLIFrameElement;){try{var n=typeof s.contentWindow.location.href=="string"}catch{n=!1}if(n)t=s.contentWindow;else break;s=mi(t.document)}return s}function el(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s&&(s==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||s==="textarea"||t.contentEditable==="true")}function Sh(t){var s=gd(),n=t.focusedElem,i=t.selectionRange;if(s!==n&&n&&n.ownerDocument&&pd(n.ownerDocument.documentElement,n)){if(i!==null&&el(n)){if(s=i.start,t=i.end,t===void 0&&(t=s),"selectionStart"in n)n.selectionStart=s,n.selectionEnd=Math.min(t,n.value.length);else if(t=(s=n.ownerDocument||document)&&s.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,a=Math.min(i.start,r);i=i.end===void 0?a:Math.min(i.end,r),!t.extend&&a>i&&(r=i,i=a,a=r),r=no(n,a);var l=no(n,i);r&&l&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(s=s.createRange(),s.setStart(r.node,r.offset),t.removeAllRanges(),a>i?(t.addRange(s),t.extend(l.node,l.offset)):(s.setEnd(l.node,l.offset),t.addRange(s)))}}for(s=[],t=n;t=t.parentNode;)t.nodeType===1&&s.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<s.length;n++)t=s[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Bh=Ke&&"documentMode"in document&&11>=document.documentMode,es=null,ra=null,Vs=null,aa=!1;function io(t,s,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;aa||es==null||es!==mi(i)||(i=es,"selectionStart"in i&&el(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Vs&&nn(Vs,i)||(Vs=i,i=yi(ra,"onSelect"),0<i.length&&(s=new Xa("onSelect","select",null,s,n),t.push({event:s,listeners:i}),s.target=es)))}function Wn(t,s){var n={};return n[t.toLowerCase()]=s.toLowerCase(),n["Webkit"+t]="webkit"+s,n["Moz"+t]="moz"+s,n}var ts={animationend:Wn("Animation","AnimationEnd"),animationiteration:Wn("Animation","AnimationIteration"),animationstart:Wn("Animation","AnimationStart"),transitionend:Wn("Transition","TransitionEnd")},xr={},xd={};Ke&&(xd=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function _i(t){if(xr[t])return xr[t];if(!ts[t])return t;var s=ts[t],n;for(n in s)if(s.hasOwnProperty(n)&&n in xd)return xr[t]=s[n];return t}var fd=_i("animationend"),yd=_i("animationiteration"),jd=_i("animationstart"),vd=_i("transitionend"),bd=new Map,ro="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vt(t,s){bd.set(t,s),Vt(s,[t])}for(var fr=0;fr<ro.length;fr++){var yr=ro[fr],Dh=yr.toLowerCase(),Ch=yr[0].toUpperCase()+yr.slice(1);vt(Dh,"on"+Ch)}vt(fd,"onAnimationEnd");vt(yd,"onAnimationIteration");vt(jd,"onAnimationStart");vt("dblclick","onDoubleClick");vt("focusin","onFocus");vt("focusout","onBlur");vt(vd,"onTransitionEnd");gs("onMouseEnter",["mouseout","mouseover"]);gs("onMouseLeave",["mouseout","mouseover"]);gs("onPointerEnter",["pointerout","pointerover"]);gs("onPointerLeave",["pointerout","pointerover"]);Vt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hs));function ao(t,s,n){var i=t.type||"unknown-event";t.currentTarget=n,Du(i,s,void 0,t),t.currentTarget=null}function wd(t,s){s=(s&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var a=void 0;if(s)for(var l=i.length-1;0<=l;l--){var o=i[l],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==a&&r.isPropagationStopped())break e;ao(r,o,u),a=c}else for(l=0;l<i.length;l++){if(o=i[l],c=o.instance,u=o.currentTarget,o=o.listener,c!==a&&r.isPropagationStopped())break e;ao(r,o,u),a=c}}}if(hi)throw t=ta,hi=!1,ta=null,t}function H(t,s){var n=s[ma];n===void 0&&(n=s[ma]=new Set);var i=t+"__bubble";n.has(i)||(Nd(s,t,2,!1),n.add(i))}function jr(t,s,n){var i=0;s&&(i|=4),Nd(n,t,i,s)}var In="_reactListening"+Math.random().toString(36).slice(2);function rn(t){if(!t[In]){t[In]=!0,Mc.forEach(function(n){n!=="selectionchange"&&(zh.has(n)||jr(n,!1,t),jr(n,!0,t))});var s=t.nodeType===9?t:t.ownerDocument;s===null||s[In]||(s[In]=!0,jr("selectionchange",!1,s))}}function Nd(t,s,n,i){switch(ad(s)){case 1:var r=Uu;break;case 4:r=$u;break;default:r=Qa}n=r.bind(null,s,n,t),r=void 0,!ea||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(s,n,{capture:!0,passive:r}):t.addEventListener(s,n,!0):r!==void 0?t.addEventListener(s,n,{passive:r}):t.addEventListener(s,n,!1)}function vr(t,s,n,i,r){var a=i;if(!(s&1)&&!(s&2)&&i!==null)e:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(l===4)for(l=i.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;l=l.return}for(;o!==null;){if(l=Tt(o),l===null)return;if(c=l.tag,c===5||c===6){i=a=l;continue e}o=o.parentNode}}i=i.return}qc(function(){var u=a,y=Va(n),f=[];e:{var h=bd.get(t);if(h!==void 0){var b=Xa,w=t;switch(t){case"keypress":if(ni(n)===0)break e;case"keydown":case"keyup":b=rh;break;case"focusin":w="focus",b=hr;break;case"focusout":w="blur",b=hr;break;case"beforeblur":case"afterblur":b=hr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Gl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Yu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=oh;break;case fd:case yd:case jd:b=Ku;break;case vd:b=dh;break;case"scroll":b=Vu;break;case"wheel":b=uh;break;case"copy":case"cut":case"paste":b=Zu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Kl}var N=(s&4)!==0,j=!N&&t==="scroll",x=N?h!==null?h+"Capture":null:h;N=[];for(var m=u,p;m!==null;){p=m;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,x!==null&&(v=Zs(m,x),v!=null&&N.push(an(m,v,p)))),j)break;m=m.return}0<N.length&&(h=new b(h,w,null,n,y),f.push({event:h,listeners:N}))}}if(!(s&7)){e:{if(h=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",h&&n!==Zr&&(w=n.relatedTarget||n.fromElement)&&(Tt(w)||w[Xe]))break e;if((b||h)&&(h=y.window===y?y:(h=y.ownerDocument)?h.defaultView||h.parentWindow:window,b?(w=n.relatedTarget||n.toElement,b=u,w=w?Tt(w):null,w!==null&&(j=qt(w),w!==j||w.tag!==5&&w.tag!==6)&&(w=null)):(b=null,w=u),b!==w)){if(N=Gl,v="onMouseLeave",x="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(N=Kl,v="onPointerLeave",x="onPointerEnter",m="pointer"),j=b==null?h:ss(b),p=w==null?h:ss(w),h=new N(v,m+"leave",b,n,y),h.target=j,h.relatedTarget=p,v=null,Tt(y)===u&&(N=new N(x,m+"enter",w,n,y),N.target=p,N.relatedTarget=j,v=N),j=v,b&&w)t:{for(N=b,x=w,m=0,p=N;p;p=Kt(p))m++;for(p=0,v=x;v;v=Kt(v))p++;for(;0<m-p;)N=Kt(N),m--;for(;0<p-m;)x=Kt(x),p--;for(;m--;){if(N===x||x!==null&&N===x.alternate)break t;N=Kt(N),x=Kt(x)}N=null}else N=null;b!==null&&lo(f,h,b,N,!1),w!==null&&j!==null&&lo(f,j,w,N,!0)}}e:{if(h=u?ss(u):window,b=h.nodeName&&h.nodeName.toLowerCase(),b==="select"||b==="input"&&h.type==="file")var S=jh;else if(Jl(h))if(ud)S=Nh;else{S=bh;var z=vh}else(b=h.nodeName)&&b.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=wh);if(S&&(S=S(t,u))){md(f,S,n,y);break e}z&&z(t,h,u),t==="focusout"&&(z=h._wrapperState)&&z.controlled&&h.type==="number"&&Yr(h,"number",h.value)}switch(z=u?ss(u):window,t){case"focusin":(Jl(z)||z.contentEditable==="true")&&(es=z,ra=u,Vs=null);break;case"focusout":Vs=ra=es=null;break;case"mousedown":aa=!0;break;case"contextmenu":case"mouseup":case"dragend":aa=!1,io(f,n,y);break;case"selectionchange":if(Bh)break;case"keydown":case"keyup":io(f,n,y)}var E;if(Ja)e:{switch(t){case"compositionstart":var W="onCompositionStart";break e;case"compositionend":W="onCompositionEnd";break e;case"compositionupdate":W="onCompositionUpdate";break e}W=void 0}else Jt?cd(t,n)&&(W="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(W="onCompositionStart");W&&(od&&n.locale!=="ko"&&(Jt||W!=="onCompositionStart"?W==="onCompositionEnd"&&Jt&&(E=ld()):(at=y,Ka="value"in at?at.value:at.textContent,Jt=!0)),z=yi(u,W),0<z.length&&(W=new Ql(W,t,null,n,y),f.push({event:W,listeners:z}),E?W.data=E:(E=dd(n),E!==null&&(W.data=E)))),(E=ph?gh(t,n):xh(t,n))&&(u=yi(u,"onBeforeInput"),0<u.length&&(y=new Ql("onBeforeInput","beforeinput",null,n,y),f.push({event:y,listeners:u}),y.data=E))}wd(f,s)})}function an(t,s,n){return{instance:t,listener:s,currentTarget:n}}function yi(t,s){for(var n=s+"Capture",i=[];t!==null;){var r=t,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=Zs(t,n),a!=null&&i.unshift(an(t,a,r)),a=Zs(t,s),a!=null&&i.push(an(t,a,r))),t=t.return}return i}function Kt(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lo(t,s,n,i,r){for(var a=s._reactName,l=[];n!==null&&n!==i;){var o=n,c=o.alternate,u=o.stateNode;if(c!==null&&c===i)break;o.tag===5&&u!==null&&(o=u,r?(c=Zs(n,a),c!=null&&l.unshift(an(n,c,o))):r||(c=Zs(n,a),c!=null&&l.push(an(n,c,o)))),n=n.return}l.length!==0&&t.push({event:s,listeners:l})}var Mh=/\r\n?/g,Eh=/\u0000|\uFFFD/g;function oo(t){return(typeof t=="string"?t:""+t).replace(Mh,`
`).replace(Eh,"")}function An(t,s,n){if(s=oo(s),oo(t)!==s&&n)throw Error(k(425))}function ji(){}var la=null,oa=null;function ca(t,s){return t==="textarea"||t==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var da=typeof setTimeout=="function"?setTimeout:void 0,Wh=typeof clearTimeout=="function"?clearTimeout:void 0,co=typeof Promise=="function"?Promise:void 0,Ih=typeof queueMicrotask=="function"?queueMicrotask:typeof co<"u"?function(t){return co.resolve(null).then(t).catch(Ah)}:da;function Ah(t){setTimeout(function(){throw t})}function br(t,s){var n=s,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),tn(s);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);tn(s)}function ut(t){for(;t!=null;t=t.nextSibling){var s=t.nodeType;if(s===1||s===3)break;if(s===8){if(s=t.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return t}function mo(t){t=t.previousSibling;for(var s=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(s===0)return t;s--}else n==="/$"&&s++}t=t.previousSibling}return null}var ks=Math.random().toString(36).slice(2),Oe="__reactFiber$"+ks,ln="__reactProps$"+ks,Xe="__reactContainer$"+ks,ma="__reactEvents$"+ks,Th="__reactListeners$"+ks,Fh="__reactHandles$"+ks;function Tt(t){var s=t[Oe];if(s)return s;for(var n=t.parentNode;n;){if(s=n[Xe]||n[Oe]){if(n=s.alternate,s.child!==null||n!==null&&n.child!==null)for(t=mo(t);t!==null;){if(n=t[Oe])return n;t=mo(t)}return s}t=n,n=t.parentNode}return null}function jn(t){return t=t[Oe]||t[Xe],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function Ui(t){return t[ln]||null}var ua=[],ns=-1;function bt(t){return{current:t}}function O(t){0>ns||(t.current=ua[ns],ua[ns]=null,ns--)}function P(t,s){ns++,ua[ns]=t.current,t.current=s}var jt={},ce=bt(jt),xe=bt(!1),Ht=jt;function xs(t,s){var n=t.type.contextTypes;if(!n)return jt;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===s)return i.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in n)r[a]=s[a];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=r),r}function fe(t){return t=t.childContextTypes,t!=null}function vi(){O(xe),O(ce)}function uo(t,s,n){if(ce.current!==jt)throw Error(k(168));P(ce,s),P(xe,n)}function kd(t,s,n){var i=t.stateNode;if(s=s.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in s))throw Error(k(108,vu(t)||"Unknown",r));return V({},n,i)}function bi(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||jt,Ht=ce.current,P(ce,t),P(xe,xe.current),!0}function ho(t,s,n){var i=t.stateNode;if(!i)throw Error(k(169));n?(t=kd(t,s,Ht),i.__reactInternalMemoizedMergedChildContext=t,O(xe),O(ce),P(ce,t)):O(xe),P(xe,n)}var Ve=null,$i=!1,wr=!1;function Sd(t){Ve===null?Ve=[t]:Ve.push(t)}function Lh(t){$i=!0,Sd(t)}function wt(){if(!wr&&Ve!==null){wr=!0;var t=0,s=R;try{var n=Ve;for(R=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ve=null,$i=!1}catch(r){throw Ve!==null&&(Ve=Ve.slice(t+1)),Kc(qa,wt),r}finally{R=s,wr=!1}}return null}var is=[],rs=0,wi=null,Ni=0,Se=[],Be=0,Ot=null,qe=1,Ye="";function It(t,s){is[rs++]=Ni,is[rs++]=wi,wi=t,Ni=s}function Bd(t,s,n){Se[Be++]=qe,Se[Be++]=Ye,Se[Be++]=Ot,Ot=t;var i=qe;t=Ye;var r=32-Fe(i)-1;i&=~(1<<r),n+=1;var a=32-Fe(s)+r;if(30<a){var l=r-r%5;a=(i&(1<<l)-1).toString(32),i>>=l,r-=l,qe=1<<32-Fe(s)+r|n<<r|i,Ye=a+t}else qe=1<<a|n<<r|i,Ye=t}function tl(t){t.return!==null&&(It(t,1),Bd(t,1,0))}function sl(t){for(;t===wi;)wi=is[--rs],is[rs]=null,Ni=is[--rs],is[rs]=null;for(;t===Ot;)Ot=Se[--Be],Se[Be]=null,Ye=Se[--Be],Se[Be]=null,qe=Se[--Be],Se[Be]=null}var be=null,ve=null,_=!1,Te=null;function Dd(t,s){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=s,n.return=t,s=t.deletions,s===null?(t.deletions=[n],t.flags|=16):s.push(n)}function po(t,s){switch(t.tag){case 5:var n=t.type;return s=s.nodeType!==1||n.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(t.stateNode=s,be=t,ve=ut(s.firstChild),!0):!1;case 6:return s=t.pendingProps===""||s.nodeType!==3?null:s,s!==null?(t.stateNode=s,be=t,ve=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(n=Ot!==null?{id:qe,overflow:Ye}:null,t.memoizedState={dehydrated:s,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=s,n.return=t,t.child=n,be=t,ve=null,!0):!1;default:return!1}}function ha(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pa(t){if(_){var s=ve;if(s){var n=s;if(!po(t,s)){if(ha(t))throw Error(k(418));s=ut(n.nextSibling);var i=be;s&&po(t,s)?Dd(i,n):(t.flags=t.flags&-4097|2,_=!1,be=t)}}else{if(ha(t))throw Error(k(418));t.flags=t.flags&-4097|2,_=!1,be=t}}}function go(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;be=t}function Tn(t){if(t!==be)return!1;if(!_)return go(t),_=!0,!1;var s;if((s=t.tag!==3)&&!(s=t.tag!==5)&&(s=t.type,s=s!=="head"&&s!=="body"&&!ca(t.type,t.memoizedProps)),s&&(s=ve)){if(ha(t))throw Cd(),Error(k(418));for(;s;)Dd(t,s),s=ut(s.nextSibling)}if(go(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,s=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(s===0){ve=ut(t.nextSibling);break e}s--}else n!=="$"&&n!=="$!"&&n!=="$?"||s++}t=t.nextSibling}ve=null}}else ve=be?ut(t.stateNode.nextSibling):null;return!0}function Cd(){for(var t=ve;t;)t=ut(t.nextSibling)}function fs(){ve=be=null,_=!1}function nl(t){Te===null?Te=[t]:Te.push(t)}var Rh=et.ReactCurrentBatchConfig;function Is(t,s,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var i=n.stateNode}if(!i)throw Error(k(147,t));var r=i,a=""+t;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===a?s.ref:(s=function(l){var o=r.refs;l===null?delete o[a]:o[a]=l},s._stringRef=a,s)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function Fn(t,s){throw t=Object.prototype.toString.call(s),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":t))}function xo(t){var s=t._init;return s(t._payload)}function zd(t){function s(x,m){if(t){var p=x.deletions;p===null?(x.deletions=[m],x.flags|=16):p.push(m)}}function n(x,m){if(!t)return null;for(;m!==null;)s(x,m),m=m.sibling;return null}function i(x,m){for(x=new Map;m!==null;)m.key!==null?x.set(m.key,m):x.set(m.index,m),m=m.sibling;return x}function r(x,m){return x=xt(x,m),x.index=0,x.sibling=null,x}function a(x,m,p){return x.index=p,t?(p=x.alternate,p!==null?(p=p.index,p<m?(x.flags|=2,m):p):(x.flags|=2,m)):(x.flags|=1048576,m)}function l(x){return t&&x.alternate===null&&(x.flags|=2),x}function o(x,m,p,v){return m===null||m.tag!==6?(m=zr(p,x.mode,v),m.return=x,m):(m=r(m,p),m.return=x,m)}function c(x,m,p,v){var S=p.type;return S===Zt?y(x,m,p.props.children,v,p.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===st&&xo(S)===m.type)?(v=r(m,p.props),v.ref=Is(x,m,p),v.return=x,v):(v=di(p.type,p.key,p.props,null,x.mode,v),v.ref=Is(x,m,p),v.return=x,v)}function u(x,m,p,v){return m===null||m.tag!==4||m.stateNode.containerInfo!==p.containerInfo||m.stateNode.implementation!==p.implementation?(m=Mr(p,x.mode,v),m.return=x,m):(m=r(m,p.children||[]),m.return=x,m)}function y(x,m,p,v,S){return m===null||m.tag!==7?(m=Pt(p,x.mode,v,S),m.return=x,m):(m=r(m,p),m.return=x,m)}function f(x,m,p){if(typeof m=="string"&&m!==""||typeof m=="number")return m=zr(""+m,x.mode,p),m.return=x,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Sn:return p=di(m.type,m.key,m.props,null,x.mode,p),p.ref=Is(x,null,m),p.return=x,p;case Xt:return m=Mr(m,x.mode,p),m.return=x,m;case st:var v=m._init;return f(x,v(m._payload),p)}if(Rs(m)||Cs(m))return m=Pt(m,x.mode,p,null),m.return=x,m;Fn(x,m)}return null}function h(x,m,p,v){var S=m!==null?m.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:o(x,m,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Sn:return p.key===S?c(x,m,p,v):null;case Xt:return p.key===S?u(x,m,p,v):null;case st:return S=p._init,h(x,m,S(p._payload),v)}if(Rs(p)||Cs(p))return S!==null?null:y(x,m,p,v,null);Fn(x,p)}return null}function b(x,m,p,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return x=x.get(p)||null,o(m,x,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Sn:return x=x.get(v.key===null?p:v.key)||null,c(m,x,v,S);case Xt:return x=x.get(v.key===null?p:v.key)||null,u(m,x,v,S);case st:var z=v._init;return b(x,m,p,z(v._payload),S)}if(Rs(v)||Cs(v))return x=x.get(p)||null,y(m,x,v,S,null);Fn(m,v)}return null}function w(x,m,p,v){for(var S=null,z=null,E=m,W=m=0,Y=null;E!==null&&W<p.length;W++){E.index>W?(Y=E,E=null):Y=E.sibling;var F=h(x,E,p[W],v);if(F===null){E===null&&(E=Y);break}t&&E&&F.alternate===null&&s(x,E),m=a(F,m,W),z===null?S=F:z.sibling=F,z=F,E=Y}if(W===p.length)return n(x,E),_&&It(x,W),S;if(E===null){for(;W<p.length;W++)E=f(x,p[W],v),E!==null&&(m=a(E,m,W),z===null?S=E:z.sibling=E,z=E);return _&&It(x,W),S}for(E=i(x,E);W<p.length;W++)Y=b(E,x,W,p[W],v),Y!==null&&(t&&Y.alternate!==null&&E.delete(Y.key===null?W:Y.key),m=a(Y,m,W),z===null?S=Y:z.sibling=Y,z=Y);return t&&E.forEach(function(Ee){return s(x,Ee)}),_&&It(x,W),S}function N(x,m,p,v){var S=Cs(p);if(typeof S!="function")throw Error(k(150));if(p=S.call(p),p==null)throw Error(k(151));for(var z=S=null,E=m,W=m=0,Y=null,F=p.next();E!==null&&!F.done;W++,F=p.next()){E.index>W?(Y=E,E=null):Y=E.sibling;var Ee=h(x,E,F.value,v);if(Ee===null){E===null&&(E=Y);break}t&&E&&Ee.alternate===null&&s(x,E),m=a(Ee,m,W),z===null?S=Ee:z.sibling=Ee,z=Ee,E=Y}if(F.done)return n(x,E),_&&It(x,W),S;if(E===null){for(;!F.done;W++,F=p.next())F=f(x,F.value,v),F!==null&&(m=a(F,m,W),z===null?S=F:z.sibling=F,z=F);return _&&It(x,W),S}for(E=i(x,E);!F.done;W++,F=p.next())F=b(E,x,W,F.value,v),F!==null&&(t&&F.alternate!==null&&E.delete(F.key===null?W:F.key),m=a(F,m,W),z===null?S=F:z.sibling=F,z=F);return t&&E.forEach(function(Bs){return s(x,Bs)}),_&&It(x,W),S}function j(x,m,p,v){if(typeof p=="object"&&p!==null&&p.type===Zt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Sn:e:{for(var S=p.key,z=m;z!==null;){if(z.key===S){if(S=p.type,S===Zt){if(z.tag===7){n(x,z.sibling),m=r(z,p.props.children),m.return=x,x=m;break e}}else if(z.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===st&&xo(S)===z.type){n(x,z.sibling),m=r(z,p.props),m.ref=Is(x,z,p),m.return=x,x=m;break e}n(x,z);break}else s(x,z);z=z.sibling}p.type===Zt?(m=Pt(p.props.children,x.mode,v,p.key),m.return=x,x=m):(v=di(p.type,p.key,p.props,null,x.mode,v),v.ref=Is(x,m,p),v.return=x,x=v)}return l(x);case Xt:e:{for(z=p.key;m!==null;){if(m.key===z)if(m.tag===4&&m.stateNode.containerInfo===p.containerInfo&&m.stateNode.implementation===p.implementation){n(x,m.sibling),m=r(m,p.children||[]),m.return=x,x=m;break e}else{n(x,m);break}else s(x,m);m=m.sibling}m=Mr(p,x.mode,v),m.return=x,x=m}return l(x);case st:return z=p._init,j(x,m,z(p._payload),v)}if(Rs(p))return w(x,m,p,v);if(Cs(p))return N(x,m,p,v);Fn(x,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,m!==null&&m.tag===6?(n(x,m.sibling),m=r(m,p),m.return=x,x=m):(n(x,m),m=zr(p,x.mode,v),m.return=x,x=m),l(x)):n(x,m)}return j}var ys=zd(!0),Md=zd(!1),ki=bt(null),Si=null,as=null,il=null;function rl(){il=as=Si=null}function al(t){var s=ki.current;O(ki),t._currentValue=s}function ga(t,s,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&s)!==s?(t.childLanes|=s,i!==null&&(i.childLanes|=s)):i!==null&&(i.childLanes&s)!==s&&(i.childLanes|=s),t===n)break;t=t.return}}function hs(t,s){Si=t,il=as=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&s&&(ge=!0),t.firstContext=null)}function ze(t){var s=t._currentValue;if(il!==t)if(t={context:t,memoizedValue:s,next:null},as===null){if(Si===null)throw Error(k(308));as=t,Si.dependencies={lanes:0,firstContext:t}}else as=as.next=t;return s}var Ft=null;function ll(t){Ft===null?Ft=[t]:Ft.push(t)}function Ed(t,s,n,i){var r=s.interleaved;return r===null?(n.next=n,ll(s)):(n.next=r.next,r.next=n),s.interleaved=n,Ze(t,i)}function Ze(t,s){t.lanes|=s;var n=t.alternate;for(n!==null&&(n.lanes|=s),n=t,t=t.return;t!==null;)t.childLanes|=s,n=t.alternate,n!==null&&(n.childLanes|=s),n=t,t=t.return;return n.tag===3?n.stateNode:null}var nt=!1;function ol(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wd(t,s){t=t.updateQueue,s.updateQueue===t&&(s.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qe(t,s){return{eventTime:t,lane:s,tag:0,payload:null,callback:null,next:null}}function ht(t,s,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,L&2){var r=i.pending;return r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s,Ze(t,n)}return r=i.interleaved,r===null?(s.next=s,ll(i)):(s.next=r.next,r.next=s),i.interleaved=s,Ze(t,n)}function ii(t,s,n){if(s=s.updateQueue,s!==null&&(s=s.shared,(n&4194240)!==0)){var i=s.lanes;i&=t.pendingLanes,n|=i,s.lanes=n,Ya(t,n)}}function fo(t,s){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?r=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?r=a=s:a=a.next=s}else r=a=s;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=s:t.next=s,n.lastBaseUpdate=s}function Bi(t,s,n,i){var r=t.updateQueue;nt=!1;var a=r.firstBaseUpdate,l=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var c=o,u=c.next;c.next=null,l===null?a=u:l.next=u,l=c;var y=t.alternate;y!==null&&(y=y.updateQueue,o=y.lastBaseUpdate,o!==l&&(o===null?y.firstBaseUpdate=u:o.next=u,y.lastBaseUpdate=c))}if(a!==null){var f=r.baseState;l=0,y=u=c=null,o=a;do{var h=o.lane,b=o.eventTime;if((i&h)===h){y!==null&&(y=y.next={eventTime:b,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var w=t,N=o;switch(h=s,b=n,N.tag){case 1:if(w=N.payload,typeof w=="function"){f=w.call(b,f,h);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=N.payload,h=typeof w=="function"?w.call(b,f,h):w,h==null)break e;f=V({},f,h);break e;case 2:nt=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else b={eventTime:b,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},y===null?(u=y=b,c=f):y=y.next=b,l|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(y===null&&(c=f),r.baseState=c,r.firstBaseUpdate=u,r.lastBaseUpdate=y,s=r.shared.interleaved,s!==null){r=s;do l|=r.lane,r=r.next;while(r!==s)}else a===null&&(r.shared.lanes=0);Ut|=l,t.lanes=l,t.memoizedState=f}}function yo(t,s,n){if(t=s.effects,s.effects=null,t!==null)for(s=0;s<t.length;s++){var i=t[s],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(k(191,r));r.call(i)}}}var vn={},Ue=bt(vn),on=bt(vn),cn=bt(vn);function Lt(t){if(t===vn)throw Error(k(174));return t}function cl(t,s){switch(P(cn,s),P(on,t),P(Ue,vn),t=s.nodeType,t){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Qr(null,"");break;default:t=t===8?s.parentNode:s,s=t.namespaceURI||null,t=t.tagName,s=Qr(s,t)}O(Ue),P(Ue,s)}function js(){O(Ue),O(on),O(cn)}function Id(t){Lt(cn.current);var s=Lt(Ue.current),n=Qr(s,t.type);s!==n&&(P(on,t),P(Ue,n))}function dl(t){on.current===t&&(O(Ue),O(on))}var U=bt(0);function Di(t){for(var s=t;s!==null;){if(s.tag===13){var n=s.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Nr=[];function ml(){for(var t=0;t<Nr.length;t++)Nr[t]._workInProgressVersionPrimary=null;Nr.length=0}var ri=et.ReactCurrentDispatcher,kr=et.ReactCurrentBatchConfig,_t=0,$=null,Z=null,te=null,Ci=!1,qs=!1,dn=0,Ph=0;function ae(){throw Error(k(321))}function ul(t,s){if(s===null)return!1;for(var n=0;n<s.length&&n<t.length;n++)if(!Re(t[n],s[n]))return!1;return!0}function hl(t,s,n,i,r,a){if(_t=a,$=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,ri.current=t===null||t.memoizedState===null?Uh:$h,t=n(i,r),qs){a=0;do{if(qs=!1,dn=0,25<=a)throw Error(k(301));a+=1,te=Z=null,s.updateQueue=null,ri.current=Vh,t=n(i,r)}while(qs)}if(ri.current=zi,s=Z!==null&&Z.next!==null,_t=0,te=Z=$=null,Ci=!1,s)throw Error(k(300));return t}function pl(){var t=dn!==0;return dn=0,t}function He(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?$.memoizedState=te=t:te=te.next=t,te}function Me(){if(Z===null){var t=$.alternate;t=t!==null?t.memoizedState:null}else t=Z.next;var s=te===null?$.memoizedState:te.next;if(s!==null)te=s,Z=t;else{if(t===null)throw Error(k(310));Z=t,t={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},te===null?$.memoizedState=te=t:te=te.next=t}return te}function mn(t,s){return typeof s=="function"?s(t):s}function Sr(t){var s=Me(),n=s.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var i=Z,r=i.baseQueue,a=n.pending;if(a!==null){if(r!==null){var l=r.next;r.next=a.next,a.next=l}i.baseQueue=r=a,n.pending=null}if(r!==null){a=r.next,i=i.baseState;var o=l=null,c=null,u=a;do{var y=u.lane;if((_t&y)===y)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:y,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=f,l=i):c=c.next=f,$.lanes|=y,Ut|=y}u=u.next}while(u!==null&&u!==a);c===null?l=i:c.next=o,Re(i,s.memoizedState)||(ge=!0),s.memoizedState=i,s.baseState=l,s.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do a=r.lane,$.lanes|=a,Ut|=a,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[s.memoizedState,n.dispatch]}function Br(t){var s=Me(),n=s.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,a=s.memoizedState;if(r!==null){n.pending=null;var l=r=r.next;do a=t(a,l.action),l=l.next;while(l!==r);Re(a,s.memoizedState)||(ge=!0),s.memoizedState=a,s.baseQueue===null&&(s.baseState=a),n.lastRenderedState=a}return[a,i]}function Ad(){}function Td(t,s){var n=$,i=Me(),r=s(),a=!Re(i.memoizedState,r);if(a&&(i.memoizedState=r,ge=!0),i=i.queue,gl(Rd.bind(null,n,i,t),[t]),i.getSnapshot!==s||a||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,un(9,Ld.bind(null,n,i,r,s),void 0,null),se===null)throw Error(k(349));_t&30||Fd(n,s,r)}return r}function Fd(t,s,n){t.flags|=16384,t={getSnapshot:s,value:n},s=$.updateQueue,s===null?(s={lastEffect:null,stores:null},$.updateQueue=s,s.stores=[t]):(n=s.stores,n===null?s.stores=[t]:n.push(t))}function Ld(t,s,n,i){s.value=n,s.getSnapshot=i,Pd(s)&&Hd(t)}function Rd(t,s,n){return n(function(){Pd(s)&&Hd(t)})}function Pd(t){var s=t.getSnapshot;t=t.value;try{var n=s();return!Re(t,n)}catch{return!0}}function Hd(t){var s=Ze(t,1);s!==null&&Le(s,t,1,-1)}function jo(t){var s=He();return typeof t=="function"&&(t=t()),s.memoizedState=s.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:t},s.queue=t,t=t.dispatch=_h.bind(null,$,t),[s.memoizedState,t]}function un(t,s,n,i){return t={tag:t,create:s,destroy:n,deps:i,next:null},s=$.updateQueue,s===null?(s={lastEffect:null,stores:null},$.updateQueue=s,s.lastEffect=t.next=t):(n=s.lastEffect,n===null?s.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,s.lastEffect=t)),t}function Od(){return Me().memoizedState}function ai(t,s,n,i){var r=He();$.flags|=t,r.memoizedState=un(1|s,n,void 0,i===void 0?null:i)}function Vi(t,s,n,i){var r=Me();i=i===void 0?null:i;var a=void 0;if(Z!==null){var l=Z.memoizedState;if(a=l.destroy,i!==null&&ul(i,l.deps)){r.memoizedState=un(s,n,a,i);return}}$.flags|=t,r.memoizedState=un(1|s,n,a,i)}function vo(t,s){return ai(8390656,8,t,s)}function gl(t,s){return Vi(2048,8,t,s)}function _d(t,s){return Vi(4,2,t,s)}function Ud(t,s){return Vi(4,4,t,s)}function $d(t,s){if(typeof s=="function")return t=t(),s(t),function(){s(null)};if(s!=null)return t=t(),s.current=t,function(){s.current=null}}function Vd(t,s,n){return n=n!=null?n.concat([t]):null,Vi(4,4,$d.bind(null,s,t),n)}function xl(){}function qd(t,s){var n=Me();s=s===void 0?null:s;var i=n.memoizedState;return i!==null&&s!==null&&ul(s,i[1])?i[0]:(n.memoizedState=[t,s],t)}function Yd(t,s){var n=Me();s=s===void 0?null:s;var i=n.memoizedState;return i!==null&&s!==null&&ul(s,i[1])?i[0]:(t=t(),n.memoizedState=[t,s],t)}function Gd(t,s,n){return _t&21?(Re(n,s)||(n=Jc(),$.lanes|=n,Ut|=n,t.baseState=!0),s):(t.baseState&&(t.baseState=!1,ge=!0),t.memoizedState=n)}function Hh(t,s){var n=R;R=n!==0&&4>n?n:4,t(!0);var i=kr.transition;kr.transition={};try{t(!1),s()}finally{R=n,kr.transition=i}}function Qd(){return Me().memoizedState}function Oh(t,s,n){var i=gt(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Kd(t))Xd(s,n);else if(n=Ed(t,s,n,i),n!==null){var r=me();Le(n,t,i,r),Zd(n,s,i)}}function _h(t,s,n){var i=gt(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kd(t))Xd(s,r);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=s.lastRenderedReducer,a!==null))try{var l=s.lastRenderedState,o=a(l,n);if(r.hasEagerState=!0,r.eagerState=o,Re(o,l)){var c=s.interleaved;c===null?(r.next=r,ll(s)):(r.next=c.next,c.next=r),s.interleaved=r;return}}catch{}finally{}n=Ed(t,s,r,i),n!==null&&(r=me(),Le(n,t,i,r),Zd(n,s,i))}}function Kd(t){var s=t.alternate;return t===$||s!==null&&s===$}function Xd(t,s){qs=Ci=!0;var n=t.pending;n===null?s.next=s:(s.next=n.next,n.next=s),t.pending=s}function Zd(t,s,n){if(n&4194240){var i=s.lanes;i&=t.pendingLanes,n|=i,s.lanes=n,Ya(t,n)}}var zi={readContext:ze,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},Uh={readContext:ze,useCallback:function(t,s){return He().memoizedState=[t,s===void 0?null:s],t},useContext:ze,useEffect:vo,useImperativeHandle:function(t,s,n){return n=n!=null?n.concat([t]):null,ai(4194308,4,$d.bind(null,s,t),n)},useLayoutEffect:function(t,s){return ai(4194308,4,t,s)},useInsertionEffect:function(t,s){return ai(4,2,t,s)},useMemo:function(t,s){var n=He();return s=s===void 0?null:s,t=t(),n.memoizedState=[t,s],t},useReducer:function(t,s,n){var i=He();return s=n!==void 0?n(s):s,i.memoizedState=i.baseState=s,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:s},i.queue=t,t=t.dispatch=Oh.bind(null,$,t),[i.memoizedState,t]},useRef:function(t){var s=He();return t={current:t},s.memoizedState=t},useState:jo,useDebugValue:xl,useDeferredValue:function(t){return He().memoizedState=t},useTransition:function(){var t=jo(!1),s=t[0];return t=Hh.bind(null,t[1]),He().memoizedState=t,[s,t]},useMutableSource:function(){},useSyncExternalStore:function(t,s,n){var i=$,r=He();if(_){if(n===void 0)throw Error(k(407));n=n()}else{if(n=s(),se===null)throw Error(k(349));_t&30||Fd(i,s,n)}r.memoizedState=n;var a={value:n,getSnapshot:s};return r.queue=a,vo(Rd.bind(null,i,a,t),[t]),i.flags|=2048,un(9,Ld.bind(null,i,a,n,s),void 0,null),n},useId:function(){var t=He(),s=se.identifierPrefix;if(_){var n=Ye,i=qe;n=(i&~(1<<32-Fe(i)-1)).toString(32)+n,s=":"+s+"R"+n,n=dn++,0<n&&(s+="H"+n.toString(32)),s+=":"}else n=Ph++,s=":"+s+"r"+n.toString(32)+":";return t.memoizedState=s},unstable_isNewReconciler:!1},$h={readContext:ze,useCallback:qd,useContext:ze,useEffect:gl,useImperativeHandle:Vd,useInsertionEffect:_d,useLayoutEffect:Ud,useMemo:Yd,useReducer:Sr,useRef:Od,useState:function(){return Sr(mn)},useDebugValue:xl,useDeferredValue:function(t){var s=Me();return Gd(s,Z.memoizedState,t)},useTransition:function(){var t=Sr(mn)[0],s=Me().memoizedState;return[t,s]},useMutableSource:Ad,useSyncExternalStore:Td,useId:Qd,unstable_isNewReconciler:!1},Vh={readContext:ze,useCallback:qd,useContext:ze,useEffect:gl,useImperativeHandle:Vd,useInsertionEffect:_d,useLayoutEffect:Ud,useMemo:Yd,useReducer:Br,useRef:Od,useState:function(){return Br(mn)},useDebugValue:xl,useDeferredValue:function(t){var s=Me();return Z===null?s.memoizedState=t:Gd(s,Z.memoizedState,t)},useTransition:function(){var t=Br(mn)[0],s=Me().memoizedState;return[t,s]},useMutableSource:Ad,useSyncExternalStore:Td,useId:Qd,unstable_isNewReconciler:!1};function Ie(t,s){if(t&&t.defaultProps){s=V({},s),t=t.defaultProps;for(var n in t)s[n]===void 0&&(s[n]=t[n]);return s}return s}function xa(t,s,n,i){s=t.memoizedState,n=n(i,s),n=n==null?s:V({},s,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var qi={isMounted:function(t){return(t=t._reactInternals)?qt(t)===t:!1},enqueueSetState:function(t,s,n){t=t._reactInternals;var i=me(),r=gt(t),a=Qe(i,r);a.payload=s,n!=null&&(a.callback=n),s=ht(t,a,r),s!==null&&(Le(s,t,r,i),ii(s,t,r))},enqueueReplaceState:function(t,s,n){t=t._reactInternals;var i=me(),r=gt(t),a=Qe(i,r);a.tag=1,a.payload=s,n!=null&&(a.callback=n),s=ht(t,a,r),s!==null&&(Le(s,t,r,i),ii(s,t,r))},enqueueForceUpdate:function(t,s){t=t._reactInternals;var n=me(),i=gt(t),r=Qe(n,i);r.tag=2,s!=null&&(r.callback=s),s=ht(t,r,i),s!==null&&(Le(s,t,i,n),ii(s,t,i))}};function bo(t,s,n,i,r,a,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,a,l):s.prototype&&s.prototype.isPureReactComponent?!nn(n,i)||!nn(r,a):!0}function Jd(t,s,n){var i=!1,r=jt,a=s.contextType;return typeof a=="object"&&a!==null?a=ze(a):(r=fe(s)?Ht:ce.current,i=s.contextTypes,a=(i=i!=null)?xs(t,r):jt),s=new s(n,a),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=qi,t.stateNode=s,s._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=a),s}function wo(t,s,n,i){t=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(n,i),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(n,i),s.state!==t&&qi.enqueueReplaceState(s,s.state,null)}function fa(t,s,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},ol(t);var a=s.contextType;typeof a=="object"&&a!==null?r.context=ze(a):(a=fe(s)?Ht:ce.current,r.context=xs(t,a)),r.state=t.memoizedState,a=s.getDerivedStateFromProps,typeof a=="function"&&(xa(t,s,a,n),r.state=t.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&qi.enqueueReplaceState(r,r.state,null),Bi(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function vs(t,s){try{var n="",i=s;do n+=ju(i),i=i.return;while(i);var r=n}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:s,stack:r,digest:null}}function Dr(t,s,n){return{value:t,source:null,stack:n??null,digest:s??null}}function ya(t,s){try{console.error(s.value)}catch(n){setTimeout(function(){throw n})}}var qh=typeof WeakMap=="function"?WeakMap:Map;function em(t,s,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var i=s.value;return n.callback=function(){Ei||(Ei=!0,Ca=i),ya(t,s)},n}function tm(t,s,n){n=Qe(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=s.value;n.payload=function(){return i(r)},n.callback=function(){ya(t,s)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ya(t,s),typeof i!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var l=s.stack;this.componentDidCatch(s.value,{componentStack:l!==null?l:""})}),n}function No(t,s,n){var i=t.pingCache;if(i===null){i=t.pingCache=new qh;var r=new Set;i.set(s,r)}else r=i.get(s),r===void 0&&(r=new Set,i.set(s,r));r.has(n)||(r.add(n),t=ap.bind(null,t,s,n),s.then(t,t))}function ko(t){do{var s;if((s=t.tag===13)&&(s=t.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return t;t=t.return}while(t!==null);return null}function So(t,s,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===s?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(s=Qe(-1,1),s.tag=2,ht(n,s,1))),n.lanes|=1),t)}var Yh=et.ReactCurrentOwner,ge=!1;function de(t,s,n,i){s.child=t===null?Md(s,null,n,i):ys(s,t.child,n,i)}function Bo(t,s,n,i,r){n=n.render;var a=s.ref;return hs(s,r),i=hl(t,s,n,i,a,r),n=pl(),t!==null&&!ge?(s.updateQueue=t.updateQueue,s.flags&=-2053,t.lanes&=~r,Je(t,s,r)):(_&&n&&tl(s),s.flags|=1,de(t,s,i,r),s.child)}function Do(t,s,n,i,r){if(t===null){var a=n.type;return typeof a=="function"&&!kl(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(s.tag=15,s.type=a,sm(t,s,a,i,r)):(t=di(n.type,null,i,s,s.mode,r),t.ref=s.ref,t.return=s,s.child=t)}if(a=t.child,!(t.lanes&r)){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:nn,n(l,i)&&t.ref===s.ref)return Je(t,s,r)}return s.flags|=1,t=xt(a,i),t.ref=s.ref,t.return=s,s.child=t}function sm(t,s,n,i,r){if(t!==null){var a=t.memoizedProps;if(nn(a,i)&&t.ref===s.ref)if(ge=!1,s.pendingProps=i=a,(t.lanes&r)!==0)t.flags&131072&&(ge=!0);else return s.lanes=t.lanes,Je(t,s,r)}return ja(t,s,n,i,r)}function nm(t,s,n){var i=s.pendingProps,r=i.children,a=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},P(os,je),je|=n;else{if(!(n&1073741824))return t=a!==null?a.baseLanes|n:n,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:t,cachePool:null,transitions:null},s.updateQueue=null,P(os,je),je|=t,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,P(os,je),je|=i}else a!==null?(i=a.baseLanes|n,s.memoizedState=null):i=n,P(os,je),je|=i;return de(t,s,r,n),s.child}function im(t,s){var n=s.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(s.flags|=512,s.flags|=2097152)}function ja(t,s,n,i,r){var a=fe(n)?Ht:ce.current;return a=xs(s,a),hs(s,r),n=hl(t,s,n,i,a,r),i=pl(),t!==null&&!ge?(s.updateQueue=t.updateQueue,s.flags&=-2053,t.lanes&=~r,Je(t,s,r)):(_&&i&&tl(s),s.flags|=1,de(t,s,n,r),s.child)}function Co(t,s,n,i,r){if(fe(n)){var a=!0;bi(s)}else a=!1;if(hs(s,r),s.stateNode===null)li(t,s),Jd(s,n,i),fa(s,n,i,r),i=!0;else if(t===null){var l=s.stateNode,o=s.memoizedProps;l.props=o;var c=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=ze(u):(u=fe(n)?Ht:ce.current,u=xs(s,u));var y=n.getDerivedStateFromProps,f=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==i||c!==u)&&wo(s,l,i,u),nt=!1;var h=s.memoizedState;l.state=h,Bi(s,i,l,r),c=s.memoizedState,o!==i||h!==c||xe.current||nt?(typeof y=="function"&&(xa(s,n,y,i),c=s.memoizedState),(o=nt||bo(s,n,o,i,h,c,u))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(s.flags|=4194308)):(typeof l.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=i,s.memoizedState=c),l.props=i,l.state=c,l.context=u,i=o):(typeof l.componentDidMount=="function"&&(s.flags|=4194308),i=!1)}else{l=s.stateNode,Wd(t,s),o=s.memoizedProps,u=s.type===s.elementType?o:Ie(s.type,o),l.props=u,f=s.pendingProps,h=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=ze(c):(c=fe(n)?Ht:ce.current,c=xs(s,c));var b=n.getDerivedStateFromProps;(y=typeof b=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==f||h!==c)&&wo(s,l,i,c),nt=!1,h=s.memoizedState,l.state=h,Bi(s,i,l,r);var w=s.memoizedState;o!==f||h!==w||xe.current||nt?(typeof b=="function"&&(xa(s,n,b,i),w=s.memoizedState),(u=nt||bo(s,n,u,i,h,w,c)||!1)?(y||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,w,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,w,c)),typeof l.componentDidUpdate=="function"&&(s.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(s.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(s.flags|=1024),s.memoizedProps=i,s.memoizedState=w),l.props=i,l.state=w,l.context=c,i=u):(typeof l.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(s.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(s.flags|=1024),i=!1)}return va(t,s,n,i,a,r)}function va(t,s,n,i,r,a){im(t,s);var l=(s.flags&128)!==0;if(!i&&!l)return r&&ho(s,n,!1),Je(t,s,a);i=s.stateNode,Yh.current=s;var o=l&&typeof n.getDerivedStateFromError!="function"?null:i.render();return s.flags|=1,t!==null&&l?(s.child=ys(s,t.child,null,a),s.child=ys(s,null,o,a)):de(t,s,o,a),s.memoizedState=i.state,r&&ho(s,n,!0),s.child}function rm(t){var s=t.stateNode;s.pendingContext?uo(t,s.pendingContext,s.pendingContext!==s.context):s.context&&uo(t,s.context,!1),cl(t,s.containerInfo)}function zo(t,s,n,i,r){return fs(),nl(r),s.flags|=256,de(t,s,n,i),s.child}var ba={dehydrated:null,treeContext:null,retryLane:0};function wa(t){return{baseLanes:t,cachePool:null,transitions:null}}function am(t,s,n){var i=s.pendingProps,r=U.current,a=!1,l=(s.flags&128)!==0,o;if((o=l)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(a=!0,s.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),P(U,r&1),t===null)return pa(s),t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(s.mode&1?t.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(l=i.children,t=i.fallback,a?(i=s.mode,a=s.child,l={mode:"hidden",children:l},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=Qi(l,i,0,null),t=Pt(t,i,n,null),a.return=s,t.return=s,a.sibling=t,s.child=a,s.child.memoizedState=wa(n),s.memoizedState=ba,t):fl(s,l));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Gh(t,s,l,i,o,r,n);if(a){a=i.fallback,l=s.mode,r=t.child,o=r.sibling;var c={mode:"hidden",children:i.children};return!(l&1)&&s.child!==r?(i=s.child,i.childLanes=0,i.pendingProps=c,s.deletions=null):(i=xt(r,c),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?a=xt(o,a):(a=Pt(a,l,n,null),a.flags|=2),a.return=s,i.return=s,i.sibling=a,s.child=i,i=a,a=s.child,l=t.child.memoizedState,l=l===null?wa(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=t.childLanes&~n,s.memoizedState=ba,i}return a=t.child,t=a.sibling,i=xt(a,{mode:"visible",children:i.children}),!(s.mode&1)&&(i.lanes=n),i.return=s,i.sibling=null,t!==null&&(n=s.deletions,n===null?(s.deletions=[t],s.flags|=16):n.push(t)),s.child=i,s.memoizedState=null,i}function fl(t,s){return s=Qi({mode:"visible",children:s},t.mode,0,null),s.return=t,t.child=s}function Ln(t,s,n,i){return i!==null&&nl(i),ys(s,t.child,null,n),t=fl(s,s.pendingProps.children),t.flags|=2,s.memoizedState=null,t}function Gh(t,s,n,i,r,a,l){if(n)return s.flags&256?(s.flags&=-257,i=Dr(Error(k(422))),Ln(t,s,l,i)):s.memoizedState!==null?(s.child=t.child,s.flags|=128,null):(a=i.fallback,r=s.mode,i=Qi({mode:"visible",children:i.children},r,0,null),a=Pt(a,r,l,null),a.flags|=2,i.return=s,a.return=s,i.sibling=a,s.child=i,s.mode&1&&ys(s,t.child,null,l),s.child.memoizedState=wa(l),s.memoizedState=ba,a);if(!(s.mode&1))return Ln(t,s,l,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,a=Error(k(419)),i=Dr(a,i,void 0),Ln(t,s,l,i)}if(o=(l&t.childLanes)!==0,ge||o){if(i=se,i!==null){switch(l&-l){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|l)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,Ze(t,r),Le(i,t,r,-1))}return Nl(),i=Dr(Error(k(421))),Ln(t,s,l,i)}return r.data==="$?"?(s.flags|=128,s.child=t.child,s=lp.bind(null,t),r._reactRetry=s,null):(t=a.treeContext,ve=ut(r.nextSibling),be=s,_=!0,Te=null,t!==null&&(Se[Be++]=qe,Se[Be++]=Ye,Se[Be++]=Ot,qe=t.id,Ye=t.overflow,Ot=s),s=fl(s,i.children),s.flags|=4096,s)}function Mo(t,s,n){t.lanes|=s;var i=t.alternate;i!==null&&(i.lanes|=s),ga(t.return,s,n)}function Cr(t,s,n,i,r){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(a.isBackwards=s,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r)}function lm(t,s,n){var i=s.pendingProps,r=i.revealOrder,a=i.tail;if(de(t,s,i.children,n),i=U.current,i&2)i=i&1|2,s.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=s.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mo(t,n,s);else if(t.tag===19)Mo(t,n,s);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===s)break e;for(;t.sibling===null;){if(t.return===null||t.return===s)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(P(U,i),!(s.mode&1))s.memoizedState=null;else switch(r){case"forwards":for(n=s.child,r=null;n!==null;)t=n.alternate,t!==null&&Di(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=s.child,s.child=null):(r=n.sibling,n.sibling=null),Cr(s,!1,r,n,a);break;case"backwards":for(n=null,r=s.child,s.child=null;r!==null;){if(t=r.alternate,t!==null&&Di(t)===null){s.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Cr(s,!0,n,null,a);break;case"together":Cr(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function li(t,s){!(s.mode&1)&&t!==null&&(t.alternate=null,s.alternate=null,s.flags|=2)}function Je(t,s,n){if(t!==null&&(s.dependencies=t.dependencies),Ut|=s.lanes,!(n&s.childLanes))return null;if(t!==null&&s.child!==t.child)throw Error(k(153));if(s.child!==null){for(t=s.child,n=xt(t,t.pendingProps),s.child=n,n.return=s;t.sibling!==null;)t=t.sibling,n=n.sibling=xt(t,t.pendingProps),n.return=s;n.sibling=null}return s.child}function Qh(t,s,n){switch(s.tag){case 3:rm(s),fs();break;case 5:Id(s);break;case 1:fe(s.type)&&bi(s);break;case 4:cl(s,s.stateNode.containerInfo);break;case 10:var i=s.type._context,r=s.memoizedProps.value;P(ki,i._currentValue),i._currentValue=r;break;case 13:if(i=s.memoizedState,i!==null)return i.dehydrated!==null?(P(U,U.current&1),s.flags|=128,null):n&s.child.childLanes?am(t,s,n):(P(U,U.current&1),t=Je(t,s,n),t!==null?t.sibling:null);P(U,U.current&1);break;case 19:if(i=(n&s.childLanes)!==0,t.flags&128){if(i)return lm(t,s,n);s.flags|=128}if(r=s.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),P(U,U.current),i)break;return null;case 22:case 23:return s.lanes=0,nm(t,s,n)}return Je(t,s,n)}var om,Na,cm,dm;om=function(t,s){for(var n=s.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break;for(;n.sibling===null;){if(n.return===null||n.return===s)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Na=function(){};cm=function(t,s,n,i){var r=t.memoizedProps;if(r!==i){t=s.stateNode,Lt(Ue.current);var a=null;switch(n){case"input":r=Vr(t,r),i=Vr(t,i),a=[];break;case"select":r=V({},r,{value:void 0}),i=V({},i,{value:void 0}),a=[];break;case"textarea":r=Gr(t,r),i=Gr(t,i),a=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ji)}Kr(n,i);var l;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(l in o)o.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ks.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in i){var c=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(l in o)!o.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&o[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(a||(a=[]),a.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(a=a||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ks.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&H("scroll",t),a||o===c||(a=[])):(a=a||[]).push(u,c))}n&&(a=a||[]).push("style",n);var u=a;(s.updateQueue=u)&&(s.flags|=4)}};dm=function(t,s,n,i){n!==i&&(s.flags|=4)};function As(t,s){if(!_)switch(t.tailMode){case"hidden":s=t.tail;for(var n=null;s!==null;)s.alternate!==null&&(n=s),s=s.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?s||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function le(t){var s=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(s)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,s}function Kh(t,s,n){var i=s.pendingProps;switch(sl(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(s),null;case 1:return fe(s.type)&&vi(),le(s),null;case 3:return i=s.stateNode,js(),O(xe),O(ce),ml(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Tn(s)?s.flags|=4:t===null||t.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,Te!==null&&(Ea(Te),Te=null))),Na(t,s),le(s),null;case 5:dl(s);var r=Lt(cn.current);if(n=s.type,t!==null&&s.stateNode!=null)cm(t,s,n,i,r),t.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!i){if(s.stateNode===null)throw Error(k(166));return le(s),null}if(t=Lt(Ue.current),Tn(s)){i=s.stateNode,n=s.type;var a=s.memoizedProps;switch(i[Oe]=s,i[ln]=a,t=(s.mode&1)!==0,n){case"dialog":H("cancel",i),H("close",i);break;case"iframe":case"object":case"embed":H("load",i);break;case"video":case"audio":for(r=0;r<Hs.length;r++)H(Hs[r],i);break;case"source":H("error",i);break;case"img":case"image":case"link":H("error",i),H("load",i);break;case"details":H("toggle",i);break;case"input":Rl(i,a),H("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},H("invalid",i);break;case"textarea":Hl(i,a),H("invalid",i)}Kr(n,a),r=null;for(var l in a)if(a.hasOwnProperty(l)){var o=a[l];l==="children"?typeof o=="string"?i.textContent!==o&&(a.suppressHydrationWarning!==!0&&An(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&An(i.textContent,o,t),r=["children",""+o]):Ks.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&H("scroll",i)}switch(n){case"input":Bn(i),Pl(i,a,!0);break;case"textarea":Bn(i),Ol(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=ji)}i=r,s.updateQueue=i,i!==null&&(s.flags|=4)}else{l=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Rc(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=l.createElement(n,{is:i.is}):(t=l.createElement(n),n==="select"&&(l=t,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):t=l.createElementNS(t,n),t[Oe]=s,t[ln]=i,om(t,s,!1,!1),s.stateNode=t;e:{switch(l=Xr(n,i),n){case"dialog":H("cancel",t),H("close",t),r=i;break;case"iframe":case"object":case"embed":H("load",t),r=i;break;case"video":case"audio":for(r=0;r<Hs.length;r++)H(Hs[r],t);r=i;break;case"source":H("error",t),r=i;break;case"img":case"image":case"link":H("error",t),H("load",t),r=i;break;case"details":H("toggle",t),r=i;break;case"input":Rl(t,i),r=Vr(t,i),H("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=V({},i,{value:void 0}),H("invalid",t);break;case"textarea":Hl(t,i),r=Gr(t,i),H("invalid",t);break;default:r=i}Kr(n,r),o=r;for(a in o)if(o.hasOwnProperty(a)){var c=o[a];a==="style"?Oc(t,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Pc(t,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Xs(t,c):typeof c=="number"&&Xs(t,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ks.hasOwnProperty(a)?c!=null&&a==="onScroll"&&H("scroll",t):c!=null&&Oa(t,a,c,l))}switch(n){case"input":Bn(t),Pl(t,i,!1);break;case"textarea":Bn(t),Ol(t);break;case"option":i.value!=null&&t.setAttribute("value",""+yt(i.value));break;case"select":t.multiple=!!i.multiple,a=i.value,a!=null?cs(t,!!i.multiple,a,!1):i.defaultValue!=null&&cs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ji)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return le(s),null;case 6:if(t&&s.stateNode!=null)dm(t,s,t.memoizedProps,i);else{if(typeof i!="string"&&s.stateNode===null)throw Error(k(166));if(n=Lt(cn.current),Lt(Ue.current),Tn(s)){if(i=s.stateNode,n=s.memoizedProps,i[Oe]=s,(a=i.nodeValue!==n)&&(t=be,t!==null))switch(t.tag){case 3:An(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&An(i.nodeValue,n,(t.mode&1)!==0)}a&&(s.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Oe]=s,s.stateNode=i}return le(s),null;case 13:if(O(U),i=s.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_&&ve!==null&&s.mode&1&&!(s.flags&128))Cd(),fs(),s.flags|=98560,a=!1;else if(a=Tn(s),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(k(318));if(a=s.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(k(317));a[Oe]=s}else fs(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;le(s),a=!1}else Te!==null&&(Ea(Te),Te=null),a=!0;if(!a)return s.flags&65536?s:null}return s.flags&128?(s.lanes=n,s):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(s.child.flags|=8192,s.mode&1&&(t===null||U.current&1?J===0&&(J=3):Nl())),s.updateQueue!==null&&(s.flags|=4),le(s),null);case 4:return js(),Na(t,s),t===null&&rn(s.stateNode.containerInfo),le(s),null;case 10:return al(s.type._context),le(s),null;case 17:return fe(s.type)&&vi(),le(s),null;case 19:if(O(U),a=s.memoizedState,a===null)return le(s),null;if(i=(s.flags&128)!==0,l=a.rendering,l===null)if(i)As(a,!1);else{if(J!==0||t!==null&&t.flags&128)for(t=s.child;t!==null;){if(l=Di(t),l!==null){for(s.flags|=128,As(a,!1),i=l.updateQueue,i!==null&&(s.updateQueue=i,s.flags|=4),s.subtreeFlags=0,i=n,n=s.child;n!==null;)a=n,t=i,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,t=l.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return P(U,U.current&1|2),s.child}t=t.sibling}a.tail!==null&&Q()>bs&&(s.flags|=128,i=!0,As(a,!1),s.lanes=4194304)}else{if(!i)if(t=Di(l),t!==null){if(s.flags|=128,i=!0,n=t.updateQueue,n!==null&&(s.updateQueue=n,s.flags|=4),As(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!_)return le(s),null}else 2*Q()-a.renderingStartTime>bs&&n!==1073741824&&(s.flags|=128,i=!0,As(a,!1),s.lanes=4194304);a.isBackwards?(l.sibling=s.child,s.child=l):(n=a.last,n!==null?n.sibling=l:s.child=l,a.last=l)}return a.tail!==null?(s=a.tail,a.rendering=s,a.tail=s.sibling,a.renderingStartTime=Q(),s.sibling=null,n=U.current,P(U,i?n&1|2:n&1),s):(le(s),null);case 22:case 23:return wl(),i=s.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(s.flags|=8192),i&&s.mode&1?je&1073741824&&(le(s),s.subtreeFlags&6&&(s.flags|=8192)):le(s),null;case 24:return null;case 25:return null}throw Error(k(156,s.tag))}function Xh(t,s){switch(sl(s),s.tag){case 1:return fe(s.type)&&vi(),t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 3:return js(),O(xe),O(ce),ml(),t=s.flags,t&65536&&!(t&128)?(s.flags=t&-65537|128,s):null;case 5:return dl(s),null;case 13:if(O(U),t=s.memoizedState,t!==null&&t.dehydrated!==null){if(s.alternate===null)throw Error(k(340));fs()}return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 19:return O(U),null;case 4:return js(),null;case 10:return al(s.type._context),null;case 22:case 23:return wl(),null;case 24:return null;default:return null}}var Rn=!1,oe=!1,Zh=typeof WeakSet=="function"?WeakSet:Set,C=null;function ls(t,s){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){q(t,s,i)}else n.current=null}function ka(t,s,n){try{n()}catch(i){q(t,s,i)}}var Eo=!1;function Jh(t,s){if(la=xi,t=gd(),el(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,o=-1,c=-1,u=0,y=0,f=t,h=null;t:for(;;){for(var b;f!==n||r!==0&&f.nodeType!==3||(o=l+r),f!==a||i!==0&&f.nodeType!==3||(c=l+i),f.nodeType===3&&(l+=f.nodeValue.length),(b=f.firstChild)!==null;)h=f,f=b;for(;;){if(f===t)break t;if(h===n&&++u===r&&(o=l),h===a&&++y===i&&(c=l),(b=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=b}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(oa={focusedElem:t,selectionRange:n},xi=!1,C=s;C!==null;)if(s=C,t=s.child,(s.subtreeFlags&1028)!==0&&t!==null)t.return=s,C=t;else for(;C!==null;){s=C;try{var w=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var N=w.memoizedProps,j=w.memoizedState,x=s.stateNode,m=x.getSnapshotBeforeUpdate(s.elementType===s.type?N:Ie(s.type,N),j);x.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var p=s.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(v){q(s,s.return,v)}if(t=s.sibling,t!==null){t.return=s.return,C=t;break}C=s.return}return w=Eo,Eo=!1,w}function Ys(t,s,n){var i=s.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var a=r.destroy;r.destroy=void 0,a!==void 0&&ka(s,n,a)}r=r.next}while(r!==i)}}function Yi(t,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var n=s=s.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==s)}}function Sa(t){var s=t.ref;if(s!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof s=="function"?s(t):s.current=t}}function mm(t){var s=t.alternate;s!==null&&(t.alternate=null,mm(s)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(s=t.stateNode,s!==null&&(delete s[Oe],delete s[ln],delete s[ma],delete s[Th],delete s[Fh])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function um(t){return t.tag===5||t.tag===3||t.tag===4}function Wo(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||um(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ba(t,s,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,s?n.nodeType===8?n.parentNode.insertBefore(t,s):n.insertBefore(t,s):(n.nodeType===8?(s=n.parentNode,s.insertBefore(t,n)):(s=n,s.appendChild(t)),n=n._reactRootContainer,n!=null||s.onclick!==null||(s.onclick=ji));else if(i!==4&&(t=t.child,t!==null))for(Ba(t,s,n),t=t.sibling;t!==null;)Ba(t,s,n),t=t.sibling}function Da(t,s,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,s?n.insertBefore(t,s):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Da(t,s,n),t=t.sibling;t!==null;)Da(t,s,n),t=t.sibling}var ne=null,Ae=!1;function tt(t,s,n){for(n=n.child;n!==null;)hm(t,s,n),n=n.sibling}function hm(t,s,n){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(Pi,n)}catch{}switch(n.tag){case 5:oe||ls(n,s);case 6:var i=ne,r=Ae;ne=null,tt(t,s,n),ne=i,Ae=r,ne!==null&&(Ae?(t=ne,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Ae?(t=ne,n=n.stateNode,t.nodeType===8?br(t.parentNode,n):t.nodeType===1&&br(t,n),tn(t)):br(ne,n.stateNode));break;case 4:i=ne,r=Ae,ne=n.stateNode.containerInfo,Ae=!0,tt(t,s,n),ne=i,Ae=r;break;case 0:case 11:case 14:case 15:if(!oe&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var a=r,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&ka(n,s,l),r=r.next}while(r!==i)}tt(t,s,n);break;case 1:if(!oe&&(ls(n,s),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){q(n,s,o)}tt(t,s,n);break;case 21:tt(t,s,n);break;case 22:n.mode&1?(oe=(i=oe)||n.memoizedState!==null,tt(t,s,n),oe=i):tt(t,s,n);break;default:tt(t,s,n)}}function Io(t){var s=t.updateQueue;if(s!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Zh),s.forEach(function(i){var r=op.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function We(t,s){var n=s.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var a=t,l=s,o=l;e:for(;o!==null;){switch(o.tag){case 5:ne=o.stateNode,Ae=!1;break e;case 3:ne=o.stateNode.containerInfo,Ae=!0;break e;case 4:ne=o.stateNode.containerInfo,Ae=!0;break e}o=o.return}if(ne===null)throw Error(k(160));hm(a,l,r),ne=null,Ae=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(u){q(r,s,u)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)pm(s,t),s=s.sibling}function pm(t,s){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(We(s,t),Pe(t),i&4){try{Ys(3,t,t.return),Yi(3,t)}catch(N){q(t,t.return,N)}try{Ys(5,t,t.return)}catch(N){q(t,t.return,N)}}break;case 1:We(s,t),Pe(t),i&512&&n!==null&&ls(n,n.return);break;case 5:if(We(s,t),Pe(t),i&512&&n!==null&&ls(n,n.return),t.flags&32){var r=t.stateNode;try{Xs(r,"")}catch(N){q(t,t.return,N)}}if(i&4&&(r=t.stateNode,r!=null)){var a=t.memoizedProps,l=n!==null?n.memoizedProps:a,o=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&Fc(r,a),Xr(o,l);var u=Xr(o,a);for(l=0;l<c.length;l+=2){var y=c[l],f=c[l+1];y==="style"?Oc(r,f):y==="dangerouslySetInnerHTML"?Pc(r,f):y==="children"?Xs(r,f):Oa(r,y,f,u)}switch(o){case"input":qr(r,a);break;case"textarea":Lc(r,a);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var b=a.value;b!=null?cs(r,!!a.multiple,b,!1):h!==!!a.multiple&&(a.defaultValue!=null?cs(r,!!a.multiple,a.defaultValue,!0):cs(r,!!a.multiple,a.multiple?[]:"",!1))}r[ln]=a}catch(N){q(t,t.return,N)}}break;case 6:if(We(s,t),Pe(t),i&4){if(t.stateNode===null)throw Error(k(162));r=t.stateNode,a=t.memoizedProps;try{r.nodeValue=a}catch(N){q(t,t.return,N)}}break;case 3:if(We(s,t),Pe(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{tn(s.containerInfo)}catch(N){q(t,t.return,N)}break;case 4:We(s,t),Pe(t);break;case 13:We(s,t),Pe(t),r=t.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(vl=Q())),i&4&&Io(t);break;case 22:if(y=n!==null&&n.memoizedState!==null,t.mode&1?(oe=(u=oe)||y,We(s,t),oe=u):We(s,t),Pe(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!y&&t.mode&1)for(C=t,y=t.child;y!==null;){for(f=C=y;C!==null;){switch(h=C,b=h.child,h.tag){case 0:case 11:case 14:case 15:Ys(4,h,h.return);break;case 1:ls(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){i=h,n=h.return;try{s=i,w.props=s.memoizedProps,w.state=s.memoizedState,w.componentWillUnmount()}catch(N){q(i,n,N)}}break;case 5:ls(h,h.return);break;case 22:if(h.memoizedState!==null){To(f);continue}}b!==null?(b.return=h,C=b):To(f)}y=y.sibling}e:for(y=null,f=t;;){if(f.tag===5){if(y===null){y=f;try{r=f.stateNode,u?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=f.stateNode,c=f.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Hc("display",l))}catch(N){q(t,t.return,N)}}}else if(f.tag===6){if(y===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(N){q(t,t.return,N)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;y===f&&(y=null),f=f.return}y===f&&(y=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:We(s,t),Pe(t),i&4&&Io(t);break;case 21:break;default:We(s,t),Pe(t)}}function Pe(t){var s=t.flags;if(s&2){try{e:{for(var n=t.return;n!==null;){if(um(n)){var i=n;break e}n=n.return}throw Error(k(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Xs(r,""),i.flags&=-33);var a=Wo(t);Da(t,a,r);break;case 3:case 4:var l=i.stateNode.containerInfo,o=Wo(t);Ba(t,o,l);break;default:throw Error(k(161))}}catch(c){q(t,t.return,c)}t.flags&=-3}s&4096&&(t.flags&=-4097)}function ep(t,s,n){C=t,gm(t)}function gm(t,s,n){for(var i=(t.mode&1)!==0;C!==null;){var r=C,a=r.child;if(r.tag===22&&i){var l=r.memoizedState!==null||Rn;if(!l){var o=r.alternate,c=o!==null&&o.memoizedState!==null||oe;o=Rn;var u=oe;if(Rn=l,(oe=c)&&!u)for(C=r;C!==null;)l=C,c=l.child,l.tag===22&&l.memoizedState!==null?Fo(r):c!==null?(c.return=l,C=c):Fo(r);for(;a!==null;)C=a,gm(a),a=a.sibling;C=r,Rn=o,oe=u}Ao(t)}else r.subtreeFlags&8772&&a!==null?(a.return=r,C=a):Ao(t)}}function Ao(t){for(;C!==null;){var s=C;if(s.flags&8772){var n=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:oe||Yi(5,s);break;case 1:var i=s.stateNode;if(s.flags&4&&!oe)if(n===null)i.componentDidMount();else{var r=s.elementType===s.type?n.memoizedProps:Ie(s.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=s.updateQueue;a!==null&&yo(s,a,i);break;case 3:var l=s.updateQueue;if(l!==null){if(n=null,s.child!==null)switch(s.child.tag){case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}yo(s,l,n)}break;case 5:var o=s.stateNode;if(n===null&&s.flags&4){n=o;var c=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var u=s.alternate;if(u!==null){var y=u.memoizedState;if(y!==null){var f=y.dehydrated;f!==null&&tn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}oe||s.flags&512&&Sa(s)}catch(h){q(s,s.return,h)}}if(s===t){C=null;break}if(n=s.sibling,n!==null){n.return=s.return,C=n;break}C=s.return}}function To(t){for(;C!==null;){var s=C;if(s===t){C=null;break}var n=s.sibling;if(n!==null){n.return=s.return,C=n;break}C=s.return}}function Fo(t){for(;C!==null;){var s=C;try{switch(s.tag){case 0:case 11:case 15:var n=s.return;try{Yi(4,s)}catch(c){q(s,n,c)}break;case 1:var i=s.stateNode;if(typeof i.componentDidMount=="function"){var r=s.return;try{i.componentDidMount()}catch(c){q(s,r,c)}}var a=s.return;try{Sa(s)}catch(c){q(s,a,c)}break;case 5:var l=s.return;try{Sa(s)}catch(c){q(s,l,c)}}}catch(c){q(s,s.return,c)}if(s===t){C=null;break}var o=s.sibling;if(o!==null){o.return=s.return,C=o;break}C=s.return}}var tp=Math.ceil,Mi=et.ReactCurrentDispatcher,yl=et.ReactCurrentOwner,Ce=et.ReactCurrentBatchConfig,L=0,se=null,K=null,ie=0,je=0,os=bt(0),J=0,hn=null,Ut=0,Gi=0,jl=0,Gs=null,pe=null,vl=0,bs=1/0,$e=null,Ei=!1,Ca=null,pt=null,Pn=!1,lt=null,Wi=0,Qs=0,za=null,oi=-1,ci=0;function me(){return L&6?Q():oi!==-1?oi:oi=Q()}function gt(t){return t.mode&1?L&2&&ie!==0?ie&-ie:Rh.transition!==null?(ci===0&&(ci=Jc()),ci):(t=R,t!==0||(t=window.event,t=t===void 0?16:ad(t.type)),t):1}function Le(t,s,n,i){if(50<Qs)throw Qs=0,za=null,Error(k(185));fn(t,n,i),(!(L&2)||t!==se)&&(t===se&&(!(L&2)&&(Gi|=n),J===4&&rt(t,ie)),ye(t,i),n===1&&L===0&&!(s.mode&1)&&(bs=Q()+500,$i&&wt()))}function ye(t,s){var n=t.callbackNode;Ru(t,s);var i=gi(t,t===se?ie:0);if(i===0)n!==null&&$l(n),t.callbackNode=null,t.callbackPriority=0;else if(s=i&-i,t.callbackPriority!==s){if(n!=null&&$l(n),s===1)t.tag===0?Lh(Lo.bind(null,t)):Sd(Lo.bind(null,t)),Ih(function(){!(L&6)&&wt()}),n=null;else{switch(ed(i)){case 1:n=qa;break;case 4:n=Xc;break;case 16:n=pi;break;case 536870912:n=Zc;break;default:n=pi}n=Nm(n,xm.bind(null,t))}t.callbackPriority=s,t.callbackNode=n}}function xm(t,s){if(oi=-1,ci=0,L&6)throw Error(k(327));var n=t.callbackNode;if(ps()&&t.callbackNode!==n)return null;var i=gi(t,t===se?ie:0);if(i===0)return null;if(i&30||i&t.expiredLanes||s)s=Ii(t,i);else{s=i;var r=L;L|=2;var a=ym();(se!==t||ie!==s)&&($e=null,bs=Q()+500,Rt(t,s));do try{ip();break}catch(o){fm(t,o)}while(!0);rl(),Mi.current=a,L=r,K!==null?s=0:(se=null,ie=0,s=J)}if(s!==0){if(s===2&&(r=sa(t),r!==0&&(i=r,s=Ma(t,r))),s===1)throw n=hn,Rt(t,0),rt(t,i),ye(t,Q()),n;if(s===6)rt(t,i);else{if(r=t.current.alternate,!(i&30)&&!sp(r)&&(s=Ii(t,i),s===2&&(a=sa(t),a!==0&&(i=a,s=Ma(t,a))),s===1))throw n=hn,Rt(t,0),rt(t,i),ye(t,Q()),n;switch(t.finishedWork=r,t.finishedLanes=i,s){case 0:case 1:throw Error(k(345));case 2:At(t,pe,$e);break;case 3:if(rt(t,i),(i&130023424)===i&&(s=vl+500-Q(),10<s)){if(gi(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){me(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=da(At.bind(null,t,pe,$e),s);break}At(t,pe,$e);break;case 4:if(rt(t,i),(i&4194240)===i)break;for(s=t.eventTimes,r=-1;0<i;){var l=31-Fe(i);a=1<<l,l=s[l],l>r&&(r=l),i&=~a}if(i=r,i=Q()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*tp(i/1960))-i,10<i){t.timeoutHandle=da(At.bind(null,t,pe,$e),i);break}At(t,pe,$e);break;case 5:At(t,pe,$e);break;default:throw Error(k(329))}}}return ye(t,Q()),t.callbackNode===n?xm.bind(null,t):null}function Ma(t,s){var n=Gs;return t.current.memoizedState.isDehydrated&&(Rt(t,s).flags|=256),t=Ii(t,s),t!==2&&(s=pe,pe=n,s!==null&&Ea(s)),t}function Ea(t){pe===null?pe=t:pe.push.apply(pe,t)}function sp(t){for(var s=t;;){if(s.flags&16384){var n=s.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!Re(a(),r))return!1}catch{return!1}}}if(n=s.child,s.subtreeFlags&16384&&n!==null)n.return=s,s=n;else{if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function rt(t,s){for(s&=~jl,s&=~Gi,t.suspendedLanes|=s,t.pingedLanes&=~s,t=t.expirationTimes;0<s;){var n=31-Fe(s),i=1<<n;t[n]=-1,s&=~i}}function Lo(t){if(L&6)throw Error(k(327));ps();var s=gi(t,0);if(!(s&1))return ye(t,Q()),null;var n=Ii(t,s);if(t.tag!==0&&n===2){var i=sa(t);i!==0&&(s=i,n=Ma(t,i))}if(n===1)throw n=hn,Rt(t,0),rt(t,s),ye(t,Q()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=s,At(t,pe,$e),ye(t,Q()),null}function bl(t,s){var n=L;L|=1;try{return t(s)}finally{L=n,L===0&&(bs=Q()+500,$i&&wt())}}function $t(t){lt!==null&&lt.tag===0&&!(L&6)&&ps();var s=L;L|=1;var n=Ce.transition,i=R;try{if(Ce.transition=null,R=1,t)return t()}finally{R=i,Ce.transition=n,L=s,!(L&6)&&wt()}}function wl(){je=os.current,O(os)}function Rt(t,s){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Wh(n)),K!==null)for(n=K.return;n!==null;){var i=n;switch(sl(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&vi();break;case 3:js(),O(xe),O(ce),ml();break;case 5:dl(i);break;case 4:js();break;case 13:O(U);break;case 19:O(U);break;case 10:al(i.type._context);break;case 22:case 23:wl()}n=n.return}if(se=t,K=t=xt(t.current,null),ie=je=s,J=0,hn=null,jl=Gi=Ut=0,pe=Gs=null,Ft!==null){for(s=0;s<Ft.length;s++)if(n=Ft[s],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,a=n.pending;if(a!==null){var l=a.next;a.next=r,i.next=l}n.pending=i}Ft=null}return t}function fm(t,s){do{var n=K;try{if(rl(),ri.current=zi,Ci){for(var i=$.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ci=!1}if(_t=0,te=Z=$=null,qs=!1,dn=0,yl.current=null,n===null||n.return===null){J=1,hn=s,K=null;break}e:{var a=t,l=n.return,o=n,c=s;if(s=ie,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,y=o,f=y.tag;if(!(y.mode&1)&&(f===0||f===11||f===15)){var h=y.alternate;h?(y.updateQueue=h.updateQueue,y.memoizedState=h.memoizedState,y.lanes=h.lanes):(y.updateQueue=null,y.memoizedState=null)}var b=ko(l);if(b!==null){b.flags&=-257,So(b,l,o,a,s),b.mode&1&&No(a,u,s),s=b,c=u;var w=s.updateQueue;if(w===null){var N=new Set;N.add(c),s.updateQueue=N}else w.add(c);break e}else{if(!(s&1)){No(a,u,s),Nl();break e}c=Error(k(426))}}else if(_&&o.mode&1){var j=ko(l);if(j!==null){!(j.flags&65536)&&(j.flags|=256),So(j,l,o,a,s),nl(vs(c,o));break e}}a=c=vs(c,o),J!==4&&(J=2),Gs===null?Gs=[a]:Gs.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,s&=-s,a.lanes|=s;var x=em(a,c,s);fo(a,x);break e;case 1:o=c;var m=a.type,p=a.stateNode;if(!(a.flags&128)&&(typeof m.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(pt===null||!pt.has(p)))){a.flags|=65536,s&=-s,a.lanes|=s;var v=tm(a,o,s);fo(a,v);break e}}a=a.return}while(a!==null)}vm(n)}catch(S){s=S,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function ym(){var t=Mi.current;return Mi.current=zi,t===null?zi:t}function Nl(){(J===0||J===3||J===2)&&(J=4),se===null||!(Ut&268435455)&&!(Gi&268435455)||rt(se,ie)}function Ii(t,s){var n=L;L|=2;var i=ym();(se!==t||ie!==s)&&($e=null,Rt(t,s));do try{np();break}catch(r){fm(t,r)}while(!0);if(rl(),L=n,Mi.current=i,K!==null)throw Error(k(261));return se=null,ie=0,J}function np(){for(;K!==null;)jm(K)}function ip(){for(;K!==null&&!zu();)jm(K)}function jm(t){var s=wm(t.alternate,t,je);t.memoizedProps=t.pendingProps,s===null?vm(t):K=s,yl.current=null}function vm(t){var s=t;do{var n=s.alternate;if(t=s.return,s.flags&32768){if(n=Xh(n,s),n!==null){n.flags&=32767,K=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{J=6,K=null;return}}else if(n=Kh(n,s,je),n!==null){K=n;return}if(s=s.sibling,s!==null){K=s;return}K=s=t}while(s!==null);J===0&&(J=5)}function At(t,s,n){var i=R,r=Ce.transition;try{Ce.transition=null,R=1,rp(t,s,n,i)}finally{Ce.transition=r,R=i}return null}function rp(t,s,n,i){do ps();while(lt!==null);if(L&6)throw Error(k(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var a=n.lanes|n.childLanes;if(Pu(t,a),t===se&&(K=se=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pn||(Pn=!0,Nm(pi,function(){return ps(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Ce.transition,Ce.transition=null;var l=R;R=1;var o=L;L|=4,yl.current=null,Jh(t,n),pm(n,t),Sh(oa),xi=!!la,oa=la=null,t.current=n,ep(n),Mu(),L=o,R=l,Ce.transition=a}else t.current=n;if(Pn&&(Pn=!1,lt=t,Wi=r),a=t.pendingLanes,a===0&&(pt=null),Iu(n.stateNode),ye(t,Q()),s!==null)for(i=t.onRecoverableError,n=0;n<s.length;n++)r=s[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ei)throw Ei=!1,t=Ca,Ca=null,t;return Wi&1&&t.tag!==0&&ps(),a=t.pendingLanes,a&1?t===za?Qs++:(Qs=0,za=t):Qs=0,wt(),null}function ps(){if(lt!==null){var t=ed(Wi),s=Ce.transition,n=R;try{if(Ce.transition=null,R=16>t?16:t,lt===null)var i=!1;else{if(t=lt,lt=null,Wi=0,L&6)throw Error(k(331));var r=L;for(L|=4,C=t.current;C!==null;){var a=C,l=a.child;if(C.flags&16){var o=a.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(C=u;C!==null;){var y=C;switch(y.tag){case 0:case 11:case 15:Ys(8,y,a)}var f=y.child;if(f!==null)f.return=y,C=f;else for(;C!==null;){y=C;var h=y.sibling,b=y.return;if(mm(y),y===u){C=null;break}if(h!==null){h.return=b,C=h;break}C=b}}}var w=a.alternate;if(w!==null){var N=w.child;if(N!==null){w.child=null;do{var j=N.sibling;N.sibling=null,N=j}while(N!==null)}}C=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,C=l;else e:for(;C!==null;){if(a=C,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Ys(9,a,a.return)}var x=a.sibling;if(x!==null){x.return=a.return,C=x;break e}C=a.return}}var m=t.current;for(C=m;C!==null;){l=C;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,C=p;else e:for(l=m;C!==null;){if(o=C,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Yi(9,o)}}catch(S){q(o,o.return,S)}if(o===l){C=null;break e}var v=o.sibling;if(v!==null){v.return=o.return,C=v;break e}C=o.return}}if(L=r,wt(),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(Pi,t)}catch{}i=!0}return i}finally{R=n,Ce.transition=s}}return!1}function Ro(t,s,n){s=vs(n,s),s=em(t,s,1),t=ht(t,s,1),s=me(),t!==null&&(fn(t,1,s),ye(t,s))}function q(t,s,n){if(t.tag===3)Ro(t,t,n);else for(;s!==null;){if(s.tag===3){Ro(s,t,n);break}else if(s.tag===1){var i=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(pt===null||!pt.has(i))){t=vs(n,t),t=tm(s,t,1),s=ht(s,t,1),t=me(),s!==null&&(fn(s,1,t),ye(s,t));break}}s=s.return}}function ap(t,s,n){var i=t.pingCache;i!==null&&i.delete(s),s=me(),t.pingedLanes|=t.suspendedLanes&n,se===t&&(ie&n)===n&&(J===4||J===3&&(ie&130023424)===ie&&500>Q()-vl?Rt(t,0):jl|=n),ye(t,s)}function bm(t,s){s===0&&(t.mode&1?(s=zn,zn<<=1,!(zn&130023424)&&(zn=4194304)):s=1);var n=me();t=Ze(t,s),t!==null&&(fn(t,s,n),ye(t,n))}function lp(t){var s=t.memoizedState,n=0;s!==null&&(n=s.retryLane),bm(t,n)}function op(t,s){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(k(314))}i!==null&&i.delete(s),bm(t,n)}var wm;wm=function(t,s,n){if(t!==null)if(t.memoizedProps!==s.pendingProps||xe.current)ge=!0;else{if(!(t.lanes&n)&&!(s.flags&128))return ge=!1,Qh(t,s,n);ge=!!(t.flags&131072)}else ge=!1,_&&s.flags&1048576&&Bd(s,Ni,s.index);switch(s.lanes=0,s.tag){case 2:var i=s.type;li(t,s),t=s.pendingProps;var r=xs(s,ce.current);hs(s,n),r=hl(null,s,i,t,r,n);var a=pl();return s.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,fe(i)?(a=!0,bi(s)):a=!1,s.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ol(s),r.updater=qi,s.stateNode=r,r._reactInternals=s,fa(s,i,t,n),s=va(null,s,i,!0,a,n)):(s.tag=0,_&&a&&tl(s),de(null,s,r,n),s=s.child),s;case 16:i=s.elementType;e:{switch(li(t,s),t=s.pendingProps,r=i._init,i=r(i._payload),s.type=i,r=s.tag=dp(i),t=Ie(i,t),r){case 0:s=ja(null,s,i,t,n);break e;case 1:s=Co(null,s,i,t,n);break e;case 11:s=Bo(null,s,i,t,n);break e;case 14:s=Do(null,s,i,Ie(i.type,t),n);break e}throw Error(k(306,i,""))}return s;case 0:return i=s.type,r=s.pendingProps,r=s.elementType===i?r:Ie(i,r),ja(t,s,i,r,n);case 1:return i=s.type,r=s.pendingProps,r=s.elementType===i?r:Ie(i,r),Co(t,s,i,r,n);case 3:e:{if(rm(s),t===null)throw Error(k(387));i=s.pendingProps,a=s.memoizedState,r=a.element,Wd(t,s),Bi(s,i,null,n);var l=s.memoizedState;if(i=l.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},s.updateQueue.baseState=a,s.memoizedState=a,s.flags&256){r=vs(Error(k(423)),s),s=zo(t,s,i,n,r);break e}else if(i!==r){r=vs(Error(k(424)),s),s=zo(t,s,i,n,r);break e}else for(ve=ut(s.stateNode.containerInfo.firstChild),be=s,_=!0,Te=null,n=Md(s,null,i,n),s.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fs(),i===r){s=Je(t,s,n);break e}de(t,s,i,n)}s=s.child}return s;case 5:return Id(s),t===null&&pa(s),i=s.type,r=s.pendingProps,a=t!==null?t.memoizedProps:null,l=r.children,ca(i,r)?l=null:a!==null&&ca(i,a)&&(s.flags|=32),im(t,s),de(t,s,l,n),s.child;case 6:return t===null&&pa(s),null;case 13:return am(t,s,n);case 4:return cl(s,s.stateNode.containerInfo),i=s.pendingProps,t===null?s.child=ys(s,null,i,n):de(t,s,i,n),s.child;case 11:return i=s.type,r=s.pendingProps,r=s.elementType===i?r:Ie(i,r),Bo(t,s,i,r,n);case 7:return de(t,s,s.pendingProps,n),s.child;case 8:return de(t,s,s.pendingProps.children,n),s.child;case 12:return de(t,s,s.pendingProps.children,n),s.child;case 10:e:{if(i=s.type._context,r=s.pendingProps,a=s.memoizedProps,l=r.value,P(ki,i._currentValue),i._currentValue=l,a!==null)if(Re(a.value,l)){if(a.children===r.children&&!xe.current){s=Je(t,s,n);break e}}else for(a=s.child,a!==null&&(a.return=s);a!==null;){var o=a.dependencies;if(o!==null){l=a.child;for(var c=o.firstContext;c!==null;){if(c.context===i){if(a.tag===1){c=Qe(-1,n&-n),c.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var y=u.pending;y===null?c.next=c:(c.next=y.next,y.next=c),u.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),ga(a.return,n,s),o.lanes|=n;break}c=c.next}}else if(a.tag===10)l=a.type===s.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(k(341));l.lanes|=n,o=l.alternate,o!==null&&(o.lanes|=n),ga(l,n,s),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===s){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}de(t,s,r.children,n),s=s.child}return s;case 9:return r=s.type,i=s.pendingProps.children,hs(s,n),r=ze(r),i=i(r),s.flags|=1,de(t,s,i,n),s.child;case 14:return i=s.type,r=Ie(i,s.pendingProps),r=Ie(i.type,r),Do(t,s,i,r,n);case 15:return sm(t,s,s.type,s.pendingProps,n);case 17:return i=s.type,r=s.pendingProps,r=s.elementType===i?r:Ie(i,r),li(t,s),s.tag=1,fe(i)?(t=!0,bi(s)):t=!1,hs(s,n),Jd(s,i,r),fa(s,i,r,n),va(null,s,i,!0,t,n);case 19:return lm(t,s,n);case 22:return nm(t,s,n)}throw Error(k(156,s.tag))};function Nm(t,s){return Kc(t,s)}function cp(t,s,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(t,s,n,i){return new cp(t,s,n,i)}function kl(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dp(t){if(typeof t=="function")return kl(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ua)return 11;if(t===$a)return 14}return 2}function xt(t,s){var n=t.alternate;return n===null?(n=De(t.tag,s,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=s,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,s=t.dependencies,n.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function di(t,s,n,i,r,a){var l=2;if(i=t,typeof t=="function")kl(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case Zt:return Pt(n.children,r,a,s);case _a:l=8,r|=8;break;case Or:return t=De(12,n,s,r|2),t.elementType=Or,t.lanes=a,t;case _r:return t=De(13,n,s,r),t.elementType=_r,t.lanes=a,t;case Ur:return t=De(19,n,s,r),t.elementType=Ur,t.lanes=a,t;case Ic:return Qi(n,r,a,s);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ec:l=10;break e;case Wc:l=9;break e;case Ua:l=11;break e;case $a:l=14;break e;case st:l=16,i=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return s=De(l,n,s,r),s.elementType=t,s.type=i,s.lanes=a,s}function Pt(t,s,n,i){return t=De(7,t,i,s),t.lanes=n,t}function Qi(t,s,n,i){return t=De(22,t,i,s),t.elementType=Ic,t.lanes=n,t.stateNode={isHidden:!1},t}function zr(t,s,n){return t=De(6,t,null,s),t.lanes=n,t}function Mr(t,s,n){return s=De(4,t.children!==null?t.children:[],t.key,s),s.lanes=n,s.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},s}function mp(t,s,n,i,r){this.tag=s,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dr(0),this.expirationTimes=dr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dr(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Sl(t,s,n,i,r,a,l,o,c){return t=new mp(t,s,n,o,c),s===1?(s=1,a===!0&&(s|=8)):s=0,a=De(3,null,null,s),t.current=a,a.stateNode=t,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ol(a),t}function up(t,s,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xt,key:i==null?null:""+i,children:t,containerInfo:s,implementation:n}}function km(t){if(!t)return jt;t=t._reactInternals;e:{if(qt(t)!==t||t.tag!==1)throw Error(k(170));var s=t;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(fe(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(fe(n))return kd(t,n,s)}return s}function Sm(t,s,n,i,r,a,l,o,c){return t=Sl(n,i,!0,t,r,a,l,o,c),t.context=km(null),n=t.current,i=me(),r=gt(n),a=Qe(i,r),a.callback=s??null,ht(n,a,r),t.current.lanes=r,fn(t,r,i),ye(t,i),t}function Ki(t,s,n,i){var r=s.current,a=me(),l=gt(r);return n=km(n),s.context===null?s.context=n:s.pendingContext=n,s=Qe(a,l),s.payload={element:t},i=i===void 0?null:i,i!==null&&(s.callback=i),t=ht(r,s,l),t!==null&&(Le(t,r,l,a),ii(t,r,l)),l}function Ai(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Po(t,s){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<s?n:s}}function Bl(t,s){Po(t,s),(t=t.alternate)&&Po(t,s)}function hp(){return null}var Bm=typeof reportError=="function"?reportError:function(t){console.error(t)};function Dl(t){this._internalRoot=t}Xi.prototype.render=Dl.prototype.render=function(t){var s=this._internalRoot;if(s===null)throw Error(k(409));Ki(t,s,null,null)};Xi.prototype.unmount=Dl.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var s=t.containerInfo;$t(function(){Ki(null,t,null,null)}),s[Xe]=null}};function Xi(t){this._internalRoot=t}Xi.prototype.unstable_scheduleHydration=function(t){if(t){var s=nd();t={blockedOn:null,target:t,priority:s};for(var n=0;n<it.length&&s!==0&&s<it[n].priority;n++);it.splice(n,0,t),n===0&&rd(t)}};function Cl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zi(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ho(){}function pp(t,s,n,i,r){if(r){if(typeof i=="function"){var a=i;i=function(){var u=Ai(l);a.call(u)}}var l=Sm(s,i,t,0,null,!1,!1,"",Ho);return t._reactRootContainer=l,t[Xe]=l.current,rn(t.nodeType===8?t.parentNode:t),$t(),l}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Ai(c);o.call(u)}}var c=Sl(t,0,!1,null,null,!1,!1,"",Ho);return t._reactRootContainer=c,t[Xe]=c.current,rn(t.nodeType===8?t.parentNode:t),$t(function(){Ki(s,c,n,i)}),c}function Ji(t,s,n,i,r){var a=n._reactRootContainer;if(a){var l=a;if(typeof r=="function"){var o=r;r=function(){var c=Ai(l);o.call(c)}}Ki(s,l,t,r)}else l=pp(n,s,t,r,i);return Ai(l)}td=function(t){switch(t.tag){case 3:var s=t.stateNode;if(s.current.memoizedState.isDehydrated){var n=Ps(s.pendingLanes);n!==0&&(Ya(s,n|1),ye(s,Q()),!(L&6)&&(bs=Q()+500,wt()))}break;case 13:$t(function(){var i=Ze(t,1);if(i!==null){var r=me();Le(i,t,1,r)}}),Bl(t,1)}};Ga=function(t){if(t.tag===13){var s=Ze(t,134217728);if(s!==null){var n=me();Le(s,t,134217728,n)}Bl(t,134217728)}};sd=function(t){if(t.tag===13){var s=gt(t),n=Ze(t,s);if(n!==null){var i=me();Le(n,t,s,i)}Bl(t,s)}};nd=function(){return R};id=function(t,s){var n=R;try{return R=t,s()}finally{R=n}};Jr=function(t,s,n){switch(s){case"input":if(qr(t,n),s=n.name,n.type==="radio"&&s!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<n.length;s++){var i=n[s];if(i!==t&&i.form===t.form){var r=Ui(i);if(!r)throw Error(k(90));Tc(i),qr(i,r)}}}break;case"textarea":Lc(t,n);break;case"select":s=n.value,s!=null&&cs(t,!!n.multiple,s,!1)}};$c=bl;Vc=$t;var gp={usingClientEntryPoint:!1,Events:[jn,ss,Ui,_c,Uc,bl]},Ts={findFiberByHostInstance:Tt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xp={bundleType:Ts.bundleType,version:Ts.version,rendererPackageName:Ts.rendererPackageName,rendererConfig:Ts.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:et.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Gc(t),t===null?null:t.stateNode},findFiberByHostInstance:Ts.findFiberByHostInstance||hp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hn.isDisabled&&Hn.supportsFiber)try{Pi=Hn.inject(xp),_e=Hn}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gp;Ne.createPortal=function(t,s){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cl(s))throw Error(k(200));return up(t,s,null,n)};Ne.createRoot=function(t,s){if(!Cl(t))throw Error(k(299));var n=!1,i="",r=Bm;return s!=null&&(s.unstable_strictMode===!0&&(n=!0),s.identifierPrefix!==void 0&&(i=s.identifierPrefix),s.onRecoverableError!==void 0&&(r=s.onRecoverableError)),s=Sl(t,1,!1,null,null,n,!1,i,r),t[Xe]=s.current,rn(t.nodeType===8?t.parentNode:t),new Dl(s)};Ne.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var s=t._reactInternals;if(s===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=Gc(s),t=t===null?null:t.stateNode,t};Ne.flushSync=function(t){return $t(t)};Ne.hydrate=function(t,s,n){if(!Zi(s))throw Error(k(200));return Ji(null,t,s,!0,n)};Ne.hydrateRoot=function(t,s,n){if(!Cl(t))throw Error(k(405));var i=n!=null&&n.hydratedSources||null,r=!1,a="",l=Bm;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),s=Sm(s,null,t,1,n??null,r,!1,a,l),t[Xe]=s.current,rn(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[n,r]:s.mutableSourceEagerHydrationData.push(n,r);return new Xi(s)};Ne.render=function(t,s,n){if(!Zi(s))throw Error(k(200));return Ji(null,t,s,!1,n)};Ne.unmountComponentAtNode=function(t){if(!Zi(t))throw Error(k(40));return t._reactRootContainer?($t(function(){Ji(null,null,t,!1,function(){t._reactRootContainer=null,t[Xe]=null})}),!0):!1};Ne.unstable_batchedUpdates=bl;Ne.unstable_renderSubtreeIntoContainer=function(t,s,n,i){if(!Zi(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return Ji(t,s,n,!1,i)};Ne.version="18.3.1-next-f1338f8080-20240426";function Dm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dm)}catch(t){console.error(t)}}Dm(),Dc.exports=Ne;var fp=Dc.exports,Oo=fp;Pr.createRoot=Oo.createRoot,Pr.hydrateRoot=Oo.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pn(){return pn=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},pn.apply(this,arguments)}var ot;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ot||(ot={}));const _o="popstate";function yp(t){t===void 0&&(t={});function s(r,a){let{pathname:l="/",search:o="",hash:c=""}=Yt(r.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),Wa("",{pathname:l,search:o,hash:c},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){let l=r.document.querySelector("base"),o="";if(l&&l.getAttribute("href")){let c=r.location.href,u=c.indexOf("#");o=u===-1?c:c.slice(0,u)}return o+"#"+(typeof a=="string"?a:Ti(a))}function i(r,a){er(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(a)+")")}return vp(s,n,i,t)}function X(t,s){if(t===!1||t===null||typeof t>"u")throw new Error(s)}function er(t,s){if(!t){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function jp(){return Math.random().toString(36).substr(2,8)}function Uo(t,s){return{usr:t.state,key:t.key,idx:s}}function Wa(t,s,n,i){return n===void 0&&(n=null),pn({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof s=="string"?Yt(s):s,{state:n,key:s&&s.key||i||jp()})}function Ti(t){let{pathname:s="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(s+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Yt(t){let s={};if(t){let n=t.indexOf("#");n>=0&&(s.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(s.search=t.substr(i),t=t.substr(0,i)),t&&(s.pathname=t)}return s}function vp(t,s,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:a=!1}=i,l=r.history,o=ot.Pop,c=null,u=y();u==null&&(u=0,l.replaceState(pn({},l.state,{idx:u}),""));function y(){return(l.state||{idx:null}).idx}function f(){o=ot.Pop;let j=y(),x=j==null?null:j-u;u=j,c&&c({action:o,location:N.location,delta:x})}function h(j,x){o=ot.Push;let m=Wa(N.location,j,x);n&&n(m,j),u=y()+1;let p=Uo(m,u),v=N.createHref(m);try{l.pushState(p,"",v)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;r.location.assign(v)}a&&c&&c({action:o,location:N.location,delta:1})}function b(j,x){o=ot.Replace;let m=Wa(N.location,j,x);n&&n(m,j),u=y();let p=Uo(m,u),v=N.createHref(m);l.replaceState(p,"",v),a&&c&&c({action:o,location:N.location,delta:0})}function w(j){let x=r.location.origin!=="null"?r.location.origin:r.location.href,m=typeof j=="string"?j:Ti(j);return m=m.replace(/ $/,"%20"),X(x,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,x)}let N={get action(){return o},get location(){return t(r,l)},listen(j){if(c)throw new Error("A history only accepts one active listener");return r.addEventListener(_o,f),c=j,()=>{r.removeEventListener(_o,f),c=null}},createHref(j){return s(r,j)},createURL:w,encodeLocation(j){let x=w(j);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:h,replace:b,go(j){return l.go(j)}};return N}var $o;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})($o||($o={}));function bp(t,s,n){return n===void 0&&(n="/"),wp(t,s,n)}function wp(t,s,n,i){let r=typeof s=="string"?Yt(s):s,a=zl(r.pathname||"/",n);if(a==null)return null;let l=Cm(t);Np(l);let o=null;for(let c=0;o==null&&c<l.length;++c){let u=Tp(a);o=Wp(l[c],u)}return o}function Cm(t,s,n,i){s===void 0&&(s=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(a,l,o)=>{let c={relativePath:o===void 0?a.path||"":o,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};c.relativePath.startsWith("/")&&(X(c.relativePath.startsWith(i),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(i.length));let u=ft([i,c.relativePath]),y=n.concat(c);a.children&&a.children.length>0&&(X(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Cm(a.children,s,y,u)),!(a.path==null&&!a.index)&&s.push({path:u,score:Mp(u,a.index),routesMeta:y})};return t.forEach((a,l)=>{var o;if(a.path===""||!((o=a.path)!=null&&o.includes("?")))r(a,l);else for(let c of zm(a.path))r(a,l,c)}),s}function zm(t){let s=t.split("/");if(s.length===0)return[];let[n,...i]=s,r=n.endsWith("?"),a=n.replace(/\?$/,"");if(i.length===0)return r?[a,""]:[a];let l=zm(i.join("/")),o=[];return o.push(...l.map(c=>c===""?a:[a,c].join("/"))),r&&o.push(...l),o.map(c=>t.startsWith("/")&&c===""?"/":c)}function Np(t){t.sort((s,n)=>s.score!==n.score?n.score-s.score:Ep(s.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const kp=/^:[\w-]+$/,Sp=3,Bp=2,Dp=1,Cp=10,zp=-2,Vo=t=>t==="*";function Mp(t,s){let n=t.split("/"),i=n.length;return n.some(Vo)&&(i+=zp),s&&(i+=Bp),n.filter(r=>!Vo(r)).reduce((r,a)=>r+(kp.test(a)?Sp:a===""?Dp:Cp),i)}function Ep(t,s){return t.length===s.length&&t.slice(0,-1).every((i,r)=>i===s[r])?t[t.length-1]-s[s.length-1]:0}function Wp(t,s,n){let{routesMeta:i}=t,r={},a="/",l=[];for(let o=0;o<i.length;++o){let c=i[o],u=o===i.length-1,y=a==="/"?s:s.slice(a.length)||"/",f=Ip({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},y),h=c.route;if(!f)return null;Object.assign(r,f.params),l.push({params:r,pathname:ft([a,f.pathname]),pathnameBase:Hp(ft([a,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(a=ft([a,f.pathnameBase]))}return l}function Ip(t,s){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=Ap(t.path,t.caseSensitive,t.end),r=s.match(n);if(!r)return null;let a=r[0],l=a.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((u,y,f)=>{let{paramName:h,isOptional:b}=y;if(h==="*"){let N=o[f]||"";l=a.slice(0,a.length-N.length).replace(/(.)\/+$/,"$1")}const w=o[f];return b&&!w?u[h]=void 0:u[h]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:l,pattern:t}}function Ap(t,s,n){s===void 0&&(s=!1),n===void 0&&(n=!0),er(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,o,c)=>(i.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,s?void 0:"i"),i]}function Tp(t){try{return t.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return er(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+s+").")),t}}function zl(t,s){if(s==="/")return t;if(!t.toLowerCase().startsWith(s.toLowerCase()))return null;let n=s.endsWith("/")?s.length-1:s.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const Fp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lp=t=>Fp.test(t);function Rp(t,s){s===void 0&&(s="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Yt(t):t,a;if(n)if(Lp(n))a=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),er(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?a=qo(n.substring(1),"/"):a=qo(n,s)}else a=s;return{pathname:a,search:Op(i),hash:_p(r)}}function qo(t,s){let n=s.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Er(t,s,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+s+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Pp(t){return t.filter((s,n)=>n===0||s.route.path&&s.route.path.length>0)}function Mm(t,s){let n=Pp(t);return s?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Em(t,s,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Yt(t):(r=pn({},t),X(!r.pathname||!r.pathname.includes("?"),Er("?","pathname","search",r)),X(!r.pathname||!r.pathname.includes("#"),Er("#","pathname","hash",r)),X(!r.search||!r.search.includes("#"),Er("#","search","hash",r)));let a=t===""||r.pathname==="",l=a?"/":r.pathname,o;if(l==null)o=n;else{let f=s.length-1;if(!i&&l.startsWith("..")){let h=l.split("/");for(;h[0]==="..";)h.shift(),f-=1;r.pathname=h.join("/")}o=f>=0?s[f]:"/"}let c=Rp(r,o),u=l&&l!=="/"&&l.endsWith("/"),y=(a||l===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||y)&&(c.pathname+="/"),c}const ft=t=>t.join("/").replace(/\/\/+/g,"/"),Hp=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Op=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,_p=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Up(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Wm=["post","put","patch","delete"];new Set(Wm);const $p=["get",...Wm];new Set($p);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gn(){return gn=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},gn.apply(this,arguments)}const Ml=B.createContext(null),Vp=B.createContext(null),Gt=B.createContext(null),tr=B.createContext(null),Qt=B.createContext({outlet:null,matches:[],isDataRoute:!1}),Im=B.createContext(null);function qp(t,s){let{relative:n}=s===void 0?{}:s;bn()||X(!1);let{basename:i,navigator:r}=B.useContext(Gt),{hash:a,pathname:l,search:o}=Tm(t,{relative:n}),c=l;return i!=="/"&&(c=l==="/"?i:ft([i,l])),r.createHref({pathname:c,search:o,hash:a})}function bn(){return B.useContext(tr)!=null}function Ss(){return bn()||X(!1),B.useContext(tr).location}function Am(t){B.useContext(Gt).static||B.useLayoutEffect(t)}function Yp(){let{isDataRoute:t}=B.useContext(Qt);return t?ag():Gp()}function Gp(){bn()||X(!1);let t=B.useContext(Ml),{basename:s,future:n,navigator:i}=B.useContext(Gt),{matches:r}=B.useContext(Qt),{pathname:a}=Ss(),l=JSON.stringify(Mm(r,n.v7_relativeSplatPath)),o=B.useRef(!1);return Am(()=>{o.current=!0}),B.useCallback(function(u,y){if(y===void 0&&(y={}),!o.current)return;if(typeof u=="number"){i.go(u);return}let f=Em(u,JSON.parse(l),a,y.relative==="path");t==null&&s!=="/"&&(f.pathname=f.pathname==="/"?s:ft([s,f.pathname])),(y.replace?i.replace:i.push)(f,y.state,y)},[s,i,l,a,t])}function Tm(t,s){let{relative:n}=s===void 0?{}:s,{future:i}=B.useContext(Gt),{matches:r}=B.useContext(Qt),{pathname:a}=Ss(),l=JSON.stringify(Mm(r,i.v7_relativeSplatPath));return B.useMemo(()=>Em(t,JSON.parse(l),a,n==="path"),[t,l,a,n])}function Qp(t,s){return Kp(t,s)}function Kp(t,s,n,i){bn()||X(!1);let{navigator:r}=B.useContext(Gt),{matches:a}=B.useContext(Qt),l=a[a.length-1],o=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let u=Ss(),y;if(s){var f;let j=typeof s=="string"?Yt(s):s;c==="/"||(f=j.pathname)!=null&&f.startsWith(c)||X(!1),y=j}else y=u;let h=y.pathname||"/",b=h;if(c!=="/"){let j=c.replace(/^\//,"").split("/");b="/"+h.replace(/^\//,"").split("/").slice(j.length).join("/")}let w=bp(t,{pathname:b}),N=tg(w&&w.map(j=>Object.assign({},j,{params:Object.assign({},o,j.params),pathname:ft([c,r.encodeLocation?r.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?c:ft([c,r.encodeLocation?r.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),a,n,i);return s&&N?B.createElement(tr.Provider,{value:{location:gn({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:ot.Pop}},N):N}function Xp(){let t=rg(),s=Up(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return B.createElement(B.Fragment,null,B.createElement("h2",null,"Unexpected Application Error!"),B.createElement("h3",{style:{fontStyle:"italic"}},s),n?B.createElement("pre",{style:r},n):null,null)}const Zp=B.createElement(Xp,null);class Jp extends B.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,n){return n.location!==s.location||n.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:n.error,location:n.location,revalidation:s.revalidation||n.revalidation}}componentDidCatch(s,n){console.error("React Router caught the following error during render",s,n)}render(){return this.state.error!==void 0?B.createElement(Qt.Provider,{value:this.props.routeContext},B.createElement(Im.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function eg(t){let{routeContext:s,match:n,children:i}=t,r=B.useContext(Ml);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),B.createElement(Qt.Provider,{value:s},i)}function tg(t,s,n,i){var r;if(s===void 0&&(s=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var a;if(!n)return null;if(n.errors)t=n.matches;else if((a=i)!=null&&a.v7_partialHydration&&s.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let l=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let y=l.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);y>=0||X(!1),l=l.slice(0,Math.min(l.length,y+1))}let c=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let y=0;y<l.length;y++){let f=l[y];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=y),f.route.id){let{loaderData:h,errors:b}=n,w=f.route.loader&&h[f.route.id]===void 0&&(!b||b[f.route.id]===void 0);if(f.route.lazy||w){c=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((y,f,h)=>{let b,w=!1,N=null,j=null;n&&(b=o&&f.route.id?o[f.route.id]:void 0,N=f.route.errorElement||Zp,c&&(u<0&&h===0?(lg("route-fallback"),w=!0,j=null):u===h&&(w=!0,j=f.route.hydrateFallbackElement||null)));let x=s.concat(l.slice(0,h+1)),m=()=>{let p;return b?p=N:w?p=j:f.route.Component?p=B.createElement(f.route.Component,null):f.route.element?p=f.route.element:p=y,B.createElement(eg,{match:f,routeContext:{outlet:y,matches:x,isDataRoute:n!=null},children:p})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?B.createElement(Jp,{location:n.location,revalidation:n.revalidation,component:N,error:b,children:m(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):m()},null)}var Fm=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Fm||{}),Lm=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Lm||{});function sg(t){let s=B.useContext(Ml);return s||X(!1),s}function ng(t){let s=B.useContext(Vp);return s||X(!1),s}function ig(t){let s=B.useContext(Qt);return s||X(!1),s}function Rm(t){let s=ig(),n=s.matches[s.matches.length-1];return n.route.id||X(!1),n.route.id}function rg(){var t;let s=B.useContext(Im),n=ng(),i=Rm();return s!==void 0?s:(t=n.errors)==null?void 0:t[i]}function ag(){let{router:t}=sg(Fm.UseNavigateStable),s=Rm(Lm.UseNavigateStable),n=B.useRef(!1);return Am(()=>{n.current=!0}),B.useCallback(function(r,a){a===void 0&&(a={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,gn({fromRouteId:s},a)))},[t,s])}const Yo={};function lg(t,s,n){Yo[t]||(Yo[t]=!0)}function og(t,s){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function D(t){X(!1)}function cg(t){let{basename:s="/",children:n=null,location:i,navigationType:r=ot.Pop,navigator:a,static:l=!1,future:o}=t;bn()&&X(!1);let c=s.replace(/^\/*/,"/"),u=B.useMemo(()=>({basename:c,navigator:a,static:l,future:gn({v7_relativeSplatPath:!1},o)}),[c,o,a,l]);typeof i=="string"&&(i=Yt(i));let{pathname:y="/",search:f="",hash:h="",state:b=null,key:w="default"}=i,N=B.useMemo(()=>{let j=zl(y,c);return j==null?null:{location:{pathname:j,search:f,hash:h,state:b,key:w},navigationType:r}},[c,y,f,h,b,w,r]);return N==null?null:B.createElement(Gt.Provider,{value:u},B.createElement(tr.Provider,{children:n,value:N}))}function dg(t){let{children:s,location:n}=t;return Qp(Ia(s),n)}new Promise(()=>{});function Ia(t,s){s===void 0&&(s=[]);let n=[];return B.Children.forEach(t,(i,r)=>{if(!B.isValidElement(i))return;let a=[...s,r];if(i.type===B.Fragment){n.push.apply(n,Ia(i.props.children,a));return}i.type!==D&&X(!1),!i.props.index||!i.props.children||X(!1);let l={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(l.children=Ia(i.props.children,a)),n.push(l)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Aa(){return Aa=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Aa.apply(this,arguments)}function mg(t,s){if(t==null)return{};var n={},i=Object.keys(t),r,a;for(a=0;a<i.length;a++)r=i[a],!(s.indexOf(r)>=0)&&(n[r]=t[r]);return n}function ug(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function hg(t,s){return t.button===0&&(!s||s==="_self")&&!ug(t)}const pg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],gg="6";try{window.__reactRouterVersion=gg}catch{}const xg="startTransition",Go=au[xg];function fg(t){let{basename:s,children:n,future:i,window:r}=t,a=B.useRef();a.current==null&&(a.current=yp({window:r,v5Compat:!0}));let l=a.current,[o,c]=B.useState({action:l.action,location:l.location}),{v7_startTransition:u}=i||{},y=B.useCallback(f=>{u&&Go?Go(()=>c(f)):c(f)},[c,u]);return B.useLayoutEffect(()=>l.listen(y),[l,y]),B.useEffect(()=>og(i),[i]),B.createElement(cg,{basename:s,children:n,location:o.location,navigationType:o.action,navigator:l,future:i})}const yg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,g=B.forwardRef(function(s,n){let{onClick:i,relative:r,reloadDocument:a,replace:l,state:o,target:c,to:u,preventScrollReset:y,viewTransition:f}=s,h=mg(s,pg),{basename:b}=B.useContext(Gt),w,N=!1;if(typeof u=="string"&&jg.test(u)&&(w=u,yg))try{let p=new URL(window.location.href),v=u.startsWith("//")?new URL(p.protocol+u):new URL(u),S=zl(v.pathname,b);v.origin===p.origin&&S!=null?u=S+v.search+v.hash:N=!0}catch{}let j=qp(u,{relative:r}),x=vg(u,{replace:l,state:o,target:c,preventScrollReset:y,relative:r,viewTransition:f});function m(p){i&&i(p),p.defaultPrevented||x(p)}return B.createElement("a",Aa({},h,{href:w||j,onClick:N||a?i:m,ref:n,target:c}))});var Qo;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Qo||(Qo={}));var Ko;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ko||(Ko={}));function vg(t,s){let{target:n,replace:i,state:r,preventScrollReset:a,relative:l,viewTransition:o}=s===void 0?{}:s,c=Yp(),u=Ss(),y=Tm(t,{relative:l});return B.useCallback(f=>{if(hg(f,n)){f.preventDefault();let h=i!==void 0?i:Ti(u)===Ti(y);c(t,{replace:h,state:r,preventScrollReset:a,relative:l,viewTransition:o})}},[u,c,y,i,r,n,t,a,l,o])}const bg=()=>{const{pathname:t}=Ss();return B.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[t]),null},d=t=>`/${t.startsWith("/")?t.slice(1):t}`,wg=d("assets/images/Hrify-dark-bg.webp"),Fs={services:[{category:"Design & Development",items:[{label:"Web Design",subItems:[{to:"/businessweb",label:"Business Web Design"},{to:"/resweb",label:"Responsive Web Design"},{to:"/cmsweb",label:"CMS Web Design"}]},{to:"/webmaintenance",label:"Web Maintenance"},{label:"Web Application",subItems:[{to:"/customweb",label:"Custom Web Applications"},{to:"/ecommerceweb",label:"E-Commerce Web Solutions"},{to:"/matrimonyweb",label:"Matrimony Web Solutions"}]},{to:"/mobileapp",label:"Mobile Application"}]},{category:"Business Solutions",items:[{to:"/domains",label:"Domains, Hosting and Cloud Solutions"},{to:"/personalemail",label:"Personal and Enterprise Email Solutions"},{to:"/googlework",label:"Google Work Partner"},{to:"/emailcampaign",label:"Email Campaign Management Solutions"},{to:"/awsimpl",label:"AWS Services Implementations"},{to:"/designbranding",label:"Design and Branding Solutions"},{to:"/digitalmarketing",label:"Digital Marketing & Social Media Solutions"},{to:"/marketting",label:"Marketing Support Services"},{to:"/webaudit",label:"Website Auditing Consulting Services"}]},{category:"Networking Solutions",items:[{to:"/systemintegration",label:"System Integration & Maintenance"},{to:"/infrastructure",label:"Infrastructure Management"},{to:"/serverstorage",label:"Server & Storage"},{to:"/networksecurity",label:"Network Security"},{to:"/structuredcabling",label:"Structured Cabling"},{to:"/cloudnative",label:"Cloud Native Solutions"},{to:"/workplace",label:"Workplace Surveillance"}]},{category:"Cybersecurity",items:[{to:"/ciam",label:"CIAM"},{to:"/workforceidentity",label:"Workforce Identity"},{to:"/securityengineering",label:"Security Engineering"},{to:"/zerotrustarchitecture",label:"Zero Trust Architecture"},{to:"/governanceriskmanagementcompliance",label:"Governance Risk Management & Compliance"},{to:"/cyberdefenseinvestigation",label:"Cyber Defense & Investigation"},{to:"/cyberadvisory",label:"Cyber Advisory"},{to:"/cyberresilience",label:"Cyber Resilience"}]},{category:"Blockchain",items:[{to:"/distributedtrust",label:"Distributed Trust"},{to:"/ethereum",label:"Ethereum"},{to:"/hyperledger",label:"Hyperledger"},{to:"/dapps",label:"dApps"},{to:"/nft",label:"NFT"},{to:"/ipfs",label:"IPFS"}]},{category:"Enterprise",items:[{to:"/enterprise",label:"Enterprise"}]},{category:"Managed Services",items:[{to:"/securitymanagement",label:"Security Management"},{to:"/sitereliability",label:"Site Reliability"},{to:"/monitoringmaintenance",label:"Monitoring & Maintenance"},{to:"/helpdesk",label:"Help Desk / End User Compute"},{to:"/vendormanagement",label:"Vendor Management"}]},{category:"AI & ML",items:[{to:"/internetofthings",label:"internet of things(iot)"},{to:"/ai_nlp",label:"Ai & Nlp"},{to:"/computervision",label:"computer vision"},{to:"/ml_mlops",label:"ML,ML Ops"},{to:"/datascience",label:"Data Science"},{to:"/analytics",label:"Analytics"},{to:"/reports",label:"Reports"},{to:"/bigdata_datalake",label:"Big Data ,Data Lake"},{to:"/datafabric",label:"Data Fabric"}]},{category:"Quality Engineering",items:[{to:"/qa_consulting_strategy",label:"QA Consulting & Strategy"},{to:"/agile_testing",label:"Agile Testing"},{to:"/independent_certification",label:"Independent Certification"},{to:"/managed_testing_services",label:"Managed Testing Services"}]}],products:[{to:"/sonachala",label:"Sonachala"}],careers:[{to:"/careers",label:"Careers"},{to:"/internship",label:"Internship"},{to:"/referral-program",label:"Referral Program"}]},Ng=()=>{const[t,s]=B.useState(!1),[n,i]=B.useState(!1),[r,a]=B.useState([]),[l,o]=B.useState([]),[c,u]=B.useState([]),y=Ss();B.useEffect(()=>{const p=x(()=>{s(window.scrollY>100)},100);return window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)},[]),B.useEffect(()=>{const m=p=>{p.key==="Escape"&&h()};return n&&window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[n]);const f=()=>{i(!n),a([]),o([]),u([])},h=()=>{i(!1),a([]),o([]),u([])},b=m=>{a(p=>p.includes(m)?p.filter(v=>v!==m):[...p,m])},w=m=>{o(p=>p.includes(m)?p.filter(v=>v!==m):[...p,m])},N=m=>{u(p=>p.includes(m)?p.filter(v=>v!==m):[...p,m])},j=m=>y.pathname===m?"active":"",x=(m,p)=>{let v;return(...S)=>{clearTimeout(v),v=setTimeout(()=>m(...S),p)}};return e.jsxs("header",{className:`modern-navbar-header ${t?"scrolled":""}`,children:[e.jsx("nav",{className:"navbar navbar-expand-lg navbar-light modern-navbar",children:e.jsxs("div",{className:"container-fluid",children:[e.jsx(g,{className:"navbar-brand",to:"/",onClick:h,children:e.jsx("img",{src:wg,alt:"Hrify Digital",style:{marginLeft:"100px",height:"60px",width:"auto"}})}),e.jsx("button",{className:`navbar-toggler ${n?"active":""}`,type:"button",onClick:f,"aria-controls":"navbarNav","aria-expanded":n,"aria-label":"Toggle navigation",children:e.jsx("span",{className:"navbar-toggler-icon"})}),e.jsx("div",{className:"collapse navbar-collapse desktop-menu",id:"navbarNav",children:e.jsxs("ul",{className:"navbar-nav ms-auto",children:[e.jsx("li",{className:"nav-item",children:e.jsx(g,{className:`nav-link ${j("/")}`,to:"/",onClick:h,children:"Home"})}),e.jsx("li",{className:"nav-item",children:e.jsx(g,{className:`nav-link ${j("/about")}`,to:"/about",onClick:h,children:"About"})}),e.jsxs("li",{className:"nav-item dropdown",children:[e.jsx("a",{className:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Services"}),e.jsxs("ul",{className:"dropdown-menu services-dropdown",children:[e.jsxs("li",{className:"dropdown-submenu",children:[e.jsx("a",{className:"dropdown-item dropdown-toggle",href:"#","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Design & Development"}),e.jsxs("ul",{className:"dropdown-menu",children:[e.jsxs("li",{className:"dropdown-submenu",children:[e.jsx("a",{className:"dropdown-item dropdown-toggle",href:"#","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Web Design"}),e.jsxs("ul",{className:"dropdown-menu",children:[e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/businessweb")}`,to:"/businessweb",onClick:h,children:"Business Web Design"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/resweb")}`,to:"/resweb",onClick:h,children:"Responsive Web Design"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/cmsweb")}`,to:"/cmsweb",onClick:h,children:"CMS Web Design"})})]})]}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/webmaintenance")}`,to:"/webmaintenance",onClick:h,children:"Web Maintenance"})}),e.jsxs("li",{className:"dropdown-submenu",children:[e.jsx("a",{className:"dropdown-item dropdown-toggle",href:"#","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Web Application"}),e.jsxs("ul",{className:"dropdown-menu",children:[e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/customweb")}`,to:"/customweb",onClick:h,children:"Custom Web Applications"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/ecommerceweb")}`,to:"/ecommerceweb",onClick:h,children:"E-Commerce Web Solutions"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/matrimonyweb")}`,to:"/matrimonyweb",onClick:h,children:"Matrimony Web Solutions"})})]})]}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/mobileapp")}`,to:"/mobileapp",onClick:h,children:"Mobile Application"})})]})]}),e.jsxs("li",{className:"dropdown-submenu",children:[e.jsx("a",{className:"dropdown-item dropdown-toggle",href:"#","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Business Solutions"}),e.jsxs("ul",{className:"dropdown-menu",children:[e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/domains")}`,to:"/domains",onClick:h,children:"Domains, Hosting and Cloud Solutions"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/personalemail")}`,to:"/personalemail",onClick:h,children:"Personal and Enterprise Email Solutions"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/googlework")}`,to:"/googlework",onClick:h,children:"Google Work Partner"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/emailcampaign")}`,to:"/emailcampaign",onClick:h,children:"Email Campaign Management Solutions"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/awsimpl")}`,to:"/awsimpl",onClick:h,children:"AWS Services Implementations"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/designbranding")}`,to:"/designbranding",onClick:h,children:"Design and Branding Solutions"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/digitalmarketing")}`,to:"/digitalmarketing",onClick:h,children:"Digital Marketing & Social Media Solutions"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/marketting")}`,to:"/marketting",onClick:h,children:"Marketing Support Services"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/webaudit")}`,to:"/webaudit",onClick:h,children:"Website Auditing Consulting Services"})})]})]}),e.jsxs("li",{className:"dropdown-submenu",children:[e.jsx("a",{className:"dropdown-item dropdown-toggle",href:"#","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Networking Solutions"}),e.jsxs("ul",{className:"dropdown-menu",children:[e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/systemintegration")}`,to:"/systemintegration",onClick:h,children:"System Integration & Maintenance"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/infrastructure")}`,to:"/infrastructure",onClick:h,children:"Infrastructure Management"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/serverstorage")}`,to:"/serverstorage",onClick:h,children:"Server & Storage"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/networksecurity")}`,to:"/networksecurity",onClick:h,children:"Network Security"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/structuredcabling")}`,to:"/structuredcabling",onClick:h,children:"Structured Cabling"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/cloudnative")}`,to:"/cloudnative",onClick:h,children:"Cloud Native Solutions"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/workplace")}`,to:"/workplace",onClick:h,children:"Workplace Surveillance"})})]})]}),e.jsxs("li",{className:"dropdown-submenu",children:[e.jsx("a",{className:"dropdown-item dropdown-toggle",href:"#","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Cybersecurity"}),e.jsxs("ul",{className:"dropdown-menu",children:[e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/ciam")}`,to:"/ciam",onClick:h,children:"CIAM"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/workforceidentity")}`,to:"/workforceidentity",onClick:h,children:"Workforce Identity"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/securityengineering")}`,to:"/securityengineering",onClick:h,children:"Security Engineering"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/zerotrustarchitecture")}`,to:"/zerotrustarchitecture",onClick:h,children:"Zero Trust Architecture"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/governanceriskmanagementcompliance")}`,to:"/governanceriskmanagementcompliance",onClick:h,children:"Governance Risk Management & Compliance"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/cyberdefenseinvestigation")}`,to:"/cyberdefenseinvestigation",onClick:h,children:"Cyber Defense & Investigation"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/cyberadvisory")}`,to:"/cyberadvisory",onClick:h,children:"Cyber Advisory"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/cyberresilience")}`,to:"/cyberresilience",onClick:h,children:"Cyber Resilience"})})]})]}),e.jsxs("li",{className:"dropdown-submenu",children:[e.jsx("a",{className:"dropdown-item dropdown-toggle",href:"#","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Blockchain"}),e.jsxs("ul",{className:"dropdown-menu",children:[e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/distributedtrust")}`,to:"/distributedtrust",onClick:h,children:"Distributed Trust"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/ethereum")}`,to:"/ethereum",onClick:h,children:"Ethereum"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/hyperledger")}`,to:"/hyperledger",onClick:h,children:"Hyperledger"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/dapps")}`,to:"/dapps",onClick:h,children:"dApps"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/nft")}`,to:"/nft",onClick:h,children:"NFT"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/ipfs")}`,to:"/ipfs",onClick:h,children:"IPFS"})})]})]}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/enterprise")}`,to:"/enterprise",onClick:h,children:"Enterprise"})}),e.jsxs("li",{className:"dropdown-submenu",children:[e.jsx("a",{className:"dropdown-item dropdown-toggle",href:"#","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Managed Services"}),e.jsxs("ul",{className:"dropdown-menu",children:[e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/securitymanagement")}`,to:"/securitymanagement",onClick:h,children:"Security Management"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/sitereliability")}`,to:"/sitereliability",onClick:h,children:"Site Reliability"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/monitoringmaintenance")}`,to:"/monitoringmaintenance",onClick:h,children:"Monitoring & Maintenance"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/helpdesk")}`,to:"/helpdesk",onClick:h,children:"Help Desk / End User Compute"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/vendormanagement")}`,to:"/vendormanagement",onClick:h,children:"Vendor Management"})})]})]}),e.jsxs("li",{className:"dropdown-submenu",children:[e.jsx("a",{className:"dropdown-item dropdown-toggle",href:"#","data-bs-toggle":"dropdown","aria-expanded":"false",children:"AI & ML"}),e.jsxs("ul",{className:"dropdown-menu",children:[e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/internetofthings")}`,to:"/internetofthings",onClick:h,children:"internet of things(iot)"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/ai_nlp")}`,to:"/ai_nlp",onClick:h,children:"Ai & Nlp"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/computervision")}`,to:"/computervision",onClick:h,children:"computer vision"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/ml_mlops")}`,to:"/ml_mlops",onClick:h,children:"ML,ML Ops"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/datascience")}`,to:"/datascience",onClick:h,children:"Data Science"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/analytics")}`,to:"/analytics",onClick:h,children:"Analytics"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/reports")}`,to:"/reports",onClick:h,children:"Reports"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/bigdata_datalake")}`,to:"/bigdata_datalake",onClick:h,children:"Big Data ,Data Lake"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/datafabric")}`,to:"/datafabric",onClick:h,children:"Data Fabric"})})]})]}),e.jsxs("li",{className:"dropdown-submenu",children:[e.jsx("a",{className:"dropdown-item dropdown-toggle",href:"#","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Quality Engineering"}),e.jsxs("ul",{className:"dropdown-menu",children:[e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/qa_consulting_strategy")}`,to:"/qa_consulting_strategy",onClick:h,children:"QA Consulting & Strategy"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/agile_testing")}`,to:"/agile_testing",onClick:h,children:"Agile Testing"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/independent_certification")}`,to:"/independent_certification",onClick:h,children:"Independent Certification"})}),e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j("/managed_testing_services")}`,to:"/managed_testing_services",onClick:h,children:"Managed Testing Services"})})]})]})]})]}),e.jsxs("li",{className:"nav-item dropdown",children:[e.jsx("a",{className:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Products"}),e.jsx("ul",{className:"dropdown-menu",children:Fs.products.map(m=>e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j(m.to)}`,to:m.to,onClick:h,children:m.label})},m.to))})]}),e.jsxs("li",{className:"nav-item dropdown",children:[e.jsx("a",{className:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Careers"}),e.jsx("ul",{className:"dropdown-menu",children:Fs.careers.map(m=>e.jsx("li",{children:e.jsx(g,{className:`dropdown-item ${j(m.to)}`,to:m.to,onClick:h,children:m.label})},m.to))})]}),e.jsx("li",{className:"nav-item",children:e.jsx(g,{className:"btn btn-primary contact-btn",to:"/contact",onClick:h,children:"Contact Us"})})]})})]})}),e.jsx("div",{className:`mobile-menu-overlay ${n?"active":""}`,onClick:h,children:e.jsxs("div",{className:"mobile-menu",onClick:m=>m.stopPropagation(),children:[e.jsx("button",{className:"close-btn",onClick:h,"aria-label":"Close menu",children:"×"}),e.jsxs("ul",{className:"mobile-nav",children:[e.jsx("li",{children:e.jsx(g,{className:j("/"),to:"/",onClick:h,children:"Home"})}),e.jsx("li",{children:e.jsx(g,{className:j("/about"),to:"/about",onClick:h,children:"About"})}),e.jsxs("li",{className:`mobile-dropdown ${r.includes("services")?"active":""}`,children:[e.jsx("button",{className:"mobile-toggle",onClick:()=>b("services"),onKeyDown:m=>{(m.key==="Enter"||m.key===" ")&&b("services")},role:"button",tabIndex:0,"aria-expanded":r.includes("services"),"aria-controls":"services-submenu",children:"Services"}),e.jsx("ul",{className:"mobile-submenu",id:"services-submenu",children:Fs.services.map((m,p)=>e.jsxs("li",{className:`mobile-category ${l.includes(m.category)?"active":""}`,children:[e.jsx("button",{className:"mobile-category-toggle",onClick:()=>w(m.category),onKeyDown:v=>{(v.key==="Enter"||v.key===" ")&&w(m.category)},role:"button",tabIndex:0,"aria-expanded":l.includes(m.category),"aria-controls":`category-${p}-submenu`,children:m.category}),e.jsx("ul",{className:"mobile-sub-submenu",id:`category-${p}-submenu`,children:m.items.map((v,S)=>"to"in v?e.jsx("li",{children:e.jsx(g,{className:j(v.to),to:v.to,onClick:h,children:v.label})},v.to):e.jsxs("li",{className:`mobile-sub-category ${c.includes(v.label)?"active":""}`,children:[e.jsx("button",{className:"mobile-sub-category-toggle",onClick:()=>N(v.label),onKeyDown:z=>{(z.key==="Enter"||z.key===" ")&&N(v.label)},role:"button",tabIndex:0,"aria-expanded":c.includes(v.label),"aria-controls":`sub-category-${p}-${S}-submenu`,children:v.label}),e.jsx("ul",{className:"mobile-sub-sub-submenu",id:`sub-category-${p}-${S}-submenu`,children:v.subItems.map(z=>e.jsx("li",{children:e.jsx(g,{className:j(z.to),to:z.to,onClick:h,children:z.label})},z.to))})]},S))})]},p))})]}),e.jsxs("li",{className:`mobile-dropdown ${r.includes("products")?"active":""}`,children:[e.jsx("button",{className:"mobile-toggle",onClick:()=>b("products"),onKeyDown:m=>{(m.key==="Enter"||m.key===" ")&&b("products")},role:"button",tabIndex:0,"aria-expanded":r.includes("products"),"aria-controls":"products-submenu",children:"Products"}),e.jsx("ul",{className:"mobile-submenu",id:"products-submenu",children:Fs.products.map(m=>e.jsx("li",{children:e.jsx(g,{className:j(m.to),to:m.to,onClick:h,children:m.label})},m.to))})]}),e.jsxs("li",{className:`mobile-dropdown ${r.includes("careers")?"active":""}`,children:[e.jsx("button",{className:"mobile-toggle",onClick:()=>b("careers"),onKeyDown:m=>{(m.key==="Enter"||m.key===" ")&&b("careers")},role:"button",tabIndex:0,"aria-expanded":r.includes("careers"),"aria-controls":"careers-submenu",children:"Careers"}),e.jsx("ul",{className:"mobile-submenu",id:"careers-submenu",children:Fs.careers.map(m=>e.jsx("li",{children:e.jsx(g,{className:j(m.to),to:m.to,onClick:h,children:m.label})},m.to))})]}),e.jsx("li",{children:e.jsx(g,{className:j("/contact"),to:"/contact",onClick:h,children:"Contact Us"})})]})]})})]})};var Pm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Xo=Ge.createContext&&Ge.createContext(Pm),kg=["attr","size","title"];function Sg(t,s){if(t==null)return{};var n,i,r=Bg(t,s);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],s.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function Bg(t,s){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(s.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function Fi(){return Fi=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Fi.apply(null,arguments)}function Zo(t,s){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);s&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Li(t){for(var s=1;s<arguments.length;s++){var n=arguments[s]!=null?arguments[s]:{};s%2?Zo(Object(n),!0).forEach(function(i){Dg(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Zo(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Dg(t,s,n){return(s=Cg(s))in t?Object.defineProperty(t,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[s]=n,t}function Cg(t){var s=zg(t,"string");return typeof s=="symbol"?s:s+""}function zg(t,s){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,s);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(t)}function Hm(t){return t&&t.map((s,n)=>Ge.createElement(s.tag,Li({key:n},s.attr),Hm(s.child)))}function Nt(t){return s=>Ge.createElement(Mg,Fi({attr:Li({},t.attr)},s),Hm(t.child))}function Mg(t){var s=n=>{var{attr:i,size:r,title:a}=t,l=Sg(t,kg),o=r||n.size||"1em",c;return n.className&&(c=n.className),t.className&&(c=(c?c+" ":"")+t.className),Ge.createElement("svg",Fi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,l,{className:c,style:Li(Li({color:t.color||n.color},n.style),t.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),a&&Ge.createElement("title",null,a),t.children)};return Xo!==void 0?Ge.createElement(Xo.Consumer,null,n=>s(n)):s(Pm)}function Eg(t){return Nt({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(t)}function Wg(t){return Nt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(t)}function Ig(t){return Nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(t)}function Ag(t){return Nt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(t)}function Tg(t){return Nt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(t)}function Fg(t){return Nt({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(t)}function Lg(t){return Nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(t)}function Rg(t){return Nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(t)}const Pg=d("assets/images/Hrify-white-bg.webp"),Hg=()=>{const t={color:"#aaa",textDecoration:"none",display:"inline-block",width:"100%",transition:"0.3s"},s=(i,r)=>{i.target.style.color=r?"#fff":"#aaa",i.target.style.transform=r?"translateX(5px)":"translateX(0px)"},n=(i,r)=>{i.target.style.color=r?"#fff":"#aaa",i.target.style.transform=r?"translateY(-4px)":"translateY(0)"};return e.jsx("footer",{style:{background:"#000",color:"#aaa",padding:"60px 0 20px"},children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-12 col-md-4 mb-4",children:[e.jsx("h5",{style:{color:"#fff",marginBottom:"20px"},children:"Quick Links"}),e.jsxs("ul",{style:{listStyle:"none",padding:0},children:[e.jsx("li",{children:e.jsx(g,{to:"/",style:t,onMouseEnter:i=>s(i,!0),onMouseLeave:i=>s(i,!1),children:"Home"})}),e.jsx("li",{children:e.jsx(g,{to:"/about",style:t,onMouseEnter:i=>s(i,!0),onMouseLeave:i=>s(i,!1),children:"About"})}),e.jsx("li",{children:e.jsx(g,{to:"/contact",style:t,onMouseEnter:i=>s(i,!0),onMouseLeave:i=>s(i,!1),children:"Contact"})}),e.jsx("li",{children:e.jsx(g,{to:"/careers",style:t,onMouseEnter:i=>s(i,!0),onMouseLeave:i=>s(i,!1),children:"Careers"})}),e.jsx("li",{children:e.jsx(g,{to:"/clients",style:t,onMouseEnter:i=>s(i,!0),onMouseLeave:i=>s(i,!1),children:"Clients"})})]})]}),e.jsxs("div",{className:"col-12 col-md-4 mb-4 text-md-center",children:[e.jsx("h5",{style:{color:"#fff",marginBottom:"20px"},children:"Services"}),e.jsxs("ul",{style:{listStyle:"none",padding:0},children:[e.jsx("li",{children:e.jsx(g,{to:"/resweb",style:t,onMouseEnter:i=>s(i,!0),onMouseLeave:i=>s(i,!1),children:"Responsive Web Design"})}),e.jsx("li",{children:e.jsx(g,{to:"/businessweb",style:t,onMouseEnter:i=>s(i,!0),onMouseLeave:i=>s(i,!1),children:"Web Design"})}),e.jsx("li",{children:e.jsx(g,{to:"/webmaintenance",style:t,onMouseEnter:i=>s(i,!0),onMouseLeave:i=>s(i,!1),children:"Web Maintenance"})})]})]}),e.jsxs("div",{className:"col-12 col-md-4 mb-4",style:{display:"flex",flexDirection:"column",alignItems:"flex-end"},children:[e.jsx("img",{src:Pg,alt:"HRify Logo",style:{height:"65px",marginBottom:"15px"}}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"8px"},children:[e.jsx(Rg,{style:{fontSize:"14px"}}),e.jsx("a",{href:"mailto:hrifydigital@gmail.com",style:{color:"#aaa",textDecoration:"none"},children:"hrifydigital@gmail.com"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"10px"},children:[e.jsx(Lg,{style:{fontSize:"14px"}}),e.jsx("a",{href:"tel:+918438438413",style:{color:"#aaa",textDecoration:"none"},children:"+91 8438438413"})]}),e.jsxs("div",{style:{display:"flex",gap:"15px",fontSize:"18px"},children:[[Fg,Eg,Ig,Ag,Tg].map((i,r)=>e.jsx("a",{href:"#",style:{color:"#aaa"},onMouseEnter:a=>n(a,!0),onMouseLeave:a=>n(a,!1),children:e.jsx(i,{})},r)),e.jsx("a",{href:`https://api.whatsapp.com/send?phone=${encodeURIComponent("+918438438413")}&text=${encodeURIComponent("Hello, I need your services")}`,style:{color:"#aaa"},onMouseEnter:i=>n(i,!0),onMouseLeave:i=>n(i,!1),children:e.jsx(Wg,{})})]})]})]}),e.jsx("div",{style:{textAlign:"center",marginTop:"40px",fontSize:"14px",color:"#666"},children:"© 2026 HRify Digital. All rights reserved."})]})})},Jo=d("assets/images/HomeSlider/AI&ML.png"),ec=d("assets/images/HomeSlider/BlockChain.png"),tc=d("assets/images/HomeSlider/BusinessSolutions.png"),sc=d("assets/images/HomeSlider/CyberSecurity.png"),nc=d("assets/images/HomeSlider/Design&Development.png"),ic=d("assets/images/HomeSlider/Enterprise.png"),rc=d("assets/images/HomeSlider/ManagedService.png"),ac=d("assets/images/HomeSlider/NetworkingSolutions.png"),lc=d("assets/images/HomeSlider/QualityEngineering.png"),Og=d("assets/images/Talent/img3-(2).webp"),_g=d("assets/images/Talent/im7.webp");d("assets/images/Talent/icon3-(2).webp");d("assets/images/Talent/icon4-(2).webp");d("assets/images/Talent/icon5-(2).webp");d("assets/images/Talent/icon6-(2).webp");const Ug=d("assets/images/OurDigital.png"),$g=()=>(B.useEffect(()=>{var y,f;const t=document.querySelector(".slides");if(!t)return;const s=document.querySelectorAll(".slide").length,n=100;let i=0,r;const a=h=>{t.style.transition="transform 0.5s ease",t.style.transform=`translateX(-${h*n}%)`,i=h,h>=s/2&&setTimeout(()=>{t.style.transition="none",t.style.transform="translateX(0)",i=0},500)},l=()=>{a(i+1)},o=()=>{i>0?a(i-1):(t.style.transition="none",t.style.transform=`translateX(-${(s/2-1)*n}%)`,i=s/2-1,setTimeout(()=>{t.style.transition="transform 0.5s ease",a(i-1)},0))},c=()=>{r=setInterval(l,6e3)},u=()=>{clearInterval(r)};return(y=document.querySelector(".next"))==null||y.addEventListener("click",()=>{l(),u(),c()}),(f=document.querySelector(".prev"))==null||f.addEventListener("click",()=>{o(),u(),c()}),c(),()=>{u()}},[]),e.jsxs("div",{children:[e.jsxs("div",{className:"slider",children:[e.jsxs("div",{className:"slides",children:[e.jsx("div",{className:"slide",children:e.jsx("img",{src:nc,alt:"Design & Development"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:tc,alt:"Business Solutions"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:sc,alt:"Cyber Security"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:ac,alt:"Networking Solutions"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:ec,alt:"Block Chain"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:ic,alt:"Enterprise"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:rc,alt:"Managed Service"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:Jo,alt:"AI & ML"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:lc,alt:"Quality Engineering"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:nc,alt:"Design & Development"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:tc,alt:"Business Solutions"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:sc,alt:"Cyber Security"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:ac,alt:"Networking Solutions"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:ec,alt:"Block Chain"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:ic,alt:"Enterprise"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:rc,alt:"Managed Service"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:Jo,alt:"AI & ML"})}),e.jsx("div",{className:"slide",children:e.jsx("img",{src:lc,alt:"Quality Engineering"})})]}),e.jsx("button",{className:"nav-button prev",children:"❮"}),e.jsx("button",{className:"nav-button next",children:"❯"})]}),e.jsx("div",{className:"container p-4",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsxs("div",{className:"col-12 col-lg-8",children:[e.jsx("h3",{className:"fw-bolder",style:{color:"#1B8DBB"},children:"Software Development"})," ",e.jsx("br",{}),e.jsx("p",{style:{fontFamily:"urbanist"},children:"Our Software Development Services turn your ideas into innovative, functional, and scalable solutions tailored to your business needs. We provide end-to-end services, including requirements analysis, design, development, testing, and deployment, ensuring a seamless process. Using the latest technologies and agile methodologies, we deliver secure, efficient, and user-friendly software. Whether you need custom applications, system integration, or software enhancements, our solutions are designed to streamline operations, boost productivity, and drive business success."})]}),e.jsx("div",{className:"col-12 col-lg-4",children:e.jsx("img",{className:"img-fluid",src:Og,alt:""})})]})}),e.jsx("div",{className:"container mt-5",children:e.jsx("img",{src:Ug,alt:"Our Digital Services",className:"img-fluid"})}),e.jsxs("div",{className:"container p-lg-5 p-3",children:[e.jsx("h3",{className:"text-center fw-bolder",style:{color:"#1B8DBB"},children:"Why Choose Us?"}),e.jsxs("div",{className:"row align-items-center",children:[e.jsxs("div",{className:"col-12 col-lg-8",children:[e.jsxs("p",{className:"fw-bolder",style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",color:"#1B8DBB"}}),"  Commitment to core values and mission empowers clients with effective solutions."]}),e.jsxs("p",{className:"fw-bolder",style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",color:"#1B8DBB"}}),"   Maintaining client trust and delivering exceptional results consistently."]}),e.jsxs("p",{className:"fw-bolder",style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",color:"#1B8DBB"}}),"  Skilled experts and established processes ensure efficient business support."]}),e.jsxs("p",{className:"fw-bolder",style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",color:"#1B8DBB"}}),"  Prioritizing clients' technological investments for optimal outcomes."]}),e.jsxs("p",{className:"fw-bolder",style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",color:"#1B8DBB"}}),"  Leading software development company in Tiruvannamalai, dedicated to client satisfaction."]})]}),e.jsx("div",{className:"col-12 col-lg-4 text-center",children:e.jsx("img",{className:"img-fluid col-9 text-end",src:_g,alt:""})})]})]})]})),Vg=d("assets/images/About.png"),oc=d("assets/images/biggest.webp"),On=d("assets/images/clientlogo/cl1.jpeg"),_n=d("assets/images/clientlogo/cl2.jpeg"),Un=d("assets/images/clientlogo/cl3.jpeg"),$n=d("assets/images/clientlogo/cl4.jpeg"),Vn=d("assets/images/clientlogo/cl5.jpeg"),qn=d("assets/images/clientlogo/cl6.jpeg"),Yn=d("assets/images/clientlogo/cl7.jpeg"),Gn=d("assets/images/clientlogo/cl8.jpeg"),Qn=d("assets/images/clientlogo/cl9.jpeg"),Kn=d("assets/images/clientlogo/cl10.jpeg"),Xn=d("assets/images/clientlogo/cl11.jpeg"),cc=d("assets/images/clientlogo/cl12.jpeg"),dc=d("assets/images/clientlogo/cl13.jpeg"),mc=d("assets/images/clientlogo/cl14.jpeg"),uc=d("assets/images/clientlogo/cl15.jpeg"),hc=d("assets/images/clientlogo/cl16.jpeg"),pc=d("assets/images/clientlogo/cl17.jpeg"),qg=d("assets/images/about-banner.webp"),Yg=()=>e.jsxs("div",{children:[e.jsx("div",{className:"slider",children:e.jsx("div",{className:"slides",children:e.jsx("div",{className:"slide",children:e.jsx("img",{src:Vg,alt:"About Banner"})})})}),e.jsx("section",{className:"py-5 bg-white",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"row align-items-center mb-5",children:[e.jsx("div",{className:"col-12 col-lg-6",children:e.jsx("img",{className:"img-fluid",src:qg,alt:"About Hrify Digital"})}),e.jsxs("div",{className:"col-12 col-lg-6",children:[e.jsx("h2",{style:{color:"#1B8DBB"},className:"fw-bold mb-4",children:"About Hrify Digital"}),e.jsx("p",{className:"text-muted",children:"Hrify Digital is a leading provider of comprehensive IT services and solutions. With years of experience in the industry, we have established ourselves as a trusted partner for businesses seeking innovative technology solutions."}),e.jsx("p",{className:"text-muted",children:"Our team of skilled professionals brings together expertise in software development, web design, cloud computing, cybersecurity, and digital transformation. We are committed to delivering high-quality services that drive business growth and success."})]})]}),e.jsxs("div",{className:"row align-items-center mb-5",children:[e.jsxs("div",{className:"col-12 col-lg-6 order-lg-2",children:[e.jsx("h3",{style:{color:"#1B8DBB"},className:"fw-bold mb-4",children:"Our Mission"}),e.jsx("p",{className:"text-muted",children:"To empower businesses with cutting-edge technology solutions that enhance productivity, security, and competitiveness in the digital age."}),e.jsx("p",{className:"text-muted",children:"We strive to deliver innovative IT services that not only meet current business needs but also anticipate future challenges and opportunities."})]}),e.jsx("div",{className:"col-12 col-lg-6 order-lg-1",children:e.jsx("img",{className:"img-fluid",src:oc,alt:"Mission"})})]}),e.jsxs("div",{className:"row align-items-center",children:[e.jsxs("div",{className:"col-12 col-lg-6",children:[e.jsx("h3",{style:{color:"#1B8DBB"},className:"fw-bold mb-4",children:"Our Vision"}),e.jsx("p",{className:"text-muted",children:"To be the premier IT solutions provider, recognized for excellence in service delivery, technological innovation, and customer satisfaction."}),e.jsx("p",{className:"text-muted",children:"We envision a future where businesses leverage technology seamlessly to achieve their goals and create lasting value for their stakeholders."})]}),e.jsx("div",{className:"col-12 col-lg-6",children:e.jsx("img",{className:"img-fluid",src:oc,alt:"Vision"})})]})]})}),e.jsxs("section",{className:"text-center py-5",style:{backgroundColor:"#E0F7FF"},children:[e.jsx("h5",{className:"fw-bold mb-4",style:{color:"#1B8DBB",fontSize:"30px"},children:"Our Valued Clients"}),e.jsx("div",{className:"marquee-container mb-3",children:e.jsxs("div",{className:"marquee-track marquee-track-right",children:[[On,_n,Un,$n,Vn,qn,Yn,Gn,Qn,Kn,Xn,cc,dc,mc,uc,hc,pc].map((t,s)=>e.jsx("div",{className:"marquee-item",children:e.jsx("img",{src:t,alt:`partner-${s}`,className:"marquee-logo"})},`partner-a-${s}`)),[On,_n,Un,$n,Vn,qn,Yn,Gn,Qn,Kn,Xn,cc,dc,mc,uc,hc,pc].map((t,s)=>e.jsx("div",{className:"marquee-item",children:e.jsx("img",{src:t,alt:`partner-dup-${s}`,className:"marquee-logo"})},`partner-b-${s}`))]})}),e.jsx("div",{className:"marquee-container",children:e.jsxs("div",{className:"marquee-track marquee-track-left",children:[[Xn,Kn,Qn,Gn,Yn,qn,Vn,$n,Un,_n,On].map((t,s)=>e.jsx("div",{className:"marquee-item",children:e.jsx("img",{src:t,alt:`partner-rev-${s}`,className:"marquee-logo"})},`partner-c-${s}`)),[Xn,Kn,Qn,Gn,Yn,qn,Vn,$n,Un,_n,On].map((t,s)=>e.jsx("div",{className:"marquee-item",children:e.jsx("img",{src:t,alt:`partner-rev-dup-${s}`,className:"marquee-logo"})},`partner-d-${s}`))]})})]}),e.jsx("section",{className:"py-5 bg-light",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{style:{color:"#1B8DBB"},className:"text-center fw-bold mb-5",children:"Why Choose Us?"}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"text-center",children:[e.jsx("i",{className:"fas fa-users fa-3x mb-3",style:{color:"#1B8DBB"}}),e.jsx("h4",{className:"fw-bold mb-3",children:"Expert Team"}),e.jsx("p",{className:"text-muted",children:"Our certified professionals bring years of experience and expertise to every project."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"text-center",children:[e.jsx("i",{className:"fas fa-cogs fa-3x mb-3",style:{color:"#1B8DBB"}}),e.jsx("h4",{className:"fw-bold mb-3",children:"Customized Solutions"}),e.jsx("p",{className:"text-muted",children:"We tailor our services to meet your specific business requirements and goals."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"text-center",children:[e.jsx("i",{className:"fas fa-clock fa-3x mb-3",style:{color:"#1B8DBB"}}),e.jsx("h4",{className:"fw-bold mb-3",children:"Timely Delivery"}),e.jsx("p",{className:"text-muted",children:"We are committed to delivering projects on time without compromising quality."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"text-center",children:[e.jsx("i",{className:"fas fa-shield-alt fa-3x mb-3",style:{color:"#1B8DBB"}}),e.jsx("h4",{className:"fw-bold mb-3",children:"Security First"}),e.jsx("p",{className:"text-muted",children:"We prioritize the security and confidentiality of your data and systems."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"text-center",children:[e.jsx("i",{className:"fas fa-handshake fa-3x mb-3",style:{color:"#1B8DBB"}}),e.jsx("h4",{className:"fw-bold mb-3",children:"Reliable Partnership"}),e.jsx("p",{className:"text-muted",children:"We build long-term relationships based on trust, transparency, and mutual success."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"text-center",children:[e.jsx("i",{className:"fas fa-award fa-3x mb-3",style:{color:"#1B8DBB"}}),e.jsx("h4",{className:"fw-bold mb-3",children:"Proven Track Record"}),e.jsx("p",{className:"text-muted",children:"Our satisfied clients and successful projects speak to our commitment to excellence."})]})})]})]})}),e.jsx("section",{className:"py-5 text-white text-center",style:{backgroundColor:"#1B8DBB"},children:e.jsxs("div",{className:"container",children:[e.jsx("h3",{className:"fw-bold mb-3",children:"Ready to Transform Your Business?"}),e.jsx("p",{className:"mb-4",style:{textAlign:"center"},children:"Contact us today to discuss how we can help you achieve your technology goals."}),e.jsx("a",{href:"/contact",className:"btn btn-light btn-lg px-5 py-3 fw-bold",children:"Get In Touch"})]})})]}),Gg=d("assets/images/Contact.png"),Qg=d("assets/images/contactLogos/Frame 637.png"),Kg=d("assets/images/contactLogos/Frame 636.png");d("assets/images/contactLogos/Frame 638.png");const Xg=d("assets/images/contactLogos/Frame 639.png"),Zg=d("assets/images/contactLogos/Frame 641.png"),Jg=d("assets/images/contactLogos/Frame 640.png"),ex=()=>(B.useEffect(()=>{const t=document.getElementById("enquiry-link"),s=document.getElementById("popup-form"),n=document.getElementById("close-btn");if(t&&s&&n){const i=()=>{s.style.display="flex"},r=()=>{s.style.display="none"};t.addEventListener("click",l=>{l.preventDefault(),i()}),n.addEventListener("click",r),window.addEventListener("click",l=>{l.target===s&&r()}),document.getElementById("enquiry-form").addEventListener("submit",l=>{l.preventDefault(),alert("Form submitted!"),r()})}},[]),e.jsxs("div",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Gg,alt:"Contact Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container my-4 p-4",children:e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col-12 text-center",children:[e.jsx("h3",{style:{color:"#1B8DBB",fontWeight:700},className:"my-2",children:"Registered Office:"}),e.jsxs("h6",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-map-marker",style:{fontSize:"30px",WebkitBackgroundClip:"border-box",WebkitTextFillColor:"initial",color:"#1B8DBB"},"aria-hidden":"true"})," ","1794 Annai Parvathi Nagar, Opp. collectorate Office, Vengikkal, Tiruvannamalai - 606 604."]})]})})}),e.jsx("div",{className:"container p-4",children:e.jsxs("div",{className:"row align-items-center text-center",children:[e.jsxs("div",{className:"col-lg-5 col-12",children:[e.jsx("h3",{style:{color:"#1B8DBB"},children:"Phone"}),e.jsx("h6",{style:{color:"#686D76"},children:"8438438413"})]}),e.jsx("div",{className:"col-2 d-none d-lg-block",children:e.jsx("h1",{style:{color:"#686D76"},children:"|"})}),e.jsxs("div",{className:"col-lg-5 col-12",children:[e.jsx("h3",{style:{background:"linear-gradient(135deg, #1B8DBB 0%, #1B8DBB 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Email"}),e.jsx("h6",{children:"hrifydigital@gmail.com"}),e.jsx("h6",{children:"support@hrifydigital.com"})]})]})}),e.jsxs("div",{className:"container my-4 p-4",children:[e.jsxs("div",{className:"row text-center",children:[e.jsxs("div",{className:"col-6 d-flex flex-column align-items-center justify-content-center",style:{minHeight:"150px"},children:[e.jsx("img",{src:Kg,alt:"Payment Options",className:"img-fluid mb-2",style:{width:"60px",height:"60px",objectFit:"contain"}}),e.jsx("p",{style:{color:"#686D76",margin:0},children:"Payment Options"})]}),e.jsxs("div",{className:"col-6 d-flex flex-column align-items-center justify-content-center",style:{minHeight:"150px"},children:[e.jsx("a",{href:"careers.html",style:{textDecoration:"none",color:"inherit"},children:e.jsx("img",{src:Qg,alt:"Career",className:"img-fluid mb-2",style:{width:"60px",height:"60px",objectFit:"contain"}})}),e.jsx("p",{style:{color:"#686D76",margin:0},children:"Career"})]})]}),e.jsxs("div",{className:"row my-4 text-center",children:[e.jsxs("div",{className:"col-4 d-flex flex-column align-items-center justify-content-center",style:{minHeight:"150px"},children:[e.jsx("img",{src:Xg,alt:"Feedback",className:"img-fluid mb-2",style:{width:"60px",height:"60px",objectFit:"contain"}}),e.jsx("p",{style:{color:"#686D76",margin:0},children:"Feedback"})]}),e.jsxs("div",{className:"col-4 d-flex flex-column align-items-center justify-content-center",style:{minHeight:"150px"},children:[e.jsx("img",{src:Zg,alt:"Privacy Policy",className:"img-fluid mb-2",style:{width:"60px",height:"60px",objectFit:"contain"}}),e.jsx("p",{style:{color:"#686D76",margin:0},children:"Privacy Policy"})]}),e.jsxs("div",{className:"col-4 d-flex flex-column align-items-center justify-content-center",style:{minHeight:"150px"},children:[e.jsx("img",{src:Jg,alt:"FAQ",className:"img-fluid mb-2",style:{width:"60px",height:"60px",objectFit:"contain"}}),e.jsx("p",{style:{color:"#686D76",margin:0},children:"FAQ"})]})]})]}),e.jsx("div",{id:"popup-form",className:"popup-form",style:{display:"none"},children:e.jsxs("div",{className:"form-container",children:[e.jsx("span",{className:"close-btn",id:"close-btn",children:"×"}),e.jsx("h2",{children:"Enquiry Form"}),e.jsxs("form",{id:"enquiry-form",children:[e.jsx("label",{htmlFor:"name",children:"Name:"}),e.jsx("input",{type:"text",id:"name",name:"name",required:!0}),e.jsx("label",{htmlFor:"email",children:"Email:"}),e.jsx("input",{type:"email",id:"email",name:"email",required:!0}),e.jsx("label",{htmlFor:"mobile",children:"Mobile:"}),e.jsx("input",{type:"tel",id:"mobile",name:"mobile",required:!0}),e.jsx("label",{htmlFor:"company",children:"Your Company:"}),e.jsx("input",{type:"text",id:"company",name:"company",required:!0}),e.jsx("label",{htmlFor:"description",children:"Describe what you need:"}),e.jsx("textarea",{id:"description",name:"description",rows:4,required:!0}),e.jsx("button",{type:"submit",children:"Send"})]})]})}),e.jsx("style",{children:`
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
      `})]})),tx=()=>e.jsx("main",{children:e.jsxs("div",{className:"container p-4",children:[e.jsx("h1",{children:"Our Services"}),e.jsx("p",{children:"Explore our comprehensive IT services..."})]})}),sx=()=>e.jsx("main",{children:e.jsxs("div",{className:"container p-4",children:[e.jsx("h1",{children:"Our Clients"}),e.jsx("p",{children:"Trusted by many..."})]})}),nx=d("assets/images/Career.png"),ix=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:nx,alt:"Career Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
          `}),e.jsx("section",{className:"careers-hero",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Shape the Future of IT Excellence with Us"}),e.jsx("p",{style:{color:"black",fontWeight:"bold"},children:"At Hrify Digital, we're building innovative technology solutions and connecting top talent with exceptional opportunities. Join a team that values growth, collaboration, and meaningful impact in the world of technology."})]})}),e.jsxs("section",{className:"values-section",children:[e.jsx("h2",{className:"section-title",children:"Why Hrify Digital?"}),e.jsx("p",{className:"section-subtitle",children:"We believe in empowering our people to do their best work while making a meaningful difference in the tech industry."}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-12 col-md-4",children:e.jsxs("div",{className:"value-card",children:[e.jsx("div",{className:"icon-circle blue",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"#1976d2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})})}),e.jsx("h3",{children:"Collaborative Culture"}),e.jsx("p",{children:"Work alongside talented professionals in an inclusive, supportive environment where your ideas matter and teamwork drives innovation."})]})}),e.jsx("div",{className:"col-12 col-md-4",children:e.jsxs("div",{className:"value-card",children:[e.jsx("div",{className:"icon-circle green",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"#388e3c",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})})}),e.jsx("h3",{children:"Growth Opportunities"}),e.jsx("p",{children:"Continuous learning, skill development programs, and clear career progression paths to help you reach your full potential."})]})}),e.jsx("div",{className:"col-12 col-md-4",children:e.jsxs("div",{className:"value-card",children:[e.jsx("div",{className:"icon-circle purple",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"#7b1fa2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.663 17h4.674M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"})})}),e.jsx("h3",{children:"Innovation First"}),e.jsx("p",{children:"Tackle challenging problems using cutting-edge technology, creative thinking, and modern development practices."})]})})]})]}),e.jsx("section",{className:"application-section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Apply Today"}),e.jsx("p",{className:"section-subtitle",children:"We're excited to learn more about you and how you can contribute to our mission of delivering excellence in IT solutions."}),e.jsx("div",{className:"form-card",children:e.jsx("form",{children:e.jsxs("div",{className:"row g-4",children:[e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Full Name *"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"John Doe",required:!0})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Email Address *"}),e.jsx("input",{type:"email",className:"form-control",placeholder:"john.doe@example.com",required:!0})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Phone Number *"}),e.jsx("input",{type:"tel",className:"form-control",placeholder:"+1 (555) 123-4567",required:!0})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"LinkedIn Profile"}),e.jsx("input",{type:"url",className:"form-control",placeholder:"https://linkedin.com/in/johndoe"})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Position Interested In *"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"e.g., Senior React Developer",required:!0})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Preferred Location *"}),e.jsxs("select",{className:"form-select",required:!0,children:[e.jsx("option",{value:"",disabled:!0,selected:!0,children:"Select Location"}),e.jsx("option",{children:"Remote"}),e.jsx("option",{children:"India"}),e.jsx("option",{children:"United States"}),e.jsx("option",{children:"United Kingdom"}),e.jsx("option",{children:"Canada"}),e.jsx("option",{children:"Australia"}),e.jsx("option",{children:"Singapore"}),e.jsx("option",{children:"United Arab Emirates"}),e.jsx("option",{children:"Germany"}),e.jsx("option",{children:"Other"})]})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Job Type Preference *"}),e.jsxs("select",{className:"form-select",required:!0,children:[e.jsx("option",{value:"",disabled:!0,selected:!0,children:"Select Job Type"}),e.jsx("option",{children:"Full-Time"}),e.jsx("option",{children:"Part-Time"}),e.jsx("option",{children:"Contract"}),e.jsx("option",{children:"Freelance"}),e.jsx("option",{children:"Internship"})]})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Resume Upload"}),e.jsx("a",{href:"https://forms.google.com/your-form-link",target:"_blank",rel:"noopener noreferrer",className:"upload-link d-block text-center",children:"📄 Upload via Google Form"})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Professional Experience & Skills *"}),e.jsx("textarea",{className:"form-control",placeholder:"Tell us about your relevant experience, technical skills, achievements, and what makes you a great fit for this role...",required:!0})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Why Hrify Digital? *"}),e.jsx("textarea",{className:"form-control",placeholder:"What excites you about joining our team? How do you see yourself contributing to our mission?",required:!0})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Additional Information"}),e.jsx("textarea",{className:"form-control",placeholder:"Any other information you'd like to share (e.g., availability, salary expectations, portfolio links)..."})]}),e.jsxs("div",{className:"col-12 text-center mt-4",children:[e.jsx("button",{type:"submit",className:"submit-btn",children:"Submit Application"}),e.jsx("p",{className:"privacy-notice",children:"By submitting your application, you consent to the processing of your personal information as per our privacy policy. Your details will only be used for recruitment purposes and will be handled with the utmost confidentiality."})]})]})})})]})}),e.jsx("section",{className:"text-center py-5",children:e.jsx("div",{className:"container",children:e.jsxs("div",{style:{background:"linear-gradient(135deg, #1B8DBB, #1B8DBB)",color:"white",padding:"3rem 2rem",borderRadius:"16px",boxShadow:"0 8px 30px rgba(27, 141, 187, 0.2)"},children:[e.jsx("h2",{className:"text-white mb-3",style:{fontSize:"2.2rem",fontWeight:"700"},children:"Questions About Joining Our Team?"}),e.jsx("p",{className:"mb-4",style:{fontSize:"1.1rem",maxWidth:"700px",margin:"0 auto 2rem",opacity:"0.95"},children:"Reach out to our HR team at careers@hrifyglobalit.com or call us at +91 123-456-7890. We're here to help!"}),e.jsx("a",{href:"/contact",style:{background:"white",color:"#1B8DBB",padding:"1rem 2.5rem",borderRadius:"50px",fontWeight:"600",fontSize:"1rem",textDecoration:"none",display:"inline-block",transition:"all 0.3s ease"},onMouseOver:t=>t.target.style.background="#f0f0f0",onMouseOut:t=>t.target.style.background="white",children:"Contact HR Team"})]})})})]}),e.jsx("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"})]}),gc=d("assets/images/Internship.png"),rx=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:gc,alt:"Internship Program Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
          `}),e.jsx("section",{className:"internship-hero",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsxs("div",{className:"col-12 col-lg-8",children:[e.jsx("h2",{children:"Unlock Your Potential with Real-World Experience"}),e.jsx("p",{children:"At Hrify Digital, our internship program is designed to unlock the true potential of students and young professionals by providing hands-on learning experiences. We nurture talent, spark innovation, and help interns discover their strengths through structured training and real-world projects."}),e.jsx("p",{children:"Join us to transform your academic knowledge into practical skills while working alongside experienced professionals in a collaborative, growth-focused environment."})]}),e.jsx("div",{className:"col-12 col-lg-4 text-center",children:e.jsx("img",{src:gc,alt:"Internship Program",className:"img-fluid rounded shadow-lg",style:{maxWidth:"100%",borderRadius:"16px"}})})]})}),e.jsxs("section",{className:"mb-5",children:[e.jsx("h2",{className:"section-title",children:"Program Highlights"}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-12 col-md-6 col-lg-3",children:e.jsxs("div",{className:"program-card",children:[e.jsx("h3",{children:"🚀 Live Projects"}),e.jsx("p",{children:"Work on real-time projects in tech, design, marketing, or operations, gaining practical exposure to industry challenges."})]})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-3",children:e.jsxs("div",{className:"program-card",children:[e.jsx("h3",{children:"👨‍🏫 Mentorship"}),e.jsx("p",{children:"One-on-one sessions with experienced professionals to guide, refine your skills, and accelerate your growth."})]})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-3",children:e.jsxs("div",{className:"program-card",children:[e.jsx("h3",{children:"📊 Performance Reviews"}),e.jsx("p",{children:"Weekly feedback and assessments to track improvement, identify strengths, and ensure readiness for the job market."})]})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-3",children:e.jsxs("div",{className:"program-card",children:[e.jsx("h3",{children:"🎓 Certifications"}),e.jsx("p",{children:"Recognized certification of internship completion with individual performance insights and recommendations."})]})})]})]}),e.jsxs("section",{className:"mb-5",children:[e.jsx("h2",{className:"section-title",children:"Internship Domains"}),e.jsx("p",{className:"section-subtitle",children:"We offer diverse internship opportunities across multiple domains to match your interests and career goals."}),e.jsxs("div",{className:"text-center",children:[e.jsx("span",{className:"domain-badge",children:"Frontend Development (React, HTML/CSS/JS)"}),e.jsx("span",{className:"domain-badge",children:"Backend Development (Node.js, Express, MongoDB)"}),e.jsx("span",{className:"domain-badge",children:"UI/UX Design (Figma, Adobe XD)"}),e.jsx("span",{className:"domain-badge",children:"Data Analytics (Python, Power BI, Excel)"}),e.jsx("span",{className:"domain-badge",children:"Digital Marketing (SEO, Google Ads, Social Media)"}),e.jsx("span",{className:"domain-badge",children:"HR & Talent Acquisition"}),e.jsx("span",{className:"domain-badge",children:"Mobile Development"}),e.jsx("span",{className:"domain-badge",children:"Cloud Computing"})]})]}),e.jsxs("section",{className:"mb-5",children:[e.jsx("h2",{className:"section-title",children:"Why Intern With Us?"}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-12 col-md-4",children:e.jsxs("div",{className:"benefit-card",children:[e.jsx("div",{className:"icon-circle orange",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"#f57c00",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"})})}),e.jsx("h3",{children:"Hands-On Learning"}),e.jsx("p",{children:"Work on real projects and build a portfolio that showcases your skills to future employers."})]})}),e.jsx("div",{className:"col-12 col-md-4",children:e.jsxs("div",{className:"benefit-card",children:[e.jsx("div",{className:"icon-circle teal",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"#00897b",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"})})}),e.jsx("h3",{children:"Career Growth"}),e.jsx("p",{children:"Access to career-building webinars, workshops, and potential PPO opportunities from us or partner companies."})]})}),e.jsx("div",{className:"col-12 col-md-4",children:e.jsxs("div",{className:"benefit-card",children:[e.jsx("div",{className:"icon-circle pink",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"#c2185b",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsx("h3",{children:"Flexible & Rewarding"}),e.jsx("p",{children:"Work-from-home flexibility with stipends for top performers and recognition for outstanding work."})]})})]})]}),e.jsxs("section",{className:"mb-5",children:[e.jsx("h2",{className:"section-title",children:"Success Stories"}),e.jsx("p",{className:"section-subtitle",children:"Many of our interns have transitioned into full-time roles at Hrify Digital or leading companies worldwide."}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-12 col-md-6",children:e.jsxs("div",{className:"success-story",children:[e.jsx("h4",{children:"Priya Kumar - Data Analytics"}),e.jsx("p",{children:'"Joined as a Data Analytics intern and now working with a global analytics firm. The hands-on experience and mentorship I received were invaluable in preparing me for my career."'})]})}),e.jsx("div",{className:"col-12 col-md-6",children:e.jsxs("div",{className:"success-story",children:[e.jsx("h4",{children:"Arjun Menon - Frontend Developer"}),e.jsx("p",{children:'"Started as a frontend intern and was hired by an ed-tech startup after showcasing my React-based portfolio built during my time here. Hrify Digital launched my career!"'})]})})]})]}),e.jsx("section",{className:"application-section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Apply for Internship"}),e.jsx("p",{className:"section-subtitle",children:"Ready to kickstart your career with real-world experience? Fill out the form below and take the first step toward your future."}),e.jsx("div",{className:"form-card",children:e.jsxs("form",{children:[e.jsx("h3",{className:"form-section-title",children:"Personal Information"}),e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Full Name *"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"John Doe",required:!0})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Email Address *"}),e.jsx("input",{type:"email",className:"form-control",placeholder:"john.doe@example.com",required:!0})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Phone Number *"}),e.jsx("input",{type:"tel",className:"form-control",placeholder:"+1 (555) 123-4567",required:!0})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Current School/University"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"University Name"})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Current Year/Semester"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"e.g., 3rd Year"})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Field of Study"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"e.g., Computer Science"})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"GPA/CGPA"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"e.g., 8.5/10"})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Country *"}),e.jsxs("select",{className:"form-select",required:!0,children:[e.jsx("option",{value:"",disabled:!0,selected:!0,children:"Select Country"}),e.jsx("option",{children:"India"}),e.jsx("option",{children:"United States"}),e.jsx("option",{children:"United Kingdom"}),e.jsx("option",{children:"Canada"}),e.jsx("option",{children:"Australia"}),e.jsx("option",{children:"Singapore"}),e.jsx("option",{children:"Germany"}),e.jsx("option",{children:"Other"})]})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Complete Address"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"Street Address"})]}),e.jsx("div",{className:"col-12 col-md-4",children:e.jsx("input",{type:"text",className:"form-control",placeholder:"City"})}),e.jsx("div",{className:"col-12 col-md-4",children:e.jsx("input",{type:"text",className:"form-control",placeholder:"State/Province"})}),e.jsx("div",{className:"col-12 col-md-4",children:e.jsx("input",{type:"text",className:"form-control",placeholder:"ZIP/Postal Code"})}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Time Zone"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"e.g., IST, EST, GMT"})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Previous Work Experience"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"Any internships or jobs"})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"How did you find out about us?"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"e.g., LinkedIn, University Career Fair, etc."})]})]}),e.jsx("h3",{className:"form-section-title",children:"Internship Preferences"}),e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Preferred Start Date *"}),e.jsx("input",{type:"date",className:"form-control",required:!0})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Preferred End Date *"}),e.jsx("input",{type:"date",className:"form-control",required:!0})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Is this your first internship? *"}),e.jsxs("select",{className:"form-select",required:!0,children:[e.jsx("option",{value:"",disabled:!0,selected:!0,children:"Select"}),e.jsx("option",{children:"Yes"}),e.jsx("option",{children:"No"})]})]}),e.jsxs("div",{className:"col-12 col-md-6",children:[e.jsx("label",{className:"form-label",children:"Select Specialization *"}),e.jsxs("select",{className:"form-select",required:!0,children:[e.jsx("option",{value:"",disabled:!0,selected:!0,children:"Choose Domain"}),e.jsx("option",{children:"Frontend Development"}),e.jsx("option",{children:"Backend Development"}),e.jsx("option",{children:"UI/UX Design"}),e.jsx("option",{children:"Data Analytics"}),e.jsx("option",{children:"Digital Marketing"}),e.jsx("option",{children:"HR & Talent Acquisition"}),e.jsx("option",{children:"Mobile Development"}),e.jsx("option",{children:"Cloud Computing"})]})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"What are you hoping to achieve in this internship? *"}),e.jsx("textarea",{className:"form-control",placeholder:"Describe your learning goals and what you want to accomplish...",required:!0})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"What skills will you demonstrate?"}),e.jsx("textarea",{className:"form-control",placeholder:"List your technical and soft skills relevant to the internship..."})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Describe your work style"}),e.jsx("textarea",{className:"form-control",placeholder:"How do you approach tasks, collaborate with teams, and manage deadlines?"})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Anything specific you want to learn?"}),e.jsx("textarea",{className:"form-control",placeholder:"Any particular technologies, tools, or concepts you're eager to explore..."})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Resume Upload (Optional)"}),e.jsx("input",{type:"file",className:"form-control",accept:".pdf,.doc,.docx"})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"d-flex align-items-start mb-3",children:[e.jsx("input",{className:"form-check-input me-3 mt-1",type:"checkbox",id:"codeOfConduct",required:!0,style:{flexShrink:0}}),e.jsx("label",{className:"form-check-label text-start",htmlFor:"codeOfConduct",children:"I agree to follow Hrify Digital's code of conduct and professional standards *"})]})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"d-flex align-items-start mb-4",children:[e.jsx("input",{className:"form-check-input me-3 mt-1",type:"checkbox",id:"consent",required:!0,style:{flexShrink:0}}),e.jsx("label",{className:"form-check-label text-start",htmlFor:"consent",children:"I consent to the processing of my personal information for internship purposes *"})]})})})]}),e.jsxs("div",{className:"text-center mt-4",children:[e.jsx("button",{type:"submit",className:"submit-btn",children:"Submit Application"}),e.jsx("p",{className:"privacy-notice",children:"By submitting your application, you consent to the processing of your personal information as per our privacy policy. Your details will only be used for internship recruitment purposes and will be handled with the utmost confidentiality."})]})]})})]})}),e.jsx("section",{className:"text-center py-5",children:e.jsx("div",{className:"container",children:e.jsxs("div",{style:{background:"linear-gradient(135deg, #1B8DBB, #1B8DBB)",color:"white",padding:"3rem 2rem",borderRadius:"16px",boxShadow:"0 8px 30px rgba(27, 141, 187, 0.2)"},children:[e.jsx("h2",{className:"text-white mb-3",style:{fontSize:"2.2rem",fontWeight:"700"},children:"Questions About Our Internship Program?"}),e.jsx("p",{className:"mb-4",style:{fontSize:"1.1rem",maxWidth:"700px",margin:"0 auto 2rem",opacity:"0.95"},children:"Reach out to our internship coordinator at internships@jkglobalit.com or call us at +91 123-456-7890"}),e.jsx("a",{href:"/contact",style:{background:"white",color:"#1B8DBB",padding:"1rem 2.5rem",borderRadius:"50px",fontWeight:"600",fontSize:"1rem",textDecoration:"none",display:"inline-block",transition:"all 0.3s ease"},onMouseOver:t=>t.target.style.background="#f0f0f0",onMouseOut:t=>t.target.style.background="white",children:"Contact Us"})]})})})]}),e.jsx("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"})]}),ax=d("assets/images/ReferralProgram.png"),lx=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:ax,alt:"Referral Program Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
          `}),e.jsx("section",{className:"internship-hero",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{children:"Spot Great Talent? Refer Them to Hrify Digital!"}),e.jsx("p",{children:"We're always looking for talented individuals to join our dynamic team at Hrify Digital. If you know someone who would thrive in our innovative environment and align with our vision, refer them to us! Let's work together to create incredible opportunities."})]})}),e.jsx("section",{className:"mb-5",children:e.jsxs("div",{className:"text-content",children:[e.jsx("h2",{className:"text-center section-title",children:"Hrify Digital Candidate Referral Program"}),e.jsx("p",{children:"Introduce us to exceptional talent! Refer a friend, former colleague, or family member with the right skills to join Hrify Digital. We are always looking for skilled professionals across diverse fields, including IT and non-IT roles."}),e.jsx("p",{children:"By participating in our referral program, you play a vital role in helping us identify top candidates who align with our company's mission and values. Your recommendations contribute to building a stronger and more dynamic team at Hrify Digital."}),e.jsx("h2",{children:"Specialized IT Talent"}),e.jsx("p",{children:"Access a pool of skilled IT professionals with expertise across various technologies, including software development, networking, cybersecurity, and cloud computing."}),e.jsx("p",{children:"We are constantly expanding our network of IT specialists who are proficient in modern frameworks and tools such as React, Angular, Python, Java, AWS, and DevOps practices. Your referrals can help us discover new talents that can innovate and drive technological advancements."}),e.jsx("p",{children:"Successfully referring a candidate can earn you a one-time bonus. Refer to the Hrify Digital policy below for more details. It's our way of saying thank you for connecting us with high-quality candidates who fit our culture and contribute to our success."}),e.jsx("p",{children:"Your continued support in identifying and recommending candidates helps us maintain a robust pipeline of professionals ready to make an impact. Let's grow together!"}),e.jsx("h2",{children:"Referral Bonus Policy"}),e.jsx("p",{children:"Hrify Digital values your referrals! Earn a referral bonus when the candidate you refer is hired by Hrify Digital or its clients, subject to the following conditions."}),e.jsx("p",{children:"The bonus structure is designed to reward you fairly for your contribution. Payouts are processed promptly upon successful completion of the candidate's employment milestones, ensuring transparency and trust in our process."}),e.jsx("h2",{children:"Eligibility"}),e.jsx("p",{children:"The referred candidate should not have been in contact with a Hrify Digital recruiter in the past 3 months."}),e.jsx("p",{children:"This policy ensures that your referrals are unique and genuinely add to our candidate pool. We encourage you to refer professionals from your network who you believe will be a great fit for our organization."}),e.jsx("h2",{children:"Employment Duration"}),e.jsx("p",{children:"The referred candidate must successfully complete 90 days of active employment before the referral bonus is awarded."}),e.jsx("p",{children:"This time frame allows us to evaluate the candidate's performance and commitment while ensuring fair and consistent application of the referral bonus policy."}),e.jsx("h2",{children:"Policy Updates"}),e.jsx("p",{children:"Hrify Digital reserves the right to modify, update, or discontinue this policy at any time."}),e.jsx("p",{children:"We are committed to keeping you informed of any changes in our referral program. Regular updates will be shared through official communication channels, ensuring you are always aware of the latest policies."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," The referral bonus currently applies only to candidates and referrers within the North America region. However, we encourage you to refer talented professionals from any location, as we are always eager to connect with exceptional individuals."]}),e.jsx("p",{children:"Let's work together to build a stronger, more talented team! Your referrals help us find outstanding professionals who contribute to our shared success and drive Hrify Digital's mission forward."}),e.jsx("p",{children:"If you have any questions about the referral process or need assistance, feel free to contact our HR team. We are here to support you every step of the way and make your experience seamless and rewarding."})]})}),e.jsx("section",{className:"application-section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Submit a Referral"}),e.jsx("p",{className:"section-subtitle",children:"Know someone who would be a great fit? Share their details below and help us grow our team."}),e.jsx("div",{className:"form-card",children:e.jsxs("form",{children:[e.jsx("h3",{className:"form-section-title",children:"Your Details"}),e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Full Name *"}),e.jsx("input",{type:"text",className:"form-control",required:!0})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Email Address *"}),e.jsx("input",{type:"email",className:"form-control",required:!0})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Phone Number *"}),e.jsx("input",{type:"tel",className:"form-control",required:!0})]})]}),e.jsx("h3",{className:"form-section-title",children:"Candidate Details"}),e.jsxs("div",{className:"row g-3",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Full Name *"}),e.jsx("input",{type:"text",className:"form-control",required:!0})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Email Address *"}),e.jsx("input",{type:"email",className:"form-control",required:!0})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Phone Number *"}),e.jsx("input",{type:"tel",className:"form-control",required:!0})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Current Job Title *"}),e.jsx("input",{type:"text",className:"form-control",required:!0})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Relevant Skills/Expertise *"}),e.jsx("input",{type:"text",className:"form-control",required:!0})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{className:"form-label",children:"Preferred Role/Department *"}),e.jsxs("select",{className:"form-select",required:!0,children:[e.jsx("option",{value:"",disabled:!0,selected:!0,children:"Select Department"}),e.jsx("option",{children:"IT"}),e.jsx("option",{children:"HR"}),e.jsx("option",{children:"Marketing"}),e.jsx("option",{children:"Engineering"}),e.jsx("option",{children:"Legal"})]})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"How do you know this candidate? *"}),e.jsx("textarea",{className:"form-control",rows:4,required:!0})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Any comments or notes about the candidate"}),e.jsx("textarea",{className:"form-control",rows:4})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{className:"form-label",children:"Upload Resume (Optional)"}),e.jsxs("a",{href:"https://forms.google.com/your-form-link",target:"_blank",className:"upload-btn d-block text-decoration-none",children:[e.jsx("i",{className:"fas fa-cloud-upload-alt fa-2x mb-2"}),e.jsx("p",{className:"mb-0",children:"Click to upload via Google Form"})]})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsxs("div",{className:"form-check mb-4",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",required:!0,id:"confirmCheck"}),e.jsx("label",{className:"form-check-label",htmlFor:"confirmCheck",children:"I confirm that the information provided is accurate and that I have obtained the candidate's consent to share their details with Hrify Digital. *"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("button",{type:"submit",className:"submit-btn",children:"Submit Referral"}),e.jsx("p",{className:"confirmation-message",children:"Thank you for your referral! We will review the candidate's details and get in touch if there's a suitable opportunity. Stay tuned for updates!"})]})]})]})})]})}),e.jsx("section",{className:"text-center py-5",children:e.jsx("div",{className:"container",children:e.jsxs("div",{style:{background:"linear-gradient(135deg, #1B8DBB, #1B8DBB)",color:"white",padding:"3rem 2rem",borderRadius:"16px",boxShadow:"0 8px 30px rgba(27, 141, 187, 0.2)"},children:[e.jsx("h2",{className:"text-white mb-3",style:{fontSize:"2.2rem",fontWeight:"700"},children:"Have Questions About Referrals?"}),e.jsx("p",{className:"mb-4",style:{fontSize:"1.1rem",maxWidth:"700px",margin:"0 auto 2rem",opacity:"0.95"},children:"Contact our HR team for any clarification regarding the referral program or process."}),e.jsx("a",{href:"/contact",style:{background:"white",color:"#1B8DBB",padding:"1rem 2.5rem",borderRadius:"50px",fontWeight:"600",fontSize:"1rem",textDecoration:"none",display:"inline-block",transition:"all 0.3s ease"},onMouseOver:t=>t.target.style.background="#f0f0f0",onMouseOut:t=>t.target.style.background="white",children:"Contact HR"})]})})})]}),e.jsx("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"})]}),ox=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner container-fluid",children:e.jsxs("div",{className:"row h-100",children:[e.jsx("div",{className:"col-12 col-lg-6 d-flex justify-content-center align-items-center text-light",children:e.jsx("h2",{className:"fw-bolder text-center",children:"Web Design"})}),e.jsx("div",{className:"col-12 col-lg-6 d-flex justify-content-center align-items-center",children:e.jsx("img",{className:"img-fluid",src:"/assets/images/design image 1.webp",alt:""})})]})}),e.jsx("style",{children:`
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
        `}),e.jsx("section",{className:"py-5 bg-white text-center",children:e.jsxs("div",{className:"container py-4",children:[e.jsx("h2",{className:"display-5 text-primary fw-bold mb-4",children:"Web Design Services"}),e.jsx("p",{className:"lead text-muted mx-auto mb-3",style:{maxWidth:"800px"},children:"Create Stunning, User-Friendly Websites with Our Expert Web Design Services"}),e.jsx("p",{className:"text-muted mx-auto mb-5",style:{maxWidth:"900px"},children:"Our web design services focus on creating visually appealing, responsive, and functional websites that drive results. We combine creativity with technical expertise to deliver designs that engage users and support your business goals."}),e.jsx("p",{className:"text-dark mx-auto mb-5",style:{maxWidth:"900px"},children:"At Hrify Digital, we specialize in custom web design that reflects your brand identity and provides an exceptional user experience. Our team uses the latest design trends and technologies to build websites that are not only beautiful but also optimized for performance and SEO."}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-palette"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"Custom Design"}),e.jsx("p",{className:"text-muted",children:"Unique, tailored designs that match your brand vision and audience preferences."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-mobile-alt"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"Responsive Design"}),e.jsx("p",{className:"text-muted",children:"Mobile-first approach ensuring perfect display across all devices and screen sizes."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-search"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"SEO Optimized"}),e.jsx("p",{className:"text-muted",children:"Built-in SEO best practices to improve search engine visibility and rankings."})]})})]}),e.jsxs("div",{className:"row g-4 mt-4",children:[e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-rocket"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"Fast Loading"}),e.jsx("p",{className:"text-muted",children:"Optimized code and assets for lightning-fast page load times."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-shield-alt"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"Security Focused"}),e.jsx("p",{className:"text-muted",children:"Built with security best practices to protect your website and users."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-headset"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"Ongoing Support"}),e.jsx("p",{className:"text-muted",children:"Continuous maintenance and updates to keep your website current and secure."})]})})]}),e.jsx("p",{className:"text-dark mx-auto mt-5",style:{maxWidth:"900px"},children:"Our web design process involves thorough research, strategic planning, creative design, and rigorous testing to ensure your website not only looks great but also performs exceptionally. We work closely with you throughout the project to bring your vision to life."}),e.jsx("div",{className:"mt-5",children:e.jsx("a",{href:"#",className:"btn btn-danger btn-lg px-5 py-3 fw-bold rounded-pill",children:"Get Your Website Designed"})})]})})]});d("assets/images/Rectangle-27.webp");const cx=d("assets/images/Web-Maintence.png"),dx=d("assets/images/web-main-image-2.webp"),mx=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:cx,alt:"Web Maintenance Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
            .banner-full-image {
              width: 100%;
              overflow: hidden;
            }

            .banner-img {
              width: 100%;
              display: block;
            }
          `}}),e.jsx("div",{className:"content container p-3",children:e.jsxs("div",{className:"row h-100 justify-content-center align-items-center mt-4",children:[e.jsx("div",{className:"col-12 col-lg-8 d-flex flex-column justify-content-center ",children:e.jsxs("p",{style:{color:"#686D76"},children:["Launching a website or web application online marks the initial phase in achieving business results on the web, but the journey doesn't conclude there; it's where the real process and responsibility begin. The ultimate success hinges on the meticulous maintenance and upkeep of your website or web application online.",e.jsx("br",{}),e.jsx("br",{}),"Web maintenance is a core service that Hrify Digital offers. We take on the duty of keeping your website updated and up to date, meeting all necessary standards and requirements. Web maintenance is a core service that Hrify Digital offers. We take on the duty of keeping your website updated and up to date, meeting all necessary standards and requirements.",e.jsx("br",{})," ",e.jsx("br",{}),"We offer ongoing support to ensure your website receives timely updates, fixes, redesigns, and more. Our priority is to provide dedicated support, addressing your queries promptly to enhance your online performance effectively."]})}),e.jsx("div",{className:"col-12 col-lg-4 d-flex flex-column justify-content-center ",children:e.jsx("img",{className:"",src:dx,alt:""})})]})}),e.jsxs("div",{className:"container p-3",style:{textAlign:"justify"},children:[e.jsx("br",{}),e.jsx("h1",{style:{color:"#1B8DBB",fontSize:"30px",fontFamily:'"Google Sans", sans-serif'},children:"WE ENSURE THE AFTERGOING"}),e.jsx("br",{}),e.jsxs("ul",{children:[e.jsx("li",{style:{color:"#1B8DBB",fontSize:"20px"},children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1B8DBB 0%, #1B8DBB 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"     Maintaining the uniqueness of your website."]})}),e.jsx("li",{style:{color:"#2110bdff",fontSize:"20px"},children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"    Ensures seamless navigation and readability across devices, enhancing user satisfaction."]})}),e.jsx("li",{style:{color:"#2110bdff",fontSize:"20px"},children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"    Updating the core and guaranteeing uptime and security will help you maintain your website and hosting."]})}),e.jsx("li",{style:{color:"#2110bdff",fontSize:"20px"},children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"    In the event that a problem arises, offer prompt restoration support."]})}),e.jsx("li",{style:{color:"#2110bdff",fontSize:"20px"},children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Providing responsive assistance for any issues or inquiries."]})}),e.jsx("li",{style:{color:"#2110bdff",fontSize:"20px"},children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"    Improving your site's performance and user experience over time."]})}),e.jsx("li",{style:{color:"#2110bdff",fontSize:"20px"},children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"    Keeping your website secure and protected from cyber threats."]})}),e.jsx("li",{style:{color:"#2110bdff",fontSize:"20px"},children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"    Keeping your website secure and protected from cyber threats."]})}),e.jsx("li",{style:{color:"#2110bdff",fontSize:"20px"},children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Timely reminders and information regarding your hosting and domain."]})}),e.jsx("li",{style:{color:"#2110bdff",fontSize:"20px"},children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"    Ensuring that your website is responsive and user-friendly."]})}),e.jsx("li",{style:{color:"#2110bdff",fontSize:"20px"},children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"    Assistance with mail servers, analytics, and hosting servers."]})})]})]}),e.jsx("br",{}),e.jsx("br",{})]}),ux=d("assets/images/cloud-native-banner.webp"),hx=d("assets/images/aws-image-1.webp"),px=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner container-fluid",children:e.jsxs("div",{className:"row h-100",children:[e.jsx("div",{className:"col-12 col-lg-6 d-flex justify-content-center align-items-center text-light",children:e.jsx("h2",{className:"fw-bolder text-center",children:"AWS Services Implementation"})}),e.jsx("div",{className:"col-12 col-lg-6 d-flex justify-content-center align-items-center",children:e.jsx("img",{className:"img-fluid",src:hx,alt:""})})]})}),e.jsx("style",{children:`
          .banner {
            background-image: url(${ux});
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
        `}),e.jsx("section",{className:"py-5 bg-white text-center",children:e.jsxs("div",{className:"container py-4",children:[e.jsx("h2",{className:"display-5 text-primary fw-bold mb-4",children:"AWS Services Implementation"}),e.jsx("p",{className:"lead text-muted mx-auto mb-3",style:{maxWidth:"800px"},children:"Leverage the Power of Amazon Web Services for Scalable Cloud Solutions"}),e.jsx("p",{className:"text-muted mx-auto mb-5",style:{maxWidth:"900px"},children:"AWS offers a comprehensive suite of cloud services that can transform your business operations. Our expert team helps you implement, migrate to, and optimize AWS services for maximum efficiency and cost savings."}),e.jsx("p",{className:"text-dark mx-auto mb-5",style:{maxWidth:"900px"},children:"At Hrify Digital, we provide end-to-end AWS implementation services, from initial assessment and migration planning to deployment and ongoing management. Our certified AWS professionals ensure your cloud infrastructure is secure, scalable, and cost-effective."}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-cloud"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"Cloud Migration"}),e.jsx("p",{className:"text-muted",children:"Seamless migration of your applications and data to AWS cloud infrastructure."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-server"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"Infrastructure Setup"}),e.jsx("p",{className:"text-muted",children:"Design and implementation of scalable AWS infrastructure components."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-shield-alt"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"Security Implementation"}),e.jsx("p",{className:"text-muted",children:"AWS security best practices and compliance framework implementation."})]})})]}),e.jsxs("div",{className:"row g-4 mt-4",children:[e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-chart-line"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"Cost Optimization"}),e.jsx("p",{className:"text-muted",children:"AWS cost management and optimization strategies for maximum ROI."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-tools"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"DevOps Integration"}),e.jsx("p",{className:"text-muted",children:"CI/CD pipeline setup and automation using AWS developer tools."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-headset"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"24/7 Monitoring"}),e.jsx("p",{className:"text-muted",children:"Continuous monitoring and support for your AWS environment."})]})})]}),e.jsx("p",{className:"text-dark mx-auto mt-5",style:{maxWidth:"900px"},children:"Our AWS implementation services help businesses of all sizes harness the full potential of cloud computing. From startups to enterprises, we provide tailored solutions that drive innovation and growth."}),e.jsx("div",{className:"mt-5",children:e.jsx("a",{href:"#",className:"btn btn-danger btn-lg px-5 py-3 fw-bold rounded-pill",children:"Implement AWS Solutions"})})]})})]}),gx=d("assets/images/Rectangle-27.webp"),xx=d("assets/images/cyber-security.webp"),fx=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner container-fluid",children:e.jsxs("div",{className:"row h-100",children:[e.jsx("div",{className:"col-12 col-lg-6 d-flex justify-content-center align-items-center text-light",children:e.jsx("h2",{className:"fw-bolder text-center",children:"Cybersecurity"})}),e.jsx("div",{className:"col-12 col-lg-6 d-flex justify-content-center align-items-center",children:e.jsx("img",{className:"img-fluid",src:xx,alt:""})})]})}),e.jsx("style",{children:`
          .banner {
            background-image: url(${gx});
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
        `}),e.jsx("section",{className:"py-5 bg-white text-center",children:e.jsxs("div",{className:"container py-4",children:[e.jsx("h2",{className:"display-5 text-primary fw-bold mb-4",children:"Cybersecurity Services"}),e.jsx("p",{className:"lead text-muted mx-auto mb-3",style:{maxWidth:"800px"},children:"Protect Your Digital Assets with Advanced Cybersecurity Solutions"}),e.jsx("p",{className:"text-muted mx-auto mb-5",style:{maxWidth:"900px"},children:"In today's digital landscape, cybersecurity is paramount. Our comprehensive cybersecurity services protect your organization from evolving threats, ensuring data integrity, compliance, and business continuity."}),e.jsx("p",{className:"text-dark mx-auto mb-5",style:{maxWidth:"900px"},children:"At Hrify Digital, we offer end-to-end cybersecurity solutions tailored to your specific needs. From threat assessment and risk management to incident response and compliance, our expert team implements robust security measures to safeguard your valuable assets."}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-shield-alt"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"Threat Assessment"}),e.jsx("p",{className:"text-muted",children:"Comprehensive vulnerability assessments and threat analysis to identify potential risks."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-lock"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"Access Control"}),e.jsx("p",{className:"text-muted",children:"Multi-factor authentication and role-based access control implementation."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-eye"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"Monitoring & Detection"}),e.jsx("p",{className:"text-muted",children:"24/7 security monitoring and real-time threat detection systems."})]})})]}),e.jsxs("div",{className:"row g-4 mt-4",children:[e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-user-shield"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"Incident Response"}),e.jsx("p",{className:"text-muted",children:"Rapid response plans and procedures for cybersecurity incidents."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-gavel"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"Compliance Management"}),e.jsx("p",{className:"text-muted",children:"GDPR, HIPAA, and other regulatory compliance assistance."})]})}),e.jsx("div",{className:"col-md-4",children:e.jsxs("div",{className:"feature-card text-center",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-graduation-cap"})}),e.jsx("h4",{className:"text-primary fw-semibold mb-3",children:"Security Training"}),e.jsx("p",{className:"text-muted",children:"Employee awareness programs and cybersecurity training sessions."})]})})]}),e.jsx("p",{className:"text-dark mx-auto mt-5",style:{maxWidth:"900px"},children:"Our cybersecurity experts stay ahead of emerging threats, implementing cutting-edge technologies and best practices to protect your organization. Partner with us for comprehensive security that evolves with your business needs."}),e.jsx("div",{className:"mt-5",children:e.jsx("a",{href:"#",className:"btn btn-danger btn-lg px-5 py-3 fw-bold rounded-pill",children:"Secure Your Business"})})]})})]});d("assets/images/Rectangle-27.webp");const yx=d("assets/images/Business-Web-Design.png"),jx=d("assets/images/work-flow.webp"),Wr=d("assets/images/trip.webp"),vx=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:yx,alt:"Business Web Design Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"container mb-5",children:e.jsxs("div",{className:"row justify-content-center align-items-center",children:[e.jsxs("div",{className:"col-12 col-lg-8",children:[e.jsx("h3",{style:{color:"#1B8DBB"},children:e.jsx("b",{children:"Website Design Services"})}),e.jsx("br",{}),e.jsx("p",{style:{color:"#686D76"},children:"Our wide range of web design solutions caters to each customer's unique requirements, taking into account their industry and the kind of solution needed. Any business, no matter how big or little, needs a dedicated website that caters to a certain audience. It is crucial to identify the target and create an engaging website that will fulfill the objective of the company."}),e.jsx("p",{style:{color:"#686D76"},children:"Hrify Digital is aware of this, and we use our knowledge and experience to recommend the best website design for your company. Business web design is appropriate for individual professionals seeking a website for their portfolio or for multinational companies needing a large corporate gateway. A basic static website or a complex website with a content-management system for regularly updated content are the options available here. We provide our professional services for both custom and template-driven mobile responsive website designs."})]}),e.jsx("div",{className:"col-12 col-lg-4",children:e.jsx("img",{className:"img-fluid my-4",src:jx,alt:""})})]})}),e.jsxs("div",{className:"container mobile-only",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:"Leading Web Design Firms"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/businessweb",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Wr,alt:"",className:"me-2"}),"Business web-design"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/resweb",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Wr,alt:"",className:"me-2"}),"Responsive web-design"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/cmsweb",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Wr,alt:"",className:"me-2"}),"CMS Web-design solution"]})})})]})]}),e.jsx("style",{children:`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
        `})]}),bx=d("assets/images/Responsive-Web-Design.png"),wx=d("assets/images/res web image 2.webp"),Ir=d("assets/images/trip.webp"),Nx=()=>(B.useEffect(()=>{const t=document.getElementById("enquiry-link"),s=document.getElementById("popup-form"),n=document.getElementById("close-btn");if(t&&s&&n){t.addEventListener("click",()=>{s.style.display="flex"}),n.addEventListener("click",()=>{s.style.display="none"}),window.addEventListener("click",r=>{r.target===s&&(s.style.display="none")});const i=document.getElementById("enquiry-form");i&&i.addEventListener("submit",r=>{r.preventDefault(),alert("Form submitted!")})}},[]),e.jsxs(e.Fragment,{children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}}),e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:bx,alt:"Responsive Web Design Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
            .banner-full-image {
              width: 100%;
              overflow: hidden;
            }

            .banner-img {
              width: 100%;
              display: block;
            }
          `}}),e.jsx("div",{className:"container my-4",children:e.jsxs("div",{className:"row justify-content-center",children:[e.jsxs("div",{className:"col-12 col-lg-8",children:[e.jsx("p",{style:{color:"#686D76"},children:"At Hrify Digital, we assist companies in creating standards-compliant, mobile-friendly websites. We can help you with responsive design even if your website isn't functional on other internet-connected devices. Google's most recent search algorithm filters out webpages that are mobile-friendly and displays them when users search on a mobile device."}),e.jsx("p",{style:{color:"#686D76"},children:"Our professionals are well-aware of this and provide purpose-specific, lightweight, responsive web design solutions. A responsive site design that works on all platforms or a mobile-specific design layout are the two options available."}),e.jsx("p",{style:{color:"#686D76"},children:"As responsive web design is widely recognized as a standard in the online world, we ensure that all our new web design solutions include this feature by default. However, if you currently have a website that lacks a responsive layout, we are equipped to assist you in converting it to a responsive design."}),e.jsx("p",{style:{color:"#686D76"},children:"As responsive web design is widely recognized as a standard in the online world, we ensure that all our new web design solutions include this feature by default. However, if you currently have a website that lacks a responsive layout, we are equipped to assist you in converting it to a responsive design."}),e.jsx("p",{style:{color:"#686D76"},children:"Benefits of having a responsive website"}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Enhanced search engine ranking and a well-established online presence"]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Fixing your domain name will relieve you of the burden of maintaining separate desktop and mobile webpages."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Reduced bounces as a result of the website's structured content display"]})]}),e.jsx("div",{className:"col-12 col-lg-4",children:e.jsx("img",{className:"img-fluid",src:wx,alt:""})})]})}),e.jsxs("div",{className:"container mobile-only",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:"Leading Web Design Firms"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx("a",{style:{textDecoration:"none"},href:"businessweb.html",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Ir,alt:"",className:"me-2"}),"Business web-design"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx("a",{style:{textDecoration:"none"},href:"resweb.html",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Ir,alt:"",className:"me-2"}),"Responsive web-design"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx("a",{style:{textDecoration:"none"},href:"cmsweb.html",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Ir,alt:"",className:"me-2"}),"CMS Web-design solution"]})})})]})]})]}),e.jsx("div",{id:"popup-form",className:"popup-form",children:e.jsxs("div",{className:"form-container",children:[e.jsx("span",{className:"close-btn",id:"close-btn",children:"×"}),e.jsx("h2",{children:"Enquiry Form"}),e.jsxs("form",{id:"enquiry-form",children:[e.jsx("label",{htmlFor:"name",children:"Name:"}),e.jsx("input",{type:"text",id:"name",name:"name",required:!0}),e.jsx("label",{htmlFor:"email",children:"Email:"}),e.jsx("input",{type:"email",id:"email",name:"email",required:!0}),e.jsx("label",{htmlFor:"mobile",children:"Mobile:"}),e.jsx("input",{type:"tel",id:"mobile",name:"mobile",required:!0}),e.jsx("label",{htmlFor:"company",children:"Your Company:"}),e.jsx("input",{type:"text",id:"company",name:"company",required:!0}),e.jsx("label",{htmlFor:"description",children:"Describe what you need:"}),e.jsx("textarea",{id:"description",name:"description",rows:4,required:!0}),e.jsx("button",{type:"submit",children:"Send"})]})]})})]}));d("assets/images/Rectangle-27.webp");const kx=d("assets/images/CMS-Web-Design.png"),Sx=d("assets/images/cms-image-2.webp"),Ar=d("assets/images/trip.webp"),Bx=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:kx,alt:"CMS Web Design Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
            .banner-full-image {
              width: 100%;
              overflow: hidden;
            }

            .banner-img {
              width: 100%;
              display: block;
            }
          `}}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"container my- p-3",children:e.jsxs("div",{className:"row justify-content-center",style:{textAlign:"justify"},children:[e.jsxs("div",{className:"col-12 col-lg-8",children:[e.jsx("p",{style:{color:"#686D76"},children:"Websites have been the most successful marketing tool since the beginning of the internet, and the one thing on these websites that guarantees your target traffic is brought towards you and allows you to conduct business is the content. The king is the content."}),e.jsx("p",{style:{color:"#686D76"},children:"A content management system is essential if you want your website's material to be current, relevant, and green at all times. Hrify Digital offers CMS websites on WordPress with the newest trends in technology and security by utilizing the characteristics of the WordPress backend system."}),e.jsx("p",{style:{color:"#686D76"},children:"Our CMS solutions are easy to use and quick to pick up, giving business owners the advantage of being able to update their websites constantly. With our extensive blogging features, they can even publish regular content that benefits their target audience and brings in more revenue."})]}),e.jsx("div",{className:"col-12 col-lg-4",children:e.jsx("img",{className:"img-fluid",src:Sx,alt:""})})]})}),e.jsx("div",{className:"container",children:e.jsx("div",{className:"row",children:e.jsxs("div",{className:"p-4  col-12",style:{textAlign:"justify"},children:[" ",e.jsx("br",{}),e.jsx("h3",{style:{color:"##1B8DBB"},children:"Benefits of Content Management System"})," ",e.jsx("br",{}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   we provide effortless website maintenance and seamless platform updates for smooth operation."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Small adjustments can be performed quickly."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Infinite production of pages"]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Editing with CMS is feasible anywhere and on any device."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   We specialize in seamless plugin integration for optimizing websites effortlessly."]})]})})}),e.jsxs("div",{className:"container mobile-only",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:"Leading Web Design Firms"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx("a",{style:{textDecoration:"none"},href:"businessweb.html",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{className:"img-fluid",src:Ar,alt:""}),"Business web-design"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx("a",{style:{textDecoration:"none"},href:"resweb.html",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{className:"img-fluid me-2",src:Ar,alt:""}),"Responsive web-design"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx("a",{style:{textDecoration:"none"},href:"cmsweb.html",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{className:"img-fluid me-2",src:Ar,alt:""}),"CMS Web-design solution"]})})})]})]}),e.jsx("style",{children:`
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
          `})]}),Dx=d("assets/images/custom-image-1.webp"),Cx=d("assets/images/custom-web-image-2.webp"),zx=d("assets/images/Rectangle-27.webp"),Tr=d("assets/images/trip.webp"),Mx=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner container-fluid",style:{backgroundImage:`url(${zx})`,height:"400px"},children:e.jsxs("div",{className:"row h-100",children:[e.jsxs("div",{className:" col-12 col-lg-6 d-flex justify-content-center align-items-center text-light",children:[e.jsx("h2",{style:{color:"black"},className:"fw-bolder text-center",children:"Custom Web Applications"}),e.jsx("style",{children:`
                    h2 {
                      font-size: 50px;
                      color: black;
                    }
                    @media only screen and (max-width: 600px) {
                      h2 {
                        font-size: 30px;
                      }
                    }
                  `})]}),e.jsx("div",{className:"col-12 col-lg-6 d-flex justify-content-center align-items-center",children:e.jsx("img",{className:"img-fluid",src:Dx,alt:""})})]})}),e.jsx("div",{className:"container my-4",children:e.jsxs("div",{className:"row justify-content-center align-items-center",children:[e.jsxs("div",{className:"col-12 col-lg-8",children:[e.jsx("p",{style:{color:"#686D76"},children:"Customized web apps are now in high demand. Custom web apps are necessary for providing more functionality or sophistication to your team or consumers after establishing a website. Hrify Digital can provide extra capabilities based on your specific requirements."}),e.jsx("p",{style:{color:"#686D76"},children:"Hrify Digital has provided high-quality, cost-effective IT solutions to organizations of all sizes for over a decade. We can handle both small and large scale bespoke web applications. Our services include third-party integrations and API implementations. Our team has extensive expertise dealing with APIs such as eBay, Amazon, AWS, Facebook, MailChimp, SMS gateways, and payment gateways."})]}),e.jsx("div",{className:"col-12 col-lg-4",children:e.jsx("img",{className:"img-fluid",src:Cx,alt:""})})]})}),e.jsxs("div",{className:"container mobile-only",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:"Distinguished Online Programs"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/customweb",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Tr,alt:"",className:"me-2"}),"Custom web applications"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/ecommerceweb",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Tr,alt:"",className:"me-2"}),"E-Commerce web solutions"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/matrimonyweb",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Tr,alt:"",className:"me-2"}),"Matrimony Web Solutions"]})})})]})]}),e.jsx("style",{children:`
              .container.mobile-only {
                display: none;
              }
              @media (max-width: 768px) {
                .container.mobile-only {
                  display: block;
                }
              }
            `})]}),Ex=d("assets/images/Custom-Web-Applications.png"),Wx=d("assets/images/custom-web-image-2.webp");d("assets/images/Rectangle-27.webp");const Fr=d("assets/images/trip.webp"),Ix=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Ex,alt:"Custom Web Applications Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container my-4",children:e.jsxs("div",{className:"row justify-content-center align-items-center",style:{color:"#686D76",textAlign:"justify"},children:[e.jsxs("div",{className:"col-12 col-lg-8",children:[e.jsx("p",{style:{color:"#686D76"},children:"Customized web apps are now in high demand. Custom web apps are necessary for providing more functionality or sophistication to your team or consumers after establishing a website. Hrify Digital can provide extra capabilities based on your specific requirements."}),e.jsx("p",{style:{color:"#686D76"},children:"Hrify Digital has provided high-quality, cost-effective IT solutions to organizations of all sizes for over a decade. We can handle both small and large scale bespoke web applications. Our services include third-party integrations and API implementations. Our team has extensive expertise dealing with APIs such as eBay, Amazon, AWS, Facebook, MailChimp, SMS gateways, and payment gateways."})]}),e.jsx("div",{className:"col-12 col-lg-4",children:e.jsx("img",{className:"img-fluid",src:Wx,alt:""})})]})}),e.jsxs("div",{className:"container mobile-only",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:"Distinguished Online Programs"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/customweb",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Fr,alt:"",className:"me-2"}),"Custom web applications"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/ecommerceweb",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Fr,alt:"",className:"me-2"}),"E-Commerce web solutions"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/matrimonyweb",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Fr,alt:"",className:"me-2"}),"Matrimony Web Solutions"]})})})]})]}),e.jsx("style",{children:`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
        `})]}),Ax=d("assets/images/E-Commerce-Web-Solutions.png"),Tx=d("assets/images/e-commerce-image-2.webp");d("assets/images/Rectangle-27.webp");const Lr=d("assets/images/trip.webp"),Fx=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Ax,alt:"E-Commerce Web Solutions Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container my-4",children:e.jsxs("div",{className:"row justify-content-center align-items-center",style:{textAlign:"justify"},children:[e.jsxs("div",{className:"col-12 col-lg-8",children:[e.jsx("p",{style:{color:"#686D76"},children:"Selling your products or services online is the simplest method to operate in this digital age, and it is far simpler with our specialized e-Commerce Web Solutions. We offer adaptable e-commerce and shopping cart solutions that are full featured, safe, and simple to use for small and medium-sized enterprises. Our solutions at Hrify Digital are tailored to your product type, target market, business procedure, and operability. We have effectively provided simple-to-manage B2C and B2B e-Commerce solutions. We create e-commerce solutions for WordPress and Opencart as , which may be adjusted to your specifications and integrated with extra plugins to function."}),e.jsx("p",{style:{color:"#686D76"},children:"Our e-commerce and shopping cart solutions are safe and user-friendly, making them suitable for small and medium enterprises. Hrify Digital offers solutions tailored to your product type, target audience, business process, and operability. We have implemented manageable e-Commerce solutions for both B2C and B2B. We offer customized eCommerce solutions for Wordpress and Opencart, with optional plugins to meet your specific needs."})]}),e.jsx("div",{className:"col-12 col-lg-4",children:e.jsx("img",{className:"img-fluid",src:Tx,alt:""})})]})}),e.jsxs("div",{className:"container",style:{textAlign:"justify"},children:[e.jsx("h3",{className:"my-3",style:{color:"#686D76"},children:"Typical features that come with our products"}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-12 col-lg-4 ",children:e.jsxs("ul",{className:"",style:{color:"#686D76"},children:[e.jsx("li",{className:"my-2",children:"Personalized Front End Layout"}),e.jsx("li",{className:"my-2",children:"Endless possibilities"}),e.jsx("li",{className:"my-2",children:"Multilingual capabilities"}),e.jsx("li",{className:"my-2",children:"Customer feedback and ratings"}),e.jsx("li",{className:"my-2",children:"infinite pages of information"}),e.jsx("li",{className:"my-2",children:"Data insights"}),e.jsx("li",{className:"my-2",children:"Integration of Social Sharing"})]})}),e.jsx("div",{className:"col-12 col-lg-4",children:e.jsxs("ul",{style:{color:"#686D76"},children:[e.jsx("li",{className:"my-2",children:"Automatic Image Resizing"}),e.jsx("li",{className:"my-2",children:"No End to the Categories"}),e.jsx("li",{className:"my-2",children:"Support for multiple currencies"}),e.jsx("li",{className:"my-2",children:"Support for multiple tax rates."}),e.jsx("li",{className:"my-2",children:"Incorporating payment gateways."}),e.jsx("li",{className:"my-2",children:"Orders via Email"}),e.jsx("li",{className:"my-2",children:"Education and Assistance for Managing"})]})})]})]}),e.jsxs("div",{className:"container mobile-only",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:"Distinguished Online Programs"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/customweb",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Lr,alt:"",className:"me-2"}),"Custom web applications"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/ecommerceweb",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Lr,alt:"",className:"me-2"}),"E-Commerce web solutions"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/matrimonyweb",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Lr,alt:"",className:"me-2"}),"Matrimony Web Solutions"]})})})]})]}),e.jsx("style",{children:`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
        `})]}),Lx=d("assets/images/Matrimony-Web-Solutions.png"),Rx=d("assets/images/matrimony-image-2.webp");d("assets/images/Rectangle-27.webp");const Rr=d("assets/images/trip.webp"),Px=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Lx,alt:"Matrimony Web Solutions Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container my-4 justify-content-center p-3",style:{textAlign:"justify"},children:e.jsxs("div",{className:"row justify-content-center align-items-center",children:[e.jsxs("div",{className:"col-12 col-lg-8",children:[e.jsx("p",{style:{color:"#686D76"},children:"Marriages are formed in paradise, and marriage websites are built using the Hrify Digital. We are well-known for the numerous successful matrimony websites that we have supplied to our clientele. We have developed successful matrimonial websites with thousands of profiles. Our expertise in understanding marriage requirements and user experience distinguishes us in providing exceptional solutions."}),e.jsx("p",{style:{color:"#686D76"},children:"We specialize in creating highly effective marriage matching websites capable of managing thousands of profiles. What sets us apart is our deep understanding of user experience and matrimonial needs. Our solutions range from simple profiling systems to complex, multi-database platforms with optional services. We provide expert guidance to implement the right solution for your needs."})]}),e.jsx("div",{className:"col-12 col-lg-4",children:e.jsx("img",{className:"img-fluid ",src:Rx,alt:""})})]})}),e.jsxs("div",{className:"container p-4",style:{textAlign:"justify"},children:[e.jsx("h3",{style:{color:"#686D76"},children:"Standard Features Our Matrimony Solutions Offer"}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Thorough user registration that collects all personal information"]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Beautiful and distinctive website design created by our gifted designers"]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Completely individualized for your hobbies and community "]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Easy and efficient matchmaking services"]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Search for profiles in full according to community, age, religion, location, and a host of other factors. "]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   extensive administrative panel for controlling every aspect of the website "]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Outstanding returns on investment, as demonstrated by our current clientele"]})," ",e.jsx("br",{}),e.jsx("h3",{style:{color:"#686D76"},children:"Matrimony websites are accessible to who?"}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Matrimony consultants operating independently can elevate their business with our feature-rich solutions designed to efficiently manage large member bases."]}),e.jsxs("p",{style:{color:"#686D76",textAlign:"justify"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Prospective investors looking to launch a matrimony business can kickstart their venture with our comprehensive solutions, equipped with everything necessary to initiate and           successfully operate a matrimony business."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"    Individuals who currently operate a matrimony website with a substantial profile base and aim to expand their business to the next level. "]})]}),e.jsxs("div",{className:"container mobile-only",style:{textAlign:"justify"},children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:"Distinguished Online Programs"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/customweb",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Rr,alt:"",className:"me-2"}),"Custom web applications"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/ecommerceweb",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Rr,alt:"",className:"me-2"}),"E-Commerce web solutions"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/matrimonyweb",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Rr,alt:"",className:"me-2"}),"Matrimony Web Solutions"]})})})]})]}),e.jsx("style",{children:`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
        `})]}),Hx=d("assets/images/Mobile Application.png"),Ox=d("assets/images/mobile-image-2.webp");d("assets/images/Rectangle-27.webp");const _x=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Hx,alt:"Mobile Application Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"content container-fluid ",children:e.jsxs("div",{className:"row h-100 justify-content-center align-items-center p-2 p-lg-2 mx-lg-5 mb-0",children:[e.jsxs("div",{className:"col-12 col-lg-8 d-flex flex-column justify-content-center ",children:[e.jsx("h1",{style:{textAlign:"justify"},children:"Mobile Application Company In Chennai"}),e.jsxs("p",{style:{color:"#686D76"},children:["Hrify Digital, established in 2023, has emerged as a leading app development firm in Tiruvannamalai, serving a wide range of industries. With a proven track record of over 100+ successful app development projects, we are recognized as a premier app development company in Tiruvannamalai. Our expertise extends to delivering innovative app solutions for startups, entrepreneurs, and enterprises worldwide.",e.jsx("br",{}),e.jsx("br",{}),"In today's digital age, mobile apps play a crucial role in connecting businesses with their customers and enhancing user experiences. For small businesses aiming to expand their reach and engage with users effectively, partnering with a reliable app development company like Hrify Digital is essential. With our extensive experience in crafting high-quality, cost-effective app solutions, we are dedicated to helping your business excel in the mobile landscape."]})]}),e.jsx("div",{className:"col-12 col-lg-4 d-flex flex-column justify-content-center",children:e.jsx("img",{className:"img-fluid",src:Ox,alt:""})})]})}),e.jsxs("div",{className:"container",style:{textAlign:"justify"},children:[e.jsx("h3",{style:{color:"#686D76"},children:"Our three-step method is used in the development of mobile applications."}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"","Planning and Analysis This first phase entails gathering requirements, defining the scope of the project, performing market research and developing a thorough project plan. It comprises determining the app's goals, target audience, and important capabilities."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"","Design & Development When the planning is finished, the design process begins. This involves UI/UX design, prototyping and developing wireframes. Development is the process of actually creating the software, integrating features, and assuring compatibility across various devices and platforms."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"","Testing and deployment. In this final phase, comprehensive testing is carried out to detect and resolve any faults or issues. This comprises functional and usability testing, performance testing, and security testing. Once testing is completed and the app fulfills quality standards, it is released to the appropriate app stores for customers to download and install."]})]})]}),Ux=d("assets/images/Domains,Hosting-and-Cloud-Solutions.png"),$x=d("assets/images/domain-image-2.webp"),Vx=d("assets/images/domain-image-3.webp");d("assets/images/Rectangle-27.webp");const Bt=d("assets/images/trip.webp"),qx=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Ux,alt:"Domains, Hosting and Cloud Solutions Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container",style:{textAlign:"justify"},children:e.jsxs("div",{className:"row p-lg-4 p-2 align-items-center justify-content-center",children:[e.jsx("div",{className:"col-12 col-lg-8",children:e.jsx("p",{style:{color:"#686D76"},children:"    Hrify Digital offers comprehensive hosting services including domain registration, SSL certificates, and maintenance, all backed by superior support. We cater to specific hosting and cloud solution needs with customized options that align with your requirements and budget. Our dedicated Server Support Team and partnerships with global hosting companies and data centers ensure seamless handling of even the most complex demands. We also provide expert assistance in selecting and installing SSL certificates, ensuring you choose the right solution for your business and receive professional setup and installation support."})}),e.jsx("div",{className:"col-12 col-lg-4 my-5 my-lg-0",children:e.jsx("img",{className:"img-fluid",src:$x,alt:""})})]})}),e.jsx("div",{className:"container",style:{textAlign:"justify"},children:e.jsxs("div",{className:"row align-items-center justify-content-center",children:[e.jsxs("div",{className:"col-12 col-lg-8 p-4",children:[e.jsx("h3",{children:"Advantages of choosing our Hosting and Cloud Services:"})," ",e.jsx("br",{}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"Customized Remedies tailored cloud and hosting solutions to meet your unique requirements and financial constraints."]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"Constant monitoring of websites"]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"Our Server Support Team delivers efficient management and troubleshooting assistance."]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}})," 99.9% uptime assurance"]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"Enhance operational effectiveness and flexibility with our customized hosting and cloud services."]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"committed backup upkeep"]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"specific server assistance"]})})]})]}),e.jsx("div",{className:"col-12 col-lg-4",children:e.jsx("img",{className:"img-fluid",src:Vx,alt:""})})]})}),e.jsxs("div",{className:"container mobile-only",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:"Prime Commercial Services"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/domains",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Bt,alt:"",className:"me-2"}),"Dominas, HGosting and Cloud"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/personalemail",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Bt,alt:"",className:"me-2"}),"Personal and Enterprise Email"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/googlework",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Bt,alt:"",className:"me-2"}),"Google Apps and Services"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/emailcampaign",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Bt,alt:"",className:"me-2"}),"Email Campaign Management"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/awsimpl",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Bt,alt:"",className:"me-2"}),"AWS Servcies Implementations"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/designbranding",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Bt,alt:"",className:"me-2"}),"Design and Branding"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/digitalmarketing",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Bt,alt:"",className:"me-2"}),"Digital Marketing and Social Media"]})})})]})]}),e.jsx("style",{children:`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
        `})]}),Yx=d("assets/images/Personal-and-Enterprise-Email-Solutions.png"),Gx=d("assets/images/personal-image-2.webp");d("assets/images/Rectangle-27.webp");const Dt=d("assets/images/trip.webp"),Qx=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Yx,alt:"Personal and Enterprise Email Solutions Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("br",{}),e.jsx("div",{className:"container",style:{textAlign:"justify"},children:e.jsxs("div",{className:"row p-lg-4 p-2 align-items-center justify-content-center",children:[e.jsx("div",{className:"col-12 col-lg-8",children:e.jsx("p",{style:{color:"#686D76"},children:" Emails have always been the most important form of formal communication, even though digital technology has advanced to the point where new channels and modes of communication appear on a daily basis. Email solutions are still getting better nowadays in terms of simplicity, versatility, and new features.  A professional email address is necessary for any size of organization. It builds your professionalism and brand while also enhancing the quality of your communications. The major competitors like Google and Microsoft have made the email channels more feature-rich and streamlined."})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"col-12 col-lg-4 my-5 my-lg-5",children:e.jsx("img",{className:"img-fluid",src:Gx,alt:""})})]})}),e.jsxs("div",{className:"container mobile-only",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:"Prime Commercial Services"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/domains",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Dt,alt:"",className:"me-2"}),"Dominas, HGosting and Cloud"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/personalemail",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Dt,alt:"",className:"me-2"}),"Personal and Enterprise Email"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/googlework",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Dt,alt:"",className:"me-2"}),"Google Apps and Services"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/emailcampaign",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Dt,alt:"",className:"me-2"}),"Email Campaign Management"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/awsimpl",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Dt,alt:"",className:"me-2"}),"AWS Servcies Implementations"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/designbranding",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Dt,alt:"",className:"me-2"}),"Design and Branding"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/digitalmarketing",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Dt,alt:"",className:"me-2"}),"Digital Marketing and Social Media"]})})})]})]}),e.jsx("style",{children:`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
        `})]}),Kx=d("assets/images/Google-Work-Partner.png"),Xx=d("assets/images/google-image-2.webp"),Zx=d("assets/images/g-im-1.webp"),Jx=d("assets/images/g-im-2.webp"),ef=d("assets/images/g-im-3.webp"),tf=d("assets/images/g-im-4.webp"),sf=d("assets/images/g-im-5.webp"),nf=d("assets/images/g-im-6.webp"),rf=d("assets/images/g-im-7.webp"),af=d("assets/images/g-im-8.webp"),lf=d("assets/images/g-im-9.webp");d("assets/images/Rectangle-27.webp");const Ct=d("assets/images/trip.webp"),of=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Kx,alt:"Google Work Partner Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container my-3",style:{textAlign:"justify"},children:e.jsxs("div",{className:"row p-lg-1 align-items-center justify-content-center",children:[e.jsx("div",{className:"col-12 col-lg-8",children:e.jsx("p",{style:{color:"#686D76"},children:" We provide G Suite implementations that are customized for companies of all sizes and give the highest caliber of expert support for any required number of user accounts. G Suite, originally Google Apps for Work, is a collection of Google Cloud's intelligent business apps. As a licensed reseller, we help you with implementation, support, and administration to guarantee a smooth integration and operation."})})," ",e.jsx("br",{})," ",e.jsx("br",{}),e.jsx("div",{className:"col-12 col-lg-4 my-5 my-lg-0",children:e.jsx("img",{className:"img-fluid",src:Xx,alt:""})})]})}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"row align-items-center justify-content-center",children:[e.jsxs("div",{className:"col-12 col-lg-4 justify-content-center align-items-center text-center p-5",children:[e.jsx("img",{className:"img-fluid mx-auto d-block",src:Zx,alt:""}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h3",{style:{color:"#686D76"},children:"Drive"}),e.jsx("br",{}),e.jsx("p",{style:{color:"#686D76",textAlign:"center"},children:"Organize all of your files in one location so you can always have the most recent version with you. Sync files automatically from your desktop."})]}),e.jsxs("div",{className:"col-12 col-lg-4 justify-content-center align-items-center text-center p-5",children:[e.jsx("img",{className:"img-fluid mx-auto d-block",src:Jx,alt:""}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h3",{style:{color:"#686D76"},children:"Gmail"}),e.jsx("br",{}),e.jsx("p",{style:{color:"#686D76",textAlign:"center"},children:"Expert, ad-free email with 40GB of mailbox space and round-the-clock help. Compatible with different email clients as well as Microsoft Outlook."})]}),e.jsxs("div",{className:"col-12 col-lg-4 justify-content-center align-items-center text-center p-5",children:[e.jsx("img",{className:"img-fluid mx-auto d-block",src:ef,alt:""}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h3",{style:{color:"#686D76"},children:"Slides"}),e.jsx("br",{}),e.jsx("p",{style:{color:"#686D76",textAlign:"center"},children:"You can create, edit, and deliver polished presentations from any smart device. Multiple collaborators can simultaneously work on the presentation."})]})]}),e.jsxs("div",{className:"row align-items-center justify-content-center",children:[e.jsxs("div",{className:"col-12 col-lg-4 justify-content-center align-items-center text-center p-5",children:[e.jsx("img",{className:"img-fluid mx-auto d-block",src:tf,alt:""}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h3",{style:{color:"#686D76"},children:"DOCS"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("p",{style:{color:"#686D76",textAlign:"center"},children:"You can create and modify text documents using any smart device. Multiple users can collaborate on the same document simultaneously, with changes being automatically saved."})]}),e.jsxs("div",{className:"col-12 col-lg-4 justify-content-center align-items-center text-center p-5",children:[e.jsx("img",{className:"img-fluid mx-auto d-block",src:sf,alt:""}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h3",{style:{color:"#686D76"},children:"Meet"}),e.jsx("br",{}),e.jsx("p",{style:{color:"#686D76",textAlign:"center"},children:"Easily communicate through text chats, voice calls, or high-definition video calls with integrated screen sharing. Save both time and costs on travel while enjoying the advantages of face-to-face interactions."})]}),e.jsxs("div",{className:"col-12 col-lg-4 justify-content-center align-items-center text-center p-5",children:[e.jsx("img",{className:"img-fluid mx-auto d-block",src:nf,alt:""}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h3",{style:{color:"#686D76"},children:"Sites"}),e.jsx("br",{}),e.jsx("p",{style:{color:"#686D76",textAlign:"center"},children:"Create a mobile-friendly website for your team or project, or a customer portal effortlessly using intuitive drag-and-drop tools."})]})]}),e.jsxs("div",{className:"row align-items-center justify-content-center",children:[e.jsxs("div",{className:"col-12 col-lg-4 justify-content-center align-items-center text-center p-5",children:[e.jsx("img",{className:"img-fluid mx-auto d-block",src:rf,alt:""}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h3",{style:{color:"#686D76"},children:"Sheets"}),e.jsx("br",{}),e.jsx("p",{style:{color:"#686D76",textAlign:"center"},children:"You can create and modify spreadsheets on any smart device. Manage everything from basic task lists to advanced data analysis, including charts, filters, and pivot tables."})]}),e.jsxs("div",{className:"col-12 col-lg-4 justify-content-center align-items-center text-center p-5",children:[e.jsx("img",{className:"img-fluid mx-auto d-block",src:af,alt:""}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h3",{style:{color:"#686D76"},children:"Calendar"}),e.jsx("br",{}),e.jsx("p",{style:{color:"#686D76",textAlign:"center"},children:"Save time organizing your schedule and focus more on productivity with shareable calendars that seamlessly integrate with Gmail, Drive, and Hangouts, keeping you informed about upcoming events and tasks."})]}),e.jsxs("div",{className:"col-12 col-lg-4 justify-content-center align-items-center text-center p-5",children:[e.jsx("img",{className:"img-fluid mx-auto d-block",src:lf,alt:""}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h3",{style:{color:"#686D76"},children:"Admin"}),e.jsx("br",{}),e.jsx("p",{style:{color:"#686D76",textAlign:"center"},children:"Managing your system shouldn't be complicated. Effortlessly add users, oversee devices, and adjust security and settings to ensure your data remains secure without the need for extensive manuals or guides."})]})]})]}),e.jsxs("div",{className:"container mobile-only",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:"Prime Commercial Services"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/domains",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Ct,alt:"",className:"me-2"}),"Dominas, HGosting and Cloud"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/personalemail",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Ct,alt:"",className:"me-2"}),"Personal and Enterprise Email"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/googlework",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Ct,alt:"",className:"me-2"}),"Google Apps and Services"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/emailcampaign",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Ct,alt:"",className:"me-2"}),"Email Campaign Management"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/awsimpl",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Ct,alt:"",className:"me-2"}),"AWS Servcies Implementations"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/designbranding",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Ct,alt:"",className:"me-2"}),"Design and Branding"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/digitalmarketing",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Ct,alt:"",className:"me-2"}),"Digital Marketing and Social Media"]})})})]})]}),e.jsx("style",{children:`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
        `})]});d("assets/images/Rectangle-27.webp");const cf=d("assets/images/Email-Campaign-Management-Solutions.png"),df=d("assets/images/email-image-2.webp"),mf=d("assets/images/email-image-3.webp"),zt=d("assets/images/trip.webp"),uf=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:cf,alt:"Email Campaign Management Solutions Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row p-lg-4 p-2 align-items-center justify-content-center",children:[e.jsx("div",{className:"col-12 col-lg-9",children:e.jsx("p",{style:{color:"#686D76",textAlign:"justify"},children:" Sending email campaigns to your customers and authorized leads has long been a fundamental marketing practice. However, due to advancements in spam filters and increasing complexities, this task has become more challenging. This is where Hrify Digital offers a straightforward Email Campaign Management Solution for your business, leveraging the AWS SES mailing platform. This system is tailored for managing large volumes of email IDs efficiently. While focused on genuine user mailing and mail list management, its robust features make it a compelling choice."})}),e.jsx("div",{className:"col-12 col-lg-3 my-5 my-lg-0 justify-content-center",children:e.jsx("img",{className:"img-fluid",src:df,alt:""})})]})}),e.jsx("div",{style:{backgroundColor:"#F1F1F1",textAlign:"justify"},className:"p-4",children:e.jsxs("div",{className:"row align-items-center justify-content-center ms-lg-3",children:[e.jsxs("div",{className:"col-12 col-lg-8 p-4",children:[e.jsx("h3",{children:"Advantages of choosing our Hosting and Cloud Services:"})," ",e.jsx("br",{}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Simplified Management: Easily handle email campaigns with streamlined processes."]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Management of mailing lists"]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Scheduling of campaign mail"]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   99.9% uptime assurance"]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   All-inclusive Features: Get strong instruments designed for actual user mailing and list administration."]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"  Plans that are adaptable and solely limit the quantity of emails sent, rather than the number of contacts addressed"]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Reliable Support Take advantage of Hrify Digital' proficiency in email campaign optimization."]})})]})]}),e.jsx("div",{className:"col-12 col-lg-3",children:e.jsx("img",{className:"img-fluid",src:mf,alt:""})})]})}),e.jsxs("div",{className:"container mobile-only",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:"Prime Commercial Services"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/domains",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:zt,alt:"",className:"me-2"}),"Domains, Hosting and Cloud"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/personalemail",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:zt,alt:"",className:"me-2"}),"Personal and Enterprise Email"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/googlework",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:zt,alt:"",className:"me-2"}),"Google Apps and Services"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/emailcampaign",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:zt,alt:"",className:"me-2"}),"Email Campaign Management"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/awsimpl",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:zt,alt:"",className:"me-2"}),"AWS Services Implementations"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/designbranding",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:zt,alt:"",className:"me-2"}),"Design and Branding"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/digitalmarketing",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:zt,alt:"",className:"me-2"}),"Digital Marketing and Social Media"]})})})]})]}),e.jsx("style",{children:`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
        `})]});d("assets/images/Rectangle-27.webp");const hf=d("assets/images/AWS-Services-Implementations.png"),pf=d("assets/images/aws-image-2.webp"),gf=d("assets/images/a-im-1.webp");d("assets/images/a-im-2.webp");const xf=d("assets/images/a-im-3.webp"),ff=d("assets/images/a-im-4.webp"),yf=d("assets/images/a-im-5.webp"),jf=d("assets/images/a-im-6.webp"),vf=d("assets/images/a-im-7.webp"),bf=d("assets/images/a-im-8.webp"),wf=d("assets/images/a-im-9.webp"),Nf=d("assets/images/a-im-10.webp"),kf=d("assets/images/a-im-11.webp"),Sf=d("assets/images/a-im-12.webp"),Bf=d("assets/images/construction.webp"),Mt=d("assets/images/trip.webp"),Df=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:hf,alt:"AWS Services Implementations Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row p-lg-4 p-2 align-items-center justify-content-center",children:[e.jsx("div",{className:"col-12 col-lg-9",children:e.jsx("p",{style:{color:"#686D76",textAlign:"justify"},children:" Amazon Web Services (AWS) has significantly impacted the cloud market and is now the preferred choice for businesses ranging from startups to large corporations. As a partner, Hrify Digital offers expertise in leveraging AWS advantages for your business. We specialize in providing dedicated support to implement AWS Solutions tailored to enhance your operational efficiency and scalability."})}),e.jsx("div",{className:"col-12 col-lg-3 my-5 my-lg-0 justify-content-center",children:e.jsx("img",{className:"img-fluid",src:pf,alt:""})})]})})," ",e.jsx("br",{}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"row text-center",children:[e.jsx("h3",{style:{fontWeight:"700"},children:"Services offered by Amazon"})," ",e.jsx("br",{})," ",e.jsx("br",{})]}),e.jsxs("div",{className:"row text-center align-items-center",children:[e.jsxs("div",{className:"col-12 col-lg-3 justify-content-center p-4",children:[e.jsx("img",{src:gf,alt:"",className:"img-fluid mx-auto d-block"}),e.jsx("h3",{style:{color:"#686D76",textAlign:"center"},children:"Computer"})]}),e.jsxs("div",{className:"col-12 col-lg-3 justify-content-center p-4",children:[e.jsx("img",{src:Bf,alt:"",className:"img-fluid mx-auto d-block"}),e.jsx("h3",{style:{color:"#686D76",textAlign:"center"},children:"Developer Tools"})]}),e.jsxs("div",{className:"col-12 col-lg-3 justify-content-center p-4",children:[e.jsx("img",{src:xf,alt:"",className:"img-fluid mx-auto d-block"}),e.jsx("h3",{style:{color:"#686D76",textAlign:"center"},children:"Management Tools"})]}),e.jsxs("div",{className:"col-12 col-lg-3 justify-content-center p-4",children:[e.jsx("img",{src:ff,alt:"",className:"img-fluid mx-auto d-block"}),e.jsx("h3",{style:{color:"#686D76",textAlign:"center"},children:"Internet of Things"})]})]}),e.jsxs("div",{className:"row text-center align-items-center",children:[e.jsxs("div",{className:"col-12 col-lg-3 justify-content-center p-4",children:[e.jsx("img",{src:yf,alt:"",className:"img-fluid mx-auto d-block"}),e.jsx("h3",{style:{color:"#686D76",textAlign:"center"},children:"Storage"})]}),e.jsxs("div",{className:"col-12 col-lg-3 justify-content-center p-4",children:[e.jsx("img",{src:jf,alt:"",className:"img-fluid mx-auto d-block"}),e.jsxs("h3",{style:{color:"#686D76",textAlign:"center"},children:["Security Identity &",e.jsx("br",{}),"Compliance"]})]}),e.jsxs("div",{className:"col-12 col-lg-3 justify-content-center p-4",children:[e.jsx("img",{src:vf,alt:"",className:"img-fluid mx-auto d-block"}),e.jsx("h3",{style:{color:"#686D76",textAlign:"center"},children:"Application Services"})]}),e.jsxs("div",{className:"col-12 col-lg-3 justify-content-center p-4",children:[e.jsx("img",{src:bf,alt:"",className:"img-fluid mx-auto d-block"}),e.jsxs("h3",{style:{color:"#686D76",textAlign:"center"},children:["Desktop & App",e.jsx("br",{}),"Streaming"]})]})]}),e.jsxs("div",{className:"row text-center align-items-center",children:[e.jsxs("div",{className:"col-12 col-lg-3 justify-content-center",children:[e.jsx("img",{src:wf,alt:"",className:"img-fluid mx-auto d-block"}),e.jsx("h3",{style:{color:"#686D76",textAlign:"center"},children:"Database"})]}),e.jsxs("div",{className:"col-12 col-lg-3 justify-content-center",children:[e.jsx("img",{src:Nf,alt:"",className:"img-fluid mx-auto d-block"}),e.jsx("h3",{style:{color:"#686D76",textAlign:"center"},children:"Analytics"})]}),e.jsxs("div",{className:"col-12 col-lg-3 justify-content-center",children:[e.jsx("img",{src:kf,alt:"",className:"img-fluid mx-auto d-block"}),e.jsx("h3",{style:{color:"#686D76",textAlign:"center"},children:"Messaging"})]}),e.jsxs("div",{className:"col-12 col-lg-3 justify-content-center",children:[e.jsx("img",{src:Sf,alt:"",className:"img-fluid mx-auto d-block"}),e.jsx("h3",{style:{color:"#686D76",textAlign:"center"},children:"Game Development"})]})]})]})," ",e.jsx("br",{})," ",e.jsx("br",{}),e.jsxs("div",{className:"container mobile-only",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:"Prime Commercial Services"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/domains",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Mt,alt:"",className:"me-2"}),"Domains, Hosting and Cloud"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/personalemail",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Mt,alt:"",className:"me-2"}),"Personal and Enterprise Email"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/googlework",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Mt,alt:"",className:"me-2"}),"Google Apps and Services"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/emailcampaign",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Mt,alt:"",className:"me-2"}),"Email Campaign Management"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/awsimpl",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Mt,alt:"",className:"me-2"}),"AWS Services Implementations"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/designbranding",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Mt,alt:"",className:"me-2"}),"Design and Branding"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/digitalmarketing",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Mt,alt:"",className:"me-2"}),"Digital Marketing and Social Media"]})})})]})]}),e.jsx("style",{children:`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
        `})]});d("assets/images/Rectangle-27.webp");const Cf=d("assets/images/Design-and-Branding-Solutions.png"),zf=d("assets/images/design-image-2.webp"),Et=d("assets/images/trip.webp"),Mf=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Cf,alt:"Design and Branding Solutions Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center justify-content-center ms-lg-0",children:[e.jsxs("div",{className:"col-12 col-lg-8 p-4",style:{textAlign:"justify"},children:[e.jsx("p",{style:{color:"#686D76",textAlign:"justify"},children:"Whether you need a logo designed or a complete branding solution that includes design for all of your business props, Hrify Digital provides customized design and branding solutions for your company. To deliver the greatest results for your business design expectations, we have devoted designers that only use Photoshop and Illustrator. Please provide me with a concise explanation in the exact same terms."})," ",e.jsx("br",{}),e.jsx("h3",{children:"Services Included in Our Design Solutions:"})," ",e.jsx("br",{}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Design of a Logo Make unique, enduring logos for your company."]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Solutions for Branding Create thorough branding materials and tactics."]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Graphic Design Create a range of marketing collateral and business accessories."]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Proficiency in Software For detailed design work, use Adobe Illustrator and Photoshop."]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Banner Image Designs & Visiting Card Custom Designs"]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"  Print Material and Label Designs"]})}),e.jsx("li",{children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"  Social Media Promotion Image Designs"]})})]})]}),e.jsx("div",{className:"col-12 col-lg-3",children:e.jsx("img",{className:"img-fluid",src:zf,alt:""})})]})}),e.jsxs("div",{className:"container mobile-only",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:"Prime Commercial Services"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/domains",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Et,alt:"",className:"me-2"}),"Domains, Hosting and Cloud"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/personalemail",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Et,alt:"",className:"me-2"}),"Personal and Enterprise Email"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/googlework",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Et,alt:"",className:"me-2"}),"Google Apps and Services"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/emailcampaign",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Et,alt:"",className:"me-2"}),"Email Campaign Management"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/awsimpl",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Et,alt:"",className:"me-2"}),"AWS Services Implementations"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/designbranding",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Et,alt:"",className:"me-2"}),"Design and Branding"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/digitalmarketing",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Et,alt:"",className:"me-2"}),"Digital Marketing and Social Media"]})})})]})]}),e.jsx("style",{children:`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
        `})]});d("assets/images/Rectangle-27.webp");const Ef=d("assets/images/DigitalMarketing&SocialMediaSolutions.png"),Wf=d("assets/images/digital-image-2.webp"),Wt=d("assets/images/trip.webp"),If=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Ef,alt:"Digital Marketing & Social Media Solutions Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container my-4",children:e.jsxs("div",{className:"row align-items-center justify-content-center ms-lg-3",children:[e.jsxs("div",{className:"col-12 col-lg-8 p-4",children:[e.jsx("p",{style:{color:"#686D76",textAlign:"justify"},children:"Over the last ten years, social media and digital marketing have emerged as the most sought-after strategies for driving online sales and clientele for businesses. The method of advertising websites to search engines and social media platforms has never changed, even when the platforms, algorithms, and techniques for these are updated annually."}),e.jsx("p",{style:{color:"#686D76",textAlign:"justify"},children:"At Hrify Digital, we have a particular plan that uses only a few tactics to have targeted digital marketing for businesses. Better ranking, more traffic, and more traction are the outcomes of this.  We carefully combine off-page advertising and organic SEO to improve your search engine ranking. Improved traffic and more business conversions are the outcomes when combined with our focused social media marketing."})]}),e.jsx("div",{className:"col-12 col-lg-4",children:e.jsx("img",{className:"img-fluid",src:Wf,alt:""})})]})}),e.jsxs("div",{className:"container mobile-only",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:"Prime Commercial Services"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/domains",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Wt,alt:"",className:"me-2"}),"Domains, Hosting and Cloud"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/personalemail",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Wt,alt:"",className:"me-2"}),"Personal and Enterprise Email"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/googlework",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Wt,alt:"",className:"me-2"}),"Google Apps and Services"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/emailcampaign",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Wt,alt:"",className:"me-2"}),"Email Campaign Management"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/awsimpl",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Wt,alt:"",className:"me-2"}),"AWS Services Implementations"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/designbranding",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Wt,alt:"",className:"me-2"}),"Design and Branding"]})})}),e.jsx("div",{className:"col-12 col-md-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/digitalmarketing",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Wt,alt:"",className:"me-2"}),"Digital Marketing and Social Media"]})})})]})]}),e.jsx("style",{children:`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
        `})]}),Af=d("assets/images/MarketingSupportServices.png"),Tf=d("assets/images/market-image-2.webp"),Ff=d("assets/images/market-image-3.webp"),Lf=()=>(B.useEffect(()=>{const t=document.getElementById("enquiry-link"),s=document.getElementById("popup-form"),n=document.getElementById("close-btn");if(t&&s&&n){const a=()=>{s.style.display="flex"},l=()=>{s.style.display="none"};t.addEventListener("click",c=>{c.preventDefault(),a()}),n.addEventListener("click",l),window.addEventListener("click",c=>{c.target===s&&l()}),document.getElementById("enquiry-form").addEventListener("submit",c=>{c.preventDefault(),alert("Form submitted!"),l()})}const i=document.getElementById("downloadBtn"),r=document.getElementById("popup");i&&r&&(i.onclick=function(a){a.preventDefault(),r.style.display="block"},r.onclick=function(a){a.target===r&&(r.style.display="none")})},[]),e.jsxs("div",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Af,alt:"Marketing Support Services Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"content container-fluid",children:e.jsxs("div",{className:"row h-100 justify-content-center align-items-center",children:[e.jsx("div",{className:"col d-flex flex-column justify-content-center m-4",children:e.jsx("p",{style:{color:"#686D76"},children:"In order to connect with new customers and prospects who are interested in their goods and services, a firm must first engage in the lead generation process, which is known as marketing support services. The sales cycle and sales funnel start with this phase. The deliberate process of generating leads, tracking them, and converting them is known as lead generation. While there are many different lead generation strategies utilized by sales and business professionals worldwide, we provide a tried-and-true approach that can help you grow your company. We produce high-quality leads for your company, which multiplies the likelihood that they will convert."})}),e.jsx("div",{className:"col d-flex flex-column justify-content-center m-4",children:e.jsx("img",{className:"img-fluid",src:Tf,alt:"Marketing Support Services"})})]})}),e.jsxs("div",{style:{backgroundColor:"#F1F1F1"},className:"container p-4",children:[e.jsx("h3",{style:{color:"#686D76"},children:"Significance of Marketing Support Services for Businesses:"}),e.jsx("p",{style:{color:"#686D76"},children:"Any firm must do it, and if you do it well, you can boost revenue for your enterprise. The process of generating leads has been made much simpler by social media and search engines. To convert into sales, a corporation must first create potential customers and pique people's interest in its efforts, operations, goods, and other offerings. Understanding the quality of leads and how to handle them is essential for successful lead creation."}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h3",{style:{color:"#686D76"},children:"For what reason are marketing support services needed?"}),e.jsx("div",{className:"content container-fluid",children:e.jsxs("div",{className:"row h-100 justify-content-center align-items-center",children:[e.jsxs("div",{className:"col-12 col-lg-3 d-flex flex-column justify-content-center m-4",children:[e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Business uninterruptedness"]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Knowledge of the market"]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Increased Revenue and Turnover"]})]}),e.jsxs("div",{className:"col-12 col-lg-3 d-flex flex-column justify-content-center m-4",children:[e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Sales forecasting"]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   steady pipeline"]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Cross selling opportunities"]})]}),e.jsxs("div",{className:"col-12 col-lg-3 d-flex flex-column justify-content-center m-4",children:[e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Customer Engagement"]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Business Growth"]}),e.jsx("p",{children:" "})]})]})})]}),e.jsxs("div",{className:"container p-4",children:[e.jsx("h3",{style:{color:"#686D76"},children:"Our Priceless Offering:"}),e.jsx("p",{style:{color:"#686D76"},children:"In Tiruvanaamalai, Hrify Digital was a pioneer in the internet industry. We have created thousands of portals that are successfully used by several enterprises. We also have experience creating, managing, and advertising public interface sites that have a large audience and generate a lot of traffic."}),e.jsx("p",{style:{color:"#686D76"},children:"We have built tools to monitor and operate the leads in addition to strategizing the right lead production formula thanks to our combined knowledge and exposure. Our firms' experiments have led to this evolving experience. With this knowledge, we can provide businesses with real lead generating services that will spur their expansion. We can provide quality leads that are well-targeted and have a high conversion rate. Our combined experience with our changing tactics gives companies a cutting-edge marketing advantage and a reliable platform for generating leads."})]}),e.jsx("div",{className:"container p-4",children:e.jsxs("div",{className:"row h-100 justify-content-center align-items-center",children:[e.jsx("div",{className:"row",children:e.jsx("h2",{style:{color:"#686D76"},children:"Several strategies used in lead generation include:"})}),e.jsxs("div",{className:"col-12 col-lg-3 d-flex flex-column justify-content m-4",children:[e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   campaigns for digital marketing"]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   email marketing"]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Google ad words"]})]}),e.jsxs("div",{className:"col-12 col-lg-3 d-flex flex-column justify-content-center m-4",children:[e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Advertisements on Portals"]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Website search engine optimization"]}),e.jsxs("div",{className:"d-flex",children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),e.jsx("p",{style:{color:"#686D76"},children:"   Social media marketing and promotions"})]})]}),e.jsx("div",{className:"col-12 col-lg-3 d-flex flex-column justify-content-center m-4",children:e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   SMS marketing"]})})]})}),e.jsx("div",{className:"container p-4",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsxs("div",{className:"col-12 col-md-6 mb-4 mb-md-0",children:[e.jsx("h3",{className:"text-muted",children:"Our System of Values:"}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   We don't sell leads to other people twice."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Our sole method of generating leads is pull marketing."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   We only use safe techniques to provide high-quality leads."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   We abide by all GDPR regulations."]}),e.jsx("br",{}),e.jsx("h3",{className:"text-muted",children:"Benefits of Services:"}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Authentic outcomes in full."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Delivery depending on ROI."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Thorough reporting and updates."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Frequent advice for enhancing business operations."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Technology-driven strategies."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Additional resources and services."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Advantage of network."]})]}),e.jsx("div",{className:"col-12 col-md-6 d-flex justify-content-center",children:e.jsx("img",{className:"img-fluid",src:Ff,alt:"Marketing Support Services"})})]})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{id:"popup-form",className:"popup-form",style:{display:"none"},children:e.jsxs("div",{className:"form-container",children:[e.jsx("span",{className:"close-btn",id:"close-btn",children:"×"}),e.jsx("h2",{children:"Enquiry Form"}),e.jsxs("form",{id:"enquiry-form",children:[e.jsx("label",{htmlFor:"name",children:"Name:"}),e.jsx("input",{type:"text",id:"name",name:"name",required:!0}),e.jsx("label",{htmlFor:"email",children:"Email:"}),e.jsx("input",{type:"email",id:"email",name:"email",required:!0}),e.jsx("label",{htmlFor:"mobile",children:"Mobile:"}),e.jsx("input",{type:"tel",id:"mobile",name:"mobile",required:!0}),e.jsx("label",{htmlFor:"company",children:"Your Company:"}),e.jsx("input",{type:"text",id:"company",name:"company",required:!0}),e.jsx("label",{htmlFor:"description",children:"Describe what you need:"}),e.jsx("textarea",{id:"description",name:"description",rows:4,required:!0}),e.jsx("button",{type:"submit",children:"Send"})]})]})}),e.jsx("style",{children:`
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
        `})]})),Rf=d("assets/images/WebsiteAuditing&ConsultingService.png"),Pf=d("assets/images/web-audit-image-2.webp"),Hf=()=>(B.useEffect(()=>{const t=document.getElementById("enquiry-link"),s=document.getElementById("popup-form"),n=document.getElementById("close-btn");if(t&&s&&n){const a=()=>{s.style.display="flex"},l=()=>{s.style.display="none"};t.addEventListener("click",c=>{c.preventDefault(),a()}),n.addEventListener("click",l),window.addEventListener("click",c=>{c.target===s&&l()}),document.getElementById("enquiry-form").addEventListener("submit",c=>{c.preventDefault(),alert("Form submitted!"),l()})}const i=document.getElementById("downloadBtn"),r=document.getElementById("popup");i&&r&&(i.onclick=function(a){a.preventDefault(),r.style.display="block"},r.onclick=function(a){a.target===r&&(r.style.display="none")})},[]),e.jsxs("div",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Rf,alt:"Website Auditing & Consulting Service Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"content container-fluid",children:e.jsxs("div",{className:"row h-100 justify-content-center align-items-center",children:[e.jsxs("div",{className:"col d-flex flex-column justify-content-center m-4",children:[e.jsx("h3",{style:{color:"#686D76"},children:"Welcome to our Website Auditing & Consulting Service."}),e.jsx("p",{style:{color:"#686D76"},children:"Does your website's performance fall short of your expectations? Are you having trouble bringing in leads, converting visitors into customers, or drawing in visitors? Our website audits and consulting service can assist you in determining the problems with your website and offer practical suggestions for enhancing its functionality."}),e.jsx("p",{style:{color:"#686D76"},children:"Your website will get a thorough audit by our team of knowledgeable website auditors and consultants, who will examine several aspects including user experience, design, functionality, and content. We'll point out any technical problems or potential areas for development and give you a thorough report with our conclusions and suggestions."}),e.jsx("p",{style:{color:"#686D76"},children:"We offer more than simply problem identification with our website consulting service. We'll collaborate closely with you to put the suggested adjustments and website optimizations into action. Since every website is different, we'll work with you to create a personalized plan that complements your company's aims and ambitions."})]}),e.jsx("div",{className:"col d-flex flex-column justify-content-center m-4",children:e.jsx("img",{className:"img-fluid",src:Pf,alt:"Website Auditing Service"})})]})}),e.jsxs("div",{className:"p-4",style:{backgroundColor:"#F1F1F1"},children:[e.jsx("h3",{className:"text-muted",children:"For what reason are marketing support services needed?"}),e.jsxs("div",{className:"col-12 col-md-6 mb-4 mb-md-0",children:[e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Make the user experience on your website better"]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Increase the number of leads and sales."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Boost traffic to websites"]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Make your website conversion-friendly."]}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("i",{className:"fa fa-circle-o",style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}),"   Boost the visibility of your website in search engines"]}),e.jsx("br",{})]})]}),e.jsxs("div",{className:"container p-5",children:[e.jsx("p",{style:{color:"#686D76"},children:"We take great satisfaction in our ability to offer companies of all sizes and sectors top-notch website audits and consulting services. We are dedicated to exceeding your expectations with our exceptional results, and we have years of expertise working with clients in a variety of industries."}),e.jsx("p",{style:{color:"#686D76"},children:"Reach out to us to discover more about our website audits and consulting services if you're prepared to elevate your website to new heights. Our goal is to support your success!"})]}),e.jsx("div",{id:"popup-form",className:"popup-form",style:{display:"none"},children:e.jsxs("div",{className:"form-container",children:[e.jsx("span",{className:"close-btn",id:"close-btn",children:"×"}),e.jsx("h2",{children:"Enquiry Form"}),e.jsxs("form",{id:"enquiry-form",children:[e.jsx("label",{htmlFor:"name",children:"Name:"}),e.jsx("input",{type:"text",id:"name",name:"name",required:!0}),e.jsx("label",{htmlFor:"email",children:"Email:"}),e.jsx("input",{type:"email",id:"email",name:"email",required:!0}),e.jsx("label",{htmlFor:"mobile",children:"Mobile:"}),e.jsx("input",{type:"tel",id:"mobile",name:"mobile",required:!0}),e.jsx("label",{htmlFor:"company",children:"Your Company:"}),e.jsx("input",{type:"text",id:"company",name:"company",required:!0}),e.jsx("label",{htmlFor:"description",children:"Describe what you need:"}),e.jsx("textarea",{id:"description",name:"description",rows:4,required:!0}),e.jsx("button",{type:"submit",children:"Send"})]})]})}),e.jsx("style",{children:`
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
        `})]}));d("assets/images/Rectangle-27.webp");const Of=d("assets/images/SystemIntegrationMaintenance.png"),_f=d("assets/images/intern-image-2.webp"),Uf=d("assets/images/sys-log-1.webp"),$f=d("assets/images/sys-logo-2.webp"),Vf=d("assets/images/sys-logo-3.webp"),qf=d("assets/images/sys-logo-4.webp"),Yf=d("assets/images/sys-logo-5.webp"),Gf=d("assets/images/sys-logo-6.webp"),Qf=d("assets/images/sys-logo-7.webp"),Kf=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Of,alt:"System Integration Maintenance Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center my-5",children:[e.jsxs("div",{className:"col-12 col-lg-7",children:[e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",textAlign:"justify"},children:" At Hrify Digital we specialize in seamless systems integration and reliable maintenance services. Our team ensures that your IT infrastructure operates efficiently by integrating various systems into a cohesive and optimized environment. We provide ongoing support and maintenance to keep your systems running smoothly, minimizing downtime and enhancing overall performance. With our expertise, your technology infrastructure will be robust, scalable, and aligned with your business needs."}),e.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},children:[e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Seamless Integration"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Optimized Performance"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Scalability"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Reliability"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Proactive Maintenance"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Customization"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Cost efficiency"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Expert Support"})]})]})]}),e.jsx("div",{className:"col-12 col-lg-5 text-center",children:e.jsx("img",{className:"img-fluid ",src:_f,alt:""})})]})}),e.jsxs("div",{className:"container",children:[e.jsxs("h1",{style:{color:"#686D76",textAlign:"center"},children:[e.jsx("b",{children:"Networking Solutions"})," "]}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/systemintegration",children:e.jsxs("span",{style:{backgroundColor:"black",border:"none"},className:"box",children:[e.jsx("img",{src:Uf,alt:"",className:"me-2"}),e.jsx("b",{children:"System Integration &Maintenance"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/infrastructure",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:$f,alt:"",className:"me-2"}),e.jsx("b",{children:"Infrastructure Management"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/serverstorage",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Vf,alt:"",className:"me-2"}),e.jsx("b",{children:"Server & Storage"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/networksecurity",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:qf,alt:"",className:"me-2"}),e.jsx("b",{children:"Network security"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/structuredcabling",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Yf,alt:"",className:"me-2"}),e.jsx("b",{children:"Structured Cabling"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/cloudnative",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Gf,alt:"",className:"me-2"}),e.jsx("b",{children:"Cloud Native Solution"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/workplace",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Qf,alt:"",className:"me-2"}),e.jsx("b",{children:"Workpalce Surveillance"})]})})})]})]}),e.jsx("style",{children:`
          .container.mobile-only {
            display: none;
          }
          @media (max-width: 768px) {
            .container.mobile-only {
              display: block;
            }
          }
        `})]});d("assets/images/Rectangle-27.webp");const Xf=d("assets/images/InfrastructureManagement.png"),Zf=d("assets/images/infra-image-2.webp"),Jf=d("assets/images/infra-l-1.webp"),e0=d("assets/images/infra-l-2.webp"),t0=d("assets/images/infra-l-3.webp"),s0=d("assets/images/infra-l-4.webp"),n0=d("assets/images/sys-log-1.webp"),i0=d("assets/images/sys-logo-2.webp"),r0=d("assets/images/sys-logo-3.webp"),a0=d("assets/images/sys-logo-4.webp"),l0=d("assets/images/sys-logo-5.webp"),o0=d("assets/images/sys-logo-6.webp"),c0=d("assets/images/sys-logo-7.webp"),d0=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Xf,alt:"Infrastructure Management Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center my-5",children:[e.jsx("div",{className:"col-12 col-lg-8",children:e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",textAlign:"justify"},children:"At Hrify Digital, our Infrastructure Management services are designed to ensure that your IT environment operates at peak efficiency. We manage and optimize your entire infrastructure, from servers and networks to cloud services and data centers. Our proactive approach includes continuous monitoring, regular updates, and strategic planning to prevent issues and minimize downtime. By leveraging the latest technologies and best practices, we provide a stable, scalable, and secure infrastructure that supports your business's growth and adaptability in an ever-changing digital landscape."})}),e.jsx("div",{className:"col-12 col-lg-4 text-center",children:e.jsx("img",{className:"img-fluid",src:Zf,alt:""})})]})}),e.jsxs("div",{className:"container",children:[e.jsx("h5",{className:"text-center",style:{color:"#1B8DBB"},children:e.jsx("b",{children:"Our Offerings"})}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-12 col-lg-6 justify-content-center",children:[e.jsx("div",{className:"text-center",children:e.jsx("img",{className:"text-center",style:{height:"50px",filter:"hue-rotate(180deg) saturate(1.5) brightness(0.8)"},src:Jf,alt:""})}),e.jsx("p",{children:"A complete range of server and storage solutions with reliable backup systems to securely manage your data."})]}),e.jsxs("div",{className:"col-12 col-lg-6 justify-content-center",children:[e.jsx("div",{className:"text-center",children:e.jsx("img",{className:"text-center",style:{height:"50px",filter:"hue-rotate(180deg) saturate(1.5) brightness(0.8)"},src:e0,alt:""})}),e.jsx("p",{children:"We offer high-performance laptops with licensed software, the latest Windows OS, and fast M.2 SSDs, plus customizable desktops and laptops from authorized vendors, all ready for instant use."})]})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-12 col-lg-6 justify-content-center",children:[e.jsx("div",{className:"text-center",children:e.jsx("img",{className:"text-center",style:{height:"50px",filter:"hue-rotate(180deg) saturate(1.5) brightness(0.8)"},src:t0,alt:""})}),e.jsx("p",{children:"Hrify Digital delivers SaaS solutions tailored to meet customers' on-demand and dynamic needs."})]}),e.jsxs("div",{className:"col-12 col-lg-6 justify-content-center",children:[e.jsx("div",{className:"text-center",children:e.jsx("img",{className:"text-center",style:{height:"50px",filter:"hue-rotate(180deg) saturate(1.5) brightness(0.8)"},src:s0,alt:""})}),e.jsx("p",{children:"Hrify Digital designs and delivers high-end, Intel-based IT infrastructure with customizable configurations and top processors on demand."})]})]})]}),e.jsxs("div",{className:"container mobile-only",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:e.jsx("b",{children:"Networking Solutions"})}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-12 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/systemintegration",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:n0,alt:"",className:"me-2"}),e.jsx("b",{children:"System Integration &Maintenance"})]})})}),e.jsx("div",{className:"col-12 col-md-12 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/infrastructure",children:e.jsxs("span",{style:{backgroundColor:"black",border:"none"},className:"box",children:[e.jsx("img",{src:i0,alt:"",className:"me-2"}),e.jsx("b",{children:"Infrastructure Management"})]})})}),e.jsx("div",{className:"col-12 col-md-12 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/serverstorage",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:r0,alt:"",className:"me-2"}),e.jsx("b",{children:"Server & Storage"})]})})}),e.jsx("div",{className:"col-12 col-md-12 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/networksecurity",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:a0,alt:"",className:"me-2"}),e.jsx("b",{children:"Network security"})]})})}),e.jsx("div",{className:"col-12 col-md-12 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/structuredcabling",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:l0,alt:"",className:"me-2"}),e.jsx("b",{children:"Structured Cabling"})]})})}),e.jsx("div",{className:"col-12 col-md-12 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/cloudnative",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:o0,alt:"",className:"me-2"}),e.jsx("b",{children:"Cloud Native Solution"})]})})}),e.jsx("div",{className:"col-12 col-md-12 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/workplace",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:c0,alt:"",className:"me-2"}),e.jsx("b",{children:"Workpalce Surveillance"})]})})})]})]}),e.jsx("style",{children:`
          .container.mobile-only {
            display: block;
          }
        `})]}),m0=d("assets/images/ServerStorage.png"),u0=d("assets/images/server-image-2.webp"),h0=d("assets/images/vast-1.webp"),p0=d("assets/images/vast-2.webp"),g0=d("assets/images/vast-3.webp"),x0=d("assets/images/vast4.webp"),f0=d("assets/images/vast-5.webp"),y0=d("assets/images/vast-6.webp"),j0=d("assets/images/sys-log-1.webp"),v0=d("assets/images/sys-logo-2.webp"),b0=d("assets/images/sys-logo-3.webp"),w0=d("assets/images/sys-logo-4.webp"),N0=d("assets/images/sys-logo-5.webp"),k0=d("assets/images/sys-logo-6.webp"),S0=d("assets/images/sys-logo-7.webp");d("assets/images/Rectangle-27.webp");const B0=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:m0,alt:"Server & Storage Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center my-5",children:[e.jsxs("div",{className:"col-12 col-lg-7",style:{textAlign:"justify"},children:[e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},children:"The volume of data generated by expanding businesses increases exponentially. Effectively managing this data becomes a complex and difficult undertaking when choosing the appropriate resources, storage, and backup options. We at Hrify Digital are available to help you set up a reliable server and storage system. With a cost-effective strategy, we help you get the most out of your IT expenditures by guaranteeing optimal data use, immediate accessibility, and improved security, all of which eventually improve business performance."}),e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},children:"At Hrify Digital, we provide the latest and most suitable servers and storage devices to help you tackle your challenges effectively. We stay ahead of the curve by regularly upgrading to the latest industry trends. In today's rapidly growing business environment, scalability and operational efficiency are crucial. That's why we custom-build server solutions tailored to your specific needs in terms of performance, scalability, and data capacity. Share your data processing requirements with us, so you can focus on your core business while we handle all your storage needs."}),e.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},children:[e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Latest Servers and Storage Devices"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Custom-Built Solutions"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Regular Upgrades"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Scalability and Operational Efficiency"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Focus on Core Business"})]})]})]}),e.jsx("div",{className:"col-12 col-lg-5 text-center",children:e.jsx("img",{className:"img-fluid",src:u0,alt:""})})]})}),e.jsxs("div",{className:"container-fluid",children:[e.jsx("h2",{className:"text-center fw-bolder",style:{color:"#1B8DBB"},children:"Vast Selection of Storage Options"}),e.jsxs("div",{style:{gap:"50px"},className:"row container justify-content-center w-100 h-100 d-flex ms-0 ms-lg-5 mt-5",children:[e.jsxs("div",{style:{boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"},className:"col-12 col-lg-3 p-4 text-center rounded justify-content-center align-items-center",children:[e.jsx("img",{className:"img-fluid",src:h0,alt:""}),e.jsx("h3",{style:{color:"#1B8DBB"},className:"fw-bolder",children:"Monitoring Platform"}),e.jsx("p",{className:"text-start",children:'This server is utilized for applications that require several "virtual" servers in order to save costs and for intensive video analytics. With Windows Server 2012R2, these U series servers include dual octa-core processors and 32GB of RAM.'})]}),e.jsxs("div",{style:{boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"},className:"col-12 col-lg-3 p-4 text-center rounded align-items-center",children:[e.jsx("img",{className:"img-fluid",src:p0,alt:""}),e.jsx("h3",{style:{color:"#1B8DBB"},className:"fw-bolder mt-4",children:"Broadcast Server"}),e.jsx("p",{className:"text-start",children:"specialized broadcast servers to provide flawless live news performance. These servers are utilized for continuous, high-traffic operation."})]}),e.jsxs("div",{style:{boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"},className:"col-12 col-lg-3 p-4 text-center rounded align-items-center",children:[e.jsx("img",{style:{height:"80px"},className:"img-fluid",src:g0,alt:""}),e.jsx("h3",{style:{color:"#1B8DBB"},className:"fw-bolder mt-3",children:"NAS"}),e.jsx("p",{className:"text-start",children:"Data can be retrieved from a centralized, authorized network using NAS storage. NAS is the ideal option if you require a highly scalable and flexible central storage solution."})]})]}),e.jsxs("div",{style:{gap:"50px"},className:"row container justify-content-center w-100 h-100 d-flex ms-0 ms-lg-5 mt-5 mb-5",children:[e.jsxs("div",{style:{boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"},className:"col-12 col-lg-3 p-4 text-center rounded align-items-center",children:[e.jsx("img",{className:"img-fluid",src:x0,alt:""}),e.jsx("h3",{style:{color:"#1B8DBB"},className:"fw-bolder",children:"Rackmount"}),e.jsx("p",{className:"text-start",children:"At Hrify Digital, we provide rack-mounted servers that optimize space, offer easy scalability, improve airflow with advanced cooling, and simplify maintenance—making them perfect for efficient data center operations."})]}),e.jsxs("div",{style:{boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"},className:"col-12 col-lg-3 p-4 text-center rounded align-items-center",children:[e.jsx("img",{className:"img-fluid",src:f0,alt:""}),e.jsx("h3",{style:{color:"#1B8DBB"},className:"fw-bolder",children:"Enterprise Servers"}),e.jsx("p",{className:"text-start",children:"Hrify Digital meets enterprise data storage requirements with a range of solutions, including Linux, Apache, VMWare, Windows, and more, tailored to your data center needs."})]}),e.jsxs("div",{style:{boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"},className:"col-12 col-lg-3 p-4 text-center rounded align-items-center",children:[e.jsx("img",{className:"img-fluid",src:y0,alt:""}),e.jsx("h3",{style:{color:"#1B8DBB"},className:"fw-bolder mt-4",children:"PowerEdge R730"}),e.jsx("p",{className:"text-start",children:"Data can be retrieved from a centralized, authorized network using NAS storage. NAS is the ideal option if you require a highly scalable and flexible central storage solution."})]})]})]}),e.jsxs("div",{className:"container",children:[e.jsxs("h1",{style:{color:"#686D76",textAlign:"center"},children:[e.jsx("b",{children:"Networking Solutions"})," "]}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/systemintegration",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:j0,alt:"",className:"me-2"}),e.jsx("b",{children:"System Integration &Maintenance"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/infrastructure",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:v0,alt:"",className:"me-2"}),e.jsx("b",{children:"Infrastructure Management"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/serverstorage",children:e.jsxs("span",{style:{backgroundColor:"black",border:"none"},className:"box",children:[e.jsx("img",{src:b0,alt:"",className:"me-2"}),e.jsx("b",{children:"Server & Storage"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/networksecurity",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:w0,alt:"",className:"me-2"}),e.jsx("b",{children:"Network security"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/structuredcabling",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:N0,alt:"",className:"me-2"}),e.jsx("b",{children:"Structured Cabling"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/cloudnative",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:k0,alt:"",className:"me-2"}),e.jsx("b",{children:"Cloud Native Solution"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/workplace",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:S0,alt:"",className:"me-2"}),e.jsx("b",{children:"Workpalce Surveillance"})]})})})]})]}),e.jsx("style",{children:`
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
        `})]}),D0=d("assets/images/NetworkSecurity.png"),C0=d("assets/images/network-image-2.webp"),z0=d("assets/images/network-logo-1.webp"),M0=d("assets/images/network-logo-2.webp"),E0=d("assets/images/network-logo-3.webp"),W0=d("assets/images/network-logo-4.webp"),I0=d("assets/images/network-logo-5.webp"),A0=d("assets/images/network-logo-6.webp"),T0=d("assets/images/sys-log-1.webp"),F0=d("assets/images/sys-logo-2.webp"),L0=d("assets/images/sys-logo-3.webp"),R0=d("assets/images/sys-logo-4.webp"),P0=d("assets/images/sys-logo-5.webp"),H0=d("assets/images/sys-logo-6.webp"),O0=d("assets/images/sys-logo-7.webp");d("assets/images/Rectangle-27.webp");const _0=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:D0,alt:"Network Security Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center my-5",children:[e.jsxs("div",{className:"col-12 col-lg-7",children:[e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",textAlign:"justify"},children:"At Hrify Digital, we understand that securing a network is essential for enhancing performance and ensuring continuous access to information by safeguarding business assets from potential threats. As businesses rapidly transition to the digital world, they face new risks, vulnerabilities, and attacks. By strengthening your cyber resilience, we help keep your business running smoothly and securely. Protecting your software systems is critical, and securing your IT infrastructure with the right firewall is equally important. Computer networks are increasingly vulnerable to ransomware, Denial-of-Service (DoS) attacks, and destructive viruses that can compromise valuable data across your network. Let us help you fortify your defenses and protect your business."}),e.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},children:[e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Maintain network security"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Cyber Resilience"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Critical IT Infrastructure Protection"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Threat Mitigation"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Safeguarding Valuable Data"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Avoids unauthorized entry"})]}),e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"0.5rem"},children:[e.jsx("span",{style:{fontSize:"18px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginTop:"2px",flexShrink:0,lineHeight:1},children:"○"}),e.jsx("span",{style:{color:"#686D76"},children:"Effectively stop data leakages"})]})]})]}),e.jsx("div",{className:"col-12 col-lg-5",children:e.jsx("img",{className:"img-fluid",src:C0,alt:""})})]})}),e.jsxs("div",{className:"container",children:[e.jsx("h1",{style:{color:"#1B8DBB"},className:"text-center fw-bolder d-none d-lg-block",children:"Solutions for Network Security in Tamilnadu | Guarantee Network Security | Chennai Display Solution Service"}),e.jsx("h5",{style:{color:"#1B8DBB"},className:"text-center fw-bolder d-lg-none",children:"Solutions for Network Security in Tamilnadu | Guarantee Network Security | Chennai Display Solution Service"}),e.jsxs("div",{className:"row mt-4",children:[e.jsxs("div",{className:"col-12 col-lg-4 align-items-center text-center",children:[e.jsx("img",{style:{height:"50px",display:"block",margin:"0 auto",filter:"hue-rotate(180deg) saturate(2) brightness(0.8)"},src:z0,alt:""}),e.jsx("p",{className:"mt-3 fw-bolder",children:" Network Defense As a Service ( NDaas )"})]}),e.jsxs("div",{className:"col-12 col-lg-4 align-items-center text-center",children:[e.jsx("img",{style:{height:"50px",display:"block",margin:"0 auto",filter:"hue-rotate(180deg) saturate(2) brightness(0.8)"},src:M0,alt:""}),e.jsx("p",{className:"mt-3 fw-bolder",children:"Backup Solutions"})]}),e.jsxs("div",{className:"col-12 col-lg-4 align-items-center text-center",children:[e.jsx("img",{style:{height:"50px",display:"block",margin:"0 auto",filter:"hue-rotate(180deg) saturate(2) brightness(0.8)"},src:E0,alt:""}),e.jsx("p",{className:"mt-3 fw-bolder",children:"Server Security"})]})]}),e.jsxs("div",{className:"row mt-4",children:[e.jsxs("div",{className:"col-12 col-lg-4 align-items-center text-center",children:[e.jsx("img",{style:{height:"50px",display:"block",margin:"0 auto",filter:"hue-rotate(180deg) saturate(2) brightness(0.8)"},src:W0,alt:""}),e.jsx("p",{className:"mt-3 fw-bolder",children:"Endpoint Security"})]}),e.jsxs("div",{className:"col-12 col-lg-4 align-items-center text-center",children:[e.jsx("img",{style:{height:"50px",display:"block",margin:"0 auto",filter:"hue-rotate(180deg) saturate(2) brightness(0.8)"},src:I0,alt:""}),e.jsx("p",{className:"mt-3 fw-bolder",children:"Secure Remote Enabling"})]}),e.jsxs("div",{className:"col-12 col-lg-4 align-items-center text-center",children:[e.jsx("img",{style:{height:"50px",display:"block",margin:"0 auto",filter:"hue-rotate(180deg) saturate(2) brightness(0.8)"},src:A0,alt:""}),e.jsx("p",{className:"mt-3 fw-bolder",children:"Gateway Audits"})]})]})]}),e.jsxs("div",{className:"container",children:[e.jsxs("h1",{style:{color:"#686D76",textAlign:"center"},children:[e.jsx("b",{children:"Networking Solutions"})," "]}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/systemintegration",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:T0,alt:"",className:"me-2"}),e.jsx("b",{children:"System Integration &Maintenance"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/infrastructure",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:F0,alt:"",className:"me-2"}),e.jsx("b",{children:"Infrastructure Management"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/serverstorage",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:L0,alt:"",className:"me-2"}),e.jsx("b",{children:"Server & Storage"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/networksecurity",children:e.jsxs("span",{style:{backgroundColor:"black",border:"none"},className:"box",children:[e.jsx("img",{src:R0,alt:"",className:"me-2"}),e.jsx("b",{children:"Network security"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/structuredcabling",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:P0,alt:"",className:"me-2"}),e.jsx("b",{children:"Structured Cabling"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/cloudnative",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:H0,alt:"",className:"me-2"}),e.jsx("b",{children:"Cloud Native Solution"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/workplace",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:O0,alt:"",className:"me-2"}),e.jsx("b",{children:"Workpalce Surveillance"})]})})})]})]}),e.jsx("style",{children:`
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
        `})]});d("assets/images/Rectangle-27.webp");const U0=d("assets/images/StructuredCabling.png"),$0=d("assets/images/strucutred-image-2.webp"),V0=d("assets/images/bring-logo-1.webp"),q0=d("assets/images/bring-logo-2.webp"),Y0=d("assets/images/bring-logo-3.webp"),G0=d("assets/images/bring-logo-4.webp"),Q0=d("assets/images/bring-logo-5.webp"),K0=d("assets/images/sys-log-1.webp"),X0=d("assets/images/sys-logo-2.webp"),Z0=d("assets/images/sys-logo-3.webp"),J0=d("assets/images/sys-logo-4.webp"),ey=d("assets/images/sys-logo-5.webp"),ty=d("assets/images/sys-logo-6.webp"),sy=d("assets/images/sys-logo-7.webp"),ny=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:U0,alt:"Structured Cabling Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center my-5",children:[e.jsxs("div",{className:"col-12 col-lg-8",children:[e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",textAlign:"justify"},children:"At Hrify Digital, we recognize that digitization drives the demand for seamless online collaboration with partners, customers, and employees. As markets become increasingly dynamic, the need for reliable and continuous network services and infrastructure grows. Unlike outdated point-to-point cabling, the demand for efficient cable networking is on the rise. Our structured cabling systems provide a streamlined, clutter-free solution, eliminating the complexities of traditional wiring and enhancing your commercial network's efficiency and performance."}),e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",textAlign:"justify"},children:"Hrify Digital offers fast, reliable, and scalable wired and wireless connectivity solutions. Our comprehensive networking package includes advanced Layer 2/3 VLANs, paired with top-tier switching and routing technologies, to ensure seamless connectivity. Stay ahead in the digital transformation journey with our robust and efficient networking solutions designed to meet the evolving needs of your business."}),e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",textAlign:"justify"},children:"Be it high-performance cabling or the new optical fiber network adopt to structured cabling systems with cables and associated hardware for all kinds of needs within a specific building or across buildings or within a huge campus"})]}),e.jsx("div",{className:"col-12 col-lg-4",children:e.jsx("img",{className:"img-fluid",src:$0,alt:""})})]})}),e.jsxs("div",{className:"container",children:[e.jsx("h2",{style:{color:"#1B8DBB"},className:"text-center fw-bolder",children:"What We Bring"}),e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",textAlign:"justify"},children:"Hrify Digital specializes in building robust infrastructure using copper and fiber, offering end-to-end networking solutions for secure and well-managed systems—from data center networks to end-user needs. Our core focus areas include high-intensity network consultation, structured cabling, and setting up wireless and fiber-optic-based networks to ensure seamless connectivity and performance."})]}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"row justify-content-center",children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
            `}}),e.jsx("div",{className:"col-12 col-lg-4 hov-container",children:e.jsxs("div",{className:"hov",children:[e.jsx("img",{className:"img-fluid",src:V0,alt:""}),e.jsxs("div",{className:"description p-5",children:[e.jsx("p",{style:{backgroundColor:"#1B8DBB",border:"1px solid #1B8DBB",borderRadius:"20px"},className:"fw-bolder py-3 mobile-font",children:"Structured Cabling Solutions"}),e.jsx("p",{className:"fw-bold mob-font",children:"Modern, organized cabling systems that replace outdated point-to-point models, providing a cleaner and more efficient infrastructure."})]})]})}),e.jsx("div",{className:"col-12 col-lg-4 hov-container my-3 my-lg-0",children:e.jsxs("div",{className:"hov",children:[e.jsx("img",{className:"img-fluid",src:q0,alt:""}),e.jsxs("div",{className:"description p-5",children:[e.jsx("p",{style:{backgroundColor:"#1B8DBB",border:"1px solid #1B8DBB",borderRadius:"20px"},className:"fw-bolder py-3 mobile-font",children:"Reliable and Scalable Networking Services"}),e.jsx("p",{className:"fw-bold mob-font",children:"Ensuring continuous and dependable network performance to support dynamic business needs and seamless online collaboration."})]})]})}),e.jsx("div",{className:"col-12 col-lg-4 hov-container my-3 my-lg-0",children:e.jsxs("div",{className:"hov",children:[e.jsx("img",{className:"img-fluid",src:Y0,alt:""}),e.jsxs("div",{className:"description p-5",children:[e.jsx("p",{style:{backgroundColor:"#1B8DBB",border:"1px solid #1B8DBB",borderRadius:"20px"},className:"fw-bolder py-3 mobile-font",children:"End-to-End Network Infrastructure"}),e.jsx("p",{className:"fw-bold mob-font",children:"From data centers to end-user requirements, we deliver comprehensive networking solutions tailored to enhance connectivity and efficiency."})]})]})})]}),e.jsxs("div",{className:"row justify-content-center mt-5 my-3 my-lg-0",children:[e.jsx("div",{className:"col-12 col-lg-4 hov-container",children:e.jsxs("div",{className:"hov",children:[e.jsx("img",{className:"img-fluid",src:G0,alt:""}),e.jsxs("div",{className:"description p-5",children:[e.jsx("p",{style:{backgroundColor:"#1B8DBB",border:"1px solid #1B8DBB",borderRadius:"20px"},className:"fw-bolder py-3 mobile-font",children:"Customized IT Solutions"}),e.jsx("p",{className:"fw-bold mob-font",children:"We adapt our services to meet the specific needs of your business, ensuring optimal performance and scalability as you grow."})]})]})}),e.jsx("div",{className:"col-12 col-lg-4 hov-container my-3 my-lg-0",children:e.jsxs("div",{className:"hov",children:[e.jsx("img",{className:"img-fluid",src:Q0,alt:""}),e.jsxs("div",{className:"description p-5",children:[e.jsx("p",{style:{backgroundColor:"#1B8DBB",border:"1px solid #1B8DBB",borderRadius:"20px"},className:"fw-bolder py-3 mobile-font",children:"Network Performance Optimization"}),e.jsx("p",{className:"fw-bold mob-font",children:"Continuous monitoring and optimization services to ensure your network performs at its best, supporting your business operations without interruptions."})]})]})})]})]}),e.jsxs("div",{className:"container",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:e.jsx("b",{children:"Networking Solutions"})}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/systemintegration",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:K0,alt:"",className:"me-2"}),e.jsx("b",{children:"System Integration &Maintenance"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/infrastructure",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:X0,alt:"",className:"me-2"}),e.jsx("b",{children:"Infrastructure Management"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/serverstorage",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:Z0,alt:"",className:"me-2"}),e.jsx("b",{children:"Server & Storage"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/networksecurity",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:J0,alt:"",className:"me-2"}),e.jsx("b",{children:"Network security"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/structuredcabling",children:e.jsxs("span",{style:{backgroundColor:"black",border:"none"},className:"box",children:[e.jsx("img",{src:ey,alt:"",className:"me-2"}),e.jsx("b",{children:"Structured Cabling"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/cloudnative",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:ty,alt:"",className:"me-2"}),e.jsx("b",{children:"Cloud Native Solution"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/workplace",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:sy,alt:"",className:"me-2"}),e.jsx("b",{children:"Workpalce Surveillance"})]})})})]})]}),e.jsx("style",{children:`
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
        `})]}),iy=d("/assets/images/CloudNativeSolutions.png"),ry=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:iy,alt:"Cloud Native Solutions Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container",style:{textAlign:"justify"},children:e.jsxs("div",{className:"row align-items-center my-5",children:[e.jsxs("div",{className:"col-12 col-lg-8",children:[e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},children:"Stay ahead in today's fast-changing business environment and climb the ladder of success by embracing innovative business models. By adopting a wide range of cloud services, you can enhance cost-efficiency, boost productivity, and improve operational effectiveness. This approach not only reduces operational costs but also optimizes your business processes, setting you on a path of accelerated growth and success."}),e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},children:"We have collaborated with Crayon to provide Infrastructure-as-a-Service (IaaS), allowing organizations to employ cloud-native tools that streamline software application management and operation via cloud computing. The pay-per-usage model, which is now popular, allows businesses to pay only for the services that they use. Our cloud solutions are designed to be adaptable, allowing businesses to optimize expenses while leveraging cloud capabilities."}),e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},children:"Be it high-performance cabling or the new optical fiber network adopt to structured cabling systems with cables and associated hardware for all kinds of needs within a specific building or across buildings or within a huge campus"})]}),e.jsx("div",{className:"col-12 col-lg-4",children:e.jsx("img",{className:"img-fluid",src:"/assets/images/cloud native image 1.webp",alt:""})})]})}),e.jsx("div",{style:{backgroundColor:"#F1F1F1",textAlign:"justify"},className:"container-fluid p-2 p-lg-5 py-5",children:e.jsxs("div",{className:"container",children:[e.jsx("h3",{style:{color:"#1B8DBB"},className:" fw-bolder text-center",children:"Secure Cloud Solution"}),e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},children:"At Hrify Digital, in partnership with Crayon, we offer Infrastructure-as-a-Service (IaaS) and design private cloud solutions tailored for individual organizations. We provide training and knowledge transfer to empower clients to manage their private clouds independently."}),e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},children:"Experience the benefits of an 'Intelligent Cloud' with our flexible pay-as-you-go model and a broad range of cloud services to meet your project or managed service needs. We help build smart multi-cloud strategies to optimize business costs and operations, ensuring a secure and centralized cloud environment."}),e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},children:"Easily migrate your existing software to our intelligent cloud platform, and modernize your workplace with seamless, cost-effective transitions—guided every step of the way by Hrify Digital and Crayon."}),e.jsxs("div",{style:{gap:"5px",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},className:"d-flex",children:[e.jsx("span",{style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"○"}),e.jsx("p",{style:{color:"#686D76"},children:"Infra iQ – A centralized platform to monitor, analyze, and manage all your infrastructure environments efficiently."})]}),e.jsxs("div",{style:{gap:"5px",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},className:"d-flex",children:[e.jsx("span",{style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"○"}),e.jsx("p",{style:{color:"#686D76"},children:"Cloud iQ – A one-stop comprehensive self-service portal enabling you to manage Amazon Web Services and Microsoft Cloud Suite of Technology products."})]}),e.jsxs("div",{style:{gap:"5px",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},className:"d-flex",children:[e.jsx("span",{style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"○"}),e.jsx("p",{style:{color:"#686D76"},children:"Cloud Easy – A huge cloud portfolio to manage project-specific or managed cloud services."})]})]})}),e.jsxs("div",{className:"container",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:e.jsx("b",{children:"Networking Solutions"})}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/systemintegration",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:"/assets/images/sys log 1.webp",alt:"",className:"me-2"}),e.jsx("b",{children:"System Integration &Maintenance"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/infrastructure",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:"/assets/images/sys logo 2.webp",alt:"",className:"me-2"}),e.jsx("b",{children:"Infrastructure Management"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/serverstorage",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:"/assets/images/sys logo 3.webp",alt:"",className:"me-2"}),e.jsx("b",{children:"Server & Storage"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/networksecurity",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:"/assets/images/sys logo 4.webp",alt:"",className:"me-2"}),e.jsx("b",{children:"Network security"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/structuredcabling",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:"/assets/images/sys logo 5.webp",alt:"",className:"me-2"}),e.jsx("b",{children:"Structured Cabling"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/cloudnative",children:e.jsxs("span",{style:{backgroundColor:"black",border:"none"},className:"box",children:[e.jsx("img",{src:"/assets/images/sys logo 6.webp",alt:"",className:"me-2"}),e.jsx("b",{children:"Cloud Native Solution"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/workplace",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:"/assets/images/sys logo 7.webp",alt:"",className:"me-2"}),e.jsx("b",{children:"Workpalce Surveillance"})]})})})]})]}),e.jsx("style",{children:`
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
        `})]});d("assets/images/Rectangle-27.webp");const ay=d("assets/images/WorkplaceSurveillance.png"),ly=d("assets/images/woekplace-image-2.webp"),Zn=d("assets/images/workplace-globe-1.webp"),oy=d("assets/images/sys-log-1.webp"),cy=d("assets/images/sys-logo-2.webp"),dy=d("assets/images/sys-logo-3.webp"),my=d("assets/images/sys-logo-4.webp"),uy=d("assets/images/sys-logo-5.webp"),hy=d("assets/images/sys-logo-6.webp"),py=d("assets/images/sys-logo-7.webp"),gy=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:ay,alt:"Workplace Surveillance Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("div",{className:"container",style:{textAlign:"justify"},children:e.jsxs("div",{className:"row align-items-center my-5",children:[e.jsxs("div",{className:"col-12 col-lg-8",children:[e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},children:"At Hrify Digital, we understand the critical importance of workplace surveillance in enhancing security, monitoring activities, and ensuring safety. Our advanced surveillance solutions provide real-time oversight, helping businesses deter potential threats, manage access, and address compliance issues promptly. By integrating our cutting-edge technologies, companies can protect their operations, secure sensitive information, and maintain a safe, productive environment for employees and assets."}),e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},children:"We offer a range of customizable solutions, from high-definition CCTV cameras and biometric access control systems to integrated fire alarms and remote monitoring capabilities. These tools collectively ensure that your workplace is continuously monitored, compliant with safety regulations, and prepared to respond effectively to any incident."}),e.jsx("p",{style:{color:"#686D76",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},children:"By partnering with Hrify Digital, you're investing in a secure, well-managed, and efficient workplace where safety and productivity go hand in hand. Our goal is to empower your business with the technology needed to stay ahead of security challenges, enabling you to focus on growth and success with peace of mind."}),e.jsxs("div",{style:{gap:"5px",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},className:"d-flex",children:[e.jsx("span",{style:{fontSize:"20px",backgroundColor:"#1B8DBB",color:"white",borderRadius:"50%",padding:"5px",display:"inline-block"},children:"○"}),e.jsx("p",{style:{color:"#686D76"},children:"Enhanced Security"})]}),e.jsxs("div",{style:{gap:"5px",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},className:"d-flex",children:[e.jsx("span",{style:{fontSize:"20px",backgroundColor:"#1B8DBB",color:"white",borderRadius:"50%",padding:"5px",display:"inline-block"},children:"○"}),e.jsx("p",{style:{color:"#686D76"},children:"Real-Time Monitoring"})]}),e.jsxs("div",{style:{gap:"5px",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},className:"d-flex",children:[e.jsx("span",{style:{fontSize:"20px",backgroundColor:"#1B8DBB",color:"white",borderRadius:"50%",padding:"5px",display:"inline-block"},children:"○"}),e.jsx("p",{style:{color:"#686D76"},children:"Improved Compliance and Safety"})]})]}),e.jsx("div",{className:"col-12 col-lg-4",children:e.jsx("img",{className:"img-fluid",src:ly,alt:""})})]})}),e.jsx("div",{style:{backgroundColor:"#F1F1F1"},className:"container-fluid p-2 p-lg-5 py-5",children:e.jsxs("div",{className:"container",children:[e.jsx("h3",{style:{background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},className:" fw-bolder text-center",children:"Comprehensive Surveillance Solutions"})," ",e.jsx("br",{}),e.jsxs("div",{style:{gap:"5px",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},className:"d-flex",children:[e.jsx("span",{style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"○"}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("span",{style:{fontWeight:"700",color:"black"},children:"CCTV Systems:"})," High-definition cameras with night vision, motion detection, and remote access features."]})]}),e.jsxs("div",{style:{gap:"5px",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},className:"d-flex",children:[e.jsx("span",{style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"○"}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("span",{style:{color:"black",fontWeight:"700"},children:"Access Control:"})," Secure entry systems including biometric scanners, keycards, and smart locks."]})]}),e.jsxs("div",{style:{gap:"5px",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},className:"d-flex",children:[e.jsx("span",{style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"○"}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("span",{style:{fontWeight:"700",color:"black"},children:"Biometric Surveillance:"})," Facial recognition, fingerprint scanning, and other biometric solutions for high security."]})]}),e.jsxs("div",{style:{gap:"5px",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"},className:"d-flex",children:[e.jsx("span",{style:{fontSize:"20px",background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"○"}),e.jsxs("p",{style:{color:"#686D76"},children:[e.jsx("span",{style:{fontWeight:"700",color:"black"},children:"Fire Alarm and Safety Systems:"})," Integration of fire alarms and emergency response systems for comprehensive safety."]})]})]})})," ",e.jsx("br",{}),e.jsxs("div",{className:"container justify-content-center ",children:[e.jsx("div",{className:"row d-flex justify-content-center",children:e.jsx("div",{className:"col-12 col-lg-8 col-md-8 text-center d-flex justify-content-center  ",children:e.jsxs("h4",{style:{color:"#F1F1F1",border:"1px solid #1B8DBB",borderRadius:"100px",backgroundColor:"#1B8DBB"},className:"text-center ninety my-3 py-4 px-3",children:[e.jsx("b",{children:'"Why Choose Our Surveillance Solutions?"'})," "]})})})," ",e.jsx("br",{}),e.jsxs("div",{className:"row my-4",children:[e.jsxs("div",{className:"col-12 col-lg-3 image-container my-4 my-lg-0",children:[e.jsx("img",{className:"img-fluid",src:Zn,alt:"Workplace Globe"}),e.jsxs("div",{className:"description",children:[e.jsx("h3",{className:"fw-bolder",style:{color:"#1B8DBB"},children:"24/7 Monitoring"}),e.jsx("p",{style:{color:"black"},className:"fw-bolder",children:"Continuous surveillance to ensure round-the-clock security."})]})]}),e.jsxs("div",{className:"col-12 col-lg-3 image-container my-4 my-lg-0",children:[e.jsx("img",{className:"img-fluid",src:Zn,alt:"Workplace Globe"}),e.jsxs("div",{className:"description",children:[e.jsx("h3",{className:"fw-bolder",style:{color:"#1B8DBB"},children:"Scalable Solutions"}),e.jsx("p",{style:{color:"black"},className:"fw-bolder",children:"Tailored for businesses of all sizes, from small offices to large enterprises."})]})]}),e.jsxs("div",{className:"col-12 col-lg-3 image-container my-4 my-lg-0",children:[e.jsx("img",{className:"img-fluid",src:Zn,alt:"Workplace Globe"}),e.jsxs("div",{className:"description",children:[e.jsx("h3",{className:"fw-bolder",style:{color:"#1B8DBB"},children:"Easy Integration"}),e.jsx("p",{style:{color:"black"},className:"fw-bolder",children:"Compatible with existing IT infrastructure and scalable to future needs."})]})]}),e.jsxs("div",{className:"col-12 col-lg-3 image-container my-4 my-lg-0",children:[e.jsx("img",{src:Zn,alt:"Workplace Globe"}),e.jsxs("div",{className:"description",children:[e.jsx("h3",{className:"fw-bolder",style:{color:"#1B8DBB"},children:"Remote Access"}),e.jsx("p",{style:{color:"black"},className:"fw-bolder",children:"Monitor your workplace from anywhere via mobile or web applications."})]})]})," ",e.jsx("br",{}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
            `}}),e.jsx("div",{className:"col-12 col-lg-3"}),e.jsx("div",{className:"col-12 col-lg-3"}),e.jsx("div",{className:"col-12 col-lg-3"})]})]}),e.jsx("br",{}),e.jsxs("div",{className:"container",children:[e.jsx("h1",{style:{color:"#686D76",textAlign:"center"},children:e.jsx("b",{children:"Networking Solutions"})})," ",e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"row justify-content-center gx-3",children:[e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/systemintegration",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:oy,alt:"",className:"me-2"}),e.jsx("b",{children:"System Integration &Maintenance"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/infrastructure",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:cy,alt:"",className:"me-2"}),e.jsx("b",{children:"Infrastructure Management"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/serverstorage",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:dy,alt:"",className:"me-2"}),e.jsx("b",{children:"Server & Storage"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/networksecurity",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:my,alt:"",className:"me-2"}),e.jsx("b",{children:"Network security"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/structuredcabling",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:uy,alt:"",className:"me-2"}),e.jsx("b",{children:"Structured Cabling"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/cloudnative",children:e.jsxs("span",{className:"box",children:[e.jsx("img",{src:hy,alt:"",className:"me-2"}),e.jsx("b",{children:"Cloud Native Solution"})]})})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4 mb-3",children:e.jsx(g,{style:{textDecoration:"none"},to:"/workplace",children:e.jsxs("span",{style:{backgroundColor:"black",border:"none"},className:"box",children:[e.jsx("img",{src:py,alt:"",className:"me-2"}),e.jsx("b",{children:"Workpalce Surveillance"})]})})})]})]}),e.jsx("style",{children:`
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
        `})]}),xy=d("assets/images/newBanner/cy9.webp");d("assets/images/Rectangle-27.webp");d("assets/images/about-image.webp");const fy=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:xy,alt:"CIAM Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("section",{className:"overview",style:{backgroundColor:"#f8fafc",padding:"60px 0",textAlign:"center"},children:e.jsxs("div",{className:"container",children:[e.jsx("p",{style:{maxWidth:"800px",margin:"0 auto 30px",fontSize:"1.1rem",color:"#475569",textAlign:"justify"},children:"Our CIAM integration services provide secure cloud infrastructure, seamless user experience, and compliance with data regulations. We offer comprehensive APIs and integration support to facilitate smooth integration with client systems. Our up-to-date data protection regulations, advanced identity verification, and consent management tools give you complete control over your data. Our dedicated maintenance support ensures that your data remains secure at all times."}),e.jsx("a",{href:"#",className:"btn btn-primary",style:{display:"inline-block",padding:"12px 24px",borderRadius:"6px",fontWeight:600,textAlign:"center",cursor:"pointer",transition:"all 0.3s ease",backgroundColor:"#1B8DBB",color:"white",border:"2px solid #1B8DBB",textDecoration:"none"},children:"Book a Meeting"})]})}),e.jsx("section",{className:"features",style:{padding:"80px 0"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",style:{textAlign:"center",fontSize:"2rem",marginBottom:"60px"},children:"Support Features"}),e.jsxs("div",{className:"features-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"30px"},children:[e.jsxs("div",{className:"feature-card",style:{border:"1px solid #e2e8f0",borderRadius:"10px",padding:"20px",transition:"all 0.3s ease",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.05)"},children:[e.jsx("div",{className:"feature-icon",style:{width:"50px",height:"50px",backgroundColor:"rgba(27, 141, 187, 0.1)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",style:{width:"24px",height:"24px",color:"#1B8DBB"},children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})})}),e.jsx("h3",{style:{fontSize:"1.3rem",marginBottom:"15px"},children:"Identity Verification"}),e.jsx("p",{style:{color:"#64748b"},children:"We provide various identity verification options such as two-factor authentication, biometric verification, or identity proofing services, collaborating with trusted providers for accurate results."})]}),e.jsxs("div",{className:"feature-card",style:{border:"1px solid #e2e8f0",borderRadius:"10px",padding:"20px",transition:"all 0.3s ease",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.05)"},children:[e.jsx("div",{className:"feature-icon",style:{width:"50px",height:"50px",backgroundColor:"rgba(27, 141, 187, 0.1)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",style:{width:"24px",height:"24px",color:"#1B8DBB"},children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})})}),e.jsx("h3",{style:{fontSize:"1.3rem",marginBottom:"15px"},children:"Data Security"}),e.jsx("p",{style:{color:"#64748b"},children:"We use encryption and access controls to protect customer data in their CIAM system and regularly conduct security audits to identify and address vulnerabilities."})]}),e.jsxs("div",{className:"feature-card",style:{border:"1px solid #e2e8f0",borderRadius:"10px",padding:"20px",transition:"all 0.3s ease",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.05)"},children:[e.jsx("div",{className:"feature-icon",style:{width:"50px",height:"50px",backgroundColor:"rgba(27, 141, 187, 0.1)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",style:{width:"24px",height:"24px",color:"#1B8DBB"},children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}),e.jsx("h3",{style:{fontSize:"1.3rem",marginBottom:"15px"},children:"User Experience"}),e.jsx("p",{style:{color:"#64748b"},children:"We offer a smooth registration and login experience. Our streamlined form has minimal required fields, and we provide social login options for easy account access."})]}),e.jsxs("div",{className:"feature-card",style:{border:"1px solid #e2e8f0",borderRadius:"10px",padding:"20px",transition:"all 0.3s ease",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.05)"},children:[e.jsx("div",{className:"feature-icon",style:{width:"50px",height:"50px",backgroundColor:"rgba(27, 141, 187, 0.1)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",style:{width:"24px",height:"24px",color:"#1B8DBB"},children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})})}),e.jsx("h3",{style:{fontSize:"1.3rem",marginBottom:"15px"},children:"Scalability"}),e.jsx("p",{style:{color:"#64748b"},children:"Our CIAM system is scalable and flexible, utilizing cloud-based infrastructure. We ensure efficient traffic handling with load balancing and caching and proactively scale resources for growth."})]}),e.jsxs("div",{className:"feature-card",style:{border:"1px solid #e2e8f0",borderRadius:"10px",padding:"20px",transition:"all 0.3s ease",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.05)"},children:[e.jsx("div",{className:"feature-icon",style:{width:"50px",height:"50px",backgroundColor:"rgba(27, 141, 187, 0.1)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",style:{width:"24px",height:"24px",color:"#1B8DBB"},children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),e.jsx("h3",{style:{fontSize:"1.3rem",marginBottom:"15px"},children:"User Consent & Privacy"}),e.jsx("p",{style:{color:"#64748b"},children:"We help clients manage their data-sharing preferences and privacy settings. We provide clear privacy policies that align with regulations and offer guidance for implementing best practices."})]}),e.jsxs("div",{className:"feature-card",style:{border:"1px solid #e2e8f0",borderRadius:"10px",padding:"20px",transition:"all 0.3s ease",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.05)"},children:[e.jsx("div",{className:"feature-icon",style:{width:"50px",height:"50px",backgroundColor:"rgba(27, 141, 187, 0.1)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",style:{width:"24px",height:"24px",color:"#1B8DBB"},children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})}),e.jsx("h3",{style:{fontSize:"1.3rem",marginBottom:"15px"},children:"Maintenance & Updates"}),e.jsx("p",{style:{color:"#64748b"},children:"We have a team dedicated to maintaining our CIAM system. We regularly patch security, update software, and scan for vulnerabilities. Our monitoring and alert systems detect issues and provide timely support."})]})]})]})}),e.jsx("section",{className:"cta",style:{backgroundColor:"#1B8DBB",color:"white",padding:"80px 0",textAlign:"center"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{style:{fontSize:"2rem",marginBottom:"20px"},children:"Leading with Integrity"}),e.jsx("p",{style:{maxWidth:"800px",margin:"0 auto 30px",fontSize:"1.1rem"},children:"Ready to secure your customer identity and access management with our cloud solutions? Contact us today to learn how we can help protect your data while providing a seamless user experience."}),e.jsxs("div",{className:"button-group",style:{display:"flex",gap:"15px",justifyContent:"center",flexWrap:"wrap"},children:[e.jsx("a",{href:"#",className:"btn btn-secondary",style:{display:"inline-block",padding:"12px 24px",borderRadius:"6px",fontWeight:600,textAlign:"center",cursor:"pointer",transition:"all 0.3s ease",backgroundColor:"white",color:"#1B8DBB",border:"2px solid white",textDecoration:"none"},children:"Book a Meeting"}),e.jsx("a",{href:"#",className:"btn btn-outline",style:{display:"inline-block",padding:"12px 24px",borderRadius:"6px",fontWeight:600,textAlign:"center",cursor:"pointer",transition:"all 0.3s ease",backgroundColor:"transparent",color:"white",border:"2px solid white",textDecoration:"none"},children:"View Case Studies"})]})]})})]}),yy=d("assets/images/newBanner/cy16.webp");d("assets/images/Rectangle-27.webp");const jy=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:yy,alt:"Workforce Identity Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          .banner-full-image {
            width: 100%;
            overflow: hidden;
          }

          .banner-img {
            width: 100%;
            display: block;
          }
        `}}),e.jsx("section",{style:{background:"linear-gradient(to bottom, hsl(210, 40%, 96.1%, 0.5), hsl(210, 40%, 96.1%))",padding:"3rem 0 6rem 0"},children:e.jsx("div",{className:"container px-4 md:px-6 mx-auto",children:e.jsxs("div",{className:"flex flex-col items-center gap-4 text-center",children:[e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsx("h1",{style:{fontSize:"3rem",fontWeight:800,lineHeight:1.2,color:"#1B8DBB"},className:"tracking-tighter sm:text-4xl md:text-5xl",children:"Workforce Identity Service to Ensure Secured Access Against Threats"}),e.jsx("p",{style:{margin:"0 auto 1.5rem",maxWidth:"700px",color:"#64748b"},className:"text-xl",children:"Meticulously manage all your user identities' lifecycle, ensuring everyone has every necessary access to resources."})]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"1rem"},children:[e.jsxs("button",{className:"btn btn-primary",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:"0.75rem 2rem",borderRadius:"0.375rem",fontWeight:600,fontSize:"0.875rem",cursor:"pointer",transition:"all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",backgroundColor:"#1B8DBB",color:"white",border:"2px solid #1B8DBB"},children:["Talk to Our Experts",e.jsx("svg",{style:{marginLeft:"0.5rem",width:"1rem",height:"1rem"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5l7 7-7 7"})})]}),e.jsx("button",{className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:"0.75rem 2rem",borderRadius:"0.375rem",fontWeight:600,fontSize:"0.875rem",cursor:"pointer",transition:"all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",backgroundColor:"white",color:"#1B8DBB",border:"2px solid #64748b"},children:"Learn More"})]})]})})}),e.jsx("section",{style:{padding:"3rem 0 4rem 0"},children:e.jsxs("div",{className:"container px-4 md:px-6 mx-auto",children:[e.jsx("div",{className:"flex flex-col items-center justify-center gap-4 text-center",children:e.jsxs("div",{style:{marginBottom:"3rem"},children:[e.jsx("h2",{style:{fontSize:"3rem",fontWeight:800,lineHeight:1.2,color:"#1B8DBB"},className:"tracking-tighter sm:text-4xl md:text-5xl",children:"Cybersecurity Services"}),e.jsx("p",{style:{margin:"0 auto",maxWidth:"700px",color:"#64748b"},className:"text-xl",children:"Implement adaptive authentication, centralized privilege access management, and seamless integration with Hrify Digital Workforce Identity solutions."})]})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"1.5rem"},children:[e.jsxs("div",{className:"feature-card",style:{borderRadius:"0.5rem",border:"1px solid #e2e8f0",backgroundColor:"white",color:"black",transition:"all 0.3s ease",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)",cursor:"pointer"},onMouseEnter:t=>{t.currentTarget.style.transform="translateY(-5px)",t.currentTarget.style.boxShadow="0 8px 20px rgba(0, 0, 0, 0.15)";const s=t.currentTarget.querySelector("svg");s&&(s.style.transform="scale(1.1)",s.style.color="#15749A",s.style.filter="drop-shadow(0 4px 8px rgba(27, 141, 187, 0.3))")},onMouseLeave:t=>{t.currentTarget.style.transform="translateY(0)",t.currentTarget.style.boxShadow="0 1px 3px rgba(0, 0, 0, 0.1)";const s=t.currentTarget.querySelector("svg");s&&(s.style.transform="scale(1)",s.style.color="#1B8DBB",s.style.filter="none")},children:[e.jsx("div",{style:{padding:"1.5rem 1.5rem 0.5rem"},children:e.jsxs("h3",{style:{fontSize:"1.5rem",fontWeight:600,display:"flex",alignItems:"center",gap:"0.5rem",color:"#1B8DBB"},children:[e.jsx("svg",{style:{width:"1.25rem",height:"1.25rem",color:"#1B8DBB"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),"Authentication"]})}),e.jsx("div",{style:{padding:"0 1.5rem 1.5rem"},children:e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Secure your organization with adaptive and multi-factor authentication mechanisms for robust remote access security."})})]}),e.jsxs("div",{className:"feature-card",style:{borderRadius:"0.5rem",border:"1px solid #e2e8f0",backgroundColor:"white",color:"black",transition:"all 0.3s ease",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)",cursor:"pointer"},onMouseEnter:t=>{t.currentTarget.style.transform="translateY(-5px)",t.currentTarget.style.boxShadow="0 8px 20px rgba(0, 0, 0, 0.15)";const s=t.currentTarget.querySelector("svg");s&&(s.style.transform="scale(1.1)",s.style.color="#15749A",s.style.filter="drop-shadow(0 4px 8px rgba(27, 141, 187, 0.3))")},onMouseLeave:t=>{t.currentTarget.style.transform="translateY(0)",t.currentTarget.style.boxShadow="0 1px 3px rgba(0, 0, 0, 0.1)";const s=t.currentTarget.querySelector("svg");s&&(s.style.transform="scale(1)",s.style.color="#1B8DBB",s.style.filter="none")},children:[e.jsx("div",{style:{padding:"1.5rem 1.5rem 0.5rem"},children:e.jsxs("h3",{style:{fontSize:"1.5rem",fontWeight:600,display:"flex",alignItems:"center",gap:"0.5rem",color:"#1B8DBB"},children:[e.jsx("svg",{style:{width:"1.25rem",height:"1.25rem",color:"#1B8DBB"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),"Authorization"]})}),e.jsx("div",{style:{padding:"0 1.5rem 1.5rem"},children:e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Implement granular control over who can access what resources, ensuring the right people have the right access."})})]}),e.jsxs("div",{className:"feature-card",style:{borderRadius:"0.5rem",border:"1px solid #e2e8f0",backgroundColor:"white",color:"black",transition:"all 0.3s ease",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[e.jsx("div",{style:{padding:"1.5rem 1.5rem 0.5rem"},children:e.jsxs("h3",{style:{fontSize:"1.5rem",fontWeight:600,display:"flex",alignItems:"center",gap:"0.5rem",color:"#1B8DBB"},children:[e.jsx("svg",{style:{width:"1.25rem",height:"1.25rem",color:"#1B8DBB"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),"Access Control"]})}),e.jsx("div",{style:{padding:"0 1.5rem 1.5rem"},children:e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Centralized privilege access management providing visibility and control over sensitive resources."})})]})]})]})}),e.jsx("section",{style:{backgroundColor:"#f8fafc",padding:"3rem 0 4rem 0"},children:e.jsxs("div",{className:"container px-4 md:px-6 mx-auto",children:[e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12 text-center mb-5",children:e.jsx("h2",{style:{fontSize:"3rem",fontWeight:800,lineHeight:1.2,color:"#1B8DBB"},className:"tracking-tighter sm:text-4xl",children:"About Hrify Digital"})})}),e.jsxs("div",{className:"row align-items-start",children:[e.jsx("div",{className:"col-12 col-lg-6 mb-4 mb-lg-0",children:e.jsxs("div",{style:{gap:"1rem",display:"flex",flexDirection:"column"},children:[e.jsx("p",{style:{color:"#64748b",textAlign:"justify",marginBottom:"1rem"},children:"Hrify Digital, pioneering the way in workforce identity solutions, is revolutionizing the post-pandemic world by addressing the critical aspects of remote work security and identity management."}),e.jsx("p",{style:{color:"#64748b",textAlign:"justify",marginBottom:"1rem"},children:"Our expert team excels in implementing adaptive and multi-factor authentication mechanisms, ensuring robust security for remote access across applications and end-user devices."})]})}),e.jsx("div",{className:"col-12 col-lg-6",children:e.jsxs("div",{style:{gap:"1rem",display:"flex",flexDirection:"column"},children:[e.jsx("p",{style:{color:"#64748b",textAlign:"justify",marginBottom:"1rem"},children:"With centralized privilege access management, we provide granular control and visibility, safeguarding sensitive resources."}),e.jsx("p",{style:{color:"#64748b",textAlign:"justify",marginBottom:"2rem"},children:"Our customized solutions are designed to seamlessly integrate into remote work environments, enabling organizations to navigate the evolving cybersecurity landscape with confidence."}),e.jsx("div",{style:{justifyContent:"flex-start",marginTop:"1rem",display:"flex",flexWrap:"wrap",gap:"1rem",marginLeft:"-7rem"},children:e.jsxs("button",{className:"btn btn-primary",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:"0.5rem 1rem",borderRadius:"0.375rem",fontWeight:600,fontSize:"0.875rem",cursor:"pointer",transition:"all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",backgroundColor:"#1B8DBB",color:"white"},children:["Talk to Our Experts",e.jsx("svg",{style:{marginLeft:"0.5rem",width:"1rem",height:"1rem"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5l7 7-7 7"})})]})})]})})]})]})}),e.jsx("section",{style:{padding:"3rem 0 6rem 0"},children:e.jsxs("div",{className:"container px-4 md:px-6 mx-auto",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center gap-4 text-center",children:[e.jsx("h2",{style:{fontSize:"3rem",fontWeight:800,lineHeight:1.2,color:"#1B8DBB"},className:"tracking-tighter sm:text-4xl md:text-5xl",children:"Support Features"}),e.jsx("p",{style:{margin:"0 auto",maxWidth:"700px",color:"#64748b"},className:"text-xl",children:"Comprehensive cybersecurity solutions to protect your organization"})]}),e.jsxs("div",{style:{marginTop:"3rem",display:"grid",gap:"2rem",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))"},children:[e.jsxs("div",{className:"feature-card",style:{borderRadius:"0.5rem",border:"1px solid #e2e8f0",backgroundColor:"white",color:"black",transition:"all 0.3s ease",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[e.jsx("div",{style:{padding:"1.5rem"},children:e.jsxs("h3",{style:{fontSize:"1.5rem",fontWeight:600,display:"flex",alignItems:"center",gap:"0.5rem",color:"#1B8DBB"},children:[e.jsx("svg",{style:{width:"1.25rem",height:"1.25rem",color:"#1B8DBB"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),"Identity & Access Management (IAM)"]})}),e.jsx("div",{style:{padding:"0 1.5rem 1.5rem"},children:e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Hrify Digital improves digital security with IAM strategies, multi-factor authentication, and identity governance solutions. We monitor and prevent unauthorized access."})})]}),e.jsxs("div",{className:"feature-card",style:{borderRadius:"0.5rem",border:"1px solid #e2e8f0",backgroundColor:"white",color:"black",transition:"all 0.3s ease",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[e.jsx("div",{style:{padding:"1.5rem"},children:e.jsxs("h3",{style:{fontSize:"1.5rem",fontWeight:600,display:"flex",alignItems:"center",gap:"0.5rem",color:"#1B8DBB"},children:[e.jsx("svg",{style:{width:"1.25rem",height:"1.25rem",color:"#1B8DBB"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),"Data Protection"]})}),e.jsx("div",{style:{padding:"0 1.5rem 1.5rem"},children:e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Hrify Digitals offers robust data security measures, including encryption, classification frameworks, secure storage and backups, data retention policies, and disposal practices to prevent breaches."})})]}),e.jsxs("div",{className:"feature-card",style:{borderRadius:"0.5rem",border:"1px solid #e2e8f0",backgroundColor:"white",color:"black",transition:"all 0.3s ease",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[e.jsx("div",{style:{padding:"1.5rem"},children:e.jsxs("h3",{style:{fontSize:"1.5rem",fontWeight:600,display:"flex",alignItems:"center",gap:"0.5rem",color:"#1B8DBB"},children:[e.jsx("svg",{style:{width:"1.25rem",height:"1.25rem",color:"#1B8DBB"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"})}),"Threat Detection & Response"]})}),e.jsx("div",{style:{padding:"0 1.5rem 1.5rem"},children:e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Hrify Digital provides security solutions that integrate advanced monitoring tools and technologies for proactive threat detection. We offer real-time alerts, incident response planning, and vulnerability assessments."})})]}),e.jsxs("div",{className:"feature-card",style:{borderRadius:"0.5rem",border:"1px solid #e2e8f0",backgroundColor:"white",color:"black",transition:"all 0.3s ease",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[e.jsx("div",{style:{padding:"1.5rem"},children:e.jsxs("h3",{style:{fontSize:"1.5rem",fontWeight:600,display:"flex",alignItems:"center",gap:"0.5rem",color:"#1B8DBB"},children:[e.jsx("svg",{style:{width:"1.25rem",height:"1.25rem",color:"#1B8DBB"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})}),"User Awareness & Training"]})}),e.jsx("div",{style:{padding:"0 1.5rem 1.5rem"},children:e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Hrify Digital offers customizable security awareness programs, training modules, and simulated phishing campaigns to mitigate social engineering and phishing risks."})})]}),e.jsxs("div",{className:"feature-card",style:{borderRadius:"0.5rem",border:"1px solid #e2e8f0",backgroundColor:"white",color:"black",transition:"all 0.3s ease",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[e.jsx("div",{style:{padding:"1.5rem"},children:e.jsxs("h3",{style:{fontSize:"1.5rem",fontWeight:600,display:"flex",alignItems:"center",gap:"0.5rem",color:"#1B8DBB"},children:[e.jsx("svg",{style:{width:"1.25rem",height:"1.25rem",color:"#1B8DBB"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),"Privileged Access Management (PAM)"]})}),e.jsx("div",{style:{padding:"0 1.5rem 1.5rem"},children:e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Hrify Digital offers PAM solutions to protect privileged accounts, enforce strong passwords, monitor sessions, employ just-in-time access controls, and implement least privilege principles."})})]}),e.jsxs("div",{className:"feature-card",style:{borderRadius:"0.5rem",border:"1px solid #e2e8f0",backgroundColor:"white",color:"black",transition:"all 0.3s ease",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[e.jsx("div",{style:{padding:"1.5rem"},children:e.jsxs("h3",{style:{fontSize:"1.5rem",fontWeight:600,display:"flex",alignItems:"center",gap:"0.5rem",color:"#1B8DBB"},children:[e.jsx("svg",{style:{width:"1.25rem",height:"1.25rem",color:"#1B8DBB"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),"Compliance & Regulatory Support"]})}),e.jsx("div",{style:{padding:"0 1.5rem 1.5rem"},children:e.jsx("p",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Hrify Digital ensures clients meet cybersecurity regulations and standards, including GDPR, HIPAA, and PCI DSS. We provide tools for compliance audits and stay up-to-date on the latest regulations."})})]})]})]})}),e.jsx("section",{style:{backgroundColor:"#1B8DBB",color:"white",padding:"3rem 0 4rem 0",textAlign:"center"},children:e.jsx("div",{className:"container px-4 md:px-6 mx-auto",children:e.jsxs("div",{className:"flex flex-col items-center justify-center gap-4 text-center",children:[e.jsx("h2",{style:{fontSize:"3rem",fontWeight:800,lineHeight:1.2},className:"tracking-tighter sm:text-4xl md:text-5xl",children:"Ready to Secure Your Workforce?"}),e.jsx("p",{style:{margin:"0 auto 1.5rem",maxWidth:"700px",fontSize:"1.1rem"},children:"Talk to our experts today and discover how Dimiour can transform your cybersecurity posture."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"1rem"},children:[e.jsxs("button",{className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:"0.75rem 2rem",borderRadius:"0.375rem",fontWeight:600,fontSize:"0.875rem",cursor:"pointer",transition:"all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",backgroundColor:"white",color:"#1B8DBB"},children:[e.jsx("svg",{style:{marginRight:"0.5rem",width:"1rem",height:"1rem"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),"Contact Us"]}),e.jsxs("button",{className:"btn btn-outline",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:"0.75rem 2rem",borderRadius:"0.375rem",fontWeight:600,fontSize:"0.875rem",cursor:"pointer",transition:"all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",backgroundColor:"transparent",color:"white",border:"2px solid white"},children:[e.jsx("svg",{style:{marginRight:"0.5rem",width:"1rem",height:"1rem"},fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})}),"Schedule a Call"]})]})]})})})]}),vy=d("assets/images/newBanner/cy10.webp"),by=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:vy,alt:"Security Engineering Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
          `}),e.jsx("h1",{className:"main-title",children:"Resilience & Trust Through Security Engineering"}),e.jsx("p",{className:"main-subtitle",children:"Secure architectures by identifying potential threats & implementing effective measures to uphold confidentiality & compliance."}),e.jsxs("div",{className:"tags-container",children:[e.jsx("a",{href:"#",className:"tag-btn",children:"Awareness"}),e.jsx("a",{href:"#",className:"tag-btn",children:"Compliance"}),e.jsx("a",{href:"#",className:"tag-btn",children:"Compatibility"}),e.jsx("a",{href:"#",className:"tag-btn",children:"Cybersecurity Services"})]}),e.jsx("p",{className:"intro-para",children:"Experience Hrify Digital's innovative approach to Security Engineering Solutions through threat monitoring, user-centric design, tailored solutions, training, partnerships, and cutting-edge technology."}),e.jsx("p",{className:"long-para",children:"Hrify Digital, with a strategic focus on Security Engineering Solutions, prioritizes training and development for up-to-date security practices. We allocate resources based on client needs and partnerships. Our research team monitors threats and collaborates, and we focus on user-centric design, ensuring that time-to-market pressure doesn't compromise necessary security considerations. Dimiour conducts assessments, provides tailored solutions, and offers comprehensive security training and compliance services. We stay abreast of technology advancements to give businesses a competitive edge."}),e.jsxs("a",{href:"#",className:"cta-button",children:["Schedule a Consultation",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginLeft:"0.5rem",verticalAlign:"middle"},children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]}),e.jsx("h2",{className:"features-title",children:"Support Features"}),e.jsxs("div",{className:"cards-grid",children:[e.jsxs("div",{className:"card",children:[e.jsx("svg",{className:"card-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"})}),e.jsx("h3",{className:"card-title",children:"Intuitive Security Solutions"}),e.jsx("p",{className:"card-desc",children:"Hrify Digital invests in security training and development, leveraging expertise to create user-friendly solutions. We provide comprehensive documentation for streamlined processes."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("svg",{className:"card-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),e.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),e.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),e.jsx("h3",{className:"card-title",children:"Data Security & Compliance"}),e.jsx("p",{className:"card-desc",children:"Hrify Digital prioritizes client security needs and strategically develops collaborations with specialists to expand the resource pool to offer comprehensive security services."})]}),e.jsxs("div",{className:"card",children:[e.jsx("svg",{className:"card-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),e.jsx("h3",{className:"card-title",children:"Rapid Technology Advancements"}),e.jsx("p",{className:"card-desc",children:"At Hrify Digital, security is our top priority, and we achieve this by constantly assessing new technologies, investing in research and development, and collaborating with vendors and experts."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("svg",{className:"card-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M9 11V6a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-5"}),e.jsx("path",{d:"M13 13 4 4"}),e.jsx("path",{d:"M9 17v-5H4v5h5Z"})]}),e.jsx("h3",{className:"card-title",children:"Regulatory Compliance"}),e.jsx("p",{className:"card-desc",children:"Hrify Digital creates customized compliance frameworks and tools for our security services to meet industry regulations and data protection laws. Additionally, we offer compliance auditing services to identify gaps and ensure adherence to necessary standards."})]}),e.jsxs("div",{className:"card",children:[e.jsx("svg",{className:"card-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"})}),e.jsx("h3",{className:"card-title",children:"Legacy Systems & Compatibility"}),e.jsx("p",{className:"card-desc",children:"Hrify Digital provides security assessments and migration services to ensure clients' systems are secure and compatible. We can also develop custom security gateways for legacy systems."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("svg",{className:"card-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),e.jsx("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]}),e.jsx("h3",{className:"card-title",children:"Awareness & Training"}),e.jsx("p",{className:"card-desc",children:"Hrify Digital offers industry-specific security awareness training programs, ongoing education through webinars, and user-friendly security controls and dashboards for real-time feedback and reminders to make secure choices."})]})]})," ",e.jsx("br",{}),e.jsxs("div",{className:"case-section",children:[e.jsx("h2",{className:"case-title",children:"Cybersecurity Case Studies"})," ",e.jsx("br",{}),e.jsxs("a",{href:"#",className:"view-btn",children:["View Case Studies",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginLeft:"0.5rem",verticalAlign:"middle"},children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})]})]})]}),wy=d("assets/images/newBanner/cy12.webp");d("assets/images/Banner/newbanimg/zero-trust-1.webp");const Ny=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:wy,alt:"Zero Trust Architecture Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Get Your Access Authorized, Encrypted, & Secured With Zero Trust Architecture"}),e.jsx("p",{className:"main-subtitle",children:"Minimize the attack surface, prevent data breaches, and eliminate threats with Hrify Digital's comprehensive Zero Trust approach."}),e.jsxs("div",{className:"btn-group",children:[e.jsxs("a",{href:"#contact",className:"btn-primary",children:["Talk to Our Expert",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]}),e.jsx("a",{href:"#learn-more",className:"btn-outline",children:"Learn More"})]}),e.jsx("div",{className:"feature-grid",children:e.jsxs("div",{className:"grid-2col",children:[e.jsxs("div",{className:"feature-box",children:[e.jsx("i",{className:"fas fa-shield-alt"}),e.jsx("h3",{children:"Verify Identity"})]}),e.jsxs("div",{className:"feature-box",children:[e.jsx("i",{className:"fas fa-lock"}),e.jsx("h3",{children:"Control Risk"})]}),e.jsxs("div",{className:"feature-box",children:[e.jsx("i",{className:"fas fa-check-circle"}),e.jsx("h3",{children:"Enforce Policy"})]}),e.jsxs("div",{className:"feature-box",children:[e.jsx("i",{className:"fas fa-eye"}),e.jsx("h3",{children:"Monitor Access"})]})]})})]}),e.jsx("section",{className:"section bg-white",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Streamlined Zero Trust Implementation"}),e.jsx("p",{className:"section-intro",children:"Hrify Digital simplifies Zero Trust Architecture implementation and offers tailored solutions to tackle implementation challenges. We assess compatibility, upgrade legacy systems, and prioritize user experience with friendly authentication and training."}),e.jsxs("div",{className:"card-grid",children:[e.jsxs("div",{className:"card",children:[e.jsx("i",{className:"fas fa-shield-alt"}),e.jsx("h3",{className:"card-title",children:"Comprehensive Security"}),e.jsx("p",{className:"card-body",children:"We tackle cultural resistance, optimize resources, and ensure seamless integration for a highly effective ZTA implementation."})]}),e.jsxs("div",{className:"card",children:[e.jsx("i",{className:"fas fa-chart-bar"}),e.jsx("h3",{className:"card-title",children:"Customized Monitoring"}),e.jsx("p",{className:"card-body",children:"Our customized monitoring, automation, and communication enable successful change management and ongoing security."})]}),e.jsxs("div",{className:"card",children:[e.jsx("i",{className:"fas fa-users"}),e.jsx("h3",{className:"card-title",children:"Expert Training"}),e.jsx("p",{className:"card-body",children:"Trust Hrify Digital for effective implementation of Zero Trust Architecture with comprehensive training and support."})]})]})]})}),e.jsx("section",{className:"section bg-light",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Support Features"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-item",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-bolt"})}),e.jsxs("div",{className:"feature-content",children:[e.jsx("h3",{children:"Comprehensive Implementation Strategy"}),e.jsx("p",{children:"Hrify Digital creates customized implementation plans for clients to implement Zero Trust Architecture and offers guidance and support throughout the process."})]})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-shield-alt"})}),e.jsxs("div",{className:"feature-content",children:[e.jsx("h3",{children:"Legacy Systems"}),e.jsx("p",{children:"Hrify Digital assesses client legacy systems for compatibility with Zero Trust principles. We help clients upgrade or replace systems and give modernization recommendations."})]})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-users"})}),e.jsxs("div",{className:"feature-content",children:[e.jsx("h3",{children:"User Experience"}),e.jsx("p",{children:"Hrify Digital designs user-friendly authentication methods tailored to clients' needs and offers expertise in implementing these technologies with training and documentation."})]})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-check-circle"})}),e.jsxs("div",{className:"feature-content",children:[e.jsx("h3",{children:"Tackling Cultural Resistance"}),e.jsx("p",{children:"Hrify Digital creates change management strategies for organizational culture and customized communication plans, showcasing successful Zero Trust implementations."})]})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-eye"})}),e.jsxs("div",{className:"feature-content",children:[e.jsx("h3",{children:"Visibility & Monitoring"}),e.jsx("p",{children:"Hrify Digital offers customizable security monitoring solutions to meet clients' specific needs and regulatory requirements with real-time visibility into network traffic."})]})]}),e.jsxs("div",{className:"feature-item",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-chart-bar"})}),e.jsxs("div",{className:"feature-content",children:[e.jsx("h3",{children:"Change Management"}),e.jsx("p",{children:"Hrify Digital develops customized communication plans for clients, with industry-specific training and resources to address challenges during implementation."})]})]})]})]})}),e.jsx("section",{className:"cta-section",id:"contact",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"cta-content",children:[e.jsx("h2",{children:"Ready to Secure Your Organization?"}),e.jsx("p",{children:"Trust our expertise for a streamlined and highly effective Zero Trust Architecture implementation."}),e.jsx("a",{href:"#contact-form",className:"btn-white",children:"Talk to Our Expert Today"})]})})})]})]}),ky=d("assets/images/newBanner/cy13.webp"),Sy=d("assets/images/govtrisk1-(1).webp"),By=d("assets/images/govtrisk1-(2).webp"),Dy=d("assets/images/govtrisk1-(3).webp");d("assets/images/govtrisk.webp");const Cy=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:ky,alt:"Governance Risk Management Compliance Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Streamline Your Approach to Operations With Governance, Risk Management & Compliance"}),e.jsx("p",{className:"main-subtitle",children:"Improve decision-making for your ideal IT investments, avoid reputational damage and legal hassles, and ensure your business operates at the highest level of responsibility."}),e.jsxs("div",{className:"tags-container",children:[e.jsx("div",{className:"tag-btn",children:"Risk Management"}),e.jsx("div",{className:"tag-btn",children:"Compliance"}),e.jsx("div",{className:"tag-btn",children:"Strategy"})]}),e.jsxs("a",{href:"#",className:"cta-button",children:["Get a Free Consultation",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginLeft:"0.5rem",verticalAlign:"middle"},children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})]}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Cybersecurity Services"}),e.jsx("p",{className:"section-intro",children:"Enhance the security of your digital environment and stay up-to-date with Hrify Digital's state-of-the-art Governance, Risk Management & Compliance solutions."}),e.jsxs("div",{className:"service-card",children:[e.jsx("p",{children:"Hrify Digital specializes in cybersecurity, providing top-notch GRC services. We navigate complex frameworks and regulations to align robust cybersecurity measures with clients' business objectives. Leveraging technology advancements, Hrify Digital delivers cutting-edge GRC services to provide real-time risk monitoring and compliance tracking. With proactive monitoring and a security-conscious culture, Hrify Digital empowers clients to navigate the cybersecurity landscape confidently."}),e.jsx("div",{className:"text-center mt-4",children:e.jsx("a",{href:"#",className:"cta-button",children:"Get a Free Consultation"})})]})]})}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Support Features"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"})}),e.jsx("h3",{className:"feature-title",children:"Unparalleled Expertise"}),e.jsx("p",{className:"feature-desc",children:"Our professionals have extensive GRC knowledge and guide organizations to adopt robust practices aligned with their business objectives."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"18",y1:"20",x2:"18",y2:"10"}),e.jsx("line",{x1:"12",y1:"20",x2:"12",y2:"4"}),e.jsx("line",{x1:"6",y1:"20",x2:"6",y2:"14"})]}),e.jsx("h3",{className:"feature-title",children:"Optimal Resource Allocation"}),e.jsx("p",{className:"feature-desc",children:"Our team provides tailored GRC services with qualified personnel and ample budgets to meet client requirements."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),e.jsx("polyline",{points:"2 17 12 22 22 17"}),e.jsx("polyline",{points:"2 12 12 17 22 12"})]}),e.jsx("h3",{className:"feature-title",children:"Streamlined Integration"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital integrates GRC practices into clients' processes and systems, working closely with departments and teams for smooth implementation and optimized efficiency."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38"})}),e.jsx("h3",{className:"feature-title",children:"Continuous Monitoring & Improvement"}),e.jsx("p",{className:"feature-desc",children:"We at Hrify Digital regularly monitor and review clients' GRC activities to ensure compliance, identify areas for improvement, and provide proactive recommendations for a strong cybersecurity posture."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),e.jsx("h3",{className:"feature-title",children:"Promoting a Security-Conscious Culture"}),e.jsx("p",{className:"feature-desc",children:"We promote security and compliance culture in clients' organizations by prioritizing cybersecurity awareness and accountability and embedding security practices into their culture."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"}),e.jsx("rect",{x:"9",y:"9",width:"6",height:"6"}),e.jsx("line",{x1:"9",y1:"1",x2:"9",y2:"4"}),e.jsx("line",{x1:"15",y1:"1",x2:"15",y2:"4"}),e.jsx("line",{x1:"9",y1:"20",x2:"9",y2:"23"}),e.jsx("line",{x1:"15",y1:"20",x2:"15",y2:"23"}),e.jsx("line",{x1:"20",y1:"9",x2:"23",y2:"9"}),e.jsx("line",{x1:"20",y1:"14",x2:"23",y2:"14"}),e.jsx("line",{x1:"1",y1:"9",x2:"4",y2:"9"}),e.jsx("line",{x1:"1",y1:"14",x2:"4",y2:"14"})]}),e.jsx("h3",{className:"feature-title",children:"Technological Advancements"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital uses advanced technology to improve services. With GRC software and automation tools, Dimiour streamlines processes, monitors risk, tracks compliance, and generates reports in real-time."})]})]})]})}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Cybersecurity Case Studies"}),e.jsxs("div",{className:"case-studies-grid",children:[e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image-wrapper",children:e.jsx("img",{src:Sy,alt:"Financial Services Security",className:"case-image"})}),e.jsxs("div",{className:"case-content",children:[e.jsx("h3",{className:"case-title",children:"Financial Services Security"}),e.jsx("p",{className:"case-desc",children:"How we helped a major bank implement robust GRC practices to protect sensitive financial data."})]})]}),e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image-wrapper",children:e.jsx("img",{src:By,alt:"Healthcare Compliance",className:"case-image"})}),e.jsxs("div",{className:"case-content",children:[e.jsx("h3",{className:"case-title",children:"Healthcare Compliance"}),e.jsx("p",{className:"case-desc",children:"Ensuring HIPAA compliance while strengthening security posture for a healthcare provider."})]})]}),e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image-wrapper",children:e.jsx("img",{src:Dy,alt:"Retail Risk Management",className:"case-image"})}),e.jsxs("div",{className:"case-content",children:[e.jsx("h3",{className:"case-title",children:"Retail Risk Management"}),e.jsx("p",{className:"case-desc",children:"Developing a comprehensive risk management strategy for a multinational retail chain."})]})]})]})]})})]})]}),zy=d("assets/images/newBanner/cy14.webp");d("assets/images/cyberdefrnse.webp");const My=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:zy,alt:"Cyber Defense Investigation Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Identify, Analyze & Mitigate Malicious Activities"}),e.jsx("p",{className:"main-subtitle",children:"A strong cyber defense solution where everything and everyone is accounted for to uphold security and ensure the countermeasures are up-to-date with current innovations."}),e.jsxs("div",{className:"icon-grid",children:[e.jsxs("div",{className:"icon-card",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),e.jsx("span",{children:"Confidentiality"})]}),e.jsxs("div",{className:"icon-card",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),e.jsx("span",{children:"Integrity"})]}),e.jsxs("div",{className:"icon-card",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),e.jsx("span",{children:"Availability"})]})]}),e.jsxs("a",{href:"#contact",className:"cta-button",children:["Schedule a Consultation",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginLeft:"0.5rem",verticalAlign:"middle"},children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})]}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Elevate your Cyber Defense withHrify Digital"}),e.jsx("p",{className:"section-intro",children:"Align, automate, collaborate, excel in investigations, and ensure compliance effortlessly."}),e.jsxs("div",{className:"service-card",children:[e.jsx("p",{children:"Hrify Digital, a leading provider of integrated Cyber Defense and Investigation services, seamlessly aligns cybersecurity measures with your organizational goals. Skilled professionals and legal experts tackle complexities, ensuring compliance. With robust data acquisition and preservation, including advanced forensics, evidence integrity is maintained. Facilitating collaboration through a centralized system, we advocate for increased budgets and prioritize resource investments. Committed to fortifying cyber defense, Hrify Digital excels in investigations."}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Schedule a Consultation"})]})]})}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Support Features"}),e.jsx("p",{className:"section-intro",children:"Comprehensive cybersecurity solutions tailored to your organization's needs"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),e.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),e.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),e.jsx("h3",{className:"feature-title",children:"Threat Intelligence Network"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital extensive partnerships provide real-time threat intelligence, trend updates, and collaborative sharing."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),e.jsx("h3",{className:"feature-title",children:"User-Centric Security Measures"}),e.jsx("p",{className:"feature-desc",children:"We use employee input to create user-friendly security measures, including multi-factor authentication, secure remote access, and password managers."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),e.jsx("h3",{className:"feature-title",children:"Legacy System Risk Mitigation Plan"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital addresses vulnerable legacy systems using network segmentation, intrusion detection, patching, and upgrades/replacements."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),e.jsx("polyline",{points:"14 2 14 8 20 8"}),e.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),e.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),e.jsx("polyline",{points:"10 9 9 9 8 9"})]}),e.jsx("h3",{className:"feature-title",children:"Compliance Management Framework"}),e.jsx("p",{className:"feature-desc",children:"Our expert team ensures compliance with cybersecurity regulations and standards using automated tools."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),e.jsx("h3",{className:"feature-title",children:"Strategic Budget Allocation"}),e.jsx("p",{className:"feature-desc",children:"We at Hrify Digital take cybersecurity seriously, investing in tech and skilled professionals to avoid financial and reputational harm from cyber attacks."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),e.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),e.jsx("h3",{className:"feature-title",children:"Cybersecurity Awareness Program"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital implements a comprehensive cybersecurity awareness program, encompassing training, workshops, and campaigns to educate employees on threats and best practices for security."})]})]})]})}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Cybersecurity Case Studies"}),e.jsx("p",{className:"section-intro",children:"Real-world examples of how we've helped organizations strengthen their security posture"}),e.jsxs("div",{className:"case-studies-grid",children:[e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})}),e.jsxs("div",{className:"case-content",children:[e.jsx("p",{className:"case-category",children:"Banking & Finance"}),e.jsx("h3",{className:"case-title",children:"Financial Institution Breach Prevention"}),e.jsx("p",{className:"case-desc",children:"A major financial institution faced sophisticated phishing attacks targeting customer data. Hrify Digital implemented advanced threat detection systems and employee training, reducing successful attacks by 98% within three months."})]})]}),e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image-wrapper",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})})}),e.jsxs("div",{className:"case-content",children:[e.jsx("p",{className:"case-category",children:"Healthcare"}),e.jsx("h3",{className:"case-title",children:"Healthcare Data Protection"}),e.jsx("p",{className:"case-desc",children:"A healthcare network with 12 facilities needed to strengthen HIPAA compliance and protect patient data. Our team implemented a comprehensive security framework that achieved 100% compliance while improving system performance."})]})]}),e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}),e.jsxs("div",{className:"case-content",children:[e.jsx("p",{className:"case-category",children:"Manufacturing"}),e.jsx("h3",{className:"case-title",children:"Manufacturing Supply Chain Security"}),e.jsx("p",{className:"case-desc",children:"A global manufacturer experienced supply chain disruptions due to security vulnerabilities. Hrify Digital secured their entire supply chain network, preventing an estimated $4.2M in potential losses from future attacks."})]})]}),e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]})}),e.jsxs("div",{className:"case-content",children:[e.jsx("p",{className:"case-category",children:"Public Sector"}),e.jsx("h3",{className:"case-title",children:"Government Agency Compliance"}),e.jsx("p",{className:"case-desc",children:"A government agency needed to meet stringent new cybersecurity requirements. Our team implemented a compliance management framework that achieved certification in record time while strengthening overall security posture."})]})]})]})]})}),e.jsx("section",{className:"contact-section",id:"contact",children:e.jsxs("div",{className:"container text-center",children:[e.jsx("h2",{className:"section-title",style:{color:"white"},children:"Schedule a Consultation"}),e.jsx("p",{className:"section-intro",style:{color:"#f0f0f0"},children:"Ready to strengthen your cybersecurity posture? Our experts are ready to help."}),e.jsx("div",{className:"contact-form",children:e.jsxs("form",{children:[e.jsx("label",{htmlFor:"name",children:"Name"}),e.jsx("input",{id:"name",type:"text",placeholder:"Enter your name",required:!0}),e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{id:"email",type:"email",placeholder:"Enter your email",required:!0}),e.jsx("label",{htmlFor:"message",children:"Message"}),e.jsx("textarea",{id:"message",placeholder:"Tell us about your cybersecurity needs",required:!0}),e.jsx("button",{type:"submit",className:"submit-btn",children:"Submit"})]})})]})})]})]}),Ey=d("assets/images/newBanner/cy15.webp"),Wy=d("assets/images/cyber_manifacter-(1).webp");d("assets/images/cyber-security.webp");const Iy=d("assets/images/cyber_finace.webp"),Ay=d("assets/images/cyber_helth.webp"),Ty=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Ey,alt:"Cyber Advisory Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"A Risk-Conscious Approach to Cyber Threats With Our Cyber Advisory"}),e.jsx("p",{className:"main-subtitle",children:"Necessary insights to navigate through all evolving threats, assess risks, and create response strategies that blend in within your organization's core operations to meet the required security regulations."}),e.jsxs("div",{className:"icon-grid",children:[e.jsx("div",{className:"icon-card",children:e.jsx("h3",{children:"Communication"})}),e.jsx("div",{className:"icon-card",children:e.jsx("h3",{children:"Decision"})}),e.jsx("div",{className:"icon-card",children:e.jsx("h3",{children:"Incident Response"})}),e.jsx("div",{className:"icon-card",children:e.jsx("h3",{children:"IT Services"})})]}),e.jsxs("div",{className:"d-flex justify-content-center gap-4 flex-wrap",children:[e.jsxs("a",{href:"#schedule",className:"cta-button",children:["Schedule a Meeting",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginLeft:"0.5rem",verticalAlign:"middle"},children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]}),e.jsx("a",{href:"#learn-more",className:"cta-button",style:{background:"transparent",border:"2px solid #1B8DBB",color:"#1B8DBB"},children:"Learn More"})]})]}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Cyber Security Services"}),e.jsx("p",{className:"section-intro",children:"Safeguard your digital assets with Hrify Digital's Advisory Services through comprehensive risk management, threat intelligence, incident response planning, and security awareness training."}),e.jsxs("div",{className:"service-card",children:[e.jsx("p",{children:"Hrify Digital extends IT Advisory Services to encompass a comprehensive risk management process, bolstering organizations' capabilities in threat intelligence, incident response planning, and security awareness training. Our expertise enables us to assess and address emerging cyber threats while providing proactive guidance and strategies to our clients. With a focus on risk mitigation and resilience, Hrify Digitalempowers organizations to enhance their security posture and effectively respond to incidents."}),e.jsx("a",{href:"#schedule",className:"cta-button",children:"Schedule a Meeting"})]})]})}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Support Features"}),e.jsx("p",{className:"section-intro",children:"Comprehensive IT solutions tailored to your organization's needs"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),e.jsx("h3",{className:"feature-title",children:"Balancing Security & Usability"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital balances security and usability for clients by optimizing workflow practices without compromising security."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),e.jsx("polyline",{points:"14 2 14 8 20 8"}),e.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),e.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),e.jsx("polyline",{points:"10 9 9 9 8 9"})]}),e.jsx("h3",{className:"feature-title",children:"Regulatory Compliance"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital helps organizations with regulatory compliance, including audits, policy development, and guidance for IT security requirements."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),e.jsx("h3",{className:"feature-title",children:"Stay Updated"}),e.jsx("p",{className:"feature-desc",children:"Our team is highly trained in the latest technology trends to provide proactive solutions for emerging IT challenges."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),e.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}),e.jsx("h3",{className:"feature-title",children:"Scalable Solutions"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital offers flexible pricing models to accommodate clients with limited resources, ensuring they receive necessary IT services within their budget."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"}),e.jsx("rect",{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"}),e.jsx("line",{x1:"6",y1:"6",x2:"6.01",y2:"6"}),e.jsx("line",{x1:"6",y1:"18",x2:"6.01",y2:"18"})]}),e.jsx("h3",{className:"feature-title",children:"Legacy Systems & Infrastructure"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital consults on legacy system vulnerabilities, updating and securing infrastructure for modern IT requirements."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),e.jsx("h3",{className:"feature-title",children:"Vendor Risk Management"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital manages vendor risk for clients, ensuring third-party vendors meet IT security standards."})]})]})]})}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Cyber Solution Case Studies"}),e.jsx("p",{className:"section-intro",children:"See how we've helped organizations strengthen their IT infrastructure"}),e.jsxs("div",{className:"case-studies-grid",children:[e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image-wrapper",children:e.jsx("img",{src:Iy,alt:"Financial Services",className:"case-image"})}),e.jsxs("div",{className:"case-content",children:[e.jsx("h3",{className:"case-title",children:"Financial Services"}),e.jsx("p",{className:"case-desc",children:"How we helped a financial institution secure their digital infrastructure and meet compliance requirements."})]})]}),e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image-wrapper",children:e.jsx("img",{src:Ay,alt:"Healthcare",className:"case-image"})}),e.jsxs("div",{className:"case-content",children:[e.jsx("h3",{className:"case-title",children:"Healthcare"}),e.jsx("p",{className:"case-desc",children:"Implementing robust security measures for a healthcare provider while ensuring HIPAA compliance."})]})]}),e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image-wrapper",children:e.jsx("img",{src:Wy,alt:"Manufacturing",className:"case-image"})}),e.jsxs("div",{className:"case-content",children:[e.jsx("h3",{className:"case-title",children:"Manufacturing"}),e.jsx("p",{className:"case-desc",children:"Securing operational technology and IT infrastructure for a global manufacturing company."})]})]})]})]})}),e.jsx("section",{className:"cta-section",id:"contact",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Ready to Secure Your Organization?"}),e.jsx("p",{className:"section-intro",style:{color:"black"},children:"Schedule a consultation with our IT experts today"}),e.jsx("a",{href:"#schedule",className:"btn-white",children:"Schedule a Meeting"})," ",e.jsx("br",{})," ",e.jsx("br",{}),e.jsx("p",{className:"mt-3 opacity-90",style:{textAlign:"center"},children:"Our team will get back to you within 24 hours"})]})})]})]}),Fy=d("assets/images/newBanner/cy11.webp"),Ly=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Fy,alt:"Cyber Resilience Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"A Resilient Cyber Network Built on Cyber-Resilient Solutions"}),e.jsx("p",{className:"main-subtitle",children:"A holistic approach to safeguarding your digital infrastructure, ensuring continuous operation, and swiftly implementing recovering and adapting strategies to stay ahead of evolving cyber threats."}),e.jsxs("div",{className:"tags-container",children:[e.jsx("div",{className:"tag-btn",children:"Preparedness"}),e.jsx("div",{className:"tag-btn",children:"Response"}),e.jsx("div",{className:"tag-btn",children:"Recovery"})]})]}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Cybersecurity Services"}),e.jsx("p",{className:"section-intro",children:"From end-to-end detection capabilities to data-led intelligence solutions, Hrify Digital, using advanced expertise and cutting-edge technology, excels in delivering comprehensive Cyber resilience solutions that help businesses mitigate various cyber risks effectively."}),e.jsxs("div",{className:"service-card",children:[e.jsx("p",{children:"Hrify Digital provides robust cyber resilience solutions for organizations to ensure uninterrupted business continuity amidst complex IT landscapes and challenging cyber threats. With customized awareness programs, optimized resource allocation, threat intelligence collaboration, and user-centric security measures, trust Hrify Digital to safeguard your business swiftly and expertly against all cyber threats."}),e.jsxs("a",{href:"#contact",className:"cta-button",children:["Talk to Our Expert",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginLeft:"0.5rem",verticalAlign:"middle"},children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})]})]})}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Support Features"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"})}),e.jsx("h3",{className:"feature-title",children:"Resource Optimization"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital helps clients optimize cybersecurity investments through thorough risk assessments and prioritization of resource allocation based on risk levels."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),e.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),e.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),e.jsx("h3",{className:"feature-title",children:"Threat Intelligence & Collaboration"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital partners with industry peers and threat intelligence providers to gather and share timely threat information with clients, helping them defend against emerging cyber threats."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),e.jsx("h3",{className:"feature-title",children:"Simplified Security Solutions"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital provides user-friendly security platforms with centralized dashboards for effective management and monitoring of comprehensive protection for clients."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),e.jsx("polyline",{points:"14 2 14 8 20 8"})]}),e.jsx("h3",{className:"feature-title",children:"Legacy System Upgrades"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital helps clients upgrade or replace legacy systems while implementing compensating controls to reduce vulnerabilities and risks."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),e.jsx("h3",{className:"feature-title",children:"Third-Party Risk Management"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital provides third-party risk management services, ensuring clients' vendors and partners meet high-security standards through assessments and contractual agreements."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsxs("svg",{className:"feature-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),e.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),e.jsx("h3",{className:"feature-title",children:"Awareness"}),e.jsx("p",{className:"feature-desc",children:"Hrify Digital provides tailored cybersecurity awareness programs, including webinars, to help organizations educate their employees on cyber resilience and threat recognition."})]})]})]})})]})]}),Ry=d("assets/images/newBanner/bl7.webp"),Py=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Ry,alt:"Distributed Trust Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Execute and Validate Smart Contracts with Confidence"}),e.jsx("p",{className:"main-subtitle",children:"Harness Ethereum's Ecosystem to Build Next-Gen Decentralized Solutions"}),e.jsx("div",{className:"image-showcase",children:e.jsx("img",{src:"/assets/images/blockchain/bitcoin.webp",alt:"Blockchain Network"})}),e.jsxs("p",{className:"content-text",children:[e.jsx("strong",{children:"What We Offer:"})," Smart Contract Development, ERC Protocol Implementations, Community & Ecosystem Support, Comprehensive Blockchain Solutions tailored to your business needs."]}),e.jsxs("p",{className:"content-text",children:[e.jsx("strong",{children:"Hrify Digital"})," leverages Ethereum's rapid transaction capabilities to empower businesses and developers alike. By providing seamless decentralized applications (DApps) and robust smart contract creation without intermediaries, we are committed to fostering transparency, security, and innovation across industries."]}),e.jsxs("p",{className:"content-text",children:[e.jsx("strong",{children:"Why Choose Hrify Digital Ethereum Solutions?"})," Our strategic partnership with Ethereum opens opportunities for industries to leverage decentralized finance (DeFi), supply chain transparency, healthcare, gaming, real estate, and more."]}),e.jsxs("ul",{className:"features-list",children:[e.jsx("li",{children:"Transparent processes for trust and reliability"}),e.jsx("li",{children:"Uncompromising security through robust audits"}),e.jsx("li",{children:"Scalable solutions that grow with your business"}),e.jsx("li",{children:"Accountability through immutable records"})]}),e.jsx("p",{className:"content-text",children:"Our expert team enables businesses to minimize fraud, increase efficiency, and stay ahead in the decentralized ecosystem. With Hrify Digital, you gain access to an evolving infrastructure that delivers real-world value through blockchain technology."}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Schedule a Consultation"})]}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Key Features & Capabilities"}),e.jsx("div",{className:"image-showcase",children:e.jsx("img",{src:"/assets/images/blockchain/blockchain.webp",alt:"Key Features"})}),e.jsxs("p",{className:"content-text",children:[e.jsx("strong",{children:"🚀 Enhanced Scalability:"})," Adopting Ethereum 2.0's Proof-of-Stake and sharding mechanisms, we offer optimized transaction processing and scalability for high-performance decentralized applications."]}),e.jsxs("p",{className:"content-text",children:[e.jsx("strong",{children:"💰 Predictable & Lower Transaction Fees:"})," Utilizing EIP-1559 and Layer 2 solutions, we provide cost-effective and predictable transaction models with customizable options for businesses of any size."]}),e.jsxs("p",{className:"content-text",children:[e.jsx("strong",{children:"🛡️ Smart Contract Security:"})," Formal verification, penetration testing, and third-party audits ensure our smart contracts are secure, reliable, and fully tested before deployment."]}),e.jsxs("p",{className:"content-text",children:[e.jsx("strong",{children:"🔧 Seamless Upgrade Pathways:"})," Our proactive involvement in Ethereum's Improvement Proposals (EIPs) allows us to stay ahead of the curve and deliver seamless upgrades that ensure compatibility and efficiency."]}),e.jsxs("p",{className:"content-text",children:[e.jsx("strong",{children:"👨‍💻 User-Centric Interfaces:"})," We design intuitive interfaces and user-friendly wallets that simplify onboarding for users while integrating Layer 2 scaling solutions for seamless user experiences."]}),e.jsxs("p",{className:"content-text",children:[e.jsx("strong",{children:"📜 Regulatory Compliance:"})," Hrify Digital collaborates with legal teams and regulatory experts to ensure our solutions are compliant with evolving regulations across multiple jurisdictions."]})]})}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Explore Real-World Blockchain Applications"}),e.jsx("div",{className:"image-showcase",children:e.jsx("img",{src:"/assets/images/blockchain/bitcon1.webp",alt:"Blockchain Use Cases"})}),e.jsxs("ul",{className:"features-list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"DeFi Platforms:"})," Peer-to-peer lending, staking, and yield farming with security and transparency."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Supply Chain Management:"})," End-to-end product tracking and verification with immutable blockchain records."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Healthcare:"})," Secure and interoperable electronic health records management with patient privacy."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Real Estate:"})," Tokenization of property assets for fractional ownership and simplified transactions."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Gaming:"})," NFT-based asset ownership and play-to-earn gaming ecosystems on Ethereum."]})]}),e.jsx("h2",{className:"section-title",children:"Innovative Use Cases Powered by Ethereum"}),e.jsxs("ul",{className:"features-list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Cross-Border Payments:"})," Fast and affordable remittance services powered by Ethereum's decentralized network."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Identity Verification:"})," Decentralized Identity (DID) frameworks ensuring secure and verifiable digital identities."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Voting Systems:"})," Transparent and tamper-proof election systems powered by smart contracts."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Charity & Donations:"})," Traceable and transparent fund distribution to ensure accountability in charitable organizations."]})]}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Discover More Solutions"})]})}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"What Our Clients Say"}),e.jsxs("div",{className:"testimonial-grid",children:[e.jsxs("div",{className:"testimonial-card",children:[e.jsx("p",{children:'"Hrify Digital transformed our supply chain transparency with their Ethereum blockchain solutions. We now have real-time product tracking and complete trust from our customers!"'}),e.jsx("div",{className:"testimonial-author",children:"— Rahul V., Supply Chain Manager"})]}),e.jsxs("div",{className:"testimonial-card",children:[e.jsx("p",{children:`"With Hrify Digital's help, we launched our DeFi lending platform in record time. Their smart contract expertise is unmatched!"`}),e.jsx("div",{className:"testimonial-author",children:"— Anjali K., CEO of FinTech Startup"})]}),e.jsxs("div",{className:"testimonial-card",children:[e.jsx("p",{children:'"The team at Hrify Digital guided us through every step of our NFT-based game development. They made complex blockchain technology simple and effective!"'}),e.jsx("div",{className:"testimonial-author",children:"— Varun S., Lead Game Developer"})]})]}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Get Started with Hrify Digital"})]})})]})]}),Hy=d("assets/images/newBanner/bl10.webp"),Oy=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Hy,alt:"Ethereum Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Empower Your Business with Ethereum Smart Contracts"}),e.jsx("p",{className:"main-subtitle",children:"Secure, scalable, and decentralized solutions powered by Ethereum Blockchain technology."}),e.jsx("div",{className:"image-showcase",children:e.jsx("img",{src:"/assets/images/blockchain/ethereumvector.webp",alt:"Ethereum Network"})}),e.jsx("h2",{className:"section-title",children:"Why Choose Ethereum?"}),e.jsxs("ul",{className:"features-list",children:[e.jsx("li",{children:e.jsx("span",{children:"Unmatched Security with Smart Contract Audits"})}),e.jsx("li",{children:e.jsx("span",{children:"Fast & Scalable Layer 2 Solutions"})}),e.jsx("li",{children:e.jsx("span",{children:"Lower Transaction Costs with Optimized Gas Fees"})}),e.jsx("li",{children:e.jsx("span",{children:"Seamless Integration for DApps & DeFi Platforms"})}),e.jsx("li",{children:e.jsx("span",{children:"Regulatory Compliant & Transparent Solutions"})})]}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Schedule a Demo"})]}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Real-World Applications on Ethereum"}),e.jsxs("div",{className:"use-case-grid",children:[e.jsxs("div",{className:"use-case-card",children:[e.jsx("h4",{children:"DeFi Platforms"}),e.jsx("p",{children:"Enable lending, staking, and yield farming through decentralized finance protocols."})]}),e.jsxs("div",{className:"use-case-card",children:[e.jsx("h4",{children:"Tokenization"}),e.jsx("p",{children:"Fractional ownership of assets including real estate, art, and intellectual property."})]}),e.jsxs("div",{className:"use-case-card",children:[e.jsx("h4",{children:"Supply Chain Transparency"}),e.jsx("p",{children:"Track products end-to-end with tamper-proof records on Ethereum."})]}),e.jsxs("div",{className:"use-case-card",children:[e.jsx("h4",{children:"Healthcare Data"}),e.jsx("p",{children:"Secure and interoperable EHRs to improve data privacy and sharing."})]}),e.jsxs("div",{className:"use-case-card",children:[e.jsx("h4",{children:"Digital Identity Verification"}),e.jsx("p",{children:"Enable secure and decentralized identity management for individuals and organizations."})]}),e.jsxs("div",{className:"use-case-card",children:[e.jsx("h4",{children:"Gaming & NFTs"}),e.jsx("p",{children:"Create and trade NFTs, power play-to-earn models, and ensure asset ownership in blockchain games."})]})]})]})}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"What Our Clients Say"}),e.jsxs("div",{className:"testimonial-grid",children:[e.jsxs("div",{className:"testimonial-card",children:[e.jsx("p",{children:'"Their Ethereum smart contract expertise helped us launch our DeFi platform in record time. Highly recommend!"'}),e.jsx("div",{className:"testimonial-author",children:"— Anjali K., CEO of FinTech Startup"})]}),e.jsxs("div",{className:"testimonial-card",children:[e.jsx("p",{children:'"We streamlined our supply chain using Ethereum-based solutions by this amazing team. Complete transparency and efficiency!"'}),e.jsx("div",{className:"testimonial-author",children:"— Rahul V., Supply Chain Manager"})]}),e.jsxs("div",{className:"testimonial-card",children:[e.jsx("p",{children:'"The NFT marketplace they built for us is intuitive and secure. Ethereum was the right choice!"'}),e.jsx("div",{className:"testimonial-author",children:"— Varun S., Game Developer"})]})]}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Get Started with Ethereum"})]})})]})]});d("assets/images/Banner/newbanimg/Hyperledger.webp");const _y=d("assets/images/newBanner/BL_11.webp"),Uy=d("assets/images/blockchain/blockchain.webp"),$y=()=>e.jsxs("main",{children:[e.jsx("div",{className:"slider",children:e.jsx("div",{className:"slides",children:e.jsx("div",{className:"slide",children:e.jsx("img",{src:_y,alt:"Hyperledger Banner"})})})}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
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
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Empower Your Enterprise with Hyperledger"}),e.jsx("p",{className:"main-subtitle",children:"Unlock the future of secure and scalable blockchain solutions with Hyperledger technology."}),e.jsx("div",{className:"image-showcase",children:e.jsx("img",{src:Uy,alt:"Enterprise Blockchain Solution"})})]}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Our Process"}),e.jsx("p",{className:"section-intro",children:"From idea to implementation, we deliver secure blockchain solutions tailored to your business needs."}),e.jsxs("div",{className:"process-grid",children:[e.jsxs("div",{className:"process-card",children:[e.jsx("h3",{children:"Discovery & Planning"}),e.jsx("p",{children:"Analyze your business challenges and identify how Hyperledger can drive efficiency and security."})]}),e.jsxs("div",{className:"process-card",children:[e.jsx("h3",{children:"Development"}),e.jsx("p",{children:"Design and build customized blockchain solutions leveraging Hyperledger frameworks."})]}),e.jsxs("div",{className:"process-card",children:[e.jsx("h3",{children:"Integration"}),e.jsx("p",{children:"Integrate blockchain seamlessly with your existing systems, ensuring smooth data flow and transparency."})]}),e.jsxs("div",{className:"process-card",children:[e.jsx("h3",{children:"Deployment & Support"}),e.jsx("p",{children:"Deploy robust solutions with ongoing monitoring, updates, and support to ensure continued success."})]})]})]})}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Key Benefits"}),e.jsx("p",{className:"section-intro",children:"Why choose Hyperledger for your enterprise blockchain solution?"}),e.jsxs("div",{className:"benefits-grid",children:[e.jsxs("div",{className:"benefit-card",children:[e.jsx("h3",{children:"Enhanced Security"}),e.jsx("p",{children:"Permissioned networks ensure data privacy and control over sensitive business transactions."})]}),e.jsxs("div",{className:"benefit-card",children:[e.jsx("h3",{children:"Scalable & Modular"}),e.jsx("p",{children:"Hyperledger frameworks offer scalability and flexibility to meet evolving business demands."})]}),e.jsxs("div",{className:"benefit-card",children:[e.jsx("h3",{children:"Faster Transactions"}),e.jsx("p",{children:"Streamline processes and reduce transaction time with distributed ledger technology."})]}),e.jsxs("div",{className:"benefit-card",children:[e.jsx("h3",{children:"Cost Efficiency"}),e.jsx("p",{children:"Lower operational costs by reducing intermediaries and automating complex processes."})]})]})]})}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Industries We Serve"}),e.jsx("p",{className:"section-intro",children:"Hyperledger solutions designed for a variety of industries."}),e.jsxs("div",{className:"industries-grid",children:[e.jsxs("div",{className:"industry-card",children:[e.jsx("h3",{children:"Finance & Banking"}),e.jsx("p",{children:"Enhance transparency and security for cross-border payments, KYC, and asset management."})]}),e.jsxs("div",{className:"industry-card",children:[e.jsx("h3",{children:"Healthcare"}),e.jsx("p",{children:"Enable secure data sharing, patient consent management, and interoperable EHR systems."})]}),e.jsxs("div",{className:"industry-card",children:[e.jsx("h3",{children:"Supply Chain"}),e.jsx("p",{children:"Track and trace goods from source to destination with real-time verification and trust."})]}),e.jsxs("div",{className:"industry-card",children:[e.jsx("h3",{children:"Government"}),e.jsx("p",{children:"Digitize public services, improve identity verification, and ensure transparent governance."})]})]})]})}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"What Our Clients Say"}),e.jsxs("div",{className:"testimonial-grid",children:[e.jsxs("div",{className:"testimonial-card",children:[e.jsx("p",{children:'"The Hyperledger solution they implemented streamlined our entire supply chain process. We now have complete transparency and trust in our data!"'}),e.jsx("div",{className:"testimonial-author",children:"— Rohan M., Supply Chain Director"})]}),e.jsxs("div",{className:"testimonial-card",children:[e.jsx("p",{children:'"We successfully launched our blockchain-based health record system. Data privacy and interoperability have improved significantly!"'}),e.jsx("div",{className:"testimonial-author",children:"— Dr. Priya S., Healthcare Administrator"})]}),e.jsxs("div",{className:"testimonial-card",children:[e.jsx("p",{children:'"Their expertise in Hyperledger helped us modernize government services with secure digital identity management."'}),e.jsx("div",{className:"testimonial-author",children:"— Arun K., E-Governance Consultant"})]})]})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Ready to Start Your Blockchain Journey?"}),e.jsx("p",{children:"Partner with us to implement enterprise-grade blockchain solutions powered by Hyperledger."}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Get a Free Consultation"})]})})]})]}),Vy=d("assets/images/newBanner/bl12.webp");d("assets/images/Banner/newbanimg/dapps.webp");const qy=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Vy,alt:"DApps Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Unleash DApps Power for Your Business"}),e.jsx("p",{className:"main-subtitle",children:"We deliver cutting-edge decentralized applications with secure, scalable blockchain solutions tailored to your needs."}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Get Started"})]}),e.jsx("section",{className:"section",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"benefits-grid",children:[e.jsxs("div",{className:"benefit-card",children:[e.jsx("i",{className:"fas fa-lock"}),e.jsx("h3",{children:"Secure & Transparent"}),e.jsx("p",{children:"Enjoy unparalleled security and transparency with blockchain-backed decentralized applications."})]}),e.jsxs("div",{className:"benefit-card",children:[e.jsx("i",{className:"fas fa-coins"}),e.jsx("h3",{children:"Reduced Costs"}),e.jsx("p",{children:"Streamline operations and reduce fees by eliminating middlemen with automated smart contracts."})]}),e.jsxs("div",{className:"benefit-card",children:[e.jsx("i",{className:"fas fa-network-wired"}),e.jsx("h3",{children:"Global Access"}),e.jsx("p",{children:"Reach users worldwide anytime, with 24/7 decentralized systems that never sleep."})]}),e.jsxs("div",{className:"benefit-card",children:[e.jsx("i",{className:"fas fa-cogs"}),e.jsx("h3",{children:"Flexible Solutions"}),e.jsx("p",{children:"We design DApps to fit your industry and specific business needs, ensuring perfect integration."})]})]})})}),e.jsx("section",{className:"section",style:{backgroundColor:"white"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"DApp Features You Can Trust"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("h3",{children:"Smart Contract Creation"}),e.jsx("p",{children:"Robust, tamper-proof contracts to automate processes, ensuring reliability and security."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h3",{children:"Custom Token Launch"}),e.jsx("p",{children:"Launch your native tokens or NFTs to unlock new opportunities and customer engagement."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h3",{children:"DeFi Solutions"}),e.jsx("p",{children:"Build decentralized finance platforms for lending, staking, and seamless financial services."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h3",{children:"Scalable Blockchain Networks"}),e.jsx("p",{children:"From Ethereum to Polygon, we build on the most trusted blockchains for scalability and speed."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h3",{children:"Wallet Integration"}),e.jsx("p",{children:"Seamlessly integrate popular crypto wallets like MetaMask for easy and secure user transactions."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h3",{children:"DAO Development"}),e.jsx("p",{children:"Empower your community with decentralized autonomous organization (DAO) platforms for transparent governance."})]})]})]})}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Industries We Empower"}),e.jsxs("div",{className:"industries-list",children:[e.jsxs("div",{className:"industry-card",children:[e.jsx("h4",{children:"Finance & DeFi"}),e.jsx("p",{children:"Revolutionize financial services with decentralized and peer-to-peer transactions."})]}),e.jsxs("div",{className:"industry-card",children:[e.jsx("h4",{children:"Healthcare"}),e.jsx("p",{children:"Protect sensitive data and streamline healthcare processes with secure DApps."})]}),e.jsxs("div",{className:"industry-card",children:[e.jsx("h4",{children:"Supply Chain"}),e.jsx("p",{children:"Ensure end-to-end transparency and traceability across your supply chain networks."})]}),e.jsxs("div",{className:"industry-card",children:[e.jsx("h4",{children:"Gaming & Metaverse"}),e.jsx("p",{children:"Develop NFT economies and immersive experiences for the next-gen virtual world."})]}),e.jsxs("div",{className:"industry-card",children:[e.jsx("h4",{children:"Real Estate"}),e.jsx("p",{children:"Automate real estate deals with secure smart contracts and reduce paperwork."})]})]})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Ready to Embrace the Future?"}),e.jsx("p",{children:"Let us build your decentralized app today. Book a free consultation and take the first step!"}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Schedule Now"})]})})]})]}),Yy=d("assets/images/newBanner/bl8.webp");d("assets/images/Banner/newbanimg/nft.webp");const Gy=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Yy,alt:"NFT Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Unleash the Power of NFTs for Your Business"}),e.jsx("p",{className:"main-subtitle",children:"We craft innovative NFT solutions to help you engage audiences, create value, and lead the decentralized future."}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Get Started"})]}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Claim Unique Ownership for Your Digital Assets With NFT"}),e.jsx("p",{className:"section-intro",children:"Utilize NFT services on blockchain to acquire ownership of all your digital assets and virtual items with unique cryptographic tokens built for authenticity."}),e.jsxs("div",{className:"tags-container",children:[e.jsx("div",{className:"tag-btn",children:"Unique Digital Assets"}),e.jsx("div",{className:"tag-btn",children:"Blockchain Authentication"}),e.jsx("div",{className:"tag-btn",children:"Ownership"}),e.jsx("div",{className:"tag-btn",children:"Blockchain Services"})]}),e.jsxs("div",{className:"service-card",children:[e.jsx("p",{children:"Discover Hrify Digital's NFT services, offering a seamless solution for digital asset ownership and secure exchanges. Safeguard your NFTs hassle-free, with easy ownership claims and smooth transfers during selling."}),e.jsx("p",{children:"Hrify Digital cutting-edge NFT services can help protect your creative work, whether it is your digital art, music album, design, or property, making hefty processes like ownership claims and transactions easier than ever in the digital marketplace. Our expert team offers user-friendly interfaces, eco-conscious practices, and secure blockchain technology to ensure a seamless experience for our users. With Hrify Digital NFT services, you can protect your intellectual property and enjoy the benefits of automated royalties while exploring exclusive partnerships and cross-chain support for added value."}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Schedule a Consultation"})]}),e.jsx("h2",{className:"section-title",children:"Support Features"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Copyright & IP Protection"}),e.jsx("p",{children:"Hrify Digital automatically allocates a percentage of secondary sales to creators through smart contracts and implements a robust DRM system for intellectual property protection."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Security Concerns"}),e.jsx("p",{children:"Hrify Digital conducts regular security audits, offers optional cold wallet storage, and strongly focuses on user asset protection."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Environmental Impact"}),e.jsx("p",{children:"Hrify Digital migrates to a proof-of-stake blockchain and supports environmental initiatives to offset the platform's carbon footprint."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Cost of Transactions"}),e.jsx("p",{children:"Hrify Digital optimizes gas fees through efficient smart contract coding and implements Layer 2 scaling solutions for cost-effectiveness."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Regulatory Compliance"}),e.jsx("p",{children:"Hrify Digital collaborates with legal experts, communicates platform policies transparently, and ensures compliance with relevant regulations."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Optimizing Market Saturation"}),e.jsx("p",{children:"Hrify Digital forms exclusive partnerships with renowned creators and emphasizes the long-term value and utility of NFTs."})]})]})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Ready to Embrace the Future?"}),e.jsx("p",{children:"Let us build your NFT solution today. Book a free consultation and take the first step!"}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Schedule Now"})]})})]})]}),Qy=d("assets/images/newBanner/bl9.webp");d("assets/images/Banner/newbanimg/ipfs.webp");const Ky=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Qy,alt:"IPFS Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Faster, Safer & Decentralized Web With IPFS"}),e.jsx("p",{className:"main-subtitle",children:"Eliminate centralized servers, accelerate content delivery, and scale applications efficiently with Hrify Digital IPFS solutions."}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Get Started"})]}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Why Choose IPFS?"}),e.jsxs("div",{className:"about-grid",children:[e.jsxs("div",{className:"about-text",children:[e.jsx("p",{className:"section-intro",children:"IPFS revolutionizes web storage by tracking file versions, enabling direct interactions, and removing reliance on centralized servers. Hrify Digital solution ensures reliable access, privacy, and decentralized file sharing."}),e.jsx("p",{className:"section-intro",children:"With blockchain integration, advanced encryption, and efficient content delivery, we provide an optimal storage system that enhances security while reducing costs."}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Learn More"})]}),e.jsx("div",{className:"image-showcase",children:e.jsx("img",{src:"/assets/images/blockchain/blockchain.webp",alt:"IPFS Storage"})})]})]})}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Key Features"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("h3",{children:"Decentralized Storage"}),e.jsx("p",{children:"IPFS removes reliance on a single server, ensuring your data is always available."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h3",{children:"Enhanced Security"}),e.jsx("p",{children:"Data encryption and blockchain integration protect your digital assets from unauthorized access."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h3",{children:"Scalability"}),e.jsx("p",{children:"Designed to support high traffic and large-scale applications without slowdowns."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h3",{children:"Efficient File Sharing"}),e.jsx("p",{children:"Quick and direct peer-to-peer transfers make data retrieval seamless."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h3",{children:"Version Control"}),e.jsx("p",{children:"IPFS ensures access to past versions of files, preventing accidental data loss."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h3",{children:"Cost Optimization"}),e.jsx("p",{children:"Storage costs are reduced by leveraging decentralized providers."})]})]})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Secure Your Data With IPFS"}),e.jsx("p",{children:"Join the decentralized web revolution with Hrify Digital advanced storage solutions."}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Schedule a Consultation"})]})})]})]}),Xy=d("assets/images/newBanner/enterprise.webp");d("assets/images/Banner/newbanimg/enterprise.webp");const Zy=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Xy,alt:"Enterprise Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Streamline Your Business with Hrify ERP Solutions"}),e.jsx("p",{className:"main-subtitle",children:"Experience seamless integration of finance, HR, operations, and more ERP. Manage every aspect of your business efficiently and effectively, all from a single, powerful platform."}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Explore Features"})]}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Transform Your Business with Hrify ERP"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("img",{src:"/assets/images/erp/finace.png",alt:"Finance Management"}),e.jsx("h4",{children:"Finance Management"}),e.jsx("p",{children:"Streamline financial operations, manage budgets, automate financial reporting, and ensure cash flow for better decision-making."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("img",{src:"/assets/images/erp/procumment.png",alt:"Procurement Simplified"}),e.jsx("h4",{children:"Procurement Simplified"}),e.jsx("p",{children:"Streamline vendor management, automate procurement processes, and ensure cost-effective purchasing."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("img",{src:"/assets/images/erp/inventory.png",alt:"Inventory Control"}),e.jsx("h4",{children:"Inventory Control"}),e.jsx("p",{children:"Monitor stock levels, manage inventory across multiple locations, and ensure optimal stock with real-time tracking."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("img",{src:"/assets/images/erp/hrm.png",alt:"Human Resource Management"}),e.jsx("h4",{children:"Human Resource Management"}),e.jsx("p",{children:"Simplify HR tasks, manage employee records, payroll, and performance seamlessly on a unified platform."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("img",{src:"/assets/images/erp/crm.png",alt:"Customer Relationship Management"}),e.jsx("h4",{children:"Customer Relationship Management"}),e.jsx("p",{children:"Build and manage customer relationships, track sales, and drive actionable insights with CRM tools."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("img",{src:"/assets/images/erp/vendormanagement.jpg",alt:"Supply Chain Optimization"}),e.jsx("h4",{children:"Supply Chain Optimization"}),e.jsx("p",{children:"Enhance supply chain efficiency, improve demand planning, and reduce operational costs in real-time."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("img",{src:"/assets/images/erp/warehouse.png",alt:"Warehouse Management"}),e.jsx("h4",{children:"Warehouse Management"}),e.jsx("p",{children:"Optimize warehouse operations, improve inventory tracking, and manage storage efficiently."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("img",{src:"/assets/images/erp/marketing.png",alt:"Marketing Automation"}),e.jsx("h4",{children:"Marketing Automation"}),e.jsx("p",{children:"Automate marketing campaigns, monitor lead generation, and measure ROI effortlessly."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("img",{src:"/assets/images/erp/procumment.png",alt:"E-commerce Integration"}),e.jsx("h4",{children:"E-commerce Integration"}),e.jsx("p",{children:"Integrate seamlessly with e-commerce platforms, manage orders, and sync inventory with ease."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("img",{src:"/assets/images/erp/bi.png",alt:"Business Intelligence"}),e.jsx("h4",{children:"Business Intelligence"}),e.jsx("p",{children:"Unlock actionable insights with advanced analytics, reporting, and data-driven strategies for growth."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("img",{src:"/assets/images/erp/rolebasedaccess.png",alt:"Role-Based Access"}),e.jsx("h4",{children:"Role-Based Access"}),e.jsx("p",{children:"Ensure data security with role-specific access to sensitive data and features."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("img",{src:"/assets/images/erp/mobilefrendly.png",alt:"Mobile Accessibility"}),e.jsx("h4",{children:"Mobile Accessibility"}),e.jsx("p",{children:"Access Hrify ERP on the go with a user-friendly mobile app, anywhere, anytime."})]})]})]})}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Unlock Your Business Potential with Our Game-Changing ERP Software"}),e.jsxs("div",{className:"benefits-grid",children:[e.jsxs("div",{className:"benefit-card",children:[e.jsx("div",{className:"benefit-number",children:"1"}),e.jsx("h4",{children:"User-Friendly Interface"}),e.jsx("p",{children:"Our intuitive design ensures easy navigation and quick adoption for all users, enhancing productivity."})]}),e.jsxs("div",{className:"benefit-card",children:[e.jsx("div",{className:"benefit-number",children:"2"}),e.jsx("h4",{children:"Seamless Management"}),e.jsx("p",{children:"Integrate and manage all business operations—finance, HR, inventory, and more—from a single platform."})]}),e.jsxs("div",{className:"benefit-card",children:[e.jsx("div",{className:"benefit-number",children:"3"}),e.jsx("h4",{children:"Tailored for Every Industry"}),e.jsx("p",{children:"Customizable solutions to meet the unique needs of various industries, ensuring flexibility and scalability."})]})]})]})}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Empower Your Business with Hrify ERP"}),e.jsxs("ul",{className:"empower-list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Reduce Manual Work and Human Errors:"})," Automate processes to increase efficiency and accuracy, minimizing human errors."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Access Real-Time Data:"})," Stay updated with live data, enabling smarter and more timely decisions."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Scale Seamlessly as Your Business Grows:"})," Hrify Digital ERP adapts to your growing business, ensuring consistent performance as you expand."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"24/7 Access to All Modules:"})," Stay connected and manage your business from anywhere, at any time."]})]})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Ready to Transform Your Business?"}),e.jsx("p",{children:"Partner with us to implement powerful, scalable ERP solutions tailored to your enterprise."}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Get a Free Consultation"})]})})]})]}),Jy=d("assets/images/newBanner/cy10.webp");d("assets/images/security-management.webp");const ej=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Jy,alt:"Security Management Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Managed Services"}),e.jsx("p",{className:"main-subtitle",children:"Protect Your Investments & Accelerate The Outcomes With Managed Services"}),e.jsx("p",{className:"main-subtitle",children:"Boost success and keep your business ahead with trusted managed services."}),e.jsxs("div",{className:"tags-container",children:[e.jsx("div",{className:"tag-btn",children:"Cloud Managed Services"}),e.jsx("div",{className:"tag-btn",children:"Endpoint Management"}),e.jsx("div",{className:"tag-btn",children:"Data Center Management"})]}),e.jsx("p",{className:"section-intro",children:"In today's volatile business environment, having a dependable IT infrastructure to support your operations is critical. With Hrify Digital managed services, businesses can ensure their systems run efficiently and securely."})]}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"managed-grid",children:[e.jsxs("div",{className:"managed-card",children:[e.jsx("h4",{children:"Security Management"}),e.jsx("p",{children:"Fortifying Your Business at Every Step"}),e.jsx("a",{href:"/securitymanagement",children:"Know More →"})]}),e.jsxs("div",{className:"managed-card",children:[e.jsx("h4",{children:"Monitoring & Maintenance"}),e.jsx("p",{children:"Maximize Performance With the Full Spectrum of Monitoring & Maintenance"}),e.jsx("a",{href:"/monitoringmaintenance",children:"Know More →"})]}),e.jsxs("div",{className:"managed-card",children:[e.jsx("h4",{children:"Cloud Services"}),e.jsx("p",{children:"Empower A Seamless Business With Hrify Digital Cloud Services"}),e.jsx("a",{href:"/cloudnative",children:"Know More →"})]}),e.jsxs("div",{className:"managed-card",children:[e.jsx("h4",{children:"Vendor Management"}),e.jsx("p",{children:"Streamline Your IT Operations With Vendor Management Expertise"}),e.jsx("a",{href:"/vendormanagement",children:"Know More →"})]}),e.jsxs("div",{className:"managed-card",children:[e.jsx("h4",{children:"Site Reliability Engineering"}),e.jsx("p",{children:"Embrace The Unwavering Software Performance With Hrify Digital"}),e.jsx("a",{href:"/sitereliability",children:"Know More →"})]}),e.jsxs("div",{className:"managed-card",children:[e.jsx("h4",{children:"Help Desk/End User Compute"}),e.jsx("p",{children:"Streamline Operations with Reliable Help Desk Support"}),e.jsx("a",{href:"/helpdesk",children:"Know More →"})]})]}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Contact Us"})]})})]})]}),tj=d("/assets/images/newBanner/ma_ser4.webp"),sj=()=>e.jsxs("main",{children:[e.jsx("div",{className:"slider",children:e.jsx("div",{className:"slides",children:e.jsx("div",{className:"slide",children:e.jsx("img",{src:tj,alt:"Site Reliability Banner"})})})}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
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
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Site Reliability Engineering"}),e.jsx("p",{className:"main-subtitle",children:"Ensure the Smooth Run of Your System With Site Reliability Engineering"}),e.jsx("p",{className:"main-subtitle",children:"Elevate efficiency and improve collaboration and operations planning in automation for reliability improvement."}),e.jsxs("div",{className:"tags-container",children:[e.jsx("div",{className:"tag-btn",children:"SLAs / SLOs / SLIs"}),e.jsx("div",{className:"tag-btn",children:"Performance Metric"}),e.jsx("div",{className:"tag-btn",children:"Monitors & Alerts"}),e.jsx("div",{className:"tag-btn",children:"Managed Services"})]}),e.jsx("p",{className:"main-subtitle",children:"Hrify Digital's Site Reliability Solutions automate IT operations tasks, speed software delivery, and reduce IT risks, easing the friction between development and operations teams. Experience seamless software performances with Hrify Digital's Site Reliability Solutions! We at Hrify Digital bridge the gap between development and operations teams, streamlining the process for continuous updates and reducing operational risks."})]}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Key Capabilities"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Cultural Collaboration"}),e.jsx("p",{children:"Hrify Digital fosters a culture of collaboration, breaking down silos between development and operations teams."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Vendor Support & SLAs"}),e.jsx("p",{children:"Hrify Digital strategically phases the implementation, using automation to simplify complex challenges."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Performance Metrics"}),e.jsx("p",{children:"Our experts define meaningful SLOs and continuously review performance to optimize SRE processes."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Incident Response"}),e.jsx("p",{children:"Hrify Digital's proactive monitoring ensures swift incident detection and resolution, reducing downtime."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Monitoring & Alerting"}),e.jsx("p",{children:"We deploy intelligent monitoring with actionable alerts and fine-tuned configurations for real-time insights."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Risk Management"}),e.jsx("p",{children:"Our team's risk management framework prioritizes and mitigates risks, ensuring stability and future-proofing for clients."})]})]}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Book a Meeting"})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Ready to Achieve Unwavering Reliability?"}),e.jsx("p",{children:"Let us help you build resilient, high-performance systems with expert Site Reliability Engineering."}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Schedule a Consultation"})]})})]})]}),nj=d("/assets/images/newBanner/data.an.webp"),ij=()=>e.jsxs("main",{children:[e.jsx("div",{className:"slider",children:e.jsx("div",{className:"slides",children:e.jsx("div",{className:"slide",children:e.jsx("img",{src:nj,alt:"Monitoring & Maintenance Banner"})})})}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
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
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Monitoring & Maintenance"}),e.jsx("p",{className:"main-subtitle",children:"Maximize Outputs & Ensure Service Excellence"}),e.jsx("p",{className:"main-subtitle",children:"Hrify Digital's 360 Monitoring and Maintenance services deliver rapid response times and reliable systems, tailored to your unique needs—on-site or remote."}),e.jsxs("div",{className:"tags-container",children:[e.jsx("div",{className:"tag-btn",children:"Managed Services"}),e.jsx("div",{className:"tag-btn",children:"Compliance & Transparency"}),e.jsx("div",{className:"tag-btn",children:"Escalation Procedures"}),e.jsx("div",{className:"tag-btn",children:"Root Cause Analysis"})]}),e.jsx("p",{className:"main-subtitle",children:"At Hrify Digital, we provide agile 360 Managed Services to monitor and maintain your business infrastructure. By overseeing a vast array of devices and ensuring they stay updated, we emphasize compliance, transparency, and regular communication. Our well-defined escalation procedures and integration requirements minimize disruptions, reduce risks, and optimize operational costs."})]}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Key Capabilities"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Reliable IT Operations"}),e.jsx("p",{children:"Our flexible approach handles complex IT environments with clear onboarding and customization."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Cost Efficiency"}),e.jsx("p",{children:"Continuous assessments optimize costs and minimize disruptions with defined integration timelines."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Proactive Support"}),e.jsx("p",{children:"Regular checkpoints and clear escalation procedures ensure rapid response and SLA alignment."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Compliance & Security"}),e.jsx("p",{children:"Industry-standard protocols and transparent processes uphold brand reliability and regulatory adherence."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"System Availability"}),e.jsx("p",{children:"Root cause analysis and proactive monitoring maximize content availability and node reliability."})]})]}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Talk to Our Experts"})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Ready to Maximize Your IT Performance?"}),e.jsx("p",{children:"Let us provide proactive monitoring and maintenance to keep your systems running smoothly."}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Schedule a Consultation"})]})})]})]}),rj=d("assets/images/newBanner/ma_ser4.webp");d("assets/images/Banner/newbanimg/endusercom.webp");const aj=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:rj,alt:"Help Desk Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"End User Compute"}),e.jsx("p",{className:"main-subtitle",children:"Configure Streamline Operations With Reliable Help Desk Compute"}),e.jsx("p",{className:"main-subtitle",children:"Ensure your business tasks with End-User assistance and Help desk support."}),e.jsxs("div",{className:"tags-container",children:[e.jsx("div",{className:"tag-btn",children:"User Diversity"}),e.jsx("div",{className:"tag-btn",children:"IT Help Desk"}),e.jsx("div",{className:"tag-btn",children:"Workspace Management"}),e.jsx("div",{className:"tag-btn",children:"Managed Services"})]}),e.jsx("p",{className:"main-subtitle",children:"Offering the right computer support services and assistance, Hrify Digital's Help Desk/End User services provide efficient IT issue resolution, ensuring smooth business functioning, enhanced productivity, and long-term success."}),e.jsx("p",{className:"main-subtitle",children:"Hrify Digital srecognizes the significance of Help Desk/End User Computing services in minimizing business IT risks. Our team provides prompt and dependable support to end-users, reducing the downtime associated with IT issues. By proactively addressing challenges, we help maximize productivity, reduce costs associated with expensive downtime, and minimize the need for costly IT repairs. We recognize the significance of a robust support system that can elevate your business operations, and with a customer-centric mindset, our team strives to promptly address real-time queries, ensuring that your team can work seamlessly without disruptions."}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Book a Meeting"})]}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Support Features"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Vendor Support & SLAs"}),e.jsx("p",{children:"Hrify Digital sempowers its users by offering a comprehensive knowledge base and intuitive self-help resources, allowing them to resolve common issues independently. Regular user training sessions are conducted to enhance technical skills and optimize IT resource utilization."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Ticket Volume Management"}),e.jsx("p",{children:"Hrify Digital sefficiently manages ticket volume through a streamlined ticket triage process that prioritizes urgent issues. Leveraging automation tools, routine tasks are automated, enabling the support team to focus on complex challenges."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Handling Complex IT Environment"}),e.jsx("p",{children:"Hrify Digital's standardized hardware and software configurations facilitate seamless troubleshooting and support. Our support tiers efficiently handle different levels of complexity within the diverse IT environment."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Ticket Escalation Procedures"}),e.jsx("p",{children:"Hrify Digital's well-defined escalation procedures enable swift handling of complex issues, ensuring that they reach the appropriate teams promptly for resolution."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Remote Support"}),e.jsx("p",{children:"Through remote desktop software and other advanced tools, Hrify Digital delivers efficient support to off-site users, resolving issues promptly."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Integration & Automation"}),e.jsx("p",{children:"We optimize our operations by implementing integrated IT service management (ITSM) platforms, automating routine tasks, and enhancing overall efficiency."})]})]})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Ready to Streamline Your IT Support?"}),e.jsx("p",{children:"Let us deliver reliable, proactive Help Desk and End User Compute services for your team."}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Schedule a Consultation"})]})})]})]}),lj=d("assets/images/newBanner/enterprise.webp"),oj=()=>e.jsxs("main",{children:[e.jsx("div",{className:"slider",children:e.jsx("div",{className:"slides",children:e.jsx("div",{className:"slide",children:e.jsx("img",{src:lj,alt:"Vendor Management Banner"})})})}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
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
          `}),e.jsxs("div",{className:"text-justify",children:[e.jsx("h1",{className:"main-title",children:"Vendor Management"}),e.jsx("p",{className:"main-subtitle",children:"Manage Contracts, Risk & Procurement With Vendor Management"}),e.jsx("p",{className:"main-subtitle",children:"Identify new technological breakthroughs and experience our ongoing support for your business value. Our expert vendor management services help streamline processes, mitigate risks, and enhance cost efficiencies."}),e.jsx("p",{className:"main-subtitle",children:"At Hrify Digital, we ensure effective vendor selection and contract management, reducing operational risks and maximizing business efficiency. Our team fosters strong vendor relationships by maintaining transparency and adhering to industry best practices. By leveraging innovative vendor management strategies, we help businesses gain a competitive edge and optimize resources for sustainable growth."}),e.jsx("p",{className:"main-subtitle",children:"Our vendor management solutions empower businesses by integrating automation, data-driven decision-making, and customized procurement strategies. Whether you're seeking better contract negotiations or improving supplier performance, our expert solutions ensure seamless and strategic vendor operations."})]}),e.jsx("section",{className:"section",style:{backgroundColor:"#fff5f5"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Key Capabilities"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-handshake"})}),e.jsx("h4",{children:"Vendor Relationship Management"}),e.jsx("p",{children:"Strengthen vendor relationships through structured management and consistent communication."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-shield-alt"})}),e.jsx("h4",{children:"Risk Management"}),e.jsx("p",{children:"Mitigate potential vendor risks through careful assessment and proactive strategies."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-users"})}),e.jsx("h4",{children:"Supplier Diversity"}),e.jsx("p",{children:"Promote inclusivity and growth with a diverse vendor and supplier network."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-chart-line"})}),e.jsx("h4",{children:"Vendor Performance Monitoring"}),e.jsx("p",{children:"Track vendor performance with KPI-aligned assessments and regular feedback mechanisms."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-cogs"})}),e.jsx("h4",{children:"Integration & Data Management"}),e.jsx("p",{children:"Leverage integrated vendor platforms for secure data exchange and governance adherence."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-balance-scale"})}),e.jsx("h4",{children:"Vendor Consolidation"}),e.jsx("p",{children:"Optimize vendor relationships by identifying consolidation opportunities based on performance and cost."})]})]}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Consult Our Experts"})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Ready to Optimize Your Vendor Relationships?"}),e.jsx("p",{children:"Let us help you streamline procurement, reduce risks, and drive greater value from your vendors."}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Schedule a Consultation"})]})})]})]}),cj=d("assets/images/newBanner/data.an.webp");d("assets/images/Banner/newbanimg/Internet-of-Things.webp");const dj=d("assets/images/erp/iot.webp"),mj=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:cj,alt:"Internet of Things Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Internet of Things (IoT)"}),e.jsx("p",{className:"main-subtitle",children:"Lead Enterprise Integrity & Monetize Your Experience With IoT"}),e.jsx("p",{className:"main-subtitle",children:"Develop and encompass user experience with IoT-powered data aggregation layer. Our solutions provide unrivaled edge-to-cloud connectivity, robust data security, and seamless device management for businesses of all scales."}),e.jsx("p",{className:"main-subtitle",children:"At Hrify Digital, we take IoT to the next level by offering a comprehensive suite of services that include governance, security, data analytics, and seamless integration. Our layered IoT architecture ensures smooth connectivity and intelligent automation, empowering businesses to make informed decisions."}),e.jsx("div",{className:"image-showcase",children:e.jsx("img",{src:dj,alt:"IoT Solutions"})}),e.jsx("p",{className:"main-subtitle",children:"Our IoT solutions integrate automation, data-driven decision-making, and robust security protocols, enabling businesses to unlock new opportunities and optimize performance. Whether you're improving device connectivity, securing data exchange, or leveraging real-time analytics, we have the expertise to transform your IoT vision into reality."})]}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Key Capabilities"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-cloud"})}),e.jsx("h4",{children:"Edge-To-Cloud Connectivity"}),e.jsx("p",{children:"Seamless data flow between edge devices and the cloud ensures uninterrupted performance."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-shield-alt"})}),e.jsx("h4",{children:"End-To-End Security"}),e.jsx("p",{children:"Encryption and authentication mechanisms ensure safe and reliable data exchange."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-cogs"})}),e.jsx("h4",{children:"Simplified Device Management"}),e.jsx("p",{children:"Effortless management and configuration of IoT devices through an intuitive platform."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-lock"})}),e.jsx("h4",{children:"Security Measures for Data Integrity"}),e.jsx("p",{children:"Advanced encryption techniques protect data against unauthorized access and breaches."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-chart-line"})}),e.jsx("h4",{children:"Advanced Analytics Capabilities"}),e.jsx("p",{children:"Leverage real-time data insights to drive strategic decision-making and operational efficiency."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-network-wired"})}),e.jsx("h4",{children:"Standardized Communication Protocols"}),e.jsx("p",{children:"Ensuring seamless integration of diverse systems and IoT devices through standard protocols."})]})]}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Talk to Our Experts"})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Ready to Transform with IoT?"}),e.jsx("p",{children:"Let us build intelligent, connected solutions that drive your business forward."}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Schedule a Consultation"})]})})]})]}),uj=d("assets/images/newBanner/data.an1.webp");d("assets/images/Banner/newbanimg/NLP-ai.webp");const hj=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:uj,alt:"AI & NLP Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Elevate Your Business Success With AI & NLP"}),e.jsx("p",{className:"main-subtitle",children:"Empower your enterprise with AI-based intelligent automation and smarter insights."}),e.jsx("div",{className:"image-showcase",children:e.jsx("img",{src:"https://via.placeholder.com/600x400",alt:"AI & NLP Solutions"})}),e.jsx("p",{className:"main-subtitle",children:"Unlock the potential of AI with our advanced NLP services to automate data analytics, anomaly detection, and extract valuable insights from unstructured data. Our intelligent solutions improve efficiency and decision-making while maintaining data security and ethical AI practices."}),e.jsx("p",{className:"main-subtitle",children:"Our AI/NLP solutions enhance business capabilities by leveraging automation, real-time insights, and smart decision-making. Whether you're looking for AI-driven chatbots, fraud detection, or data privacy solutions, we ensure high accuracy, efficiency, and ethical AI standards."})]}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Key Capabilities"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-microchip"})}),e.jsx("h4",{children:"API & SDK"}),e.jsx("p",{children:"Seamlessly integrate AI capabilities into your business with easy-to-use APIs & SDKs."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-comment-alt"})}),e.jsx("h4",{children:"Language Generation"}),e.jsx("p",{children:"Generate high-quality text responses with advanced NLP models."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-brain"})}),e.jsx("h4",{children:"Cognitive AI Computing"}),e.jsx("p",{children:"Utilize AI-driven cognitive computing for smarter decision-making."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-comments"})}),e.jsx("h4",{children:"Multilingual Chatbot"}),e.jsx("p",{children:"Understand and respond in multiple languages with NLP-powered chatbots."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-eye"})}),e.jsx("h4",{children:"Visual Monitoring"}),e.jsx("p",{children:"Enhance security by analyzing real-time video feeds with AI."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-user-shield"})}),e.jsx("h4",{children:"Fake Content Detection"}),e.jsx("p",{children:"Identify fraudulent users and misinformation with AI-driven analysis."})]})]}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Book a Meeting"})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Ready to Harness AI & NLP?"}),e.jsx("p",{children:"Let us build intelligent, language-powered solutions that transform your business."}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Schedule a Consultation"})]})})]})]}),pj=d("/assets/images/newBanner/Data_an.webp"),gj=()=>e.jsxs("main",{children:[e.jsx("div",{className:"slider",children:e.jsx("div",{className:"slides",children:e.jsx("div",{className:"slide",children:e.jsx("img",{src:pj,alt:"Computer Vision Banner"})})})}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
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
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Computer Vision"}),e.jsx("p",{className:"main-subtitle",children:"Advance Your Business With Computer Vision"}),e.jsx("p",{className:"main-subtitle",children:"Create flawless products and a safe working environment with visual data recognition."}),e.jsx("p",{className:"main-subtitle",children:"Hrify Digital's Computer Vision is a powerful tool for your business that enables machines to interpret and understand visual data, providing valuable insights that can inform decision-making and improve processes for more streamlined business operations. From manufacturing to healthcare, our solutions leverage advanced algorithms to enhance efficiency, safety, and innovation."}),e.jsx("p",{className:"main-subtitle",children:"Our Computer Vision services go beyond basic functionality, offering robust support features that ensure reliability, adaptability, and performance in real-world applications. We empower businesses to harness visual data for actionable outcomes."}),e.jsx("p",{className:"main-subtitle",children:"Hrify Digital's cutting-edge Computer Vision services empower AI experts to analyze visuals, unlock facial recognition, object detection, autonomous vehicles, and medical image analysis. Whether you're enhancing quality control, improving safety protocols, or driving innovation, our tailored solutions deliver measurable results that transform how businesses operate and compete in a data-driven world."})]}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Core Capabilities"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-font"})}),e.jsx("h4",{children:"Optical Character Recognition (OCR)"}),e.jsx("p",{children:"Extract text from images and documents with high accuracy for automated data processing."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-tachometer-alt"})}),e.jsx("h4",{children:"Real-Time Processing"}),e.jsx("p",{children:"Optimize for real-time results with lightweight models for seamless edge device integration."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-video"})}),e.jsx("h4",{children:"Automate Surveillance"}),e.jsx("p",{children:"Enhance security with automated monitoring and detection of unusual activities."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-database"})}),e.jsx("h4",{children:"Data Quality & Quantity"}),e.jsx("p",{children:"Prioritize data curation and augmentation to ensure high-quality training datasets."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-globe"})}),e.jsx("h4",{children:"Real-World Variability"}),e.jsx("p",{children:"Specialized datasets for unique scenarios ensure effective performance in diverse environments."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-cogs"})}),e.jsx("h4",{children:"Model Size & Deployment"}),e.jsx("p",{children:"Flexible model options and continuous support for various computational needs."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-sync"})}),e.jsx("h4",{children:"Updates & Maintenance"}),e.jsx("p",{children:"Structured updates and proactive communication keep services reliable and current."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-bug"})}),e.jsx("h4",{children:"Edge Cases & Errors"}),e.jsx("p",{children:"Feedback-driven improvements enhance model robustness for challenging scenarios."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-chart-bar"})}),e.jsx("h4",{children:"Data & Analytics"}),e.jsx("p",{children:"Unlock valuable insights through advanced visual data analysis and case studies."})]})]}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Schedule a Consultation"})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Ready to See the Future?"}),e.jsx("p",{children:"Let us implement powerful Computer Vision solutions that transform how your business sees the world."}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Talk to Our Experts"})]})})]})]}),xj=d("assets/images/M_MLOPS.jpg"),fj=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:xj,alt:"ML / MLOps Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Transform Your Business with AI Excellence"}),e.jsx("p",{className:"main-subtitle",children:"Leverage cutting-edge machine learning solutions to drive innovation and stay ahead of the competition."}),e.jsxs("div",{className:"d-flex justify-content-center gap-4 flex-wrap mb-5",children:[e.jsx("div",{className:"bg-white px-4 py-3 rounded-pill shadow-sm",children:e.jsx("strong",{children:"Rapid Deployment"})}),e.jsx("div",{className:"bg-white px-4 py-3 rounded-pill shadow-sm",children:e.jsx("strong",{children:"Enhanced Accuracy"})}),e.jsx("div",{className:"bg-white px-4 py-3 rounded-pill shadow-sm",children:e.jsx("strong",{children:"Scalable Solutions"})})]}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Get a Free Consultation"})]}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Intelligent Data Solutions"}),e.jsx("p",{className:"main-subtitle",children:"Hrify Digital delivers state-of-the-art ML & MLOps services that transform raw data into actionable intelligence for your business."}),e.jsx("p",{className:"main-subtitle",children:"Our advanced machine learning algorithms unlock hidden patterns in your data, enabling smarter decision-making across your organization. With our MLOps expertise, we ensure your AI models remain accurate, up-to-date, and continuously improving. From predictive analytics to natural language processing, our solutions are tailored to your specific industry challenges. We don't just implement technology – we partner with you to create sustainable competitive advantages through data-driven innovation."}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Request a Demo"})]})}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Our AI Capabilities"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-microchip"})}),e.jsx("h4",{children:"Industry Expertise"}),e.jsx("p",{children:"Our team works closely with industry specialists to develop ML solutions that address specific challenges in healthcare, finance, retail, and manufacturing sectors."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-server"})}),e.jsx("h4",{children:"High-Performance Computing"}),e.jsx("p",{children:"We leverage cutting-edge GPU clusters and distributed computing frameworks to train complex models in a fraction of the time required by traditional methods."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-cogs"})}),e.jsx("h4",{children:"Automated Optimization"}),e.jsx("p",{children:"Our proprietary optimization engine automatically tunes model parameters, saving countless hours of manual adjustment while achieving superior performance metrics."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-box"})}),e.jsx("h4",{children:"Containerized Deployment"}),e.jsx("p",{children:"We package models in Docker containers with Kubernetes orchestration, ensuring consistent performance across development, testing, and production environments."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-eye"})}),e.jsx("h4",{children:"Continuous Monitoring"}),e.jsx("p",{children:"Our advanced monitoring systems track model performance in real-time, alerting you to potential issues before they impact your business operations."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-sync-alt"})}),e.jsx("h4",{children:"Adaptive Learning"}),e.jsx("p",{children:"Our models continuously learn from new data, automatically adapting to changing market conditions and customer behaviors without manual intervention."})]})]})]})}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Success Stories"}),e.jsx("p",{className:"section-intro",children:"See how our AI solutions have delivered measurable results for organizations like yours."}),e.jsxs("div",{className:"case-grid",children:[e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image",children:"Financial Services"}),e.jsxs("div",{className:"case-content",children:[e.jsx("h4",{children:"Fraud Detection System"}),e.jsx("p",{children:"Reduced fraudulent transactions by 87% for a major credit card provider using our advanced anomaly detection algorithms."}),e.jsx("a",{href:"#",className:"case-link",children:"View Case Study →"})]})]}),e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image",children:"Healthcare"}),e.jsxs("div",{className:"case-content",children:[e.jsx("h4",{children:"Patient Outcome Prediction"}),e.jsx("p",{children:"Improved treatment planning accuracy by 42% for a hospital network using our predictive analytics platform."}),e.jsx("a",{href:"#",className:"case-link",children:"View Case Study →"})]})]}),e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image",children:"E-Commerce"}),e.jsxs("div",{className:"case-content",children:[e.jsx("h4",{children:"Personalization Engine"}),e.jsx("p",{children:"Boosted conversion rates by 53% and average order value by 27% for an online retailer with our recommendation system."}),e.jsx("a",{href:"#",className:"case-link",children:"View Case Study →"})]})]})]})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Start Your AI Journey Today"}),e.jsx("p",{children:"Our experts are ready to discuss your unique challenges and how our AI solutions can drive measurable results for your business."}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Get a Free Consultation"})]})})]})]}),yj=d("assets/images/newBanner/data.an4.webp");d("assets/images/Banner/newbanimg/datascience.webp");const jj=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:yj,alt:"Data Science Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"From Data to Insights"}),e.jsx("p",{className:"main-subtitle",children:"Transform raw data into actionable insights and extract meaningful information to solve complex business problems."}),e.jsxs("div",{className:"d-flex justify-content-center gap-4 flex-wrap mb-5",children:[e.jsx("div",{className:"bg-white px-4 py-3 rounded-pill shadow-sm",children:e.jsx("strong",{children:"Data-Driven Decisions"})}),e.jsx("div",{className:"bg-white px-4 py-3 rounded-pill shadow-sm",children:e.jsx("strong",{children:"Improved Efficiency"})}),e.jsx("div",{className:"bg-white px-4 py-3 rounded-pill shadow-sm",children:e.jsx("strong",{children:"Predictive Analytics"})})]}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Book a Meeting"})]}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Data & Analytics"}),e.jsx("p",{className:"main-subtitle",children:"Hrify Digital's expert Data Science services use statistical analysis, Machine Learning, and Data Insights for accurate prediction models and solutions."}),e.jsx("p",{className:"main-subtitle",children:"Hrify Digital's Data Science strategy helps businesses make better decisions by analyzing a large amount of data and identifying patterns and trends, which ensures data-driven decisions that are more accurate, reliable, and informed. Our strategy also helps your business detect and prevent fraud by analyzing transactional data and identifying anomalous patterns. This can help your business minimize losses and protect your reputation."}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Book a Meeting"})]})}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Support Features"}),e.jsx("p",{className:"section-intro",children:"Our comprehensive data science capabilities to help you extract maximum value from your data."}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-users"})}),e.jsx("h4",{children:"Collaborating for Success"}),e.jsx("p",{children:"Hrify Digital facilitates interdisciplinary collaboration through regular meetings, workshops, and data visualization techniques to ensure insights are accessible to all stakeholders."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-shield-alt"})}),e.jsx("h4",{children:"Robust Privacy Measures"}),e.jsx("p",{children:"At Hrify Digital, we prioritize data privacy and security by implementing robust measures, including encryption and strict access controls."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-lightbulb"})}),e.jsx("h4",{children:"Understanding Complexity"}),e.jsx("p",{children:"Hrify Digital offers model interpretability solutions, including the use of interpretable models and model-agnostic techniques for complex models."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-chart-pie"})}),e.jsx("h4",{children:"Maximizing ROI"}),e.jsx("p",{children:"Hrify Digital defines clear objectives and KPIs for Data Science projects, regularly assessing and measuring their impact for a strong ROI."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-cogs"})}),e.jsx("h4",{children:"Seamless Integration"}),e.jsx("p",{children:"We at Hrify Digital ensure the seamless adoption and integration of Data Science solutions by involving stakeholders from the beginning and providing ongoing support."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("i",{className:"fas fa-balance-scale"})}),e.jsx("h4",{children:"Ethical Data Governance"}),e.jsx("p",{children:"Hrify Digital emphasizes ethical data governance through well-defined policies, designated data stewards, and continuous education for our Data Science teams."})]})]})]})}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Data & Analytics Case Studies"}),e.jsx("p",{className:"section-intro",children:"Discover how our Data Science solutions have helped organizations unlock the value of their data."}),e.jsxs("div",{className:"case-grid",children:[e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image",children:e.jsx("span",{className:"case-tag",children:"Retail Analytics"})}),e.jsxs("div",{className:"case-content",children:[e.jsx("h4",{children:"Customer Segmentation"}),e.jsx("p",{children:"Increased marketing ROI by 45% for a retail chain through advanced customer segmentation and personalized targeting strategies."}),e.jsx("a",{href:"#",className:"case-link",children:"View Case Study →"})]})]}),e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image",children:e.jsx("span",{className:"case-tag",children:"Financial Services"})}),e.jsxs("div",{className:"case-content",children:[e.jsx("h4",{children:"Fraud Detection System"}),e.jsx("p",{children:"Reduced fraudulent transactions by 78% for a banking institution using our anomaly detection and machine learning algorithms."}),e.jsx("a",{href:"#",className:"case-link",children:"View Case Study →"})]})]}),e.jsxs("div",{className:"case-card",children:[e.jsx("div",{className:"case-image",children:e.jsx("span",{className:"case-tag",children:"Manufacturing"})}),e.jsxs("div",{className:"case-content",children:[e.jsx("h4",{children:"Predictive Maintenance"}),e.jsx("p",{children:"Decreased equipment downtime by 62% and maintenance costs by 35% through our predictive maintenance data science solution."}),e.jsx("a",{href:"#",className:"case-link",children:"View Case Study →"})]})]})]})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Ready to Unlock the Power of Your Data?"}),e.jsx("p",{children:"Our data science experts are ready to help you transform your raw data into valuable business insights."}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Schedule a Consultation"})]})})]})]}),vj=d("assets/images/newBanner/data.an5.webp"),bj=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:vj,alt:"Analytics Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
          `}),e.jsxs("section",{className:"hero-section",style:{borderRadius:10},children:[e.jsx("div",{className:"floating-shape shape-1"}),e.jsx("div",{className:"floating-shape shape-2"}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsxs("div",{className:"col-lg-6 mb-5 mb-lg-0 hero-content",children:[e.jsx("div",{className:"d-flex align-items-center mb-3",children:e.jsx("div",{className:"me-2 bg-white text-primary px-3 py-1 rounded-pill",style:{fontSize:"0.8rem",fontWeight:"600"},children:"Home » Data Analytics » Analytics"})}),e.jsx("h1",{className:"display-4 fw-bold mb-4",children:"Make Every Decision Count"}),e.jsx("p",{className:"lead mb-5",children:"Go beyond basic reporting to uncover hidden patterns, predict future trends, with actionable insights to optimize performance and achieve your business goals."}),e.jsxs("div",{className:"row mb-4",children:[e.jsx("div",{className:"col-md-4",children:e.jsx("div",{className:"benefit-card",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"fas fa-lightbulb me-3",style:{fontSize:"1.5rem"}}),e.jsx("h5",{className:"fw-semibold mb-0",children:"Actionable Insights"})]})})}),e.jsx("div",{className:"col-md-4",children:e.jsx("div",{className:"benefit-card",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"fas fa-chart-bar me-3",style:{fontSize:"1.5rem"}}),e.jsx("h5",{className:"fw-semibold mb-0",children:"Data-Driven Decisions"})]})})}),e.jsx("div",{className:"col-md-4",children:e.jsx("div",{className:"benefit-card",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"fas fa-rocket me-3",style:{fontSize:"1.5rem"}}),e.jsx("h5",{className:"fw-semibold mb-0",children:"Optimize Performance"})]})})})]}),e.jsx("a",{href:"#contact",className:"btn btn-outline btn-lg px-4 rounded-pill",children:"Schedule a Meeting"})]}),e.jsx("div",{className:"col-lg-6 hero-image",children:e.jsx("img",{src:"https://placehold.co/600x400",alt:"Analytics Visualization",className:"img-fluid rounded-4 shadow"})})]})})]}),e.jsx("section",{className:"py-5 section-bg",children:e.jsxs("div",{className:"container py-5",children:[e.jsx("div",{className:"row justify-content-center mb-5",children:e.jsxs("div",{className:"col-lg-8 text-center",children:[e.jsx("h2",{className:"display-5 fw-bold section-title mb-4",children:"Data & Analytics"}),e.jsx("p",{className:"lead text-muted",children:"Explore Hrify Digital's Analytics For Advanced Statistics, Powerful Visualization, And Cutting-Edge Machine Learning For Precise Insights And Smart Decisions."})]})}),e.jsx("div",{className:"service-box mb-5",children:e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital's Data Analytics can offer top-notch risk management where analytics can identify potential threats and vulnerabilities by analyzing data, helping your business minimize losses and protect your reputation. In contrast, predictive analysis helps to anticipate changes in the markets and optimize operations and strategic decisions based on reliable data to ready your business for radical changes in the ever-changing business environment."})}),e.jsx("div",{className:"text-center",children:e.jsx("a",{href:"#contact",className:"btn btn-primary btn-lg px-5 rounded-pill",children:"Schedule a Meeting"})})]})}),e.jsx("section",{className:"py-5",children:e.jsxs("div",{className:"container py-5",children:[e.jsx("div",{className:"row justify-content-center mb-5",children:e.jsxs("div",{className:"col-lg-8 text-center",children:[e.jsx("h2",{className:"display-5 fw-bold section-title mb-4",children:"Support Features"}),e.jsx("p",{className:"lead text-muted",children:"Our comprehensive analytics capabilities to help you transform data into strategic business advantages."})]})}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-database"})}),e.jsx("h3",{children:"Data Quality & Availability"}),e.jsx("p",{className:"text-muted mb-0",children:"We at Hrify Digital have successfully implemented data quality checks and data cleansing processes, ensuring accurate and reliable insights. Centralizing data sources will streamline access, enabling our team to collaborate more efficiently."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-shield-alt"})}),e.jsx("h3",{children:"Data Security & Privacy"}),e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital takes data security seriously, enforcing strict access controls and authentication mechanisms, safeguarding sensitive information. Our commitment to compliance with data privacy regulations builds trust with customers and partners."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-link"})}),e.jsx("h3",{children:"Integration of Data Sources"}),e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital's centralized data landscape fosters better cross-departmental collaboration and data-driven decision-making. Data governance protocols facilitate seamless integration, minimizing data silos."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-coins"})}),e.jsx("h3",{children:"Costs & Infrastructure"}),e.jsx("p",{className:"text-muted mb-0",children:"By adopting cloud-based solutions, Hrify Digital optimizes costs and gains scalable data analytics resources. Utilizing open-source tools strategically maximizes our return on investment."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-balance-scale"})}),e.jsx("h3",{children:"Data Governance & Compliance"}),e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital's centralized data landscape fosters better cross-departmental collaboration and data-driven decision-making. Data governance protocols facilitate seamless integration, minimizing data silos."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-clock"})}),e.jsx("h3",{children:"Time Constraints"}),e.jsx("p",{className:"text-muted mb-0",children:"Our team prioritizes analytics projects based on impact and efficiently manages resources. Automating data processing tasks allows us to focus on strategic analysis."})]})})]})]})}),e.jsx("section",{className:"py-5 section-bg",children:e.jsxs("div",{className:"container py-5",children:[e.jsx("div",{className:"row justify-content-center mb-5",children:e.jsxs("div",{className:"col-lg-8 text-center",children:[e.jsx("h2",{className:"display-5 fw-bold section-title mb-4",children:"Data & Analytics Case Studies"}),e.jsx("p",{className:"lead text-muted",children:"Discover how our Analytics solutions have transformed businesses through data-driven insights."})]})}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"case-study-card",children:[e.jsxs("div",{className:"case-study-image",children:[e.jsx("span",{className:"case-study-tag",children:"E-Commerce"}),e.jsx("i",{className:"fas fa-shopping-cart",style:{fontSize:"3rem"}})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"h4 fw-bold mb-3",children:"Customer Behavior Analysis"}),e.jsx("p",{className:"text-muted mb-3",children:"Increased conversion rates by 37% for an online retailer through advanced customer journey analytics and personalized recommendations."}),e.jsx("a",{href:"#",className:"btn btn-primary btn-sm px-3 rounded-pill",children:"View Case Study"})]})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"case-study-card",children:[e.jsxs("div",{className:"case-study-image",children:[e.jsx("span",{className:"case-study-tag",children:"Healthcare"}),e.jsx("i",{className:"fas fa-heartbeat",style:{fontSize:"3rem"}})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"h4 fw-bold mb-3",children:"Operational Efficiency"}),e.jsx("p",{className:"text-muted mb-3",children:"Reduced patient wait times by 42% and optimized resource allocation for a hospital network using our advanced analytics platform."}),e.jsx("a",{href:"#",className:"btn btn-primary btn-sm px-3 rounded-pill",children:"View Case Study"})]})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"case-study-card",children:[e.jsxs("div",{className:"case-study-image",children:[e.jsx("span",{className:"case-study-tag",children:"Financial Services"}),e.jsx("i",{className:"fas fa-chart-line",style:{fontSize:"3rem"}})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"h4 fw-bold mb-3",children:"Risk Management"}),e.jsx("p",{className:"text-muted mb-3",children:"Improved fraud detection accuracy by 68% and reduced false positives by 45% for a major financial institution using our predictive analytics."}),e.jsx("a",{href:"#",className:"btn btn-primary btn-sm px-3 rounded-pill",children:"View Case Study"})]})]})})]})]})}),e.jsxs("section",{id:"contact",className:"contact-section",children:[e.jsx("div",{className:"floating-shape shape-1"}),e.jsx("div",{className:"floating-shape shape-2"}),e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"row justify-content-center mb-5",children:e.jsxs("div",{className:"col-lg-8 text-center",children:[e.jsx("h2",{className:"display-5 fw-bold mb-3",children:"Transform Your Data Into Strategic Advantage"}),e.jsx("p",{className:"lead mb-0",children:"Our analytics experts are ready to help you uncover actionable insights that drive business growth."})]})}),e.jsx("div",{className:"row justify-content-center",children:e.jsx("div",{className:"col-lg-8",children:e.jsx("div",{className:"contact-form",children:e.jsx("form",{children:e.jsxs("div",{className:"row g-4",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{htmlFor:"name",className:"form-label fw-semibold text-dark",children:"Your Name"}),e.jsx("input",{type:"text",className:"form-control",id:"name",placeholder:"John Smith"})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{htmlFor:"email",className:"form-label fw-semibold text-dark",children:"Business Email"}),e.jsx("input",{type:"email",className:"form-control",id:"email",placeholder:"john@company.com"})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{htmlFor:"company",className:"form-label fw-semibold text-dark",children:"Company Name"}),e.jsx("input",{type:"text",className:"form-control",id:"company",placeholder:"Your Company, Inc."})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{htmlFor:"industry",className:"form-label fw-semibold text-dark",children:"Industry"}),e.jsxs("select",{className:"form-select",id:"industry",children:[e.jsx("option",{selected:!0,children:"Select your industry"}),e.jsx("option",{value:"finance",children:"Finance & Banking"}),e.jsx("option",{value:"healthcare",children:"Healthcare"}),e.jsx("option",{value:"retail",children:"Retail & E-commerce"}),e.jsx("option",{value:"manufacturing",children:"Manufacturing"}),e.jsx("option",{value:"technology",children:"Technology"}),e.jsx("option",{value:"other",children:"Other"})]})]}),e.jsxs("div",{className:"col-12",children:[e.jsx("label",{htmlFor:"message",className:"form-label fw-semibold text-dark",children:"Tell Us About Your Analytics Needs"}),e.jsx("textarea",{className:"form-control",id:"message",rows:4,placeholder:"Describe your current analytics challenges and goals..."})]}),e.jsx("div",{className:"col-12 text-center",children:e.jsx("button",{type:"submit",className:"btn btn-primary px-5 py-3 rounded-pill mt-3",children:"Schedule a Meeting"})})]})})})})})]})]})]})]}),wj=d("/assets/images/newBanner/Evaluation.webp"),Nj=()=>e.jsxs("main",{children:[e.jsx("div",{className:"slider",children:e.jsx("div",{className:"slides",children:e.jsx("div",{className:"slide",children:e.jsx("img",{src:wj,alt:"Reports Banner"})})})}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
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
          `}),e.jsxs("section",{className:"hero-section",children:[e.jsx("div",{className:"floating-shape shape-1"}),e.jsx("div",{className:"floating-shape shape-2"}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsxs("div",{className:"col-lg-6 mb-5 mb-lg-0 hero-content",children:[e.jsx("div",{className:"d-flex align-items-center mb-3",children:e.jsx("div",{className:"me-2 bg-white text-primary px-3 py-1 rounded-pill",style:{fontSize:"0.8rem",fontWeight:"600"},children:"Home » Data Analytics » Reporting"})}),e.jsx("h1",{className:"display-4 fw-bold mb-4",children:"Streamline Reporting & Gain Strategic Advantage"}),e.jsx("p",{className:"lead mb-5",children:"Simplify complex data workflows and unlock strategic insights with our intelligent Reporting solutions."}),e.jsxs("div",{className:"row mb-4",children:[e.jsx("div",{className:"col-md-4",children:e.jsx("div",{className:"benefit-card",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"fas fa-robot me-3",style:{fontSize:"1.5rem"}}),e.jsx("h5",{className:"fw-semibold mb-0",children:"Automated Efficiency"})]})})}),e.jsx("div",{className:"col-md-4",children:e.jsx("div",{className:"benefit-card",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"fas fa-sliders-h me-3",style:{fontSize:"1.5rem"}}),e.jsx("h5",{className:"fw-semibold mb-0",children:"Customizable Insights"})]})})}),e.jsx("div",{className:"col-md-4",children:e.jsx("div",{className:"benefit-card",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"fas fa-bolt me-3",style:{fontSize:"1.5rem"}}),e.jsx("h5",{className:"fw-semibold mb-0",children:"Real-Time Advantage"})]})})})]}),e.jsx("a",{href:"#contact",className:"btn btn-outline btn-lg px-4 rounded-pill",children:"Schedule a Consultation"})]}),e.jsx("div",{className:"col-lg-6 hero-image",children:e.jsx("img",{src:"https://placehold.co/600x400",alt:"Reporting Solutions Visualization",className:"img-fluid rounded-4 shadow"})})]})})]}),e.jsx("section",{className:"py-5 section-bg",children:e.jsxs("div",{className:"container py-5",children:[e.jsx("div",{className:"row justify-content-center mb-5",children:e.jsxs("div",{className:"col-lg-8 text-center",children:[e.jsx("h2",{className:"display-5 fw-bold section-title mb-4",children:"Data & Analytics"}),e.jsx("p",{className:"lead text-muted",children:"Gain valuable insights for performance monitoring, business intelligence, risk management, forecasting, and informed decision-making with Hrify Digital's Report solutions."})]})}),e.jsx("div",{className:"service-box mb-5",children:e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital's approach in reports with Data & Analytics is very valuable, enabling your business to analyze data, gain insights, and make informed decisions. In our structured format, reports can further help your business monitor performance, gain business intelligence, manage risks, and forecast future trends and outcomes, ultimately helping them to achieve better business outcomes."})}),e.jsx("div",{className:"text-center",children:e.jsx("a",{href:"#contact",className:"btn btn-primary btn-lg px-5 rounded-pill",children:"Schedule a Consultation"})})]})}),e.jsx("section",{className:"py-5",children:e.jsxs("div",{className:"container py-5",children:[e.jsx("div",{className:"row justify-content-center mb-5",children:e.jsxs("div",{className:"col-lg-8 text-center",children:[e.jsx("h2",{className:"display-5 fw-bold section-title mb-4",children:"Support Features"}),e.jsx("p",{className:"lead text-muted",children:"Our comprehensive reporting capabilities to help you transform raw data into actionable business intelligence."})]})}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-tachometer-alt"})}),e.jsx("h3",{children:"Performance & Latency"}),e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital's experienced database optimization team continuously fine-tunes queries and indexing, ensuring efficient data retrieval for faster report generation."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-desktop"})}),e.jsx("h3",{children:"User Interface & Experience"}),e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital's customizable report templates and interactive visualizations allow clients to tailor reports according to their preferences easily."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-plug"})}),e.jsx("h3",{children:"Integration with Existing Systems"}),e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital offers seamless integration with various data warehouses and analytics tools, supported by their extensive library of data connectors and APIs."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-edit"})}),e.jsx("h3",{children:"Report Customization"}),e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital's report is designed with flexibility in mind, allowing clients to create custom reports using the company's intuitive report builder."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-dollar-sign"})}),e.jsx("h3",{children:"Costs & Licensing"}),e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital offers transparent pricing models, tailoring solutions to each client's unique needs, ensuring a cost-effective service without compromising quality."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-rocket"})}),e.jsx("h3",{children:"Report Performance Optimization"}),e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital implements data optimization strategies, such as materialized views and query optimization, to enhance report performance and reduce processing times for their clients."})]})})]})]})}),e.jsx("section",{className:"py-5 section-bg",children:e.jsxs("div",{className:"container py-5",children:[e.jsx("div",{className:"row justify-content-center mb-5",children:e.jsxs("div",{className:"col-lg-8 text-center",children:[e.jsx("h2",{className:"display-5 fw-bold section-title mb-4",children:"Data & Analytics Case Studies"}),e.jsx("p",{className:"lead text-muted",children:"Discover how our Reporting solutions have transformed businesses through streamlined data insights."})]})}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"case-study-card",children:[e.jsxs("div",{className:"case-study-image",children:[e.jsx("span",{className:"case-study-tag",children:"Retail"}),e.jsx("i",{className:"fas fa-chart-pie",style:{fontSize:"3rem"}})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"h4 fw-bold mb-3",children:"Sales Performance Dashboard"}),e.jsx("p",{className:"text-muted mb-3",children:"Reduced reporting time by 85% and increased sales team productivity by 32% through automated daily performance dashboards for a national retail chain."}),e.jsx("a",{href:"#",className:"btn btn-primary btn-sm px-3 rounded-pill",children:"View Case Study"})]})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"case-study-card",children:[e.jsxs("div",{className:"case-study-image",children:[e.jsx("span",{className:"case-study-tag",children:"Manufacturing"}),e.jsx("i",{className:"fas fa-industry",style:{fontSize:"3rem"}})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"h4 fw-bold mb-3",children:"Supply Chain Visibility"}),e.jsx("p",{className:"text-muted mb-3",children:"Improved inventory management by 47% and reduced stockouts by 62% with real-time supply chain reporting for a global manufacturing company."}),e.jsx("a",{href:"#",className:"btn btn-primary btn-sm px-3 rounded-pill",children:"View Case Study"})]})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"case-study-card",children:[e.jsxs("div",{className:"case-study-image",children:[e.jsx("span",{className:"case-study-tag",children:"Healthcare"}),e.jsx("i",{className:"fas fa-heartbeat",style:{fontSize:"3rem"}})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"h4 fw-bold mb-3",children:"Patient Care Analytics"}),e.jsx("p",{className:"text-muted mb-3",children:"Enabled data-driven decision making that improved patient outcomes by 28% and reduced administrative reporting time by 75% for a regional hospital network."}),e.jsx("a",{href:"#",className:"btn btn-primary btn-sm px-3 rounded-pill",children:"View Case Study"})]})]})})]})]})})]})]}),kj=d("assets/images/newBanner/data.an7.webp");d("assets/images/Banner/newbanimg/bigdata.webp");const Sj=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:kj,alt:"Big Data & Data Lake Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
          `}),e.jsxs("section",{className:"hero-section",children:[e.jsx("div",{className:"floating-shape shape-1"}),e.jsx("div",{className:"floating-shape shape-2"}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsxs("div",{className:"col-lg-6 mb-5 mb-lg-0 hero-content",children:[e.jsx("div",{className:"d-flex align-items-center mb-3",children:e.jsx("div",{className:"me-2 bg-white text-primary px-3 py-1 rounded-pill",style:{fontSize:"0.8rem",fontWeight:"600"},children:"Home » Data Analytics » Big Data & Data Lake"})}),e.jsx("h1",{className:"display-4 fw-bold mb-4",children:"Unlock Valuable Insights From Big Data & Data Lake"}),e.jsx("p",{className:"lead mb-5",children:"Consolidate all your Data Assets-Structured, Semi-Structured, and Unstructured—to gain a holistic view of your business and make confident data-driven decisions."}),e.jsxs("div",{className:"row mb-4",children:[e.jsx("div",{className:"col-md-4",children:e.jsx("div",{className:"benefit-card",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"fas fa-database me-3",style:{fontSize:"1.5rem"}}),e.jsx("h5",{className:"fw-semibold mb-0",children:"Unified Data Management"})]})})}),e.jsx("div",{className:"col-md-4",children:e.jsx("div",{className:"benefit-card",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"fas fa-chart-line me-3",style:{fontSize:"1.5rem"}}),e.jsx("h5",{className:"fw-semibold mb-0",children:"Actionable Insights at Scale"})]})})}),e.jsx("div",{className:"col-md-4",children:e.jsx("div",{className:"benefit-card",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"fas fa-brain me-3",style:{fontSize:"1.5rem"}}),e.jsx("h5",{className:"fw-semibold mb-0",children:"Advanced Analytics Capabilities"})]})})})]}),e.jsx("a",{href:"#contact",className:"btn btn-outline btn-lg px-4 rounded-pill",children:"Talk to Our Experts"})]}),e.jsx("div",{className:"col-lg-6 hero-image",children:e.jsx("img",{src:"https://via.placeholder.com/600x500",alt:"Big Data & Data Lake Visualization",className:"img-fluid rounded-4 shadow"})})]})})]}),e.jsx("section",{className:"py-5 section-bg",children:e.jsxs("div",{className:"container py-5",children:[e.jsx("div",{className:"row justify-content-center mb-5",children:e.jsxs("div",{className:"col-lg-8 text-center",children:[e.jsx("h2",{className:"display-5 fw-bold section-title mb-4",children:"Data & Analytics"}),e.jsx("p",{className:"lead text-muted",children:"Excel in managing diverse information by leveraging Hrify Digital's Big Data and Data Lake services, unlocking valuable insights and empowering informed decision-making."})]})}),e.jsx("div",{className:"service-box mb-5",children:e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital's comprehensive Big Data services allow businesses to optimize their operations by effectively integrating, managing, and analyzing their data. Our cutting-edge Data Lake solution empowers organizations to scale their data infrastructure and facilitates more informed decision-making processes, leading to superior outcomes and increased success."})}),e.jsx("div",{className:"text-center",children:e.jsx("a",{href:"#contact",className:"btn btn-primary btn-lg px-5 rounded-pill",children:"Talk to Our Experts"})})]})}),e.jsx("section",{className:"py-5",children:e.jsxs("div",{className:"container py-5",children:[e.jsx("div",{className:"row justify-content-center mb-5",children:e.jsxs("div",{className:"col-lg-8 text-center",children:[e.jsx("h2",{className:"display-5 fw-bold section-title mb-4",children:"Support Features"}),e.jsx("p",{className:"lead text-muted",children:"Our comprehensive Big Data & Data Lake capabilities to help you harness the full potential of your data assets."})]})}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-check-circle"})}),e.jsx("h3",{children:"Data Quality Framework"}),e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital has established robust data quality standards and implemented data validation processes. Our team regularly monitors data quality metrics and has automated data cleansing routines to ensure high-quality data."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-shield-alt"})}),e.jsx("h3",{children:"Advanced-Data Security Measures"}),e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital employs cutting-edge encryption techniques and access controls to safeguard sensitive data from unauthorized access. We also perform regular security audits to identify and address potential vulnerabilities."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-user-lock"})}),e.jsx("h3",{children:"Centralized Access Control"}),e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital has implemented a centralized access control system based on role-based access control (RBAC), ensuring that data access is governed based on user roles and responsibilities."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-tags"})}),e.jsx("h3",{children:"Robust Metadata Management"}),e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital has implemented advanced metadata management tools that provide comprehensive data cataloging and documentation, enabling users to quickly discover and understand the data stored in their Data Lake."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-bolt"})}),e.jsx("h3",{children:"Real-time Data Ingestion"}),e.jsx("p",{className:"text-muted mb-0",children:"We at Hrify Digital utilize real-time data ingestion solutions that enable them to process streaming data efficiently, reducing data latency and supporting critical applications."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-layer-group"})}),e.jsx("h3",{children:"Optimized Data Lake Architecture"}),e.jsx("p",{className:"text-muted mb-0",children:"Our expert team has designed our Data Lake architecture using best practices, such as data partitioning, compression, and indexing, to optimize data storage, processing, and retrieval."})]})})]})]})}),e.jsx("section",{className:"py-5 section-bg",children:e.jsxs("div",{className:"container py-5",children:[e.jsx("div",{className:"row justify-content-center mb-5",children:e.jsxs("div",{className:"col-lg-8 text-center",children:[e.jsx("h2",{className:"display-5 fw-bold section-title mb-4",children:"Data & Analytics Case Studies"}),e.jsx("p",{className:"lead text-muted",children:"Discover how our Big Data & Data Lake solutions have transformed businesses through advanced data management and analytics."})]})}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"case-study-card",children:[e.jsxs("div",{className:"case-study-image",children:[e.jsx("span",{className:"case-study-tag",children:"Financial Services"}),e.jsx("i",{className:"fas fa-university",style:{fontSize:"3rem"}})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"h4 fw-bold mb-3",children:"Customer 360° View"}),e.jsx("p",{className:"text-muted mb-3",children:"Increased cross-selling opportunities by 42% and improved customer retention by 28% through a unified customer data platform for a major financial institution."}),e.jsx("a",{href:"#",className:"btn btn-primary btn-sm px-3 rounded-pill",children:"View Case Study"})]})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"case-study-card",children:[e.jsxs("div",{className:"case-study-image",children:[e.jsx("span",{className:"case-study-tag",children:"E-Commerce"}),e.jsx("i",{className:"fas fa-shopping-cart",style:{fontSize:"3rem"}})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"h4 fw-bold mb-3",children:"Real-time Personalization"}),e.jsx("p",{className:"text-muted mb-3",children:"Boosted conversion rates by 65% and average order value by 31% with real-time personalization powered by our scalable Data Lake solution for an online retailer."}),e.jsx("a",{href:"#",className:"btn btn-primary btn-sm px-3 rounded-pill",children:"View Case Study"})]})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"case-study-card",children:[e.jsxs("div",{className:"case-study-image",children:[e.jsx("span",{className:"case-study-tag",children:"Manufacturing"}),e.jsx("i",{className:"fas fa-industry",style:{fontSize:"3rem"}})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"h4 fw-bold mb-3",children:"Predictive Maintenance"}),e.jsx("p",{className:"text-muted mb-3",children:"Reduced equipment downtime by 73% and maintenance costs by 45% through IoT data analysis and predictive maintenance models for a global manufacturing company."}),e.jsx("a",{href:"#",className:"btn btn-primary btn-sm px-3 rounded-pill",children:"View Case Study"})]})]})})]})]})})]})]}),Bj=d("assets/images/newBanner/data.an8.webp");d("assets/images/Banner/newbanimg/Data-Fabric.webp");const Dj=()=>e.jsxs("main",{children:[e.jsx("div",{className:"banner-full-image",children:e.jsx("img",{src:Bj,alt:"Data Fabric Banner",className:"banner-img"})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
          `}),e.jsxs("section",{className:"hero-section",children:[e.jsx("div",{className:"floating-shape shape-1"}),e.jsx("div",{className:"floating-shape shape-2"}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsxs("div",{className:"col-lg-6 mb-5 mb-lg-0 hero-content",children:[e.jsx("div",{className:"d-flex align-items-center mb-3",children:e.jsx("div",{className:"me-2 bg-white text-primary px-3 py-1 rounded-pill",style:{fontSize:"0.8rem",fontWeight:"600"},children:"Home » Data Analytics » Data Fabric"})}),e.jsx("h1",{className:"display-4 fw-bold mb-4",children:"Connect Data & Synchronize With Data Fabric"}),e.jsx("p",{className:"lead mb-5",children:"Data is challenging. It always has been. With our data fabric solutions, enable your company to make more informed decisions and stay one step ahead of the competition."}),e.jsxs("div",{className:"row mb-4",children:[e.jsx("div",{className:"col-md-4",children:e.jsx("div",{className:"benefit-card",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"fas fa-network-wired me-3",style:{fontSize:"1.5rem"}}),e.jsx("h5",{className:"fw-semibold mb-0",children:"Data Fabric Architecture"})]})})}),e.jsx("div",{className:"col-md-4",children:e.jsx("div",{className:"benefit-card",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"fas fa-expand-arrows-alt me-3",style:{fontSize:"1.5rem"}}),e.jsx("h5",{className:"fw-semibold mb-0",children:"Data Scalable Solutions"})]})})}),e.jsx("div",{className:"col-md-4",children:e.jsx("div",{className:"benefit-card",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("i",{className:"fas fa-project-diagram me-3",style:{fontSize:"1.5rem"}}),e.jsx("h5",{className:"fw-semibold mb-0",children:"Enterprise Data Integration"})]})})})]}),e.jsx("a",{href:"#contact",className:"btn btn-outline btn-lg px-4 rounded-pill",children:"Book a Meeting"})]}),e.jsx("div",{className:"col-lg-6 hero-image",children:e.jsx("img",{src:"https://via.placeholder.com/600x500",alt:"Data Fabric Visualization",className:"img-fluid rounded-4 shadow"})})]})})]}),e.jsx("section",{className:"py-5 section-bg",children:e.jsxs("div",{className:"container py-5",children:[e.jsx("div",{className:"row justify-content-center mb-5",children:e.jsxs("div",{className:"col-lg-8 text-center",children:[e.jsx("h2",{className:"display-5 fw-bold section-title mb-4",children:"Data & Analytics"}),e.jsx("p",{className:"lead text-muted",children:"By integrating and synchronizing data from various sources in real-time, Hrify Digital ensures accuracy and security for your business with Data Fabric solutions."})]})}),e.jsx("div",{className:"service-box mb-5",children:e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital's data fabric solution is designed to provide your business with the best-in-class data integration to provide a unified view of data from various sources, allowing your business to integrate data from different systems and applications quickly. Our team ensures accuracy and real-time access while maintaining strong data security against unauthorized access or loss. Seamlessly integrate, access, and protect your data with our comprehensive solution."})}),e.jsx("div",{className:"text-center",children:e.jsx("a",{href:"#contact",className:"btn btn-primary btn-lg px-5 rounded-pill",children:"Book a Meeting"})})]})}),e.jsx("section",{className:"py-5",children:e.jsxs("div",{className:"container py-5",children:[e.jsx("div",{className:"row justify-content-center mb-5",children:e.jsxs("div",{className:"col-lg-8 text-center",children:[e.jsx("h2",{className:"display-5 fw-bold section-title mb-4",children:"Support Features"}),e.jsx("p",{className:"lead text-muted",children:"Our comprehensive Data Fabric capabilities to help you connect, integrate, and synchronize your enterprise data."})]})}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-link"})}),e.jsx("h3",{children:"Seamless Data Integration"}),e.jsx("p",{className:"text-muted mb-0",children:"We at Hrify Digital excel in connecting data sources seamlessly, empowering our clients with easy access to unified data."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-shield-alt"})}),e.jsx("h3",{children:"Top-tier Data Security"}),e.jsx("p",{className:"text-muted mb-0",children:"At Hrify Digital, Data Security is our top priority. We implement strong encryption, strict access controls, and regulatory compliance to ensure data safety."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-arrows-alt"})}),e.jsx("h3",{children:"Scalability on Demand"}),e.jsx("p",{className:"text-muted mb-0",children:"Our team at Hrify Digital offers cloud-based solutions that scale effortlessly to meet our clients' growing data demands."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-balance-scale"})}),e.jsx("h3",{children:"Empowering Data Governance"}),e.jsx("p",{className:"text-muted mb-0",children:"Hrify Digital empowers our clients with comprehensive data cataloging and lineage tracking, fostering better data governance practices."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-check-circle"})}),e.jsx("h3",{children:"Reliable Data Quality"}),e.jsx("p",{className:"text-muted mb-0",children:"At Hrify Digital, we are committed to delivering reliable data quality management, providing our clients with accurate and consistent data."})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card p-4",children:[e.jsx("div",{className:"feature-icon",children:e.jsx("i",{className:"fas fa-history"})}),e.jsx("h3",{children:"Legacy Systems Compatibility"}),e.jsx("p",{className:"text-muted mb-0",children:"Our team at Hrify Digital specializes in the seamless integration of legacy systems with modern data fabric technologies."})]})})]})]})}),e.jsx("section",{className:"py-5 section-bg",children:e.jsxs("div",{className:"container py-5",children:[e.jsx("div",{className:"row justify-content-center mb-5",children:e.jsxs("div",{className:"col-lg-8 text-center",children:[e.jsx("h2",{className:"display-5 fw-bold section-title mb-4",children:"Data & Analytics Case Studies"}),e.jsx("p",{className:"lead text-muted",children:"Discover how our Data Fabric solutions have transformed businesses through seamless data integration and synchronization."})]})}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"case-study-card",children:[e.jsxs("div",{className:"case-study-image",children:[e.jsx("span",{className:"case-study-tag",children:"Healthcare"}),e.jsx("i",{className:"fas fa-heartbeat",style:{fontSize:"3rem"}})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"h4 fw-bold mb-3",children:"Unified Patient Data"}),e.jsx("p",{className:"text-muted mb-3",children:"Reduced data access time by 85% and improved care coordination by 47% through a unified patient data platform for a major healthcare provider."}),e.jsx("a",{href:"#",className:"btn btn-primary btn-sm px-3 rounded-pill",children:"View Case Study"})]})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"case-study-card",children:[e.jsxs("div",{className:"case-study-image",children:[e.jsx("span",{className:"case-study-tag",children:"Financial Services"}),e.jsx("i",{className:"fas fa-university",style:{fontSize:"3rem"}})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"h4 fw-bold mb-3",children:"Real-time Risk Assessment"}),e.jsx("p",{className:"text-muted mb-3",children:"Enhanced fraud detection by 68% and reduced risk assessment time by 73% with our real-time data fabric solution for a global financial institution."}),e.jsx("a",{href:"#",className:"btn btn-primary btn-sm px-3 rounded-pill",children:"View Case Study"})]})]})}),e.jsx("div",{className:"col-md-6 col-lg-4",children:e.jsxs("div",{className:"case-study-card",children:[e.jsxs("div",{className:"case-study-image",children:[e.jsx("span",{className:"case-study-tag",children:"Retail"}),e.jsx("i",{className:"fas fa-shopping-cart",style:{fontSize:"3rem"}})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"h4 fw-bold mb-3",children:"Omnichannel Data Integration"}),e.jsx("p",{className:"text-muted mb-3",children:"Increased cross-channel sales by 52% and improved inventory accuracy by 38% through seamless omnichannel data integration for a national retail chain."}),e.jsx("a",{href:"#",className:"btn btn-primary btn-sm px-3 rounded-pill",children:"View Case Study"})]})]})})]})]})})]})]});d("assets/images/Banner/newbanimg/qa_con.webp");const Cj=d("assets/images/newBanner/Qua.Eng (2).webp"),zj=()=>e.jsxs("main",{children:[e.jsx("div",{className:"slider",children:e.jsx("div",{className:"slides",children:e.jsx("div",{className:"slide",children:e.jsx("img",{src:Cj,alt:"QA Consulting Strategy Banner"})})})}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
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
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Superior Product Quality With QA Consulting & Strategy"}),e.jsx("p",{className:"main-subtitle",children:"A tailored quality engineering strategy that aligns with your business goals, best practices, appropriate tools, and robust testing frameworks to ensure quality."}),e.jsxs("div",{className:"features-grid",style:{gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"},children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Assessment"}),e.jsx("p",{children:"Comprehensive evaluation of your current QA processes"})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Strategy"}),e.jsx("p",{children:"Tailored QA approach aligned with your business goals"})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Implementation"}),e.jsx("p",{children:"Seamless execution of QA strategies and frameworks"})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Quality Engineering"}),e.jsx("p",{children:"End-to-end quality assurance throughout development"})]})]}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Schedule a Consultation"})]}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Our Approach"}),e.jsx("p",{className:"main-subtitle",children:"Entrust your software development to Hrify Digital's QA Consulting & Strategy solutions, experts in shift left testing, test automation, and agile & DevOps methodologies to experience seamless, reliable, and setback-free software development."}),e.jsx("p",{className:"main-subtitle",children:"Hrify Digital's QA Consulting & Strategy solutions streamline early-stage software development by efficiently managing test data, non-functional validations, and test cycles. Hrify Digital minimizes deployment time and enhances overall software quality with a focus on optimal testing processes. Through automation, test data management, and result utilization, we at Hrify Digital ensure a smooth and effective software development journey, allowing you to save time and resources while achieving top-notch software quality."})]})}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Support Features"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"})})}),e.jsx("h4",{children:"Regulatory Compliance"}),e.jsx("p",{children:"Agile QA Implementation: Our team seamlessly integrates agile QA practices into the existing development workflow of our clients. We adopt a gradual approach, starting with smaller pilot projects and then expanding to larger engagements, minimizing resistance and disruption."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})})}),e.jsx("h4",{children:"Security Protocols"}),e.jsx("p",{children:"Customized QA Metrics: Hrify Digital collaborates closely with each client to define tailor-made QA objectives and metrics that align with their unique business goals. These metrics include defect density, test coverage, customer feedback, and response time."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("path",{d:"m9 11 3 3L22 4"})]})}),e.jsx("h4",{children:"Control Preferences"}),e.jsx("p",{children:"Optimal QA Tool Selection: Hrify Digital diligently evaluates and recommends QA testing tools that perfectly fit the technologies and systems used by our clients, enhancing the efficiency and effectiveness of testing."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M3 3v18h18"}),e.jsx("path",{d:"m19 9-5 5-4-4-3 3"})]})}),e.jsx("h4",{children:"Costs & Infrastructure"}),e.jsx("p",{children:"Client-Specific Cost-Benefit Analysis: Hrify Digital provides comprehensive client-specific cost-benefit analyses, showcasing the tangible value of our QA services. Our expert team highlights how investing in QA upfront leads to long-term benefits, such as reduced bug-fixing costs and increased customer loyalty."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),e.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),e.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]})}),e.jsx("h4",{children:"Empowering Data Governance"}),e.jsx("p",{children:"Advanced Automated Testing Frameworks: Hrify Digital develops and implements customized automated testing frameworks, streamlining the testing process and expediting time-to-market for their clients."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}),e.jsx("path",{d:"M12 9v4"}),e.jsx("path",{d:"M12 17h.01"})]})}),e.jsx("h4",{children:"Risk-based Testing Approach"}),e.jsx("p",{children:"We collaborate with clients to identify critical areas of our services, focusing QA efforts on high-priority items to ensure comprehensive testing where it matters most."})]})]})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Ready for Superior Product Quality?"}),e.jsx("p",{children:"Let us design a tailored QA strategy that ensures flawless software delivery."}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Schedule a Consultation"})]})})]})]});d("assets/images/Banner/newbanimg/testengineer.webp");const Mj=d("assets/images/newBanner/Qua.Eng (1).webp"),Ej=()=>e.jsxs("main",{children:[e.jsx("div",{className:"slider",children:e.jsx("div",{className:"slides",children:e.jsx("div",{className:"slide",children:e.jsx("img",{src:Mj,alt:"Agile Testing Banner"})})})}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
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
          `}),e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"main-title",children:"Continuous Integration & Issue Resolution With Agile Testing"}),e.jsx("p",{className:"main-subtitle",children:"A strong collaboration involving integration and testing, ensuring new changes do not negatively impact existing functionality of all operations."}),e.jsxs("div",{className:"features-grid",style:{gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"},children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Result Driven"}),e.jsx("p",{children:"Focused on delivering measurable outcomes and tangible results"})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Systematic"}),e.jsx("p",{children:"Organized approach to testing with clear methodologies"})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Scalable"}),e.jsx("p",{children:"Adaptable testing solutions that grow with your needs"})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("h4",{children:"Quality Engineering"}),e.jsx("p",{children:"End-to-end quality assurance throughout development"})]})]}),e.jsx("a",{href:"#contact",className:"cta-button",children:"Talk to Our Experts"})]}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Our Approach"}),e.jsx("p",{className:"main-subtitle",children:"With Hrify Digital's Agile Testing services, achieve continuous testing in software development by automated tests and a collaborative team, ensuring adaptability to changing requirements for effective results."}),e.jsx("p",{className:"main-subtitle",children:"Hrify Digital's Agile Testing services, seamlessly embedded with development, ensure swift feature verification, defect identification, and rapid fixes, minimizing bugs in production. With continuous integration and delivery, our expert team provides your business experience with faster, high-quality software delivery aligned with your goals for enhanced productivity. Hrify Digital's technology pods ensure close collaboration with your teams, shifting quality gates to the left and providing superior testing support at every step of the development process."})]})}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Support Features"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),e.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}),e.jsx("h4",{children:"Integrated Agile Teams"}),e.jsx("p",{children:"Our cross-functional Agile teams at Hrify Digital work collaboratively, ensuring seamless communication and integration between team members."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})})}),e.jsx("h4",{children:"Contextual Understanding"}),e.jsx("p",{children:"We at Hrify Digital use test impact analysis tools to identify critical areas affected by changes and prioritize testing efforts accordingly."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 2v4"}),e.jsx("path",{d:"M12 18v4"}),e.jsx("path",{d:"m4.93 4.93 2.83 2.83"}),e.jsx("path",{d:"m16.24 16.24 2.83 2.83"}),e.jsx("path",{d:"M2 12h4"}),e.jsx("path",{d:"M18 12h4"}),e.jsx("path",{d:"m4.93 19.07 2.83-2.83"}),e.jsx("path",{d:"m16.24 7.76 2.83-2.83"})]})}),e.jsx("h4",{children:"Real-world Variability"}),e.jsx("p",{children:"We promote a culture of teamwork and resource pooling at Hrify Digital, facilitating support among testers during peak workloads."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),e.jsx("path",{d:"M14 2v6h6"}),e.jsx("path",{d:"M16 13H8"}),e.jsx("path",{d:"M16 17H8"}),e.jsx("path",{d:"M10 9H8"})]})}),e.jsx("h4",{children:"Report Customization"}),e.jsx("p",{children:"Hrify Digital uses an automated regression reporting system to swiftly detect and resolve regressions, ensuring smooth and stable software updates."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})}),e.jsx("h4",{children:"Security Concerns"}),e.jsx("p",{children:"Our Team at Hrify Digital prioritizes testing efforts based on critical features and functionalities, following a risk-based testing strategy."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M3 9h.01M21 9h.01M3 15h.01M21 15h.01M15 3v.01M15 21v.01M9 3v.01M9 21v.01M3.5 3.5l17 17"})})}),e.jsx("h4",{children:"Cloud-Based Device Labs"}),e.jsx("p",{children:"Hrify Digital utilizes cloud-based device labs to access diverse environments for testing, optimizing time and resources."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M21 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"})})}),e.jsx("h4",{children:"Seamless Model Deployment & Version Control"}),e.jsx("p",{children:"We at Hrify Digital have implemented dynamic data masking techniques to protect sensitive data in testing environments without compromising data integrity."})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"})})}),e.jsx("h4",{children:"Optimized Data Lake Architecture"}),e.jsx("p",{children:"At Hrify Digital, we employ an innovative Smart Data Generator tool to create realistic and relevant test data tailored to our clients' application requirements."})]})]})]})}),e.jsx("section",{className:"final-cta",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:"Ready for Continuous Integration & Issue Resolution?"}),e.jsx("p",{children:"Let us implement agile testing that ensures seamless, high-quality software delivery."}),e.jsx("a",{href:"#contact",className:"btn-white",children:"Talk to Our Experts"})]})})]})]}),Wj=d("/assets/images/newBanner/Qua.Eng.webp"),Ij=()=>e.jsxs("main",{children:[e.jsx("div",{className:"slider",children:e.jsx("div",{className:"slides",children:e.jsx("div",{className:"slide",children:e.jsx("img",{src:Wj,alt:"Independent Certification Banner"})})})}),e.jsx("script",{src:"https://kit.fontawesome.com/a076d05399.js",crossOrigin:"anonymous"}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}}),e.jsxs("main",{className:"flex-1",children:[e.jsx("section",{className:"py-12 md:py-24 bg-muted",children:e.jsx("div",{className:"container px-4 md:px-6 mx-auto",children:e.jsxs("div",{className:"grid gap-12 md:grid-cols-2 md:gap-16 items-center",children:[e.jsxs("div",{className:"space-y-6 text-left",children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl",children:"Get Unbiased Certification With Independent Certification"}),e.jsx("p",{className:"text-muted-foreground md:text-xl",children:"Verify compliance with industry standards, regulations, best practices, and other benchmarks, ensuring your system meets the highest standards."}),e.jsx("div",{className:"flex justify-center md:justify-start",children:e.jsxs("a",{href:"#contact",className:"btn btn-primary",children:["Schedule a Consultation",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"ml-2 h-4 w-4",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header",children:e.jsx("h3",{className:"card-title",children:"Objective Assessment"})}),e.jsx("div",{className:"card-content",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Unbiased evaluation of your systems and processes"})})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header",children:e.jsx("h3",{className:"card-title",children:"Compliance & Standards"})}),e.jsx("div",{className:"card-content",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Ensuring adherence to industry regulations and best practices"})})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header",children:e.jsx("h3",{className:"card-title",children:"Credibility & Trust"})}),e.jsx("div",{className:"card-content",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Building confidence with stakeholders and customers"})})]}),e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header",children:e.jsx("h3",{className:"card-title",children:"Quality Engineering"})}),e.jsx("div",{className:"card-content",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"End-to-end quality assurance throughout development"})})]})]})]})})}),e.jsx("section",{className:"py-12 md:py-24",children:e.jsx("div",{className:"container px-4 md:px-6 mx-auto",children:e.jsxs("div",{className:"mx-auto max-w-3xl text-center space-y-8",children:[e.jsx("h2",{className:"text-4xl font-bold tracking-tighter sm:text-5xl",children:"Our Approach"}),e.jsx("p",{className:"text-muted-foreground md:text-xl",children:"Hrify Digital's user-centric Independent Certification solutions excel with behavior-driven black box testing, effectively addressing context difficulty, time constraints, and test boundary ambiguity."}),e.jsx("p",{className:"text-muted-foreground text-lg leading-relaxed",children:"We at Hrify Digital offer cutting-edge, Independent Certification service with behavior-driven black box testing, ensuring feature completion and timely software deployment, regardless of mainframe or cloud-native platforms. Our user-centric approach, coupled with our in-depth understanding of the latest technologies and industry best practices, creates a compelling production environment that fosters business growth. Through thorough testing, we meet all requirements, unlocking your software's fullest potential for successful implementation, and empowering your development team to make informed decisions, leading to more robust and reliable software. Trust Hrify Digital for reliable, high-quality certification services that empower businesses to excel."})]})})}),e.jsx("section",{className:"py-12 md:py-24 bg-muted",children:e.jsxs("div",{className:"container px-4 md:px-6 mx-auto",children:[e.jsx("h2",{className:"text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12",children:"Support Features"}),e.jsxs("div",{className:"grid gap-8 md:grid-cols-2 lg:grid-cols-3",children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#1B8DBB",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-10 w-10 mb-4",children:[e.jsx("path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2z"}),e.jsx("path",{d:"M9 10h.01M12 10h.01M15 10h.01"})]}),e.jsx("h3",{className:"card-title",children:"Tailored Implementation"}),e.jsx("div",{className:"card-description",children:"Transparent Standards Development"})]}),e.jsx("div",{className:"card-content",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"We involve key stakeholders, including clients, experts, and industry representatives, in developing and reviewing our certification standards. This transparency ensures that the standards are widely accepted and meet the industry's evolving needs."})})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#1B8DBB",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-10 w-10 mb-4",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"})}),e.jsx("h3",{className:"card-title",children:"Regulatory Compliance"}),e.jsx("div",{className:"card-description",children:"Our Clear Conflict of Interest Policy"})]}),e.jsx("div",{className:"card-content",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"We have a strict policy that prohibits any conflicts of interest among our evaluators and clients and guarantees the independence and impartiality of the certification process."})})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#1B8DBB",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-10 w-10 mb-4",children:[e.jsx("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),e.jsx("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]}),e.jsx("h3",{className:"card-title",children:"Regulatory & Legal Compliance"}),e.jsx("div",{className:"card-description",children:"Legal Consultation"})]}),e.jsx("div",{className:"card-content",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Hrify Digital has legal experts on board who guide to ensure that the certification process complies with all relevant laws and regulations. We also address any liability concerns professionally."})})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#1B8DBB",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-10 w-10 mb-4",children:[e.jsx("path",{d:"M21 7v6h-6"}),e.jsx("path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"})]}),e.jsx("h3",{className:"card-title",children:"Versioning & Mutable Data Management"}),e.jsx("div",{className:"card-description",children:"Streamlined Processes"})]}),e.jsx("div",{className:"card-content",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Our expert team continuously reviews and optimizes our certification processes to ensure efficiency and minimize unnecessary steps, resulting in faster certification turnaround times."})})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#1B8DBB",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-10 w-10 mb-4",children:[e.jsx("path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}),e.jsx("path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}),e.jsx("path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}),e.jsx("path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}),e.jsx("path",{d:"M12 8v8"}),e.jsx("path",{d:"M8 12h8"})]}),e.jsx("h3",{className:"card-title",children:"Communication & Coordination"}),e.jsx("div",{className:"card-description",children:"Periodic Reviews"})]}),e.jsx("div",{className:"card-content",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"We at Hrify Digital regularly review and update our certification procedures to adapt to industry advancements and emerging challenges, maintaining the highest level of credibility."})})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#1B8DBB",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-10 w-10 mb-4",children:[e.jsx("rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}),e.jsx("path",{d:"M8 21h8"}),e.jsx("path",{d:"M12 17v4"})]}),e.jsx("h3",{className:"card-title",children:"Vendor Consolidation"}),e.jsx("div",{className:"card-description",children:"Technology Adoption"})]}),e.jsx("div",{className:"card-content",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Hrify Digital has embraced cutting-edge technology to improve data management, monitoring, and reporting capabilities. This ensures accuracy, transparency, and efficiency in the certification process."})})]})]})]})}),e.jsx("section",{className:"py-12 md:py-24",children:e.jsxs("div",{className:"container px-4 md:px-6 mx-auto text-center",children:[e.jsx("h2",{className:"text-4xl font-bold tracking-tighter sm:text-5xl mb-8",children:"Quality Engineering Case Studies"}),e.jsxs("a",{href:"#",className:"btn btn-primary mx-auto",children:["View Case Studies",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"ml-2 h-4 w-4",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})]})})]}),e.jsx("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"})]}),Aj=d("/assets/images/newBanner/ma.ser.webp"),Tj=d("assets/images/placeholder.webp"),Fj=d("assets/images/placeholder.webp"),Lj=d("assets/images/placeholder.webp"),Rj=d("assets/images/placeholder.webp"),Pj=()=>e.jsxs("main",{children:[e.jsx("div",{className:"slider",children:e.jsx("div",{className:"slides",children:e.jsx("div",{className:"slide",children:e.jsx("img",{src:Aj,alt:"Managed Testing Services Banner"})})})}),e.jsxs("div",{className:"container py-5",children:[e.jsx("style",{children:`
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
          `}),e.jsx("section",{className:"hero-section-bg py-5",style:{marginTop:"0",borderRadius:"16px"},children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsxs("div",{className:"col-12 col-lg-7 mb-4 mb-lg-0",children:[e.jsx("h1",{className:"main-title",children:"Managed Testing Services That Ensure Precise Software Execution"}),e.jsx("p",{className:"main-subtitle",children:"Alleviate testing complexities with confidence. Get comprehensive testing solutions and deliver high-quality results with software excellence."}),e.jsxs("a",{href:"#contact",className:"cta-button",children:["Book a Meeting",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginLeft:"8px",display:"inline-block",verticalAlign:"middle"},children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})]}),e.jsx("div",{className:"col-12 col-lg-5 d-flex justify-content-center justify-content-lg-end",children:e.jsxs("div",{className:"image-grid-container",children:[e.jsxs("div",{className:"grid-card",children:[e.jsx("img",{className:"grid-image",src:Tj,alt:"Performance Testing"}),e.jsxs("div",{className:"grid-card-content",children:[e.jsx("h3",{className:"grid-card-title",children:"Performance Testing"}),e.jsx("p",{className:"grid-card-description",children:"Comprehensive evaluation of system performance under various conditions"})]})]}),e.jsxs("div",{className:"grid-card",children:[e.jsx("img",{className:"grid-image",src:Fj,alt:"Continuous Integration"}),e.jsxs("div",{className:"grid-card-content",children:[e.jsx("h3",{className:"grid-card-title",children:"Continuous Integration"}),e.jsx("p",{className:"grid-card-description",children:"Seamless integration of testing into your development pipeline"})]})]}),e.jsxs("div",{className:"grid-card",children:[e.jsx("img",{className:"grid-image",src:Lj,alt:"Software Validation"}),e.jsxs("div",{className:"grid-card-content",children:[e.jsx("h3",{className:"grid-card-title",children:"Software Validation"}),e.jsx("p",{className:"grid-card-description",children:"Ensuring your software meets all requirements and specifications"})]})]}),e.jsxs("div",{className:"grid-card",children:[e.jsx("img",{className:"grid-image",src:Rj,alt:"Quality Engineering"}),e.jsxs("div",{className:"grid-card-content",children:[e.jsx("h3",{className:"grid-card-title",children:"Quality Engineering"}),e.jsx("p",{className:"grid-card-description",children:"End-to-end quality assurance throughout development"})]})]})]})})]})})}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Our Approach"}),e.jsx("p",{className:"main-subtitle ",style:{textAlign:"justify",alignItems:"center"},children:"Hrify Digital's Managed Testing Services deliver meticulous and specialized testing, ensuring precise software execution. We alleviate testing complexities and time-to-market pressures, empowering excellence in applications."}),e.jsx("p",{className:"main-subtitle ",style:{textAlign:"justify"},children:"Hrify Digital's Managed Testing Services offer a complete solution for testing and certifying business functionality, performance, and security. We use our in-house tools and our team's expertise to deliver high-quality output, measurable improvements, and effective defect identification in the production ecosystem. By maintaining proactive and transparent communication with our clients, Hrify Digital enhances businesses to focus on their core activities with confidence, knowing that their software is reliable and precise."})]})}),e.jsx("section",{className:"section",style:{backgroundColor:"#E8F4FA",borderRadius:"16px",padding:"4rem 2rem"},children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"section-title",children:"Support Features"}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-12 col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})})}),e.jsx("h4",{children:"Costs & Infrastructure"}),e.jsx("p",{className:"text-muted",children:"Cost Management"}),e.jsx("p",{children:"Our team consistently evaluates the cost-effectiveness of our Managed Testing Services through careful analysis of expenses and benefits to optimize our pricing models."})]})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),e.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})}),e.jsx("h4",{children:"Data Security & Privacy"}),e.jsx("p",{className:"text-muted",children:"Data Security & Confidentiality"}),e.jsx("p",{children:"Hrify Digital prioritizes data security and confidentiality. By implementing robust encryption protocols, secure data storage practices, and adherence to industry regulations, we instill confidence in clients regarding protecting their sensitive information."})]})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"}),e.jsx("path",{d:"M12 13v8"}),e.jsx("path",{d:"M5 13v6a2 2 0 0 0 2 2h8"})]})}),e.jsx("h4",{children:"Minimizing Business Outages"}),e.jsx("p",{className:"text-muted",children:"Reducing Dependency"}),e.jsx("p",{children:"We actively engage our clients' development teams during testing. By involving clients in planning sessions and discussions, we ensure seamless integration of our services with the development process."})]})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"}),e.jsx("path",{d:"m9 12 2 2 4-4"})]})}),e.jsx("h4",{children:"Parameter Optimization"}),e.jsx("p",{className:"text-muted",children:"Integration With Development"}),e.jsx("p",{children:"We position ourselves as a strategic partner in the development process. By collaborating closely with clients from the early stages, we align our testing efforts with development goals and timelines."})]})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 7v6h-6"}),e.jsx("path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"})]})}),e.jsx("h4",{children:"Continuous Improvement"}),e.jsx("p",{className:"text-muted",children:"Flexibility & Scalability"}),e.jsx("p",{children:"Hrify Digital offers flexible service packages to accommodate varying testing needs. The ability to scale resources ensures clients receive tailored testing solutions."})]})}),e.jsx("div",{className:"col-12 col-md-6 col-lg-4",children:e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"icon-wrapper",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}),e.jsx("path",{d:"M8 21h8"}),e.jsx("path",{d:"M12 17v4"})]})}),e.jsx("h4",{children:"Legacy Systems Compatibility"}),e.jsx("p",{className:"text-muted",children:"Monitoring & Accountability"}),e.jsx("p",{children:"We adhere to clear SLAs with our clients, defining key performance indicators (KPIs) and ensuring regular reporting and progress updates."})]})})]})]})}),e.jsx("section",{className:"section",children:e.jsx("div",{className:"container text-center",children:e.jsxs("div",{style:{background:"#1B8DBB",color:"white",padding:"4rem 2rem",borderRadius:"16px",boxShadow:"0 8px 30px rgba(27, 141, 187, 0.2)"},children:[e.jsx("h2",{className:"text-white mb-4",style:{fontSize:"2.5rem",fontWeight:"700"},children:"Quality Engineering Case Studies"}),e.jsx("p",{className:"mb-4",style:{fontSize:"1.2rem",maxWidth:"700px",margin:"0 auto 2rem",opacity:"0.95"},children:"Discover how we've helped businesses achieve excellence through our comprehensive testing solutions"}),e.jsxs("a",{href:"#",style:{background:"#1B8DBB",color:"white",padding:"1rem 2.5rem",borderRadius:"9999px",fontWeight:"600",fontSize:"1.1rem",textDecoration:"none",display:"inline-block",transition:"all 0.3s ease"},onMouseOver:t=>t.target.style.background="#15749A",onMouseOut:t=>t.target.style.background="#1B8DBB",children:["View Case Studies",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginLeft:"8px",display:"inline-block",verticalAlign:"middle"},children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"m12 5 7 7-7 7"})]})]})]})})})]}),e.jsx("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"})]}),Hj=d("assets/images/Products/sonachala-logo.png"),Oj=d("assets/images/Products/img2.png"),_j=d("assets/images/Products/img3.png"),Uj=d("assets/images/Products/img4.png"),$j=d("assets/images/Products/img5.png"),Vj=d("assets/images/Products/img6.png"),qj=d("assets/images/Products/img7.png"),Yj=d("assets/images/Products/img8.png"),Gj=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb-5",style:{background:"linear-gradient(135deg, #038A5F, #012419)",minHeight:"clamp(300px, 45vh, 450px)",padding:"2rem 0"},children:e.jsx("div",{className:"container h-100",children:e.jsxs("div",{className:"row h-100 align-items-center",children:[e.jsx("div",{className:"col-lg-6 col-md-12 d-flex justify-content-center align-items-center mb-4 mb-lg-0",children:e.jsx("img",{src:Hj,alt:"Hotel",style:{width:"100%",maxWidth:"350px",height:"auto",objectFit:"contain",borderRadius:"12px"}})}),e.jsx("div",{className:"col-lg-6 col-md-12 d-flex align-items-center",children:e.jsx("div",{className:"text-white text-center text-lg-start px-3 px-lg-0",children:e.jsx("h1",{style:{fontWeight:"600",fontSize:"clamp(1.5rem, 4vw, 2.5rem)",lineHeight:"1.2"},children:"Hotel Revenue Management Solutions"})})})]})})}),e.jsx("div",{style:{minHeight:"clamp(300px, 45vh, 450px)"},children:e.jsx("div",{className:"container h-100",children:e.jsxs("div",{className:"row h-100 align-items-start align-items-lg-center",children:[e.jsxs("div",{className:"col-lg-8 col-md-12 text-dark",children:[e.jsx("h3",{style:{fontWeight:"600",marginBottom:"12px",color:"#038A5F"},children:e.jsx("b",{children:"Revenue Management"})}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95},children:"Sonachala equips hotels with intelligent pricing strategies to maximize revenue while maintaining high occupancy rates. Our system analyzes market demand, seasonal trends, and competitor pricing in real time."}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95},children:"Whether it's peak season or a slow period, dynamic pricing ensures that your rooms are always competitively priced — attracting more guests without sacrificing profitability."}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95,marginBottom:0},children:"Our platform empowers hoteliers to adjust rates instantly, run promotions, and monitor performance from a single dashboard. Make every room night count with data-driven decision-making."})]}),e.jsx("div",{className:"col-lg-4 col-md-12 text-center",children:e.jsx("img",{src:Oj,alt:"Revenue Management",style:{width:"100%",height:"clamp(200px, 25vh, 300px)",objectFit:"contain",borderRadius:"12px"}})})]})})}),e.jsx("div",{className:"container-fluid p-4 mb-5",style:{color:"white",background:"linear-gradient(135deg, #038A5F, #012419)"},children:e.jsx("p",{children:"✅ Dynamic pricing based on demand and competition ✅ Automated seasonal and event-based rate adjustments ✅ Real-time performance tracking and insights ✅ Maximize occupancy without undercutting revenue"})}),e.jsx("div",{style:{},children:e.jsx("div",{className:"container h-100",children:e.jsxs("div",{className:"row h-100 align-items-start align-items-lg-center",children:[e.jsx("div",{className:"col-lg-4 col-md-12 text-center",children:e.jsx("img",{src:_j,alt:"Revenue Management",style:{width:"100%",height:"clamp(200px, 25vh, 300px)",objectFit:"contain",borderRadius:"12px"}})}),e.jsxs("div",{className:"col-lg-8 col-md-12 text-dark",children:[e.jsx("h3",{style:{fontWeight:"600",marginBottom:"12px",color:"#038A5F"},children:e.jsx("b",{children:"Booking Engine"})}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95},children:"Sonachala's next-generation booking engine helps hotels capture direct bookings with ease. From quick searches to instant reservations, every step is optimized for speed, convenience, and conversion."}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95},children:"Guests can view real-time room availability, compare options, and lock in their stay within seconds. Transparent pricing, secure payments, and instant confirmations ensure a frictionless booking experience."}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95},children:"Whether you run a boutique property or a chain of hotels, our booking engine integrates seamlessly into your website, allowing you to sell rooms 24/7 without relying solely on third-party platforms."})]})]})})}),e.jsx("div",{className:"container-fluid p-4 mt-5 mb-5",style:{color:"white",background:"linear-gradient(135deg, #038A5F, #012419)"},children:e.jsx("p",{children:"⚡ Lightning-fast search & booking in under a minute    📅 Live availability synced with hotel inventory 🔐 Secure, multi-option payments (UPI, Cards, Wallets)📩 Instant confirmation via email & SMS 📲 Fully responsive design for mobile & desktop users"})}),e.jsx("div",{style:{},children:e.jsx("div",{className:"container h-100",children:e.jsxs("div",{className:"row h-100 align-items-start align-items-lg-center",children:[e.jsxs("div",{className:"col-lg-8 col-md-12 text-dark",children:[e.jsx("h3",{style:{fontWeight:"600",marginBottom:"12px",color:"#038A5F"},children:e.jsx("b",{children:"Software"})}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95},children:"Sonachala's integrated Property Management System (PMS) and Channel Manager help hotels streamline operations, manage bookings, and boost revenue — all from a single platform."}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95},children:"Our PMS handles reservations, guest profiles, billing, and housekeeping tasks with ease, while the Channel Manager syncs your inventory across OTAs like Booking.com, Expedia, and Agoda in real time — eliminating overbookings and manual updates."}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95},children:"With automation, smart reporting, and a user-friendly dashboard, you can focus on delivering exceptional guest experiences while our software handles the heavy lifting."})]}),e.jsx("div",{className:"col-lg-4 col-md-12 text-center",children:e.jsx("img",{src:Uj,alt:"Revenue Management",style:{width:"100%",height:"clamp(200px, 25vh, 300px)",objectFit:"contain",borderRadius:"12px"}})})]})})}),e.jsx("div",{className:"container-fluid p-4 mt-5 mb-5",style:{color:"white",background:"linear-gradient(135deg, #038A5F, #012419)"},children:e.jsx("p",{children:"⚡ Centralized dashboard for all hotel operations 🔄 Real-time OTA sync to avoid double bookings 📊 Revenue reports, occupancy stats, and performance insights💳 Integrated billing & payment processing 📱 Mobile-friendly interface for on-the-go management"})}),e.jsx("div",{style:{},children:e.jsx("div",{className:"container h-100",children:e.jsxs("div",{className:"row h-100 align-items-start align-items-lg-center",children:[e.jsx("div",{className:"col-lg-4 col-md-12 text-center",children:e.jsx("img",{src:$j,alt:"Revenue Management",style:{width:"100%",height:"300px",objectFit:"contain",borderRadius:"12px"}})}),e.jsxs("div",{className:"col-lg-8 col-md-12 text-dark",children:[e.jsx("h3",{style:{fontWeight:"600",marginBottom:"12px",color:"#038A5F"},children:e.jsx("b",{children:"Tech Solutions"})}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95},children:"We provide businesses with cutting-edge technology services to help them grow, scale, and stay competitive in the digital era. From building powerful websites and mobile apps to creating impactful marketing campaigns, our solutions are designed for success."}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95},children:"Our expert team delivers secure, scalable, and high-performance systems — ensuring your business operates smoothly, reaches the right audience, and stays ahead in the market."})]})]})})}),e.jsx("div",{className:"container-fluid p-4 mt-5 mb-5",style:{color:"white",background:"linear-gradient(135deg, #038A5F, #012419)"},children:e.jsx("p",{children:"💻 Custom Website Design & Development 📱 Android & iOS Mobile App  evelopment 📣 Digital Marketing (SEO, Social Media, Paid Ads)🌐 Networking & IT Infrastructure Solutions 🛠️ Ongoing Maintenance & Technical Support 📊 Data Analytics & Performance Tracking"})}),e.jsx("div",{style:{},children:e.jsx("div",{className:"container h-100",children:e.jsxs("div",{className:"row h-100 align-items-start align-items-lg-center",children:[e.jsxs("div",{className:"col-lg-8 col-md-12 text-dark",children:[e.jsx("h3",{style:{fontWeight:"600",marginBottom:"12px",color:"#038A5F"},children:e.jsx("b",{children:"Hotel Facility Booking Engine"})}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95},children:"Our advanced booking engine goes beyond room reservations — it lets guests instantly book hotel facilities like conference halls, banquet spaces, spas, gyms, and other amenities with ease."}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95},children:"Designed for speed, transparency, and convenience, the system allows guests to view real-time availability, select services, and confirm their bookings in just a few clicks — whether on desktop or mobile."}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95},children:"For hoteliers, the platform centralizes facility management, prevents double bookings, and provides analytics to optimize usage and maximize revenue from every service offered."})]}),e.jsx("div",{className:"col-lg-4 col-md-12 text-center",children:e.jsx("img",{src:Vj,alt:"Revenue Management",style:{width:"100%",height:"300px",objectFit:"contain",borderRadius:"12px"}})})]})})}),e.jsx("div",{className:"container-fluid p-4",style:{color:"white",background:"linear-gradient(135deg, #038A5F, #012419)"},children:e.jsx("p",{children:"🏨 Real-time facility availability and instant booking 📅 Calendar-based scheduling for events and amenities 💳 Secure payment integration for add-on services 📊 Usage reports and revenue tracking for facilities 📲 Mobile-friendly interface for guests and staff"})}),e.jsx("div",{style:{height:"450px",marginBottom:"20px"},children:e.jsx("div",{className:"container h-100",children:e.jsxs("div",{className:"row h-100 align-items-start align-items-lg-center",children:[e.jsx("div",{className:"col-lg-4 col-md-12 text-center",children:e.jsx("img",{src:qj,alt:"Revenue Management",style:{width:"100%",height:"300px",objectFit:"contain",borderRadius:"12px"}})}),e.jsxs("div",{className:"col-lg-8 col-md-12 text-dark",children:[e.jsx("h3",{style:{fontWeight:"600",marginBottom:"12px",color:"#038A5F"},children:e.jsx("b",{children:"OTA Management"})}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95},children:"Sonachala provides a powerful OTA (Online Travel Agency) management system designed to help hotels and resorts efficiently manage listings, pricing, and availability across multiple online channels — all from one centralized platform.Our tools ensure real-time updates to room inventory, rates, and promotions, eliminating overbookings and manual updates. Whether you manage one property or a large chain, our OTA management system simplifies distribution while boosting bookings."})]})]})})}),e.jsx("div",{className:"container-fluid p-4",style:{color:"white",background:"linear-gradient(135deg, #038A5F, #012419)"},children:e.jsx("p",{children:"🔄 Centralized control for all OTA listings 📊 Real-time rate & availability synchronization 💹 Dynamic pricing tools to maximize revenue 🌍 Increased visibility across global booking platforms ✅ Automated booking updates to prevent overbooking"})}),e.jsx("div",{style:{height:"450px",marginBottom:"20px"},children:e.jsx("div",{className:"container h-100",children:e.jsxs("div",{className:"row h-100 align-items-start align-items-lg-center",children:[e.jsxs("div",{className:"col-lg-8 col-md-12 text-dark",children:[e.jsx("h3",{style:{fontWeight:"600",marginBottom:"12px",color:"#038A5F"},children:e.jsx("b",{children:"Online Travel Agent Management"})}),e.jsx("p",{style:{lineHeight:"1.7",opacity:.95},children:"Sonachala's OTA Management solution enables hotels, resorts, and homestays to efficiently manage their presence across multiple online travel agencies from a single, unified platform.Our system updates room rates, availability, and promotions in real-time, ensuring accuracy across all channels while preventing overbookings and missed opportunities. With detailed analytics, revenue optimization tools, and centralized communication, you can grow your bookings and maintain a consistent brand presence across global platforms."})]}),e.jsx("div",{className:"col-lg-4 col-md-12 text-center",children:e.jsx("img",{src:Yj,alt:"Revenue Management",style:{width:"100%",height:"300px",objectFit:"contain",borderRadius:"12px"}})})]})})}),e.jsx("div",{className:"container-fluid p-4",style:{color:"white",background:"linear-gradient(135deg, #038A5F, #012419)"},children:e.jsx("p",{children:"🌍 Multi-OTA connectivity from a single dashboard 🔄 Real-time inventory & pricing synchronization 📊 Channel performance reports & analytics 💹 Revenue optimization & promotional tools ✅ Automatic booking updates to prevent double bookings"})}),e.jsxs("div",{className:"text-center mt-5 mb-5 px-3",children:[e.jsx("h1",{style:{fontSize:"clamp(1.5rem, 5vw, 2.5rem)",marginBottom:"1rem"},children:e.jsx("b",{children:"Want to Explore More?"})}),e.jsx("p",{style:{textAlign:"center",fontSize:"clamp(0.9rem, 3vw, 1.1rem)",marginBottom:"2rem",maxWidth:"600px",margin:"0 auto 2rem"},children:"Visit our official website to browse properties, manage bookings, or become a partner"}),e.jsx("a",{href:"https://sonachala.com",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",padding:"clamp(10px, 3vw, 15px) clamp(20px, 5vw, 40px)",background:"linear-gradient(135deg, #038A5F, #012419)",color:"#ffffff",textDecoration:"none",borderRadius:"50px",fontWeight:"500",fontSize:"clamp(0.9rem, 3vw, 1.1rem)",boxShadow:"0 4px 10px rgba(0,0,0,0.15)",transition:"all 0.3s ease",minWidth:"200px"},onMouseEnter:t=>{const s=t.target;s.style.transform="translateY(-2px)",s.style.boxShadow="0 6px 14px rgba(0,0,0,0.25)"},onMouseLeave:t=>{const s=t.target;s.style.transform="translateY(0)",s.style.boxShadow="0 4px 10px rgba(0,0,0,0.15)"},children:"Go To Main Sonachala Site"})]}),e.jsx("style",{children:`
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
            `})]});function Qj(){return e.jsxs(fg,{children:[e.jsx(bg,{}),e.jsxs("div",{className:"App d-flex flex-column min-vh-100",children:[e.jsx(Ng,{}),e.jsx("main",{className:"flex-grow-1",children:e.jsxs(dg,{children:[e.jsx(D,{path:"/",element:e.jsx($g,{})}),e.jsx(D,{path:"/about",element:e.jsx(Yg,{})}),e.jsx(D,{path:"/contact",element:e.jsx(ex,{})}),e.jsx(D,{path:"/services",element:e.jsx(tx,{})}),e.jsx(D,{path:"/clients",element:e.jsx(sx,{})}),e.jsx(D,{path:"/careers",element:e.jsx(ix,{})}),e.jsx(D,{path:"/internship",element:e.jsx(rx,{})}),e.jsx(D,{path:"/referral-program",element:e.jsx(lx,{})}),e.jsx(D,{path:"/webdesign",element:e.jsx(ox,{})}),e.jsx(D,{path:"/webmaintenance",element:e.jsx(mx,{})}),e.jsx(D,{path:"/aws",element:e.jsx(px,{})}),e.jsx(D,{path:"/cybersecurity",element:e.jsx(fx,{})}),e.jsx(D,{path:"/businessweb",element:e.jsx(vx,{})}),e.jsx(D,{path:"/resweb",element:e.jsx(Nx,{})}),e.jsx(D,{path:"/cmsweb",element:e.jsx(Bx,{})}),e.jsx(D,{path:"/webapp",element:e.jsx(Mx,{})}),e.jsx(D,{path:"/customweb",element:e.jsx(Ix,{})}),e.jsx(D,{path:"/ecommerceweb",element:e.jsx(Fx,{})}),e.jsx(D,{path:"/matrimonyweb",element:e.jsx(Px,{})}),e.jsx(D,{path:"/mobileapp",element:e.jsx(_x,{})}),e.jsx(D,{path:"/domains",element:e.jsx(qx,{})}),e.jsx(D,{path:"/personalemail",element:e.jsx(Qx,{})}),e.jsx(D,{path:"/googlework",element:e.jsx(of,{})}),e.jsx(D,{path:"/emailcampaign",element:e.jsx(uf,{})}),e.jsx(D,{path:"/awsimpl",element:e.jsx(Df,{})}),e.jsx(D,{path:"/designbranding",element:e.jsx(Mf,{})}),e.jsx(D,{path:"/digitalmarketing",element:e.jsx(If,{})}),e.jsx(D,{path:"/marketting",element:e.jsx(Lf,{})}),e.jsx(D,{path:"/webaudit",element:e.jsx(Hf,{})}),e.jsx(D,{path:"/systemintegration",element:e.jsx(Kf,{})}),e.jsx(D,{path:"/infrastructure",element:e.jsx(d0,{})}),e.jsx(D,{path:"/serverstorage",element:e.jsx(B0,{})}),e.jsx(D,{path:"/networksecurity",element:e.jsx(_0,{})}),e.jsx(D,{path:"/structuredcabling",element:e.jsx(ny,{})}),e.jsx(D,{path:"/cloudnative",element:e.jsx(ry,{})}),e.jsx(D,{path:"/workplace",element:e.jsx(gy,{})}),e.jsx(D,{path:"/ciam",element:e.jsx(fy,{})}),e.jsx(D,{path:"/workforceidentity",element:e.jsx(jy,{})}),e.jsx(D,{path:"/securityengineering",element:e.jsx(by,{})}),e.jsx(D,{path:"/zerotrustarchitecture",element:e.jsx(Ny,{})}),e.jsx(D,{path:"/governanceriskmanagementcompliance",element:e.jsx(Cy,{})}),e.jsx(D,{path:"/cyberdefenseinvestigation",element:e.jsx(My,{})}),e.jsx(D,{path:"/cyberadvisory",element:e.jsx(Ty,{})}),e.jsx(D,{path:"/cyberresilience",element:e.jsx(Ly,{})}),e.jsx(D,{path:"/distributedtrust",element:e.jsx(Py,{})}),e.jsx(D,{path:"/ethereum",element:e.jsx(Oy,{})}),e.jsx(D,{path:"/hyperledger",element:e.jsx($y,{})}),e.jsx(D,{path:"/dapps",element:e.jsx(qy,{})}),e.jsx(D,{path:"/nft",element:e.jsx(Gy,{})}),e.jsx(D,{path:"/ipfs",element:e.jsx(Ky,{})}),e.jsx(D,{path:"/enterprise",element:e.jsx(Zy,{})}),e.jsx(D,{path:"/securitymanagement",element:e.jsx(ej,{})}),e.jsx(D,{path:"/sitereliability",element:e.jsx(sj,{})}),e.jsx(D,{path:"/monitoringmaintenance",element:e.jsx(ij,{})}),e.jsx(D,{path:"/helpdesk",element:e.jsx(aj,{})}),e.jsx(D,{path:"/vendormanagement",element:e.jsx(oj,{})}),e.jsx(D,{path:"/internetofthings",element:e.jsx(mj,{})}),e.jsx(D,{path:"/ai_nlp",element:e.jsx(hj,{})}),e.jsx(D,{path:"/computervision",element:e.jsx(gj,{})}),e.jsx(D,{path:"/ml_mlops",element:e.jsx(fj,{})}),e.jsx(D,{path:"/datascience",element:e.jsx(jj,{})}),e.jsx(D,{path:"/analytics",element:e.jsx(bj,{})}),e.jsx(D,{path:"/reports",element:e.jsx(Nj,{})}),e.jsx(D,{path:"/bigdata_datalake",element:e.jsx(Sj,{})}),e.jsx(D,{path:"/datafabric",element:e.jsx(Dj,{})}),e.jsx(D,{path:"/qa_consulting_strategy",element:e.jsx(zj,{})}),e.jsx(D,{path:"/agile_testing",element:e.jsx(Ej,{})}),e.jsx(D,{path:"/independent_certification",element:e.jsx(Ij,{})}),e.jsx(D,{path:"/managed_testing_services",element:e.jsx(Pj,{})}),e.jsx(D,{path:"/sonachala",element:e.jsx(Gj,{})})]})}),e.jsx(Hg,{})]})]})}const Om=document.getElementById("root");if(!Om)throw new Error("Failed to find the root element");const Kj=Pr.createRoot(Om);Kj.render(e.jsx(Ge.StrictMode,{children:e.jsx(Qj,{})}));
