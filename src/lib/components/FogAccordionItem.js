import React, { useState } from 'react';
import './styles/FogAccordionItem.css';

export default function FogAccordionItem(props) {
  const [clicked, setClicked] = useState(false);

  function toggleMultiplefogItems() {
    setClicked((prev) => !prev);
  }

  const properties = {
    onTogglefogItem: props.multipleToggle
      ? toggleMultiplefogItems
      : props.onTogglefogItem,
    opened: props.opened || clicked,
    cube: props.cube,
  };

  const renderChildren = () => {
    return React.Children.map(props.children, (child) => {
      return React.cloneElement(child, properties);
    });
  };
  return (
    <div
      className={`fog-accordion-item ${
        props.opened || clicked ? 'opened' : ''
      }`}
    >
      {renderChildren()}
    </div>
  );
}
