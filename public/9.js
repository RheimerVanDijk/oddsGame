(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{20:function(t,s,e){"use strict";e.r(s);var a,r,o,i={data:function(){return{loginState:!0,email:"",password:"",reg_email:"",reg_password:"",reg_password_confirmation:"",has_error:!1,error:"",errors:{},success:!1}},methods:(a={login:function(){console.log("login"),this.$router.push("dashboard")},register:function(){this.$auth.register({data:{email:this.reg_email,password:this.reg_password,password_confirmation:this.reg_password_confirmation},success:function(){this.success=!0,this.$router.push({name:"login",params:{successRegistrationRedirect:!0}})},error:function(t){console.log(t.response.data.errors),this.has_error=!0,this.error=t.response.data.error,this.errors=t.response.data.errors||{}}})}},r="login",o=function(){var t=this,s=this.$auth.redirect(),e=this;this.$auth.login({params:{email:e.email,password:e.password},error:function(){e.has_error=!0},rememberMe:!0,fetchUser:!0}).then((function(e){var a=s?s.from.name:(t.$auth.user().role,"dashboard");t.$router.push({name:a})}))},r in a?Object.defineProperty(a,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[r]=o,a)},n=e(0),l=Object(n.a)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container-fluid "},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"}),t._v(" "),e("div",{staticClass:"col"},[e("div",{staticClass:"form-container d-flex align-items-center"},[t.loginState?e("form",{staticStyle:{width:"100%"}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Email address")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp"},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:t.login}},[t._v("\n            Login\n          ")]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(s){t.loginState=!1}}},[t._v("\n            Register\n          ")])]):t._e(),t._v(" "),1!=t.loginState?e("form",{staticStyle:{width:"100%"}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Email address")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.reg_email,expression:"reg_email"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp"},domProps:{value:t.reg_email},on:{input:function(s){s.target.composing||(t.reg_email=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.reg_password,expression:"reg_password"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1"},domProps:{value:t.reg_password},on:{input:function(s){s.target.composing||(t.reg_password=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputPassword2"}},[t._v("Repeat password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.reg_password_confirmation,expression:"reg_password_confirmation"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword2"},domProps:{value:t.reg_password_confirmation},on:{input:function(s){s.target.composing||(t.reg_password_confirmation=s.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-success",on:{click:t.register}},[t._v("\n            Make account!\n          ")]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(s){t.loginState=!0}}},[t._v("\n            Login\n          ")])]):t._e()])]),t._v(" "),e("div",{staticClass:"col"})])])}),[],!1,null,null,null);s.default=l.exports}}]);