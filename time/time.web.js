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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(3)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(8)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(7),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\weex\\weex\\src\\page\\time\\list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fb6c704a", Component.options)
  } else {
    hotAPI.reload("data-v-fb6c704a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 5 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'list',
    props: {
        time: {
            type: String,
            require: true
        },
        keys: {
            type: Number
        },
        choose: {
            type: Boolean
        }
    },
    data() {
        return {};
    },
    computed: {},
    methods: {
        gouVal(keys) {
            //    this.currentVal=!this.currentVal
            this.$emit('click', keys);
        }
    }
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.list-body{\n    width: 100%;\n    height: 90px;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom-width:1px;\n    border-bottom-color: #e8e8e5;\n    border-bottom-style: solid;\n    flex-direction: row;\n}\n.list-time{\n    font-size: 32px;\n    color: #615454;\n    line-height: 90px;\n}\n.list-gou{\n    width: 33px;\n    height: 24px;\n}\n.list-time-choose{\n    color: #00ccc9\n}\n", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "list-body",
    on: {
      "click": function($event) {
        _vm.gouVal(_vm.keys)
      }
    }
  }, [_c('text', {
    staticClass: "list-time",
    class: [_vm.choose ? 'list-time-choose' : '']
  }, [_vm._v(_vm._s(_vm.time))]), _vm._v(" "), (_vm.choose) ? _c('image', {
    staticClass: "list-gou",
    attrs: {
      "src": "./static/image/gou.png"
    }
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fb6c704a", module.exports)
  }
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("75195b5e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-fb6c704a!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-fb6c704a!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(24)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(22),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\weex\\weex\\src\\page\\time\\time.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] time.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-937a8aec", Component.options)
  } else {
    hotAPI.reload("data-v-937a8aec", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * weex-vue-router v0.0.3
 * (c) 2017 dongnaebi
 * @license Apache-2.0
 */


var index$1 = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

var isarray = index$1;

/**
 * Expose `pathToRegexp`.
 */
var index = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

index.parse = parse_1;
index.compile = compile_1;
index.tokensToFunction = tokensToFunction_1;
index.tokensToRegExp = tokensToRegExp_1;

/**
 * Created by ebi on 2017/2/14.
 */
var weexVueRouter = {
    install: function install(Vue, ref){
        var routes = ref.routes;
        var weex = ref.weex;

        var platform = weex.config.env ? weex.config.env.platform : weex.config.platform;
        if (platform.toLowerCase() == 'web'){ return; }
        var navigator = weex.requireModule('navigator');
        var bundleUrl = weex.config.bundleUrl;
        var route = bundleToPath(bundleUrl, routes);
        Object.defineProperty(Vue.prototype, "$router", {
            value: {
                push: function push(url){
                    var bundle = pathToBundle(url, routes);
                    if (navigator) {
                        console.log(bundle);
                        navigator.push({
                            'url': bundle,
                            'animated': 'true'
                        }, function () {
                            console.log('skip complete');
                        });
                    }
                },
                back: function back(){
                    if (navigator) {
                        navigator.pop();
                    }
                }
            },
            configurable: false
        });
        Object.defineProperty(Vue.prototype, '$route', {
            configurable: false,
            value: {
                path: route.path,
                params: route.params,
                query: route.query,
                hash: route.hash,
                fullPath: route.fullPath,
                matched: route.matched,
                name: route.name
            }
        });
    }
};
function pathToBundle(url,routes){
    /* url='/list/2-1?from=1#2'
     * r={path:'/list/:cid-:id',bundle:'/product/list.js'}
     * */
    if(url.indexOf('/')!=0){
        console.error("the url must begin with '/'");
        return '';
    }

    //copy from vue-router
    var encodeReserveRE = /[!'()*]/g;
    var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
    var encode = function (str) { return encodeURIComponent(str)
        .replace(encodeReserveRE, encodeReserveReplacer)
        .replace(/%2C/g, ','); };

    /*find out the rule*/
    var matchRule={};
    routes.forEach(function (r) {
        var re=index(r.path);
        var match=re.exec(url);
        if(match!=null){
            matchRule = r;
        }
    });

    /*get the key and value*/
    var keys = [];
    var pathReg = index(matchRule.path, keys);
    var values=pathReg.exec(url);
    var lastValue=values[values.length-1];//save the last value to find query and hash
    values[values.length-1]=lastValue.split(/\?|\#/)[0];//the true value

    /*parse params to key/value object*/
    var params={};
    if(keys.length>0){
        keys.forEach(function (key,i){
            params[key.name]=values[i+1];
        });
    }

    /*get query and hash*/
    var queryIndex=lastValue.indexOf('?');
    var hashIndex=lastValue.indexOf('#');
    if (queryIndex > 0 && hashIndex > 0 && queryIndex > hashIndex) {
        console.error("Could not set '#' behind '?'");
        return '';
    }
    var queryStr=queryIndex>0?lastValue.substring(queryIndex+1,hashIndex>0?hashIndex:lastValue.length):"";
    var hashStr=hashIndex>0?lastValue.substring(hashIndex,lastValue.length):"";
    var query=getParams(queryStr);//{from:1}

    /*add the bundleUrl's params and hash*/
    var componentPath=matchRule.component;
    for(var k in params){
        componentPath+=(componentPath.indexOf('?')>0?'&':'?')+k+'='+encode(params[k]);
    }
    for(var q in query){
        componentPath+=(componentPath.indexOf('?')>0?'&':'?')+q+'='+encode(query[q]);
    }
    componentPath+=hashStr;
    return componentPath;
}
function bundleToPath(url,routes){
    //url='domain/product/list.js?cid=2&id=1&from=1'
    //matchRule={path:'/list/:cid-:id',component:'domain/product/list.js'}
    var route={
        params:null,
        query:null,
        hash:null,
        path:null,
        fullPath:null,
        matched:null,
        name:null
    };
    var jsBundle=url.split(/\?|\#/)[0];
    /*find out the rule*/
    var matchRule=null;
    routes.forEach(function (r) {
        r.component==jsBundle&&(matchRule=r);
        //http://192.168.253.124:8080/dist/product/list.js
    });
    if(!matchRule){
        console.error(("your component must be like '" + jsBundle + "',can not find it in routes,please check up"));
        return route;
    }

    /*use pathToRegexp*/
    var keys = [];
    index(matchRule.path, keys);

    /*get query and hash*/
    var queryIndex=url.indexOf('?');
    var hashIndex=url.indexOf('#');
    var queryStr=queryIndex>0?url.substring(queryIndex+1,hashIndex>0?hashIndex:url.length):"";
    route.hash=hashIndex>0?url.substring(hashIndex,url.length):"";

    var allQuery=getParams(queryStr);//{cid:2,id:1,from:1}

    var params={},//{cid:2,id:1}
        query={},//{from:1}
        paramsKey=[];//['cid','id']
    if(keys.length>0){
        paramsKey=keys.map(function (key){ return key.name; });
    }
    for(var q in allQuery){
        allQuery[q]=decodeURIComponent(allQuery[q]);
        paramsKey.indexOf(q)<0?query[q]=allQuery[q]:params[q]=allQuery[q];
    }
    route.params=params;
    route.query=query;

    //path and fullPath
    var path=matchRule.path;
    for(var p in params){
        path=path.replace(':'+p,params[p]);
    }
    route.path=path;
    var queryArr=[];
    for(var i in query){
        queryArr.push(i+'='+query[i]);
    }
    route.fullPath=path+'?'+queryArr.join('&')+route.hash;
    route.matched=matchRule;
    route.name=matchRule.name;

    return route;
}
function getParams(str) {
    var temp={};
    if(!str){
        return temp;
    }
    if(str.indexOf('=')<0){
        temp[str]="";
        return temp;
    }
    var arr = str.split('&');
    arr.forEach(function(item) {
        var w = item.match(/([^=]*)=(.*)/);
        temp[w[1]] = w[2];
    });
    return temp;
}

module.exports = weexVueRouter;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weex_vue_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weex_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weex_vue_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_router_native_router__ = __webpack_require__(15);

 //web端的路由在web-router里定义，在app.js里引用
Vue.use(__WEBPACK_IMPORTED_MODULE_0_weex_vue_router___default.a, { routes: __WEBPACK_IMPORTED_MODULE_1__src_router_native_router__["a" /* default */], weex });

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            platform: '.'
            // rpx: 1,
            // apiDomain:'',
            // android:weex.config.env.platform.toLowerCase()=='android',
            // ios:weex.config.env.platform.toLowerCase()=='ios',
            // web:weex.config.env.platform.toLowerCase()=='web'
        };
    },
    created() {
        // let self=this;
        // let env = weex.config.env;
        // let rWidth=env.deviceWidth;
        // env.deviceWidth > 828 && (rWidth = env.deviceWidth / 3 * 2);
        // self.rpx = 750 / rWidth;
        // //self.apiDomain='http://xiazhou.me/example/xiazhou-weex';
        // if(!self.web){
        //     self.apiDomain='http://10.1.10.218:8080';//替换成你电脑的IP，并保证手机能访问到电脑(连同一个wifi就好啦)
        // }
    },
    methods: {
        request(opt) {
            const stream = weex.requireModule('stream');
            const self = this;
            let defaultOption = {
                type: "get",
                url: "",
                data: {},
                async: true,
                timeout: 20000,
                dataType: "json"
            };
            let option = self.extendObject(defaultOption, opt);
            return new Promise((resolve, reject) => {
                stream.fetch({
                    method: option.type,
                    url: self.apiDomain + option.url,
                    type: option.dataType,
                    //headers:{'content-type': 'application/json'},
                    body: option.data
                }, response => {
                    if (response.ok) {
                        resolve(response.data);
                    } else {
                        reject(response);
                    }
                }, () => {});
            });
        },
        jump(url) {
            /*链接有三种情况：
             * /product/20408.html  开发者定义跳转
             * http://xiazhou.me/#/product/20408.html?from=banner  运维添加的链接
             * http://xiazhou.me/blog/670.html?from=banner#tabs1   原生页面，一般native端都会做链接截取跳转对应页面
             * */
            if (!url || url.indexOf('http') != 0 && url.indexOf('/') != 0) {
                console.warn(url + "为非法的链接");
                return;
            }
            const self = this;
            //const nativeEvent = weex.requireModule('nativeEvent');//native端必须扩展这个模块才能正常运行
            let go = to => {
                self.$router.push(to);
            };
            url.indexOf('/') == 0 && go(url); //开发者定义跳转
            url.indexOf('http') == 0 && url.indexOf('/#/') > 0 && go(url.substr(url.indexOf('#') + 1)); //运维添加的链接
            //url.indexOf('http') == 0 && url.indexOf('/#/') == -1 && nativeEvent.skip(url); //原生页面//native端必须扩展这个模块才能正常运行
        },
        extendObject(p, c) {
            //依赖了babel-plugin-transform-object-rest-spread，其实可以用Object.assign()替代，但是这里要以p为准，p不存在则传入的c无效
            function isEmptyObject(e) {
                var t;
                for (t in e) return !1;
                return !0;
            }
            var p = p || {};
            var t = isEmptyObject(p) && c ? c : p;
            for (let i in p) {
                if (typeof p[i] === 'object' && p[i] != null) {
                    t[i] = this.extendObject(p[i], c[i]);
                } else {
                    for (var j in c) {
                        i == j && (t[i] = c[j]);
                    }
                }
            }
            return t;
        }
    }
});
// export default {
//   methods: {
//     jump (to) {
//       if (this.$router) {
//         this.$router.push(to)
//       }
//     }
//   }
// }

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"../component/header.vue\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__list_vue__);
throw new Error("Cannot find module \"../component/title.vue\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins__ = __webpack_require__(12);
//
//
//
//
//
//
//
//
//
//
//
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




/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_3__mixins__["a" /* default */]],
    components: {
        CHeader: __WEBPACK_IMPORTED_MODULE_0__component_header_vue___default.a,
        CList: __WEBPACK_IMPORTED_MODULE_1__list_vue___default.a,
        CTitle: __WEBPACK_IMPORTED_MODULE_2__component_title_vue___default.a
    },
    data() {
        return {
            timeVal: [{
                time: '6:00',
                choose: false
            }, {
                time: '6:30',
                choose: false
            }, {
                time: '7:00',
                choose: false
            }, {
                time: '7:30',
                choose: false
            }, {
                time: '8:00',
                choose: false
            }, {
                time: '8:30',
                choose: false
            }, {
                time: '9:00',
                choose: false
            }]
        };
    },
    mounted() {},
    methods: {
        keyVal(key) {
            this.timeVal.forEach(function (val) {
                return val.choose = false;
            });
            this.timeVal[key].choose = true;
            let timeParam = this.$route.params.param;
            storage.setItem(timeParam, this.timeVal[key].time);
            setTimeout(() => {
                this.jump('/');
            }, 100);
        }
    }
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const basePath = 'http://10.1.10.218:8080/dist'; //替换成你电脑的IP，并保证手机能访问到电脑(连同一个wifi就好啦)
//const basePath='http://xiazhou.me/example/xiazhou-weex/dist';
/* harmony default export */ __webpack_exports__["a"] = ([{ path: '/', component: basePath + '/index.js' }, { path: '/second', component: basePath + '/second/second.js' }]);

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var App = __webpack_require__(10);
App.el = '#root';
new Vue(App);

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.time-body{\r\n    width: 750px;\r\n    background-color: #eee;\n}\n.list-time-body{\r\n    padding-left:28px;\r\n    padding-right: 28px; \r\n    background-color: #fff;\n}\r\n", ""]);

// exports


/***/ }),
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "time-body"
  }, [_c('c-header', {
    attrs: {
      "text": "早起时间"
    }
  }), _vm._v(" "), _c('c-title', [_vm._v("请选择时间")]), _vm._v(" "), _vm._l((_vm.timeVal), function(listTime, keys) {
    return _c('div', {
      staticClass: "list-time-body"
    }, [_c('c-list', {
      attrs: {
        "time": listTime.time,
        "gouStart": listTime,
        "keys": keys,
        "choose": listTime.choose
      },
      on: {
        "click": _vm.keyVal
      }
    })], 1)
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-937a8aec", module.exports)
  }
}

/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("4aa92574", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-937a8aec!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./time.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-937a8aec!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./time.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })
/******/ ]);