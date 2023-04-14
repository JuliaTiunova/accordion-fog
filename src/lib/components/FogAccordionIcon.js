import React from 'react';
import './styles/FogAccordionIcon.css';
import { ReactComponent as Arrow } from '../arrow.svg';

export default function FogAccordionIcon(props) {
  return (
    <button className='fog-accordion-button'>
      <span className='fog-accordion-icon '>
        {props.icon || props.children || <Arrow />}
      </span>
    </button>
  );
}
