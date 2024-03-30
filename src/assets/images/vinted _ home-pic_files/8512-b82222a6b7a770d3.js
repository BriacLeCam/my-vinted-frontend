"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8512],{3982:function(e,t,n){n.d(t,{a:function(){return et},f:function(){return C},i:function(){return O},o:function(){return L},s:function(){return T},u:function(){return er}});var r=n(3001),i=n(59885),l=n(70079),o=n(99581);function f(e){return e.split("-")[0]}function c(e){return e.split("-")[1]}function u(e){return["top","bottom"].includes(f(e))?"x":"y"}function a(e){return"y"===e?"height":"width"}function s(e,t,n){let r,{reference:i,floating:l}=e,o=i.x+i.width/2-l.width/2,s=i.y+i.height/2-l.height/2,d=u(t),h=a(d),g=i[h]/2-l[h]/2,p=f(t),m="x"===d;switch(p){case"top":r={x:o,y:i.y-l.height};break;case"bottom":r={x:o,y:i.y+i.height};break;case"right":r={x:i.x+i.width,y:s};break;case"left":r={x:i.x-l.width,y:s};break;default:r={x:i.x,y:i.y}}switch(c(t)){case"start":r[d]-=g*(n&&m?-1:1);break;case"end":r[d]+=g*(n&&m?-1:1)}return r}let d=async(e,t,n)=>{let{placement:r="bottom",strategy:i="absolute",middleware:l=[],platform:o}=n,f=await (null==o.isRTL?void 0:o.isRTL(t)),c=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:a}=s(c,r,f),d=r,h={},g=0;for(let n=0;n<l.length;n++){let{name:p,fn:m}=l[n],{x:y,y:v,data:w,reset:b}=await m({x:u,y:a,initialPlacement:r,placement:d,strategy:i,middlewareData:h,rects:c,platform:o,elements:{reference:e,floating:t}});if(u=null!=y?y:u,a=null!=v?v:a,h={...h,[p]:{...h[p],...w}},b&&g<=50){g++,"object"==typeof b&&(b.placement&&(d=b.placement),b.rects&&(c=!0===b.rects?await o.getElementRects({reference:e,floating:t,strategy:i}):b.rects),{x:u,y:a}=s(c,d,f)),n=-1;continue}}return{x:u,y:a,placement:d,strategy:i,middlewareData:h}};function h(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function g(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function p(e,t){var n;void 0===t&&(t={});let{x:r,y:i,platform:l,rects:o,elements:f,strategy:c}=e,{boundary:u="clippingAncestors",rootBoundary:a="viewport",elementContext:s="floating",altBoundary:d=!1,padding:p=0}=t,m=h(p),y=f[d?"floating"===s?"reference":"floating":s],v=g(await l.getClippingRect({element:null==(n=await (null==l.isElement?void 0:l.isElement(y)))||n?y:y.contextElement||await (null==l.getDocumentElement?void 0:l.getDocumentElement(f.floating)),boundary:u,rootBoundary:a,strategy:c})),w=g(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({rect:"floating"===s?{...o.floating,x:r,y:i}:o.reference,offsetParent:await (null==l.getOffsetParent?void 0:l.getOffsetParent(f.floating)),strategy:c}):o[s]);return{top:v.top-w.top+m.top,bottom:w.bottom-v.bottom+m.bottom,left:v.left-w.left+m.left,right:w.right-v.right+m.right}}let m=Math.min,y=Math.max,v=e=>({name:"arrow",options:e,async fn(t){let{element:n,padding:r=0}=null!=e?e:{},{x:i,y:l,placement:o,rects:f,platform:s}=t;if(null==n)return{};let d=h(r),g={x:i,y:l},p=u(o),v=c(o),w=a(p),b=await s.getDimensions(n),x="y"===p?"top":"left",R="y"===p?"bottom":"right",C=f.reference[w]+f.reference[p]-g[p]-f.floating[w],E=g[p]-f.reference[p],L=await (null==s.getOffsetParent?void 0:s.getOffsetParent(n)),T=L?"y"===p?L.clientHeight||0:L.clientWidth||0:0;0===T&&(T=f.floating[w]);let O=d[x],P=T-b[w]-d[R],A=T/2-b[w]/2+(C/2-E/2),S=y(O,m(A,P)),k=("start"===v?d[x]:d[R])>0&&A!==S&&f.reference[w]<=f.floating[w]?A<O?O-A:P-A:0;return{[p]:g[p]-k,data:{[p]:S,centerOffset:A-S}}}}),w={left:"right",right:"left",bottom:"top",top:"bottom"};function b(e){return e.replace(/left|right|bottom|top/g,e=>w[e])}let x={start:"end",end:"start"};function R(e){return e.replace(/start|end/g,e=>x[e])}let C=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,r,i,l;let{placement:o,middlewareData:s,rects:d,initialPlacement:h,platform:g,elements:m}=t,{mainAxis:y=!0,crossAxis:v=!0,fallbackPlacements:w,fallbackStrategy:x="bestFit",flipAlignment:C=!0,...E}=e,L=f(o),T=L===h,O=w||(T||!C?[b(h)]:function(e){let t=b(e);return[R(e),t,R(t)]}(h)),P=[h,...O],A=await p(t,E),S=[],k=(null==(n=s.flip)?void 0:n.overflows)||[];if(y&&S.push(A[L]),v){let{main:e,cross:t}=function(e,t,n){void 0===n&&(n=!1);let r=c(e),i=u(e),l=a(i),o="x"===i?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[l]>t.floating[l]&&(o=b(o)),{main:o,cross:b(o)}}(o,d,await (null==g.isRTL?void 0:g.isRTL(m.floating)));S.push(A[e],A[t])}if(k=[...k,{placement:o,overflows:S}],!S.every(e=>e<=0)){let e=(null!=(r=null==(i=s.flip)?void 0:i.index)?r:0)+1,t=P[e];if(t)return{data:{index:e,overflows:k},reset:{placement:t}};let n="bottom";switch(x){case"bestFit":{let e=null==(l=k.map(e=>[e,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:l[0].placement;e&&(n=e);break}case"initialPlacement":n=h}if(o!==n)return{reset:{placement:n}}}return{}}}};async function E(e,t){let{placement:n,platform:r,elements:i}=e,l=await (null==r.isRTL?void 0:r.isRTL(i.floating)),o=f(n),a=c(n),s="x"===u(n),d=["left","top"].includes(o)?-1:1,h=l&&s?-1:1,g="function"==typeof t?t(e):t,{mainAxis:p,crossAxis:m,alignmentAxis:y}="number"==typeof g?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...g};return a&&"number"==typeof y&&(m="end"===a?-1*y:y),s?{x:m*h,y:p*d}:{x:p*d,y:m*h}}let L=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){let{x:n,y:r}=t,i=await E(t,e);return{x:n+i.x,y:r+i.y,data:i}}}},T=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){let{x:n,y:r,placement:i}=t,{mainAxis:l=!0,crossAxis:o=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...a}=e,s={x:n,y:r},d=await p(t,a),h=u(f(i)),g="x"===h?"y":"x",v=s[h],w=s[g];if(l){let e="y"===h?"top":"left",t="y"===h?"bottom":"right",n=v+d[e],r=v-d[t];v=y(n,m(v,r))}if(o){let e="y"===g?"top":"left",t="y"===g?"bottom":"right",n=w+d[e],r=w-d[t];w=y(n,m(w,r))}let b=c.fn({...t,[h]:v,[g]:w});return{...b,data:{x:b.x-n,y:b.y-r}}}}},O=function(e){return void 0===e&&(e={}),{name:"inline",options:e,async fn(t){var n;let{placement:r,elements:i,rects:l,platform:o,strategy:c}=t,{padding:a=2,x:s,y:d}=e,p=g(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({rect:l.reference,offsetParent:await (null==o.getOffsetParent?void 0:o.getOffsetParent(i.floating)),strategy:c}):l.reference),v=null!=(n=await (null==o.getClientRects?void 0:o.getClientRects(i.reference)))?n:[],w=h(a),b=await o.getElementRects({reference:{getBoundingClientRect:function(){if(2===v.length&&v[0].left>v[1].right&&null!=s&&null!=d){var e;return null!=(e=v.find(e=>s>e.left-w.left&&s<e.right+w.right&&d>e.top-w.top&&d<e.bottom+w.bottom))?e:p}if(v.length>=2){if("x"===u(r)){let e=v[0],t=v[v.length-1],n="top"===f(r),i=e.top,l=t.bottom,o=n?e.left:t.left,c=n?e.right:t.right;return{top:i,bottom:l,left:o,right:c,width:c-o,height:l-i,x:o,y:i}}let e="left"===f(r),t=y(...v.map(e=>e.right)),n=m(...v.map(e=>e.left)),i=v.filter(r=>e?r.left===n:r.right===t),l=i[0].top,o=i[i.length-1].bottom;return{top:l,bottom:o,left:n,right:t,width:t-n,height:o-l,x:n,y:l}}return p}},floating:i.floating,strategy:c});return l.reference.x!==b.reference.x||l.reference.y!==b.reference.y||l.reference.width!==b.reference.width||l.reference.height!==b.reference.height?{reset:{rects:b}}:{}}}};function P(e){return e&&e.document&&e.location&&e.alert&&e.setInterval}function A(e){if(null==e)return window;if(!P(e)){let t=e.ownerDocument;return t&&t.defaultView||window}return e}function S(e){return A(e).getComputedStyle(e)}function k(e){return P(e)?"":e?(e.nodeName||"").toLowerCase():""}function H(){let e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map(e=>e.brand+"/"+e.version).join(" "):navigator.userAgent}function W(e){return e instanceof A(e).HTMLElement}function _(e){return e instanceof A(e).Element}function z(e){if("undefined"==typeof ShadowRoot)return!1;let t=A(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function M(e){let{overflow:t,overflowX:n,overflowY:r}=S(e);return/auto|scroll|overlay|hidden/.test(t+r+n)}function F(e){let t=/firefox/i.test(H()),n=S(e);return"none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||["transform","perspective"].includes(n.willChange)||t&&"filter"===n.willChange||t&&!!n.filter&&"none"!==n.filter}function V(){return!/^((?!chrome|android).)*safari/i.test(H())}let D=Math.min,N=Math.max,Z=Math.round;function j(e,t,n){var r,i,l,o;void 0===t&&(t=!1),void 0===n&&(n=!1);let f=e.getBoundingClientRect(),c=1,u=1;t&&W(e)&&(c=e.offsetWidth>0&&Z(f.width)/e.offsetWidth||1,u=e.offsetHeight>0&&Z(f.height)/e.offsetHeight||1);let a=_(e)?A(e):window,s=!V()&&n,d=(f.left+(s&&null!=(r=null==(i=a.visualViewport)?void 0:i.offsetLeft)?r:0))/c,h=(f.top+(s&&null!=(l=null==(o=a.visualViewport)?void 0:o.offsetTop)?l:0))/u,g=f.width/c,p=f.height/u;return{width:g,height:p,top:h,right:d+g,bottom:h+p,left:d,x:d,y:h}}function B(e){return((e instanceof A(e).Node?e.ownerDocument:e.document)||window.document).documentElement}function U(e){return _(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function $(e){return j(B(e)).left+U(e).scrollLeft}function q(e){return"html"===k(e)?e:e.assignedSlot||e.parentNode||(z(e)?e.host:null)||B(e)}function I(e){return W(e)&&"fixed"!==getComputedStyle(e).position?e.offsetParent:null}function X(e){let t=A(e),n=I(e);for(;n&&["table","td","th"].includes(k(n))&&"static"===getComputedStyle(n).position;)n=I(n);return n&&("html"===k(n)||"body"===k(n)&&"static"===getComputedStyle(n).position&&!F(n))?t:n||function(e){let t=q(e);for(z(t)&&(t=t.host);W(t)&&!["html","body"].includes(k(t));){if(F(t))return t;t=t.parentNode}return null}(e)||t}function Y(e){if(W(e))return{width:e.offsetWidth,height:e.offsetHeight};let t=j(e);return{width:t.width,height:t.height}}function G(e,t){var n;void 0===t&&(t=[]);let r=function e(t){let n=q(t);return["html","body","#document"].includes(k(n))?t.ownerDocument.body:W(n)&&M(n)?n:e(n)}(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),l=A(r),o=i?[l].concat(l.visualViewport||[],M(r)?r:[]):r,f=t.concat(o);return i?f:f.concat(G(o))}function J(e,t,n){return"viewport"===t?g(function(e,t){let n=A(e),r=B(e),i=n.visualViewport,l=r.clientWidth,o=r.clientHeight,f=0,c=0;if(i){l=i.width,o=i.height;let e=V();(e||!e&&"fixed"===t)&&(f=i.offsetLeft,c=i.offsetTop)}return{width:l,height:o,x:f,y:c}}(e,n)):_(t)?function(e,t){let n=j(e,!1,"fixed"===t),r=n.top+e.clientTop,i=n.left+e.clientLeft;return{top:r,left:i,x:i,y:r,right:i+e.clientWidth,bottom:r+e.clientHeight,width:e.clientWidth,height:e.clientHeight}}(t,n):g(function(e){var t;let n=B(e),r=U(e),i=null==(t=e.ownerDocument)?void 0:t.body,l=N(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=N(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),f=-r.scrollLeft+$(e),c=-r.scrollTop;return"rtl"===S(i||n).direction&&(f+=N(n.clientWidth,i?i.clientWidth:0)-l),{width:l,height:o,x:f,y:c}}(B(e)))}let K={getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,l=[..."clippingAncestors"===n?function(e){let t=G(e),n=["absolute","fixed"].includes(S(e).position)&&W(e)?X(e):e;return _(n)?t.filter(e=>_(e)&&function(e,t){let n=null==t.getRootNode?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&z(n)){let n=t;do{if(n&&e===n)return!0;n=n.parentNode||n.host}while(n)}return!1}(e,n)&&"body"!==k(e)):[]}(t):[].concat(n),r],o=l[0],f=l.reduce((e,n)=>{let r=J(t,n,i);return e.top=N(r.top,e.top),e.right=D(r.right,e.right),e.bottom=D(r.bottom,e.bottom),e.left=N(r.left,e.left),e},J(t,o,i));return{width:f.right-f.left,height:f.bottom-f.top,x:f.left,y:f.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e,i=W(n),l=B(n);if(n===l)return t;let o={scrollLeft:0,scrollTop:0},f={x:0,y:0};if((i||!i&&"fixed"!==r)&&(("body"!==k(n)||M(l))&&(o=U(n)),W(n))){let e=j(n,!0);f.x=e.x+n.clientLeft,f.y=e.y+n.clientTop}return{...t,x:t.x-o.scrollLeft+f.x,y:t.y-o.scrollTop+f.y}},isElement:_,getDimensions:Y,getOffsetParent:X,getDocumentElement:B,getElementRects:e=>{let{reference:t,floating:n,strategy:r}=e;return{reference:function(e,t,n){let r=W(t),i=B(t),l=j(e,r&&function(e){let t=j(e);return Z(t.width)!==e.offsetWidth||Z(t.height)!==e.offsetHeight}(t),"fixed"===n),o={scrollLeft:0,scrollTop:0},f={x:0,y:0};if(r||!r&&"fixed"!==n){if(("body"!==k(t)||M(i))&&(o=U(t)),W(t)){let e=j(t,!0);f.x=e.x+t.clientLeft,f.y=e.y+t.clientTop}else i&&(f.x=$(i))}return{x:l.left+o.scrollLeft-f.x,y:l.top+o.scrollTop-f.y,width:l.width,height:l.height}}(t,X(n),r),floating:{...Y(n),x:0,y:0}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>"rtl"===S(e).direction},Q=(e,t,n)=>d(e,t,{platform:K,...n});var ee="undefined"!=typeof document?l.useLayoutEffect:l.useEffect;let et=e=>{let{element:t,padding:n}=e;return{name:"arrow",options:e,fn(e){if(Object.prototype.hasOwnProperty.call(t,"current")){if(null!=t.current)return v({element:t.current,padding:n}).fn(e)}else if(t)return v({element:t,padding:n}).fn(e);return{}}}};var en=["x","y","strategy","reference","floating","update","refs"],er=function(e){var t=e.placement,n=e.strategy,f=e.middleware,c=e.isFloaterVisible,u=void 0===c||c,a=e.shouldAutoUpdate,s=void 0!==a&&a,d=e.shouldUpdateOnAncestorResize,h=void 0===d||d,g=e.shouldUpdateOnAncestorScroll,p=void 0===g||g,m=e.shouldUpdateOnElementResize,y=void 0===m||m,v=function(e){let{middleware:t,placement:n="bottom",strategy:r="absolute",whileElementsMounted:i}=void 0===e?{}:e,f=l.useRef(null),c=l.useRef(null),u=function(e){let t=l.useRef(e);return ee(()=>{t.current=e}),t}(i),a=l.useRef(null),[s,d]=l.useState({x:null,y:null,strategy:r,placement:n,middlewareData:{}}),[h,g]=l.useState(t);!function e(t,n){let r,i,l;if(t===n)return!0;if(typeof t!=typeof n)return!1;if("function"==typeof t&&t.toString()===n.toString())return!0;if(t&&n&&"object"==typeof t){if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(i=r;0!=i--;)if(!e(t[i],n[i]))return!1;return!0}if((r=(l=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(i=r;0!=i--;)if(!Object.prototype.hasOwnProperty.call(n,l[i]))return!1;for(i=r;0!=i--;){let r=l[i];if(("_owner"!==r||!t.$$typeof)&&!e(t[r],n[r]))return!1}return!0}return t!=t&&n!=n}(null==h?void 0:h.map(e=>{let{options:t}=e;return t}),null==t?void 0:t.map(e=>{let{options:t}=e;return t}))&&g(t);let p=l.useCallback(()=>{f.current&&c.current&&Q(f.current,c.current,{middleware:h,placement:n,strategy:r}).then(e=>{m.current&&o.flushSync(()=>{d(e)})})},[h,n,r]);ee(()=>{m.current&&p()},[p]);let m=l.useRef(!1);ee(()=>(m.current=!0,()=>{m.current=!1}),[]);let y=l.useCallback(()=>{if("function"==typeof a.current&&(a.current(),a.current=null),f.current&&c.current){if(u.current){let e=u.current(f.current,c.current,p);a.current=e}else p()}},[p,u]),v=l.useCallback(e=>{f.current=e,y()},[y]),w=l.useCallback(e=>{c.current=e,y()},[y]),b=l.useMemo(()=>({reference:f,floating:c}),[]);return l.useMemo(()=>({...s,update:p,refs:b,reference:v,floating:w}),[s,p,b,v,w])}({placement:t,strategy:n,middleware:f}),w=v.x,b=v.y,x=v.strategy,R=v.reference,C=v.floating,E=v.update,L=v.refs,T=(0,i.Z)(v,en);return(0,l.useEffect)(function(){if(u&&s&&L.reference.current&&L.floating.current)return function(e,t,n,r){let i;void 0===r&&(r={});let{ancestorScroll:l=!0,ancestorResize:o=!0,elementResize:f=!0,animationFrame:c=!1}=r,u=l&&!c,a=o&&!c,s=u||a?[..._(e)?G(e):[],...G(t)]:[];s.forEach(e=>{u&&e.addEventListener("scroll",n,{passive:!0}),a&&e.addEventListener("resize",n)});let d=null;if(f){let r=!0;d=new ResizeObserver(()=>{r||n(),r=!1}),_(e)&&!c&&d.observe(e),d.observe(t)}let h=c?j(e):null;return c&&function t(){let r=j(e);h&&(r.x!==h.x||r.y!==h.y||r.width!==h.width||r.height!==h.height)&&n(),h=r,i=requestAnimationFrame(t)}(),n(),()=>{var e;s.forEach(e=>{u&&e.removeEventListener("scroll",n),a&&e.removeEventListener("resize",n)}),null==(e=d)||e.disconnect(),d=null,c&&cancelAnimationFrame(i)}}(L.reference.current,L.floating.current,E,{ancestorResize:h,ancestorScroll:p,elementResize:y})},[L.reference,L.floating,E,u,s,h,p,y]),(0,r.Z)({floaterStyle:{top:null!=b?b:"",left:null!=w?w:"",position:x},triggerRef:R,floaterRef:C,update:E,refs:L},T)}},72056:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(70079);let i=({title:e,titleId:t,...n})=>r.createElement("svg",{fill:"none",viewBox:"0 0 32 32",width:32,height:32,"aria-labelledby":t,...n},e?r.createElement("title",{id:t},e):null,r.createElement("g",{clipPath:"url(#CancelCircleFilled32__a)"},r.createElement("path",{fill:"currentColor",d:"M16 0C7.166 0 0 7.166 0 16s7.166 16 16 16 16-7.166 16-16S24.834 0 16 0Zm7.034 21.773-1.273 1.273L16 17.284l-5.761 5.762-1.273-1.273 5.762-5.761-5.762-5.761 1.273-1.273L16 14.74l5.761-5.762 1.273 1.273-5.762 5.761 5.762 5.761Z"})),r.createElement("defs",null,r.createElement("clipPath",{id:"CancelCircleFilled32__a"},r.createElement("path",{fill:"currentColor",d:"M0 0h32v32H0z"}))));i.Size=32,i.Title="CancelCircleFilled"},83737:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(70079);let i=({title:e,titleId:t,...n})=>r.createElement("svg",{fill:"none",viewBox:"0 0 32 32",width:32,height:32,"aria-labelledby":t,...n},e?r.createElement("title",{id:t},e):null,r.createElement("g",{clipPath:"url(#CheckCircleFilled32__a)"},r.createElement("path",{fill:"currentColor",d:"M16 0C7.166 0 0 7.166 0 16s7.166 16 16 16 16-7.166 16-16S24.834 0 16 0Zm-1.596 21.281-5.438-5.437 1.273-1.272 4.165 4.165 7.37-7.37 1.272 1.272-8.642 8.642Z"})),r.createElement("defs",null,r.createElement("clipPath",{id:"CheckCircleFilled32__a"},r.createElement("path",{fill:"currentColor",d:"M0 0h32v32H0z"}))));i.Size=32,i.Title="CheckCircleFilled"}}]);
//# sourceMappingURL=8512-b82222a6b7a770d3.js.map