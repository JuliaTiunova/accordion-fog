import React, { useRef } from 'react';
import './styles/MysticAccordionContentCube.css';
import './styles/MysticAccordionContent.css';
import { applyCubeAnimation, applyRegularAnimation } from './animationHelpers';

export default function MysticAccordionContent(props) {
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
      <div className='cube mystic-accordion-content-wrapper' ref={cubeWrapper}>
        <div className='cube mystic-accordion-content'>
          <div className='cube mystic-accordion-box' ref={cubeBox}>
            <div
              className='cube mystic-accordion-face mystic-accordion-face-front'
              ref={cubeFront}
            >
              {props.children}
            </div>
            <div
              className='cube mystic-accordion-face mystic-accordion-face-bottom'
              ref={cubeBottom}
            ></div>
          </div>
        </div>
      </div>
    );
  } else {
    applyRegularAnimation(options);

    return (
      <div className='reg mystic-accordion-content' ref={wrapper}>
        {props.children}
      </div>
    );
  }
}
