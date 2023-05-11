import React from 'react';
import './styles/FogAccordionIcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
export function FogAccordionIcon(props) {
  return /*#__PURE__*/React.createElement("button", {
    className: "fog-accordion-button"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fog-accordion-icon "
  }, props.icon || props.children || /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faArrowDown
  })));
}