// /controllers/webhooks.js
import { Webhook } from "svix";
import User from "../models/User.js";

export const clerkWebhooks = async (req, res) => {
  try {
    // Get the Svix headers for verification
    const svixId = req.headers["svix-id"];
    const svixTimestamp = req.headers["svix-timestamp"];
    const svixSignature = req.headers["svix-signature"];

    // If there are no headers, error out
    if (!svixId || !svixTimestamp || !svixSignature) {
      console.error("❌ Missing svix headers");
      return res
        .status(400)
        .json({ success: false, message: "Error: Missing svix headers" });
    }

    // Check if webhook secret exists
    if (!process.env.CLERK_WEBHOOK_SECRET) {
      console.error("❌ CLERK_WEBHOOK_SECRET not configured");
      return res.status(500).json({
        success: false,
        message: "Webhook secret not configured",
      });
    }

    // Get the body
    const payload = req.body;
    const body = JSON.stringify(payload);

    // Create a new Svix instance with your secret
    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    let evt;

    // Verify the payload with the headers
    try {
      evt = wh.verify(body, {
        "svix-id": svixId,
        "svix-timestamp": svixTimestamp,
        "svix-signature": svixSignature,
      });
    } catch (err) {
      console.error("❌ Webhook verification failed:", err.message);
      return res
        .status(400)
        .json({ success: false, message: "Webhook verification failed" });
    }

    // Handle the webhook
    const { type, data } = evt;

    console.log(`📨 Webhook received: ${type}`);

    switch (type) {
      case "user.created": {
        try {
          const userData = {
            _id: data.id,
            email: data.email_addresses[0].email_address,
            name:
              data.first_name && data.last_name
                ? `${data.first_name} ${data.last_name}`.trim()
                : data.first_name || data.last_name || "User",
            image: data.image_url || "",
            resume: "",
          };

          const existingUser = await User.findById(data.id);
          if (existingUser) {
            console.log("ℹ️ User already exists:", userData.email);
            return res
              .status(200)
              .json({ success: true, message: "User already exists" });
          }

          await User.create(userData);
          console.log("✅ User created in MongoDB:", userData.email);

          return res.status(200).json({ success: true, message: "User created" });
        } catch (error) {
          console.error("❌ Error creating user:", error.message);
          return res.status(500).json({ success: false, message: error.message });
        }
      }

      case "user.updated": {
        try {
          const userData = {
            email: data.email_addresses[0].email_address,
            name:
              data.first_name && data.last_name
                ? `${data.first_name} ${data.last_name}`.trim()
                : data.first_name || data.last_name || "User",
            image: data.image_url || "",
          };

          await User.findByIdAndUpdate(data.id, userData);
          console.log("✅ User updated in MongoDB:", userData.email);

          return res.status(200).json({ success: true, message: "User updated" });
        } catch (error) {
          console.error("❌ Error updating user:", error.message);
          return res.status(500).json({ success: false, message: error.message });
        }
      }

      case "user.deleted": {
        try {
          await User.findByIdAndDelete(data.id);
          console.log("✅ User deleted from MongoDB:", data.id);

          return res.status(200).json({ success: true, message: "User deleted" });
        } catch (error) {
          console.error("❌ Error deleting user:", error.message);
          return res.status(500).json({ success: false, message: error.message });
        }
      }

      default:
        console.log("ℹ️ Unhandled webhook type:", type);
        return res.status(200).json({ success: true, message: "Webhook received" });
    }
  } catch (error) {
    console.error("❌ Webhook error:", error.message);
    return res.status(400).json({ success: false, message: error.message });
  }
};
