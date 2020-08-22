(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/login.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/login.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loginState: true,
      email: "",
      password: "",
      reg_email: "",
      reg_password: "",
      reg_password_confirmation: "",
      has_error: false,
      error: "",
      errors: {},
      success: false
    };
  },
  methods: _defineProperty({
    login: function login() {
      console.log("login");
      this.$router.push("dashboard");
    },
    register: function register() {
      this.$auth.register({
        data: {
          email: this.reg_email,
          password: this.reg_password,
          password_confirmation: this.reg_password_confirmation
        },
        success: function success() {
          this.success = true;
          this.$router.push({
            name: "login",
            params: {
              successRegistrationRedirect: true
            }
          });
        },
        error: function error(res) {
          console.log(res.response.data.errors);
          this.has_error = true;
          this.error = res.response.data.error;
          this.errors = res.response.data.errors || {};
        }
      });
    }
  }, "login", function login() {
    var _this = this;

    // get the redirect object
    var redirect = this.$auth.redirect();
    var app = this;
    this.$auth.login({
      params: {
        email: app.email,
        password: app.password
      },
      error: function error() {
        app.has_error = true;
      },
      rememberMe: true,
      fetchUser: true
    }).then(function (response) {
      var redirectTo = redirect ? redirect.from.name : _this.$auth.user().role === 2 ? "dashboard" : "dashboard";

      _this.$router.push({
        name: redirectTo
      });
    });
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/login.vue?vue&type=template&id=780e8960&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/login.vue?vue&type=template&id=780e8960& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid " }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col" }),
      _vm._v(" "),
      _c("div", { staticClass: "col" }, [
        _c("div", { staticClass: "form-container d-flex align-items-center" }, [
          _vm.loginState
            ? _c("form", { staticStyle: { width: "100%" } }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                    _vm._v("Email address")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.email,
                        expression: "email"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "email",
                      id: "exampleInputEmail1",
                      "aria-describedby": "emailHelp"
                    },
                    domProps: { value: _vm.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.email = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "exampleInputPassword1" } }, [
                    _vm._v("Password")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.password,
                        expression: "password"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "password", id: "exampleInputPassword1" },
                    domProps: { value: _vm.password },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.password = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success",
                    attrs: { type: "button" },
                    on: { click: _vm.login }
                  },
                  [_vm._v("\n            Login\n          ")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        _vm.loginState = false
                      }
                    }
                  },
                  [_vm._v("\n            Register\n          ")]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.loginState != true
            ? _c("form", { staticStyle: { width: "100%" } }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                    _vm._v("Email address")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.reg_email,
                        expression: "reg_email"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "email",
                      id: "exampleInputEmail1",
                      "aria-describedby": "emailHelp"
                    },
                    domProps: { value: _vm.reg_email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.reg_email = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "exampleInputPassword1" } }, [
                    _vm._v("Password")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.reg_password,
                        expression: "reg_password"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "password", id: "exampleInputPassword1" },
                    domProps: { value: _vm.reg_password },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.reg_password = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "exampleInputPassword2" } }, [
                    _vm._v("Repeat password")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.reg_password_confirmation,
                        expression: "reg_password_confirmation"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "password", id: "exampleInputPassword2" },
                    domProps: { value: _vm.reg_password_confirmation },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.reg_password_confirmation = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success",
                    on: { click: _vm.register }
                  },
                  [_vm._v("\n            Make account!\n          ")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        _vm.loginState = true
                      }
                    }
                  },
                  [_vm._v("\n            Login\n          ")]
                )
              ])
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col" })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/login.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/login.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_780e8960___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=780e8960& */ "./resources/js/pages/login.vue?vue&type=template&id=780e8960&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/js/pages/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_780e8960___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_780e8960___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/login.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/pages/login.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/login.vue?vue&type=template&id=780e8960&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/login.vue?vue&type=template&id=780e8960& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_780e8960___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=780e8960& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/login.vue?vue&type=template&id=780e8960&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_780e8960___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_780e8960___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);