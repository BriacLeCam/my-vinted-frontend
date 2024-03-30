"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3203],{83420:function(e,t,n){n.d(t,{K:function(){return o}});var i,r=Number({"unit-base":"4"}["unit-base"]),a=function(e){return e*r},o=((i={})[i.XSmall=a(.5)]="XSmall",i[i.Small=a(1)]="Small",i[i.Regular=a(2)]="Regular",i[i.Medium=a(3)]="Medium",i[i.Large=a(4)]="Large",i[i.XLarge=a(6)]="XLarge",i[i.X2Large=a(8)]="X2Large",i[i.X3Large=a(12)]="X3Large",i[i.X4Large=a(16)]="X4Large",i[i.X5Large=a(24)]="X5Large",i[i.X6Large=a(32)]="X6Large",i)},94980:function(e,t,n){n.d(t,{j:function(){return g}});var i,r,a=n(3001),o=n(70079),u=n(33001),d=n(9650),l=n(35250),c=n(66494),s={"unit-base":"4",chip:"web_ui__Chip__chip",round:"web_ui__Chip__round",outlined:"web_ui__Chip__outlined",activated:"web_ui__Chip__activated",clicked:"web_ui__Chip__clicked",filled:"web_ui__Chip__filled",prefix:"web_ui__Chip__prefix",text:"web_ui__Chip__text",suffix:"web_ui__Chip__suffix"},f=((i=f||{}).Outlined="outlined",i.Filled="filled",i),p=((r=p||{}).Round="round",r),h=u.c.bind(s),m=function(e){var t=e.styling,n=void 0===t?f.Outlined:t,i=e.radius,r=e.activated,o=void 0!==r&&r,u=e.clicked,m=e.type,g=e.onClick,b=e.aria,x=e.testId,_=e.prefix,v=e.text,w=e.textType,y=void 0===w?c.Z.Type.Title:w,z=e.suffix,L=e.forwardedRef,S=h(s.chip,n,{round:i===p.Round,activated:o,clicked:void 0!==u&&u});return(0,l.jsxs)("button",(0,a.Z)((0,a.Z)({className:S,type:void 0===m?"button":m,onClick:g,"data-testid":x,ref:L,"aria-pressed":o||void 0},b),{},{children:[_?(0,l.jsx)("div",{className:s.prefix,"data-testid":(0,d.l)(x,"prefix"),children:_}):null,v?(0,l.jsx)("div",{className:s.text,children:(0,l.jsx)(c.Z,{text:v,type:y,theme:"amplified",as:"span",truncate:!0,testId:(0,d.l)(x,"text")})}):null,z?(0,l.jsx)("div",{className:s.suffix,"data-testid":(0,d.l)(x,"suffix"),children:z}):null]}))},g=(0,o.forwardRef)(function(e,t){return(0,l.jsx)(m,(0,a.Z)({forwardedRef:t},e))});g.displayName=m.name,g.Styling=f,g.Radius=p},12869:function(e,t,n){n.d(t,{N:function(){return z}});var i=n(3001),r=n(15675),a=n(70079),o=n(33001),u=n(27187),d=n(48369),l=n(91049),c=n(9650),s=n(78772),f=n(94379),p=n(35250),h=n(82599),m=n(59885),g=n(62278),b=n(93276),x=["title","titleId"],_=function(e){var t=e.title,n=e.titleId,r=(0,m.Z)(e,x);return a.createElement("svg",(0,i.Z)({viewBox:"0 0 16 16",width:16,height:16,"aria-labelledby":n},r),t?a.createElement("title",{id:n},t):null,a.createElement("path",{d:"M12.94 2 8 6.94 3.06 2 2 3.06 6.94 8 2 12.94 3.06 14 8 9.06 12.94 14 14 12.94 9.06 8 14 3.06z"}))};_.Size=16,_.Title="X";var v={"unit-base":"4","input-bar":"web_ui__InputBar__input-bar",prefix:"web_ui__InputBar__prefix",input:"web_ui__InputBar__input",icon:"web_ui__InputBar__icon",suffix:"web_ui__InputBar__suffix",value:"web_ui__InputBar__value"},w=o.c.bind(v),y=function(e){var t,n,o=e.name,s=e.value,m=e.placeholder,x=e.minLength,y=e.maxLength,z=e.suffix,L=e.prefix,S=e.deprecatedIcon,C=e.icon,R=e.deprecatedIconName,j=e.iconName,Z=e.format,E=e.onFocus,I=e.onBlur,N=e.onKeyDown,k=e.onKeyUp,B=e.onValueClear,M=e.onInputClick,X=e.onChange,F=void 0===X?f.Z:X,T=e.forwardedRef,O=e.uncontrolled,W=e.disabled,H=e.isLoading,K=e.isMultiline,P=e.inputAria,U=e.clearButtonAria,A=e.testId,D=e.rows,V=e.maxRows,q=(0,a.useCallback)(function(e){return e?Z?(0,d.U)(Z,e.toString()):e:""},[Z]),G=(0,a.useState)(q(s)||""),J=(0,r.Z)(G,2),Q=J[0],Y=J[1];return(0,a.useEffect)(function(){Y(q(s))},[s,q]),(0,p.jsxs)("div",{className:w("input-bar"),"data-testid":A,children:[L?(0,p.jsx)("div",{className:w(v.prefix),children:L}):null,(0,p.jsxs)("div",{className:w(v.input),children:[(S||R?(0,p.jsx)("div",{className:v.icon,children:S||R&&(0,p.jsx)(b.Z,{name:R,size:b.Z.Size.Small,testId:(0,c.l)(A,"icon")})}):null)||(C||j?(0,p.jsx)("div",{className:v.icon,children:C||j&&(0,p.jsx)(g.Z,{name:j,testId:(0,c.l)(A,"icon")})}):null),(t=(0,l.X)(o),n=(0,i.Z)({id:t,name:o,value:O?void 0:Q,placeholder:m,"data-testid":(0,c.l)(A,"input"),className:w(v.value),onChange:function(e){O||Y(q(e.currentTarget.value)||""),F(e)},onBlur:I,onFocus:E,onClick:M,onKeyUp:k,onKeyDown:N,ref:T,autoComplete:"off",disabled:W,maxLength:y,minLength:x},P),K?(0,p.jsx)(u.T,(0,i.Z)((0,i.Z)({},n),{},{minRows:void 0===D?1:D,maxRows:void 0===V?5:V})):(0,p.jsx)("input",(0,i.Z)({},n)))]}),(0,p.jsx)("div",{className:w(v.suffix),children:z||(Q?(0,p.jsx)(h.IM,(0,i.Z)({iconName:_,styling:h.IM.Styling.Flat,size:h.IM.Size.Medium,onClick:function(e){H||(B&&B(e),Y(""))},testId:(0,c.l)(A,"clear-button"),isLoading:H},U)):null)})]})},z=(0,a.forwardRef)(function(e,t){var n=(0,i.Z)({},e);return n.min&&(n.minLength=n.minLength||Number(n.min),(0,s.d)("Propert min of InputBar component has been deprecated. Use propery minLength instead")),n.max&&(n.maxLength=n.maxLength||Number(n.max),(0,s.d)("Property max of InputBar component has been deprecated. Use property maxLength instead")),(0,p.jsx)(y,(0,i.Z)({forwardedRef:t},n))});z.displayName=y.name},27187:function(e,t,n){n.d(t,{T:function(){return _}});var i=n(74011),r=n(74126),a=n(70079),o="undefined"!=typeof document?a.useLayoutEffect:a.useEffect,u=function(e){var t=a.useRef(e);return o(function(){t.current=e}),t},d=function(e,t){if("function"==typeof e){e(t);return}e.current=t},l=function(e,t){var n=(0,a.useRef)();return(0,a.useCallback)(function(i){e.current=i,n.current&&d(n.current,null),n.current=t,t&&d(t,i)},[t])},c={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},s=function(e){Object.keys(c).forEach(function(t){e.style.setProperty(t,c[t],"important")})},f=null,p=function(e,t){var n=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?n+t.borderSize:n-t.paddingSize},h=function(){},m=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],g="undefined"!=typeof document&&!!document.documentElement.currentStyle,b=function(e){var t=window.getComputedStyle(e);if(null===t)return null;var n=m.reduce(function(e,n){return e[n]=t[n],e},{}),i=n.boxSizing;if(""===i)return null;g&&"border-box"===i&&(n.width=parseFloat(n.width)+parseFloat(n.borderRightWidth)+parseFloat(n.borderLeftWidth)+parseFloat(n.paddingRight)+parseFloat(n.paddingLeft)+"px");var r=parseFloat(n.paddingBottom)+parseFloat(n.paddingTop),a=parseFloat(n.borderBottomWidth)+parseFloat(n.borderTopWidth);return{sizingStyle:n,paddingSize:r,borderSize:a}},x=function(e){var t=u(e);(0,a.useLayoutEffect)(function(){var e=function(e){t.current(e)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[])},_=(0,a.forwardRef)(function(e,t){var n=e.cacheMeasurements,o=e.maxRows,u=e.minRows,d=e.onChange,c=void 0===d?h:d,m=e.onHeightChange,g=void 0===m?h:m,_=(0,r.Z)(e,["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"]),v=void 0!==_.value,w=(0,a.useRef)(null),y=l(w,t),z=(0,a.useRef)(0),L=(0,a.useRef)(),S=function(){var e,t,i,r,a,d,l,c,h,m,x,_=w.current,v=n&&L.current?L.current:b(_);if(v){L.current=v;var y=(e=_.value||_.placeholder||"x",void 0===(t=u)&&(t=1),void 0===(i=o)&&(i=1/0),f||((f=document.createElement("textarea")).setAttribute("tabindex","-1"),f.setAttribute("aria-hidden","true"),s(f)),null===f.parentNode&&document.body.appendChild(f),r=v.paddingSize,a=v.borderSize,l=(d=v.sizingStyle).boxSizing,Object.keys(d).forEach(function(e){f.style[e]=d[e]}),s(f),f.value=e,c=p(f,v),f.value="x",m=(h=f.scrollHeight-r)*t,"border-box"===l&&(m=m+r+a),c=Math.max(m,c),x=h*i,"border-box"===l&&(x=x+r+a),[c=Math.min(x,c),h]),S=y[0],C=y[1];z.current!==S&&(z.current=S,_.style.setProperty("height",S+"px","important"),g(S,{rowHeight:C}))}};return"undefined"!=typeof document&&((0,a.useLayoutEffect)(S),x(S)),(0,a.createElement)("textarea",(0,i.Z)({},_,{onChange:function(e){v||S(),c(e)},ref:y}))})},74011:function(e,t,n){n.d(t,{Z:function(){return i}});function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}},74126:function(e,t,n){n.d(t,{Z:function(){return i}});function i(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}},2002:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(70079);let r=({title:e,titleId:t,...n})=>i.createElement("svg",{viewBox:"0 0 16 16",width:16,height:16,"aria-labelledby":t,...n},e?i.createElement("title",{id:t},e):null,i.createElement("path",{d:"M8 12 2 6h12z"}));r.Size=16,r.Title="Dropdown"},96271:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(70079);let r=({title:e,titleId:t,...n})=>i.createElement("svg",{viewBox:"0 0 24 24",width:24,height:24,"aria-labelledby":t,...n},e?i.createElement("title",{id:t},e):null,i.createElement("path",{d:"M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM6 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm7.5-7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM21 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"}));r.Size=24,r.Title="Dots"}}]);
//# sourceMappingURL=3203-16d3cdd315493e40.js.map