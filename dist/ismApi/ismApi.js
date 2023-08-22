"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsmApp = void 0;
const express_1 = __importDefault(require("express"));
const RegisterismAPI_1 = require("../controller/ismgameApi/RegisterismAPI");
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../db/config"));
const ItesmDataRegisterism_1 = require("../controller/itemsData/ItesmDataRegisterism");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const cors_1 = __importDefault(require("cors"));
const secret = 'TokenLogin';
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
exports.IsmApp = app;
const itemsData = (0, ItesmDataRegisterism_1.itemregisterismData)();
app.post('/login', async (req, res) => {
    const { phone, password } = req.body;
    if (!phone || !password) {
        return res.status(400).json({ error: 'กรุณากรอกข้อมูลให้ครบ' });
    }
    try {
        // ค้นหาผู้ใช้จากหมายเลขโทรศัพท์
        const userQuery = 'SELECT * FROM usergameOn WHERE phone = ? LIMIT 1';
        config_1.default.query(userQuery, [phone], async (error, results) => {
            if (error) {
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            // ถ้าไม่พบผู้ใช้ในฐานข้อมูล
            if (!Array.isArray(results) || results.length === 0) {
                return res.status(404).json({ error: 'User not found' });
            }
            // ตรวจสอบชนิดข้อมูลที่คืนกลับมาจากฐานข้อมูล
            const user = results[0];
            // เปรียบเทียบรหัสผ่าน
            const isPasswordValid = await bcrypt_1.default.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ error: 'รหัสผ่านไม่ถูกต้อง' });
            }
            // สร้าง accessToken ด้วย jsonwebToken
            const accessToken = jsonwebtoken_1.default.sign({ phone: user.phone }, secret);
            // ดึงข้อมูลทั้งหมดของผู้ใช้ที่มีหมายเลขโทรศัพท์เดียวกัน
            const allUserDataQuery = 'SELECT * FROM usergameOn WHERE phone = ?';
            config_1.default.query(allUserDataQuery, [phone], (userDataError, userDataResults) => {
                if (userDataError) {
                    return res.status(500).json({ error: 'Internal Server Error' });
                }
                const allUserData = userDataResults;
                return res.json({
                    accessToken,
                    status: 'ok',
                    message: 'success',
                    user: allUserData,
                });
            });
        });
    }
    catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.post('/register', async (req, res) => {
    try {
        const RegisterresponseApi = await (0, RegisterismAPI_1.RegisterapiIsm)();
        const registerDataApi = RegisterresponseApi;
        const Dataitems = registerDataApi;
        const { phone, password, bank_number, bank_name, first_name, last_name, recommend, bonus, } = req.body;
        // เช็คว่าข้อมูลที่ส่งมาครบทุก field หรือไม่
        if (!phone ||
            !password ||
            !bank_number ||
            !bank_name ||
            !first_name ||
            !last_name ||
            !recommend ||
            bonus === undefined) {
            return res.status(400).json({ error: 'ข้อมูลไม่ครบถ้วน' });
        }
        const ReqBodyData = {
            userGaming: Dataitems.data.username,
            passwordGaming: `GameAa112233`,
            status: true,
            credit: 0,
            id_game: Dataitems.data.id,
        };
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const sql = 'INSERT INTO usergameOn (phone, password, bank_number, bank_name, first_name, last_name, recommend, bonus, userGaming, passwordGaming, status, credit, id_game ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [
            phone,
            hashedPassword,
            bank_number,
            bank_name,
            first_name,
            last_name,
            recommend,
            bonus,
            ReqBodyData.userGaming,
            ReqBodyData.passwordGaming,
            ReqBodyData.status,
            ReqBodyData.credit,
            ReqBodyData.id_game,
        ];
        const checkUserData = 'SELECT * FROM usergameOn WHERE phone = ? OR userGaming = ? OR (first_name = ? AND last_name = ?) OR (bank_number = ? AND bank_name = ?)';
        config_1.default.query(checkUserData, [
            phone,
            ReqBodyData.userGaming,
            first_name,
            last_name,
            bank_number,
            bank_name,
        ], (checkError, checkResults) => {
            if (checkError) {
                console.log(checkError);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            else {
                if (Array.isArray(checkResults) && checkResults.length > 0) {
                    return res.status(300).json({ error: 'มียูสเซอร์อยู่แล้ว' });
                }
                else {
                    config_1.default.query(sql, values, (error, results) => {
                        if (error) {
                            console.log(error);
                            return res.status(500).json({ error: 'Internal Server Error' });
                        }
                        else {
                            const Datarespone = ReqBodyData;
                            return res.json({
                                message: 'สมัครเรียบร้อย',
                                status: 200,
                                data: Datarespone,
                            });
                        }
                    });
                }
            }
        });
    }
    catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.default = app;
//# sourceMappingURL=ismApi.js.map