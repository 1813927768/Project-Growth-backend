webpackJsonp([5],{"e2/1":function(e,s){},xJsL:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=t("A0hB"),i={data:function(){return{showTishi:!1,tishi:"",username:"",password:""}},props:["isReg"],mounted:function(){var e=Object(o.b)("userid");e&&(this.$emit("userSignIn",e),this.$router.push("/PomoMode"),console.log("cookie exist"))},methods:{ToRegister:function(){console.log("register"),this.$router.push({name:"Reg"})},logInSuccess:function(e){this.$emit("userSignIn",e),Object(o.c)("userid",e,6e4),setTimeout(function(){this.$router.push("/PomoMode")}.bind(this),1e3)},login:function(){var e=this;if(""==this.username||""==this.password)alert("请输入用户名或密码");else if("admin"==this.username)this.$router.push("/Admin");else{var s={password:this.password,username:this.username};this.$http.post("http://localhost:5000/logIn",s,{emulateJSON:!0}).then(function(s){console.log(s);var t=s.body.code;if(-1==t)e.tishi="该用户不存在",e.showTishi=!0;else if(0==t)e.tishi="密码输入错误",e.showTishi=!0;else{e.tishi="登录成功",e.showTishi=!0;var o=s.body.data;sessionStorage.username=o.name,sessionStorage.email=o.email,sessionStorage.tomoLength=o.tomolength,sessionStorage.dayGoal=o.daygoal,sessionStorage.weekGoal=o.weekgoal,sessionStorage.monthGoal=o.monthgoal,e.logInSuccess(t)}}).catch(function(e){console.log("fail")})}}}},n={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("div",{staticClass:"login-wrap",on:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.login(s)}}},[t("h3",[e._v("登录")]),e._v(" "),t("p",{directives:[{name:"show",rawName:"v-show",value:e.showTishi,expression:"showTishi"}]},[e._v(e._s(e.tishi))]),e._v(" "),t("el-input",{staticClass:"input",attrs:{placeholder:"请输入用户名",clearable:""},model:{value:e.username,callback:function(s){e.username=s},expression:"username"}}),e._v(" "),t("br"),e._v(" "),t("el-input",{staticClass:"input",attrs:{placeholder:"请输入密码",type:"password",clearable:""},model:{value:e.password,callback:function(s){e.password=s},expression:"password"}}),e._v(" "),t("br"),e._v(" "),t("el-button",{staticClass:"button",attrs:{type:"primary",round:""},on:{click:e.login}},[e._v("登录")]),e._v(" "),t("span",{on:{click:e.ToRegister}},[e._v("没有账号？马上注册")])],1)])},staticRenderFns:[]};var a=t("C7Lr")(i,n,!1,function(e){t("e2/1")},"data-v-631e5567",null);s.default=a.exports}});
//# sourceMappingURL=5.dbc36f2428a4c0a183b2.js.map