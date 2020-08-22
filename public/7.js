(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/betModal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/betModal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
    SelectedGameObject: function SelectedGameObject() {
      return this.$store.getters.getSelectedGameObject;
    },
    winMakes: function winMakes() {
      return (this.win * this.SelectedGameObject.win).toFixed(2);
    },
    gelijkMakes: function gelijkMakes() {
      return (this.gelijk * this.SelectedGameObject.gelijk).toFixed(2);
    },
    verliesMakes: function verliesMakes() {
      return (this.verlies * this.SelectedGameObject.verlies).toFixed(2);
    }
  },
  watch: {
    win: function win() {
      if (this.win > 0.0) {
        document.querySelector(".gelijk").disabled = true;
        document.querySelector(".verlies").disabled = true;
      } else {
        document.querySelector(".gelijk").disabled = false;
        document.querySelector(".verlies").disabled = false;
      }
    },
    gelijk: function gelijk() {
      if (this.gelijk > 0.0) {
        document.querySelector(".win").disabled = true;
        document.querySelector(".verlies").disabled = true;
      } else {
        document.querySelector(".win").disabled = false;
        document.querySelector(".verlies").disabled = false;
      }
    },
    verlies: function verlies() {
      if (this.verlies > 0.0) {
        document.querySelector(".gelijk").disabled = true;
        document.querySelector(".win").disabled = true;
      } else {
        document.querySelector(".gelijk").disabled = false;
        document.querySelector(".win").disabled = false;
      }
    }
  },
  data: function data() {
    return {
      win: "",
      gelijk: "",
      verlies: ""
    };
  },
  mounted: function mounted() {
    console.log("OPEN");
    console.log(this.SelectedGameObject);
  },
  methods: {
    closeModel: function closeModel() {
      this.$store.commit("mutateBetModelState", false);
      this.$store.commit("mutateSelectedGameObject", {});
    },
    bid: function bid() {
      var _this = this;

      var bidsArray = {};

      if (this.win >= 0.5) {
        bidsArray = {
          type: 0,
          bid: this.win
        };
      }

      if (this.gelijk >= 0.5) {
        bidsArray = {
          type: 1,
          bid: this.gelijk
        };
      }

      if (this.verlies >= 0.5) {
        bidsArray = {
          type: 2,
          bid: this.verlies
        };
      }

      this.$http({
        url: "games/bid",
        method: "POST",
        data: {
          bidType: bidsArray.type,
          bid: bidsArray.bid,
          game: this.SelectedGameObject.id
        }
      }).then(function (res) {
        _this.$http({
          url: "games/stacks",
          method: "get"
        }).then(function (res) {
          _this.$store.commit("mutateBetModelState", false);

          _this.$store.commit("mutateSelectedGameObject", {});

          console.log(res.data);

          _this.$store.commit("mutateStacks", res.data);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/betModal.vue?vue&type=template&id=6aadd3e7&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/betModal.vue?vue&type=template&id=6aadd3e7& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "modal fade show betmodel",
      staticStyle: { display: "block" },
      attrs: {
        id: "betModal",
        tabindex: "-1",
        "aria-labelledby": "betModal",
        "aria-hidden": "true"
      }
    },
    [
      _c("div", { staticClass: "modal-dialog" }, [
        _c("div", { staticClass: "modal-content" }, [
          _c("div", { staticClass: "modal-header" }, [
            _c(
              "h5",
              {
                staticClass: "modal-title",
                attrs: { id: "exampleModalLabel" }
              },
              [
                _vm._v(
                  "\n          Weddenschap " +
                    _vm._s(_vm.SelectedGameObject.thuis) +
                    " -\n          " +
                    _vm._s(_vm.SelectedGameObject.uit) +
                    "\n        "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "close",
                attrs: {
                  type: "button",
                  "data-dismiss": "modal",
                  "aria-label": "Close"
                },
                on: { click: _vm.closeModel }
              },
              [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body" }, [
            _c("h5", [
              _vm._v(
                _vm._s(_vm.SelectedGameObject.thuis) +
                  " - " +
                  _vm._s(_vm.SelectedGameObject.uit)
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group mb-3 d-flex" }, [
              _c("div", { staticClass: "input-group-prepend" }, [
                _c(
                  "span",
                  {
                    staticClass: "input-group-text",
                    attrs: { id: "basic-addon1" }
                  },
                  [_vm._v("Winnen | " + _vm._s(_vm.SelectedGameObject.win))]
                )
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.win,
                    expression: "win"
                  }
                ],
                staticClass: "form-control win",
                attrs: {
                  type: "number",
                  placeholder: "Inzet",
                  "aria-label": "Inzet",
                  "aria-describedby": "basic-addon1",
                  min: "0.5"
                },
                domProps: { value: _vm.win },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.win = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("small", { staticClass: "form-text text-muted w-100" }, [
                _vm._v("Je maakt kan op: $" + _vm._s(_vm.winMakes))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group mb-3" }, [
              _c("div", { staticClass: "input-group-prepend" }, [
                _c(
                  "span",
                  {
                    staticClass: "input-group-text",
                    attrs: { id: "basic-addon1" }
                  },
                  [_vm._v("Gelijk | " + _vm._s(_vm.SelectedGameObject.gelijk))]
                )
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.gelijk,
                    expression: "gelijk"
                  }
                ],
                staticClass: "form-control gelijk",
                attrs: {
                  type: "number",
                  placeholder: "Inzet",
                  "aria-label": "Inzet",
                  "aria-describedby": "basic-addon1",
                  min: "0.5"
                },
                domProps: { value: _vm.gelijk },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.gelijk = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("small", { staticClass: "form-text text-muted w-100" }, [
                _vm._v("Je maakt kan op: $" + _vm._s(_vm.gelijkMakes))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group mb-3" }, [
              _c("div", { staticClass: "input-group-prepend" }, [
                _c(
                  "span",
                  {
                    staticClass: "input-group-text",
                    attrs: { id: "basic-addon1" }
                  },
                  [
                    _vm._v(
                      "verliezen | " + _vm._s(_vm.SelectedGameObject.verlies)
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.verlies,
                    expression: "verlies"
                  }
                ],
                staticClass: "form-control verlies",
                attrs: {
                  type: "number",
                  placeholder: "Inzet",
                  "aria-label": "Inzet",
                  "aria-describedby": "basic-addon1",
                  min: "0.5"
                },
                domProps: { value: _vm.verlies },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.verlies = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("small", { staticClass: "form-text text-muted w-100" }, [
                _vm._v("Je maakt kan op: $" + _vm._s(_vm.verliesMakes))
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-footer" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-secondary",
                attrs: { type: "button", "data-dismiss": "modal" },
                on: { click: _vm.closeModel }
              },
              [_vm._v("\n          Close\n        ")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                attrs: { type: "button" },
                on: { click: _vm.bid }
              },
              [_vm._v("\n          Bieden\n        ")]
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/betModal.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/betModal.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _betModal_vue_vue_type_template_id_6aadd3e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./betModal.vue?vue&type=template&id=6aadd3e7& */ "./resources/js/components/betModal.vue?vue&type=template&id=6aadd3e7&");
/* harmony import */ var _betModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./betModal.vue?vue&type=script&lang=js& */ "./resources/js/components/betModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _betModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _betModal_vue_vue_type_template_id_6aadd3e7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _betModal_vue_vue_type_template_id_6aadd3e7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/betModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/betModal.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/betModal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_betModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./betModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/betModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_betModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/betModal.vue?vue&type=template&id=6aadd3e7&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/betModal.vue?vue&type=template&id=6aadd3e7& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_betModal_vue_vue_type_template_id_6aadd3e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./betModal.vue?vue&type=template&id=6aadd3e7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/betModal.vue?vue&type=template&id=6aadd3e7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_betModal_vue_vue_type_template_id_6aadd3e7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_betModal_vue_vue_type_template_id_6aadd3e7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);