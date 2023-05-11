import React from 'react';
export function FogAccordionTitle(props) {
  return /*#__PURE__*/React.createElement("h2", {
    className: "fog-accordion-title"
  }, props.title || props.children || 'fog accordion title');
}