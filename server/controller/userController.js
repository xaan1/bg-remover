

import { Webhook } from "svix";
import User from "../model/userModel.js";

export const clerkWebhook = async (req, res) => {
  try {
    const webhook = new Webhook("whsec_UnZk3ssoXdYqJmxJ8FK49SSbdM85VDNT");

    const payload = JSON.stringify(req.body);
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    // Verify the webhook
    webhook.verify(payload, headers);

    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        const userData = {
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          photo: data.image_url,
          firstName: data.first_name,
          lastName: data.last_name,
          creditBalance: data.creditBalance || 0,
        };

        await User.create(userData);
        console.log("User created on " + new Date());
        return res.json({});
      }

      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email_address,
          photo: data.image_url,
          firstName: data.first_name,
          lastName: data.last_name,
          creditBalance: data.creditBalance || 0,
        };

        await User.findOneAndUpdate({ clerkId: data.id }, userData);
        console.log("User updated on " + new Date());
        return res.json({});
      }

      case "user.deleted": {
        await User.findOneAndDelete({ clerkId: data.id });
        console.log("User deleted on " + new Date());
        return res.json({});
      }

      default:
        console.log("Unhandled webhook type: " + type);
        return res.status(200).json({ message: "Unhandled webhook type" });
    }
  } catch (e) {
    console.log(e, "Error in webhook");
    return res.status(400).json({ message: "Webhook not verified", success: false });
  }
};
