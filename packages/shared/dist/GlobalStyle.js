"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
/* color: ${(props) => props.theme.colors.background}; */
exports.GlobalStyle = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  html, body, * {\n    margin: 0;\n    padding: 0;\n    background: ", ";\n  }\n"], ["\n  html, body, * {\n    margin: 0;\n    padding: 0;\n    background: ", ";\n  }\n"])), function (props) { return props.theme.colors.background; });
var templateObject_1;
//# sourceMappingURL=GlobalStyle.js.map