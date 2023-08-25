"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const IsmRouterApi_1 = __importDefault(require("./router/IsmRouterApi")); // แทนที่เส้นทางถึงไฟล์ router.ts
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
// ใช้ cors
app.use((0, cors_1.default)());
// เรียกใช้ router
app.use("/api", IsmRouterApi_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map