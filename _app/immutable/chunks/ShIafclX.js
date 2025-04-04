import{c as gt,t as V,a as L}from"./fWNZ1HDm.js";import{p as bt,d as M,l as P,y as T,m as _t,o as At,f as U,s as z,e as ht,g as a,v as b,a as pt,b as k}from"./oK9KA-Q3.js";import{a as s,p as h,c as mt,b as Ot,s as Ct,d as vt,r as yt}from"./BHoOlQn2.js";import{_ as It,a as j,M as Lt,S as Tt,s as Et,b as w,R as Bt,c as xt}from"./Bqjg6-1I.js";/**
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
 */var v={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},u={ARIA_LABEL:"aria-label",ARIA_PRESSED:"aria-pressed",DATA_ARIA_LABEL_OFF:"data-aria-label-off",DATA_ARIA_LABEL_ON:"data-aria-label-on",CHANGE_EVENT:"MDCIconButtonToggle:change"};/**
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
 */var Rt=function(p){It(t,p);function t(r){var l=p.call(this,j(j({},t.defaultAdapter),r))||this;return l.hasToggledAriaLabel=!1,l}return Object.defineProperty(t,"cssClasses",{get:function(){return v},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return u},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},getAttr:function(){return null},setAttr:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){var r=this.adapter.getAttr(u.DATA_ARIA_LABEL_ON),l=this.adapter.getAttr(u.DATA_ARIA_LABEL_OFF);if(r&&l){if(this.adapter.getAttr(u.ARIA_PRESSED)!==null)throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");this.hasToggledAriaLabel=!0}else this.adapter.setAttr(u.ARIA_PRESSED,String(this.isOn()))},t.prototype.handleClick=function(){this.toggle(),this.adapter.notifyChange({isOn:this.isOn()})},t.prototype.isOn=function(){return this.adapter.hasClass(v.ICON_BUTTON_ON)},t.prototype.toggle=function(r){if(r===void 0&&(r=!this.isOn()),r?this.adapter.addClass(v.ICON_BUTTON_ON):this.adapter.removeClass(v.ICON_BUTTON_ON),this.hasToggledAriaLabel){var l=r?this.adapter.getAttr(u.DATA_ARIA_LABEL_ON):this.adapter.getAttr(u.DATA_ARIA_LABEL_OFF);this.adapter.setAttr(u.ARIA_LABEL,l||"")}else this.adapter.setAttr(u.ARIA_PRESSED,""+r)},t}(Lt),St=V('<div class="mdc-icon-button__touch"></div>'),Dt=V('<div class="mdc-icon-button__ripple"></div> <!><!>',1);function Ut(p,t){bt(t,!0);let r=()=>{};function l(e){return e===r}let G=s(t,"use",19,()=>[]),H=s(t,"class",3,""),q=s(t,"style",3,""),J=s(t,"ripple",3,!0),m=s(t,"toggle",3,!1),c=s(t,"pressed",15,r),E=s(t,"touch",3,!1),K=s(t,"displayFlex",3,!0),O=s(t,"size",3,"normal"),Q=s(t,"component",3,Tt),W=s(t,"tag",19,()=>t.href==null?"button":"a"),X=yt(t,["$$slots","$$events","$$legacy","use","class","style","ripple","color","toggle","pressed","ariaLabelOn","ariaLabelOff","touch","displayFlex","size","href","action","component","tag","children"]),_,n,d=M(h({})),C=h({}),g=M(h({})),i=P("SMUI:icon-button:context"),Y=P("SMUI:icon-button:aria-describedby");const Z=b(()=>{if(i==="data-table:pagination")switch(t.action){case"first-page":return{"data-first-page":"true"};case"prev-page":return{"data-prev-page":"true"};case"next-page":return{"data-next-page":"true"};case"last-page":return{"data-last-page":"true"};default:return{"data-action":"true"}}else return i==="dialog:header"||i==="dialog:sheet"?{"data-mdc-dialog-action":t.action}:{action:t.action}});let B=!!t.disabled;T(()=>{if(B!=!!t.disabled){if(_){const e=f();"blur"in e&&e.blur()}B=!!t.disabled}}),_t("SMUI:icon:context","icon-button");let x=null;T(()=>{_&&f()&&m()!==x&&(m()&&!n?(n=new Rt({addClass:R,hasClass:$,notifyChange:e=>{nt(e),w(f(),"SMUIIconButtonToggleChange",e)},removeClass:S,getAttr:et,setAttr:at}),n.init()):!m()&&n&&(n.destroy(),n=void 0,k(d,h({})),k(g,h({}))),x=m())}),T(()=>{n&&!l(c())&&n.isOn()!==c()&&n.toggle(c())}),At(()=>{n&&n.destroy()});function $(e){return e in a(d)?a(d)[e]:f().classList.contains(e)}function R(e){a(d)[e]||(a(d)[e]=!0)}function S(e){(!(e in a(d))||a(d)[e])&&(a(d)[e]=!1)}function tt(e,o){C[e]!=o&&(o===""||o==null?delete C[e]:C[e]=o)}function et(e){return e in a(g)?a(g)[e]??null:f().getAttribute(e)}function at(e,o){a(g)[e]!==o&&(a(g)[e]=o)}function nt(e){c(e.isOn)}function f(){return _.getElement()}var D=gt(),it=U(D);const rt=b(()=>[[Bt,{ripple:J(),unbounded:!0,color:t.color,disabled:!!t.disabled,addClass:R,removeClass:S,addStyle:tt}],...G()]),ot=b(()=>xt({[H()]:!0,"mdc-icon-button":!0,"mdc-icon-button--on":!l(c())&&c(),"mdc-icon-button--touch":E(),"mdc-icon-button--display-flex":K(),"smui-icon-button--size-button":O()==="button","smui-icon-button--size-mini":O()==="mini","mdc-icon-button--reduced-size":O()==="mini"||O()==="button","mdc-card__action":i==="card:action","mdc-card__action--icon":i==="card:action","mdc-top-app-bar__navigation-icon":i==="top-app-bar:navigation","mdc-top-app-bar__action-item":i==="top-app-bar:action","mdc-snackbar__dismiss":i==="snackbar:actions","mdc-data-table__pagination-button":i==="data-table:pagination","mdc-data-table__sort-icon-button":i==="data-table:sortable-header-cell","mdc-dialog__close":(i==="dialog:header"||i==="dialog:sheet")&&t.action==="close",...a(d)})),st=b(()=>Object.entries(C).map(([e,o])=>`${e}: ${o};`).concat([q()]).join(" ")),lt=b(()=>l(c())?null:c()?"true":"false"),ct=b(()=>c()?t.ariaLabelOn:t.ariaLabelOff);return mt(it,Q,(e,o)=>{Ot(o(e,Ct({get tag(){return W()},get use(){return a(rt)},get class(){return a(ot)},get style(){return a(st)},get"aria-pressed"(){return a(lt)},get"aria-label"(){return a(ct)},get"data-aria-label-on"(){return t.ariaLabelOn},get"data-aria-label-off"(){return t.ariaLabelOff},"aria-describedby":Y,get href(){return t.href}},()=>a(Z),()=>a(g),()=>X,{onclick:A=>{var y;n&&n.handleClick(),i==="top-app-bar:navigation"&&w(f(),"SMUITopAppBarIconButtonNav"),(y=t.onclick)==null||y.call(t,A)},children:(A,y)=>{var N=Dt(),F=z(U(N),2);Et(F,()=>t.children??ht);var dt=z(F);{var ut=I=>{var ft=St();L(I,ft)};vt(dt,I=>{E()&&I(ut)})}L(A,N)},$$slots:{default:!0}})),A=>_=A,()=>_)}),L(p,D),pt({getElement:f})}export{Ut as I};
