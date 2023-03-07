import type { NextApiRequest, NextApiResponse } from "next";
import { mailOptions, transporter } from "../../utils/nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = req.body;

    try {
      await transporter.sendMail({
        ...mailOptions,
        to: data.email,
        subject: data.subject,
        text: data.message,
        attachments: data.urls,
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
}
