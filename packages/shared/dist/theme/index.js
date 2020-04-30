"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = require("./colors");
var transitions_1 = require("./transitions");
var background = __assign({}, colors_1.colors);
exports.theme = {
    colors: colors_1.colors,
    background: background,
    transitions: transitions_1.transitions,
};
//# sourceMappingURL=index.js.map