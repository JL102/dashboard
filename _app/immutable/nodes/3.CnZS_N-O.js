import{t as v,a as i,b}from"../chunks/CRSh-WWB.js";import{p as x,a as h,c as n,s as l,b as w,d as $,g as e,n as P,r as c}from"../chunks/DoN0iJJ0.js";import{p as y}from"../chunks/BD2kLoV-.js";import{g as k}from"../chunks/BzXUI01Y.js";import{b as B}from"../chunks/abgXwXLX.js";import{g as T,B as _,d as q}from"../chunks/D8nWv9V9.js";import{T as C}from"../chunks/CFSG5olu.js";var I=v('<section class="center m-auto md:max-w-3xl"><h2>Please authenticate to continue.</h2> <div class="not-prose grid md:grid-cols-2 gap-2 sm:grid-cols-1"><!> <!></div></section>');function G(p,d){x(d,!0);let t=$("");const{snackbar:u}=T();async function m(){e(t)&&(e(t)==="robotsdontquit1"?(await q.authenticated.put({authenticated:!0}),k(B)):u.error("Incorrect password."))}var a=I(),o=l(n(a),2),r=n(o);C(r,{class:"w-full",input$class:"w-full",label:"Password",get value(){return e(t)},set value(s){w(t,y(s))}});var f=l(r,2);_(f,{class:"w-full",variant:"raised",onclick:m,children:(s,L)=>{P();var g=b("Submit");i(s,g)},$$slots:{default:!0}}),c(o),c(a),i(p,a),h()}export{G as component};
