"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestInBase64 = exports.getBoolean = exports.isValidHexColor = void 0;
const axios_1 = __importDefault(require("axios"));
function isValidHexColor(hexColor) {
    return new RegExp(/^([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{4})$/).test(hexColor);
}
exports.isValidHexColor = isValidHexColor;
function getBoolean(str) {
    return str.toLowerCase() === 'true';
}
exports.getBoolean = getBoolean;
async function requestInBase64(url) {
    const response = await axios_1.default.get(url, {
        responseType: 'arraybuffer',
    });
    return Buffer.from(response.data, 'binary').toString('base64');
}
exports.requestInBase64 = requestInBase64;
//# sourceMappingURL=utils.js.map