"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FogAccordionIcon;
var _react = _interopRequireDefault(require("react"));
require("./styles/FogAccordionIcon.css");
var _arrow = require("../arrow.svg");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function FogAccordionIcon(props) {
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "fog-accordion-button"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "fog-accordion-icon "
  }, props.icon || props.children || /*#__PURE__*/_react.default.createElement(_arrow.ReactComponent, null)));
}