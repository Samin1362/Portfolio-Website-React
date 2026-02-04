const nodemailer = require('nodemailer');

// Create reusable transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // App password, NOT regular password
  },
});

// Verify connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Nodemailer configuration error:', error);
    console.error('Make sure you are using a Gmail App Password, not your regular password');
  } else {
    console.log('✅ Email service is ready to send messages');
  }
});

// Send email function
const sendEmail = async (mailOptions) => {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('📧 Email sent successfully:', info.messageId);
    return info;
  } catch (error) {
    console.error('❌ Error sending email:', error.message);
    throw error;
  }
};

module.exports = sendEmail;
