"use strict";(self.webpackChunkmemset0_blog=self.webpackChunkmemset0_blog||[]).push([[860],{56:function(e,t,o){var r=o(2411);t.c=void 0;var n=r(o(3540)),l=o(7624);t.c=(0,n.default)((0,l.jsx)("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2M5 8V7h2v3.82C5.84 10.4 5 9.3 5 8m14 0c0 1.3-.84 2.4-2 2.82V7h2z"}),"EmojiEvents")},6052:function(e,t,o){o.r(t),o.d(t,{Head:function(){return rt},default:function(){return nt}});var r=o(1504),n=o(4433),l=o(1536),i=o(5656),a=o(5072),c=(o(2168),o(5456)),s=o(3864),d=o(2760),u=o(6940),p=o(440),m=o(2592),f=o(9184);let h;function b(){if(h)return h;const e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),h="reverse",e.scrollLeft>0?h="default":(e.scrollLeft=1,0===e.scrollLeft&&(h="negative")),document.body.removeChild(e),h}function v(e,t){const o=e.scrollLeft;if("rtl"!==t)return o;switch(b()){case"negative":return e.scrollWidth-e.clientWidth+o;case"reverse":return e.scrollWidth-e.clientWidth-o;default:return o}}function x(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var g=o(8260),w=o(8060),S=o(7624);const y=["onChange"],C={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};var E=o(4844),M=(0,E.c)((0,S.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),T=(0,E.c)((0,S.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight"),R=o(7948),B=o(888),N=o(1444);function k(e){return(0,N.cp)("MuiTabScrollButton",e)}var I=(0,B.c)("MuiTabScrollButton",["root","vertical","horizontal","disabled"]);const W=["className","slots","slotProps","direction","orientation","disabled"],A=(0,u.cp)(R.c,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.orientation&&t[o.orientation]]}})((({ownerState:e})=>(0,a.c)({width:40,flexShrink:0,opacity:.8,[`&.${I.disabled}`]:{opacity:0}},"vertical"===e.orientation&&{width:"100%",height:40,"& svg":{transform:`rotate(${e.isRtl?-90:90}deg)`}})));var L=r.forwardRef((function(e,t){var o,r;const n=(0,p.c)({props:e,name:"MuiTabScrollButton"}),{className:l,slots:u={},slotProps:f={},direction:h}=n,b=(0,i.c)(n,W),v="rtl"===(0,m.c)().direction,x=(0,a.c)({isRtl:v},n),g=(e=>{const{classes:t,orientation:o,disabled:r}=e,n={root:["root",o,r&&"disabled"]};return(0,s.c)(n,k,t)})(x),w=null!=(o=u.StartScrollButtonIcon)?o:M,y=null!=(r=u.EndScrollButtonIcon)?r:T,C=(0,d.Q)({elementType:w,externalSlotProps:f.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:x}),E=(0,d.Q)({elementType:y,externalSlotProps:f.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:x});return(0,S.jsx)(A,(0,a.c)({component:"div",className:(0,c.c)(g.root,l),ref:t,role:null,ownerState:x,tabIndex:null},b,{children:"left"===h?(0,S.jsx)(w,(0,a.c)({},C)):(0,S.jsx)(y,(0,a.c)({},E))}))})),P=o(9092);function j(e){return(0,N.cp)("MuiTabs",e)}var z=(0,B.c)("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),O=o(8472);const D=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],F=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,H=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,$=(e,t,o)=>{let r=!1,n=o(e,t);for(;n;){if(n===e.firstChild){if(r)return;r=!0}const t=n.disabled||"true"===n.getAttribute("aria-disabled");if(n.hasAttribute("tabindex")&&!t)return void n.focus();n=o(e,n)}},X=(0,u.cp)("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${z.scrollButtons}`]:t.scrollButtons},{[`& .${z.scrollButtons}`]:o.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,o.vertical&&t.vertical]}})((({ownerState:e,theme:t})=>(0,a.c)({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},e.vertical&&{flexDirection:"column"},e.scrollButtonsHideMobile&&{[`& .${z.scrollButtons}`]:{[t.breakpoints.down("sm")]:{display:"none"}}}))),_=(0,u.cp)("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.scroller,o.fixed&&t.fixed,o.hideScrollbar&&t.hideScrollbar,o.scrollableX&&t.scrollableX,o.scrollableY&&t.scrollableY]}})((({ownerState:e})=>(0,a.c)({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},e.fixed&&{overflowX:"hidden",width:"100%"},e.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},e.scrollableX&&{overflowX:"auto",overflowY:"hidden"},e.scrollableY&&{overflowY:"auto",overflowX:"hidden"}))),V=(0,u.cp)("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.flexContainer,o.vertical&&t.flexContainerVertical,o.centered&&t.centered]}})((({ownerState:e})=>(0,a.c)({display:"flex"},e.vertical&&{flexDirection:"column"},e.centered&&{justifyContent:"center"}))),Y=(0,u.cp)("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})((({ownerState:e,theme:t})=>(0,a.c)({position:"absolute",height:2,bottom:0,width:"100%",transition:t.transitions.create()},"primary"===e.indicatorColor&&{backgroundColor:(t.vars||t).palette.primary.main},"secondary"===e.indicatorColor&&{backgroundColor:(t.vars||t).palette.secondary.main},e.vertical&&{height:"100%",width:2,right:0}))),G=(0,u.cp)((function(e){const{onChange:t}=e,o=(0,i.c)(e,y),n=r.useRef(),l=r.useRef(null),c=()=>{n.current=l.current.offsetHeight-l.current.clientHeight};return(0,g.c)((()=>{const e=(0,f.c)((()=>{const e=n.current;c(),e!==n.current&&t(n.current)})),o=(0,w.c)(l.current);return o.addEventListener("resize",e),()=>{e.clear(),o.removeEventListener("resize",e)}}),[t]),r.useEffect((()=>{c(),t(n.current)}),[t]),(0,S.jsx)("div",(0,a.c)({style:C,ref:l},o))}))({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),J={};var Q=r.forwardRef((function(e,t){const o=(0,p.c)({props:e,name:"MuiTabs"}),n=(0,m.c)(),l="rtl"===n.direction,{"aria-label":u,"aria-labelledby":h,action:g,centered:y=!1,children:C,className:E,component:M="div",allowScrollButtonsMobile:T=!1,indicatorColor:R="primary",onChange:B,orientation:N="horizontal",ScrollButtonComponent:k=L,scrollButtons:I="auto",selectionFollowsFocus:W,slots:A={},slotProps:z={},TabIndicatorProps:Q={},TabScrollButtonProps:q={},textColor:K="primary",value:U,variant:Z="standard",visibleScrollbar:ee=!1}=o,te=(0,i.c)(o,D),oe="scrollable"===Z,re="vertical"===N,ne=re?"scrollTop":"scrollLeft",le=re?"top":"left",ie=re?"bottom":"right",ae=re?"clientHeight":"clientWidth",ce=re?"height":"width",se=(0,a.c)({},o,{component:M,allowScrollButtonsMobile:T,indicatorColor:R,orientation:N,vertical:re,scrollButtons:I,textColor:K,variant:Z,visibleScrollbar:ee,fixed:!oe,hideScrollbar:oe&&!ee,scrollableX:oe&&!re,scrollableY:oe&&re,centered:y&&!oe,scrollButtonsHideMobile:!T}),de=(e=>{const{vertical:t,fixed:o,hideScrollbar:r,scrollableX:n,scrollableY:l,centered:i,scrollButtonsHideMobile:a,classes:c}=e,d={root:["root",t&&"vertical"],scroller:["scroller",o&&"fixed",r&&"hideScrollbar",n&&"scrollableX",l&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",i&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",a&&"scrollButtonsHideMobile"],scrollableX:[n&&"scrollableX"],hideScrollbar:[r&&"hideScrollbar"]};return(0,s.c)(d,j,c)})(se),ue=(0,d.Q)({elementType:A.StartScrollButtonIcon,externalSlotProps:z.startScrollButtonIcon,ownerState:se}),pe=(0,d.Q)({elementType:A.EndScrollButtonIcon,externalSlotProps:z.endScrollButtonIcon,ownerState:se});const[me,fe]=r.useState(!1),[he,be]=r.useState(J),[ve,xe]=r.useState(!1),[ge,we]=r.useState(!1),[Se,ye]=r.useState(!1),[Ce,Ee]=r.useState({overflow:"hidden",scrollbarWidth:0}),Me=new Map,Te=r.useRef(null),Re=r.useRef(null),Be=()=>{const e=Te.current;let t,o;if(e){const o=e.getBoundingClientRect();t={clientWidth:e.clientWidth,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop,scrollLeftNormalized:v(e,n.direction),scrollWidth:e.scrollWidth,top:o.top,bottom:o.bottom,left:o.left,right:o.right}}if(e&&!1!==U){const e=Re.current.children;if(e.length>0){const t=e[Me.get(U)];0,o=t?t.getBoundingClientRect():null}}return{tabsMeta:t,tabMeta:o}},Ne=(0,P.c)((()=>{const{tabsMeta:e,tabMeta:t}=Be();let o,r=0;if(re)o="top",t&&e&&(r=t.top-e.top+e.scrollTop);else if(o=l?"right":"left",t&&e){const n=l?e.scrollLeftNormalized+e.clientWidth-e.scrollWidth:e.scrollLeft;r=(l?-1:1)*(t[o]-e[o]+n)}const n={[o]:r,[ce]:t?t[ce]:0};if(isNaN(he[o])||isNaN(he[ce]))be(n);else{const e=Math.abs(he[o]-n[o]),t=Math.abs(he[ce]-n[ce]);(e>=1||t>=1)&&be(n)}})),ke=(e,{animation:t=!0}={})=>{t?function(e,t,o,r={},n=(()=>{})){const{ease:l=x,duration:i=300}=r;let a=null;const c=t[e];let s=!1;const d=()=>{s=!0},u=r=>{if(s)return void n(new Error("Animation cancelled"));null===a&&(a=r);const d=Math.min(1,(r-a)/i);t[e]=l(d)*(o-c)+c,d>=1?requestAnimationFrame((()=>{n(null)})):requestAnimationFrame(u)};c===o?n(new Error("Element already at target position")):requestAnimationFrame(u)}(ne,Te.current,e,{duration:n.transitions.duration.standard}):Te.current[ne]=e},Ie=e=>{let t=Te.current[ne];re?t+=e:(t+=e*(l?-1:1),t*=l&&"reverse"===b()?-1:1),ke(t)},We=()=>{const e=Te.current[ae];let t=0;const o=Array.from(Re.current.children);for(let r=0;r<o.length;r+=1){const n=o[r];if(t+n[ae]>e){0===r&&(t=e);break}t+=n[ae]}return t},Ae=()=>{Ie(-1*We())},Le=()=>{Ie(We())},Pe=r.useCallback((e=>{Ee({overflow:null,scrollbarWidth:e})}),[]),je=(0,P.c)((e=>{const{tabsMeta:t,tabMeta:o}=Be();if(o&&t)if(o[le]<t[le]){const r=t[ne]+(o[le]-t[le]);ke(r,{animation:e})}else if(o[ie]>t[ie]){const r=t[ne]+(o[ie]-t[ie]);ke(r,{animation:e})}})),ze=(0,P.c)((()=>{oe&&!1!==I&&ye(!Se)}));r.useEffect((()=>{const e=(0,f.c)((()=>{Te.current&&Ne()}));let t;const o=o=>{o.forEach((e=>{e.removedNodes.forEach((e=>{var o;null==(o=t)||o.unobserve(e)})),e.addedNodes.forEach((e=>{var o;null==(o=t)||o.observe(e)}))})),e(),ze()},r=(0,w.c)(Te.current);let n;return r.addEventListener("resize",e),"undefined"!=typeof ResizeObserver&&(t=new ResizeObserver(e),Array.from(Re.current.children).forEach((e=>{t.observe(e)}))),"undefined"!=typeof MutationObserver&&(n=new MutationObserver(o),n.observe(Re.current,{childList:!0})),()=>{var o,l;e.clear(),r.removeEventListener("resize",e),null==(o=n)||o.disconnect(),null==(l=t)||l.disconnect()}}),[Ne,ze]),r.useEffect((()=>{const e=Array.from(Re.current.children),t=e.length;if("undefined"!=typeof IntersectionObserver&&t>0&&oe&&!1!==I){const o=e[0],r=e[t-1],n={root:Te.current,threshold:.99},l=new IntersectionObserver((e=>{xe(!e[0].isIntersecting)}),n);l.observe(o);const i=new IntersectionObserver((e=>{we(!e[0].isIntersecting)}),n);return i.observe(r),()=>{l.disconnect(),i.disconnect()}}}),[oe,I,Se,null==C?void 0:C.length]),r.useEffect((()=>{fe(!0)}),[]),r.useEffect((()=>{Ne()})),r.useEffect((()=>{je(J!==he)}),[je,he]),r.useImperativeHandle(g,(()=>({updateIndicator:Ne,updateScrollButtons:ze})),[Ne,ze]);const Oe=(0,S.jsx)(Y,(0,a.c)({},Q,{className:(0,c.c)(de.indicator,Q.className),ownerState:se,style:(0,a.c)({},he,Q.style)}));let De=0;const Fe=r.Children.map(C,(e=>{if(!r.isValidElement(e))return null;const t=void 0===e.props.value?De:e.props.value;Me.set(t,De);const o=t===U;return De+=1,r.cloneElement(e,(0,a.c)({fullWidth:"fullWidth"===Z,indicator:o&&!me&&Oe,selected:o,selectionFollowsFocus:W,onChange:B,textColor:K,value:t},1!==De||!1!==U||e.props.tabIndex?{}:{tabIndex:0}))})),He=(()=>{const e={};e.scrollbarSizeListener=oe?(0,S.jsx)(G,{onChange:Pe,className:(0,c.c)(de.scrollableX,de.hideScrollbar)}):null;const t=oe&&("auto"===I&&(ve||ge)||!0===I);return e.scrollButtonStart=t?(0,S.jsx)(k,(0,a.c)({slots:{StartScrollButtonIcon:A.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:ue},orientation:N,direction:l?"right":"left",onClick:Ae,disabled:!ve},q,{className:(0,c.c)(de.scrollButtons,q.className)})):null,e.scrollButtonEnd=t?(0,S.jsx)(k,(0,a.c)({slots:{EndScrollButtonIcon:A.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:pe},orientation:N,direction:l?"left":"right",onClick:Le,disabled:!ge},q,{className:(0,c.c)(de.scrollButtons,q.className)})):null,e})();return(0,S.jsxs)(X,(0,a.c)({className:(0,c.c)(de.root,E),ownerState:se,ref:t,as:M},te,{children:[He.scrollButtonStart,He.scrollbarSizeListener,(0,S.jsxs)(_,{className:de.scroller,ownerState:se,style:{overflow:Ce.overflow,[re?"margin"+(l?"Left":"Right"):"marginBottom"]:ee?void 0:-Ce.scrollbarWidth},ref:Te,children:[(0,S.jsx)(V,{"aria-label":u,"aria-labelledby":h,"aria-orientation":"vertical"===N?"vertical":null,className:de.flexContainer,ownerState:se,onKeyDown:e=>{const t=Re.current,o=(0,O.c)(t).activeElement;if("tab"!==o.getAttribute("role"))return;let r="horizontal"===N?"ArrowLeft":"ArrowUp",n="horizontal"===N?"ArrowRight":"ArrowDown";switch("horizontal"===N&&l&&(r="ArrowRight",n="ArrowLeft"),e.key){case r:e.preventDefault(),$(t,o,H);break;case n:e.preventDefault(),$(t,o,F);break;case"Home":e.preventDefault(),$(t,null,F);break;case"End":e.preventDefault(),$(t,null,H)}},ref:Re,role:"tablist",children:Fe}),me&&Oe]}),He.scrollButtonEnd]}))})),q=o(3068);function K(e){return(0,N.cp)("MuiTab",e)}var U=(0,B.c)("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]);const Z=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],ee=(0,u.cp)(R.c,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.label&&o.icon&&t.labelIcon,t[`textColor${(0,q.c)(o.textColor)}`],o.fullWidth&&t.fullWidth,o.wrapped&&t.wrapped]}})((({theme:e,ownerState:t})=>(0,a.c)({},e.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},t.label&&{flexDirection:"top"===t.iconPosition||"bottom"===t.iconPosition?"column":"row"},{lineHeight:1.25},t.icon&&t.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${U.iconWrapper}`]:(0,a.c)({},"top"===t.iconPosition&&{marginBottom:6},"bottom"===t.iconPosition&&{marginTop:6},"start"===t.iconPosition&&{marginRight:e.spacing(1)},"end"===t.iconPosition&&{marginLeft:e.spacing(1)})},"inherit"===t.textColor&&{color:"inherit",opacity:.6,[`&.${U.selected}`]:{opacity:1},[`&.${U.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},"primary"===t.textColor&&{color:(e.vars||e).palette.text.secondary,[`&.${U.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${U.disabled}`]:{color:(e.vars||e).palette.text.disabled}},"secondary"===t.textColor&&{color:(e.vars||e).palette.text.secondary,[`&.${U.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${U.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},t.wrapped&&{fontSize:e.typography.pxToRem(12)})));var te=r.forwardRef((function(e,t){const o=(0,p.c)({props:e,name:"MuiTab"}),{className:n,disabled:l=!1,disableFocusRipple:d=!1,fullWidth:u,icon:m,iconPosition:f="top",indicator:h,label:b,onChange:v,onClick:x,onFocus:g,selected:w,selectionFollowsFocus:y,textColor:C="inherit",value:E,wrapped:M=!1}=o,T=(0,i.c)(o,Z),R=(0,a.c)({},o,{disabled:l,disableFocusRipple:d,selected:w,icon:!!m,iconPosition:f,label:!!b,fullWidth:u,textColor:C,wrapped:M}),B=(e=>{const{classes:t,textColor:o,fullWidth:r,wrapped:n,icon:l,label:i,selected:a,disabled:c}=e,d={root:["root",l&&i&&"labelIcon",`textColor${(0,q.c)(o)}`,r&&"fullWidth",n&&"wrapped",a&&"selected",c&&"disabled"],iconWrapper:["iconWrapper"]};return(0,s.c)(d,K,t)})(R),N=m&&b&&r.isValidElement(m)?r.cloneElement(m,{className:(0,c.c)(B.iconWrapper,m.props.className)}):m;return(0,S.jsxs)(ee,(0,a.c)({focusRipple:!d,className:(0,c.c)(B.root,n),ref:t,role:"tab","aria-selected":w,disabled:l,onClick:e=>{!w&&v&&v(e,E),x&&x(e)},onFocus:e=>{y&&!w&&v&&v(e,E),g&&g(e)},ownerState:R,tabIndex:w?0:-1},T,{children:["top"===f||"start"===f?(0,S.jsxs)(r.Fragment,{children:[N,b]}):(0,S.jsxs)(r.Fragment,{children:[b,N]}),h]}))})),oe=o(1568),re=o(7516),ne=o(6672),le=o(4477),ie=o(8857),ae=o(3964),ce=o(5800),se=o(4464),de=o(3680),ue=o(9760),pe=o(576),me=o(936),fe=o(5632),he=o(3103);var be=r.createContext({});function ve(e){return(0,N.cp)("MuiTimeline",e)}(0,B.c)("MuiTimeline",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);function xe(e){return"alternate-reverse"===e?"positionAlternateReverse":`position${(0,q.c)(e)}`}const ge=["position","className"],we=(0,u.cp)("ul",{name:"MuiTimeline",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.position&&t[xe(o.position)]]}})({display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1});var Se=r.forwardRef((function(e,t){const o=(0,p.c)({props:e,name:"MuiTimeline"}),{position:n="right",className:l}=o,d=(0,i.c)(o,ge),u=(0,a.c)({},o,{position:n}),m=(e=>{const{position:t,classes:o}=e,r={root:["root",t&&xe(t)]};return(0,s.c)(r,ve,o)})(u),f=r.useMemo((()=>({position:n})),[n]);return(0,S.jsx)(be.Provider,{value:f,children:(0,S.jsx)(we,(0,a.c)({className:(0,c.c)(m.root,l),ownerState:u,ref:t},d))})}));function ye(e){return(0,N.cp)("MuiTimelineDot",e)}(0,B.c)("MuiTimelineDot",["root","filled","outlined","filledGrey","outlinedGrey","filledPrimary","outlinedPrimary","filledSecondary","outlinedSecondary"]);const Ce=["className","color","variant"],Ee=(0,u.cp)("span",{name:"MuiTimelineDot",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t["inherit"!==o.color&&`${o.variant}${(0,q.c)(o.color)}`],t[o.variant]]}})((({ownerState:e,theme:t})=>(0,a.c)({display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:(t.vars||t).shadows[1],margin:"11.5px 0"},"filled"===e.variant&&(0,a.c)({borderColor:"transparent"},"inherit"!==e.color&&(0,a.c)({},"grey"===e.color?{color:(t.vars||t).palette.grey[50],backgroundColor:(t.vars||t).palette.grey[400]}:{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main})),"outlined"===e.variant&&(0,a.c)({boxShadow:"none",backgroundColor:"transparent"},"inherit"!==e.color&&(0,a.c)({},"grey"===e.color?{borderColor:(t.vars||t).palette.grey[400]}:{borderColor:(t.vars||t).palette[e.color].main})))));var Me=r.forwardRef((function(e,t){const o=(0,p.c)({props:e,name:"MuiTimelineDot"}),{className:r,color:n="grey",variant:l="filled"}=o,d=(0,i.c)(o,Ce),u=(0,a.c)({},o,{color:n,variant:l}),m=(e=>{const{color:t,variant:o,classes:r}=e,n={root:["root",o,"inherit"!==t&&`${o}${(0,q.c)(t)}`]};return(0,s.c)(n,ye,r)})(u);return(0,S.jsx)(Ee,(0,a.c)({className:(0,c.c)(m.root,r),ownerState:u,ref:t},d))})),Te=o(3128);function Re(e){return(0,N.cp)("MuiTimelineContent",e)}var Be=(0,B.c)("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);function Ne(e){return(0,N.cp)("MuiTimelineOppositeContent",e)}var ke=(0,B.c)("MuiTimelineOppositeContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);function Ie(e){return(0,N.cp)("MuiTimelineItem",e)}(0,B.c)("MuiTimelineItem",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse","missingOppositeContent"]);const We=["position","className"],Ae=(0,u.cp)("li",{name:"MuiTimelineItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[xe(o.position)]]}})((({ownerState:e})=>(0,a.c)({listStyle:"none",display:"flex",position:"relative",minHeight:70},"left"===e.position&&{flexDirection:"row-reverse"},("alternate"===e.position||"alternate-reverse"===e.position)&&{[`&:nth-of-type(${"alternate"===e.position?"even":"odd"})`]:{flexDirection:"row-reverse",[`& .${Be.root}`]:{textAlign:"right"},[`& .${ke.root}`]:{textAlign:"left"}}},!e.hasOppositeContent&&{"&::before":{content:'""',flex:1,padding:"6px 16px"}})));var Le=r.forwardRef((function(e,t){const o=(0,p.c)({props:e,name:"MuiTimelineItem"}),{position:n,className:l}=o,d=(0,i.c)(o,We),{position:u}=r.useContext(be);let m=!1;r.Children.forEach(o.children,(e=>{(0,Te.c)(e,["TimelineOppositeContent"])&&(m=!0)}));const f=(0,a.c)({},o,{position:n||u||"right",hasOppositeContent:m}),h=(e=>{const{position:t,classes:o,hasOppositeContent:r}=e,n={root:["root",xe(t),!r&&"missingOppositeContent"]};return(0,s.c)(n,Ie,o)})(f),b=r.useMemo((()=>({position:f.position})),[f.position]);return(0,S.jsx)(be.Provider,{value:b,children:(0,S.jsx)(Ae,(0,a.c)({className:(0,c.c)(h.root,l),ownerState:f,ref:t},d))})}));function Pe(e){return(0,N.cp)("MuiTimelineSeparator",e)}(0,B.c)("MuiTimelineSeparator",["root"]);const je=["className"],ze=(0,u.cp)("div",{name:"MuiTimelineSeparator",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"flex",flexDirection:"column",flex:0,alignItems:"center"});var Oe=r.forwardRef((function(e,t){const o=(0,p.c)({props:e,name:"MuiTimelineSeparator"}),{className:r}=o,n=(0,i.c)(o,je),l=o,d=(e=>{const{classes:t}=e;return(0,s.c)({root:["root"]},Pe,t)})(l);return(0,S.jsx)(ze,(0,a.c)({className:(0,c.c)(d.root,r),ownerState:l,ref:t},n))}));function De(e){return(0,N.cp)("MuiTimelineConnector",e)}(0,B.c)("MuiTimelineConnector",["root"]);const Fe=["className"],He=(0,u.cp)("span",{name:"MuiTimelineConnector",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({width:2,backgroundColor:(e.vars||e).palette.grey[400],flexGrow:1})));var $e=r.forwardRef((function(e,t){const o=(0,p.c)({props:e,name:"MuiTimelineConnector"}),{className:r}=o,n=(0,i.c)(o,Fe),l=o,d=(e=>{const{classes:t}=e;return(0,s.c)({root:["root"]},De,t)})(l);return(0,S.jsx)(He,(0,a.c)({className:(0,c.c)(d.root,r),ownerState:l,ref:t},n))}));const Xe=["className"],_e=(0,u.cp)(ie.c,{name:"MuiTimelineContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[xe(o.position)]]}})((({ownerState:e})=>(0,a.c)({flex:1,padding:"6px 16px",textAlign:"left"},"left"===e.position&&{textAlign:"right"})));var Ve=r.forwardRef((function(e,t){const o=(0,p.c)({props:e,name:"MuiTimelineContent"}),{className:n}=o,l=(0,i.c)(o,Xe),{position:d}=r.useContext(be),u=(0,a.c)({},o,{position:d||"right"}),m=(e=>{const{position:t,classes:o}=e,r={root:["root",xe(t)]};return(0,s.c)(r,Re,o)})(u);return(0,S.jsx)(_e,(0,a.c)({component:"div",className:(0,c.c)(m.root,n),ownerState:u,ref:t},l))}));const Ye=["className"],Ge=(0,u.cp)(ie.c,{name:"MuiTimelineOppositeContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[xe(o.position)]]}})((({ownerState:e})=>(0,a.c)({padding:"6px 16px",marginRight:"auto",textAlign:"right",flex:1},"left"===e.position&&{textAlign:"left"}))),Je=r.forwardRef((function(e,t){const o=(0,p.c)({props:e,name:"MuiTimelineOppositeContent"}),{className:n}=o,l=(0,i.c)(o,Ye),{position:d}=r.useContext(be),u=(0,a.c)({},o,{position:d||"left"}),m=(e=>{const{position:t,classes:o}=e,r={root:["root",xe(t)]};return(0,s.c)(r,Ne,o)})(u);return(0,S.jsx)(Ge,(0,a.c)({component:"div",className:(0,c.c)(m.root,n),ownerState:u,ref:t},l))}));Je.muiName="TimelineOppositeContent";var Qe=Je,qe=o(56);function Ke(e){const{content:t,...o}=e;return t instanceof Array?r.createElement(r.Fragment,null,r.createElement(ie.c,o,t[0]),r.createElement(ie.c,Object.assign({color:"text.secondary"},o),t[1])):r.createElement(ie.c,o,t)}var Ue=e=>{let{timeline:t,...o}=e;return r.createElement(re.c,o,r.createElement(le.c,{sx:{paddingBottom:"16px !important"}},r.createElement(ie.c,{variant:"h6",gutterBottom:!0},"Timeline"),r.createElement(Se,{sx:{mx:-1,my:.5,px:0,["& ."+ke.root]:{flex:.1}}},t.map(((e,o)=>r.createElement(oe.c,{component:"a",href:e.href,target:"_blank",rel:"noreferrer",sx:{color:"inherit",textDecoration:"none","& .MuiTypography-root":{transition:"opacity 0.2s"},"&:hover .MuiTypography-root":{opacity:.65}}},r.createElement(Le,{key:o},r.createElement(Qe,{color:"text.secondary",sx:{m:"auto 0",letterSpacing:"0.2px",px:1.5}},e.date),r.createElement(Oe,null,r.createElement($e,{sx:{opacity:0===o?0:1}}),r.createElement(Me,null,"award"===e.type&&r.createElement(qe.c,{fontSize:"small"})),r.createElement($e,{sx:{opacity:o+1===t.length?0:1}})),r.createElement(Ve,{sx:{py:"24px",px:"16px"}},r.createElement(oe.c,{sx:{float:"left"}},r.createElement(Ke,{content:e.name,component:"div",variant:"body1"})),e.award&&r.createElement(oe.c,{sx:{float:"right"}},r.createElement(Ke,{content:e.award,component:"div",variant:"body1",sx:{fontStyle:"italic",textAlign:"right",opacity:"0.72"}}))))))))))},Ze=o(9964),et=o(9632),tt=o.n(et);function ot(e){const{html:t,value:o,index:n,...l}=e;return r.createElement("div",Object.assign({role:"tabpanel",hidden:o!==n},l),o===n&&r.createElement(le.c,{sx:{paddingTop:"8px !important",paddingBottom:"8px !important",height:"100%"}},r.createElement(ie.c,{variant:"body1"},r.createElement("section",{className:"typography",itemProp:"articleBody",dangerouslySetInnerHTML:{__html:t}}))))}const rt=()=>r.createElement(he.c,{title:"关于我"});var nt=e=>{let{data:t,location:i}=e;const[a,c]=r.useState(0),s=t.pageData.fields.propsJson,d={};for(const o of JSON.parse(s))d[o.key]=o.value;return console.log("[about] page data",t,d),r.createElement(fe.c,{maxWidth:"md",title:"关于我",location:i},r.createElement(ae.cp,{container:!0,spacing:2,sx:{mt:2}},r.createElement(ae.cp,{item:!0,xs:12,lg:4,sx:{display:"flex",flexDirection:"column"}},r.createElement(re.c,{sx:{flexGrow:1}},r.createElement(ne.c,null,r.createElement(l.S,{src:"../images/avatar-4x.png",alt:tt().author.name,__imageData:o(6248)})),r.createElement(le.c,{sx:{paddingBottom:"4px !important"}},r.createElement(ie.c,{variant:"h5"},tt().author.name),r.createElement(ie.c,{variant:"body1",color:"textSecondary",sx:{mt:.5}},tt().author.summary)),r.createElement(ce.c,{dense:!0},r.createElement(se.c,{component:n.Link,href:tt().socialLink.github,target:"_blank"},r.createElement(de.c,null,r.createElement(pe.c,{fontSize:"small"})),r.createElement(ue.c,null,"Github")),r.createElement(se.c,{component:n.Link,href:tt().socialLink.codeforces,target:"_blank"},r.createElement(de.c,null,r.createElement(me.c,{fontSize:"small"})),r.createElement(ue.c,null,"Codeforces"))))),r.createElement(ae.cp,{item:!0,xs:12,lg:8,sx:{display:"flex",flexDirection:"column"}},r.createElement(re.c,null,r.createElement(le.c,{sx:{padding:{sm:"12px !important",md:"20px !important"}}},r.createElement(l.S,{src:"../images/tagcloud.png",alt:"关于 "+tt().author.name,__imageData:o(3144)}))),r.createElement(re.c,{sx:{mt:2,flexGrow:1}},r.createElement(oe.c,{sx:{borderBottom:1,borderColor:"divider"}},r.createElement(Q,{value:a,onChange:(e,t)=>{c(t)}},r.createElement(te,{label:"中文"}),r.createElement(te,{label:"English"}))),r.createElement(ot,{value:a,index:0,html:t.cn.html}),r.createElement(ot,{value:a,index:1,html:t.en.html})))),r.createElement(Ue,{timeline:d.timeline,sx:{mt:2}}),r.createElement(Ze.c,{slug:"/about",sx:{mt:2}}))}},3144:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/8d93c4792559c8afeeed91a57cedaf44/35b6a/tagcloud.png","srcSet":"/static/8d93c4792559c8afeeed91a57cedaf44/6330c/tagcloud.png 200w,\\n/static/8d93c4792559c8afeeed91a57cedaf44/e1d7b/tagcloud.png 400w,\\n/static/8d93c4792559c8afeeed91a57cedaf44/35b6a/tagcloud.png 800w","sizes":"(min-width: 800px) 800px, 100vw"},"sources":[{"srcSet":"/static/8d93c4792559c8afeeed91a57cedaf44/5501a/tagcloud.webp 200w,\\n/static/8d93c4792559c8afeeed91a57cedaf44/e3d37/tagcloud.webp 400w,\\n/static/8d93c4792559c8afeeed91a57cedaf44/f116c/tagcloud.webp 800w","type":"image/webp","sizes":"(min-width: 800px) 800px, 100vw"}]},"width":800,"height":240.99999999999997}')},6248:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#d8a8b8","images":{"fallback":{"src":"/static/8f77ef2f06d52ed967b7cda618f2dfca/c7240/avatar-4x.png","srcSet":"/static/8f77ef2f06d52ed967b7cda618f2dfca/de3a1/avatar-4x.png 150w,\\n/static/8f77ef2f06d52ed967b7cda618f2dfca/30cdc/avatar-4x.png 300w,\\n/static/8f77ef2f06d52ed967b7cda618f2dfca/c7240/avatar-4x.png 600w","sizes":"(min-width: 600px) 600px, 100vw"},"sources":[{"srcSet":"/static/8f77ef2f06d52ed967b7cda618f2dfca/c65bc/avatar-4x.webp 150w,\\n/static/8f77ef2f06d52ed967b7cda618f2dfca/078c3/avatar-4x.webp 300w,\\n/static/8f77ef2f06d52ed967b7cda618f2dfca/6d09e/avatar-4x.webp 600w","type":"image/webp","sizes":"(min-width: 600px) 600px, 100vw"}]},"width":600,"height":600}')}}]);
//# sourceMappingURL=component---src-pages-about-js-caad4fbf7d2cb69972bb.js.map