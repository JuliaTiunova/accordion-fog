import React from 'react';
import './styles/FogAccordionIcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function FogAccordionIcon(props) {
  return (
    <button className='fog-accordion-button'>
      <span className='fog-accordion-icon '>
        {props.icon || props.children || <FontAwesomeIcon icon={faArrowDown} />}
      </span>
    </button>
  );
}
