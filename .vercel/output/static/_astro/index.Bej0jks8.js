function y(){}const J=t=>t;function xt(t,e){for(const n in e)t[n]=e[n];return t}function ot(t){return t()}function st(){return Object.create(null)}function x(t){t.forEach(ot)}function E(t){return typeof t=="function"}function wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function vt(t){return Object.keys(t).length===0}function K(t,...e){if(t==null){for(const i of e)i(void 0);return y}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ne(t){let e;return K(t,n=>e=n)(),e}function ie(t,e,n){t.$$.on_destroy.push(K(e,n))}function se(t,e,n,i){if(t){const s=lt(t,e,n,i);return t[0](s)}}function lt(t,e,n,i){return t[1]&&i?xt(n.ctx.slice(),t[1](i(e))):n.ctx}function re(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],c=Math.max(e.dirty.length,s.length);for(let r=0;r<c;r+=1)o[r]=e.dirty[r]|s[r];return o}return e.dirty|s}return e.dirty}function ce(t,e,n,i,s,o){if(s){const c=lt(e,n,i,o);t.p(c,s)}}function oe(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function le(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ue(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function ae(t){return t&&E(t.destroy)?t.destroy:y}function fe(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const Et=["",!0,1,"true","contenteditable"],ut=typeof window<"u";let Q=ut?()=>window.performance.now():()=>Date.now(),X=ut?t=>requestAnimationFrame(t):y;const S=new Set;function at(t){S.forEach(e=>{e.c(t)||(S.delete(e),e.f())}),S.size!==0&&X(at)}function Y(t){let e;return S.size===0&&X(at),{promise:new Promise(n=>{S.add(e={c:t,f:n})}),abort(){S.delete(e)}}}let I=!1;function Nt(){I=!0}function Tt(){I=!1}function At(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function kt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let l=0;l<e.length;l++){const _=e[l];_.claim_order!==void 0&&u.push(_)}e=u}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let u=0;u<e.length;u++){const l=e[u].claim_order,_=(s>0&&e[n[s]].claim_order<=l?s+1:At(1,s,h=>e[n[h]].claim_order,l))-1;i[u]=n[_]+1;const f=_+1;n[f]=u,s=Math.max(f,s)}const o=[],c=[];let r=e.length-1;for(let u=n[s]+1;u!=0;u=i[u-1]){for(o.push(e[u-1]);r>=u;r--)c.push(e[r]);r--}for(;r>=0;r--)c.push(e[r]);o.reverse(),c.sort((u,l)=>u.claim_order-l.claim_order);for(let u=0,l=0;u<c.length;u++){for(;l<o.length&&c[u].claim_order>=o[l].claim_order;)l++;const _=l<o.length?o[l]:null;t.insertBefore(c[u],_)}}function St(t,e){t.appendChild(e)}function ft(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ct(t){const e=Z("style");return e.textContent="/* empty */",Mt(ft(t),e),e.sheet}function Mt(t,e){return St(t.head||t,e),e.sheet}function Ot(t,e){if(I){for(kt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Dt(t,e,n){t.insertBefore(e,n||null)}function jt(t,e,n){I&&!n?Ot(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function j(t){t.parentNode&&t.parentNode.removeChild(t)}function _e(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Z(t){return document.createElement(t)}function _t(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function tt(t){return document.createTextNode(t)}function de(){return tt(" ")}function he(){return tt("")}function me(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function et(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Ht=["width","height"];function Lt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&Ht.indexOf(i)===-1?t[i]=e[i]:et(t,i,e[i])}function pe(t,e){for(const n in e)et(t,n,e[n])}function Pt(t,e){Object.keys(e).forEach(n=>{Rt(t,n,e[n])})}function Rt(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:et(t,e,n)}function ge(t){return/-/.test(t)?Pt:Lt}function ye(t){return t.dataset.svelteH}function Bt(t){return Array.from(t.childNodes)}function dt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ht(t,e,n,i,s=!1){dt(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const r=t[c];if(e(r)){const u=n(r);return u===void 0?t.splice(c,1):t[c]=u,s||(t.claim_info.last_index=c),r}}for(let c=t.claim_info.last_index-1;c>=0;c--){const r=t[c];if(e(r)){const u=n(r);return u===void 0?t.splice(c,1):t[c]=u,s?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,r}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function mt(t,e,n,i){return ht(t,s=>s.nodeName===e,s=>{const o=[];for(let c=0;c<s.attributes.length;c++){const r=s.attributes[c];n[r.name]||o.push(r.name)}o.forEach(c=>s.removeAttribute(c))},()=>i(e))}function be(t,e,n){return mt(t,e,n,Z)}function $e(t,e,n){return mt(t,e,n,_t)}function zt(t,e){return ht(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>tt(e),!0)}function xe(t){return zt(t," ")}function rt(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function we(t,e){const n=rt(t,"HTML_TAG_START",0),i=rt(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new G(e);dt(t);const s=t.splice(n,i-n+1);j(s[0]),j(s[s.length-1]);const o=s.slice(1,s.length-1);if(o.length===0)return new G(e);for(const c of o)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new G(e,o)}function qt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ft(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ve(t,e,n){~Et.indexOf(n)?Ft(t,e):qt(t,e)}function Ee(t,e){t.value=e??""}function pt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Ne(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const o=s.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(s)):o===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class It{is_svg=!1;e=void 0;n=void 0;t=void 0;a=void 0;constructor(e=!1){this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=_t(n.nodeName):this.e=Z(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Dt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(j)}}class G extends It{l=void 0;constructor(e=!1,n){super(e),this.e=this.n=null,this.l=n}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)jt(this.t,this.n[n],e)}}const B=new Map;let z=0;function Gt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ut(t,e){const n={stylesheet:Ct(e),rules:{}};return B.set(t,n),n}function q(t,e,n,i,s,o,c,r=0){const u=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=u){const g=e+(n-e)*o(m);l+=m*100+`%{${c(g,1-g)}}
`}const _=l+`100% {${c(n,1-n)}}
}`,f=`__svelte_${Gt(_)}_${r}`,h=ft(t),{stylesheet:p,rules:a}=B.get(h)||Ut(h,t);a[f]||(a[f]=!0,p.insertRule(`@keyframes ${f} ${_}`,p.cssRules.length));const d=t.style.animation||"";return t.style.animation=`${d?`${d}, `:""}${f} ${i}ms linear ${s}ms 1 both`,z+=1,f}function F(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),z-=s,z||Vt())}function Vt(){X(()=>{z||(B.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&j(e)}),B.clear())})}let H;function D(t){H=t}function L(){if(!H)throw new Error("Function called outside component initialization");return H}function Te(t){L().$$.on_mount.push(t)}function Ae(t){L().$$.on_destroy.push(t)}function ke(){const t=L();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=pt(e,n,{cancelable:i});return s.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}function Se(t,e){return L().$$.context.set(t,e),e}function Ce(t){return L().$$.context.get(t)}function Me(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const k=[],ct=[];let C=[];const V=[],gt=Promise.resolve();let W=!1;function yt(){W||(W=!0,gt.then(bt))}function Oe(){return yt(),gt}function M(t){C.push(t)}function De(t){V.push(t)}const U=new Set;let T=0;function bt(){if(T!==0)return;const t=H;do{try{for(;T<k.length;){const e=k[T];T++,D(e),Wt(e.$$)}}catch(e){throw k.length=0,T=0,e}for(D(null),k.length=0,T=0;ct.length;)ct.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];U.has(n)||(U.add(n),n())}C.length=0}while(k.length);for(;V.length;)V.pop()();W=!1,U.clear(),D(t)}function Wt(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}function Jt(t){const e=[],n=[];C.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),C=e}let O;function nt(){return O||(O=Promise.resolve(),O.then(()=>{O=null})),O}function v(t,e,n){t.dispatchEvent(pt(`${e?"intro":"outro"}${n}`))}const R=new Set;let b;function je(){b={r:0,c:[],p:b}}function He(){b.r||x(b.c),b=b.p}function Kt(t,e){t&&t.i&&(R.delete(t),t.i(e))}function Le(t,e,n,i){if(t&&t.o){if(R.has(t))return;R.add(t),b.c.push(()=>{R.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const it={duration:0};function Pe(t,e,n){const i={direction:"in"};let s=e(t,n,i),o=!1,c,r,u=0;function l(){c&&F(t,c)}function _(){const{delay:h=0,duration:p=300,easing:a=J,tick:d=y,css:m}=s||it;m&&(c=q(t,0,1,p,h,a,m,u++)),d(0,1);const g=Q()+h,$=g+p;r&&r.abort(),o=!0,M(()=>v(t,!0,"start")),r=Y(w=>{if(o){if(w>=$)return d(1,0),v(t,!0,"end"),l(),o=!1;if(w>=g){const N=a((w-g)/p);d(N,1-N)}}return o})}let f=!1;return{start(){f||(f=!0,F(t),E(s)?(s=s(i),nt().then(_)):_())},invalidate(){f=!1},end(){o&&(l(),o=!1)}}}function Re(t,e,n){const i={direction:"out"};let s=e(t,n,i),o=!0,c;const r=b;r.r+=1;let u;function l(){const{delay:_=0,duration:f=300,easing:h=J,tick:p=y,css:a}=s||it;a&&(c=q(t,1,0,f,_,h,a));const d=Q()+_,m=d+f;M(()=>v(t,!1,"start")),"inert"in t&&(u=t.inert,t.inert=!0),Y(g=>{if(o){if(g>=m)return p(0,1),v(t,!1,"end"),--r.r||x(r.c),!1;if(g>=d){const $=h((g-d)/f);p(1-$,$)}}return o})}return E(s)?nt().then(()=>{s=s(i),l()}):l(),{end(_){_&&"inert"in t&&(t.inert=u),_&&s.tick&&s.tick(1,0),o&&(c&&F(t,c),o=!1)}}}function Be(t,e,n,i){let o=e(t,n,{direction:"both"}),c=i?0:1,r=null,u=null,l=null,_;function f(){l&&F(t,l)}function h(a,d){const m=a.b-c;return d*=Math.abs(m),{a:c,b:a.b,d:m,duration:d,start:a.start,end:a.start+d,group:a.group}}function p(a){const{delay:d=0,duration:m=300,easing:g=J,tick:$=y,css:w}=o||it,N={start:Q()+d,b:a};a||(N.group=b,b.r+=1),"inert"in t&&(a?_!==void 0&&(t.inert=_):(_=t.inert,t.inert=!0)),r||u?u=N:(w&&(f(),l=q(t,c,a,m,d,g,w)),a&&$(0,1),r=h(N,m),M(()=>v(t,a,"start")),Y(P=>{if(u&&P>u.start&&(r=h(u,m),u=null,v(t,r.b,"start"),w&&(f(),l=q(t,c,r.b,r.duration,0,g,o.css))),r){if(P>=r.end)$(c=r.b,1-c),v(t,r.b,"end"),u||(r.b?f():--r.group.r||x(r.group.c)),r=null;else if(P>=r.start){const $t=P-r.start;c=r.a+r.d*g($t/r.duration),$(c,1-c)}}return!!(r||u)}))}return{run(a){E(o)?nt().then(()=>{o=o({direction:a?"in":"out"}),p(a)}):p(a)},end(){f(),r=u=null}}}function ze(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function qe(t){t&&t.c()}function Fe(t,e){t&&t.l(e)}function Qt(t,e,n){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),M(()=>{const o=t.$$.on_mount.map(ot).filter(E);t.$$.on_destroy?t.$$.on_destroy.push(...o):x(o),t.$$.on_mount=[]}),s.forEach(M)}function Xt(t,e){const n=t.$$;n.fragment!==null&&(Jt(n.after_update),x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Yt(t,e){t.$$.dirty[0]===-1&&(k.push(t),yt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ie(t,e,n,i,s,o,c=null,r=[-1]){const u=H;D(t);const l=t.$$={fragment:null,ctx:[],props:o,update:y,not_equal:s,bound:st(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:st(),dirty:r,skip_bound:!1,root:e.target||u.$$.root};c&&c(l.root);let _=!1;if(l.ctx=n?n(t,e.props||{},(f,h,...p)=>{const a=p.length?p[0]:h;return l.ctx&&s(l.ctx[f],l.ctx[f]=a)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](a),_&&Yt(t,f)),h}):[],l.update(),_=!0,x(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){Nt();const f=Bt(e.target);l.fragment&&l.fragment.l(f),f.forEach(j)}else l.fragment&&l.fragment.c();e.intro&&Kt(t.$$.fragment),Qt(t,e.target,e.anchor),Tt(),bt()}D(u)}class Ge{$$=void 0;$$set=void 0;$destroy(){Xt(this,1),this.$destroy=y}$on(e,n){if(!E(n))return y;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!vt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Zt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Zt);const A=[];function te(t,e){return{subscribe:ee(t,e).subscribe}}function ee(t,e=y){let n;const i=new Set;function s(r){if(wt(t,r)&&(t=r,n)){const u=!A.length;for(const l of i)l[1](),A.push(l,t);if(u){for(let l=0;l<A.length;l+=2)A[l][0](A[l+1]);A.length=0}}}function o(r){s(r(t))}function c(r,u=y){const l=[r,u];return i.add(l),i.size===1&&(n=e(s,o)||y),r(t),()=>{i.delete(l),i.size===0&&n&&(n(),n=null)}}return{set:s,update:o,subscribe:c}}function Ue(t,e,n){const i=!Array.isArray(t),s=i?[t]:t;if(!s.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const o=e.length<2;return te(n,(c,r)=>{let u=!1;const l=[];let _=0,f=y;const h=()=>{if(_)return;f();const a=e(i?l[0]:l,c,r);o?c(a):f=E(a)?a:y},p=s.map((a,d)=>K(a,m=>{l[d]=m,_&=~(1<<d),u&&h()},()=>{_|=1<<d}));return u=!0,h(),function(){x(p),f(),u=!1}})}function Ve(t){return{subscribe:t.subscribe.bind(t)}}export{$e as $,ne as A,je as B,He as C,ie as D,ct as E,ae as F,me as G,G as H,x as I,qe as J,Fe as K,Qt as L,Xt as M,de as N,xe as O,tt as P,zt as Q,_e as R,Ge as S,Ae as T,te as U,ke as V,Me as W,ge as X,E as Y,Ce as Z,_t as _,Ot as a,pe as a0,Ee as a1,Ve as a2,Oe as a3,Se as a4,Re as a5,M as a6,Pe as a7,Be as a8,qt as a9,ve as aa,fe as ab,J as ac,ze as ad,De as ae,ye as af,K as ag,Z as b,we as c,j as d,he as e,be as f,et as g,Ne as h,Ie as i,jt as j,se as k,xt as l,Bt as m,y as n,Te as o,Lt as p,oe as q,re as r,wt as s,Kt as t,ce as u,Le as v,ue as w,le as x,Ue as y,ee as z};