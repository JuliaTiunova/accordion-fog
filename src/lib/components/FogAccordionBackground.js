import React from 'react';
import './styles/FogAccordionBackground.css';
import { FogAccordionCircles } from './FogAccordionCircles';

export function FogAccordionBackground(props) {
  return (
    <div
      className={`fog-accordion-background-wrapper ${
        props.darkMode ? 'darkMode' : ''
      } ${props.colorFilled ? 'colorFilled' : ''}`}
    >
      <div className='fog-accordion-background'>{props.children}</div>
      <FogAccordionCircles />
    </div>
  );
}
