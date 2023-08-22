"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterapiIsm = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const LoginismAPI_1 = require("./LoginismAPI");
const ItesmDataRegisterism_1 = require("../itemsData/ItesmDataRegisterism");
const RegisterapiIsm = async () => {
    var _a;
    try {
        const urlApiregisterIsm = `https://ag-api.ismgaming.com/member/accounts/create`;
        const AccessTokenLogin = (await (0, LoginismAPI_1.LoginapiIsm)());
        const accessTokenData = (_a = AccessTokenLogin === null || AccessTokenLogin === void 0 ? void 0 : AccessTokenLogin.data) === null || _a === void 0 ? void 0 : _a.accessToken;
        const itemregister = (0, ItesmDataRegisterism_1.itemregisterismData)();
        const Registerresponse = await (0, node_fetch_1.default)(urlApiregisterIsm, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessTokenData}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(itemregister),
        });
        if (Registerresponse.ok) {
            const RegisterData = await Registerresponse.json();
            return RegisterData;
        }
    }
    catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to get Access Token');
    }
};
exports.RegisterapiIsm = RegisterapiIsm;
//# sourceMappingURL=RegisterismAPI.js.map