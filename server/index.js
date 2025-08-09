import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { sendContactConfirmation, sendInternshipConfirmation, sendAdminNotification, sendTestEmail } from './emailService.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected Successfully');
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    process.exit(1);
  }
};

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    trim: true,
    maxlength: [20, 'Phone number cannot exceed 20 characters']
  },
  subject: {
    type: String,
    required: [true, 'Subject is required'],
    trim: true,
    maxlength: [200, 'Subject cannot exceed 200 characters']
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [2000, 'Message cannot exceed 2000 characters']
  },
  status: {
    type: String,
    enum: ['new', 'read', 'replied', 'closed'],
    default: 'new'
  },
  ipAddress: {
    type: String,
    default: null
  },
  userAgent: {
    type: String,
    default: null
  }
}, {
  timestamps: true
});

// Add indexes for better performance
contactSchema.index({ email: 1 });
contactSchema.index({ createdAt: -1 });
contactSchema.index({ status: 1 });

const Contact = mongoose.model('Contact', contactSchema);

// Internship Schema
const internshipSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    maxlength: [20, 'Phone number cannot exceed 20 characters']
  },
  college: {
    type: String,
    required: [true, 'College is required'],
    trim: true,
    maxlength: [200, 'College name cannot exceed 200 characters']
  },
  course: {
    type: String,
    required: [true, 'Course is required'],
    trim: true,
    maxlength: [200, 'Course name cannot exceed 200 characters']
  },
  year: {
    type: String,
    required: [true, 'Year is required'],
    enum: ['Diploma','1st Year', '2nd Year', '3rd Year', '4th Year', 'Graduate', 'Post Graduate']
  },
  domain: {
    type: String,
    required: [true, 'Domain is required'],
    enum: ['Web Development', 'UI/UX Design', 'Mobile Development', 'Digital Marketing', 'Data Science', 'Graphic Design', 'Content Writing', 'SEO/SEM']
  },
  duration: {
    type: String,
    required: [true, 'Duration is required'],
    enum: ['1 month', '3 months', '6 months']
  },
  experience: {
    type: String,
    trim: true,
    maxlength: [1000, 'Experience cannot exceed 1000 characters']
  },
  motivation: {
    type: String,
    required: [true, 'Motivation is required'],
    trim: true,
    maxlength: [2000, 'Motivation cannot exceed 2000 characters']
  },
  portfolio: {
    type: String,
    trim: true,
    maxlength: [500, 'Portfolio URL cannot exceed 500 characters']
  },
  availability: {
    type: String,
    required: [true, 'Availability is required'],
    trim: true,
    maxlength: [200, 'Availability cannot exceed 200 characters']
  },
  status: {
    type: String,
    enum: ['new', 'reviewed', 'shortlisted', 'interviewed', 'selected', 'rejected'],
    default: 'new'
  },
  ipAddress: {
    type: String,
    default: null
  },
  userAgent: {
    type: String,
    default: null
  }
}, {
  timestamps: true
});

// Add indexes for better performance
internshipSchema.index({ email: 1 });
internshipSchema.index({ createdAt: -1 });
internshipSchema.index({ status: 1 });
internshipSchema.index({ domain: 1 });

const Internship = mongoose.model('Internship', internshipSchema);

// Validation middleware
const validateContactData = (req, res, next) => {
  const { name, email, subject, message } = req.body;
  
  // Check required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'All required fields must be provided',
      errors: {
        name: !name ? 'Name is required' : null,
        email: !email ? 'Email is required' : null,
        subject: !subject ? 'Subject is required' : null,
        message: !message ? 'Message is required' : null
      }
    });
  }

  // Email validation
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address'
    });
  }

  // Length validations
  if (name.length > 100) {
    return res.status(400).json({
      success: false,
      message: 'Name cannot exceed 100 characters'
    });
  }

  if (subject.length > 200) {
    return res.status(400).json({
      success: false,
      message: 'Subject cannot exceed 200 characters'
    });
  }

  if (message.length > 2000) {
    return res.status(400).json({
      success: false,
      message: 'Message cannot exceed 2000 characters'
    });
  }

  next();
};

