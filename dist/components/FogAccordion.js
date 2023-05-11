import "core-js/modules/web.dom-collections.iterator.js";
import React, { useState } from 'react';
import './styles/FogAccordion.css';
export function FogAccordion(props) {
  const {
    children,
    cube,
    multipleToggle
  } = props;
  const [clicked, setClicked] = useState('');
  function togglefogItem(index) {
    if (clicked === index) {
      return setClicked('');
    }
    setClicked(index);
  }
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      return /*#__PURE__*/React.cloneElement(child, {
        onTogglefogItem: togglefogItem,
        opened: clicked === index || false,
        cube,
        multipleToggle
      });
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fog-accordion ".concat(props.darkMode ? 'darkMode' : '')
  }, renderChildren());
}