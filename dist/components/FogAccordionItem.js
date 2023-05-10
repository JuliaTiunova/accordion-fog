"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FogAccordionItem = FogAccordionItem;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
require("./styles/FogAccordionItem.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function FogAccordionItem(props) {
  const [clicked, setClicked] = (0, _react.useState)(false);
  function toggleMultiplefogItems() {
    setClicked(prev => !prev);
  }
  const properties = {
    onTogglefogItem: props.multipleToggle ? toggleMultiplefogItems : props.onTogglefogItem,
    opened: props.opened || clicked,
    cube: props.cube
  };
  const renderChildren = () => {
    return _react.default.Children.map(props.children, child => {
      return /*#__PURE__*/_react.default.cloneElement(child, properties);
    });
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "fog-accordion-item ".concat(props.opened || clicked ? 'opened' : '')
  }, renderChildren());
}