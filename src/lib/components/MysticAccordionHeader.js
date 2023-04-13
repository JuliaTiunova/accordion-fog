import React from 'react';
import './styles/MysticAccordionHeader.css';

const MysticAccordionHeader = React.forwardRef((props, ref) => (
  <div
    className={`mystic-accordion-header`}
    ref={ref}
    onClick={() => props.onToggleMysticItem(props.index)}
  >
    {props.children}
  </div>
));

export default MysticAccordionHeader;
