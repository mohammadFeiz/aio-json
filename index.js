"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactVirtualDom = _interopRequireDefault(require("react-virtual-dom"));

var _react2 = require("@mdi/react");

var _js = require("@mdi/js");

var _aioButton = _interopRequireDefault(require("aio-button"));

var _rRangeSlider = _interopRequireDefault(require("r-range-slider"));

var _jquery = _interopRequireDefault(require("jquery"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    var _this$props$json = _this.props.json,
        json = _this$props$json === void 0 ? false : _this$props$json;
    var variables = false;

    if (json) {
      variables = _this.regenerate(json);
    }

    _this.state = {
      _open: true,
      indent: 24,
      height: 24,
      fontSize: 16,
      variableColor: '#ff0000',
      numberColor: 'green',
      textColor: '#b81515',
      booleanColor: '#0000ff',
      background: '#eee',
      generated: false,
      border: '#ddd',
      variables: variables,
      json: json,
      prevJson: JSON.stringify(json)
    };
    return _this;
  }

  _createClass(App, [{
    key: "regenerate",
    value: function regenerate(json) {
      var type = this.getType(json);
      var res = [];

      if (type === 'array') {
        for (var i = 0; i < json.length; i++) {
          res.push(this.regenerateReq(json[i]));
        }
      } else if (type === 'object') {
        for (var prop in json) {
          res.push(this.regenerateReq(json[prop], prop));
        }
      }

      return res;
    }
  }, {
    key: "getType",
    value: function getType(o) {
      if (Array.isArray(o)) {
        return 'array';
      }

      var type = _typeof(o);

      if (type === 'object') {
        return 'object';
      }

      if (type === 'number') {
        return 'number';
      }

      if (type === 'boolean') {
        return 'boolean';
      }

      return 'text';
    }
  }, {
    key: "regenerateReq",
    value: function regenerateReq(o, name) {
      var _this2 = this;

      var type = this.getType(o);

      if (type === 'text' || type === 'number' || type === 'boolean') {
        return {
          type: type,
          name: name,
          value: o
        };
      }

      if (type === 'array') {
        return {
          type: 'array',
          name: name,
          value: o.map(function (p) {
            return _this2.regenerateReq(p);
          })
        };
      }

      if (type === 'object') {
        var res = {
          type: 'object',
          name: name,
          value: []
        };

        for (var prop in o) {
          res.value.push(this.regenerateReq(o[prop], prop));
        }

        return res;
      }
    }
  }, {
    key: "generate",
    value: function generate() {
      var _this$state = this.state,
          variables = _this$state.variables,
          json = _this$state.json;

      if (json === false) {
        return;
      }

      var type = this.getType(json);

      if (type === 'object') {
        this.res = {};

        for (var i = 0; i < variables.length; i++) {
          var variable = variables[i];
          var name = variable.name;
          this.res[name] = this.generateReq(variable);
        }

        return this.res;
      } else if (type === 'array') {
        this.res = [];

        for (var _i = 0; _i < variables.length; _i++) {
          var _variable = variables[_i];
          this.res.push(this.generateReq(_variable));
        }

        return this.res;
      }
    }
  }, {
    key: "generateReq",
    value: function generateReq(_ref) {
      var type = _ref.type,
          value = _ref.value;

      if (type === 'text' || type === 'number' || type === 'boolean') {
        return value;
      }

      if (type === 'array') {
        var res = [];

        for (var i = 0; i < value.length; i++) {
          res.push(this.generateReq(value[i]));
        }

        return res;
      }

      if (type === 'object') {
        var _res = {};

        for (var _i2 = 0; _i2 < value.length; _i2++) {
          _res[value[_i2].name] = this.generateReq(value[_i2]);
        }

        return _res;
      }
    }
  }, {
    key: "getAddButton",
    value: function getAddButton(onClick, init) {
      return {
        size: 28,
        align: 'vh',
        html: /*#__PURE__*/_react.default.createElement(_aioButton.default, {
          caret: false,
          type: "select",
          className: "json-builder-add",
          text: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
            path: _js.mdiPlusThick,
            size: 0.5
          }),
          options: [{
            text: 'text',
            value: 'text',
            style: {
              height: 24,
              display: init ? 'none' : undefined
            }
          }, {
            text: 'number',
            value: 'number',
            style: {
              height: 24,
              display: init ? 'none' : undefined
            }
          }, {
            text: 'boolean',
            value: 'boolean',
            style: {
              height: 24,
              display: init ? 'none' : undefined
            }
          }, {
            text: 'array',
            value: 'array',
            style: {
              height: 24
            }
          }, {
            text: 'object',
            value: 'object',
            style: {
              height: 24
            }
          }],
          onChange: function onChange(value) {
            return onClick(value);
          }
        })
      };
    }
  }, {
    key: "getRemoveButton",
    value: function getRemoveButton(o, index, isRoot) {
      var _this3 = this;

      var variables = this.state.variables;
      return {
        size: 28,
        align: 'vh',
        html: /*#__PURE__*/_react.default.createElement(_aioButton.default, {
          caret: false,
          className: "json-builder-button",
          text: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
            path: _js.mdiClose,
            size: 1
          }),
          onClick: function onClick() {
            if (isRoot) {
              _this3.setState({
                variables: false,
                json: false
              }, function () {
                return _this3.changeVariables();
              });
            } else {
              o.splice(index, 1);

              _this3.setState({
                variables: variables
              }, function () {
                return _this3.changeVariables();
              });
            }
          }
        })
      };
    }
  }, {
    key: "getCloneButton",
    value: function getCloneButton(parent, index, o) {
      var _this4 = this;

      var variables = this.state.variables;
      return {
        size: 28,
        align: 'vh',
        html: /*#__PURE__*/_react.default.createElement(_aioButton.default, {
          caret: false,
          className: "json-builder-button",
          text: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
            path: _js.mdiContentCopy,
            size: 1
          }),
          onClick: function onClick() {
            parent.splice(index + 1, 0, JSON.parse(JSON.stringify(o)));

            _this4.setState({
              variables: variables
            }, function () {
              return _this4.changeVariables();
            });
          }
        })
      };
    }
  }, {
    key: "getToggleButton",
    value: function getToggleButton(o) {
      var _this5 = this;

      var _o$_open = o._open,
          _open = _o$_open === void 0 ? true : _o$_open;

      return {
        size: 28,
        align: 'vh',
        html: /*#__PURE__*/_react.default.createElement(_aioButton.default, {
          caret: false,
          className: "json-builder-button",
          text: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
            path: !_open ? _js.mdiChevronRight : _js.mdiChevronDown,
            size: 1
          }),
          onClick: function onClick() {
            o._open = !_open;

            _this5.setState({});
          }
        })
      };
    }
  }, {
    key: "getSettingButton",
    value: function getSettingButton() {
      var _this6 = this;

      var _this$state2 = this.state,
          indent = _this$state2.indent,
          height = _this$state2.height,
          fontSize = _this$state2.fontSize;
      return {
        size: 24,
        align: 'vh',
        html: /*#__PURE__*/_react.default.createElement(_aioButton.default, {
          caret: false,
          className: "json-builder-button",
          text: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
            path: _js.mdiCog,
            size: 0.8
          }),
          popOver: function popOver() {
            return /*#__PURE__*/_react.default.createElement(_reactVirtualDom.default, {
              layout: {
                attrs: {
                  style: {
                    fontSize: 12
                  }
                },
                column: [{
                  size: 24,
                  row: [{
                    size: 12
                  }, {
                    size: 60,
                    html: 'Indent',
                    align: 'v'
                  }, {
                    size: 160,
                    html: /*#__PURE__*/_react.default.createElement(_rRangeSlider.default, {
                      start: 10,
                      end: 36,
                      attrs: {
                        style: {
                          height: 24
                        }
                      },
                      showValue: false,
                      points: [indent],
                      onChange: function onChange(points) {
                        return _this6.setState({
                          indent: points[0]
                        });
                      }
                    })
                  }, {
                    size: 48,
                    html: indent,
                    align: 'vh'
                  }]
                }, {
                  size: 24,
                  row: [{
                    size: 12
                  }, {
                    size: 60,
                    html: 'Height',
                    align: 'v'
                  }, {
                    size: 160,
                    html: /*#__PURE__*/_react.default.createElement(_rRangeSlider.default, {
                      start: 12,
                      end: 36,
                      attrs: {
                        style: {
                          height: 24
                        }
                      },
                      showValue: false,
                      points: [height],
                      onChange: function onChange(points) {
                        return _this6.setState({
                          height: points[0]
                        });
                      }
                    })
                  }, {
                    size: 48,
                    html: height,
                    align: 'vh'
                  }]
                }, {
                  size: 24,
                  row: [{
                    size: 12
                  }, {
                    size: 60,
                    html: 'FontSize',
                    align: 'v'
                  }, {
                    size: 160,
                    html: /*#__PURE__*/_react.default.createElement(_rRangeSlider.default, {
                      start: 10,
                      end: 28,
                      attrs: {
                        style: {
                          height: 24
                        }
                      },
                      showValue: false,
                      points: [fontSize],
                      onChange: function onChange(points) {
                        return _this6.setState({
                          fontSize: points[0]
                        });
                      }
                    })
                  }, {
                    size: 48,
                    html: fontSize,
                    align: 'vh'
                  }]
                }]
              }
            });
          }
        })
      };
    }
  }, {
    key: "changeVariables",
    value: function changeVariables() {
      if (this.props.onChange) {
        this.props.onChange(this.generate());
      }
    }
  }, {
    key: "getSpace",
    value: function getSpace() {
      return {
        html: /*#__PURE__*/_react.default.createElement("div", {
          className: "json-builder-space"
        })
      };
    }
  }, {
    key: "getColumn",
    value: function getColumn(o, level, index, parent) {
      return this["get".concat({
        text: 'NT',
        number: 'NT',
        array: 'AO',
        object: 'AO',
        boolean: 'Bool'
      }[o.type], "Variable")](o, level, index, parent);
    }
  }, {
    key: "getNTVariable",
    value: function getNTVariable(o, level, index, parent) {
      var _this7 = this;

      var type = o.type,
          name = o.name,
          _o$value = o.value,
          value = _o$value === void 0 ? type === 'text' ? '' : 0 : _o$value,
          _this$state3 = this.state,
          indent = _this$state3.indent,
          height = _this$state3.height,
          variableColor = _this$state3.variableColor,
          numberColor = _this$state3.numberColor,
          textColor = _this$state3.textColor,
          border = _this$state3.border;
      var color = type === 'text' ? textColor : numberColor;
      return {
        attrs: {
          style: {
            borderBottom: "1px solid ".concat(border)
          }
        },
        size: height,
        childsProps: {
          align: 'v'
        },
        row: [this.getSpace(), {
          size: level * indent
        }, {
          show: name !== undefined,
          html: function html() {
            return /*#__PURE__*/_react.default.createElement(TextField, {
              color: variableColor,
              canEmpty: false,
              value: name,
              canSpace: false,
              onChange: function onChange(v) {
                o.name = v;

                _this7.changeVariables();
              }
            });
          }
        }, {
          show: name !== undefined,
          html: ':',
          attrs: {
            style: {
              color: variableColor
            }
          }
        }, {
          show: type === 'text',
          html: '"',
          attrs: {
            style: {
              color: color
            }
          }
        }, {
          html: /*#__PURE__*/_react.default.createElement(TextField, {
            color: type === 'text' ? textColor : color,
            type: type,
            value: value,
            onChange: function onChange(v) {
              o.value = v;

              _this7.changeVariables();
            }
          })
        }, {
          show: type === 'text',
          html: '"',
          attrs: {
            style: {
              color: color
            }
          }
        }, {
          html: ','
        }, {
          flex: 1
        }, this.getRemoveButton(parent, index), this.getCloneButton(parent, index, o)]
      };
    }
  }, {
    key: "getBoolVariable",
    value: function getBoolVariable(o, level, index, parent) {
      var _this8 = this;

      var name = o.name,
          value = o.value,
          _this$state4 = this.state,
          variables = _this$state4.variables,
          indent = _this$state4.indent,
          height = _this$state4.height,
          variableColor = _this$state4.variableColor,
          booleanColor = _this$state4.booleanColor,
          border = _this$state4.border;
      return {
        attrs: {
          style: {
            borderBottom: "1px solid ".concat(border),
            padding: 0
          }
        },
        size: height,
        childsProps: {
          align: 'v'
        },
        row: [this.getSpace(), {
          size: level * indent
        }, {
          show: name !== undefined,
          html: function html() {
            return /*#__PURE__*/_react.default.createElement(TextField, {
              canEmpty: false,
              color: variableColor,
              value: name,
              canSpace: false,
              onChange: function onChange(v) {
                o.name = v;

                _this8.changeVariables();
              }
            });
          }
        }, {
          show: name !== undefined,
          html: ':',
          attrs: {
            style: {
              color: variableColor
            }
          }
        }, {
          attrs: {
            style: {
              overflow: 'hidden'
            }
          },
          html: /*#__PURE__*/_react.default.createElement(_aioButton.default, {
            style: {
              background: 'none',
              fontSize: 'inherit',
              color: booleanColor
            },
            type: "select",
            value: value,
            caret: false,
            options: [{
              text: 'false',
              value: false,
              style: {
                height: 24
              }
            }, {
              text: 'true',
              value: true,
              style: {
                height: 24
              }
            }],
            onChange: function onChange(v) {
              o.value = v;

              _this8.setState({
                variables: variables
              }, function () {
                return _this8.changeVariables();
              });
            }
          })
        }, {
          html: ','
        }, {
          flex: 1
        }, this.getRemoveButton(parent, index), this.getCloneButton(parent, index, o)]
      };
    }
  }, {
    key: "getAOVariable",
    value: function getAOVariable(o, level, index, parent) {
      var _this9 = this;

      var name = o.name,
          value = o.value,
          _o$_open2 = o._open,
          _open = _o$_open2 === void 0 ? true : _o$_open2,
          _this$state5 = this.state,
          indent = _this$state5.indent,
          height = _this$state5.height,
          variableColor = _this$state5.variableColor,
          border = _this$state5.border,
          column = [];

      column.push({
        attrs: {
          style: {
            borderBottom: "1px solid ".concat(border)
          }
        },
        size: height,
        childsProps: {
          align: 'v'
        },
        row: [level === 0 ? this.getSettingButton() : this.getToggleButton(o), {
          size: level * indent
        }, {
          show: name !== undefined,
          html: function html() {
            return /*#__PURE__*/_react.default.createElement(TextField, {
              canEmpty: false,
              color: variableColor,
              value: name,
              canSpace: false,
              onChange: function onChange(v) {
                o.name = v;

                _this9.changeVariables();
              }
            });
          }
        }, {
          show: name !== undefined,
          html: ':',
          attrs: {
            style: {
              color: variableColor
            }
          }
        }, {
          html: o.type === 'array' ? '[' : '{'
        }, this.getAddButton(function (type) {
          return _this9.add(o.value, type, o.type === 'object');
        }), {
          flex: 1
        }, this.getRemoveButton(parent, index, level === 0), level === 0 ? this.getSpace() : this.getCloneButton(parent, index, o)]
      });

      if (_open) {
        for (var i = 0; i < value.length; i++) {
          column.push(this.getColumn(value[i], level + 1, i, value));
        }
      }

      column.push({
        attrs: {
          style: {
            borderBottom: "1px solid ".concat(border)
          }
        },
        size: height,
        childsProps: {
          align: 'v'
        },
        row: [this.getSpace(), {
          size: level * indent
        }, {
          html: o.type === 'array' ? ']' : '}'
        }, {
          html: ','
        }, {
          flex: 1
        }, this.getSpace(), this.getSpace()]
      });
      return {
        column: column
      };
    }
  }, {
    key: "add",
    value: function add(o, type, hasName) {
      var _this10 = this;

      var obj;

      if (type === 'text') {
        obj = {
          type: type,
          value: ''
        };
      } else if (type === 'number') {
        obj = {
          type: type,
          value: 0
        };
      } else if (type === 'boolean') {
        obj = {
          type: type,
          value: false
        };
      } else if (type === 'array') {
        obj = {
          type: type,
          value: [],
          _open: true
        };
      } else if (type === 'object') {
        obj = {
          type: type,
          value: [],
          _open: true
        };
      }

      if (hasName) {
        obj.name = 'untitle';
      }

      o.push(obj);
      this.setState({}, function () {
        if (_this10.props.onChange) {
          _this10.changeVariables();
        }
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var onSubmit = this.props.onSubmit;
      onSubmit(this.generate());
    }
  }, {
    key: "getHeader",
    value: function getHeader(mode) {
      var _this11 = this;

      var _this$state6 = this.state,
          variables = _this$state6.variables,
          _open = _this$state6._open,
          json = _this$state6.json,
          column = [];
      var _this$props = this.props,
          onSubmit = _this$props.onSubmit,
          onClose = _this$props.onClose;

      if (_open) {
        column.push(this.getColumn({
          type: 'object',
          value: variables
        }, 0, 0, variables));
      }

      return {
        size: 36,
        attrs: {
          className: 'json-builder-header'
        },
        align: 'v',
        row: [{
          flex: 1,
          html: /*#__PURE__*/_react.default.createElement(_aioButton.default, {
            icon: {
              size: [14, 12, 1],
              color: '#fff'
            },
            style: {
              color: 'inherit'
            },
            type: "radio",
            value: mode,
            optionWidth: "fit-content",
            optionStyle: {
              height: 36
            },
            options: [{
              text: 'JSON Builder',
              value: 'builder'
            }, {
              text: 'JSON Preview',
              value: 'preview'
            }],
            onChange: function onChange(value) {
              if (value === 'builder') {
                _this11.setState({
                  generated: false
                });
              } else {
                _this11.setState({
                  generated: JSON.stringify(_this11.generate(json), undefined, 4)
                });
              }
            }
          })
        }, {
          show: onSubmit !== undefined,
          html: /*#__PURE__*/_react.default.createElement("button", {
            className: "json-builder-submit",
            onClick: function onClick() {
              return _this11.onSubmit();
            }
          }, "Submit")
        }, {
          show: onClose !== undefined,
          size: 48,
          align: 'vh',
          html: /*#__PURE__*/_react.default.createElement("button", {
            className: "json-builder-close",
            onClick: function onClick() {
              return _this11.onClose();
            }
          }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
            path: _js.mdiClose,
            size: 1.5
          }))
        }]
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this12 = this;

      if (this.props.onChange) {
        if (JSON.stringify(this.props.json) !== this.state.prevJson) {
          setTimeout(function () {
            _this12.setState({
              json: _this12.props.json,
              prevJson: JSON.stringify(_this12.props.json),
              variables: _this12.regenerate(_this12.props.json)
            });
          }, 0);
        }
      }

      var _this$state7 = this.state,
          variables = _this$state7.variables,
          _open = _this$state7._open,
          fontSize = _this$state7.fontSize,
          generated = _this$state7.generated,
          json = _this$state7.json,
          column = [];
      var _this$props2 = this.props,
          className = _this$props2.className,
          style = _this$props2.style;

      if (variables === false) {
        column.push({
          row: [this.getAddButton(function (type) {
            return _this12.setState({
              json: type === 'array' ? [] : {},
              variables: _this12.regenerate(type === 'array' ? [] : {})
            });
          }, true)]
        });
      } else {
        var type = this.getType(json);

        if (_open) {
          column.push(this.getColumn({
            type: type,
            value: variables
          }, 0, 0, variables));
        }
      }

      var mode = generated === false ? 'builder' : 'preview';
      return /*#__PURE__*/_react.default.createElement(_reactVirtualDom.default, {
        layout: {
          attrs: {
            className: 'json-builder' + (className ? ' ' + className : ''),
            style: style
          },
          column: [this.getHeader(mode), {
            flex: 1,
            show: mode === 'builder',
            attrs: {
              style: {
                overflowY: 'auto'
              }
            },
            html: /*#__PURE__*/_react.default.createElement(_reactVirtualDom.default, {
              layout: {
                attrs: {
                  style: {
                    fontSize: fontSize
                  }
                },
                column: column
              }
            })
          }, {
            show: mode === 'preview',
            flex: 1,
            html: /*#__PURE__*/_react.default.createElement("pre", null, generated)
          }]
        }
      });
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

var TextField = /*#__PURE__*/function (_Component2) {
  _inherits(TextField, _Component2);

  var _super2 = _createSuper(TextField);

  function TextField(props) {
    var _this13;

    _classCallCheck(this, TextField);

    _this13 = _super2.call(this, props);
    _this13.dom = /*#__PURE__*/(0, _react.createRef)();
    _this13.state = {
      edit: false,
      value: _this13.props.value,
      prevValue: _this13.props.value
    };
    return _this13;
  }

  _createClass(TextField, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var input = (0, _jquery.default)(this.dom.current);

      if (!input || !input.length) {
        return;
      }

      if (!input.is(":focus")) {
        input.focus().select();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this14 = this;

      var edit = this.state.edit;
      var _this$props3 = this.props,
          onChange = _this$props3.onChange,
          _this$props3$canSpace = _this$props3.canSpace,
          canSpace = _this$props3$canSpace === void 0 ? true : _this$props3$canSpace,
          _this$props3$type = _this$props3.type,
          type = _this$props3$type === void 0 ? 'text' : _this$props3$type,
          color = _this$props3.color,
          _this$props3$canEmpty = _this$props3.canEmpty,
          canEmpty = _this$props3$canEmpty === void 0 ? true : _this$props3$canEmpty;
      var _this$state8 = this.state,
          value = _this$state8.value,
          prevValue = _this$state8.prevValue;

      if (this.props.value !== prevValue) {
        this.setState({
          value: this.props.value,
          prevValue: this.props.value
        });
      }

      if (edit) {
        return /*#__PURE__*/_react.default.createElement("input", {
          type: type,
          ref: this.dom,
          className: "text-field-input",
          value: value,
          onBlur: function onBlur() {
            _this14.setState({
              edit: false
            });

            onChange(_this14.state.value);
          },
          onChange: function onChange(e) {
            var value = e.target.value;

            if (!canSpace) {
              value = value.replace(/\s/g, '');
            }

            _this14.setState({
              value: value
            });
          }
        });
      } else {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "text-field-text",
          onClick: function onClick() {
            return _this14.setState({
              edit: true
            });
          },
          style: {
            background: !value.toString().length && !canEmpty ? 'red' : undefined,
            color: color
          }
        }, value);
      }
    }
  }]);

  return TextField;
}(_react.Component);