import nodemailer from "nodemailer";

import { NextRequest } from "next/server";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.APP_PASSWORD,
  },
});

export const mailOptions = {
  from: process.env.MAIL_USERNAME,
};
