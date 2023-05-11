"use strict";

exports.__esModule = true;
exports.FogAccordionTitle = FogAccordionTitle;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function FogAccordionTitle(props) {
  return /*#__PURE__*/_react.default.createElement("h2", {
    className: "fog-accordion-title"
  }, props.title || props.children || 'fog accordion title');
}