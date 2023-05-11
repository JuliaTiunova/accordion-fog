"use strict";

exports.__esModule = true;
exports.FogAccordionHeader = FogAccordionHeader;
var _react = _interopRequireDefault(require("react"));
require("./styles/FogAccordionHeader.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function FogAccordionHeader(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "fog-accordion-header",
    onClick: () => props.onTogglefogItem(props.index)
  }, props.children);
}