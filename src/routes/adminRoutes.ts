import express from "express";

import {
    getDashboard,
    getStudents,
    getStudent,
    getAddStudent,
    createStudent,
    searchStudents
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

export default router;