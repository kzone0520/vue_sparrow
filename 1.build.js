webpackJsonp([1],{

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_musicDetail_vue__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_musicDetail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_musicDetail_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_musicDetail_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_musicDetail_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7902280c_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_musicDetail_vue__ = __webpack_require__(350);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(348)
}
var normalizeComponent = __webpack_require__(7)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7902280c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_musicDetail_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7902280c_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_musicDetail_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/music/musicDetail.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7902280c", Component.options)
  } else {
    hotAPI.reload("data-v-7902280c", Component.options)
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

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(271);

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = __webpack_require__(263);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 将对localStorage的操作封装(不同的api函数内部逻辑有所不同)
var pordsTools = {};
pordsTools.save = function (pordObj, num) {
    var storage = window.localStorage;
    // 从本地中获取信息或者为空对象
    var obj = JSON.parse(storage.getItem('pords') || '{}');
    // 判断这个分类是否存在 （存储分类是为了在购物车里方便获取商品）
    if (obj && (0, _keys2.default)(obj).indexOf(String(pordObj.type)) >= 0) {
        // 判断song_id这个key是否存在
        if ((0, _keys2.default)(obj[pordObj.type]).indexOf(String(pordObj.song_id)) >= 0) {
            obj[pordObj.type][pordObj.song_id] += num;
        } else {
            obj[pordObj.type][pordObj.song_id] = num;
        }
    } else {
        obj[pordObj.type] = {};
        obj[pordObj.type][pordObj.song_id] = num;
    }
    storage.setItem('pords', (0, _stringify2.default)(obj));
};

pordsTools.del = function (pordObj) {
    var storage = window.localStorage;
    var obj = JSON.parse(storage.getItem('pords') || '{}');
    // 根据song_id删除数据
    delete obj[pordObj.type][pordObj.song_id];
    // 如果类别type中已经没有数据，删除这个type
    if ((0, _keys2.default)(obj[pordObj.type]).length === 0) {
        delete obj[pordObj.type];
    }
    // 别更新之前的数据
    storage.setItem('pords', (0, _stringify2.default)(obj));
};

exports.default = pordsTools;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(272), __esModule: true };

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(8);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vueBus = __webpack_require__(15);

var _vueBus2 = _interopRequireDefault(_vueBus);

var _pordsTools = __webpack_require__(270);

