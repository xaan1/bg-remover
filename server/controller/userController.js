

import { Webhook } from "svix";
import User from "../model/userModel.js";

export const  clerkWebhook = async (req, res) => {

  
    try {





        const webhook = new Webhook(
            "whsec_UnZk3ssoXdYqJmxJ8FK49SSbdM85VDNT"
        );
            

        webhook.verify(JSON.stringify(req.body) ,{
            headers: req.headers,
             "svix-id" : req.headers['svix-id'],
             'svix-timestamp' :  req.headers['svix-timestamp'],
             'svix-signature' :  req.headers['svix-signature'],

        });
       


        const { date , type } = req.body;


        switch (type) {
            case "user.created": {
                const userData = {
                    clerkId: data.id,
                    email: data.email_addresses[0],
                    photo: data.image_url,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    creditBalance: data.creditBalance
                }

                await User.create(userData)
                res.json({})
                console.log("User created on " + date);
                break;
            }
                
                case "user.updated": {

                    const userData = {
                  
                        email: data.email_addresses[0],
                        photo: data.image_url,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        creditBalance: data.creditBalance
                    }


                    await  User.findOneAndUpdate({clerkId: data.id}, userData)

                    res.json({})

                console.log("User updated on " + date);
                break;
            }


            case "user.deleted": {

                await User.findOneAndDelete({clerk : date.id})

                console.log("User deleted on " + date);
                break;
            }
        
            default:
                break;
        }


        console.log("Webhook verified");

    }  catch(e){
        console,log(e , "errror in webhook")
        return res.status(400).json({message: "Webhook not verified" ,success : false})
    }
}