import express from "express";
import { loadStudentHome } from "../controllers/studentController"; 

const router = express.Router();

router.get("/", loadStudentHome);

export default router;



