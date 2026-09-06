import { Request, Response } from "express";
import Student from "../models/Student";
import bcrypt from "bcrypt";




export const loadStudentHome = (req: Request, res: Response):void => {
    res.render("student/home");
};

export const loadRegisterStudent=(req:Request,res:Response):void=>{
    res.render("student/register")
}

export const registerStudent = async (req: Request, res: Response):Promise<void> => {
    try{
        const {name,email,age,course,phone,password} = req.body;

        const hashedPassword= await bcrypt.hash(password,10);

        const student = new Student({
            name,
            email,
            age,
            course,
            phone,
            password:hashedPassword,
        })

        await student.save()
        console.log(student)


        res.redirect("/student/login")

    }catch(error){

        console.log(error);
        res.status(500).send("Server error")
        res.redirect("/student/home")

    }

}

export const loadStudentLogin=(req:Request,res:Response):void=>{
    res.render("student/login")
}

export const loginStudent= async(req:Request,res:Response):Promise<void>=>{
    try{ 
    
    const {email,password} = req.body;
    const student= await Student.findOne({email})

    if(!student){
        res.status(404).send("Student not found");
        return;
    }

    const isPasswordCorrect = await bcrypt.compare(password,student.password);

    if(!isPasswordCorrect){
        res.status(401).send("Invalid password");
        return;
    }
 req.session.studentId = student._id.toString();

        res.redirect("/student/dashboard");
    
}catch(error){
    console.log(error);
    res.redirect("/")
    //res.status(500).send("Server error")
}
}


export const loadStudentDashboard =async(
    req:Request,
    res:Response
):Promise<void>=>{
    try{

        const studentId = req.session.studentId;
        if(!studentId){
            res.redirect("/student/login");
            return;
        }

        const student = await Student.findById(studentId);

        if(!student){
            res.redirect("/student/login");
            return
        }

        res.render("student/dashboard",{student})

    }catch(error){
        console.log(error);
        res.status(500).send("Server error")
    }
}


export const loadStudentProfile= async(
    req:Request,
    res:Response
):Promise<void>=>{
    try{

        const studentId= req.session.studentId;
        if(!studentId){
            res.redirect("/student/login");
            return;
        }


        const student = await Student.findById(studentId);

        if(!student){
            res.redirect("/student/login");
            return;
        }

        res.render("student/profile",{student});
    }catch(error){
        console.log(error);
        res.status(500).send("Server error");
    }
}

export const loadEditProfile = async(
    req:Request,
    res:Response
):Promise<void>=>{
    try{
         const studentId = req.session.studentId;

        if (!studentId) {
            res.redirect("/student/login");
            return;
        }

        const student = await Student.findById(studentId);

        if (!student) {
            res.redirect("/student/login");
            return;
        }

        res.render("student/editprofile", { student });

    }catch(error){
        console.log(error);
        res.status(500).send("Server error")
    }
}

export const editProfile = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const studentId = req.session.studentId;

        if (!studentId) {
            res.redirect("/student/login");
            return;
        }

        const { name, age, course, phone } = req.body;

        await Student.findByIdAndUpdate(
            studentId,
            {
                name,
                age,
                course,
                phone
            },
            { new: true }
        );

        res.redirect("/student/profile");

    } catch (error) {
        console.log(error);
        res.status(500).send("Server error");
    }
};