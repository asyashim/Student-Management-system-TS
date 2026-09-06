import express, { Application } from "express";
import path from "path";
import dotenv from "dotenv";
import connectDB from "./config/database";
import studentRoutes from "./routes/studentRoutes";
import adminRoutes from "./routes/adminRoutes";
import session from "express-session";
import { StringExpression } from "mongoose";

dotenv.config();

const app: Application = express();
app.use(
    session({
        secret: process.env.SESSION_SECRET as string,
        resave: false,
        saveUninitialized: false,
    })
);

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

// Static files
app.use(express.static(path.join(__dirname, "../public")));

// Routes
app.use("/student", studentRoutes);
app.use("/admin", adminRoutes);





const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
