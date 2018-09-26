(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('bem-react-core'), require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'bem-react-core', 'react'], factory) :
    (factory((global['components-base'] = {}),global.BemReactCore,global.React));
}(this, (function (exports,bemReactCore,React) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    }

    var Typo = (function (_super) {
        __extends(Typo, _super);
        function Typo() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.block = 'Typo';
            return _this;
        }
        Typo.prototype.tag = function () {
            return 'span';
        };
        Typo.prototype.mods = function () {
            var size = this.props.size;
            return {
                size: size
            };
        };
        Typo.defaultProps = {
            size: 'text'
        };
        return Typo;
    }(bemReactCore.Block));

    var Progress = (function (_super) {
        __extends(Progress, _super);
        function Progress() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.block = 'Progress';
            return _this;
        }
        Progress.prototype.mix = function () {
            var center = this.props.center;
            if (!center)
                return;
            return {
                block: 'Typo',
                mods: {
                    size: 'text'
                }
            };
        };
        Progress.prototype.mods = function () {
            var _a = this.props, center = _a.center, waiting = _a.waiting, loading = _a.loading;
            return { center: center, waiting: waiting, loaded: !loading };
        };
        Progress.prototype.content = function () {
            var label = this.props.label;
            return label;
        };
        Progress.defaultProps = {
            label: 'Loading',
            center: false,
            waiting: false,
            loading: true
        };
        return Progress;
    }(bemReactCore.Block));

    var Divider = (function (_super) {
        __extends(Divider, _super);
        function Divider() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.block = 'Divider';
            return _this;
        }
        return Divider;
    }(bemReactCore.Block));

    var AbstractControl = (function (_super) {
        __extends(AbstractControl, _super);
        function AbstractControl() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.onTouchStart = function (e) {
                _this.setState({ pressed: true });
                if (_this.props.onPress) {
                    _this.props.onPress(e);
                }
            };
            _this.onMouseDown = function (e) {
                _this.setState({ pressed: true });
                if (_this.props.onPress) {
                    _this.props.onPress(e);
                }
            };
            _this.onMouseUp = function (e) {
                _this.setState({ pressed: false });
                if (_this.props.onRelease) {
                    _this.props.onRelease(e);
                }
            };
            _this.onMouseEnter = function (e) {
                _this.setState({
                    hovered: true
                });
                if (_this.props.onMouseEnter) {
                    _this.props.onMouseEnter(e);
                }
            };
            _this.onMouseLeave = function (e) {
                _this.setState({
                    hovered: false
                });
                if (_this.state.pressed) {
                    _this.setState({ pressed: false });
                }
                if (_this.props.onMouseLeave) {
                    _this.props.onMouseLeave(e);
                }
            };
            _this.onFocus = function (e) {
                _this.setState({
                    focused: true
                });
                if (_this.props.onFocus) {
                    _this.props.onFocus(e);
                }
            };
            _this.onBlur = function (e) {
                _this.setState({
                    focused: false
                });
                if (_this.props.onBlur) {
                    _this.props.onBlur(e);
                }
            };
            return _this;
        }
        return AbstractControl;
    }(React.Component));
    var withControl = function (Component) { var _a; return _a = (function (_super) {
            __extends(Control, _super);
            function Control() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.state = {
                    pressed: false,
                    focused: false,
                    hovered: false
                };
                return _this;
            }
            Control.prototype.render = function () {
                var _a = this, onTouchStart = _a.onTouchStart, onMouseDown = _a.onMouseDown, onMouseUp = _a.onMouseUp, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave, onFocus = _a.onFocus, onBlur = _a.onBlur;
                var _b = this.state, pressed = _b.pressed, hovered = _b.hovered, focused = _b.focused;
                return (React.createElement(Component, __assign({ onTouchStart: onTouchStart, onMouseDown: onMouseDown, onMouseUp: onMouseUp, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, onFocus: onFocus, onBlur: onBlur, pressed: pressed, hovered: hovered, focused: focused }, this.props), this.props.children));
            };
            return Control;
        }(AbstractControl)),
        _a.defaultProps = Component.defaultProps,
        _a; };
    function withControlAttrs(Component) {
        return (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.mods = function () {
                var rest = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    rest[_i] = arguments[_i];
                }
                var _a = this.props, pressed = _a.pressed, hovered = _a.hovered, focused = _a.focused;
                return __assign({}, _super.prototype.mods.apply(this, rest), { pressed: pressed,
                    hovered: hovered,
                    focused: focused });
            };
            class_1.prototype.elemMods = function () {
                var rest = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    rest[_i] = arguments[_i];
                }
                var _a = this.props, pressed = _a.pressed, hovered = _a.hovered, focused = _a.focused;
                return __assign({}, _super.prototype.elemMods.apply(this, rest), { pressed: pressed,
                    hovered: hovered,
                    focused: focused });
            };
            class_1.prototype.attrs = function () {
                var rest = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    rest[_i] = arguments[_i];
                }
                var _a = this.props, onTouchStart = _a.onTouchStart, onMouseDown = _a.onMouseDown, onMouseUp = _a.onMouseUp, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave, onFocus = _a.onFocus, onBlur = _a.onBlur, onKeyDown = _a.onKeyDown, onKeyUp = _a.onKeyUp;
                return __assign({}, _super.prototype.attrs.apply(this, rest), { tabIndex: 0, onTouchStart: onTouchStart,
                    onMouseDown: onMouseDown,
                    onMouseUp: onMouseUp,
                    onMouseEnter: onMouseEnter,
                    onMouseLeave: onMouseLeave,
                    onFocus: onFocus,
                    onBlur: onBlur,
                    onKeyDown: onKeyDown,
                    onKeyUp: onKeyUp });
            };
            return class_1;
        }(Component));
    }

    var ButtonType;
    (function (ButtonType) {
        ButtonType["normal"] = "normal";
        ButtonType["accent"] = "accent";
    })(ButtonType || (ButtonType = {}));
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.block = 'Button';
            return _this;
        }
        Button.prototype.mix = function () {
            return {
                block: 'Typo',
                mods: {
                    size: 'text'
                }
            };
        };
        Button.prototype.mods = function () {
            var _a = this.props, type = _a.type, maxWidth = _a.maxWidth;
            return {
                type: type,
                maxWidth: maxWidth
            };
        };
        Button.prototype.content = function () {
            var label = this.props.label;
            return label;
        };
        Button.defaultProps = {
            label: 'Button',
            type: ButtonType.normal,
            maxWidth: true
        };
        return Button;
    }(bemReactCore.Block));
    var Button$1 = withControl(withControlAttrs(Button));

    var Title = (function (_super) {
        __extends(Title, _super);
        function Title() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.block = 'ListItem';
            _this.elem = 'Title';
            return _this;
        }
        Title.prototype.mix = function () {
            return {
                block: 'Typo',
                mods: {
                    size: 'text'
                }
            };
        };
        return Title;
    }(bemReactCore.Elem));

    var Subtitle = (function (_super) {
        __extends(Subtitle, _super);
        function Subtitle() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.block = 'ListItem';
            _this.elem = 'Subtitle';
            return _this;
        }
        Subtitle.prototype.mix = function () {
            return {
                block: 'Typo',
                mods: {
                    size: 'hint'
                }
            };
        };
        return Subtitle;
    }(bemReactCore.Elem));

    var Icon = (function (_super) {
        __extends(Icon, _super);
        function Icon() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.block = 'Icon';
            return _this;
        }
        Icon.prototype.mods = function () {
            var name = this.props.name;
            return {
                name: name
            };
        };
        Icon.prototype.style = function (_a) {
            var name = _a.name, color = _a.color, colorConst = _a.colorConst;
            return {
                backgroundColor: colorConst ? "var(" + colorConst + ")" : color
            };
        };
        return Icon;
    }(bemReactCore.Block));

    var ListItem = (function (_super) {
        __extends(ListItem, _super);
        function ListItem() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.block = 'ListItem';
            return _this;
        }
        ListItem.prototype.mods = function () {
            var _a = this.props, double = _a.double, navigation = _a.navigation, disabled = _a.disabled, subtitle = _a.subtitle;
            return {
                double: double || !!subtitle,
                navigation: navigation,
                disabled: disabled
            };
        };
        ListItem.prototype.content = function () {
            var _a = this.props, lead = _a.lead, trail = _a.trail, title = _a.title, subtitle = _a.subtitle;
            var navigation = this.props.navigation;
            return (React.createElement(Content, null,
                lead && React.createElement(Lead, null, lead),
                React.createElement(Text, null,
                    React.createElement(Title, null, title),
                    subtitle && React.createElement(Subtitle, null, subtitle)),
                (trail || navigation) && (React.createElement(Trail, null,
                    trail,
                    navigation && React.createElement(Icon, { name: "ChevronSmall" })))));
        };
        ListItem.defaultProps = {
            title: 'Title',
            subtitle: '',
            disabled: false,
            navigation: false
        };
        return ListItem;
    }(bemReactCore.Block));
    var ListItem$1 = withControl(withControlAttrs(ListItem));
    var Content = function (_a) {
        var children = _a.children;
        return (React.createElement(bemReactCore.Bem, { block: "ListItem", elem: "Content" }, children));
    };
    var Lead = function (_a) {
        var children = _a.children;
        return (React.createElement(bemReactCore.Bem, { block: "ListItem", elem: "Lead" }, children));
    };
    var Text = function (_a) {
        var children = _a.children;
        return (React.createElement(bemReactCore.Bem, { block: "ListItem", elem: "Text" }, children));
    };
    var Trail = function (_a) {
        var children = _a.children;
        return (React.createElement(bemReactCore.Bem, { block: "ListItem", elem: "Trail" }, children));
    };

    var Detail = (function (_super) {
        __extends(Detail, _super);
        function Detail() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.block = 'ListItem';
            _this.elem = 'Detail';
            return _this;
        }
        Detail.prototype.elemMods = function () {
            var _a = this.props, accent = _a.accent, subtitle = _a.subtitle;
            return {
                accent: accent || !!subtitle
            };
        };
        Detail.prototype.content = function () {
            var _a = this.props, title = _a.title, subtitle = _a.subtitle;
            return (React.createElement(React.Fragment, null,
                React.createElement(bemReactCore.Bem, { block: "ListItem", elem: "DetailTitle", mix: {
                        block: 'Typo',
                        mods: {
                            size: 'text'
                        }
                    } }, title),
                subtitle && (React.createElement(bemReactCore.Bem, { block: "ListItem", elem: "DetailSubtitle", mix: {
                        block: 'Typo',
                        mods: {
                            size: 'hint'
                        }
                    } }, subtitle))));
        };
        Detail.defaultProps = {
            title: 'Detail',
            accent: false
        };
        return Detail;
    }(bemReactCore.Elem));

    var ListItemDetail = (function (_super) {
        __extends(ListItemDetail, _super);
        function ListItemDetail() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ListItemDetail.prototype.render = function () {
            var _a = this.props, detail = _a.detail, subdetail = _a.subdetail, accent = _a.accent, rest = __rest(_a, ["detail", "subdetail", "accent"]);
            return (React.createElement(ListItem$1, __assign({}, rest, { double: !!subdetail, trail: React.createElement(Detail, { title: detail, subtitle: subdetail, accent: accent }) })));
        };
        ListItemDetail.defaultProps = __assign({}, ListItem$1.defaultProps, { detail: 'Detail', subdetail: '', accent: false });
        return ListItemDetail;
    }(React.Component));

    var Switch = (function (_super) {
        __extends(Switch, _super);
        function Switch() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.block = 'Switch';
            return _this;
        }
        Switch.prototype.mods = function () {
            var _a = this.props, checked = _a.checked, disabled = _a.disabled;
            return { checked: checked, disabled: disabled };
        };
        Switch.prototype.content = function () {
            return React.createElement(bemReactCore.Bem, { elem: "Toggle" });
        };
        Switch.defaultProps = {
            checked: false,
            disabled: false
        };
        return Switch;
    }(bemReactCore.Block));
    var Switch$1 = withControl(withControlAttrs(Switch));

    var ListItemSwitch = (function (_super) {
        __extends(ListItemSwitch, _super);
        function ListItemSwitch() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ListItemSwitch.prototype.render = function () {
            var _a = this.props, checked = _a.checked, rest = __rest(_a, ["checked"]);
            return (React.createElement(ListItem$1, __assign({}, rest, { trail: React.createElement(Switch$1, { checked: checked, disabled: this.props.disabled }) })));
        };
        ListItemSwitch.defaultProps = __assign({}, ListItem$1.defaultProps, { checked: false, disabled: false });
        return ListItemSwitch;
    }(React.Component));

    var Theme = (function (_super) {
        __extends(Theme, _super);
        function Theme() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.block = 'Theme';
            return _this;
        }
        Theme.prototype.mods = function () {
            var name = this.props.name;
            return {
                name: name
            };
        };
        return Theme;
    }(bemReactCore.Block));

    var PositionType;
    (function (PositionType) {
        PositionType["Left"] = "left";
        PositionType["Right"] = "right";
    })(PositionType || (PositionType = {}));
    var Action = (function (_super) {
        __extends(Action, _super);
        function Action() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.block = 'AppBar';
            _this.elem = 'Action';
            return _this;
        }
        Action.prototype.elemMods = function () {
            var position = this.props.position;
            return {
                position: position
            };
        };
        Action.prototype.content = function () {
            var _a = this.props, icon = _a.icon, label = _a.label;
            return (React.createElement(React.Fragment, null,
                icon && React.createElement(Icon, { name: icon }),
                label && React.createElement(Label, null, label)));
        };
        return Action;
    }(bemReactCore.Elem));
    var Action$1 = withControl(withControlAttrs(Action));
    var Label = function (_a) {
        var children = _a.children;
        return (React.createElement(bemReactCore.Bem, { block: "AppBar", elem: "Label", mix: { block: 'Typo', mods: { size: 'hint' } } }, children));
    };

    var AppBar = (function (_super) {
        __extends(AppBar, _super);
        function AppBar() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.block = 'AppBar';
            return _this;
        }
        AppBar.prototype.style = function () {
            return {
                height: AppBar.height + 'px'
            };
        };
        AppBar.prototype.mix = function () {
            return {
                block: 'Typo',
                mods: {
                    size: 'text'
                }
            };
        };
        AppBar.prototype.mods = function () {
            var theme = this.props.theme;
            return {
                theme: theme
            };
        };
        AppBar.prototype.content = function () {
            var _a = this.props, title = _a.title, subtitle = _a.subtitle, actionLeft = _a.actionLeft, actionRight = _a.actionRight, actionRight2 = _a.actionRight2;
            return (React.createElement(React.Fragment, null,
                React.createElement(Left, null, actionLeft && (React.createElement(Action$1, { position: PositionType.Left, icon: actionLeft.icon, label: actionLeft.label }))),
                React.createElement(Body, null,
                    React.createElement(Title$1, null, title),
                    subtitle && React.createElement(Subtitle$1, null, subtitle)),
                React.createElement(Right, null,
                    actionRight && (React.createElement(Action$1, { position: PositionType.Right, icon: actionRight.icon, label: actionRight.label })),
                    actionRight2 && (React.createElement(Action$1, { position: PositionType.Right, icon: actionRight2.icon, label: actionRight2.label })))));
        };
        AppBar.height = 64;
        AppBar.width = 360;
        return AppBar;
    }(bemReactCore.Block));
    var Body = function (_a) {
        var children = _a.children;
        return (React.createElement(bemReactCore.Bem, { block: "AppBar", elem: "Body" }, children));
    };
    var Left = function (_a) {
        var children = _a.children;
        return (React.createElement(bemReactCore.Bem, { block: "AppBar", elem: "Left" }, children));
    };
    var Right = function (_a) {
        var children = _a.children;
        return (React.createElement(bemReactCore.Bem, { block: "AppBar", elem: "Right" }, children));
    };
    var Title$1 = function (_a) {
        var children = _a.children;
        return (React.createElement(bemReactCore.Bem, { block: "AppBar", elem: "Title", mix: { block: 'Typo', mods: { size: 'text' } } }, children));
    };
    var Subtitle$1 = function (_a) {
        var children = _a.children;
        return (React.createElement(bemReactCore.Bem, { block: "AppBar", elem: "Subtitle", mix: { block: 'Typo', mods: { size: 'hint' } } }, children));
    };

    var GroupTitle = (function (_super) {
        __extends(GroupTitle, _super);
        function GroupTitle() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.block = 'List';
            _this.elem = 'GroupTitle';
            return _this;
        }
        GroupTitle.prototype.content = function () {
            return this.props.title;
        };
        GroupTitle.defaultProps = {
            title: 'Group'
        };
        return GroupTitle;
    }(bemReactCore.Elem));

    var List = (function (_super) {
        __extends(List, _super);
        function List() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.block = 'List';
            return _this;
        }
        List.prototype.mods = function () {
            return {};
        };
        List.prototype.content = function () {
            return 'List';
        };
        return List;
    }(bemReactCore.Block));

    exports.Typo = Typo;
    exports.Progress = Progress;
    exports.Divider = Divider;
    exports.Button = Button$1;
    exports.ListItem = ListItem$1;
    exports.ListItemDetail = ListItemDetail;
    exports.ListItemSwitch = ListItemSwitch;
    exports.Theme = Theme;
    exports.AppBar = AppBar;
    exports.Icon = Icon;
    exports.Switch = Switch$1;
    exports.List = List;
    exports.ListGroupTitle = GroupTitle;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCIuLi9zcmMvVHlwby9UeXBvLnRzeCIsIi4uL3NyYy9Qcm9ncmVzcy9Qcm9ncmVzcy50c3giLCIuLi9zcmMvRGl2aWRlci9EaXZpZGVyLnRzeCIsIi4uL3NyYy9Db250cm9sL0NvbnRyb2wudHN4IiwiLi4vc3JjL0J1dHRvbi9CdXR0b24udHN4IiwiLi4vc3JjL0xpc3RJdGVtL1RpdGxlL0xpc3RJdGVtLVRpdGxlLnRzeCIsIi4uL3NyYy9MaXN0SXRlbS9TdWJ0aXRsZS9MaXN0SXRlbS1TdWJ0aXRsZS50c3giLCIuLi9zcmMvSWNvbi9JY29uLnRzeCIsIi4uL3NyYy9MaXN0SXRlbS9MaXN0SXRlbS50c3giLCIuLi9zcmMvTGlzdEl0ZW0vRGV0YWlsL0xpc3RJdGVtLURldGFpbC50c3giLCIuLi9zcmMvTGlzdEl0ZW0vTGlzdEl0ZW1EZXRhaWwudHN4IiwiLi4vc3JjL1N3aXRjaC9Td2l0Y2gudHN4IiwiLi4vc3JjL0xpc3RJdGVtL0xpc3RJdGVtU3dpdGNoLnRzeCIsIi4uL3NyYy9UaGVtZS9UaGVtZS50c3giLCIuLi9zcmMvQXBwQmFyL0FjdGlvbi9BcHBCYXItQWN0aW9uLnRzeCIsIi4uL3NyYy9BcHBCYXIvQXBwQmFyLnRzeCIsIi4uL3NyYy9MaXN0L0dyb3VwVGl0bGUvTGlzdC1Hcm91cFRpdGxlLnRzeCIsIi4uL3NyYy9MaXN0L0xpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQmxvY2sgfSBmcm9tICdiZW0tcmVhY3QtY29yZSdcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHNpemU6IHN0cmluZ1xufVxuXG5jbGFzcyBUeXBvIGV4dGVuZHMgQmxvY2s8UHJvcHM+IHtcbiAgcHJvcHM6IFByb3BzXG5cbiAgYmxvY2sgPSAnVHlwbydcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNpemU6ICd0ZXh0J1xuICB9XG5cbiAgdGFnKCkge1xuICAgIHJldHVybiAnc3BhbidcbiAgfVxuICBtb2RzKCkge1xuICAgIGNvbnN0IHsgc2l6ZSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiB7XG4gICAgICBzaXplXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFR5cG9cbmV4cG9ydCB7IFR5cG8gfVxuIiwiaW1wb3J0IHsgQmxvY2sgfSBmcm9tICdiZW0tcmVhY3QtY29yZSdcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIGxhYmVsOiBzdHJpbmdcbiAgY2VudGVyOiBib29sZWFuXG4gIHdhaXRpbmc6IGJvb2xlYW5cbiAgbG9hZGluZzogYm9vbGVhblxufVxuXG5jbGFzcyBQcm9ncmVzcyBleHRlbmRzIEJsb2NrPFByb3BzPiB7XG4gIHByb3BzOiBQcm9wc1xuXG4gIGJsb2NrID0gJ1Byb2dyZXNzJ1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbGFiZWw6ICdMb2FkaW5nJyxcbiAgICBjZW50ZXI6IGZhbHNlLFxuICAgIHdhaXRpbmc6IGZhbHNlLFxuICAgIGxvYWRpbmc6IHRydWVcbiAgfVxuXG4gIG1peCgpIHtcbiAgICBjb25zdCB7IGNlbnRlciB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICghY2VudGVyKSByZXR1cm5cblxuICAgIHJldHVybiB7XG4gICAgICBibG9jazogJ1R5cG8nLFxuICAgICAgbW9kczoge1xuICAgICAgICBzaXplOiAndGV4dCdcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbW9kcygpIHtcbiAgICBjb25zdCB7IGNlbnRlciwgd2FpdGluZywgbG9hZGluZyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiB7IGNlbnRlciwgd2FpdGluZywgbG9hZGVkOiAhbG9hZGluZyB9XG4gIH1cbiAgY29udGVudCgpIHtcbiAgICBjb25zdCB7IGxhYmVsIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIGxhYmVsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NcbiIsImltcG9ydCB7IEJsb2NrIH0gZnJvbSAnYmVtLXJlYWN0LWNvcmUnXG5cbmNsYXNzIERpdmlkZXIgZXh0ZW5kcyBCbG9jayB7XG4gIGJsb2NrID0gJ0RpdmlkZXInXG59XG5cbmV4cG9ydCBkZWZhdWx0IERpdmlkZXJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQmxvY2sgfSBmcm9tICdiZW0tcmVhY3QtY29yZSdcblxuZXhwb3J0IGludGVyZmFjZSBBYnN0cmFjdFByb3BzIHtcbiAgb25QcmVzcz86IEZ1bmN0aW9uXG4gIG9uUmVsZWFzZT86IEZ1bmN0aW9uXG4gIG9uTW91c2VFbnRlcj86IEZ1bmN0aW9uXG4gIG9uTW91c2VMZWF2ZT86IEZ1bmN0aW9uXG4gIG9uRm9jdXM/OiBGdW5jdGlvblxuICBvbkJsdXI/OiBGdW5jdGlvblxuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFic3RyYWN0U3RhdGUge1xuICBwcmVzc2VkOiBib29sZWFuXG4gIGhvdmVyZWQ6IGJvb2xlYW5cbiAgZm9jdXNlZDogYm9vbGVhblxufVxuXG5jbGFzcyBBYnN0cmFjdENvbnRyb2wgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8QWJzdHJhY3RQcm9wcywgQWJzdHJhY3RTdGF0ZT4ge1xuICBwcm9wczogQWJzdHJhY3RQcm9wc1xuICBzdGF0ZTogQWJzdHJhY3RTdGF0ZVxuXG4gIG9uVG91Y2hTdGFydCA9IChlOiBhbnkpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJlc3NlZDogdHJ1ZSB9KVxuICAgIGlmICh0aGlzLnByb3BzLm9uUHJlc3MpIHtcbiAgICAgIHRoaXMucHJvcHMub25QcmVzcyhlKVxuICAgIH1cbiAgfVxuICBvbk1vdXNlRG93biA9IChlOiBhbnkpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJlc3NlZDogdHJ1ZSB9KVxuICAgIGlmICh0aGlzLnByb3BzLm9uUHJlc3MpIHtcbiAgICAgIHRoaXMucHJvcHMub25QcmVzcyhlKVxuICAgIH1cbiAgfVxuICBvbk1vdXNlVXAgPSAoZTogYW55KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByZXNzZWQ6IGZhbHNlIH0pXG4gICAgaWYgKHRoaXMucHJvcHMub25SZWxlYXNlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uUmVsZWFzZShlKVxuICAgIH1cbiAgfVxuICBvbk1vdXNlRW50ZXIgPSAoZTogYW55KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBob3ZlcmVkOiB0cnVlXG4gICAgfSlcblxuICAgIGlmICh0aGlzLnByb3BzLm9uTW91c2VFbnRlcikge1xuICAgICAgdGhpcy5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gIH1cbiAgb25Nb3VzZUxlYXZlID0gKGU6IGFueSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaG92ZXJlZDogZmFsc2VcbiAgICB9KVxuICAgIGlmICh0aGlzLnN0YXRlLnByZXNzZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmVzc2VkOiBmYWxzZSB9KVxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vbk1vdXNlTGVhdmUpIHtcbiAgICAgIHRoaXMucHJvcHMub25Nb3VzZUxlYXZlKGUpXG4gICAgfVxuICB9XG4gIG9uRm9jdXMgPSAoZTogYW55KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmb2N1c2VkOiB0cnVlXG4gICAgfSlcblxuICAgIGlmICh0aGlzLnByb3BzLm9uRm9jdXMpIHtcbiAgICAgIHRoaXMucHJvcHMub25Gb2N1cyhlKVxuICAgIH1cbiAgfVxuICBvbkJsdXIgPSAoZTogYW55KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmb2N1c2VkOiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKGUpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHdpdGhDb250cm9sID0gPFAgZXh0ZW5kcyBDb250cm9sQXR0cnNQcm9wcz4oXG4gIENvbXBvbmVudDogUmVhY3QuQ29tcG9uZW50VHlwZTxDb250cm9sQXR0cnNQcm9wcyAmIFA+XG4pID0+XG4gIGNsYXNzIENvbnRyb2wgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2wge1xuICAgIHN0YXRlOiBBYnN0cmFjdFN0YXRlID0ge1xuICAgICAgcHJlc3NlZDogZmFsc2UsXG4gICAgICBmb2N1c2VkOiBmYWxzZSxcbiAgICAgIGhvdmVyZWQ6IGZhbHNlXG4gICAgfVxuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IENvbXBvbmVudC5kZWZhdWx0UHJvcHNcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgb25Ub3VjaFN0YXJ0LFxuICAgICAgICBvbk1vdXNlRG93bixcbiAgICAgICAgb25Nb3VzZVVwLFxuICAgICAgICBvbk1vdXNlRW50ZXIsXG4gICAgICAgIG9uTW91c2VMZWF2ZSxcbiAgICAgICAgb25Gb2N1cyxcbiAgICAgICAgb25CbHVyXG4gICAgICB9ID0gdGhpc1xuICAgICAgY29uc3QgeyBwcmVzc2VkLCBob3ZlcmVkLCBmb2N1c2VkIH0gPSB0aGlzLnN0YXRlXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q29tcG9uZW50XG4gICAgICAgICAgb25Ub3VjaFN0YXJ0PXtvblRvdWNoU3RhcnR9XG4gICAgICAgICAgb25Nb3VzZURvd249e29uTW91c2VEb3dufVxuICAgICAgICAgIG9uTW91c2VVcD17b25Nb3VzZVVwfVxuICAgICAgICAgIG9uTW91c2VFbnRlcj17b25Nb3VzZUVudGVyfVxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfVxuICAgICAgICAgIG9uRm9jdXM9e29uRm9jdXN9XG4gICAgICAgICAgb25CbHVyPXtvbkJsdXJ9XG4gICAgICAgICAgcHJlc3NlZD17cHJlc3NlZH1cbiAgICAgICAgICBob3ZlcmVkPXtob3ZlcmVkfVxuICAgICAgICAgIGZvY3VzZWQ9e2ZvY3VzZWR9XG4gICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9Db21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuICB9XG5cbmludGVyZmFjZSBCZW1SZWFjdENvcmVEZWNsYXJhdGlvbjxQLCBTID0ge30+IGV4dGVuZHMgQmxvY2s8UCwgUz4ge1xuICBibG9jazogc3RyaW5nXG59XG5cbmludGVyZmFjZSBCZW1SZWFjdENvcmVDbGFzczxQLCBTID0ge30+IHtcbiAgbmV3IChwcm9wczogUCwgY29udGV4dD86IGFueSk6IEJlbVJlYWN0Q29yZURlY2xhcmF0aW9uPFAsIFM+XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29udHJvbEF0dHJzUHJvcHMge1xuICBwcmVzc2VkPzogYm9vbGVhblxuICBob3ZlcmVkPzogYm9vbGVhblxuICBmb2N1c2VkPzogYm9vbGVhblxuICBvblRvdWNoU3RhcnQ/OiBhbnlcbiAgb25Nb3VzZURvd24/OiBhbnlcbiAgb25Nb3VzZVVwPzogYW55XG4gIG9uTW91c2VFbnRlcj86IGFueVxuICBvbk1vdXNlTGVhdmU/OiBhbnlcbiAgb25Gb2N1cz86IGFueVxuICBvbkJsdXI/OiBhbnlcbiAgb25LZXlEb3duPzogYW55XG4gIG9uS2V5VXA/OiBhbnlcbn1cblxuZnVuY3Rpb24gd2l0aENvbnRyb2xBdHRyczxQPihcbiAgQ29tcG9uZW50OiBCZW1SZWFjdENvcmVDbGFzczxDb250cm9sQXR0cnNQcm9wcyAmIFA+XG4pIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBtb2RzKC4uLnJlc3Q6IEFycmF5PGFueT4pIHtcbiAgICAgIGNvbnN0IHsgcHJlc3NlZCwgaG92ZXJlZCwgZm9jdXNlZCB9ID0gdGhpcy5wcm9wc1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3VwZXIubW9kcyguLi5yZXN0KSxcbiAgICAgICAgcHJlc3NlZCxcbiAgICAgICAgaG92ZXJlZCxcbiAgICAgICAgZm9jdXNlZFxuICAgICAgfVxuICAgIH1cbiAgICBlbGVtTW9kcyguLi5yZXN0OiBBcnJheTxhbnk+KSB7XG4gICAgICBjb25zdCB7IHByZXNzZWQsIGhvdmVyZWQsIGZvY3VzZWQgfSA9IHRoaXMucHJvcHNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN1cGVyLmVsZW1Nb2RzKC4uLnJlc3QpLFxuICAgICAgICBwcmVzc2VkLFxuICAgICAgICBob3ZlcmVkLFxuICAgICAgICBmb2N1c2VkXG4gICAgICB9XG4gICAgfVxuICAgIGF0dHJzKC4uLnJlc3Q6IEFycmF5PGFueT4pIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgb25Ub3VjaFN0YXJ0LFxuICAgICAgICBvbk1vdXNlRG93bixcbiAgICAgICAgb25Nb3VzZVVwLFxuICAgICAgICBvbk1vdXNlRW50ZXIsXG4gICAgICAgIG9uTW91c2VMZWF2ZSxcbiAgICAgICAgb25Gb2N1cyxcbiAgICAgICAgb25CbHVyLFxuICAgICAgICBvbktleURvd24sXG4gICAgICAgIG9uS2V5VXBcbiAgICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN1cGVyLmF0dHJzKC4uLnJlc3QpLFxuICAgICAgICB0YWJJbmRleDogMCxcbiAgICAgICAgb25Ub3VjaFN0YXJ0LFxuICAgICAgICBvbk1vdXNlRG93bixcbiAgICAgICAgb25Nb3VzZVVwLFxuICAgICAgICBvbk1vdXNlRW50ZXIsXG4gICAgICAgIG9uTW91c2VMZWF2ZSxcbiAgICAgICAgb25Gb2N1cyxcbiAgICAgICAgb25CbHVyLFxuICAgICAgICBvbktleURvd24sXG4gICAgICAgIG9uS2V5VXBcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJzdHJhY3RDb250cm9sXG5leHBvcnQgeyB3aXRoQ29udHJvbCwgd2l0aENvbnRyb2xBdHRycyB9XG4iLCJpbXBvcnQgeyBCbG9jayB9IGZyb20gJ2JlbS1yZWFjdC1jb3JlJ1xuaW1wb3J0IHsgd2l0aENvbnRyb2wsIHdpdGhDb250cm9sQXR0cnMgfSBmcm9tICcuLi9Db250cm9sL0NvbnRyb2wnXG5cbmV4cG9ydCBlbnVtIEJ1dHRvblR5cGUge1xuICBub3JtYWwgPSAnbm9ybWFsJyxcbiAgYWNjZW50ID0gJ2FjY2VudCdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIGxhYmVsOiBzdHJpbmdcbiAgdHlwZTogQnV0dG9uVHlwZVxuICBtYXhXaWR0aDogYm9vbGVhblxufVxuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBCbG9jazxQcm9wcz4ge1xuICBwcm9wczogUHJvcHNcblxuICBibG9jayA9ICdCdXR0b24nXG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBsYWJlbDogJ0J1dHRvbicsXG4gICAgdHlwZTogQnV0dG9uVHlwZS5ub3JtYWwsXG4gICAgbWF4V2lkdGg6IHRydWVcbiAgfVxuXG4gIG1peCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYmxvY2s6ICdUeXBvJyxcbiAgICAgIG1vZHM6IHtcbiAgICAgICAgc2l6ZTogJ3RleHQnXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW9kcygpIHtcbiAgICBjb25zdCB7IHR5cGUsIG1heFdpZHRoIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGUsXG4gICAgICBtYXhXaWR0aFxuICAgIH1cbiAgfVxuXG4gIGNvbnRlbnQoKSB7XG4gICAgY29uc3QgeyBsYWJlbCB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiBsYWJlbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhDb250cm9sKHdpdGhDb250cm9sQXR0cnMoQnV0dG9uKSlcbiIsImltcG9ydCB7IEVsZW0gfSBmcm9tICdiZW0tcmVhY3QtY29yZSdcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2hpbGRyZW46IHN0cmluZ1xufVxuXG5jbGFzcyBUaXRsZSBleHRlbmRzIEVsZW08UHJvcHM+IHtcbiAgcHJvcHM6IFByb3BzXG5cbiAgYmxvY2sgPSAnTGlzdEl0ZW0nXG4gIGVsZW0gPSAnVGl0bGUnXG5cbiAgbWl4KCkge1xuICAgIHJldHVybiB7XG4gICAgICBibG9jazogJ1R5cG8nLFxuICAgICAgbW9kczoge1xuICAgICAgICBzaXplOiAndGV4dCdcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGl0bGVcbiIsImltcG9ydCB7IEVsZW0gfSBmcm9tICdiZW0tcmVhY3QtY29yZSdcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2hpbGRyZW46IHN0cmluZ1xufVxuXG5jbGFzcyBTdWJ0aXRsZSBleHRlbmRzIEVsZW08UHJvcHM+IHtcbiAgcHJvcHM6IFByb3BzXG5cbiAgYmxvY2sgPSAnTGlzdEl0ZW0nXG4gIGVsZW0gPSAnU3VidGl0bGUnXG5cbiAgbWl4KCkge1xuICAgIHJldHVybiB7XG4gICAgICBibG9jazogJ1R5cG8nLFxuICAgICAgbW9kczoge1xuICAgICAgICBzaXplOiAnaGludCdcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3VidGl0bGVcbiIsImltcG9ydCB7IEJsb2NrIH0gZnJvbSAnYmVtLXJlYWN0LWNvcmUnXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBuYW1lOiBzdHJpbmdcbiAgY29sb3I/OiBzdHJpbmdcbiAgY29sb3JDb25zdD86IHN0cmluZ1xufVxuXG5jbGFzcyBJY29uIGV4dGVuZHMgQmxvY2s8UHJvcHM+IHtcbiAgcHJvcHM6IFByb3BzXG5cbiAgYmxvY2sgPSAnSWNvbidcblxuICBtb2RzKCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lXG4gICAgfVxuICB9XG4gIHN0eWxlKHsgbmFtZSwgY29sb3IsIGNvbG9yQ29uc3QgfTogUHJvcHMpIHtcbiAgICAvLyBjb25zdCB1cmwgPSBgdXJsKC4vYXNzZXRzLyR7bmFtZX0uc3ZnKWBcblxuICAgIHJldHVybiB7XG4gICAgICAvLyBtYXNrSW1hZ2U6IHVybCxcbiAgICAgIC8vIFdlYmtpdE1hc2tJbWFnZTogdXJsLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvckNvbnN0ID8gYHZhcigke2NvbG9yQ29uc3R9KWAgOiBjb2xvclxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJY29uXG5leHBvcnQgeyBJY29uIH1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQmVtLCBCbG9jayB9IGZyb20gJ2JlbS1yZWFjdC1jb3JlJ1xuaW1wb3J0IHsgd2l0aENvbnRyb2wsIHdpdGhDb250cm9sQXR0cnMgfSBmcm9tICcuLi9Db250cm9sL0NvbnRyb2wnXG5cbmltcG9ydCBUaXRsZSBmcm9tICcuL1RpdGxlL0xpc3RJdGVtLVRpdGxlJ1xuaW1wb3J0IFN1YnRpdGxlIGZyb20gJy4vU3VidGl0bGUvTGlzdEl0ZW0tU3VidGl0bGUnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uL0ljb24nXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGxlYWQ/OiBSZWFjdC5SZWFjdE5vZGVcbiAgdHJhaWw/OiBSZWFjdC5SZWFjdE5vZGVcbiAgdGl0bGU6IHN0cmluZ1xuICBzdWJ0aXRsZT86IHN0cmluZ1xuICBuYXZpZ2F0aW9uOiBib29sZWFuXG4gIGRpc2FibGVkOiBib29sZWFuXG4gIGRvdWJsZTogYm9vbGVhblxufVxuXG5jbGFzcyBMaXN0SXRlbSBleHRlbmRzIEJsb2NrPFByb3BzPiB7XG4gIHByb3BzOiBQcm9wc1xuXG4gIGJsb2NrID0gJ0xpc3RJdGVtJ1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdGl0bGU6ICdUaXRsZScsXG4gICAgc3VidGl0bGU6ICcnLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBuYXZpZ2F0aW9uOiBmYWxzZVxuICB9XG5cbiAgbW9kcygpIHtcbiAgICBjb25zdCB7IGRvdWJsZSwgbmF2aWdhdGlvbiwgZGlzYWJsZWQsIHN1YnRpdGxlIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIHtcbiAgICAgIGRvdWJsZTogZG91YmxlIHx8ICEhc3VidGl0bGUsXG4gICAgICBuYXZpZ2F0aW9uLFxuICAgICAgZGlzYWJsZWRcbiAgICB9XG4gIH1cbiAgY29udGVudCgpIHtcbiAgICBjb25zdCB7IGxlYWQsIHRyYWlsLCB0aXRsZSwgc3VidGl0bGUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IG5hdmlnYXRpb24gfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRlbnQ+XG4gICAgICAgIHtsZWFkICYmIDxMZWFkPntsZWFkfTwvTGVhZD59XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUaXRsZT57dGl0bGV9PC9UaXRsZT5cbiAgICAgICAgICB7c3VidGl0bGUgJiYgPFN1YnRpdGxlPntzdWJ0aXRsZX08L1N1YnRpdGxlPn1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICB7KHRyYWlsIHx8IG5hdmlnYXRpb24pICYmIChcbiAgICAgICAgICA8VHJhaWw+XG4gICAgICAgICAgICB7dHJhaWx9XG4gICAgICAgICAgICB7bmF2aWdhdGlvbiAmJiA8SWNvbiBuYW1lPVwiQ2hldnJvblNtYWxsXCIgLz59XG4gICAgICAgICAgPC9UcmFpbD5cbiAgICAgICAgKX1cbiAgICAgIDwvQ29udGVudD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aENvbnRyb2wod2l0aENvbnRyb2xBdHRycyhMaXN0SXRlbSkpXG5leHBvcnQgeyBQcm9wcyBhcyBMaXN0SXRlbVByb3BzIH1cblxuLyoqXG4gKiBJbmxpbmVcbiAqL1xuY29uc3QgQ29udGVudCA9ICh7IGNoaWxkcmVuIH06IGFueSkgPT4gKFxuICA8QmVtIGJsb2NrPVwiTGlzdEl0ZW1cIiBlbGVtPVwiQ29udGVudFwiPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9CZW0+XG4pXG5cbmNvbnN0IExlYWQgPSAoeyBjaGlsZHJlbiB9OiBhbnkpID0+IChcbiAgPEJlbSBibG9jaz1cIkxpc3RJdGVtXCIgZWxlbT1cIkxlYWRcIj5cbiAgICB7Y2hpbGRyZW59XG4gIDwvQmVtPlxuKVxuXG5jb25zdCBUZXh0ID0gKHsgY2hpbGRyZW4gfTogYW55KSA9PiAoXG4gIDxCZW0gYmxvY2s9XCJMaXN0SXRlbVwiIGVsZW09XCJUZXh0XCI+XG4gICAge2NoaWxkcmVufVxuICA8L0JlbT5cbilcblxuY29uc3QgVHJhaWwgPSAoeyBjaGlsZHJlbiB9OiBhbnkpID0+IChcbiAgPEJlbSBibG9jaz1cIkxpc3RJdGVtXCIgZWxlbT1cIlRyYWlsXCI+XG4gICAge2NoaWxkcmVufVxuICA8L0JlbT5cbilcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQmVtLCBFbGVtIH0gZnJvbSAnYmVtLXJlYWN0LWNvcmUnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgc3VidGl0bGU/OiBzdHJpbmdcbiAgYWNjZW50OiBib29sZWFuXG59XG5cbmNsYXNzIERldGFpbCBleHRlbmRzIEVsZW08UHJvcHM+IHtcbiAgcHJvcHM6IFByb3BzXG5cbiAgYmxvY2sgPSAnTGlzdEl0ZW0nXG4gIGVsZW0gPSAnRGV0YWlsJ1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdGl0bGU6ICdEZXRhaWwnLFxuICAgIGFjY2VudDogZmFsc2VcbiAgfVxuXG4gIGVsZW1Nb2RzKCkge1xuICAgIGNvbnN0IHsgYWNjZW50LCBzdWJ0aXRsZSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiB7XG4gICAgICBhY2NlbnQ6IGFjY2VudCB8fCAhIXN1YnRpdGxlXG4gICAgfVxuICB9XG4gIGNvbnRlbnQoKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgc3VidGl0bGUgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8QmVtXG4gICAgICAgICAgYmxvY2s9XCJMaXN0SXRlbVwiXG4gICAgICAgICAgZWxlbT1cIkRldGFpbFRpdGxlXCJcbiAgICAgICAgICBtaXg9e3tcbiAgICAgICAgICAgIGJsb2NrOiAnVHlwbycsXG4gICAgICAgICAgICBtb2RzOiB7XG4gICAgICAgICAgICAgIHNpemU6ICd0ZXh0J1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvQmVtPlxuICAgICAgICB7c3VidGl0bGUgJiYgKFxuICAgICAgICAgIDxCZW1cbiAgICAgICAgICAgIGJsb2NrPVwiTGlzdEl0ZW1cIlxuICAgICAgICAgICAgZWxlbT1cIkRldGFpbFN1YnRpdGxlXCJcbiAgICAgICAgICAgIG1peD17e1xuICAgICAgICAgICAgICBibG9jazogJ1R5cG8nLFxuICAgICAgICAgICAgICBtb2RzOiB7XG4gICAgICAgICAgICAgICAgc2l6ZTogJ2hpbnQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3N1YnRpdGxlfVxuICAgICAgICAgIDwvQmVtPlxuICAgICAgICApfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaXN0SXRlbSwgeyBMaXN0SXRlbVByb3BzIH0gZnJvbSAnLi9MaXN0SXRlbSdcbmltcG9ydCBEZXRhaWwgZnJvbSAnLi9EZXRhaWwvTGlzdEl0ZW0tRGV0YWlsJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgTGlzdEl0ZW1Qcm9wcyB7XG4gIGRldGFpbD86IHN0cmluZ1xuICBzdWJkZXRhaWw/OiBzdHJpbmdcbiAgYWNjZW50OiBib29sZWFuXG59XG5cbmNsYXNzIExpc3RJdGVtRGV0YWlsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIHByb3BzOiBQcm9wc1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgLi4uTGlzdEl0ZW0uZGVmYXVsdFByb3BzLFxuICAgIGRldGFpbDogJ0RldGFpbCcsXG4gICAgc3ViZGV0YWlsOiAnJyxcbiAgICBhY2NlbnQ6IGZhbHNlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkZXRhaWwsIHN1YmRldGFpbCwgYWNjZW50LCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxMaXN0SXRlbVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgZG91YmxlPXshIXN1YmRldGFpbH1cbiAgICAgICAgdHJhaWw9ezxEZXRhaWwgdGl0bGU9e2RldGFpbH0gc3VidGl0bGU9e3N1YmRldGFpbH0gYWNjZW50PXthY2NlbnR9IC8+fVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdEl0ZW1EZXRhaWxcbiIsImltcG9ydCB7IEJlbSwgQmxvY2sgfSBmcm9tICdiZW0tcmVhY3QtY29yZSdcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgd2l0aENvbnRyb2wsIHdpdGhDb250cm9sQXR0cnMgfSBmcm9tICcuLi9Db250cm9sL0NvbnRyb2wnXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBjaGVja2VkOiBib29sZWFuXG4gIGRpc2FibGVkOiBib29sZWFuXG59XG5cbmNsYXNzIFN3aXRjaCBleHRlbmRzIEJsb2NrPFByb3BzPiB7XG4gIHByb3BzOiBQcm9wc1xuXG4gIGJsb2NrID0gJ1N3aXRjaCdcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIGRpc2FibGVkOiBmYWxzZVxuICB9XG5cbiAgbW9kcygpIHtcbiAgICBjb25zdCB7IGNoZWNrZWQsIGRpc2FibGVkIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIHsgY2hlY2tlZCwgZGlzYWJsZWQgfVxuICB9XG4gIGNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIDxCZW0gZWxlbT1cIlRvZ2dsZVwiIC8+XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aENvbnRyb2wod2l0aENvbnRyb2xBdHRycyhTd2l0Y2gpKVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGlzdEl0ZW0sIHsgTGlzdEl0ZW1Qcm9wcyB9IGZyb20gJy4vTGlzdEl0ZW0nXG5pbXBvcnQgU3dpdGNoIGZyb20gJy4uL1N3aXRjaC9Td2l0Y2gnXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBMaXN0SXRlbVByb3BzIHtcbiAgY2hlY2tlZDogYm9vbGVhblxuICBkaXNhYmxlZDogYm9vbGVhblxufVxuXG5jbGFzcyBMaXN0SXRlbVN3aXRjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xuICBwcm9wczogUHJvcHNcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIC4uLkxpc3RJdGVtLmRlZmF1bHRQcm9wcyxcbiAgICBjaGVja2VkOiBmYWxzZSxcbiAgICBkaXNhYmxlZDogZmFsc2VcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoZWNrZWQsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPExpc3RJdGVtXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICB0cmFpbD17PFN3aXRjaCBjaGVja2VkPXtjaGVja2VkfSBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH0gLz59XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0SXRlbVN3aXRjaFxuIiwiaW1wb3J0IHsgQmxvY2sgfSBmcm9tICdiZW0tcmVhY3QtY29yZSdcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbmFtZTogc3RyaW5nXG59XG5cbmNsYXNzIFRoZW1lIGV4dGVuZHMgQmxvY2s8UHJvcHM+IHtcbiAgcHJvcHM6IFByb3BzXG5cbiAgYmxvY2sgPSAnVGhlbWUnXG5cbiAgbW9kcygpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCZW0sIEVsZW0gfSBmcm9tICdiZW0tcmVhY3QtY29yZSdcbmltcG9ydCB7IHdpdGhDb250cm9sLCB3aXRoQ29udHJvbEF0dHJzIH0gZnJvbSAnLi4vLi4vQ29udHJvbC9Db250cm9sJ1xuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vSWNvbi9JY29uJ1xuXG5lbnVtIFBvc2l0aW9uVHlwZSB7XG4gIExlZnQgPSAnbGVmdCcsXG4gIFJpZ2h0ID0gJ3JpZ2h0J1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwb3NpdGlvbjogUG9zaXRpb25UeXBlXG4gIGljb24/OiBzdHJpbmdcbiAgbGFiZWw/OiBzdHJpbmdcbn1cblxuY2xhc3MgQWN0aW9uIGV4dGVuZHMgRWxlbTxQcm9wcz4ge1xuICBibG9jayA9ICdBcHBCYXInXG4gIGVsZW0gPSAnQWN0aW9uJ1xuXG4gIGVsZW1Nb2RzKCkge1xuICAgIGNvbnN0IHsgcG9zaXRpb24gfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb25cbiAgICB9XG4gIH1cbiAgY29udGVudCgpIHtcbiAgICBjb25zdCB7IGljb24sIGxhYmVsIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAge2ljb24gJiYgPEljb24gbmFtZT17aWNvbn0gLz59XG4gICAgICAgIHtsYWJlbCAmJiA8TGFiZWw+e2xhYmVsfTwvTGFiZWw+fVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aENvbnRyb2wod2l0aENvbnRyb2xBdHRycyhBY3Rpb24pKVxuZXhwb3J0IHsgUG9zaXRpb25UeXBlIH1cblxuY29uc3QgTGFiZWwgPSAoeyBjaGlsZHJlbiB9OiBhbnkpID0+IChcbiAgPEJlbVxuICAgIGJsb2NrPVwiQXBwQmFyXCJcbiAgICBlbGVtPVwiTGFiZWxcIlxuICAgIG1peD17eyBibG9jazogJ1R5cG8nLCBtb2RzOiB7IHNpemU6ICdoaW50JyB9IH19XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gIDwvQmVtPlxuKVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCZW0sIEJsb2NrIH0gZnJvbSAnYmVtLXJlYWN0LWNvcmUnXG5pbXBvcnQgQWN0aW9uLCB7IFBvc2l0aW9uVHlwZSB9IGZyb20gJy4vQWN0aW9uL0FwcEJhci1BY3Rpb24nXG5cbnR5cGUgQWN0aW9uVHlwZSA9IHtcbiAgbGFiZWw/OiBzdHJpbmdcbiAgaWNvbj86IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgdGhlbWU6IHN0cmluZ1xuICB0aXRsZTogc3RyaW5nXG4gIHN1YnRpdGxlPzogc3RyaW5nXG4gIGFjdGlvbkxlZnQ/OiBBY3Rpb25UeXBlXG4gIGFjdGlvblJpZ2h0PzogQWN0aW9uVHlwZVxuICBhY3Rpb25SaWdodDI/OiBBY3Rpb25UeXBlXG4gIGhlaWdodDogbnVtYmVyXG59XG5cbmNsYXNzIEFwcEJhciBleHRlbmRzIEJsb2NrPFByb3BzPiB7XG4gIGJsb2NrID0gJ0FwcEJhcidcblxuICBzdGF0aWMgaGVpZ2h0OiBudW1iZXIgPSA2NFxuICBzdGF0aWMgd2lkdGg6IG51bWJlciA9IDM2MFxuICBzdHlsZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVpZ2h0OiBBcHBCYXIuaGVpZ2h0ICsgJ3B4J1xuICAgIH1cbiAgfVxuXG4gIG1peCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYmxvY2s6ICdUeXBvJyxcbiAgICAgIG1vZHM6IHtcbiAgICAgICAgc2l6ZTogJ3RleHQnXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW9kcygpIHtcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIHtcbiAgICAgIHRoZW1lXG4gICAgfVxuICB9XG5cbiAgY29udGVudCgpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aXRsZSxcbiAgICAgIHN1YnRpdGxlLFxuICAgICAgYWN0aW9uTGVmdCxcbiAgICAgIGFjdGlvblJpZ2h0LFxuICAgICAgYWN0aW9uUmlnaHQyXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxMZWZ0PlxuICAgICAgICAgIHthY3Rpb25MZWZ0ICYmIChcbiAgICAgICAgICAgIDxBY3Rpb25cbiAgICAgICAgICAgICAgcG9zaXRpb249e1Bvc2l0aW9uVHlwZS5MZWZ0fVxuICAgICAgICAgICAgICBpY29uPXthY3Rpb25MZWZ0Lmljb259XG4gICAgICAgICAgICAgIGxhYmVsPXthY3Rpb25MZWZ0LmxhYmVsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0xlZnQ+XG4gICAgICAgIDxCb2R5PlxuICAgICAgICAgIDxUaXRsZT57dGl0bGV9PC9UaXRsZT5cbiAgICAgICAgICB7c3VidGl0bGUgJiYgPFN1YnRpdGxlPntzdWJ0aXRsZX08L1N1YnRpdGxlPn1cbiAgICAgICAgPC9Cb2R5PlxuICAgICAgICA8UmlnaHQ+XG4gICAgICAgICAge2FjdGlvblJpZ2h0ICYmIChcbiAgICAgICAgICAgIDxBY3Rpb25cbiAgICAgICAgICAgICAgcG9zaXRpb249e1Bvc2l0aW9uVHlwZS5SaWdodH1cbiAgICAgICAgICAgICAgaWNvbj17YWN0aW9uUmlnaHQuaWNvbn1cbiAgICAgICAgICAgICAgbGFiZWw9e2FjdGlvblJpZ2h0LmxhYmVsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHthY3Rpb25SaWdodDIgJiYgKFxuICAgICAgICAgICAgPEFjdGlvblxuICAgICAgICAgICAgICBwb3NpdGlvbj17UG9zaXRpb25UeXBlLlJpZ2h0fVxuICAgICAgICAgICAgICBpY29uPXthY3Rpb25SaWdodDIuaWNvbn1cbiAgICAgICAgICAgICAgbGFiZWw9e2FjdGlvblJpZ2h0Mi5sYWJlbH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9SaWdodD5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcEJhclxuZXhwb3J0IHsgQXBwQmFyLCBBY3Rpb25UeXBlIH1cblxuLyoqXG4gKiBJbmxpbmVcbiAqL1xuY29uc3QgQm9keSA9ICh7IGNoaWxkcmVuIH06IGFueSkgPT4gKFxuICA8QmVtIGJsb2NrPVwiQXBwQmFyXCIgZWxlbT1cIkJvZHlcIj5cbiAgICB7Y2hpbGRyZW59XG4gIDwvQmVtPlxuKVxuXG5jb25zdCBMZWZ0ID0gKHsgY2hpbGRyZW4gfTogYW55KSA9PiAoXG4gIDxCZW0gYmxvY2s9XCJBcHBCYXJcIiBlbGVtPVwiTGVmdFwiPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9CZW0+XG4pXG5cbmNvbnN0IFJpZ2h0ID0gKHsgY2hpbGRyZW4gfTogYW55KSA9PiAoXG4gIDxCZW0gYmxvY2s9XCJBcHBCYXJcIiBlbGVtPVwiUmlnaHRcIj5cbiAgICB7Y2hpbGRyZW59XG4gIDwvQmVtPlxuKVxuXG5jb25zdCBUaXRsZSA9ICh7IGNoaWxkcmVuIH06IGFueSkgPT4gKFxuICA8QmVtXG4gICAgYmxvY2s9XCJBcHBCYXJcIlxuICAgIGVsZW09XCJUaXRsZVwiXG4gICAgbWl4PXt7IGJsb2NrOiAnVHlwbycsIG1vZHM6IHsgc2l6ZTogJ3RleHQnIH0gfX1cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9CZW0+XG4pXG5cbmNvbnN0IFN1YnRpdGxlID0gKHsgY2hpbGRyZW4gfTogYW55KSA9PiAoXG4gIDxCZW1cbiAgICBibG9jaz1cIkFwcEJhclwiXG4gICAgZWxlbT1cIlN1YnRpdGxlXCJcbiAgICBtaXg9e3sgYmxvY2s6ICdUeXBvJywgbW9kczogeyBzaXplOiAnaGludCcgfSB9fVxuICA+XG4gICAge2NoaWxkcmVufVxuICA8L0JlbT5cbilcbiIsImltcG9ydCB7IEVsZW0gfSBmcm9tICdiZW0tcmVhY3QtY29yZSdcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmdcbn1cblxuY2xhc3MgR3JvdXBUaXRsZSBleHRlbmRzIEVsZW08UHJvcHM+IHtcbiAgcHJvcHM6IFByb3BzXG5cbiAgYmxvY2sgPSAnTGlzdCdcbiAgZWxlbSA9ICdHcm91cFRpdGxlJ1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdGl0bGU6ICdHcm91cCdcbiAgfVxuXG4gIGNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMudGl0bGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcm91cFRpdGxlXG4iLCJpbXBvcnQgeyBCbG9jayB9IGZyb20gJ2JlbS1yZWFjdC1jb3JlJ1xuXG5pbXBvcnQgR3JvdXBUaXRsZSBmcm9tICcuL0dyb3VwVGl0bGUvTGlzdC1Hcm91cFRpdGxlJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHt9XG5cbmNsYXNzIExpc3QgZXh0ZW5kcyBCbG9jazxQcm9wcz4ge1xuICBwcm9wczogUHJvcHNcblxuICBibG9jayA9ICdMaXN0J1xuXG4gIG1vZHMoKSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cbiAgY29udGVudCgpIHtcbiAgICByZXR1cm4gJ0xpc3QnXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdFxuZXhwb3J0IHsgTGlzdCwgR3JvdXBUaXRsZSBhcyBMaXN0R3JvdXBUaXRsZSB9XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiLCJCbG9jayIsIlJlYWN0LkNvbXBvbmVudCIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCJFbGVtIiwiQmVtIiwiUmVhY3QuRnJhZ21lbnQiLCJMaXN0SXRlbSIsIlN3aXRjaCIsIkFjdGlvbiIsIlRpdGxlIiwiU3VidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBRUE7SUFDQTtJQUNBO0lBQ0E7O0lBRUE7SUFDQTtJQUNBO0lBQ0E7O0lBRUEsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0lBQ25DLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO0lBQ3pDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNwRixRQUFRLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUks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
