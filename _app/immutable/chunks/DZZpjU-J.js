import{c as Ee,a as U,t as V}from"./bkaPLb1g.js";import{p as ae,e as $,l as ee,g as l,d as G,B as ie,b as W,f as me,a as re,c as K,i as te,r as Q,t as k,h as de,s as ge,n as be}from"./BP-bcVPs.js";import{a as b,p as I,i as ue,b as z,r as se}from"./xQ8zHefh.js";import{_ as oe,a as j,M as le,n as fe,s as ne,h as J,u as X,c as Y,k as Z,q as Ce}from"./DeOI7bk8.js";/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Le={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var _e=function(E){oe(e,E);function e(i){var s=E.call(this,j(j({},e.defaultAdapter),i))||this;return s.shakeAnimationEndHandler=function(){s.handleShakeAnimationEnd()},s}return Object.defineProperty(e,"cssClasses",{get:function(){return Le},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.getWidth=function(){return this.adapter.getWidth()},e.prototype.shake=function(i){var s=e.cssClasses.LABEL_SHAKE;i?this.adapter.addClass(s):this.adapter.removeClass(s)},e.prototype.float=function(i){var s=e.cssClasses,y=s.LABEL_FLOAT_ABOVE,m=s.LABEL_SHAKE;i?this.adapter.addClass(y):(this.adapter.removeClass(y),this.adapter.removeClass(m))},e.prototype.setRequired=function(i){var s=e.cssClasses.LABEL_REQUIRED;i?this.adapter.addClass(s):this.adapter.removeClass(s)},e.prototype.handleShakeAnimationEnd=function(){var i=e.cssClasses.LABEL_SHAKE;this.adapter.removeClass(i)},e}(le);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var S={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ye=function(E){oe(e,E);function e(i){var s=E.call(this,j(j({},e.defaultAdapter),i))||this;return s.transitionEndHandler=function(y){s.handleTransitionEnd(y)},s}return Object.defineProperty(e,"cssClasses",{get:function(){return S},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},e.prototype.activate=function(){this.adapter.removeClass(S.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(S.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(i){this.adapter.setStyle("transform-origin",i+"px center")},e.prototype.deactivate=function(){this.adapter.addClass(S.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(i){var s=this.adapter.hasClass(S.LINE_RIPPLE_DEACTIVATING);i.propertyName==="opacity"&&s&&(this.adapter.removeClass(S.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(S.LINE_RIPPLE_DEACTIVATING))},e}(le);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ae={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},ce={NOTCH_ELEMENT_PADDING:8},Ie={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ne=function(E){oe(e,E);function e(i){return E.call(this,j(j({},e.defaultAdapter),i))||this}return Object.defineProperty(e,"strings",{get:function(){return Ae},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Ie},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return ce},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.notch=function(i){var s=e.cssClasses.OUTLINE_NOTCHED;i>0&&(i+=ce.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(i),this.adapter.addClass(s)},e.prototype.closeNotch=function(){var i=e.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(i),this.adapter.removeNotchWidthProperty()},e}(le),Oe=V("<span><!></span>"),Pe=V("<label><!></label>");function Be(E,e){ae(e,!0);let i=b(e,"use",19,()=>[]),s=b(e,"class",3,""),y=b(e,"style",3,""),m=b(e,"floatAbove",15,!1),A=b(e,"required",15,!1),N=b(e,"wrapped",3,!1),p=se(e,["$$slots","$$events","$$legacy","use","class","style","for","floatAbove","required","wrapped","children"]),c,o=G(void 0),v=new fe,L=I({}),_=I({}),T=$("SMUI:generic:input:props")??{},D=m();ee(()=>{l(o)&&D!==m()&&(D=m(),l(o).float(m()))});let R=A();ee(()=>{l(o)&&R!==A()&&(R=A(),l(o).setRequired(A()))});const M=$("SMUI:floating-label:mount"),F=$("SMUI:floating-label:unmount");ie(()=>{W(o,I(new _e({addClass:P,removeClass:C,getWidth:()=>{var u,g;const a=O(),h=a.cloneNode(!0);(u=a.parentNode)==null||u.appendChild(h),h.classList.add("smui-floating-label--remove-transition"),h.classList.add("smui-floating-label--force-size"),h.classList.remove("mdc-floating-label--float-above");const q=h.scrollWidth;return(g=a.parentNode)==null||g.removeChild(h),q},registerInteractionHandler:(a,h)=>v.on(O(),a,h),deregisterInteractionHandler:(a,h)=>v.off(O(),a,h)})));const r={get element(){return O()},addStyle:H,removeStyle:t};return M&&M(r),l(o).init(),()=>{var a;F&&F(r),(a=l(o))==null||a.destroy(),v.clear()}});function P(r){L[r]||(L[r]=!0)}function C(r){(!(r in L)||L[r])&&(L[r]=!1)}function H(r,a){_[r]!=a&&(a===""||a==null?delete _[r]:_[r]=a)}function t(r){r in _&&delete _[r]}function d(r){var a;(a=l(o))==null||a.shake(r)}function n(r){m(r)}function f(r){A(r)}function B(){if(l(o)==null)throw new Error("Instance is undefined.");return l(o).getWidth()}function O(){return c}var x=Ee(),he=me(x);{var pe=r=>{var a=Oe();let h;var q=K(a);ne(q,()=>e.children??te),Q(a),z(a,u=>c=u,()=>c),J(a,(u,g)=>{var w;return(w=X)==null?void 0:w(u,g)},i),k((u,g)=>h=Z(a,h,{class:u,style:g,...p}),[()=>Y({[s()]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":m(),"mdc-floating-label--required":A(),...L}),()=>Object.entries(_).map(([u,g])=>`${u}: ${g};`).concat([y()]).join(" ")]),U(r,a)},ve=r=>{var a=Pe();let h;var q=K(a);ne(q,()=>e.children??te),Q(a),z(a,u=>c=u,()=>c),J(a,(u,g)=>{var w;return(w=X)==null?void 0:w(u,g)},i),k((u,g)=>h=Z(a,h,{class:u,style:g,for:e.for||(T?T.id:void 0),...p}),[()=>Y({[s()]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":m(),"mdc-floating-label--required":A(),...L}),()=>Object.entries(_).map(([u,g])=>`${u}: ${g};`).concat([y()]).join(" ")]),U(r,a)};ue(he,r=>{N()?r(pe):r(ve,!1)})}return U(E,x),re({shake:d,float:n,setRequired:f,getWidth:B,getElement:O})}var Te=V("<div></div>");function Ue(E,e){ae(e,!0);let i=b(e,"use",19,()=>[]),s=b(e,"class",3,""),y=b(e,"style",3,""),m=b(e,"active",3,!1),A=se(e,["$$slots","$$events","$$legacy","use","class","style","active"]),N,p=G(void 0),c=new fe,o=I({}),v=I({});ie(()=>(W(p,I(new ye({addClass:_,removeClass:T,hasClass:L,setStyle:D,registerEventHandler:(t,d)=>c.on(P(),t,d),deregisterEventHandler:(t,d)=>c.off(P(),t,d)}))),l(p).init(),()=>{var t;(t=l(p))==null||t.destroy(),c.clear()}));function L(t){return t in o?o[t]:P().classList.contains(t)}function _(t){o[t]||(o[t]=!0)}function T(t){(!(t in o)||o[t])&&(o[t]=!1)}function D(t,d){v[t]!=d&&(d===""||d==null?delete v[t]:v[t]=d)}function R(){var t;(t=l(p))==null||t.activate()}function M(){var t;(t=l(p))==null||t.deactivate()}function F(t){var d;(d=l(p))==null||d.setRippleCenter(t)}function P(){return N}var C=Te();let H;return z(C,t=>N=t,()=>N),J(C,(t,d)=>{var n;return(n=X)==null?void 0:n(t,d)},i),k((t,d)=>H=Z(C,H,{class:t,style:d,...A}),[()=>Y({[s()]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":m(),...o}),()=>Object.entries(v).map(([t,d])=>`${t}: ${d};`).concat([y()]).join(" ")]),U(E,C),re({activate:R,deactivate:M,setRippleCenter:F,getElement:P})}var He=V('<div class="mdc-notched-outline__notch"><!></div>'),Se=V('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');function je(E,e){ae(e,!0);let i=b(e,"use",19,()=>[]),s=b(e,"class",3,""),y=b(e,"notched",3,!1),m=b(e,"noLabel",3,!1),A=se(e,["$$slots","$$events","$$legacy","use","class","notched","noLabel","children"]),N,p=G(void 0),c=G(void 0),o=I({}),v=I({}),L;ee(()=>{l(c)!==L&&(l(c)?(l(c).addStyle("transition-duration","0s"),_("mdc-notched-outline--upgraded"),requestAnimationFrame(()=>{l(c)&&l(c).removeStyle("transition-duration")})):T("mdc-notched-outline--upgraded"),L=l(c))}),de("SMUI:floating-label:mount",n=>{W(c,I(n))}),de("SMUI:floating-label:unmount",()=>{W(c,void 0)}),ie(()=>(W(p,I(new Ne({addClass:_,removeClass:T,setNotchWidthProperty:n=>D("width",n+"px"),removeNotchWidthProperty:()=>R("width")}))),l(p).init(),()=>{var n;(n=l(p))==null||n.destroy()}));function _(n){o[n]||(o[n]=!0)}function T(n){(!(n in o)||o[n])&&(o[n]=!1)}function D(n,f){v[n]!=f&&(f===""||f==null?delete v[n]:v[n]=f)}function R(n){n in v&&delete v[n]}function M(n){var f;(f=l(p))==null||f.notch(n)}function F(){var n;(n=l(p))==null||n.closeNotch()}function P(){return N}var C=Se();let H;var t=ge(K(C),2);{var d=n=>{var f=He(),B=K(f);ne(B,()=>e.children??te),Q(f),k(O=>Ce(f,"style",O),[()=>Object.entries(v).map(([O,x])=>`${O}: ${x};`).join(" ")]),U(n,f)};ue(t,n=>{m()||n(d)})}return be(2),Q(C),z(C,n=>N=n,()=>N),J(C,(n,f)=>{var B;return(B=X)==null?void 0:B(n,f)},i),k(n=>H=Z(C,H,{class:n,...A}),[()=>Y({[s()]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":y(),"mdc-notched-outline--no-label":m(),...o})]),U(E,C),re({notch:M,closeNotch:F,getElement:P})}export{Be as F,Ue as L,je as N};
