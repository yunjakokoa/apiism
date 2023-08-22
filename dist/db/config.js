"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const connection = mysql2_1.default.createConnection({
    host: "aws.connect.psdb.cloud",
    port: 3306,
    user: "er0ms8k9pea7thtgvye6",
    database: "ismgame",
    password: "pscale_pw_Jr5TbkrZONCq3GY9rKXXpFU65Px6WXEMjeAb6ejRPmj",
    ssl: {
        rejectUnauthorized: true, // ตรวจสอบให้แน่ใจว่าเป็นการเชื่อมต่อปลอดภัย
    },
});
connection.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
        return;
    }
    console.log("คุณสามารถเริ่มใช้งานฐานข้อมูลทำงานได้ที่นี่");
    // คุณสามารถเริ่มใช้งานฐานข้อมูลทำงานได้ที่นี่
});
exports.default = connection;
//# sourceMappingURL=config.js.map