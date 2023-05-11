import React from 'react';
import './styles/FogAccordionBackground.css';
import { FogAccordionCircles } from './FogAccordionCircles';
export function FogAccordionBackground(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fog-accordion-background-wrapper ".concat(props.darkMode ? 'darkMode' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "fog-accordion-background"
  }, props.children), /*#__PURE__*/React.createElement(FogAccordionCircles, null));
}