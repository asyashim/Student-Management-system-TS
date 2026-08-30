"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StudentManager {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    getAllStudents() {
        return this.students;
    }
}
exports.default = StudentManager;
