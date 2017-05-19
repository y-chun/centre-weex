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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  "list-body": {
    "width": 100,
    "height": 90,
    "alignItems": "center",
    "justifyContent": "space-between",
    "borderBottomWidth": 1,
    "borderBottomColor": "#e8e8e5",
    "borderBottomStyle": "solid",
    "flexDirection": "row"
  },
  "list-time": {
    "fontSize": 32,
    "color": "#615454",
    "lineHeight": 90
  },
  "list-gou": {
    "width": 33,
    "height": 24
  },
  "list-time-choose": {
    "color": "#00ccc9"
  }
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["list-body"],
    on: {
      "click": function($event) {
        _vm.gouVal(_vm.keys)
      }
    }
  }, [_c('text', {
    staticClass: ["list-time"],
    class: [_vm.choose ? 'list-time-choose' : '']
  }, [_vm._v(_vm._s(_vm.time))]), (_vm.choose) ? _c('image', {
    staticClass: ["list-gou"],
    attrs: {
      "src": "./static/image/gou.png"
    }
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"../component/header.vue\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__list_vue__);
throw new Error("Cannot find module \"../component/title.vue\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins__ = __webpack_require__(10);
//
//
//
//
//
//
//
//
//
//
//
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
/* 5 */
/***/ (function(module, exports) {

module.exports = {
  "time-body": {
    "width": 750,
    "backgroundColor": "#eeeeee"
  },
  "list-time-body": {
    "paddingLeft": 28,
    "paddingRight": 28,
    "backgroundColor": "#ffffff"
  }
}

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["time-body"]
  }, [_c('c-header', {
    attrs: {
      "text": "早起时间"
    }
  }), _c('c-title', [_vm._v("请选择时间")]), _vm._l((_vm.timeVal), function(listTime, keys) {
    return _c('div', {
      staticClass: ["list-time-body"]
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

/***/ }),
/* 8 */,
/* 9 */
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weex_vue_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weex_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weex_vue_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_router_native_router__ = __webpack_require__(11);

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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const basePath = 'http://10.1.10.218:8080/dist'; //替换成你电脑的IP，并保证手机能访问到电脑(连同一个wifi就好啦)
//const basePath='http://xiazhou.me/example/xiazhou-weex/dist';
/* harmony default export */ __webpack_exports__["a"] = ([{ path: '/', component: basePath + '/index.js' }, { path: '/second', component: basePath + '/second/second.js' }]);

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(0)

/* template */
var __vue_template__ = __webpack_require__(2)
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
__vue_options__.__file = "E:\\weex\\weex\\src\\page\\time\\list.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-36da6b3e"
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


/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(5)
)

/* script */
__vue_exports__ = __webpack_require__(4)

/* template */
var __vue_template__ = __webpack_require__(7)
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
__vue_options__.__file = "E:\\weex\\weex\\src\\page\\time\\time.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-188bbd10"
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


/***/ })
/******/ ]);