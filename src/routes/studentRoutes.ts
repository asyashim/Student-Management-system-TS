import express from "express";
import { createStudent } from "../controllers/studentController";

const router = express.Router();

router.post("/", createStudent);

export default router;