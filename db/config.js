"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mysql2_1 = __importDefault(require("mysql2"));
dotenv_1.default.config();
const dbConfig = {
    // Your connection configuration here
    host: "aws.connect.psdb.cloud",
    port: 3306,
    user: "n29vhmtdspifc6259z39",
    database: "ismgame",
    password: "pscale_pw_WZbRt06iKAXHeDFeq4BQS6PjJg8oHwEGQQXomTb34aH",
    ssl: {
        rejectUnauthorized: true,
    },
};
const connection = mysql2_1.default.createConnection(dbConfig); // Use the configuration object
connection.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
        return;
    }
    console.log("Connected to PlanetScale!");
    // Your code here
});
exports.default = connection;
//# sourceMappingURL=config.js.map