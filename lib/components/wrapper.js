"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _extends = require("babel-runtime/helpers/extends")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var Wrapper = function Wrapper(ComposedComponent) {
  return (function (_Component) {
    _inherits(_class, _Component);

    function _class(props) {
      _classCallCheck(this, _class);

      _get(Object.getPrototypeOf(_class.prototype), "constructor", this).call(this, props);

      this.state = { isVisible: false };
    }

    _createClass(_class, [{
      key: "showProgressHUD",
      value: function showProgressHUD() {
        this.setState({
          isVisible: true
        });
      }
    }, {
      key: "dismissProgressHUD",
      value: function dismissProgressHUD() {
        this.setState({
          isVisible: false
        });
      }
    }, {
      key: "render",
      value: function render() {
        return(
          // jshint ignore:start
          _react2["default"].createElement(ComposedComponent, _extends({}, this.props, {
            showProgressHUD: this.showProgressHUD.bind(this),
            dismissProgressHUD: this.dismissProgressHUD.bind(this),
            isVisible: this.state.isVisible
          }))
          // jshint ignore:end

        );
      }
    }]);

    return _class;
  })(_react.Component);
};

exports.Wrapper = Wrapper;
exports["default"] = Wrapper;