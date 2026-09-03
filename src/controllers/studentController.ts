import { Request, Response } from "express";



export const loadStudentHome = (req: Request, res: Response) => {
    res.render("student/home");
};

