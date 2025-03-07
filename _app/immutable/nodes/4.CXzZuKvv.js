import{b as Dt}from"../chunks/B1j6-CTa.js";import{_ as At,a as Je,M as Tt,d as Ne,e as Pe,l as Mt,s as ye,m as Ze,f as he,u as Re,c as pe,n as vt,h as Oe,r as Ht,R as Kt,y as jt,k as Wt,g as Vt,q as yt}from"../chunks/D8nWv9V9.js";import{r as Rt,e as qt,i as Gt}from"../chunks/0AguKUk6.js";import{d as zt,t as de,c as ue,a as R,b as Ue,s as ne,e as Qt,o as Xt}from"../chunks/CRSh-WWB.js";import{p as we,d as F,l as Xe,g as t,b as o,i as ft,c as D,r as M,s as T,j as Y,f as J,n as oe,t as xe,a as He,aL as pt,e as mt,h as Ee,a6 as Nt,ah as Lt}from"../chunks/DoN0iJJ0.js";import{a as i,p as x,r as et,i as Ce,b as ke,s as Ct,f as Zt,e as Jt}from"../chunks/BD2kLoV-.js";import{T as Yt,b as $t,a as en}from"../chunks/CFSG5olu.js";import{M as tn,A as nn}from"../chunks/C8v0SiBE.js";import{L as an,I as ot}from"../chunks/BcXzDhaI.js";import{T as dt}from"../chunks/DhSv9-9V.js";import{a as Ge,g as rn,m as ln,b as sn,c as un,d as cn,e as on,f as dn,Q as fn,h as ze}from"../chunks/BqbTB595.js";/**
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
 */var $e={ANIM_CHECKED_INDETERMINATE:"mdc-checkbox--anim-checked-indeterminate",ANIM_CHECKED_UNCHECKED:"mdc-checkbox--anim-checked-unchecked",ANIM_INDETERMINATE_CHECKED:"mdc-checkbox--anim-indeterminate-checked",ANIM_INDETERMINATE_UNCHECKED:"mdc-checkbox--anim-indeterminate-unchecked",ANIM_UNCHECKED_CHECKED:"mdc-checkbox--anim-unchecked-checked",ANIM_UNCHECKED_INDETERMINATE:"mdc-checkbox--anim-unchecked-indeterminate",BACKGROUND:"mdc-checkbox__background",CHECKED:"mdc-checkbox--checked",CHECKMARK:"mdc-checkbox__checkmark",CHECKMARK_PATH:"mdc-checkbox__checkmark-path",DISABLED:"mdc-checkbox--disabled",INDETERMINATE:"mdc-checkbox--indeterminate",MIXEDMARK:"mdc-checkbox__mixedmark",NATIVE_CONTROL:"mdc-checkbox__native-control",ROOT:"mdc-checkbox",SELECTED:"mdc-checkbox--selected",UPGRADED:"mdc-checkbox--upgraded"},ce={ARIA_CHECKED_ATTR:"aria-checked",ARIA_CHECKED_INDETERMINATE_VALUE:"mixed",DATA_INDETERMINATE_ATTR:"data-indeterminate",NATIVE_CONTROL_SELECTOR:".mdc-checkbox__native-control",TRANSITION_STATE_CHECKED:"checked",TRANSITION_STATE_INDETERMINATE:"indeterminate",TRANSITION_STATE_INIT:"init",TRANSITION_STATE_UNCHECKED:"unchecked"},Ot={ANIM_END_LATCH_MS:250};/**
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
 */var mn=function(O){At(e,O);function e(u){var l=O.call(this,Je(Je({},e.defaultAdapter),u))||this;return l.currentCheckState=ce.TRANSITION_STATE_INIT,l.currentAnimationClass="",l.animEndLatchTimer=0,l.enableAnimationEndHandler=!1,l}return Object.defineProperty(e,"cssClasses",{get:function(){return $e},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ce},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Ot},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},hasNativeControl:function(){return!1},isAttachedToDOM:function(){return!1},isChecked:function(){return!1},isIndeterminate:function(){return!1},removeClass:function(){},removeNativeControlAttr:function(){},setNativeControlAttr:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.currentCheckState=this.determineCheckState(),this.updateAriaChecked(),this.adapter.addClass($e.UPGRADED)},e.prototype.destroy=function(){clearTimeout(this.animEndLatchTimer)},e.prototype.setDisabled=function(u){this.adapter.setNativeControlDisabled(u),u?this.adapter.addClass($e.DISABLED):this.adapter.removeClass($e.DISABLED)},e.prototype.handleAnimationEnd=function(){var u=this;this.enableAnimationEndHandler&&(clearTimeout(this.animEndLatchTimer),this.animEndLatchTimer=setTimeout(function(){u.adapter.removeClass(u.currentAnimationClass),u.enableAnimationEndHandler=!1},Ot.ANIM_END_LATCH_MS))},e.prototype.handleChange=function(){this.transitionCheckState()},e.prototype.transitionCheckState=function(){if(this.adapter.hasNativeControl()){var u=this.currentCheckState,l=this.determineCheckState();if(u!==l){this.updateAriaChecked();var I=ce.TRANSITION_STATE_UNCHECKED,h=$e.SELECTED;l===I?this.adapter.removeClass(h):this.adapter.addClass(h),this.currentAnimationClass.length>0&&(clearTimeout(this.animEndLatchTimer),this.adapter.forceLayout(),this.adapter.removeClass(this.currentAnimationClass)),this.currentAnimationClass=this.getTransitionAnimationClass(u,l),this.currentCheckState=l,this.adapter.isAttachedToDOM()&&this.currentAnimationClass.length>0&&(this.adapter.addClass(this.currentAnimationClass),this.enableAnimationEndHandler=!0)}}},e.prototype.determineCheckState=function(){var u=ce.TRANSITION_STATE_INDETERMINATE,l=ce.TRANSITION_STATE_CHECKED,I=ce.TRANSITION_STATE_UNCHECKED;return this.adapter.isIndeterminate()?u:this.adapter.isChecked()?l:I},e.prototype.getTransitionAnimationClass=function(u,l){var I=ce.TRANSITION_STATE_INIT,h=ce.TRANSITION_STATE_CHECKED,j=ce.TRANSITION_STATE_UNCHECKED,g=e.cssClasses,b=g.ANIM_UNCHECKED_CHECKED,d=g.ANIM_UNCHECKED_INDETERMINATE,f=g.ANIM_CHECKED_UNCHECKED,m=g.ANIM_CHECKED_INDETERMINATE,v=g.ANIM_INDETERMINATE_CHECKED,k=g.ANIM_INDETERMINATE_UNCHECKED;switch(u){case I:return l===j?"":l===h?v:k;case j:return l===h?b:d;case h:return l===j?f:m;default:return l===h?v:k}},e.prototype.updateAriaChecked=function(){this.adapter.isIndeterminate()?this.adapter.setNativeControlAttr(ce.ARIA_CHECKED_ATTR,ce.ARIA_CHECKED_INDETERMINATE_VALUE):this.adapter.removeNativeControlAttr(ce.ARIA_CHECKED_ATTR)},e}(Tt);async function vn(){await Ne.authenticated.toCollection().first()||Rt(307,`${Dt}/login`);let e=await Ne.current_event.toCollection().first();return e||Rt(307,`${Dt}/setup`),{event:e}}const Yn=Object.freeze(Object.defineProperty({__proto__:null,load:vn},Symbol.toStringTag,{value:"Module"}));let hn=0;var _n=(O,e,u)=>{e()||o(u,!0)},bn=(O,e)=>{o(e,-1)},gn=de('<div><div role="combobox" tabindex="0"><!></div> <!></div>');function Le(O,e){we(e,!0);let u=i(e,"use",19,()=>[]),l=i(e,"class",3,""),I=i(e,"options",19,()=>[]),h=i(e,"value",15),j=i(e,"getOptionDisabled",3,()=>!1),g=i(e,"getOptionLabel",3,a=>a==null?"":`${a}`),b=i(e,"text",31,()=>x(g()(h()))),d=i(e,"disabled",3,!1),f=i(e,"toggle",3,!1),m=i(e,"combobox",3,!1),v=i(e,"clearOnBlur",19,()=>!m()),k=i(e,"selectOnExactMatch",3,!0),P=i(e,"showMenuWithNoInput",3,!0),A=i(e,"noMatchesActionDisabled",3,!0),W=i(e,"search",3,async a=>{const _=a.toLowerCase(),q=typeof I()=="function"?await I()():I()||[];if(_==="")return q;const tt=q.filter(nt=>g()(nt).toLowerCase().includes(_));return tt.sort((nt,at)=>{const rt=g()(nt).toLowerCase(),it=g()(at).toLowerCase();return rt.startsWith(_)&&!it.startsWith(_)?-1:it.startsWith(_)&&!rt.startsWith(_)?1:0}),tt}),V=i(e,"menu$class",3,""),w=i(e,"menu$anchor",3,!1),p=i(e,"menu$anchorCorner",3,"BOTTOM_START"),U=et(e,["$$slots","$$events","$$legacy","use","class","options","value","getOptionDisabled","getOptionLabel","text","label","disabled","toggle","combobox","clearOnBlur","selectOnExactMatch","showMenuWithNoInput","noMatchesActionDisabled","search","menu$class","menu$anchor","menu$anchorCorner","children","loading","error","match","noMatches"]),E,S,H=F(0),Q=F(!1),N=F(!1),z,G=F(x([])),y=F(-1),B=F(void 0),X=U.menu$id??"SMUI-autocomplete-"+hn+++"-menu";const $=Y(()=>t(N)&&(b()!==""||P())&&(t(H)>0||!m()&&!(t(G).length===1&&t(G)[0]===h())||m()&&!!t(G).length&&!(t(G).length===1&&t(G)[0]===h())));let ae=b();Xe(()=>{ae!==b()&&(h()!=null&&g()(h())!==b()&&ie(h(),!1),t(N)&&(s(),ae=b()))});let re=!1;Xe(()=>{I()&&!re&&(re=!0,s().then(()=>{re=!1}))});let C=h();Xe(()=>{C!==h()?(b(g()(h())),C=h()):m()&&h()!==b()&&(h(b()),C=h())});let n;Xe(()=>{if(n!==t(y)){const a=Z();t(y)===-1?o(B,void 0):(o(B,x(a[t(y)])),t(B)&&(t(B).activated=!0,be(t(B).element)||t(B).element.scrollIntoView({block:"end",inline:"nearest"}))),a.forEach((_,q)=>{q!==t(y)&&(_.activated=!1)}),z&&z.getOrderedList().forEach(_=>{_.tabindex=-1}),n=t(y)}}),ft("SMUI:list:mount",a=>{z||(z=a)});async function s(){t(N)&&!Ie()&&le(),o(H,t(H)+1),o(Q,!1);try{const a=await W()(b());if(a!==!1&&(o(G,x(a)),k())){const _=t(G).find(q=>g()(q)===b());_!=null&&g()(h())!==b()&&K(_)}}catch{o(Q,!0)}o(H,t(H)-1)}function K(a,_=!0){Pe(fe(),"SMUIAutocompleteSelected",a,{bubbles:!0,cancelable:!0}).defaultPrevented||(_&&b(g()(a)),h(a),_||(C=a))}function ie(a,_=!0){Pe(fe(),"SMUIAutocompleteDeselected",a,{bubbles:!0,cancelable:!0}).defaultPrevented||(_&&b(""),h(void 0),_||(C=void 0))}function _e(a){a===h()?ie(a):K(a)}function be(a){var _=a.getBoundingClientRect();return _.top>=0&&_.left>=0&&_.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&_.right<=(window.innerWidth||document.documentElement.clientWidth)}function Z(){return z?z.getOrderedList().filter(a=>!a.disabled):[]}function te(a){if(!(m()&&!t(G).length)){if(a.key==="ArrowDown")a.preventDefault(),t(y)===-1||t(y)===Z().length-1?o(y,0):pt(y);else if(a.key==="ArrowUp")a.preventDefault(),t(y)===-1||t(y)===0?o(y,Z().length-1):pt(y,-1);else if(a.key==="Enter"){a.preventDefault();const _=Z();t(B)&&(_[t(y)]&&_[t(y)].action(a),o(y,-1))}}}async function Se(a){var _;if(!document.hasFocus()){Xt(window,"focus",()=>{var q;(q=fe())!=null&&q.contains(document.activeElement)||Se(a)},{once:!0});return}(_=a.currentTarget)!=null&&_.contains(a.relatedTarget)||(o(y,-1),o(N,!1),v()&&h()==null&&b(""))}function Ie(){if(S)return document.activeElement===S.querySelector("input.mdc-text-field__input")}function le(){if(S){const a=S.querySelector("input.mdc-text-field__input");a&&a.focus()}}function Ke(){if(S){const a=S.querySelector("input.mdc-text-field__input");a&&a.blur()}}function fe(){return E}var se=gn(),r=a=>{var _;d()||Se(a),(_=e.onfocusout)==null||_.call(e,a)};let c;var L=D(se);Mt(L,"aria-controls",X),L.__focusin=[_n,d,N],L.__input=[bn,y];var Ae=D(L);{var ht=a=>{var _=ue(),q=J(_);ye(q,()=>e.children??mt),R(a,_)},_t=a=>{var _=Y(()=>Ze(U,"textfield$"));Yt(a,Ct({get label(){return e.label},get disabled(){return d()}},()=>t(_),{get value(){return b()},set value(q){b(q)}}))};Ce(Ae,a=>{e.children?a(ht):a(_t,!1)})}M(L),ke(L,a=>S=a,()=>S);var bt=T(L,2);const Ut=Y(()=>pe({[V()]:!0,"smui-autocomplete__menu":!0}));var Pt=Y(()=>Ze(U,"menu$"));return tn(bt,Ct({get class(){return t(Ut)},id:X,managed:!0,neverRestoreFocus:!0,get open(){return t($)},get anchor(){return w()},get anchorCorner(){return p()}},()=>t(Pt),{get anchorElement(){return E},set anchorElement(a){E=a},children:(a,_)=>{var q=Y(()=>Ze(U,"list$"));an(a,Ct(()=>t(q),{children:(tt,nt)=>{var at=ue(),rt=J(at);{var it=Be=>{ot(Be,{disabled:!0,children:(lt,xt)=>{var st=ue(),gt=J(st);{var De=Te=>{var me=ue(),ee=J(me);ye(ee,()=>e.loading),R(Te,me)},Fe=Te=>{dt(Te,{children:(me,ee)=>{oe();var je=Ue("Loading...");R(me,je)},$$slots:{default:!0}})};Ce(gt,Te=>{e.loading?Te(De):Te(Fe,!1)})}R(lt,st)},$$slots:{default:!0}})},Bt=Be=>{var lt=ue(),xt=J(lt);{var st=De=>{ot(De,{disabled:!0,children:(Fe,Te)=>{var me=ue(),ee=J(me);{var je=ge=>{var Me=ue(),Ye=J(Me);ye(Ye,()=>e.error),R(ge,Me)},We=ge=>{dt(ge,{children:(Me,Ye)=>{oe();var ve=Ue("Error while fetching suggestions.");R(Me,ve)},$$slots:{default:!0}})};Ce(ee,ge=>{e.error?ge(je):ge(We,!1)})}R(Fe,me)},$$slots:{default:!0}})},gt=De=>{var Fe=ue(),Te=J(Fe);qt(Te,17,()=>t(G),Gt,(me,ee,je)=>{const We=Y(()=>j()(t(ee))),ge=Y(()=>t(ee)===h());ot(me,{get disabled(){return t(We)},get selected(){return t(ge)},onmouseenter:()=>{o(y,x(je))},onSMUIAction:()=>f()?_e(t(ee)):K(t(ee)),children:(Me,Ye)=>{var ve=ue(),Ve=J(ve);{var ut=qe=>{var ct=ue(),kt=J(ct);ye(kt,()=>e.match,()=>t(ee)),R(qe,ct)},Et=qe=>{dt(qe,{children:(ct,kt)=>{oe();var St=Ue();xe(Ft=>ne(St,Ft),[()=>g()(t(ee))]),R(ct,St)},$$slots:{default:!0}})};Ce(Ve,qe=>{e.match?qe(ut):qe(Et,!1)})}R(Me,ve)},$$slots:{default:!0}})},me=>{ot(me,{get disabled(){return A()},onSMUIAction:ee=>Pe(fe(),"SMUIAutocompleteNoMatchesAction",ee),children:(ee,je)=>{var We=ue(),ge=J(We);{var Me=ve=>{var Ve=ue(),ut=J(Ve);ye(ut,()=>e.noMatches),R(ve,Ve)},Ye=ve=>{dt(ve,{children:(Ve,ut)=>{oe();var Et=Ue("No matches found.");R(Ve,Et)},$$slots:{default:!0}})};Ce(ge,ve=>{e.noMatches?ve(Me):ve(Ye,!1)})}R(ee,We)},$$slots:{default:!0}})}),R(De,Fe)};Ce(xt,De=>{t(Q)?De(st):De(gt,!1)},!0)}R(Be,lt)};Ce(rt,Be=>{t(H)?Be(it):Be(Bt,!1)})}R(tt,at)},$$slots:{default:!0}}))},$$slots:{default:!0}})),M(se),ke(se,a=>E=a,()=>E),he(se,a=>{var _;return(_=nn)==null?void 0:_(a)}),he(se,(a,_)=>{var q;return(q=Re)==null?void 0:q(a,_)},u),xe((a,_)=>{c=Oe(se,c,{class:a,..._,onfocusout:r}),Mt(L,"aria-expanded",t($)?"true":"false")},[()=>pe({[l()]:!0,"smui-autocomplete":!0}),()=>vt(U,["menu$","textfield$","list$"])]),Qt("keydown",L,te,!0),R(O,se),He({focus:le,blur:Ke,getElement:fe})}zt(["focusin","input"]);var En=de('<div class="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose"><!> <!> <!> <!> <!> <!></div>');function Cn(O,e){let u=i(e,"blue1",15),l=i(e,"blue2",15),I=i(e,"blue3",15),h=i(e,"red1",15),j=i(e,"red2",15),g=i(e,"red3",15);var b=En(),d=D(b);Le(d,{class:"w-max",textfield$class:"w-max",label:"Blue 1",get options(){return e.teamList},get value(){return u()},set value(A){u(A)}});var f=T(d,2);Le(f,{class:"w-max",textfield$class:"w-max",label:"Blue 2",get options(){return e.teamList},get value(){return l()},set value(A){l(A)}});var m=T(f,2);Le(m,{class:"w-max",textfield$class:"w-max",label:"Blue 3",get options(){return e.teamList},get value(){return I()},set value(A){I(A)}});var v=T(m,2);Le(v,{class:"w-max",textfield$class:"w-max",label:"Red 1",get options(){return e.teamList},get value(){return h()},set value(A){h(A)}});var k=T(v,2);Le(k,{class:"w-max",textfield$class:"w-max",label:"Red 2",get options(){return e.teamList},get value(){return j()},set value(A){j(A)}});var P=T(k,2);Le(P,{class:"w-max",textfield$class:"w-max",label:"Red 3",get options(){return e.teamList},get value(){return g()},set value(A){g(A)}}),M(b),R(O,b)}var In=de("<div><!></div>");function An(O,e){we(e,!0);let u=i(e,"use",19,()=>[]),l=i(e,"class",3,""),I=i(e,"variant",3,"raised"),h=i(e,"padded",3,!1),j=et(e,["$$slots","$$events","$$legacy","use","class","variant","padded","children"]),g;function b(){return g}var d=In();let f;var m=D(d);return ye(m,()=>e.children??mt),M(d),ke(d,v=>g=v,()=>g),he(d,(v,k)=>{var P;return(P=Re)==null?void 0:P(v,k)},u),xe(v=>f=Oe(d,f,{class:v,...j}),[()=>pe({[l()]:!0,"mdc-card":!0,"mdc-card--outlined":I()==="outlined","smui-card--padded":h()})]),R(O,d),He({getElement:b})}var Tn=de("<ul><li>Avg algae scored: <b> </b> total, <b> </b> auto</li> <li>Avg coral scored: <b> </b> total, <b> </b> auto</li> <li>Can score in: <b> </b></li> <li>Max scored in a match: <b> </b></li> <li>Smallest # coral: <b> </b></li> <li>Avg. game pieces missed: <b> </b></li> <li>Can climb... <b> </b></li> <li>Climb success rate: <b> </b></li></ul> <pre> </pre>",1),Nn=de('<ul class="grow"><li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li></ul> <pre>&nbsp;</pre>',1),xn=de("<h1> </h1> <!>",1);function Qe(O,e){we(e,!0),An(O,{class:"p-2 flex",children:(u,l)=>{var I=xn(),h=J(I),j=D(h);M(h);var g=T(h,2);{var b=f=>{var m=Tn(),v=J(m),k=D(v),P=T(D(k)),A=D(P,!0);M(P);var W=T(P,2),V=D(W,!0);M(W),oe(),M(k);var w=T(k,2),p=T(D(w)),U=D(p,!0);M(p);var E=T(p,2),S=D(E,!0);M(E),oe(),M(w);var H=T(w,2),Q=T(D(H)),N=D(Q,!0);M(Q),M(H);var z=T(H,2),G=T(D(z)),y=D(G,!0);M(G),M(z);var B=T(z,2),X=T(D(B)),$=D(X,!0);M(X),M(B);var ae=T(B,2),re=T(D(ae)),C=D(re,!0);M(re),M(ae);var n=T(ae,2),s=T(D(n)),K=D(s,!0);M(s),M(n);var ie=T(n,2),_e=T(D(ie)),be=D(_e,!0);M(_e),M(ie),M(v);var Z=T(v,2),te=D(Z);M(Z),xe((Se,Ie,le,Ke,fe,se,r,c,L,Ae)=>{ne(A,Se),ne(V,Ie),ne(U,le),ne(S,Ke),ne(N,fe),ne(y,se),ne($,r),ne(C,c),ne(K,L),ne(be,Ae),ne(te,`${e.data.length??""} items`)},[()=>Ge(e.data,"algaeScoredAuto")+Ge(e.data,"algaeScoredTeleop"),()=>Ge(e.data,"algaeScoredAuto"),()=>Ge(e.data,"coralScoredAuto")+Ge(e.data,"algaeScoredTeleop"),()=>Ge(e.data,"coralScoredAuto"),()=>rn(e.data),()=>ln(e.data,"totalScored"),()=>sn(e.data),()=>un(e.data),()=>cn(e.data),()=>on(e.data)]),R(f,m)},d=f=>{var m=Nn();oe(2),R(f,m)};Ce(g,f=>{e.teamNum&&e.data.length>0?f(b):f(d,!1)})}xe(()=>ne(j,`${e.spot??""}: ${e.teamNum??""}`)),R(u,I)},$$slots:{default:!0}}),He()}/**
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
 */var kn={NATIVE_CONTROL_SELECTOR:".mdc-radio__native-control"},Sn={DISABLED:"mdc-radio--disabled",ROOT:"mdc-radio"};/**
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
 */var Dn=function(O){At(e,O);function e(u){return O.call(this,Je(Je({},e.defaultAdapter),u))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return Sn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return kn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setDisabled=function(u){var l=e.cssClasses.DISABLED;this.adapter.setNativeControlDisabled(u),u?this.adapter.addClass(l):this.adapter.removeClass(l)},e}(Tt),Mn=de('<div><input> <div class="mdc-radio__background"><div class="mdc-radio__outer-circle"></div> <div class="mdc-radio__inner-circle"></div></div> <div class="mdc-radio__ripple"></div></div>');function wt(O,e){we(e,!0);const u=[];let l=()=>{};function I(n){return n===l}let h=i(e,"use",19,()=>[]),j=i(e,"class",3,""),g=i(e,"style",3,""),b=i(e,"disabled",15,!1),d=i(e,"touch",3,!1),f=i(e,"group",15),m=i(e,"value",3,null),v=i(e,"valueKey",3,l),k=i(e,"input$use",19,()=>[]),P=i(e,"input$class",3,""),A=et(e,["$$slots","$$events","$$legacy","use","class","style","disabled","touch","group","value","valueKey","input$use","input$class"]),W,V=F(void 0),w=x({}),p=x({}),U=F(!1),E=x(Ee("SMUI:generic:input:props")??{});const S=Ee("SMUI:generic:input:mount"),H=Ee("SMUI:generic:input:unmount");Nt(()=>{o(V,x(new Dn({addClass:Q,removeClass:N,setNativeControlDisabled:s=>b(s)})));const n={_smui_radio_accessor:!0,get element(){return y()},get checked(){return f()===m()},set checked(s){s&&f()!==m()?f(m()):!s&&f()===m()&&f(void 0)},activateRipple(){b()||o(U,!0)},deactivateRipple(){o(U,!1)}};return S&&S(n),t(V).init(),()=>{var s;H&&H(n),(s=t(V))==null||s.destroy()}});function Q(n){w[n]||(w[n]=!0)}function N(n){(!(n in w)||w[n])&&(w[n]=!1)}function z(n,s){p[n]!=s&&(s===""||s==null?delete p[n]:p[n]=s)}function G(){return E&&E.id}function y(){return W}var B=Mn();let X;var $=D(B);Ht($);var ae=n=>{var s;Pe(y(),"blur",n),(s=e.input$onblur)==null||s.call(e,n)},re=n=>{var s;Pe(y(),"focus",n),(s=e.input$onfocus)==null||s.call(e,n)};let C;return he($,(n,s)=>{var K;return(K=Re)==null?void 0:K(n,s)},k),Lt(()=>$t(u,[],$,()=>(I(v())?m():v(),f()),f)),oe(4),M(B),ke(B,n=>W=n,()=>W),he(B,(n,s)=>{var K;return(K=Kt)==null?void 0:K(n,s)},()=>({unbounded:!0,active:t(U),addClass:Q,removeClass:N,addStyle:z})),he(B,(n,s)=>{var K;return(K=Re)==null?void 0:K(n,s)},h),xe((n,s,K,ie,_e,be)=>{X=Oe(B,X,{class:n,style:s,...K}),C=Oe($,C,{class:ie,type:"radio",...E,disabled:b(),value:_e,...be,onblur:ae,onfocus:re})},[()=>pe({[j()]:!0,"mdc-radio":!0,"mdc-radio--disabled":b(),"mdc-radio--touch":d(),...w}),()=>Object.entries(p).map(([n,s])=>`${n}: ${s};`).concat([g()]).join(" "),()=>vt(A,["input$"]),()=>pe({[P()]:!0,"mdc-radio__native-control":!0}),()=>I(v())?m():v(),()=>Ze(A,"input$")]),R(O,B),He({getId:G,getElement:y})}var yn=de('<div><input> <div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg> <div class="mdc-checkbox__mixedmark"></div></div> <div class="mdc-checkbox__ripple"></div></div>');function Rn(O,e){we(e,!0);let u=()=>{};function l(r){return r===u}let I=i(e,"use",19,()=>[]),h=i(e,"class",3,""),j=i(e,"style",3,""),g=i(e,"disabled",15,!1),b=i(e,"touch",3,!1),d=i(e,"indeterminate",15,u),f=i(e,"group",11,u),m=i(e,"checked",15,u),v=i(e,"value",3,null),k=i(e,"valueKey",3,u),P=i(e,"input$use",19,()=>[]),A=i(e,"input$class",3,""),W=et(e,["$$slots","$$events","$$legacy","use","class","style","disabled","touch","indeterminate","group","checked","value","valueKey","input$use","input$class"]),V,w=F(void 0),p=F(void 0),U=x({}),E=x({}),S=x({}),H=F(!1),Q=x(Ee("SMUI:generic:input:props")??{}),N=F(x(l(f())?l(m())?!1:!!m():f().findIndex(r=>r===v())!==-1)),z=Ee("SMUI:checkbox:context"),G=Ee("SMUI:data-table:row:header"),y=m(),B=l(f())?[]:[...f()],X=t(N);Xe(()=>{let r=!1;if(!l(f()))if(X!==t(N)){const c=f().findIndex(L=>L===v());t(N)&&c===-1?f().push(v()):!t(N)&&c!==-1&&f().splice(c,1),r=!0}else{const c=B.findIndex(Ae=>Ae===v()),L=f().findIndex(Ae=>Ae===v());c>-1&&L===-1?(o(N,!1),r=!0):L>-1&&c===-1&&(o(N,!0),r=!0)}l(m())?X!==t(N)&&(r=!0):(m()!==(d()?null:t(N))||t(N)!==X)&&(m()===y&&t(N)!==X?(m(t(N)),l(d())||d(!1)):o(N,!!m()),r=!0),t(p)&&(l(d())?t(p).indeterminate&&(t(p).indeterminate=!1,r=!0):!d()&&t(p).indeterminate?(t(p).indeterminate=!1,r=!0):d()&&!t(p).indeterminate&&(t(p).indeterminate=!0,o(N,!1),r=!0)),y=m(),B=l(f())?[]:[...f()],X=t(N),r&&t(w)&&t(w).handleChange()});const $=Ee("SMUI:generic:input:mount"),ae=Ee("SMUI:generic:input:unmount"),re=Ee("SMUI:checkbox:mount"),C=Ee("SMUI:checkbox:unmount");Nt(()=>{if(t(p)==null)throw new Error("Checkbox is not defined.");t(p).indeterminate=!l(d())&&d(),o(w,x(new mn({addClass:n,forceLayout:()=>Z().offsetWidth,hasNativeControl:()=>!0,isAttachedToDOM:()=>!!Z().parentNode,isChecked:()=>t(N),isIndeterminate:()=>l(d())?!1:d(),removeClass:s,removeNativeControlAttr:_e,setNativeControlAttr:ie,setNativeControlDisabled:c=>g(c)})));const r={_smui_checkbox_accessor:!0,get element(){return Z()},get checked(){return t(N)},set checked(c){t(N)!==c&&o(N,x(c))},get indeterminate(){return l(d())?!1:d()},set indeterminate(c){d(c)},activateRipple(){g()||o(H,!0)},deactivateRipple(){o(H,!1)}};return $&&$(r),re&&re(r),t(w).init(),()=>{var c;ae&&ae(r),C&&C(r),(c=t(w))==null||c.destroy()}});function n(r){U[r]||(U[r]=!0)}function s(r){(!(r in U)||U[r])&&(U[r]=!1)}function K(r,c){E[r]!=c&&(c===""||c==null?delete E[r]:E[r]=c)}function ie(r,c){S[r]!==c&&(S[r]=c)}function _e(r){(!(r in S)||S[r]!=null)&&(S[r]=void 0)}function be(){return Q&&Q.id}function Z(){return V}var te=yn(),Se=r=>{var c;t(w)&&t(w).handleAnimationEnd(),(c=e.onanimationend)==null||c.call(e,r)};let Ie;var le=D(te);Ht(le);var Ke=r=>{var c;Pe(Z(),"blur",r),(c=e.input$onblur)==null||c.call(e,r)},fe=r=>{var c;Pe(Z(),"focus",r),(c=e.input$onfocus)==null||c.call(e,r)};let se;return ke(le,r=>o(p,r),()=>t(p)),he(le,(r,c)=>{var L;return(L=Re)==null?void 0:L(r,c)},P),Lt(()=>en(le,()=>t(N),r=>o(N,r))),oe(4),M(te),ke(te,r=>V=r,()=>V),he(te,(r,c)=>{var L;return(L=Re)==null?void 0:L(r,c)},I),he(te,(r,c)=>{var L;return(L=Kt)==null?void 0:L(r,c)},()=>({unbounded:!0,addClass:n,removeClass:s,addStyle:K,active:t(H),eventTarget:t(p)})),xe((r,c,L,Ae,ht,_t,bt)=>{Ie=Oe(te,Ie,{class:r,style:c,...L,onanimationend:Se}),se=Oe(le,se,{class:Ae,type:"checkbox",...Q,disabled:g(),value:ht,"data-indeterminate":_t,...S,...bt,onblur:Ke,onfocus:fe})},[()=>pe({[h()]:!0,"mdc-checkbox":!0,"mdc-checkbox--disabled":g(),"mdc-checkbox--touch":b(),"mdc-data-table__header-row-checkbox":z==="data-table"&&G,"mdc-data-table__row-checkbox":z==="data-table"&&!G,...U}),()=>Object.entries(E).map(([r,c])=>`${r}: ${c};`).concat([j()]).join(" "),()=>vt(W,["input$"]),()=>pe({[A()]:!0,"mdc-checkbox__native-control":!0}),()=>l(k())?v():k(),()=>!l(d())&&d()?"true":void 0,()=>Ze(W,"input$")]),R(O,te),He({getId:be,getElement:Z})}var pn=de('<div class="not-prose grid grid-cols-1 gap-4 m-2"><!></div>');function On(O,e){we(e,!0);let u=i(e,"blue1",15),l=i(e,"blue2",15),I=i(e,"blue3",15),h=i(e,"red1",15),j=i(e,"red2",15),g=i(e,"red3",15),b=F(void 0);e.matchList.subscribe(v=>{o(b,x(v))});let d=F(void 0);Xe(()=>{if(t(d)&&e.teamList){let[v,k,P]=t(d).alliances.blue.team_keys,[A,W,V]=t(d).alliances.red.team_keys;u(parseInt(v.substring(3))),l(parseInt(k.substring(3))),I(parseInt(P.substring(3))),h(parseInt(A.substring(3))),j(parseInt(W.substring(3))),g(parseInt(V.substring(3)))}});var f=pn(),m=D(f);Le(m,{class:"not-prose",style:"width: 100%;",textfield$style:"width: 100%;",get options(){return t(b)},getOptionLabel:jt,label:"Pick a match",get value(){return t(d)},set value(v){o(d,x(v))}}),M(f),R(O,f),He()}/**
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
 */var wn={ROOT:"mdc-form-field"},Hn={LABEL_SELECTOR:".mdc-form-field > label"};/**
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
 */var Kn=function(O){At(e,O);function e(u){var l=O.call(this,Je(Je({},e.defaultAdapter),u))||this;return l.click=function(){l.handleClick()},l}return Object.defineProperty(e,"cssClasses",{get:function(){return wn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Hn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},e.prototype.handleClick=function(){var u=this;this.adapter.activateInputRipple(),requestAnimationFrame(function(){u.adapter.deactivateInputRipple()})},e}(Tt);let Ln=0;var Un=de("<div><!> <label><!></label></div>");function It(O,e){we(e,!0);let u=i(e,"use",19,()=>[]),l=i(e,"class",3,""),I=i(e,"align",3,"start"),h=i(e,"noWrap",3,!1),j=i(e,"inputId",19,()=>"SMUI-form-field-"+Ln++),g=i(e,"label$use",19,()=>[]),b=et(e,["$$slots","$$events","$$legacy","use","class","align","noWrap","inputId","label$use","children","label"]),d,f=F(void 0),m=new Wt,v,k=F(void 0);ft("SMUI:generic:input:props",{id:j()}),ft("SMUI:generic:input:mount",E=>{o(k,x(E))}),ft("SMUI:generic:input:unmount",()=>{o(k,void 0)}),Nt(()=>(o(f,x(new Kn({activateInputRipple:()=>{t(k)&&t(k).activateRipple()},deactivateInputRipple:()=>{t(k)&&t(k).deactivateRipple()},deregisterInteractionHandler:(E,S)=>m.off(v,E,S),registerInteractionHandler:(E,S)=>m.on(v,E,S)}))),t(f).init(),()=>{var E;(E=t(f))==null||E.destroy(),m.clear()}));function P(){return d}var A=Un();let W;var V=D(A);ye(V,()=>e.children??mt);var w=T(V,2);let p;var U=D(w);return ye(U,()=>e.label??mt),M(w),ke(w,E=>v=E,()=>v),he(w,(E,S)=>{var H;return(H=Re)==null?void 0:H(E,S)},g),M(A),ke(A,E=>d=E,()=>d),he(A,(E,S)=>{var H;return(H=Re)==null?void 0:H(E,S)},u),xe((E,S,H)=>{W=Oe(A,W,{class:E,...S}),p=Oe(w,p,{for:j(),...H})},[()=>pe({[l()]:!0,"mdc-form-field":!0,"mdc-form-field--align-end":I()==="end","mdc-form-field--nowrap":h()}),()=>vt(b,["label$"]),()=>Ze(b,"label$")]),R(O,A),He({getElement:P})}var Pn=de("<!> <!> <!> <!> <!> <!>",1),Bn=de('<!> <div class="container mx-auto"><!> <h1 class="text-lg">Pick a match, either by match number (using TBA) or by entering team numbers manually</h1> <div class="grid grid-cols-2 justify-items-center"><!> <!></div> <!> <div class="grid grid-cols-1 gap-2 md:grid-cols-3"><!></div></div>',1);function $n(O,e){we(e,!0);const[u,l]=Zt(),I=()=>Jt(t(h),"$csvData",u);let h=Y(()=>yt(()=>t(V)?Ne.csv2025.toCollection().toArray():Ne.csv2025.where("eventkey").equals(e.data.event.key).toArray()));const{qrButtonClick:j,title:g,downloadButtonClick:b,uploadButtonClick:d}=Vt();j.set(()=>{p.open()}),b.set(async()=>{let C=await dn();console.log(C),await Ne.transaction("rw",Ne.csv2025,async()=>{await Ne.csv2025.bulkPut(C)})}),d.set(void 0),g.set("Phone on Field dashboard");let f=Y(()=>{if(!I())return[];let C=performance.now(),n=new Set;for(let K of I())n.add(K.teamNum);let s=Array.from(n);return console.log("teamlist",performance.now()-C),s}),m=F(void 0),v=F(void 0),k=F(void 0),P=F(void 0),A=F(void 0),W=F(void 0),V=F(!1),w=Y(()=>yt(async()=>{const C=await Ne.current_event.toCollection().first();return C?await Ne.matches.where("event_key").equals(C.key).sortBy("time"):[]})),p,U=F("tba");var E=Bn(),S=J(E);ke(fn(S,{onclose:C=>{console.log(C)}}),C=>p=C,()=>p);var H=T(S,2),Q=D(H);It(Q,{label:n=>{oe();var s=Ue();xe(()=>ne(s,`Query ALL events instead of just ${e.data.event.name??""}?`)),R(n,s)},children:(n,s)=>{Rn(n,{get checked(){return t(V)},set checked(K){o(V,x(K))}})},$$slots:{label:!0,default:!0}});var N=T(Q,4),z=D(N);It(z,{label:n=>{oe();var s=Ue("The Blue Alliance");R(n,s)},children:(n,s)=>{wt(n,{value:"tba",touch:!0,get group(){return t(U)},set group(K){o(U,x(K))}})},$$slots:{label:!0,default:!0}});var G=T(z,2);It(G,{label:n=>{oe();var s=Ue("Manual entry");R(n,s)},children:(n,s)=>{wt(n,{value:"manual",touch:!0,get group(){return t(U)},set group(K){o(U,x(K))}})},$$slots:{label:!0,default:!0}}),M(N);var y=T(N,2);{var B=C=>{Cn(C,{get teamList(){return t(f)},get blue1(){return t(m)},set blue1(n){o(m,x(n))},get blue2(){return t(v)},set blue2(n){o(v,x(n))},get blue3(){return t(k)},set blue3(n){o(k,x(n))},get red1(){return t(P)},set red1(n){o(P,x(n))},get red2(){return t(A)},set red2(n){o(A,x(n))},get red3(){return t(W)},set red3(n){o(W,x(n))}})},X=C=>{On(C,{get teamList(){return t(f)},get matchList(){return t(w)},get blue1(){return t(m)},set blue1(n){o(m,x(n))},get blue2(){return t(v)},set blue2(n){o(v,x(n))},get blue3(){return t(k)},set blue3(n){o(k,x(n))},get red1(){return t(P)},set red1(n){o(P,x(n))},get red2(){return t(A)},set red2(n){o(A,x(n))},get red3(){return t(W)},set red3(n){o(W,x(n))}})};Ce(y,C=>{t(U)==="manual"?C(B):C(X,!1)})}var $=T(y,2),ae=D($);{var re=C=>{var n=Pn(),s=J(n);const K=Y(()=>ze(I(),t(m)));Qe(s,{get teamNum(){return t(m)},get data(){return t(K)},spot:"Blue 1"});var ie=T(s,2);const _e=Y(()=>ze(I(),t(v)));Qe(ie,{get teamNum(){return t(v)},get data(){return t(_e)},spot:"Blue 2"});var be=T(ie,2);const Z=Y(()=>ze(I(),t(k)));Qe(be,{get teamNum(){return t(k)},get data(){return t(Z)},spot:"Blue 3"});var te=T(be,2);const Se=Y(()=>ze(I(),t(P)));Qe(te,{get teamNum(){return t(P)},get data(){return t(Se)},spot:"Red 1"});var Ie=T(te,2);const le=Y(()=>ze(I(),t(A)));Qe(Ie,{get teamNum(){return t(A)},get data(){return t(le)},spot:"Red 2"});var Ke=T(Ie,2);const fe=Y(()=>ze(I(),t(W)));Qe(Ke,{get teamNum(){return t(W)},get data(){return t(fe)},spot:"Red 3"}),R(C,n)};Ce(ae,C=>{var n;((n=I())==null?void 0:n.length)>0&&C(re)})}M($),M(H),R(O,E),He(),l()}export{$n as component,Yn as universal};