// Rate limiting middleware (simple implementation)
const rateLimitMap = new Map();
const rateLimit = (req, res, next) => {
  const clientIP = req.ip || req.connection.remoteAddress;
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // Max 5 requests per 15 minutes

  if (!rateLimitMap.has(clientIP)) {
    rateLimitMap.set(clientIP, { count: 1, resetTime: now + windowMs });
    return next();
  }

  const clientData = rateLimitMap.get(clientIP);
  
  if (now > clientData.resetTime) {
    // Reset the window
    rateLimitMap.set(clientIP, { count: 1, resetTime: now + windowMs });
    return next();
  }

  if (clientData.count >= maxRequests) {
    return res.status(429).json({
      success: false,
      message: 'Too many requests. Please try again later.',
      retryAfter: Math.ceil((clientData.resetTime - now) / 1000)
    });
  }

  clientData.count++;
  next();
};

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Submit contact form
app.post('/api/contact', rateLimit, validateContactData, async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    
    // Get client info
    const ipAddress = req.ip || req.connection.remoteAddress;
    const userAgent = req.get('User-Agent');

    // Create new contact entry
    const newContact = new Contact({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : '',
      subject: subject.trim(),
      message: message.trim(),
      ipAddress,
      userAgent
    });

    // Save to database
    const savedContact = await newContact.save();

    // Log the submission
    console.log(`📧 New contact form submission from ${email} at ${new Date().toISOString()}`);

    // Send confirmation email to user
    const emailResult = await sendContactConfirmation({
      name: savedContact.name,
      email: savedContact.email,
      phone: savedContact.phone,
      subject: savedContact.subject,
      message: savedContact.message
    });

    // Send admin notification (optional)
    if (process.env.ADMIN_EMAIL) {
      await sendAdminNotification('contact', {
        name: savedContact.name,
        email: savedContact.email,
        phone: savedContact.phone,
        subject: savedContact.subject,
        message: savedContact.message
      });
    }

    // Send success response
    res.status(201).json({
      success: true,
      message: emailResult.success 
        ? 'Thank you for your message! We will get back to you within 24 hours. Please check your email for confirmation.'
        : 'Thank you for your message! We will get back to you within 24 hours.',
      data: {
        id: savedContact._id,
        name: savedContact.name,
        email: savedContact.email,
        subject: savedContact.subject,
        submittedAt: savedContact.createdAt,
        emailSent: emailResult.success
      }
    });

  } catch (error) {
    console.error('❌ Contact form submission error:', error);

    // Handle validation errors
    if (error.name === 'ValidationError') {
      const errors = {};
      Object.keys(error.errors).forEach(key => {
        errors[key] = error.errors[key].message;
      });

      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    // Handle duplicate email (if you want to prevent spam)
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'A message from this email was recently submitted. Please wait before sending another.'
      });
    }

    // Generic error response
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Validation middleware for internship applications
const validateInternshipData = (req, res, next) => {
  const { fullName, email, phone, college, course, year, domain, duration, motivation, availability } = req.body;
  
  // Check required fields
  const requiredFields = { fullName, email, phone, college, course, year, domain, duration, motivation, availability };
  const missingFields = Object.keys(requiredFields).filter(key => !requiredFields[key]);
  
  if (missingFields.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'All required fields must be provided',
      missingFields
    });
  }

  // Email validation
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address'
    });
  }

  // Length validations
  const validations = [
    { field: 'fullName', value: fullName, max: 100 },
    { field: 'college', value: college, max: 200 },
    { field: 'course', value: course, max: 200 },
    { field: 'motivation', value: motivation, max: 2000 },
    { field: 'availability', value: availability, max: 200 }
  ];

  for (const validation of validations) {
    if (validation.value.length > validation.max) {
      return res.status(400).json({
        success: false,
        message: `${validation.field} cannot exceed ${validation.max} characters`
      });
    }
  }

  next();
};

