import{r as p,bn as Ie,I as ze,O as we,T as Ae,x as ae,w as re,y as P,z as T,E as ce,F as Q,A as c,j as s,G as O,H as ue,$ as Me}from"./index-f269b19c.js";import{a as Ee,u as He}from"./useIsFocusVisible-38102f88.js";let te=0;function je(e){const[o,n]=p.useState(e),i=e||o;return p.useEffect(()=>{o==null&&(te+=1,n(`mui-${te}`))},[o]),i}const ie=Ie["useId".toString()];function de(e){if(ie!==void 0){const o=ie();return e??o}return je(e)}function Le({controlled:e,default:o,name:n,state:i="value"}){const{current:t}=p.useRef(e!==void 0),[f,m]=p.useState(o),u=t?e:f,S=p.useCallback(h=>{t||m(h)},[]);return[u,S]}const Te={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},_e=Te;function Ne(){const e=ze(we);return e[Ae]||e}function Be(e){return ae("MuiSvgIcon",e)}re("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const ke=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],Oe=e=>{const{color:o,fontSize:n,classes:i}=e,t={root:["root",o!=="inherit"&&`color${T(o)}`,`fontSize${T(n)}`]};return ue(t,Be,i)},Pe=P("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.color!=="inherit"&&o[`color${T(n.color)}`],o[`fontSize${T(n.fontSize)}`]]}})(({theme:e,ownerState:o})=>{var n,i,t,f,m,u,S,h,x,a,v,d,y;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:o.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=e.transitions)==null||(i=n.create)==null?void 0:i.call(n,"fill",{duration:(t=e.transitions)==null||(t=t.duration)==null?void 0:t.shorter}),fontSize:{inherit:"inherit",small:((f=e.typography)==null||(m=f.pxToRem)==null?void 0:m.call(f,20))||"1.25rem",medium:((u=e.typography)==null||(S=u.pxToRem)==null?void 0:S.call(u,24))||"1.5rem",large:((h=e.typography)==null||(x=h.pxToRem)==null?void 0:x.call(h,35))||"2.1875rem"}[o.fontSize],color:(a=(v=(e.vars||e).palette)==null||(v=v[o.color])==null?void 0:v.main)!=null?a:{action:(d=(e.vars||e).palette)==null||(d=d.action)==null?void 0:d.active,disabled:(y=(e.vars||e).palette)==null||(y=y.action)==null?void 0:y.disabled,inherit:void 0}[o.color]}}),pe=p.forwardRef(function(o,n){const i=ce({props:o,name:"MuiSvgIcon"}),{children:t,className:f,color:m="inherit",component:u="svg",fontSize:S="medium",htmlColor:h,inheritViewBox:x=!1,titleAccess:a,viewBox:v="0 0 24 24"}=i,d=Q(i,ke),y=p.isValidElement(t)&&t.type==="svg",R=c({},i,{color:m,component:u,fontSize:S,instanceFontSize:o.fontSize,inheritViewBox:x,viewBox:v,hasSvgAsChild:y}),F={};x||(F.viewBox=v);const A=Oe(R);return s.jsxs(Pe,c({as:u,className:O(A.root,f),focusable:"false",color:h,"aria-hidden":a?void 0:!0,role:a?"img":void 0,ref:n},F,d,y&&t.props,{ownerState:R,children:[y?t.props.children:t,a?s.jsx("title",{children:a}):null]}))});pe.muiName="SvgIcon";const le=pe;function fe(e,o){function n(i,t){return s.jsx(le,c({"data-testid":`${o}Icon`,ref:t},i,{children:e}))}return n.muiName=le.muiName,p.memo(p.forwardRef(n))}const Ue=fe(s.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),De=fe(s.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");function Xe(e){return ae("MuiRating",e)}const Ge=re("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),k=Ge,We=["value"],Ye=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function qe(e,o,n){return e<o?o:e>n?n:e}function Je(e){const o=e.toString().split(".")[1];return o?o.length:0}function K(e,o){if(e==null)return e;const n=Math.round(e/o)*o;return Number(n.toFixed(Je(o)))}const Ke=e=>{const{classes:o,size:n,readOnly:i,disabled:t,emptyValueFocused:f,focusVisible:m}=e,u={root:["root",`size${T(n)}`,t&&"disabled",m&&"focusVisible",i&&"readOnly"],label:["label","pristine"],labelEmptyValue:[f&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return ue(u,Xe,o)},Qe=P("span",{name:"MuiRating",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[{[`& .${k.visuallyHidden}`]:o.visuallyHidden},o.root,o[`size${T(n.size)}`],n.readOnly&&o.readOnly]}})(({theme:e,ownerState:o})=>c({display:"inline-flex",position:"relative",fontSize:e.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent",[`&.${k.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${k.focusVisible} .${k.iconActive}`]:{outline:"1px solid #999"},[`& .${k.visuallyHidden}`]:_e},o.size==="small"&&{fontSize:e.typography.pxToRem(18)},o.size==="large"&&{fontSize:e.typography.pxToRem(30)},o.readOnly&&{pointerEvents:"none"})),me=P("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:e},o)=>[o.label,e.emptyValueFocused&&o.labelEmptyValueActive]})(({ownerState:e})=>c({cursor:"inherit"},e.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})),Ze=P("span",{name:"MuiRating",slot:"Icon",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.icon,n.iconEmpty&&o.iconEmpty,n.iconFilled&&o.iconFilled,n.iconHover&&o.iconHover,n.iconFocus&&o.iconFocus,n.iconActive&&o.iconActive]}})(({theme:e,ownerState:o})=>c({display:"flex",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),pointerEvents:"none"},o.iconActive&&{transform:"scale(1.2)"},o.iconEmpty&&{color:(e.vars||e).palette.action.disabled})),eo=P("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:e=>Me(e)&&e!=="iconActive",overridesResolver:(e,o)=>{const{iconActive:n}=e;return[o.decimal,n&&o.iconActive]}})(({iconActive:e})=>c({position:"relative"},e&&{transform:"scale(1.2)"}));function oo(e){const o=Q(e,We);return s.jsx("span",c({},o))}function se(e){const{classes:o,disabled:n,emptyIcon:i,focus:t,getLabelText:f,highlightSelectedOnly:m,hover:u,icon:S,IconContainerComponent:h,isActive:x,itemValue:a,labelProps:v,name:d,onBlur:y,onChange:R,onClick:F,onFocus:A,readOnly:U,ownerState:g,ratingValue:C,ratingValueRounded:W}=e,M=m?a===C:a<=C,D=a<=u,E=a<=t,Y=a===W,_=de(),z=s.jsx(Ze,{as:h,value:a,className:O(o.icon,M?o.iconFilled:o.iconEmpty,D&&o.iconHover,E&&o.iconFocus,x&&o.iconActive),ownerState:c({},g,{iconEmpty:!M,iconFilled:M,iconHover:D,iconFocus:E,iconActive:x}),children:i&&!M?i:S});return U?s.jsx("span",c({},v,{children:z})):s.jsxs(p.Fragment,{children:[s.jsxs(me,c({ownerState:c({},g,{emptyValueFocused:void 0}),htmlFor:_},v,{children:[z,s.jsx("span",{className:o.visuallyHidden,children:f(a)})]})),s.jsx("input",{className:o.visuallyHidden,onFocus:A,onBlur:y,onChange:R,onClick:F,disabled:n,value:a,id:_,type:"radio",name:d,checked:Y})]})}const no=s.jsx(Ue,{fontSize:"inherit"}),to=s.jsx(De,{fontSize:"inherit"});function io(e){return`${e} Star${e!==1?"s":""}`}const lo=p.forwardRef(function(o,n){const i=ce({name:"MuiRating",props:o}),{className:t,defaultValue:f=null,disabled:m=!1,emptyIcon:u=to,emptyLabelText:S="Empty",getLabelText:h=io,highlightSelectedOnly:x=!1,icon:a=no,IconContainerComponent:v=oo,max:d=5,name:y,onChange:R,onChangeActive:F,onMouseLeave:A,onMouseMove:U,precision:g=1,readOnly:C=!1,size:W="medium",value:M}=i,D=Q(i,Ye),E=de(y),[Y,_]=Le({controlled:M,default:f,name:"Rating"}),z=K(Y,g),he=Ne(),[{hover:V,focus:X},N]=p.useState({hover:-1,focus:-1});let H=z;V!==-1&&(H=V),X!==-1&&(H=X);const{isFocusVisibleRef:Z,onBlur:ve,onFocus:ge,ref:ye}=Ee(),[Se,q]=p.useState(!1),ee=p.useRef(),be=He(ye,ee,n),xe=l=>{U&&U(l);const r=ee.current,{right:b,left:G}=r.getBoundingClientRect(),{width:j}=r.firstChild.getBoundingClientRect();let L;he.direction==="rtl"?L=(b-l.clientX)/(j*d):L=(l.clientX-G)/(j*d);let $=K(d*L+g/2,g);$=qe($,g,d),N(w=>w.hover===$&&w.focus===$?w:{hover:$,focus:$}),q(!1),F&&V!==$&&F(l,$)},Re=l=>{A&&A(l);const r=-1;N({hover:r,focus:r}),F&&V!==r&&F(l,r)},oe=l=>{let r=l.target.value===""?null:parseFloat(l.target.value);V!==-1&&(r=V),_(r),R&&R(l,r)},Fe=l=>{l.clientX===0&&l.clientY===0||(N({hover:-1,focus:-1}),_(null),R&&parseFloat(l.target.value)===z&&R(l,null))},Ce=l=>{ge(l),Z.current===!0&&q(!0);const r=parseFloat(l.target.value);N(b=>({hover:b.hover,focus:r}))},Ve=l=>{if(V!==-1)return;ve(l),Z.current===!1&&q(!1);const r=-1;N(b=>({hover:b.hover,focus:r}))},[$e,ne]=p.useState(!1),B=c({},i,{defaultValue:f,disabled:m,emptyIcon:u,emptyLabelText:S,emptyValueFocused:$e,focusVisible:Se,getLabelText:h,icon:a,IconContainerComponent:v,max:d,precision:g,readOnly:C,size:W}),I=Ke(B);return s.jsxs(Qe,c({ref:be,onMouseMove:xe,onMouseLeave:Re,className:O(I.root,t,C&&"MuiRating-readOnly"),ownerState:B,role:C?"img":null,"aria-label":C?h(H):null},D,{children:[Array.from(new Array(d)).map((l,r)=>{const b=r+1,G={classes:I,disabled:m,emptyIcon:u,focus:X,getLabelText:h,highlightSelectedOnly:x,hover:V,icon:a,IconContainerComponent:v,name:E,onBlur:Ve,onChange:oe,onClick:Fe,onFocus:Ce,ratingValue:H,ratingValueRounded:z,readOnly:C,ownerState:B},j=b===Math.ceil(H)&&(V!==-1||X!==-1);if(g<1){const L=Array.from(new Array(1/g));return s.jsx(eo,{className:O(I.decimal,j&&I.iconActive),ownerState:B,iconActive:j,children:L.map(($,w)=>{const J=K(b-1+(w+1)*g,g);return s.jsx(se,c({},G,{isActive:!1,itemValue:J,labelProps:{style:L.length-1===w?{}:{width:J===H?`${(w+1)*g*100}%`:"0%",overflow:"hidden",position:"absolute"}}}),J)})},b)}return s.jsx(se,c({},G,{isActive:j,itemValue:b}),b)}),!C&&!m&&s.jsxs(me,{className:O(I.label,I.labelEmptyValue),ownerState:B,children:[s.jsx("input",{className:I.visuallyHidden,value:"",id:`${E}-empty`,type:"radio",name:E,checked:z==null,onFocus:()=>ne(!0),onBlur:()=>ne(!1),onChange:oe}),s.jsx("span",{className:I.visuallyHidden,children:S})]})]}))}),ro=lo;export{ro as R,le as S,Le as a,Ne as b,fe as c,de as u};