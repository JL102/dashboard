import{c as f,a as m}from"./bkaPLb1g.js";import{p as v,e as g,f as p,i as _,g as w,j as B,a as E}from"./BP-bcVPs.js";import{S as P,s as F,c as q}from"./DeOI7bk8.js";import{a as c,c as O,b as x,s as y,r as A}from"./xQ8zHefh.js";import{C as $}from"./BWRVC1lj.js";/**
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
 */var d="mdc-dom-focus-sentinel",j=function(){function n(e,a){a===void 0&&(a={}),this.root=e,this.options=a,this.elFocusedBeforeTrapFocus=null}return n.prototype.trapFocus=function(){var e=this.getFocusableElements(this.root);if(e.length===0)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(e,this.options.initialFocusEl)},n.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+d)).forEach(function(e){e.parentElement.removeChild(e)}),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},n.prototype.wrapTabFocus=function(e){var a=this,t=this.createSentinel(),o=this.createSentinel();t.addEventListener("focus",function(){var s=a.getFocusableElements(e);s.length>0&&s[s.length-1].focus()}),o.addEventListener("focus",function(){var s=a.getFocusableElements(e);s.length>0&&s[0].focus()}),e.insertBefore(t,e.children[0]),e.appendChild(o)},n.prototype.focusInitialElement=function(e,a){var t=0;a&&(t=Math.max(e.indexOf(a),0)),e[t].focus()},n.prototype.getFocusableElements=function(e){var a=[].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return a.filter(function(t){var o=t.getAttribute("aria-disabled")==="true"||t.getAttribute("disabled")!=null||t.getAttribute("hidden")!=null||t.getAttribute("aria-hidden")==="true",s=t.tabIndex>=0&&t.getBoundingClientRect().width>0&&!t.classList.contains(d)&&!o,l=!1;if(s){var i=getComputedStyle(t);l=i.display==="none"||i.visibility==="hidden"}return s&&!l})},n.prototype.createSentinel=function(){var e=document.createElement("div");return e.setAttribute("tabindex","0"),e.setAttribute("aria-hidden","true"),e.classList.add(d),e},n}();const Q=Object.freeze(Object.defineProperty({__proto__:null,FocusTrap:j},Symbol.toStringTag,{value:"Module"}));function V(n,e){v(e,!0);let a=c(e,"use",19,()=>[]),t=c(e,"class",3,""),o=c(e,"component",3,P),s=c(e,"tag",3,"span"),l=A(e,["$$slots","$$events","$$legacy","use","class","component","tag","children"]),i;const r=g("SMUI:label:context"),I=g("SMUI:label:tabindex");function S(){return i.getElement()}var b=f(),T=p(b);const C=B(()=>q({[t()]:!0,"mdc-button__label":r==="button","mdc-fab__label":r==="fab","mdc-tab__text-label":r==="tab","mdc-image-list__label":r==="image-list","mdc-snackbar__label":r==="snackbar","mdc-banner__text":r==="banner","mdc-segmented-button__label":r==="segmented-button","mdc-data-table__pagination-rows-per-page-label":r==="data-table:pagination","mdc-data-table__header-cell-label":r==="data-table:sortable-header-cell"}));return O(T,o,(D,L)=>{x(L(D,y({get tag(){return s()},get use(){return a()},get class(){return w(C)}},r==="snackbar"?{"aria-atomic":"false"}:{},{tabindex:I},()=>l,{children:(u,H)=>{var h=f(),M=p(h);F(M,()=>e.children??_),m(u,h)},$$slots:{default:!0}})),u=>i=u,()=>i)}),m(n,b),E({getElement:S})}/**
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
 */var G=function(){function n(){this.rafIDs=new Map}return n.prototype.request=function(e,a){var t=this;this.cancel(e);var o=requestAnimationFrame(function(s){t.rafIDs.delete(e),a(s)});this.rafIDs.set(e,o)},n.prototype.cancel=function(e){var a=this.rafIDs.get(e);a&&(cancelAnimationFrame(a),this.rafIDs.delete(e))},n.prototype.cancelAll=function(){var e=this;this.rafIDs.forEach(function(a,t){e.cancel(t)})},n.prototype.getQueue=function(){var e=[];return this.rafIDs.forEach(function(a,t){e.push(t)}),e},n}();function J(n,e){v(e,!0);let a=A(e,["$$slots","$$events","$$legacy","children"]),t;function o(){return t.getElement()}return x($(n,y({_smuiClass:"mdc-deprecated-list-item__text",tag:"span"},()=>a,{children:(s,l)=>{var i=f(),r=p(i);F(r,()=>e.children??_),m(s,i)},$$slots:{default:!0}})),s=>t=s,()=>t),E({getElement:o})}export{G as A,V as C,J as T,Q as d};
