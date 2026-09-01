import { Request, Response } from "express";
import Student from "../models/Student";

export const createStudent = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { name, email, age, course, phone } = req.body;

        const student = await Student.create({
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
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Failed to create student",
        });
    }
};