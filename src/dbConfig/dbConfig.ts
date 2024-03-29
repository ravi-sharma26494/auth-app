import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log('db connection successfull');
        })
        connection.on('error', (error) => {
            console.log('Db connection failed!!!', error);
            process.exit();
        })
    } catch (error) {
        console.log("Something went wrong during database connection:❌");
        console.log(error);
    }
}