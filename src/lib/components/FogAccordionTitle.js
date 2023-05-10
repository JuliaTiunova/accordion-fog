import React from 'react';

export function FogAccordionTitle(props) {
  return (
    <h2 className={`fog-accordion-title`}>
      {props.title || props.children || 'fog accordion title'}
    </h2>
  );
}
