const o=location.pathname.split("/").slice(0,-1).join("/"),E=[o+"/_app/immutable/entry/app.CzVohzqT.js",o+"/_app/immutable/nodes/0.BcXmuu6N.js",o+"/_app/immutable/assets/0.DO5cYQJn.css",o+"/_app/immutable/nodes/1.Dcs_mF5n.js",o+"/_app/immutable/nodes/2.C2JCgPsM.js",o+"/_app/immutable/nodes/3.Bh3FW9R8.js",o+"/_app/immutable/nodes/4.aLD9XkkV.js",o+"/_app/immutable/nodes/5.DDs9qLJa.js",o+"/_app/immutable/assets/TeamStats.C0--ecQD.css",o+"/_app/immutable/chunks/-yQ1haA6.js",o+"/_app/immutable/chunks/2gIK30cb.js",o+"/_app/immutable/chunks/BNz2KYVh.js",o+"/_app/immutable/chunks/BOCYgPTh.js",o+"/_app/immutable/chunks/By6hG9dq.js",o+"/_app/immutable/chunks/C0h71eE1.js",o+"/_app/immutable/chunks/CB96b1gt.js",o+"/_app/immutable/chunks/CMZTxJvD.js",o+"/_app/immutable/chunks/CZI6Qp2P.js",o+"/_app/immutable/chunks/Cr1kl3Dp.js",o+"/_app/immutable/chunks/CrHxz_O6.js",o+"/_app/immutable/chunks/DuAmjV7c.js",o+"/_app/immutable/chunks/DwIXWVfp.js",o+"/_app/immutable/chunks/Z5Q6ZjvO.js",o+"/_app/immutable/chunks/rr_i9oP7.js",o+"/_app/immutable/entry/start.CDKPXaU4.js"],I=[o+"/favicon.png",o+"/fonts/material-icons-v139.woff2",o+"/fonts/material-icons.css",o+"/lib/koder-browser.js",o+"/lib/wasmQrWorker.js",o+"/lib/zbar.js",o+"/lib/zbar.wasm",o+"/smui.css"],O=[o+"/",o+"/login",o+"/on-field",o+"/setup"],P="1741317747653";try{self["workbox:core:7.2.0"]&&_()}catch{}const D=(a,...e)=>{let t=a;return e.length>0&&(t+=` :: ${JSON.stringify(e)}`),t},M=D;class h extends Error{constructor(e,t){const s=M(e,t);super(s),this.name=e,this.details=t}}const d={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:typeof registration<"u"?registration.scope:""},U=a=>[d.prefix,a,d.suffix].filter(e=>e&&e.length>0).join("-"),A=a=>{for(const e of Object.keys(d))a(e)},k={updateDetails:a=>{A(e=>{typeof a[e]=="string"&&(d[e]=a[e])})},getGoogleAnalyticsName:a=>a||U(d.googleAnalytics),getPrecacheName:a=>a||U(d.precache),getPrefix:()=>d.prefix,getRuntimeName:a=>a||U(d.runtime),getSuffix:()=>d.suffix};function T(a,e){const t=e();return a.waitUntil(t),t}try{self["workbox:precaching:7.2.0"]&&_()}catch{}const S="__WB_REVISION__";function W(a){if(!a)throw new h("add-to-cache-list-unexpected-type",{entry:a});if(typeof a=="string"){const c=new URL(a,location.href);return{cacheKey:c.href,url:c.href}}const{revision:e,url:t}=a;if(!t)throw new h("add-to-cache-list-unexpected-type",{entry:a});if(!e){const c=new URL(t,location.href);return{cacheKey:c.href,url:c.href}}const s=new URL(t,location.href),n=new URL(t,location.href);return s.searchParams.set(S,e),{cacheKey:s.href,url:n.href}}class q{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if(e.type==="install"&&t&&t.originalRequest&&t.originalRequest instanceof Request){const n=t.originalRequest.url;s?this.notUpdatedURLs.push(n):this.updatedURLs.push(n)}return s}}}class F{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:t,params:s})=>{const n=(s==null?void 0:s.cacheKey)||this._precacheController.getCacheKeyForURL(t.url);return n?new Request(n,{headers:t.headers}):t},this._precacheController=e}}let y;function H(){if(y===void 0){const a=new Response("");if("body"in a)try{new Response(a.body),y=!0}catch{y=!1}y=!1}return y}async function B(a,e){let t=null;if(a.url&&(t=new URL(a.url).origin),t!==self.location.origin)throw new h("cross-origin-copy-response",{origin:t});const s=a.clone(),c={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},r=H()?s.body:await s.blob();return new Response(r,c)}const V=a=>new URL(String(a),location.href).href.replace(new RegExp(`^${location.origin}`),"");function N(a,e){const t=new URL(a);for(const s of e)t.searchParams.delete(s);return t.href}async function G(a,e,t,s){const n=N(e.url,t);if(e.url===n)return a.match(e,s);const c=Object.assign(Object.assign({},s),{ignoreSearch:!0}),r=await a.keys(e,c);for(const i of r){const l=N(i.url,t);if(n===l)return a.match(i,s)}}class Q{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}const z=new Set;async function $(){for(const a of z)await a()}function J(a){return new Promise(e=>setTimeout(e,a))}try{self["workbox:strategies:7.2.0"]&&_()}catch{}function b(a){return typeof a=="string"?new Request(a):a}class X{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new Q,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const s of this._plugins)this._pluginStateMap.set(s,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=b(e);if(s.mode==="navigate"&&t instanceof FetchEvent&&t.preloadResponse){const r=await t.preloadResponse;if(r)return r}const n=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const r of this.iterateCallbacks("requestWillFetch"))s=await r({request:s.clone(),event:t})}catch(r){if(r instanceof Error)throw new h("plugin-error-request-will-fetch",{thrownErrorMessage:r.message})}const c=s.clone();try{let r;r=await fetch(s,s.mode==="navigate"?void 0:this._strategy.fetchOptions);for(const i of this.iterateCallbacks("fetchDidSucceed"))r=await i({event:t,request:c,response:r});return r}catch(r){throw n&&await this.runCallbacks("fetchDidFail",{error:r,event:t,originalRequest:n.clone(),request:c.clone()}),r}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=b(e);let s;const{cacheName:n,matchOptions:c}=this._strategy,r=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},c),{cacheName:n});s=await caches.match(r,i);for(const l of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await l({cacheName:n,matchOptions:c,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,t){const s=b(e);await J(0);const n=await this.getCacheKey(s,"write");if(!t)throw new h("cache-put-with-no-response",{url:V(n.url)});const c=await this._ensureResponseSafeToCache(t);if(!c)return!1;const{cacheName:r,matchOptions:i}=this._strategy,l=await self.caches.open(r),u=this.hasCallback("cacheDidUpdate"),m=u?await G(l,n.clone(),["__WB_REVISION__"],i):null;try{await l.put(n,u?c.clone():c)}catch(f){if(f instanceof Error)throw f.name==="QuotaExceededError"&&await $(),f}for(const f of this.iterateCallbacks("cacheDidUpdate"))await f({cacheName:r,oldResponse:m,newResponse:c.clone(),request:n,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let n=e;for(const c of this.iterateCallbacks("cacheKeyWillBeUsed"))n=b(await c({mode:t,request:n,event:this.event,params:this.params}));this._cacheKeys[s]=n}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if(typeof t[e]=="function"){const s=this._pluginStateMap.get(t);yield c=>{const r=Object.assign(Object.assign({},c),{state:s});return t[e](r)}}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const n of this.iterateCallbacks("cacheWillUpdate"))if(t=await n({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&t.status!==200&&(t=void 0),t}}class Z{constructor(e={}){this.cacheName=k.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s=typeof e.request=="string"?new Request(e.request):e.request,n="params"in e?e.params:void 0,c=new X(this,{event:t,request:s,params:n}),r=this._getResponse(c,s,t),i=this._awaitComplete(r,c,s,t);return[r,i]}async _getResponse(e,t,s){await e.runCallbacks("handlerWillStart",{event:s,request:t});let n;try{if(n=await this._handle(t,e),!n||n.type==="error")throw new h("no-response",{url:t.url})}catch(c){if(c instanceof Error){for(const r of e.iterateCallbacks("handlerDidError"))if(n=await r({error:c,event:s,request:t}),n)break}if(!n)throw c}for(const c of e.iterateCallbacks("handlerWillRespond"))n=await c({event:s,request:t,response:n});return n}async _awaitComplete(e,t,s,n){let c,r;try{c=await e}catch{}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:c}),await t.doneWaiting()}catch(i){i instanceof Error&&(r=i)}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:c,error:r}),t.destroy(),r)throw r}}class p extends Z{constructor(e={}){e.cacheName=k.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=e.fallbackToNetwork!==!1,this.plugins.push(p.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&t.event.type==="install"?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;const n=t.params||{};if(this._fallbackToNetwork){const c=n.integrity,r=e.integrity,i=!r||r===c;s=await t.fetch(new Request(e,{integrity:e.mode!=="no-cors"?r||c:void 0})),c&&i&&e.mode!=="no-cors"&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,s.clone()))}else throw new h("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new h("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==p.copyRedirectedCacheableResponsesPlugin&&(n===p.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);t===0?this.plugins.push(p.defaultPrecacheCacheabilityPlugin):t>1&&e!==null&&this.plugins.splice(e,1)}}p.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:a}){return!a||a.status>=400?null:a}};p.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:a}){return a.redirected?await B(a):a}};class Y{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new p({cacheName:k.getPrecacheName(e),plugins:[...t,new F({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){typeof s=="string"?t.push(s):s&&s.revision===void 0&&t.push(s.url);const{cacheKey:n,url:c}=W(s),r=typeof s!="string"&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(c)&&this._urlsToCacheKeys.get(c)!==n)throw new h("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(c),secondEntry:n});if(typeof s!="string"&&s.integrity){if(this._cacheKeysToIntegrities.has(n)&&this._cacheKeysToIntegrities.get(n)!==s.integrity)throw new h("add-to-cache-list-conflicting-integrities",{url:c});this._cacheKeysToIntegrities.set(n,s.integrity)}if(this._urlsToCacheKeys.set(c,n),this._urlsToCacheModes.set(c,r),t.length>0){const i=`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(i)}}}install(e){return T(e,async()=>{const t=new q;this.strategy.plugins.push(t);for(const[c,r]of this._urlsToCacheKeys){const i=this._cacheKeysToIntegrities.get(r),l=this._urlsToCacheModes.get(c),u=new Request(c,{integrity:i,cache:l,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:r},request:u,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}})}activate(e){return T(e,async()=>{const t=await self.caches.open(this.strategy.cacheName),s=await t.keys(),n=new Set(this._urlsToCacheKeys.values()),c=[];for(const r of s)n.has(r.url)||(await t.delete(r),c.push(r.url));return{deletedURLs:c}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this.strategy.cacheName)).match(s)}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new h("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}let L;const v=()=>(L||(L=new Y),L);try{self["workbox:routing:7.2.0"]&&_()}catch{}const j="GET",C=a=>a&&typeof a=="object"?a:{handle:a};class g{constructor(e,t,s=j){this.handler=C(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=C(e)}}class ee extends g{constructor(e,t,s){const n=({url:c})=>{const r=e.exec(c.href);if(r&&!(c.origin!==location.origin&&r.index!==0))return r.slice(1)};super(n,t,s)}}class te{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&e.data.type==="CACHE_URLS"){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(n=>{typeof n=="string"&&(n=[n]);const c=new Request(...n);return this.handleRequest({request:c,event:e})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:c,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:s});let i=r&&r.handler;const l=e.method;if(!i&&this._defaultHandlerMap.has(l)&&(i=this._defaultHandlerMap.get(l)),!i)return;let u;try{u=i.handle({url:s,request:e,event:t,params:c})}catch(f){u=Promise.reject(f)}const m=r&&r.catchHandler;return u instanceof Promise&&(this._catchHandler||m)&&(u=u.catch(async f=>{if(m)try{return await m.handle({url:s,request:e,event:t,params:c})}catch(K){K instanceof Error&&(f=K)}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw f})),u}findMatchingRoute({url:e,sameOrigin:t,request:s,event:n}){const c=this._routes.get(s.method)||[];for(const r of c){let i;const l=r.match({url:e,sameOrigin:t,request:s,event:n});if(l)return i=l,(Array.isArray(i)&&i.length===0||l.constructor===Object&&Object.keys(l).length===0||typeof l=="boolean")&&(i=void 0),{route:r,params:i}}return{}}setDefaultHandler(e,t=j){this._defaultHandlerMap.set(t,C(e))}setCatchHandler(e){this._catchHandler=C(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new h("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new h("unregister-route-route-not-registered")}}let w;const se=()=>(w||(w=new te,w.addFetchListener(),w.addCacheListener()),w);function x(a,e,t){let s;if(typeof a=="string"){const c=new URL(a,location.href),r=({url:i})=>i.href===c.href;s=new g(r,e,t)}else if(a instanceof RegExp)s=new ee(a,e,t);else if(typeof a=="function")s=new g(a,e,t);else if(a instanceof g)s=a;else throw new h("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});return se().registerRoute(s),s}function ae(a,e=[]){for(const t of[...a.searchParams.keys()])e.some(s=>s.test(t))&&a.searchParams.delete(t);return a}function*ne(a,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={}){const c=new URL(a,location.href);c.hash="",yield c.href;const r=ae(c,e);if(yield r.href,t&&r.pathname.endsWith("/")){const i=new URL(r.href);i.pathname+=t,yield i.href}if(s){const i=new URL(r.href);i.pathname+=".html",yield i.href}if(n){const i=n({url:c});for(const l of i)yield l.href}}class ce extends g{constructor(e,t){const s=({request:n})=>{const c=e.getURLsToCacheKeys();for(const r of ne(n.url,t)){const i=c.get(r);if(i){const l=e.getIntegrityForCacheKey(i);return{cacheKey:i,integrity:l}}}};super(s,e.strategy)}}function re(a){const e=v(),t=new ce(e,a);x(t)}const ie="-precache-",oe=async(a,e=ie)=>{const s=(await self.caches.keys()).filter(n=>n.includes(e)&&n.includes(self.registration.scope)&&n!==a);return await Promise.all(s.map(n=>self.caches.delete(n))),s};function le(){self.addEventListener("activate",a=>{const e=k.getPrecacheName();a.waitUntil(oe(e).then(t=>{}))})}function he(a){return v().matchPrecache(a)}function ue(a){v().precache(a)}function fe(a,e){ue(a),re(e)}class de extends g{constructor(e,{allowlist:t=[/./],denylist:s=[]}={}){super(n=>this._match(n),e),this._allowlist=t,this._denylist=s}_match({url:e,request:t}){if(t&&t.mode!=="navigate")return!1;const s=e.pathname+e.search;for(const n of this._denylist)if(n.test(s))return!1;return!!this._allowlist.some(n=>n.test(s))}}const R=self;let pe=I.filter(a=>!a.match(/\/\.\w+/g));const ge=["/dashboard/",...E,...pe,...O].map(a=>({url:a,revision:P}));fe(ge,{cleanURLs:!1});const me=new de(async({request:a})=>{const e=await he("/");return e||(console.error("Cached index html page not found!! Attempting to fetch."),fetch(a))});x(me);le();R.addEventListener("message",a=>{var e;a.data&&(a.data.msg==="SKIP_WAITING"&&(console.log("Received SKIP_WAITING instruction. Skipping wait..."),R.skipWaiting()),a.data.msg==="GET_VERSION"&&((e=a.source)==null||e.postMessage({msg:"RETURN_VERSION",version:P})))});R.addEventListener("activate",a=>{console.log("Received activate event. Claiming all clients..."),a.waitUntil(R.clients.claim().then(()=>{R.clients.matchAll().then(e=>e.forEach(t=>t.postMessage({msg:"UPDATE_DONE",version:P})))}))});
