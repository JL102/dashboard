import{a8 as w,a9 as k,aa as ee,O as P,ab as re,g as y,ac as v,b as h,ad as E,Q as ne,ae as te,af as ie,M as ae,A as Z,y as m,z as J,ag as Q,H as se,C as fe,D as ue,E as Y,I as C,J as q,K,F as V,ah as le,ai as ce,q as M,$ as de,e as $,N as W,aj as oe,ak as _e,al as ve,a5 as be,am as ge,an as he,j as F,B as ye,ao as pe,ap as Pe,aq as we,a3 as X,ar as Ie,as as Re,at as Se,au as Oe,av as D}from"./DoN0iJJ0.js";function O(e,r=null,a){if(typeof e!="object"||e===null||w in e)return e;const t=ie(e);if(t!==k&&t!==ee)return e;var n=new Map,u=ae(e),b=P(0);u&&n.set("length",P(e.length));var p;return new Proxy(e,{defineProperty(c,i,s){(!("value"in s)||s.configurable===!1||s.enumerable===!1||s.writable===!1)&&te();var l=n.get(i);return l===void 0?(l=P(s.value),n.set(i,l)):h(l,O(s.value,p)),!0},deleteProperty(c,i){var s=n.get(i);if(s===void 0)i in c&&n.set(i,P(v));else{if(u&&typeof i=="string"){var l=n.get("length"),f=Number(i);Number.isInteger(f)&&f<l.v&&h(l,f)}h(s,v),z(b)}return!0},get(c,i,s){var _;if(i===w)return e;var l=n.get(i),f=i in c;if(l===void 0&&(!f||(_=E(c,i))!=null&&_.writable)&&(l=P(O(f?c[i]:v,p)),n.set(i,l)),l!==void 0){var d=y(l);return d===v?void 0:d}return Reflect.get(c,i,s)},getOwnPropertyDescriptor(c,i){var s=Reflect.getOwnPropertyDescriptor(c,i);if(s&&"value"in s){var l=n.get(i);l&&(s.value=y(l))}else if(s===void 0){var f=n.get(i),d=f==null?void 0:f.v;if(f!==void 0&&d!==v)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return s},has(c,i){var d;if(i===w)return!0;var s=n.get(i),l=s!==void 0&&s.v!==v||Reflect.has(c,i);if(s!==void 0||ne!==null&&(!l||(d=E(c,i))!=null&&d.writable)){s===void 0&&(s=P(l?O(c[i],p):v),n.set(i,s));var f=y(s);if(f===v)return!1}return l},set(c,i,s,l){var R;var f=n.get(i),d=i in c;if(u&&i==="length")for(var _=s;_<f.v;_+=1){var I=n.get(_+"");I!==void 0?h(I,v):_ in c&&(I=P(v),n.set(_+"",I))}f===void 0?(!d||(R=E(c,i))!=null&&R.writable)&&(f=P(void 0),h(f,O(s,p)),n.set(i,f)):(d=f.v!==v,h(f,O(s,p)));var g=Reflect.getOwnPropertyDescriptor(c,i);if(g!=null&&g.set&&g.set.call(l,s),!d){if(u&&typeof i=="string"){var x=n.get("length"),N=Number(i);Number.isInteger(N)&&N>=x.v&&h(x,N+1)}z(b)}return!0},ownKeys(c){y(b);var i=Reflect.ownKeys(c).filter(f=>{var d=n.get(f);return d===void 0||d.v!==v});for(var[s,l]of n)l.v!==v&&!(s in c)&&i.push(s);return i},setPrototypeOf(){re()}})}function z(e,r=1){h(e,e.v+r)}function G(e){return e!==null&&typeof e=="object"&&w in e?e[w]:e}function De(e,r){return Object.is(G(e),G(r))}function me(e,r,a=!1){m&&J();var t=e,n=null,u=null,b=v,p=a?Q:0,c=!1;const i=(l,f=!0)=>{c=!0,s(f,l)},s=(l,f)=>{if(b===(b=l))return;let d=!1;if(m){const _=t.data===se;!!b===_&&(t=fe(),ue(t),Y(!1),d=!0)}b?(n?C(n):f&&(n=q(()=>f(t))),u&&K(u,()=>{u=null})):(u?C(u):f&&(u=q(()=>f(t))),n&&K(n,()=>{n=null})),d&&Y(!0)};Z(()=>{c=!1,r(i),c||s(null,null)},p),m&&(t=V)}function Te(e,r,a){m&&J();var t=e,n,u;Z(()=>{n!==(n=r())&&(u&&(K(u),u=null),n&&(u=q(()=>a(t,n))))},Q),m&&(t=V)}function H(e,r){return e===r||(e==null?void 0:e[w])===r}function Le(e={},r,a,t){return le(()=>{var n,u;return ce(()=>{n=u,u=[],M(()=>{e!==a(...u)&&(r(e,...u),n&&H(a(...n),e)&&r(null,...n))})}),()=>{de(()=>{u&&H(a(...u),e)&&r(null,...u)})}}),e}let T=!1,U=Symbol();function je(e,r,a){const t=a[r]??(a[r]={store:null,source:W(void 0),unsubscribe:$});if(t.store!==e&&!(U in a))if(t.unsubscribe(),t.store=e??null,e==null)t.source.v=void 0,t.unsubscribe=$;else{var n=!0;t.unsubscribe=oe(e,u=>{n?t.source.v=u:h(t.source,u)}),n=!1}return e&&U in a?_e(e):y(t.source)}function qe(e,r){return e.set(r),r}function Ke(){const e={};function r(){ve(()=>{for(var a in e)e[a].unsubscribe();be(e,U,{enumerable:!1,value:!0})})}return[e,r]}function Ee(e){var r=T;try{return T=!1,[e(),T]}finally{T=r}}const xe={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Me(e,r,a){return new Proxy({props:e,exclude:r},xe)}const Ne={get(e,r){let a=e.props.length;for(;a--;){let t=e.props[a];if(D(t)&&(t=t()),typeof t=="object"&&t!==null&&r in t)return t[r]}},set(e,r,a){let t=e.props.length;for(;t--;){let n=e.props[t];D(n)&&(n=n());const u=E(n,r);if(u&&u.set)return u.set(a),!0}return!1},getOwnPropertyDescriptor(e,r){let a=e.props.length;for(;a--;){let t=e.props[a];if(D(t)&&(t=t()),typeof t=="object"&&t!==null&&r in t){const n=E(t,r);return n&&!n.configurable&&(n.configurable=!0),n}}},has(e,r){if(r===w||r===X)return!1;for(let a of e.props)if(D(a)&&(a=a()),a!=null&&r in a)return!0;return!1},ownKeys(e){const r=[];for(let a of e.props){D(a)&&(a=a());for(const t in a)r.includes(t)||r.push(t)}return r}};function Ue(...e){return new Proxy({props:e},Ne)}function Be(e,r,a,t){var B;var n=(a&Se)!==0,u=!Ie||(a&Re)!==0,b=(a&we)!==0,p=(a&Oe)!==0,c=!1,i;b?[i,c]=Ee(()=>e[r]):i=e[r];var s=w in e||X in e,l=b&&(((B=E(e,r))==null?void 0:B.set)??(s&&r in e&&(o=>e[r]=o)))||void 0,f=t,d=!0,_=!1,I=()=>(_=!0,d&&(d=!1,p?f=M(t):f=t),f);i===void 0&&t!==void 0&&(l&&u&&ge(),i=I(),l&&l(i));var g;if(u)g=()=>{var o=e[r];return o===void 0?I():(d=!0,_=!1,o)};else{var x=(n?F:ye)(()=>e[r]);x.f|=he,g=()=>{var o=y(x);return o!==void 0&&(f=void 0),o===void 0?f:o}}if(!(a&pe))return g;if(l){var N=e.$$legacy;return function(o,S){return arguments.length>0?((!u||!S||N||c)&&l(S?g():o),o):g()}}var R=!1,L=W(i),A=F(()=>{var o=g(),S=y(L);return R?(R=!1,S):L.v=o});return n||(A.equals=Pe),function(o,S){if(arguments.length>0){const j=S?y(A):u&&b?O(o):o;return A.equals(j)||(R=!0,h(L,j),_&&f!==void 0&&(f=j),M(()=>y(A))),o}return y(A)}}export{Be as a,Le as b,Te as c,qe as d,je as e,Ke as f,De as g,me as i,O as p,Me as r,Ue as s};
