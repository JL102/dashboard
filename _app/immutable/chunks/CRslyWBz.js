import{c as h,a as p}from"./BQSGA9Gz.js";import{p as I,q as A,f as g,v as S,g as q,d as B,a as T,w as k,x as R}from"./Bm7hcewM.js";import{S as N,s as M,c as U}from"./B4zITSkU.js";import{c as l,d as j,b as P,e as D,r as w}from"./BEvh6uwA.js";/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var y="mdc-dom-focus-sentinel",z=function(){function n(e,s){s===void 0&&(s={}),this.root=e,this.options=s,this.elFocusedBeforeTrapFocus=null}return n.prototype.trapFocus=function(){var e=this.getFocusableElements(this.root);if(e.length===0)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(e,this.options.initialFocusEl)},n.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+y)).forEach(function(e){e.parentElement.removeChild(e)}),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},n.prototype.wrapTabFocus=function(e){var s=this,t=this.createSentinel(),i=this.createSentinel();t.addEventListener("focus",function(){var a=s.getFocusableElements(e);a.length>0&&a[a.length-1].focus()}),i.addEventListener("focus",function(){var a=s.getFocusableElements(e);a.length>0&&a[0].focus()}),e.insertBefore(t,e.children[0]),e.appendChild(i)},n.prototype.focusInitialElement=function(e,s){var t=0;s&&(t=Math.max(e.indexOf(s),0)),e[t].focus()},n.prototype.getFocusableElements=function(e){var s=[].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return s.filter(function(t){var i=t.getAttribute("aria-disabled")==="true"||t.getAttribute("disabled")!=null||t.getAttribute("hidden")!=null||t.getAttribute("aria-hidden")==="true",a=t.tabIndex>=0&&t.getBoundingClientRect().width>0&&!t.classList.contains(y)&&!i,d=!1;if(a){var o=getComputedStyle(t);d=o.display==="none"||o.visibility==="hidden"}return a&&!d})},n.prototype.createSentinel=function(){var e=document.createElement("div");return e.setAttribute("tabindex","0"),e.setAttribute("aria-hidden","true"),e.classList.add(y),e},n}();const W=Object.freeze(Object.defineProperty({__proto__:null,FocusTrap:z},Symbol.toStringTag,{value:"Module"}));function X(n,e){I(e,!0);let s=l(e,"use",19,()=>[]),t=l(e,"class",3,""),i=l(e,"component",3,N),a=l(e,"tag",3,"span"),d=w(e,["$$slots","$$events","$$legacy","use","class","component","tag","children"]),o;const r=A("SMUI:label:context"),E=A("SMUI:label:tabindex");function F(){return o.getElement()}var m=h(),_=g(m);const x=B(()=>U({[t()]:!0,"mdc-button__label":r==="button","mdc-fab__label":r==="fab","mdc-tab__text-label":r==="tab","mdc-image-list__label":r==="image-list","mdc-snackbar__label":r==="snackbar","mdc-banner__text":r==="banner","mdc-segmented-button__label":r==="segmented-button","mdc-data-table__pagination-rows-per-page-label":r==="data-table:pagination","mdc-data-table__header-cell-label":r==="data-table:sortable-header-cell"}));return j(_,i,(v,C)=>{P(C(v,D({get tag(){return a()},get use(){return s()},get class(){return q(x)}},r==="snackbar"?{"aria-atomic":"false"}:{},{tabindex:E},()=>d,{children:(b,c)=>{var f=h(),u=g(f);M(u,()=>e.children??S),p(b,f)},$$slots:{default:!0}})),b=>o=b,()=>o)}),p(n,m),T({getElement:F})}function Q(n,e){I(e,!0);let s=l(e,"use",19,()=>[]),t=l(e,"class",3,""),i=l(e,"component",3,N),a=l(e,"tag",3,"div"),d=l(e,"_smuiClass",3,""),o=l(e,"_smuiClassMap",23,()=>({})),r=l(e,"_smuiContexts",19,()=>({})),E=l(e,"_smuiProps",19,()=>({})),F=w(e,["$$slots","$$events","$$legacy","use","class","component","tag","_smuiClass","_smuiClassMap","_smuiContexts","_smuiProps","children"]),m;const _=[];Object.entries(o()).forEach(([c,f])=>{const u=A(f);u&&"subscribe"in u&&_.push(u.subscribe(L=>{o()[c]=L}))});for(let c in r())r().hasOwnProperty(c)&&k(c,r()[c]);R(()=>{for(const c of _)c()});function x(){return m.getElement()}var v=h(),C=g(v);const b=B(()=>U({[t()]:!0,[d()]:!0,...o()}));return j(C,i,(c,f)=>{P(f(c,D({get tag(){return a()},get use(){return s()},get class(){return q(b)}},E,()=>F,{children:(u,L)=>{var O=h(),H=g(O);M(H,()=>e.children??S),p(u,O)},$$slots:{default:!0}})),u=>m=u,()=>m)}),p(n,v),T({getElement:x})}/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var Y=function(){function n(){this.rafIDs=new Map}return n.prototype.request=function(e,s){var t=this;this.cancel(e);var i=requestAnimationFrame(function(a){t.rafIDs.delete(e),s(a)});this.rafIDs.set(e,i)},n.prototype.cancel=function(e){var s=this.rafIDs.get(e);s&&(cancelAnimationFrame(s),this.rafIDs.delete(e))},n.prototype.cancelAll=function(){var e=this;this.rafIDs.forEach(function(s,t){e.cancel(t)})},n.prototype.getQueue=function(){var e=[];return this.rafIDs.forEach(function(s,t){e.push(t)}),e},n}();function Z(n,e){I(e,!0);let s=w(e,["$$slots","$$events","$$legacy","children"]),t;function i(){return t.getElement()}return P(Q(n,D({_smuiClass:"mdc-deprecated-list-item__text",tag:"span"},()=>s,{children:(a,d)=>{var o=h(),r=g(o);M(r,()=>e.children??S),p(a,o)},$$slots:{default:!0}})),a=>t=a,()=>t),T({getElement:i})}export{Y as A,Q as C,Z as T,X as a,W as d};
