import express from "express";
import { loadStudentHome ,loadRegisterStudent,registerStudent,loadStudentLogin,loginStudent,loadStudentDashboard,loadStudentProfile,
    editProfile,loadEditProfile

} from "../controllers/studentController"; 

const router = express.Router();

router.get("/", loadStudentHome);

router.get("/register", loadRegisterStudent);
router.post("/register", registerStudent);

router.get("/login", loadStudentLogin);
router.post("/login", loginStudent);

router.get("/dashboard",loadStudentDashboard);

router.get("/profile",loadStudentProfile)

router.get("/profile/edit",loadEditProfile);
router.post("/profile/edit",editProfile);



export default router;



