import React, { useState } from 'react';
import './styles/FogAccordion.css';

export function FogAccordion(props) {
  const { children, cube, multipleToggle } = props;
  const [clicked, setClicked] = useState('');

  function togglefogItem(index) {
    if (clicked === index) {
      return setClicked('');
    }

    setClicked(index);
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        onTogglefogItem: togglefogItem,
        opened: clicked === index || false,
        cube,
        multipleToggle,
      });
    });
  };
  return (
    <div className={`fog-accordion ${props.darkMode ? 'darkMode' : ''}`}>
      {renderChildren()}
    </div>
  );
}
