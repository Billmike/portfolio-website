import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f0f0',
      padding: '20px',
      borderRadius: '10px',
      maxWidth: '600px',
      margin: '0 auto',
      textAlign: 'center',
    }}>
      <h2 style={{ color: '#333' }}>New Contact Form Message</h2>
          <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Message:</strong></p>
            <p style={{ whiteSpace: 'pre-wrap', marginTop: '10px' }}>{message}</p>
          </div>
          <p style={{ color: '#666', fontSize: '14px' }}>
            This message was sent from your portfolio contact form.
          </p>
    </div>
  );
}
