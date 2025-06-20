// /controllers/webhooks.js
import { Webhook } from "svix";
import User from "../models/User.js";

export const clerkWebhooks = async (req, res) => {
  try {
    const secret = process.env.CLERK_WEBHOOK_SECRET;
    const payload = req.body; // raw body
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    const wh = new Webhook(secret);
    const evt = wh.verify(payload, headers);

    const { id, email_addresses, first_name, last_name, image_url } = evt.data;

    if (evt.type === "user.created") {
      const existing = await User.findById(id);
      if (!existing) {
        await User.create({
          _id: id,
          email: email_addresses[0]?.email_address || "",
          name: `${first_name} ${last_name}`,
          image: image_url,
          resume: "",
        });
        console.log("✅ User created:", id);
      } else {
        console.log("⚠️ User already exists:", id);
      }
    } else {
      console.log("ℹ️ Non-create event received:", evt.type);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌ Clerk Webhook Error:", error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};
