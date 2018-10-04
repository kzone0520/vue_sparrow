webpackJsonp([5],{

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vip_vue__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vip_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vip_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vip_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vip_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_11e393cb_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_vip_vue__ = __webpack_require__(303);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(301)
}
var normalizeComponent = __webpack_require__(7)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-11e393cb"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vip_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_11e393cb_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_vip_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/vip/vip.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-11e393cb", Component.options)
  } else {
    hotAPI.reload("data-v-11e393cb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 274:
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

exports.default = {
    data: function data() {
        return {
            title: "会员"
        };
    },

    methods: {
        login: function login() {
            this.$toast({
                message: '暂不支持会员功能',
                position: 'middle',
                duration: 1000
            });
        }
    },
    mounted: function mounted() {
        this.login();
    }
};

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(302);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("988be4e6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-11e393cb\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vip.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-11e393cb\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vip.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.block[data-v-11e393cb] {\n    height: 50px;\n    position: relative;\n    background: white;\n}\n.block[data-v-11e393cb]:nth-child(2) {\n    margin-top: 30px;\n    border-bottom: 1px solid gray;\n}\n.uname[data-v-11e393cb],.psw[data-v-11e393cb] {\n    width: 85%;\n    height: 100%;\n    position: absolute;\n    right: 0;\n    background: none;\n    border: none;\n}\nspan[data-v-11e393cb] {\n    width: 30px;;\n    text-align: center;\n    font-size: 20px;\n    font-weight: bold;\n    line-height: 50px;\n    margin-left: 10px;\n}\n.auto[data-v-11e393cb] {\n    margin-top: 18px;\n    height: 50px;\n    background: white;\n}\n.auto .switch[data-v-11e393cb] {\n    float: right;\n    margin-right: 10px;\n    margin-top: 10px;\n}\n.btn[data-v-11e393cb] {\n    width: 94%;\n    height: 50px;\n    margin: 30px auto;\n}\n.opation[data-v-11e393cb]{\n    text-align: center;\n    margin: 0 auto;\n}\n.clear[data-v-11e393cb] {zoom:1\n};\n.clear[data-v-11e393cb]:after {\n    content: '';display: block; clear:both;\n}\n", ""]);

// exports


/***/ }),

/***/ 303:
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
      _vm._m(1),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "auto" },
        [
          _c("span", [_vm._v("自动登入")]),
          _vm._v(" "),
          _c("mt-switch", { staticClass: "switch" })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "mt-button",
        {
          staticClass: "btn",
          attrs: { type: "primary", size: "large" },
          on: { click: _vm.login }
        },
        [_vm._v("登录")]
      ),
      _vm._v(" "),
      _c("div", [
        _c("div", { staticClass: "opation" }, [
          _c("span", [
            _c(
              "a",
              { attrs: { href: "javascript:;" }, on: { click: _vm.login } },
              [_vm._v("注册账号")]
            )
          ]),
          _vm._v("|\n        "),
          _c("span", [
            _c(
              "a",
              { attrs: { href: "javascript:;" }, on: { click: _vm.login } },
              [_vm._v("忘记密码")]
            )
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "block" }, [
      _c("span", [_vm._v("账号：")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "uname",
        attrs: { type: "text", placeholder: "请输入用户名" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "block" }, [
      _c("span", [_vm._v("密码：")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "psw",
        attrs: { type: "password", placeholder: "请输入用密码" }
      })
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-11e393cb", esExports)
  }
}

/***/ })

});