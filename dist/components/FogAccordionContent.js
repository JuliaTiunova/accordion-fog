import React, { useRef } from 'react';
import './styles/FogAccordionContentCube.css';
import './styles/FogAccordionContent.css';
import { applyCubeAnimation, applyRegularAnimation } from './animationHelpers';
export function FogAccordionContent(props) {
  const timeline = useRef();
  const opened = props.opened;

  // for regular animation
  const wrapper = useRef();
  const options = {
    opened,
    timeline,
    wrapper
  };

  // for cube animation
  const cubeWrapper = useRef();
  const cubeBox = useRef();
  const cubeFront = useRef();
  const cubeBottom = useRef();
  const cubeOptions = {
    opened,
    timeline,
    cubeBottom,
    cubeFront,
    cubeWrapper,
    cubeBox
  };
  if (props.cube) {
    applyCubeAnimation(cubeOptions);
    return /*#__PURE__*/React.createElement("div", {
      className: "cube fog-accordion-content-wrapper",
      ref: cubeWrapper
    }, /*#__PURE__*/React.createElement("div", {
      className: "cube fog-accordion-content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "cube fog-accordion-box",
      ref: cubeBox
    }, /*#__PURE__*/React.createElement("div", {
      className: "cube fog-accordion-face fog-accordion-face-front",
      ref: cubeFront
    }, props.children), /*#__PURE__*/React.createElement("div", {
      className: "cube fog-accordion-face fog-accordion-face-bottom",
      ref: cubeBottom
    }))));
  } else {
    applyRegularAnimation(options);
    return /*#__PURE__*/React.createElement("div", {
      className: "reg fog-accordion-content",
      ref: wrapper
    }, props.children);
  }
}