import{r as m}from"./index.CSLRt44l.js";import{e as wt,S as ft,R as ht,u as xt,a as E,b as At,c as Nt,p as Mt,E as kt,s as Rt,r as pt}from"./evault-card.B0tpTjC-.js";import"./index.CDy06niU.js";import"./jsx-runtime.Biu9vCfE.js";import"./preload-helper.CYoFR9qU.js";import"./motion.CMeWhFB3.js";import"./bundle-mjs.BP0dgA5G.js";const dt=Object,D=Map,P=Set,z=P.prototype.has,Lt=P.prototype.add,j=D.prototype.has,Z=D.prototype.get,K=D.prototype.set,k=1,U=2,R=4,I=8,Pt=16,Ht=32,C="__t",B="__p",Y="__e",vt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ot="http://www.w3.org/1999/xlink",jt="http://www.w3.org/2000/xmlns/",It=120,Ft=new P(["href","list","form","tabIndex","download"]),Dt=new P(["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","isindex","keygen","link","menuitem","meta","nextid","param","source","track","wbr"]);if(typeof window>"u")throw new Error("See http://million.dev/docs/install to install the compiler.");const T=document;T.createElement("template");const mt=T.createElement("template"),Kt=mt.content,tt=T.createElementNS("http://www.w3.org/2000/svg","svg"),A=Node.prototype,V=Element.prototype,Vt=CharacterData.prototype,G=dt.getOwnPropertyDescriptor,O=A.insertBefore,gt=A.cloneNode,Gt=A.replaceChild,Wt=V.remove,Xt=A.addEventListener,Ut=V.removeAttribute,et=V.setAttribute,nt=V.setAttributeNS,Yt=G(A,"textContent").set,bt=G(A,"firstChild").get,zt=G(A,"nextSibling").get,qt=G(Vt,"data").set,Jt=(e,t)=>{const n=t?tt:mt;return n.innerHTML=e,(t?tt:Kt).firstChild};T[Y]=new P;const lt=(e,t,n)=>{let r=t.toLowerCase(),p=!1;r.endsWith("capture")&&(r=r.slice(0,-7),p=!0);const f=`$$${r}`;z.call(T[Y],r)||(Xt.call(T,r,l=>{let c=l.target;for(;c;){const s=c[f];s&&(dt.defineProperty(l,"currentTarget",{configurable:!0,get(){return c}}),s(l)),c=c.parentNode}},{capture:p}),Lt.call(T[Y],r));const o=l=>{l?"key"in l&&l.key===e[f]?.key||(e[f]=l):e[f]=null};return o(n),o},w=(e,t)=>{let n=bt.call(e);if(t)for(let r=0;r<t&&n;++r)n=zt.call(n);return n},rt=new WeakSet,yt=e=>{if(rt.has(e))return;e.nodeType===8&&e.parentNode?.removeChild(e);let t=bt.call(e);for(;t;)yt(t),t=t.nextSibling;rt.add(e)},it=(e,t,n)=>{const r=T.createTextNode(t),p=w(e,n);return O.call(e,r,p),r},Qt=(e,t)=>{qt.call(e,t)},v=(e,t,n)=>{typeof n!="number"||vt.test(t)?e.style[t]=n:typeof n=="string"?e.style.cssText=n:t.startsWith("-")?e.style.setProperty(t,String(n)):n==null?e.style[t]="":e.style[t]=`${String(n)}px`},st=(e,t,n)=>{t=t.replace(/xlink(?:H|:h)/,"h").replace(/sName$/,"s"),t.startsWith("xmlns")?nt.call(e,jt,t,String(n)):t.startsWith("xlink")&&nt.call(e,Ot,"href",String(n))},ct=(e,t,n)=>{const r=n==null;if(n=r?"":n,t in e&&e[t]!==void 0&&e[t]!==null&&!(e instanceof SVGElement)&&z.call(Ft,t))try{e[t]=n}catch{}else!r&&n!==""&&(n!==!1||t.includes("-"))?et.call(e,t,String(n)):Ut.call(e,t);const p=e instanceof HTMLInputElement,f=e instanceof HTMLSelectElement,o=e instanceof HTMLTextAreaElement;t==="value"&&(p||f||o)&&(et.call(e,t,String(n)),e.value=n)};var Zt=Object.defineProperty,Bt=(e,t,n)=>t in e?Zt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,S=(e,t,n)=>(Bt(e,typeof t!="symbol"?t+"":t,n),n);class L{constructor(){S(this,"r"),S(this,"e"),S(this,"l"),S(this,"g"),S(this,"_u"),S(this,"_t"),S(this,"d"),S(this,"k"),S(this,"c")}}const $t=(e,t=[],n=[])=>{if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="bigint"||e===!0)return String(e);if(e==null||e===!1)return"";if(typeof e=="object"&&"$"in e)return t.push({p:n,e:[{t:k,n:null,v:null,h:e.$,i:0,l:null,p:null,b:null}],i:[]}),"<slot/>";let r="",p="";const f={p:n,e:[],i:[]};for(let l in e.props){const c=e.props[l];if(!(l==="key"||l==="ref"||l==="children")){if(l==="className"&&(l="class"),l==="htmlFor"&&(l="for"),l.startsWith("on")){"$"in c?f.e.push({t:R,n:l.slice(2),v:null,h:c.$,i:null,l:null,p:null,b:null}):f.i.push({t:R,n:l.slice(2),v:null,h:null,i:null,l:c,p:null,b:null});continue}if(c){if(typeof c=="object"&&"$"in c){l==="style"?f.e.push({t:I,n:l,v:null,h:c.$,i:null,l:null,p:null,b:null}):l.charCodeAt(0)===It?f.e.push({t:Pt,n:l,v:null,h:c.$,i:null,l:null,p:null,b:null}):f.e.push({t:U,n:l,v:null,h:c.$,i:null,l:null,p:null,b:null});continue}if(l==="style"&&typeof c=="object"){let s="";for(const u in c){if(typeof c[u]=="object"){f.e.push({t:I,n:u,v:null,h:c[u].$,i:null,l:null,p:null,b:null});continue}let h="";for(let i=0,a=u.length;i<a;++i){const d=u.charCodeAt(i);d<97?h+=`-${String.fromCharCode(d+32)}`:h+=u[i]}s+=`${h}:${String(c[u])};`}r+=` style="${s}"`;continue}r+=` ${l}="${String(c)}"`}}}if(z.call(Dt,e.type))return f.e.length&&t.push(f),`<${e.type}${r} />`;let o=!1;for(let l=0,c=e.props.children?.length||0,s=0;l<c;++l){const u=e.props.children?.[l];if(u==null||u===!1)continue;if(typeof u=="object"&&"$"in u){f.e.push({t:k,n:null,v:null,h:u.$,i:l,l:null,p:null,b:null});continue}if(u instanceof L){f.i.push({t:Ht,n:null,v:null,h:null,i:l,l:null,p:null,b:u});continue}if(typeof u=="string"||typeof u=="number"||typeof u=="bigint"){const i=typeof u=="number"||typeof u=="bigint"?String(u):u;if(o){f.i.push({t:k,n:null,v:i,h:null,i:l,l:null,p:null,b:null});continue}o=!0,p+=i,s++;continue}o=!1;const h=n.slice();h.push(s++),p+=$t(u,t,h)}return(f.i.length||f.e.length)&&t.push(f),`<${e.type}${r}>${p}</${e.type}>`};var te=Object.defineProperty,ee=(e,t,n)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ne=(e,t,n)=>(ee(e,typeof t!="symbol"?t+"":t,n),n);const ot=e=>new _t(e);class _t extends L{constructor(t){super(),ne(this,"b"),this.b=t}v(){}p(t){const n=this.b,r=t.b,p=n.length,f=r.length,o=this.t();if(this===t||f===0&&p===0)return o;if(this.b=r,f===0)return le.call(this),o;if(p===0)return J.call(t,o),o;let l=0,c=0,s=p-1,u=f-1,h=n[0],i=r[0],a=n[s],d=r[u],g;for(;l<=s&&c<=u;){if(!h){h=n[++l];continue}if(!a){a=n[--s];continue}const b=h.k,_=i.k;if(b===_){M.call(h,i),r[c]=h,h=n[++l],i=r[++c];continue}const W=a.k,$=d.k;if(W===$){M.call(a,d),r[u]=a,a=n[--s],d=r[--u];continue}if(b===$){M.call(h,d),r[u]=h;const y=r[u+1];X.call(h,y,y?.l||null),h=n[++l],d=r[--u];continue}if(W===_){M.call(a,i),r[c]=a;const y=n[l];X.call(a,y,y?.l||null),a=n[--s],i=r[++c];continue}if(!g){g=new D;for(let y=l;y<=s;y++)K.call(g,n[y].k,y)}const N=g.get(_);if(N===void 0)x.call(i,o,h.l||null);else{const y=n[N];X.call(y,h,null),M.call(y,i),r[c]=y,n[N]=null}i=r[++c]}if(l<=s||c<=u)if(l>s){const b=r[u+1];for(let _=c;_<=u;++_)x.call(r[_],o,b?b.l:null)}else for(let b=l;b<=s;++b)F.call(n[b]);return o}m(t,n=null){if(this._t)return this._t;for(let r=0,p=this.b.length;r<p;++r){const f=this.b[r];x.call(f,t,n)}return this._t=t,t}x(){const t=this.t();if(t)Yt.call(t,"");else for(let n=0,r=this.b.length;n<r;++n)F.call(this.b[n]);this.b=[]}u(){return!0}s(){return this.b.map(t=>t.s()).join("")}t(){return this._t||(this._t=this.b[0].t()),this._t}}const q=_t.prototype,J=q.m,St=q.p,le=q.x,re=new Proxy({},{get(e,t){return{$:t}}}),Q=(e,t,n,r)=>{const p=e(re),f=[],o=Jt($t(t?t(p):p,f),r);return yt(o),(l,c,s)=>new Ct(o,f,l,c??l?.key??null,s??n??null,null)},ie=(e,t,n)=>"b"in e&&t?J.call(e,t,null):x.call(e,t,null,n),Et=(e,t)=>{if(("b"in e||"b"in t)&&St.call(e,t),e.l||x.call(e,void 0,null,null),e.k&&e.k===t.k||e.r===t.r)return M.call(e,t);const n=x.call(t,e.t(),e.l,null);return F.call(e),e.k=t.k,n};class Ct extends L{constructor(t,n,r,p,f,o){super(),this.r=t,this.d=r,this.e=n,this.k=p,this.c=Array(n.length),f?this._u=f:this._u=null,o?this.g=o:this.g=null}m(t,n=null,r){if(this.l)return this.l;const p=r??gt.call(this.r,!0),f=this.g?.(p);f&&(this.c=f);for(let o=0,l=this.e.length;o<l;++o){const c=this.e[o],s=f?.[o]??ut(c.p,p,this.c,o);for(let h=0,i=c.e.length;h<i;++h){const a=c.e[h],d=this.d[a.h];if(a.t&k){if(d instanceof L){const g=w(s,a.i);r?d.m(s,g,g):d.m(s,g);continue}if(s[C]||(s[C]=new Array(i)),d&&typeof d=="object"&&"foreign"in d){if(r){const b=w(s,a.i);d.reset(b)}const g=d.current;s[C][h]=g,r||O.call(s,g,w(s,a.i));continue}if(r){s[C][h]=w(s,a.i);continue}s[C][h]=it(s,d==null||d===!1?"":String(d),a.i)}else if(a.t&R){const g=lt(s,a.n,d);s[B+a.n]=g}else if(a.t&U)ct(s,a.n,d);else if(a.t&I)if(typeof d=="string"||typeof d=="number")v(s,a.n,d);else for(const g in d)v(s,g,d[g]);else st(s,a.n,d)}const u=c.i?.length;if(u)for(let h=0;h<u;++h){const i=c.i[h];if(i.t&k)i.v&&!r&&it(s,i.v,i.i);else if(i.t&R)lt(s,i.n,i.l);else{const a=w(s,i.i);r?i.b.m(s,a,a):i.b.m(s,a)}}}return t&&!r&&O.call(t,p,n),this.l=p,p}p(t){const n=this.l;if(!t.d)return n;const r=this.d;if(!se.call(this,r,t.d))return n;this.d=t.d;for(let p=0,f=this.e.length;p<f;++p){const o=this.e[p],l=this.c[p]??ut(o.p,n,this.c,p);for(let c=0,s=o.e.length;c<s;++c){const u=o.e[c],h=r[u.h],i=t.d[u.h];if(i!==h){if(u.t&R){l[B+u.n](i);continue}if(u.t&k){if(h instanceof L){const a=t.e?.[p]?.e[c],d=t.d[a.h];h.p(d);continue}if(i&&typeof i=="object"&&"foreign"in i){const a=l[C][c];if(i.unstable&&h!==i){const d=i.current;l[C][c]=d,Gt.call(l,d,a)}else i.current=a;continue}Qt(l[C][c],i==null||i===!1?"":String(i))}else if(u.t&U)ct(l,u.n,i);else if(u.t&I)if(typeof i=="string"||typeof i=="number")v(l,u.n,i);else for(const a in i)i[a]!==h[a]&&v(l,a,i[a]);else st(l,u.n,i)}}}return n}v(t=null,n=null){O.call(this.t(),this.l,t?t.l:n)}x(){Wt.call(this.l),this.l=null}u(t,n){return this._u?this._u(t,n):!0}s(){return String(this.l?.outerHTML)}t(){return this._t||(this._t=this.l?.parentElement),this._t}}const ut=(e,t,n,r)=>{const p=e.length;if(!p)return t;const f=n&&r!==void 0;if(f&&n[r])return n[r];for(let o=0;o<p;++o){const l=e[o];t=w(t,l)}return f&&(n[r]=t),t},H=Ct.prototype,x=H.m,M=H.p,X=H.v,F=H.x,se=H.u,Tt=(e,t={})=>{const n=t?.experimental_noSlot??wt.noSlot;let r=t?.block;const p=t?.svg?ft:ht;e&&(r=Q(e,xt,t?.shouldUpdate,t?.svg));const f=(o,l)=>{const c=At(),s=Nt(),u=o._hmr,h=m.useRef(null),i=m.useRef(null),a=m.useRef([]);o=Mt(o,l,a.current),i.current?.(o);const d=m.useCallback(()=>{if(!h.current&&!n)return;const $=r(o,o.key);return u&&h.current?.textContent&&(h.current.textContent=""),n&&(h.current=s.current?.el??c.current?.el,(o.scoped||s.current&&c.current&&s.current.depth>c.current.depth)&&(h.current=c.current.el),h.current.childNodes.length&&console.error(new Error(`\`experimental_options.noSlot\` does not support having siblings at the moment.
The block element should be the only child of the \`${gt.call(h.current).outerHTML}\` element.
To avoid this error, \`experimental_options.noSlot\` should be false`))),(i.current===null||u)&&(x.call($,h.current,null),i.current=N=>{Et($,r(N,N.key,t?.shouldUpdate))}),()=>{F.call($)}},[]),g=m.useMemo(()=>n?null:m.createElement(t?.as??p,{ref:h}),[]),b=a.current.length,_=new Array(b);for(let $=0;$<b;++$)_[$]=a.current[$]?.portal;return m.createElement(m.Fragment,{},g,m.createElement(kt,{effect:d,deps:u?[u]:[]}),_)};return j.call(E,f)||K.call(E,f,Tt),t?.name&&(e&&(e.displayName=`Million(Render(${t.name}))`),f.displayName=`Million(Block(${t.name}))`),f},ce=({each:e,children:t,memo:n,svg:r,as:p,...f})=>{const o=m.useRef(null),[l]=m.useState(()=>({current:Array(e.length)})),c=m.useRef(null),s=m.useRef({each:null,children:null,mounted:!1}),[,u]=m.useState(!1);if(c.current&&(e!==s.current.each||!n)){const a=at(e,t,s,l,n);St.call(c.current,ot(a))}const h=r?ft:ht,i=m.createElement(m.Fragment,null,m.createElement(p??h,{...f,ref:o}),...l.current.map(a=>a.portal));return m.useEffect(()=>{if(!o.current||c.current||s.current.mounted)return;const a=at(e,t,s,l,n);c.current=ot(a),j.call(E,i)||K.call(E,i,c.current),J.call(c.current,o.current),s.current.mounted=!0,u(!0)},[o.current]),i},oe=m.memo,ye=oe(ce),at=(e,t,n,r,p)=>{const f=Array(e.length),o=n.current;for(let l=0,c=e.length;l<c;++l){if(p&&o.each&&o.each[l]===e[l]){f[l]=o.children?.[l];continue}const s=t(e[l],l);if(j.call(E,s.type)){o.block||(o.block=Z.call(E,s.type)),f[l]=o.block(s.props,r,l);continue}if(typeof s.type=="function"&&"_c"in s.type){const i=s.type(s.props);if(j.call(E,i.type)){const a=Z.call(E,i.type);if(typeof a=="function"){f[l]=a(i.props);continue}}}const u=Q(i=>i?.scope),h=(i,a,d)=>u({scope:pt(m.createElement(s.type,i),!1,a.current,d)},s.key?String(s.key):void 0);K.call(E,s.type,h),o.block=h,f[l]=h(s.props,r,l)}return o.each=e,o.children=f,f};function ue(e,t){return e===t||e!==e&&t!==t}function ae(e,t){for(const n in e)if(!ue(e[n],t[n]))return!0;return!1}function $e(e,{portals:t,...n}){const r=`CompiledBlock(Inner(${n.name}))`,p=Tt(l=>e(l),{...n,scoped:void 0,name:r,shouldUpdate:ae}),f=t?.length||0,o=t&&f>0?l=>{const c=m.useContext(Rt),[s]=m.useState(()=>[]),u={...l,scoped:c};for(let i=0;i<f;i++){const a=t[i],d=pt(u[a],!1,s,i);u[a]=d}const h=[];for(let i=0,a=s.length;i<a;i++)h[i]=s[i].portal;return m.createElement(m.Fragment,null,m.createElement(p,u),h)}:l=>m.createElement(p,l);return n.name&&(o.displayName=`Million(CompiledBlock(Outer(${n.name})))`),o}const _e={block:Q,patch:Et,mount:ie};typeof window<"u"&&(window.__MILLION_DATA__={version:"3.0.6"});export{ye as For,_e as INTERNALS,E as REGISTRY,Tt as block,$e as compiledBlock,yt as removeComments,pt as renderReactScope,xt as unwrap};
