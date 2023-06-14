"use strict";(self.webpackChunkbook_we=self.webpackChunkbook_we||[]).push([[815],{3234:function(e,s,a){a(2791);var n=a(6048),t=a.n(n),r=a(184);s.Z=function(e){var s=e.page,a=e.setPage,n=e.total,l=e.limit,i=Math.ceil(n/l);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t(),{previousLabel:"prev",nextLabel:"next",forcePage:s>1?s-1:void 0,marginPagesDisplayed:2,pageRangeDisplayed:2,breakLabel:"...",pageCount:i,onPageChange:function(e){var s=e.selected;a(s+1)},containerClassName:"pagination justify-content-center",previousLinkClassName:"page-link",nextLinkClassName:"page-link",pageLinkClassName:"page-link",activeLinkClassName:"active"})})}},7348:function(e,s,a){var n=a(4165),t=a(5861),r=a(9439),l=a(2791);s.Z=function(e){var s=(0,l.useState)(!0),a=(0,r.Z)(s,2),i=a[0],c=a[1],d=(0,l.useState)(!1),o=(0,r.Z)(d,2),m=o[0],h=o[1],u=(0,l.useState)(null),x=(0,r.Z)(u,2),j=x[0],v=x[1],b=function(){var e=(0,t.Z)((0,n.Z)().mark((function e(s){var a,t,r,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.url,t=s.signal,c(!0),h(!1),v(null),e.prev=4,e.next=7,fetch(a,{signal:t});case 7:return r=e.sent,e.next=10,r.json();case 10:if(l=e.sent,r.ok){e.next=13;break}throw new Error(r.statusText);case 13:v(l),h(!1),c(!1),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(4),c(!1),"AbortError"!==e.t0.name&&h(e.t0.message);case 22:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(s){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){var s=new AbortController,a=s.signal;return b({url:e,signal:a}),function(){s.abort()}}),[e]),{data:j,error:m,loading:i}}},3417:function(e,s,a){var n=a(4942),t=a(1413),r=a(9439),l=a(2791),i=a(9434),c=a(7689),d=a(8174),o=a(6488),m=a(8040),h=a(184);s.Z=function(){var e=(0,i.I0)(),s=(0,i.v9)((function(e){return e.adminAuth})).isLogedIn,a=(0,l.useState)({email:"",key:""}),u=(0,r.Z)(a,2),x=u[0],j=u[1],v=x.email,b=x.key,f=function(e){var s=e.target.name,a=e.target.value;j((function(e){return(0,t.Z)((0,t.Z)({},e),{},(0,n.Z)({},s,a))}))};return s?(0,h.jsx)(c.Fg,{to:"/admin"}):!1===s?(0,h.jsx)("div",{className:"position-fixed top-0 start-0 bottom-0 end-0 bg-light",children:(0,h.jsx)("div",{className:"row justify-content-center p-4",children:(0,h.jsx)("div",{className:"col-lg-5",children:(0,h.jsxs)("div",{className:"card shadow-lg border-0 rounded-lg mt-5",children:[(0,h.jsx)("div",{className:"card-header",children:(0,h.jsx)("h3",{className:"text-center font-weight-light",children:"Login"})}),(0,h.jsx)("div",{className:"card-body",children:(0,h.jsxs)("form",{onSubmit:function(s){s.preventDefault(),fetch("".concat(o._n,"/users")).then((function(e){if(e.ok)return e.json();throw new Error(e.status)})).then((function(s){var a=s.find((function(e){return e.email===v}));a?a.email===v&&a.key!==b?(d.Am.dismiss(),d.Am.error("email & password don't match")):a.email===v&&a.key===b&&"active"!==a.status?(d.Am.dismiss(),d.Am.error("Your account is deactivated by super admin")):a.email===v&&a.key===b&&"active"===a.status&&e((0,m.x4)(a)):(d.Am.dismiss(),d.Am.error("no user is registered with this email"))})).catch((function(e){return console.log(e)}))},children:[(0,h.jsxs)("div",{className:"mb-3 mt-3",children:[(0,h.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email:"}),(0,h.jsx)("input",{id:"email",className:"form-control",type:"email",placeholder:"Enter email",name:"email",value:x.email,onChange:f,required:!0})]}),(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsx)("label",{htmlFor:"pwd",className:"form-label",children:"Password:"}),(0,h.jsx)("input",{id:"pwd",className:"form-control",type:"password",placeholder:"Enter password",name:"key",value:x.key,onChange:f,required:!0})]}),(0,h.jsx)("button",{className:"ms-3 btn btn-success",type:"button",onClick:function(){fetch("".concat(o._n,"/users")).then((function(e){if(e.ok)return e.json();throw new Error(e.status)})).then((function(s){var a=s.find((function(e){return"prodev22@prodev22.com"===e.email}));a&&e((0,m.x4)(a))})).catch((function(e){return console.log(e)}))},children:"Login"})]})})]})})})}):void 0}},1815:function(e,s,a){a.r(s),a.d(s,{default:function(){return X}});var n=a(7689),t=a(9434),r=a(6488),l=a(8040),i=function(){var e=(0,t.I0)(),s=localStorage.getItem("adminAuthData");if(s){var a=JSON.parse(s),n=a.email,i=a.password;fetch("".concat(r._n,"/users")).then((function(e){if(e.ok)return e.json();throw new Error(e.status)})).then((function(s){var a=s.find((function(e){return e.email===n&&e.password===i&&"active"===e.status}));e(a?(0,l.x4)(a):(0,l.ww)())})).catch((function(s){s&&(console.log(s),e((0,l.ww)()))}))}else e((0,l.ww)())},c=a(9439),d=a(2791),o=a(1087),m=a(9135),h=a(184),u=function(e){var s=e.toggle,a=e.setToggle,n=(0,t.I0)();return(0,h.jsxs)("nav",{className:"sb-topnav navbar navbar-expand navbar-dark bg-dark",children:[(0,h.jsx)(o.rU,{className:"navbar-brand ps-3",to:"/admin",children:"My Admin"}),(0,h.jsx)("button",{className:"btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0",id:"sidebarToggle",to:"#!",onClick:function(){a(!s)},children:(0,h.jsx)(m.Fm7,{})}),(0,h.jsx)("div",{className:"d-none d-md-inline-block ms-auto me-0 me-md-3 my-2 my-md-0"}),(0,h.jsx)("ul",{className:"navbar-nav ms-auto ms-md-0 me-3 me-lg-4",children:(0,h.jsxs)("li",{className:"nav-item dropdown",children:[(0,h.jsx)(o.rU,{className:"nav-link dropdown-toggle",id:"navbarDropdown",to:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:(0,h.jsx)(m.Xws,{})}),(0,h.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"navbarDropdown",children:[(0,h.jsx)("li",{children:(0,h.jsx)(o.rU,{className:"dropdown-item",to:"/admin/profile",children:"Profile"})}),(0,h.jsx)("li",{children:(0,h.jsx)("hr",{className:"dropdown-divider"})}),(0,h.jsx)("li",{children:(0,h.jsx)("button",{className:"dropdown-item",onClick:function(){n((0,l.kS)())},children:"Logout"})})]})]})})]})},x=(0,d.memo)(u),j=a(4968),v=function(){var e=(0,t.v9)((function(e){return e.adminAuth})).adminData;return(0,h.jsxs)("nav",{className:"sb-sidenav accordion sb-sidenav-dark",id:"sidenavAccordion",children:[(0,h.jsx)("div",{className:"sb-sidenav-menu",children:(0,h.jsxs)("div",{className:"nav",children:[(0,h.jsxs)(o.OL,{className:"nav-link mt-2",to:"/admin/dashboard",children:[(0,h.jsx)("div",{className:"sb-nav-link-icon",children:(0,h.jsx)(m.P31,{})}),"Dashboard"]}),(0,h.jsxs)(o.OL,{className:"nav-link",to:"/admin/category",children:[(0,h.jsx)("div",{className:"sb-nav-link-icon",children:(0,h.jsx)(m.RHD,{})}),"Category"]}),(0,h.jsxs)(o.OL,{className:"nav-link",to:"/admin/books",children:[(0,h.jsx)("div",{className:"sb-nav-link-icon",children:(0,h.jsx)(m.Xfy,{})}),"Books"]}),(0,h.jsxs)(o.OL,{className:"nav-link",to:"/admin/profile",children:[(0,h.jsx)("div",{className:"sb-nav-link-icon",children:(0,h.jsx)(m.Xws,{})}),"Profile"]})]})}),(0,h.jsxs)("div",{className:"sb-sidenav-footer d-flex justify-content-start align-items-center",children:[(0,h.jsx)("span",{className:"me-2",style:{height:"25px",width:"25px"},children:(0,h.jsx)("img",{className:"h-100 w-100 rounded-circle",src:e.image?e.image:j,alt:""})}),(0,h.jsx)("span",{children:e.username})]})]})},b=(0,d.memo)(v),f=function(){return(0,h.jsx)("footer",{className:"py-4 bg-light mt-auto",children:(0,h.jsx)("div",{className:"container-fluid px-4",children:(0,h.jsx)("div",{className:"text-center",children:(0,h.jsx)("div",{className:"text-muted",children:"This is Footer"})})})})},g=(0,d.memo)(f),p=function(){var e=(0,d.useState)(!1),s=(0,c.Z)(e,2),a=s[0],t=s[1];return(0,h.jsxs)("div",{className:a?"sb-nav-fixed sb-sidenav-toggled":"sb-nav-fixed",children:[(0,h.jsx)(x,{toggle:a,setToggle:t}),(0,h.jsxs)("div",{id:"layoutSidenav",children:[(0,h.jsx)("div",{id:"layoutSidenav_nav",children:(0,h.jsx)(b,{})}),(0,h.jsxs)("div",{id:"layoutSidenav_content",children:[(0,h.jsx)("main",{children:(0,h.jsx)("div",{className:"container-fluid px-4",children:(0,h.jsx)(n.j3,{})})}),(0,h.jsx)(g,{})]})]})]})},N=function(){var e=(0,t.v9)((function(e){return e.adminAuth})).isLogedIn;return void 0===e?null:e?(0,h.jsx)(n.j3,{}):!1===e?(0,h.jsx)(n.Fg,{to:"/admin/login"}):void 0},y=a(3417),w=function(){return(0,h.jsx)("div",{className:"container",children:"Dashboard"})},k=a(2953),C=function(e){var s=e.btntext,a=e.link;return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(o.rU,{type:"button",className:"btn btn-primary",to:a,children:s})})},A=function(e){var s=e.currentCategory,a=(0,t.I0)(),n=(0,t.v9)((function(e){return e.adminAuth})).adminData;return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{className:"table-responsive",children:(0,h.jsxs)("table",{className:"table align-items-center text-center ",children:[(0,h.jsx)("thead",{className:"thead-light ",children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Id"}),(0,h.jsx)("th",{children:"Category"}),(0,h.jsx)("th",{children:"Status"}),(0,h.jsx)("th",{children:"Action"})]})}),(0,h.jsx)("tbody",{children:s.map((function(e){var s=e.id,t=e.category,r=e.status;return(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:s}),(0,h.jsx)("td",{children:t}),(0,h.jsx)("td",{children:(0,h.jsxs)("div",{className:"form-check form-switch d-flex justify-content-center align-items-center",children:[(0,h.jsx)("input",{className:"form-check-input me-1",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",defaultChecked:"active"===r,onChange:function(){return function(e){var s=e.id,n=e.status;"hidden"===n?a((0,k.uH)({id:s,updateData:{status:"active"}})):"active"===n&&a((0,k.uH)({id:s,updateData:{status:"hidden"}}))}({id:s,status:r})},disabled:"super admin"!==n.userType&&s<=4}),(0,h.jsx)("label",{className:"form-check-label ms-1",htmlFor:"flexSwitchCheckDefault",children:r})]})}),(0,h.jsx)("td",{children:(0,h.jsx)("div",{className:"d-flex justify-content-center",children:(0,h.jsx)("button",{type:"button",className:"btn btn-sm btn-danger ms-1",onClick:function(){return function(e){a((0,k.uu)(e))}(s)},disabled:"super admin"!==n.userType&&s<=4,children:"delete"})})})]},s)}))})]})})})},Z=function(e){var s=e.handleSearch;return(0,h.jsx)("div",{children:(0,h.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:s})})},S=a(3234),F=function(){var e=(0,t.I0)(),s=(0,t.v9)((function(e){return e.category})),a=s.category,n=s.error;(0,d.useEffect)((function(){var s=new AbortController,a=s.signal;return e((0,k.jn)({signal:a})),function(){s.abort()}}),[e]);var r=(0,d.useState)([]),l=(0,c.Z)(r,2),i=l[0],o=l[1],m=(0,d.useState)(1),u=(0,c.Z)(m,2),x=u[0],j=u[1],v=4*x,b=v-4,f=i.length,g=i.slice(b,v);(0,d.useEffect)((function(){o(a),j(1)}),[a]);return n?(0,h.jsx)("div",{className:"my-5 text-center h3",children:n}):(0,h.jsx)(h.Fragment,{children:a&&(0,h.jsx)("div",{className:"container",children:(0,h.jsxs)("div",{className:"card  bg-light my-5",children:[(0,h.jsxs)("div",{className:"card-header py-3 d-flex flex-row align-items-center justify-content-between",children:[(0,h.jsx)(C,{btntext:"Add Category",link:"/admin/category/add"}),(0,h.jsx)(Z,{handleSearch:function(e){var s=e.target.value,n=a.filter((function(e){return e.category.toLowerCase().includes(s.toLowerCase())}));o(n)}})]}),(0,h.jsx)("div",{className:"card-body",children:a.length?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(A,{currentCategory:g}),(0,h.jsx)(S.Z,{page:x,setPage:j,total:f,limit:4})]}):null})]})})})},D=a(4942),P=a(1413),I=a(8174),E=function(){var e=(0,n.s0)(),s=(0,d.useState)({category:"",status:""}),a=(0,c.Z)(s,2),t=a[0],l=a[1],i=function(e){var s=e.target.name,a=e.target.value;l((function(e){return(0,P.Z)((0,P.Z)({},e),{},(0,D.Z)({},s,a))}))};return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{className:"container",children:(0,h.jsxs)("div",{className:"card  my-5 mx-auto",style:{maxWidth:"500px"},children:[(0,h.jsx)("div",{className:"card-header py-3 ",children:(0,h.jsx)("h3",{className:"fw-bold",children:"Add Category"})}),(0,h.jsx)("div",{className:"card-body",children:(0,h.jsxs)("form",{onSubmit:function(s){s.preventDefault(),I.Am.dismiss(),I.Am.info("uploading category"),fetch("".concat(r._n,"/category"),(0,r.mO)(t)).then((function(s){if(!s.ok)throw new Error("Error ".concat(s.status,": ").concat(s.statusText));I.Am.dismiss(),I.Am.success("category uploaded"),l({category:"",status:""}),e("/admin/category")})).catch((function(e){I.Am.dismiss(),I.Am.error(e.message)}))},children:[(0,h.jsxs)("div",{className:"mb-3 mt-3",children:[(0,h.jsx)("label",{htmlFor:"category",className:"form-label fw-bold",children:"Category :"}),(0,h.jsx)("input",{type:"category",id:"category",className:"form-control",placeholder:"Enter category name",name:"category",value:t.category,onChange:i,required:!0})]}),(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsx)("label",{className:"form-label fw-bold",htmlFor:"status",children:"Status :"}),(0,h.jsxs)("select",{className:"form-select",id:"status",value:t.status,name:"status",onChange:i,required:!0,children:[(0,h.jsx)("option",{value:"",children:"-- Select Status --"}),(0,h.jsx)("option",{value:"active",children:"Active"}),(0,h.jsx)("option",{value:"hidden",children:"Hidden"})]})]}),(0,h.jsx)("button",{type:"submit",className:"btn btn-sm btn-primary",children:"Add Category"})]})})]})})})},L=a(8644),q=function(e){var s=e.currentProducts,a=(0,t.I0)();(0,t.v9)((function(e){return e.adminAuth})).adminData;return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{className:"table-responsive",children:(0,h.jsxs)("table",{className:"table align-items-center text-center ",children:[(0,h.jsx)("thead",{className:"thead-light ",children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Id"}),(0,h.jsx)("th",{children:"Title"}),(0,h.jsx)("th",{children:"Author"}),(0,h.jsx)("th",{children:"Pages"}),(0,h.jsx)("th",{children:"Action"})]})}),(0,h.jsx)("tbody",{children:s.map((function(e){var s=e.id,n=e.title,t=e.author,r=e.page;return(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:s}),(0,h.jsx)("td",{children:(0,h.jsx)("div",{className:"d-flex ms-4",children:(0,h.jsx)("span",{className:"fw-bold ms-1 text-start",children:n})})}),(0,h.jsx)("td",{children:t}),(0,h.jsx)("td",{children:r}),(0,h.jsx)("td",{children:(0,h.jsxs)("div",{className:"d-flex flex-row justify-content-center",children:[(0,h.jsx)(o.rU,{className:"btn btn-sm btn-primary me-1",to:"/admin/books/".concat(s,"/edit"),children:"edit"}),(0,h.jsx)(o.rU,{className:"btn btn-sm btn-success ms-1",to:"/admin/books/".concat(s),children:"view"}),(0,h.jsx)("button",{className:"btn btn-sm btn-danger ms-1",onClick:function(){return function(e){a((0,L.Ir)({id:e}))}(s)},children:"delete"})]})})]},s)}))})]})})})},W=function(){var e=(0,t.I0)(),s=(0,t.v9)((function(e){return e.products})),a=s.products,n=s.error;(0,d.useEffect)((function(){var s=new AbortController,a=s.signal;return e((0,L.t2)({signal:a})),function(){s.abort()}}),[e]);var r=(0,d.useState)([]),l=(0,c.Z)(r,2),i=l[0],o=l[1],m=(0,d.useState)(1),u=(0,c.Z)(m,2),x=u[0],j=u[1],v=4*x,b=v-4,f=i.length,g=i.slice(b,v);(0,d.useEffect)((function(){o(a)}),[a]);return n?(0,h.jsx)("div",{className:"my-5 text-center h3",children:n}):(0,h.jsx)(h.Fragment,{children:a&&(0,h.jsx)("div",{className:"container",children:(0,h.jsxs)("div",{className:"card  bg-light my-5",children:[(0,h.jsxs)("div",{className:"card-header py-3 d-flex flex-row align-items-center justify-content-between",children:[(0,h.jsx)(C,{btntext:"Add Book",link:"/admin/books/add"}),(0,h.jsx)(Z,{handleSearch:function(e){var s=e.target.value,n=a.filter((function(e){return e.title.toLowerCase().includes(s.toLowerCase())}));o(n),j(1)}})]}),(0,h.jsx)("div",{className:"card-body",children:a.length?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(q,{currentProducts:g}),(0,h.jsx)(S.Z,{page:x,setPage:j,total:f,limit:4})]}):null})]})})})},_=a(9829),T=a(7348),U=function(){var e=(0,n.s0)(),s=(0,t.I0)(),a=(0,T.Z)("".concat(r._n,"/category")).data,l={id:"",isbn:"",title:"",cover:"",author:"",published:"",pages:"",status:"active",category:""},i=(0,d.useState)(l),o=(0,c.Z)(i,2),m=o[0],u=o[1],x=(0,d.useState)(""),j=(0,c.Z)(x,2),v=j[0],b=j[1],f=function(e){var s=e.target.name,a=e.target.value;u((function(e){return(0,P.Z)((0,P.Z)({},e),{},(0,D.Z)({},s,a))}))};return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{className:"container",style:{maxWidth:"768px"},children:(0,h.jsxs)("form",{className:"row g-3 my-5 shadow p-2 rounded",onSubmit:function(a){a.preventDefault();var n=(0,P.Z)((0,P.Z)({},m),{},{page:Number(v)});v&&s((0,L.gK)({productDetails:n})).unwrap(_.SI).then((function(s){s.status&&(u(l),e(-1))}))},children:[(0,h.jsx)("div",{className:"h4 text-center mb-3",children:"Add Product"}),(0,h.jsxs)("div",{className:"col-12",children:[(0,h.jsx)("label",{htmlFor:"title",className:"form-label fw-bold",children:"Title :"}),(0,h.jsx)("input",{type:"text",className:"form-control",id:"title",name:"title",value:m.title,onChange:f,required:!0})]}),(0,h.jsxs)("div",{className:"col-md-6",children:[(0,h.jsx)("label",{htmlFor:"isbn",className:"form-label fw-bold",children:"ISBN :"}),(0,h.jsx)("input",{type:"text",className:"form-control",id:"isbn",name:"isbn",value:m.isbn,onChange:f,required:!0})]}),(0,h.jsxs)("div",{className:"col-md-6",children:[(0,h.jsx)("label",{htmlFor:"cover",className:"form-label fw-bold",children:"Cover :"}),(0,h.jsx)("input",{type:"text",className:"form-control",id:"cover",name:"cover",value:m.cover,onChange:f,required:!0})]}),(0,h.jsxs)("div",{className:"col-md-6",children:[(0,h.jsx)("label",{htmlFor:"brand",className:"form-label fw-bold",children:"Author :"}),(0,h.jsx)("input",{type:"text",className:"form-control",id:"author",name:"author",value:m.author,onChange:f,required:!0})]}),(0,h.jsxs)("div",{className:"col-md-6",children:[(0,h.jsx)("label",{htmlFor:"published",className:"form-label fw-bold",children:"Published :"}),(0,h.jsx)("input",{type:"text",className:"form-control",id:"published",name:"published",value:m.published,onChange:f,required:!0})]}),(0,h.jsxs)("div",{className:"col-md-6",children:[(0,h.jsx)("label",{htmlFor:"page",className:"form-label fw-bold",children:"Page :"}),(0,h.jsx)("input",{type:"number",className:"form-control",id:"page",name:"page",value:v,onChange:function(e){b(e.target.value)},required:!0})]}),(0,h.jsxs)("div",{className:"col-md-6",children:[(0,h.jsx)("label",{htmlFor:"category",className:"form-label fw-bold",children:"Category :"}),(0,h.jsxs)("select",{className:"form-select",id:"category",value:m.category,name:"category",onChange:f,required:!0,children:[(0,h.jsx)("option",{value:"",children:"-- Select Category --"}),a&&a.map((function(e){var s=e.category,a=e.id;return"active"===e.status?(0,h.jsx)("option",{value:s,children:s},a):null}))]})]}),(0,h.jsx)("div",{className:"col-md-6",style:{height:"100px",width:"100px"}}),(0,h.jsxs)("div",{className:"col-12",children:[(0,h.jsx)("button",{type:"submit",className:"btn btn-primary mb-2 me-2",children:"Add Product"}),(0,h.jsx)("button",{type:"button",className:"btn btn-danger mb-2 ms-2",onClick:function(){return e(-1)},children:"Back"})]})]})})})},B=a(5416),O=function(){var e=(0,n.UO)().id,s=(0,T.Z)("".concat(r._n,"/products/").concat(e)),a=s.loading,t=s.error,l=s.data;return a?(0,h.jsx)("div",{className:"my-5 text-center",children:(0,h.jsx)(B.Z,{})}):t?(0,h.jsx)("div",{className:"my-5 text-center h3",children:t}):(0,h.jsx)(h.Fragment,{children:l&&(0,h.jsx)("div",{className:"container px-4 px-md-5 my-5",children:(0,h.jsxs)("div",{className:"row gx-4 gx-lg-5 align-items-center",children:[(0,h.jsx)("div",{className:"col-md-6 py-5 text-center",style:{height:"450px"},children:(0,h.jsx)("img",{className:" mh-100 mw-100 mb-5 mb-md-0",src:l.cover,alt:"..."})}),(0,h.jsxs)("div",{className:"col-md-6",children:[(0,h.jsxs)("h1",{className:" mb-3 pt-0 pt-md-5 fw-bolder",children:["Book's title: ",l.title]}),"------------------------------------------------------------------",(0,h.jsx)("h1",{className:" mb-3 pt-0 pt-md-5 fw-bolder",children:"Description"}),(0,h.jsxs)("div",{className:"fs-5",children:["Product id: ",l.id]}),(0,h.jsxs)("div",{className:"fs-5 mb-3",children:["Author : ",l.author]}),(0,h.jsxs)("div",{className:"fs-5 mb-3",children:["Published : ",l.published]}),(0,h.jsxs)("div",{className:"fs-5 mb-3",children:["Pages : ",l.page]}),(0,h.jsxs)("div",{className:"fs-5 mb-3",children:["ISBN : ",l.isbn]}),(0,h.jsx)(o.rU,{className:"btn btn-outline-dark flex-shrink-0",to:"/admin/books/".concat(e,"/edit"),children:"Edit"})]})]})})})},H=function(){var e=(0,n.s0)(),s=(0,t.I0)(),a=(0,n.UO)().id,l=(0,T.Z)("".concat(r._n,"/category")).data,i=(0,T.Z)("".concat(r._n,"/products/").concat(a)),o=i.data,m=i.error,u=(i.loading,{id:"",isbn:"",title:"",cover:"",author:"",published:"",pages:"",status:"active",category:""}),x=(0,d.useState)(u),j=(0,c.Z)(x,2),v=j[0],b=j[1],f=(0,d.useState)(""),g=(0,c.Z)(f,2),p=g[0],N=g[1];(0,d.useEffect)((function(){b((function(e){return(0,P.Z)((0,P.Z)({},e),o)}))}),[o]);var y=function(e){var s=e.target.name,a=e.target.value;b((function(e){return(0,P.Z)((0,P.Z)({},e),{},(0,D.Z)({},s,a))}))};return m?(0,h.jsx)("div",{className:"my-5 text-center h3",children:m}):(0,h.jsx)(h.Fragment,{children:o&&(0,h.jsx)("div",{className:"container",style:{maxWidth:"768px"},children:(0,h.jsxs)("form",{className:"row g-3 my-5 shadow p-2 rounded",onSubmit:function(n){n.preventDefault();var t=Number(v.page),r=(0,P.Z)((0,P.Z)({},v),{},{page:t});v.page&&s((0,L.nM)({id:a,updateData:r})).unwrap(_.SI).then((function(s){s.status&&(b(u),e(-1))}))},children:[(0,h.jsx)("div",{className:"h4 text-center mb-3",children:"Edit "}),(0,h.jsxs)("div",{className:"col-12",children:[(0,h.jsx)("label",{htmlFor:"title",className:"form-label fw-bold",children:"Title :"}),(0,h.jsx)("input",{type:"text",className:"form-control",id:"title",name:"title",value:v.title,onChange:y,required:!0})]}),(0,h.jsxs)("div",{className:"col-md-6",children:[(0,h.jsx)("label",{htmlFor:"isbn",className:"form-label fw-bold",children:"ISBN :"}),(0,h.jsx)("input",{type:"text",className:"form-control",id:"isbn",name:"isbn",value:v.isbn,onChange:y,required:!0})]}),(0,h.jsxs)("div",{className:"col-md-6",children:[(0,h.jsx)("label",{htmlFor:"cover",className:"form-label fw-bold",children:"Cover :"}),(0,h.jsx)("input",{type:"text",className:"form-control",id:"cover",name:"cover",value:v.cover,onChange:y,required:!0})]}),(0,h.jsxs)("div",{className:"col-md-6",children:[(0,h.jsx)("label",{htmlFor:"brand",className:"form-label fw-bold",children:"Author :"}),(0,h.jsx)("input",{type:"text",className:"form-control",id:"author",name:"author",value:v.author,onChange:y,required:!0})]}),(0,h.jsxs)("div",{className:"col-md-6",children:[(0,h.jsx)("label",{htmlFor:"published",className:"form-label fw-bold",children:"Published :"}),(0,h.jsx)("input",{type:"text",className:"form-control",id:"published",name:"published",value:v.published,onChange:y,required:!0})]}),(0,h.jsxs)("div",{className:"col-md-6",children:[(0,h.jsx)("label",{htmlFor:"page",className:"form-label fw-bold",children:"Page :"}),(0,h.jsx)("input",{type:"number",className:"form-control",id:"page",name:"page",value:p,onChange:function(e){N(e.target.value)},required:!0})]}),(0,h.jsxs)("div",{className:"col-md-6",children:[(0,h.jsx)("label",{htmlFor:"category",className:"form-label fw-bold",children:"Category :"}),(0,h.jsxs)("select",{className:"form-select",id:"category",value:v.category,name:"category",onChange:y,required:!0,children:[(0,h.jsx)("option",{value:"",children:"-- Select Category --"}),l&&l.map((function(e){var s=e.category,a=e.id;return"active"===e.status?(0,h.jsx)("option",{value:s,children:s},a):null}))]})]}),(0,h.jsxs)("div",{className:"col-12",children:[(0,h.jsx)("button",{type:"submit",className:"btn btn-primary mb-2 me-2",children:"Update"}),(0,h.jsx)("button",{type:"button",className:"btn btn-danger mb-2 ms-2",onClick:function(){return e(-1)},children:"Back"})]})]})})})},M=function(){var e=(0,t.v9)((function(e){return e.adminAuth})).adminData;return(0,h.jsx)(h.Fragment,{children:e&&(0,h.jsx)("div",{className:"container py-5",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-lg-4",children:(0,h.jsx)("div",{className:"card mb-4",children:(0,h.jsxs)("div",{className:"card-body text-center",children:[(0,h.jsx)("div",{className:"mx-auto",style:{height:"150px",width:"150px"},children:(0,h.jsx)("img",{src:e.image?e.image:j,alt:"",className:"rounded-circle img-fluid mh-100 mw-100"})}),(0,h.jsx)("h5",{className:"my-3",children:e.username})]})})}),(0,h.jsx)("div",{className:"col-lg-8",children:(0,h.jsx)("div",{className:"card mb-4",children:(0,h.jsxs)("div",{className:"card-body",children:[(0,h.jsxs)("div",{className:"row mb-2",children:[(0,h.jsx)("div",{className:"col-sm-3",children:(0,h.jsx)("p",{className:"mb-0 fw-bold",children:"User Id :"})}),(0,h.jsx)("div",{className:"col-sm-9",children:(0,h.jsx)("p",{className:" mb-0",children:e.id})})]}),(0,h.jsxs)("div",{className:"row mb-2",children:[(0,h.jsx)("div",{className:"col-sm-3",children:(0,h.jsx)("p",{className:"mb-0 fw-bold",children:"Name :"})}),(0,h.jsx)("div",{className:"col-sm-9",children:(0,h.jsx)("p",{className:" mb-0",children:e.name})})]}),(0,h.jsxs)("div",{className:"row mb-2",children:[(0,h.jsx)("div",{className:"col-sm-3",children:(0,h.jsx)("p",{className:"mb-0 fw-bold",children:"Email :"})}),(0,h.jsx)("div",{className:"col-sm-9",children:(0,h.jsx)("p",{className:" mb-0",children:e.email})})]}),(0,h.jsxs)("div",{className:"row mb-2",children:[(0,h.jsx)("div",{className:"col-sm-3",children:(0,h.jsx)("p",{className:"mb-0 fw-bold",children:"Secret key :"})}),(0,h.jsx)("div",{className:"col-sm-9",children:(0,h.jsx)("p",{className:" mb-0",children:e.secretkey})})]}),(0,h.jsxs)("div",{className:"row mb-2",children:[(0,h.jsx)("div",{className:"col-sm-3",children:(0,h.jsx)("p",{className:"mb-0 fw-bold",children:"Key :"})}),(0,h.jsx)("div",{className:"col-sm-9",children:(0,h.jsx)("p",{className:" mb-0",children:e.key})})]})]})})})]})})})},X=function(){return i(),(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(n.Z5,{children:[(0,h.jsx)(n.AW,{path:"/login",element:(0,h.jsx)(y.Z,{})}),(0,h.jsx)(n.AW,{element:(0,h.jsx)(p,{}),children:(0,h.jsxs)(n.AW,{element:(0,h.jsx)(N,{}),children:[(0,h.jsx)(n.AW,{path:"/",element:(0,h.jsx)(n.Fg,{to:"/admin/dashboard"})}),(0,h.jsx)(n.AW,{path:"/dashboard",element:(0,h.jsx)(w,{})}),(0,h.jsx)(n.AW,{path:"/category",element:(0,h.jsx)(F,{})}),(0,h.jsx)(n.AW,{path:"/category/add",element:(0,h.jsx)(E,{})}),(0,h.jsx)(n.AW,{path:"/books",element:(0,h.jsx)(W,{})}),(0,h.jsx)(n.AW,{path:"/books/add",element:(0,h.jsx)(U,{})}),(0,h.jsx)(n.AW,{path:"/books/:id",element:(0,h.jsx)(O,{})}),(0,h.jsx)(n.AW,{path:"/books/:id/edit",element:(0,h.jsx)(H,{})}),(0,h.jsx)(n.AW,{path:"/profile",element:(0,h.jsx)(M,{})})]})})]})})}},4968:function(e,s,a){e.exports=a.p+"static/media/profile.2e4ef16d1cbc3b27f9d7.png"}}]);
//# sourceMappingURL=815.d00d5343.chunk.js.map