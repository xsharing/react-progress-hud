"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Object$assign = require("babel-runtime/core-js/object/assign")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactMotion = require("react-motion");

var _styles = require("../styles");

var _styles2 = _interopRequireDefault(_styles);

var _images = require("../images");

var _images2 = _interopRequireDefault(_images);

var propTypes = {
  clickHandler: _react.PropTypes.func,
  color: _react.PropTypes.string,
  isVisible: _react.PropTypes.bool.isRequired,
  overlayColor: _react.PropTypes.string,
  overlayOpacity: _react.PropTypes.string
};
var defaultProps = {
  clickHandler: function clickHandler() {},
  color: "#000",
  overlayColor: "rgb(0, 0, 0)",
  overlayOpacity: "0.5"
};

var ProgressHUD = (function (_Component) {
  _inherits(ProgressHUD, _Component);

  function ProgressHUD(props) {
    _classCallCheck(this, ProgressHUD);

    _get(Object.getPrototypeOf(ProgressHUD.prototype), "constructor", this).call(this, props);
  }

  _createClass(ProgressHUD, [{
    key: "_getEndValue",
    value: function _getEndValue(prevValue) {
      return {
        val: prevValue.val === 0 ? 360 : prevValue.val + 360,
        config: [100, 100]
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return(
        // jshint ignore:start
        _react2["default"].createElement(
          "div",
          {
            style: _Object$assign(_styles2["default"].container, {
              display: this.props.isVisible ? "block" : "none"
            })
          },
          _react2["default"].createElement("div", {
            key: "ProgressHUD",
            style: _Object$assign(_styles2["default"].overlay, {
              backgroundColor: this.props.overlayColor,
              opacity: this.props.overlayOpacity
            }),
            onClick: this.props.clickHandler
          }),
          _react2["default"].createElement(
            "div",
            { style: _styles2["default"].content },
            _react2["default"].createElement(
              _reactMotion.Spring,
              { defaultValue: { val: 0 }, endValue: this._getEndValue },
              function (interpolated) {
                return _react2["default"].createElement(
                  "div",
                  {
                    style: _Object$assign(_styles2["default"].spinner, {
                      backgroundColor: _this.props.color,
                      msTransform: "rotate(" + interpolated.val + "deg)",
                      WebkitTransform: "rotate(" + interpolated.val + "deg)",
                      transform: "rotate(" + interpolated.val + "deg)"
                    })
                  },
                  _react2["default"].createElement("img", { src: "data:image/png;base64," + _images2["default"]["1x"] }),
                  _react2["default"].createElement("div", {
                    style: _Object$assign(_styles2["default"].curve, { backgroundColor: _this.props.color })
                  }),
                  _react2["default"].createElement("div", { style: _styles2["default"].inner_spinner })
                );
              }
            )
          )
        )
        // jshint ignore:end

      );
    }
  }]);

  return ProgressHUD;
})(_react.Component);

exports["default"] = ProgressHUD;

ProgressHUD.propTypes = propTypes;
ProgressHUD.defaultProps = defaultProps;
module.exports = exports["default"];