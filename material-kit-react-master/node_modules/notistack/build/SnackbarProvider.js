'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SnackbarContext = require('./SnackbarContext');

var _SnackbarContext2 = _interopRequireDefault(_SnackbarContext);

var _constants = require('./utils/constants');

var _SnackbarItem = require('./SnackbarItem');

var _SnackbarItem2 = _interopRequireDefault(_SnackbarItem);

var _warning = require('./utils/warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SnackbarProvider = function (_Component) {
    _inherits(SnackbarProvider, _Component);

    function SnackbarProvider(props) {
        _classCallCheck(this, SnackbarProvider);

        var _this = _possibleConstructorReturn(this, (SnackbarProvider.__proto__ || Object.getPrototypeOf(SnackbarProvider)).call(this, props));

        _this.queue = [];

        _this.handleEnqueueSnackbar = function (message) {
            var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var key = _ref.key,
                preventDuplicate = _ref.preventDuplicate,
                options = _objectWithoutProperties(_ref, ['key', 'preventDuplicate']);

            if (preventDuplicate || _this.props.preventDuplicate) {
                var inQueue = _this.queue.findIndex(function (item) {
                    return item.message === message;
                }) > -1;
                var inView = _this.state.snacks.findIndex(function (item) {
                    return item.message === message;
                }) > -1;
                if (inQueue || inView) {
                    return null;
                }
            }

            var id = key || new Date().getTime() + Math.random();
            var snack = _extends({
                key: id,
                message: message
            }, options, {
                open: true
            });

            if (options.persist) {
                snack.autoHideDuration = undefined;
            }

            _this.queue.push(snack);
            _this.handleDisplaySnack();

            return id;
        };

        _this.handleDisplaySnack = function () {
            var maxSnack = _this.props.maxSnack;
            var snacks = _this.state.snacks;

            if (snacks.length >= maxSnack) {
                return _this.handleDismissOldest();
            }
            return _this.processQueue();
        };

        _this.processQueue = function () {
            if (_this.queue.length > 0) {
                var newOne = _this.queue.shift();
                _this.setState(function (_ref2) {
                    var snacks = _ref2.snacks;
                    return {
                        snacks: [].concat(_toConsumableArray(snacks), [newOne])
                    };
                });
            }
        };

        _this.handleDismissOldest = function () {
            var popped = false;
            var ignore = false;

            var persistentCount = _this.state.snacks.reduce(function (acc, current) {
                return acc + (current.open && current.persist ? 1 : 0);
            }, 0);

            if (persistentCount === _this.props.maxSnack) {
                (0, _warning2.default)(_constants.MESSAGES.NO_PERSIST_ALL);
                ignore = true;
            }

            _this.setState(function (_ref3) {
                var snacks = _ref3.snacks;
                return {
                    snacks: snacks.filter(function (item) {
                        return item.open === true;
                    }).map(function (item) {
                        if (!popped && (!item.persist || ignore)) {
                            popped = true;
                            if (item.onClose) item.onClose(null, 'maxsnack', item.key);
                            if (_this.props.onClose) _this.props.onClose(null, 'maxsnack', item.key);

                            return _extends({}, item, {
                                open: false
                            });
                        }

                        return _extends({}, item);
                    })
                };
            });
        };

        _this.handleCloseSnack = function (event, reason, key) {
            _this.setState(function (_ref4) {
                var snacks = _ref4.snacks;
                return {
                    snacks: snacks.map(function (item) {
                        return !key || item.key === key ? _extends({}, item, { open: false }) : _extends({}, item);
                    })
                };
            });

            if (_this.props.onClose) _this.props.onClose(event, reason, key);
        };

        _this.handleDismissSnack = function (key) {
            _this.handleCloseSnack(null, null, key);
        };

        _this.handleExitedSnack = function (event, key) {
            var enterDelay = _constants.TRANSITION_DELAY + _constants.TRANSITION_DOWN_DURATION + 40;
            _this.setState(function (_ref5) {
                var snacks = _ref5.snacks;
                return {
                    snacks: snacks.filter(function (item) {
                        return item.key !== key;
                    })
                };
            }, function () {
                return setTimeout(_this.handleDisplaySnack, enterDelay);
            });

            if (_this.props.onExited) _this.props.onExited(event, key);
        };

        _this.handleSetHeight = function (key, height) {
            _this.setState(function (_ref6) {
                var snacks = _ref6.snacks;
                return {
                    snacks: snacks.map(function (item) {
                        return item.key === key ? _extends({}, item, { height: height }) : _extends({}, item);
                    })
                };
            });
        };

        _this.state = {
            snacks: [],
            contextValue: {
                handleEnqueueSnackbar: _this.handleEnqueueSnackbar,
                handleCloseSnackbar: _this.handleDismissSnack
            }
        };
        return _this;
    }

    _createClass(SnackbarProvider, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                children = _props.children,
                maxSnack = _props.maxSnack,
                dense = _props.dense,
                props = _objectWithoutProperties(_props, ['children', 'maxSnack', 'dense']);

            var _state = this.state,
                contextValue = _state.contextValue,
                snacks = _state.snacks;


            return _react2.default.createElement(
                _SnackbarContext2.default.Provider,
                { value: contextValue },
                children,
                snacks.map(function (snack, index) {
                    return _react2.default.createElement(_SnackbarItem2.default, _extends({}, props, {
                        key: snack.key,
                        snack: snack,
                        offset: _this2.offsets[index],
                        onClose: _this2.handleCloseSnack,
                        onExited: _this2.handleExitedSnack,
                        onSetHeight: _this2.handleSetHeight
                    }));
                })
            );
        }
    }, {
        key: 'offsets',
        get: function get() {
            var _this3 = this;

            var snacks = this.state.snacks;

            return snacks.map(function (item, i) {
                var index = i;

                var _ref7 = _this3.props.dense ? { view: 0, snackbar: 4 } : { view: 20, snackbar: 12 },
                    viewOffset = _ref7.view,
                    snackbarOffset = _ref7.snackbar;

                var offset = viewOffset;
                while (snacks[index - 1]) {
                    var snackHeight = snacks[index - 1].height || 48;
                    offset += snackHeight + snackbarOffset;
                    index -= 1;
                }
                return offset;
            });
        }

        /**
         * Adds a new snackbar to the queue to be presented.
         * @param {string} message - text of the notification
         * @param {object} options - additional options for the snackbar we want to enqueue.
         * We can pass Material-ui Snackbar props for individual customisation.
         * @param {string} options.key
         * @param {string} options.variant - type of the snackbar. default value is 'default'.
         * can be: (default, success, error, warning, info)
         * @param {bool} options.persist
         * @param {bool} options.preventDuplicate
         * @returns generated or user defined key referencing the new snackbar or null
         */


        /**
         * Display snack if there's space for it. Otherwise, immediately begin dismissing the
         * oldest message to start showing the new one.
         */


        /**
         * Display items (notifications) in the queue if there's space for them.
         */


        /**
         * Hide oldest snackbar on the screen because there exists a new one which we have to display.
         * (ignoring the one with 'persist' flag. i.e. explicitly told by user not to get dismissed).
         */


        /**
         * Hide a snackbar after its timeout.
         * @param {object} event - The event source of the callback
         * @param {string} reason - can be timeout or clickaway
         * @param {number} key - id of the snackbar we want to hide
         */


        /**
         * Close snackbar with the given key
         * @param {number} key - id of the snackbar we want to hide
         */


        /**
         * When we set open attribute of a snackbar to false (i.e. after we hide a snackbar),
         * it leaves the screen and immediately after leaving animation is done, this method
         * gets called. We remove the hidden snackbar from state and then display notifications
         * waiting in the queue (if any).
         * @param {number} key - id of the snackbar we want to remove
         * @param {object} event - The event source of the callback
         */


        /**
         * Sets height for a given snackbar
         * @param {number} height - height of snackbar after it's been rendered
         * @param {number} key - id of the snackbar we want to remove
         */

    }]);

    return SnackbarProvider;
}(_react.Component);

SnackbarProvider.propTypes = {
    children: _propTypes2.default.node.isRequired,
    /**
     * Maximum snackbars that can be stacked on top of one another.
     */
    dense: _propTypes2.default.bool,
    maxSnack: _propTypes2.default.number,
    preventDuplicate: _propTypes2.default.bool,
    onClose: _propTypes2.default.func,
    onExited: _propTypes2.default.func
};

SnackbarProvider.defaultProps = {
    maxSnack: 3,
    dense: false,
    preventDuplicate: false,
    onClose: undefined,
    onExited: undefined
};

exports.default = SnackbarProvider;