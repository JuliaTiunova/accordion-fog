"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MysticAccordionTitle;
function MysticAccordionTitle(props) {
  return /*#__PURE__*/React.createElement("h2", {
    className: "mystic-accordion-title"
  }, props.title || props.children || 'Mystic accordion title');
}