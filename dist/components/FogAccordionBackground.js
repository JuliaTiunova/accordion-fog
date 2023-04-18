"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FogAccordionBackground;
var _react = _interopRequireDefault(require("react"));
require("./styles/FogAccordionBackground.css");
var _FogAccordionCircles = _interopRequireDefault(require("./FogAccordionCircles"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function FogAccordionBackground(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "fog-accordion-background-wrapper ".concat(props.darkMode ? 'darkMode' : '')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "fog-accordion-background"
  }, props.children), /*#__PURE__*/_react.default.createElement(_FogAccordionCircles.default, null));
}