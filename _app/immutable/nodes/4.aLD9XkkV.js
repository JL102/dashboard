import{b as Oe}from"../chunks/DuAmjV7c.js";import{d as j,_ as Ce,a as ee,M as Me,r as Be,h as W,u as te,R as Ee,c as oe,i as Se,j as ke,k as ne,f as ge,m as Fe,s as ve,n as Te,g as je,l as me}from"../chunks/-yQ1haA6.js";import{r as Ne}from"../chunks/BNz2KYVh.js";import{t as G,a as N,b as be}from"../chunks/BOCYgPTh.js";import{p as re,e as ue,B as Re,b as u,d as R,g as t,c as U,$ as Ue,n as ce,r as K,t as xe,a as ie,l as Ke,h as de,s as A,i as pe,f as _e,j as O}from"../chunks/C0h71eE1.js";import{a as o,p as d,b as ae,r as De,i as he,e as He,d as qe}from"../chunks/rr_i9oP7.js";import{A as ze,d as Qe,Q as Ve,M as We,T as z,f as Q}from"../chunks/DwIXWVfp.js";import{b as Ge}from"../chunks/Cr1kl3Dp.js";import"../chunks/2gIK30cb.js";async function Je(){return await j.authenticated.toCollection().first()||Ne(307,`${Oe}/login`),{}}const _t=Object.freeze(Object.defineProperty({__proto__:null,load:Je},Symbol.toStringTag,{value:"Module"}));/**
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
 */var Xe={NATIVE_CONTROL_SELECTOR:".mdc-radio__native-control"},Ye={DISABLED:"mdc-radio--disabled",ROOT:"mdc-radio"};/**
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
 */var Ze=function(I){Ce(e,I);function e(m){return I.call(this,ee(ee({},e.defaultAdapter),m))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return Ye},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Xe},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setDisabled=function(m){var _=e.cssClasses.DISABLED;this.adapter.setNativeControlDisabled(m),m?this.adapter.addClass(_):this.adapter.removeClass(_)},e}(Me),$e=G('<div><input> <div class="mdc-radio__background"><div class="mdc-radio__outer-circle"></div> <div class="mdc-radio__inner-circle"></div></div> <div class="mdc-radio__ripple"></div></div>');function ye(I,e){re(e,!0);const m=[];let _=()=>{};function b(a){return a===_}let F=o(e,"use",19,()=>[]),B=o(e,"class",3,""),T=o(e,"style",3,""),x=o(e,"disabled",15,!1),M=o(e,"touch",3,!1),f=o(e,"group",15),c=o(e,"value",3,null),l=o(e,"valueKey",3,_),v=o(e,"input$use",19,()=>[]),D=o(e,"input$class",3,""),g=De(e,["$$slots","$$events","$$legacy","use","class","style","disabled","touch","group","value","valueKey","input$use","input$class"]),h,P=R(void 0),p=d({}),S=d({}),E=R(!1),s=d(ue("SMUI:generic:input:props")??{});const y=ue("SMUI:generic:input:mount"),C=ue("SMUI:generic:input:unmount");Re(()=>{u(P,d(new Ze({addClass:V,removeClass:J,setNativeControlDisabled:r=>x(r)})));const a={_smui_radio_accessor:!0,get element(){return H()},get checked(){return f()===c()},set checked(r){r&&f()!==c()?f(c()):!r&&f()===c()&&f(void 0)},activateRipple(){x()||u(E,!0)},deactivateRipple(){u(E,!1)}};return y&&y(a),t(P).init(),()=>{var r;C&&C(a),(r=t(P))==null||r.destroy()}});function V(a){p[a]||(p[a]=!0)}function J(a){(!(a in p)||p[a])&&(p[a]=!1)}function X(a,r){S[a]!=r&&(r===""||r==null?delete S[a]:S[a]=r)}function se(){return s&&s.id}function H(){return h}var L=$e();let Y;var q=U(L);Be(q);var i=a=>{var r;ge(H(),"blur",a),(r=e.input$onblur)==null||r.call(e,a)},n=a=>{var r;ge(H(),"focus",a),(r=e.input$onfocus)==null||r.call(e,a)};let k;return W(q,(a,r)=>{var w;return(w=te)==null?void 0:w(a,r)},v),Ue(()=>Ge(m,[],q,()=>(b(l())?c():l(),f()),f)),ce(4),K(L),ae(L,a=>h=a,()=>h),W(L,(a,r)=>{var w;return(w=Ee)==null?void 0:w(a,r)},()=>({unbounded:!0,active:t(E),addClass:V,removeClass:J,addStyle:X})),W(L,(a,r)=>{var w;return(w=te)==null?void 0:w(a,r)},F),xe((a,r,w,Z,le,$)=>{Y=ne(L,Y,{class:a,style:r,...w}),k=ne(q,k,{class:Z,type:"radio",...s,disabled:x(),value:le,...$,onblur:i,onfocus:n})},[()=>oe({[B()]:!0,"mdc-radio":!0,"mdc-radio--disabled":x(),"mdc-radio--touch":M(),...p}),()=>Object.entries(S).map(([a,r])=>`${a}: ${r};`).concat([T()]).join(" "),()=>Se(g,["input$"]),()=>oe({[D()]:!0,"mdc-radio__native-control":!0}),()=>b(l())?c():l(),()=>ke(g,"input$")]),N(I,L),ie({getId:se,getElement:H})}var et=G('<div class="not-prose grid grid-cols-1 gap-4 m-2"><!></div>');function tt(I,e){re(e,!0);let m=o(e,"blue1",15),_=o(e,"blue2",15),b=o(e,"blue3",15),F=o(e,"red1",15),B=o(e,"red2",15),T=o(e,"red3",15),x=R(void 0);e.matchList.subscribe(l=>{u(x,d(l))});let M=R(void 0);Ke(()=>{if(t(M)&&e.teamList){let[l,v,D]=t(M).alliances.blue.team_keys,[g,h,P]=t(M).alliances.red.team_keys;m(parseInt(l.substring(3))),_(parseInt(v.substring(3))),b(parseInt(D.substring(3))),F(parseInt(g.substring(3))),B(parseInt(h.substring(3))),T(parseInt(P.substring(3)))}});var f=et(),c=U(f);ze(c,{class:"not-prose",style:"width: 100%;",textfield$style:"width: 100%;",get options(){return t(x)},getOptionLabel:Fe,label:"Pick a match",get value(){return t(M)},set value(l){u(M,d(l))}}),K(f),N(I,f),ie()}/**
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
 */var nt={ROOT:"mdc-form-field"},at={LABEL_SELECTOR:".mdc-form-field > label"};/**
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
 */var rt=function(I){Ce(e,I);function e(m){var _=I.call(this,ee(ee({},e.defaultAdapter),m))||this;return _.click=function(){_.handleClick()},_}return Object.defineProperty(e,"cssClasses",{get:function(){return nt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return at},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},e.prototype.handleClick=function(){var m=this;this.adapter.activateInputRipple(),requestAnimationFrame(function(){m.adapter.deactivateInputRipple()})},e}(Me);let it=0;var st=G("<div><!> <label><!></label></div>");function Ie(I,e){re(e,!0);let m=o(e,"use",19,()=>[]),_=o(e,"class",3,""),b=o(e,"align",3,"start"),F=o(e,"noWrap",3,!1),B=o(e,"inputId",19,()=>"SMUI-form-field-"+it++),T=o(e,"label$use",19,()=>[]),x=De(e,["$$slots","$$events","$$legacy","use","class","align","noWrap","inputId","label$use","children","label"]),M,f=R(void 0),c=new Te,l,v=R(void 0);de("SMUI:generic:input:props",{id:B()}),de("SMUI:generic:input:mount",s=>{u(v,d(s))}),de("SMUI:generic:input:unmount",()=>{u(v,void 0)}),Re(()=>(u(f,d(new rt({activateInputRipple:()=>{t(v)&&t(v).activateRipple()},deactivateInputRipple:()=>{t(v)&&t(v).deactivateRipple()},deregisterInteractionHandler:(s,y)=>c.off(l,s,y),registerInteractionHandler:(s,y)=>c.on(l,s,y)}))),t(f).init(),()=>{var s;(s=t(f))==null||s.destroy(),c.clear()}));function D(){return M}var g=st();let h;var P=U(g);ve(P,()=>e.children??pe);var p=A(P,2);let S;var E=U(p);return ve(E,()=>e.label??pe),K(p),ae(p,s=>l=s,()=>l),W(p,(s,y)=>{var C;return(C=te)==null?void 0:C(s,y)},T),K(g),ae(g,s=>M=s,()=>M),W(g,(s,y)=>{var C;return(C=te)==null?void 0:C(s,y)},m),xe((s,y,C)=>{h=ne(g,h,{class:s,...y}),S=ne(p,S,{for:B(),...C})},[()=>oe({[_()]:!0,"mdc-form-field":!0,"mdc-form-field--align-end":b()==="end","mdc-form-field--nowrap":F()}),()=>Se(x,["label$"]),()=>ke(x,"label$")]),N(I,g),ie({getElement:D})}var lt=G("<!> <!> <!> <!> <!> <!>",1),ut=G('<!> <div class="container mx-auto"><h1 class="text-lg">Pick a match, either by match number (using TBA) or by entering team numbers manually</h1> <div class="grid grid-cols-2 justify-items-center"><!> <!></div> <!> <div class="grid grid-cols-1 gap-2 md:grid-cols-3"><!></div></div>',1);function ht(I,e){re(e,!0);const[m,_]=He(),b=()=>qe(t(F),"$csvData",m);let F=O(()=>me(()=>j.csv2025.toCollection().toArray()));const{qrButtonClick:B,title:T,downloadButtonClick:x,uploadButtonClick:M}=je();B.set(()=>{p.open()}),x.set(async()=>{let i=await Qe();console.log(i),await j.transaction("rw",j.csv2025,async()=>{await j.csv2025.bulkPut(i)})}),M.set(void 0),T.set("Phone on Field dashboard");let f=O(()=>{if(!b())return[];let i=performance.now(),n=new Set;for(let a of b())n.add(a.teamNum);let k=Array.from(n);return console.log("teamlist",performance.now()-i),k}),c=R(void 0),l=R(void 0),v=R(void 0),D=R(void 0),g=R(void 0),h=R(void 0),P=O(()=>me(async()=>{const i=await j.current_event.toCollection().first();return i?await j.matches.where("event_key").equals(i.key).sortBy("time"):[]})),p,S=R("tba");var E=ut(),s=_e(E);ae(Ve(s,{onclose:i=>{console.log(i)}}),i=>p=i,()=>p);var y=A(s,2),C=A(U(y),2),V=U(C);Ie(V,{label:n=>{ce();var k=be("The Blue Alliance");N(n,k)},children:(n,k)=>{ye(n,{value:"tba",touch:!0,get group(){return t(S)},set group(a){u(S,d(a))}})},$$slots:{label:!0,default:!0}});var J=A(V,2);Ie(J,{label:n=>{ce();var k=be("Manual entry");N(n,k)},children:(n,k)=>{ye(n,{value:"manual",touch:!0,get group(){return t(S)},set group(a){u(S,d(a))}})},$$slots:{label:!0,default:!0}}),K(C);var X=A(C,2);{var se=i=>{We(i,{get teamList(){return t(f)},get blue1(){return t(c)},set blue1(n){u(c,d(n))},get blue2(){return t(l)},set blue2(n){u(l,d(n))},get blue3(){return t(v)},set blue3(n){u(v,d(n))},get red1(){return t(D)},set red1(n){u(D,d(n))},get red2(){return t(g)},set red2(n){u(g,d(n))},get red3(){return t(h)},set red3(n){u(h,d(n))}})},H=i=>{tt(i,{get teamList(){return t(f)},get matchList(){return t(P)},get blue1(){return t(c)},set blue1(n){u(c,d(n))},get blue2(){return t(l)},set blue2(n){u(l,d(n))},get blue3(){return t(v)},set blue3(n){u(v,d(n))},get red1(){return t(D)},set red1(n){u(D,d(n))},get red2(){return t(g)},set red2(n){u(g,d(n))},get red3(){return t(h)},set red3(n){u(h,d(n))}})};he(X,i=>{t(S)==="manual"?i(se):i(H,!1)})}var L=A(X,2),Y=U(L);{var q=i=>{var n=lt(),k=_e(n);const a=O(()=>Q(b(),t(c)));z(k,{get teamNum(){return t(c)},get data(){return t(a)},spot:"Blue 1"});var r=A(k,2);const w=O(()=>Q(b(),t(l)));z(r,{get teamNum(){return t(l)},get data(){return t(w)},spot:"Blue 2"});var Z=A(r,2);const le=O(()=>Q(b(),t(v)));z(Z,{get teamNum(){return t(v)},get data(){return t(le)},spot:"Blue 3"});var $=A(Z,2);const we=O(()=>Q(b(),t(D)));z($,{get teamNum(){return t(D)},get data(){return t(we)},spot:"Red 1"});var fe=A($,2);const Ae=O(()=>Q(b(),t(g)));z(fe,{get teamNum(){return t(g)},get data(){return t(Ae)},spot:"Red 2"});var Pe=A(fe,2);const Le=O(()=>Q(b(),t(h)));z(Pe,{get teamNum(){return t(h)},get data(){return t(Le)},spot:"Red 3"}),N(i,n)};he(Y,i=>{var n;((n=b())==null?void 0:n.length)>0&&i(q)})}K(L),K(y),N(I,E),ie(),_()}export{ht as component,_t as universal};
