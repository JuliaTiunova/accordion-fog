"use strict";

exports.__esModule = true;
exports.FogAccordionBackground = FogAccordionBackground;
var _react = _interopRequireDefault(require("react"));
require("./styles/FogAccordionBackground.css");
var _FogAccordionCircles = require("./FogAccordionCircles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function FogAccordionBackground(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "fog-accordion-background-wrapper ".concat(props.darkMode ? 'darkMode' : '', " ").concat(props.colorFilled ? 'colorFilled' : '')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "fog-accordion-background"
  }, props.children), /*#__PURE__*/_react.default.createElement(_FogAccordionCircles.FogAccordionCircles, null));
}