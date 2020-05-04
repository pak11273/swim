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
var mq_1 = require("./mq");
var transitions_1 = require("./transitions");
var background = __assign({}, colors_1.colors);
exports.theme = {
    breakpoints: ["40em", "52em", "64em"],
    colors: colors_1.colors,
    background: background,
    space: [0, 4, 8, 16, 32, 64, 128, 256],
    transitions: transitions_1.transitions,
    mq: mq_1.mq,
};
//# sourceMappingURL=index.js.map