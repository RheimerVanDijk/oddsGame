(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/nav.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/nav.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  computed: {
    stacks: function stacks() {
      return this.$store.getters.getStacks;
    }
  },
  mounted: function mounted() {
    var _this = this;

    console.log("gay");
    console.log(this.$store.getters.getStacks);
    this.$http({
      url: "games/stacks",
      method: "get"
    }).then(function (res) {
      console.log(res.data);

      _this.$store.commit("mutateStacks", res.data);
    });
  },
  methods: {
    logout: function logout() {
      this.$router.push({
        name: "logout"
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/nav.vue?vue&type=template&id=199c5fa8&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/nav.vue?vue&type=template&id=199c5fa8& ***!
  \******************************************************************************************************************************************************************************************************/
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
  return _c(
    "nav",
    { staticClass: "navbar navbar-expand-lg navbar-light bg-light" },
    [
      _c(
        "div",
        { staticClass: "collapse navbar-collapse", attrs: { id: "navbarNav" } },
        [
          _c("ul", { staticClass: "navbar-nav" }, [
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-link",
                    attrs: { tag: "a", to: "/dashboard", href: "#" }
                  },
                  [_vm._v("Home")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-link",
                    attrs: { tag: "a", to: "/mijnWeddenschappen", href: "#" }
                  },
                  [_vm._v("Mijn weddenschappen")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm.$auth.check(2)
              ? _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: { tag: "a", to: "/addWedstrijd", href: "#" }
                      },
                      [_vm._v("Weddenschap toevoegen")]
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.$auth.check(2)
              ? _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: { tag: "a", to: "/adminPage", href: "#" }
                      },
                      [_vm._v("weddenschappen lijst")]
                    )
                  ],
                  1
                )
              : _vm._e()
          ])
        ]
      ),
      _vm._v(" "),
      _c("span", { staticClass: "navbar-text text-right mr-3" }, [
        _vm._v(" Stacks: $" + _vm._s(_vm.stacks) + " ")
      ]),
      _vm._v(" "),
      _c(
        "span",
        { staticClass: "navbar-text text-right", on: { click: _vm.logout } },
        [_vm._v("\n    logout\n  ")]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/nav.vue":
/*!*****************************************!*\
  !*** ./resources/js/components/nav.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_vue_vue_type_template_id_199c5fa8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.vue?vue&type=template&id=199c5fa8& */ "./resources/js/components/nav.vue?vue&type=template&id=199c5fa8&");
/* harmony import */ var _nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.vue?vue&type=script&lang=js& */ "./resources/js/components/nav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _nav_vue_vue_type_template_id_199c5fa8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _nav_vue_vue_type_template_id_199c5fa8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/nav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/nav.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/components/nav.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./nav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/nav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/nav.vue?vue&type=template&id=199c5fa8&":
/*!************************************************************************!*\
  !*** ./resources/js/components/nav.vue?vue&type=template&id=199c5fa8& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_template_id_199c5fa8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./nav.vue?vue&type=template&id=199c5fa8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/nav.vue?vue&type=template&id=199c5fa8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_template_id_199c5fa8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_template_id_199c5fa8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);