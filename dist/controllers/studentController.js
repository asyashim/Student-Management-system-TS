"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStudent = void 0;
const Student_1 = __importDefault(require("../models/Student"));
const createStudent = async (req, res) => {
    try {
        const { name, email, age, course, phone } = req.body;
        const student = await Student_1.default.create({
            name,
            email,
            age,
            course,
            phone,
        });
        res.status(201).json({
            message: "Student created successfully",
            student,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Failed to create student",
        });
    }
};
exports.createStudent = createStudent;
