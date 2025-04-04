import{c as O,a as o,t as ce,r as zt,b as Je,s as Ke}from"./DJdsRZ5m.js";import{h as yt,p as He,ah as Xt,m as re,y as Ve,o as wt,f as y,e as X,a as Oe,J as ft,t as fe,a3 as Gt,d as Qe,l as Yt,g as s,b as oe,K as Jt,s as Y,c as ut,r as dt,v as ne,n as _t}from"./DXFlPq8H.js";import{g as Kt,e as Qt,b as $,s as se,r as De,a as r,p as pe,d as S}from"./DHl97If7.js";import{s as B,_ as Zt,h as Lt,j as Ze,M as Et,r as Wt,a as Be,u as Ne,c as Xe,b as $e,o as Nt,t as $t,R as Ct,e as Ft,p as Ae,i as Ee,v as en}from"./Q0LzqFWK.js";import{N as tn,F as At,L as nn}from"./CjFqpbYn.js";import{C as ct}from"./DqwNrP7c.js";import{b as an}from"./BO87OUCM.js";function ln(p,e,t){var i=p.__className,n=rn(e);yt&&p.className===n?p.__className=n:(i!==n||yt&&p.className!==n)&&(e==null?p.removeAttribute("class"):p.className=n,p.__className=n)}function rn(p,e){return(p??"")+""}function We(p,e){He(e,!0);const[t,i]=Qt(),n=Xt(e.value);re(e.key,n),Ve(()=>{Kt(n,e.value)}),wt(()=>{n.set(void 0)});var d=O(),f=y(d);B(f,()=>e.children??X),o(p,d),Oe(),i()}/**
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
 */var ot={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},sn={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon",WITH_INTERNAL_COUNTER:"mdc-text-field--with-internal-counter"},Vt={LABEL_SCALE:.75},un=["pattern","min","max","required","step","minlength","maxlength"],dn=["color","date","datetime-local","month","range","time","week"];/**
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
 */var Ht=["mousedown","touchstart"],Ot=["click","keydown"],on=function(p){Zt(e,p);function e(t,i){i===void 0&&(i={});var n=p.call(this,Lt(Lt({},e.defaultAdapter),t))||this;return n.isFocused=!1,n.receivedUserInput=!1,n.valid=!0,n.useNativeValidation=!0,n.validateOnValueChange=!0,n.helperText=i.helperText,n.characterCounter=i.characterCounter,n.leadingIcon=i.leadingIcon,n.trailingIcon=i.trailingIcon,n.inputFocusHandler=function(){n.activateFocus()},n.inputBlurHandler=function(){n.deactivateFocus()},n.inputInputHandler=function(){n.handleInput()},n.setPointerXOffset=function(d){n.setTransformOrigin(d)},n.textFieldInteractionHandler=function(){n.handleTextFieldInteraction()},n.validationAttributeChangeHandler=function(d){n.handleValidationAttributeChange(d)},n}return Object.defineProperty(e,"cssClasses",{get:function(){return sn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ot},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Vt},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat",{get:function(){var t=this.getNativeInput().type;return dn.indexOf(t)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver(function(){})},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t,i,n,d;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var f=Ze(Ht),g=f.next();!g.done;g=f.next()){var V=g.value;this.adapter.registerInputInteractionHandler(V,this.setPointerXOffset)}}catch(_){t={error:_}}finally{try{g&&!g.done&&(i=f.return)&&i.call(f)}finally{if(t)throw t.error}}try{for(var w=Ze(Ot),H=w.next();!H.done;H=w.next()){var V=H.value;this.adapter.registerTextFieldInteractionHandler(V,this.textFieldInteractionHandler)}}catch(_){n={error:_}}finally{try{H&&!H.done&&(d=w.return)&&d.call(w)}finally{if(n)throw n.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},e.prototype.destroy=function(){var t,i,n,d;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var f=Ze(Ht),g=f.next();!g.done;g=f.next()){var V=g.value;this.adapter.deregisterInputInteractionHandler(V,this.setPointerXOffset)}}catch(_){t={error:_}}finally{try{g&&!g.done&&(i=f.return)&&i.call(f)}finally{if(t)throw t.error}}try{for(var w=Ze(Ot),H=w.next();!H.done;H=w.next()){var V=H.value;this.adapter.deregisterTextFieldInteractionHandler(V,this.textFieldInteractionHandler)}}catch(_){n={error:_}}finally{try{H&&!H.done&&(d=w.return)&&d.call(w)}finally{if(n)throw n.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},e.prototype.handleTextFieldInteraction=function(){var t=this.adapter.getNativeInput();t&&t.disabled||(this.receivedUserInput=!0)},e.prototype.handleValidationAttributeChange=function(t){var i=this;t.some(function(n){return un.indexOf(n)>-1?(i.styleValidity(!0),i.adapter.setLabelRequired(i.getNativeInput().required),!0):!1}),t.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},e.prototype.notchOutline=function(t){if(!(!this.adapter.hasOutline()||!this.adapter.hasLabel()))if(t){var i=this.adapter.getLabelWidth()*Vt.LABEL_SCALE;this.adapter.notchOutline(i)}else this.adapter.closeOutline()},e.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.helperText&&(this.helperText.isPersistent()||!this.helperText.isValidation()||!this.valid)&&this.helperText.showToScreenReader()},e.prototype.setTransformOrigin=function(t){if(!(this.isDisabled()||this.adapter.hasOutline())){var i=t.touches,n=i?i[0]:t,d=n.target.getBoundingClientRect(),f=n.clientX-d.left;this.adapter.setLineRippleTransformOrigin(f)}},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var t=this.isValid();this.styleValidity(t),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},e.prototype.getValue=function(){return this.getNativeInput().value},e.prototype.setValue=function(t){if(this.getValue()!==t&&(this.getNativeInput().value=t),this.setcharacterCounter(t.length),this.validateOnValueChange){var i=this.isValid();this.styleValidity(i)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},e.prototype.setValid=function(t){this.valid=t,this.styleValidity(t);var i=!t&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(i)},e.prototype.setValidateOnValueChange=function(t){this.validateOnValueChange=t},e.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},e.prototype.setUseNativeValidation=function(t){this.useNativeValidation=t},e.prototype.isDisabled=function(){return this.getNativeInput().disabled},e.prototype.setDisabled=function(t){this.getNativeInput().disabled=t,this.styleDisabled(t)},e.prototype.setHelperTextContent=function(t){this.helperText&&this.helperText.setContent(t)},e.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon&&this.leadingIcon.setAriaLabel(t)},e.prototype.setLeadingIconContent=function(t){this.leadingIcon&&this.leadingIcon.setContent(t)},e.prototype.setTrailingIconAriaLabel=function(t){this.trailingIcon&&this.trailingIcon.setAriaLabel(t)},e.prototype.setTrailingIconContent=function(t){this.trailingIcon&&this.trailingIcon.setContent(t)},e.prototype.setcharacterCounter=function(t){if(this.characterCounter){var i=this.getNativeInput().maxLength;if(i===-1)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(t,i)}},e.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},e.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},e.prototype.styleValidity=function(t){var i=e.cssClasses.INVALID;if(t?this.adapter.removeClass(i):this.adapter.addClass(i),this.helperText){this.helperText.setValidity(t);var n=this.helperText.isValidation();if(!n)return;var d=this.helperText.isVisible(),f=this.helperText.getId();d&&f?this.adapter.setInputAttr(ot.ARIA_DESCRIBEDBY,f):this.adapter.removeInputAttr(ot.ARIA_DESCRIBEDBY)}},e.prototype.styleFocused=function(t){var i=e.cssClasses.FOCUSED;t?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.styleDisabled=function(t){var i=e.cssClasses,n=i.DISABLED,d=i.INVALID;t?(this.adapter.addClass(n),this.adapter.removeClass(d)):this.adapter.removeClass(n),this.leadingIcon&&this.leadingIcon.setDisabled(t),this.trailingIcon&&this.trailingIcon.setDisabled(t)},e.prototype.styleFloating=function(t){var i=e.cssClasses.LABEL_FLOATING;t?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.getNativeInput=function(){var t=this.adapter?this.adapter.getNativeInput():null;return t||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(Et);function fn(p,e){He(e,!0);let t=De(e,["$$slots","$$events","$$legacy","children"]),i;function n(){return i.getElement()}return $(ct(p,se({_smuiClass:"mdc-text-field-helper-line",tag:"div"},()=>t,{children:(d,f)=>{var g=O(),V=y(g);B(V,()=>e.children??X),o(d,g)},$$slots:{default:!0}})),d=>i=d,()=>i),Oe({getElement:n})}function cn(p,e){He(e,!0);let t=De(e,["$$slots","$$events","$$legacy","children"]),i;function n(){return i.getElement()}return $(ct(p,se({_smuiClass:"mdc-text-field__affix mdc-text-field__affix--prefix",tag:"span"},()=>t,{children:(d,f)=>{var g=O(),V=y(g);B(V,()=>e.children??X),o(d,g)},$$slots:{default:!0}})),d=>i=d,()=>i),Oe({getElement:n})}function hn(p,e){He(e,!0);let t=De(e,["$$slots","$$events","$$legacy","children"]),i;function n(){return i.getElement()}return $(ct(p,se({_smuiClass:"mdc-text-field__affix mdc-text-field__affix--suffix",tag:"span"},()=>t,{children:(d,f)=>{var g=O(),V=y(g);B(V,()=>e.children??X),o(d,g)},$$slots:{default:!0}})),d=>i=d,()=>i),Oe({getElement:n})}var vn=ce("<input>");function gn(p,e){He(e,!0);let t=r(e,"use",19,()=>[]),i=r(e,"class",3,""),n=r(e,"type",3,"text"),d=r(e,"placeholder",3," "),f=r(e,"value",15),g=r(e,"files",15,null),V=r(e,"dirty",15,!1),w=r(e,"invalid",15,!1),H=r(e,"updateInvalid",3,!0),_=r(e,"initialInvalid",3,!1),D=r(e,"emptyValueNull",19,()=>f()===null),M=r(e,"emptyValueUndefined",19,()=>f()===void 0),Me=De(e,["$$slots","$$events","$$legacy","use","class","type","placeholder","value","files","dirty","invalid","updateInvalid","initialInvalid","emptyValueNull","emptyValueUndefined"]),m,z=pe({}),P=pe({});Ve(()=>{n()==="file"?delete P.value:P.value=f()==null?"":f()}),ft(()=>{H()&&_()&&w(C().matches(":invalid"))});function ie(u){return u===""?Number.NaN:+u}function we(u){if(n()==="file"){g(u.currentTarget.files);return}if(u.currentTarget.value===""&&D()){f(null);return}if(u.currentTarget.value===""&&M()){f(void 0);return}switch(n()){case"number":case"range":f(ie(u.currentTarget.value));break;default:f(u.currentTarget.value);break}}function J(u){(n()==="file"||n()==="range")&&we(u),V(!0),H()&&w(C().matches(":invalid"))}function ee(u){return u in z?z[u]??null:C().getAttribute(u)}function xe(u,c){z[u]!==c&&(z[u]=c)}function Ie(u){(!(u in z)||z[u]!=null)&&(z[u]=void 0)}function L(){C().focus()}function b(){C().blur()}function C(){return m}var K=vn();Wt(K);var ue=u=>{var c;n()!=="file"&&we(u),(c=e.oninput)==null||c.call(e,u)},te=u=>{var c;J(u),(c=e.onchange)==null||c.call(e,u)};let Ue;return $(K,u=>m=u,()=>m),Be(K,(u,c)=>{var he;return(he=Ne)==null?void 0:he(u,c)},t),fe(u=>Ue=$e(K,Ue,{class:u,type:n(),placeholder:d(),...P,...z,...Me,oninput:ue,onchange:te}),[()=>Xe({[i()]:!0,"mdc-text-field__input":!0})]),o(p,K),Oe({getAttr:ee,addAttr:xe,removeAttr:Ie,focus:L,blur:b,getElement:C})}var mn=ce("<textarea></textarea>");function bn(p,e){He(e,!0);let t=r(e,"use",19,()=>[]),i=r(e,"class",3,""),n=r(e,"style",3,""),d=r(e,"value",15,""),f=r(e,"dirty",15,!1),g=r(e,"invalid",15,!1),V=r(e,"updateInvalid",3,!0),w=r(e,"initialInvalid",3,!1),H=r(e,"resizable",3,!0),_=De(e,["$$slots","$$events","$$legacy","use","class","style","value","dirty","invalid","updateInvalid","initialInvalid","resizable"]),D,M=pe({});ft(()=>{V()&&w()&&g(J().matches(":invalid"))});function Me(){f(!0),V()&&g(J().matches(":invalid"))}function m(L){return L in M?M[L]??null:J().getAttribute(L)}function z(L,b){M[L]!==b&&(M[L]=b)}function P(L){(!(L in M)||M[L]!=null)&&(M[L]=void 0)}function ie(){J().focus()}function we(){J().blur()}function J(){return D}var ee=mn();zt(ee);var xe=L=>{var b;Me(),(b=e.onchange)==null||b.call(e,L)};let Ie;return $(ee,L=>D=L,()=>D),Be(ee,(L,b)=>{var C;return(C=Ne)==null?void 0:C(L,b)},t),Gt(()=>an(ee,d)),fe(L=>Ie=$e(ee,Ie,{class:L,style:`${H()?"":"resize: none; "}${n()}`,...M,..._,onchange:xe}),[()=>Xe({[i()]:!0,"mdc-text-field__input":!0})]),o(p,ee),Oe({getAttr:m,addAttr:z,removeAttr:P,focus:ie,blur:we,getElement:J})}var pn=ce('<span class="mdc-text-field__ripple"></span>'),xn=ce("<!> <!>",1),In=ce("<span><!> <!></span>"),yn=ce("<!> <!> <!>",1),_n=ce("<label><!> <!> <!> <!> <!> <!> <!></label>"),Ln=ce("<div><!> <!> <!> <!> <!></div>"),Cn=ce("<!> <!>",1);function Pn(p,e){He(e,!0);const{applyPassive:t}=$t;let i=()=>{};function n(l){return l===i}let d=r(e,"use",19,()=>[]),f=r(e,"class",3,""),g=r(e,"style",3,""),V=r(e,"ripple",3,!0),w=r(e,"disabled",3,!1),H=r(e,"required",3,!1),_=r(e,"textarea",3,!1),D=r(e,"variant",19,()=>_()?"outlined":"standard"),M=r(e,"noLabel",3,!1),Me=r(e,"type",3,"text"),m=r(e,"value",15),z=r(e,"files",15,i),P=r(e,"invalid",15,i),ie=r(e,"updateInvalid",19,()=>n(P())),we=r(e,"initialInvalid",3,!1),J=r(e,"dirty",15,!1),ee=r(e,"validateOnValueChange",19,ie),xe=r(e,"useNativeValidation",19,ie),Ie=r(e,"withLeadingIcon",3,i),L=r(e,"withTrailingIcon",3,i),b=r(e,"input",7),C=r(e,"floatingLabel",7),K=r(e,"lineRipple",7),ue=r(e,"notchedOutline",7),te=De(e,["$$slots","$$events","$$legacy","use","class","style","ripple","disabled","required","textarea","variant","noLabel","label","type","value","files","invalid","updateInvalid","initialInvalid","dirty","prefix","suffix","validateOnValueChange","useNativeValidation","withLeadingIcon","withTrailingIcon","input","floatingLabel","lineRipple","notchedOutline","children","leadingIcon","trailingIcon","internalCounter","line","helper"]);const Ue=m()!==void 0||m()===void 0&&e.input$emptyValueUndefined||!n(z());n(z())&&z(null),n(P())&&P(!1);let u,c=Qe(void 0),he=new Nt,de=pe({}),Te=pe({}),Pe=Qe(void 0),ye=Qe(!1),qe=Qe(pe(we())),ht=Yt("SMUI:addLayoutListener"),et,vt,Ut=new Promise(l=>vt=l),tt,nt,it,at;const gt=ne(()=>b()&&b().getElement());Ve(()=>{(J()||s(qe)||!ie())&&s(c)&&s(c).isValid()!==!P()&&(ie()?P(!s(c).isValid()):s(c).setValid(!P()))}),Ve(()=>{s(c)&&s(c).getValidateOnValueChange()!==ee()&&s(c).setValidateOnValueChange(n(ee())?!1:ee())}),Ve(()=>{s(c)&&s(c).setUseNativeValidation(n(xe())?!0:xe())}),Ve(()=>{s(c)&&s(c).setDisabled(w())});let mt=m();Ve(()=>{if(s(c)&&Ue&&mt!==m()){mt=m();const l=`${m()==null?"":m()}`;s(c).getValue()!==l&&s(c).setValue(l)}}),ht&&(et=ht(pt)),re("SMUI:textfield:leading-icon:mount",l=>{tt=l}),re("SMUI:textfield:leading-icon:unmount",()=>{tt=void 0}),re("SMUI:textfield:trailing-icon:mount",l=>{nt=l}),re("SMUI:textfield:trailing-icon:unmount",()=>{nt=void 0}),re("SMUI:textfield:helper-text:id",l=>{oe(Pe,pe(l))}),re("SMUI:textfield:helper-text:mount",l=>{it=l}),re("SMUI:textfield:helper-text:unmount",()=>{oe(Pe,void 0),it=void 0}),re("SMUI:textfield:character-counter:mount",l=>{at=l}),re("SMUI:textfield:character-counter:unmount",()=>{at=void 0}),ft(()=>{var l;if(oe(c,pe(new on({addClass:lt,removeClass:rt,hasClass:Pt,registerTextFieldInteractionHandler:(a,F)=>he.on(ve(),a,F),deregisterTextFieldInteractionHandler:(a,F)=>he.off(ve(),a,F),registerValidationAttributeChangeHandler:a=>{const F=G=>G.map(ge=>ge.attributeName).filter(ge=>ge),R=new MutationObserver(G=>{xe()&&a(F(G))}),Q={attributes:!0};return b()&&R.observe(b().getElement(),Q),R},deregisterValidationAttributeChangeHandler:a=>{a.disconnect()},getNativeInput:()=>{var a;return((a=b())==null?void 0:a.getElement())??null},setInputAttr:(a,F)=>{var R;(R=b())==null||R.addAttr(a,F)},removeInputAttr:a=>{var F;(F=b())==null||F.removeAttr(a)},isFocused:()=>{var a;return document.activeElement===((a=b())==null?void 0:a.getElement())},registerInputInteractionHandler:(a,F)=>{var Q;const R=(Q=b())==null?void 0:Q.getElement();if(R){const G=t();he.on(R,a,F,typeof G=="boolean"?{capture:G}:G)}},deregisterInputInteractionHandler:(a,F)=>{var Q;const R=(Q=b())==null?void 0:Q.getElement();R&&he.off(R,a,F)},floatLabel:a=>C()&&C().float(a),getLabelWidth:()=>C()?C().getWidth():0,hasLabel:()=>!!C(),shakeLabel:a=>C()&&C().shake(a),setLabelRequired:a=>C()&&C().setRequired(a),activateLineRipple:()=>K()&&K().activate(),deactivateLineRipple:()=>K()&&K().deactivate(),setLineRippleTransformOrigin:a=>K()&&K().setRippleCenter(a),closeOutline:()=>ue()&&ue().closeNotch(),hasOutline:()=>!!ue(),notchOutline:a=>ue()&&ue().notch(a)},{get helperText(){return it},get characterCounter(){return at},get leadingIcon(){return tt},get trailingIcon(){return nt}}))),Ue){if(b()==null)throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");(l=s(c))==null||l.init()}else Jt().then(()=>{var a;if(b()==null)throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");(a=s(c))==null||a.init()});return vt(),()=>{var a;(a=s(c))==null||a.destroy(),he.clear()}}),wt(()=>{et&&et()});function Pt(l){return l in de?de[l]??null:ve().classList.contains(l)}function lt(l){de[l]||(de[l]=!0)}function rt(l){(!(l in de)||de[l])&&(de[l]=!1)}function bt(l,a){Te[l]!=a&&(a===""||a==null?delete Te[l]:Te[l]=a)}function Rt(){var l;(l=b())==null||l.focus()}function kt(){var l;(l=b())==null||l.blur()}function pt(){if(s(c)){const l=s(c).shouldFloat;s(c).notchOutline(l)}}function ve(){return u}var xt=Cn(),It=y(xt);{var St=l=>{var a=_n();let F;var R=ut(a);{var Q=h=>{var I=xn(),x=y(I);{var E=q=>{var Le=pn();o(q,Le)};S(x,q=>{D()==="filled"&&q(E)})}var _e=Y(x,2);{var A=q=>{const Le=ne(()=>s(ye)||m()!=null&&m()!==""&&(typeof m()!="number"||!isNaN(m())));var v=ne(()=>Ae(te,"label$"));$(At(q,se({get floatAbove(){return s(Le)},get required(){return H()},wrapped:!0},()=>s(v),{children:(j,ke)=>{var ae=O(),Se=y(ae);{var k=N=>{},W=N=>{var le=O(),Ce=y(le);{var Ye=me=>{var Fe=Je();fe(()=>Ke(Fe,e.label)),o(me,Fe)},st=me=>{var Fe=O(),be=y(Fe);B(be,()=>e.label),o(me,Fe)};S(Ce,me=>{typeof e.label=="string"?me(Ye):me(st,!1)},!0)}o(N,le)};S(Se,N=>{e.label==null?N(k):N(W,!1)})}o(j,ae)},$$slots:{default:!0}})),j=>C(j),()=>C())};S(_e,q=>{!M()&&e.label!=null&&q(A)})}o(h,I)};S(R,h=>{!_()&&D()!=="outlined"&&h(Q)})}var G=Y(R,2);{var ge=h=>{const I=ne(()=>M()||e.label==null);var x=ne(()=>Ae(te,"outline$"));$(tn(h,se({get noLabel(){return s(I)}},()=>s(x),{children:(E,_e)=>{var A=O(),q=y(A);{var Le=v=>{const j=ne(()=>s(ye)||m()!=null&&m()!==""&&(typeof m()!="number"||!isNaN(m())));var ke=ne(()=>Ae(te,"label$"));$(At(v,se({get floatAbove(){return s(j)},get required(){return H()},wrapped:!0},()=>s(ke),{children:(ae,Se)=>{var k=O(),W=y(k);{var N=Ce=>{},le=Ce=>{var Ye=O(),st=y(Ye);{var me=be=>{var ze=Je();fe(()=>Ke(ze,e.label)),o(be,ze)},Fe=be=>{var ze=O(),jt=y(ze);B(jt,()=>e.label),o(be,ze)};S(st,be=>{typeof e.label=="string"?be(me):be(Fe,!1)},!0)}o(Ce,Ye)};S(W,Ce=>{e.label==null?Ce(N):Ce(le,!1)})}o(ae,k)},$$slots:{default:!0}})),ae=>C(ae),()=>C())};S(q,v=>{!M()&&e.label!=null&&v(Le)})}o(E,A)},$$slots:{default:!0}})),E=>ue(E),()=>ue())};S(G,h=>{(_()||D()==="outlined")&&h(ge)})}var je=Y(G,2);We(je,{key:"SMUI:textfield:icon:leading",value:!0,children:(h,I)=>{var x=O(),E=y(x);B(E,()=>e.leadingIcon??X),o(h,x)},$$slots:{default:!0}});var Ge=Y(je,2);B(Ge,()=>e.children??X);var U=Y(Ge,2);{var Z=h=>{var I=In(),x=ut(I),E=ne(()=>Ae(te,"input$"));$(bn(x,se({get disabled(){return w()},get required(){return H()},get updateInvalid(){return ie()},get initialInvalid(){return s(qe)},get"aria-controls"(){return s(Pe)},get"aria-describedby"(){return s(Pe)}},()=>s(E),{onblur:A=>{var q;oe(ye,!1),oe(qe,!0),Ee(ve(),"blur",A),(q=e.input$onblur)==null||q.call(e,A)},onfocus:A=>{var q;oe(ye,!0),Ee(ve(),"focus",A),(q=e.input$onfocus)==null||q.call(e,A)},get value(){return m()},set value(A){m(A)},get dirty(){return J()},set dirty(A){J(A)},get invalid(){return P()},set invalid(A){P(A)}})),A=>b(A),()=>b());var _e=Y(x,2);B(_e,()=>e.internalCounter??X),dt(I),fe(A=>ln(I,en(A)),[()=>Xe({"mdc-text-field__resizer":!("input$resizable"in te)||e.input$resizable})]),o(h,I)},T=h=>{var I=yn(),x=y(I);{var E=v=>{var j=O(),ke=y(j);{var ae=k=>{cn(k,{children:(W,N)=>{_t();var le=Je();fe(()=>Ke(le,e.prefix)),o(W,le)},$$slots:{default:!0}})},Se=k=>{var W=O(),N=y(W);B(N,()=>e.prefix??X),o(k,W)};S(ke,k=>{typeof e.prefix=="string"?k(ae):k(Se,!1)})}o(v,j)};S(x,v=>{e.prefix!=null&&v(E)})}var _e=Y(x,2),A=ne(()=>Ae(te,"input$"));$(gn(_e,se({get type(){return Me()},get disabled(){return w()},get required(){return H()},get updateInvalid(){return ie()},get initialInvalid(){return s(qe)},get"aria-controls"(){return s(Pe)},get"aria-describedby"(){return s(Pe)}},()=>M()&&e.label!=null&&typeof e.label=="string"?{placeholder:e.label}:{},()=>s(A),{onblur:v=>{var j;oe(ye,!1),oe(qe,!0),Ee(ve(),"blur",v),(j=e.input$onblur)==null||j.call(e,v)},onfocus:v=>{var j;oe(ye,!0),Ee(ve(),"focus",v),(j=e.input$onfocus)==null||j.call(e,v)},get value(){return m()},set value(v){m(v)},get files(){return z()},set files(v){z(v)},get dirty(){return J()},set dirty(v){J(v)},get invalid(){return P()},set invalid(v){P(v)}})),v=>b(v),()=>b());var q=Y(_e,2);{var Le=v=>{var j=O(),ke=y(j);{var ae=k=>{hn(k,{children:(W,N)=>{_t();var le=Je();fe(()=>Ke(le,e.suffix)),o(W,le)},$$slots:{default:!0}})},Se=k=>{var W=O(),N=y(W);B(N,()=>e.suffix??X),o(k,W)};S(ke,k=>{typeof e.suffix=="string"?k(ae):k(Se,!1)})}o(v,j)};S(q,v=>{e.suffix!=null&&v(Le)})}o(h,I)};S(U,h=>{_()&&typeof m()=="string"?h(Z):h(T,!1)})}var Re=Y(U,2);We(Re,{key:"SMUI:textfield:icon:leading",value:!1,children:(h,I)=>{var x=O(),E=y(x);B(E,()=>e.trailingIcon??X),o(h,x)},$$slots:{default:!0}});var Tt=Y(Re,2);{var qt=h=>{var I=ne(()=>Ae(te,"ripple$"));$(nn(h,se(()=>s(I))),x=>K(x),()=>K())};S(Tt,h=>{!_()&&D()!=="outlined"&&V()&&h(qt)})}dt(a),$(a,h=>u=h,()=>u),Be(a,(h,I)=>{var x;return(x=Ct)==null?void 0:x(h,I)},()=>({ripple:!_()&&D()==="filled",unbounded:!1,addClass:lt,removeClass:rt,addStyle:bt,eventTarget:s(gt),activeTarget:s(gt),initPromise:Ut})),Be(a,(h,I)=>{var x;return(x=Ne)==null?void 0:x(h,I)},d),fe((h,I,x)=>F=$e(a,F,{class:h,style:I,for:void 0,...x}),[()=>Xe({[f()]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":w(),"mdc-text-field--textarea":_(),"mdc-text-field--filled":D()==="filled","mdc-text-field--outlined":D()==="outlined","smui-text-field--standard":D()==="standard"&&!_(),"mdc-text-field--no-label":M()||e.label==null,"mdc-text-field--label-floating":s(ye)||m()!=null&&m()!=="","mdc-text-field--with-leading-icon":n(Ie())?e.leadingIcon:Ie(),"mdc-text-field--with-trailing-icon":n(L())?e.trailingIcon:L(),"mdc-text-field--with-internal-counter":_()&&e.internalCounter,"mdc-text-field--invalid":P(),...de}),()=>Object.entries(Te).map(([h,I])=>`${h}: ${I};`).concat([g()]).join(" "),()=>Ft(te,["input$","label$","ripple$","outline$","helperLine$"])]),o(l,a)},Bt=l=>{var a=Ln();let F;var R=ut(a);{var Q=U=>{var Z=O(),T=y(Z);B(T,()=>e.label??X),o(U,Z)};S(R,U=>{typeof e.label!="string"&&U(Q)})}var G=Y(R,2);We(G,{key:"SMUI:textfield:icon:leading",value:!0,children:(U,Z)=>{var T=O(),Re=y(T);B(Re,()=>e.leadingIcon??X),o(U,T)},$$slots:{default:!0}});var ge=Y(G,2);B(ge,()=>e.children??X);var je=Y(ge,2);We(je,{key:"SMUI:textfield:icon:leading",value:!1,children:(U,Z)=>{var T=O(),Re=y(T);B(Re,()=>e.trailingIcon??X),o(U,T)},$$slots:{default:!0}});var Ge=Y(je,2);B(Ge,()=>e.line??X),dt(a),$(a,U=>u=U,()=>u),Be(a,(U,Z)=>{var T;return(T=Ct)==null?void 0:T(U,Z)},()=>({ripple:V(),unbounded:!1,addClass:lt,removeClass:rt,addStyle:bt})),Be(a,(U,Z)=>{var T;return(T=Ne)==null?void 0:T(U,Z)},d),fe((U,Z,T)=>F=$e(a,F,{class:U,style:Z,...T}),[()=>Xe({[f()]:!0,"mdc-text-field":!0,"mdc-text-field--disabled":w(),"mdc-text-field--textarea":_(),"mdc-text-field--filled":D()==="filled","mdc-text-field--outlined":D()==="outlined","smui-text-field--standard":D()==="standard"&&!_(),"mdc-text-field--no-label":M()||e.label==null,"mdc-text-field--with-leading-icon":e.leadingIcon,"mdc-text-field--with-trailing-icon":e.trailingIcon,"mdc-text-field--invalid":P(),...de}),()=>Object.entries(Te).map(([U,Z])=>`${U}: ${Z};`).concat([g()]).join(" "),()=>Ft(te,["input$","label$","ripple$","outline$","helperLine$"])]),o(l,a)};S(It,l=>{Ue?l(St):l(Bt,!1)})}var Dt=Y(It,2);{var Mt=l=>{var a=ne(()=>Ae(te,"helperLine$"));fn(l,se(()=>s(a),{children:(F,R)=>{var Q=O(),G=y(Q);B(G,()=>e.helper??X),o(F,Q)},$$slots:{default:!0}}))};S(Dt,l=>{e.helper&&l(Mt)})}return o(p,xt),Oe({focus:Rt,blur:kt,layout:pt,getElement:ve})}export{Pn as T};
