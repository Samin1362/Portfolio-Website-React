const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const rateLimit = require('express-rate-limit');
const sendEmail = require('../config/nodemailer');

// Rate limiting: 5 requests per hour per IP
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: {
    error: 'Too many contact requests from this IP. Please try again after an hour.'
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      error: 'Too many contact requests. Please try again later.',
      retryAfter: '1 hour'
    });
  }
});

// Validation rules
const contactValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters')
    .matches(/^[a-zA-Z\s'-]+$/)
    .withMessage('Name can only contain letters, spaces, hyphens, and apostrophes')
    .escape(), // Sanitize

  body('email')
    .trim()
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail()
    .isLength({ max: 254 })
    .withMessage('Email address is too long'),

  body('message')
    .trim()
    .isLength({ min: 10, max: 5000 })
    .withMessage('Message must be between 10 and 5000 characters')
    .escape() // Sanitize
];

// POST /api/contact - Send contact email
router.post('/contact', contactLimiter, contactValidation, async (req, res) => {
  // Check validation results
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const firstError = errors.array()[0].msg;
    return res.status(400).json({
      error: firstError,
      errors: errors.array()
    });
  }

  const { name, email, message } = req.body;

  try {
    // Send email using Nodemailer
    await sendEmail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 0 0 8px 8px; }
            .info-row { margin: 10px 0; padding: 10px; background: white; border-radius: 4px; }
            .label { font-weight: bold; color: #667eea; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🚀 New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="info-row">
                <span class="label">Name:</span> ${name}
              </div>
              <div class="info-row">
                <span class="label">Email:</span> ${email}
              </div>
              <div class="info-row">
                <span class="label">Message:</span><br/>
                <p>${message}</p>
              </div>
            </div>
            <div class="footer">
              <p>Sent from your portfolio contact form</p>
              <p>${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        New Contact Form Submission

        Name: ${name}
        Email: ${email}

        Message:
        ${message}

        ---
        Sent from your portfolio contact form
        ${new Date().toLocaleString()}
      `
    });

    res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully! I\'ll get back to you soon.'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      error: 'Failed to send message. Please try again later or contact me directly via email.'
    });
  }
});

module.exports = router;
