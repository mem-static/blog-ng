"use strict";(self.webpackChunkmemset0_blog=self.webpackChunkmemset0_blog||[]).push([[340],{7516:function(e,t,n){n.d(t,{c:function(){return x}});var r=n(5072),o=n(5656),i=n(1504),a=n(5456),s=n(3864),c=n(6940),l=n(440),d=n(6968),u=n(888),p=n(1444);function m(e){return(0,p.cp)("MuiCard",e)}(0,u.c)("MuiCard",["root"]);var f=n(7624);const g=["className","raised"],h=(0,c.cp)(d.c,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"})));var x=i.forwardRef((function(e,t){const n=(0,l.c)({props:e,name:"MuiCard"}),{className:i,raised:c=!1}=n,d=(0,o.c)(n,g),u=(0,r.c)({},n,{raised:c}),p=(e=>{const{classes:t}=e;return(0,s.c)({root:["root"]},m,t)})(u);return(0,f.jsx)(h,(0,r.c)({className:(0,a.c)(p.root,i),elevation:c?8:void 0,ref:t,ownerState:u},d))}))},4477:function(e,t,n){n.d(t,{c:function(){return h}});var r=n(5072),o=n(5656),i=n(1504),a=n(5456),s=n(3864),c=n(6940),l=n(440),d=n(888),u=n(1444);function p(e){return(0,u.cp)("MuiCardContent",e)}(0,d.c)("MuiCardContent",["root"]);var m=n(7624);const f=["className","component"],g=(0,c.cp)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var h=i.forwardRef((function(e,t){const n=(0,l.c)({props:e,name:"MuiCardContent"}),{className:i,component:c="div"}=n,d=(0,o.c)(n,f),u=(0,r.c)({},n,{component:c}),h=(e=>{const{classes:t}=e;return(0,s.c)({root:["root"]},p,t)})(u);return(0,m.jsx)(g,(0,r.c)({as:c,className:(0,a.c)(h.root,i),ownerState:u,ref:t},d))}))},3964:function(e,t,n){n.d(t,{cp:function(){return y}});var r=n(5656),o=n(5072),i=n(1504),a=n(5456),s=n(4968),c=n(4088),l=n(3864),d=n(6940),u=n(440),p=n(2592);var m=i.createContext(),f=n(888),g=n(1444);function h(e){return(0,g.cp)("MuiGrid",e)}const x=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var v=(0,f.c)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...x.map((e=>`grid-xs-${e}`)),...x.map((e=>`grid-sm-${e}`)),...x.map((e=>`grid-md-${e}`)),...x.map((e=>`grid-lg-${e}`)),...x.map((e=>`grid-xl-${e}`))]),w=n(7624);const b=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function S(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function k({breakpoints:e,values:t}){let n="";Object.keys(t).forEach((e=>{""===n&&0!==t[e]&&(n=e)}));const r=Object.keys(e).sort(((t,n)=>e[t]-e[n]));return r.slice(0,r.indexOf(n))}const $=(0,d.cp)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{container:r,direction:o,item:i,spacing:a,wrap:s,zeroMinWidth:c,breakpoints:l}=n;let d=[];r&&(d=function(e,t,n={}){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[n[`spacing-xs-${String(e)}`]];const r=[];return t.forEach((t=>{const o=e[t];Number(o)>0&&r.push(n[`spacing-${t}-${String(o)}`])})),r}(a,l,t));const u=[];return l.forEach((e=>{const r=n[e];r&&u.push(t[`grid-${e}-${String(r)}`])})),[t.root,r&&t.container,i&&t.item,c&&t.zeroMinWidth,...d,"row"!==o&&t[`direction-xs-${String(o)}`],"wrap"!==s&&t[`wrap-xs-${String(s)}`],...u]}})((({ownerState:e})=>(0,o.c)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})),(function({theme:e,ownerState:t}){const n=(0,s.Ws)({values:t.direction,breakpoints:e.breakpoints.values});return(0,s.ls)({theme:e},n,(e=>{const t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${v.item}`]={maxWidth:"none"}),t}))}),(function({theme:e,ownerState:t}){const{container:n,rowSpacing:r}=t;let o={};if(n&&0!==r){const t=(0,s.Ws)({values:r,breakpoints:e.breakpoints.values});let n;"object"==typeof t&&(n=k({breakpoints:e.breakpoints.values,values:t})),o=(0,s.ls)({theme:e},t,((t,r)=>{var o;const i=e.spacing(t);return"0px"!==i?{marginTop:`-${S(i)}`,[`& > .${v.item}`]:{paddingTop:S(i)}}:null!=(o=n)&&o.includes(r)?{}:{marginTop:0,[`& > .${v.item}`]:{paddingTop:0}}}))}return o}),(function({theme:e,ownerState:t}){const{container:n,columnSpacing:r}=t;let o={};if(n&&0!==r){const t=(0,s.Ws)({values:r,breakpoints:e.breakpoints.values});let n;"object"==typeof t&&(n=k({breakpoints:e.breakpoints.values,values:t})),o=(0,s.ls)({theme:e},t,((t,r)=>{var o;const i=e.spacing(t);return"0px"!==i?{width:`calc(100% + ${S(i)})`,marginLeft:`-${S(i)}`,[`& > .${v.item}`]:{paddingLeft:S(i)}}:null!=(o=n)&&o.includes(r)?{}:{width:"100%",marginLeft:0,[`& > .${v.item}`]:{paddingLeft:0}}}))}return o}),(function({theme:e,ownerState:t}){let n;return e.breakpoints.keys.reduce(((r,i)=>{let a={};if(t[i]&&(n=t[i]),!n)return r;if(!0===n)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===n)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=(0,s.Ws)({values:t.columns,breakpoints:e.breakpoints.values}),l="object"==typeof c?c[i]:c;if(null==l)return r;const d=Math.round(n/l*1e8)/1e6+"%";let u={};if(t.container&&t.item&&0!==t.columnSpacing){const n=e.spacing(t.columnSpacing);if("0px"!==n){const e=`calc(${d} + ${S(n)})`;u={flexBasis:e,maxWidth:e}}}a=(0,o.c)({flexBasis:d,flexGrow:0,maxWidth:d},u)}return 0===e.breakpoints.values[i]?Object.assign(r,a):r[e.breakpoints.up(i)]=a,r}),{})}));const W=e=>{const{classes:t,container:n,direction:r,item:o,spacing:i,wrap:a,zeroMinWidth:s,breakpoints:c}=e;let d=[];n&&(d=function(e,t){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[`spacing-xs-${String(e)}`];const n=[];return t.forEach((t=>{const r=e[t];if(Number(r)>0){const e=`spacing-${t}-${String(r)}`;n.push(e)}})),n}(i,c));const u=[];c.forEach((t=>{const n=e[t];n&&u.push(`grid-${t}-${String(n)}`)}));const p={root:["root",n&&"container",o&&"item",s&&"zeroMinWidth",...d,"row"!==r&&`direction-xs-${String(r)}`,"wrap"!==a&&`wrap-xs-${String(a)}`,...u]};return(0,l.c)(p,h,t)},M=i.forwardRef((function(e,t){const n=(0,u.c)({props:e,name:"MuiGrid"}),{breakpoints:s}=(0,p.c)(),l=(0,c.c)(n),{className:d,columns:f,columnSpacing:g,component:h="div",container:x=!1,direction:v="row",item:S=!1,rowSpacing:k,spacing:M=0,wrap:y="wrap",zeroMinWidth:N=!1}=l,C=(0,r.c)(l,b),E=k||M,G=g||M,R=i.useContext(m),j=x?f||12:R,T={},z=(0,o.c)({},C);s.keys.forEach((e=>{null!=C[e]&&(T[e]=C[e],delete z[e])}));const B=(0,o.c)({},l,{columns:j,container:x,direction:v,item:S,rowSpacing:E,columnSpacing:G,wrap:y,zeroMinWidth:N,spacing:M},T,{breakpoints:s.keys}),L=W(B);return(0,w.jsx)(m.Provider,{value:j,children:(0,w.jsx)($,(0,o.c)({ownerState:B,className:(0,a.c)(L.root,d),as:h,ref:t},z))})}));var y=M},5632:function(e,t,n){n.d(t,{c:function(){return N}});var r=n(1504),o=n(9448),i=n(5656),a=n(5072),s=n(5456),c=n(2368),l=n(1444),d=n(3864),u=n(4468);var p=(0,n(4512).cp)(),m=n(1076),f=n(7624);const g=["className","component","disableGutters","fixed","maxWidth","classes"],h=(0,m.c)(),x=p("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${(0,c.c)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),v=e=>(0,u.c)({props:e,name:"MuiContainer",defaultTheme:h});var w=n(3068),b=n(6940),S=n(440);const k=function(e={}){const{createStyledComponent:t=x,useThemeProps:n=v,componentName:o="MuiContainer"}=e,u=t((({theme:e,ownerState:t})=>(0,a.c)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,n)=>{const r=n,o=e.breakpoints.values[r];return 0!==o&&(t[e.breakpoints.up(r)]={maxWidth:`${o}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,a.c)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}))),p=r.forwardRef((function(e,t){const r=n(e),{className:p,component:m="div",disableGutters:h=!1,fixed:x=!1,maxWidth:v="lg"}=r,w=(0,i.c)(r,g),b=(0,a.c)({},r,{component:m,disableGutters:h,fixed:x,maxWidth:v}),S=((e,t)=>{const{classes:n,fixed:r,disableGutters:o,maxWidth:i}=e,a={root:["root",i&&`maxWidth${(0,c.c)(String(i))}`,r&&"fixed",o&&"disableGutters"]};return(0,d.c)(a,(e=>(0,l.cp)(t,e)),n)})(b,o);return(0,f.jsx)(u,(0,a.c)({as:m,ownerState:b,className:(0,s.c)(S.root,p),ref:t},w))}));return p}({createStyledComponent:(0,b.cp)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${(0,w.c)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,S.c)({props:e,name:"MuiContainer"})});var $=k,W=n(5920),M=n(9632),y=n.n(M);var N=e=>{let{title:t,maxWidth:n,location:i,children:a,navJson:s}=e;if("undefined"!=typeof window){const e="undefined"==typeof window?{}:window;void 0===e.cachedScrollTop&&(e.cachedScrollTop={});const t=(i||{}).pathname||"#",{document:n,lastPathname:r,cachedScrollTop:o}=e;if(r!==t){const e=o[t];n&&n.getElementById("main")&&(n.getElementById("main").scrollTop=e||0)}e.lastPathname=t}const{setTitle:c,setNavJson:l}=(0,r.useContext)(W.c);c(t||y().title),l(s||"");const[d,u]=r.useState(!1);return r.useEffect((()=>{u(!0)}),[]),r.createElement(o.c,{in:d,timeout:200,classNames:"fade"},r.createElement("div",{style:{opacity:"0"}},r.createElement($,{maxWidth:n||"lg",sx:{mt:4,mb:4}},a)))}},3103:function(e,t,n){var r=n(1504),o=n(4433);t.c=e=>{var t,n,i;let{description:a,title:s,children:c}=e;const{site:l}=(0,o.useStaticQuery)("2841359383"),d=a||l.siteMetadata.description,u=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,s&&s!==u?s+" - "+u:u),r.createElement("meta",{name:"description",content:d}),r.createElement("meta",{property:"og:title",content:s}),r.createElement("meta",{property:"og:description",content:d}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(n=l.siteMetadata)||void 0===n||null===(i=n.social)||void 0===i?void 0:i.twitter)||""}),r.createElement("meta",{name:"twitter:title",content:s}),r.createElement("meta",{name:"twitter:description",content:d}),r.createElement("style",null,"\n  "),c)}}}]);
//# sourceMappingURL=5d58a12e3c0e158cee6f8646f613661cc199653a-c8a0d670d3ac39eb4a9c.js.map