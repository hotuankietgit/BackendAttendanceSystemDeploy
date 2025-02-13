"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_config_1 = __importDefault(require("./src/config/db.config"));
require("reflect-metadata");
const body_parser_1 = __importDefault(require("body-parser"));
const StudentRouter_1 = __importDefault(require("./src/routes/StudentRouter"));
const TestRouter_1 = __importDefault(require("./src/routes/TestRouter"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const TeacherRouter_1 = __importDefault(require("./src/routes/TeacherRouter"));
const cors_1 = __importDefault(require("cors"));
const TokenRouter_1 = __importDefault(require("./src/routes/TokenRouter"));
const TestAPIRouter_1 = __importDefault(require("./src/routes/TestAPIRouter"));
const AdminRouter_1 = __importDefault(require("./src/routes/AdminRouter"));
require("dotenv/config");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
(0, db_config_1.default)();
app.use((0, express_fileupload_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/admin", AdminRouter_1.default);
app.use("/api/student", StudentRouter_1.default);
app.use("/api/teacher", TeacherRouter_1.default);
app.use("/api/token", TokenRouter_1.default);
app.use("/test", TestRouter_1.default);
app.use("/test/api", TestAPIRouter_1.default);
app.listen(process.env.PORT, () => {
    console.log("Hello");
});
