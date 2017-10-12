"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");
var Hello = /** @class */ (function (_super) {
    __extends(Hello, _super);
    function Hello(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    Hello.prototype.render = function () {
        var self = this;
        return React.createElement("h1", null,
            "Hello from",
            this.props.compiler,
            "  andwewew !",
            this.props.framework,
            " ");
    };
    return Hello;
}(React.Component));
ReactDOM.render(React.createElement(Hello, { compiler: "1", framework: "2" }), document.querySelectorAll('#app')[0]);
