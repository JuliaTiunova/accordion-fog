"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./styles/MysticAccordionHeader.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MysticAccordionHeader = /*#__PURE__*/_react.default.forwardRef((props, ref) => /*#__PURE__*/_react.default.createElement("div", {
  className: "mystic-accordion-header",
  ref: ref,
  onClick: () => props.onToggleMysticItem(props.index)
}, props.children));
var _default = MysticAccordionHeader;
exports.default = _default;