"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FogAccordionCircles;
var _react = _interopRequireWildcard(require("react"));
require("./styles/FogAccordionCircles.css");
var _gsap = _interopRequireDefault(require("gsap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const fogCircles = [{
  class: 'fog-circle-one'
}, {
  class: 'fog-circle-two'
}, {
  class: 'fog-circle-three'
}];
function FogAccordionCircles(props) {
  const timeline = (0, _react.useRef)();
  (0, _react.useLayoutEffect)(() => {
    (function triggerAnimation() {
      let context = _gsap.default.context(() => {
        timeline.current = _gsap.default.timeline({
          defaults: {
            rotation: 360,
            duration: 8,
            repeat: 1,
            yoyo: true,
            ease: 'none',
            x: 'random(-300,300)',
            y: 'random(-300,300)'
          }
        }).to('.fog-circle-one', {}).to('.fog-circle-two', {}, '<').to('.fog-circle-three', {
          onComplete: () => {
            triggerAnimation();
          }
        }, '<');
      });
      return () => {
        context.revert();
      };
    })();
  });
  return /*#__PURE__*/_react.default.createElement("div", null, fogCircles.map(fogCircle => /*#__PURE__*/_react.default.createElement("div", {
    className: "fog-circle ".concat(fogCircle.class, " ").concat(props.className),
    key: fogCircle.class
  })));
}