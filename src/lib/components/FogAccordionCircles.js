import React from 'react';
import './styles/FogAccordionCircles.css';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

const fogCircles = [
  {
    class: 'fog-circle-one',
  },
  {
    class: 'fog-circle-two',
  },
  {
    class: 'fog-circle-three',
  },
];

export function FogAccordionCircles(props) {
  const timeline = useRef();

  useLayoutEffect(() => {
    (function triggerAnimation() {
      let context = gsap.context(() => {
        timeline.current = gsap
          .timeline({
            defaults: {
              rotation: 360,
              duration: 8,
              repeat: 1,
              yoyo: true,
              ease: 'none',
              x: 'random(-300,300)',
              y: 'random(-300,300)',
            },
          })
          .to('.fog-circle-one', {})
          .to('.fog-circle-two', {}, '<')
          .to(
            '.fog-circle-three',
            {
              onComplete: () => {
                triggerAnimation();
              },
            },
            '<'
          );
      });
      return () => {
        context.revert();
      };
    })();
  });
  return (
    <div>
      {fogCircles.map((fogCircle) => (
        <div
          className={`fog-circle ${fogCircle.class} ${props.className}`}
          key={fogCircle.class}
        ></div>
      ))}
    </div>
  );
}
