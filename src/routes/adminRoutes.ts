import express from "express";
import { getDashboard, getStudents, getAddStudent, createStudent } from "../controllers/adminController";

const router = express.Router();

router.get("/dashboard", getDashboard);        // GET  /admin/dashboard
router.get("/students", getStudents);          // GET  /admin/students
router.get("/students/add", getAddStudent);    // GET  /admin/students/add
router.post("/students", createStudent);       // POST /admin/students

export default router;
