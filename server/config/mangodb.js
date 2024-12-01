
import mongoose from "mongoose";



const ConnectDB = async () => {
    try {
       
       await   mongoose.connect("mongodb://aasiyomaxmedapdi:f4tbzgf1rCTPsYzc@<hostname>/?ssl=true&replicaSet=atlas-q914yl-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0")
        .then(() => {
            console.log("Connected to MongoDB");
        }) .catch((error) => {
            console.log("Error: ", error);
        });
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}


export default ConnectDB;