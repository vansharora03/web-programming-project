@ -0,0 +1,32 @@
// pages/api/user.ts

import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../utils/dbConnect";
import { User } from "@/models/User";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === "PUT") {
    const { currentEmail, newEmail } = req.body;

    try {
      const user = await User.findOne({ email: currentEmail });

      if (!user) {
        return res.status(404).json({ error: "User not found." });
      }

      user.email = newEmail;
      await user.save();

      return res.status(200).json({ message: "Email updated successfully." });
    } catch (error) {
      console.error("Email update error:", error);
      return res.status(500).json({ error: "Internal Server Error." });
    }
  } else {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}