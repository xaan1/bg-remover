
import jwt from "jsonwebtoken"



export const authUser = async (req, res, next) => {
  try {
    
    const {token} = req.headers;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }



    const decoded_token = jwt.decode(token);

    console.log(decoded_token , "decoded_token")


    req.body.clerkId = decoded_token.clerkId;

    console.log(req.body.clerkId , "req.body.clerkId xaaan ")






    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
}