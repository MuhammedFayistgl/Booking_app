import{b as l,d as i,j as s,P as c,B as t,r as o}from"./index-8b56be35.js";import d from"./Navbar-16c075cd.js";import x from"./Header-050f5203.js";import{R as h}from"./Rating-21700821.js";import"./Nav-c0433ad8.js";import"./Typography-6af892cb.js";import"./Searchbox-0caa3cad.js";/* empty css                  */import"./useIsFocusVisible-44ffdc27.js";const p=({options:r})=>{const a=l(e=>e.HotelSlice.allHotals.data),n=i();return s.jsx(s.Fragment,{children:a==null?void 0:a.map(e=>s.jsxs(c,{className:"searchItem",children:[s.jsx("img",{onClick:()=>n("/hotel",{state:e}),src:e.profilImg,alt:"",className:"siImg"}),s.jsxs(t,{className:"siDesc",children:[s.jsx("h1",{onClick:()=>n("/hotel",{state:e}),className:"siTitle",children:e.name}),s.jsx("span",{className:"siDistance",children:`${e.place} from center`}),s.jsx("span",{className:"siCancelOp",children:"Free cancellation "})]}),s.jsxs(t,{className:"siDetails",children:[s.jsxs("div",{className:"siRating",children:[s.jsxs("div",{className:"star-rate",children:[e.rating===5&&s.jsx("span",{style:{color:"green"},children:"Excellent"}),e.rating===4&&s.jsx("span",{style:{color:"green"},children:"Excellent"}),e.rating===3&&s.jsx("span",{style:{color:"#ffc107"},children:"good"}),e.rating===2&&s.jsx("span",{style:{color:"red"},children:"Avarage"}),e.rating===1&&s.jsx("span",{style:{color:"red"},children:"Avarage"}),s.jsx("div",{className:"stars",children:s.jsx(h,{name:"read-only",size:"small",value:e.rating,readOnly:!0})})]}),s.jsx("button",{children:"8.9"})]}),s.jsxs("div",{className:"siDetailTexts",children:[s.jsx("span",{className:"siPrice",children:e.amount}),s.jsx("span",{className:"siTaxOp",children:"Includes taxes and fees"}),s.jsx("button",{className:"siCheckButton",children:"See availability"})]})]})]},e._id))})},D=()=>{l(a=>a.SearchSlice.destination);const r=l(a=>a.SearchSlice.options);return o.useState({selection:{startDate:new Date,endDate:null,key:"selection"}}),s.jsxs("div",{children:[s.jsx(d,{}),s.jsx(x,{type:"list"}),s.jsx("div",{className:"listContainer",children:s.jsx("div",{className:"listWrapper",children:s.jsx("div",{className:"listResult",children:s.jsx(p,{options:r})})})})]})};export{D as default};
