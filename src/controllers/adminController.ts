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

// GET /admin/students/:id - view single student
export const getStudent = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            res.status(404).send("Student not found");
            return;
        }
        res.render("admin/viewStudent", { student });
    } catch (error) {
        console.log(error);
        res.status(500).send("Failed to fetch student");
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


export const viewStudentDetails=async(
    req:Request,
    res:Response
)=>{
    try{

        const {id} =req.params;

        const student= await Student.findById(id)
        if(!student){
            return res.status(404).send("Student not found")
        }

res.render("student/studentDetails",{student})


        

    }catch(error){
        console.log(error);
        res.status(500).send("Server Error")

    }
}


// GET /admin/students/search - search students
export const searchStudents = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const query = req.query.query as string;

        const students = await Student.find({
            $or: [
                {
                    name: {
                        $regex: query,
                        $options: "i"
                    }
                },
                {
                    email: {
                        $regex: query,
                        $options: "i"
                    }
                },
                {
                    phone: {
                        $regex: query,
                        $options: "i"
                    }
                },
                {
                    course: {
                        $regex: query,
                        $options: "i"
                    }
                }
            ]
        });

        res.render("admin/students", { students });

    } catch (error) {
        console.log(error);
        res.status(500).send("Failed to search students");
    }
};

