import React from 'react';
import './styles/MysticAccordionBackground.css';
import MysticAccordionCircles from './MysticAccordionCircles';

export default function MysticAccordionBackground(props) {
  return (
    <div
      className={`mystic-accordion-background-wrapper ${
        props.darkMode ? 'darkMode' : ''
      }`}
    >
      <div className='mystic-accordion-background'>{props.children}</div>
      <MysticAccordionCircles />
    </div>
  );
}
