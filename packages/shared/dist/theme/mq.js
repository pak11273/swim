"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var sizes = {
    xs: 360,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1824,
};
exports.mq = Object.keys(sizes).reduce(function (acc, label) {
    acc[label] = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    @media (max-width: ", "px) {\n      ", ";\n    }\n  "], ["\n    @media (max-width: ", "px) {\n      ", ";\n    }\n  "])), sizes[label], styled_components_1.css.apply(void 0, args));
    };
    return acc;
}, {});
var templateObject_1;
//# sourceMappingURL=mq.js.map