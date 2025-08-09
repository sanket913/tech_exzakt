import SibApiV3Sdk from '@sendinblue/client';
import nodemailer from 'nodemailer';
import { contactFormTemplate, internshipFormTemplate } from './emailTemplates.js';
import dotenv from 'dotenv';
dotenv.config();

// Initialize Brevo API client
let apiInstance;
let transporter; // Fallback SMTP transporter

const initializeBrevoService = () => {
  try {
    if (!process.env.BREVO_API_KEY) {
      throw new Error('BREVO_API_KEY is not configured');
    }

    // Initialize Brevo API client
    apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    const apiKey = apiInstance.authentications['apiKey'];
    apiKey.apiKey = process.env.BREVO_API_KEY;

    console.log('✅ Brevo API service initialized successfully');
    return true;
  } catch (error) {
    console.error('❌ Brevo API initialization failed:', error.message);
    return false;
  }
};



// Send email using Brevo API
const sendEmailWithBrevo = async (emailData) => {
  try {
    if (!apiInstance) {
      throw new Error('Brevo API not initialized');
    }

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    
    sendSmtpEmail.sender = {
      name: process.env.BREVO_SENDER_NAME || 'NxElite IT Solutions',
      email: process.env.BREVO_SENDER_EMAIL || 'noreply@nxelite.com'
    };
    
    sendSmtpEmail.to = [{ email: emailData.to, name: emailData.toName || '' }];
    sendSmtpEmail.subject = emailData.subject;
    sendSmtpEmail.htmlContent = emailData.html;
    sendSmtpEmail.textContent = emailData.text;
    
    // Add headers for better deliverability
    sendSmtpEmail.headers = {
      'X-Mailer': 'NxElite Contact System',
      'X-Priority': '3'
    };

    // Add tags for tracking (optional)
    sendSmtpEmail.tags = [emailData.type || 'general'];

    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
    
    console.log(`✅ Email sent via Brevo API to ${emailData.to}`);
    console.log(`📧 Message ID: ${result.messageId}`);
    
    return {
      success: true,
      messageId: result.messageId,
      provider: 'brevo'
    };
    
  } catch (error) {
    console.error('❌ Brevo API email sending failed:', error);
    throw error;
  }
};



