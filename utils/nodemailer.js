import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    // type: "OAuth2",
    // clientId: process.env.GOOGLE_ID,
    // clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    // accessToken: process.env.GOOGLE_ACCESS_TOKEN,
    // expires: 3600,
    pass: process.env.EMAIL_PASSWORD,
  },
});

console.log(process.env.GOOGLE_ID, process.env.GOOGLE_CLIENT_SECRET, process.env.GOOGLE_REFRESH_TOKEN, process.env.GOOGLE_ACCESS_TOKEN);

export const mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER
}