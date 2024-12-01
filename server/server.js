
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import userRouter from "./router/userRouter.js"


const app = express()




app.use(cors())

app.use(express.json())



app.get("/", (req, res) => {
    res.send("Welcome to Clerk API")
})


mongoose.connect("mongodb+srv://aasiyomaxmedapdi:f4tbzgf1rCTPsYzc@cluster0.ewjni.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to MongoDB");
    }) .catch((error) => {
        console.log("Error: ", error);
    });




    // routes


    // "whsec_UnZk3ssoXdYqJmxJ8FK49SSbdM85VDNT"   =   waaaye


    app.use("/api/users", userRouter)




app.listen(3000, () => {
    console.log("Server is running on port 3000")
})