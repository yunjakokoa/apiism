"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ismApi_1 = __importDefault(require("../ismApi/ismApi"));
const router = (0, express_1.Router)();
router.use("/Ismgamecasino", ismApi_1.default);
exports.default = router;
//# sourceMappingURL=IsmRouterApi.js.map