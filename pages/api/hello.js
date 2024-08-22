// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail', 
      auth: {
        user: 'petergyang82@gmail.com',
        pass: 'Peter19822@', 
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: `"${name}" <${email}>`, // Sender's name and email
        to: 'petergyang82@gmail.com', 
        subject: subject || 'New message from contact form', 
        text: message, 
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`, 
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