var _pordsTools2 = _interopRequireDefault(_pordsTools);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            title: '歌曲详情',
            type: '',
            song_id: '',
            songDetail: {},
            num: 1,
            isShow: false
        };
    },

    methods: {
        reducegGoods: function reducegGoods() {
            if (this.num > 1) {
                this.num--;
            }
        },
        addGoods: function addGoods() {
            this.num++;
        },
        buynow: function buynow() {
            this.$toast('暂不支持此功能');
        },
        addShopcart: function addShopcart() {
            _vueBus2.default.$emit('changenum', this.num);
            _pordsTools2.default.save(this.songDetail, this.num);
            /* // 将对localStorage的操作封装成pordsTool里的函数
            let storage = window.localStorage;
            // 从本地中获取信息或者为空对象
            let obj = JSON.parse(storage.getItem('pords') || '{}');
            // 判断这个分类是否存在 （存储分类是为了在购物车里方便获取商品）
            if (obj && Object.keys(obj).indexOf(String(this.type)) >= 0 ){
                // 判断song_id这个key是否存在
                if (Object.keys(obj[this.type]).indexOf(String(this.song_id)) >= 0){
                    obj[this.type][this.song_id] += this.num;
                } else {
                    obj[this.type][this.song_id] = this.num;
                }
            } else {
                obj[this.type] = {};
                obj[this.type][this.song_id] = this.num;
            }
            storage.setItem('pords', JSON.stringify(obj)); */
            this.isShow = true;
        },
        afterEnter: function afterEnter() {
            this.isShow = false;
        }
    },
    created: function created() {
        var _this = this;

        this.type = this.$route.query.type;
        this.song_id = this.$route.query.song_id;
        this.$axios.get("http://api.apiopen.top/musicRankingsDetails?type=" + this.type).then(function (res) {
            res.data.result.forEach(function (item) {
                if (_this.song_id === item.song_id) {
                    _this.songDetail = item;
                    // 将类别挂载到songDetail对象上，方便存储localStorage
                    _this.$set(_this.songDetail, 'type', _this.type);
                    return;
                }
            });
        }).catch(function (err) {
            console.log(err);
        });
    }
};

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(349);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("26859c9f", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7902280c\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./musicDetail.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7902280c\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./musicDetail.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.pic[data-v-7902280c], .audition[data-v-7902280c], .price[data-v-7902280c], .info[data-v-7902280c] {\n    width: 96%;\n    margin: 2px auto;\n    border: 1px solid gainsboro;\n    border-radius: 8px;\n    background: white;\n    padding: 10px;\n    font-size: 14px;\n    color: gray;\n}\n.wrap[data-v-7902280c] {\n    border: 1px solid gainsboro;\n    border-radius: 16px;\n    text-align: center;\n}\nh3[data-v-7902280c] {\n    width: 98%;\n    border-bottom: 1px solid black;\n    color: blue;\n    padding-bottom: 4px;\n}\n.buyNum[data-v-7902280c] {\n    display: inline-block;\n    margin-top: 10px;\n}\n.buyNum input[data-v-7902280c]{\n    width: 30px;\n    height: 24px;\n    font-size: 20px;\n    padding-top: 0px;\n    padding-left: 8px;\n}\n.btn[data-v-7902280c] {\n    margin-top: 10px;\n    margin-right: 6px;\n}\n.price span[data-v-7902280c] {\n    margin: 0 50px 40px 0;\n}\n.danger[data-v-7902280c] {\n    position: relative;\n    overflow: visible;\n}\n.ball[data-v-7902280c] {\n    height: 18px;\n    width: 18px;\n    border-radius: 50%;\n    background: red;\n    position: absolute;\n    top: 0px;\n    left: 50%;\n}\n.ball-enter-active[data-v-7902280c]{\nanimation: bounce-in-data-v-7902280c .5s;\n}\n@keyframes bounce-in-data-v-7902280c {\n0% {\n        /*x,y,z轴的位置*/\n        transform: translate3d(0, 0, 0);\n}\n10% {\n        transform: translate3d(25px, -10px, 0);\n}\n20% {\n        transform: translate3d(50px, -30px, 0);\n}\n30% {\n        transform: translate3d(75px, -45px, 0);\n}\n40% {\n        transform: translate3d(100px, -50px, 0);\n}\n50% {\n        transform: translate3d(120px, -30px, 0);\n}\n60% {\n        transform: translate3d(135px, -15px, 0);\n}\n70% {\n        transform: translate3d(150px, 5px, 0);\n}\n80% {\n        transform: translate3d(160px, 10px, 0);\n}\n100% {\n        transform: translate3d(20px, 280px, 0);\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 350:
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
      _c("div", [
        _c("div", { staticClass: "pic" }, [
          _c("div", { staticClass: "wrap" }, [
            _c("img", {
              attrs: {
                src: _vm.songDetail.pic_radio,
                alt: "封面",
                width: "200",
                height: "200"
              }
            }),
            _vm._v(" "),
            _c("audio", { attrs: { src: "", controls: "controls" } })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "price" }, [
          _c("h3", [_vm._v("曲名：" + _vm._s(_vm.songDetail.title))]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "markprice" },
            [
              _vm._m(0),
              _vm._m(1),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("div", { staticClass: "buyNum" }, [
                _vm._v(
                  "\n                    购买数量： \n                    "
                ),
                _c("input", {
                  attrs: { type: "button", value: "-" },
                  on: { click: _vm.reducegGoods }
                }),
                _vm._v(" "),
                _c("input", {
                  attrs: {
                    type: "button",
                    disabled: "disabled",
                    value: _vm.num
                  }
                }),
                _vm._v(" "),
                _c("input", {
                  attrs: { type: "button", value: "+" },
                  on: { click: _vm.addGoods }
                })
              ]),
              _c("br"),
              _vm._v(" "),
              _c(
                "mt-button",
                {
                  staticClass: "btn",
                  attrs: { type: "primary" },
                  on: { click: _vm.buynow }
                },
                [_vm._v("立即购买")]
              ),
              _vm._v(" "),
              _c(
                "mt-button",
                {
                  staticClass: "btn danger",
                  attrs: { type: "danger" },
                  on: { click: _vm.addShopcart }
                },
                [
                  _vm._v(
                    "\n                    加入购物车\n                    "
                  ),
                  _c(
                    "transition",
                    {
                      attrs: { name: "ball" },
                      on: { "after-enter": _vm.afterEnter }
                    },
                    [_vm.isShow ? _c("div", { staticClass: "ball" }) : _vm._e()]
                  )
                ],
                1
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "info" }, [
          _c("p", [_vm._v("歌手：" + _vm._s(_vm.songDetail.author))]),
          _vm._v(" "),
          _c("p", [_vm._v("专辑：" + _vm._s(_vm.songDetail.album_title))]),
          _vm._v(" "),
          _c("p", [_vm._v("地区：" + _vm._s(_vm.songDetail.country))]),
          _vm._v(" "),
          _c("p", [_vm._v("语言：" + _vm._s(_vm.songDetail.language))]),
          _vm._v(" "),
          _c("p", [_vm._v("出品方：" + _vm._s(_vm.songDetail.si_proxycompany))])
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
    return _c("span", [_vm._v("市场价："), _c("s", [_vm._v("￥4")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _vm._v("销售价："),
      _c("strong", { staticStyle: { color: "red", "font-size": "24px" } }, [
        _vm._v("￥2")
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
    require("vue-hot-reload-api")      .rerender("data-v-7902280c", esExports)
  }
}

/***/ })

});