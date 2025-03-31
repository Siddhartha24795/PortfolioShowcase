import nodemailer from 'nodemailer';

interface ReferralEmailData {
  name: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  jobLink: string;
  message: string;
  resumeFileName: string;
  resumeBuffer: Buffer;
}

export async function sendReferralEmail(data: ReferralEmailData): Promise<void> {
  // Create a test SMTP service (for production, use real email service)
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER || 'noreply@example.com',
      pass: process.env.EMAIL_PASS || 'password',
    },
  });

  // HTML email body
  const htmlBody = `
    <h2>New Referral Request</h2>
    <p>A new referral request has been submitted with the following details:</p>
    
    <h3>Contact Information:</h3>
    <ul>
      <li><strong>Name:</strong> ${data.name}</li>
      <li><strong>Email:</strong> ${data.email}</li>
      <li><strong>Phone:</strong> ${data.phone}</li>
    </ul>
    
    <h3>Referral Details:</h3>
    <ul>
      <li><strong>Target Company:</strong> ${data.company}</li>
      <li><strong>Position/Role:</strong> ${data.position}</li>
      <li><strong>Job Link:</strong> ${data.jobLink}</li>
    </ul>
    
    <h3>Message:</h3>
    <p>${data.message.replace(/\n/g, '<br>')}</p>
    
    <p>The candidate's resume is attached to this email.</p>
  `;

  // Send mail with defined transport object
  try {
    let info = await transporter.sendMail({
      from: `"Portfolio Website" <${process.env.EMAIL_USER || 'noreply@example.com'}>`,
      to: 'siddhartha24795@gmail.com',
      subject: `New Referral Request: ${data.name} for ${data.position} at ${data.company}`,
      html: htmlBody,
      attachments: [
        {
          filename: data.resumeFileName,
          content: data.resumeBuffer,
        },
      ],
    });

    console.log('Email sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email notification');
  }
}
