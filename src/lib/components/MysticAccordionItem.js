import React, { useState } from 'react';
import './styles/MysticAccordionItem.css';

export default function MysticAccordionItem(props) {
  const [clicked, setClicked] = useState(false);

  function toggleMultipleMysticItems() {
    setClicked((prev) => !prev);
  }

  const properties = {
    onToggleMysticItem: props.multipleToggle
      ? toggleMultipleMysticItems
      : props.onToggleMysticItem,
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
      className={`mystic-accordion-item ${
        props.opened || clicked ? 'opened' : ''
      }`}
    >
      {renderChildren()}
    </div>
  );
}
