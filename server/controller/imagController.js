

// 

import fs from "fs"
import FormData from "form-data"
import axios from "axios"
import User from "../model/userModel.js";


export const removeImagBG = async (req, res) => {
    try {
        
        const { clerkId } = req.body;
        console.log(req.body.clerkId, "req.body oo laga helay");

        console.log(clerkId, "clerkId oo laga helay req.body");
    
        // Haddii clerkId aan laga helin, diid
        if (!clerkId) {
          return res.status(400).json({ message: "clerkId not provided" });
        }
        const user = await User.findOne({clerkId});
        console.log(user , "user")

        if (!user) return res.status(404).json({ message: "User not found" });
        if (user.creditBalance === 0)
            return res.status(400).json({ success: false, message: "No credit balance", creditBalance: user.creditBalance });


        if (!req.file) {
            return res.status(400).json({ success: false, message: "No file uploaded" });
          }
        console.log(req.file.path, "req.fil path" );
        const imgPath = req.file.path;
        const imgFile = fs.createReadStream(imgPath);

        const form = new FormData();
        form.append("image_file", imgFile);

        const { data } = await axios.post("https://clipdrop-api.co/remove-background/v1", form, {
            headers: {
                ...form.getHeaders(),
                "x-api-key": "dc4ef1f0ac2011dffd8df82bf1135e7a3b01ebd3eae0ac1f66992c3aca45c7f01259d8e1737949625ff082b68bad8951"

            },
            responseType: "arraybuffer"
        });
      
        const base64 = Buffer.from(data, "binary").toString("base64");
        const resultingImg = `data:${req.file.mimetype};base64,${base64}`;

        await User.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 });

        res.status(200).json({ success: true, message: "Image background removed successfully", resultingImg, creditBalance: user.creditBalance - 1 });
    } catch (error) {
        console.error(error , "error");
        res.status(500).json({ success: false, message: error.message });
    }
};