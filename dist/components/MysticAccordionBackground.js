"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MysticAccordionBackground;
var _react = _interopRequireDefault(require("react"));
require("./styles/MysticAccordionBackground.css");
var _MysticAccordionCircles = _interopRequireDefault(require("./MysticAccordionCircles"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function MysticAccordionBackground(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "mystic-accordion-background-wrapper ".concat(props.darkMode ? 'darkMode' : '')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mystic-accordion-background"
  }, props.children), /*#__PURE__*/_react.default.createElement(_MysticAccordionCircles.default, null));
}