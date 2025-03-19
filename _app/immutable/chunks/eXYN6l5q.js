import{c as p,a as b}from"./DkyGT7kw.js";import{p as y,h,f as g,e as A,g as T,j as C,a as D}from"./Dtkc5tKY.js";import{S as L,s as M,c as w}from"./eBBfgSPd.js";import{a as l,c as B,b as q,s as O,r as P}from"./N4LhOoPa.js";/**
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
 */var d="mdc-dom-focus-sentinel",j=function(){function n(e,a){a===void 0&&(a={}),this.root=e,this.options=a,this.elFocusedBeforeTrapFocus=null}return n.prototype.trapFocus=function(){var e=this.getFocusableElements(this.root);if(e.length===0)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(e,this.options.initialFocusEl)},n.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+d)).forEach(function(e){e.parentElement.removeChild(e)}),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},n.prototype.wrapTabFocus=function(e){var a=this,t=this.createSentinel(),r=this.createSentinel();t.addEventListener("focus",function(){var s=a.getFocusableElements(e);s.length>0&&s[s.length-1].focus()}),r.addEventListener("focus",function(){var s=a.getFocusableElements(e);s.length>0&&s[0].focus()}),e.insertBefore(t,e.children[0]),e.appendChild(r)},n.prototype.focusInitialElement=function(e,a){var t=0;a&&(t=Math.max(e.indexOf(a),0)),e[t].focus()},n.prototype.getFocusableElements=function(e){var a=[].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return a.filter(function(t){var r=t.getAttribute("aria-disabled")==="true"||t.getAttribute("disabled")!=null||t.getAttribute("hidden")!=null||t.getAttribute("aria-hidden")==="true",s=t.tabIndex>=0&&t.getBoundingClientRect().width>0&&!t.classList.contains(d)&&!r,c=!1;if(s){var i=getComputedStyle(t);c=i.display==="none"||i.visibility==="hidden"}return s&&!c})},n.prototype.createSentinel=function(){var e=document.createElement("div");return e.setAttribute("tabindex","0"),e.setAttribute("aria-hidden","true"),e.classList.add(d),e},n}();const z=Object.freeze(Object.defineProperty({__proto__:null,FocusTrap:j},Symbol.toStringTag,{value:"Module"}));function Q(n,e){y(e,!0);let a=l(e,"use",19,()=>[]),t=l(e,"class",3,""),r=l(e,"component",3,L),s=l(e,"tag",3,"span"),c=P(e,["$$slots","$$events","$$legacy","use","class","component","tag","children"]),i;const o=h("SMUI:label:context"),v=h("SMUI:label:tabindex");function _(){return i.getElement()}var f=p(),F=g(f);const E=C(()=>w({[t()]:!0,"mdc-button__label":o==="button","mdc-fab__label":o==="fab","mdc-tab__text-label":o==="tab","mdc-image-list__label":o==="image-list","mdc-snackbar__label":o==="snackbar","mdc-banner__text":o==="banner","mdc-segmented-button__label":o==="segmented-button","mdc-data-table__pagination-rows-per-page-label":o==="data-table:pagination","mdc-data-table__header-cell-label":o==="data-table:sortable-header-cell"}));return B(F,r,(I,S)=>{q(S(I,O({get tag(){return s()},get use(){return a()},get class(){return T(E)}},o==="snackbar"?{"aria-atomic":"false"}:{},{tabindex:v},()=>c,{children:(u,H)=>{var m=p(),x=g(m);M(x,()=>e.children??A),b(u,m)},$$slots:{default:!0}})),u=>i=u,()=>i)}),b(n,f),D({getElement:_})}/**
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
 */var V=function(){function n(){this.rafIDs=new Map}return n.prototype.request=function(e,a){var t=this;this.cancel(e);var r=requestAnimationFrame(function(s){t.rafIDs.delete(e),a(s)});this.rafIDs.set(e,r)},n.prototype.cancel=function(e){var a=this.rafIDs.get(e);a&&(cancelAnimationFrame(a),this.rafIDs.delete(e))},n.prototype.cancelAll=function(){var e=this;this.rafIDs.forEach(function(a,t){e.cancel(t)})},n.prototype.getQueue=function(){var e=[];return this.rafIDs.forEach(function(a,t){e.push(t)}),e},n}();export{V as A,Q as C,z as d};
