import mongoose from "mongoose";

const connectDB = async () => {

    try {

        const connect = await mongoose.connect(`mongodb+srv://ujunwastephenebuka_db_user:Ia4mHbC0NKKIjn6q@nextjs.wtmpctn.mongodb.net/?appName=nextjs`);
        console.log('db connected successfully')

    } catch(error) {
        console.log('Error in connecting to the database', error);
    }
}

export default connectDB;