(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/bets.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/bets.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["data"],
  computed: {
    bidMulti: function bidMulti() {
      if (this.data.bidType == 0) {
        return this.data.win;
      } else if (this.data.bidType == 1) {
        return this.data.gelijk;
      } else if (this.data.bidType == 2) {
        return this.data.verlies;
      }
    }
  },
  data: function data() {
    return {
      types: ["winnen", "gelijk", "verliezen"]
    };
  },
  mounted: function mounted() {
    console.log(this.data);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/bets.vue?vue&type=template&id=0f3c57cd&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/bets.vue?vue&type=template&id=0f3c57cd& ***!
  \*******************************************************************************************************************************************************************************************************/
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
    "button",
    {
      staticClass: "list-group-item game-item",
      attrs: {
        type: "button",
        "data-toggle": "modal",
        "data-target": "#exampleModal"
      }
    },
    [
      _c("div", { staticClass: "text" }, [
        _c("div", { staticClass: "top" }, [
          _vm._v(_vm._s(_vm.data.thuis) + " - " + _vm._s(_vm.data.uit))
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "bottom" }, [_vm._v(_vm._s(_vm.data.tijd))])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "odds" }, [
        _c("div", [
          _vm._v(
            "\n      " +
              _vm._s(_vm.types[_vm.data.bidType]) +
              " | " +
              _vm._s(_vm.bidMulti) +
              ":\n      "
          ),
          _c("span", { staticClass: "badge badge-primary badge-pill" }, [
            _vm._v("$" + _vm._s(_vm.data.bid))
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/bets.vue":
/*!******************************************!*\
  !*** ./resources/js/components/bets.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bets_vue_vue_type_template_id_0f3c57cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bets.vue?vue&type=template&id=0f3c57cd& */ "./resources/js/components/bets.vue?vue&type=template&id=0f3c57cd&");
/* harmony import */ var _bets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bets.vue?vue&type=script&lang=js& */ "./resources/js/components/bets.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _bets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _bets_vue_vue_type_template_id_0f3c57cd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bets_vue_vue_type_template_id_0f3c57cd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/bets.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/bets.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/bets.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./bets.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/bets.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/bets.vue?vue&type=template&id=0f3c57cd&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/bets.vue?vue&type=template&id=0f3c57cd& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bets_vue_vue_type_template_id_0f3c57cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./bets.vue?vue&type=template&id=0f3c57cd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/bets.vue?vue&type=template&id=0f3c57cd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bets_vue_vue_type_template_id_0f3c57cd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bets_vue_vue_type_template_id_0f3c57cd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);