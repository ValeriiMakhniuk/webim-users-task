(this["webpackJsonpwebim-users-task"]=this["webpackJsonpwebim-users-task"]||[]).push([[0],{119:function(e,a,t){e.exports=t(151)},150:function(e,a,t){},151:function(e,a,t){"use strict";t.r(a);var n,r=t(0),s=t.n(r),c=t(23),u=t.n(c),l=t(14),o=t(45),i=t(30),m=t(6),d=t.n(m),h=t(15),p=t(44),f=t.n(p);!function(e){e.AuthToken="http://emphasoft-test-assignment.herokuapp.com/api-token-auth/",e.Users="http://emphasoft-test-assignment.herokuapp.com/api/v1/users"}(n||(n={}));var v=function(){var e=Object(h.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post(n.AuthToken,a).then((function(e){return e.data.token}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),b=function(){var e=Object(h.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(n.Users,"/"),{headers:{Authorization:"Token ".concat(a)}}).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),E=function(){var e=Object(h.a)(d.a.mark((function e(a,t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("".concat(n.Users,"/"),a,{headers:{Authorization:"Token ".concat(t),"Content-Type":"application/json"}}).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),g=function(){var e=Object(h.a)(d.a.mark((function e(a,t,r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.put("".concat(n.Users,"/").concat(a,"/"),t,{headers:{Authorization:"Token ".concat(r),"Content-Type":"application/json"}}).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}(),U=function(){var e=Object(h.a)(d.a.mark((function e(a,t,r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.patch("".concat(n.Users,"/").concat(a,"/"),t,{headers:{Authorization:"Token ".concat(r),"Content-Type":"application/json"}}).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(h.a)(d.a.mark((function e(a,t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete("".concat(n.Users,"/").concat(a,"/"),{headers:{Authorization:"Token ".concat(t)}}).then((function(){return a}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),w=Object(o.b)({name:"auth",initialState:{isAuthenticated:!1,token:null,isLoading:!1,error:null,user:null},reducers:{authStart:function(e){e.isLoading=!0},authSucess:function(e,a){var t=a.payload;e.isLoading=!1,e.error=null,e.isAuthenticated=!0,e.token=t},authFailure:function(e,a){e.isLoading=!1,e.error=a.payload}}}),x=w.reducer,k=w.actions,S=k.authStart,C=k.authSucess,F=k.authFailure;function j(e){e.isLoading=!0}function I(e,a){e.isLoading=!1,e.error=a.payload}var N=Object(o.b)({name:"users",initialState:{usersById:{},allIds:[],isLoading:!1,error:null},reducers:{getUserStart:j,getUsersStart:j,postUserStart:j,putUserStart:j,patchUserStart:j,deleteUserStart:j,getUserSuccess:function(e,a){var t=a.payload,n=t.id;e.usersById[n]=t,e.isLoading=!1,e.error=null},getUsersSuccess:function(e,a){var t=a.payload;e.isLoading=!1,e.error=null,t.forEach((function(a){e.usersById[a.id]=a,e.allIds.push(a.id)}))},postUserSucess:function(e,a){var t=a.payload,n=t.id;e.isLoading=!1,e.error=null,e.usersById[n]=t,e.allIds.push(n)},putUserSucess:function(e,a){var t=a.payload,n=t.id;e.isLoading=!1,e.error=null,e.usersById[n]=t},patchUserSucess:function(e,a){var t=a.payload,n=t.id;e.isLoading=!1,e.error=null,e.usersById[n]=t},deleteUserSucess:function(e,a){var t=a.payload;e.isLoading=!1,e.error=null,delete e.usersById[t],e.allIds.splice(e.allIds.findIndex((function(e){return e===t})),1)},getUserFailure:I,getUsersFailure:I,postUserFailure:I,putUserFailure:I,patchUserFailure:I,deleteUserFailure:I}}),O=N.actions,L=O.getUsersStart,A=O.getUsersSuccess,P=(O.getUserStart,O.getUserSuccess,O.postUserStart),T=O.postUserSucess,B=O.putUserStart,_=O.putUserSucess,G=O.patchUserStart,D=O.patchUserSucess,V=O.deleteUserStart,q=O.deleteUserSucess,z=(O.getUserFailure,O.getUsersFailure),H=O.postUserFailure,$=O.putUserFailure,J=O.patchUserFailure,Z=O.deleteUserFailure,K=N.reducer,M=Object(i.c)({auth:x,users:K}),Q=Object(o.a)({reducer:M}),R=t(8),W=t(61),X=t(16),Y=t(154),ee=t(111),ae=t(161),te=t(155),ne=t(160),re=t(156),se=X.b({username:X.c().required().min(1,"*Username must have at least 1 character").max(150,"*Username can't be longer than 100 characters").matches(/^[\w.@+-]+$/,"*Username is not valid"),password:X.c().required().min(8,"*Password must have at least 8 character").max(128,"*Password can't be longer than 128 characters").matches(/^(?=.*[A-Z])(?=.*\d)/,"*Password is not valid")}),ce=function(){var e=Object(l.b)(),a=Object(R.f)(),t=Object(l.c)((function(e){return e.auth})),n=t.error,r=t.isAuthenticated,c=Object(W.a)({initialValues:{username:"",password:""},validationSchema:se,onSubmit:function(t,r){var s,c=r.resetForm;Promise.resolve(e((s=t,function(){var e=Object(h.a)(d.a.mark((function e(a){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(S()),e.next=4,v(s);case 4:t=e.sent,a(C(t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),a(F(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}()))).then((function(){return c()})).then((function(){n||a.push("/")}))}});if(r)return s.a.createElement(R.a,{to:"/"});return s.a.createElement(Y.a,{as:"section",className:"justify-content-center h-100 align-items-center"},s.a.createElement(ee.a,{xl:4,lg:6,md:8,sm:8,xs:12},s.a.createElement(ae.a,null,s.a.createElement(ae.a.Body,null,s.a.createElement(ae.a.Title,{as:"h3"},"Sign in"),n&&s.a.createElement(te.a,{variant:"danger"},n),s.a.createElement(ne.a,{noValidate:!0,onSubmit:function(e){c.handleSubmit(e)}},s.a.createElement(ne.a.Group,{controlId:"username"},s.a.createElement(ne.a.Label,null,"Username"),s.a.createElement(ne.a.Control,{type:"text",placeholder:"Enter username",name:"username",onChange:c.handleChange,value:c.values.username,isInvalid:!!c.errors.username,autoFocus:!0}),s.a.createElement(ne.a.Control.Feedback,{type:"invalid"},c.errors.username)),s.a.createElement(ne.a.Group,{controlId:"password"},s.a.createElement(ne.a.Label,null,"Password"),s.a.createElement(ne.a.Control,{type:"password",placeholder:"Password",name:"password",onChange:c.handleChange,value:c.values.password,isInvalid:!!c.errors.password}),s.a.createElement(ne.a.Control.Feedback,{type:"invalid"},c.errors.password)),s.a.createElement(re.a,{variant:"primary",type:"submit",disabled:!(c.isValid&&c.dirty)||c.isSubmitting},"Submit"))))))},ue=t(81),le=t(97),oe=(t(148),t(158)),ie=t(159),me=X.b({username:X.c().required().min(1,"*Username must have at least 1 character").max(150,"*Username can't be longer than 100 characters").matches(/^[\w.@+-]+$/,"*Username is not valid"),firstName:X.c().max(30,"*First name can't be longer than 30 characters"),lastName:X.c().max(150,"*Last name can't be longer than 30 characters"),isActive:X.a().required()}),de=function(e){var a=e.user,t=(e.handleDeleteUser,e.handlePutUser,e.handlePatchUser,Object(W.a)({initialValues:{username:a.username,firstName:a.first_name,lastName:a.last_name,isActive:a.is_active},validationSchema:me,onSubmit:function(e,a){a.resetForm}}));return s.a.createElement(ne.a,{noValidate:!0,onSubmit:function(e){t.handleSubmit(e)}},s.a.createElement(ne.a.Group,{controlId:"username"},s.a.createElement(ne.a.Label,null,"Username"),s.a.createElement(ne.a.Control,{type:"text",placeholder:"Enter username",name:"username",onChange:t.handleChange,value:t.values.username,isInvalid:!!t.errors.username,autoFocus:!0}),s.a.createElement(ne.a.Control.Feedback,{type:"invalid"},t.errors.username)),s.a.createElement(ne.a.Group,{controlId:"firstName"},s.a.createElement(ne.a.Label,null,"First name"),s.a.createElement(ne.a.Control,{type:"text",placeholder:"Enter first name",name:"firstName",onChange:t.handleChange,value:t.values.firstName,isInvalid:!!t.errors.firstName}),s.a.createElement(ne.a.Control.Feedback,{type:"invalid"},t.errors.firstName)),s.a.createElement(ne.a.Group,{controlId:"lastName"},s.a.createElement(ne.a.Label,null,"Last name"),s.a.createElement(ne.a.Control,{type:"text",placeholder:"Enter last name",name:"lastName",onChange:t.handleChange,value:t.values.lastName,isInvalid:!!t.errors.lastName}),s.a.createElement(ne.a.Control.Feedback,{type:"invalid"},t.errors.lastName)),s.a.createElement(ne.a.Group,{controlId:"active"},s.a.createElement(ne.a.Check,{type:"checkbox",label:"Active",name:"isActive",onChange:t.handleChange,checked:t.values.isActive}),s.a.createElement(ne.a.Text,{className:"text-muted"},"Designates whether this user should be treated as active.")),s.a.createElement(re.a,{variant:"primary",type:"submit",disabled:!(t.isValid&&t.dirty)||t.isSubmitting},"Save changes"))},he=X.b({username:X.c().required().min(1,"*Username must have at least 1 character").max(150,"*Username can't be longer than 100 characters").matches(/^[\w.@+-]+$/,"*Username is not valid"),password:X.c().required().min(8,"*Password must have at least 8 character").max(128,"*Password can't be longer than 128 characters").matches(/^(?=.*[A-Z])(?=.*\d)/,"*Password is not valid"),firstName:X.c().max(30,"*First name can't be longer than 30 characters"),lastName:X.c().max(150,"*Last name can't be longer than 30 characters"),isActive:X.a().required()}),pe=function(e){var a=e.handlePostUser,t=(e.handleClose,Object(l.c)((function(e){return e.users.error}))),n=Object(W.a)({initialValues:{username:"",password:"",firstName:"",lastName:"",isActive:!1},validationSchema:he,onSubmit:function(e,n){var r=n.setSubmitting,s=n.resetForm,c=n.setStatus,u={username:e.username,password:e.password,first_name:e.firstName,last_name:e.lastName,is_active:e.isActive};Promise.resolve(a(u)).then((function(){return r(!1)})).then((function(){t||c({type:"sucess",username:e.username})})).then((function(){setTimeout((function(){return s()}),2500)}))}});return s.a.createElement(s.a.Fragment,null,t&&s.a.createElement(te.a,{variant:"danger"},t),n.status&&"sucess"===n.status.type&&s.a.createElement(te.a,{variant:"success"},"User ",s.a.createElement("b",null,n.status.username)," has created"),s.a.createElement(ne.a,{noValidate:!0,onSubmit:function(e){n.handleSubmit(e)}},s.a.createElement(ne.a.Group,{controlId:"username"},s.a.createElement(ne.a.Label,null,"Username"),s.a.createElement(ne.a.Control,{type:"text",placeholder:"Enter username",name:"username",onChange:n.handleChange,value:n.values.username,isInvalid:!!n.errors.username,autoFocus:!0}),s.a.createElement(ne.a.Control.Feedback,{type:"invalid"},n.errors.username)),s.a.createElement(ne.a.Group,{controlId:"password"},s.a.createElement(ne.a.Label,null,"Password"),s.a.createElement(ne.a.Control,{type:"password",placeholder:"Enter password",name:"password",onChange:n.handleChange,value:n.values.password,isInvalid:!!n.errors.password,autoFocus:!0}),s.a.createElement(ne.a.Control.Feedback,{type:"invalid"},n.errors.password)),s.a.createElement(ne.a.Group,{controlId:"firstName"},s.a.createElement(ne.a.Label,null,"First name"),s.a.createElement(ne.a.Control,{type:"text",placeholder:"Enter first name",name:"firstName",onChange:n.handleChange,value:n.values.firstName,isInvalid:!!n.errors.firstName}),s.a.createElement(ne.a.Control.Feedback,{type:"invalid"},n.errors.firstName)),s.a.createElement(ne.a.Group,{controlId:"lastName"},s.a.createElement(ne.a.Label,null,"Last name"),s.a.createElement(ne.a.Control,{type:"text",placeholder:"Enter last name",name:"lastName",onChange:n.handleChange,value:n.values.lastName,isInvalid:!!n.errors.lastName}),s.a.createElement(ne.a.Control.Feedback,{type:"invalid"},n.errors.lastName)),s.a.createElement(ne.a.Group,{controlId:"active"},s.a.createElement(ne.a.Check,{type:"checkbox",label:"Active",name:"isActive",onChange:n.handleChange,checked:n.values.isActive}),s.a.createElement(ne.a.Text,{className:"text-muted"},"Designates whether this user should be treated as active.")),s.a.createElement(re.a,{variant:"primary",type:"submit",disabled:!(n.isValid&&n.dirty)||n.isSubmitting},"Add user")))},fe=function(e){var a=e.handlePostUser,t=Object(r.useState)(!1),n=Object(ue.a)(t,2),c=n[0],u=n[1],l=function(){u(!1)};return s.a.createElement(s.a.Fragment,null,s.a.createElement(re.a,{className:"align-self-center",variant:"success",onClick:function(){u(!0)}},"Add User"),s.a.createElement(ie.a,{show:c,onHide:l,centered:!0},s.a.createElement(ie.a.Header,{closeButton:!0},s.a.createElement(ie.a.Title,null,"Add user")),s.a.createElement(ie.a.Body,null,s.a.createElement(pe,{handlePostUser:a,handleClose:l})),s.a.createElement(ie.a.Footer,null,s.a.createElement(re.a,{variant:"secondary",onClick:l},"Close"))))},ve=function(e){var a=e.user,t=e.handleDeleteUser,n=e.handlePutUser,c=e.handlePatchUser,u=Object(r.useState)(!1),l=Object(ue.a)(u,2),o=l[0],i=l[1],m=function(){return i(!1)};return s.a.createElement(s.a.Fragment,null,s.a.createElement(re.a,{variant:"primary",onClick:function(){i(!0)}},"Edit"),s.a.createElement(ie.a,{show:o,onHide:m,centered:!0},s.a.createElement(ie.a.Header,{closeButton:!0},s.a.createElement(ie.a.Title,null,"Edit user")),s.a.createElement(ie.a.Body,null,s.a.createElement(de,{user:a,handleDeleteUser:t,handlePutUser:n,handlePatchUser:c})),s.a.createElement(ie.a.Footer,null,s.a.createElement(re.a,{variant:"danger",onClick:function(){t(a.id),i(!1)},disabled:a.is_active},"Delete"),s.a.createElement(re.a,{variant:"secondary",onClick:m},"Close"))))},be=function(e){var a=e.users,t=Object(l.b)(),n=Object(l.c)((function(e){return e.users})).usersById,r=Object(l.c)((function(e){return e.auth})).token,c=function(e){t(function(e,a){return function(){var t=Object(h.a)(d.a.mark((function t(n){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(V()),t.next=4,y(e,a);case 4:r=t.sent,n(q(r)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n(Z(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(e,r))},u=function(e,a){t(function(e,a,t){return function(){var n=Object(h.a)(d.a.mark((function n(r){var s;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(B()),n.next=4,g(e,a,t);case 4:s=n.sent,r(_(s)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),r($(n.t0.message));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}(e,a,r))},o=function(e,a){t(function(e,a,t){return function(){var n=Object(h.a)(d.a.mark((function n(r){var s;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(G()),n.next=4,U(e,a,t);case 4:s=n.sent,r(D(s)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),r(J(n.t0.message));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}(e,a,r))};return s.a.createElement(s.a.Fragment,null,s.a.createElement("h3",{className:"align-self-center"},"Users"),s.a.createElement(fe,{handlePostUser:function(e){t(function(e,a){return function(){var t=Object(h.a)(d.a.mark((function t(n){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(P()),t.next=4,E(a,e);case 4:r=t.sent,n(T(r)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n(H(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(r,e))}}),s.a.createElement(le.a,{columns:[{name:"ID",sort:{enabled:!0}},"Username","First name","Last name","Last Login","Superuser status",{name:"Actions",formatter:function(e,a){var t=a.cells[0].data;return Object(le.b)(s.a.createElement(ve,{user:n[t],handleDeleteUser:c,handlePutUser:u,handlePatchUser:o}))}}],data:a.map((function(e){return[e.id,e.username,e.first_name,e.last_name,e.last_login?(a=new Date(e.last_login),Object(oe.a)(a,{addSuffix:!0})):"",e.is_superuser?"True":"False",null];var a})),search:{debounceTimeout:1e3},pagination:{enabled:!0,limit:10,summary:!1},language:{search:{placeholder:"\ud83d\udd0d\tSearch..."},pagination:{previous:"\u2b05\ufe0f",next:"\u27a1\ufe0f"}}}))},Ee=function(){var e=Object(l.b)(),a=Object(l.c)((function(e){return e.users})),t=a.usersById,n=a.allIds,c=(a.error,a.isLoading,Object(l.c)((function(e){return e.auth})).token),u=n.map((function(e){return t[e]}));return Object(r.useEffect)((function(){c&&e(function(e){return function(){var a=Object(h.a)(d.a.mark((function a(t){var n;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t(L()),a.next=4,b(e);case 4:n=a.sent,t(A(n)),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),t(z(a.t0.message));case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(c))}),[]),s.a.createElement(Y.a,{as:"section",className:"h-100 pt-3"},s.a.createElement(ee.a,{className:"d-flex flex-column"},s.a.createElement(be,{users:u})))},ge=t(157),Ue=function(){var e=Object(l.c)((function(e){return e.auth})).isAuthenticated;return s.a.createElement(ge.a,{fluid:!0,as:"main",className:"vh-100"},s.a.createElement(R.b,{exact:!0,path:"/webim-users-task/"},e?s.a.createElement(Ee,null):s.a.createElement(R.a,{to:"/webim-users-task/login"})),s.a.createElement(R.b,{exact:!0,path:"/webim-users-task/login",component:ce}))},ye=t(70);t(149),t(150);u.a.render(s.a.createElement(l.a,{store:Q},s.a.createElement(ye.a,null,s.a.createElement(Ue,null))),document.getElementById("root"))}},[[119,1,2]]]);
//# sourceMappingURL=main.d6b4e83a.chunk.js.map