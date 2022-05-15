"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authChecker = void 0;
const authChecker = ({ context: { student } }, roles) => {
    if (!student) {
        return false;
    }
    return student.roles.some(role => roles.includes(role));
};
exports.authChecker = authChecker;
