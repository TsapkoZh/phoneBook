(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{121:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(62),l=t.n(r),o=t(54),s=t(29),i=t(17),d=t(18),m=t(22),p=t(20),u=t(25),h=t(55),E=t.n(h),_=function(e){return{type:"ADD_CONTACT",payload:e}},b=function(e){return{type:"DELETE_CONTACT",payload:e}},v=function(e,a,t){return{type:"SAVE_EDIT_FIELDS",payload:{id:e,fieldName:a,value:t}}},f=t(97),y=t(58),C=t(60),N=t(73),O=t(98),g=t(92),j=t.n(g),F=t(28),S=t.n(F),L=j.a.bind(S.a),w=function(e){var a=e.label,t=Object(O.a)(e,["label"]),n=Object(y.c)(t),r=Object(N.a)(n,2),l=r[0],o=r[1],s=L({entryField:!0,hasError:o.touched&&o.error});return c.a.createElement("div",{className:S.a.addContactForm},c.a.createElement("label",{className:S.a.fieldHeader,htmlFor:t.id||t.name},a),c.a.createElement("input",Object.assign({},l,t,{className:s})),c.a.createElement("div",{className:S.a.formMessage},o.touched&&o.error?c.a.createElement(c.a.Fragment,null,o.error):null))},x=[{label:"Name",name:"name",type:"text",placeholder:"Tsapko Evgenii"},{label:"Phone",name:"phone",type:"tel",placeholder:"+7(965)723-41-49"},{label:"Address",name:"address",type:"text",placeholder:"Ylitsa Stroiteleii, 16/24"},{label:"Company",name:"company",type:"text",placeholder:"Deko-line"},{label:"Email",name:"email",type:"email",placeholder:"TsapkoZh@gmail.com"}],D=function(e){return c.a.createElement("div",{className:S.a.addContactFormWrapper},c.a.createElement("h1",{className:S.a.title},"add contact"),c.a.createElement(y.b,{initialValues:{name:"",phone:"",address:"",company:"",email:""},validationSchema:C.a({name:C.b().max(30,"Must be 30 characters or less").required("Required"),phone:C.b().max(20,"Must be 20 characters or less").required("Required"),email:C.b().email("Invalid email address").required("Required")}),onSubmit:function(a,t){var n=t.setSubmitting,c=t.resetForm;n(!0),c(),e.addContact(Object(f.a)({id:Date.now().toString()},a))}},c.a.createElement(y.a,{className:S.a.formWrapper},x.map((function(e){return c.a.createElement(w,Object.assign({},e,{key:e.name}))})),c.a.createElement("button",{className:S.a.btnWriteDown,type:"submit"},"ADD CONTACT"))))},P=t(3),k=t(93),A=t.n(k),T=t(78),I=t.n(T),M=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).handleKeyPress=function(a){var t={search:a.currentTarget.value.toLowerCase()},n=E.a.stringify(t);e.props.history.push({search:n})},e}return Object(d.a)(t,[{key:"render",value:function(){var e=E.a.parse(this.props.location.search).search;return c.a.createElement("div",{className:I.a.filterWrapper},c.a.createElement("img",{src:A.a,className:I.a.search,alt:"search"}),c.a.createElement("input",{value:e,className:I.a.searchField,onChange:this.handleKeyPress}))}}]),t}(n.PureComponent),W=Object(P.f)(M),K=t(2),H=t.n(K),U=t(8),q=t.n(U),R=t(64),J=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).handleDblClick=function(){n.setState({isEdit:!0}),window.addEventListener("keydown",n.handleKeyUpEnter),window.addEventListener("keydown",n.handleKeyUpEscape)},n.handleChange=function(e){var a=e.currentTarget.value.trim();""!==a&&n.setState({value:a})},n.handleSave=function(){var e=n.props.name,a=n.state.value;n.props.saveEditFields(e,a),n.setState({isEdit:!1})},n.handleKeyUpEnter=function(e){"Enter"===e.key&&n.handleSave()},n.handleKeyUpEscape=function(e){"Escape"===e.key&&n.handelCancel()},n.handelCancel=function(){n.setState({isEdit:!1,value:n.props.value}),window.removeEventListener("keydown",n.handleKeyUpEnter),window.removeEventListener("keydown",n.handleKeyUpEscape)},n.state={isEdit:!1,value:e.value},n}return Object(d.a)(t,[{key:"render",value:function(){var e=this.state,a=e.isEdit,t=e.value,n=this.props,r=n.name,l=n.type,o=n.maxLength;return c.a.createElement("td",{className:"".concat(q.a.tableCell," ").concat(q.a.name),onDoubleClick:this.handleDblClick},a?c.a.createElement("input",{name:r,type:l,maxLength:o,value:t,onChange:this.handleChange,onBlur:this.handleSave,onKeyPress:this.handleKeyUp,autoFocus:!0,className:q.a.editContact}):c.a.createElement("span",null,t))}}]),t}(n.PureComponent),B=t(94),V=t.n(B),Z=[{name:"name",type:"text",maxLength:"30"},{name:"phone",type:"tel",maxLength:"20"},{name:"address",type:"text",maxLength:"30"},{name:"company",type:"text",maxLength:"20"},{name:"email",type:"email",maxLength:"500"}],G=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).handleDelete=function(){var a=e.props,t=a.id;(0,a.deleteContact)(t)},e.handleSaveEdit=function(a,t){var n=e.props,c=n.id;(0,n.saveEditFields)(c,a,t)},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this,a=this.props,t=a.index,n=a.id;return c.a.createElement("tr",null,c.a.createElement("td",{className:"".concat(q.a.serialNumber)},c.a.createElement("p",null,t+1)),Z.map((function(a){return c.a.createElement(J,Object.assign({},a,{key:a.name,value:e.props[a.name],saveEditFields:e.handleSaveEdit}))})),c.a.createElement("td",{className:"".concat(q.a.tableCell)},c.a.createElement("button",{type:"button",onClick:this.handleDelete,className:q.a.del},"\xd7")),c.a.createElement("td",{className:"".concat(q.a.tableCell)},c.a.createElement(R.a,{to:"/items/".concat(n)},c.a.createElement("img",{src:V.a,alt:"detail"}))))}}]),t}(n.PureComponent),Y=[{title:"",id:"1"},{title:"NAME",id:"2"},{title:"PHONE",id:"3"},{title:"ADDRESS",id:"4"},{title:"COMPANY",id:"5"},{title:"EMAIL",id:"6"},{title:"",id:"7"},{title:"",id:"8"}],z=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props,a=e.contacts,t=e.deleteContact,n=e.saveEditFields;return c.a.createElement("table",{className:q.a.table},c.a.createElement("colgroup",null,c.a.createElement("col",{className:q.a.colSerNum}),c.a.createElement("col",{className:q.a.colName}),c.a.createElement("col",{className:q.a.colPhone}),c.a.createElement("col",{className:q.a.colAddress}),c.a.createElement("col",{className:q.a.colCompany}),c.a.createElement("col",{className:q.a.colEmail}),c.a.createElement("col",{className:q.a.colDelProp,span:"2"})),c.a.createElement("tbody",null,c.a.createElement("tr",null,Y.map((function(e){return c.a.createElement("td",{key:e.id,className:q.a.tableCellHeader},e.title)}))),a.map((function(e,a){var r=e.id,l=e.name,o=e.phone,s=e.address,i=e.company,d=e.email;return c.a.createElement(G,{key:r,id:r,name:l,phone:o,address:s,company:i,email:d,index:a,deleteContact:t,saveEditFields:n})}))))}}]),t}(n.PureComponent);G.propTypes={name:H.a.string,phone:H.a.string,address:H.a.string,company:H.a.string,email:H.a.string,deleteContact:H.a.func,saveEditFields:H.a.func};var Q=z,X=t(59),$=t.n(X),ee=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props,a=e.contacts,t=e.addContact,n=e.deleteContact,r=e.saveEditFields;return c.a.createElement("div",{className:$.a.wrapperContacts},c.a.createElement("div",{className:$.a.wrap},c.a.createElement("h1",{className:$.a.title},"phone book"),c.a.createElement("div",{className:$.a.wrapper},c.a.createElement(W,null),c.a.createElement(Q,{contacts:a,deleteContact:n,saveEditFields:r}))),c.a.createElement(D,{addContact:t}))}}]),t}(n.PureComponent),ae=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props,a=e.contacts,t=e.addContact,n=e.saveEditFields,r=e.deleteContact;return c.a.createElement(ee,{contacts:a,addContact:t,deleteContact:r,saveEditFields:n})}}]),t}(n.PureComponent),te=function(e,a){var t=E.a.parse(a).search;return t?e.filter((function(e){return Object.keys(e).some((function(a){return e[a].toLowerCase().includes(t)}))})):e},ne=Object(s.c)((function(e){return{contacts:te(e.contacts,e.router.location.search)}}),(function(e){return Object(u.bindActionCreators)({addContact:_,deleteContact:b,saveEditFields:v},e)}))(ae),ce=t(24),re=t.n(ce),le=Object(s.c)((function(e,a){var t=a.match.params.itemId;return{contact:e.contacts.find((function(e){return e.id===t}))}}))((function(e){var a=e.contact,t=a.name,n=a.phone,r=a.address,l=a.company,o=a.email;return c.a.createElement("div",{className:re.a.contactProperties},c.a.createElement("h1",{className:re.a.contactName},t),c.a.createElement("div",{className:re.a.contactDetail},c.a.createElement("h5",{className:re.a.detailName},"PHONE"),c.a.createElement("p",{className:re.a.detail},n),c.a.createElement("h5",{className:re.a.detailName},"ADDRESS"),c.a.createElement("p",{className:re.a.detail},r),c.a.createElement("h5",{className:re.a.detailName},"COMPANY"),c.a.createElement("p",{className:re.a.detail},l),c.a.createElement("h5",{className:re.a.detailName},"EMAIL"),c.a.createElement("p",{className:re.a.detail},o)))}));var oe=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(P.c,null,c.a.createElement(P.a,{exact:!0,path:"/phoneBook",component:ne}),c.a.createElement(P.a,{exact:!0,path:"/items/:itemId",component:le})))},se=t(87),ie=t(95),de=t(13),me=t(96),pe=[],ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_CONTACT":return[].concat(Object(me.a)(e),[a.payload]);case"DELETE_CONTACT":return e.filter((function(e){return e.id!==a.payload}));case"SAVE_EDIT_FIELDS":return e.map((function(e){if(e.id===a.payload.id){var t=Object(N.a)(a.payload.value,1);a.payload.nameField=t[0]}return e}));default:return e}},he=function(e){return Object(u.combineReducers)({router:Object(o.b)(e),contacts:ue})},Ee=localStorage.getItem("reduxState")?{contacts:JSON.parse(localStorage.getItem("reduxState"))}:{},_e=Object(de.a)();var be,ve=(be=Ee,Object(u.createStore)(he(_e),be,Object(u.compose)(Object(u.applyMiddleware)(Object(se.a)(_e)),Object(ie.devToolsEnhancer)())));ve.subscribe((function(){localStorage.setItem("reduxState",JSON.stringify(ve.getState().contacts))}));var fe=c.a.createElement(s.a,{store:ve},c.a.createElement(o.a,{history:_e},c.a.createElement(oe,null)));l.a.render(fe,document.getElementById("root"))},24:function(e,a,t){e.exports={contactProperties:"contactProperties_contactProperties__3H4Su",contactName:"contactProperties_contactName__qNhLm",contactDetail:"contactProperties_contactDetail__3UCiM",detailName:"contactProperties_detailName__3hCI3",detail:"contactProperties_detail__xLh7J"}},28:function(e,a,t){e.exports={addContactFormWrapper:"addContactForm_addContactFormWrapper__1bqNr",addContactForm:"addContactForm_addContactForm__2j-HP",formWrapper:"addContactForm_formWrapper__2yNyA",title:"addContactForm_title__52-Zs",entryField:"addContactForm_entryField__1GBeh",hasError:"addContactForm_hasError__3-AFs",fieldHeader:"addContactForm_fieldHeader__2_28f",btnWriteDown:"addContactForm_btnWriteDown__1dMN9",formMessage:"addContactForm_formMessage__2Uavp"}},59:function(e,a,t){e.exports={wrapperContacts:"contacts_wrapperContacts__m3Fzn",title:"contacts_title__1R7cy",wrapper:"contacts_wrapper__3z4po"}},78:function(e,a,t){e.exports={filterWrapper:"filter_filterWrapper__1GyEa",search:"filter_search__1QLME",searchField:"filter_searchField__1KPxW"}},8:function(e,a,t){e.exports={table:"contactList_table__ZmKAs",tableCellHeader:"contactList_tableCellHeader__rOyC2",tableCell:"contactList_tableCell__1F4aX",editContact:"contactList_editContact__1etSS",serialNumber:"contactList_serialNumber__7J4px",del:"contactList_del__1w9U0",colSerNum:"contactList_colSerNum__FaE34",colName:"contactList_colName__3N6NL",colPhone:"contactList_colPhone__6GIT4",colAddress:"contactList_colAddress__1Omg8",colCompany:"contactList_colCompany__2mvnH",colEmail:"contactList_colEmail__1Vwot",colDelProp:"contactList_colDelProp__2LZ0S"}},93:function(e,a,t){e.exports=t.p+"static/media/search.822bc171.svg"},94:function(e,a,t){e.exports=t.p+"static/media/detail.01eb1f84.svg"},99:function(e,a,t){e.exports=t(121)}},[[99,1,2]]]);
//# sourceMappingURL=main.74a4e7c0.chunk.js.map