import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },

  // host: process.env.EMAIL_HOST,
  // port: process.env.EMAIL_PORT,
  // secure: false,
});

export const mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER
}