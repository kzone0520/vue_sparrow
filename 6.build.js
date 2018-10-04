webpackJsonp([6],{

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_setting_vue__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_setting_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_setting_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_setting_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_setting_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2b2af070_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_setting_vue__ = __webpack_require__(363);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(361)
}
var normalizeComponent = __webpack_require__(7)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2b2af070"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_setting_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2b2af070_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_setting_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/setting.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b2af070", Component.options)
  } else {
    hotAPI.reload("data-v-2b2af070", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            title: '设置'
        };
    },

    methods: {}
};

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(362);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("20c79504", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2b2af070\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./setting.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2b2af070\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./setting.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "tmpl" },
    [
      _c("nav-bar", { attrs: { title: _vm.title } }),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mui-views", attrs: { id: "app" } }, [
      _c("div", { staticClass: "mui-view" }, [
        _c("div", { staticClass: "mui-navbar" }),
        _vm._v(" "),
        _c("div", { staticClass: "mui-pages" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mui-page", attrs: { id: "setting" } }, [
      _c("div", { staticClass: "mui-navbar-inner mui-bar mui-bar-nav" }, [
        _c(
          "button",
          {
            staticClass:
              "mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left",
            attrs: { type: "button" }
          },
          [_c("span", { staticClass: "mui-icon mui-icon-left-nav" })]
        ),
        _vm._v(" "),
        _c("h1", { staticClass: "mui-center mui-title" }, [_vm._v("设置")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mui-page-content" }, [
        _c("div", { staticClass: "mui-scroll-wrapper" }, [
          _c("div", { staticClass: "mui-scroll" }, [
            _c("ul", { staticClass: "mui-table-view mui-table-view-chevron" }, [
              _c("li", { staticClass: "mui-table-view-cell mui-media" }, [
                _c(
                  "a",
                  {
                    staticClass: "mui-navigate-right",
                    attrs: { href: "#account" }
                  },
                  [
                    _c("img", {
                      staticClass: "mui-media-object mui-pull-left head-img",
                      attrs: { id: "head-img", src: "" }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "mui-media-body" }, [
                      _vm._v(
                        "\n\t\t\t\t\t\t\t\t\t\tHello MUI\n\t\t\t\t\t\t\t\t\t\t"
                      ),
                      _c("p", { staticClass: "mui-ellipsis" }, [
                        _vm._v("账号:hellomui")
                      ])
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("ul", { staticClass: "mui-table-view mui-table-view-chevron" }, [
              _c("li", { staticClass: "mui-table-view-cell" }, [
                _c(
                  "a",
                  {
                    staticClass: "mui-navigate-right",
                    attrs: { href: "#account" }
                  },
                  [_vm._v("账号与安全")]
                )
              ])
            ]),
            _vm._v(" "),
            _c("ul", { staticClass: "mui-table-view mui-table-view-chevron" }, [
              _c("li", { staticClass: "mui-table-view-cell" }, [
                _c(
                  "a",
                  {
                    staticClass: "mui-navigate-right",
                    attrs: { href: "#notifications" }
                  },
                  [_vm._v("新消息通知")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "mui-table-view-cell" }, [
                _c(
                  "a",
                  {
                    staticClass: "mui-navigate-right",
                    attrs: { href: "#privacy" }
                  },
                  [_vm._v("隐私")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "mui-table-view-cell" }, [
                _c(
                  "a",
                  {
                    staticClass: "mui-navigate-right",
                    attrs: { href: "#general" }
                  },
                  [_vm._v("通用")]
                )
              ])
            ]),
            _vm._v(" "),
            _c("ul", { staticClass: "mui-table-view mui-table-view-chevron" }, [
              _c("li", { staticClass: "mui-table-view-cell" }, [
                _c(
                  "a",
                  {
                    staticClass: "mui-navigate-right",
                    attrs: { href: "#about" }
                  },
                  [
                    _vm._v("关于MUI "),
                    _c("i", { staticClass: "mui-pull-right update" }, [
                      _vm._v("V2.7.0")
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("ul", { staticClass: "mui-table-view" }, [
              _c(
                "li",
                {
                  staticClass: "mui-table-view-cell",
                  staticStyle: { "text-align": "center" }
                },
                [_c("a", [_vm._v("退出登录")])]
              )
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2b2af070", esExports)
  }
}

/***/ })

});