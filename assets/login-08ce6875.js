import{M as o,d as r,b as t,r as c,ag as p,j as e,Y as m,ah as d,ai as g,a9 as u,aa as h,aj as x}from"./index-8b56be35.js";import j from"./Navbar-16c075cd.js";import"./Nav-c0433ad8.js";import"./Typography-6af892cb.js";const y=()=>{const s=o(),n=r(),a=t(i=>i.loginSlice);console.log("state.cookie",a),a!=null&&a.cookie&&n(-1),c.useEffect(()=>{s(p())},[]);const l=i=>{console.log("submited"),i.preventDefault(),s(x(a==null?void 0:a.loginData))};return e.jsxs(e.Fragment,{children:[e.jsx(j,{}),e.jsx(m,{}),e.jsx("div",{className:"login-login",children:e.jsxs("div",{className:"login-app",children:[e.jsx("div",{className:"login-bg"}),e.jsxs("form",{className:"login-form",onSubmit:l,children:[e.jsx("header",{children:e.jsx("label",{htmlFor:"file",children:e.jsx("img",{className:"login-profileimg",src:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"})})}),e.jsx("input",{style:{display:"none"},type:"file",name:"file",id:"file"}),e.jsxs("div",{className:"login-inputs",children:[(a==null?void 0:a.emailErr)&&e.jsx("span",{className:"errr",children:" please enter valid Email"}),e.jsx("input",{required:!0,value:a==null?void 0:a.Email,name:"Email",type:"text",placeholder:"Email",onChange:i=>s(d({[i.target.name]:i.target.value}))}),e.jsx("input",{required:!0,value:a==null?void 0:a.Password,name:"password",type:"password",placeholder:"password",onChange:i=>s(g({[i.target.name]:i.target.value}))}),e.jsx(u,{loading:a==null?void 0:a.loading,color:"cyan",className:"login-submit",type:"submit",appearance:"primary",children:"Continue"})]})]}),e.jsx("footer",{children:e.jsxs("p",{children:["Don't have an account?",e.jsx(h,{to:"/signUp",children:"Sign Up "})]})})]})})]})};export{y as default};
