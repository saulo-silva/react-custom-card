"use strict";

var _interopRequireDefault = require("/home/saulo/code/react-custom-card/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./card.css");

var Card = function Card(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "card"
  }, props.children);
};

var _default = Card;
exports.default = _default;