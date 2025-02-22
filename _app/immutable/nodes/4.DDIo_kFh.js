import{d as ge,_ as Qt,a as et,n as Ye,K as Je,M as zt,b as le,u as Pe,c as me,f as Se,s as Ae,h as vt,L as Vn,p as H,R as Un,e as wn,r as Pn,I as Nn,g as Bn,B as qt,j as Xt,l as jt}from"../chunks/NJ6IM5ih.js";import{t as be,a as p,c as j,b as Ce,s as ye}from"../chunks/DGIi1ET6.js";import{M as kn,K as Hn,D as Fn,p as nt,q as Me,B as gt,e as R,b as Q,g as n,c as Te,r as xe,t as J,a as at,f as P,v as Xe,w as X,ay as Gt,u as Ee,x as Yt,s as B,d as C,n as Ze}from"../chunks/Bt561VDD.js";import{c,p as A,i as w,b as oe,r as mt,f as _t,e as de,s as tt,a as St}from"../chunks/CdiXb2lo.js";import{C as qn,M as Xn,A as jn,F as Wt,N as Gn,L as Wn,e as Kn,i as Qn}from"../chunks/CUo-bnkR.js";const zn=[];function Yn(l,t=!1){return $e(l,new Map,"",zn)}function $e(l,t,a,d,r=null){if(typeof l=="object"&&l!==null){var _=t.get(l);if(_!==void 0)return _;if(l instanceof Map)return new Map(l);if(l instanceof Set)return new Set(l);if(kn(l)){var h=Array(l.length);t.set(l,h),r!==null&&t.set(r,h);for(var T=0;T<l.length;T+=1){var x=l[T];T in l&&(h[T]=$e(x,t,a,d))}return h}if(Hn(l)===Fn){h={},t.set(l,h),r!==null&&t.set(r,h);for(var v in l)h[v]=$e(l[v],t,a,d);return h}if(l instanceof Date)return structuredClone(l);if(typeof l.toJSON=="function")return $e(l.toJSON(),t,a,d,l)}if(l instanceof EventTarget)return l;try{return structuredClone(l)}catch{return l}}async function Jn(){return{selectedEvent:await ge.current_event.toCollection().first()}}const Ia=Object.freeze(Object.defineProperty({__proto__:null,load:Jn},Symbol.toStringTag,{value:"Module"}));/**
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
 */var I={ACTIVATED:"mdc-select--activated",DISABLED:"mdc-select--disabled",FOCUSED:"mdc-select--focused",INVALID:"mdc-select--invalid",MENU_INVALID:"mdc-select__menu--invalid",OUTLINED:"mdc-select--outlined",REQUIRED:"mdc-select--required",ROOT:"mdc-select",WITH_LEADING_ICON:"mdc-select--with-leading-icon"},It={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",ARIA_SELECTED_ATTR:"aria-selected",CHANGE_EVENT:"MDCSelect:change",HIDDEN_INPUT_SELECTOR:'input[type="hidden"]',LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-select__icon",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",MENU_SELECTOR:".mdc-select__menu",OUTLINE_SELECTOR:".mdc-notched-outline",SELECTED_TEXT_SELECTOR:".mdc-select__selected-text",SELECT_ANCHOR_SELECTOR:".mdc-select__anchor",VALUE_ATTR:"data-value"},Ie={LABEL_SCALE:.75,UNSET_INDEX:-1,CLICK_DEBOUNCE_TIMEOUT_MS:330};/**
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
 */var Zn=function(l){Qt(t,l);function t(a,d){d===void 0&&(d={});var r=l.call(this,et(et({},t.defaultAdapter),a))||this;return r.disabled=!1,r.isMenuOpen=!1,r.useDefaultValidation=!0,r.customValidity=!0,r.lastSelectedIndex=Ie.UNSET_INDEX,r.clickDebounceTimeout=0,r.recentlyClicked=!1,r.leadingIcon=d.leadingIcon,r.helperText=d.helperText,r}return Object.defineProperty(t,"cssClasses",{get:function(){return I},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return Ie},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return It},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},activateBottomLine:function(){},deactivateBottomLine:function(){},getSelectedIndex:function(){return-1},setSelectedIndex:function(){},hasLabel:function(){return!1},floatLabel:function(){},getLabelWidth:function(){return 0},setLabelRequired:function(){},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){},setRippleCenter:function(){},notifyChange:function(){},setSelectedText:function(){},isSelectAnchorFocused:function(){return!1},getSelectAnchorAttr:function(){return""},setSelectAnchorAttr:function(){},removeSelectAnchorAttr:function(){},addMenuClass:function(){},removeMenuClass:function(){},openMenu:function(){},closeMenu:function(){},getAnchorElement:function(){return null},setMenuAnchorElement:function(){},setMenuAnchorCorner:function(){},setMenuWrapFocus:function(){},focusMenuItemAtIndex:function(){},getMenuItemCount:function(){return 0},getMenuItemValues:function(){return[]},getMenuItemTextAtIndex:function(){return""},isTypeaheadInProgress:function(){return!1},typeaheadMatchItem:function(){return-1}}},enumerable:!1,configurable:!0}),t.prototype.getSelectedIndex=function(){return this.adapter.getSelectedIndex()},t.prototype.setSelectedIndex=function(a,d,r){d===void 0&&(d=!1),r===void 0&&(r=!1),!(a>=this.adapter.getMenuItemCount())&&(a===Ie.UNSET_INDEX?this.adapter.setSelectedText(""):this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(a).trim()),this.adapter.setSelectedIndex(a),d&&this.adapter.closeMenu(),!r&&this.lastSelectedIndex!==a&&this.handleChange(),this.lastSelectedIndex=a)},t.prototype.setValue=function(a,d){d===void 0&&(d=!1);var r=this.adapter.getMenuItemValues().indexOf(a);this.setSelectedIndex(r,!1,d)},t.prototype.getValue=function(){var a=this.adapter.getSelectedIndex(),d=this.adapter.getMenuItemValues();return a!==Ie.UNSET_INDEX?d[a]:""},t.prototype.getDisabled=function(){return this.disabled},t.prototype.setDisabled=function(a){this.disabled=a,this.disabled?(this.adapter.addClass(I.DISABLED),this.adapter.closeMenu()):this.adapter.removeClass(I.DISABLED),this.leadingIcon&&this.leadingIcon.setDisabled(this.disabled),this.disabled?this.adapter.removeSelectAnchorAttr("tabindex"):this.adapter.setSelectAnchorAttr("tabindex","0"),this.adapter.setSelectAnchorAttr("aria-disabled",this.disabled.toString())},t.prototype.openMenu=function(){this.adapter.addClass(I.ACTIVATED),this.adapter.openMenu(),this.isMenuOpen=!0,this.adapter.setSelectAnchorAttr("aria-expanded","true")},t.prototype.setHelperTextContent=function(a){this.helperText&&this.helperText.setContent(a)},t.prototype.layout=function(){if(this.adapter.hasLabel()){var a=this.getValue().length>0,d=this.adapter.hasClass(I.FOCUSED),r=a||d,_=this.adapter.hasClass(I.REQUIRED);this.notchOutline(r),this.adapter.floatLabel(r),this.adapter.setLabelRequired(_)}},t.prototype.layoutOptions=function(){var a=this.adapter.getMenuItemValues(),d=a.indexOf(this.getValue());this.setSelectedIndex(d,!1,!0)},t.prototype.handleMenuOpened=function(){if(this.adapter.getMenuItemValues().length!==0){var a=this.getSelectedIndex(),d=a>=0?a:0;this.adapter.focusMenuItemAtIndex(d)}},t.prototype.handleMenuClosing=function(){this.adapter.setSelectAnchorAttr("aria-expanded","false")},t.prototype.handleMenuClosed=function(){this.adapter.removeClass(I.ACTIVATED),this.isMenuOpen=!1,this.adapter.isSelectAnchorFocused()||this.blur()},t.prototype.handleChange=function(){this.layout(),this.adapter.notifyChange(this.getValue());var a=this.adapter.hasClass(I.REQUIRED);a&&this.useDefaultValidation&&this.setValid(this.isValid())},t.prototype.handleMenuItemAction=function(a){this.setSelectedIndex(a,!0)},t.prototype.handleFocus=function(){this.adapter.addClass(I.FOCUSED),this.layout(),this.adapter.activateBottomLine()},t.prototype.handleBlur=function(){this.isMenuOpen||this.blur()},t.prototype.handleClick=function(a){if(!(this.disabled||this.recentlyClicked)){if(this.setClickDebounceTimeout(),this.isMenuOpen){this.adapter.closeMenu();return}this.adapter.setRippleCenter(a),this.openMenu()}},t.prototype.handleKeydown=function(a){if(!(this.isMenuOpen||!this.adapter.hasClass(I.FOCUSED))){var d=Ye(a)===Je.ENTER,r=Ye(a)===Je.SPACEBAR,_=Ye(a)===Je.ARROW_UP,h=Ye(a)===Je.ARROW_DOWN,T=a.ctrlKey||a.metaKey;if(!T&&(!r&&a.key&&a.key.length===1||r&&this.adapter.isTypeaheadInProgress())){var x=r?" ":a.key,v=this.adapter.typeaheadMatchItem(x,this.getSelectedIndex());v>=0&&this.setSelectedIndex(v),a.preventDefault();return}!d&&!r&&!_&&!h||(this.openMenu(),a.preventDefault())}},t.prototype.notchOutline=function(a){if(this.adapter.hasOutline()){var d=this.adapter.hasClass(I.FOCUSED);if(a){var r=Ie.LABEL_SCALE,_=this.adapter.getLabelWidth()*r;this.adapter.notchOutline(_)}else d||this.adapter.closeOutline()}},t.prototype.setLeadingIconAriaLabel=function(a){this.leadingIcon&&this.leadingIcon.setAriaLabel(a)},t.prototype.setLeadingIconContent=function(a){this.leadingIcon&&this.leadingIcon.setContent(a)},t.prototype.getUseDefaultValidation=function(){return this.useDefaultValidation},t.prototype.setUseDefaultValidation=function(a){this.useDefaultValidation=a},t.prototype.setValid=function(a){this.useDefaultValidation||(this.customValidity=a),this.adapter.setSelectAnchorAttr("aria-invalid",(!a).toString()),a?(this.adapter.removeClass(I.INVALID),this.adapter.removeMenuClass(I.MENU_INVALID)):(this.adapter.addClass(I.INVALID),this.adapter.addMenuClass(I.MENU_INVALID)),this.syncHelperTextValidity(a)},t.prototype.isValid=function(){return this.useDefaultValidation&&this.adapter.hasClass(I.REQUIRED)&&!this.adapter.hasClass(I.DISABLED)?this.getSelectedIndex()!==Ie.UNSET_INDEX&&(this.getSelectedIndex()!==0||!!this.getValue()):this.customValidity},t.prototype.setRequired=function(a){a?this.adapter.addClass(I.REQUIRED):this.adapter.removeClass(I.REQUIRED),this.adapter.setSelectAnchorAttr("aria-required",a.toString()),this.adapter.setLabelRequired(a)},t.prototype.getRequired=function(){return this.adapter.getSelectAnchorAttr("aria-required")==="true"},t.prototype.init=function(){var a=this.adapter.getAnchorElement();a&&(this.adapter.setMenuAnchorElement(a),this.adapter.setMenuAnchorCorner(qn.BOTTOM_START)),this.adapter.setMenuWrapFocus(!1),this.setDisabled(this.adapter.hasClass(I.DISABLED)),this.syncHelperTextValidity(!this.adapter.hasClass(I.INVALID)),this.layout(),this.layoutOptions()},t.prototype.blur=function(){this.adapter.removeClass(I.FOCUSED),this.layout(),this.adapter.deactivateBottomLine();var a=this.adapter.hasClass(I.REQUIRED);a&&this.useDefaultValidation&&this.setValid(this.isValid())},t.prototype.syncHelperTextValidity=function(a){if(this.helperText){this.helperText.setValidity(a);var d=this.helperText.isVisible(),r=this.helperText.getId();d&&r?this.adapter.setSelectAnchorAttr(It.ARIA_DESCRIBEDBY,r):this.adapter.removeSelectAnchorAttr(It.ARIA_DESCRIBEDBY)}},t.prototype.setClickDebounceTimeout=function(){var a=this;clearTimeout(this.clickDebounceTimeout),this.clickDebounceTimeout=setTimeout(function(){a.recentlyClicked=!1},Ie.CLICK_DEBOUNCE_TIMEOUT_MS),this.recentlyClicked=!0},t}(zt);/**
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
 */var _e={ARIA_HIDDEN:"aria-hidden",ROLE:"role"},Y={HELPER_TEXT_VALIDATION_MSG:"mdc-select-helper-text--validation-msg",HELPER_TEXT_VALIDATION_MSG_PERSISTENT:"mdc-select-helper-text--validation-msg-persistent"};/**
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
 */var $n=function(l){Qt(t,l);function t(a){return l.call(this,et(et({},t.defaultAdapter),a))||this}return Object.defineProperty(t,"cssClasses",{get:function(){return Y},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return _e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},getAttr:function(){return null},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),t.prototype.getId=function(){return this.adapter.getAttr("id")},t.prototype.isVisible=function(){return this.adapter.getAttr(_e.ARIA_HIDDEN)!=="true"},t.prototype.setContent=function(a){this.adapter.setContent(a)},t.prototype.setValidation=function(a){a?this.adapter.addClass(Y.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(Y.HELPER_TEXT_VALIDATION_MSG)},t.prototype.setValidationMsgPersistent=function(a){a?this.adapter.addClass(Y.HELPER_TEXT_VALIDATION_MSG_PERSISTENT):this.adapter.removeClass(Y.HELPER_TEXT_VALIDATION_MSG_PERSISTENT)},t.prototype.getIsValidation=function(){return this.adapter.hasClass(Y.HELPER_TEXT_VALIDATION_MSG)},t.prototype.getIsValidationMsgPersistent=function(){return this.adapter.hasClass(Y.HELPER_TEXT_VALIDATION_MSG_PERSISTENT)},t.prototype.setValidity=function(a){var d=this.adapter.hasClass(Y.HELPER_TEXT_VALIDATION_MSG);if(d){var r=this.adapter.hasClass(Y.HELPER_TEXT_VALIDATION_MSG_PERSISTENT),_=!a||r;if(_){this.showToScreenReader(),a?this.adapter.removeAttr(_e.ROLE):this.adapter.setAttr(_e.ROLE,"alert");return}this.adapter.removeAttr(_e.ROLE),this.hide()}},t.prototype.showToScreenReader=function(){this.adapter.removeAttr(_e.ARIA_HIDDEN)},t.prototype.hide=function(){this.adapter.setAttr(_e.ARIA_HIDDEN,"true")},t}(zt);let ea=0;var ta=be("<div><!></div>");function na(l,t){nt(t,!0);let a=c(t,"use",19,()=>[]),d=c(t,"class",3,""),r=c(t,"id",19,()=>"SMUI-select-helper-text-"+ea++),_=c(t,"persistent",3,!1),h=c(t,"validationMsg",3,!1),T=mt(t,["$$slots","$$events","$$legacy","use","class","id","persistent","validationMsg","children"]),x,v=Q(void 0),L=A({}),S=A({}),y=Q(void 0);const M=Me("SMUI:select:helper-text:id"),g=Me("SMUI:select:helper-text:mount"),m=Me("SMUI:select:helper-text:unmount");gt(()=>(R(v,A(new $n({addClass:G,removeClass:O,hasClass:Z,getAttr:De,setAttr:k,removeAttr:f,setContent:i=>{R(y,A(i))}}))),M&&M(r()),g&&g(n(v)),n(v).init(),()=>{var i;m&&n(v)&&m(n(v)),(i=n(v))==null||i.destroy()}));function Z(i){return i in L?L[i]:b().classList.contains(i)}function G(i){L[i]||(L[i]=!0)}function O(i){(!(i in L)||L[i])&&(L[i]=!1)}function De(i){return i in S?S[i]??null:b().getAttribute(i)}function k(i,D){S[i]!==D&&(S[i]=D)}function f(i){(!(i in S)||S[i]!=null)&&(S[i]=void 0)}function b(){return x}var E=ta();let F;var $=Te(E);{var ue=i=>{var D=j(),ce=P(D);Ae(ce,()=>t.children??Xe),p(i,D)},ee=i=>{var D=Ce();J(()=>ye(D,n(y))),p(i,D)};w($,i=>{n(y)==null?i(ue):i(ee,!1)})}return xe(E),oe(E,i=>x=i,()=>x),le(E,(i,D)=>{var ce;return(ce=Pe)==null?void 0:ce(i,D)},a),J(i=>F=Se(E,F,{class:i,"aria-hidden":_()?void 0:"true",id:r(),...S,...T}),[()=>me({[d()]:!0,"mdc-select-helper-text":!0,"mdc-select-helper-text--validation-msg":h(),"mdc-select-helper-text--validation-msg-persistent":_(),...L})]),p(l,E),at({getElement:b})}let aa=0;var sa=be("<input>"),ra=be('<span class="mdc-select__ripple"></span>'),ia=be('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>',1);function la(l,t){nt(t,!0);const[a,d]=St(),r=()=>tt(ot,"$selectedTextStore",a);let _=()=>{};function h(e){return e===_}let T=c(t,"use",19,()=>[]),x=c(t,"class",3,""),v=c(t,"style",3,""),L=c(t,"ripple",3,!0),S=c(t,"disabled",3,!1),y=c(t,"variant",3,"standard"),M=c(t,"noLabel",3,!1),g=c(t,"label",3,void 0),m=c(t,"value",15),Z=c(t,"key",3,e=>e),G=c(t,"dirty",15,!1),O=c(t,"invalid",15,_),De=c(t,"updateInvalid",19,()=>h(O())),k=c(t,"required",3,!1),f=c(t,"inputId",19,()=>"SMUI-select-"+aa++),b=c(t,"hiddenInput",3,!1),E=c(t,"withLeadingIcon",3,_),F=c(t,"anchor$use",19,()=>[]),$=c(t,"anchor$class",3,""),ue=c(t,"selectedTextContainer$use",19,()=>[]),ee=c(t,"selectedTextContainer$class",3,""),i=c(t,"selectedText$use",19,()=>[]),D=c(t,"selectedText$class",3,""),ce=c(t,"dropdownIcon$use",19,()=>[]),je=c(t,"dropdownIcon$class",3,""),Jt=c(t,"menu$class",3,""),V=mt(t,["$$slots","$$events","$$legacy","use","class","style","ripple","disabled","variant","noLabel","label","value","key","dirty","invalid","updateInvalid","required","inputId","hiddenInput","withLeadingIcon","anchor$use","anchor$class","selectedTextContainer$use","selectedTextContainer$class","selectedText$use","selectedText$class","dropdownIcon$use","dropdownIcon$class","menu$class","children","leadingIcon","helperText"]);const Zt=h(O());h(O())&&O(!1);let st,o=Q(void 0),te=A({}),Ge=A({}),Le,ne=A({}),N=Q(-1);const Et=C(()=>V.menu$id??f()+"-menu");let rt=Q(void 0),At=Me("SMUI:addLayoutListener"),it,Oe=Q(!1),Re=A({}),Ct=Q(void 0),Tt=Q(void 0),xt=Q(!1),fe,$t=Me("SMUI:select:context"),lt,dt,q,ae,he;X("SMUI:list:role",""),X("SMUI:list:nav",!1);const ot=Gt("");X("SMUI:select:selectedText",ot);const yt=Gt(m());Ee(()=>{_t(yt,m())}),X("SMUI:select:value",yt),Ee(()=>{n(o)&&n(o).getValue()!==Z()(m())&&n(o).setValue(Z()(m()))});let ut=n(N);Ee(()=>{if(ut!==n(N))if(ut=n(N),n(o))n(o).setSelectedIndex(n(N),!1,!0);else{const e=We();m()!==e[n(N)]&&m(e[n(N)])}}),Ee(()=>{n(o)&&n(o).getDisabled()!==S()&&n(o).setDisabled(S())}),Ee(()=>{n(o)&&G()&&n(o).isValid()!==!O()&&(De()?O(!n(o).isValid()):n(o).setValid(!O()))}),Ee(()=>{n(o)&&n(o).getRequired()!==k()&&n(o).setRequired(k())}),At&&(it=At(bt)),X("SMUI:select:leading-icon:mount",e=>{lt=e}),X("SMUI:select:leading-icon:unmount",()=>{lt=void 0}),X("SMUI:list:mount",e=>{fe=e}),X("SMUI:select:helper-text:id",e=>{R(rt,A(e))}),X("SMUI:select:helper-text:mount",e=>{dt=e}),X("SMUI:select:helper-text:unmount",()=>{R(rt,void 0),dt=void 0}),gt(()=>(R(o,A(new Zn({setSelectedText:e=>{_t(ot,e)},isSelectAnchorFocused:()=>document.activeElement===Le,getSelectAnchorAttr:sn,setSelectAnchorAttr:rn,removeSelectAnchorAttr:ln,addMenuClass:nn,removeMenuClass:an,openMenu:()=>{R(Oe,!0)},closeMenu:()=>{R(Oe,!1)},getAnchorElement:()=>Le,setMenuAnchorElement:e=>{R(Ct,A(e))},setMenuAnchorCorner:e=>{R(Tt,A(e))},setMenuWrapFocus:e=>{R(xt,A(e))},getSelectedIndex:()=>n(N),setSelectedIndex:e=>{ut=e,R(N,A(e)),m(We()[n(N)])},focusMenuItemAtIndex:e=>{fe.focusItemAtIndex(e)},getMenuItemCount:()=>fe.items.length,getMenuItemValues:()=>We().map(Z()),getMenuItemTextAtIndex:e=>fe.getPrimaryTextAtIndex(e),isTypeaheadInProgress:()=>fe.typeaheadInProgress,typeaheadMatchItem:(e,s)=>fe.typeaheadMatchItem(e,s),addClass:ct,removeClass:ft,hasClass:en,setRippleCenter:e=>ae&&ae.setRippleCenter(e),activateBottomLine:()=>ae&&ae.activate(),deactivateBottomLine:()=>ae&&ae.deactivate(),notifyChange:e=>{var s;G(!0),De()&&O(!((s=n(o))!=null&&s.isValid())),vt(Ve(),"SMUISelectChange",{value:m(),index:n(N)})},hasOutline:()=>!!he,notchOutline:e=>he&&he.notch(e),closeOutline:()=>he&&he.closeNotch(),hasLabel:()=>!!q,floatLabel:e=>q&&q.float(e),getLabelWidth:()=>q?q.getWidth():0,setLabelRequired:e=>q&&q.setRequired(e)},{get helperText(){return dt},get leadingIcon(){return lt}}))),R(N,A(We().indexOf(m()))),n(o).init(),Mt(Zt),()=>{var e;(e=n(o))==null||e.destroy()})),Yt(()=>{it&&it()});function en(e){return e in te?te[e]:Ve().classList.contains(e)}function ct(e){te[e]||(te[e]=!0)}function ft(e){(!(e in te)||te[e])&&(te[e]=!1)}function tn(e,s){Ge[e]!=s&&(s===""||s==null?delete Ge[e]:Ge[e]=s)}function nn(e){Re[e]||(Re[e]=!0)}function an(e){(!(e in Re)||Re[e])&&(Re[e]=!1)}function sn(e){return e in ne?ne[e]??null:Ve().getAttribute(e)}function rn(e,s){ne[e]!==s&&(ne[e]=s)}function ln(e){(!(e in ne)||ne[e]!=null)&&(ne[e]=void 0)}function We(){return fe.getOrderedList().map(e=>e.getValue())}function dn(e){const s=e.currentTarget.getBoundingClientRect();return(on(e)?e.touches[0].clientX:e.clientX)-s.left}function on(e){return"touches"in e}function un(){if(n(o)==null)throw new Error("Instance is undefined.");return n(o).getUseDefaultValidation()}function Mt(e){var s;(s=n(o))==null||s.setUseDefaultValidation(e)}function cn(){Le.focus()}function bt(){var e;(e=n(o))==null||e.layout()}function Ve(){return st}var Dt=ia(),se=P(Dt);let Lt;var Ot=Te(se);{var fn=e=>{var s=sa();Pn(s);let u;J(U=>u=Se(s,u,{type:"hidden",required:k(),disabled:S(),value:m(),...U}),[()=>H(V,"input$")]),p(e,s)};w(Ot,e=>{b()&&e(fn)})}var Ue=B(Ot,2),hn=e=>{var s;Le.focus(),n(o)&&n(o).handleClick(dn(e)),(s=t.anchor$onclick)==null||s.call(t,e)},pn=e=>{var s;n(o)&&n(o).handleKeydown(e),(s=t.onkeydown)==null||s.call(t,e)},vn=e=>{var s;n(o)&&n(o).handleBlur(),vt(Ve(),"blur",e),(s=t.anchor$onblur)==null||s.call(t,e)},In=e=>{var s;n(o)&&n(o).handleFocus(),vt(Ve(),"focus",e),(s=t.anchor$onfocus)==null||s.call(t,e)};let Rt;var Vt=Te(Ue);{var _n=e=>{var s=ra();p(e,s)};w(Vt,e=>{y()==="filled"&&e(_n)})}var Ut=B(Vt,2);{var gn=e=>{const s=C(()=>f()+"-smui-label"),u=C(()=>r()!=="");var U=C(()=>H(V,"label$"));oe(Wt(e,de({get id(){return n(s)},get floatAbove(){return n(u)},get required(){return k()}},()=>n(U),{children:(W,K)=>{var re=j(),Be=P(re);{var pe=z=>{},ke=z=>{var Qe=j(),He=P(Qe);{var Ht=ie=>{var ve=Ce();J(()=>ye(ve,g())),p(ie,ve)},ze=ie=>{var ve=j(),pt=P(ve);Ae(pt,g),p(ie,ve)};w(He,ie=>{typeof g()=="string"?ie(Ht):ie(ze,!1)},!0)}p(z,Qe)};w(Be,z=>{g()==null?z(pe):z(ke,!1)})}p(W,re)},$$slots:{default:!0}})),W=>q=W,()=>q)};w(Ut,e=>{y()!=="outlined"&&!M()&&g()!=null&&e(gn)})}var wt=B(Ut,2);{var mn=e=>{const s=C(()=>M()||g()==null);var u=C(()=>H(V,"outline$"));oe(Gn(e,de({get noLabel(){return n(s)}},()=>n(u),{children:(U,W)=>{var K=j(),re=P(K);{var Be=pe=>{const ke=C(()=>f()+"-smui-label"),z=C(()=>r()!=="");var Qe=C(()=>H(V,"label$"));oe(Wt(pe,de({get id(){return n(ke)},get floatAbove(){return n(z)},get required(){return k()}},()=>n(Qe),{children:(He,Ht)=>{var ze=j(),ie=P(ze);{var ve=Fe=>{},pt=Fe=>{var Ft=j(),Dn=P(Ft);{var Ln=we=>{var qe=Ce();J(()=>ye(qe,g())),p(we,qe)},On=we=>{var qe=j(),Rn=P(qe);Ae(Rn,g),p(we,qe)};w(Dn,we=>{typeof g()=="string"?we(Ln):we(On,!1)},!0)}p(Fe,Ft)};w(ie,Fe=>{g()==null?Fe(ve):Fe(pt,!1)})}p(He,ze)},$$slots:{default:!0}})),He=>q=He,()=>q)};w(re,pe=>{!M()&&g()!=null&&pe(Be)})}p(U,K)},$$slots:{default:!0}})),U=>he=U,()=>he)};w(wt,e=>{y()==="outlined"&&e(mn)})}var Pt=B(wt,2);Ae(Pt,()=>t.leadingIcon??Xe);var Ne=B(Pt,2);let Nt;var Ke=Te(Ne);let Bt;var Sn=Te(Ke,!0);xe(Ke),le(Ke,(e,s)=>{var u;return(u=Pe)==null?void 0:u(e,s)},i),xe(Ne),le(Ne,(e,s)=>{var u;return(u=Pe)==null?void 0:u(e,s)},ue);var ht=B(Ne,2);let kt;le(ht,(e,s)=>{var u;return(u=Pe)==null?void 0:u(e,s)},ce);var En=B(ht,2);{var An=e=>{var s=C(()=>H(V,"ripple$"));oe(Wn(e,de(()=>n(s))),u=>ae=u,()=>ae)};w(En,e=>{y()!=="outlined"&&L()&&e(An)})}xe(Ue),oe(Ue,e=>Le=e,()=>Le),le(Ue,(e,s)=>{var u;return(u=Pe)==null?void 0:u(e,s)},F);var Cn=B(Ue,2);const Tn=C(()=>me({[Jt()]:!0,"mdc-select__menu":!0,...Re}));var xn=C(()=>H(V,"menu$"));Xn(Cn,de({get class(){return n(Tn)},get id(){return n(Et)},fullWidth:!0,anchor:!1,get anchorElement(){return n(Ct)},get anchorCorner(){return n(Tt)}},()=>n(xn),{onSMUIMenuSelected:e=>{var s;n(o)&&n(o).handleMenuItemAction(e.detail.index),(s=t.onSMUIMenuSelected)==null||s.call(t,e)},onSMUIMenuSurfaceClosing:e=>{var s;n(o)&&n(o).handleMenuClosing(),(s=t.onSMUIMenuSurfaceClosing)==null||s.call(t,e)},onSMUIMenuSurfaceClosed:e=>{var s;n(o)&&n(o).handleMenuClosed(),(s=t.onSMUIMenuSurfaceClosed)==null||s.call(t,e)},onSMUIMenuSurfaceOpened:e=>{var s;n(o)&&n(o).handleMenuOpened(),(s=t.onSMUIMenuSurfaceOpened)==null||s.call(t,e)},get open(){return n(Oe)},set open(e){R(Oe,A(e))},children:(e,s)=>{var u=C(()=>H(V,"list$"));Vn(e,de({role:"listbox",get wrapFocus(){return n(xt)}},()=>n(u),{get selectedIndex(){return n(N)},set selectedIndex(U){R(N,A(U))},children:(U,W)=>{var K=j(),re=P(K);Ae(re,()=>t.children??Xe),p(U,K)},$$slots:{default:!0}}))},$$slots:{default:!0}})),xe(se),oe(se,e=>st=e,()=>st),le(se,(e,s)=>{var u;return(u=Un)==null?void 0:u(e,s)},()=>({ripple:y()==="filled",unbounded:!1,addClass:ct,removeClass:ft,addStyle:tn})),le(se,(e,s)=>{var u;return(u=jn)==null?void 0:u(e,s)},()=>({addClass:ct,removeClass:ft})),le(se,(e,s)=>{var u;return(u=Pe)==null?void 0:u(e,s)},T);var yn=B(se,2);{var Mn=e=>{var s=C(()=>H(V,"helperText$"));na(e,de(()=>n(s),{children:(u,U)=>{var W=j(),K=P(W);Ae(K,()=>t.helperText??Xe),p(u,W)},$$slots:{default:!0}}))};w(yn,e=>{t.helperText&&e(Mn)})}J((e,s,u,U,W,K,re,Be,pe,ke,z)=>{Lt=Se(se,Lt,{class:e,style:s,...u}),Rt=Se(Ue,Rt,{class:U,"aria-required":k()?"true":void 0,"aria-disabled":S()?"true":void 0,"aria-controls":n(Et),"aria-expanded":n(Oe)?"true":"false","aria-describedby":n(rt),role:"combobox",tabindex:"0",...ne,...W,onclick:hn,onkeydown:pn,onblur:vn,onfocus:In}),Nt=Se(Ne,Nt,{class:K,...re}),Bt=Se(Ke,Bt,{id:f()+"-smui-selected-text",class:Be,role:"button","aria-haspopup":"listbox","aria-labelledby":f()+"-smui-label",...pe}),ye(Sn,r()),kt=Se(ht,kt,{class:ke,...z})},[()=>me({[x()]:!0,"mdc-select":!0,"mdc-select--required":k(),"mdc-select--disabled":S(),"mdc-select--filled":y()==="filled","mdc-select--outlined":y()==="outlined","smui-select--standard":y()==="standard","mdc-select--with-leading-icon":h(E())?t.leadingIcon:E(),"mdc-select--no-label":M()||g()==null,"mdc-select--invalid":O(),"mdc-select--activated":n(Oe),"mdc-data-table__pagination-rows-per-page-select":$t==="data-table:pagination",...te}),()=>Object.entries(Ge).map(([e,s])=>`${e}: ${s};`).concat([v()]).join(" "),()=>wn(V,["input$","anchor$","label$","outline$","selectedTextContainer$","selectedText$","dropdownIcon$","ripple$","menu$","list$","helperText$"]),()=>me({[$()]:!0,"mdc-select__anchor":!0}),()=>H(V,"anchor$"),()=>me({[ee()]:!0,"mdc-select__selected-text-container":!0}),()=>H(V,"selectedTextContainer$"),()=>me({[D()]:!0,"mdc-select__selected-text":!0}),()=>H(V,"selectedText$"),()=>me({[je()]:!0,"mdc-select__dropdown-icon":!0}),()=>H(V,"dropdownIcon$")]),p(l,Dt);var bn=at({getUseDefaultValidation:un,setUseDefaultValidation:Mt,focus:cn,layout:bt,getElement:Ve});return d(),bn}function Kt(l,t){nt(t,!0);const[a,d]=St(),r=()=>tt(L,"$selectedValue",a);let _=c(t,"use",19,()=>[]);c(t,"class",3,"");let h=c(t,"value",3,""),T=mt(t,["$$slots","$$events","$$legacy","use","class","value","children"]),x;const v=Me("SMUI:select:selectedText"),L=Me("SMUI:select:value");X("SMUI:list:item:role","option");const S=C(()=>h()!=null&&h()!==""&&r()===h());gt(y),Yt(y);function y(){n(S)&&x&&_t(v,x.getPrimaryText())}function M(){return x.getElement()}oe(Nn(l,de({get use(){return _()},get"data-value"(){return h()},get value(){return h()},get selected(){return n(S)}},()=>T,{children:(m,Z)=>{var G=j(),O=P(G);Ae(O,()=>t.children??Xe),p(m,G)},$$slots:{default:!0}})),m=>x=m,()=>x);var g=at({getElement:M});return d(),g}var da=be("<!> <!>",1),oa=be("<div> </div> <!>",1),ua=be('<section class="center not-prose m-auto grid grid-cols-2 gap-2 md:max-w-3xl"><!> <!> <!></section>');function _a(l,t){var k;nt(t,!0);const[a,d]=St(),r=()=>tt(n(S),"$events",a),_=()=>tt(n(y),"$matchesCount",a),{title:h}=Bn(),T=2024;async function x(){const f=await Xt(`/events/${T}/simple`);Array.isArray(f)&&ge.events.bulkPut(f)}let v=Q(A((k=t.data.selectedEvent)==null?void 0:k.key));async function L(){if(!n(v))return;const f=await Xt(`/event/${n(v)}/matches/simple`);Array.isArray(f)&&ge.matches.bulkPut(f)}const S=C(()=>jt(async()=>{console.time("events load");let b=(await ge.events.where({year:T}).toArray()).sort((E,F)=>E.name.localeCompare(F.name));return console.timeEnd("events load"),b})),y=C(()=>jt(async()=>n(v)?ge.matches.where("event_key").equals(n(v)).count():0));let M=C(()=>{var f;return(f=r())==null?void 0:f.find(b=>b.key===n(v))});Ee(()=>{n(M)&&ge.current_event.clear().then(()=>{console.log("Setting selected event",n(M)),n(M)&&ge.current_event.put(Yn(n(M)))})}),h.set("Setup");var g=ua(),m=Te(g);{var Z=f=>{la(f,{class:"w-full",anchor$class:"w-full",get value(){return n(v)},set value(b){R(v,A(b))},children:(b,E)=>{var F=da(),$=P(F);Kt($,{value:void 0,children:(ee,i)=>{Ze();var D=Ce("Select event");p(ee,D)},$$slots:{default:!0}});var ue=B($,2);Kn(ue,1,r,Qn,(ee,i)=>{Kt(ee,{get value(){return n(i).key},children:(D,ce)=>{Ze();var je=Ce();J(()=>ye(je,n(i).name)),p(D,je)},$$slots:{default:!0}})}),p(b,F)},$$slots:{default:!0}})};w(m,f=>{r()&&f(Z)})}var G=B(m,2);qt(G,{class:"w-max",variant:"raised",onclick:x,children:(f,b)=>{Ze();var E=Ce();E.nodeValue=`Download Events for ${T}`,p(f,E)},$$slots:{default:!0}});var O=B(G,2);{var De=f=>{var b=oa(),E=P(b),F=Te(E);xe(E);var $=B(E,2);qt($,{class:"w-max",variant:"raised",onclick:L,children:(ue,ee)=>{Ze();var i=Ce();J(()=>ye(i,`Download Matches for ${n(M).name??""}`)),p(ue,i)},$$slots:{default:!0}}),J(()=>ye(F,`${_()??""} matches downloaded for event ${n(M).name??""}`)),p(f,b)};w(O,f=>{n(M)&&f(De)})}xe(g),p(l,g),at(),d()}export{_a as component,Ia as universal};
