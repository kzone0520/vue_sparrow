webpackJsonp([3],{

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_news_vue__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_news_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_news_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_news_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_news_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_adfff5a2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_news_vue__ = __webpack_require__(329);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(327)
}
var normalizeComponent = __webpack_require__(7)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-adfff5a2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_news_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_adfff5a2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_news_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/news/news.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-adfff5a2", Component.options)
  } else {
    hotAPI.reload("data-v-adfff5a2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(266), __esModule: true };

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(155);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(267);
module.exports = __webpack_require__(8).Object.keys;


/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(264);
var $keys = __webpack_require__(154);

__webpack_require__(268)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(152);
var core = __webpack_require__(8);
var fails = __webpack_require__(16);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(263);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
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
            title: '新闻列表',
            newsList: [],
            allLoaded: false,
            isAutoFill: false,
            page: 0,
            moreNewsTitle: []
        };
    },

    methods: {
        loadBottom: function loadBottom() {
            console.log('上拉触发了');
            this.page++;
            if (this.page === this.moreNewsTitle.length - 1) {
                this.allLoaded = true;
            }
            this.showMore();
            this.$refs.loadmore.onBottomLoaded();
        },
        showMore: function showMore() {
            var _this = this;

            this.$axios.get("https://www.apiopen.top/journalismApi").then(function (res) {
                _this.moreNewsTitle = (0, _keys2.default)(res.data.data);
                _this.newsList = _this.newsList.concat(res.data.data[_this.moreNewsTitle[_this.page]]);
                console.log(_this.page, _this.moreNewsTitle[_this.page]);
            }).catch(function (err) {
                console.log(err);
            });
        }
    },
    created: function created() {
        this.showMore();
    }
};

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(328);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("6305343e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-adfff5a2\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./news.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-adfff5a2\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./news.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.mui-media-body span[data-v-adfff5a2] {\n    color: #0094ff;\n    font-size: 12px;\n}\n.tmpl[data-v-adfff5a2] {\n    height: 557px;\n    overflow: visible;\n}\n.mian[data-v-adfff5a2] {\n    margin-bottom: 50px;\n}\n.mui-media[data-v-adfff5a2] {\n    height: 66px;\n}\n", ""]);

// exports


/***/ }),

/***/ 329:
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
      _c(
        "mt-loadmore",
        {
          ref: "loadmore",
          staticClass: "mian",
          attrs: {
            "bottom-method": _vm.loadBottom,
            "bottom-all-loaded": _vm.allLoaded,
            "auto-fill": _vm.isAutoFill
          }
        },
        [
          _c(
            "ul",
            { staticClass: "mui-table-view" },
            _vm._l(_vm.newsList, function(news, index) {
              return _c(
                "li",
                { key: index, staticClass: "mui-table-view-cell mui-media" },
                [
                  _c("a", { attrs: { href: news.link } }, [
                    _c("img", {
                      staticClass: "mui-media-object mui-pull-left",
                      attrs: {
                        src: news.picInfo[0] ? news.picInfo[0].url : "/"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "mui-media-body" }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(news.title) +
                          "\n                        "
                      ),
                      _c("br"),
                      _c("span", { staticStyle: { float: "left" } }, [
                        _vm._v("点击次数：" + _vm._s(news.tcount))
                      ]),
                      _c("span", { staticStyle: { float: "right" } }, [
                        _vm._v(_vm._s(news.ptime))
                      ])
                    ])
                  ])
                ]
              )
            })
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-adfff5a2", esExports)
  }
}

/***/ })

});