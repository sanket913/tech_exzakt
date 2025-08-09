// Email templates for different form submissions

export const contactFormTemplate = (userData) => {
  return {
    subject: 'Thank you for contacting NxElite IT Solutions',
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank you for contacting NxElite</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f4f4f4;
          }
          .container {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
          }
          .header {
            text-align: center;
            border-bottom: 3px solid #FFD700;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }
          .logo {
            font-size: 28px;
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
          }
          .tagline {
            color: #666;
            font-size: 14px;
          }
          .content {
            margin-bottom: 30px;
          }
          .highlight {
            background: linear-gradient(135deg, #FFD700, #FFA500);
            color: white;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
          }
          .details {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #FFD700;
          }
          .footer {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid #eee;
            color: #666;
            font-size: 14px;
          }
          .contact-info {
            margin: 20px 0;
          }
          .contact-info div {
            margin: 8px 0;
          }
          .social-links {
            margin: 20px 0;
          }
          .social-links a {
            color: #FFD700;
            text-decoration: none;
            margin: 0 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">NxElite IT Solutions</div>
            <div class="tagline">Crafting Digital Experiences That Matter</div>
          </div>
          
          <div class="content">
            <h2 style="color: #333; margin-bottom: 20px;">Hello ${userData.name}!</h2>
            
            <p>Thank you for reaching out to <strong>NxElite IT Solutions</strong>. We have successfully received your inquiry and are excited to help you transform your digital presence.</p>
            
            <div class="highlight">
              <h3 style="margin-top: 0;">🚀 What happens next?</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li>Our expert team will review your requirements within 24 hours</li>
                <li>We'll prepare a customized solution proposal for your project</li>
                <li>You'll receive a detailed response with next steps</li>
                <li>We'll schedule a consultation call to discuss your vision</li>
              </ul>
            </div>
            
            <div class="details">
              <h3 style="color: #333; margin-top: 0;">📋 Your Submission Details:</h3>
              <p><strong>Name:</strong> ${userData.name}</p>
              <p><strong>Email:</strong> ${userData.email}</p>
              ${userData.phone ? `<p><strong>Phone:</strong> ${userData.phone}</p>` : ''}
              <p><strong>Subject:</strong> ${userData.subject}</p>
              <p><strong>Message:</strong> ${userData.message}</p>
              <p><strong>Submitted:</strong> ${new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}</p>
            </div>
            
            <p>In the meantime, feel free to explore our <strong>portfolio</strong> and learn more about our <strong>premium services</strong> that have helped 50+ businesses achieve their digital goals.</p>
            
            <div style="text-align: center; margin: 30px 0;">
              <p style="font-size: 18px; color: #333;"><strong>Why Choose NxElite?</strong></p>
              <div style="display: flex; justify-content: space-around; flex-wrap: wrap; margin: 20px 0;">
                <div style="text-align: center; margin: 10px;">
                  <div style="font-size: 24px; font-weight: bold; color: #FFD700;">50+</div>
                  <div style="font-size: 14px; color: #666;">Projects Completed</div>
                </div>
                <div style="text-align: center; margin: 10px;">
                  <div style="font-size: 24px; font-weight: bold; color: #FFD700;">10+</div>
                  <div style="font-size: 14px; color: #666;">Expert Team</div>
                </div>
                <div style="text-align: center; margin: 10px;">
                  <div style="font-size: 24px; font-weight: bold; color: #FFD700;">24/7</div>
                  <div style="font-size: 14px; color: #666;">Support</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="footer">
            <div class="contact-info">
              <div><strong>📞 Phone:</strong> +91 76009 78440</div>
              <div><strong>📧 Email:</strong> info@nxelite.com</div>
              <div><strong>🌐 Website:</strong> www.nxelite.com</div>
            </div>
            
            <div class="social-links">
              <a href="#">LinkedIn</a> |
              <a href="#">Twitter</a> |
              <a href="#">Instagram</a> |
              <a href="#">GitHub</a>
            </div>
            
            <p style="margin-top: 20px;">
              <strong>NxElite IT Solutions</strong><br>
              Transforming Ideas into Powerful Digital Experiences<br>
              © 2025 NxElite IT Solutions. All rights reserved.
            </p>
            
            <p style="font-size: 12px; color: #999; margin-top: 20px;">
              This is an automated message. Please do not reply to this email. 
              For any queries, contact us at info@nxelite.com
            </p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
Hello ${userData.name}!

Thank you for reaching out to NxElite IT Solutions. We have successfully received your inquiry and are excited to help you transform your digital presence.

What happens next?
- Our expert team will review your requirements within 24 hours
- We'll prepare a customized solution proposal for your project
- You'll receive a detailed response with next steps
- We'll schedule a consultation call to discuss your vision

Your Submission Details:
Name: ${userData.name}
Email: ${userData.email}
${userData.phone ? `Phone: ${userData.phone}` : ''}
Subject: ${userData.subject}
Message: ${userData.message}
Submitted: ${new Date().toLocaleDateString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}

Why Choose NxElite?
✓ 50+ Projects Completed
✓ 10+ Expert Team Members
✓ 24/7 Premium Support
✓ 100% Client Satisfaction

Contact Information:
Phone: +91 76009 78440
Email: info@nxelite.com
Website: www.nxelite.com

Best regards,
NxElite IT Solutions Team
Transforming Ideas into Powerful Digital Experiences

© 2025 NxElite IT Solutions. All rights reserved.
    `
  };
};

export const internshipFormTemplate = (userData) => {
  return {
    subject: 'Your Internship Application - NxElite IT Solutions',
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Internship Application Received - NxElite</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f4f4f4;
          }
          .container {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
          }
          .header {
            text-align: center;
            border-bottom: 3px solid #FFD700;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }
          .logo {
            font-size: 28px;
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
          }
          .tagline {
            color: #666;
            font-size: 14px;
          }
          .content {
            margin-bottom: 30px;
          }
          .highlight {
            background: linear-gradient(135deg, #FFD700, #FFA500);
            color: white;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
          }
          .details {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #FFD700;
          }
          .timeline {
            background: #e8f5e8;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #28a745;
            margin: 20px 0;
          }
          .footer {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid #eee;
            color: #666;
            font-size: 14px;
          }
          .contact-info {
            margin: 20px 0;
          }
          .contact-info div {
            margin: 8px 0;
          }
          .benefits {
            background: #fff3cd;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #ffc107;
            margin: 20px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">NxElite IT Solutions</div>
            <div class="tagline">Internship Program - Kickstart Your Career</div>
          </div>
          
          <div class="content">
            <h2 style="color: #333; margin-bottom: 20px;">Congratulations ${userData.fullName}! 🎉</h2>
            
            <p>Thank you for applying to the <strong>NxElite IT Solutions Internship Program</strong>. We have successfully received your application and are impressed by your interest in joining our team.</p>
            
            <div class="highlight">
              <h3 style="margin-top: 0;">🚀 Application Status: RECEIVED</h3>
              <p style="margin: 0; font-size: 16px;">Your application is now under review by our HR team and technical experts.</p>
            </div>
            
            <div class="timeline">
              <h3 style="color: #28a745; margin-top: 0;">📅 What's Next? - Selection Timeline</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li><strong>Week 1:</strong> Application Review & Initial Screening</li>
                <li><strong>Week 2:</strong> Technical Assessment (if shortlisted)</li>
                <li><strong>Week 3:</strong> HR Interview & Final Selection</li>
                <li><strong>Week 4:</strong> Onboarding & Program Commencement</li>
              </ul>
            </div>
            
            <div class="details">
              <h3 style="color: #333; margin-top: 0;">📋 Your Application Summary:</h3>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <p><strong>Name:</strong> ${userData.fullName}</p>
                <p><strong>Email:</strong> ${userData.email}</p>
                <p><strong>Phone:</strong> ${userData.phone}</p>
                <p><strong>College:</strong> ${userData.college}</p>
                <p><strong>Course:</strong> ${userData.course}</p>
                <p><strong>Year:</strong> ${userData.year}</p>
                <p><strong>Domain:</strong> ${userData.domain}</p>
                <p><strong>Duration:</strong> ${userData.duration}</p>
                <p><strong>Availability:</strong> ${userData.availability}</p>
              </div>
              ${userData.portfolio ? `<p><strong>Portfolio:</strong> <a href="${userData.portfolio}" style="color: #FFD700;">${userData.portfolio}</a></p>` : ''}
              <p><strong>Applied On:</strong> ${new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}</p>
            </div>
            
            <div class="benefits">
              <h3 style="color: #856404; margin-top: 0;">🌟 Internship Program Benefits:</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li><strong>Hands-on Experience:</strong> Work on real client projects</li>
                <li><strong>Mentorship:</strong> Learn from industry experts</li>
                <li><strong>Skill Development:</strong> Master cutting-edge technologies</li>
                <li><strong>Certificate:</strong> Industry-recognized completion certificate</li>
                <li><strong>Career Guidance:</strong> Professional development support</li>
                <li><strong>Networking:</strong> Connect with professionals and peers</li>
                <li><strong>Potential Job Offer:</strong> Outstanding interns may receive full-time offers</li>
              </ul>
            </div>
            
            <div style="background: #d1ecf1; padding: 20px; border-radius: 8px; border-left: 4px solid #17a2b8; margin: 20px 0;">
              <h3 style="color: #0c5460; margin-top: 0;">💡 Preparation Tips:</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li>Review fundamentals of your chosen domain (${userData.domain})</li>
                <li>Prepare a portfolio showcasing your best work</li>
                <li>Practice coding problems and technical concepts</li>
                <li>Research NxElite's projects and company culture</li>
                <li>Prepare questions about the internship program</li>
              </ul>
            </div>
            
            <p><strong>Important:</strong> Please keep checking your email regularly for updates. All communication regarding your application will be sent to this email address.</p>
          </div>
          
          <div class="footer">
            <div class="contact-info">
              <div><strong>📞 HR Contact:</strong> +91 76009 78440</div>
              <div><strong>📧 Email:</strong> hr@nxelite.com</div>
              <div><strong>🌐 Website:</strong> www.nxelite.com</div>
            </div>
            
            <p style="margin-top: 20px;">
              <strong>NxElite IT Solutions - Internship Program</strong><br>
              Building Tomorrow's Tech Leaders Today<br>
              © 2025 NxElite IT Solutions. All rights reserved.
            </p>
            
            <p style="font-size: 12px; color: #999; margin-top: 20px;">
              This is an automated confirmation email. For any queries regarding your application, 
              please contact our HR team at hr@nxelite.com
            </p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
Congratulations ${userData.fullName}!

Thank you for applying to the NxElite IT Solutions Internship Program. We have successfully received your application and are impressed by your interest in joining our team.

APPLICATION STATUS: RECEIVED
Your application is now under review by our HR team and technical experts.

SELECTION TIMELINE:
Week 1: Application Review & Initial Screening
Week 2: Technical Assessment (if shortlisted)
Week 3: HR Interview & Final Selection
Week 4: Onboarding & Program Commencement

YOUR APPLICATION SUMMARY:
Name: ${userData.fullName}
Email: ${userData.email}
Phone: ${userData.phone}
College: ${userData.college}
Course: ${userData.course}
Year: ${userData.year}
Domain: ${userData.domain}
Duration: ${userData.duration}
Availability: ${userData.availability}
${userData.portfolio ? `Portfolio: ${userData.portfolio}` : ''}
Applied On: ${new Date().toLocaleDateString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}

INTERNSHIP PROGRAM BENEFITS:
✓ Hands-on Experience: Work on real client projects
✓ Mentorship: Learn from industry experts
✓ Skill Development: Master cutting-edge technologies
✓ Certificate: Industry-recognized completion certificate
✓ Career Guidance: Professional development support
✓ Networking: Connect with professionals and peers
✓ Potential Job Offer: Outstanding interns may receive full-time offers

PREPARATION TIPS:
- Review fundamentals of your chosen domain (${userData.domain})
- Prepare a portfolio showcasing your best work
- Practice coding problems and technical concepts
- Research NxElite's projects and company culture
- Prepare questions about the internship program

Important: Please keep checking your email regularly for updates. All communication regarding your application will be sent to this email address.

Contact Information:
HR Contact: +91 76009 78440
Email: hr@nxelite.com
Website: www.nxelite.com

Best regards,
NxElite IT Solutions - Internship Program Team
Building Tomorrow's Tech Leaders Today

© 2025 NxElite IT Solutions. All rights reserved.
    `
  };
};