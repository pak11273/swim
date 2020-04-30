"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transitions = {
    cubic: function (time) {
        return "all " + time + " cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    },
    cubic2: function (time) {
        return "all " + time + " cubic-bezier(.215,.61,.355,1)";
    },
    cubic3: function (time) {
        return "all " + time + " cubic-bezier(.86,0,.07,1)";
    },
    ease: function (time) {
        return "all " + time + " ease-in-out";
    },
};
//# sourceMappingURL=transitions.js.map