// Submit internship application
app.post('/api/internship', rateLimit, validateInternshipData, async (req, res) => {
  try {
    const {
      fullName, email, phone, college, course, year, domain, duration,
      experience, motivation, portfolio, availability
    } = req.body;
    
    // Get client info
    const ipAddress = req.ip || req.connection.remoteAddress;
    const userAgent = req.get('User-Agent');

    // Create new internship application
    const newApplication = new Internship({
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      college: college.trim(),
      course: course.trim(),
      year,
      domain,
      duration,
      experience: experience ? experience.trim() : '',
      motivation: motivation.trim(),
      portfolio: portfolio ? portfolio.trim() : '',
      availability: availability.trim(),
      ipAddress,
      userAgent
    });

    // Save to database
    const savedApplication = await newApplication.save();

    // Log the submission
    console.log(`🎓 New internship application from ${email} for ${domain} at ${new Date().toISOString()}`);

    // Send confirmation email to applicant
    const emailResult = await sendInternshipConfirmation({
      fullName: savedApplication.fullName,
      email: savedApplication.email,
      phone: savedApplication.phone,
      college: savedApplication.college,
      course: savedApplication.course,
      year: savedApplication.year,
      domain: savedApplication.domain,
      duration: savedApplication.duration,
      experience: savedApplication.experience,
      motivation: savedApplication.motivation,
      portfolio: savedApplication.portfolio,
      availability: savedApplication.availability
    });

    // Send admin notification (optional)
    if (process.env.ADMIN_EMAIL) {
      await sendAdminNotification('internship', savedApplication);
    }

    // Send success response
    res.status(201).json({
      success: true,
      message: emailResult.success 
        ? 'Thank you for your internship application! We will review your application and get back to you within 3-5 business days. Please check your email for confirmation.'
        : 'Thank you for your internship application! We will review your application and get back to you within 3-5 business days.',
      data: {
        id: savedApplication._id,
        fullName: savedApplication.fullName,
        email: savedApplication.email,
        domain: savedApplication.domain,
        duration: savedApplication.duration,
        submittedAt: savedApplication.createdAt,
        emailSent: emailResult.success
      }
    });

  } catch (error) {
    console.error('❌ Internship application submission error:', error);

    // Handle validation errors
    if (error.name === 'ValidationError') {
      const errors = {};
      Object.keys(error.errors).forEach(key => {
        errors[key] = error.errors[key].message;
      });

      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    // Handle duplicate email (if you want to prevent spam)
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'An application from this email was recently submitted. Please wait before submitting another.'
      });
    }

    // Generic error response
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Test email endpoint (for debugging)
app.post('/api/test-email', async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email address is required'
      });
    }

    const result = await sendTestEmail(email);
    
    if (result.success) {
      res.json({
        success: true,
        message: `Test email sent successfully to ${email} via ${result.provider}`,
        messageId: result.messageId
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to send test email',
        error: result.error
      });
    }
  } catch (error) {
    console.error('❌ Test email endpoint error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Get all contacts (Admin endpoint - you might want to add authentication)
app.get('/api/contacts', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const status = req.query.status;
    const skip = (page - 1) * limit;

    // Build query
    const query = {};
    if (status && ['new', 'read', 'replied', 'closed'].includes(status)) {
      query.status = status;
    }

    // Get contacts with pagination
    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .select('-userAgent -ipAddress'); // Exclude sensitive data

    // Get total count
    const total = await Contact.countDocuments(query);

    res.json({
      success: true,
      data: contacts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error('❌ Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching contacts'
    });
  }
});

// Get all internship applications (Admin endpoint)
app.get('/api/internships', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const status = req.query.status;
    const domain = req.query.domain;
    const skip = (page - 1) * limit;

    // Build query
    const query = {};
    if (status && ['new', 'reviewed', 'shortlisted', 'interviewed', 'selected', 'rejected'].includes(status)) {
      query.status = status;
    }
    if (domain) {
      query.domain = domain;
    }

    // Get applications with pagination
    const applications = await Internship.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .select('-userAgent -ipAddress'); // Exclude sensitive data

    // Get total count
    const total = await Internship.countDocuments(query);

    res.json({
      success: true,
      data: applications,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error('❌ Error fetching internship applications:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching internship applications'
    });
  }
});

// Get internship application by ID
app.get('/api/internships/:id', async (req, res) => {
  try {
    const application = await Internship.findById(req.params.id);
    
    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Internship application not found'
      });
    }

    res.json({
      success: true,
      data: application
    });

  } catch (error) {
    console.error('❌ Error fetching internship application:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching internship application'
    });
  }
});

// Update internship application status
app.patch('/api/internships/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!['new', 'reviewed', 'shortlisted', 'interviewed', 'selected', 'rejected'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status. Must be one of: new, reviewed, shortlisted, interviewed, selected, rejected'
      });
    }

    const application = await Internship.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Internship application not found'
      });
    }

    res.json({
      success: true,
      message: 'Internship application status updated successfully',
      data: application
    });

  } catch (error) {
    console.error('❌ Error updating internship application status:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating internship application status'
    });
  }
});

// Get contact by ID
app.get('/api/contacts/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
      data: contact
    });

  } catch (error) {
    console.error('❌ Error fetching contact:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching contact'
    });
  }
});

// Update contact status
app.patch('/api/contacts/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!['new', 'read', 'replied', 'closed'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status. Must be one of: new, read, replied, closed'
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
      message: 'Contact status updated successfully',
      data: contact
    });

  } catch (error) {
    console.error('❌ Error updating contact status:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating contact status'
    });
  }
});

// Get contact statistics
app.get('/api/contacts/stats', async (req, res) => {
  try {
    const stats = await Contact.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    const totalContacts = await Contact.countDocuments();
    const todayContacts = await Contact.countDocuments({
      createdAt: {
        $gte: new Date(new Date().setHours(0, 0, 0, 0))
      }
    });

    const totalInternships = await Internship.countDocuments();
    const todayInternships = await Internship.countDocuments({
      createdAt: {
        $gte: new Date(new Date().setHours(0, 0, 0, 0))
      }
    });

    const internshipStats = await Internship.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    const statusStats = {};
    stats.forEach(stat => {
      statusStats[stat._id] = stat.count;
    });

    const internshipStatusStats = {};
    internshipStats.forEach(stat => {
      internshipStatusStats[stat._id] = stat.count;
    });

    res.json({
      success: true,
      data: {
        contacts: {
          total: totalContacts,
          today: todayContacts,
          byStatus: statusStats
        },
        internships: {
          total: totalInternships,
          today: todayInternships,
          byStatus: internshipStatusStats
        }
      }
    });

  } catch (error) {
    console.error('❌ Error fetching contact stats:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching contact statistics'
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('❌ Unhandled error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});


// Start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📊 Health check: https://tech-exzakt.onrender.com/api/health`);
      console.log(`📧 Contact endpoint: https://tech-exzakt.onrender.com/api/contact`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down server...');
  await mongoose.connection.close();
  process.exit(0);
});