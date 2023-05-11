import React from 'react';
import './styles/FogAccordionHeader.css';
export function FogAccordionHeader(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fog-accordion-header",
    onClick: () => props.onTogglefogItem(props.index)
  }, props.children);
}