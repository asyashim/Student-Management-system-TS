import { Schema, model } from "mongoose";

interface IStudent {
    name: string;
    email: string;
    age: number;
    course: string;
    phone: string;
}

const studentSchema = new Schema<IStudent>(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        age: {
            type: Number,
            required: true,
        },
        course: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Student = model<IStudent>("Student", studentSchema);

export default Student;
