import{b as Mr}from"../chunks/NX0sW4A4.js";import{d as cr,g as kr,l as Nr}from"../chunks/Xd77a1Dc.js";import{r as Lr}from"../chunks/DXKwtkHy.js";import{t as pr,a as tr}from"../chunks/BOCYgPTh.js";import{p as Wr,d as T,f as er,a as $r,g as l,j as B,s as I,c as or,b as S,r as ur}from"../chunks/C0h71eE1.js";import{p as U,d as Hr,b as Or,i as Qr,e as Vr}from"../chunks/rr_i9oP7.js";import"../chunks/MbfZ_T6A.js";import{u as zr,Q as Gr,M as Jr,T as C,f as P}from"../chunks/BYk5F4M5.js";async function Xr(){await cr.authenticated.toCollection().first()||Lr(307,`${Mr}/login`)}const Nn=Object.freeze(Object.defineProperty({__proto__:null,load:Xr},Symbol.toStringTag,{value:"Module"}));var ar=typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{},_=[],F=[],qr=typeof Uint8Array<"u"?Uint8Array:Array,z=!1;function lr(){z=!0;for(var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=0,n=i.length;r<n;++r)_[r]=i[r],F[i.charCodeAt(r)]=r;F[45]=62,F[95]=63}function Kr(i){z||lr();var r,n,t,e,o,u,f=i.length;if(f%4>0)throw new Error("Invalid string. Length must be a multiple of 4");o=i[f-2]==="="?2:i[f-1]==="="?1:0,u=new qr(f*3/4-o),t=o>0?f-4:f;var h=0;for(r=0,n=0;r<t;r+=4,n+=3)e=F[i.charCodeAt(r)]<<18|F[i.charCodeAt(r+1)]<<12|F[i.charCodeAt(r+2)]<<6|F[i.charCodeAt(r+3)],u[h++]=e>>16&255,u[h++]=e>>8&255,u[h++]=e&255;return o===2?(e=F[i.charCodeAt(r)]<<2|F[i.charCodeAt(r+1)]>>4,u[h++]=e&255):o===1&&(e=F[i.charCodeAt(r)]<<10|F[i.charCodeAt(r+1)]<<4|F[i.charCodeAt(r+2)]>>2,u[h++]=e>>8&255,u[h++]=e&255),u}function Zr(i){return _[i>>18&63]+_[i>>12&63]+_[i>>6&63]+_[i&63]}function jr(i,r,n){for(var t,e=[],o=r;o<n;o+=3)t=(i[o]<<16)+(i[o+1]<<8)+i[o+2],e.push(Zr(t));return e.join("")}function fr(i){z||lr();for(var r,n=i.length,t=n%3,e="",o=[],u=16383,f=0,h=n-t;f<h;f+=u)o.push(jr(i,f,f+u>h?h:f+u));return t===1?(r=i[n-1],e+=_[r>>2],e+=_[r<<4&63],e+="=="):t===2&&(r=(i[n-2]<<8)+i[n-1],e+=_[r>>10],e+=_[r>>4&63],e+=_[r<<2&63],e+="="),o.push(e),o.join("")}function L(i,r,n,t,e){var o,u,f=e*8-t-1,h=(1<<f)-1,c=h>>1,p=-7,s=n?e-1:0,g=n?-1:1,w=i[r+s];for(s+=g,o=w&(1<<-p)-1,w>>=-p,p+=f;p>0;o=o*256+i[r+s],s+=g,p-=8);for(u=o&(1<<-p)-1,o>>=-p,p+=t;p>0;u=u*256+i[r+s],s+=g,p-=8);if(o===0)o=1-c;else{if(o===h)return u?NaN:(w?-1:1)*(1/0);u=u+Math.pow(2,t),o=o-c}return(w?-1:1)*u*Math.pow(2,o-t)}function xr(i,r,n,t,e,o){var u,f,h,c=o*8-e-1,p=(1<<c)-1,s=p>>1,g=e===23?Math.pow(2,-24)-Math.pow(2,-77):0,w=t?0:o-1,A=t?1:-1,D=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(f=isNaN(r)?1:0,u=p):(u=Math.floor(Math.log(r)/Math.LN2),r*(h=Math.pow(2,-u))<1&&(u--,h*=2),u+s>=1?r+=g/h:r+=g*Math.pow(2,1-s),r*h>=2&&(u++,h/=2),u+s>=p?(f=0,u=p):u+s>=1?(f=(r*h-1)*Math.pow(2,e),u=u+s):(f=r*Math.pow(2,s-1)*Math.pow(2,e),u=0));e>=8;i[n+w]=f&255,w+=A,f/=256,e-=8);for(u=u<<e|f,c+=e;c>0;i[n+w]=u&255,w+=A,u/=256,c-=8);i[n+w-A]|=D*128}var br={}.toString,wr=Array.isArray||function(i){return br.call(i)=="[object Array]"},rn=50;a.TYPED_ARRAY_SUPPORT=ar.TYPED_ARRAY_SUPPORT!==void 0?ar.TYPED_ARRAY_SUPPORT:!0;k();function k(){return a.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function d(i,r){if(k()<r)throw new RangeError("Invalid typed array length");return a.TYPED_ARRAY_SUPPORT?(i=new Uint8Array(r),i.__proto__=a.prototype):(i===null&&(i=new a(r)),i.length=r),i}function a(i,r,n){if(!a.TYPED_ARRAY_SUPPORT&&!(this instanceof a))return new a(i,r,n);if(typeof i=="number"){if(typeof r=="string")throw new Error("If encoding is specified then the first argument must be a string");return G(this,i)}return Er(this,i,r,n)}a.poolSize=8192;a._augment=function(i){return i.__proto__=a.prototype,i};function Er(i,r,n,t){if(typeof r=="number")throw new TypeError('"value" argument must not be a number');return typeof ArrayBuffer<"u"&&r instanceof ArrayBuffer?en(i,r,n,t):typeof r=="string"?tn(i,r,n):on(i,r)}a.from=function(i,r,n){return Er(null,i,r,n)};a.TYPED_ARRAY_SUPPORT&&(a.prototype.__proto__=Uint8Array.prototype,a.__proto__=Uint8Array,typeof Symbol<"u"&&Symbol.species&&a[Symbol.species]);function gr(i){if(typeof i!="number")throw new TypeError('"size" argument must be a number');if(i<0)throw new RangeError('"size" argument must not be negative')}function nn(i,r,n,t){return gr(r),r<=0?d(i,r):n!==void 0?typeof t=="string"?d(i,r).fill(n,t):d(i,r).fill(n):d(i,r)}a.alloc=function(i,r,n){return nn(null,i,r,n)};function G(i,r){if(gr(r),i=d(i,r<0?0:J(r)|0),!a.TYPED_ARRAY_SUPPORT)for(var n=0;n<r;++n)i[n]=0;return i}a.allocUnsafe=function(i){return G(null,i)};a.allocUnsafeSlow=function(i){return G(null,i)};function tn(i,r,n){if((typeof n!="string"||n==="")&&(n="utf8"),!a.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var t=mr(r,n)|0;i=d(i,t);var e=i.write(r,n);return e!==t&&(i=i.slice(0,e)),i}function V(i,r){var n=r.length<0?0:J(r.length)|0;i=d(i,n);for(var t=0;t<n;t+=1)i[t]=r[t]&255;return i}function en(i,r,n,t){if(r.byteLength,n<0||r.byteLength<n)throw new RangeError("'offset' is out of bounds");if(r.byteLength<n+(t||0))throw new RangeError("'length' is out of bounds");return n===void 0&&t===void 0?r=new Uint8Array(r):t===void 0?r=new Uint8Array(r,n):r=new Uint8Array(r,n,t),a.TYPED_ARRAY_SUPPORT?(i=r,i.__proto__=a.prototype):i=V(i,r),i}function on(i,r){if(y(r)){var n=J(r.length)|0;return i=d(i,n),i.length===0||r.copy(i,0,0,n),i}if(r){if(typeof ArrayBuffer<"u"&&r.buffer instanceof ArrayBuffer||"length"in r)return typeof r.length!="number"||Rn(r.length)?d(i,0):V(i,r);if(r.type==="Buffer"&&wr(r.data))return V(i,r.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function J(i){if(i>=k())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+k().toString(16)+" bytes");return i|0}a.isBuffer=Bn;function y(i){return!!(i!=null&&i._isBuffer)}a.compare=function(r,n){if(!y(r)||!y(n))throw new TypeError("Arguments must be Buffers");if(r===n)return 0;for(var t=r.length,e=n.length,o=0,u=Math.min(t,e);o<u;++o)if(r[o]!==n[o]){t=r[o],e=n[o];break}return t<e?-1:e<t?1:0};a.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};a.concat=function(r,n){if(!wr(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return a.alloc(0);var t;if(n===void 0)for(n=0,t=0;t<r.length;++t)n+=r[t].length;var e=a.allocUnsafe(n),o=0;for(t=0;t<r.length;++t){var u=r[t];if(!y(u))throw new TypeError('"list" argument must be an Array of Buffers');u.copy(e,o),o+=u.length}return e};function mr(i,r){if(y(i))return i.length;if(typeof ArrayBuffer<"u"&&typeof ArrayBuffer.isView=="function"&&(ArrayBuffer.isView(i)||i instanceof ArrayBuffer))return i.byteLength;typeof i!="string"&&(i=""+i);var n=i.length;if(n===0)return 0;for(var t=!1;;)switch(r){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return N(i).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return Br(i).length;default:if(t)return N(i).length;r=(""+r).toLowerCase(),t=!0}}a.byteLength=mr;function un(i,r,n){var t=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,r>>>=0,n<=r))return"";for(i||(i="utf8");;)switch(i){case"hex":return En(this,r,n);case"utf8":case"utf-8":return _r(this,r,n);case"ascii":return xn(this,r,n);case"latin1":case"binary":return wn(this,r,n);case"base64":return pn(this,r,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return gn(this,r,n);default:if(t)throw new TypeError("Unknown encoding: "+i);i=(i+"").toLowerCase(),t=!0}}a.prototype._isBuffer=!0;function v(i,r,n){var t=i[r];i[r]=i[n],i[n]=t}a.prototype.swap16=function(){var r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var n=0;n<r;n+=2)v(this,n,n+1);return this};a.prototype.swap32=function(){var r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var n=0;n<r;n+=4)v(this,n,n+3),v(this,n+1,n+2);return this};a.prototype.swap64=function(){var r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var n=0;n<r;n+=8)v(this,n,n+7),v(this,n+1,n+6),v(this,n+2,n+5),v(this,n+3,n+4);return this};a.prototype.toString=function(){var r=this.length|0;return r===0?"":arguments.length===0?_r(this,0,r):un.apply(this,arguments)};a.prototype.equals=function(r){if(!y(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:a.compare(this,r)===0};a.prototype.inspect=function(){var r="",n=rn;return this.length>0&&(r=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(r+=" ... ")),"<Buffer "+r+">"};a.prototype.compare=function(r,n,t,e,o){if(!y(r))throw new TypeError("Argument must be a Buffer");if(n===void 0&&(n=0),t===void 0&&(t=r?r.length:0),e===void 0&&(e=0),o===void 0&&(o=this.length),n<0||t>r.length||e<0||o>this.length)throw new RangeError("out of range index");if(e>=o&&n>=t)return 0;if(e>=o)return-1;if(n>=t)return 1;if(n>>>=0,t>>>=0,e>>>=0,o>>>=0,this===r)return 0;for(var u=o-e,f=t-n,h=Math.min(u,f),c=this.slice(e,o),p=r.slice(n,t),s=0;s<h;++s)if(c[s]!==p[s]){u=c[s],f=p[s];break}return u<f?-1:f<u?1:0};function Fr(i,r,n,t,e){if(i.length===0)return-1;if(typeof n=="string"?(t=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=e?0:i.length-1),n<0&&(n=i.length+n),n>=i.length){if(e)return-1;n=i.length-1}else if(n<0)if(e)n=0;else return-1;if(typeof r=="string"&&(r=a.from(r,t)),y(r))return r.length===0?-1:hr(i,r,n,t,e);if(typeof r=="number")return r=r&255,a.TYPED_ARRAY_SUPPORT&&typeof Uint8Array.prototype.indexOf=="function"?e?Uint8Array.prototype.indexOf.call(i,r,n):Uint8Array.prototype.lastIndexOf.call(i,r,n):hr(i,[r],n,t,e);throw new TypeError("val must be string, number or Buffer")}function hr(i,r,n,t,e){var o=1,u=i.length,f=r.length;if(t!==void 0&&(t=String(t).toLowerCase(),t==="ucs2"||t==="ucs-2"||t==="utf16le"||t==="utf-16le")){if(i.length<2||r.length<2)return-1;o=2,u/=2,f/=2,n/=2}function h(w,A){return o===1?w[A]:w.readUInt16BE(A*o)}var c;if(e){var p=-1;for(c=n;c<u;c++)if(h(i,c)===h(r,p===-1?0:c-p)){if(p===-1&&(p=c),c-p+1===f)return p*o}else p!==-1&&(c-=c-p),p=-1}else for(n+f>u&&(n=u-f),c=n;c>=0;c--){for(var s=!0,g=0;g<f;g++)if(h(i,c+g)!==h(r,g)){s=!1;break}if(s)return c}return-1}a.prototype.includes=function(r,n,t){return this.indexOf(r,n,t)!==-1};a.prototype.indexOf=function(r,n,t){return Fr(this,r,n,t,!0)};a.prototype.lastIndexOf=function(r,n,t){return Fr(this,r,n,t,!1)};function an(i,r,n,t){n=Number(n)||0;var e=i.length-n;t?(t=Number(t),t>e&&(t=e)):t=e;var o=r.length;if(o%2!==0)throw new TypeError("Invalid hex string");t>o/2&&(t=o/2);for(var u=0;u<t;++u){var f=parseInt(r.substr(u*2,2),16);if(isNaN(f))return u;i[n+u]=f}return u}function fn(i,r,n,t){return H(N(r,i.length-n),i,n,t)}function Ar(i,r,n,t){return H(yn(r),i,n,t)}function hn(i,r,n,t){return Ar(i,r,n,t)}function sn(i,r,n,t){return H(Br(r),i,n,t)}function cn(i,r,n,t){return H(dn(r,i.length-n),i,n,t)}a.prototype.write=function(r,n,t,e){if(n===void 0)e="utf8",t=this.length,n=0;else if(t===void 0&&typeof n=="string")e=n,t=this.length,n=0;else if(isFinite(n))n=n|0,isFinite(t)?(t=t|0,e===void 0&&(e="utf8")):(e=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var o=this.length-n;if((t===void 0||t>o)&&(t=o),r.length>0&&(t<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");e||(e="utf8");for(var u=!1;;)switch(e){case"hex":return an(this,r,n,t);case"utf8":case"utf-8":return fn(this,r,n,t);case"ascii":return Ar(this,r,n,t);case"latin1":case"binary":return hn(this,r,n,t);case"base64":return sn(this,r,n,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return cn(this,r,n,t);default:if(u)throw new TypeError("Unknown encoding: "+e);e=(""+e).toLowerCase(),u=!0}};a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function pn(i,r,n){return r===0&&n===i.length?fr(i):fr(i.slice(r,n))}function _r(i,r,n){n=Math.min(i.length,n);for(var t=[],e=r;e<n;){var o=i[e],u=null,f=o>239?4:o>223?3:o>191?2:1;if(e+f<=n){var h,c,p,s;switch(f){case 1:o<128&&(u=o);break;case 2:h=i[e+1],(h&192)===128&&(s=(o&31)<<6|h&63,s>127&&(u=s));break;case 3:h=i[e+1],c=i[e+2],(h&192)===128&&(c&192)===128&&(s=(o&15)<<12|(h&63)<<6|c&63,s>2047&&(s<55296||s>57343)&&(u=s));break;case 4:h=i[e+1],c=i[e+2],p=i[e+3],(h&192)===128&&(c&192)===128&&(p&192)===128&&(s=(o&15)<<18|(h&63)<<12|(c&63)<<6|p&63,s>65535&&s<1114112&&(u=s))}}u===null?(u=65533,f=1):u>65535&&(u-=65536,t.push(u>>>10&1023|55296),u=56320|u&1023),t.push(u),e+=f}return ln(t)}var sr=4096;function ln(i){var r=i.length;if(r<=sr)return String.fromCharCode.apply(String,i);for(var n="",t=0;t<r;)n+=String.fromCharCode.apply(String,i.slice(t,t+=sr));return n}function xn(i,r,n){var t="";n=Math.min(i.length,n);for(var e=r;e<n;++e)t+=String.fromCharCode(i[e]&127);return t}function wn(i,r,n){var t="";n=Math.min(i.length,n);for(var e=r;e<n;++e)t+=String.fromCharCode(i[e]);return t}function En(i,r,n){var t=i.length;(!r||r<0)&&(r=0),(!n||n<0||n>t)&&(n=t);for(var e="",o=r;o<n;++o)e+=_n(i[o]);return e}function gn(i,r,n){for(var t=i.slice(r,n),e="",o=0;o<t.length;o+=2)e+=String.fromCharCode(t[o]+t[o+1]*256);return e}a.prototype.slice=function(r,n){var t=this.length;r=~~r,n=n===void 0?t:~~n,r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),n<0?(n+=t,n<0&&(n=0)):n>t&&(n=t),n<r&&(n=r);var e;if(a.TYPED_ARRAY_SUPPORT)e=this.subarray(r,n),e.__proto__=a.prototype;else{var o=n-r;e=new a(o,void 0);for(var u=0;u<o;++u)e[u]=this[u+r]}return e};function E(i,r,n){if(i%1!==0||i<0)throw new RangeError("offset is not uint");if(i+r>n)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUIntLE=function(r,n,t){r=r|0,n=n|0,t||E(r,n,this.length);for(var e=this[r],o=1,u=0;++u<n&&(o*=256);)e+=this[r+u]*o;return e};a.prototype.readUIntBE=function(r,n,t){r=r|0,n=n|0,t||E(r,n,this.length);for(var e=this[r+--n],o=1;n>0&&(o*=256);)e+=this[r+--n]*o;return e};a.prototype.readUInt8=function(r,n){return n||E(r,1,this.length),this[r]};a.prototype.readUInt16LE=function(r,n){return n||E(r,2,this.length),this[r]|this[r+1]<<8};a.prototype.readUInt16BE=function(r,n){return n||E(r,2,this.length),this[r]<<8|this[r+1]};a.prototype.readUInt32LE=function(r,n){return n||E(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216};a.prototype.readUInt32BE=function(r,n){return n||E(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])};a.prototype.readIntLE=function(r,n,t){r=r|0,n=n|0,t||E(r,n,this.length);for(var e=this[r],o=1,u=0;++u<n&&(o*=256);)e+=this[r+u]*o;return o*=128,e>=o&&(e-=Math.pow(2,8*n)),e};a.prototype.readIntBE=function(r,n,t){r=r|0,n=n|0,t||E(r,n,this.length);for(var e=n,o=1,u=this[r+--e];e>0&&(o*=256);)u+=this[r+--e]*o;return o*=128,u>=o&&(u-=Math.pow(2,8*n)),u};a.prototype.readInt8=function(r,n){return n||E(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]};a.prototype.readInt16LE=function(r,n){n||E(r,2,this.length);var t=this[r]|this[r+1]<<8;return t&32768?t|4294901760:t};a.prototype.readInt16BE=function(r,n){n||E(r,2,this.length);var t=this[r+1]|this[r]<<8;return t&32768?t|4294901760:t};a.prototype.readInt32LE=function(r,n){return n||E(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24};a.prototype.readInt32BE=function(r,n){return n||E(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]};a.prototype.readFloatLE=function(r,n){return n||E(r,4,this.length),L(this,r,!0,23,4)};a.prototype.readFloatBE=function(r,n){return n||E(r,4,this.length),L(this,r,!1,23,4)};a.prototype.readDoubleLE=function(r,n){return n||E(r,8,this.length),L(this,r,!0,52,8)};a.prototype.readDoubleBE=function(r,n){return n||E(r,8,this.length),L(this,r,!1,52,8)};function m(i,r,n,t,e,o){if(!y(i))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>e||r<o)throw new RangeError('"value" argument is out of bounds');if(n+t>i.length)throw new RangeError("Index out of range")}a.prototype.writeUIntLE=function(r,n,t,e){if(r=+r,n=n|0,t=t|0,!e){var o=Math.pow(2,8*t)-1;m(this,r,n,t,o,0)}var u=1,f=0;for(this[n]=r&255;++f<t&&(u*=256);)this[n+f]=r/u&255;return n+t};a.prototype.writeUIntBE=function(r,n,t,e){if(r=+r,n=n|0,t=t|0,!e){var o=Math.pow(2,8*t)-1;m(this,r,n,t,o,0)}var u=t-1,f=1;for(this[n+u]=r&255;--u>=0&&(f*=256);)this[n+u]=r/f&255;return n+t};a.prototype.writeUInt8=function(r,n,t){return r=+r,n=n|0,t||m(this,r,n,1,255,0),a.TYPED_ARRAY_SUPPORT||(r=Math.floor(r)),this[n]=r&255,n+1};function W(i,r,n,t){r<0&&(r=65535+r+1);for(var e=0,o=Math.min(i.length-n,2);e<o;++e)i[n+e]=(r&255<<8*(t?e:1-e))>>>(t?e:1-e)*8}a.prototype.writeUInt16LE=function(r,n,t){return r=+r,n=n|0,t||m(this,r,n,2,65535,0),a.TYPED_ARRAY_SUPPORT?(this[n]=r&255,this[n+1]=r>>>8):W(this,r,n,!0),n+2};a.prototype.writeUInt16BE=function(r,n,t){return r=+r,n=n|0,t||m(this,r,n,2,65535,0),a.TYPED_ARRAY_SUPPORT?(this[n]=r>>>8,this[n+1]=r&255):W(this,r,n,!1),n+2};function $(i,r,n,t){r<0&&(r=4294967295+r+1);for(var e=0,o=Math.min(i.length-n,4);e<o;++e)i[n+e]=r>>>(t?e:3-e)*8&255}a.prototype.writeUInt32LE=function(r,n,t){return r=+r,n=n|0,t||m(this,r,n,4,4294967295,0),a.TYPED_ARRAY_SUPPORT?(this[n+3]=r>>>24,this[n+2]=r>>>16,this[n+1]=r>>>8,this[n]=r&255):$(this,r,n,!0),n+4};a.prototype.writeUInt32BE=function(r,n,t){return r=+r,n=n|0,t||m(this,r,n,4,4294967295,0),a.TYPED_ARRAY_SUPPORT?(this[n]=r>>>24,this[n+1]=r>>>16,this[n+2]=r>>>8,this[n+3]=r&255):$(this,r,n,!1),n+4};a.prototype.writeIntLE=function(r,n,t,e){if(r=+r,n=n|0,!e){var o=Math.pow(2,8*t-1);m(this,r,n,t,o-1,-o)}var u=0,f=1,h=0;for(this[n]=r&255;++u<t&&(f*=256);)r<0&&h===0&&this[n+u-1]!==0&&(h=1),this[n+u]=(r/f>>0)-h&255;return n+t};a.prototype.writeIntBE=function(r,n,t,e){if(r=+r,n=n|0,!e){var o=Math.pow(2,8*t-1);m(this,r,n,t,o-1,-o)}var u=t-1,f=1,h=0;for(this[n+u]=r&255;--u>=0&&(f*=256);)r<0&&h===0&&this[n+u+1]!==0&&(h=1),this[n+u]=(r/f>>0)-h&255;return n+t};a.prototype.writeInt8=function(r,n,t){return r=+r,n=n|0,t||m(this,r,n,1,127,-128),a.TYPED_ARRAY_SUPPORT||(r=Math.floor(r)),r<0&&(r=255+r+1),this[n]=r&255,n+1};a.prototype.writeInt16LE=function(r,n,t){return r=+r,n=n|0,t||m(this,r,n,2,32767,-32768),a.TYPED_ARRAY_SUPPORT?(this[n]=r&255,this[n+1]=r>>>8):W(this,r,n,!0),n+2};a.prototype.writeInt16BE=function(r,n,t){return r=+r,n=n|0,t||m(this,r,n,2,32767,-32768),a.TYPED_ARRAY_SUPPORT?(this[n]=r>>>8,this[n+1]=r&255):W(this,r,n,!1),n+2};a.prototype.writeInt32LE=function(r,n,t){return r=+r,n=n|0,t||m(this,r,n,4,2147483647,-2147483648),a.TYPED_ARRAY_SUPPORT?(this[n]=r&255,this[n+1]=r>>>8,this[n+2]=r>>>16,this[n+3]=r>>>24):$(this,r,n,!0),n+4};a.prototype.writeInt32BE=function(r,n,t){return r=+r,n=n|0,t||m(this,r,n,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),a.TYPED_ARRAY_SUPPORT?(this[n]=r>>>24,this[n+1]=r>>>16,this[n+2]=r>>>8,this[n+3]=r&255):$(this,r,n,!1),n+4};function yr(i,r,n,t,e,o){if(n+t>i.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function dr(i,r,n,t,e){return e||yr(i,r,n,4),xr(i,r,n,t,23,4),n+4}a.prototype.writeFloatLE=function(r,n,t){return dr(this,r,n,!0,t)};a.prototype.writeFloatBE=function(r,n,t){return dr(this,r,n,!1,t)};function Rr(i,r,n,t,e){return e||yr(i,r,n,8),xr(i,r,n,t,52,8),n+8}a.prototype.writeDoubleLE=function(r,n,t){return Rr(this,r,n,!0,t)};a.prototype.writeDoubleBE=function(r,n,t){return Rr(this,r,n,!1,t)};a.prototype.copy=function(r,n,t,e){if(t||(t=0),!e&&e!==0&&(e=this.length),n>=r.length&&(n=r.length),n||(n=0),e>0&&e<t&&(e=t),e===t||r.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("sourceStart out of bounds");if(e<0)throw new RangeError("sourceEnd out of bounds");e>this.length&&(e=this.length),r.length-n<e-t&&(e=r.length-n+t);var o=e-t,u;if(this===r&&t<n&&n<e)for(u=o-1;u>=0;--u)r[u+n]=this[u+t];else if(o<1e3||!a.TYPED_ARRAY_SUPPORT)for(u=0;u<o;++u)r[u+n]=this[u+t];else Uint8Array.prototype.set.call(r,this.subarray(t,t+o),n);return o};a.prototype.fill=function(r,n,t,e){if(typeof r=="string"){if(typeof n=="string"?(e=n,n=0,t=this.length):typeof t=="string"&&(e=t,t=this.length),r.length===1){var o=r.charCodeAt(0);o<256&&(r=o)}if(e!==void 0&&typeof e!="string")throw new TypeError("encoding must be a string");if(typeof e=="string"&&!a.isEncoding(e))throw new TypeError("Unknown encoding: "+e)}else typeof r=="number"&&(r=r&255);if(n<0||this.length<n||this.length<t)throw new RangeError("Out of range index");if(t<=n)return this;n=n>>>0,t=t===void 0?this.length:t>>>0,r||(r=0);var u;if(typeof r=="number")for(u=n;u<t;++u)this[u]=r;else{var f=y(r)?r:N(new a(r,e).toString()),h=f.length;for(u=0;u<t-n;++u)this[u+n]=f[u%h]}return this};var mn=/[^+\/0-9A-Za-z-_]/g;function Fn(i){if(i=An(i).replace(mn,""),i.length<2)return"";for(;i.length%4!==0;)i=i+"=";return i}function An(i){return i.trim?i.trim():i.replace(/^\s+|\s+$/g,"")}function _n(i){return i<16?"0"+i.toString(16):i.toString(16)}function N(i,r){r=r||1/0;for(var n,t=i.length,e=null,o=[],u=0;u<t;++u){if(n=i.charCodeAt(u),n>55295&&n<57344){if(!e){if(n>56319){(r-=3)>-1&&o.push(239,191,189);continue}else if(u+1===t){(r-=3)>-1&&o.push(239,191,189);continue}e=n;continue}if(n<56320){(r-=3)>-1&&o.push(239,191,189),e=n;continue}n=(e-55296<<10|n-56320)+65536}else e&&(r-=3)>-1&&o.push(239,191,189);if(e=null,n<128){if((r-=1)<0)break;o.push(n)}else if(n<2048){if((r-=2)<0)break;o.push(n>>6|192,n&63|128)}else if(n<65536){if((r-=3)<0)break;o.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((r-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return o}function yn(i){for(var r=[],n=0;n<i.length;++n)r.push(i.charCodeAt(n)&255);return r}function dn(i,r){for(var n,t,e,o=[],u=0;u<i.length&&!((r-=2)<0);++u)n=i.charCodeAt(u),t=n>>8,e=n%256,o.push(e),o.push(t);return o}function Br(i){return Kr(Fn(i))}function H(i,r,n,t){for(var e=0;e<t&&!(e+n>=r.length||e>=i.length);++e)r[e+n]=i[e];return e}function Rn(i){return i!==i}function Bn(i){return i!=null&&(!!i._isBuffer||Ir(i)||In(i))}function Ir(i){return!!i.constructor&&typeof i.constructor.isBuffer=="function"&&i.constructor.isBuffer(i)}function In(i){return typeof i.readFloatLE=="function"&&typeof i.slice=="function"&&Ir(i.slice(0,0))}a.from([239,187,191]),a.from([255,254]);var Tn=pr("<!> <!> <!> <!> <!> <!>",1),Un=pr('<!> <div class="container mx-auto"><h1 class="text-lg">Welcome to SvelteKit</h1> <!> <div class="grid grid-cols-1 md:grid-cols-3 gap-2"><!></div></div>',1);function Ln(i,r){Wr(r,!0);const[n,t]=Vr(),e=()=>Hr(l(o),"$csvData",n);T(U([]));let o=B(()=>Nr(()=>cr.csv2025.toCollection().toArray()));const{qrButtonClick:u,title:f,downloadButtonClick:h,uploadButtonClick:c}=kr();u.set(()=>{O.open()}),h.set(void 0),c.set(async()=>{e()&&await zr(e())}),f.set("Laptop In Stands dashboard");let p=B(()=>{if(!e())return[];let x=performance.now(),R=new Set;for(let Q of e())R.add(Q.teamNum);let M=Array.from(R);return console.log("teamlist",performance.now()-x),M}),s=T(void 0),g=T(void 0),w=T(void 0),A=T(void 0),D=T(void 0),Y=T(void 0),O;var X=Un(),q=er(X);Or(Gr(q,{onclose:x=>{console.log(x)}}),x=>O=x,()=>O);var K=I(q,2),Z=I(or(K),2);Jr(Z,{get teamList(){return l(p)},get blue1(){return l(s)},set blue1(x){S(s,U(x))},get blue2(){return l(g)},set blue2(x){S(g,U(x))},get blue3(){return l(w)},set blue3(x){S(w,U(x))},get red1(){return l(A)},set red1(x){S(A,U(x))},get red2(){return l(D)},set red2(x){S(D,U(x))},get red3(){return l(Y)},set red3(x){S(Y,U(x))}});var j=I(Z,2),Tr=or(j);{var Ur=x=>{var R=Tn(),M=er(R);const Q=B(()=>P(e(),l(s)));C(M,{get teamNum(){return l(s)},get data(){return l(Q)},spot:"Blue 1"});var b=I(M,2);const vr=B(()=>P(e(),l(g)));C(b,{get teamNum(){return l(g)},get data(){return l(vr)},spot:"Blue 2"});var rr=I(b,2);const Dr=B(()=>P(e(),l(w)));C(rr,{get teamNum(){return l(w)},get data(){return l(Dr)},spot:"Blue 3"});var nr=I(rr,2);const Sr=B(()=>P(e(),l(A)));C(nr,{get teamNum(){return l(A)},get data(){return l(Sr)},spot:"Red 1"});var ir=I(nr,2);const Cr=B(()=>P(e(),l(D)));C(ir,{get teamNum(){return l(D)},get data(){return l(Cr)},spot:"Red 2"});var Pr=I(ir,2);const Yr=B(()=>P(e(),l(Y)));C(Pr,{get teamNum(){return l(Y)},get data(){return l(Yr)},spot:"Red 3"}),tr(x,R)};Qr(Tr,x=>{var R;((R=e())==null?void 0:R.length)>0&&x(Ur)})}ur(j),ur(K),tr(i,X),$r(),t()}export{Ln as component,Nn as universal};
