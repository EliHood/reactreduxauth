(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t,a){},291:function(e,t,a){e.exports=a(636)},318:function(e,t,a){},636:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(33),i=a.n(s),o=(a(117),a(34)),l=a(35),c=a(37),u=a(36),m=a(38),d=a(640),h=a(637),p=a(638),b=a(285),E=a.n(b),f=a(46),g=a(28),v=a(17),O=a(639),S=a(641),j=a(25),y=a(41),w=a.n(y);a(309),a(311),a(314);w.a.initializeApp({apiKey:"AIzaSyD_4JF1ZAf29gSq6wc3iKa7xBkg0PFOhkw",authDomain:"eli-app3.firebaseapp.com",databaseURL:"https://eli-app3.firebaseio.com",projectId:"eli-app3",storageBucket:"",messagingSenderId:"324828100842"}),w.a.firestore().settings({timestampsInSnapshots:!0});w.a.database().ref();var C=w.a.auth(),N=(w.a.database(),w.a.firestore()),I=(new w.a.auth.GoogleAuthProvider,w.a),R=(a(318),a(40)),P=a.n(R),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=a.state.formData;a.setState({formData:Object(g.a)({},t,Object(f.a)({},e.target.name,e.target.value))})},a.state={formData:{email:"",password:"",username:""},errors:{}},a.handleChange=a.handleChange.bind(Object(v.a)(Object(v.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(Object(v.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.formData,a={email:t.email,password:t.password,username:t.username};this.props.signUp(a)}},{key:"render",value:function(){var e=this.props,t=e.authError;return e.userId?r.a.createElement(O.a,{to:"/dashboard"}):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h1",null,"Sign Up"),r.a.createElement("div",{className:"center red-text"},t?r.a.createElement("p",null,t):null),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(P.a,{id:"outlined-multiline-static",label:"Enter Username",style:{width:400},type:"name",name:"username",value:this.state.formData.username,margin:"normal",variant:"outlined",onChange:this.handleChange}),r.a.createElement(P.a,{id:"outlined-multiline-static",label:"Enter Email",style:{width:400},type:"name",name:"email",value:this.state.formData.email,margin:"normal",variant:"outlined",onChange:this.handleChange}),r.a.createElement(P.a,{id:"outlined-multiline-static",label:"Enter Password",style:{width:400},type:"password",name:"password",value:this.state.formData.password,margin:"normal",variant:"outlined",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-outline-primary myForm"},"Submit")))))}}]),t}(n.Component),U=Object(S.a)(Object(j.b)(function(e){return{user:e.firebase.auth,authError:e.auths.authError,userId:e.auths.userId}},function(e){return{signUp:function(t){return e(function(e){return function(t){C.createUserWithEmailAndPassword(e.email.trim(),e.password).then(function(t){return N.collection("users").doc(t.user.uid).set({username:e.username,email:e.email,password:e.password,uid:t.user.uid})}).then(function(){t({type:"SIGNUP_SUCCESS"})}).then(function(e){H.push("/dashboard")}).catch(function(e){t({type:"SIGNUP_ERROR",err:e})})}}(t))}}})(A)),_=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){console.log(e.target.name);var t=a.state.formData;a.setState({formData:Object(g.a)({},t,Object(f.a)({},e.target.name,e.target.value))})},a.handleSubmit=function(e){e.preventDefault();var t=a.state.formData,n={email:t.email,password:t.password};a.props.signIn(n)&&console.log(n)},a.state={formData:{email:"",password:""},errors:{}},a.handleChange=a.handleChange.bind(Object(v.a)(Object(v.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(Object(v.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.userId?r.a.createElement(O.a,{to:"/dashboard"}):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h1",null,"Sign In"),r.a.createElement("div",{className:"center red-text"},t?r.a.createElement("p",null,t):null),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(P.a,{id:"outlined-multiline-static",label:"Enter Email",style:{width:400},type:"name",name:"email",margin:"normal",variant:"outlined",onChange:this.handleChange}),r.a.createElement(P.a,{id:"outlined-multiline-static",label:"Enter Password",style:{width:400},type:"password",name:"password",margin:"normal",variant:"outlined",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-outline-primary myForm"},"Submit")))))}}]),t}(n.Component),k=Object(S.a)(Object(j.b)(function(e){return{user:e.firebase.auth,authError:e.auths.authError,userId:e.auths.userId}},function(e){return{signIn:function(t){return e(function(e){return function(t){C.signInWithEmailAndPassword(e.email,e.password).then(function(){t({type:"SIGNIN_SUCCESS"})}).then(function(e){H.push("/dashboard")}).catch(function(e){t({type:"SIGNIN_ERROR",err:e})})}}(t))}}})(_)),D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){e.preventDefault(),a.setState(Object(f.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t={description:a.state.description,username:a.state.username};a.props.createPost(t),a.props.history.push("/dashboard")},a.state={description:"",username:""},a.handleChange=a.handleChange.bind(Object(v.a)(Object(v.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(Object(v.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.userId;N.collection("users").get().then(function(a){a.forEach(function(a){a.data().uid===t&&e.setState({username:a.data().username})})})}},{key:"render",value:function(){return this.props.userId?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 mt-4"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h2",null,"Create Post"),r.a.createElement(P.a,{id:"outlined-multiline-static",label:"Enter Description",multiline:!0,rows:"4",name:"description",style:{width:700},defaultValue:"",margin:"normal",variant:"outlined",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-outline-primary myForm"},"Submit"))))):r.a.createElement(O.a,{to:"/"})}}]),t}(n.Component),x=Object(S.a)(Object(j.b)(function(e){return{userId:e.auths.userId}},function(e){return{createPost:function(t){return e(function(e){return function(t,a){N.collection("posts").add({description:e.description,username:e.username,createdAt:new Date}).then(function(){t({type:"CREATE_POST",post:e})}).catch(function(e){t({type:"CREATE_POST_ ERROR",err:e})})}}(t))}}})(D)),T=a(288),F=a.n(T),G=a(289),M=a.n(G),W=a(290),B=a.n(W),L=a(116),z=a.n(L),J={card:{minWidth:275,margin:"40px 0px"},p:{margin:"20px 0px",letterSpacing:"2.7px",fontSize:"0.8em",fontStyle:"italic"},h:{letterSpacing:"5px"}},K=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e)))._isMounted=!1,a.state={username:"",loading:!0,posts:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;(this._isMounted=!0,this.props.userId)&&N.collection("users").get().then(function(t){e._isMounted&&t.forEach(function(t){e.setState({username:t.data().username,loading:!1})})});this.props.getPosts()}},{key:"componentWillMount",value:function(){this._isMounted=!1}},{key:"componentDidUpdate",value:function(e){var t=e.myPosts,a=this.props.myPosts;(function(e,t){if(e.length!==t.length)return!1;for(var a=e.length;a--;)if(e[a]!==t[a])return!1;return!0})(t,a)||this.setState({posts:a})}},{key:"render",value:function(){if(!this.props.userId)return r.a.createElement(O.a,{to:"/"});var e=this.state,t=e.loading,a=e.posts;return t?r.a.createElement("div",{className:"loader"}):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mt-3"},r.a.createElement("h1",null,"Welcome ",this.state.username.toLowerCase()),a.map(function(e,t){return r.a.createElement(M.a,{key:t,style:J.card},r.a.createElement(B.a,null,r.a.createElement(z.a,{variant:"h4",component:"h2",style:J.h},e.description),r.a.createElement(z.a,{component:"p",style:J.p},"by: ",e.username),r.a.createElement(z.a,{component:"p"},"by: ",F()(e.createdAt.toDate()).calendar())))}))))}}]),t}(n.Component),q=Object(S.a)(Object(j.b)(function(e){return{user:e.auths.user,userId:e.auths.userId,myPosts:e.auths.myPosts}},function(e){return{getPosts:function(){return e(function(e){return N.collection("posts").orderBy("createdAt","desc").get().then(function(t){var a=[];t.forEach(function(e){a.push(e.data())}),e(function(e){return{type:"GET_POSTS",posts:e}}(a))})})}}})(K)),H=E()({forceRefresh:!0}),V=Object(j.b)(function(e){return{isAuthenticated:e.auths.isAuthenticated}},function(e){return{signOut:function(){return e(function(e){C.signOut().then(function(){e({type:"LOGOUT_SUCCESS"})})})}}})(function(e){return r.a.createElement(d.a,{history:H},r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light "},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExample08","aria-controls":"navbarsExample08","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse justify-content-md-center",id:"navbarsExample08"},r.a.createElement("ul",{className:"navbar-nav"},!e.isAuthenticated&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.a,{className:"nav-link",to:"/"},"Home ")),e.isAuthenticated&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.a,{className:"nav-link",to:"/dashboard"},"Dashboard ")),!e.isAuthenticated&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.a,{className:"nav-link",to:"/SignIn"},"Sign-In")),!e.isAuthenticated&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.a,{className:"nav-link",to:"/SignUp"},"Sign Up ")),e.isAuthenticated&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.a,{className:"nav-link",to:"/post"},"Add-Post ")),e.isAuthenticated&&r.a.createElement("button",{className:"btn btn-outline-primary btn-sm",onClick:function(){return e.signOut()}},"Log out")))),r.a.createElement(p.a,{path:"/SignUp",component:U}),r.a.createElement(p.a,{path:"/post",component:x}),r.a.createElement(p.a,{path:"/SignIn",component:k}),r.a.createElement(p.a,{path:"/dashboard",component:q})))}),Z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={loading:!0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.props.CurrentUser(),this.setState({loading:!1})}},{key:"render",value:function(){return this.state.loading?r.a.createElement("div",{className:"loader"}):r.a.createElement(V,null)}}]),t}(n.Component),$=Object(j.b)(null,{CurrentUser:function(){return function(e){C.onAuthStateChanged(function(t){t&&e({type:"SET_USER",payload:t})})}}})(Z);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=a(39),X=a(67),Y={authError:null,isAuthenticated:!1,userId:null,user:[],myPosts:[]},ee=a(82),te=Object(Q.c)({auths:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return Object(g.a)({},e,{userId:t.payload.uid||null,user:t.user,isAuthenticated:!0});case"LOGOUT_SUCCESS":return console.log("signout success"),Object(g.a)({},e,{userId:null,isAuthenticated:!1});case"GET_POSTS":return Object(g.a)({},e,{myPosts:t.posts});case"CREATE_POST":return console.log("created post",t.post),e;case"CREATE_POST_ERROR":return console.log("create post error",t.err),e;case"SIGNUP_SUCCESS":return Object(g.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(g.a)({},e,{authError:t.err.message});case"SIGNIN_SUCCESS":return console.log("signin success"),Object(g.a)({},e,{authError:null});case"SIGNIN_ERROR":return console.log("signin error"),Object(g.a)({},e,{authError:t.err.message});default:return e}},firebase:X.firebaseReducer,firestore:ee.firestoreReducer}),ae=a(175),ne=(Object(Q.a)(ae.a)(Q.e),Object(Q.e)(te,Object(Q.d)(Object(Q.a)(ae.a.withExtraArgument({getFirebase:X.getFirebase,getFirestore:ee.getFirestore})),Object(X.reactReduxFirebase)(I,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0}),Object(ee.reduxFirestore)(I))));ne.firebaseAuthIsReady.then(function(){i.a.render(r.a.createElement(j.a,{store:ne},r.a.createElement(d.a,null,r.a.createElement($,null))),document.getElementById("root"))})}},[[291,2,1]]]);
//# sourceMappingURL=main.4f6bae1b.chunk.js.map