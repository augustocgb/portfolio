// app/api/send-email/route.js
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);
const recipientEmail = process.env.RECIPIENT_EMAIL;

// A simple React component for the email body.
// It's a good practice to define this outside the POST handler
// if it doesn't depend on request-specific data that can't be passed as props.
const EmailTemplate = ({ name, email, message }) => (
  <div>
    <h1>New Contact Form Submission</h1>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Message:</strong></p>
    <p>{message}</p>
  </div>
);


export async function POST(request) {
  console.log("API route hit. Processing POST request...");

  // Check for the recipient email configuration first.
  if (!recipientEmail) {
    console.error('Recipient email is not configured in environment variables.');
    return NextResponse.json(
      { message: 'Server configuration error: Recipient email is not set.' },
      { status: 500 }
    );
  }

  try {
    // Parse the request body to get the form data.
    const { name, email, message } = await request.json();
    console.log("Received data:", { name, email, message });

    // Use Resend to send the email.
    console.log("Sending email with Resend...");
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // This must be a verified domain in Resend.
      to: [recipientEmail], // Your personal email from .env.local.
      subject: `New Message from ${name}`,
      reply_to: email, // This allows you to reply directly to the user's email.
      react: <EmailTemplate name={name} email={email} message={message} />,
    });

    // Handle potential errors from the Resend API.
    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ message: 'Failed to send email.', error }, { status: 500 });
    }

    // Return a success response.
    console.log("Email sent successfully:", data);
    return NextResponse.json({ message: 'Email sent successfully!', data }, { status: 200 });

  } catch (err) {
    // Handle other errors, such as parsing the request body.
    console.error('API Route Error:', err);
    return NextResponse.json({ message: 'An internal error occurred.', error: err.message }, { status: 500 });
  }
}
