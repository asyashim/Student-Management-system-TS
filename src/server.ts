import express, { Application } from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config()

const app: Application = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
    res.send("Student Management System is Running!");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});