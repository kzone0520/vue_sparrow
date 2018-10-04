webpackJsonp([8],{

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_music_vue__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_music_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_music_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_music_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_music_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c5ce25b_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_music_vue__ = __webpack_require__(326);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(324)
}
var normalizeComponent = __webpack_require__(7)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7c5ce25b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_music_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c5ce25b_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_music_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/music/music.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c5ce25b", Component.options)
  } else {
    hotAPI.reload("data-v-7c5ce25b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 278:
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

exports.default = {
    data: function data() {
        return {
            title: "音乐商城",
            musicList: []
        };
    },

    methods: {
        changeSort: function changeSort(e) {}
    },
    created: function created() {
        var _this = this;

        this.$axios.get('http://api.apiopen.top/musicRankings').then(function (res) {
            _this.musicList = res.data.result;
        }).catch(function (err) {
            console.log(err);
        });
    }
};

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(325);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("27ba2730", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7c5ce25b\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./music.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7c5ce25b\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./music.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.fenlei[data-v-7c5ce25b]{\n    width: 100%;\n    display: flex;\n    margin-top: 10px;\n    border-bottom: 1px solid gray;\n}\n.song[data-v-7c5ce25b] {\n    width: 350px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n.song li[data-v-7c5ce25b] {\n    height: 20px;\n    overflow: hidden;\n    margin-left: 6px;\n}\n", ""]);

// exports


/***/ }),

/***/ 326:
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
        "ul",
        _vm._l(_vm.musicList, function(msc) {
          return _c(
            "li",
            {
              key: msc.type,
              staticClass: "fenlei",
              on: {
                click: function($event) {
                  _vm.changeSort($event)
                }
              }
            },
            [
              _c("img", {
                attrs: {
                  src: msc.pic_s210,
                  alt: msc.name,
                  height: "150",
                  width: "150"
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "song" },
                _vm._l(msc.content, function(music, index) {
                  return _c(
                    "li",
                    { key: index },
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              name: "musicDetail",
                              query: { type: msc.type, song_id: music.song_id }
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(index + 1) +
                              ". " +
                              _vm._s(music.title) +
                              " - " +
                              _vm._s(music.author) +
                              "\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  )
                })
              ),
              _vm._v(" "),
              _c("hr")
            ]
          )
        })
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
    require("vue-hot-reload-api")      .rerender("data-v-7c5ce25b", esExports)
  }
}

/***/ })

});