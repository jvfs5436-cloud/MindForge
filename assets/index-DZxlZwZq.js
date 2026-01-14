(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();class Kd{constructor(){this.routes=new Map,this.currentUser=null,window.addEventListener("hashchange",()=>this.handleRoute())}register(e,t,r={}){this.routes.set(e,{handler:t,options:r})}setUser(e){this.currentUser=e,this.handleRoute()}navigate(e){window.location.hash=e}getCurrentPath(){return(window.location.hash.slice(1)||"/").split("?")[0]}getQueryParams(){const e=window.location.hash.slice(1),t=e.indexOf("?");return t===-1?new URLSearchParams:new URLSearchParams(e.slice(t))}async handleRoute(){const e=this.getCurrentPath(),t=this.routes.get(e);if(!t){this.navigate(this.currentUser?"/dashboard":"/login");return}const{handler:r,options:s}=t;if(s.requiresAuth&&!this.currentUser){this.navigate("/login");return}if(s.authOnly&&this.currentUser){this.navigate("/dashboard");return}const i=document.getElementById("app");i.innerHTML=await r(this),s.onRender&&s.onRender(this)}}const ce=new Kd,Qd=()=>{};var nc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Jd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],u=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Ou={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,u=a?n[s+1]:0,l=s+2<n.length,d=l?n[s+2]:0,p=i>>2,y=(i&3)<<4|u>>4;let v=(u&15)<<2|d>>6,P=d&63;l||(P=64,a||(v=64)),r.push(t[p],t[y],t[v],t[P])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Nu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Jd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],u=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const y=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||u==null||d==null||y==null)throw new Yd;const v=i<<2|u>>4;if(r.push(v),d!==64){const P=u<<4&240|d>>2;if(r.push(P),y!==64){const C=d<<6&192|y;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Yd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xd=function(n){const e=Nu(n);return Ou.encodeByteArray(e,!0)},is=function(n){return Xd(n).replace(/\./g,"")},Lu=function(n){try{return Ou.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef=()=>Zd().__FIREBASE_DEFAULTS__,tf=()=>{if(typeof process>"u"||typeof nc>"u")return;const n=nc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},nf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Lu(n[1]);return e&&JSON.parse(e)},ws=()=>{try{return Qd()||ef()||tf()||nf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Mu=n=>{var e,t;return(t=(e=ws())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},rf=n=>{const e=Mu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},xu=()=>{var n;return(n=ws())===null||n===void 0?void 0:n.config},Fu=n=>{var e;return(e=ws())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Uu(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[is(JSON.stringify(t)),is(JSON.stringify(a)),""].join(".")}const Gn={};function af(){const n={prod:[],emulator:[]};for(const e of Object.keys(Gn))Gn[e]?n.emulator.push(e):n.prod.push(e);return n}function cf(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let rc=!1;function Bu(n,e){if(typeof window>"u"||typeof document>"u"||!mn(window.location.host)||Gn[n]===e||Gn[n]||rc)return;Gn[n]=e;function t(v){return`__firebase__banner__${v}`}const r="__firebase__banner",i=af().prod.length>0;function a(){const v=document.getElementById(r);v&&v.remove()}function u(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function l(v,P){v.setAttribute("width","24"),v.setAttribute("id",P),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function d(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{rc=!0,a()},v}function p(v,P){v.setAttribute("id",P),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function y(){const v=cf(r),P=t("text"),C=document.getElementById(P)||document.createElement("span"),O=t("learnmore"),V=document.getElementById(O)||document.createElement("a"),W=t("preprendIcon"),B=document.getElementById(W)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const q=v.element;u(q),p(V,O);const Z=d();l(B,W),q.append(B,C,V,Z),document.body.appendChild(q)}i?(C.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function lf(){var n;const e=(n=ws())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function df(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ff(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pf(){const n=we();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function mf(){return!lf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gf(){try{return typeof indexedDB=="object"}catch{return!1}}function _f(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf="FirebaseError";class st extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=yf,Object.setPrototypeOf(this,st.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lr.prototype.create)}}class lr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?vf(i,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new st(s,u,r)}}function vf(n,e){return n.replace(Ef,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ef=/\{\$([^}]+)}/g;function Tf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ft(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(sc(i)&&sc(a)){if(!Ft(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function sc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function jn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function qn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function If(n,e){const t=new wf(n,e);return t.subscribe.bind(t)}class wf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Af(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=yi),s.error===void 0&&(s.error=yi),s.complete===void 0&&(s.complete=yi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Af(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function yi(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(n){return n&&n._delegate?n._delegate:n}class Ut{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new sf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sf(e))try{this.getOrInitializeService({instanceIdentifier:Lt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Lt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lt){return this.instances.has(e)}getOptions(e=Lt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);r===u&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bf(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Lt){return this.component?this.component.multipleInstances?e:Lt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bf(n){return n===Lt?void 0:n}function Sf(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Rf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const Cf={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},kf=$.INFO,Vf={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},Df=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Vf[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ao{constructor(e){this.name=e,this._logLevel=kf,this._logHandler=Df,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const Nf=(n,e)=>e.some(t=>n instanceof t);let ic,oc;function Of(){return ic||(ic=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lf(){return oc||(oc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ju=new WeakMap,Vi=new WeakMap,qu=new WeakMap,vi=new WeakMap,co=new WeakMap;function Mf(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(mt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ju.set(t,n)}).catch(()=>{}),co.set(e,n),e}function xf(n){if(Vi.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Vi.set(n,e)}let Di={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Vi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||qu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ff(n){Di=n(Di)}function Uf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ei(this),e,...t);return qu.set(r,e.sort?e.sort():[e]),mt(r)}:Lf().includes(n)?function(...e){return n.apply(Ei(this),e),mt(ju.get(this))}:function(...e){return mt(n.apply(Ei(this),e))}}function Bf(n){return typeof n=="function"?Uf(n):(n instanceof IDBTransaction&&xf(n),Nf(n,Of())?new Proxy(n,Di):n)}function mt(n){if(n instanceof IDBRequest)return Mf(n);if(vi.has(n))return vi.get(n);const e=Bf(n);return e!==n&&(vi.set(n,e),co.set(e,n)),e}const Ei=n=>co.get(n);function jf(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),u=mt(a);return r&&a.addEventListener("upgradeneeded",l=>{r(mt(a.result),l.oldVersion,l.newVersion,mt(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),u.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const qf=["get","getKey","getAll","getAllKeys","count"],$f=["put","add","delete","clear"],Ti=new Map;function ac(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ti.get(e))return Ti.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=$f.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||qf.includes(t)))return;const i=async function(a,...u){const l=this.transaction(a,s?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),s&&l.done]))[0]};return Ti.set(e,i),i}Ff(n=>({...n,get:(e,t,r)=>ac(e,t)||n.get(e,t,r),has:(e,t)=>!!ac(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Hf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Hf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ni="@firebase/app",cc="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=new ao("@firebase/app"),Wf="@firebase/app-compat",Gf="@firebase/analytics-compat",Kf="@firebase/analytics",Qf="@firebase/app-check-compat",Jf="@firebase/app-check",Yf="@firebase/auth",Xf="@firebase/auth-compat",Zf="@firebase/database",ep="@firebase/data-connect",tp="@firebase/database-compat",np="@firebase/functions",rp="@firebase/functions-compat",sp="@firebase/installations",ip="@firebase/installations-compat",op="@firebase/messaging",ap="@firebase/messaging-compat",cp="@firebase/performance",up="@firebase/performance-compat",lp="@firebase/remote-config",hp="@firebase/remote-config-compat",dp="@firebase/storage",fp="@firebase/storage-compat",pp="@firebase/firestore",mp="@firebase/ai",gp="@firebase/firestore-compat",_p="firebase",yp="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi="[DEFAULT]",vp={[Ni]:"fire-core",[Wf]:"fire-core-compat",[Kf]:"fire-analytics",[Gf]:"fire-analytics-compat",[Jf]:"fire-app-check",[Qf]:"fire-app-check-compat",[Yf]:"fire-auth",[Xf]:"fire-auth-compat",[Zf]:"fire-rtdb",[ep]:"fire-data-connect",[tp]:"fire-rtdb-compat",[np]:"fire-fn",[rp]:"fire-fn-compat",[sp]:"fire-iid",[ip]:"fire-iid-compat",[op]:"fire-fcm",[ap]:"fire-fcm-compat",[cp]:"fire-perf",[up]:"fire-perf-compat",[lp]:"fire-rc",[hp]:"fire-rc-compat",[dp]:"fire-gcs",[fp]:"fire-gcs-compat",[pp]:"fire-fst",[gp]:"fire-fst-compat",[mp]:"fire-vertex","fire-js":"fire-js",[_p]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=new Map,Ep=new Map,Li=new Map;function uc(n,e){try{n.container.addComponent(e)}catch(t){Ze.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function un(n){const e=n.name;if(Li.has(e))return Ze.debug(`There were multiple attempts to register component ${e}.`),!1;Li.set(e,n);for(const t of os.values())uc(t,n);for(const t of Ep.values())uc(t,n);return!0}function uo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ve(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gt=new lr("app","Firebase",Tp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=yp;function $u(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Oi,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw gt.create("bad-app-name",{appName:String(s)});if(t||(t=xu()),!t)throw gt.create("no-options");const i=os.get(s);if(i){if(Ft(t,i.options)&&Ft(r,i.config))return i;throw gt.create("duplicate-app",{appName:s})}const a=new Pf(s);for(const l of Li.values())a.addComponent(l);const u=new Ip(t,r,a);return os.set(s,u),u}function zu(n=Oi){const e=os.get(n);if(!e&&n===Oi&&xu())return $u();if(!e)throw gt.create("no-app",{appName:n});return e}function _t(n,e,t){var r;let s=(r=vp[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const u=[`Unable to register library "${s}" with version "${e}":`];i&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ze.warn(u.join(" "));return}un(new Ut(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="firebase-heartbeat-database",Ap=1,Zn="firebase-heartbeat-store";let Ii=null;function Hu(){return Ii||(Ii=jf(wp,Ap,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Zn)}catch(t){console.warn(t)}}}}).catch(n=>{throw gt.create("idb-open",{originalErrorMessage:n.message})})),Ii}async function Rp(n){try{const t=(await Hu()).transaction(Zn),r=await t.objectStore(Zn).get(Wu(n));return await t.done,r}catch(e){if(e instanceof st)Ze.warn(e.message);else{const t=gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ze.warn(t.message)}}}async function lc(n,e){try{const r=(await Hu()).transaction(Zn,"readwrite");await r.objectStore(Zn).put(e,Wu(n)),await r.done}catch(t){if(t instanceof st)Ze.warn(t.message);else{const r=gt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ze.warn(r.message)}}}function Wu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp=1024,Sp=30;class Pp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new kp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=hc();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Sp){const a=Vp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ze.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=hc(),{heartbeatsToSend:r,unsentEntries:s}=Cp(this._heartbeatsCache.heartbeats),i=is(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Ze.warn(t),""}}}function hc(){return new Date().toISOString().substring(0,10)}function Cp(n,e=bp){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),dc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),dc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class kp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gf()?_f().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Rp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return lc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return lc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function dc(n){return is(JSON.stringify({version:2,heartbeats:n})).length}function Vp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(n){un(new Ut("platform-logger",e=>new zf(e),"PRIVATE")),un(new Ut("heartbeat",e=>new Pp(e),"PRIVATE")),_t(Ni,cc,n),_t(Ni,cc,"esm2017"),_t("fire-js","")}Dp("");var Np="firebase",Op="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t(Np,Op,"app");function lo(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Gu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lp=Gu,Ku=new lr("auth","Firebase",Gu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=new ao("@firebase/auth");function Mp(n,...e){as.logLevel<=$.WARN&&as.warn(`Auth (${gn}): ${n}`,...e)}function Kr(n,...e){as.logLevel<=$.ERROR&&as.error(`Auth (${gn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(n,...e){throw ho(n,...e)}function Ue(n,...e){return ho(n,...e)}function Qu(n,e,t){const r=Object.assign(Object.assign({},Lp()),{[e]:t});return new lr("auth","Firebase",r).create(e,{appName:n.name})}function Ye(n){return Qu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ho(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ku.create(n,...e)}function M(n,e,...t){if(!n)throw ho(e,...t)}function Qe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Kr(e),new Error(e)}function et(n,e){n||Qe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function xp(){return fc()==="http:"||fc()==="https:"}function fc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xp()||df()||"connection"in navigator)?navigator.onLine:!0}function Up(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t){this.shortDelay=e,this.longDelay=t,et(t>e,"Short delay should be less than long delay!"),this.isMobile=uf()||ff()}get(){return Fp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(n,e){et(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],qp=new dr(3e4,6e4);function St(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Pt(n,e,t,r,s={}){return Yu(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const u=hr(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:l},i);return hf()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&mn(n.emulatorConfig.host)&&(d.credentials="include"),Ju.fetch()(await Xu(n,n.config.apiHost,t,u),d)})}async function Yu(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Bp),e);try{const s=new zp(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw qr(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const u=i.ok?a.errorMessage:a.error.message,[l,d]=u.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw qr(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw qr(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw qr(n,"user-disabled",a);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Qu(n,p,d);Me(n,p)}}catch(s){if(s instanceof st)throw s;Me(n,"network-request-failed",{message:String(s)})}}async function fr(n,e,t,r,s={}){const i=await Pt(n,e,t,r,s);return"mfaPendingCredential"in i&&Me(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Xu(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?fo(n.config,s):`${n.config.apiScheme}://${s}`;return jp.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function $p(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ue(this.auth,"network-request-failed")),qp.get())})}}function qr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ue(n,e,r);return s.customData._tokenResponse=t,s}function pc(n){return n!==void 0&&n.enterprise!==void 0}class Hp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return $p(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Wp(n,e){return Pt(n,"GET","/v2/recaptchaConfig",St(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gp(n,e){return Pt(n,"POST","/v1/accounts:delete",e)}async function cs(n,e){return Pt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Kp(n,e=!1){const t=he(n),r=await t.getIdToken(e),s=po(r);M(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Kn(wi(s.auth_time)),issuedAtTime:Kn(wi(s.iat)),expirationTime:Kn(wi(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function wi(n){return Number(n)*1e3}function po(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Kr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Lu(t);return s?JSON.parse(s):(Kr("Failed to decode base64 JWT payload"),null)}catch(s){return Kr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function mc(n){const e=po(n);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function er(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof st&&Qp(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Qp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Kn(this.lastLoginAt),this.creationTime=Kn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(n){var e;const t=n.auth,r=await n.getIdToken(),s=await er(n,cs(t,{idToken:r}));M(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Zu(i.providerUserInfo):[],u=Xp(n.providerData,a),l=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(u!=null&&u.length),p=l?d:!1,y={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:u,metadata:new xi(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(n,y)}async function Yp(n){const e=he(n);await us(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Xp(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Zu(n){return n.map(e=>{var{providerId:t}=e,r=lo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zp(n,e){const t=await Yu(n,{},async()=>{const r=hr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Xu(n,s,"/v1/token",`key=${i}`),u=await n._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:u,body:r};return n.emulatorConfig&&mn(n.emulatorConfig.host)&&(l.credentials="include"),Ju.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function em(n,e){return Pt(n,"POST","/v2/accounts:revokeToken",St(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){M(e.length!==0,"internal-error");const t=mc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Zp(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new rn;return r&&(M(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(M(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(M(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rn,this.toJSON())}_performRefresh(){return Qe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(n,e){M(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Oe{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=lo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new xi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await er(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Kp(this,e)}reload(){return Yp(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await us(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ve(this.auth.app))return Promise.reject(Ye(this.auth));const e=await this.getIdToken();return await er(this,Gp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,u,l,d,p;const y=(r=t.displayName)!==null&&r!==void 0?r:void 0,v=(s=t.email)!==null&&s!==void 0?s:void 0,P=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,C=(a=t.photoURL)!==null&&a!==void 0?a:void 0,O=(u=t.tenantId)!==null&&u!==void 0?u:void 0,V=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,W=(d=t.createdAt)!==null&&d!==void 0?d:void 0,B=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:q,emailVerified:Z,isAnonymous:ke,providerData:ne,stsTokenManager:T}=t;M(q&&T,e,"internal-error");const m=rn.fromJSON(this.name,T);M(typeof q=="string",e,"internal-error"),ut(y,e.name),ut(v,e.name),M(typeof Z=="boolean",e,"internal-error"),M(typeof ke=="boolean",e,"internal-error"),ut(P,e.name),ut(C,e.name),ut(O,e.name),ut(V,e.name),ut(W,e.name),ut(B,e.name);const _=new Oe({uid:q,auth:e,email:v,emailVerified:Z,displayName:y,isAnonymous:ke,photoURL:C,phoneNumber:P,tenantId:O,stsTokenManager:m,createdAt:W,lastLoginAt:B});return ne&&Array.isArray(ne)&&(_.providerData=ne.map(E=>Object.assign({},E))),V&&(_._redirectEventId=V),_}static async _fromIdTokenResponse(e,t,r=!1){const s=new rn;s.updateFromServerResponse(t);const i=new Oe({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await us(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];M(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Zu(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),u=new rn;u.updateFromIdToken(r);const l=new Oe({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new xi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=new Map;function Je(n){et(n instanceof Function,"Expected a class definition");let e=gc.get(n);return e?(et(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,gc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}el.type="NONE";const _c=el;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(n,e,t){return`firebase:${n}:${e}:${t}`}class sn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Qr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Qr("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await cs(this.auth,{idToken:e}).catch(()=>{});return t?Oe._fromGetAccountInfoResponse(this.auth,t,e):null}return Oe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new sn(Je(_c),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Je(_c);const a=Qr(r,e.config.apiKey,e.name);let u=null;for(const d of t)try{const p=await d._get(a);if(p){let y;if(typeof p=="string"){const v=await cs(e,{idToken:p}).catch(()=>{});if(!v)break;y=await Oe._fromGetAccountInfoResponse(e,v,p)}else y=Oe._fromJSON(e,p);d!==i&&(u=y),i=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new sn(i,e,r):(i=l[0],u&&await i._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new sn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ol(e))return"Blackberry";if(al(e))return"Webos";if(nl(e))return"Safari";if((e.includes("chrome/")||rl(e))&&!e.includes("edge/"))return"Chrome";if(il(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tl(n=we()){return/firefox\//i.test(n)}function nl(n=we()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rl(n=we()){return/crios\//i.test(n)}function sl(n=we()){return/iemobile/i.test(n)}function il(n=we()){return/android/i.test(n)}function ol(n=we()){return/blackberry/i.test(n)}function al(n=we()){return/webos/i.test(n)}function mo(n=we()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function tm(n=we()){var e;return mo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function nm(){return pf()&&document.documentMode===10}function cl(n=we()){return mo(n)||il(n)||al(n)||ol(n)||/windows phone/i.test(n)||sl(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(n,e=[]){let t;switch(n){case"Browser":t=yc(we());break;case"Worker":t=`${yc(we())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${gn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,u)=>{try{const l=e(i);a(l)}catch(l){u(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sm(n,e={}){return Pt(n,"GET","/v2/passwordPolicy",St(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im=6;class om{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:im,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,u;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(u=l.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vc(this),this.idTokenSubscription=new vc(this),this.beforeStateQueue=new rm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ku,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Je(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await sn.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await cs(this,{idToken:e}),r=await Oe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ve(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===u)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await us(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Up()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ve(this.app))return Promise.reject(Ye(this));const t=e?he(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ve(this.app)?Promise.reject(Ye(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ve(this.app)?Promise.reject(Ye(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Je(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sm(this),t=new om(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new lr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await em(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Je(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=await sn.create(this,[Je(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(u,this,"internal-error"),u.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ul(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Ve(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Mp(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function zt(n){return he(n)}class vc{constructor(e){this.auth=e,this.observer=null,this.addObserver=If(t=>this.observer=t)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let As={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cm(n){As=n}function ll(n){return As.loadJS(n)}function um(){return As.recaptchaEnterpriseScript}function lm(){return As.gapiScript}function hm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class dm{constructor(){this.enterprise=new fm}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class fm{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const pm="recaptcha-enterprise",hl="NO_RECAPTCHA";class mm{constructor(e){this.type=pm,this.auth=zt(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,u)=>{Wp(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const d=new Hp(l);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(l=>{u(l)})})}function s(i,a,u){const l=window.grecaptcha;pc(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(hl)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new dm().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(u=>{if(!t&&pc(window.grecaptcha))s(u,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=um();l.length!==0&&(l+=u),ll(l).then(()=>{s(u,i,a)}).catch(d=>{a(d)})}}).catch(u=>{a(u)})})}}async function Ec(n,e,t,r=!1,s=!1){const i=new mm(n);let a;if(s)a=hl;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const u=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in u){const l=u.phoneEnrollmentInfo.phoneNumber,d=u.phoneEnrollmentInfo.recaptchaToken;Object.assign(u,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in u){const l=u.phoneSignInInfo.recaptchaToken;Object.assign(u,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return u}return r?Object.assign(u,{captchaResp:a}):Object.assign(u,{captchaResponse:a}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function Fi(n,e,t,r,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Ec(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await Ec(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(n,e){const t=uo(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Ft(i,e??{}))return s;Me(s,"already-initialized")}return t.initialize({options:e})}function _m(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Je);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ym(n,e,t){const r=zt(n);M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=dl(e),{host:a,port:u}=vm(e),l=u===null?"":`:${u}`,d={url:`${i}//${a}${l}/`},p=Object.freeze({host:a,port:u,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){M(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),M(Ft(d,r.config.emulator)&&Ft(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,mn(a)?(Uu(`${i}//${a}${l}`),Bu("Auth",!0)):Em()}function dl(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function vm(n){const e=dl(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Tc(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Tc(a)}}}function Tc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Em(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Qe("not implemented")}_getIdTokenResponse(e){return Qe("not implemented")}_linkToIdToken(e,t){return Qe("not implemented")}_getReauthenticationResolver(e){return Qe("not implemented")}}async function Tm(n,e){return Pt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Im(n,e){return fr(n,"POST","/v1/accounts:signInWithPassword",St(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wm(n,e){return fr(n,"POST","/v1/accounts:signInWithEmailLink",St(n,e))}async function Am(n,e){return fr(n,"POST","/v1/accounts:signInWithEmailLink",St(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends go{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new tr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new tr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fi(e,t,"signInWithPassword",Im);case"emailLink":return wm(e,{email:this._email,oobCode:this._password});default:Me(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fi(e,r,"signUpPassword",Tm);case"emailLink":return Am(e,{idToken:t,email:this._email,oobCode:this._password});default:Me(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function on(n,e){return fr(n,"POST","/v1/accounts:signInWithIdp",St(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm="http://localhost";class Bt extends go{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Bt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Me("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=lo(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Bt(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return on(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,on(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,on(e,t)}buildRequest(){const e={requestUri:Rm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=hr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Sm(n){const e=jn(qn(n)).link,t=e?jn(qn(e)).deep_link_id:null,r=jn(qn(n)).deep_link_id;return(r?jn(qn(r)).link:null)||r||t||e||n}class _o{constructor(e){var t,r,s,i,a,u;const l=jn(qn(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,p=(r=l.oobCode)!==null&&r!==void 0?r:null,y=bm((s=l.mode)!==null&&s!==void 0?s:null);M(d&&p&&y,"argument-error"),this.apiKey=d,this.operation=y,this.code=p,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=l.lang)!==null&&a!==void 0?a:null,this.tenantId=(u=l.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){const t=Sm(e);try{return new _o(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(){this.providerId=_n.PROVIDER_ID}static credential(e,t){return tr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=_o.parseLink(t);return M(r,"argument-error"),tr._fromEmailAndCode(e,r.code,r.tenantId)}}_n.PROVIDER_ID="password";_n.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_n.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends fl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends pr{constructor(){super("facebook.com")}static credential(e){return Bt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch{return null}}}lt.FACEBOOK_SIGN_IN_METHOD="facebook.com";lt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends pr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Bt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ht.credential(t,r)}catch{return null}}}ht.GOOGLE_SIGN_IN_METHOD="google.com";ht.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends pr{constructor(){super("github.com")}static credential(e){return Bt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dt.credential(e.oauthAccessToken)}catch{return null}}}dt.GITHUB_SIGN_IN_METHOD="github.com";dt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends pr{constructor(){super("twitter.com")}static credential(e,t){return Bt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ft.credential(t,r)}catch{return null}}}ft.TWITTER_SIGN_IN_METHOD="twitter.com";ft.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pm(n,e){return fr(n,"POST","/v1/accounts:signUp",St(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Oe._fromIdTokenResponse(e,r,s),a=Ic(r);return new jt({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Ic(r);return new jt({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Ic(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends st{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ls.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ls(e,t,r,s)}}function pl(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ls._fromErrorAndOperation(n,i,e,r):i})}async function Cm(n,e,t=!1){const r=await er(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return jt._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function km(n,e,t=!1){const{auth:r}=n;if(Ve(r.app))return Promise.reject(Ye(r));const s="reauthenticate";try{const i=await er(n,pl(r,s,e,n),t);M(i.idToken,r,"internal-error");const a=po(i.idToken);M(a,r,"internal-error");const{sub:u}=a;return M(n.uid===u,r,"user-mismatch"),jt._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Me(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ml(n,e,t=!1){if(Ve(n.app))return Promise.reject(Ye(n));const r="signIn",s=await pl(n,r,e),i=await jt._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Vm(n,e){return ml(zt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gl(n){const e=zt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Dm(n,e,t){if(Ve(n.app))return Promise.reject(Ye(n));const r=zt(n),a=await Fi(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Pm).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&gl(n),l}),u=await jt._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(u.user),u}function Nm(n,e,t){return Ve(n.app)?Promise.reject(Ye(n)):Vm(he(n),_n.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&gl(n),r})}function Om(n,e,t,r){return he(n).onIdTokenChanged(e,t,r)}function Lm(n,e,t){return he(n).beforeAuthStateChanged(e,t)}function Mm(n,e,t,r){return he(n).onAuthStateChanged(e,t,r)}function xm(n){return he(n).signOut()}const hs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(hs,"1"),this.storage.removeItem(hs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=1e3,Um=10;class yl extends _l{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=cl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);nm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Um):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Fm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}yl.type="LOCAL";const Bm=yl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl extends _l{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}vl.type="SESSION";const El=vl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Rs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const u=Array.from(a).map(async d=>d(t.origin,i)),l=await jm(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((u,l)=>{const d=yo("",20);s.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(y){const v=y;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),u(v.data.response);break;default:clearTimeout(p),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){return window}function $m(n){Be().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(){return typeof Be().WorkerGlobalScope<"u"&&typeof Be().importScripts=="function"}async function zm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hm(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Wm(){return Tl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il="firebaseLocalStorageDb",Gm=1,ds="firebaseLocalStorage",wl="fbase_key";class mr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function bs(n,e){return n.transaction([ds],e?"readwrite":"readonly").objectStore(ds)}function Km(){const n=indexedDB.deleteDatabase(Il);return new mr(n).toPromise()}function Ui(){const n=indexedDB.open(Il,Gm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ds,{keyPath:wl})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ds)?e(r):(r.close(),await Km(),e(await Ui()))})})}async function wc(n,e,t){const r=bs(n,!0).put({[wl]:e,value:t});return new mr(r).toPromise()}async function Qm(n,e){const t=bs(n,!1).get(e),r=await new mr(t).toPromise();return r===void 0?null:r.value}function Ac(n,e){const t=bs(n,!0).delete(e);return new mr(t).toPromise()}const Jm=800,Ym=3;class Al{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ui(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Ym)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rs._getInstance(Wm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await zm(),!this.activeServiceWorker)return;this.sender=new qm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Hm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ui();return await wc(e,hs,"1"),await Ac(e,hs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>wc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Qm(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ac(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=bs(s,!1).getAll();return new mr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Al.type="LOCAL";const Xm=Al;new dr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(n,e){return e?Je(e):(M(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo extends go{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return on(e,this._buildIdpRequest())}_linkToIdToken(e,t){return on(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return on(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function eg(n){return ml(n.auth,new vo(n),n.bypassAuthState)}function tg(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),km(t,new vo(n),n.bypassAuthState)}async function ng(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),Cm(t,new vo(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:u}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eg;case"linkViaPopup":case"linkViaRedirect":return ng;case"reauthViaPopup":case"reauthViaRedirect":return tg;default:Me(this.auth,"internal-error")}}resolve(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=new dr(2e3,1e4);class nn extends Rl{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,nn.currentPopupAction&&nn.currentPopupAction.cancel(),nn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){et(this.filter.length===1,"Popup operations only handle one event");const e=yo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ue(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ue(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ue(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rg.get())};e()}}nn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg="pendingRedirect",Jr=new Map;class ig extends Rl{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Jr.get(this.auth._key());if(!e){try{const r=await og(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Jr.set(this.auth._key(),e)}return this.bypassAuthState||Jr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function og(n,e){const t=ug(e),r=cg(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function ag(n,e){Jr.set(n._key(),e)}function cg(n){return Je(n._redirectPersistence)}function ug(n){return Qr(sg,n.config.apiKey,n.name)}async function lg(n,e,t=!1){if(Ve(n.app))return Promise.reject(Ye(n));const r=zt(n),s=Zm(r,e),a=await new ig(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=10*60*1e3;class dg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!bl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ue(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rc(e))}saveEventToCache(e){this.cachedEventUids.add(Rc(e)),this.lastProcessedEventTime=Date.now()}}function Rc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function bl({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bl(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pg(n,e={}){return Pt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gg=/^https?/;async function _g(n){if(n.config.emulator)return;const{authorizedDomains:e}=await pg(n);for(const t of e)try{if(yg(t))return}catch{}Me(n,"unauthorized-domain")}function yg(n){const e=Mi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!gg.test(t))return!1;if(mg.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=new dr(3e4,6e4);function bc(){const n=Be().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Eg(n){return new Promise((e,t)=>{var r,s,i;function a(){bc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bc(),t(Ue(n,"network-request-failed"))},timeout:vg.get()})}if(!((s=(r=Be().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Be().gapi)===null||i===void 0)&&i.load)a();else{const u=hm("iframefcb");return Be()[u]=()=>{gapi.load?a():t(Ue(n,"network-request-failed"))},ll(`${lm()}?onload=${u}`).catch(l=>t(l))}}).catch(e=>{throw Yr=null,e})}let Yr=null;function Tg(n){return Yr=Yr||Eg(n),Yr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=new dr(5e3,15e3),wg="__/auth/iframe",Ag="emulator/auth/iframe",Rg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sg(n){const e=n.config;M(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?fo(e,Ag):`https://${n.config.authDomain}/${wg}`,r={apiKey:e.apiKey,appName:n.name,v:gn},s=bg.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${hr(r).slice(1)}`}async function Pg(n){const e=await Tg(n),t=Be().gapi;return M(t,n,"internal-error"),e.open({where:document.body,url:Sg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Rg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Ue(n,"network-request-failed"),u=Be().setTimeout(()=>{i(a)},Ig.get());function l(){Be().clearTimeout(u),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kg=500,Vg=600,Dg="_blank",Ng="http://localhost";class Sc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Og(n,e,t,r=kg,s=Vg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const l=Object.assign(Object.assign({},Cg),{width:r.toString(),height:s.toString(),top:i,left:a}),d=we().toLowerCase();t&&(u=rl(d)?Dg:t),tl(d)&&(e=e||Ng,l.scrollbars="yes");const p=Object.entries(l).reduce((v,[P,C])=>`${v}${P}=${C},`,"");if(tm(d)&&u!=="_self")return Lg(e||"",u),new Sc(null);const y=window.open(e||"",u,p);M(y,n,"popup-blocked");try{y.focus()}catch{}return new Sc(y)}function Lg(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg="__/auth/handler",xg="emulator/auth/handler",Fg=encodeURIComponent("fac");async function Pc(n,e,t,r,s,i){M(n.config.authDomain,n,"auth-domain-config-required"),M(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:gn,eventId:s};if(e instanceof fl){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Tf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,y]of Object.entries({}))a[p]=y}if(e instanceof pr){const p=e.getScopes().filter(y=>y!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const u=a;for(const p of Object.keys(u))u[p]===void 0&&delete u[p];const l=await n._getAppCheckToken(),d=l?`#${Fg}=${encodeURIComponent(l)}`:"";return`${Ug(n)}?${hr(u).slice(1)}${d}`}function Ug({config:n}){return n.emulator?fo(n,xg):`https://${n.authDomain}/${Mg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai="webStorageSupport";class Bg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=El,this._completeRedirectFn=lg,this._overrideRedirectResult=ag}async _openPopup(e,t,r,s){var i;et((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Pc(e,t,r,Mi(),s);return Og(e,a,yo())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Pc(e,t,r,Mi(),s);return $m(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(et(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Pg(e),r=new dg(e);return t.register("authEvent",s=>(M(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ai,{type:Ai},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ai];a!==void 0&&t(!!a),Me(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=_g(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return cl()||nl()||mo()}}const jg=Bg;var Cc="@firebase/auth",kc="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zg(n){un(new Ut("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;M(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ul(n)},d=new am(r,s,i,l);return _m(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),un(new Ut("auth-internal",e=>{const t=zt(e.getProvider("auth").getImmediate());return(r=>new qg(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),_t(Cc,kc,$g(n)),_t(Cc,kc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=5*60,Wg=Fu("authIdTokenMaxAge")||Hg;let Vc=null;const Gg=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Wg)return;const s=t==null?void 0:t.token;Vc!==s&&(Vc=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Kg(n=zu()){const e=uo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=gm(n,{popupRedirectResolver:jg,persistence:[Xm,Bm,El]}),r=Fu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Gg(i.toString());Lm(t,a,()=>a(t.currentUser)),Om(t,u=>a(u))}}const s=Mu("auth");return s&&ym(t,`http://${s}`),t}function Qg(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}cm({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Ue("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Qg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zg("Browser");var Dc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yt,Sl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,m){function _(){}_.prototype=m.prototype,T.D=m.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(E,I,A){for(var g=Array(arguments.length-2),We=2;We<arguments.length;We++)g[We-2]=arguments[We];return m.prototype[I].apply(E,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,_){_||(_=0);var E=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)E[I]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(I=0;16>I;++I)E[I]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=T.g[0],_=T.g[1],I=T.g[2];var A=T.g[3],g=m+(A^_&(I^A))+E[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=A+(I^m&(_^I))+E[1]+3905402710&4294967295,A=m+(g<<12&4294967295|g>>>20),g=I+(_^A&(m^_))+E[2]+606105819&4294967295,I=A+(g<<17&4294967295|g>>>15),g=_+(m^I&(A^m))+E[3]+3250441966&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(A^_&(I^A))+E[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(I^m&(_^I))+E[5]+1200080426&4294967295,A=m+(g<<12&4294967295|g>>>20),g=I+(_^A&(m^_))+E[6]+2821735955&4294967295,I=A+(g<<17&4294967295|g>>>15),g=_+(m^I&(A^m))+E[7]+4249261313&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(A^_&(I^A))+E[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(I^m&(_^I))+E[9]+2336552879&4294967295,A=m+(g<<12&4294967295|g>>>20),g=I+(_^A&(m^_))+E[10]+4294925233&4294967295,I=A+(g<<17&4294967295|g>>>15),g=_+(m^I&(A^m))+E[11]+2304563134&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(A^_&(I^A))+E[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(I^m&(_^I))+E[13]+4254626195&4294967295,A=m+(g<<12&4294967295|g>>>20),g=I+(_^A&(m^_))+E[14]+2792965006&4294967295,I=A+(g<<17&4294967295|g>>>15),g=_+(m^I&(A^m))+E[15]+1236535329&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(I^A&(_^I))+E[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^I&(m^_))+E[6]+3225465664&4294967295,A=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(A^m))+E[11]+643717713&4294967295,I=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(I^A))+E[0]+3921069994&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(I^A&(_^I))+E[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^I&(m^_))+E[10]+38016083&4294967295,A=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(A^m))+E[15]+3634488961&4294967295,I=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(I^A))+E[4]+3889429448&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(I^A&(_^I))+E[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^I&(m^_))+E[14]+3275163606&4294967295,A=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(A^m))+E[3]+4107603335&4294967295,I=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(I^A))+E[8]+1163531501&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(I^A&(_^I))+E[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^I&(m^_))+E[2]+4243563512&4294967295,A=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(A^m))+E[7]+1735328473&4294967295,I=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(I^A))+E[12]+2368359562&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(_^I^A)+E[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^I)+E[8]+2272392833&4294967295,A=m+(g<<11&4294967295|g>>>21),g=I+(A^m^_)+E[11]+1839030562&4294967295,I=A+(g<<16&4294967295|g>>>16),g=_+(I^A^m)+E[14]+4259657740&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(_^I^A)+E[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^I)+E[4]+1272893353&4294967295,A=m+(g<<11&4294967295|g>>>21),g=I+(A^m^_)+E[7]+4139469664&4294967295,I=A+(g<<16&4294967295|g>>>16),g=_+(I^A^m)+E[10]+3200236656&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(_^I^A)+E[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^I)+E[0]+3936430074&4294967295,A=m+(g<<11&4294967295|g>>>21),g=I+(A^m^_)+E[3]+3572445317&4294967295,I=A+(g<<16&4294967295|g>>>16),g=_+(I^A^m)+E[6]+76029189&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(_^I^A)+E[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^I)+E[12]+3873151461&4294967295,A=m+(g<<11&4294967295|g>>>21),g=I+(A^m^_)+E[15]+530742520&4294967295,I=A+(g<<16&4294967295|g>>>16),g=_+(I^A^m)+E[2]+3299628645&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(I^(_|~A))+E[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~I))+E[7]+1126891415&4294967295,A=m+(g<<10&4294967295|g>>>22),g=I+(m^(A|~_))+E[14]+2878612391&4294967295,I=A+(g<<15&4294967295|g>>>17),g=_+(A^(I|~m))+E[5]+4237533241&4294967295,_=I+(g<<21&4294967295|g>>>11),g=m+(I^(_|~A))+E[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~I))+E[3]+2399980690&4294967295,A=m+(g<<10&4294967295|g>>>22),g=I+(m^(A|~_))+E[10]+4293915773&4294967295,I=A+(g<<15&4294967295|g>>>17),g=_+(A^(I|~m))+E[1]+2240044497&4294967295,_=I+(g<<21&4294967295|g>>>11),g=m+(I^(_|~A))+E[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~I))+E[15]+4264355552&4294967295,A=m+(g<<10&4294967295|g>>>22),g=I+(m^(A|~_))+E[6]+2734768916&4294967295,I=A+(g<<15&4294967295|g>>>17),g=_+(A^(I|~m))+E[13]+1309151649&4294967295,_=I+(g<<21&4294967295|g>>>11),g=m+(I^(_|~A))+E[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~I))+E[11]+3174756917&4294967295,A=m+(g<<10&4294967295|g>>>22),g=I+(m^(A|~_))+E[2]+718787259&4294967295,I=A+(g<<15&4294967295|g>>>17),g=_+(A^(I|~m))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(I+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+A&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var _=m-this.blockSize,E=this.B,I=this.h,A=0;A<m;){if(I==0)for(;A<=_;)s(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<m;)if(E[I++]=T.charCodeAt(A++),I==this.blockSize){s(this,E),I=0;break}}else for(;A<m;)if(E[I++]=T[A++],I==this.blockSize){s(this,E),I=0;break}}this.h=I,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var _=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=_&255,_/=256;for(this.u(T),T=Array(16),m=_=0;4>m;++m)for(var E=0;32>E;E+=8)T[_++]=this.g[m]>>>E&255;return T};function i(T,m){var _=u;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=m(T)}function a(T,m){this.h=m;for(var _=[],E=!0,I=T.length-1;0<=I;I--){var A=T[I]|0;E&&A==m||(_[I]=A,E=!1)}this.g=_}var u={};function l(T){return-128<=T&&128>T?i(T,function(m){return new a([m|0],0>m?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return y;if(0>T)return V(d(-T));for(var m=[],_=1,E=0;T>=_;E++)m[E]=T/_|0,_*=4294967296;return new a(m,0)}function p(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return V(p(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),E=y,I=0;I<T.length;I+=8){var A=Math.min(8,T.length-I),g=parseInt(T.substring(I,I+A),m);8>A?(A=d(Math.pow(m,A)),E=E.j(A).add(d(g))):(E=E.j(_),E=E.add(d(g)))}return E}var y=l(0),v=l(1),P=l(16777216);n=a.prototype,n.m=function(){if(O(this))return-V(this).m();for(var T=0,m=1,_=0;_<this.g.length;_++){var E=this.i(_);T+=(0<=E?E:4294967296+E)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(O(this))return"-"+V(this).toString(T);for(var m=d(Math.pow(T,6)),_=this,E="";;){var I=Z(_,m).g;_=W(_,I.j(m));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=I,C(_))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function O(T){return T.h==-1}n.l=function(T){return T=W(this,T),O(T)?-1:C(T)?0:1};function V(T){for(var m=T.g.length,_=[],E=0;E<m;E++)_[E]=~T.g[E];return new a(_,~T.h).add(v)}n.abs=function(){return O(this)?V(this):this},n.add=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],E=0,I=0;I<=m;I++){var A=E+(this.i(I)&65535)+(T.i(I)&65535),g=(A>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);E=g>>>16,A&=65535,g&=65535,_[I]=g<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function W(T,m){return T.add(V(m))}n.j=function(T){if(C(this)||C(T))return y;if(O(this))return O(T)?V(this).j(V(T)):V(V(this).j(T));if(O(T))return V(this.j(V(T)));if(0>this.l(P)&&0>T.l(P))return d(this.m()*T.m());for(var m=this.g.length+T.g.length,_=[],E=0;E<2*m;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var I=0;I<T.g.length;I++){var A=this.i(E)>>>16,g=this.i(E)&65535,We=T.i(I)>>>16,An=T.i(I)&65535;_[2*E+2*I]+=g*An,B(_,2*E+2*I),_[2*E+2*I+1]+=A*An,B(_,2*E+2*I+1),_[2*E+2*I+1]+=g*We,B(_,2*E+2*I+1),_[2*E+2*I+2]+=A*We,B(_,2*E+2*I+2)}for(E=0;E<m;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=m;E<2*m;E++)_[E]=0;return new a(_,0)};function B(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function q(T,m){this.g=T,this.h=m}function Z(T,m){if(C(m))throw Error("division by zero");if(C(T))return new q(y,y);if(O(T))return m=Z(V(T),m),new q(V(m.g),V(m.h));if(O(m))return m=Z(T,V(m)),new q(V(m.g),m.h);if(30<T.g.length){if(O(T)||O(m))throw Error("slowDivide_ only works with positive integers.");for(var _=v,E=m;0>=E.l(T);)_=ke(_),E=ke(E);var I=ne(_,1),A=ne(E,1);for(E=ne(E,2),_=ne(_,2);!C(E);){var g=A.add(E);0>=g.l(T)&&(I=I.add(_),A=g),E=ne(E,1),_=ne(_,1)}return m=W(T,I.j(m)),new q(I,m)}for(I=y;0<=T.l(m);){for(_=Math.max(1,Math.floor(T.m()/m.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=d(_),g=A.j(m);O(g)||0<g.l(T);)_-=E,A=d(_),g=A.j(m);C(A)&&(A=v),I=I.add(A),T=W(T,g)}return new q(I,T)}n.A=function(T){return Z(this,T).h},n.and=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)&T.i(E);return new a(_,this.h&T.h)},n.or=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)|T.i(E);return new a(_,this.h|T.h)},n.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)^T.i(E);return new a(_,this.h^T.h)};function ke(T){for(var m=T.g.length+1,_=[],E=0;E<m;E++)_[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(_,T.h)}function ne(T,m){var _=m>>5;m%=32;for(var E=T.g.length-_,I=[],A=0;A<E;A++)I[A]=0<m?T.i(A+_)>>>m|T.i(A+_+1)<<32-m:T.i(A+_);return new a(I,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Sl=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,yt=a}).apply(typeof Dc<"u"?Dc:typeof self<"u"?self:typeof window<"u"?window:{});var $r=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pl,$n,Cl,Xr,Bi,kl,Vl,Dl;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof $r=="object"&&$r];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,c){if(c)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var w=o[f];if(!(w in h))break e;h=h[w]}o=o[o.length-1],f=h[o],c=c(f),c!=f&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var h=0,f=!1,w={next:function(){if(!f&&h<o.length){var R=h++;return{value:c(R,o[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function l(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function p(o,c,h){return o.call.apply(o.bind,arguments)}function y(o,c,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,f),o.apply(c,w)}}return function(){return o.apply(c,arguments)}}function v(o,c,h){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:y,v.apply(null,arguments)}function P(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function C(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,w,R){for(var k=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)k[Q-2]=arguments[Q];return c.prototype[w].apply(f,k)}}function O(o){const c=o.length;if(0<c){const h=Array(c);for(let f=0;f<c;f++)h[f]=o[f];return h}return[]}function V(o,c){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(l(f)){const w=o.length||0,R=f.length||0;o.length=w+R;for(let k=0;k<R;k++)o[w+k]=f[k]}else o.push(f)}}class W{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function B(o){return/^[\s\xa0]*$/.test(o)}function q(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function Z(o){return Z[" "](o),o}Z[" "]=function(){};var ke=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function ne(o,c,h){for(const f in o)c.call(h,o[f],f,o)}function T(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function m(o){const c={};for(const h in o)c[h]=o[h];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,c){let h,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(h in f)o[h]=f[h];for(let R=0;R<_.length;R++)h=_[R],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function I(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function A(o){u.setTimeout(()=>{throw o},0)}function g(){var o=Ks;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class We{constructor(){this.h=this.g=null}add(c,h){const f=An.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var An=new W(()=>new fd,o=>o.reset());class fd{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Rn,bn=!1,Ks=new We,na=()=>{const o=u.Promise.resolve(void 0);Rn=()=>{o.then(pd)}};var pd=()=>{for(var o;o=g();){try{o.h.call(o.g)}catch(h){A(h)}var c=An;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}bn=!1};function it(){this.s=this.s,this.C=this.C}it.prototype.s=!1,it.prototype.ma=function(){this.s||(this.s=!0,this.N())},it.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var md=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};u.addEventListener("test",h,c),u.removeEventListener("test",h,c)}catch{}return o}();function Sn(o,c){if(ge.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(ke){e:{try{Z(c.nodeName);var w=!0;break e}catch{}w=!1}w||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:gd[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Sn.aa.h.call(this)}}C(Sn,ge);var gd={2:"touch",3:"pen",4:"mouse"};Sn.prototype.h=function(){Sn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var wr="closure_listenable_"+(1e6*Math.random()|0),_d=0;function yd(o,c,h,f,w){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=w,this.key=++_d,this.da=this.fa=!1}function Ar(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Rr(o){this.src=o,this.g={},this.h=0}Rr.prototype.add=function(o,c,h,f,w){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var k=Js(o,c,f,w);return-1<k?(c=o[k],h||(c.fa=!1)):(c=new yd(c,this.src,R,!!f,w),c.fa=h,o.push(c)),c};function Qs(o,c){var h=c.type;if(h in o.g){var f=o.g[h],w=Array.prototype.indexOf.call(f,c,void 0),R;(R=0<=w)&&Array.prototype.splice.call(f,w,1),R&&(Ar(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Js(o,c,h,f){for(var w=0;w<o.length;++w){var R=o[w];if(!R.da&&R.listener==c&&R.capture==!!h&&R.ha==f)return w}return-1}var Ys="closure_lm_"+(1e6*Math.random()|0),Xs={};function ra(o,c,h,f,w){if(Array.isArray(c)){for(var R=0;R<c.length;R++)ra(o,c[R],h,f,w);return null}return h=oa(h),o&&o[wr]?o.K(c,h,d(f)?!!f.capture:!1,w):vd(o,c,h,!1,f,w)}function vd(o,c,h,f,w,R){if(!c)throw Error("Invalid event type");var k=d(w)?!!w.capture:!!w,Q=ei(o);if(Q||(o[Ys]=Q=new Rr(o)),h=Q.add(c,h,f,k,R),h.proxy)return h;if(f=Ed(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)md||(w=k),w===void 0&&(w=!1),o.addEventListener(c.toString(),f,w);else if(o.attachEvent)o.attachEvent(ia(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Ed(){function o(h){return c.call(o.src,o.listener,h)}const c=Td;return o}function sa(o,c,h,f,w){if(Array.isArray(c))for(var R=0;R<c.length;R++)sa(o,c[R],h,f,w);else f=d(f)?!!f.capture:!!f,h=oa(h),o&&o[wr]?(o=o.i,c=String(c).toString(),c in o.g&&(R=o.g[c],h=Js(R,h,f,w),-1<h&&(Ar(R[h]),Array.prototype.splice.call(R,h,1),R.length==0&&(delete o.g[c],o.h--)))):o&&(o=ei(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Js(c,h,f,w)),(h=-1<o?c[o]:null)&&Zs(h))}function Zs(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[wr])Qs(c.i,o);else{var h=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(h,f,o.capture):c.detachEvent?c.detachEvent(ia(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=ei(c))?(Qs(h,o),h.h==0&&(h.src=null,c[Ys]=null)):Ar(o)}}}function ia(o){return o in Xs?Xs[o]:Xs[o]="on"+o}function Td(o,c){if(o.da)o=!0;else{c=new Sn(c,this);var h=o.listener,f=o.ha||o.src;o.fa&&Zs(o),o=h.call(f,c)}return o}function ei(o){return o=o[Ys],o instanceof Rr?o:null}var ti="__closure_events_fn_"+(1e9*Math.random()>>>0);function oa(o){return typeof o=="function"?o:(o[ti]||(o[ti]=function(c){return o.handleEvent(c)}),o[ti])}function _e(){it.call(this),this.i=new Rr(this),this.M=this,this.F=null}C(_e,it),_e.prototype[wr]=!0,_e.prototype.removeEventListener=function(o,c,h,f){sa(this,o,c,h,f)};function Ae(o,c){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new ge(c,o);else if(c instanceof ge)c.target=c.target||o;else{var w=c;c=new ge(f,o),E(c,w)}if(w=!0,h)for(var R=h.length-1;0<=R;R--){var k=c.g=h[R];w=br(k,f,!0,c)&&w}if(k=c.g=o,w=br(k,f,!0,c)&&w,w=br(k,f,!1,c)&&w,h)for(R=0;R<h.length;R++)k=c.g=h[R],w=br(k,f,!1,c)&&w}_e.prototype.N=function(){if(_e.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],f=0;f<h.length;f++)Ar(h[f]);delete o.g[c],o.h--}}this.F=null},_e.prototype.K=function(o,c,h,f){return this.i.add(String(o),c,!1,h,f)},_e.prototype.L=function(o,c,h,f){return this.i.add(String(o),c,!0,h,f)};function br(o,c,h,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var w=!0,R=0;R<c.length;++R){var k=c[R];if(k&&!k.da&&k.capture==h){var Q=k.listener,de=k.ha||k.src;k.fa&&Qs(o.i,k),w=Q.call(de,f)!==!1&&w}}return w&&!f.defaultPrevented}function aa(o,c,h){if(typeof o=="function")h&&(o=v(o,h));else if(o&&typeof o.handleEvent=="function")o=v(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(o,c||0)}function ca(o){o.g=aa(()=>{o.g=null,o.i&&(o.i=!1,ca(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Id extends it{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ca(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pn(o){it.call(this),this.h=o,this.g={}}C(Pn,it);var ua=[];function la(o){ne(o.g,function(c,h){this.g.hasOwnProperty(h)&&Zs(c)},o),o.g={}}Pn.prototype.N=function(){Pn.aa.N.call(this),la(this)},Pn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ni=u.JSON.stringify,wd=u.JSON.parse,Ad=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function ri(){}ri.prototype.h=null;function ha(o){return o.h||(o.h=o.i())}function da(){}var Cn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function si(){ge.call(this,"d")}C(si,ge);function ii(){ge.call(this,"c")}C(ii,ge);var Vt={},fa=null;function Sr(){return fa=fa||new _e}Vt.La="serverreachability";function pa(o){ge.call(this,Vt.La,o)}C(pa,ge);function kn(o){const c=Sr();Ae(c,new pa(c))}Vt.STAT_EVENT="statevent";function ma(o,c){ge.call(this,Vt.STAT_EVENT,o),this.stat=c}C(ma,ge);function Re(o){const c=Sr();Ae(c,new ma(c,o))}Vt.Ma="timingevent";function ga(o,c){ge.call(this,Vt.Ma,o),this.size=c}C(ga,ge);function Vn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},c)}function Dn(){this.g=!0}Dn.prototype.xa=function(){this.g=!1};function Rd(o,c,h,f,w,R){o.info(function(){if(o.g)if(R)for(var k="",Q=R.split("&"),de=0;de<Q.length;de++){var G=Q[de].split("=");if(1<G.length){var ye=G[0];G=G[1];var ve=ye.split("_");k=2<=ve.length&&ve[1]=="type"?k+(ye+"="+G+"&"):k+(ye+"=redacted&")}}else k=null;else k=R;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+c+`
`+h+`
`+k})}function bd(o,c,h,f,w,R,k){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+c+`
`+h+`
`+R+" "+k})}function Kt(o,c,h,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Pd(o,h)+(f?" "+f:"")})}function Sd(o,c){o.info(function(){return"TIMEOUT: "+c})}Dn.prototype.info=function(){};function Pd(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var w=f[1];if(Array.isArray(w)&&!(1>w.length)){var R=w[0];if(R!="noop"&&R!="stop"&&R!="close")for(var k=1;k<w.length;k++)w[k]=""}}}}return ni(h)}catch{return c}}var Pr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_a={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},oi;function Cr(){}C(Cr,ri),Cr.prototype.g=function(){return new XMLHttpRequest},Cr.prototype.i=function(){return{}},oi=new Cr;function ot(o,c,h,f){this.j=o,this.i=c,this.l=h,this.R=f||1,this.U=new Pn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ya}function ya(){this.i=null,this.g="",this.h=!1}var va={},ai={};function ci(o,c,h){o.L=1,o.v=Nr(Ge(c)),o.m=h,o.P=!0,Ea(o,null)}function Ea(o,c){o.F=Date.now(),kr(o),o.A=Ge(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),Oa(h.i,"t",f),o.C=0,h=o.j.J,o.h=new ya,o.g=Xa(o.j,h?c:null,!o.m),0<o.O&&(o.M=new Id(v(o.Y,o,o.g),o.O)),c=o.U,h=o.g,f=o.ca;var w="readystatechange";Array.isArray(w)||(w&&(ua[0]=w.toString()),w=ua);for(var R=0;R<w.length;R++){var k=ra(h,w[R],f||c.handleEvent,!1,c.h||c);if(!k)break;c.g[k.key]=k}c=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),kn(),Rd(o.i,o.u,o.A,o.l,o.R,o.m)}ot.prototype.ca=function(o){o=o.target;const c=this.M;c&&Ke(o)==3?c.j():this.Y(o)},ot.prototype.Y=function(o){try{if(o==this.g)e:{const ve=Ke(this.g);var c=this.g.Ba();const Yt=this.g.Z();if(!(3>ve)&&(ve!=3||this.g&&(this.h.h||this.g.oa()||ja(this.g)))){this.J||ve!=4||c==7||(c==8||0>=Yt?kn(3):kn(2)),ui(this);var h=this.g.Z();this.X=h;t:if(Ta(this)){var f=ja(this.g);o="";var w=f.length,R=Ke(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dt(this),Nn(this);var k="";break t}this.h.i=new u.TextDecoder}for(c=0;c<w;c++)this.h.h=!0,o+=this.h.i.decode(f[c],{stream:!(R&&c==w-1)});f.length=0,this.h.g+=o,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=h==200,bd(this.i,this.u,this.A,this.l,this.R,ve,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Q,de=this.g;if((Q=de.g?de.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Q)){var G=Q;break t}}G=null}if(h=G)Kt(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,li(this,h);else{this.o=!1,this.s=3,Re(12),Dt(this),Nn(this);break e}}if(this.P){h=!0;let Ne;for(;!this.J&&this.C<k.length;)if(Ne=Cd(this,k),Ne==ai){ve==4&&(this.s=4,Re(14),h=!1),Kt(this.i,this.l,null,"[Incomplete Response]");break}else if(Ne==va){this.s=4,Re(15),Kt(this.i,this.l,k,"[Invalid Chunk]"),h=!1;break}else Kt(this.i,this.l,Ne,null),li(this,Ne);if(Ta(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ve!=4||k.length!=0||this.h.h||(this.s=1,Re(16),h=!1),this.o=this.o&&h,!h)Kt(this.i,this.l,k,"[Invalid Chunked Response]"),Dt(this),Nn(this);else if(0<k.length&&!this.W){this.W=!0;var ye=this.j;ye.g==this&&ye.ba&&!ye.M&&(ye.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),gi(ye),ye.M=!0,Re(11))}}else Kt(this.i,this.l,k,null),li(this,k);ve==4&&Dt(this),this.o&&!this.J&&(ve==4?Ka(this.j,this):(this.o=!1,kr(this)))}else Wd(this.g),h==400&&0<k.indexOf("Unknown SID")?(this.s=3,Re(12)):(this.s=0,Re(13)),Dt(this),Nn(this)}}}catch{}finally{}};function Ta(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Cd(o,c){var h=o.C,f=c.indexOf(`
`,h);return f==-1?ai:(h=Number(c.substring(h,f)),isNaN(h)?va:(f+=1,f+h>c.length?ai:(c=c.slice(f,f+h),o.C=f+h,c)))}ot.prototype.cancel=function(){this.J=!0,Dt(this)};function kr(o){o.S=Date.now()+o.I,Ia(o,o.I)}function Ia(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Vn(v(o.ba,o),c)}function ui(o){o.B&&(u.clearTimeout(o.B),o.B=null)}ot.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Sd(this.i,this.A),this.L!=2&&(kn(),Re(17)),Dt(this),this.s=2,Nn(this)):Ia(this,this.S-o)};function Nn(o){o.j.G==0||o.J||Ka(o.j,o)}function Dt(o){ui(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,la(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function li(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||hi(h.h,o))){if(!o.K&&hi(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Ur(h),xr(h);else break e;mi(h),Re(18)}}else h.za=w[1],0<h.za-h.T&&37500>w[2]&&h.F&&h.v==0&&!h.C&&(h.C=Vn(v(h.Za,h),6e3));if(1>=Ra(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Ot(h,11)}else if((o.K||h.g==o)&&Ur(h),!B(c))for(w=h.Da.g.parse(c),c=0;c<w.length;c++){let G=w[c];if(h.T=G[0],G=G[1],h.G==2)if(G[0]=="c"){h.K=G[1],h.ia=G[2];const ye=G[3];ye!=null&&(h.la=ye,h.j.info("VER="+h.la));const ve=G[4];ve!=null&&(h.Aa=ve,h.j.info("SVER="+h.Aa));const Yt=G[5];Yt!=null&&typeof Yt=="number"&&0<Yt&&(f=1.5*Yt,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Ne=o.g;if(Ne){const jr=Ne.g?Ne.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(jr){var R=f.h;R.g||jr.indexOf("spdy")==-1&&jr.indexOf("quic")==-1&&jr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(di(R,R.h),R.h=null))}if(f.D){const _i=Ne.g?Ne.g.getResponseHeader("X-HTTP-Session-Id"):null;_i&&(f.ya=_i,Y(f.I,f.D,_i))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var k=o;if(f.qa=Ya(f,f.J?f.ia:null,f.W),k.K){ba(f.h,k);var Q=k,de=f.L;de&&(Q.I=de),Q.B&&(ui(Q),kr(Q)),f.g=k}else Wa(f);0<h.i.length&&Fr(h)}else G[0]!="stop"&&G[0]!="close"||Ot(h,7);else h.G==3&&(G[0]=="stop"||G[0]=="close"?G[0]=="stop"?Ot(h,7):pi(h):G[0]!="noop"&&h.l&&h.l.ta(G),h.v=0)}}kn(4)}catch{}}var kd=class{constructor(o,c){this.g=o,this.map=c}};function wa(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Aa(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ra(o){return o.h?1:o.g?o.g.size:0}function hi(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function di(o,c){o.g?o.g.add(c):o.h=c}function ba(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}wa.prototype.cancel=function(){if(this.i=Sa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Sa(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return O(o.i)}function Vd(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var c=[],h=o.length,f=0;f<h;f++)c.push(o[f]);return c}c=[],h=0;for(f in o)c[h++]=o[f];return c}function Dd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const f in o)c[h++]=f;return c}}}function Pa(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=Dd(o),f=Vd(o),w=f.length,R=0;R<w;R++)c.call(void 0,f[R],h&&h[R],o)}var Ca=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nd(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),w=null;if(0<=f){var R=o[h].substring(0,f);w=o[h].substring(f+1)}else R=o[h];c(R,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Nt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Nt){this.h=o.h,Vr(this,o.j),this.o=o.o,this.g=o.g,Dr(this,o.s),this.l=o.l;var c=o.i,h=new Mn;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),ka(this,h),this.m=o.m}else o&&(c=String(o).match(Ca))?(this.h=!1,Vr(this,c[1]||"",!0),this.o=On(c[2]||""),this.g=On(c[3]||"",!0),Dr(this,c[4]),this.l=On(c[5]||"",!0),ka(this,c[6]||"",!0),this.m=On(c[7]||"")):(this.h=!1,this.i=new Mn(null,this.h))}Nt.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Ln(c,Va,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Ln(c,Va,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Ln(h,h.charAt(0)=="/"?Md:Ld,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Ln(h,Fd)),o.join("")};function Ge(o){return new Nt(o)}function Vr(o,c,h){o.j=h?On(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Dr(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function ka(o,c,h){c instanceof Mn?(o.i=c,Ud(o.i,o.h)):(h||(c=Ln(c,xd)),o.i=new Mn(c,o.h))}function Y(o,c,h){o.i.set(c,h)}function Nr(o){return Y(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function On(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ln(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,Od),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Od(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Va=/[#\/\?@]/g,Ld=/[#\?:]/g,Md=/[#\?]/g,xd=/[#\?@]/g,Fd=/#/g;function Mn(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function at(o){o.g||(o.g=new Map,o.h=0,o.i&&Nd(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=Mn.prototype,n.add=function(o,c){at(this),this.i=null,o=Qt(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function Da(o,c){at(o),c=Qt(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Na(o,c){return at(o),c=Qt(o,c),o.g.has(c)}n.forEach=function(o,c){at(this),this.g.forEach(function(h,f){h.forEach(function(w){o.call(c,w,f,this)},this)},this)},n.na=function(){at(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let f=0;f<c.length;f++){const w=o[f];for(let R=0;R<w.length;R++)h.push(c[f])}return h},n.V=function(o){at(this);let c=[];if(typeof o=="string")Na(this,o)&&(c=c.concat(this.g.get(Qt(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},n.set=function(o,c){return at(this),this.i=null,o=Qt(this,o),Na(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function Oa(o,c,h){Da(o,c),0<h.length&&(o.i=null,o.g.set(Qt(o,c),O(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var f=c[h];const R=encodeURIComponent(String(f)),k=this.V(f);for(f=0;f<k.length;f++){var w=R;k[f]!==""&&(w+="="+encodeURIComponent(String(k[f]))),o.push(w)}}return this.i=o.join("&")};function Qt(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Ud(o,c){c&&!o.j&&(at(o),o.i=null,o.g.forEach(function(h,f){var w=f.toLowerCase();f!=w&&(Da(this,f),Oa(this,w,h))},o)),o.j=c}function Bd(o,c){const h=new Dn;if(u.Image){const f=new Image;f.onload=P(ct,h,"TestLoadImage: loaded",!0,c,f),f.onerror=P(ct,h,"TestLoadImage: error",!1,c,f),f.onabort=P(ct,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=P(ct,h,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function jd(o,c){const h=new Dn,f=new AbortController,w=setTimeout(()=>{f.abort(),ct(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(R=>{clearTimeout(w),R.ok?ct(h,"TestPingServer: ok",!0,c):ct(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),ct(h,"TestPingServer: error",!1,c)})}function ct(o,c,h,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(h)}catch{}}function qd(){this.g=new Ad}function $d(o,c,h){const f=h||"";try{Pa(o,function(w,R){let k=w;d(w)&&(k=ni(w)),c.push(f+R+"="+encodeURIComponent(k))})}catch(w){throw c.push(f+"type="+encodeURIComponent("_badmap")),w}}function Or(o){this.l=o.Ub||null,this.j=o.eb||!1}C(Or,ri),Or.prototype.g=function(){return new Lr(this.l,this.j)},Or.prototype.i=function(o){return function(){return o}}({});function Lr(o,c){_e.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Lr,_e),n=Lr.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Fn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Fn(this)),this.g&&(this.readyState=3,Fn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;La(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function La(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?xn(this):Fn(this),this.readyState==3&&La(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,xn(this))},n.Qa=function(o){this.g&&(this.response=o,xn(this))},n.ga=function(){this.g&&xn(this)};function xn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Fn(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Fn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Lr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ma(o){let c="";return ne(o,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function fi(o,c,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=Ma(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):Y(o,c,h))}function te(o){_e.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(te,_e);var zd=/^https?$/i,Hd=["POST","PUT"];n=te.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():oi.g(),this.v=this.o?ha(this.o):ha(oi),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(R){xa(this,R);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)h.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())h.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),w=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Hd,c,void 0))||f||w||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,k]of h)this.g.setRequestHeader(R,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ba(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){xa(this,R)}};function xa(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Fa(o),Mr(o)}function Fa(o){o.A||(o.A=!0,Ae(o,"complete"),Ae(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ae(this,"complete"),Ae(this,"abort"),Mr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Mr(this,!0)),te.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ua(this):this.bb())},n.bb=function(){Ua(this)};function Ua(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Ke(o)!=4||o.Z()!=2)){if(o.u&&Ke(o)==4)aa(o.Ea,0,o);else if(Ae(o,"readystatechange"),Ke(o)==4){o.h=!1;try{const k=o.Z();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var f;if(f=k===0){var w=String(o.D).match(Ca)[1]||null;!w&&u.self&&u.self.location&&(w=u.self.location.protocol.slice(0,-1)),f=!zd.test(w?w.toLowerCase():"")}h=f}if(h)Ae(o,"complete"),Ae(o,"success");else{o.m=6;try{var R=2<Ke(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",Fa(o)}}finally{Mr(o)}}}}function Mr(o,c){if(o.g){Ba(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Ae(o,"ready");try{h.onreadystatechange=f}catch{}}}function Ba(o){o.I&&(u.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Ke(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Ke(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),wd(c)}};function ja(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Wd(o){const c={};o=(o.g&&2<=Ke(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(B(o[f]))continue;var h=I(o[f]);const w=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const R=c[w]||[];c[w]=R,R.push(h)}T(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Un(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function qa(o){this.Aa=0,this.i=[],this.j=new Dn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Un("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Un("baseRetryDelayMs",5e3,o),this.cb=Un("retryDelaySeedMs",1e4,o),this.Wa=Un("forwardChannelMaxRetries",2,o),this.wa=Un("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new wa(o&&o.concurrentRequestLimit),this.Da=new qd,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=qa.prototype,n.la=8,n.G=1,n.connect=function(o,c,h,f){Re(0),this.W=o,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=Ya(this,null,this.W),Fr(this)};function pi(o){if($a(o),o.G==3){var c=o.U++,h=Ge(o.I);if(Y(h,"SID",o.K),Y(h,"RID",c),Y(h,"TYPE","terminate"),Bn(o,h),c=new ot(o,o.j,c),c.L=2,c.v=Nr(Ge(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=c.v,h=!0),h||(c.g=Xa(c.j,null),c.g.ea(c.v)),c.F=Date.now(),kr(c)}Ja(o)}function xr(o){o.g&&(gi(o),o.g.cancel(),o.g=null)}function $a(o){xr(o),o.u&&(u.clearTimeout(o.u),o.u=null),Ur(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function Fr(o){if(!Aa(o.h)&&!o.s){o.s=!0;var c=o.Ga;Rn||na(),bn||(Rn(),bn=!0),Ks.add(c,o),o.B=0}}function Gd(o,c){return Ra(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Vn(v(o.Ga,o,c),Qa(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const w=new ot(this,this.j,o);let R=this.o;if(this.S&&(R?(R=m(R),E(R,this.S)):R=this.S),this.m!==null||this.O||(w.H=R,R=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Ha(this,w,c),h=Ge(this.I),Y(h,"RID",o),Y(h,"CVER",22),this.D&&Y(h,"X-HTTP-Session-Id",this.D),Bn(this,h),R&&(this.O?c="headers="+encodeURIComponent(String(Ma(R)))+"&"+c:this.m&&fi(h,this.m,R)),di(this.h,w),this.Ua&&Y(h,"TYPE","init"),this.P?(Y(h,"$req",c),Y(h,"SID","null"),w.T=!0,ci(w,h,null)):ci(w,h,c),this.G=2}}else this.G==3&&(o?za(this,o):this.i.length==0||Aa(this.h)||za(this))};function za(o,c){var h;c?h=c.l:h=o.U++;const f=Ge(o.I);Y(f,"SID",o.K),Y(f,"RID",h),Y(f,"AID",o.T),Bn(o,f),o.m&&o.o&&fi(f,o.m,o.o),h=new ot(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Ha(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),di(o.h,h),ci(h,f,c)}function Bn(o,c){o.H&&ne(o.H,function(h,f){Y(c,f,h)}),o.l&&Pa({},function(h,f){Y(c,f,h)})}function Ha(o,c,h){h=Math.min(o.i.length,h);var f=o.l?v(o.l.Na,o.l,o):null;e:{var w=o.i;let R=-1;for(;;){const k=["count="+h];R==-1?0<h?(R=w[0].g,k.push("ofs="+R)):R=0:k.push("ofs="+R);let Q=!0;for(let de=0;de<h;de++){let G=w[de].g;const ye=w[de].map;if(G-=R,0>G)R=Math.max(0,w[de].g-100),Q=!1;else try{$d(ye,k,"req"+G+"_")}catch{f&&f(ye)}}if(Q){f=k.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,f}function Wa(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Rn||na(),bn||(Rn(),bn=!0),Ks.add(c,o),o.v=0}}function mi(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Vn(v(o.Fa,o),Qa(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Ga(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Vn(v(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Re(10),xr(this),Ga(this))};function gi(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function Ga(o){o.g=new ot(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Ge(o.qa);Y(c,"RID","rpc"),Y(c,"SID",o.K),Y(c,"AID",o.T),Y(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&Y(c,"TO",o.ja),Y(c,"TYPE","xmlhttp"),Bn(o,c),o.m&&o.o&&fi(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Nr(Ge(c)),h.m=null,h.P=!0,Ea(h,o)}n.Za=function(){this.C!=null&&(this.C=null,xr(this),mi(this),Re(19))};function Ur(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function Ka(o,c){var h=null;if(o.g==c){Ur(o),gi(o),o.g=null;var f=2}else if(hi(o.h,c))h=c.D,ba(o.h,c),f=1;else return;if(o.G!=0){if(c.o)if(f==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var w=o.B;f=Sr(),Ae(f,new ga(f,h)),Fr(o)}else Wa(o);else if(w=c.s,w==3||w==0&&0<c.X||!(f==1&&Gd(o,c)||f==2&&mi(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),w){case 1:Ot(o,5);break;case 4:Ot(o,10);break;case 3:Ot(o,6);break;default:Ot(o,2)}}}function Qa(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function Ot(o,c){if(o.j.info("Error code "+c),c==2){var h=v(o.fb,o),f=o.Xa;const w=!f;f=new Nt(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Vr(f,"https"),Nr(f),w?Bd(f.toString(),h):jd(f.toString(),h)}else Re(2);o.G=0,o.l&&o.l.sa(c),Ja(o),$a(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Re(2)):(this.j.info("Failed to ping google.com"),Re(1))};function Ja(o){if(o.G=0,o.ka=[],o.l){const c=Sa(o.h);(c.length!=0||o.i.length!=0)&&(V(o.ka,c),V(o.ka,o.i),o.h.i.length=0,O(o.i),o.i.length=0),o.l.ra()}}function Ya(o,c,h){var f=h instanceof Nt?Ge(h):new Nt(h);if(f.g!="")c&&(f.g=c+"."+f.g),Dr(f,f.s);else{var w=u.location;f=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;var R=new Nt(null);f&&Vr(R,f),c&&(R.g=c),w&&Dr(R,w),h&&(R.l=h),f=R}return h=o.D,c=o.ya,h&&c&&Y(f,h,c),Y(f,"VER",o.la),Bn(o,f),f}function Xa(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new te(new Or({eb:h})):new te(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Za(){}n=Za.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Br(){}Br.prototype.g=function(o,c){return new Pe(o,c)};function Pe(o,c){_e.call(this),this.g=new qa(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!B(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!B(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Jt(this)}C(Pe,_e),Pe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pe.prototype.close=function(){pi(this.g)},Pe.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=ni(o),o=h);c.i.push(new kd(c.Ya++,o)),c.G==3&&Fr(c)},Pe.prototype.N=function(){this.g.l=null,delete this.j,pi(this.g),delete this.g,Pe.aa.N.call(this)};function ec(o){si.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}C(ec,si);function tc(){ii.call(this),this.status=1}C(tc,ii);function Jt(o){this.g=o}C(Jt,Za),Jt.prototype.ua=function(){Ae(this.g,"a")},Jt.prototype.ta=function(o){Ae(this.g,new ec(o))},Jt.prototype.sa=function(o){Ae(this.g,new tc)},Jt.prototype.ra=function(){Ae(this.g,"b")},Br.prototype.createWebChannel=Br.prototype.g,Pe.prototype.send=Pe.prototype.o,Pe.prototype.open=Pe.prototype.m,Pe.prototype.close=Pe.prototype.close,Dl=function(){return new Br},Vl=function(){return Sr()},kl=Vt,Bi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Pr.NO_ERROR=0,Pr.TIMEOUT=8,Pr.HTTP_ERROR=6,Xr=Pr,_a.COMPLETE="complete",Cl=_a,da.EventType=Cn,Cn.OPEN="a",Cn.CLOSE="b",Cn.ERROR="c",Cn.MESSAGE="d",_e.prototype.listen=_e.prototype.K,$n=da,te.prototype.listenOnce=te.prototype.L,te.prototype.getLastError=te.prototype.Ka,te.prototype.getLastErrorCode=te.prototype.Ba,te.prototype.getStatus=te.prototype.Z,te.prototype.getResponseJson=te.prototype.Oa,te.prototype.getResponseText=te.prototype.oa,te.prototype.send=te.prototype.ea,te.prototype.setWithCredentials=te.prototype.Ha,Pl=te}).apply(typeof $r<"u"?$r:typeof self<"u"?self:typeof window<"u"?window:{});const Nc="@firebase/firestore",Oc="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Te.UNAUTHENTICATED=new Te(null),Te.GOOGLE_CREDENTIALS=new Te("google-credentials-uid"),Te.FIRST_PARTY=new Te("first-party-uid"),Te.MOCK_USER=new Te("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yn="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=new ao("@firebase/firestore");function Xt(){return qt.logLevel}function N(n,...e){if(qt.logLevel<=$.DEBUG){const t=e.map(Eo);qt.debug(`Firestore (${yn}): ${n}`,...t)}}function tt(n,...e){if(qt.logLevel<=$.ERROR){const t=e.map(Eo);qt.error(`Firestore (${yn}): ${n}`,...t)}}function Et(n,...e){if(qt.logLevel<=$.WARN){const t=e.map(Eo);qt.warn(`Firestore (${yn}): ${n}`,...t)}}function Eo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Nl(n,r,t)}function Nl(n,e,t){let r=`FIRESTORE (${yn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw tt(r),new Error(r)}function K(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Nl(e,s,r)}function U(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends st{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Jg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Te.UNAUTHENTICATED))}shutdown(){}}class Yg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Xg{constructor(e){this.t=e,this.currentUser=Te.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){K(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Xe;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Xe,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},u=l=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>u(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Xe)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string",31837,{l:r}),new Ol(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return K(e===null||typeof e=="string",2055,{h:e}),new Te(e)}}class Zg{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Te.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class e_{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Zg(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Te.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Lc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class t_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ve(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){K(this.o===void 0,3512);const r=i=>{i.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Lc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(K(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Lc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=n_(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function j(n,e){return n<e?-1:n>e?1:0}function ji(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return j(r,s);{const i=Ll(),a=r_(i.encode(Mc(n,t)),i.encode(Mc(e,t)));return a!==0?a:j(r,s)}}t+=r>65535?2:1}return j(n.length,e.length)}function Mc(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function r_(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return j(n[t],e[t]);return j(n.length,e.length)}function ln(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="__name__";class Fe{constructor(e,t,r){t===void 0?t=0:t>e.length&&x(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&x(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Fe.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Fe?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Fe.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return j(e.length,t.length)}static compareSegments(e,t){const r=Fe.isNumericId(e),s=Fe.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Fe.extractNumericId(e).compare(Fe.extractNumericId(t)):ji(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return yt.fromString(e.substring(4,e.length-2))}}class J extends Fe{construct(e,t,r){return new J(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new J(t)}static emptyPath(){return new J([])}}const s_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pe extends Fe{construct(e,t,r){return new pe(e,t,r)}static isValidIdentifier(e){return s_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===xc}static keyField(){return new pe([xc])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new D(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new D(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(i(),s++)}if(i(),a)throw new D(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pe(t)}static emptyPath(){return new pe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(J.fromString(e))}static fromName(e){return new L(J.fromString(e).popFirst(5))}static empty(){return new L(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&J.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return J.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new J(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(n,e,t){if(!t)throw new D(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function i_(n,e,t,r){if(e===!0&&r===!0)throw new D(b.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Fc(n){if(!L.isDocumentKey(n))throw new D(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Uc(n){if(L.isDocumentKey(n))throw new D(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function xl(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ss(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":x(12329,{type:typeof n})}function nt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new D(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ss(n);throw new D(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(n,e){const t={typeString:n};return e&&(t.value=e),t}function gr(n,e){if(!xl(n))throw new D(b.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new D(b.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=-62135596800,jc=1e6;class X{static now(){return X.fromMillis(Date.now())}static fromDate(e){return X.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*jc);return new X(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new D(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new D(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Bc)throw new D(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/jc}_compareTo(e){return this.seconds===e.seconds?j(this.nanoseconds,e.nanoseconds):j(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:X._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(gr(e,X._jsonSchema))return new X(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Bc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}X._jsonSchemaVersion="firestore/timestamp/1.0",X._jsonSchema={type:oe("string",X._jsonSchemaVersion),seconds:oe("number"),nanoseconds:oe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static fromTimestamp(e){return new F(e)}static min(){return new F(new X(0,0))}static max(){return new F(new X(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=-1;function o_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=F.fromTimestamp(r===1e9?new X(t+1,0):new X(t,r));return new Tt(s,L.empty(),e)}function a_(n){return new Tt(n.readTime,n.key,nr)}class Tt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Tt(F.min(),L.empty(),nr)}static max(){return new Tt(F.max(),L.empty(),nr)}}function c_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:j(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class l_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vn(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==u_)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&x(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new S((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof S?t:S.resolve(t)}catch(t){return S.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):S.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):S.reject(t)}static resolve(e){return new S((t,r)=>{t(e)})}static reject(e){return new S((t,r)=>{r(e)})}static waitFor(e){return new S((t,r)=>{let s=0,i=0,a=!1;e.forEach(u=>{++s,u.next(()=>{++i,a&&i===s&&t()},l=>r(l))}),a=!0,i===s&&t()})}static or(e){let t=S.resolve(!1);for(const r of e)t=t.next(s=>s?S.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new S((r,s)=>{const i=e.length,a=new Array(i);let u=0;for(let l=0;l<i;l++){const d=l;t(e[d]).next(p=>{a[d]=p,++u,u===i&&r(a)},p=>s(p))}})}static doWhile(e,t){return new S((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function h_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function En(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Ps.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=-1;function Cs(n){return n==null}function fs(n){return n===0&&1/n==-1/0}function d_(n){return typeof n=="number"&&Number.isInteger(n)&&!fs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="";function f_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=qc(e)),e=p_(n.get(t),e);return qc(e)}function p_(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Fl:t+="";break;default:t+=i}}return t}function qc(n){return n+Fl+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ct(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ul(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t){this.comparator=e,this.root=t||fe.EMPTY}insert(e,t){return new ee(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,fe.BLACK,null,null))}remove(e){return new ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,fe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zr(this.root,e,this.comparator,!1)}getReverseIterator(){return new zr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zr(this.root,e,this.comparator,!0)}}class zr{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class fe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??fe.RED,this.left=s??fe.EMPTY,this.right=i??fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new fe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return fe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw x(43730,{key:this.key,value:this.value});if(this.right.isRed())throw x(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw x(27949);return e+(this.isRed()?0:1)}}fe.EMPTY=null,fe.RED=!0,fe.BLACK=!1;fe.EMPTY=new class{constructor(){this.size=0}get key(){throw x(57766)}get value(){throw x(16141)}get color(){throw x(16727)}get left(){throw x(29726)}get right(){throw x(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new fe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.comparator=e,this.data=new ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new zc(this.data.getIterator())}getIteratorFrom(e){return new zc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ue)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ue(this.comparator);return t.data=e,t}}class zc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.fields=e,e.sort(pe.comparator)}static empty(){return new Ce([])}unionWith(e){let t=new ue(pe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ce(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ln(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Bl("Invalid base64 string: "+i):i}}(e);return new me(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return j(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}me.EMPTY_BYTE_STRING=new me("");const m_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function It(n){if(K(!!n,39018),typeof n=="string"){let e=0;const t=m_.exec(n);if(K(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:re(n.seconds),nanos:re(n.nanos)}}function re(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function wt(n){return typeof n=="string"?me.fromBase64String(n):me.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl="server_timestamp",ql="__type__",$l="__previous_value__",zl="__local_write_time__";function wo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[ql])===null||t===void 0?void 0:t.stringValue)===jl}function ks(n){const e=n.mapValue.fields[$l];return wo(e)?ks(e):e}function rr(n){const e=It(n.mapValue.fields[zl].timestampValue);return new X(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,t,r,s,i,a,u,l,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=p}}const ps="(default)";class sr{constructor(e,t){this.projectId=e,this.database=t||ps}static empty(){return new sr("","")}get isDefaultDatabase(){return this.database===ps}isEqual(e){return e instanceof sr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl="__type__",__="__max__",Hr={mapValue:{}},Wl="__vector__",ms="value";function At(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?wo(n)?4:v_(n)?9007199254740991:y_(n)?10:11:x(28295,{value:n})}function He(n,e){if(n===e)return!0;const t=At(n);if(t!==At(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return rr(n).isEqual(rr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=It(s.timestampValue),u=It(i.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return wt(s.bytesValue).isEqual(wt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return re(s.geoPointValue.latitude)===re(i.geoPointValue.latitude)&&re(s.geoPointValue.longitude)===re(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return re(s.integerValue)===re(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=re(s.doubleValue),u=re(i.doubleValue);return a===u?fs(a)===fs(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return ln(n.arrayValue.values||[],e.arrayValue.values||[],He);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},u=i.mapValue.fields||{};if($c(a)!==$c(u))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!He(a[l],u[l])))return!1;return!0}(n,e);default:return x(52216,{left:n})}}function ir(n,e){return(n.values||[]).find(t=>He(t,e))!==void 0}function hn(n,e){if(n===e)return 0;const t=At(n),r=At(e);if(t!==r)return j(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,e.booleanValue);case 2:return function(i,a){const u=re(i.integerValue||i.doubleValue),l=re(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1}(n,e);case 3:return Hc(n.timestampValue,e.timestampValue);case 4:return Hc(rr(n),rr(e));case 5:return ji(n.stringValue,e.stringValue);case 6:return function(i,a){const u=wt(i),l=wt(a);return u.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const u=i.split("/"),l=a.split("/");for(let d=0;d<u.length&&d<l.length;d++){const p=j(u[d],l[d]);if(p!==0)return p}return j(u.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const u=j(re(i.latitude),re(a.latitude));return u!==0?u:j(re(i.longitude),re(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Wc(n.arrayValue,e.arrayValue);case 10:return function(i,a){var u,l,d,p;const y=i.fields||{},v=a.fields||{},P=(u=y[ms])===null||u===void 0?void 0:u.arrayValue,C=(l=v[ms])===null||l===void 0?void 0:l.arrayValue,O=j(((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0,((p=C==null?void 0:C.values)===null||p===void 0?void 0:p.length)||0);return O!==0?O:Wc(P,C)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Hr.mapValue&&a===Hr.mapValue)return 0;if(i===Hr.mapValue)return 1;if(a===Hr.mapValue)return-1;const u=i.fields||{},l=Object.keys(u),d=a.fields||{},p=Object.keys(d);l.sort(),p.sort();for(let y=0;y<l.length&&y<p.length;++y){const v=ji(l[y],p[y]);if(v!==0)return v;const P=hn(u[l[y]],d[p[y]]);if(P!==0)return P}return j(l.length,p.length)}(n.mapValue,e.mapValue);default:throw x(23264,{le:t})}}function Hc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return j(n,e);const t=It(n),r=It(e),s=j(t.seconds,r.seconds);return s!==0?s:j(t.nanos,r.nanos)}function Wc(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=hn(t[s],r[s]);if(i)return i}return j(t.length,r.length)}function dn(n){return qi(n)}function qi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=It(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return wt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return L.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=qi(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${qi(t.fields[a])}`;return s+"}"}(n.mapValue):x(61005,{value:n})}function Zr(n){switch(At(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ks(n);return e?16+Zr(e):16;case 5:return 2*n.stringValue.length;case 6:return wt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Zr(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Ct(r.fields,(i,a)=>{s+=i.length+Zr(a)}),s}(n.mapValue);default:throw x(13486,{value:n})}}function Gc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function $i(n){return!!n&&"integerValue"in n}function Ao(n){return!!n&&"arrayValue"in n}function Kc(n){return!!n&&"nullValue"in n}function Qc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function es(n){return!!n&&"mapValue"in n}function y_(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Hl])===null||t===void 0?void 0:t.stringValue)===Wl}function Qn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ct(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Qn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Qn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function v_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===__}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.value=e}static empty(){return new Se({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!es(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qn(t)}setAll(e){let t=pe.emptyPath(),r={},s=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=u.popLast()}a?r[u.lastSegment()]=Qn(a):s.push(u.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());es(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return He(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];es(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Ct(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Se(Qn(this.value))}}function Gl(n){const e=[];return Ct(n.fields,(t,r)=>{const s=new pe([t]);if(es(r)){const i=Gl(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Ce(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t,r,s,i,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=u}static newInvalidDocument(e){return new Ie(e,0,F.min(),F.min(),F.min(),Se.empty(),0)}static newFoundDocument(e,t,r,s){return new Ie(e,1,t,F.min(),r,s,0)}static newNoDocument(e,t){return new Ie(e,2,t,F.min(),F.min(),Se.empty(),0)}static newUnknownDocument(e,t){return new Ie(e,3,t,F.min(),F.min(),Se.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Se.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Se.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ie(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t){this.position=e,this.inclusive=t}}function Jc(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=L.comparator(L.fromName(a.referenceValue),t.key):r=hn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Yc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!He(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t="asc"){this.field=e,this.dir=t}}function E_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{}class ie extends Kl{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new I_(e,t,r):t==="array-contains"?new R_(e,r):t==="in"?new b_(e,r):t==="not-in"?new S_(e,r):t==="array-contains-any"?new P_(e,r):new ie(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new w_(e,r):new A_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(hn(t,this.value)):t!==null&&At(this.value)===At(t)&&this.matchesComparison(hn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return x(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xe extends Kl{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new xe(e,t)}matches(e){return Ql(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Ql(n){return n.op==="and"}function Jl(n){return T_(n)&&Ql(n)}function T_(n){for(const e of n.filters)if(e instanceof xe)return!1;return!0}function zi(n){if(n instanceof ie)return n.field.canonicalString()+n.op.toString()+dn(n.value);if(Jl(n))return n.filters.map(e=>zi(e)).join(",");{const e=n.filters.map(t=>zi(t)).join(",");return`${n.op}(${e})`}}function Yl(n,e){return n instanceof ie?function(r,s){return s instanceof ie&&r.op===s.op&&r.field.isEqual(s.field)&&He(r.value,s.value)}(n,e):n instanceof xe?function(r,s){return s instanceof xe&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,u)=>i&&Yl(a,s.filters[u]),!0):!1}(n,e):void x(19439)}function Xl(n){return n instanceof ie?function(t){return`${t.field.canonicalString()} ${t.op} ${dn(t.value)}`}(n):n instanceof xe?function(t){return t.op.toString()+" {"+t.getFilters().map(Xl).join(" ,")+"}"}(n):"Filter"}class I_ extends ie{constructor(e,t,r){super(e,t,r),this.key=L.fromName(r.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class w_ extends ie{constructor(e,t){super(e,"in",t),this.keys=Zl("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class A_ extends ie{constructor(e,t){super(e,"not-in",t),this.keys=Zl("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Zl(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>L.fromName(r.referenceValue))}class R_ extends ie{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ao(t)&&ir(t.arrayValue,this.value)}}class b_ extends ie{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ir(this.value.arrayValue,t)}}class S_ extends ie{constructor(e,t){super(e,"not-in",t)}matches(e){if(ir(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ir(this.value.arrayValue,t)}}class P_ extends ie{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ao(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ir(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,t=null,r=[],s=[],i=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.Pe=null}}function Xc(n,e=null,t=[],r=[],s=null,i=null,a=null){return new C_(n,e,t,r,s,i,a)}function Ro(n){const e=U(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>zi(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Cs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>dn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>dn(r)).join(",")),e.Pe=t}return e.Pe}function bo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!E_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Yl(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Yc(n.startAt,e.startAt)&&Yc(n.endAt,e.endAt)}function Hi(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,t=null,r=[],s=[],i=null,a="F",u=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function k_(n,e,t,r,s,i,a,u){return new Tn(n,e,t,r,s,i,a,u)}function So(n){return new Tn(n)}function Zc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function eh(n){return n.collectionGroup!==null}function Jn(n){const e=U(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ue(pe.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new or(i,r))}),t.has(pe.keyField().canonicalString())||e.Te.push(new or(pe.keyField(),r))}return e.Te}function je(n){const e=U(n);return e.Ie||(e.Ie=V_(e,Jn(n))),e.Ie}function V_(n,e){if(n.limitType==="F")return Xc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new or(s.field,i)});const t=n.endAt?new gs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new gs(n.startAt.position,n.startAt.inclusive):null;return Xc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Wi(n,e){const t=n.filters.concat([e]);return new Tn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Gi(n,e,t){return new Tn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Vs(n,e){return bo(je(n),je(e))&&n.limitType===e.limitType}function th(n){return`${Ro(je(n))}|lt:${n.limitType}`}function Zt(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Xl(s)).join(", ")}]`),Cs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>dn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>dn(s)).join(",")),`Target(${r})`}(je(n))}; limitType=${n.limitType})`}function Ds(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):L.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Jn(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,u,l){const d=Jc(a,u,l);return a.inclusive?d<=0:d<0}(r.startAt,Jn(r),s)||r.endAt&&!function(a,u,l){const d=Jc(a,u,l);return a.inclusive?d>=0:d>0}(r.endAt,Jn(r),s))}(n,e)}function D_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function nh(n){return(e,t)=>{let r=!1;for(const s of Jn(n)){const i=N_(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function N_(n,e,t){const r=n.field.isKeyField()?L.comparator(e.key,t.key):function(i,a,u){const l=a.data.field(i),d=u.data.field(i);return l!==null&&d!==null?hn(l,d):x(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ct(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ul(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=new ee(L.comparator);function rt(){return O_}const rh=new ee(L.comparator);function zn(...n){let e=rh;for(const t of n)e=e.insert(t.key,t);return e}function sh(n){let e=rh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Mt(){return Yn()}function ih(){return Yn()}function Yn(){return new Ht(n=>n.toString(),(n,e)=>n.isEqual(e))}const L_=new ee(L.comparator),M_=new ue(L.comparator);function z(...n){let e=M_;for(const t of n)e=e.add(t);return e}const x_=new ue(j);function F_(){return x_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fs(e)?"-0":e}}function oh(n){return{integerValue:""+n}}function U_(n,e){return d_(e)?oh(e):Po(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(){this._=void 0}}function B_(n,e,t){return n instanceof ar?function(s,i){const a={fields:{[ql]:{stringValue:jl},[zl]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&wo(i)&&(i=ks(i)),i&&(a.fields[$l]=i),{mapValue:a}}(t,e):n instanceof cr?ch(n,e):n instanceof ur?uh(n,e):function(s,i){const a=ah(s,i),u=eu(a)+eu(s.Ee);return $i(a)&&$i(s.Ee)?oh(u):Po(s.serializer,u)}(n,e)}function j_(n,e,t){return n instanceof cr?ch(n,e):n instanceof ur?uh(n,e):t}function ah(n,e){return n instanceof _s?function(r){return $i(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ar extends Ns{}class cr extends Ns{constructor(e){super(),this.elements=e}}function ch(n,e){const t=lh(e);for(const r of n.elements)t.some(s=>He(s,r))||t.push(r);return{arrayValue:{values:t}}}class ur extends Ns{constructor(e){super(),this.elements=e}}function uh(n,e){let t=lh(e);for(const r of n.elements)t=t.filter(s=>!He(s,r));return{arrayValue:{values:t}}}class _s extends Ns{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function eu(n){return re(n.integerValue||n.doubleValue)}function lh(n){return Ao(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e,t){this.field=e,this.transform=t}}function $_(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof cr&&s instanceof cr||r instanceof ur&&s instanceof ur?ln(r.elements,s.elements,He):r instanceof _s&&s instanceof _s?He(r.Ee,s.Ee):r instanceof ar&&s instanceof ar}(n.transform,e.transform)}class z_{constructor(e,t){this.version=e,this.transformResults=t}}class Le{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Le}static exists(e){return new Le(void 0,e)}static updateTime(e){return new Le(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ts(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Os{}function hh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Co(n.key,Le.none()):new _r(n.key,n.data,Le.none());{const t=n.data,r=Se.empty();let s=new ue(pe.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new kt(n.key,r,new Ce(s.toArray()),Le.none())}}function H_(n,e,t){n instanceof _r?function(s,i,a){const u=s.value.clone(),l=nu(s.fieldTransforms,i,a.transformResults);u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof kt?function(s,i,a){if(!ts(s.precondition,i))return void i.convertToUnknownDocument(a.version);const u=nu(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(dh(s)),l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Xn(n,e,t,r){return n instanceof _r?function(i,a,u,l){if(!ts(i.precondition,a))return u;const d=i.value.clone(),p=ru(i.fieldTransforms,l,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof kt?function(i,a,u,l){if(!ts(i.precondition,a))return u;const d=ru(i.fieldTransforms,l,a),p=a.data;return p.setAll(dh(i)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(y=>y.field))}(n,e,t,r):function(i,a,u){return ts(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function W_(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=ah(r.transform,s||null);i!=null&&(t===null&&(t=Se.empty()),t.set(r.field,i))}return t||null}function tu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ln(r,s,(i,a)=>$_(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class _r extends Os{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class kt extends Os{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function dh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function nu(n,e,t){const r=new Map;K(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,u=e.data.field(i.field);r.set(i.field,j_(a,u,t[s]))}return r}function ru(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,B_(i,a,e))}return r}class Co extends Os{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class G_ extends Os{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&H_(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Xn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Xn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=ih();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let u=this.applyToLocalView(a,i.mutatedFields);u=t.has(s.key)?null:u;const l=hh(a,u);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),z())}isEqual(e){return this.batchId===e.batchId&&ln(this.mutations,e.mutations,(t,r)=>tu(t,r))&&ln(this.baseMutations,e.baseMutations,(t,r)=>tu(t,r))}}class ko{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){K(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=function(){return L_}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new ko(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se,H;function Y_(n){switch(n){case b.OK:return x(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return x(15467,{code:n})}}function fh(n){if(n===void 0)return tt("GRPC error has no .code"),b.UNKNOWN;switch(n){case se.OK:return b.OK;case se.CANCELLED:return b.CANCELLED;case se.UNKNOWN:return b.UNKNOWN;case se.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case se.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case se.INTERNAL:return b.INTERNAL;case se.UNAVAILABLE:return b.UNAVAILABLE;case se.UNAUTHENTICATED:return b.UNAUTHENTICATED;case se.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case se.NOT_FOUND:return b.NOT_FOUND;case se.ALREADY_EXISTS:return b.ALREADY_EXISTS;case se.PERMISSION_DENIED:return b.PERMISSION_DENIED;case se.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case se.ABORTED:return b.ABORTED;case se.OUT_OF_RANGE:return b.OUT_OF_RANGE;case se.UNIMPLEMENTED:return b.UNIMPLEMENTED;case se.DATA_LOSS:return b.DATA_LOSS;default:return x(39323,{code:n})}}(H=se||(se={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_=new yt([4294967295,4294967295],0);function su(n){const e=Ll().encode(n),t=new Sl;return t.update(e),new Uint8Array(t.digest())}function iu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new yt([t,r],0),new yt([s,i],0)]}class Vo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Hn(`Invalid padding: ${t}`);if(r<0)throw new Hn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Hn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Hn(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=yt.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(yt.fromNumber(r)));return s.compare(X_)===1&&(s=new yt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=su(e),[r,s]=iu(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Vo(i,s,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.fe===0)return;const t=su(e),[r,s]=iu(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Hn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,yr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ls(F.min(),s,new ee(j),rt(),z())}}class yr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new yr(r,t,z(),z(),z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class ph{constructor(e,t){this.targetId=e,this.De=t}}class mh{constructor(e,t,r=me.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class ou{constructor(){this.ve=0,this.Ce=au(),this.Fe=me.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=z(),t=z(),r=z();return this.Ce.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:x(38017,{changeType:i})}}),new yr(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=au()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,K(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Z_{constructor(e){this.We=e,this.Ge=new Map,this.ze=rt(),this.je=Wr(),this.Je=Wr(),this.He=new ee(j)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:x(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((r,s)=>{this.nt(s)&&t(s)})}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const i=s.target;if(Hi(i))if(r===0){const a=new L(i.path);this.Xe(t,a,Ie.newNoDocument(a,F.min()))}else K(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const u=this._t(e),l=u?this.ut(u,e,a):1;if(l!==0){this.rt(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,d)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,u;try{a=wt(r).toUint8Array()}catch(l){if(l instanceof Bl)return Et("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new Vo(a,s,i)}catch(l){return Et(l instanceof Hn?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.fe===0?null:u}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.We.lt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(u)||(this.Xe(t,i,null),s++)}),s}Pt(e){const t=new Map;this.Ge.forEach((i,a)=>{const u=this.st(a);if(u){if(i.current&&Hi(u.target)){const l=new L(u.target.path);this.Tt(l).has(a)||this.It(a,l)||this.Xe(a,l,Ie.newNoDocument(l,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}});let r=z();this.Je.forEach((i,a)=>{let u=!0;a.forEachWhile(l=>{const d=this.st(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(i))}),this.ze.forEach((i,a)=>a.setReadTime(e));const s=new Ls(e,t,this.He,this.ze,r);return this.ze=rt(),this.je=Wr(),this.Je=Wr(),this.He=new ee(j),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new ou,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new ue(j),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new ue(j),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||N("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new ou),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Wr(){return new ee(L.comparator)}function au(){return new ee(L.comparator)}const ey={asc:"ASCENDING",desc:"DESCENDING"},ty={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ny={and:"AND",or:"OR"};class ry{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ki(n,e){return n.useProto3Json||Cs(e)?e:{value:e}}function ys(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function sy(n,e){return ys(n,e.toTimestamp())}function qe(n){return K(!!n,49232),F.fromTimestamp(function(t){const r=It(t);return new X(r.seconds,r.nanos)}(n))}function Do(n,e){return Qi(n,e).canonicalString()}function Qi(n,e){const t=function(s){return new J(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function _h(n){const e=J.fromString(n);return K(Ih(e),10190,{key:e.toString()}),e}function Ji(n,e){return Do(n.databaseId,e.path)}function Ri(n,e){const t=_h(e);if(t.get(1)!==n.databaseId.projectId)throw new D(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new D(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(vh(t))}function yh(n,e){return Do(n.databaseId,e)}function iy(n){const e=_h(n);return e.length===4?J.emptyPath():vh(e)}function Yi(n){return new J(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function vh(n){return K(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function cu(n,e,t){return{name:Ji(n,e),fields:t.value.mapValue.fields}}function oy(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:x(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,p){return d.useProto3Json?(K(p===void 0||typeof p=="string",58123),me.fromBase64String(p||"")):(K(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),me.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){const p=d.code===void 0?b.UNKNOWN:fh(d.code);return new D(p,d.message||"")}(a);t=new mh(r,s,i,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ri(n,r.document.name),i=qe(r.document.updateTime),a=r.document.createTime?qe(r.document.createTime):F.min(),u=new Se({mapValue:{fields:r.document.fields}}),l=Ie.newFoundDocument(s,i,a,u),d=r.targetIds||[],p=r.removedTargetIds||[];t=new ns(d,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ri(n,r.document),i=r.readTime?qe(r.readTime):F.min(),a=Ie.newNoDocument(s,i),u=r.removedTargetIds||[];t=new ns([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ri(n,r.document),i=r.removedTargetIds||[];t=new ns([],i,s,null)}else{if(!("filter"in e))return x(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new J_(s,i),u=r.targetId;t=new ph(u,a)}}return t}function ay(n,e){let t;if(e instanceof _r)t={update:cu(n,e.key,e.value)};else if(e instanceof Co)t={delete:Ji(n,e.key)};else if(e instanceof kt)t={update:cu(n,e.key,e.data),updateMask:gy(e.fieldMask)};else{if(!(e instanceof G_))return x(16599,{Rt:e.type});t={verify:Ji(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const u=a.transform;if(u instanceof ar)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof cr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof ur)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof _s)return{fieldPath:a.field.canonicalString(),increment:u.Ee};throw x(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:sy(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:x(27497)}(n,e.precondition)),t}function cy(n,e){return n&&n.length>0?(K(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?qe(s.updateTime):qe(i);return a.isEqual(F.min())&&(a=qe(i)),new z_(a,s.transformResults||[])}(t,e))):[]}function uy(n,e){return{documents:[yh(n,e.path)]}}function ly(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=yh(n,s);const i=function(d){if(d.length!==0)return Th(xe.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(p=>function(v){return{field:en(v.field),direction:fy(v.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=Ki(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{Vt:t,parent:s}}function hy(n){let e=iy(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){K(r===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=function(y){const v=Eh(y);return v instanceof xe&&Jl(v)?v.getFilters():[v]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(v=>function(C){return new or(tn(C.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(v))}(t.orderBy));let u=null;t.limit&&(u=function(y){let v;return v=typeof y=="object"?y.value:y,Cs(v)?null:v}(t.limit));let l=null;t.startAt&&(l=function(y){const v=!!y.before,P=y.values||[];return new gs(P,v)}(t.startAt));let d=null;return t.endAt&&(d=function(y){const v=!y.before,P=y.values||[];return new gs(P,v)}(t.endAt)),k_(e,s,a,i,u,"F",l,d)}function dy(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Eh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=tn(t.unaryFilter.field);return ie.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=tn(t.unaryFilter.field);return ie.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=tn(t.unaryFilter.field);return ie.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=tn(t.unaryFilter.field);return ie.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return x(61313);default:return x(60726)}}(n):n.fieldFilter!==void 0?function(t){return ie.create(tn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return x(58110);default:return x(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return xe.create(t.compositeFilter.filters.map(r=>Eh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return x(1026)}}(t.compositeFilter.op))}(n):x(30097,{filter:n})}function fy(n){return ey[n]}function py(n){return ty[n]}function my(n){return ny[n]}function en(n){return{fieldPath:n.canonicalString()}}function tn(n){return pe.fromServerFormat(n.fieldPath)}function Th(n){return n instanceof ie?function(t){if(t.op==="=="){if(Qc(t.value))return{unaryFilter:{field:en(t.field),op:"IS_NAN"}};if(Kc(t.value))return{unaryFilter:{field:en(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Qc(t.value))return{unaryFilter:{field:en(t.field),op:"IS_NOT_NAN"}};if(Kc(t.value))return{unaryFilter:{field:en(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:en(t.field),op:py(t.op),value:t.value}}}(n):n instanceof xe?function(t){const r=t.getFilters().map(s=>Th(s));return r.length===1?r[0]:{compositeFilter:{op:my(t.op),filters:r}}}(n):x(54877,{filter:n})}function gy(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ih(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t,r,s,i=F.min(),a=F.min(),u=me.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(e){return new pt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new pt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e){this.gt=e}}function yy(n){const e=hy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Gi(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(){this.Dn=new Ey}addToCollectionParentIndex(e,t){return this.Dn.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve(Tt.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve(Tt.min())}updateCollectionGroup(e,t,r){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}}class Ey{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ue(J.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ue(J.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},wh=41943040;class be{static withCacheSize(e){return new be(e,be.DEFAULT_COLLECTION_PERCENTILE,be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */be.DEFAULT_COLLECTION_PERCENTILE=10,be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,be.DEFAULT=new be(wh,be.DEFAULT_COLLECTION_PERCENTILE,be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),be.DISABLED=new be(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new fn(0)}static ur(){return new fn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu="LruGarbageCollector",Ty=1048576;function hu([n,e],[t,r]){const s=j(n,t);return s===0?j(e,r):s}class Iy{constructor(e){this.Tr=e,this.buffer=new ue(hu),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();hu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class wy{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){N(lu,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){En(t)?N(lu,"Ignoring IndexedDB error during garbage collection: ",t):await vn(t)}await this.Rr(3e5)})}}class Ay{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return S.resolve(Ps.ue);const r=new Iy(t);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.gr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(uu)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),uu):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,i,a,u,l,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(y=>(y>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,a=Date.now(),this.nthSequenceNumber(e,s))).next(y=>(r=y,u=Date.now(),this.removeTargets(e,r,t))).next(y=>(i=y,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(y=>(d=Date.now(),Xt()<=$.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${i} targets in `+(l-u)+`ms
	Removed ${y} documents in `+(d-l)+`ms
Total Duration: ${d-p}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:y})))}}function Ry(n,e){return new Ay(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(){this.changes=new Ht(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ie.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?S.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Xn(r.mutation,s,Ce.empty(),X.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,z()).next(()=>r))}getLocalViewOfDocuments(e,t,r=z()){const s=Mt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=zn();return i.forEach((u,l)=>{a=a.insert(u,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Mt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,z()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,s){let i=rt();const a=Yn(),u=function(){return Yn()}();return t.forEach((l,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof kt)?i=i.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Xn(p.mutation,d,p.mutation.getFieldMask(),X.now())):a.set(d.key,Ce.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var y;return u.set(d,new Sy(p,(y=a.get(d))!==null&&y!==void 0?y:null))}),u))}recalculateAndSaveOverlays(e,t){const r=Yn();let s=new ee((a,u)=>a-u),i=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(l=>{const d=t.get(l);if(d===null)return;let p=r.get(l)||Ce.empty();p=u.applyToLocalView(d,p),r.set(l,p);const y=(s.get(u.batchId)||z()).add(l);s=s.insert(u.batchId,y)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),d=l.key,p=l.value,y=ih();p.forEach(v=>{if(!i.has(v)){const P=hh(t.get(v),r.get(v));P!==null&&y.set(v,P),i=i.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return S.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return L.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):eh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):S.resolve(Mt());let u=nr,l=i;return a.next(d=>S.forEach(d,(p,y)=>(u<y.largestBatchId&&(u=y.largestBatchId),i.get(p)?S.resolve():this.remoteDocumentCache.getEntry(e,p).next(v=>{l=l.insert(p,v)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,l,d,z())).next(p=>({batchId:u,changes:sh(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(r=>{let s=zn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=zn();return this.indexManager.getCollectionParents(e,i).next(u=>S.forEach(u,l=>{const d=function(y,v){return new Tn(v,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(p=>{p.forEach((y,v)=>{a=a.insert(y,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((l,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Ie.newInvalidDocument(p)))});let u=zn();return a.forEach((l,d)=>{const p=i.get(l);p!==void 0&&Xn(p.mutation,d,Ce.empty(),X.now()),Ds(t,d)&&(u=u.insert(l,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return S.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(s){return{id:s.id,version:s.version,createTime:qe(s.createTime)}}(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(s){return{name:s.name,query:yy(s.bundledQuery),readTime:qe(s.readTime)}}(t)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(){this.overlays=new ee(L.comparator),this.kr=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Mt();return S.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.wt(e,t,i)}),S.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.kr.delete(r)),S.resolve()}getOverlaysForCollection(e,t,r){const s=Mt(),i=t.length+1,a=new L(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const l=u.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return S.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ee((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=i.get(d.largestBatchId);p===null&&(p=Mt(),i=i.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const u=Mt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=s)););return S.resolve(u)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Q_(t,r));let i=this.kr.get(t);i===void 0&&(i=z(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(){this.sessionToken=me.EMPTY_BYTE_STRING}getSessionToken(e){return S.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(){this.qr=new ue(le.Qr),this.$r=new ue(le.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new le(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new le(e,t))}Gr(e,t){e.forEach(r=>this.removeReference(r,t))}zr(e){const t=new L(new J([])),r=new le(t,e),s=new le(t,e+1),i=[];return this.$r.forEachInRange([r,s],a=>{this.Wr(a),i.push(a.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new L(new J([])),r=new le(t,e),s=new le(t,e+1);let i=z();return this.$r.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new le(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class le{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return L.comparator(e.key,t.key)||j(e.Hr,t.Hr)}static Ur(e,t){return j(e.Hr,t.Hr)||L.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new ue(le.Qr)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new K_(i,t,r,s);this.mutationQueue.push(a);for(const u of s)this.Yr=this.Yr.add(new le(u.key,i)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return S.resolve(a)}lookupMutationBatch(e,t){return S.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?Io:this.er-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new le(t,0),s=new le(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],a=>{const u=this.Zr(a.Hr);i.push(u)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ue(j);return t.forEach(s=>{const i=new le(s,0),a=new le(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],u=>{r=r.add(u.Hr)})}),S.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;L.isDocumentKey(i)||(i=i.child(""));const a=new le(new L(i),0);let u=new ue(j);return this.Yr.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(l.Hr)),!0)},a),S.resolve(this.ei(u))}ei(e){const t=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){K(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return S.forEach(t.mutations,s=>{const i=new le(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,t){const r=new le(t,0),s=this.Yr.firstAfterOrEqual(r);return S.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e){this.ni=e,this.docs=function(){return new ee(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return S.resolve(r?r.document.mutableCopy():Ie.newInvalidDocument(t))}getEntries(e,t){let r=rt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ie.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=rt();const a=t.path,u=new L(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:d,value:{document:p}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||c_(a_(p),r)<=0||(s.has(p.key)||Ds(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,t,r,s){x(9500)}ri(e,t){return S.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Oy(this)}getSize(e){return S.resolve(this.size)}}class Oy extends by{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)}),S.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e){this.persistence=e,this.ii=new Ht(t=>Ro(t),bo),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.si=0,this.oi=new No,this.targetCount=0,this._i=fn.ar()}forEachTarget(e,t){return this.ii.forEach((r,s)=>t(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),S.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new fn(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.hr(t),S.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ii.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)}),S.waitFor(i).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return S.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),S.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),S.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return S.resolve(r)}containsKey(e,t){return S.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,t){this.ai={},this.overlays={},this.ui=new Ps(0),this.ci=!1,this.ci=!0,this.li=new Vy,this.referenceDelegate=e(this),this.hi=new Ly(this),this.indexManager=new vy,this.remoteDocumentCache=function(s){return new Ny(s)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new _y(t),this.Ti=new Cy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ky,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new Dy(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){N("MemoryPersistence","Starting transaction:",e);const s=new My(this.ui.next());return this.referenceDelegate.Ii(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,t){return S.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,t)))}}class My extends l_{constructor(e){super(),this.currentSequenceNumber=e}}class Oo{constructor(e){this.persistence=e,this.Ai=new No,this.Ri=null}static Vi(e){return new Oo(e)}get mi(){if(this.Ri)return this.Ri;throw x(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),S.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),S.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(s=>this.mi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.mi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.mi,r=>{const s=L.fromPath(r);return this.fi(e,s).next(i=>{i||t.removeEntry(s,F.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return S.or([()=>S.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class vs{constructor(e,t){this.persistence=e,this.gi=new Ht(r=>f_(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Ry(this,t)}static Vi(e,t){return new vs(e,t)}Ii(){}di(e){return S.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}yr(e){let t=0;return this.gr(e,r=>{t++}).next(()=>t)}gr(e,t){return S.forEach(this.gi,(r,s)=>this.Sr(e,r,s).next(i=>i?S.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,a=>this.Sr(e,a,t).next(u=>{u||(r++,i.removeEntry(a,F.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),S.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),S.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),S.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),S.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Zr(e.data.value)),t}Sr(e,t,r){return S.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return S.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=z(),s=z();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Lo(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return mf()?8:h_(we())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ps(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ys(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new xy;return this.ws(e,t,a).next(u=>{if(i.result=u,this.Rs)return this.Ss(e,t,a,u.size)})}).next(()=>i.result)}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(Xt()<=$.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Zt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),S.resolve()):(Xt()<=$.DEBUG&&N("QueryEngine","Query:",Zt(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Xt()<=$.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Zt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,je(t))):S.resolve())}ps(e,t){if(Zc(t))return S.resolve(null);let r=je(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Gi(t,null,"F"),r=je(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=z(...i);return this.gs.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.bs(t,u);return this.Ds(t,d,a,l.readTime)?this.ps(e,Gi(t,null,"F")):this.vs(e,d,t,l)}))})))}ys(e,t,r,s){return Zc(t)||s.isEqual(F.min())?S.resolve(null):this.gs.getDocuments(e,r).next(i=>{const a=this.bs(t,i);return this.Ds(t,a,r,s)?S.resolve(null):(Xt()<=$.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Zt(t)),this.vs(e,a,t,o_(s,nr)).next(u=>u))})}bs(e,t){let r=new ue(nh(e));return t.forEach((s,i)=>{Ds(e,i)&&(r=r.add(i))}),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,r){return Xt()<=$.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Zt(t)),this.gs.getDocumentsMatchingQuery(e,t,Tt.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo="LocalStore",Uy=3e8;class By{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new ee(j),this.Ms=new Ht(i=>Ro(i),bo),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Py(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function jy(n,e,t,r){return new By(n,e,t,r)}async function Rh(n,e){const t=U(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],u=[];let l=z();for(const d of s){a.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}for(const d of i){u.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(r,l).next(d=>({Bs:d,removedBatchIds:a,addedBatchIds:u}))})})}function qy(n,e){const t=U(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return function(u,l,d,p){const y=d.batch,v=y.keys();let P=S.resolve();return v.forEach(C=>{P=P.next(()=>p.getEntry(l,C)).next(O=>{const V=d.docVersions.get(C);K(V!==null,48541),O.version.compareTo(V)<0&&(y.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),p.addEntry(O)))})}),P.next(()=>u.mutationQueue.removeMutationBatch(l,y))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let l=z();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(l=l.add(u.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function bh(n){const e=U(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function $y(n,e){const t=U(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const u=[];e.targetChanges.forEach((p,y)=>{const v=s.get(y);if(!v)return;u.push(t.hi.removeMatchingKeys(i,p.removedDocuments,y).next(()=>t.hi.addMatchingKeys(i,p.addedDocuments,y)));let P=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(y)!==null?P=P.withResumeToken(me.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):p.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(p.resumeToken,r)),s=s.insert(y,P),function(O,V,W){return O.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=Uy?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(v,P,p)&&u.push(t.hi.updateTargetData(i,P))});let l=rt(),d=z();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))}),u.push(zy(i,a,e.documentUpdates).next(p=>{l=p.Ls,d=p.ks})),!r.isEqual(F.min())){const p=t.hi.getLastRemoteSnapshotVersion(i).next(y=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,r));u.push(p)}return S.waitFor(u).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,d)).next(()=>l)}).then(i=>(t.Fs=s,i))}function zy(n,e,t){let r=z(),s=z();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=rt();return t.forEach((u,l)=>{const d=i.get(u);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),l.isNoDocument()&&l.version.isEqual(F.min())?(e.removeEntry(u,l.readTime),a=a.insert(u,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(u,l)):N(Mo,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",l.version)}),{Ls:a,ks:s}})}function Hy(n,e){const t=U(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Io),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Wy(n,e){const t=U(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.hi.getTargetData(r,e).next(i=>i?(s=i,S.resolve(s)):t.hi.allocateTargetId(r).next(a=>(s=new pt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r})}async function Xi(n,e,t){const r=U(n),s=r.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!En(a))throw a;N(Mo,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function du(n,e,t){const r=U(n);let s=F.min(),i=z();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,p){const y=U(l),v=y.Ms.get(p);return v!==void 0?S.resolve(y.Fs.get(v)):y.hi.getTargetData(d,p)}(r,a,je(e)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,u.targetId).next(l=>{i=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:F.min(),t?i:z())).next(u=>(Gy(r,D_(e),u),{documents:u,qs:i})))}function Gy(n,e,t){let r=n.xs.get(e)||F.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.xs.set(e,r)}class fu{constructor(){this.activeTargetIds=F_()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ky{constructor(){this.Fo=new fu,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new fu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu="ConnectivityMonitor";class mu{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){N(pu,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){N(pu,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gr=null;function Zi(){return Gr===null?Gr=function(){return 268435456+Math.round(2147483648*Math.random())}():Gr++,"0x"+Gr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi="RestConnection",Jy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Yy{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===ps?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=Zi(),u=this.Go(e,t.toUriEncodedString());N(bi,`Sending RPC '${e}' ${a}:`,u,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);const{host:d}=new URL(u),p=mn(d);return this.jo(e,u,l,r,p).then(y=>(N(bi,`Received RPC '${e}' ${a}: `,y),y),y=>{throw Et(bi,`RPC '${e}' ${a} failed with error: `,y,"url: ",u,"request:",r),y})}Jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}zo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+yn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Go(e,t){const r=Jy[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee="WebChannelConnection";class Zy extends Yy{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,i){const a=Zi();return new Promise((u,l)=>{const d=new Pl;d.setWithCredentials(!0),d.listenOnce(Cl.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Xr.NO_ERROR:const y=d.getResponseJson();N(Ee,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(y)),u(y);break;case Xr.TIMEOUT:N(Ee,`RPC '${e}' ${a} timed out`),l(new D(b.DEADLINE_EXCEEDED,"Request time out"));break;case Xr.HTTP_ERROR:const v=d.getStatus();if(N(Ee,`RPC '${e}' ${a} failed with status:`,v,"response text:",d.getResponseText()),v>0){let P=d.getResponseJson();Array.isArray(P)&&(P=P[0]);const C=P==null?void 0:P.error;if(C&&C.status&&C.message){const O=function(W){const B=W.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(B)>=0?B:b.UNKNOWN}(C.status);l(new D(O,C.message))}else l(new D(b.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new D(b.UNAVAILABLE,"Connection failed."));break;default:x(9055,{c_:e,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{N(Ee,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(s);N(Ee,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",p,r,15)})}P_(e,t,r){const s=Zi(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Dl(),u=Vl(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const p=i.join("");N(Ee,`Creating RPC '${e}' stream ${s}: ${p}`,l);const y=a.createWebChannel(p,l);this.T_(y);let v=!1,P=!1;const C=new Xy({Ho:V=>{P?N(Ee,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(v||(N(Ee,`Opening RPC '${e}' stream ${s} transport.`),y.open(),v=!0),N(Ee,`RPC '${e}' stream ${s} sending:`,V),y.send(V))},Yo:()=>y.close()}),O=(V,W,B)=>{V.listen(W,q=>{try{B(q)}catch(Z){setTimeout(()=>{throw Z},0)}})};return O(y,$n.EventType.OPEN,()=>{P||(N(Ee,`RPC '${e}' stream ${s} transport opened.`),C.s_())}),O(y,$n.EventType.CLOSE,()=>{P||(P=!0,N(Ee,`RPC '${e}' stream ${s} transport closed`),C.__(),this.I_(y))}),O(y,$n.EventType.ERROR,V=>{P||(P=!0,Et(Ee,`RPC '${e}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),C.__(new D(b.UNAVAILABLE,"The operation could not be completed")))}),O(y,$n.EventType.MESSAGE,V=>{var W;if(!P){const B=V.data[0];K(!!B,16349);const q=B,Z=(q==null?void 0:q.error)||((W=q[0])===null||W===void 0?void 0:W.error);if(Z){N(Ee,`RPC '${e}' stream ${s} received error:`,Z);const ke=Z.status;let ne=function(_){const E=se[_];if(E!==void 0)return fh(E)}(ke),T=Z.message;ne===void 0&&(ne=b.INTERNAL,T="Unknown error status: "+ke+" with message "+Z.message),P=!0,C.__(new D(ne,T)),y.close()}else N(Ee,`RPC '${e}' stream ${s} received:`,B),C.a_(B)}}),O(u,kl.STAT_EVENT,V=>{V.stat===Bi.PROXY?N(Ee,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===Bi.NOPROXY&&N(Ee,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.o_()},0),C}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function Si(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(n){return new ry(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu="PersistentStream";class Ph{constructor(e,t,r,s,i,a,u,l){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Sh(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===b.RESOURCE_EXHAUSTED?(tt(t.toString()),tt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===t&&this.W_(r,s)},r=>{e(()=>{const s=new D(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return N(gu,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(N(gu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ev extends Ph{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=oy(this.serializer,e),r=function(i){if(!("targetChange"in i))return F.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?qe(a.readTime):F.min()}(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Yi(this.serializer),t.addTarget=function(i,a){let u;const l=a.target;if(u=Hi(l)?{documents:uy(i,l)}:{query:ly(i,l).Vt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=gh(i,a.resumeToken);const d=Ki(i,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(F.min())>0){u.readTime=ys(i,a.snapshotVersion.toTimestamp());const d=Ki(i,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);const r=dy(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Yi(this.serializer),t.removeTarget=e,this.k_(t)}}class tv extends Ph{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return K(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,K(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){K(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=cy(e.writeResults,e.commitTime),r=qe(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Yi(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>ay(this.serializer,r))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{}class rv extends nv{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new D(b.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,Qi(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(b.UNKNOWN,i.toString())})}Jo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Jo(e,Qi(t,r),s,a,u,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new D(b.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class sv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(tt(t),this._a=!1):N("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="RemoteStore";class iv{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(a=>{r.enqueueAndForget(async()=>{Wt(this)&&(N($t,"Restarting streams for network reachability change."),await async function(l){const d=U(l);d.Ia.add(4),await vr(d),d.Aa.set("Unknown"),d.Ia.delete(4),await xs(d)}(this))})}),this.Aa=new sv(r,s)}}async function xs(n){if(Wt(n))for(const e of n.da)await e(!0)}async function vr(n){for(const e of n.da)await e(!1)}function Ch(n,e){const t=U(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Bo(t)?Uo(t):In(t).x_()&&Fo(t,e))}function xo(n,e){const t=U(n),r=In(t);t.Ta.delete(e),r.x_()&&kh(t,e),t.Ta.size===0&&(r.x_()?r.B_():Wt(t)&&t.Aa.set("Unknown"))}function Fo(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}In(n).H_(e)}function kh(n,e){n.Ra.$e(e),In(n).Y_(e)}function Uo(n){n.Ra=new Z_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),In(n).start(),n.Aa.aa()}function Bo(n){return Wt(n)&&!In(n).M_()&&n.Ta.size>0}function Wt(n){return U(n).Ia.size===0}function Vh(n){n.Ra=void 0}async function ov(n){n.Aa.set("Online")}async function av(n){n.Ta.forEach((e,t)=>{Fo(n,e)})}async function cv(n,e){Vh(n),Bo(n)?(n.Aa.la(e),Uo(n)):n.Aa.set("Unknown")}async function uv(n,e,t){if(n.Aa.set("Online"),e instanceof mh&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const u of i.targetIds)s.Ta.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.Ta.delete(u),s.Ra.removeTarget(u))}(n,e)}catch(r){N($t,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Es(n,r)}else if(e instanceof ns?n.Ra.Ye(e):e instanceof ph?n.Ra.it(e):n.Ra.et(e),!t.isEqual(F.min()))try{const r=await bh(n.localStore);t.compareTo(r)>=0&&await function(i,a){const u=i.Ra.Pt(a);return u.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const p=i.Ta.get(d);p&&i.Ta.set(d,p.withResumeToken(l.resumeToken,a))}}),u.targetMismatches.forEach((l,d)=>{const p=i.Ta.get(l);if(!p)return;i.Ta.set(l,p.withResumeToken(me.EMPTY_BYTE_STRING,p.snapshotVersion)),kh(i,l);const y=new pt(p.target,l,d,p.sequenceNumber);Fo(i,y)}),i.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){N($t,"Failed to raise snapshot:",r),await Es(n,r)}}async function Es(n,e,t){if(!En(e))throw e;n.Ia.add(1),await vr(n),n.Aa.set("Offline"),t||(t=()=>bh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N($t,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await xs(n)})}function Dh(n,e){return e().catch(t=>Es(n,t,e))}async function Fs(n){const e=U(n),t=Rt(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Io;for(;lv(e);)try{const s=await Hy(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,hv(e,s)}catch(s){await Es(e,s)}Nh(e)&&Oh(e)}function lv(n){return Wt(n)&&n.Pa.length<10}function hv(n,e){n.Pa.push(e);const t=Rt(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function Nh(n){return Wt(n)&&!Rt(n).M_()&&n.Pa.length>0}function Oh(n){Rt(n).start()}async function dv(n){Rt(n).na()}async function fv(n){const e=Rt(n);for(const t of n.Pa)e.X_(t.mutations)}async function pv(n,e,t){const r=n.Pa.shift(),s=ko.from(r,e,t);await Dh(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Fs(n)}async function mv(n,e){e&&Rt(n).Z_&&await async function(r,s){if(function(a){return Y_(a)&&a!==b.ABORTED}(s.code)){const i=r.Pa.shift();Rt(r).N_(),await Dh(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Fs(r)}}(n,e),Nh(n)&&Oh(n)}async function _u(n,e){const t=U(n);t.asyncQueue.verifyOperationInProgress(),N($t,"RemoteStore received new credentials");const r=Wt(t);t.Ia.add(3),await vr(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await xs(t)}async function gv(n,e){const t=U(n);e?(t.Ia.delete(2),await xs(t)):e||(t.Ia.add(2),await vr(t),t.Aa.set("Unknown"))}function In(n){return n.Va||(n.Va=function(t,r,s){const i=U(t);return i.ia(),new ev(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:ov.bind(null,n),e_:av.bind(null,n),n_:cv.bind(null,n),J_:uv.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),Bo(n)?Uo(n):n.Aa.set("Unknown")):(await n.Va.stop(),Vh(n))})),n.Va}function Rt(n){return n.ma||(n.ma=function(t,r,s){const i=U(t);return i.ia(),new tv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:dv.bind(null,n),n_:mv.bind(null,n),ea:fv.bind(null,n),ta:pv.bind(null,n)}),n.da.push(async e=>{e?(n.ma.N_(),await Fs(n)):(await n.ma.stop(),n.Pa.length>0&&(N($t,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Xe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,u=new jo(e,t,a,s,i);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qo(n,e){if(tt("AsyncQueue",`${e}: ${n}`),En(n))return new D(b.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{static emptySet(e){return new an(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||L.comparator(t.key,r.key):(t,r)=>L.comparator(t.key,r.key),this.keyedMap=zn(),this.sortedSet=new ee(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof an)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new an;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(){this.fa=new ee(L.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):x(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,r)=>{e.push(r)}),e}}class pn{constructor(e,t,r,s,i,a,u,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new pn(e,t,an.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class yv{constructor(){this.queries=vu(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=U(t),i=s.queries;s.queries=vu(),i.forEach((a,u)=>{for(const l of u.wa)l.onError(r)})})(this,new D(b.ABORTED,"Firestore shutting down"))}}function vu(){return new Ht(n=>th(n),Vs)}async function Lh(n,e){const t=U(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new _v,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const u=qo(a,`Initialization of query '${Zt(e.query)}' failed`);return void e.onError(u)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&$o(t)}async function Mh(n,e){const t=U(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function vv(n,e){const t=U(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const u of a.wa)u.Ca(s)&&(r=!0);a.ya=s}}r&&$o(t)}function Ev(n,e,t){const r=U(n),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(t);r.queries.delete(e)}function $o(n){n.Da.forEach(e=>{e.next()})}var eo,Eu;(Eu=eo||(eo={})).Fa="default",Eu.Cache="cache";class xh{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new pn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=pn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==eo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e){this.key=e}}class Uh{constructor(e){this.key=e}}class Tv{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=z(),this.mutatedKeys=z(),this.Xa=nh(e),this.eu=new an(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new yu,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,u=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,y)=>{const v=s.get(p),P=Ds(this.query,y)?y:null,C=!!v&&this.mutatedKeys.has(v.key),O=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let V=!1;v&&P?v.data.isEqual(P.data)?C!==O&&(r.track({type:3,doc:P}),V=!0):this.iu(v,P)||(r.track({type:2,doc:P}),V=!0,(l&&this.Xa(P,l)>0||d&&this.Xa(P,d)<0)&&(u=!0)):!v&&P?(r.track({type:0,doc:P}),V=!0):v&&!P&&(r.track({type:1,doc:v}),V=!0,(l||d)&&(u=!0)),V&&(P?(a=a.add(P),i=O?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{eu:a,ru:r,Ds:u,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort((p,y)=>function(P,C){const O=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x(20277,{At:V})}};return O(P)-O(C)}(p.type,y.type)||this.Xa(p.doc,y.doc)),this.su(r),s=s!=null&&s;const u=t&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,d=l!==this.Ya;return this.Ya=l,a.length!==0||d?{snapshot:new pn(this.query,e.eu,i,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:u}:{_u:u}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new yu,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=z(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const t=[];return e.forEach(r=>{this.Za.has(r)||t.push(new Uh(r))}),this.Za.forEach(r=>{e.has(r)||t.push(new Fh(r))}),t}uu(e){this.Ha=e.qs,this.Za=z();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return pn.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const zo="SyncEngine";class Iv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class wv{constructor(e){this.key=e,this.lu=!1}}class Av{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Ht(u=>th(u),Vs),this.Tu=new Map,this.Iu=new Set,this.du=new ee(L.comparator),this.Eu=new Map,this.Au=new No,this.Ru={},this.Vu=new Map,this.mu=fn.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Rv(n,e,t=!0){const r=Hh(n);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await Bh(r,e,t,!0),s}async function bv(n,e){const t=Hh(n);await Bh(t,e,!0,!1)}async function Bh(n,e,t,r){const s=await Wy(n.localStore,je(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let u;return r&&(u=await Sv(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Ch(n.remoteStore,s),u}async function Sv(n,e,t,r,s){n.gu=(y,v,P)=>async function(O,V,W,B){let q=V.view.nu(W);q.Ds&&(q=await du(O.localStore,V.query,!1).then(({documents:T})=>V.view.nu(T,q)));const Z=B&&B.targetChanges.get(V.targetId),ke=B&&B.targetMismatches.get(V.targetId)!=null,ne=V.view.applyChanges(q,O.isPrimaryClient,Z,ke);return Iu(O,V.targetId,ne._u),ne.snapshot}(n,y,v,P);const i=await du(n.localStore,e,!0),a=new Tv(e,i.qs),u=a.nu(i.documents),l=yr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(u,n.isPrimaryClient,l);Iu(n,t,d._u);const p=new Iv(e,t,a);return n.Pu.set(e,p),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),d.snapshot}async function Pv(n,e,t){const r=U(n),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter(a=>!Vs(a,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Xi(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&xo(r.remoteStore,s.targetId),to(r,s.targetId)}).catch(vn)):(to(r,s.targetId),await Xi(r.localStore,s.targetId,!0))}async function Cv(n,e){const t=U(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),xo(t.remoteStore,r.targetId))}async function kv(n,e,t){const r=xv(n);try{const s=await function(a,u){const l=U(a),d=X.now(),p=u.reduce((P,C)=>P.add(C.key),z());let y,v;return l.persistence.runTransaction("Locally write mutations","readwrite",P=>{let C=rt(),O=z();return l.Os.getEntries(P,p).next(V=>{C=V,C.forEach((W,B)=>{B.isValidDocument()||(O=O.add(W))})}).next(()=>l.localDocuments.getOverlayedDocuments(P,C)).next(V=>{y=V;const W=[];for(const B of u){const q=W_(B,y.get(B.key).overlayedDocument);q!=null&&W.push(new kt(B.key,q,Gl(q.value.mapValue),Le.exists(!0)))}return l.mutationQueue.addMutationBatch(P,d,W,u)}).next(V=>{v=V;const W=V.applyToLocalDocumentSet(y,O);return l.documentOverlayCache.saveOverlays(P,V.batchId,W)})}).then(()=>({batchId:v.batchId,changes:sh(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,l){let d=a.Ru[a.currentUser.toKey()];d||(d=new ee(j)),d=d.insert(u,l),a.Ru[a.currentUser.toKey()]=d}(r,s.batchId,t),await Er(r,s.changes),await Fs(r.remoteStore)}catch(s){const i=qo(s,"Failed to persist write");t.reject(i)}}async function jh(n,e){const t=U(n);try{const r=await $y(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Eu.get(i);a&&(K(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?K(a.lu,14607):s.removedDocuments.size>0&&(K(a.lu,42227),a.lu=!1))}),await Er(t,r,e)}catch(r){await vn(r)}}function Tu(n,e,t){const r=U(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach((i,a)=>{const u=a.view.va(e);u.snapshot&&s.push(u.snapshot)}),function(a,u){const l=U(a);l.onlineState=u;let d=!1;l.queries.forEach((p,y)=>{for(const v of y.wa)v.va(u)&&(d=!0)}),d&&$o(l)}(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Vv(n,e,t){const r=U(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new ee(L.comparator);a=a.insert(i,Ie.newNoDocument(i,F.min()));const u=z().add(i),l=new Ls(F.min(),new Map,new ee(j),a,u);await jh(r,l),r.du=r.du.remove(i),r.Eu.delete(e),Ho(r)}else await Xi(r.localStore,e,!1).then(()=>to(r,e,t)).catch(vn)}async function Dv(n,e){const t=U(n),r=e.batch.batchId;try{const s=await qy(t.localStore,e);$h(t,r,null),qh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Er(t,s)}catch(s){await vn(s)}}async function Nv(n,e,t){const r=U(n);try{const s=await function(a,u){const l=U(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return l.mutationQueue.lookupMutationBatch(d,u).next(y=>(K(y!==null,37113),p=y.keys(),l.mutationQueue.removeMutationBatch(d,y))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,p,u)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>l.localDocuments.getDocuments(d,p))})}(r.localStore,e);$h(r,e,t),qh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Er(r,s)}catch(s){await vn(s)}}function qh(n,e){(n.Vu.get(e)||[]).forEach(t=>{t.resolve()}),n.Vu.delete(e)}function $h(n,e,t){const r=U(n);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function to(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(r=>{n.Au.containsKey(r)||zh(n,r)})}function zh(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(xo(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Ho(n))}function Iu(n,e,t){for(const r of t)r instanceof Fh?(n.Au.addReference(r.key,e),Ov(n,r)):r instanceof Uh?(N(zo,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||zh(n,r.key)):x(19791,{yu:r})}function Ov(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(N(zo,"New document in limbo: "+t),n.Iu.add(r),Ho(n))}function Ho(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new L(J.fromString(e)),r=n.mu.next();n.Eu.set(r,new wv(t)),n.du=n.du.insert(t,r),Ch(n.remoteStore,new pt(je(So(t.path)),r,"TargetPurposeLimboResolution",Ps.ue))}}async function Er(n,e,t){const r=U(n),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach((u,l)=>{a.push(r.gu(l,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const y=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(l.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(l.targetId,y?"current":"not-current")}if(d){s.push(d);const y=Lo.Es(l.targetId,d);i.push(y)}}))}),await Promise.all(a),r.hu.J_(s),await async function(l,d){const p=U(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>S.forEach(d,v=>S.forEach(v.Is,P=>p.persistence.referenceDelegate.addReference(y,v.targetId,P)).next(()=>S.forEach(v.ds,P=>p.persistence.referenceDelegate.removeReference(y,v.targetId,P)))))}catch(y){if(!En(y))throw y;N(Mo,"Failed to update sequence numbers: "+y)}for(const y of d){const v=y.targetId;if(!y.fromCache){const P=p.Fs.get(v),C=P.snapshotVersion,O=P.withLastLimboFreeSnapshotVersion(C);p.Fs=p.Fs.insert(v,O)}}}(r.localStore,i))}async function Lv(n,e){const t=U(n);if(!t.currentUser.isEqual(e)){N(zo,"User change. New user:",e.toKey());const r=await Rh(t.localStore,e);t.currentUser=e,function(i,a){i.Vu.forEach(u=>{u.forEach(l=>{l.reject(new D(b.CANCELLED,a))})}),i.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Er(t,r.Bs)}}function Mv(n,e){const t=U(n),r=t.Eu.get(e);if(r&&r.lu)return z().add(r.key);{let s=z();const i=t.Tu.get(e);if(!i)return s;for(const a of i){const u=t.Pu.get(a);s=s.unionWith(u.view.tu)}return s}}function Hh(n){const e=U(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=jh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Mv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Vv.bind(null,e),e.hu.J_=vv.bind(null,e.eventManager),e.hu.pu=Ev.bind(null,e.eventManager),e}function xv(n){const e=U(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Dv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Nv.bind(null,e),e}class Ts{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ms(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return jy(this.persistence,new Fy,e.initialUser,this.serializer)}Du(e){return new Ah(Oo.Vi,this.serializer)}bu(e){return new Ky}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ts.provider={build:()=>new Ts};class Fv extends Ts{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){K(this.persistence.referenceDelegate instanceof vs,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new wy(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?be.withCacheSize(this.cacheSizeBytes):be.DEFAULT;return new Ah(r=>vs.Vi(r,t),this.serializer)}}class no{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Tu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Lv.bind(null,this.syncEngine),await gv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yv}()}createDatastore(e){const t=Ms(e.databaseInfo.databaseId),r=function(i){return new Zy(i)}(e.databaseInfo);return function(i,a,u,l){return new rv(i,a,u,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,u){return new iv(r,s,i,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>Tu(this.syncEngine,t,0),function(){return mu.C()?new mu:new Qy}())}createSyncEngine(e,t){return function(s,i,a,u,l,d,p){const y=new Av(s,i,a,u,l,d);return p&&(y.fu=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=U(s);N($t,"RemoteStore shutting down."),i.Ia.add(5),await vr(i),i.Ea.shutdown(),i.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}no.provider={build:()=>new no};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):tt("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="FirestoreClient";class Uv{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Te.UNAUTHENTICATED,this.clientId=To.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{N(bt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(N(bt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=qo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Pi(n,e){n.asyncQueue.verifyOperationInProgress(),N(bt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Rh(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>{Et("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{N("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{Et("Terminating Firestore due to IndexedDb database deletion failed",s)})}),n._offlineComponents=e}async function wu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Bv(n);N(bt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>_u(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>_u(e.remoteStore,s)),n._onlineComponents=e}async function Bv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(bt,"Using user provided OfflineComponentProvider");try{await Pi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===b.FAILED_PRECONDITION||s.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Et("Error using user provided cache. Falling back to memory cache: "+t),await Pi(n,new Ts)}}else N(bt,"Using default OfflineComponentProvider"),await Pi(n,new Fv(void 0));return n._offlineComponents}async function Gh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(bt,"Using user provided OnlineComponentProvider"),await wu(n,n._uninitializedComponentsProvider._online)):(N(bt,"Using default OnlineComponentProvider"),await wu(n,new no))),n._onlineComponents}function jv(n){return Gh(n).then(e=>e.syncEngine)}async function Kh(n){const e=await Gh(n),t=e.eventManager;return t.onListen=Rv.bind(null,e.syncEngine),t.onUnlisten=Pv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=bv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Cv.bind(null,e.syncEngine),t}function qv(n,e,t={}){const r=new Xe;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,u,l,d){const p=new Wh({next:v=>{p.Ou(),a.enqueueAndForget(()=>Mh(i,y));const P=v.docs.has(u);!P&&v.fromCache?d.reject(new D(b.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&v.fromCache&&l&&l.source==="server"?d.reject(new D(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(v)},error:v=>d.reject(v)}),y=new xh(So(u.path),p,{includeMetadataChanges:!0,ka:!0});return Lh(i,y)}(await Kh(n),n.asyncQueue,e,t,r)),r.promise}function $v(n,e,t={}){const r=new Xe;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,u,l,d){const p=new Wh({next:v=>{p.Ou(),a.enqueueAndForget(()=>Mh(i,y)),v.fromCache&&l.source==="server"?d.reject(new D(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(v)},error:v=>d.reject(v)}),y=new xh(u,p,{includeMetadataChanges:!0,ka:!0});return Lh(i,y)}(await Kh(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="firestore.googleapis.com",Ru=!0;class bu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new D(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Jh,this.ssl=Ru}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Ru;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=wh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ty)throw new D(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}i_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Qh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new D(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new D(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new D(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Us{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new D(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Jg;switch(r.type){case"firstParty":return new e_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Au.get(t);r&&(N("ComponentProvider","Removing Datastore"),Au.delete(t),r.terminate())}(this),Promise.resolve()}}function zv(n,e,t,r={}){var s;n=nt(n,Us);const i=mn(e),a=n._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;i&&(Uu(`https://${l}`),Bu("Firestore",!0)),a.host!==Jh&&a.host!==l&&Et("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:l,ssl:i,emulatorOptions:r});if(!Ft(d,u)&&(n._setSettings(d),r.mockUserToken)){let p,y;if(typeof r.mockUserToken=="string")p=r.mockUserToken,y=Te.MOCK_USER;else{p=of(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new D(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Te(v)}n._authCredentials=new Yg(new Ol(p,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Gt(this.firestore,e,this._query)}}class ae{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ae(this.firestore,e,this._key)}toJSON(){return{type:ae._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(gr(t,ae._jsonSchema))return new ae(e,r||null,new L(J.fromString(t.referencePath)))}}ae._jsonSchemaVersion="firestore/documentReference/1.0",ae._jsonSchema={type:oe("string",ae._jsonSchemaVersion),referencePath:oe("string")};class vt extends Gt{constructor(e,t,r){super(e,t,So(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ae(this.firestore,null,new L(e))}withConverter(e){return new vt(this.firestore,e,this._path)}}function Hv(n,e,...t){if(n=he(n),Ml("collection","path",e),n instanceof Us){const r=J.fromString(e,...t);return Uc(r),new vt(n,null,r)}{if(!(n instanceof ae||n instanceof vt))throw new D(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(e,...t));return Uc(r),new vt(n.firestore,null,r)}}function Bs(n,e,...t){if(n=he(n),arguments.length===1&&(e=To.newId()),Ml("doc","path",e),n instanceof Us){const r=J.fromString(e,...t);return Fc(r),new ae(n,null,new L(r))}{if(!(n instanceof ae||n instanceof vt))throw new D(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(e,...t));return Fc(r),new ae(n.firestore,n instanceof vt?n.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su="AsyncQueue";class Pu{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Sh(this,"async_queue_retry"),this.oc=()=>{const r=Si();r&&N(Su,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Si();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Si();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new Xe;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!En(e))throw e;N(Su,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,tt("INTERNAL UNHANDLED ERROR: ",Cu(r)),r}).then(r=>(this.nc=!1,r))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=jo.createAndSchedule(this,e,t,r,i=>this.lc(i));return this.ec.push(s),s}ac(){this.tc&&x(47125,{hc:Cu(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Cu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class wn extends Us{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Pu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Pu(e),this._firestoreClient=void 0,await e}}}function Wv(n,e){const t=typeof n=="object"?n:zu(),r=typeof n=="string"?n:ps,s=uo(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=rf("firestore");i&&zv(s,...i)}return s}function Wo(n){if(n._terminated)throw new D(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Gv(n),n._firestoreClient}function Gv(n){var e,t,r;const s=n._freezeSettings(),i=function(u,l,d,p){return new g_(u,l,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Qh(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Uv(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(u){const l=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this._byteString=e}static fromBase64String(e){try{return new De(me.fromBase64String(e))}catch(t){throw new D(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new De(me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:De._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(gr(e,De._jsonSchema))return De.fromBase64String(e.bytes)}}De._jsonSchemaVersion="firestore/bytes/1.0",De._jsonSchema={type:oe("string",De._jsonSchemaVersion),bytes:oe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new D(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new D(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new D(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return j(this._lat,e._lat)||j(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:$e._jsonSchemaVersion}}static fromJSON(e){if(gr(e,$e._jsonSchema))return new $e(e.latitude,e.longitude)}}$e._jsonSchemaVersion="firestore/geoPoint/1.0",$e._jsonSchema={type:oe("string",$e._jsonSchemaVersion),latitude:oe("number"),longitude:oe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ze._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(gr(e,ze._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new ze(e.vectorValues);throw new D(b.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ze._jsonSchemaVersion="firestore/vectorValue/1.0",ze._jsonSchema={type:oe("string",ze._jsonSchemaVersion),vectorValues:oe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv=/^__.*__$/;class Qv{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new kt(e,this.data,this.fieldMask,t,this.fieldTransforms):new _r(e,this.data,t,this.fieldTransforms)}}class Yh{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new kt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Xh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x(40011,{Ec:n})}}class Go{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Go(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Is(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Xh(this.Ec)&&Kv.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Jv{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ms(e)}Dc(e,t,r,s=!1){return new Go({Ec:e,methodName:t,bc:r,path:pe.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ko(n){const e=n._freezeSettings(),t=Ms(n._databaseId);return new Jv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Yv(n,e,t,r,s,i={}){const a=n.Dc(i.merge||i.mergeFields?2:0,e,t,s);Jo("Data must be an object, but it was:",a,r);const u=Zh(r,a);let l,d;if(i.merge)l=new Ce(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const y of i.mergeFields){const v=ro(e,y,t);if(!a.contains(v))throw new D(b.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);td(p,v)||p.push(v)}l=new Ce(p),d=a.fieldTransforms.filter(y=>l.covers(y.field))}else l=null,d=a.fieldTransforms;return new Qv(new Se(u),l,d)}class $s extends qs{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $s}}class Qo extends qs{_toFieldTransform(e){return new q_(e.path,new ar)}isEqual(e){return e instanceof Qo}}function Xv(n,e,t,r){const s=n.Dc(1,e,t);Jo("Data must be an object, but it was:",s,r);const i=[],a=Se.empty();Ct(r,(l,d)=>{const p=Yo(e,l,t);d=he(d);const y=s.gc(p);if(d instanceof $s)i.push(p);else{const v=Tr(d,y);v!=null&&(i.push(p),a.set(p,v))}});const u=new Ce(i);return new Yh(a,u,s.fieldTransforms)}function Zv(n,e,t,r,s,i){const a=n.Dc(1,e,t),u=[ro(e,r,t)],l=[s];if(i.length%2!=0)throw new D(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<i.length;v+=2)u.push(ro(e,i[v])),l.push(i[v+1]);const d=[],p=Se.empty();for(let v=u.length-1;v>=0;--v)if(!td(d,u[v])){const P=u[v];let C=l[v];C=he(C);const O=a.gc(P);if(C instanceof $s)d.push(P);else{const V=Tr(C,O);V!=null&&(d.push(P),p.set(P,V))}}const y=new Ce(d);return new Yh(p,y,a.fieldTransforms)}function eE(n,e,t,r=!1){return Tr(t,n.Dc(r?4:3,e))}function Tr(n,e){if(ed(n=he(n)))return Jo("Unsupported field value:",e,n),Zh(n,e);if(n instanceof qs)return function(r,s){if(!Xh(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const u of r){let l=Tr(u,s.yc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=he(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return U_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=X.fromDate(r);return{timestampValue:ys(s.serializer,i)}}if(r instanceof X){const i=new X(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ys(s.serializer,i)}}if(r instanceof $e)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof De)return{bytesValue:gh(s.serializer,r._byteString)};if(r instanceof ae){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Do(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ze)return function(a,u){return{mapValue:{fields:{[Hl]:{stringValue:Wl},[ms]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw u.wc("VectorValues must only contain numeric values.");return Po(u.serializer,d)})}}}}}}(r,s);throw s.wc(`Unsupported field value: ${Ss(r)}`)}(n,e)}function Zh(n,e){const t={};return Ul(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ct(n,(r,s)=>{const i=Tr(s,e.Vc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function ed(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof X||n instanceof $e||n instanceof De||n instanceof ae||n instanceof qs||n instanceof ze)}function Jo(n,e,t){if(!ed(t)||!xl(t)){const r=Ss(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function ro(n,e,t){if((e=he(e))instanceof js)return e._internalPath;if(typeof e=="string")return Yo(n,e);throw Is("Field path arguments must be of type string or ",n,!1,void 0,t)}const tE=new RegExp("[~\\*/\\[\\]]");function Yo(n,e,t){if(e.search(tE)>=0)throw Is(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new js(...e.split("."))._internalPath}catch{throw Is(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Is(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new D(b.INVALID_ARGUMENT,u+n+l)}function td(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(zs("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class nE extends nd{data(){return super.data()}}function zs(n,e){return typeof e=="string"?Yo(n,e):e instanceof js?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new D(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xo{}class rd extends Xo{}function sE(n,e,...t){let r=[];e instanceof Xo&&r.push(e),r=r.concat(t),function(i){const a=i.filter(l=>l instanceof Zo).length,u=i.filter(l=>l instanceof Hs).length;if(a>1||a>0&&u>0)throw new D(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Hs extends rd{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Hs(e,t,r)}_apply(e){const t=this._parse(e);return sd(e._query,t),new Gt(e.firestore,e.converter,Wi(e._query,t))}_parse(e){const t=Ko(e.firestore);return function(i,a,u,l,d,p,y){let v;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new D(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Du(y,p);const C=[];for(const O of y)C.push(Vu(l,i,O));v={arrayValue:{values:C}}}else v=Vu(l,i,y)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Du(y,p),v=eE(u,a,y,p==="in"||p==="not-in");return ie.create(d,p,v)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ku(n,e,t){const r=e,s=zs("where",n);return Hs._create(s,r,t)}class Zo extends Xo{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Zo(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:xe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const u=i.getFlattenedFilters();for(const l of u)sd(a,l),a=Wi(a,l)}(e._query,t),new Gt(e.firestore,e.converter,Wi(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ea extends rd{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ea(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new D(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new D(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new or(i,a)}(e._query,this._field,this._direction);return new Gt(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new Tn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function iE(n,e="asc"){const t=e,r=zs("orderBy",n);return ea._create(r,t)}function Vu(n,e,t){if(typeof(t=he(t))=="string"){if(t==="")throw new D(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!eh(e)&&t.indexOf("/")!==-1)throw new D(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(J.fromString(t));if(!L.isDocumentKey(r))throw new D(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Gc(n,new L(r))}if(t instanceof ae)return Gc(n,t._key);throw new D(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ss(t)}.`)}function Du(n,e){if(!Array.isArray(n)||n.length===0)throw new D(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function sd(n,e){const t=function(s,i){for(const a of s)for(const u of a.getFlattenedFilters())if(i.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new D(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class oE{convertValue(e,t="none"){switch(At(e)){case 0:return null;case 1:return e.booleanValue;case 2:return re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(wt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw x(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ct(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[ms].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>re(a.doubleValue));return new ze(i)}convertGeoPoint(e){return new $e(re(e.latitude),re(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ks(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(rr(e));default:return null}}convertTimestamp(e){const t=It(e);return new X(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=J.fromString(e);K(Ih(r),9688,{name:e});const s=new sr(r.get(1),r.get(3)),i=new L(r.popFirst(5));return s.isEqual(t)||tt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Wn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xt extends nd{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new rs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(zs("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(b.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=xt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}xt._jsonSchemaVersion="firestore/documentSnapshot/1.0",xt._jsonSchema={type:oe("string",xt._jsonSchemaVersion),bundleSource:oe("string","DocumentSnapshot"),bundleName:oe("string"),bundle:oe("string")};class rs extends xt{data(e={}){return super.data(e)}}class cn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Wn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new rs(this._firestore,this._userDataWriter,r.key,r,new Wn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new D(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const l=new rs(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Wn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>i||u.type!==3).map(u=>{const l=new rs(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Wn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:cE(u.type),doc:l,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(b.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=cn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=To.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function cE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(n){n=nt(n,ae);const e=nt(n.firestore,wn);return qv(Wo(e),n._key).then(t=>pE(e,n,t))}cn._jsonSchemaVersion="firestore/querySnapshot/1.0",cn._jsonSchema={type:oe("string",cn._jsonSchemaVersion),bundleSource:oe("string","QuerySnapshot"),bundleName:oe("string"),bundle:oe("string")};class id extends oE{constructor(e){super(),this.firestore=e}convertBytes(e){return new De(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ae(this.firestore,null,t)}}function lE(n){n=nt(n,Gt);const e=nt(n.firestore,wn),t=Wo(e),r=new id(e);return rE(n._query),$v(t,n._query).then(s=>new cn(e,r,n,s))}function hE(n,e,t,...r){n=nt(n,ae);const s=nt(n.firestore,wn),i=Ko(s);let a;return a=typeof(e=he(e))=="string"||e instanceof js?Zv(i,"updateDoc",n._key,e,t,r):Xv(i,"updateDoc",n._key,e),ta(s,[a.toMutation(n._key,Le.exists(!0))])}function dE(n){return ta(nt(n.firestore,wn),[new Co(n._key,Le.none())])}function fE(n,e){const t=nt(n.firestore,wn),r=Bs(n),s=aE(n.converter,e);return ta(t,[Yv(Ko(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Le.exists(!1))]).then(()=>r)}function ta(n,e){return function(r,s){const i=new Xe;return r.asyncQueue.enqueueAndForget(async()=>kv(await jv(r),s,i)),i.promise}(Wo(n),e)}function pE(n,e,t){const r=t.docs.get(e._key),s=new id(n);return new xt(n,s,e._key,r,new Wn(t.hasPendingWrites,t.fromCache),e.converter)}function so(){return new Qo("serverTimestamp")}(function(e,t=!0){(function(s){yn=s})(gn),un(new Ut("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),u=new wn(new Xg(r.getProvider("auth-internal")),new t_(a,r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new D(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sr(d.options.projectId,p)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),u._setSettings(i),u},"PUBLIC").setMultipleInstances(!0)),_t(Nc,Oc,e),_t(Nc,Oc,"esm2017")})();const mE={apiKey:"AIzaSyDJudwlHban4_GmpEHfMUoc3pgTfst0vl8",authDomain:"mind-forge-db034.firebaseapp.com",projectId:"mind-forge-db034",storageBucket:"mind-forge-db034.firebasestorage.app",messagingSenderId:"992572835584",appId:"1:992572835584:web:153e3159cb8d2d82e395e5"},od=$u(mE),Ir=Kg(od),Ws=Wv(od);async function gE(n,e){return(await Dm(Ir,n,e)).user}async function _E(n,e){return(await Nm(Ir,n,e)).user}async function ad(){await xm(Ir)}function yE(n){return Mm(Ir,n)}function Gs(){return Ir.currentUser}function vE(){return`
    <div class="auth-container">
      <div class="auth-card">
        <div class="auth-header">
          <h1 class="logo">🧠 MindForge</h1>
          <p class="subtitle">Technical Mentor para Game Dev</p>
        </div>
        
        <form id="loginForm" class="auth-form">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="seu@email.com">
          </div>
          
          <div class="form-group">
            <label for="password">Senha</label>
            <input type="password" id="password" name="password" required placeholder="••••••••">
          </div>
          
          <button type="submit" class="btn btn-primary btn-full">
            Entrar
          </button>
          
          <div id="errorMessage" class="error-message"></div>
        </form>
        
        <p class="auth-footer">
          Não tem conta? <a href="#/register">Criar conta</a>
        </p>
      </div>
    </div>
  `}function EE(){const n=document.getElementById("loginForm"),e=document.getElementById("errorMessage");n.addEventListener("submit",async t=>{t.preventDefault();const r=n.email.value,s=n.password.value,i=n.querySelector('button[type="submit"]');i.disabled=!0,i.textContent="Entrando...",e.textContent="";try{await _E(r,s),ce.navigate("/dashboard")}catch(a){console.error("Login error:",a),e.textContent=TE(a.code)}finally{i.disabled=!1,i.textContent="Entrar"}})}function TE(n){return{"auth/invalid-email":"Email inválido","auth/user-disabled":"Usuário desabilitado","auth/user-not-found":"Usuário não encontrado","auth/wrong-password":"Senha incorreta","auth/invalid-credential":"Email ou senha incorretos","auth/too-many-requests":"Muitas tentativas. Tente novamente mais tarde."}[n]||"Erro ao fazer login. Tente novamente."}function IE(){return`
    <div class="auth-container">
      <div class="auth-card">
        <div class="auth-header">
          <h1 class="logo">🧠 MindForge</h1>
          <p class="subtitle">Crie sua conta</p>
        </div>
        
        <form id="registerForm" class="auth-form">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="seu@email.com">
          </div>
          
          <div class="form-group">
            <label for="password">Senha</label>
            <input type="password" id="password" name="password" required minlength="6" placeholder="Mínimo 6 caracteres">
          </div>
          
          <div class="form-group">
            <label for="confirmPassword">Confirmar Senha</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required placeholder="••••••••">
          </div>
          
          <button type="submit" class="btn btn-primary btn-full">
            Criar Conta
          </button>
          
          <div id="errorMessage" class="error-message"></div>
        </form>
        
        <p class="auth-footer">
          Já tem conta? <a href="#/login">Fazer login</a>
        </p>
      </div>
    </div>
  `}function wE(){const n=document.getElementById("registerForm"),e=document.getElementById("errorMessage");n.addEventListener("submit",async t=>{t.preventDefault();const r=n.email.value,s=n.password.value,i=n.confirmPassword.value;if(s!==i){e.textContent="As senhas não coincidem";return}const a=n.querySelector('button[type="submit"]');a.disabled=!0,a.textContent="Criando...",e.textContent="";try{await gE(r,s),ce.navigate("/dashboard")}catch(u){console.error("Register error:",u),e.textContent=AE(u.code)}finally{a.disabled=!1,a.textContent="Criar Conta"}})}function AE(n){return{"auth/email-already-in-use":"Este email já está em uso","auth/invalid-email":"Email inválido","auth/weak-password":"Senha muito fraca (mínimo 6 caracteres)","auth/operation-not-allowed":"Registro desabilitado"}[n]||"Erro ao criar conta. Tente novamente."}function cd(n){return Hv(Ws,"users",n,"notes")}async function RE(n,e){const t=cd(n);return(await fE(t,{...e,createdAt:so(),updatedAt:so()})).id}async function bE(n,e,t){const r=Bs(Ws,"users",n,"notes",e);await hE(r,{...t,updatedAt:so()})}async function SE(n,e){const t=Bs(Ws,"users",n,"notes",e);await dE(t)}async function PE(n,e){var s,i;const t=Bs(Ws,"users",n,"notes",e),r=await uE(t);return r.exists()?{id:r.id,...r.data(),createdAt:((s=r.data().createdAt)==null?void 0:s.toDate())||new Date,updatedAt:((i=r.data().updatedAt)==null?void 0:i.toDate())||new Date}:null}async function CE(n,e={}){const t=cd(n),r=[];e.category&&e.category!=="all"&&r.push(ku("category","==",e.category)),e.type&&e.type!=="all"&&r.push(ku("type","==",e.type)),r.push(iE("createdAt","desc"));const s=sE(t,...r);return(await lE(s)).docs.map(a=>{var u,l;return{id:a.id,...a.data(),createdAt:((u=a.data().createdAt)==null?void 0:u.toDate())||new Date,updatedAt:((l=a.data().updatedAt)==null?void 0:l.toDate())||new Date}})}const ud=[{value:"Unity",label:"Unity"},{value:"Unreal",label:"Unreal Engine"},{value:"Blender",label:"Blender"},{value:"Game Dev",label:"Game Dev"},{value:"Other",label:"Outro"}],ld=[{value:"Estudo",label:"Estudo"},{value:"Implementação",label:"Implementação"},{value:"Erro",label:"Erro"},{value:"Decisão",label:"Decisão"},{value:"Objetivo",label:"Objetivo"}];let hd=[];function kE(){return`
    <div class="app-layout">
      <header class="app-header">
        <div class="header-left">
          <h1 class="logo-small">🧠 MindForge</h1>
        </div>
        <nav class="header-nav">
          <a href="#/dashboard" class="nav-link active">📝 Notas</a>
          <a href="#/chat" class="nav-link">🤖 Mentor IA</a>
        </nav>
        <div class="header-right">
          <button id="logoutBtn" class="btn btn-ghost">Sair</button>
        </div>
      </header>
      
      <main class="dashboard-main">
        <div class="dashboard-header">
          <h2>Minhas Anotações</h2>
          <a href="#/editor" class="btn btn-primary">+ Nova Anotação</a>
        </div>
        
        <div class="filters-bar">
          <div class="filter-group">
            <label>Categoria:</label>
            <select id="categoryFilter">
              <option value="all">Todas</option>
              ${ud.map(n=>`<option value="${n.value}">${n.label}</option>`).join("")}
            </select>
          </div>
          
          <div class="filter-group">
            <label>Tipo:</label>
            <select id="typeFilter">
              <option value="all">Todos</option>
              ${ld.map(n=>`<option value="${n.value}">${n.label}</option>`).join("")}
            </select>
          </div>
          
          <div class="filter-group search-group">
            <input type="text" id="searchInput" placeholder="Buscar anotações..." class="search-input">
          </div>
        </div>
        
        <div id="notesList" class="notes-grid">
          <div class="loader"></div>
        </div>
      </main>
    </div>
  `}function VE(){const n=document.getElementById("logoutBtn"),e=document.getElementById("categoryFilter"),t=document.getElementById("typeFilter"),r=document.getElementById("searchInput");n.addEventListener("click",async()=>{await ad(),ce.navigate("/login")}),e.addEventListener("change",ss),t.addEventListener("change",ss),r.addEventListener("input",OE(dd,300)),ss()}async function ss(){const n=Gs();if(!n)return;const e=document.getElementById("notesList");e.innerHTML='<div class="loader"></div>';const t=document.getElementById("categoryFilter"),r=document.getElementById("typeFilter"),s={category:t.value,type:r.value};try{hd=await CE(n.uid,s),dd()}catch(i){console.error("Error loading notes:",i),e.innerHTML='<p class="error-text">Erro ao carregar anotações</p>'}}function dd(){const n=document.getElementById("notesList"),t=document.getElementById("searchInput").value.toLowerCase(),r=hd.filter(s=>{var i,a,u;return((i=s.title)==null?void 0:i.toLowerCase().includes(t))||((a=s.content)==null?void 0:a.toLowerCase().includes(t))||((u=s.tags)==null?void 0:u.some(l=>l.toLowerCase().includes(t)))});if(r.length===0){n.innerHTML=`
      <div class="empty-state">
        <p>Nenhuma anotação encontrada</p>
        <a href="#/editor" class="btn btn-primary">Criar primeira anotação</a>
      </div>
    `;return}n.innerHTML=r.map(s=>{var i,a;return`
    <div class="note-card" data-id="${s.id}">
      <div class="note-header">
        <span class="note-category category-${(i=s.category)==null?void 0:i.toLowerCase().replace(" ","-")}">${s.category||"Sem categoria"}</span>
        <span class="note-type">${s.type||"Sem tipo"}</span>
      </div>
      <h3 class="note-title">${Ci(s.title||"Sem título")}</h3>
      <p class="note-preview">${Ci(DE(s.content||"",100))}</p>
      ${(a=s.tags)!=null&&a.length?`
        <div class="note-tags">
          ${s.tags.map(u=>`<span class="tag">${Ci(u)}</span>`).join("")}
        </div>
      `:""}
      <div class="note-footer">
        <span class="note-date">${NE(s.createdAt)}</span>
        <div class="note-actions">
          <button class="btn-icon edit-btn" title="Editar">✏️</button>
          <button class="btn-icon delete-btn" title="Excluir">🗑️</button>
        </div>
      </div>
    </div>
  `}).join(""),document.querySelectorAll(".note-card").forEach(s=>{const i=s.dataset.id;s.querySelector(".edit-btn").addEventListener("click",a=>{a.stopPropagation(),ce.navigate(`/editor?id=${i}`)}),s.querySelector(".delete-btn").addEventListener("click",async a=>{if(a.stopPropagation(),confirm("Excluir esta anotação?")){const u=Gs();await SE(u.uid,i),ss()}}),s.addEventListener("click",()=>{ce.navigate(`/editor?id=${i}`)})})}function Ci(n){const e=document.createElement("div");return e.textContent=n,e.innerHTML}function DE(n,e){return n.length>e?n.slice(0,e)+"...":n}function NE(n){return n?new Intl.DateTimeFormat("pt-BR",{day:"2-digit",month:"short",year:"numeric"}).format(n):""}function OE(n,e){let t;return function(...r){clearTimeout(t),t=setTimeout(()=>n.apply(this,r),e)}}let io=null;function LE(){return`
    <div class="app-layout">
      <header class="app-header">
        <div class="header-left">
          <a href="#/dashboard" class="back-btn">← Voltar</a>
        </div>
        <div class="header-center">
          <h1 id="editorTitle">Nova Anotação</h1>
        </div>
        <div class="header-right">
          <button id="saveBtn" class="btn btn-primary">Salvar</button>
        </div>
      </header>
      
      <main class="editor-main">
        <form id="noteForm" class="editor-form">
          <div class="form-row">
            <div class="form-group">
              <label for="title">Título</label>
              <input type="text" id="title" name="title" required placeholder="Título da anotação">
            </div>
          </div>
          
          <div class="form-row two-cols">
            <div class="form-group">
              <label for="category">Categoria</label>
              <select id="category" name="category" required>
                <option value="">Selecione...</option>
                ${ud.map(n=>`<option value="${n.value}">${n.label}</option>`).join("")}
              </select>
            </div>
            
            <div class="form-group">
              <label for="type">Tipo</label>
              <select id="type" name="type" required>
                <option value="">Selecione...</option>
                ${ld.map(n=>`<option value="${n.value}">${n.label}</option>`).join("")}
              </select>
            </div>
          </div>
          
          <div class="form-group">
            <label for="tags">Tags (separadas por vírgula)</label>
            <input type="text" id="tags" name="tags" placeholder="Ex: C#, shader, iluminação">
          </div>
          
          <div class="form-group flex-grow">
            <label for="content">Conteúdo</label>
            <textarea id="content" name="content" required placeholder="Escreva sua anotação aqui..."></textarea>
          </div>
        </form>
      </main>
    </div>
  `}async function ME(){const n=document.getElementById("noteForm"),e=document.getElementById("saveBtn"),t=document.getElementById("editorTitle"),s=ce.getQueryParams().get("id");s&&(t.textContent="Editar Anotação",await xE(s)),e.addEventListener("click",async()=>{if(!n.checkValidity()){n.reportValidity();return}e.disabled=!0,e.textContent="Salvando...";try{const i=Gs(),a=n.tags.value,u=a?a.split(",").map(d=>d.trim()).filter(d=>d):[],l={title:n.title.value,content:n.content.value,category:n.category.value,type:n.type.value,tags:u};io?await bE(i.uid,io.id,l):await RE(i.uid,l),ce.navigate("/dashboard")}catch(i){console.error("Error saving note:",i),alert("Erro ao salvar anotação")}finally{e.disabled=!1,e.textContent="Salvar"}})}async function xE(n){var t;const e=Gs();if(e)try{const r=await PE(e.uid,n);if(!r){ce.navigate("/dashboard");return}io=r,document.getElementById("title").value=r.title||"",document.getElementById("content").value=r.content||"",document.getElementById("category").value=r.category||"",document.getElementById("type").value=r.type||"",document.getElementById("tags").value=((t=r.tags)==null?void 0:t.join(", "))||""}catch(r){console.error("Error loading note:",r),ce.navigate("/dashboard")}}let oo=[];const FE=`Você é o MindForge Architect, um mentor técnico experiente em Game Development.

Áreas de Especialização:
- Unity (C#, sistemas de física, shaders, UI)
- Unreal Engine (Blueprints, C++, materiais)
- Blender (modelagem 3D, animação, texturização)
- Game Design patterns e arquitetura

Diretrizes:
- Seja direto, técnico e prático
- Use exemplos de código quando apropriado
- Responda SEMPRE em português brasileiro
- Foque em soluções aplicáveis imediatamente

FORMATO DE RESPOSTA:
1. **Diagnóstico Rápido**: O que você entendeu da situação
2. **Problema Central**: Onde está o gargalo técnico
3. **Direção Recomendada**: Padrão ou técnica ideal
4. **Próximo Passo Imediato**: Ação prática para agora`;function UE(){return`
    <div class="app-layout">
      <header class="app-header">
        <div class="header-left">
          <h1 class="logo-small">🧠 MindForge</h1>
        </div>
        <nav class="header-nav">
          <a href="#/dashboard" class="nav-link">📝 Notas</a>
          <a href="#/chat" class="nav-link active">🤖 Mentor IA</a>
        </nav>
        <div class="header-right">
          <button id="logoutBtn" class="btn btn-ghost">Sair</button>
        </div>
      </header>
      
      <main class="chat-main">
        <div class="chat-container">
          <div id="chatMessages" class="chat-messages">
            <div class="welcome-message">
              <div class="welcome-icon"><img src="/MindForge/avatar.png" alt="Mentor IA"></div>
              <h2>Mentor Técnico IA</h2>
              <p>Tire suas dúvidas sobre Unity, Unreal Engine, Blender e Game Development.</p>
              <div class="suggestion-chips">
                <button class="chip" data-question="Como implementar um sistema de inventory em Unity?">📦 Sistema de Inventory</button>
                <button class="chip" data-question="Qual a melhor forma de fazer um shader de dissolve no Unreal?">✨ Shader de Dissolve</button>
                <button class="chip" data-question="Como otimizar performance em jogos mobile?">📱 Performance Mobile</button>
              </div>
            </div>
          </div>
          
          <form id="chatForm" class="chat-input-form">
            <input type="text" id="chatInput" placeholder="Faça uma pergunta sobre Game Dev..." autocomplete="off">
            <button type="submit" id="sendBtn" class="btn btn-primary">Enviar</button>
          </form>
        </div>
      </main>
    </div>
  `}function BE(){const n=document.getElementById("chatForm"),e=document.getElementById("chatInput");document.getElementById("logoutBtn").addEventListener("click",async()=>{await ad(),ce.navigate("/login")}),document.querySelectorAll(".chip").forEach(r=>{r.addEventListener("click",()=>{const s=r.dataset.question;e.value=s,n.dispatchEvent(new Event("submit"))})}),n.addEventListener("submit",async r=>{r.preventDefault();const s=e.value.trim();s&&(e.value="",await jE(s))})}async function jE(n){const e=document.getElementById("chatMessages"),t=document.getElementById("sendBtn"),r=e.querySelector(".welcome-message");r&&r.remove(),oo.push({role:"user",content:n}),ki("user",n),t.disabled=!0;const s=document.createElement("div");s.className="message assistant loading",s.innerHTML='<div class="typing-indicator"><span></span><span></span><span></span></div>',e.appendChild(s),e.scrollTop=e.scrollHeight;try{const i=await qE(n);s.remove(),oo.push({role:"assistant",content:i}),ki("assistant",i)}catch(i){console.error("Error calling AI:",i),s.remove(),ki("assistant","Desculpe, ocorreu um erro ao processar sua mensagem. Tente novamente.")}finally{t.disabled=!1}}async function qE(n){var i,a,u;const e="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",t=[{role:"system",content:FE}];oo.slice(-10).forEach(l=>{t.push({role:l.role==="user"?"user":"assistant",content:l.content})});const r=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({model:"llama-3.3-70b-versatile",messages:t,temperature:.8,max_tokens:2048})});if(!r.ok)throw new Error(`API error: ${r.status}`);return((u=(a=(i=(await r.json()).choices)==null?void 0:i[0])==null?void 0:a.message)==null?void 0:u.content)||"Sem resposta"}function ki(n,e){const t=document.getElementById("chatMessages"),r=document.createElement("div");r.className=`message ${n}`;const s=n==="user"?"👤":'<img src="/MindForge/avatar.png" alt="IA">',i=$E(e);r.innerHTML=`
    <div class="message-avatar">${s}</div>
    <div class="message-content">${i}</div>
  `,t.appendChild(r),t.scrollTop=t.scrollHeight}function $E(n){return n.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/```(\w*)\n?([\s\S]*?)```/g,'<pre><code class="language-$1">$2</code></pre>').replace(/\n/g,"<br>")}ce.register("/login",()=>vE(),{authOnly:!0,onRender:()=>EE()});ce.register("/register",()=>IE(),{authOnly:!0,onRender:()=>wE()});ce.register("/dashboard",()=>kE(),{requiresAuth:!0,onRender:()=>VE()});ce.register("/editor",()=>LE(),{requiresAuth:!0,onRender:()=>ME()});ce.register("/chat",()=>UE(),{requiresAuth:!0,onRender:()=>BE()});ce.register("/",()=>(ce.navigate(ce.currentUser?"/dashboard":"/login"),'<div class="loader"></div>'),{});yE(n=>{ce.setUser(n)});
