import mongoose, { Document, Schema } from "mongoose";

interface IStudent extends Document {
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

const Student = mongoose.model<IStudent>("Student", studentSchema);

export default Student;