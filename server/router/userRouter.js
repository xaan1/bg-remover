
import express from "express"
import { clerkWebhook, userCreditBalance } from "../controller/userController.js"
import { authUser } from "../middlweres/Auth.js"



const userRouter = express.Router()



userRouter.post("/webhook"  , clerkWebhook)


userRouter.get("/credit" ,  authUser  , userCreditBalance)


export default userRouter