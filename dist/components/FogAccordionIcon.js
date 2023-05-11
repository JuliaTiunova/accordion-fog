"use strict";

exports.__esModule = true;
exports.FogAccordionIcon = FogAccordionIcon;
var _react = _interopRequireDefault(require("react"));
require("./styles/FogAccordionIcon.css");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function FogAccordionIcon(props) {
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "fog-accordion-button"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "fog-accordion-icon "
  }, props.icon || props.children || /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faArrowDown
  })));
}