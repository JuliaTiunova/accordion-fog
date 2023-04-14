"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FogAccordionContent;
var _react = _interopRequireWildcard(require("react"));
require("./styles/FogAccordionContentCube.css");
require("./styles/FogAccordionContent.css");
var _animationHelpers = require("./animationHelpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function FogAccordionContent(props) {
  const timeline = (0, _react.useRef)();
  const opened = props.opened;

  // for regular animation
  const wrapper = (0, _react.useRef)();
  const options = {
    opened,
    timeline,
    wrapper
  };

  // for cube animation
  const cubeWrapper = (0, _react.useRef)();
  const cubeBox = (0, _react.useRef)();
  const cubeFront = (0, _react.useRef)();
  const cubeBottom = (0, _react.useRef)();
  const cubeOptions = {
    opened,
    timeline,
    cubeBottom,
    cubeFront,
    cubeWrapper,
    cubeBox
  };
  if (props.cube) {
    (0, _animationHelpers.applyCubeAnimation)(cubeOptions);
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "cube fog-accordion-content-wrapper",
      ref: cubeWrapper
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "cube fog-accordion-content"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "cube fog-accordion-box",
      ref: cubeBox
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "cube fog-accordion-face fog-accordion-face-front",
      ref: cubeFront
    }, props.children), /*#__PURE__*/_react.default.createElement("div", {
      className: "cube fog-accordion-face fog-accordion-face-bottom",
      ref: cubeBottom
    }))));
  } else {
    (0, _animationHelpers.applyRegularAnimation)(options);
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "reg fog-accordion-content",
      ref: wrapper
    }, props.children);
  }
}