import { app } from "./app";
import mongoose from "mongoose";
import "dotenv/config";

const port = process.env.port;
const mongodb_connection_string = process.env.mongodb_connection_string;

const server = async () => {
    try {
        console.log("Connecting to Mongodb...");
        await mongoose.connect(mongodb_connection_string as string);
        console.log("Connected");
    } catch (error) {
        console.log("There is an error in connecting to mongoDb");
        console.error(error);
    }

    app.listen(port, () => {
        console.log(`Server running on port ${port}. To close the port, press Ctrl + C.`);
    });
};

server();
