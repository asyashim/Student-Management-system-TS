import { Request, Response } from "express";
import Student from "../models/Student";

// GET /admin/dashboard
export const getDashboard = (req: Request, res: Response): void => {
    res.render("admin/dashboard");
};

// GET /admin/students - list all students
export const getStudents = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const students = await Student.find();
        res.render("admin/students", { students });
    } catch (error) {
        console.log(error);
        res.status(500).send("Failed to fetch students");
    }
};

// GET /admin/students/add - show add student form
export const getAddStudent = (req: Request, res: Response): void => {
    res.render("admin/addStudent");
};

// POST /admin/students - create a new student
export const createStudent = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { name, email, age, course, phone } = req.body;

        await Student.create({
            name,
            email,
            age,
            course,
            phone,
        });

        res.redirect("/admin/students");
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Failed to create student",
        });
    }
};
