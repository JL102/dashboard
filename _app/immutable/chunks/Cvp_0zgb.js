var Jt=t=>{throw TypeError(t)};var Pe=(t,e,n)=>e.has(t)||Jt("Cannot "+n);var A=(t,e,n)=>(Pe(t,e,"read from private field"),n?n.call(t):e.get(t)),P=(t,e,n)=>e.has(t)?Jt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);import{aJ as Nt,a6 as Tt,d as C,g as N,b as O,a7 as xe}from"./DoN0iJJ0.js";import{a as Ce,H as vt,S as Ot,R as jt,b as x}from"./B1j6-CTa.js";new URL("sveltekit-internal://");function Ne(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function Oe(t){return t.split("%25").map(decodeURI).join("%25")}function je(t){for(const e in t)t[e]=decodeURIComponent(t[e]);return t}function Rt({href:t}){return t.split("#")[0]}function $e(t,e,n,a=!1){const r=new URL(t);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return f=>(n(f),i[o](f));e();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];a&&s.push("hash");for(const i of s)Object.defineProperty(r,i,{get(){return e(),t[i]},enumerable:!0,configurable:!0});return r}function De(...t){let e=5381;for(const n of t)if(typeof n=="string"){let a=n.length;for(;a;)e=e*33^n.charCodeAt(--a)}else if(ArrayBuffer.isView(n)){const a=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let r=a.length;for(;r;)e=e*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}function Fe(t){const e=atob(t),n=new Uint8Array(e.length);for(let a=0;a<e.length;a++)n[a]=e.charCodeAt(a);return n.buffer}const Ve=window.fetch;window.fetch=(t,e)=>((t instanceof Request?t.method:(e==null?void 0:e.method)||"GET")!=="GET"&&Y.delete($t(t)),Ve(t,e));const Y=new Map;function Be(t,e){const n=$t(t,e),a=document.querySelector(n);if(a!=null&&a.textContent){let{body:r,...s}=JSON.parse(a.textContent);const i=a.getAttribute("data-ttl");return i&&Y.set(n,{body:r,init:s,ttl:1e3*Number(i)}),a.getAttribute("data-b64")!==null&&(r=Fe(r)),Promise.resolve(new Response(r,s))}return window.fetch(t,e)}function Ge(t,e,n){if(Y.size>0){const a=$t(t,n),r=Y.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(r.body,r.init);Y.delete(a)}}return window.fetch(e,n)}function $t(t,e){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(e!=null&&e.headers||e!=null&&e.body){const r=[];e.headers&&r.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&r.push(e.body),a+=`[data-hash="${De(...r)}"]`}return a}const Me=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function qe(t){const e=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${Ke(t).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return e.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(s)return e.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const i=a.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return It(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return It(String.fromCharCode(...c.slice(2).split("-").map(h=>parseInt(h,16))));const u=Me.exec(c),[,p,w,l,m]=u;return e.push({name:l,matcher:m,optional:!!p,rest:!!w,chained:w?f===1&&i[0]==="":!1}),w?"(.*?)":p?"([^/]*)?":"([^/]+?)"}return It(c)}).join("")}).join("")}/?$`),params:e}}function He(t){return!/^\([^)]+\)$/.test(t)}function Ke(t){return t.slice(1).split("/").filter(He)}function We(t,e,n){const a={},r=t.slice(1),s=r.filter(o=>o!==void 0);let i=0;for(let o=0;o<e.length;o+=1){const c=e[o];let f=r[o-i];if(c.chained&&c.rest&&i&&(f=r.slice(o-i,o+1).filter(u=>u).join("/"),i=0),f===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||n[c.matcher](f)){a[c.name]=f;const u=e[o+1],p=r[o+1];u&&!u.rest&&u.optional&&p&&c.chained&&(i=0),!u&&!p&&Object.keys(a).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return a}function It(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ye({nodes:t,server_loads:e,dictionary:n,matchers:a}){const r=new Set(e);return Object.entries(n).map(([o,[c,f,u]])=>{const{pattern:p,params:w}=qe(o),l={id:o,exec:m=>{const h=p.exec(m);if(h)return We(h,w,a)},errors:[1,...u||[]].map(m=>t[m]),layouts:[0,...f||[]].map(i),leaf:s(c)};return l.errors.length=l.layouts.length=Math.max(l.errors.length,l.layouts.length),l});function s(o){const c=o<0;return c&&(o=~o),[c,t[o]]}function i(o){return o===void 0?o:[r.has(o),t[o]]}}function ce(t,e=JSON.parse){try{return e(sessionStorage[t])}catch{}}function zt(t,e,n=JSON.stringify){const a=n(e);try{sessionStorage[t]=a}catch{}}const Je="1741326581353",le="sveltekit:snapshot",fe="sveltekit:scroll",ue="sveltekit:states",ze="sveltekit:pageurl",G="sveltekit:history",z="sveltekit:navigation",ut={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},ft=location.origin;function de(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function Dt(){return{x:pageXOffset,y:pageYOffset}}function B(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const Xt={...ut,"":ut.hover};function he(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function pe(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=he(t)}}function Pt(t,e,n){let a;try{if(a=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI),n&&a.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";a.hash=`#${o}${a.hash}`}}catch{}const r=t instanceof SVGAElement?t.target.baseVal:t.target,s=!a||!!r||bt(a,e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(a==null?void 0:a.origin)===ft&&t.hasAttribute("download");return{url:a,external:s,target:r,download:i}}function dt(t){let e=null,n=null,a=null,r=null,s=null,i=null,o=t;for(;o&&o!==document.documentElement;)a===null&&(a=B(o,"preload-code")),r===null&&(r=B(o,"preload-data")),e===null&&(e=B(o,"keepfocus")),n===null&&(n=B(o,"noscroll")),s===null&&(s=B(o,"reload")),i===null&&(i=B(o,"replacestate")),o=he(o);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Xt[a??"off"],preload_data:Xt[r??"off"],keepfocus:c(e),noscroll:c(n),reload:c(s),replace_state:c(i)}}function Zt(t){const e=Nt(t);let n=!0;function a(){n=!0,e.update(i=>i)}function r(i){n=!1,e.set(i)}function s(i){let o;return e.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:a,set:r,subscribe:s}}const ge={v:()=>{}};function Xe(){const{set:t,subscribe:e}=Nt(!1);let n;async function a(){clearTimeout(n);try{const r=await fetch(`${Ce}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const i=(await r.json()).version!==Je;return i&&(t(!0),ge.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:e,check:a}}function bt(t,e,n){return t.origin!==ft||!t.pathname.startsWith(e)?!0:n?!(t.pathname===e+"/"||t.pathname===e+"/index.html"||t.protocol==="file:"&&t.pathname.replace(/\/[^/]+\.html?$/,"")===e):!1}function Qt(t){const e=Qe(t),n=new ArrayBuffer(e.length),a=new DataView(n);for(let r=0;r<n.byteLength;r++)a.setUint8(r,e.charCodeAt(r));return n}const Ze="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Qe(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,a=0;for(let r=0;r<t.length;r++)n<<=6,n|=Ze.indexOf(t[r]),a+=6,a===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=a=0);return a===12?(n>>=4,e+=String.fromCharCode(n)):a===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const tn=-1,en=-2,nn=-3,an=-4,rn=-5,on=-6;function sn(t,e){if(typeof t=="number")return r(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,a=Array(n.length);function r(s,i=!1){if(s===tn)return;if(s===nn)return NaN;if(s===an)return 1/0;if(s===rn)return-1/0;if(s===on)return-0;if(i)throw new Error("Invalid input");if(s in a)return a[s];const o=n[s];if(!o||typeof o!="object")a[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],f=e==null?void 0:e[c];if(f)return a[s]=f(r(o[1]));switch(c){case"Date":a[s]=new Date(o[1]);break;case"Set":const u=new Set;a[s]=u;for(let l=1;l<o.length;l+=1)u.add(r(o[l]));break;case"Map":const p=new Map;a[s]=p;for(let l=1;l<o.length;l+=2)p.set(r(o[l]),r(o[l+1]));break;case"RegExp":a[s]=new RegExp(o[1],o[2]);break;case"Object":a[s]=Object(o[1]);break;case"BigInt":a[s]=BigInt(o[1]);break;case"null":const w=Object.create(null);a[s]=w;for(let l=1;l<o.length;l+=2)w[o[l]]=r(o[l+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const l=globalThis[c],m=o[1],h=Qt(m),d=new l(h);a[s]=d;break}case"ArrayBuffer":{const l=o[1],m=Qt(l);a[s]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);a[s]=c;for(let f=0;f<o.length;f+=1){const u=o[f];u!==en&&(c[f]=r(u))}}else{const c={};a[s]=c;for(const f in o){const u=o[f];c[f]=r(u)}}return a[s]}return r(0)}const me=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...me];const cn=new Set([...me]);[...cn];function ln(t){return t.filter(e=>e!=null)}const fn="x-sveltekit-invalidated",un="x-sveltekit-trailing-slash";function ht(t){return t instanceof vt||t instanceof Ot?t.status:500}function dn(t){return t instanceof Ot?t.text:"Internal Error"}let U,X,Ut;const hn=Tt.toString().includes("$$")||/function \w+\(\) \{\}/.test(Tt.toString());var tt,et,nt,at,rt,ot,st,it,oe,ct,se,lt,ie;hn?(U={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},X={current:null},Ut={current:!1}):(U=new(oe=class{constructor(){P(this,tt,C({}));P(this,et,C(null));P(this,nt,C(null));P(this,at,C({}));P(this,rt,C({id:null}));P(this,ot,C({}));P(this,st,C(-1));P(this,it,C(new URL("https://example.com")))}get data(){return N(A(this,tt))}set data(e){O(A(this,tt),e)}get form(){return N(A(this,et))}set form(e){O(A(this,et),e)}get error(){return N(A(this,nt))}set error(e){O(A(this,nt),e)}get params(){return N(A(this,at))}set params(e){O(A(this,at),e)}get route(){return N(A(this,rt))}set route(e){O(A(this,rt),e)}get state(){return N(A(this,ot))}set state(e){O(A(this,ot),e)}get status(){return N(A(this,st))}set status(e){O(A(this,st),e)}get url(){return N(A(this,it))}set url(e){O(A(this,it),e)}},tt=new WeakMap,et=new WeakMap,nt=new WeakMap,at=new WeakMap,rt=new WeakMap,ot=new WeakMap,st=new WeakMap,it=new WeakMap,oe),X=new(se=class{constructor(){P(this,ct,C(null))}get current(){return N(A(this,ct))}set current(e){O(A(this,ct),e)}},ct=new WeakMap,se),Ut=new(ie=class{constructor(){P(this,lt,C(!1))}get current(){return N(A(this,lt))}set current(e){O(A(this,lt),e)}},lt=new WeakMap,ie),ge.v=()=>Ut.current=!0);function pn(t){Object.assign(U,t)}const gn="/__data.json",mn=".html__data.json";function wn(t){return t.endsWith(".html")?t.replace(/\.html$/,mn):t.replace(/\/$/,"")+gn}const yn=new Set(["icon","shortcut icon","apple-touch-icon"]),V=ce(fe)??{},Z=ce(le)??{},$={url:Zt({}),page:Zt({}),navigating:Nt(null),updated:Xe()};function Ft(t){V[t]=Dt()}function _n(t,e){let n=t+1;for(;V[n];)delete V[n],n+=1;for(n=e+1;Z[n];)delete Z[n],n+=1}function H(t){return location.href=t.href,new Promise(()=>{})}async function we(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(x||"/");t&&await t.update()}}function te(){}let Vt,xt,pt,j,Ct,S;const gt=[],mt=[];let L=null;const ye=new Set,vn=new Set,M=new Set;let v={branch:[],error:null,url:null},Bt=!1,wt=!1,ee=!0,Q=!1,K=!1,_e=!1,Gt=!1,ve,R,T,F;const J=new Set;async function Vn(t,e,n){var r,s,i,o;document.URL!==location.href&&(location.href=location.href),S=t,await((s=(r=t.hooks).init)==null?void 0:s.call(r)),Vt=Ye(t),j=document.documentElement,Ct=e,xt=t.nodes[0],pt=t.nodes[1],xt(),pt(),R=(i=history.state)==null?void 0:i[G],T=(o=history.state)==null?void 0:o[z],R||(R=T=Date.now(),history.replaceState({...history.state,[G]:R,[z]:T},""));const a=V[R];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),n?await xn(Ct,n):await Ln(S.hash?Te(new URL(location.href)):location.href,{replaceState:!0}),Pn()}function bn(){gt.length=0,Gt=!1}function be(t){mt.some(e=>e==null?void 0:e.snapshot)&&(Z[t]=mt.map(e=>{var n;return(n=e==null?void 0:e.snapshot)==null?void 0:n.capture()}))}function Ae(t){var e;(e=Z[t])==null||e.forEach((n,a)=>{var r,s;(s=(r=mt[a])==null?void 0:r.snapshot)==null||s.restore(n)})}function ne(){Ft(R),zt(fe,V),be(T),zt(le,Z)}async function Mt(t,e,n,a){return W({type:"goto",url:de(t),keepfocus:e.keepFocus,noscroll:e.noScroll,replace_state:e.replaceState,state:e.state,redirect_count:n,nav_token:a,accept:()=>{e.invalidateAll&&(Gt=!0),e.invalidate&&e.invalidate.forEach(Tn)}})}async function An(t){if(t.id!==(L==null?void 0:L.id)){const e={};J.add(e),L={id:t.id,token:e,promise:ke({...t,preload:e}).then(n=>(J.delete(e),n.type==="loaded"&&n.state.error&&(L=null),n))}}return L.promise}async function Lt(t){var n;const e=(n=await St(t,!1))==null?void 0:n.route;e&&await Promise.all([...e.layouts,e.leaf].map(a=>a==null?void 0:a[1]()))}function Se(t,e,n){var s;v=t.state;const a=document.querySelector("style[data-sveltekit]");a&&a.remove(),Object.assign(U,t.props.page),ve=new S.root({target:e,props:{...t.props,stores:$,components:mt},hydrate:n,sync:!1}),Ae(T);const r={from:null,to:{params:v.params,route:{id:((s=v.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};M.forEach(i=>i(r)),wt=!0}function yt({url:t,params:e,branch:n,status:a,error:r,route:s,form:i}){let o="never";if(x&&(t.pathname===x||t.pathname===x+"/"))o="always";else for(const l of n)(l==null?void 0:l.slash)!==void 0&&(o=l.slash);t.pathname=Ne(t.pathname,o),t.search=t.search;const c={type:"loaded",state:{url:t,params:e,branch:n,error:r,route:s},props:{constructors:ln(n).map(l=>l.node.component),page:Kt(U)}};i!==void 0&&(c.props.form=i);let f={},u=!U,p=0;for(let l=0;l<Math.max(n.length,v.branch.length);l+=1){const m=n[l],h=v.branch[l];(m==null?void 0:m.data)!==(h==null?void 0:h.data)&&(u=!0),m&&(f={...f,...m.data},u&&(c.props[`data_${p}`]=f),p+=1)}return(!v.url||t.href!==v.url.href||v.error!==r||i!==void 0&&i!==U.form||u)&&(c.props.page={error:r,params:e,route:{id:(s==null?void 0:s.id)??null},state:{},status:a,url:new URL(t),form:i??null,data:u?f:U.data}),c}async function qt({loader:t,parent:e,url:n,params:a,route:r,server_data_node:s}){var u,p,w;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await t();if((u=f.universal)!=null&&u.load){let l=function(...h){for(const d of h){const{href:y}=new URL(d,n);c.dependencies.add(y)}};const m={route:new Proxy(r,{get:(h,d)=>(o&&(c.route=!0),h[d])}),params:new Proxy(a,{get:(h,d)=>(o&&c.params.add(d),h[d])}),data:(s==null?void 0:s.data)??null,url:$e(n,()=>{o&&(c.url=!0)},h=>{o&&c.search_params.add(h)},S.hash),async fetch(h,d){let y;h instanceof Request?(y=h.url,d={body:h.method==="GET"||h.method==="HEAD"?void 0:await h.blob(),cache:h.cache,credentials:h.credentials,headers:[...h.headers].length?h.headers:void 0,integrity:h.integrity,keepalive:h.keepalive,method:h.method,mode:h.mode,redirect:h.redirect,referrer:h.referrer,referrerPolicy:h.referrerPolicy,signal:h.signal,...d}):y=h;const k=new URL(y,n);return o&&l(k.href),k.origin===n.origin&&(y=k.href.slice(n.origin.length)),wt?Ge(y,k.href,d):Be(y,d)},setHeaders:()=>{},depends:l,parent(){return o&&(c.parent=!0),e()},untrack(h){o=!1;try{return h()}finally{o=!0}}};i=await f.universal.load.call(null,m)??null}return{node:f,loader:t,server:s,universal:(p=f.universal)!=null&&p.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((w=f.universal)==null?void 0:w.trailingSlash)??(s==null?void 0:s.slash)}}function ae(t,e,n,a,r,s){if(Gt)return!0;if(!r)return!1;if(r.parent&&t||r.route&&e||r.url&&n)return!0;for(const i of r.search_params)if(a.has(i))return!0;for(const i of r.params)if(s[i]!==v.params[i])return!0;for(const i of r.dependencies)if(gt.some(o=>o(new URL(i))))return!0;return!1}function Ht(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}function Sn(t,e){if(!t)return new Set(e.searchParams.keys());const n=new Set([...t.searchParams.keys(),...e.searchParams.keys()]);for(const a of n){const r=t.searchParams.getAll(a),s=e.searchParams.getAll(a);r.every(i=>s.includes(i))&&s.every(i=>r.includes(i))&&n.delete(a)}return n}function re({error:t,url:e,route:n,params:a}){return{type:"loaded",state:{error:t,url:e,route:n,params:a,branch:[]},props:{page:Kt(U),constructors:[]}}}async function ke({id:t,invalidating:e,url:n,params:a,route:r,preload:s}){if((L==null?void 0:L.id)===t)return J.delete(L.token),L.promise;const{errors:i,layouts:o,leaf:c}=r,f=[...o,c];i.forEach(g=>g==null?void 0:g().catch(()=>{})),f.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let u=null;const p=v.url?t!==_t(v.url):!1,w=v.route?r.id!==v.route.id:!1,l=Sn(v.url,n);let m=!1;const h=f.map((g,_)=>{var D;const b=v.branch[_],E=!!(g!=null&&g[0])&&((b==null?void 0:b.loader)!==g[1]||ae(m,w,p,l,(D=b.server)==null?void 0:D.uses,a));return E&&(m=!0),E});if(h.some(Boolean)){try{u=await Ie(n,h)}catch(g){const _=await q(g,{url:n,params:a,route:{id:t}});return J.has(s)?re({error:_,url:n,params:a,route:r}):At({status:ht(g),error:_,url:n,route:r})}if(u.type==="redirect")return u}const d=u==null?void 0:u.nodes;let y=!1;const k=f.map(async(g,_)=>{var kt;if(!g)return;const b=v.branch[_],E=d==null?void 0:d[_];if((!E||E.type==="skip")&&g[1]===(b==null?void 0:b.loader)&&!ae(y,w,p,l,(kt=b.universal)==null?void 0:kt.uses,a))return b;if(y=!0,(E==null?void 0:E.type)==="error")throw E;return qt({loader:g[1],url:n,params:a,route:r,parent:async()=>{var Yt;const Wt={};for(let Et=0;Et<_;Et+=1)Object.assign(Wt,(Yt=await k[Et])==null?void 0:Yt.data);return Wt},server_data_node:Ht(E===void 0&&g[0]?{type:"skip"}:E??null,g[0]?b==null?void 0:b.server:void 0)})});for(const g of k)g.catch(()=>{});const I=[];for(let g=0;g<f.length;g+=1)if(f[g])try{I.push(await k[g])}catch(_){if(_ instanceof jt)return{type:"redirect",location:_.location};if(J.has(s))return re({error:await q(_,{params:a,url:n,route:{id:r.id}}),url:n,params:a,route:r});let b=ht(_),E;if(d!=null&&d.includes(_))b=_.status??b,E=_.error;else if(_ instanceof vt)E=_.body;else{if(await $.updated.check())return await we(),await H(n);E=await q(_,{params:a,url:n,route:{id:r.id}})}const D=await kn(g,I,i);return D?yt({url:n,params:a,branch:I.slice(0,D.idx).concat(D.node),status:b,error:E,route:r}):await Re(n,{id:r.id},E,b)}else I.push(void 0);return yt({url:n,params:a,branch:I,status:200,error:null,route:r,form:e?void 0:null})}async function kn(t,e,n){for(;t--;)if(n[t]){let a=t;for(;!e[a];)a-=1;try{return{idx:a+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function At({status:t,error:e,url:n,route:a}){const r={};let s=null;if(S.server_loads[0]===0)try{const o=await Ie(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==ft||n.pathname!==location.pathname||Bt)&&await H(n)}try{const o=await qt({loader:xt,url:n,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:Ht(s)}),c={node:await pt(),loader:pt,universal:null,server:null,data:null};return yt({url:n,params:r,branch:[o,c],status:t,error:e,route:null})}catch(o){if(o instanceof jt)return Mt(new URL(o.location,location.href),{},0);throw o}}function En(t){let e;try{if(e=S.hooks.reroute({url:new URL(t)})??t,typeof e=="string"){const n=new URL(t);S.hash?n.hash=e:n.pathname=e,e=n}}catch{return}return e}async function St(t,e){if(t&&!bt(t,x,S.hash)){const n=En(t);if(!n)return;const a=Rn(n);for(const r of Vt){const s=r.exec(a);if(s)return{id:_t(t),invalidating:e,route:r,params:je(s),url:t}}}}function Rn(t){return Oe(S.hash?t.hash.replace(/^#/,"").replace(/[?#].+/,""):t.pathname.slice(x.length))||"/"}function _t(t){return(S.hash?t.hash.replace(/^#/,""):t.pathname)+t.search}function Ee({url:t,type:e,intent:n,delta:a}){let r=!1;const s=Le(v,n,t,e);a!==void 0&&(s.navigation.delta=a);const i={...s.navigation,cancel:()=>{r=!0,s.reject(new Error("navigation cancelled"))}};return Q||ye.forEach(o=>o(i)),r?null:s}async function W({type:t,url:e,popped:n,keepfocus:a,noscroll:r,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:f=te,block:u=te}){const p=F;F=c;const w=await St(e,!1),l=Ee({url:e,type:t,delta:n==null?void 0:n.delta,intent:w});if(!l){u(),F===c&&(F=p);return}const m=R,h=T;f(),Q=!0,wt&&$.navigating.set(X.current=l.navigation);let d=w&&await ke(w);if(!d){if(bt(e,x,S.hash))return await H(e);d=await Re(e,{id:null},await q(new Ot(404,"Not Found",`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(w==null?void 0:w.url)||e,F!==c)return l.reject(new Error("navigation aborted")),!1;if(d.type==="redirect")if(o>=20)d=await At({status:500,error:await q(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return await Mt(new URL(d.location,e).href,{},o+1,c),!1;else d.props.page.status>=400&&await $.updated.check()&&(await we(),await H(e));if(bn(),Ft(m),be(h),d.props.page.url.pathname!==e.pathname&&(e.pathname=d.props.page.url.pathname),i=n?n.state:i,!n){const g=s?0:1,_={[G]:R+=g,[z]:T+=g,[ue]:i};(s?history.replaceState:history.pushState).call(history,_,"",e),s||_n(R,T)}if(L=null,d.props.page.state=i,wt){v=d.state,d.props.page&&(d.props.page.url=e);const g=(await Promise.all(Array.from(vn,_=>_(l.navigation)))).filter(_=>typeof _=="function");if(g.length>0){let _=function(){g.forEach(b=>{M.delete(b)})};g.push(_),g.forEach(b=>{M.add(b)})}ve.$set(d.props),pn(d.props.page),_e=!0}else Se(d,Ct,!1);const{activeElement:y}=document;await xe();const k=n?n.scroll:r?Dt():null;if(ee){const g=e.hash&&document.getElementById(decodeURIComponent(S.hash?e.hash.split("#")[2]??"":e.hash.slice(1)));k?scrollTo(k.x,k.y):g?g.scrollIntoView():scrollTo(0,0)}const I=document.activeElement!==y&&document.activeElement!==document.body;!a&&!I&&Cn(),ee=!0,d.props.page&&Object.assign(U,d.props.page),Q=!1,t==="popstate"&&Ae(T),l.fulfil(void 0),M.forEach(g=>g(l.navigation)),$.navigating.set(X.current=null)}async function Re(t,e,n,a){return t.origin===ft&&t.pathname===location.pathname&&!Bt?await At({status:a,error:n,url:t,route:e}):await H(t)}function In(){let t,e;j.addEventListener("mousemove",i=>{const o=i.target;clearTimeout(t),t=setTimeout(()=>{r(o,2)},20)});function n(i){i.defaultPrevented||r(i.composedPath()[0],1)}j.addEventListener("mousedown",n),j.addEventListener("touchstart",n,{passive:!0});const a=new IntersectionObserver(i=>{for(const o of i)o.isIntersecting&&(Lt(new URL(o.target.href)),a.unobserve(o.target))},{threshold:0});async function r(i,o){const c=pe(i,j);if(!c||c===e)return;e=c;const{url:f,external:u,download:p}=Pt(c,x,S.hash);if(u||p)return;const w=dt(c),l=f&&_t(v.url)===_t(f);if(!w.reload&&!l)if(o<=w.preload_data){const m=await St(f,!1);m&&An(m)}else o<=w.preload_code&&Lt(f)}function s(){a.disconnect();for(const i of j.querySelectorAll("a")){const{url:o,external:c,download:f}=Pt(i,x,S.hash);if(c||f)continue;const u=dt(i);u.reload||(u.preload_code===ut.viewport&&a.observe(i),u.preload_code===ut.eager&&Lt(o))}}M.add(s),s()}function q(t,e){if(t instanceof vt)return t.body;const n=ht(t),a=dn(t);return S.hooks.handleError({error:t,event:e,status:n,message:a})??{message:a}}function Un(t,e){Tt(()=>(t.add(e),()=>{t.delete(e)}))}function Bn(t){Un(M,t)}function Ln(t,e={}){return t=new URL(de(t)),t.origin!==ft?Promise.reject(new Error("goto: invalid URL")):Mt(t,e,0)}function Tn(t){if(typeof t=="function")gt.push(t);else{const{href:e}=new URL(t,location.href);gt.push(n=>n.href===e)}}function Pn(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let a=!1;if(ne(),!Q){const r=Le(v,void 0,null,"leave"),s={...r.navigation,cancel:()=>{a=!0,r.reject(new Error("navigation cancelled"))}};ye.forEach(i=>i(s))}a?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&ne()}),(e=navigator.connection)!=null&&e.saveData||In(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const a=pe(n.composedPath()[0],j);if(!a)return;const{url:r,external:s,target:i,download:o}=Pt(a,x,S.hash);if(!r)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=dt(a);if(!(a instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||o)return;const[u,p]=(S.hash?r.hash.replace(/^#/,""):r.href).split("#"),w=u===Rt(location);if(s||c.reload&&(!w||!p)){Ee({url:r,type:"link"})?Q=!0:n.preventDefault();return}if(p!==void 0&&w){const[,l]=v.url.href.split("#");if(l===p){if(n.preventDefault(),p===""||p==="top"&&a.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=a.ownerDocument.getElementById(decodeURIComponent(p));m&&(m.scrollIntoView(),m.focus())}return}if(K=!0,Ft(R),t(r),!c.replace_state)return;K=!1}n.preventDefault(),await new Promise(l=>{requestAnimationFrame(()=>{setTimeout(l,0)}),setTimeout(l,100)}),await W({type:"link",url:r,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??r.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(n.target),r=n.submitter;if(((r==null?void 0:r.formTarget)||a.target)==="_blank"||((r==null?void 0:r.formMethod)||a.method)!=="get")return;const o=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||a.action);if(bt(o,x,!1))return;const c=n.target,f=dt(c);if(f.reload)return;n.preventDefault(),n.stopPropagation();const u=new FormData(c),p=r==null?void 0:r.getAttribute("name");p&&u.append(p,(r==null?void 0:r.getAttribute("value"))??""),o.search=new URLSearchParams(u).toString(),W({type:"form",url:o,keepfocus:f.keepfocus,noscroll:f.noscroll,replace_state:f.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var a;if((a=n.state)!=null&&a[G]){const r=n.state[G];if(F={},r===R)return;const s=V[r],i=n.state[ue]??{},o=new URL(n.state[ze]??location.href),c=n.state[z],f=v.url?Rt(location)===Rt(v.url):!1;if(c===T&&(_e||f)){i!==U.state&&(U.state=i),t(o),V[R]=Dt(),s&&scrollTo(s.x,s.y),R=r;return}const p=r-R;await W({type:"popstate",url:o,popped:{state:i,scroll:s,delta:p},accept:()=>{R=r,T=c},block:()=>{history.go(-p)},nav_token:F})}else if(!K){const r=new URL(location.href);t(r)}}),addEventListener("hashchange",()=>{K?(K=!1,history.replaceState({...history.state,[G]:++R,[z]:T},"",location.href)):S.hash&&v.url.hash===location.hash&&W({type:"goto",url:Te(v.url)})});for(const n of document.querySelectorAll("link"))yn.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&$.navigating.set(X.current=null)});function t(n){v.url=U.url=n,$.page.set(Kt(U)),$.page.notify()}}async function xn(t,{status:e=200,error:n,node_ids:a,params:r,route:s,server_route:i,data:o,form:c}){Bt=!0;const f=new URL(location.href);let u;({params:r={},route:s={id:null}}=await St(f,!1)||{}),u=Vt.find(({id:l})=>l===s.id);let p,w=!0;try{const l=a.map(async(h,d)=>{const y=o[d];return y!=null&&y.uses&&(y.uses=Ue(y.uses)),qt({loader:S.nodes[h],url:f,params:r,route:s,parent:async()=>{const k={};for(let I=0;I<d;I+=1)Object.assign(k,(await l[I]).data);return k},server_data_node:Ht(y)})}),m=await Promise.all(l);if(u){const h=u.layouts;for(let d=0;d<h.length;d++)h[d]||m.splice(d,0,void 0)}p=yt({url:f,params:r,branch:m,status:e,error:n,form:c,route:u??null})}catch(l){if(l instanceof jt){await H(new URL(l.location,location.href));return}p=await At({status:ht(l),error:await q(l,{url:f,params:r,route:s}),url:f,route:s}),t.textContent="",w=!1}p.props.page&&(p.props.page.state={}),Se(p,t,w)}async function Ie(t,e){var s;const n=new URL(t);n.pathname=wn(t.pathname),t.pathname.endsWith("/")&&n.searchParams.append(un,"1"),n.searchParams.append(fn,e.map(i=>i?"1":"0").join(""));const a=window.fetch,r=await a(n.href,{});if(!r.ok){let i;throw(s=r.headers.get("content-type"))!=null&&s.includes("application/json")?i=await r.json():r.status===404?i="Not Found":r.status===500&&(i="Internal Error"),new vt(r.status,i)}return new Promise(async i=>{var w;const o=new Map,c=r.body.getReader(),f=new TextDecoder;function u(l){return sn(l,{...S.decoders,Promise:m=>new Promise((h,d)=>{o.set(m,{fulfil:h,reject:d})})})}let p="";for(;;){const{done:l,value:m}=await c.read();if(l&&!p)break;for(p+=!m&&p?`
`:f.decode(m,{stream:!0});;){const h=p.indexOf(`
`);if(h===-1)break;const d=JSON.parse(p.slice(0,h));if(p=p.slice(h+1),d.type==="redirect")return i(d);if(d.type==="data")(w=d.nodes)==null||w.forEach(y=>{(y==null?void 0:y.type)==="data"&&(y.uses=Ue(y.uses),y.data=u(y.data))}),i(d);else if(d.type==="chunk"){const{id:y,data:k,error:I}=d,g=o.get(y);o.delete(y),I?g.reject(u(I)):g.fulfil(u(k))}}}})}function Ue(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function Cn(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let s=0;s<a.rangeCount;s+=1)r.push(a.getRangeAt(s));setTimeout(()=>{if(a.rangeCount===r.length){for(let s=0;s<a.rangeCount;s+=1){const i=r[s],o=a.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}a.removeAllRanges()}})}}}function Le(t,e,n,a){var c,f;let r,s;const i=new Promise((u,p)=>{r=u,s=p});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:n&&{params:(e==null?void 0:e.params)??null,route:{id:((f=e==null?void 0:e.route)==null?void 0:f.id)??null},url:n},willUnload:!e,type:a,complete:i},fulfil:r,reject:s}}function Kt(t){return{data:t.data,error:t.error,form:t.form,params:t.params,route:t.route,state:t.state,status:t.status,url:t.url}}function Te(t){const e=new URL(t);return e.hash=decodeURIComponent(t.hash),e}export{Bn as a,Vn as b,Ln as g,U as p,$ as s};
