"use strict";(self.webpackChunkmemset0_blog=self.webpackChunkmemset0_blog||[]).push([[24],{1457:function(e,n,l){l.d(n,{Z:function(){return We}});var t={};l.r(t),l.d(t,{boolean:function(){return g},booleanish:function(){return d},commaOrSpaceSeparated:function(){return v},commaSeparated:function(){return y},number:function(){return h},overloadedBoolean:function(){return m},spaceSeparated:function(){return f}});var o=l(7294),a=l(4854);const r=["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"];class i{constructor(e,n,l){this.property=e,this.normal=n,l&&(this.space=l)}}function u(e,n){const l={},t={};let o=-1;for(;++o<e.length;)Object.assign(l,e[o].property),Object.assign(t,e[o].normal);return new i(l,t,n)}function s(e){return e.toLowerCase()}i.prototype.property={},i.prototype.normal={},i.prototype.space=null;class c{constructor(e,n){this.property=e,this.attribute=n}}c.prototype.space=null,c.prototype.boolean=!1,c.prototype.booleanish=!1,c.prototype.overloadedBoolean=!1,c.prototype.number=!1,c.prototype.commaSeparated=!1,c.prototype.spaceSeparated=!1,c.prototype.commaOrSpaceSeparated=!1,c.prototype.mustUseProperty=!1,c.prototype.defined=!1;let p=0;const g=b(),d=b(),m=b(),h=b(),f=b(),y=b(),v=b();function b(){return 2**++p}const C=Object.keys(t);class k extends c{constructor(e,n,l,o){let a=-1;if(super(e,n),x(this,"space",o),"number"==typeof l)for(;++a<C.length;){const e=C[a];x(this,C[a],(l&t[e])===t[e])}}}function x(e,n,l){l&&(e[n]=l)}k.prototype.defined=!0;const S={}.hasOwnProperty;function w(e){const n={},l={};let t;for(t in e.properties)if(S.call(e.properties,t)){const o=e.properties[t],a=new k(t,e.transform(e.attributes||{},t),o,e.space);e.mustUseProperty&&e.mustUseProperty.includes(t)&&(a.mustUseProperty=!0),n[t]=a,l[s(t)]=t,l[s(a.attribute)]=t}return new i(n,l,e.space)}const N=w({space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),O=w({space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function A(e,n){return n in e?e[n]:n}function P(e,n){return A(e,n.toLowerCase())}const E=w({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:P,properties:{xmlns:null,xmlnsXLink:null}}),D=w({transform(e,n){return"role"===n?n:"aria-"+n.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:d,ariaAutoComplete:null,ariaBusy:d,ariaChecked:d,ariaColCount:h,ariaColIndex:h,ariaColSpan:h,ariaControls:f,ariaCurrent:null,ariaDescribedBy:f,ariaDetails:null,ariaDisabled:d,ariaDropEffect:f,ariaErrorMessage:null,ariaExpanded:d,ariaFlowTo:f,ariaGrabbed:d,ariaHasPopup:null,ariaHidden:d,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:f,ariaLevel:h,ariaLive:null,ariaModal:d,ariaMultiLine:d,ariaMultiSelectable:d,ariaOrientation:null,ariaOwns:f,ariaPlaceholder:null,ariaPosInSet:h,ariaPressed:d,ariaReadOnly:d,ariaRelevant:null,ariaRequired:d,ariaRoleDescription:f,ariaRowCount:h,ariaRowIndex:h,ariaRowSpan:h,ariaSelected:d,ariaSetSize:h,ariaSort:null,ariaValueMax:h,ariaValueMin:h,ariaValueNow:h,ariaValueText:null,role:null}}),R=w({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:P,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:y,acceptCharset:f,accessKey:f,action:null,allow:null,allowFullScreen:g,allowPaymentRequest:g,allowUserMedia:g,alt:null,as:null,async:g,autoCapitalize:null,autoComplete:f,autoFocus:g,autoPlay:g,blocking:f,capture:g,charSet:null,checked:g,cite:null,className:f,cols:h,colSpan:null,content:null,contentEditable:d,controls:g,controlsList:f,coords:h|y,crossOrigin:null,data:null,dateTime:null,decoding:null,default:g,defer:g,dir:null,dirName:null,disabled:g,download:m,draggable:d,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:g,formTarget:null,headers:f,height:h,hidden:g,high:h,href:null,hrefLang:null,htmlFor:f,httpEquiv:f,id:null,imageSizes:null,imageSrcSet:null,inert:g,inputMode:null,integrity:null,is:null,isMap:g,itemId:null,itemProp:f,itemRef:f,itemScope:g,itemType:f,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:g,low:h,manifest:null,max:null,maxLength:h,media:null,method:null,min:null,minLength:h,multiple:g,muted:g,name:null,nonce:null,noModule:g,noValidate:g,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:g,optimum:h,pattern:null,ping:f,placeholder:null,playsInline:g,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:g,referrerPolicy:null,rel:f,required:g,reversed:g,rows:h,rowSpan:h,sandbox:f,scope:null,scoped:g,seamless:g,selected:g,shadowRootDelegatesFocus:g,shadowRootMode:null,shape:null,size:h,sizes:null,slot:null,span:h,spellCheck:d,src:null,srcDoc:null,srcLang:null,srcSet:null,start:h,step:null,style:null,tabIndex:h,target:null,title:null,translate:null,type:null,typeMustMatch:g,useMap:null,value:d,width:h,wrap:null,align:null,aLink:null,archive:f,axis:null,background:null,bgColor:null,border:h,borderColor:null,bottomMargin:h,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:g,declare:g,event:null,face:null,frame:null,frameBorder:null,hSpace:h,leftMargin:h,link:null,longDesc:null,lowSrc:null,marginHeight:h,marginWidth:h,noResize:g,noHref:g,noShade:g,noWrap:g,object:null,profile:null,prompt:null,rev:null,rightMargin:h,rules:null,scheme:null,scrolling:d,standby:null,summary:null,text:null,topMargin:h,valueType:null,version:null,vAlign:null,vLink:null,vSpace:h,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:g,disableRemotePlayback:g,prefix:null,property:null,results:h,security:null,unselectable:null}}),L=w({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:A,properties:{about:v,accentHeight:h,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:h,amplitude:h,arabicForm:null,ascent:h,attributeName:null,attributeType:null,azimuth:h,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:h,by:null,calcMode:null,capHeight:h,className:f,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:h,diffuseConstant:h,direction:null,display:null,dur:null,divisor:h,dominantBaseline:null,download:g,dx:null,dy:null,edgeMode:null,editable:null,elevation:h,enableBackground:null,end:null,event:null,exponent:h,externalResourcesRequired:null,fill:null,fillOpacity:h,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:y,g2:y,glyphName:y,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:h,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:h,horizOriginX:h,horizOriginY:h,id:null,ideographic:h,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:h,k:h,k1:h,k2:h,k3:h,k4:h,kernelMatrix:v,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:h,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:h,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:h,overlineThickness:h,paintOrder:null,panose1:null,path:null,pathLength:h,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:f,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:h,pointsAtY:h,pointsAtZ:h,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:v,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:v,rev:v,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:v,requiredFeatures:v,requiredFonts:v,requiredFormats:v,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:h,specularExponent:h,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:h,strikethroughThickness:h,string:null,stroke:null,strokeDashArray:v,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:h,strokeOpacity:h,strokeWidth:null,style:null,surfaceScale:h,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:v,tabIndex:h,tableValues:null,target:null,targetX:h,targetY:h,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:v,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:h,underlineThickness:h,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:h,values:null,vAlphabetic:h,vMathematical:h,vectorEffect:null,vHanging:h,vIdeographic:h,version:null,vertAdvY:h,vertOriginX:h,vertOriginY:h,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:h,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),M=u([O,N,E,D,R],"html"),T=u([O,N,E,D,L],"svg"),U={}.hasOwnProperty;function H(e,n){return e=e.replace(n.subset?function(e){const n=[];let l=-1;for(;++l<e.length;)n.push(e[l].replace(/[|\\{}()[\]^$+*?.]/g,"\\$&"));return new RegExp("(?:"+n.join("|")+")","g")}(n.subset):/["&'<>`]/g,l),n.subset||n.escapeOnly?e:e.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,(function(e,l,t){return n.format(1024*(e.charCodeAt(0)-55296)+e.charCodeAt(1)-56320+65536,t.charCodeAt(l+2),n)})).replace(/[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,l);function l(e,l,t){return n.format(e.charCodeAt(0),t.charCodeAt(l+1),n)}}const q=["AElig","AMP","Aacute","Acirc","Agrave","Aring","Atilde","Auml","COPY","Ccedil","ETH","Eacute","Ecirc","Egrave","Euml","GT","Iacute","Icirc","Igrave","Iuml","LT","Ntilde","Oacute","Ocirc","Ograve","Oslash","Otilde","Ouml","QUOT","REG","THORN","Uacute","Ucirc","Ugrave","Uuml","Yacute","aacute","acirc","acute","aelig","agrave","amp","aring","atilde","auml","brvbar","ccedil","cedil","cent","copy","curren","deg","divide","eacute","ecirc","egrave","eth","euml","frac12","frac14","frac34","gt","iacute","icirc","iexcl","igrave","iquest","iuml","laquo","lt","macr","micro","middot","nbsp","not","ntilde","oacute","ocirc","ograve","ordf","ordm","oslash","otilde","ouml","para","plusmn","pound","quot","raquo","reg","sect","shy","sup1","sup2","sup3","szlig","thorn","times","uacute","ucirc","ugrave","uml","uuml","yacute","yen","yuml"],B={nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",fnof:"ƒ",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",bull:"•",hellip:"…",prime:"′",Prime:"″",oline:"‾",frasl:"⁄",weierp:"℘",image:"ℑ",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",lang:"〈",rang:"〉",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦",quot:'"',amp:"&",lt:"<",gt:">",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",circ:"ˆ",tilde:"˜",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",permil:"‰",lsaquo:"‹",rsaquo:"›",euro:"€"},z=["cent","copy","divide","gt","lt","not","para","times"],F={}.hasOwnProperty,I={};let j;for(j in B)F.call(B,j)&&(I[B[j]]=j);function Z(e,n,l){let t,o=function(e,n,l){const t="&#x"+e.toString(16).toUpperCase();return l&&n&&!/[\dA-Fa-f]/.test(String.fromCharCode(n))?t:t+";"}(e,n,l.omitOptionalSemicolons);if((l.useNamedReferences||l.useShortestReferences)&&(t=function(e,n,l,t){const o=String.fromCharCode(e);if(F.call(I,o)){const e=I[o],a="&"+e;return l&&q.includes(e)&&!z.includes(e)&&(!t||n&&61!==n&&/[^\da-z]/i.test(String.fromCharCode(n)))?a:a+";"}return""}(e,n,l.omitOptionalSemicolons,l.attribute)),(l.useShortestReferences||!t)&&l.useShortestReferences){const t=function(e,n,l){const t="&#"+String(e);return l&&n&&!/\d/.test(String.fromCharCode(n))?t:t+";"}(e,n,l.omitOptionalSemicolons);t.length<o.length&&(o=t)}return t&&(!l.useShortestReferences||t.length<o.length)?t:o}function V(e,n){return H(e,Object.assign({format:Z},n))}function Y(e,n){const l=String(e);if("string"!=typeof n)throw new TypeError("Expected character");let t=0,o=l.indexOf(n);for(;-1!==o;)t++,o=l.indexOf(n,o+n.length);return t}function K(e,n){const l=n||{};return(""===e[e.length-1]?[...e,""]:e).join((l.padRight?" ":"")+","+(!1===l.padLeft?"":" ")).trim()}const W=/^data[-\w.:]+$/i,X=/-[a-z]/g,$=/[A-Z]/g;function G(e){return"-"+e.toLowerCase()}function _(e){return e.charAt(1).toUpperCase()}function J(e){return e.join(" ").trim()}const Q=/[ \t\n\f\r]/g;function ee(e){return"object"==typeof e?"text"===e.type&&ne(e.value):ne(e)}function ne(e){return""===e.replace(Q,"")}const le=ae(1),te=ae(-1),oe=[];function ae(e){return function(n,l,t){const o=n?n.children:oe;let a=(l||0)+e,r=o[a];if(!t)for(;r&&ee(r);)a+=e,r=o[a];return r}}const re={}.hasOwnProperty;function ie(e){return function(n,l,t){return re.call(e,n.tagName)&&e[n.tagName](n,l,t)}}const ue=ie({body:function(e,n,l){const t=le(l,n);return!t||"comment"!==t.type},caption:se,colgroup:se,dd:function(e,n,l){const t=le(l,n);return!t||"element"===t.type&&("dt"===t.tagName||"dd"===t.tagName)},dt:function(e,n,l){const t=le(l,n);return Boolean(t&&"element"===t.type&&("dt"===t.tagName||"dd"===t.tagName))},head:se,html:function(e,n,l){const t=le(l,n);return!t||"comment"!==t.type},li:function(e,n,l){const t=le(l,n);return!t||"element"===t.type&&"li"===t.tagName},optgroup:function(e,n,l){const t=le(l,n);return!t||"element"===t.type&&"optgroup"===t.tagName},option:function(e,n,l){const t=le(l,n);return!t||"element"===t.type&&("option"===t.tagName||"optgroup"===t.tagName)},p:function(e,n,l){const t=le(l,n);return t?"element"===t.type&&("address"===t.tagName||"article"===t.tagName||"aside"===t.tagName||"blockquote"===t.tagName||"details"===t.tagName||"div"===t.tagName||"dl"===t.tagName||"fieldset"===t.tagName||"figcaption"===t.tagName||"figure"===t.tagName||"footer"===t.tagName||"form"===t.tagName||"h1"===t.tagName||"h2"===t.tagName||"h3"===t.tagName||"h4"===t.tagName||"h5"===t.tagName||"h6"===t.tagName||"header"===t.tagName||"hgroup"===t.tagName||"hr"===t.tagName||"main"===t.tagName||"menu"===t.tagName||"nav"===t.tagName||"ol"===t.tagName||"p"===t.tagName||"pre"===t.tagName||"section"===t.tagName||"table"===t.tagName||"ul"===t.tagName):!l||!("element"===l.type&&("a"===l.tagName||"audio"===l.tagName||"del"===l.tagName||"ins"===l.tagName||"map"===l.tagName||"noscript"===l.tagName||"video"===l.tagName))},rp:ce,rt:ce,tbody:function(e,n,l){const t=le(l,n);return!t||"element"===t.type&&("tbody"===t.tagName||"tfoot"===t.tagName)},td:pe,tfoot:function(e,n,l){return!le(l,n)},th:pe,thead:function(e,n,l){const t=le(l,n);return Boolean(t&&"element"===t.type&&("tbody"===t.tagName||"tfoot"===t.tagName))},tr:function(e,n,l){const t=le(l,n);return!t||"element"===t.type&&"tr"===t.tagName}});function se(e,n,l){const t=le(l,n,!0);return!t||"comment"!==t.type&&!("text"===t.type&&ee(t.value.charAt(0)))}function ce(e,n,l){const t=le(l,n);return!t||"element"===t.type&&("rp"===t.tagName||"rt"===t.tagName)}function pe(e,n,l){const t=le(l,n);return!t||"element"===t.type&&("td"===t.tagName||"th"===t.tagName)}const ge=ie({body:function(e){const n=le(e,-1,!0);return!(n&&("comment"===n.type||"text"===n.type&&ee(n.value.charAt(0))||"element"===n.type&&("meta"===n.tagName||"link"===n.tagName||"script"===n.tagName||"style"===n.tagName||"template"===n.tagName)))},colgroup:function(e,n,l){const t=te(l,n),o=le(e,-1,!0);if(l&&t&&"element"===t.type&&"colgroup"===t.tagName&&ue(t,l.children.indexOf(t),l))return!1;return Boolean(o&&"element"===o.type&&"col"===o.tagName)},head:function(e){const n=e.children,l=[];let t=-1;for(;++t<n.length;){const e=n[t];if("element"===e.type&&("title"===e.tagName||"base"===e.tagName)){if(l.includes(e.tagName))return!1;l.push(e.tagName)}}return n.length>0},html:function(e){const n=le(e,-1);return!n||"comment"!==n.type},tbody:function(e,n,l){const t=te(l,n),o=le(e,-1);if(l&&t&&"element"===t.type&&("thead"===t.tagName||"tbody"===t.tagName)&&ue(t,l.children.indexOf(t),l))return!1;return Boolean(o&&"element"===o.type&&"tr"===o.tagName)}});const de={name:[["\t\n\f\r &/=>".split(""),"\t\n\f\r \"&'/=>`".split("")],["\0\t\n\f\r \"&'/<=>".split(""),"\0\t\n\f\r \"&'/<=>`".split("")]],unquoted:[["\t\n\f\r &>".split(""),"\0\t\n\f\r \"&'<=>`".split("")],["\0\t\n\f\r \"&'<=>`".split(""),"\0\t\n\f\r \"&'<=>`".split("")]],single:[["&'".split(""),"\"&'`".split("")],["\0&'".split(""),"\0\"&'`".split("")]],double:[['"&'.split(""),"\"&'`".split("")],['\0"&'.split(""),"\0\"&'`".split("")]]};function me(e,n,l){const t=function(e,n){const l=s(n);let t=n,o=c;if(l in e.normal)return e.property[e.normal[l]];if(l.length>4&&"data"===l.slice(0,4)&&W.test(n)){if("-"===n.charAt(4)){const e=n.slice(5).replace(X,_);t="data"+e.charAt(0).toUpperCase()+e.slice(1)}else{const e=n.slice(4);if(!X.test(e)){let l=e.replace($,G);"-"!==l.charAt(0)&&(l="-"+l),n="data"+l}}o=k}return new o(t,n)}(e.schema,n),o=e.settings.allowParseErrors&&"html"===e.schema.space?0:1,a=e.settings.allowDangerousCharacters?0:1;let r,i=e.quote;if(!t.overloadedBoolean||l!==t.attribute&&""!==l?(t.boolean||t.overloadedBoolean&&"string"!=typeof l)&&(l=Boolean(l)):l=!0,null==l||!1===l||"number"==typeof l&&Number.isNaN(l))return"";const u=V(t.attribute,Object.assign({},e.settings.characterReferences,{subset:de.name[o][a]}));return!0===l?u:(l=Array.isArray(l)?(t.commaSeparated?K:J)(l,{padLeft:!e.settings.tightCommaSeparatedLists}):String(l),e.settings.collapseEmptyAttributes&&!l?u:(e.settings.preferUnquoted&&(r=V(l,Object.assign({},e.settings.characterReferences,{attribute:!0,subset:de.unquoted[o][a]}))),r!==l&&(e.settings.quoteSmart&&Y(l,i)>Y(l,e.alternative)&&(i=e.alternative),r=i+V(l,Object.assign({},e.settings.characterReferences,{subset:("'"===i?de.single:de.double)[o][a],attribute:!0}))+i),u+(r?"="+r:r)))}function he(e,n,l,t){return!l||"element"!==l.type||"script"!==l.tagName&&"style"!==l.tagName?V(e.value,Object.assign({},t.settings.characterReferences,{subset:["<","&"]})):e.value}const fe=function(e,n){const l=n||{};function t(n,...l){let o=t.invalid;const a=t.handlers;if(n&&U.call(n,e)){const l=String(n[e]);o=U.call(a,l)?a[l]:t.unknown}if(o)return o.call(this,n,...l)}return t.handlers=l.handlers||{},t.invalid=l.invalid,t.unknown=l.unknown,t}("type",{invalid:function(e){throw new Error("Expected node, not `"+e+"`")},unknown:function(e){throw new Error("Cannot compile unknown node `"+e.type+"`")},handlers:{comment:function(e,n,l,t){return t.settings.bogusComments?"<?"+V(e.value,Object.assign({},t.settings.characterReferences,{subset:[">"]}))+">":"\x3c!--"+e.value.replace(/^>|^->|<!--|-->|--!>|<!-$/g,(function(e){return V(e,Object.assign({},t.settings.characterReferences,{subset:["<",">"]}))}))+"--\x3e"},doctype:function(e,n,l,t){return"<!"+(t.settings.upperDoctype?"DOCTYPE":"doctype")+(t.settings.tightDoctype?"":" ")+"html>"},element:function(e,n,l,t){const o=t.schema,a="svg"!==o.space&&t.settings.omitOptionalTags;let r="svg"===o.space?t.settings.closeEmptyElements:t.settings.voids.includes(e.tagName.toLowerCase());const i=[];let u;"html"===o.space&&"svg"===e.tagName&&(t.schema=T);const s=function(e,n){const l=[];let t,o=-1;if(n)for(t in n)if(null!==n[t]&&void 0!==n[t]){const o=me(e,t,n[t]);o&&l.push(o)}for(;++o<l.length;){const n=e.settings.tightAttributes?l[o].charAt(l[o].length-1):void 0;o!==l.length-1&&'"'!==n&&"'"!==n&&(l[o]+=" ")}return l.join("")}(t,e.properties),c=t.all("html"===o.space&&"template"===e.tagName?e.content:e);return t.schema=o,c&&(r=!1),!s&&a&&ge(e,n,l)||(i.push("<",e.tagName,s?" "+s:""),r&&("svg"===o.space||t.settings.closeSelfClosing)&&(u=s.charAt(s.length-1),(!t.settings.tightSelfClosing||"/"===u||u&&'"'!==u&&"'"!==u)&&i.push(" "),i.push("/")),i.push(">")),i.push(c),r||a&&ue(e,n,l)||i.push("</"+e.tagName+">"),i.join("")},raw:function(e,n,l,t){return t.settings.allowDangerousHtml?e.value:he(e,0,l,t)},root:function(e,n,l,t){return t.all(e)},text:he}});const ye={},ve={},be=[];function Ce(e,n){const l=n||ye,t=l.quote||'"',o='"'===t?"'":'"';if('"'!==t&&"'"!==t)throw new Error("Invalid quote `"+t+"`, expected `'` or `\"`");return{one:ke,all:xe,settings:{omitOptionalTags:l.omitOptionalTags||!1,allowParseErrors:l.allowParseErrors||!1,allowDangerousCharacters:l.allowDangerousCharacters||!1,quoteSmart:l.quoteSmart||!1,preferUnquoted:l.preferUnquoted||!1,tightAttributes:l.tightAttributes||!1,upperDoctype:l.upperDoctype||!1,tightDoctype:l.tightDoctype||!1,bogusComments:l.bogusComments||!1,tightCommaSeparatedLists:l.tightCommaSeparatedLists||!1,tightSelfClosing:l.tightSelfClosing||!1,collapseEmptyAttributes:l.collapseEmptyAttributes||!1,allowDangerousHtml:l.allowDangerousHtml||!1,voids:l.voids||r,characterReferences:l.characterReferences||ve,closeSelfClosing:l.closeSelfClosing||!1,closeEmptyElements:l.closeEmptyElements||!1},schema:"svg"===l.space?T:M,quote:t,alternative:o}.one(Array.isArray(e)?{type:"root",children:e}:e,void 0,void 0)}function ke(e,n,l){return fe(e,n,l,this)}function xe(e){const n=[],l=e&&e.children||be;let t=-1;for(;++t<l.length;)n[t]=this.one(l[t],t,e);return n.join("")}var Se=l(8032),we=l(1508),Ne=l(5295),Oe=l(7462),Ae=l(3366),Pe=l(512),Ee=l(4780),De=l(1657),Re=l(948),Le=l(1588),Me=l(4867);function Te(e){return(0,Me.Z)("MuiCardActionArea",e)}var Ue=(0,Le.Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),He=l(6637),qe=l(5893);const Be=["children","className","focusVisibleClassName"],ze=(0,Re.ZP)(He.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(e,n)=>n.root})((({theme:e})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${Ue.focusHighlight}`]:{opacity:(e.vars||e).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${Ue.focusVisible} .${Ue.focusHighlight}`]:{opacity:(e.vars||e).palette.action.focusOpacity}}))),Fe=(0,Re.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(e,n)=>n.focusHighlight})((({theme:e})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})})));var Ie=o.forwardRef((function(e,n){const l=(0,De.Z)({props:e,name:"MuiCardActionArea"}),{children:t,className:o,focusVisibleClassName:a}=l,r=(0,Ae.Z)(l,Be),i=l,u=(e=>{const{classes:n}=e;return(0,Ee.Z)({root:["root"],focusHighlight:["focusHighlight"]},Te,n)})(i);return(0,qe.jsxs)(ze,(0,Oe.Z)({className:(0,Pe.Z)(u.root,o),focusVisibleClassName:(0,Pe.Z)(a,u.focusVisible),ref:n,ownerState:i},r,{children:[t,(0,qe.jsx)(Fe,{className:u.focusHighlight,ownerState:i})]}))})),je=l(2643),Ze=l(4962),Ve=l(5725),Ye=l(2658),Ke=l(7529);var We=e=>{let{posts:n}=e;return o.createElement(o.Fragment,null,n.map((e=>{const n=!!e.node.fields.cover,l=e=>{if(e instanceof Array)for(const n of e)l(n);else e.tagName&&"blockquote"===e.tagName&&(e.tagName="div"),e.children&&l(e.children)};return l(e.node.excerptAst),o.createElement(Ne.Z,{sx:{mt:2,display:"flex"},key:e.node.id},o.createElement(Ve.ZP,{container:!0,direction:"row-reverse"},o.createElement(Ve.ZP,{item:!0,xs:12,md:5},o.createElement(a.Link,{to:e.node.fields.slug,style:{color:"inherit"}},o.createElement(Ie,{sx:{height:"100%"}},n&&o.createElement(Ze.Z,{component:"div",sx:{width:"100%",height:"100%",maxHeight:{xs:"18rem",md:"100%"}}},o.createElement(Se.G,{image:(0,Se.c)(e.node.fields.cover),style:{position:"relative",height:"100%"},imgStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},alt:""}))))),o.createElement(Ve.ZP,{item:!0,xs:12,md:n?7:12},o.createElement(we.Z,{style:{display:"flex",flexDirection:"column"}},o.createElement(je.Z,{style:{flex:"1 0 auto",padding:"20px"}},o.createElement(Ye.Z,{component:"div",variant:"h6",sx:{lineHeight:1.35,textIndent:(0,Ke.J)(e.node.frontmatter.title)?"-0.3em":0}},o.createElement(a.Link,{to:e.node.fields.slug,style:{textDecoration:"none",color:"inherit"}},e.node.frontmatter.title)),o.createElement(Ye.Z,{variant:"subtitle1",color:"text.secondary",component:"div"},e.node.frontmatter.date),o.createElement(Ye.Z,{variant:"body2",sx:{minHeight:"16px",marginBottom:"-16px"}},o.createElement("section",{className:"typography",itemProp:"articleBody",dangerouslySetInnerHTML:{__html:Ce(e.node.excerptAst)}})))))))})))}}}]);
//# sourceMappingURL=c4c1dce20d52744b9487accec89e7a7a76028401-ee55fda90cdb54dc7047.js.map