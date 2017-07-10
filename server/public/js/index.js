/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * es6数据结构
	  set,map,WeakSet,WeakMap
	 */

	{
	  var list = new Set();
	  list.add(5);
	  list.add(7);
	  console.log('size:', list.size);
	  console.log(typeof Set === 'undefined' ? 'undefined' : _typeof(Set));
	}
	{
	  var arr = [1, 2, 3, 4, 5, 6];
	  var _list = new Set(arr);
	  console.log('size', _list.size);
	}
	{
	  var _list2 = new Set();
	  _list2.add(1);
	  _list2.add(2);
	  _list2.add(1);
	  console.log('size', _list2.size, _list2); //去重
	  var _arr = [1, 2, 3, 1, 2, '3'];
	  var list2 = new Set(_arr);
	  //去重的时候不会转换数据类型
	  console.log('unique', list2);
	}
	{
	  var _arr2 = ['add', 'delete', 'clear', 'has'];
	  var _list3 = new Set(_arr2);
	  console.log('has', _list3.has('add'));
	  console.log('delete', _list3.delete('add'), _list3);
	  console.log(_list3.clear(), _list3);
	}
	{
	  var _arr3 = ['add', 'delete', 'clear', 'has'];
	  var _list4 = new Set(_arr3);
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = _list4.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var key = _step.value;

	      console.log('keys', key);
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  var _iteratorNormalCompletion2 = true;
	  var _didIteratorError2 = false;
	  var _iteratorError2 = undefined;

	  try {
	    for (var _iterator2 = _list4.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	      var val = _step2.value;

	      console.log('vals', val);
	    }
	  } catch (err) {
	    _didIteratorError2 = true;
	    _iteratorError2 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion2 && _iterator2.return) {
	        _iterator2.return();
	      }
	    } finally {
	      if (_didIteratorError2) {
	        throw _iteratorError2;
	      }
	    }
	  }

	  var _iteratorNormalCompletion3 = true;
	  var _didIteratorError3 = false;
	  var _iteratorError3 = undefined;

	  try {
	    for (var _iterator3 = _list4[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	      var _val = _step3.value;

	      console.log('list', _val);
	    }
	  } catch (err) {
	    _didIteratorError3 = true;
	    _iteratorError3 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion3 && _iterator3.return) {
	        _iterator3.return();
	      }
	    } finally {
	      if (_didIteratorError3) {
	        throw _iteratorError3;
	      }
	    }
	  }

	  var _iteratorNormalCompletion4 = true;
	  var _didIteratorError4 = false;
	  var _iteratorError4 = undefined;

	  try {
	    for (var _iterator4 = _list4.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	      var _step4$value = _slicedToArray(_step4.value, 2),
	          _key = _step4$value[0],
	          _val2 = _step4$value[1];

	      console.log([_key, _val2]);
	    }
	  } catch (err) {
	    _didIteratorError4 = true;
	    _iteratorError4 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion4 && _iterator4.return) {
	        _iterator4.return();
	      }
	    } finally {
	      if (_didIteratorError4) {
	        throw _iteratorError4;
	      }
	    }
	  }

	  _list4.forEach(function (item) {
	    console.log(item);
	  });
	}
	{
	  //WeakSet只能是对象,对象都是弱引用,只复制地址,不去检查是否被回收
	  var weakList = new WeakSet();

	  var arg = {};
	  weakList.add(arg);
	  //weakList.add(1);
	  console.log(weakList);
	  //没有clear方法,不能遍历,没有set属性.size
	}
	{
	  //Map key可以是任何数据类型
	  var map = new Map();
	  var _arr4 = ['123'];

	  map.set(_arr4, 456);
	  console.log('map', map, map.get(_arr4));
	}
	{
	  var _map = new Map([['a', 123], ['b', 456]]);
	  console.log('map args', _map);
	  console.log('size', _map.size);
	  console.log('delete', _map.delete('a'), _map);
	  console.log('clear', _map.clear(), _map);
	  //遍历同set
	}
	{
	  var weakmap = new WeakMap();
	  //必须是对象,不能遍历,无clear,无map属性
	  var a = {};
	  weakmap.set(a, 123);
	  console.log(weakmap.get(a));
	}
	/**
	 * Map,Set和Array的对比
	 */
	{
	  //数据结构横向对比,增,查.改,删.
	  var _map2 = new Map();
	  var _arr5 = [];
	  //增
	  _map2.set('t', 1);
	  _arr5.push({ t: 1 });
	  console.info('map-array', _map2, _arr5);

	  //查
	  var map_exist = _map2.has('t');
	  var array_exist = _arr5.find(function (item) {
	    return item.t;
	  });
	  console.info('map_exist', map_exist, array_exist);

	  //改
	  console.info(_arr5.t, 'ads');
	  _map2.set('t', 2);
	  _arr5.forEach(function (item) {
	    return item.t ? item.t = 2 : '';
	  });
	  console.info('map-arr-modify', _map2, _arr5);

	  //删
	  _map2.delete('t');
	  var index = _arr5.findIndex(function (item) {
	    return item.t;
	  });
	  _arr5.splice(index, 1);
	  console.info('marry-arr-delete', _map2, _arr5);
	}

/***/ })
/******/ ]);