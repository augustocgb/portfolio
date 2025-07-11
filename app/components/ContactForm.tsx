// components/ContactForm.tsx
"use client";

import React, { useState } from 'react';
import { Button } from './Button'; // Import the newly refactored Button
import { Card } from './Card';

// Define the shape of the form data
interface EmailData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  // --- Local State Management ---
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'succeeded' | 'failed'>('idle');
  const [error, setError] = useState<string | null>(null);

  // --- Form Submission Handler ---
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !email || !message) {
      setError('Please fill out all fields.');
      return;
    }

    setStatus('loading');
    setError(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message } as EmailData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }

      setStatus('succeeded');
      setName('');
      setEmail('');
      setMessage('');

    } catch (err: any) {
      setStatus('failed');
      setError(err.message);
    }
  };

  // --- Render Logic ---
  if (status === 'succeeded') {
    return (
      <Card>
      <div className="text-center p-8 bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 rounded-lg">
        <h3 className="text-2xl font-bold">Thank You!</h3>
        <p className="mt-2">Your message has been sent successfully.</p>
      </div>
      </Card>
    );
  }

  // --- Main Form ---
  return (
    <Card>
      <h2 className="text-2xl font-bold text-[--text-primary] mb-6 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* Name Input Field */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-[--text-primary] mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 text-[--text-primary] bg-[--bg-secondary] border border-[--border] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400"
            placeholder="Alan Turing"
          />
        </div>

        {/* Email Input Field */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-[--text-primary] mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 text-[--text-primary] bg-[--bg-secondary] border border-[--border] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400"
            placeholder="example@email.com"
          />
        </div>

        {/* Message Text Area */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-[--text-primary] mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="w-full px-4 py-3 text-[--text-primary] bg-[--bg-secondary] border border-[--border] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400"
            placeholder="On the subject of Intelligent Machinery..."
          />
        </div>

        {/* Submit Button*/}
        <div className="text-center">
          <Button
            type="submit"
            disabled={status === 'loading'}
            className="w-full font-semibold hover:text-[--text-primary] cursor-pointer" 
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </Button>
        </div>

        {/* Error Message Display */}
        {(status === 'failed' || error) && (
          <div className="mt-4 text-center text-red-500 bg-red-500/10 p-3 rounded-lg border border-red-500/20">
            <p>{error || 'An unknown error occurred. Please try again.'}</p>
          </div>
        )}
      </form>
    </Card>
  );
};

export default ContactForm;
