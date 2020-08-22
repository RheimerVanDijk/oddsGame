(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mijnWeddenschappen.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/mijnWeddenschappen.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    navigation: function navigation() {
      return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/nav */ "./resources/js/components/nav.vue"));
    },
    bets: function bets() {
      return __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! ../components/bets */ "./resources/js/components/bets.vue"));
    }
  },
  data: function data() {
    return {
      bids: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$http({
      url: "games/getAllBids",
      method: "get"
    }).then(function (res) {
      _this.bids = res.data;
      console.log(res.data);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mijnWeddenschappen.vue?vue&type=template&id=0f625012&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/mijnWeddenschappen.vue?vue&type=template&id=0f625012& ***!
  \****************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "games" }, [
        _c(
          "ul",
          { staticClass: "list-group game-items" },
          _vm._l(_vm.bids, function(bet, index) {
            return _c("bets", { key: index, attrs: { data: bet } })
          }),
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/mijnWeddenschappen.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/mijnWeddenschappen.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mijnWeddenschappen_vue_vue_type_template_id_0f625012___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mijnWeddenschappen.vue?vue&type=template&id=0f625012& */ "./resources/js/pages/mijnWeddenschappen.vue?vue&type=template&id=0f625012&");
/* harmony import */ var _mijnWeddenschappen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mijnWeddenschappen.vue?vue&type=script&lang=js& */ "./resources/js/pages/mijnWeddenschappen.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _mijnWeddenschappen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mijnWeddenschappen_vue_vue_type_template_id_0f625012___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mijnWeddenschappen_vue_vue_type_template_id_0f625012___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/mijnWeddenschappen.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/mijnWeddenschappen.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/mijnWeddenschappen.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mijnWeddenschappen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./mijnWeddenschappen.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mijnWeddenschappen.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mijnWeddenschappen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/mijnWeddenschappen.vue?vue&type=template&id=0f625012&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/mijnWeddenschappen.vue?vue&type=template&id=0f625012& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mijnWeddenschappen_vue_vue_type_template_id_0f625012___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./mijnWeddenschappen.vue?vue&type=template&id=0f625012& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/mijnWeddenschappen.vue?vue&type=template&id=0f625012&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mijnWeddenschappen_vue_vue_type_template_id_0f625012___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mijnWeddenschappen_vue_vue_type_template_id_0f625012___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);