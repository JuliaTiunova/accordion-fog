"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./styles/FogAccordionHeader.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const FogAccordionHeader = /*#__PURE__*/_react.default.forwardRef((props, ref) => /*#__PURE__*/_react.default.createElement("div", {
  className: "fog-accordion-header",
  ref: ref,
  onClick: () => props.onTogglefogItem(props.index)
}, props.children));
var _default = FogAccordionHeader;
exports.default = _default;