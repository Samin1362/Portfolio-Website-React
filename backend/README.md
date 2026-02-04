# Portfolio Backend - Contact Form API

Backend server for portfolio contact form with Nodemailer email integration.

## Features

- Express.js server
- Nodemailer for email sending
- Rate limiting (5 requests/hour per IP)
- Input validation and sanitization
- CORS protection
- Security headers with Helmet

## Environment Variables

Required environment variables (set these in Render dashboard):

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_TO=your-email@gmail.com
FRONTEND_URL=https://your-portfolio.vercel.app
PORT=5000
```

## Gmail App Password Setup

1. Enable 2-Factor Authentication on Google Account
2. Go to: https://myaccount.google.com/apppasswords
3. Create app password for "Mail"
4. Use the 16-character password in EMAIL_PASS

## Deployment on Render

1. Push code to GitHub
2. Create new Web Service on Render
3. Connect GitHub repository
4. Set environment variables
5. Deploy

## API Endpoints

- `GET /health` - Health check
- `POST /api/contact` - Send contact form email

## Local Development

```bash
npm install
npm run dev
```

Server will run on http://localhost:5000
