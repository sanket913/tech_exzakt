import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
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

// Intenrship Modal schema
const InternshipApplicationSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email:    { type: String, required: true },
    phone:    { type: String, required: true },
    college:  { type: String, required: true },
    course:   { type: String, required: true },
    year:     { type: String, required: true },
    domain:   { type: String, required: true },
    duration: { type: String, required: true },
    motivation: { type: String, required: true },
    availability: { type: String, required: true },
    ipAddress: String,
    userAgent: String,
  },
  { timestamps: true }
);
const InternshipApplication = mongoose.model('InternshipApplication', InternshipApplicationSchema);

const validateInternshipData=(req, res, next)=> {
  const {
    fullName, email, phone, college, course,
    year, domain, duration, motivation, availability
  } = req.body;

  const missingFields = [];

  if (!fullName) missingFields.push('fullName');
  if (!email) missingFields.push('email');
  if (!phone) missingFields.push('phone');
  if (!college) missingFields.push('college');
  if (!course) missingFields.push('course');
  if (!year) missingFields.push('year');
  if (!domain) missingFields.push('domain');
  if (!duration) missingFields.push('duration');
  if (!motivation) missingFields.push('motivation');
  if (!availability) missingFields.push('availability');

  if (missingFields.length > 0) {
    return res.status(400).json({
      success: false,
      message: `Missing fields: ${missingFields.join(', ')}`
    });
  }

  next();
};

// Routes

//Routes for submiting application
app.post('/api/internship', validateInternshipData, async (req, res) => {
  try {
    const {
      fullName, email, phone, college, course,
      year, domain, duration, motivation, availability
    } = req.body;

    const ipAddress = req.ip || req.connection.remoteAddress;
    const userAgent = req.get('User-Agent');

    const newApplication = new InternshipApplication({
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      college: college.trim(),
      course: course.trim(),
      year: year.trim(),
      domain: domain.trim(),
      duration: duration.trim(),
      motivation: motivation.trim(),
      availability: availability.trim(),
      ipAddress,
      userAgent
    });

    const savedApp = await newApplication.save();

    console.log(`📄 Internship application received from ${email}`);

    res.status(201).json({
      success: true,
      message: 'Your application has been submitted successfully!',
      data: {
        id: savedApp._id,
        fullName: savedApp.fullName,
        email: savedApp.email,
        domain: savedApp.domain,
        submittedAt: savedApp.createdAt
      }
    });

  } catch (error) {
    console.error('❌ Internship form error:', error);

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

    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

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

    // Send success response
    res.status(201).json({
      success: true,
      message: 'Thank you for your message! We will get back to you within 24 hours.',
      data: {
        id: savedContact._id,
        name: savedContact.name,
        email: savedContact.email,
        subject: savedContact.subject,
        submittedAt: savedContact.createdAt
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

    const statusStats = {};
    stats.forEach(stat => {
      statusStats[stat._id] = stat.count;
    });

    res.json({
      success: true,
      data: {
        total: totalContacts,
        today: todayContacts,
        byStatus: statusStats
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
      console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
      console.log(`📧 Contact endpoint: http://localhost:${PORT}/api/contact`);
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

