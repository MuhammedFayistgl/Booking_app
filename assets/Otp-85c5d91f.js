import{d as r,b as c,M as l,j as s,Y as o,ac as d,a9 as p,ad as m,aa as u}from"./index-8b56be35.js";/* empty css             */const j=()=>{const n=r(),e=c(a=>a.register),i=l();e.otpVerification&&n("/login");const t=a=>{a.preventDefault()};return s.jsxs(s.Fragment,{children:[s.jsx(o,{}),s.jsx("div",{children:s.jsx("div",{className:"login",children:s.jsxs("div",{className:"OTPapp",children:[s.jsx("div",{className:"OTPbg"}),s.jsx("form",{className:"form",onSubmit:t,children:s.jsxs("div",{className:"OTPinputs",children:[s.jsx("input",{required:!0,onChange:a=>{i(d(a.target.value))},name:"Otp",type:"number",placeholder:"OTP ",minLength:10}),s.jsx("p",{className:"light"}),!(e!=null&&e.otpVerification)&&s.jsx("span",{className:"errr",children:"OTP not mach try againe"}),s.jsx(p,{color:"cyan",className:"submit",disabled:!(e!=null&&e.otpStatus),type:"submit",appearance:"primary",onClick:()=>i(m(e)),children:"Submit OTP"})]})}),s.jsx("footer",{children:s.jsxs("p",{children:["resend OTP",s.jsx(u,{to:"/login",children:"login "})]})})]})})})]})};export{j as default};
