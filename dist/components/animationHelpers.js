import gsap from 'gsap';
function applyRegularAnimation(_ref) {
  let {
    opened,
    timeline,
    wrapper
  } = _ref;
  if (opened) {
    gsap.context(() => {
      timeline.current = gsap.timeline().to(wrapper.current, {
        opacity: 1,
        duration: 0.2
      }).to(wrapper.current, {
        maxHeight: '300px',
        duration: 1
      }, '<');
    });
  } else {
    gsap.context(() => {
      timeline.current = gsap.timeline({
        defaults: {
          duration: 0.5
        }
      }).to(wrapper.current, {
        maxHeight: 0
      }).to(wrapper.current, {
        opacity: 0,
        delay: 0.2,
        duration: 0.2
      }, '<');
    });
  }
}
function applyCubeAnimation(_ref2) {
  let {
    opened,
    timeline,
    cubeBottom,
    cubeFront,
    cubeWrapper,
    cubeBox
  } = _ref2;
  if (opened) {
    gsap.context(() => {
      timeline.current = gsap.timeline({
        defaults: {
          duration: 0.5
        }
      }).to(cubeBottom.current, {
        opacity: 1,
        duration: 0.1
      }).to(cubeFront.current, {
        opacity: 1
      }).to(cubeWrapper.current, {
        height: '200px'
      }, '<').to(cubeBox.current, {
        translateZ: '-100px',
        rotationX: 0,
        delay: 0.1
      }, '<');
    });
  } else {
    gsap.context(() => {
      timeline.current = gsap.timeline({
        defaults: {
          duration: 0.5
        }
      }).to(cubeBox.current, {
        translateZ: '-100px',
        rotationX: 90
      }).to(cubeWrapper.current, {
        height: 0,
        delay: 0.2,
        duration: 0.4
      }, '<').to(cubeBottom.current, {
        opacity: 0,
        delay: 0.2
      }, '<').to(cubeFront.current, {
        opacity: 0
      }, '<');
    });
  }
}
export { applyRegularAnimation, applyCubeAnimation };