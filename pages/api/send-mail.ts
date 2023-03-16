import type { NextApiRequest, NextApiResponse } from "next";
// import { transporter } from "../../utils/nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // if (req.method === "POST") {
  //   const data = req.body;

  //   try {
  //     await transporter.sendMail({
  //       from: data.email,
  //       to: "rediantsparktechnology@gmail.com",
  //       subject: data.subject,
  //       text: data.message,
  //       html: `<h4>Full name: ${data.name}</h1><br/><a href=''>Sender : ${data.email}</a>`,
  //       attachments: data.urls,
  //     });

  //     return res.status(200).json({ success: true });
  //   } catch (error) {
  //     console.log(error);
  //     return res.status(400).json(error);
  //   }
  // }
}
