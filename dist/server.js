"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("./config/database"));
const studentRoutes_1 = __importDefault(require("./routes/studentRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Connect to database
(0, database_1.default)();
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// View engine
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "../views"));
// Static files
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
// Routes
app.use("/students", studentRoutes_1.default);
app.get("/", (req, res) => {
    res.send("Student Management System is Running!");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
