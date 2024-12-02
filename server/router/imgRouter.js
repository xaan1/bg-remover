

import express from "express"
import upload from "../middlweres/muler.js"
import { removeImagBG } from "../controller/imagController.js"
import { authUser } from "../middlweres/Auth.js"



const imgRouter = express.Router()





imgRouter.post("/remove_imagBg", upload.single('image') ,     authUser, removeImagBG )

imgRouter.get("/credit" ,  authUser  , (req, res) => {
    // console.log("clerkId eaaaaye" , req.body.clerkId)

    res.json({success : true})

})


export default imgRouter