(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,a,t){e.exports=t(53)},35:function(e,a,t){},53:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),i=t.n(l),s=(t(35),t(8)),o=t(9),c=t(11),m=t(10),p=t(12),u=t(56),d=t(54),g=t(55),E=t(57),h=t(15),b=t(14),v=t.n(b);t(46),t(48);v.a.initializeApp({apiKey:"AIzaSyD_4JF1ZAf29gSq6wc3iKa7xBkg0PFOhkw",authDomain:"eli-app3.firebaseapp.com",databaseURL:"https://eli-app3.firebaseio.com",projectId:"eli-app3",storageBucket:"",messagingSenderId:"324828100842"});v.a.database();var S=v.a.auth(),f=(new v.a.auth.GoogleAuthProvider,function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={email:"",password:""},t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h1",null,"Sign Up"),r.a.createElement("div",{onClick:this.props.signUp},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"email",onChange:this.props.onEmailSignUpChangeAction,"aria-describedby":"emailHelp",value:this.props.emailSignUp,placeholder:"Enter email"}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"password",value:this.props.passwordSignUp,onChange:this.props.onPasswordSignUpChangeAction,placeholder:"Password"})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))))}}]),a}(n.Component)),w=Object(E.a)(Object(h.b)(function(e){return{user:e.auth.user,emailSignUp:e.signUpAuth.emailSignUp,passwordSignUp:e.signUpAuth.passwordSignUp}},function(e){return{signUp:function(){return e(function(e,a){var t=a().signUpAuth;""===t.emailSignUp&&e({type:"EMPTY_SIGN_UP_EMAIL"}),""===t.passwordSignUp?e({type:"EMPTY_SIGN_UP_PASSWORD"}):S.createUserWithEmailAndPassword(t.emailSignUp,t.passwordSignUp).then(function(){return console.log("signUpok")}).catch(function(e){e.code;var a=e.message;alert(a)})})},onEmailSignUpChangeAction:function(a){return e({type:"EMAIL_SIGN_UP_CHANGE",email:a.target.value})},onPasswordSignUpChangeAction:function(a){return e({type:"PASSWORD_SIGN_UP_CHANGE",password:a.target.value})}}})(f)),U=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h1",null,"Sign In"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"exampleInputPassword1"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))))}}]),a}(n.Component),N=function(){return r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light "},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExample08","aria-controls":"navbarsExample08","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse justify-content-md-center",id:"navbarsExample08"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.a,{className:"nav-link",to:"/SignUp"},"Sign Up ")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.a,{className:"nav-link",to:"/SignIn"},"Sign In "))))),r.a.createElement(g.a,{path:"/SignUp",component:w}),r.a.createElement(g.a,{path:"/SignIn",component:U})))},y=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(N,null)}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=t(6),j=t(13),A={emailSignUp:"",passwordSignUp:""},I={user:null},P=Object(O.c)({signUpAuth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"EMAIL_SIGN_UP_CHANGE":return Object(j.a)({},e,{emailSignUp:a.email});case"PASSWORD_SIGN_UP_CHANGE":return Object(j.a)({},e,{passwordSignUp:a.password});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"auth/SET_USER":return Object(j.a)({},I,{user:a.user});default:return e}}}),_=t(28),x=Object(O.a)(_.a)(O.d);i.a.render(r.a.createElement(h.a,{store:x(P)},r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.8fc7ee18.chunk.js.map