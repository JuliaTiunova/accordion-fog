import React from 'react';
import './styles/FogAccordionHeader.css';

const FogAccordionHeader = React.forwardRef((props, ref) => (
  <div
    className={`fog-accordion-header`}
    ref={ref}
    onClick={() => props.onTogglefogItem(props.index)}
  >
    {props.children}
  </div>
));

export default FogAccordionHeader;
