import{t as X,a as v,c as de,b as fe,s as Fe,e as et}from"../chunks/DGIi1ET6.js";import{p as J,w as me,u as ue,B as Ze,t as Ee,a as $,c as be,g as n,b as G,e as B,v as se,r as Se,f as x,q as tt,x as ct,s as Q,d as q,n as pe,aK as mt,aL as nt,ay as Be}from"../chunks/Bt561VDD.js";import{c as g,p as L,b as K,r as oe,e as Ce,d as Qe,i as we,a as ut,s as ye}from"../chunks/CdiXb2lo.js";import{_ as Ie,a as Oe,M as Ue,s as ne,b as Pe,c as ve,e as ht,p as _t,f as Le,h as ge,u as ke,t as gt,S as Je,R as vt,B as Ct,i as dt,L as At,I as je,l as Tt,d as bt,v as St}from"../chunks/NJ6IM5ih.js";import{C as Ne,a as Et,d as Ot,T as Ge}from"../chunks/B8gLBzio.js";import{p as qe}from"../chunks/BBoy4dPU.js";import{a as It,b as Ke}from"../chunks/pS0FiEQ1.js";/**
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
 */var Te={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},He={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},_e={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3};/**
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
 */var yt=_e.ARIA_LIVE_DELAY_MS,at=He.ARIA_LIVE_LABEL_TEXT_ATTR;function Mt(i,e){e===void 0&&(e=i);var t=i.getAttribute("aria-live"),a=e.textContent.trim();if(!(!a||!t)){i.setAttribute("aria-live","off"),e.textContent="";var u=document.createElement("span");u.setAttribute("style","display: inline-block; width: 0; height: 1px;"),u.textContent=" ",e.appendChild(u),e.setAttribute(at,a),setTimeout(function(){i.setAttribute("aria-live",t),e.removeAttribute(at),e.textContent=a},yt)}}/**
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
 */var rt=Te.OPENING,it=Te.OPEN,st=Te.CLOSING,Nt=He.REASON_ACTION,Xe=He.REASON_DISMISS,wt=function(i){Ie(e,i);function e(t){var a=i.call(this,Oe(Oe({},e.defaultAdapter),t))||this;return a.opened=!1,a.animationFrame=0,a.animationTimer=0,a.autoDismissTimer=0,a.autoDismissTimeoutMs=_e.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,a.closeOnEscape=!0,a}return Object.defineProperty(e,"cssClasses",{get:function(){return Te},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return He},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return _e},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.clearAutoDismissTimer(),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0,this.adapter.removeClass(rt),this.adapter.removeClass(it),this.adapter.removeClass(st)},e.prototype.open=function(){var t=this;this.clearAutoDismissTimer(),this.opened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(st),this.adapter.addClass(rt),this.adapter.announce(),this.runNextAnimationFrame(function(){t.adapter.addClass(it),t.animationTimer=setTimeout(function(){var a=t.getTimeoutMs();t.handleAnimationTimerEnd(),t.adapter.notifyOpened(),a!==_e.INDETERMINATE&&(t.autoDismissTimer=setTimeout(function(){t.close(Xe)},a))},_e.SNACKBAR_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(t){var a=this;t===void 0&&(t=""),this.opened&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.clearAutoDismissTimer(),this.opened=!1,this.adapter.notifyClosing(t),this.adapter.addClass(Te.CLOSING),this.adapter.removeClass(Te.OPEN),this.adapter.removeClass(Te.OPENING),clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){a.handleAnimationTimerEnd(),a.adapter.notifyClosed(t)},_e.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.opened},e.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs},e.prototype.setTimeoutMs=function(t){var a=_e.MIN_AUTO_DISMISS_TIMEOUT_MS,u=_e.MAX_AUTO_DISMISS_TIMEOUT_MS,s=_e.INDETERMINATE;if(t===_e.INDETERMINATE||t<=u&&t>=a)this.autoDismissTimeoutMs=t;else throw new Error(`
        timeoutMs must be an integer in the range `+a+"–"+u+`
        (or `+s+" to disable), but got '"+t+"'")},e.prototype.getCloseOnEscape=function(){return this.closeOnEscape},e.prototype.setCloseOnEscape=function(t){this.closeOnEscape=t},e.prototype.handleKeyDown=function(t){var a=t.key==="Escape"||t.keyCode===27;a&&this.getCloseOnEscape()&&this.close(Xe)},e.prototype.handleActionButtonClick=function(t){this.close(Nt)},e.prototype.handleActionIconClick=function(t){this.close(Xe)},e.prototype.clearAutoDismissTimer=function(){clearTimeout(this.autoDismissTimer),this.autoDismissTimer=0},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(Te.OPENING),this.adapter.removeClass(Te.CLOSING)},e.prototype.runNextAnimationFrame=function(t){var a=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){a.animationFrame=0,clearTimeout(a.animationTimer),a.animationTimer=setTimeout(t,0)})},e}(Ue);let ot=Promise.resolve();var Dt=X("<aside><div><!></div></aside>");function Pt(i,e){J(e,!0);const{closest:t}=gt;let a=()=>{};function u(r){return r===a}let s=g(e,"use",19,()=>[]),E=g(e,"class",3,""),o=g(e,"leading",3,!1),h=g(e,"timeoutMs",3,5e3),l=g(e,"closeOnEscape",3,!0),I=g(e,"labelText",3,a),C=g(e,"actionButtonText",3,a),y=g(e,"surface$use",19,()=>[]),U=g(e,"surface$class",3,""),O=oe(e,["$$slots","$$events","$$legacy","use","class","variant","leading","timeoutMs","closeOnEscape","labelText","actionButtonText","surface$use","surface$class","children"]),p,c=G(void 0),d=L({}),A,D=new Promise(r=>A=r);me("SMUI:label:context","snackbar"),ue(()=>{n(c)&&n(c).getTimeoutMs()!==h()&&n(c).setTimeoutMs(h())}),ue(()=>{n(c)&&n(c).getCloseOnEscape()!==l()&&n(c).setCloseOnEscape(l())}),ue(()=>{n(c)&&!u(I())&&j().textContent!==I()&&(j().textContent=I())}),ue(()=>{n(c)&&!u(C())&&m().textContent!==C()&&(m().textContent=C())}),Ze(()=>(B(c,L(new wt({addClass:P,announce:()=>Mt(j()),notifyClosed:r=>ge(b(),"SMUISnackbarClosed",r?{reason:r}:{}),notifyClosing:r=>ge(b(),"SMUISnackbarClosing",r?{reason:r}:{}),notifyOpened:()=>ge(b(),"SMUISnackbarOpened"),notifyOpening:()=>ge(b(),"SMUISnackbarOpening"),removeClass:S}))),n(c).init(),()=>{var r;(r=n(c))==null||r.destroy()}));function P(r){d[r]||(d[r]=!0)}function S(r){(!(r in d)||d[r])&&(d[r]=!1)}function z(r){const w=r.target;n(c)&&(t(w,".mdc-snackbar__action")?n(c).handleActionButtonClick(r):t(w,".mdc-snackbar__dismiss")&&n(c).handleActionIconClick(r))}function R(){A(),D=new Promise(r=>A=r)}function H(){ot=ot.then(()=>{var r;return(r=n(c))==null||r.open(),D})}function le(){var r;return(r=n(c))==null?void 0:r.open()}function Y(r){var w;return(w=n(c))==null?void 0:w.close(r)}function T(){if(n(c)==null)throw new Error("Instance is undefined.");return n(c).isOpen()}function j(){return b().querySelector(".mdc-snackbar__label")??document.createElement("div")}function m(){return b().querySelector(".mdc-snackbar__action")??document.createElement("button")}function b(){return p}var M=Dt(),ae=r=>{var w;n(c)&&n(c).handleKeyDown(r),(w=e.onkeydown)==null||w.call(e,r)},W=r=>{var w;R(),(w=e.onSMUISnackbarClosed)==null||w.call(e,r)};let Z;var _=be(M),N=r=>{var w;z(r),(w=e.surface$onclick)==null||w.call(e,r)};let V;var he=be(_);return ne(he,()=>e.children??se),Se(_),Pe(_,(r,w)=>{var f;return(f=ke)==null?void 0:f(r,w)},y),Se(M),K(M,r=>p=r,()=>p),Pe(M,(r,w)=>{var f;return(f=ke)==null?void 0:f(r,w)},s),Ee((r,w,f,F)=>{Z=Le(M,Z,{class:r,...w,onkeydown:ae,onSMUISnackbarClosed:W}),V=Le(_,V,{class:f,role:"status","aria-relevant":"additions",...F,onclick:N})},[()=>ve({[E()]:!0,"mdc-snackbar":!0,"mdc-snackbar--stacked":e.variant==="stacked","mdc-snackbar--leading":o(),...d}),()=>ht(O,["surface$"]),()=>ve({[U()]:!0,"mdc-snackbar__surface":!0}),()=>_t(O,"surface$")]),v(i,M),$({open:H,forceOpen:le,close:Y,isOpen:T,getLabelElement:j,getActionButtonElement:m,getElement:b})}function Lt(i,e){J(e,!0);let t=oe(e,["$$slots","$$events","$$legacy","children"]),a;function u(){return a.getElement()}return K(Ne(i,Ce({_smuiClass:"mdc-snackbar__actions",_smuiProps:{"aria-atomic":"true"},_smuiContexts:{"SMUI:button:context":"snackbar:actions","SMUI:icon-button:context":"snackbar:actions","SMUI:label:context":void 0},tag:"div"},()=>t,{children:(s,E)=>{var o=de(),h=x(o);ne(h,()=>e.children??se),v(s,o)},$$slots:{default:!0}})),s=>a=s,()=>a),$({getElement:u})}/**
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
 */var xe={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},Ae={ARIA_LABEL:"aria-label",ARIA_PRESSED:"aria-pressed",DATA_ARIA_LABEL_OFF:"data-aria-label-off",DATA_ARIA_LABEL_ON:"data-aria-label-on",CHANGE_EVENT:"MDCIconButtonToggle:change"};/**
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
 */var kt=function(i){Ie(e,i);function e(t){var a=i.call(this,Oe(Oe({},e.defaultAdapter),t))||this;return a.hasToggledAriaLabel=!1,a}return Object.defineProperty(e,"cssClasses",{get:function(){return xe},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Ae},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},getAttr:function(){return null},setAttr:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this.adapter.getAttr(Ae.DATA_ARIA_LABEL_ON),a=this.adapter.getAttr(Ae.DATA_ARIA_LABEL_OFF);if(t&&a){if(this.adapter.getAttr(Ae.ARIA_PRESSED)!==null)throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");this.hasToggledAriaLabel=!0}else this.adapter.setAttr(Ae.ARIA_PRESSED,String(this.isOn()))},e.prototype.handleClick=function(){this.toggle(),this.adapter.notifyChange({isOn:this.isOn()})},e.prototype.isOn=function(){return this.adapter.hasClass(xe.ICON_BUTTON_ON)},e.prototype.toggle=function(t){if(t===void 0&&(t=!this.isOn()),t?this.adapter.addClass(xe.ICON_BUTTON_ON):this.adapter.removeClass(xe.ICON_BUTTON_ON),this.hasToggledAriaLabel){var a=t?this.adapter.getAttr(Ae.DATA_ARIA_LABEL_ON):this.adapter.getAttr(Ae.DATA_ARIA_LABEL_OFF);this.adapter.setAttr(Ae.ARIA_LABEL,a||"")}else this.adapter.setAttr(Ae.ARIA_PRESSED,""+t)},e}(Ue),Bt=X('<div class="mdc-icon-button__touch"></div>'),xt=X('<div class="mdc-icon-button__ripple"></div> <!><!>',1);function De(i,e){J(e,!0);let t=()=>{};function a(f){return f===t}let u=g(e,"use",19,()=>[]),s=g(e,"class",3,""),E=g(e,"style",3,""),o=g(e,"ripple",3,!0),h=g(e,"toggle",3,!1),l=g(e,"pressed",15,t),I=g(e,"touch",3,!1),C=g(e,"displayFlex",3,!0),y=g(e,"size",3,"normal"),U=g(e,"component",3,Je),O=g(e,"tag",19,()=>e.href==null?"button":"a"),p=oe(e,["$$slots","$$events","$$legacy","use","class","style","ripple","color","toggle","pressed","ariaLabelOn","ariaLabelOff","touch","displayFlex","size","href","action","component","tag","children"]),c,d,A=G(L({})),D=L({}),P=G(L({})),S=tt("SMUI:icon-button:context"),z=tt("SMUI:icon-button:aria-describedby");const R=q(()=>{if(S==="data-table:pagination")switch(e.action){case"first-page":return{"data-first-page":"true"};case"prev-page":return{"data-prev-page":"true"};case"next-page":return{"data-next-page":"true"};case"last-page":return{"data-last-page":"true"};default:return{"data-action":"true"}}else return S==="dialog:header"||S==="dialog:sheet"?{"data-mdc-dialog-action":e.action}:{action:e.action}});let H=!!e.disabled;ue(()=>{if(H!=!!e.disabled){if(c){const f=W();"blur"in f&&f.blur()}H=!!e.disabled}}),me("SMUI:icon:context","icon-button");let le=null;ue(()=>{c&&W()&&h()!==le&&(h()&&!d?(d=new kt({addClass:T,hasClass:Y,notifyChange:f=>{ae(f),ge(W(),"SMUIIconButtonToggleChange",f)},removeClass:j,getAttr:b,setAttr:M}),d.init()):!h()&&d&&(d.destroy(),d=void 0,B(A,L({})),B(P,L({}))),le=h())}),ue(()=>{d&&!a(l())&&d.isOn()!==l()&&d.toggle(l())}),ct(()=>{d&&d.destroy()});function Y(f){return f in n(A)?n(A)[f]:W().classList.contains(f)}function T(f){n(A)[f]||(n(A)[f]=!0)}function j(f){(!(f in n(A))||n(A)[f])&&(n(A)[f]=!1)}function m(f,F){D[f]!=F&&(F===""||F==null?delete D[f]:D[f]=F)}function b(f){return f in n(P)?n(P)[f]??null:W().getAttribute(f)}function M(f,F){n(P)[f]!==F&&(n(P)[f]=F)}function ae(f){l(f.isOn)}function W(){return c.getElement()}var Z=de(),_=x(Z);const N=q(()=>[[vt,{ripple:o(),unbounded:!0,color:e.color,disabled:!!e.disabled,addClass:T,removeClass:j,addStyle:m}],...u()]),V=q(()=>ve({[s()]:!0,"mdc-icon-button":!0,"mdc-icon-button--on":!a(l())&&l(),"mdc-icon-button--touch":I(),"mdc-icon-button--display-flex":C(),"smui-icon-button--size-button":y()==="button","smui-icon-button--size-mini":y()==="mini","mdc-icon-button--reduced-size":y()==="mini"||y()==="button","mdc-card__action":S==="card:action","mdc-card__action--icon":S==="card:action","mdc-top-app-bar__navigation-icon":S==="top-app-bar:navigation","mdc-top-app-bar__action-item":S==="top-app-bar:action","mdc-snackbar__dismiss":S==="snackbar:actions","mdc-data-table__pagination-button":S==="data-table:pagination","mdc-data-table__sort-icon-button":S==="data-table:sortable-header-cell","mdc-dialog__close":(S==="dialog:header"||S==="dialog:sheet")&&e.action==="close",...n(A)})),he=q(()=>Object.entries(D).map(([f,F])=>`${f}: ${F};`).concat([E()]).join(" ")),r=q(()=>a(l())?null:l()?"true":"false"),w=q(()=>l()?e.ariaLabelOn:e.ariaLabelOff);return Qe(_,U,(f,F)=>{K(F(f,Ce({get tag(){return O()},get use(){return n(N)},get class(){return n(V)},get style(){return n(he)},get"aria-pressed"(){return n(r)},get"aria-label"(){return n(w)},get"data-aria-label-on"(){return e.ariaLabelOn},get"data-aria-label-off"(){return e.ariaLabelOff},"aria-describedby":z,get href(){return e.href}},()=>n(R),()=>n(P),()=>p,{onclick:k=>{var re;d&&d.handleClick(),S==="top-app-bar:navigation"&&ge(W(),"SMUITopAppBarIconButtonNav"),(re=e.onclick)==null||re.call(e,k)},children:(k,re)=>{var ee=xt(),ce=Q(x(ee),2);ne(ce,()=>e.children??se);var te=Q(ce);{var Ve=ze=>{var pt=Bt();v(ze,pt)};we(te,ze=>{I()&&ze(Ve)})}v(k,ee)},$$slots:{default:!0}})),k=>c=k,()=>c)}),v(i,Z),$({getElement:W})}var Rt=X("<!> <!>",1);function Ft(i,e){J(e,!0);let t=G(1e4),a=G(void 0),u=G(""),s,E=null,o=G(void 0);function h(p,c,d,A){return B(u,L(p)),B(t,L(c||1e4)),B(o,L(d)),B(a,L(A||"info")),s.forceOpen(),new Promise(D=>{E=D})}function l(p,c,d){return h(p,c,d,"success")}function I(p,c,d){return h(p,c,d,"info")}function C(p,c,d){return h(p,c,d,"warn")}function y(p,c,d){return h(p,c,d,"error")}function U(){s.close()}function O(p){E&&(E(p.detail.reason),E=null)}return K(Pt(i,{get class(){return n(a)},get timeoutMs(){return n(t)},onSMUISnackbarClosed:O,children:(p,c)=>{var d=Rt(),A=x(d);Et(A,{children:(P,S)=>{pe();var z=fe();Ee(()=>Fe(z,n(u))),v(P,z)},$$slots:{default:!0}});var D=Q(A,2);Lt(D,{children:(P,S)=>{var z=de(),R=x(z);{var H=Y=>{Ct(Y,{get title(){return n(o)},children:(T,j)=>{pe();var m=fe();Ee(()=>Fe(m,n(o))),v(T,m)},$$slots:{default:!0}})},le=Y=>{De(Y,{class:"material-icons",title:"Dismiss",children:(T,j)=>{pe();var m=fe("close");v(T,m)},$$slots:{default:!0}})};we(R,Y=>{n(o)?Y(H):Y(le,!1)})}v(P,z)},$$slots:{default:!0}}),v(p,d)},$$slots:{default:!0}}),p=>s=p,()=>s),$({open:h,success:l,info:I,warn:C,error:y,close:U})}/**
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
 */var Me={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},Ye={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},Ut={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};/**
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
 */var $e=function(i){Ie(e,i);function e(t){return i.call(this,Oe(Oe({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"strings",{get:function(){return Ut},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Me},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Ye},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.handleTargetScroll=function(){},e.prototype.handleWindowResize=function(){},e.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},e}(Ue);/**
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
 */var Re=0,We=function(i){Ie(e,i);function e(t){var a=i.call(this,t)||this;return a.wasDocked=!0,a.isDockedShowing=!0,a.currentAppBarOffsetTop=0,a.isCurrentlyBeingResized=!1,a.resizeThrottleId=Re,a.resizeDebounceId=Re,a.lastScrollPosition=a.adapter.getViewportScrollY(),a.topAppBarHeight=a.adapter.getTopAppBarHeight(),a}return e.prototype.destroy=function(){i.prototype.destroy.call(this),this.adapter.setStyle("top","")},e.prototype.handleTargetScroll=function(){var t=Math.max(this.adapter.getViewportScrollY(),0),a=t-this.lastScrollPosition;this.lastScrollPosition=t,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=a,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},e.prototype.handleWindowResize=function(){var t=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout(function(){t.resizeThrottleId=Re,t.throttledResizeHandler()},Ye.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout(function(){t.handleTargetScroll(),t.isCurrentlyBeingResized=!1,t.resizeDebounceId=Re},Ye.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},e.prototype.checkForUpdate=function(){var t=-this.topAppBarHeight,a=this.currentAppBarOffsetTop<0,u=this.currentAppBarOffsetTop>t,s=a&&u;if(s)this.wasDocked=!1;else if(this.wasDocked){if(this.isDockedShowing!==u)return this.isDockedShowing=u,!0}else return this.wasDocked=!0,!0;return s},e.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var t=this.currentAppBarOffsetTop;Math.abs(t)>=this.topAppBarHeight&&(t=-128),this.adapter.setStyle("top",t+"px")}},e.prototype.throttledResizeHandler=function(){var t=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==t&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-t,this.topAppBarHeight=t),this.handleTargetScroll()},e}($e);/**
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
 */var Ht=function(i){Ie(e,i);function e(){var t=i!==null&&i.apply(this,arguments)||this;return t.wasScrolled=!1,t}return e.prototype.handleTargetScroll=function(){var t=this.adapter.getViewportScrollY();t<=0?this.wasScrolled&&(this.adapter.removeClass(Me.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(Me.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},e}(We);/**
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
 */var Vt=function(i){Ie(e,i);function e(t){var a=i.call(this,t)||this;return a.collapsed=!1,a.isAlwaysCollapsed=!1,a}return Object.defineProperty(e.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),e.prototype.init=function(){i.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(Me.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(Me.SHORT_COLLAPSED_CLASS))},e.prototype.setAlwaysCollapsed=function(t){this.isAlwaysCollapsed=!!t,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},e.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},e.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},e.prototype.maybeCollapseBar=function(){if(!this.isAlwaysCollapsed){var t=this.adapter.getViewportScrollY();t<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse()}},e.prototype.uncollapse=function(){this.adapter.removeClass(Me.SHORT_COLLAPSED_CLASS),this.collapsed=!1},e.prototype.collapse=function(){this.adapter.addClass(Me.SHORT_COLLAPSED_CLASS),this.collapsed=!0},e}($e),zt=X("<header><!></header>");function jt(i,e){J(e,!0);let t=()=>{};function a(_){return _===t}let u=g(e,"use",19,()=>[]),s=g(e,"class",3,""),E=g(e,"style",3,""),o=g(e,"variant",3,"standard"),h=g(e,"color",3,"primary"),l=g(e,"collapsed",15,t),I=g(e,"prominent",3,!1),C=g(e,"dense",3,!1),y=oe(e,["$$slots","$$events","$$legacy","use","class","style","variant","color","collapsed","prominent","dense","scrollTarget","children"]);const U=!a(l())&&!!l();a(l())&&l(!1);let O,p=G(void 0),c=new dt,d=G(L({})),A=G(L({})),D=G(void 0),P=mt({variant:o(),prominent:I(),dense:C()},_=>{B(D,L(_))});ue(()=>{n(D)&&n(D)({variant:o(),prominent:I(),dense:C()})}),ue(()=>{n(p)&&o()==="short"&&"setAlwaysCollapsed"in n(p)&&n(p).setAlwaysCollapsed(U)});let S;ue(()=>{S!==e.scrollTarget&&(S&&c.off(S,"scroll",j),e.scrollTarget&&c.on(e.scrollTarget,"scroll",j),S=e.scrollTarget)});let z=o();ue(()=>{z!==o()&&n(p)&&(z=o(),n(p).destroy(),B(d,L({})),B(A,L({})),B(p,L(R())),n(p).init())}),Ze(()=>(B(p,L(R())),n(p).init(),()=>{var _;(_=n(p))==null||_.destroy(),c.clear()}));function R(){const _={static:$e,short:Vt,fixed:Ht,standard:We}[o()]||We;return new _({hasClass:H,addClass:le,removeClass:Y,setStyle:T,getTopAppBarHeight:()=>b().clientHeight,notifyNavigationIconClicked:()=>ge(b(),"SMUITopAppBarNav"),getViewportScrollY:()=>e.scrollTarget==null?window.pageYOffset:e.scrollTarget.scrollTop,getTotalActionItems:()=>b().querySelectorAll(".mdc-top-app-bar__action-item").length})}function H(_){return _ in n(d)?n(d)[_]:b().classList.contains(_)}function le(_){n(d)[_]||(n(d)[_]=!0)}function Y(_){(!(_ in n(d))||n(d)[_])&&(n(d)[_]=!1)}function T(_,N){n(A)[_]!=N&&(N===""||N==null?delete n(A)[_]:n(A)[_]=N)}function j(){n(p)&&(n(p).handleTargetScroll(),o()==="short"&&l("isCollapsed"in n(p)&&n(p).isCollapsed))}function m(){return P}function b(){return O}var M=zt();et("resize",nt,()=>o()!=="short"&&o()!=="fixed"&&n(p)&&n(p).handleWindowResize()),et("scroll",nt,()=>e.scrollTarget==null&&j());var ae=_=>{var N;n(p)&&n(p).handleNavigationClick(),(N=e.onSMUITopAppBarIconButtonNav)==null||N.call(e,_)};let W;var Z=be(M);return ne(Z,()=>e.children??se),Se(M),K(M,_=>O=_,()=>O),Pe(M,(_,N)=>{var V;return(V=ke)==null?void 0:V(_,N)},u),Ee((_,N)=>W=Le(M,W,{class:_,style:N,...y,onSMUITopAppBarIconButtonNav:ae}),[()=>ve({[s()]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":o()==="short","mdc-top-app-bar--short-collapsed":l(),"mdc-top-app-bar--fixed":o()==="fixed","smui-top-app-bar--static":o()==="static","smui-top-app-bar--color-secondary":h()==="secondary","mdc-top-app-bar--prominent":I(),"mdc-top-app-bar--dense":C(),...n(d)}),()=>Object.entries(n(A)).map(([_,N])=>`${_}: ${N};`).concat([E()]).join(" ")]),v(i,M),$({getPropStore:m,getElement:b})}function Gt(i,e){J(e,!0);let t=oe(e,["$$slots","$$events","$$legacy","children"]),a;function u(){return a.getElement()}return K(Ne(i,Ce({_smuiClass:"mdc-top-app-bar__row",tag:"div"},()=>t,{children:(s,E)=>{var o=de(),h=x(o);ne(h,()=>e.children??se),v(s,o)},$$slots:{default:!0}})),s=>a=s,()=>a),$({getElement:u})}var qt=X("<section><!></section>");function lt(i,e){J(e,!0);let t=g(e,"use",19,()=>[]),a=g(e,"class",3,""),u=g(e,"align",3,"start"),s=g(e,"toolbar",3,!1),E=oe(e,["$$slots","$$events","$$legacy","use","class","align","toolbar","children"]),o;me("SMUI:icon-button:context",s()?"top-app-bar:action":"top-app-bar:navigation"),me("SMUI:button:context",s()?"top-app-bar:action":"top-app-bar:navigation");function h(){return o}var l=qt();let I;var C=be(l);return ne(C,()=>e.children??se),Se(l),K(l,y=>o=y,()=>o),Pe(l,(y,U)=>{var O;return(O=ke)==null?void 0:O(y,U)},t),Ee(y=>I=Le(l,I,{class:y,...s()?{role:"toolbar"}:{},...E}),[()=>ve({[a()]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":u()==="start","mdc-top-app-bar__section--align-end":u()==="end"})]),v(i,l),$({getElement:h})}function Kt(i,e){J(e,!0);let t=oe(e,["$$slots","$$events","$$legacy","children"]),a;function u(){return a.getElement()}return K(Ne(i,Ce({_smuiClass:"mdc-top-app-bar__title",tag:"span"},()=>t,{children:(s,E)=>{var o=de(),h=x(o);ne(h,()=>e.children??se),v(s,o)},$$slots:{default:!0}})),s=>a=s,()=>a),$({getElement:u})}function Xt(i,e){J(e,!0);const[t,a]=ut(),u=()=>ye(n(y),"$propStore",t);let s=g(e,"use",19,()=>[]),E=g(e,"class",3,""),o=g(e,"topAppBar",3,null),h=g(e,"component",3,Je),l=g(e,"tag",3,"main"),I=oe(e,["$$slots","$$events","$$legacy","use","class","topAppBar","component","tag","children"]),C;const y=q(()=>o()&&o().getPropStore()),U=q(()=>!n(y)||!u()||u().variant==="static"?"":u().variant==="short"?"mdc-top-app-bar--short-fixed-adjust":u().prominent&&u().dense?"mdc-top-app-bar--dense-prominent-fixed-adjust":u().prominent?"mdc-top-app-bar--prominent-fixed-adjust":u().dense?"mdc-top-app-bar--dense-fixed-adjust":"mdc-top-app-bar--fixed-adjust");function O(){return C.getElement()}var p=de(),c=x(p);const d=q(()=>ve({[E()]:!0,[n(U)]:!0}));Qe(c,h,(D,P)=>{K(P(D,Ce({get tag(){return l()},get use(){return s()},get class(){return n(d)}},()=>I,{children:(S,z)=>{var R=de(),H=x(R);ne(H,()=>e.children??se),v(S,R)},$$slots:{default:!0}})),S=>C=S,()=>C)}),v(i,p);var A=$({getElement:O});return a(),A}/**
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
 */var ie={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},Yt={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
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
 */var ft=function(i){Ie(e,i);function e(t){var a=i.call(this,Oe(Oe({},e.defaultAdapter),t))||this;return a.animationFrame=0,a.animationTimer=0,a}return Object.defineProperty(e,"strings",{get:function(){return Yt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return ie},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var t=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(ie.OPEN),this.adapter.addClass(ie.ANIMATE),this.runNextAnimationFrame(function(){t.adapter.addClass(ie.OPENING)}),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(ie.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(ie.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(ie.OPENING)||this.adapter.hasClass(ie.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(ie.CLOSING)},e.prototype.handleKeydown=function(t){var a=t.keyCode,u=t.key,s=u==="Escape"||a===27;s&&this.close()},e.prototype.handleTransitionEnd=function(t){var a=ie.OPENING,u=ie.CLOSING,s=ie.OPEN,E=ie.ANIMATE,o=ie.ROOT,h=this.isElement(t.target)&&this.adapter.elementHasClass(t.target,o);h&&(this.isClosing()?(this.adapter.removeClass(s),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(E),this.adapter.removeClass(a),this.adapter.removeClass(u))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(t){var a=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){a.animationFrame=0,clearTimeout(a.animationTimer),a.animationTimer=setTimeout(t,0)})},e.prototype.isElement=function(t){return!!t.classList},e}(Ue);/**
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
 */var Wt=function(i){Ie(e,i);function e(){return i!==null&&i.apply(this,arguments)||this}return e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(ft),Zt=X("<aside><!></aside>");function Qt(i,e){J(e,!0);const{FocusTrap:t}=Ot;let a=g(e,"use",19,()=>[]),u=g(e,"class",3,""),s=g(e,"open",15,!1),E=g(e,"fixed",3,!0),o=oe(e,["$$slots","$$events","$$legacy","use","class","variant","open","fixed","children"]),h,l=G(void 0),I=new dt,C=G(L({})),y=G(null),U,O=G(!1);me("SMUI:list:nav",!0),me("SMUI:list:item:nav",!0),me("SMUI:list:wrapFocus",!0),ue(()=>{n(l)&&n(l).isOpen()!==s()&&(s()?n(l).open():n(l).close())});let p=e.variant;ue(()=>{p!==e.variant&&(p=e.variant,n(l)&&n(l).destroy(),B(C,L({})),B(l,L(c())),n(l)&&n(l).init())}),Ze(()=>{U=new t(h,{skipInitialFocus:!0}),B(l,L(c())),n(l)&&n(l).init()}),ct(()=>{n(l)&&n(l).destroy(),n(O)&&I.off(n(O),"SMUIDrawerScrimClick",P),I.clear()});function c(){var b;n(O)&&I.off(n(O),"SMUIDrawerScrimClick",P),e.variant==="modal"&&(B(O,L(((b=R().parentNode)==null?void 0:b.querySelector(".mdc-drawer-scrim"))??!1)),n(O)&&I.on(n(O),"SMUIDrawerScrimClick",P));const m=e.variant==="dismissible"?ft:e.variant==="modal"?Wt:void 0;return m?new m({addClass:A,removeClass:D,hasClass:d,elementHasClass:(M,ae)=>M.classList.contains(ae),saveFocus:()=>B(y,L(document.activeElement)),restoreFocus:()=>{n(y)&&"focus"in n(y)&&R().contains(document.activeElement)&&n(y).focus()},focusActiveNavigationItem:()=>{const M=R().querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");M&&M.focus()},notifyClose:()=>{s(!1),ge(R(),"SMUIDrawerClosed")},notifyOpen:()=>{s(!0),ge(R(),"SMUIDrawerOpened")},trapFocus:()=>U.trapFocus(),releaseFocus:()=>U.releaseFocus()}):void 0}function d(m){return m in n(C)?n(C)[m]:R().classList.contains(m)}function A(m){n(C)[m]||(n(C)[m]=!0)}function D(m){(!(m in n(C))||n(C)[m])&&(n(C)[m]=!1)}function P(){n(l)&&"handleScrimClick"in n(l)&&n(l).handleScrimClick()}function S(m){s(m)}function z(){return s()}function R(){return h}var H=Zt(),le=m=>{var b;n(l)&&n(l).handleKeydown(m),(b=e.onkeydown)==null||b.call(e,m)},Y=m=>{var b;n(l)&&n(l).handleTransitionEnd(m),(b=e.ontransitionend)==null||b.call(e,m)};let T;var j=be(H);return ne(j,()=>e.children??se),Se(H),K(H,m=>h=m,()=>h),Pe(H,(m,b)=>{var M;return(M=ke)==null?void 0:M(m,b)},a),Ee(m=>T=Le(H,T,{class:m,...o,onkeydown:le,ontransitionend:Y}),[()=>ve({[u()]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":e.variant==="dismissible","mdc-drawer--modal":e.variant==="modal","smui-drawer__absolute":e.variant==="modal"&&!E(),...n(C)})]),v(i,H),$({setOpen:S,isOpen:z,getElement:R})}function Jt(i,e){J(e,!0);let t=oe(e,["$$slots","$$events","$$legacy","children"]),a;function u(){return a.getElement()}return K(Ne(i,Ce({_smuiClass:"mdc-drawer__content",tag:"div"},()=>t,{children:(s,E)=>{var o=de(),h=x(o);ne(h,()=>e.children??se),v(s,o)},$$slots:{default:!0}})),s=>a=s,()=>a),$({getElement:u})}function $t(i,e){J(e,!0);let t=oe(e,["$$slots","$$events","$$legacy","children"]),a;function u(){return a.getElement()}return K(Ne(i,Ce({_smuiClass:"mdc-drawer__header",tag:"div"},()=>t,{children:(s,E)=>{var o=de(),h=x(o);ne(h,()=>e.children??se),v(s,o)},$$slots:{default:!0}})),s=>a=s,()=>a),$({getElement:u})}function en(i,e){J(e,!0);let t=oe(e,["$$slots","$$events","$$legacy","children"]),a;function u(){return a.getElement()}return K(Ne(i,Ce({_smuiClass:"mdc-drawer__title",tag:"h1"},()=>t,{children:(s,E)=>{var o=de(),h=x(o);ne(h,()=>e.children??se),v(s,o)},$$slots:{default:!0}})),s=>a=s,()=>a),$({getElement:u})}function tn(i,e){J(e,!0);let t=oe(e,["$$slots","$$events","$$legacy","children"]),a;function u(){return a.getElement()}return K(Ne(i,Ce({_smuiClass:"mdc-drawer__subtitle",tag:"h2"},()=>t,{children:(s,E)=>{var o=de(),h=x(o);ne(h,()=>e.children??se),v(s,o)},$$slots:{default:!0}})),s=>a=s,()=>a),$({getElement:u})}function nn(i,e){J(e,!0);let t=g(e,"use",19,()=>[]),a=g(e,"class",3,""),u=g(e,"fixed",3,!0),s=g(e,"component",3,Je),E=g(e,"tag",3,"div"),o=oe(e,["$$slots","$$events","$$legacy","use","class","fixed","component","tag","children"]),h;function l(O){ge(I(),"SMUIDrawerScrimClick",O)}function I(){return h.getElement()}var C=de(),y=x(C);const U=q(()=>ve({[a()]:!0,"mdc-drawer-scrim":!0,"smui-drawer-scrim__absolute":!u()}));return Qe(y,s,(O,p)=>{K(p(O,Ce({get tag(){return E()},get use(){return t()},get class(){return n(U)}},()=>o,{onclick:c=>{var d;l(c),(d=e.onclick)==null||d.call(e,c)},children:(c,d)=>{var A=de(),D=x(A);ne(D,()=>e.children??se),v(c,A)},$$slots:{default:!0}})),c=>h=c,()=>h)}),v(i,C),$({getElement:I})}var an=X('<p class="subtitle svelte-urlrr3"> </p>'),rn=X('<p class="title svelte-urlrr3"> </p> <!>',1),sn=X("<!> <!>",1),on=X("<!> <!> <!>",1),ln=X("<!> <!>",1),cn=X("<!> <!>",1),un=X("<!> <!> <!>",1),dn=X("<!> <!>",1),fn=X('<div class="pt-2"><!></div>'),pn=X("<!> <!> <!> <!> <!>",1);function Tn(i,e){J(e,!0);const[t,a]=ut(),u=()=>ye(St,"$deviceOnline",t),s=()=>ye(c,"$title",t),E=()=>ye(n(d),"$subtitle",t),o=()=>ye(U,"$qrButtonClick",t),h=()=>ye(p,"$uploadButtonClick",t),l=()=>ye(O,"$downloadButtonClick",t);let I=G(null),C,y={open:(...T)=>{if(!C)throw new Error("Snackbar not defined");return C.open(...T)},error:(...T)=>{if(!C)throw new Error("Snackbar not defined");return C.error(...T)},close:(...T)=>{if(!C)throw new Error("Snackbar not defined");return C.close(...T)}};It(()=>B(P,!1));let U=Be(void 0);me("qrButtonClick",U);let O=Be(void 0);me("downloadButtonClick",O);let p=Be(void 0);me("uploadButtonClick",p);let c=Be("");me("title",c);let d=q(()=>Tt(async()=>{let T=await bt.current_event.toCollection().first();return T?T.name:""})),A=G(!1),D=q(()=>n(A)||!u());me("snackbar",y);let P=G(!1);var S=pn(),z=x(S);K(jt(z,{variant:"standard",children:(T,j)=>{Gt(T,{children:(m,b)=>{var M=ln(),ae=x(M);lt(ae,{children:(Z,_)=>{var N=sn(),V=x(N);De(V,{onclick:()=>{B(P,!n(P))},class:"material-icons",children:(r,w)=>{pe();var f=fe("menu");v(r,f)},$$slots:{default:!0}});var he=Q(V,2);Kt(he,{children:(r,w)=>{var f=rn(),F=x(f),k=be(F,!0);Se(F);var re=Q(F,2);{var ee=ce=>{var te=an(),Ve=be(te,!0);Se(te),Ee(()=>Fe(Ve,E())),v(ce,te)};we(re,ce=>{E()&&ce(ee)})}Ee(()=>Fe(k,s())),v(r,f)},$$slots:{default:!0}}),v(Z,N)},$$slots:{default:!0}});var W=Q(ae,2);lt(W,{align:"end",toolbar:!0,children:(Z,_)=>{var N=on(),V=x(N);{var he=k=>{De(k,{get onclick(){return o()},class:"material-icons",children:(re,ee)=>{pe();var ce=fe("qr_code");v(re,ce)},$$slots:{default:!0}})};we(V,k=>{o()&&k(he)})}var r=Q(V,2);{var w=k=>{const re=q(()=>ve({"material-icons":!0,"opacity-50":n(D)}));De(k,{onclick:async()=>{B(A,!0),await h()(),B(A,!1)},get disabled(){return n(D)},get class(){return n(re)},children:(ee,ce)=>{pe();var te=fe("upload");v(ee,te)},$$slots:{default:!0}})};we(r,k=>{h()&&k(w)})}var f=Q(r,2);{var F=k=>{const re=q(()=>ve({"material-icons":!0,"opacity-50":n(D)}));De(k,{onclick:async()=>{B(A,!0),await l()(),B(A,!1)},get disabled(){return n(D)},get class(){return n(re)},children:(ee,ce)=>{pe();var te=fe("download");v(ee,te)},$$slots:{default:!0}})};we(f,k=>{l()&&k(F)})}v(Z,N)},$$slots:{default:!0}}),v(m,M)},$$slots:{default:!0}})},$$slots:{default:!0}}),T=>B(I,L(T)),()=>n(I));var R=Q(z,2);K(Ft(R,{}),T=>C=T,()=>C);var H=Q(R,2);Qt(H,{variant:"modal",fixed:!0,get open(){return n(P)},set open(T){B(P,L(T))},children:(T,j)=>{var m=dn(),b=x(m);$t(b,{children:(ae,W)=>{var Z=cn(),_=x(Z);en(_,{children:(V,he)=>{pe();var r=fe("AEMBOT Dashboard");v(V,r)},$$slots:{default:!0}});var N=Q(_,2);tn(N,{children:(V,he)=>{pe();var r=fe("Select a page");v(V,r)},$$slots:{default:!0}}),v(ae,Z)},$$slots:{default:!0}});var M=Q(b,2);Jt(M,{children:(ae,W)=>{At(ae,{children:(Z,_)=>{var N=un(),V=x(N);const he=q(()=>qe.route.id==="/setup");je(V,{href:`${Ke}/setup`,get activated(){return n(he)},children:(k,re)=>{Ge(k,{children:(ee,ce)=>{pe();var te=fe("Setup");v(ee,te)},$$slots:{default:!0}})},$$slots:{default:!0}});var r=Q(V,2);const w=q(()=>qe.route.id==="/");je(r,{href:`${Ke}/`,get activated(){return n(w)},children:(k,re)=>{Ge(k,{children:(ee,ce)=>{pe();var te=fe("Laptop In Stands");v(ee,te)},$$slots:{default:!0}})},$$slots:{default:!0}});var f=Q(r,2);const F=q(()=>qe.route.id==="/on-field");je(f,{href:`${Ke}/on-field`,get activated(){return n(F)},children:(k,re)=>{Ge(k,{children:(ee,ce)=>{pe();var te=fe("Phone On Field");v(ee,te)},$$slots:{default:!0}})},$$slots:{default:!0}}),v(Z,N)},$$slots:{default:!0}})},$$slots:{default:!0}}),v(T,m)},$$slots:{default:!0}});var le=Q(H,2);nn(le,{});var Y=Q(le,2);Xt(Y,{get topAppBar(){return n(I)},class:"main-content prose prose-invert prose-slate max-w-none",children:(T,j)=>{var m=fn(),b=be(m);ne(b,()=>e.children),Se(m),v(T,m)},$$slots:{default:!0}}),v(i,S),$(),a()}export{Tn as component};
