"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MysticAccordionIcon;
var _react = _interopRequireDefault(require("react"));
require("./styles/MysticAccordionIcon.css");
var _arrow = require("../arrow.svg");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function MysticAccordionIcon(props) {
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "mystic-accordion-button"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "mystic-accordion-icon "
  }, props.icon || props.children || /*#__PURE__*/_react.default.createElement(_arrow.ReactComponent, null)));
}