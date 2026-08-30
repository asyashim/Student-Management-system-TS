"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StudentManager_1 = __importDefault(require("./services/StudentManager"));
const studentManager = new StudentManager_1.default();
studentManager.addStudent({
    id: 1,
    name: "asiya",
    age: 18,
    email: "asya@gmail.com",
    course: "TypeScript"
});
console.log(studentManager.getAllStudents());
