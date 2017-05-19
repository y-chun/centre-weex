// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(6)
)

/* script */
__vue_exports__ = __webpack_require__(3)

/* template */
var __vue_template__ = __webpack_require__(8)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\weex\\weex\\src\\page\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3994fe66"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const storage = weex.requireModule('storage');
// import CTitle from '../component/title.vue'
// import CHeader from '../component/header.vue'
// import CSwitch from '../component/switch.vue'
// import mixins from '../../../mixins'
const picker = weex.requireModule('picker');
/* harmony default export */ __webpack_exports__["default"] = ({
  // mixins: [mixins],
  // components: {
  //   CTitle,
  //   CHeader,
  //   CSwitch
  // },
  data() {
    return {
      startTime: '',
      endTime: ''
    };
  },
  mounted() {

    // picker.pickTime({
    //     value: this.startTime
    //   }, event => {
    //     if (event.result === 'success') {
    //       this.startTime = event.data
    //     }
    //   })
    this.timeData();
  },
  methods: {
    timeData() {
      storage.getItem('start', event => {
        this.startTime = event.data;
      });
      storage.getItem('end', event => {
        this.endTime = event.data;
      });
    }
  }
});

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = {
  "index-body": {
    "width": 750,
    "backgroundColor": "#eeeeee"
  },
  "index-bom": {
    "backgroundColor": "#ffffff",
    "paddingTop": 0.2,
    "paddingLeft": 32,
    "paddingRight": 32
  },
  "index-btop-text": {
    "marginLeft": 15,
    "marginTop": 8,
    "color": "#7f2d00"
  },
  "index-bom-top": {
    "height": 0.9,
    "flexDirection": "row"
  },
  "index-btop-img": {
    "width": 61,
    "height": 61
  },
  "index-list-container": {
    "backgroundColor": "#ffffff",
    "paddingLeft": 32,
    "flexDirection": "row"
  },
  "index-limage": {
    "width": 61,
    "height": 61,
    "marginTop": 20
  },
  "index-list": {
    "width": 620
  },
  "index-list-cell": {
    "height": 100,
    "borderBottomColor": "#e8e8e5",
    "borderBottomStyle": "solid",
    "borderBottomWidth": 1,
    "justifyContent": "space-between",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "index-lcell-text": {
    "fontSize": 36,
    "color": "#615454",
    "lineHeight": 100,
    "marginLeft": 14
  },
  "index-lcell-dtext": {
    "color": "#00ccc9"
  },
  "weex-switch-checked": {
    "backgroundColor": "#00ccc9",
    "borderColor": "#00ccc9",
    "boxShadow": "#00ccc9 0 0 0 0.5333rem inset"
  }
}

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["index-body"]
  }, [_c('div', {
    staticClass: ["index-list-container"]
  }, [_c('image', {
    staticClass: ["index-limage"],
    attrs: {
      "src": "./static/image/cha.png"
    }
  }), _c('div', {
    staticClass: ["index-list"]
  }, [_c('div', {
    staticClass: ["index-list-cell"]
  }, [_c('text', {
    staticClass: ["index-lcell-text"]
  }, [_vm._v("夜间休息")]), _c('c-switch', {
    staticClass: ["index-switch"]
  })], 1), _c('div', {
    staticClass: ["index-list-cell"],
    on: {
      "click": function($event) {
        _vm.jump('/time/start')
      }
    }
  }, [_c('text', {
    staticClass: ["index-lcell-text"]
  }, [_vm._v("起床时间")]), _c('div', {
    staticClass: ["index-lcell-date"]
  }, [_c('text', {
    staticClass: ["index-lcell-dtext"]
  }, [_vm._v(_vm._s(_vm.startTime))])])]), _c('div', {
    staticClass: ["index-list-cell"],
    on: {
      "click": function($event) {
        _vm.jump('/time/end')
      }
    }
  }, [_c('text', {
    staticClass: ["index-lcell-text"]
  }, [_vm._v("睡觉时间")]), _c('div', {
    staticClass: ["index-lcell-date"]
  }, [_c('text', {
    staticClass: ["index-lcell-dtext"]
  }, [_vm._v(_vm._s(_vm.endTime))])])])])]), _vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["index-bom"]
  }, [_c('div', {
    staticClass: ["index-bom-top"]
  }, [_c('image', {
    staticClass: ["index-btop-img"],
    attrs: {
      "src": "./static/image/clock.png"
    }
  }), _c('text', {
    staticClass: ["index-btop-text"]
  }, [_vm._v("使用时长")])])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });