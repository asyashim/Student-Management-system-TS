import express from "express";

import {
    getDashboard,
    getStudents,
    getStudent,
    getAddStudent,
    createStudent,
    searchStudents,
    deleteStudent,
    getEditStudent,
    updateStudent,
} from "../controllers/adminController";

const router = express.Router();

router.get("/dashboard", getDashboard);

router.get("/students", getStudents);

router.get("/students/add", getAddStudent);

router.post("/students", createStudent);

// Search MUST come before /:id
router.get("/students/search", searchStudents);

// View student MUST come after search
router.get("/students/:id", getStudent);

router.post("/students/:id/delete", deleteStudent);

router.get("/students/:id/edit", getEditStudent);   // show edit form
router.post("/students/:id/edit", updateStudent);   // save changes



export default router;