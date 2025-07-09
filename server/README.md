# Tech Exzakt Contact Form Backend

This is the backend API for handling contact form submissions with MongoDB integration.

## Features

- ✅ **MongoDB Integration** - Store contact form submissions
- ✅ **Data Validation** - Comprehensive input validation
- ✅ **Rate Limiting** - Prevent spam submissions
- ✅ **Error Handling** - Robust error handling and logging
- ✅ **Admin Endpoints** - Manage contact submissions
- ✅ **Security** - Input sanitization and validation
- ✅ **Statistics** - Contact form analytics

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory:

```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/techexzakt
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/techexzakt

# Server Configuration
PORT=5000
NODE_ENV=development

# CORS Configuration
FRONTEND_URL=http://localhost:5173
```

### 3. Start MongoDB
Make sure MongoDB is running on your system:

**Local MongoDB:**
```bash
mongod
```

**Or use MongoDB Atlas** (cloud database):
1. Create account at https://www.mongodb.com/atlas
2. Create a cluster
3. Get connection string
4. Update MONGODB_URI in .env

### 4. Start the Server

**Development mode:**
```bash
npm run server:dev
```

**Production mode:**
```bash
npm run server
```

**Start both frontend and backend:**
```bash
npm run start:full
```

## API Endpoints

### Contact Form Submission
```http
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "subject": "Web Development",
  "message": "I need a website for my business"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your message! We will get back to you within 24 hours.",
  "data": {
    "id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Web Development",
    "submittedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

### Admin Endpoints

**Get All Contacts:**
```http
GET /api/contacts?page=1&limit=10&status=new
```

**Get Contact by ID:**
```http
GET /api/contacts/:id
```

**Update Contact Status:**
```http
PATCH /api/contacts/:id/status
Content-Type: application/json

{
  "status": "read"
}
```

**Get Statistics:**
```http
GET /api/contacts/stats
```

**Health Check:**
```http
GET /api/health
```

## Database Schema

### Contact Model
```javascript
{
  name: String (required, max: 100 chars),
  email: String (required, validated),
  phone: String (optional, max: 20 chars),
  subject: String (required, max: 200 chars),
  message: String (required, max: 2000 chars),
  status: String (enum: ['new', 'read', 'replied', 'closed']),
  ipAddress: String,
  userAgent: String,
  createdAt: Date,
  updatedAt: Date
}
```

## Security Features

### Rate Limiting
- **5 requests per 15 minutes** per IP address
- Prevents spam submissions
- Returns 429 status when limit exceeded

### Input Validation
- Required field validation
- Email format validation
- Length restrictions
- XSS protection through input sanitization

### Error Handling
- Comprehensive error responses
- Detailed logging for debugging
- Graceful error recovery

## Monitoring & Logging

The server logs all important events:
- ✅ Database connections
- 📧 New contact submissions
- ❌ Errors and failures
- 🛑 Server shutdown events

## Production Deployment

### Environment Variables for Production
```env
NODE_ENV=production
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/techexzakt
PORT=5000
```

### PM2 Process Manager (Recommended)
```bash
npm install -g pm2
pm2 start server/index.js --name "techexzakt-api"
pm2 startup
pm2 save
```

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY server/ ./server/
EXPOSE 5000
CMD ["node", "server/index.js"]
```

## Testing the API

### Using curl:
```bash
# Submit contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "This is a test message"
  }'

# Health check
curl http://localhost:5000/api/health
```

### Using Postman:
1. Import the API endpoints
2. Set base URL to `http://localhost:5000`
3. Test each endpoint with sample data

## Troubleshooting

### Common Issues:

**MongoDB Connection Error:**
- Ensure MongoDB is running
- Check connection string in .env
- Verify network connectivity

**CORS Errors:**
- Update FRONTEND_URL in .env
- Check if frontend is running on correct port

**Rate Limiting:**
- Wait 15 minutes or restart server
- Adjust rate limits in server code

**Port Already in Use:**
- Change PORT in .env file
- Kill existing process: `lsof -ti:5000 | xargs kill -9`

## Support

For issues or questions:
- Check server logs for detailed error messages
- Verify environment variables are set correctly
- Ensure all dependencies are installed
- Test with simple curl requests first