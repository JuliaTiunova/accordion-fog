"use strict";

exports.__esModule = true;
exports.applyCubeAnimation = applyCubeAnimation;
exports.applyRegularAnimation = applyRegularAnimation;
var _gsap = _interopRequireDefault(require("gsap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function applyRegularAnimation(_ref) {
  let {
    opened,
    timeline,
    wrapper,
    maxHeight
  } = _ref;
  if (opened) {
    _gsap.default.context(() => {
      timeline.current = _gsap.default.timeline().to(wrapper.current, {
        opacity: 1,
        duration: 0.2
      }).to(wrapper.current, {
        maxHeight: maxHeight || '500px',
        duration: 1
      }, '<');
    });
  } else {
    _gsap.default.context(() => {
      timeline.current = _gsap.default.timeline({
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
    _gsap.default.context(() => {
      timeline.current = _gsap.default.timeline({
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
    _gsap.default.context(() => {
      timeline.current = _gsap.default.timeline({
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