// Main email sending function with fallback
const sendEmail = async (emailData) => {
  try {
    if (!apiInstance) {
      throw new Error('Brevo API not initialized');
    }

    return await sendEmailWithBrevo(emailData);
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Send contact form confirmation email
export const sendContactConfirmation = async (userData) => {
  try {
    const template = contactFormTemplate(userData);
    
    const emailData = {
      to: userData.email,
      toName: userData.name,
      subject: template.subject,
      html: template.html,
      text: template.text,
      type: 'contact_confirmation'
    };

    const result = await sendEmail(emailData);
    
    if (result.success) {
      console.log(`✅ Contact confirmation email sent to ${userData.email} via ${result.provider}`);
    }
    
    return result;
    
  } catch (error) {
    console.error('❌ Failed to send contact confirmation email:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Send internship application confirmation email
export const sendInternshipConfirmation = async (userData) => {
  try {
    const template = internshipFormTemplate(userData);
    
    const emailData = {
      to: userData.email,
      toName: userData.fullName,
      subject: template.subject,
      html: template.html,
      text: template.text,
      type: 'internship_confirmation'
    };

    const result = await sendEmail(emailData);
    
    if (result.success) {
      console.log(`✅ Internship confirmation email sent to ${userData.email} via ${result.provider}`);
    }
    
    return result;
    
  } catch (error) {
    console.error('❌ Failed to send internship confirmation email:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Send notification email to admin
export const sendAdminNotification = async (type, userData) => {
  try {
    if (!process.env.ADMIN_EMAIL) {
      return { success: false, error: 'Admin notifications not configured' };
    }

    const isInternship = type === 'internship';
    const subject = isInternship 
      ? `New Internship Application - ${userData.fullName || userData.name}`
      : `New Contact Form Submission - ${userData.name}`;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
        <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 0 20px rgba(0,0,0,0.1);">
          <div style="text-align: center; border-bottom: 3px solid #FFD700; padding-bottom: 20px; margin-bottom: 30px;">
            <h1 style="color: #333; margin: 0;">NxElite IT Solutions</h1>
            <p style="color: #666; margin: 5px 0 0 0;">Admin Notification</p>
          </div>
          
          <h2 style="color: #333;">New ${isInternship ? 'Internship Application' : 'Contact Form Submission'}</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #FFD700; margin: 20px 0;">
            <p><strong>Name:</strong> ${userData.fullName || userData.name}</p>
            <p><strong>Email:</strong> ${userData.email}</p>
            <p><strong>Phone:</strong> ${userData.phone || 'Not provided'}</p>
            ${isInternship ? `
              <p><strong>College:</strong> ${userData.college}</p>
              <p><strong>Course:</strong> ${userData.course}</p>
              <p><strong>Year:</strong> ${userData.year}</p>
              <p><strong>Domain:</strong> ${userData.domain}</p>
              <p><strong>Duration:</strong> ${userData.duration}</p>
              <p><strong>Availability:</strong> ${userData.availability}</p>
              ${userData.portfolio ? `<p><strong>Portfolio:</strong> <a href="${userData.portfolio}">${userData.portfolio}</a></p>` : ''}
              <p><strong>Experience:</strong> ${userData.experience || 'Not provided'}</p>
              <p><strong>Motivation:</strong> ${userData.motivation}</p>
            ` : `
              <p><strong>Subject:</strong> ${userData.subject}</p>
              <p><strong>Message:</strong> ${userData.message}</p>
            `}
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px;">
              This is an automated notification from your website contact system.
            </p>
          </div>
        </div>
      </div>
    `;

    const textContent = `
New ${isInternship ? 'Internship Application' : 'Contact Form Submission'}

Name: ${userData.fullName || userData.name}
Email: ${userData.email}
Phone: ${userData.phone || 'Not provided'}
${isInternship ? `
College: ${userData.college}
Course: ${userData.course}
Year: ${userData.year}
Domain: ${userData.domain}
Duration: ${userData.duration}
Availability: ${userData.availability}
${userData.portfolio ? `Portfolio: ${userData.portfolio}` : ''}
Experience: ${userData.experience || 'Not provided'}
Motivation: ${userData.motivation}
` : `
Subject: ${userData.subject}
Message: ${userData.message}
`}
Submitted: ${new Date().toLocaleString()}

This is an automated notification from your website contact system.
    `;

    const emailData = {
      to: process.env.ADMIN_EMAIL,
      toName: 'Admin',
      subject: subject,
      html: htmlContent,
      text: textContent,
      type: 'admin_notification'
    };

    const result = await sendEmail(emailData);
    
    if (result.success) {
      console.log(`✅ Admin notification sent for ${type} submission via ${result.provider}`);
    }
    
    return result;
    
  } catch (error) {
    console.error('❌ Failed to send admin notification:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Test email function for debugging
export const sendTestEmail = async (testEmail) => {
  try {
    const emailData = {
      to: testEmail,
      toName: 'Test User',
      subject: 'Test Email from NxElite IT Solutions',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #333;">Test Email</h1>
          <p>This is a test email to verify that your Brevo email service is working correctly.</p>
          <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
          <p>If you received this email, your email service is configured properly!</p>
        </div>
      `,
      text: `
Test Email

This is a test email to verify that your Brevo email service is working correctly.

Timestamp: ${new Date().toISOString()}

If you received this email, your email service is configured properly!
      `,
      type: 'test'
    };

    return await sendEmail(emailData);
    
  } catch (error) {
    console.error('❌ Failed to send test email:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Initialize email services on module load
const initializeEmailServices = async () => {
  console.log('🔄 Initializing email services...');
  
  const brevoInitialized = initializeBrevoService();

if (!brevoInitialized) {
  console.error('❌ Brevo email service could not be initialized.');
  console.error('Please ensure BREVO_API_KEY is set in your environment.');
} else {
  console.log('✅ Email services initialization completed - Brevo only');
}

};

// Initialize on module load
initializeEmailServices();

