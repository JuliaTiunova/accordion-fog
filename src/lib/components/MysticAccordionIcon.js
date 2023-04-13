import React from 'react';
import './styles/MysticAccordionIcon.css';
import { ReactComponent as Arrow } from '../arrow.svg';

export default function MysticAccordionIcon(props) {
  return (
    <button className='mystic-accordion-button'>
      <span className='mystic-accordion-icon '>
        {props.icon || props.children || <Arrow />}
      </span>
    </button>
  );
}
