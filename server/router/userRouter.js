
import express from "express"
import { clerkWebhook } from "../controller/userController.js"



const userRouter = express.Router()



userRouter.post("/webhook"  , clerkWebhook)


export default userRouter