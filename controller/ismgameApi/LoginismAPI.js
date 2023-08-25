"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginapiIsm = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const LoginapiIsm = async () => {
    try {
        const urlapilogin = `https://ag-api.ismgaming.com/auth/login`;
        const dataLoginAPI = {
            username: 'hbe3gameon@test',
            password: 'Aa112233',
            currency: 'THB',
            timezone: 7,
        };
        const LoginapiResponse = await (0, node_fetch_1.default)(urlapilogin, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataLoginAPI),
        });
        if (LoginapiResponse.ok) {
            const Loginapi = await LoginapiResponse.json();
            return Loginapi;
        }
        else {
            console.error('Error:', LoginapiResponse.statusText);
            throw new Error('Failed to get Access Token');
        }
    }
    catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to get Access Token');
    }
};
exports.LoginapiIsm = LoginapiIsm;
//# sourceMappingURL=LoginismAPI.js.map