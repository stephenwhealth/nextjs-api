import mongoose from "mongoose";

const connectDB = async () => {

    try {

        const connect = await mongoose.connect(process.env.DATABASECONNECTION);
        console.log('db connected successfully')

    } catch(error) {
        console.log('Error in connecting to the database', error);
    }
}

export default connectDB;