import React, { useRef } from 'react';
import './styles/FogAccordionContentCube.css';
import './styles/FogAccordionContent.css';
import { applyCubeAnimation, applyRegularAnimation } from './animationHelpers';

export default function FogAccordionContent(props) {
  const timeline = useRef();
  const opened = props.opened;

  // for regular animation
  const wrapper = useRef();

  const options = {
    opened,
    timeline,
    wrapper,
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
    cubeBox,
  };

  if (props.cube) {
    applyCubeAnimation(cubeOptions);

    return (
      <div className='cube fog-accordion-content-wrapper' ref={cubeWrapper}>
        <div className='cube fog-accordion-content'>
          <div className='cube fog-accordion-box' ref={cubeBox}>
            <div
              className='cube fog-accordion-face fog-accordion-face-front'
              ref={cubeFront}
            >
              {props.children}
            </div>
            <div
              className='cube fog-accordion-face fog-accordion-face-bottom'
              ref={cubeBottom}
            ></div>
          </div>
        </div>
      </div>
    );
  } else {
    applyRegularAnimation(options);

    return (
      <div className='reg fog-accordion-content' ref={wrapper}>
        {props.children}
      </div>
    );
  }
}
