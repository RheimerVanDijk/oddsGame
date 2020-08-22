(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/addWedstrijd.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/addWedstrijd.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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
  components: {
    navigation: function navigation() {
      return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/nav */ "./resources/js/components/nav.vue"));
    }
  },
  data: function data() {
    return {
      thuis: "",
      uit: "",
      tijd: "",
      win: 0,
      gelijk: 0,
      verlies: 0
    };
  },
  methods: {
    makeGame: function makeGame() {
      this.$http({
        url: "games/create",
        method: "POST",
        data: {
          thuis: this.thuis,
          uit: this.uit,
          tijd: this.tijd,
          win: this.win,
          gelijk: this.gelijk,
          verlies: this.verlies
        }
      }).then(function (res) {
        console.log(res);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/addWedstrijd.vue?vue&type=template&id=983f6da0&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/addWedstrijd.vue?vue&type=template&id=983f6da0& ***!
  \**********************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c("navigation"),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid mt-3" }, [
        _c("div", { staticClass: "row mb-3" }, [
          _c("div", { staticClass: "col" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.thuis,
                  expression: "thuis"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", placeholder: "Thuis team" },
              domProps: { value: _vm.thuis },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.thuis = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.uit,
                  expression: "uit"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", placeholder: "Uit team" },
              domProps: { value: _vm.uit },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.uit = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.tijd,
                  expression: "tijd"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "time", placeholder: "Tijd" },
              domProps: { value: _vm.tijd },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.tijd = $event.target.value
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row mb-3" }, [
          _c("div", { staticClass: "col" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.win,
                  expression: "win"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", placeholder: "Win kansen" },
              domProps: { value: _vm.win },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.win = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.gelijk,
                  expression: "gelijk"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", placeholder: "Gelijk kansen" },
              domProps: { value: _vm.gelijk },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.gelijk = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.verlies,
                  expression: "verlies"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", placeholder: "Verlies kansen" },
              domProps: { value: _vm.verlies },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.verlies = $event.target.value
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col" }),
          _vm._v(" "),
          _c("div", { staticClass: "col" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-success",
                staticStyle: { width: "100%" },
                attrs: { type: "button" },
                on: { click: _vm.makeGame }
              },
              [_vm._v("\n          Wedstrijd toevoegen\n        ")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col" })
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/addWedstrijd.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/addWedstrijd.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addWedstrijd_vue_vue_type_template_id_983f6da0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addWedstrijd.vue?vue&type=template&id=983f6da0& */ "./resources/js/pages/addWedstrijd.vue?vue&type=template&id=983f6da0&");
/* harmony import */ var _addWedstrijd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addWedstrijd.vue?vue&type=script&lang=js& */ "./resources/js/pages/addWedstrijd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addWedstrijd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addWedstrijd_vue_vue_type_template_id_983f6da0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addWedstrijd_vue_vue_type_template_id_983f6da0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/addWedstrijd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/addWedstrijd.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/addWedstrijd.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addWedstrijd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./addWedstrijd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/addWedstrijd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addWedstrijd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/addWedstrijd.vue?vue&type=template&id=983f6da0&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/addWedstrijd.vue?vue&type=template&id=983f6da0& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addWedstrijd_vue_vue_type_template_id_983f6da0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./addWedstrijd.vue?vue&type=template&id=983f6da0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/addWedstrijd.vue?vue&type=template&id=983f6da0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addWedstrijd_vue_vue_type_template_id_983f6da0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addWedstrijd_vue_vue_type_template_id_983f6da0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);