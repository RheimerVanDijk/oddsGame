(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/controlGames.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/controlGames.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["gameData"],
  mounted: function mounted() {
    console.log(this.gameData);
  },
  methods: {
    finish: function finish(type) {
      var _this = this;

      this.$http({
        url: "games/finish",
        method: "POST",
        data: {
          id: this.gameData.id,
          type: type
        }
      }).then(function (res) {
        _this.$http({
          url: "games/stacks",
          method: "get"
        }).then(function (res) {
          console.log(res.data);

          _this.$store.commit("mutateStacks", res.data);
        });

        _this.$store.commit("mutateUpdateList", true);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/controlGames.vue?vue&type=template&id=a2ace5a2&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/controlGames.vue?vue&type=template&id=a2ace5a2& ***!
  \***************************************************************************************************************************************************************************************************************/
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
        "data-target": "#betModal"
      }
    },
    [
      _c("div", { staticClass: "text" }, [
        _c("div", { staticClass: "top" }, [
          _vm._v(_vm._s(_vm.gameData.thuis) + " - " + _vm._s(_vm.gameData.uit))
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "bottom" }, [
          _vm._v(_vm._s(_vm.gameData.tijd))
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "odds" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-outline-success mr-3",
            attrs: { type: "button" },
            on: {
              click: function($event) {
                return _vm.finish(0)
              }
            }
          },
          [_vm._v("\n      Gewonnen\n    ")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-outline-warning mr-3",
            attrs: { type: "button" },
            on: {
              click: function($event) {
                return _vm.finish(1)
              }
            }
          },
          [_vm._v("\n      Gelijk\n    ")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-outline-danger mr-3",
            attrs: { type: "button" },
            on: {
              click: function($event) {
                return _vm.finish(2)
              }
            }
          },
          [_vm._v("\n      Verloren\n    ")]
        ),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-danger", attrs: { type: "button" } },
          [_vm._v("Delete")]
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/controlGames.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/controlGames.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controlGames_vue_vue_type_template_id_a2ace5a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controlGames.vue?vue&type=template&id=a2ace5a2& */ "./resources/js/components/controlGames.vue?vue&type=template&id=a2ace5a2&");
/* harmony import */ var _controlGames_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controlGames.vue?vue&type=script&lang=js& */ "./resources/js/components/controlGames.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _controlGames_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _controlGames_vue_vue_type_template_id_a2ace5a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _controlGames_vue_vue_type_template_id_a2ace5a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/controlGames.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/controlGames.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/controlGames.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_controlGames_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./controlGames.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/controlGames.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_controlGames_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/controlGames.vue?vue&type=template&id=a2ace5a2&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/controlGames.vue?vue&type=template&id=a2ace5a2& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_controlGames_vue_vue_type_template_id_a2ace5a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./controlGames.vue?vue&type=template&id=a2ace5a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/controlGames.vue?vue&type=template&id=a2ace5a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_controlGames_vue_vue_type_template_id_a2ace5a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_controlGames_vue_vue_type_template_id_a2ace5a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);