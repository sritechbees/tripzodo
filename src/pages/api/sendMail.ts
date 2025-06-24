import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Only POST requests allowed' });
    }

    const { name, email, phone, subject, message } = req.body;

    // Configure transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: process.env.SMTP_USER, // your Gmail or SMTP email
            pass: process.env.SMTP_PASS, // your email app password
        },
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.RECEIVER_EMAIL, // where you want to receive messages
            subject: `New Booking Inquiry: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
        });

        return res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Failed to send email.', error });
    }
}
