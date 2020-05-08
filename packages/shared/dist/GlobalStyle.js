"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var polished_1 = require("polished");
var styled_normalize_1 = __importDefault(require("styled-normalize"));
exports.GlobalStyle = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n  ", "\n\n  html, body, * {\n    box-sizing: border-box;\n    border: none;\n    margin: 0;\n    outline: none;\n    padding: 0;\n    background: ", ";\n    font-size: 16px;\n    /* font-family: 'Oxygen', sans-serif; */\n    font-family: 'Jose fin', sans-serif;\n    font-family: 'Source Sans Pro', sans-serif;\n  }\n\n  h1,h2,h3,h4,h5,h6 {\n    background: transparent;\n    line-height: 0;\n    color: ", ";\n  }\n\n  h1 {\n    font-size: 6rem;\n    line-height: 6rem;\n  }\n  h2 {\n    font-size: 5rem;\n    line-height: 5rem;\n  }\n  h3 {\n    font-size: 4.5rem;\n    line-height: 4.5rem;\n  }\n  h4 {\n    font-size: 4rem;\n    line-height: 4rem;\n  }\n  h5 {\n    font-size: 3.5rem;\n    line-height: 3.5rem;\n  }\n  h6 {\n    font-size: 3rem;\n    line-height: 3rem;\n  }\n\n  p {\n    background: transparent;\n    line-height: 1rem;\n  }\n"], ["\n\n  ", "\n\n  html, body, * {\n    box-sizing: border-box;\n    border: none;\n    margin: 0;\n    outline: none;\n    padding: 0;\n    background: ", ";\n    font-size: 16px;\n    /* font-family: 'Oxygen', sans-serif; */\n    font-family: 'Jose fin', sans-serif;\n    font-family: 'Source Sans Pro', sans-serif;\n  }\n\n  h1,h2,h3,h4,h5,h6 {\n    background: transparent;\n    line-height: 0;\n    color: ", ";\n  }\n\n  h1 {\n    font-size: 6rem;\n    line-height: 6rem;\n  }\n  h2 {\n    font-size: 5rem;\n    line-height: 5rem;\n  }\n  h3 {\n    font-size: 4.5rem;\n    line-height: 4.5rem;\n  }\n  h4 {\n    font-size: 4rem;\n    line-height: 4rem;\n  }\n  h5 {\n    font-size: 3.5rem;\n    line-height: 3.5rem;\n  }\n  h6 {\n    font-size: 3rem;\n    line-height: 3rem;\n  }\n\n  p {\n    background: transparent;\n    line-height: 1rem;\n  }\n"])), styled_normalize_1.default, function (props) { return props.backgroundColor || "transparent"; }, function (props) { return polished_1.lighten("0.7", props.theme.colors.gray); });
var templateObject_1;
//# sourceMappingURL=GlobalStyle.js.map