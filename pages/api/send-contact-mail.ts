import type { NextApiRequest, NextApiResponse } from "next";
import { transporter } from "../../utils/nodemailer";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = req.body;

    try {
      await transporter.sendMail({
        from: data.email,
        to: "rediantsparktechnology@gmail.com",
        subject: data.subject,
        text: data.message,
        html: `<h4>Full name: ${data.name}</h1 style="color:red;"><br/><a href=''>Sender : ${data.email}</a>
        <p> ${data.message}</p>
        
        `,
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
}
