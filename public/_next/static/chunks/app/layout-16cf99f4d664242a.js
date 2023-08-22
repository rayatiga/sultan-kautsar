(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9409:function(e,t,r){Promise.resolve().then(r.bind(r,8919)),Promise.resolve().then(r.bind(r,7826)),Promise.resolve().then(r.bind(r,8302)),Promise.resolve().then(r.bind(r,9201)),Promise.resolve().then(r.bind(r,9380)),Promise.resolve().then(r.t.bind(r,7402,23)),Promise.resolve().then(r.t.bind(r,877,23))},7826:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var a=r(9268);r(6006);var i=r(8121),o=r(7964),n=r(5846),s=r.n(n),l=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,a,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(a=e(t[r]))&&(i&&(i+=" "),i+=a);else for(r in t)t[r]&&(i&&(i+=" "),i+=r)}return i}(e))&&(a&&(a+=" "),a+=t);return a},c=r(9201);function d(){let{activeSection:e,setActiveSection:t,setTimeOfLastClick:r}=(0,c.useActiveSectionContext)();return(0,a.jsxs)("header",{className:"z-[999] relative",children:[(0,a.jsx)(i.E.div,{className:"fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75",initial:{y:-100,x:"-50%",opacity:0},animate:{y:0,x:"-50%",opacity:1}}),(0,a.jsx)("nav",{className:"flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0",children:(0,a.jsx)("ul",{className:"flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5",children:o.Ok.map(o=>(0,a.jsx)(i.E.li,{className:"h-3/4 flex items-center justify-center relative",initial:{y:-100,opacity:0},animate:{y:0,opacity:1},children:(0,a.jsxs)(s(),{className:l("flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",{"text-gray-950 dark:text-gray-200":e===o.name}),href:o.hash,onClick:()=>{t(o.name),r(Date.now())},children:[o.name,o.name===e&&(0,a.jsx)(i.E.span,{className:"bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800",layoutId:"activeSection",transition:{type:"spring",stiffness:380,damping:30}})]})},o.hash))})})]})}},8302:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return n}});var a=r(9268),i=r(9380);r(6006);var o=r(8136);function n(){let{theme:e,toggleTheme:t}=(0,i.useTheme)();return(0,a.jsx)("button",{className:"fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950",onClick:t,children:"light"===e?(0,a.jsx)(o.eSY,{}):(0,a.jsx)(o.s1t,{})})}},9201:function(e,t,r){"use strict";r.r(t),r.d(t,{ActiveSectionContext:function(){return o},default:function(){return n},useActiveSectionContext:function(){return s}});var a=r(9268),i=r(6006);let o=(0,i.createContext)(null);function n(e){let{children:t}=e,[r,n]=(0,i.useState)("Home"),[s,l]=(0,i.useState)(0);return(0,a.jsx)(o.Provider,{value:{activeSection:r,setActiveSection:n,timeOfLastClick:s,setTimeOfLastClick:l},children:t})}function s(){let e=(0,i.useContext)(o);if(null===e)throw Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");return e}},9380:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return n},useTheme:function(){return s}});var a=r(9268),i=r(6006);let o=(0,i.createContext)(null);function n(e){let{children:t}=e,[r,n]=(0,i.useState)("light");return(0,i.useEffect)(()=>{let e=window.localStorage.getItem("theme");e?(n(e),"dark"===e&&document.documentElement.classList.add("dark")):window.matchMedia("(prefers-color-scheme: dark)").matches&&(n("dark"),document.documentElement.classList.add("dark"))},[]),(0,a.jsx)(o.Provider,{value:{theme:r,toggleTheme:()=>{"light"===r?(n("dark"),window.localStorage.setItem("theme","dark"),document.documentElement.classList.add("dark")):(n("light"),window.localStorage.setItem("theme","light"),document.documentElement.classList.remove("dark"))}},children:t})}function s(){let e=(0,i.useContext)(o);if(null===e)throw Error("useTheme must be used within a ThemeContextProvider");return e}},7964:function(e,t,r){"use strict";r.d(t,{$c:function(){return n},Ok:function(){return o},nD:function(){return s},ZU:function(){return l}});var a=r(6006),i=r(7782);let o=[{name:"Home",hash:"#home"},{name:"About",hash:"#about"},{name:"Projects",hash:"#projects"},{name:"Skills",hash:"#skills"},{name:"Experience",hash:"#experience"},{name:"Contact",hash:"#contact"}],n=[{title:"Rayatiga",location:"Magelang, ID",description:"I am establishing an SME business (Rayatiga) that operates in the field of information technology, particularly specializing in web development.",icon:a.createElement(i.l2j),date:"2019 - present"},{title:"Telkom University",location:"Bandung, ID",description:"I graduated after 3.5 years of studying IT. I immediately found a job as a web developer.",icon:a.createElement(i.qWM),date:"2019 - 2023"},{title:"PT. Breef Digital Indonesia",location:"Yogyakarta, ID",description:"I worked as a web developer until present. I also upskilled to the full stack development.",icon:a.createElement(i.MM9),date:"2023 - present"}],s=[{title:"Rayatiga",description:"I work in my own business, handling everything from server procurement to the client-facing interface.",tags:["Business","Cloud","HTML","CSS","JavaScript","Go"],imageUrl:{src:"/_next/static/media/rayatiga.df190b36.png",height:1080,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAP1BMVEX9/v39/f38/fz8/Pz7/Pv7+/v7+vv6+vr6+Pr5+Pn69/r4+Pj4+Pf59vn29vb18vXy8vL08PT17fXt7O3o4ugD2avZAAAALElEQVR42gWAhxGAIADEXmLsYoH9Z+WiBayGaz+2cyVT69/zVlLufxaIZBEdGywBJtJ8fnYAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}},{title:"Pawonkos799",description:"Business and e-commerce website for UMK Pawonkos799 built with CMS WordPress with LAMP Stack. Also registred by DJKI.",tags:["Cloud","UI/UX","LAMP","WordPress","Bootstrap"],imageUrl:{src:"/_next/static/media/pawonkos799.e48f151f.png",height:1080,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAhklEQVR42mNYOHP60vlzNq1btnvb+t2b121fu2LbisXrVixlSPCzTg2wKIwyn1adPrkkvjHVrbEkuTozjCEtzKkwWL/UlGFefsS0+szaTL+qzMj6/ASG5Yvm7Vi/dN/W1ft2bjiwa/PhPVs3r122Yukihn/////9B0Z///39B0JAkX///wMAC4lLDPemRvAAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}},{title:"Makgleng Coffee",description:"Business and e-commerce website for UMK Makgleng Coffee Indonesia built with CMS WordPress with LAMP Stack.",tags:["Cloud","UI/UX","LAMP","WordPress","PHP"],imageUrl:{src:"/_next/static/media/makglengcoffee.45928ab5.png",height:1080,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAhElEQVR42mNIjItYtnTR5MmTOrs6unuAsLO3ra6zsZDBxd6srjy7paGqtbGmo6W2vaG4viQpLyWIQVtNydxYK8XLojjApjzCOTPQ3tRER1tDlUFWVVVHS93awsjJztzW0tjK3NDCSMdEX5MhwExLVV3V2lTX3c7Y3d7ExcbI0kTHQEcDAI4kJuumzF6nAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5}}],l=["Business Development","Google Cloud","Amazon Cloud","JavaScript","Typescript","WordPress","Next.js","Drupal","Moodle","jQuery","HUGO","HTML","CSS","PHP","SQL","GO","C"]},7402:function(){},877:function(e){e.exports={style:{fontFamily:"'__Space_Grotesk_271d53', '__Space_Grotesk_Fallback_271d53'",fontStyle:"normal"},className:"__className_271d53"}},8919:function(e,t,r){"use strict";let a,i;r.r(t),r.d(t,{CheckmarkIcon:function(){return G},ErrorIcon:function(){return $},LoaderIcon:function(){return R},ToastBar:function(){return ee},ToastIcon:function(){return K},Toaster:function(){return ei},default:function(){return eo},resolveValue:function(){return E},toast:function(){return _},useToaster:function(){return H},useToasterStore:function(){return D}});var o,n=r(6006);let s={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,m=(e,t)=>{let r="",a="",i="";for(let o in e){let n=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+n+";":a+="f"==o[1]?m(n,o):o+"{"+m(n,"k"==o[1]?"":t)+"}":"object"==typeof n?a+=m(n,t?t.replace(/([^,])+/g,e=>o.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=n&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=m.p?m.p(o,n):o+":"+n+";")}return r+(t&&i?t+"{"+i+"}":i)+a},p={},f=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+f(e[r]);return t}return e},h=(e,t,r,a,i)=>{var o;let n=f(e),s=p[n]||(p[n]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(n));if(!p[s]){let t=n!==e?e:(e=>{let t,r,a=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?a.shift():t[3]?(r=t[3].replace(u," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);p[s]=m(i?{["@keyframes "+s]:t}:t,r?"":"."+s)}let l=r&&p.g?p.g:null;return r&&(p.g=p[s]),o=p[s],l?t.data=t.data.replace(l,o):-1===t.data.indexOf(o)&&(t.data=a?o+t.data:t.data+o),s},g=(e,t,r)=>e.reduce((e,a,i)=>{let o=t[i];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":m(e,""):!1===e?"":e}return e+a+(null==o?"":o)},"");function b(e){let t=this||{},r=e.call?e(t.p):e;return h(r.unshift?r.raw?g(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}b.bind({g:1});let y,v,x,A=b.bind({k:1});function w(e,t){let r=this||{};return function(){let a=arguments;function i(o,n){let s=Object.assign({},o),l=s.className||i.className;r.p=Object.assign({theme:v&&v()},s),r.o=/ *go\d+/.test(l),s.className=b.apply(r,a)+(l?" "+l:""),t&&(s.ref=n);let c=e;return e[0]&&(c=s.as||e,delete s.as),x&&c[0]&&x(s),y(c,s)}return t?t(i):i}}var k=e=>"function"==typeof e,E=(e,t)=>k(e)?e(t):e,C=(a=0,()=>(++a).toString()),P=()=>{if(void 0===i&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");i=!e||e.matches}return i},j=new Map,I=e=>{if(j.has(e))return;let t=setTimeout(()=>{j.delete(e),z({type:4,toastId:e})},1e3);j.set(e,t)},S=e=>{let t=j.get(e);t&&clearTimeout(t)},N=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&S(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?N(e,{type:1,toast:r}):N(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?I(a):e.toasts.forEach(e=>{I(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},T=[],M={toasts:[],pausedAt:void 0},z=e=>{M=N(M,e),T.forEach(e=>{e(M)})},L={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},D=(e={})=>{let[t,r]=(0,n.useState)(M);(0,n.useEffect)(()=>(T.push(r),()=>{let e=T.indexOf(r);e>-1&&T.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var r,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||L[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},O=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||C()}),U=e=>(t,r)=>{let a=O(t,e,r);return z({type:2,toast:a}),a.id},_=(e,t)=>U("blank")(e,t);_.error=U("error"),_.success=U("success"),_.loading=U("loading"),_.custom=U("custom"),_.dismiss=e=>{z({type:3,toastId:e})},_.remove=e=>z({type:4,toastId:e}),_.promise=(e,t,r)=>{let a=_.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(_.success(E(t.success,e),{id:a,...r,...null==r?void 0:r.success}),e)).catch(e=>{_.error(E(t.error,e),{id:a,...r,...null==r?void 0:r.error})}),e};var V=(e,t)=>{z({type:1,toast:{id:e,height:t}})},B=()=>{z({type:5,time:Date.now()})},H=e=>{let{toasts:t,pausedAt:r}=D(e);(0,n.useEffect)(()=>{if(r)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&_.dismiss(t.id);return}return setTimeout(()=>_.dismiss(t.id),r)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,r]);let a=(0,n.useCallback)(()=>{r&&z({type:6,time:Date.now()})},[r]),i=(0,n.useCallback)((e,r)=>{let{reverseOrder:a=!1,gutter:i=8,defaultPosition:o}=r||{},n=t.filter(t=>(t.position||o)===(e.position||o)&&t.height),s=n.findIndex(t=>t.id===e.id),l=n.filter((e,t)=>t<s&&e.visible).length;return n.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+i,0)},[t]);return{toasts:t,handlers:{updateHeight:V,startPause:B,endPause:a,calculateOffset:i}}},$=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${A`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${A`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${A`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,R=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${A`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,G=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${A`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${A`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,W=w("div")`
  position: absolute;
`,F=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Y=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${A`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,K=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?n.createElement(Y,null,t):t:"blank"===r?null:n.createElement(F,null,n.createElement(R,{...a}),"loading"!==r&&n.createElement(W,null,"error"===r?n.createElement($,{...a}):n.createElement(G,{...a})))},X=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Q=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,J=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Z=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,q=(e,t)=>{let r=e.includes("top")?1:-1,[a,i]=P()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[X(r),Q(r)];return{animation:t?`${A(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${A(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=n.memo(({toast:e,position:t,style:r,children:a})=>{let i=e.height?q(e.position||t||"top-center",e.visible):{opacity:0},o=n.createElement(K,{toast:e}),s=n.createElement(Z,{...e.ariaProps},E(e.message,e));return n.createElement(J,{className:e.className,style:{...i,...r,...e.style}},"function"==typeof a?a({icon:o,message:s}):n.createElement(n.Fragment,null,o,s))});o=n.createElement,m.p=void 0,y=o,v=void 0,x=void 0;var et=({id:e,className:t,style:r,onHeightUpdate:a,children:i})=>{let o=n.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return n.createElement("div",{ref:o,className:t,style:r},i)},er=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:P()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},ea=b`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ei=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:i,containerStyle:o,containerClassName:s})=>{let{toasts:l,handlers:c}=H(r);return n.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(r=>{let o=r.position||t,s=er(o,c.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return n.createElement(et,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?ea:"",style:s},"custom"===r.type?E(r.message,r):i?i(r):n.createElement(ee,{toast:r,position:o}))}))},eo=_}},function(e){e.O(0,[680,166,584,253,769,744],function(){return e(e.s=9409)}),_N_E=e.O()}]);