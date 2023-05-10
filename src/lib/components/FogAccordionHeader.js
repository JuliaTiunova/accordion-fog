import React from 'react';
import './styles/FogAccordionHeader.css';

export function FogAccordionHeader(props) {
  return (
    <div
      className={`fog-accordion-header`}
      onClick={() => props.onTogglefogItem(props.index)}
    >
      {props.children}
    </div>
  );
}
