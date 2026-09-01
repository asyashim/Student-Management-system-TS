import mongoose from "mongoose";

const connectDB = async():Promise<void>=>{
    try{
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("Mongodb connected successfully")

    }catch(error){
        console.log("Mongodb connection failed: ",error);

        process.exit(1)
    }

}

    export default connectDB;
