import "core-js/modules/web.dom-collections.iterator.js";
import React, { useState } from 'react';
import './styles/FogAccordionItem.css';
export function FogAccordionItem(props) {
  const [clicked, setClicked] = useState(false);
  function toggleMultiplefogItems() {
    setClicked(prev => !prev);
  }
  const properties = {
    onTogglefogItem: props.multipleToggle ? toggleMultiplefogItems : props.onTogglefogItem,
    opened: props.opened || clicked,
    cube: props.cube
  };
  const renderChildren = () => {
    return React.Children.map(props.children, child => {
      return /*#__PURE__*/React.cloneElement(child, properties);
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fog-accordion-item ".concat(props.opened || clicked ? 'opened' : '')
  }, renderChildren());
}