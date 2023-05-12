"use strict";

require("core-js/modules/es.weak-map.js");
exports.__esModule = true;
exports.FogAccordion = FogAccordion;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
require("./styles/FogAccordion.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function FogAccordion(props) {
  const {
    children,
    cube,
    multipleToggle
  } = props;
  const [clicked, setClicked] = (0, _react.useState)('');
  function togglefogItem(index) {
    if (clicked === index) {
      return setClicked('');
    }
    setClicked(index);
  }
  const renderChildren = () => {
    return _react.default.Children.map(children, (child, index) => {
      return /*#__PURE__*/_react.default.cloneElement(child, {
        onTogglefogItem: togglefogItem,
        opened: clicked === index || false,
        cube,
        multipleToggle
      });
    });
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "fog-accordion ".concat(props.darkMode ? 'darkMode' : '', " ").concat(props.colorFilled ? 'colorFilled' : '')
  }, renderChildren());
}