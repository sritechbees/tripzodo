import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, phone, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail', // or use SMTP details for your provider
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-app-password', // use app password if 2FA is enabled
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: '9524605488@your-sms-gateway.com', // replace with SMS email gateway
    subject: subject || 'Tripzodo Inquiry',
    text: `Welcome Tripzodo\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: 'Message sending failed.' });
  }
}
