(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = (window.React);

var _react2 = _interopRequireDefault(_react);

var _ribbonStyle = require('./ribbonStyle');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var positionMapping = {
  left: [_ribbonStyle.RibbonStyle.leftStyle, _ribbonStyle.RibbonStyleWrapper.leftStyle],
  right: [_ribbonStyle.RibbonStyle.rightStyle, _ribbonStyle.RibbonStyleWrapper.rightStyle],
  'left-bottom': [_ribbonStyle.RibbonStyle.leftBottomStyle, _ribbonStyle.RibbonStyleWrapper.leftBottomStyle],
  'right-bottom': [_ribbonStyle.RibbonStyle.rightBottomStyle, _ribbonStyle.RibbonStyleWrapper.rightBottomStyle]
};

var colorMapping = {
  red: _ribbonStyle.RibbonStyle.redColor,
  orange: _ribbonStyle.RibbonStyle.orangeColor,
  black: _ribbonStyle.RibbonStyle.blackColor,
  green: _ribbonStyle.RibbonStyle.greenColor
};

var GitHubForkRibbon = function GitHubForkRibbon(_ref) {
  var _ref$position = _ref.position,
      position = _ref$position === undefined ? 'right' : _ref$position,
      href = _ref.href,
      target = _ref.target,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? 'red' : _ref$color,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      children = _ref.children,
      other = _objectWithoutProperties(_ref, ['position', 'href', 'target', 'color', 'className', 'children']);

  var positionStyle = positionMapping[position] || [_ribbonStyle.RibbonStyle.rightStyle, _ribbonStyle.RibbonStyleWrapper.rightStyle];
  var colorStyle = colorMapping[color] || _ribbonStyle.RibbonStyle.redColor;

  if (positionStyle[0] === _ribbonStyle.RibbonStyle.rightStyle) {
    position = 'right';
  }

  var ribbonStyle = _extends({}, _ribbonStyle.RibbonStyle.baseStyle, positionStyle[0], colorStyle);

  var wrapperStyle = _extends({}, _ribbonStyle.RibbonStyleWrapper.baseStyle, positionStyle[1]);

  return _react2.default.createElement(
    'div',
    _extends({}, other, {
      className: 'github-fork-ribbon-wrapper ' + position + ' ' + className,
      style: wrapperStyle }),
    _react2.default.createElement(
      'div',
      { className: 'github-fork-ribbon',
        style: ribbonStyle },
      _react2.default.createElement(
        'a',
        { href: href,
          target: target,
          style: _ribbonStyle.RibbonStyle.urlStyle,
          rel: 'noopener' },
        children
      )
    )
  );
};

exports.default = global.RibbonStyle = GitHubForkRibbon;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./ribbonStyle":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
* "Fork me on GitHub" CSS ribbon v0.1.1 | MIT License
* https://github.com/simonwhitaker/github-fork-ribbon-css
*
* 20150116 Lee: use css source for inline style react component.
*/
var RibbonStyle = exports.RibbonStyle = {

  baseStyle: {
    /* The right and left classes determine the side we attach our banner to */
    position: 'absolute',

    /* Add a bit of padding to give some substance outside the "stitching" */
    padding: '2px 0',

    /* Set the base colour */
    backgroundColor: '#a00',

    /* Set a gradient: transparent black at the top to almost-transparent black at the bottom */
    // backgroundImage: '-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.15)))',
    // backgroundImage: '-webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15))',
    // backgroundImage: '-moz-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15))',
    // backgroundImage: '-ms-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15))',
    // backgroundImage: '-o-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15))',
    backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15))',

    /* Add a drop shadow */
    WebkitBoxShadow: '0 2px 3px 0 rgba(0, 0, 0, 0.5)',
    MozBoxShadow: '0 2px 3px 0 rgba(0, 0, 0, 0.5)',
    boxShadow: '0 2px 3px 0 rgba(0, 0, 0, 0.5)',

    /* Set the font */
    font: '700 13px "Helvetica Neue", Helvetica, Arial, sans-serif',

    zIndex: '9999',
    pointerEvents: 'auto'
  },

  urlStyle: {
    /* Set the text properties */
    color: '#fff',
    textDecoration: 'none',
    textShadow: '0 -1px rgba(0, 0, 0, 0.5)',
    textAlign: 'center',

    /* Set the geometry. If you fiddle with these you'll also need
       to tweak the top and right values in .github-fork-ribbon. */
    width: '200px',
    lineHeight: '20px',

    /* Set the layout properties */
    display: 'inline-block',
    padding: '2px 0',

    /* Add "stitching" effect */
    borderWidth: '1px 0',
    borderStyle: 'dashed',
    // borderColor: '#fff',
    borderColor: 'rgba(255, 255, 255, 0.7)'
  },

  redColor: {
    backgroundColor: '#a00'
  },

  orangeColor: {
    backgroundColor: '#f80'
  },

  blackColor: {
    backgroundColor: '#333'
  },

  greenColor: {
    backgroundColor: '#090'
  },

  leftStyle: {
    top: '42px',
    left: '-43px',

    WebkitTransform: 'rotate(-45deg)',
    MozTransform: 'rotate(-45deg)',
    msTransform: 'rotate(-45deg)',
    OTransform: 'rotate(-45deg)',
    transform: 'rotate(-45deg)'
  },

  rightStyle: {
    top: '42px',
    right: '-43px',

    WebkitTransform: 'rotate(45deg)',
    MozTransform: 'rotate(45deg)',
    msTransform: 'rotate(45deg)',
    OTransform: 'rotate(45deg)',
    transform: 'rotate(45deg)'
  },

  leftBottomStyle: {
    top: '80px',
    left: '-43px',

    WebkitTransform: 'rotate(45deg)',
    MozTransform: 'rotate(45deg)',
    msTransform: 'rotate(45deg)',
    OTransform: 'rotate(45deg)',
    transform: 'rotate(45deg)'
  },

  rightBottomStyle: {
    top: '80px',
    right: '-43px',

    WebkitTransform: 'rotate(-45deg)',
    MozTransform: 'rotate(-45deg)',
    msTransform: 'rotate(-45deg)',
    OTransform: 'rotate(-45deg)',
    transform: 'rotate(-45deg)'
  }
};

var RibbonStyleWrapper = exports.RibbonStyleWrapper = {

  baseStyle: {
    width: '150px',
    height: '150px',
    position: 'absolute',
    overflow: 'hidden',
    top: 0,
    zIndex: '9999',
    pointerEvents: 'none'
  },

  fixedStyle: {
    position: 'fixed'
  },

  leftStyle: {
    left: 0
  },

  rightStyle: {
    right: 0
  },

  leftBottomStyle: {
    position: 'fixed',
    top: 'inherit',
    bottom: 0,
    left: 0
  },

  rightBottomStyle: {
    position: 'fixed',
    top: 'inherit',
    bottom: 0,
    right: 0
  }
};

},{}]},{},[1]);
