import React from 'react';
import './styles/MysticAccordionCircles.css';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

const mysticCircles = [
  {
    class: 'mystic-circle-one',
  },
  {
    class: 'mystic-circle-two',
  },
  {
    class: 'mystic-circle-three',
  },
];

export default function MysticAccordionCircles() {
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
          .to('.mystic-circle-one', {})
          .to('.mystic-circle-two', {}, '<')
          .to(
            '.mystic-circle-three',
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
      {mysticCircles.map((mysticCircle) => (
        <div
          className={`mystic-circle ${mysticCircle.class}`}
          key={mysticCircle.class}
        ></div>
      ))}
    </div>
  );
}
