import{b as yt}from"../chunks/BkWxgEoN.js";import{_ as xt,a as Ye,M as Dt,d as pe,e as Fe,m as Rt,s as Pe,n as Je,f as Ce,u as He,c as Ke,o as Et,h as Le,B as Qt,r as Ut,R as Bt,w as Zt,k as Xt,g as Jt,l as Ot}from"../chunks/eBBfgSPd.js";import{r as wt}from"../chunks/CdilF6c4.js";import{d as Ft,t as ae,c as ce,a as v,b as le,s as ne,e as Yt,o as $t}from"../chunks/DkyGT7kw.js";import{p as Se,d as V,Z as Xe,g as t,b as d,i as bt,c as P,r as H,s as C,j as re,f as Z,n as Y,t as _e,a as Me,aL as Pt,e as gt,h as Ae,a6 as kt,ah as jt}from"../chunks/Dtkc5tKY.js";import{a as l,p as N,r as rt,i as me,b as Ie,s as At,e as ea,d as ta}from"../chunks/N4LhOoPa.js";import{e as Vt,i as Wt}from"../chunks/DZcZIQ4t.js";import{T as aa,b as na,a as ra}from"../chunks/xzJQou2i.js";import{M as ia,A as la}from"../chunks/CW5OsCRc.js";import{L as sa,I as mt}from"../chunks/DbJaMY4O.js";import{T as _t}from"../chunks/CjbS4D6L.js";import{a as oa,b as ua,T as da,c as ca,D as fa,H as va,R as Ht,C as Qe,B as ma,A as _a,V as ha,r as Kt,d as Ze,f as ba,h as ga,i as Ea,g as Ca,j as Ia,k as Ta,l as Aa,Q as Na,m as Ue}from"../chunks/DygEgwVl.js";import{C as xa}from"../chunks/eXYN6l5q.js";/**
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
 */var nt={ANIM_CHECKED_INDETERMINATE:"mdc-checkbox--anim-checked-indeterminate",ANIM_CHECKED_UNCHECKED:"mdc-checkbox--anim-checked-unchecked",ANIM_INDETERMINATE_CHECKED:"mdc-checkbox--anim-indeterminate-checked",ANIM_INDETERMINATE_UNCHECKED:"mdc-checkbox--anim-indeterminate-unchecked",ANIM_UNCHECKED_CHECKED:"mdc-checkbox--anim-unchecked-checked",ANIM_UNCHECKED_INDETERMINATE:"mdc-checkbox--anim-unchecked-indeterminate",BACKGROUND:"mdc-checkbox__background",CHECKED:"mdc-checkbox--checked",CHECKMARK:"mdc-checkbox__checkmark",CHECKMARK_PATH:"mdc-checkbox__checkmark-path",DISABLED:"mdc-checkbox--disabled",INDETERMINATE:"mdc-checkbox--indeterminate",MIXEDMARK:"mdc-checkbox__mixedmark",NATIVE_CONTROL:"mdc-checkbox__native-control",ROOT:"mdc-checkbox",SELECTED:"mdc-checkbox--selected",UPGRADED:"mdc-checkbox--upgraded"},he={ARIA_CHECKED_ATTR:"aria-checked",ARIA_CHECKED_INDETERMINATE_VALUE:"mixed",DATA_INDETERMINATE_ATTR:"data-indeterminate",NATIVE_CONTROL_SELECTOR:".mdc-checkbox__native-control",TRANSITION_STATE_CHECKED:"checked",TRANSITION_STATE_INDETERMINATE:"indeterminate",TRANSITION_STATE_INIT:"init",TRANSITION_STATE_UNCHECKED:"unchecked"},Lt={ANIM_END_LATCH_MS:250};/**
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
 */var Da=function(K){xt(e,K);function e(u){var i=K.call(this,Ye(Ye({},e.defaultAdapter),u))||this;return i.currentCheckState=he.TRANSITION_STATE_INIT,i.currentAnimationClass="",i.animEndLatchTimer=0,i.enableAnimationEndHandler=!1,i}return Object.defineProperty(e,"cssClasses",{get:function(){return nt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return he},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Lt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},hasNativeControl:function(){return!1},isAttachedToDOM:function(){return!1},isChecked:function(){return!1},isIndeterminate:function(){return!1},removeClass:function(){},removeNativeControlAttr:function(){},setNativeControlAttr:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.currentCheckState=this.determineCheckState(),this.updateAriaChecked(),this.adapter.addClass(nt.UPGRADED)},e.prototype.destroy=function(){clearTimeout(this.animEndLatchTimer)},e.prototype.setDisabled=function(u){this.adapter.setNativeControlDisabled(u),u?this.adapter.addClass(nt.DISABLED):this.adapter.removeClass(nt.DISABLED)},e.prototype.handleAnimationEnd=function(){var u=this;this.enableAnimationEndHandler&&(clearTimeout(this.animEndLatchTimer),this.animEndLatchTimer=setTimeout(function(){u.adapter.removeClass(u.currentAnimationClass),u.enableAnimationEndHandler=!1},Lt.ANIM_END_LATCH_MS))},e.prototype.handleChange=function(){this.transitionCheckState()},e.prototype.transitionCheckState=function(){if(this.adapter.hasNativeControl()){var u=this.currentCheckState,i=this.determineCheckState();if(u!==i){this.updateAriaChecked();var I=he.TRANSITION_STATE_UNCHECKED,h=nt.SELECTED;i===I?this.adapter.removeClass(h):this.adapter.addClass(h),this.currentAnimationClass.length>0&&(clearTimeout(this.animEndLatchTimer),this.adapter.forceLayout(),this.adapter.removeClass(this.currentAnimationClass)),this.currentAnimationClass=this.getTransitionAnimationClass(u,i),this.currentCheckState=i,this.adapter.isAttachedToDOM()&&this.currentAnimationClass.length>0&&(this.adapter.addClass(this.currentAnimationClass),this.enableAnimationEndHandler=!0)}}},e.prototype.determineCheckState=function(){var u=he.TRANSITION_STATE_INDETERMINATE,i=he.TRANSITION_STATE_CHECKED,I=he.TRANSITION_STATE_UNCHECKED;return this.adapter.isIndeterminate()?u:this.adapter.isChecked()?i:I},e.prototype.getTransitionAnimationClass=function(u,i){var I=he.TRANSITION_STATE_INIT,h=he.TRANSITION_STATE_CHECKED,U=he.TRANSITION_STATE_UNCHECKED,T=e.cssClasses,c=T.ANIM_UNCHECKED_CHECKED,o=T.ANIM_UNCHECKED_INDETERMINATE,m=T.ANIM_CHECKED_UNCHECKED,b=T.ANIM_CHECKED_INDETERMINATE,_=T.ANIM_INDETERMINATE_CHECKED,R=T.ANIM_INDETERMINATE_UNCHECKED;switch(u){case I:return i===U?"":i===h?_:R;case U:return i===h?c:o;case h:return i===U?m:b;default:return i===h?_:R}},e.prototype.updateAriaChecked=function(){this.adapter.isIndeterminate()?this.adapter.setNativeControlAttr(he.ARIA_CHECKED_ATTR,he.ARIA_CHECKED_INDETERMINATE_VALUE):this.adapter.removeNativeControlAttr(he.ARIA_CHECKED_ATTR)},e}(Dt);async function ka(){await pe.authenticated.toCollection().first()||wt(307,`${yt}/login`);let e=await pe.current_event.toCollection().first();return e||wt(307,`${yt}/setup`),{event:e}}const Tn=Object.freeze(Object.defineProperty({__proto__:null,load:ka},Symbol.toStringTag,{value:"Module"}));let pa=0;var Sa=(K,e,u)=>{e()||d(u,!0)},Ma=(K,e)=>{d(e,-1)},ya=ae('<div><div role="combobox" tabindex="0"><!></div> <!></div>');function we(K,e){Se(e,!0);let u=l(e,"use",19,()=>[]),i=l(e,"class",3,""),I=l(e,"options",19,()=>[]),h=l(e,"value",15),U=l(e,"getOptionDisabled",3,()=>!1),T=l(e,"getOptionLabel",3,n=>n==null?"":`${n}`),c=l(e,"text",31,()=>N(T()(h()))),o=l(e,"disabled",3,!1),m=l(e,"toggle",3,!1),b=l(e,"combobox",3,!1),_=l(e,"clearOnBlur",19,()=>!b()),R=l(e,"selectOnExactMatch",3,!0),O=l(e,"showMenuWithNoInput",3,!0),x=l(e,"noMatchesActionDisabled",3,!0),G=l(e,"search",3,async n=>{const E=n.toLowerCase(),ee=typeof I()=="function"?await I()():I()||[];if(E==="")return ee;const it=ee.filter(lt=>T()(lt).toLowerCase().includes(E));return it.sort((lt,st)=>{const ot=T()(lt).toLowerCase(),ut=T()(st).toLowerCase();return ot.startsWith(E)&&!ut.startsWith(E)?-1:ut.startsWith(E)&&!ot.startsWith(E)?1:0}),it}),X=l(e,"menu$class",3,""),k=l(e,"menu$anchor",3,!1),p=l(e,"menu$anchorCorner",3,"BOTTOM_START"),W=rt(e,["$$slots","$$events","$$legacy","use","class","options","value","getOptionDisabled","getOptionLabel","text","label","disabled","toggle","combobox","clearOnBlur","selectOnExactMatch","showMenuWithNoInput","noMatchesActionDisabled","search","menu$class","menu$anchor","menu$anchorCorner","children","loading","error","match","noMatches"]),A,S,w=V(0),te=V(!1),D=V(!1),z,q=V(N([])),M=V(-1),L=V(void 0),J=W.menu$id??"SMUI-autocomplete-"+pa+++"-menu";const Q=re(()=>t(D)&&(c()!==""||O())&&(t(w)>0||!b()&&!(t(q).length===1&&t(q)[0]===h())||b()&&!!t(q).length&&!(t(q).length===1&&t(q)[0]===h())));let ve=c();Xe(()=>{ve!==c()&&(h()!=null&&T()(h())!==c()&&ie(h(),!1),t(D)&&(s(),ve=c()))});let $=!1;Xe(()=>{I()&&!$&&($=!0,s().then(()=>{$=!1}))});let g=h();Xe(()=>{g!==h()?(c(T()(h())),g=h()):b()&&h()!==c()&&(h(c()),g=h())});let a;Xe(()=>{if(a!==t(M)){const n=se();t(M)===-1?d(L,void 0):(d(L,N(n[t(M)])),t(L)&&(t(L).activated=!0,F(t(L).element)||t(L).element.scrollIntoView({block:"end",inline:"nearest"}))),n.forEach((E,ee)=>{ee!==t(M)&&(E.activated=!1)}),z&&z.getOrderedList().forEach(E=>{E.tabindex=-1}),a=t(M)}}),bt("SMUI:list:mount",n=>{z||(z=n)});async function s(){t(D)&&!xe()&&fe(),d(w,t(w)+1),d(te,!1);try{const n=await G()(c());if(n!==!1&&(d(q,N(n)),R())){const E=t(q).find(ee=>T()(ee)===c());E!=null&&T()(h())!==c()&&y(E)}}catch{d(te,!0)}d(w,t(w)-1)}function y(n,E=!0){Fe(be(),"SMUIAutocompleteSelected",n,{bubbles:!0,cancelable:!0}).defaultPrevented||(E&&c(T()(n)),h(n),E||(g=n))}function ie(n,E=!0){Fe(be(),"SMUIAutocompleteDeselected",n,{bubbles:!0,cancelable:!0}).defaultPrevented||(E&&c(""),h(void 0),E||(g=void 0))}function B(n){n===h()?ie(n):y(n)}function F(n){var E=n.getBoundingClientRect();return E.top>=0&&E.left>=0&&E.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&E.right<=(window.innerWidth||document.documentElement.clientWidth)}function se(){return z?z.getOrderedList().filter(n=>!n.disabled):[]}function oe(n){if(!(b()&&!t(q).length)){if(n.key==="ArrowDown")n.preventDefault(),t(M)===-1||t(M)===se().length-1?d(M,0):Pt(M);else if(n.key==="ArrowUp")n.preventDefault(),t(M)===-1||t(M)===0?d(M,se().length-1):Pt(M,-1);else if(n.key==="Enter"){n.preventDefault();const E=se();t(L)&&(E[t(M)]&&E[t(M)].action(n),d(M,-1))}}}async function Ne(n){var E;if(!document.hasFocus()){$t(window,"focus",()=>{var ee;(ee=be())!=null&&ee.contains(document.activeElement)||Ne(n)},{once:!0});return}(E=n.currentTarget)!=null&&E.contains(n.relatedTarget)||(d(M,-1),d(D,!1),_()&&h()==null&&c(""))}function xe(){if(S)return document.activeElement===S.querySelector("input.mdc-text-field__input")}function fe(){if(S){const n=S.querySelector("input.mdc-text-field__input");n&&n.focus()}}function ye(){if(S){const n=S.querySelector("input.mdc-text-field__input");n&&n.blur()}}function be(){return A}var ue=ya(),r=n=>{var E;o()||Ne(n),(E=e.onfocusout)==null||E.call(e,n)};let f;var j=P(ue);Rt(j,"aria-controls",J),j.__focusin=[Sa,o,D],j.__input=[Ma,M];var De=P(j);{var $e=n=>{var E=ce(),ee=Z(E);Pe(ee,()=>e.children??gt),v(n,E)},et=n=>{var E=re(()=>Je(W,"textfield$"));aa(n,At({get label(){return e.label},get disabled(){return o()}},()=>t(E),{get value(){return c()},set value(ee){c(ee)}}))};me(De,n=>{e.children?n($e):n(et,!1)})}H(j),Ie(j,n=>S=n,()=>S);var tt=C(j,2);const Ct=re(()=>Ke({[X()]:!0,"smui-autocomplete__menu":!0}));var qt=re(()=>Je(W,"menu$"));return ia(tt,At({get class(){return t(Ct)},id:J,managed:!0,neverRestoreFocus:!0,get open(){return t(Q)},get anchor(){return k()},get anchorCorner(){return p()}},()=>t(qt),{get anchorElement(){return A},set anchorElement(n){A=n},children:(n,E)=>{var ee=re(()=>Je(W,"list$"));sa(n,At(()=>t(ee),{children:(it,lt)=>{var st=ce(),ot=Z(st);{var ut=je=>{mt(je,{disabled:!0,children:(dt,pt)=>{var ct=ce(),It=Z(ct);{var Re=ke=>{var ge=ce(),de=Z(ge);Pe(de,()=>e.loading),v(ke,ge)},Ve=ke=>{_t(ke,{children:(ge,de)=>{Y();var We=le("Loading...");v(ge,We)},$$slots:{default:!0}})};me(It,ke=>{e.loading?ke(Re):ke(Ve,!1)})}v(dt,ct)},$$slots:{default:!0}})},Gt=je=>{var dt=ce(),pt=Z(dt);{var ct=Re=>{mt(Re,{disabled:!0,children:(Ve,ke)=>{var ge=ce(),de=Z(ge);{var We=Te=>{var Oe=ce(),at=Z(Oe);Pe(at,()=>e.error),v(Te,Oe)},qe=Te=>{_t(Te,{children:(Oe,at)=>{Y();var Ee=le("Error while fetching suggestions.");v(Oe,Ee)},$$slots:{default:!0}})};me(de,Te=>{e.error?Te(We):Te(qe,!1)})}v(Ve,ge)},$$slots:{default:!0}})},It=Re=>{var Ve=ce(),ke=Z(Ve);Vt(ke,17,()=>t(q),Wt,(ge,de,We)=>{const qe=re(()=>U()(t(de))),Te=re(()=>t(de)===h());mt(ge,{get disabled(){return t(qe)},get selected(){return t(Te)},onmouseenter:()=>{d(M,N(We))},onSMUIAction:()=>m()?B(t(de)):y(t(de)),children:(Oe,at)=>{var Ee=ce(),Ge=Z(Ee);{var ft=ze=>{var vt=ce(),St=Z(vt);Pe(St,()=>e.match,()=>t(de)),v(ze,vt)},Tt=ze=>{_t(ze,{children:(vt,St)=>{Y();var Mt=le();_e(zt=>ne(Mt,zt),[()=>T()(t(de))]),v(vt,Mt)},$$slots:{default:!0}})};me(Ge,ze=>{e.match?ze(ft):ze(Tt,!1)})}v(Oe,Ee)},$$slots:{default:!0}})},ge=>{mt(ge,{get disabled(){return x()},onSMUIAction:de=>Fe(be(),"SMUIAutocompleteNoMatchesAction",de),children:(de,We)=>{var qe=ce(),Te=Z(qe);{var Oe=Ee=>{var Ge=ce(),ft=Z(Ge);Pe(ft,()=>e.noMatches),v(Ee,Ge)},at=Ee=>{_t(Ee,{children:(Ge,ft)=>{Y();var Tt=le("No matches found.");v(Ge,Tt)},$$slots:{default:!0}})};me(Te,Ee=>{e.noMatches?Ee(Oe):Ee(at,!1)})}v(de,qe)},$$slots:{default:!0}})}),v(Re,Ve)};me(pt,Re=>{t(te)?Re(ct):Re(It,!1)},!0)}v(je,dt)};me(ot,je=>{t(w)?je(ut):je(Gt,!1)})}v(it,st)},$$slots:{default:!0}}))},$$slots:{default:!0}})),H(ue),Ie(ue,n=>A=n,()=>A),Ce(ue,n=>{var E;return(E=la)==null?void 0:E(n)}),Ce(ue,(n,E)=>{var ee;return(ee=He)==null?void 0:ee(n,E)},u),_e((n,E)=>{f=Le(ue,f,{class:n,...E,onfocusout:r}),Rt(j,"aria-expanded",t(Q)?"true":"false")},[()=>Ke({[i()]:!0,"smui-autocomplete":!0}),()=>Et(W,["menu$","textfield$","list$"])]),Yt("keydown",j,oe,!0),v(K,ue),Me({focus:fe,blur:ye,getElement:be})}Ft(["focusin","input"]);var Ra=ae('<div class="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose"><!> <!> <!> <!> <!> <!></div>');function Oa(K,e){let u=l(e,"blue1",15),i=l(e,"blue2",15),I=l(e,"blue3",15),h=l(e,"red1",15),U=l(e,"red2",15),T=l(e,"red3",15);var c=Ra(),o=P(c);we(o,{class:"w-full",textfield$class:"w-full",label:"Blue 1",get options(){return e.teamList},get value(){return u()},set value(x){u(x)}});var m=C(o,2);we(m,{class:"w-full",textfield$class:"w-full",label:"Blue 2",get options(){return e.teamList},get value(){return i()},set value(x){i(x)}});var b=C(m,2);we(b,{class:"w-full",textfield$class:"w-full",label:"Blue 3",get options(){return e.teamList},get value(){return I()},set value(x){I(x)}});var _=C(b,2);we(_,{class:"w-full",textfield$class:"w-full",label:"Red 1",get options(){return e.teamList},get value(){return h()},set value(x){h(x)}});var R=C(_,2);we(R,{class:"w-full",textfield$class:"w-full",label:"Red 2",get options(){return e.teamList},get value(){return U()},set value(x){U(x)}});var O=C(R,2);we(O,{class:"w-full",textfield$class:"w-full",label:"Red 3",get options(){return e.teamList},get value(){return T()},set value(x){T(x)}}),H(c),v(K,c)}var wa=ae("<div><!></div>");function Pa(K,e){Se(e,!0);let u=l(e,"use",19,()=>[]),i=l(e,"class",3,""),I=l(e,"variant",3,"raised"),h=l(e,"padded",3,!1),U=rt(e,["$$slots","$$events","$$legacy","use","class","variant","padded","children"]),T;function c(){return T}var o=wa();let m;var b=P(o);return Pe(b,()=>e.children??gt),H(o),Ie(o,_=>T=_,()=>T),Ce(o,(_,R)=>{var O;return(O=He)==null?void 0:O(_,R)},u),_e(_=>m=Le(o,m,{class:_,...U}),[()=>Ke({[i()]:!0,"mdc-card":!0,"mdc-card--outlined":I()==="outlined","smui-card--padded":h()})]),v(K,o),Me({getElement:c})}var Ha=ae("<!> <!> <!>",1),Ka=ae("<!> <!> <!>",1),La=ae("<!> <!>",1),Ua=ae("<!> <!> <!>",1);function Ba(K,e){Se(e,!0);let u=V(!1),i=V(N([])),I=V(void 0);function h(T,c){d(i,N(T)),d(I,N(c)),d(u,!0)}let U=V(void 0);return oa(K,{fullscreen:!0,class:"not-prose",get open(){return t(u)},set open(c){d(u,N(c))},over:c=>{Ie(ha(c,{}),o=>d(U,N(o)),()=>t(U))},children:(c,o)=>{var m=Ua(),b=Z(m);ua(b,{children:(O,x)=>{da(O,{children:(G,X)=>{Y();var k=le();_e(()=>ne(k,`Team ${t(I)??""}`)),v(G,k)},$$slots:{default:!0}})},$$slots:{default:!0}});var _=C(b,2);ca(_,{children:(O,x)=>{fa(O,{class:"w-full",children:(G,X)=>{var k=La(),p=Z(k);va(p,{children:(A,S)=>{Ht(A,{children:(w,te)=>{var D=Ha(),z=Z(D);Qe(z,{children:(L,J)=>{Y();var Q=le("Auto");v(L,Q)},$$slots:{default:!0}});var q=C(z,2);Qe(q,{children:(L,J)=>{Y();var Q=le("Teleop");v(L,Q)},$$slots:{default:!0}});var M=C(q,2);Qe(M,{children:(L,J)=>{Y();var Q=le("Other Info");v(L,Q)},$$slots:{default:!0}}),v(w,D)},$$slots:{default:!0}})},$$slots:{default:!0}});var W=C(p,2);ma(W,{children:(A,S)=>{var w=ce(),te=Z(w);Vt(te,17,()=>t(i),Wt,(D,z)=>{Ht(D,{onclick:()=>{var q;(q=t(U))==null||q.open(t(z))},children:(q,M)=>{var L=Ka(),J=Z(L);Qe(J,{children:($,g)=>{Y();var a=le();_e(()=>ne(a,t(z).auto.length)),v($,a)},$$slots:{default:!0}});var Q=C(J,2);Qe(Q,{children:($,g)=>{Y();var a=le();_e(()=>ne(a,t(z).teleop.length)),v($,a)},$$slots:{default:!0}});var ve=C(Q,2);Qe(ve,{children:($,g)=>{Y();var a=le();_e(()=>ne(a,t(z).otherInfo)),v($,a)},$$slots:{default:!0}}),v(q,L)},$$slots:{default:!0}})}),v(A,w)},$$slots:{default:!0}}),v(G,k)},$$slots:{default:!0}})},$$slots:{default:!0}});var R=C(_,2);_a(R,{children:(O,x)=>{Qt(O,{action:"done",children:(G,X)=>{xa(G,{children:(k,p)=>{Y();var W=le("Close");v(k,W)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),v(c,m)},$$slots:{over:!0,default:!0}}),Me({open:h})}var Fa=ae('<ul class="my-0"><li>Avg algae scored: <b> </b> total, <b> </b> auto</li> <li>Avg coral scored: <b> </b> total, <b> </b> auto</li> <li>Most coral in a match: <b> </b></li> <li>Fewest coral in a match: <b> </b></li> <li>Avg. game pieces missed: <b> </b></li> <li>Can score in: <b> </b></li> <li>Can climb: <b> </b></li> <li>Climb success rate: <b> </b></li></ul> <pre class="cursor-pointer"> </pre>',1),ja=ae('<ul class="grow"><li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li></ul> <pre>&nbsp;</pre>',1),Va=ae("<h1> </h1> <!>",1),Wa=ae("<!> <!>",1);function Be(K,e){Se(e,!0);let u;var i=Wa(),I=Z(i);Pa(I,{class:"p-2",children:(U,T)=>{var c=Va(),o=Z(c),m=P(o);H(o);var b=C(o,2);{var _=O=>{var x=Fa(),G=Z(x),X=P(G),k=C(P(X)),p=P(k,!0);H(k);var W=C(k,2),A=P(W,!0);H(W),Y(),H(X);var S=C(X,2),w=C(P(S)),te=P(w,!0);H(w);var D=C(w,2),z=P(D,!0);H(D),Y(),H(S);var q=C(S,2),M=C(P(q)),L=P(M,!0);H(M),H(q);var J=C(q,2),Q=C(P(J)),ve=P(Q,!0);H(Q),H(J);var $=C(J,2),g=C(P($)),a=P(g,!0);H(g),H($);var s=C($,2),y=C(P(s)),ie=P(y,!0);H(y),H(s);var B=C(s,2),F=C(P(B)),se=P(F,!0);H(F),H(B);var oe=C(B,2),Ne=C(P(oe)),xe=P(Ne,!0);H(Ne),H(oe),H(G);var fe=C(G,2);fe.__click=()=>u.open(e.data,e.teamNum);var ye=P(fe);H(fe),_e((be,ue,r,f,j,De,$e,et,tt,Ct)=>{ne(p,be),ne(A,ue),ne(te,r),ne(z,f),ne(L,j),ne(ve,De),ne(a,$e),ne(ie,et),ne(se,tt),ne(xe,Ct),ne(ye,`${e.data.length??""} items`)},[()=>Kt(Ze(e.data,"algaeScoredAuto")+Ze(e.data,"algaeScoredTeleop"),2),()=>Ze(e.data,"algaeScoredAuto"),()=>Kt(Ze(e.data,"coralScoredAuto")+Ze(e.data,"coralScoredTeleop"),2),()=>Ze(e.data,"coralScoredAuto"),()=>ba(e.data),()=>ga(e.data),()=>Ea(e.data),()=>Ca(e.data),()=>Ia(e.data),()=>Ta(e.data)]),v(O,x)},R=O=>{var x=ja();Y(2),v(O,x)};me(b,O=>{e.teamNum&&e.data.length>0?O(_):O(R,!1)})}_e(()=>ne(m,`${e.spot??""}: ${e.teamNum??""}`)),v(U,c)},$$slots:{default:!0}});var h=C(I,2);Ie(Ba(h,{}),U=>u=U,()=>u),v(K,i),Me()}Ft(["click"]);/**
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
 */var qa={NATIVE_CONTROL_SELECTOR:".mdc-radio__native-control"},Ga={DISABLED:"mdc-radio--disabled",ROOT:"mdc-radio"};/**
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
 */var za=function(K){xt(e,K);function e(u){return K.call(this,Ye(Ye({},e.defaultAdapter),u))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return Ga},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return qa},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setDisabled=function(u){var i=e.cssClasses.DISABLED;this.adapter.setNativeControlDisabled(u),u?this.adapter.addClass(i):this.adapter.removeClass(i)},e}(Dt),Qa=ae('<div><input> <div class="mdc-radio__background"><div class="mdc-radio__outer-circle"></div> <div class="mdc-radio__inner-circle"></div></div> <div class="mdc-radio__ripple"></div></div>');function Nt(K,e){Se(e,!0);const u=[];let i=()=>{};function I(a){return a===i}let h=l(e,"use",19,()=>[]),U=l(e,"class",3,""),T=l(e,"style",3,""),c=l(e,"disabled",15,!1),o=l(e,"touch",3,!1),m=l(e,"group",15),b=l(e,"value",3,null),_=l(e,"valueKey",3,i),R=l(e,"input$use",19,()=>[]),O=l(e,"input$class",3,""),x=rt(e,["$$slots","$$events","$$legacy","use","class","style","disabled","touch","group","value","valueKey","input$use","input$class"]),G,X=V(void 0),k=N({}),p=N({}),W=V(!1),A=N(Ae("SMUI:generic:input:props")??{});const S=Ae("SMUI:generic:input:mount"),w=Ae("SMUI:generic:input:unmount");kt(()=>{d(X,N(new za({addClass:te,removeClass:D,setNativeControlDisabled:s=>c(s)})));const a={_smui_radio_accessor:!0,get element(){return M()},get checked(){return m()===b()},set checked(s){s&&m()!==b()?m(b()):!s&&m()===b()&&m(void 0)},activateRipple(){c()||d(W,!0)},deactivateRipple(){d(W,!1)}};return S&&S(a),t(X).init(),()=>{var s;w&&w(a),(s=t(X))==null||s.destroy()}});function te(a){k[a]||(k[a]=!0)}function D(a){(!(a in k)||k[a])&&(k[a]=!1)}function z(a,s){p[a]!=s&&(s===""||s==null?delete p[a]:p[a]=s)}function q(){return A&&A.id}function M(){return G}var L=Qa();let J;var Q=P(L);Ut(Q);var ve=a=>{var s;Fe(M(),"blur",a),(s=e.input$onblur)==null||s.call(e,a)},$=a=>{var s;Fe(M(),"focus",a),(s=e.input$onfocus)==null||s.call(e,a)};let g;return Ce(Q,(a,s)=>{var y;return(y=He)==null?void 0:y(a,s)},R),jt(()=>na(u,[],Q,()=>(I(_())?b():_(),m()),m)),Y(4),H(L),Ie(L,a=>G=a,()=>G),Ce(L,(a,s)=>{var y;return(y=Bt)==null?void 0:y(a,s)},()=>({unbounded:!0,active:t(W),addClass:te,removeClass:D,addStyle:z})),Ce(L,(a,s)=>{var y;return(y=He)==null?void 0:y(a,s)},h),_e((a,s,y,ie,B,F)=>{J=Le(L,J,{class:a,style:s,...y}),g=Le(Q,g,{class:ie,type:"radio",...A,disabled:c(),value:B,...F,onblur:ve,onfocus:$})},[()=>Ke({[U()]:!0,"mdc-radio":!0,"mdc-radio--disabled":c(),"mdc-radio--touch":o(),...k}),()=>Object.entries(p).map(([a,s])=>`${a}: ${s};`).concat([T()]).join(" "),()=>Et(x,["input$"]),()=>Ke({[O()]:!0,"mdc-radio__native-control":!0}),()=>I(_())?b():_(),()=>Je(x,"input$")]),v(K,L),Me({getId:q,getElement:M})}var Za=ae('<div><input> <div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg> <div class="mdc-checkbox__mixedmark"></div></div> <div class="mdc-checkbox__ripple"></div></div>');function Xa(K,e){Se(e,!0);let u=()=>{};function i(r){return r===u}let I=l(e,"use",19,()=>[]),h=l(e,"class",3,""),U=l(e,"style",3,""),T=l(e,"disabled",15,!1),c=l(e,"touch",3,!1),o=l(e,"indeterminate",15,u),m=l(e,"group",11,u),b=l(e,"checked",15,u),_=l(e,"value",3,null),R=l(e,"valueKey",3,u),O=l(e,"input$use",19,()=>[]),x=l(e,"input$class",3,""),G=rt(e,["$$slots","$$events","$$legacy","use","class","style","disabled","touch","indeterminate","group","checked","value","valueKey","input$use","input$class"]),X,k=V(void 0),p=V(void 0),W=N({}),A=N({}),S=N({}),w=V(!1),te=N(Ae("SMUI:generic:input:props")??{}),D=V(N(i(m())?i(b())?!1:!!b():m().findIndex(r=>r===_())!==-1)),z=Ae("SMUI:checkbox:context"),q=Ae("SMUI:data-table:row:header"),M=b(),L=i(m())?[]:[...m()],J=t(D);Xe(()=>{let r=!1;if(!i(m()))if(J!==t(D)){const f=m().findIndex(j=>j===_());t(D)&&f===-1?m().push(_()):!t(D)&&f!==-1&&m().splice(f,1),r=!0}else{const f=L.findIndex(De=>De===_()),j=m().findIndex(De=>De===_());f>-1&&j===-1?(d(D,!1),r=!0):j>-1&&f===-1&&(d(D,!0),r=!0)}i(b())?J!==t(D)&&(r=!0):(b()!==(o()?null:t(D))||t(D)!==J)&&(b()===M&&t(D)!==J?(b(t(D)),i(o())||o(!1)):d(D,!!b()),r=!0),t(p)&&(i(o())?t(p).indeterminate&&(t(p).indeterminate=!1,r=!0):!o()&&t(p).indeterminate?(t(p).indeterminate=!1,r=!0):o()&&!t(p).indeterminate&&(t(p).indeterminate=!0,d(D,!1),r=!0)),M=b(),L=i(m())?[]:[...m()],J=t(D),r&&t(k)&&t(k).handleChange()});const Q=Ae("SMUI:generic:input:mount"),ve=Ae("SMUI:generic:input:unmount"),$=Ae("SMUI:checkbox:mount"),g=Ae("SMUI:checkbox:unmount");kt(()=>{if(t(p)==null)throw new Error("Checkbox is not defined.");t(p).indeterminate=!i(o())&&o(),d(k,N(new Da({addClass:a,forceLayout:()=>se().offsetWidth,hasNativeControl:()=>!0,isAttachedToDOM:()=>!!se().parentNode,isChecked:()=>t(D),isIndeterminate:()=>i(o())?!1:o(),removeClass:s,removeNativeControlAttr:B,setNativeControlAttr:ie,setNativeControlDisabled:f=>T(f)})));const r={_smui_checkbox_accessor:!0,get element(){return se()},get checked(){return t(D)},set checked(f){t(D)!==f&&d(D,N(f))},get indeterminate(){return i(o())?!1:o()},set indeterminate(f){o(f)},activateRipple(){T()||d(w,!0)},deactivateRipple(){d(w,!1)}};return Q&&Q(r),$&&$(r),t(k).init(),()=>{var f;ve&&ve(r),g&&g(r),(f=t(k))==null||f.destroy()}});function a(r){W[r]||(W[r]=!0)}function s(r){(!(r in W)||W[r])&&(W[r]=!1)}function y(r,f){A[r]!=f&&(f===""||f==null?delete A[r]:A[r]=f)}function ie(r,f){S[r]!==f&&(S[r]=f)}function B(r){(!(r in S)||S[r]!=null)&&(S[r]=void 0)}function F(){return te&&te.id}function se(){return X}var oe=Za(),Ne=r=>{var f;t(k)&&t(k).handleAnimationEnd(),(f=e.onanimationend)==null||f.call(e,r)};let xe;var fe=P(oe);Ut(fe);var ye=r=>{var f;Fe(se(),"blur",r),(f=e.input$onblur)==null||f.call(e,r)},be=r=>{var f;Fe(se(),"focus",r),(f=e.input$onfocus)==null||f.call(e,r)};let ue;return Ie(fe,r=>d(p,r),()=>t(p)),Ce(fe,(r,f)=>{var j;return(j=He)==null?void 0:j(r,f)},O),jt(()=>ra(fe,()=>t(D),r=>d(D,r))),Y(4),H(oe),Ie(oe,r=>X=r,()=>X),Ce(oe,(r,f)=>{var j;return(j=He)==null?void 0:j(r,f)},I),Ce(oe,(r,f)=>{var j;return(j=Bt)==null?void 0:j(r,f)},()=>({unbounded:!0,addClass:a,removeClass:s,addStyle:y,active:t(w),eventTarget:t(p)})),_e((r,f,j,De,$e,et,tt)=>{xe=Le(oe,xe,{class:r,style:f,...j,onanimationend:Ne}),ue=Le(fe,ue,{class:De,type:"checkbox",...te,disabled:T(),value:$e,"data-indeterminate":et,...S,...tt,onblur:ye,onfocus:be})},[()=>Ke({[h()]:!0,"mdc-checkbox":!0,"mdc-checkbox--disabled":T(),"mdc-checkbox--touch":c(),"mdc-data-table__header-row-checkbox":z==="data-table"&&q,"mdc-data-table__row-checkbox":z==="data-table"&&!q,...W}),()=>Object.entries(A).map(([r,f])=>`${r}: ${f};`).concat([U()]).join(" "),()=>Et(G,["input$"]),()=>Ke({[x()]:!0,"mdc-checkbox__native-control":!0}),()=>i(R())?_():R(),()=>!i(o())&&o()?"true":void 0,()=>Je(G,"input$")]),v(K,oe),Me({getId:F,getElement:se})}var Ja=ae('<div class="not-prose grid grid-cols-1 gap-4 m-2"><!></div>');function Ya(K,e){Se(e,!0);let u=l(e,"blue1",15),i=l(e,"blue2",15),I=l(e,"blue3",15),h=l(e,"red1",15),U=l(e,"red2",15),T=l(e,"red3",15),c=V(void 0);e.matchList.subscribe(_=>{d(c,N(_))});let o=V(void 0);Xe(()=>{if(t(o)&&e.teamList){let[_,R,O]=t(o).alliances.blue.team_keys,[x,G,X]=t(o).alliances.red.team_keys;u(parseInt(_.substring(3))),i(parseInt(R.substring(3))),I(parseInt(O.substring(3))),h(parseInt(x.substring(3))),U(parseInt(G.substring(3))),T(parseInt(X.substring(3)))}else u(void 0),i(void 0),I(void 0),h(void 0),U(void 0),T(void 0)});var m=Ja(),b=P(m);we(b,{class:"not-prose",style:"width: 100%;",textfield$style:"width: 100%;",get options(){return t(c)},getOptionLabel:Zt,label:"Pick a match",get value(){return t(o)},set value(_){d(o,N(_))}}),H(m),v(K,m),Me()}/**
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
 */var $a={ROOT:"mdc-form-field"},en={LABEL_SELECTOR:".mdc-form-field > label"};/**
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
 */var tn=function(K){xt(e,K);function e(u){var i=K.call(this,Ye(Ye({},e.defaultAdapter),u))||this;return i.click=function(){i.handleClick()},i}return Object.defineProperty(e,"cssClasses",{get:function(){return $a},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return en},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},e.prototype.handleClick=function(){var u=this;this.adapter.activateInputRipple(),requestAnimationFrame(function(){u.adapter.deactivateInputRipple()})},e}(Dt);let an=0;var nn=ae("<div><!> <label><!></label></div>");function ht(K,e){Se(e,!0);let u=l(e,"use",19,()=>[]),i=l(e,"class",3,""),I=l(e,"align",3,"start"),h=l(e,"noWrap",3,!1),U=l(e,"inputId",19,()=>"SMUI-form-field-"+an++),T=l(e,"label$use",19,()=>[]),c=rt(e,["$$slots","$$events","$$legacy","use","class","align","noWrap","inputId","label$use","children","label"]),o,m=V(void 0),b=new Xt,_,R=V(void 0);bt("SMUI:generic:input:props",{id:U()}),bt("SMUI:generic:input:mount",A=>{d(R,N(A))}),bt("SMUI:generic:input:unmount",()=>{d(R,void 0)}),kt(()=>(d(m,N(new tn({activateInputRipple:()=>{t(R)&&t(R).activateRipple()},deactivateInputRipple:()=>{t(R)&&t(R).deactivateRipple()},deregisterInteractionHandler:(A,S)=>b.off(_,A,S),registerInteractionHandler:(A,S)=>b.on(_,A,S)}))),t(m).init(),()=>{var A;(A=t(m))==null||A.destroy(),b.clear()}));function O(){return o}var x=nn();let G;var X=P(x);Pe(X,()=>e.children??gt);var k=C(X,2);let p;var W=P(k);return Pe(W,()=>e.label??gt),H(k),Ie(k,A=>_=A,()=>_),Ce(k,(A,S)=>{var w;return(w=He)==null?void 0:w(A,S)},T),H(x),Ie(x,A=>o=A,()=>o),Ce(x,(A,S)=>{var w;return(w=He)==null?void 0:w(A,S)},u),_e((A,S,w)=>{G=Le(x,G,{class:A,...S}),p=Le(k,p,{for:U(),...w})},[()=>Ke({[i()]:!0,"mdc-form-field":!0,"mdc-form-field--align-end":I()==="end","mdc-form-field--nowrap":h()}),()=>Et(c,["label$"]),()=>Je(c,"label$")]),v(K,x),Me({getElement:O})}var rn=ae("<p>Please enter a team number</p>"),ln=ae("<!> <!> <!> <!> <!> <!>",1),sn=ae('<div class="grid grid-cols-1 gap-2 md:grid-cols-3"><!></div>'),on=ae('<!> <div class="container mx-auto"><!> <h1 class="text-lg">Pick a match, either by match number (using TBA) or by entering team numbers manually</h1> <div class="grid grid-cols-3 justify-items-center"><!> <!> <!></div> <!> <!></div>',1);function An(K,e){Se(e,!0);const[u,i]=ea(),I=()=>ta(t(h),"$csvData",u);let h=re(()=>Ot(()=>t(G)?pe.csv2025.toCollection().toArray():pe.csv2025.where("eventkey").equals(e.data.event.key).toArray()));const{actionButtons:U,title:T}=Jt();U.set([{icon:"qr_code",tooltip:"Scan QR code",onclick:()=>k.open()},{icon:"download",tooltip:"Download data from cloud",onclick:async()=>{if(confirm("Download data from the cloud (and potentially overwrite local data)?")){let g=await Aa();console.log(g),await pe.transaction("rw",pe.csv2025,async()=>{await pe.csv2025.bulkPut(g)})}}}]),T.set("Phone on Field dashboard");let c=re(()=>{if(!I())return[];let g=performance.now(),a=new Set;for(let y of I())a.add(y.teamNum);let s=Array.from(a);return console.log("teamlist",performance.now()-g),s}),o=V(void 0),m=V(void 0),b=V(void 0),_=V(void 0),R=V(void 0),O=V(void 0),x=V(void 0),G=V(!1),X=re(()=>Ot(async()=>{const g=await pe.current_event.toCollection().first();return g?await pe.matches.where("event_key").equals(g.key).sortBy("time"):[]})),k,p=V("tba");var W=on(),A=Z(W);Ie(Na(A,{onclose:g=>{console.log(g)}}),g=>k=g,()=>k);var S=C(A,2),w=P(S);ht(w,{label:a=>{Y();var s=le();_e(()=>ne(s,`Query ALL events instead of just ${e.data.event.name??""}?`)),v(a,s)},children:(a,s)=>{Xa(a,{get checked(){return t(G)},set checked(y){d(G,N(y))}})},$$slots:{label:!0,default:!0}});var te=C(w,4),D=P(te);ht(D,{label:a=>{Y();var s=le("The Blue Alliance");v(a,s)},children:(a,s)=>{Nt(a,{value:"tba",touch:!0,get group(){return t(p)},set group(y){d(p,N(y))}})},$$slots:{label:!0,default:!0}});var z=C(D,2);ht(z,{label:a=>{Y();var s=le("Manual entry");v(a,s)},children:(a,s)=>{Nt(a,{value:"manual",touch:!0,get group(){return t(p)},set group(y){d(p,N(y))}})},$$slots:{label:!0,default:!0}});var q=C(z,2);ht(q,{label:a=>{Y();var s=le("Individual team");v(a,s)},children:(a,s)=>{Nt(a,{value:"team",touch:!0,get group(){return t(p)},set group(y){d(p,N(y))}})},$$slots:{label:!0,default:!0}}),H(te);var M=C(te,2);{var L=g=>{Oa(g,{get teamList(){return t(c)},get blue1(){return t(o)},set blue1(a){d(o,N(a))},get blue2(){return t(m)},set blue2(a){d(m,N(a))},get blue3(){return t(b)},set blue3(a){d(b,N(a))},get red1(){return t(_)},set red1(a){d(_,N(a))},get red2(){return t(R)},set red2(a){d(R,N(a))},get red3(){return t(O)},set red3(a){d(O,N(a))}})},J=g=>{var a=ce(),s=Z(a);{var y=B=>{Ya(B,{get teamList(){return t(c)},get matchList(){return t(X)},get blue1(){return t(o)},set blue1(F){d(o,N(F))},get blue2(){return t(m)},set blue2(F){d(m,N(F))},get blue3(){return t(b)},set blue3(F){d(b,N(F))},get red1(){return t(_)},set red1(F){d(_,N(F))},get red2(){return t(R)},set red2(F){d(R,N(F))},get red3(){return t(O)},set red3(F){d(O,N(F))}})},ie=B=>{we(B,{class:"w-full",textfield$class:"w-full",label:"Team number",get options(){return t(c)},get value(){return t(x)},set value(F){d(x,N(F))}})};me(s,B=>{t(p)==="tba"?B(y):B(ie,!1)},!0)}v(g,a)};me(M,g=>{t(p)==="manual"?g(L):g(J,!1)})}var Q=C(M,2);{var ve=g=>{var a=ce(),s=Z(a);{var y=B=>{const F=re(()=>Ue(I(),t(x)));Be(B,{get teamNum(){return t(x)},get data(){return t(F)},spot:"Team stats"})},ie=B=>{var F=rn();v(B,F)};me(s,B=>{t(x)?B(y):B(ie,!1)})}v(g,a)},$=g=>{var a=sn(),s=P(a);{var y=ie=>{var B=ln(),F=Z(B);const se=re(()=>Ue(I(),t(o)));Be(F,{get teamNum(){return t(o)},get data(){return t(se)},spot:"Blue 1"});var oe=C(F,2);const Ne=re(()=>Ue(I(),t(m)));Be(oe,{get teamNum(){return t(m)},get data(){return t(Ne)},spot:"Blue 2"});var xe=C(oe,2);const fe=re(()=>Ue(I(),t(b)));Be(xe,{get teamNum(){return t(b)},get data(){return t(fe)},spot:"Blue 3"});var ye=C(xe,2);const be=re(()=>Ue(I(),t(_)));Be(ye,{get teamNum(){return t(_)},get data(){return t(be)},spot:"Red 1"});var ue=C(ye,2);const r=re(()=>Ue(I(),t(R)));Be(ue,{get teamNum(){return t(R)},get data(){return t(r)},spot:"Red 2"});var f=C(ue,2);const j=re(()=>Ue(I(),t(O)));Be(f,{get teamNum(){return t(O)},get data(){return t(j)},spot:"Red 3"}),v(ie,B)};me(s,ie=>{var B;((B=I())==null?void 0:B.length)>0&&ie(y)})}H(a),v(g,a)};me(Q,g=>{t(p)=="team"?g(ve):g($,!1)})}H(S),v(K,W),Me(),i()}export{An as component,Tn as universal};
