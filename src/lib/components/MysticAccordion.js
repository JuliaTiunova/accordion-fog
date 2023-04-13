import React, { useState } from 'react';
import './styles/MysticAccordion.css';

export default function MysticAccordion(props) {
  const { children, cube, multipleToggle } = props;
  const [clicked, setClicked] = useState('');

  function toggleMysticItem(index) {
    if (clicked === index) {
      return setClicked('');
    }

    setClicked(index);
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        onToggleMysticItem: toggleMysticItem,
        opened: clicked === index || false,
        cube,
        multipleToggle,
      });
    });
  };
  return (
    <div className={`mystic-accordion ${props.darkMode ? 'darkMode' : ''}`}>
      {renderChildren()}
    </div>
  );
}
