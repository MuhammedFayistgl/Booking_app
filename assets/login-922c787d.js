import{v as o,s as r,aq as t,b as c,r as m,as as p,j as e,a9 as d,at as g,au as u,al as x,am as h,av as j}from"./index-f269b19c.js";import f from"./Navbar-672ac146.js";import"./Nav-065d5041.js";import"./Typography-b472ff3e.js";const E=()=>{const i=o(),n=r();t();const a=c(s=>s.loginSlice);console.log("state.cookie",a),a!=null&&a.cookie&&n(-1),m.useEffect(()=>{i(p())},[]);const l=s=>{console.log("submited"),s.preventDefault(),i(j(a==null?void 0:a.loginData))};return e.jsxs(e.Fragment,{children:[e.jsx(f,{}),e.jsx(d,{}),e.jsx("div",{className:"login-login",children:e.jsxs("div",{className:"login-app",children:[e.jsx("div",{className:"login-bg"}),e.jsxs("form",{className:"login-form",onSubmit:l,children:[e.jsx("header",{children:e.jsx("label",{htmlFor:"file",children:e.jsx("img",{className:"login-profileimg",src:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"})})}),e.jsx("input",{style:{display:"none"},type:"file",name:"file",id:"file"}),e.jsxs("div",{className:"login-inputs",children:[(a==null?void 0:a.emailErr)&&e.jsx("span",{className:"errr",children:" please enter valid Email"}),e.jsx("input",{required:!0,value:a==null?void 0:a.Email,name:"Email",type:"text",placeholder:"Email",onChange:s=>i(g({[s.target.name]:s.target.value}))}),e.jsx("input",{required:!0,value:a==null?void 0:a.Password,name:"password",type:"password",placeholder:"password",onChange:s=>i(u({[s.target.name]:s.target.value}))}),e.jsx(x,{loading:a==null?void 0:a.loading,color:"cyan",className:"login-submit",type:"submit",appearance:"primary",children:"Continue"})]})]}),e.jsx("footer",{children:e.jsxs("p",{children:["Don't have an account?",e.jsx(h,{to:"/signUp",children:"Sign Up "})]})})]})})]})};export{E as default};
