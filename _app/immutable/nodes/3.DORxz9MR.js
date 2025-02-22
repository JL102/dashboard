import{t as G,a as N,b as ge}from"../chunks/DGIi1ET6.js";import{p as re,q as ue,B as Ce,e as d,b as C,g as t,c as U,$ as Be,n as oe,r as j,t as Me,a as ie,u as Oe,w as de,s as A,v as ve,f as me,d as B}from"../chunks/Bt561VDD.js";import{c as o,p as l,b as ee,r as ke,i as be,a as Ee,s as Fe}from"../chunks/CdiXb2lo.js";import{_ as Re,a as te,M as Se,r as Te,b as z,u as ne,R as Ne,c as ce,e as xe,p as De,f as ae,h as pe,m as Ue,s as _e,i as je,g as Ke,d as q,l as he}from"../chunks/NJ6IM5ih.js";import{c as He,A as qe,d as Qe,Q as Ve,M as We,T as Q,f as V}from"../chunks/A6WRd95Y.js";/**
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
 */var ze={NATIVE_CONTROL_SELECTOR:".mdc-radio__native-control"},Ge={DISABLED:"mdc-radio--disabled",ROOT:"mdc-radio"};/**
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
 */var Je=function(M){Re(e,M);function e(m){return M.call(this,te(te({},e.defaultAdapter),m))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return Ge},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ze},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setDisabled=function(m){var _=e.cssClasses.DISABLED;this.adapter.setNativeControlDisabled(m),m?this.adapter.addClass(_):this.adapter.removeClass(_)},e}(Se),Xe=G('<div><input> <div class="mdc-radio__background"><div class="mdc-radio__outer-circle"></div> <div class="mdc-radio__inner-circle"></div></div> <div class="mdc-radio__ripple"></div></div>');function ye(M,e){re(e,!0);const m=[];let _=()=>{};function b(a){return a===_}let F=o(e,"use",19,()=>[]),O=o(e,"class",3,""),T=o(e,"style",3,""),x=o(e,"disabled",15,!1),k=o(e,"touch",3,!1),f=o(e,"group",15),c=o(e,"value",3,null),u=o(e,"valueKey",3,_),v=o(e,"input$use",19,()=>[]),D=o(e,"input$class",3,""),g=ke(e,["$$slots","$$events","$$legacy","use","class","style","disabled","touch","group","value","valueKey","input$use","input$class"]),h,L=C(void 0),p=l({}),R=l({}),E=C(!1),s=l(ue("SMUI:generic:input:props")??{});const y=ue("SMUI:generic:input:mount"),I=ue("SMUI:generic:input:unmount");Ce(()=>{d(L,l(new Je({addClass:W,removeClass:J,setNativeControlDisabled:r=>x(r)})));const a={_smui_radio_accessor:!0,get element(){return K()},get checked(){return f()===c()},set checked(r){r&&f()!==c()?f(c()):!r&&f()===c()&&f(void 0)},activateRipple(){x()||d(E,!0)},deactivateRipple(){d(E,!1)}};return y&&y(a),t(L).init(),()=>{var r;I&&I(a),(r=t(L))==null||r.destroy()}});function W(a){p[a]||(p[a]=!0)}function J(a){(!(a in p)||p[a])&&(p[a]=!1)}function X(a,r){R[a]!=r&&(r===""||r==null?delete R[a]:R[a]=r)}function se(){return s&&s.id}function K(){return h}var P=Xe();let Y;var H=U(P);Te(H);var i=a=>{var r;pe(K(),"blur",a),(r=e.input$onblur)==null||r.call(e,a)},n=a=>{var r;pe(K(),"focus",a),(r=e.input$onfocus)==null||r.call(e,a)};let S;return z(H,(a,r)=>{var w;return(w=ne)==null?void 0:w(a,r)},v),Be(()=>He(m,[],H,()=>(b(u())?c():u(),f()),f)),oe(4),j(P),ee(P,a=>h=a,()=>h),z(P,(a,r)=>{var w;return(w=Ne)==null?void 0:w(a,r)},()=>({unbounded:!0,active:t(E),addClass:W,removeClass:J,addStyle:X})),z(P,(a,r)=>{var w;return(w=ne)==null?void 0:w(a,r)},F),Me((a,r,w,Z,le,$)=>{Y=ae(P,Y,{class:a,style:r,...w}),S=ae(H,S,{class:Z,type:"radio",...s,disabled:x(),value:le,...$,onblur:i,onfocus:n})},[()=>ce({[O()]:!0,"mdc-radio":!0,"mdc-radio--disabled":x(),"mdc-radio--touch":k(),...p}),()=>Object.entries(R).map(([a,r])=>`${a}: ${r};`).concat([T()]).join(" "),()=>xe(g,["input$"]),()=>ce({[D()]:!0,"mdc-radio__native-control":!0}),()=>b(u())?c():u(),()=>De(g,"input$")]),N(M,P),ie({getId:se,getElement:K})}var Ye=G('<div class="not-prose grid grid-cols-1 gap-4 m-2"><!></div>');function Ze(M,e){re(e,!0);let m=o(e,"blue1",15),_=o(e,"blue2",15),b=o(e,"blue3",15),F=o(e,"red1",15),O=o(e,"red2",15),T=o(e,"red3",15),x=C(void 0);e.matchList.subscribe(u=>{d(x,l(u))});let k=C(void 0);Oe(()=>{if(t(k)&&e.teamList){let[u,v,D]=t(k).alliances.blue.team_keys,[g,h,L]=t(k).alliances.red.team_keys;m(parseInt(u.substring(3))),_(parseInt(v.substring(3))),b(parseInt(D.substring(3))),F(parseInt(g.substring(3))),O(parseInt(h.substring(3))),T(parseInt(L.substring(3)))}});var f=Ye(),c=U(f);qe(c,{class:"not-prose",style:"width: 100%;",textfield$style:"width: 100%;",get options(){return t(x)},getOptionLabel:Ue,label:"Pick a match",get value(){return t(k)},set value(u){d(k,l(u))}}),j(f),N(M,f),ie()}/**
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
 */var $e={ROOT:"mdc-form-field"},et={LABEL_SELECTOR:".mdc-form-field > label"};/**
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
 */var tt=function(M){Re(e,M);function e(m){var _=M.call(this,te(te({},e.defaultAdapter),m))||this;return _.click=function(){_.handleClick()},_}return Object.defineProperty(e,"cssClasses",{get:function(){return $e},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return et},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},e.prototype.handleClick=function(){var m=this;this.adapter.activateInputRipple(),requestAnimationFrame(function(){m.adapter.deactivateInputRipple()})},e}(Se);let nt=0;var at=G("<div><!> <label><!></label></div>");function Ie(M,e){re(e,!0);let m=o(e,"use",19,()=>[]),_=o(e,"class",3,""),b=o(e,"align",3,"start"),F=o(e,"noWrap",3,!1),O=o(e,"inputId",19,()=>"SMUI-form-field-"+nt++),T=o(e,"label$use",19,()=>[]),x=ke(e,["$$slots","$$events","$$legacy","use","class","align","noWrap","inputId","label$use","children","label"]),k,f=C(void 0),c=new je,u,v=C(void 0);de("SMUI:generic:input:props",{id:O()}),de("SMUI:generic:input:mount",s=>{d(v,l(s))}),de("SMUI:generic:input:unmount",()=>{d(v,void 0)}),Ce(()=>(d(f,l(new tt({activateInputRipple:()=>{t(v)&&t(v).activateRipple()},deactivateInputRipple:()=>{t(v)&&t(v).deactivateRipple()},deregisterInteractionHandler:(s,y)=>c.off(u,s,y),registerInteractionHandler:(s,y)=>c.on(u,s,y)}))),t(f).init(),()=>{var s;(s=t(f))==null||s.destroy(),c.clear()}));function D(){return k}var g=at();let h;var L=U(g);_e(L,()=>e.children??ve);var p=A(L,2);let R;var E=U(p);return _e(E,()=>e.label??ve),j(p),ee(p,s=>u=s,()=>u),z(p,(s,y)=>{var I;return(I=ne)==null?void 0:I(s,y)},T),j(g),ee(g,s=>k=s,()=>k),z(g,(s,y)=>{var I;return(I=ne)==null?void 0:I(s,y)},m),Me((s,y,I)=>{h=ae(g,h,{class:s,...y}),R=ae(p,R,{for:O(),...I})},[()=>ce({[_()]:!0,"mdc-form-field":!0,"mdc-form-field--align-end":b()==="end","mdc-form-field--nowrap":F()}),()=>xe(x,["label$"]),()=>De(x,"label$")]),N(M,g),ie({getElement:D})}var rt=G("<!> <!> <!> <!> <!> <!>",1),it=G('<!> <div class="container mx-auto"><h1 class="text-lg">Pick a match, either by match number (using TBA) or by entering team numbers manually</h1> <div class="grid grid-cols-2 justify-items-center"><!> <!></div> <!> <div class="grid grid-cols-1 gap-2 md:grid-cols-3"><!></div></div>',1);function ct(M,e){re(e,!0);const[m,_]=Ee(),b=()=>Fe(t(F),"$csvData",m);C(l([]));let F=B(()=>he(()=>q.csv2024.toCollection().toArray()));const{qrButtonClick:O,title:T,downloadButtonClick:x,uploadButtonClick:k}=Ke();O.set(()=>{p.open()}),x.set(async()=>{let i=await Qe();console.log(i),await q.transaction("rw",q.csv2024,async()=>{await q.csv2024.bulkPut(i)})}),k.set(void 0),T.set("Phone on Field dashboard");let f=B(()=>{if(!b())return[];let i=performance.now(),n=new Set;for(let a of b())n.add(a.teamNum);let S=Array.from(n);return console.log("teamlist",performance.now()-i),S}),c=C(void 0),u=C(void 0),v=C(void 0),D=C(void 0),g=C(void 0),h=C(void 0),L=B(()=>he(async()=>{const i=await q.current_event.toCollection().first();return i?await q.matches.where("event_key").equals(i.key).sortBy("time"):[]})),p,R=C("tba");var E=it(),s=me(E);ee(Ve(s,{onclose:i=>{console.log(i)}}),i=>p=i,()=>p);var y=A(s,2),I=A(U(y),2),W=U(I);Ie(W,{label:n=>{oe();var S=ge("The Blue Alliance");N(n,S)},children:(n,S)=>{ye(n,{value:"tba",touch:!0,get group(){return t(R)},set group(a){d(R,l(a))}})},$$slots:{label:!0,default:!0}});var J=A(W,2);Ie(J,{label:n=>{oe();var S=ge("Manual entry");N(n,S)},children:(n,S)=>{ye(n,{value:"manual",touch:!0,get group(){return t(R)},set group(a){d(R,l(a))}})},$$slots:{label:!0,default:!0}}),j(I);var X=A(I,2);{var se=i=>{We(i,{get teamList(){return t(f)},get blue1(){return t(c)},set blue1(n){d(c,l(n))},get blue2(){return t(u)},set blue2(n){d(u,l(n))},get blue3(){return t(v)},set blue3(n){d(v,l(n))},get red1(){return t(D)},set red1(n){d(D,l(n))},get red2(){return t(g)},set red2(n){d(g,l(n))},get red3(){return t(h)},set red3(n){d(h,l(n))}})},K=i=>{Ze(i,{get teamList(){return t(f)},get matchList(){return t(L)},get blue1(){return t(c)},set blue1(n){d(c,l(n))},get blue2(){return t(u)},set blue2(n){d(u,l(n))},get blue3(){return t(v)},set blue3(n){d(v,l(n))},get red1(){return t(D)},set red1(n){d(D,l(n))},get red2(){return t(g)},set red2(n){d(g,l(n))},get red3(){return t(h)},set red3(n){d(h,l(n))}})};be(X,i=>{t(R)==="manual"?i(se):i(K,!1)})}var P=A(X,2),Y=U(P);{var H=i=>{var n=rt(),S=me(n);const a=B(()=>V(b(),t(c)));Q(S,{get teamNum(){return t(c)},get data(){return t(a)},spot:"Blue 1"});var r=A(S,2);const w=B(()=>V(b(),t(u)));Q(r,{get teamNum(){return t(u)},get data(){return t(w)},spot:"Blue 2"});var Z=A(r,2);const le=B(()=>V(b(),t(v)));Q(Z,{get teamNum(){return t(v)},get data(){return t(le)},spot:"Blue 3"});var $=A(Z,2);const we=B(()=>V(b(),t(D)));Q($,{get teamNum(){return t(D)},get data(){return t(we)},spot:"Red 1"});var fe=A($,2);const Ae=B(()=>V(b(),t(g)));Q(fe,{get teamNum(){return t(g)},get data(){return t(Ae)},spot:"Red 2"});var Le=A(fe,2);const Pe=B(()=>V(b(),t(h)));Q(Le,{get teamNum(){return t(h)},get data(){return t(Pe)},spot:"Red 3"}),N(i,n)};be(Y,i=>{var n;((n=b())==null?void 0:n.length)>0&&i(H)})}j(P),j(y),N(M,E),ie(),_()}export{ct as component};
