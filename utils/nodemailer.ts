import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.APP_PASSWORD,
  },
});

export const mailOptions = {
  // to: "rediantsparktechnology@gmail.com",
};
