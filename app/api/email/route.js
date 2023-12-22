import { transporter, mailOptions } from './../../../utils/nodemailer';

export const POST = async (req, res) => {
  try {
    const { email, name, message } = await req.json();

    if (!email || !message) throw new Error('Missing fields');

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `[CONTACT FROM WEB] from ${name}`,
        text: message,
        html: `<p>${message}</p><p>from ${email}</p>`,
      });

      return new Response(JSON.stringify({ message: 'Email sent' }), { status: 200 });
    } catch (error) {
      console.log(error);
      return new Response(error, { status: 500 });  
    }
  } catch (error) {
    console.log(error)
    return new Response(error, { status: 500 })
  }
}