# Eventora - Full-Stack Event Booking Platform

Eventora is a comprehensive full-stack MERN (MongoDB, Express, React, Node.js) application designed to revolutionize event management and booking. Users can seamlessly browse, register, and book event tickets with secure payment processing integrated natively, eliminating the need for third-party payment gateways. The platform features a robust administrative dashboard for event organizers to create, manage, and monitor both free and paid events with complete booking oversight.

## ✨ Key Features

### User Features
- **User Authentication**: Secure login and registration system with JWT tokens and bcrypt password encryption
- **2FA OTP Verification**: 
  - Mandatory Email OTP verification during registration to activate your account
  - Secondary OTP verification required for finalizing event ticket bookings for enhanced security
- **Event Discovery**: Browse comprehensive event listings with advanced filtering and search capabilities
- **Smart Booking System**:
  - Secure OTP-based authorization for all booking requests
  - Real-time seat availability tracking with anti-overbooking validation
  - Pending booking queue system managed by administrators
- **Personal Dashboard**: View booking history, pending requests, and booking status
- **Booking Management**: Easy cancellation and modification of bookings
- **Email Notifications**: Automated email confirmations for successful bookings

### Admin Features
- **Role-Based Access Control**: Strict database-level access restrictions for administrative users only
- **Event Management**: Create, edit, and delete events with detailed information including descriptions, dates, categories, and seating capacity
- **Booking Management**: 
  - Review and approve/reject all booking requests
  - Mark bookings as paid or unpaid
  - Full control over booking lifecycle management
- **Analytics Dashboard**: Real-time insights including:
  - Pending booking requests count
  - Total revenue from paid events
  - Total confirmed paid bookings
  - Event-wise booking statistics
- **Financial Tracking**: Comprehensive revenue management and payment status monitoring

## 🛠️ Technology Stack

### Frontend
- **React**: Modern UI library for dynamic user interfaces
- **Vite**: Next-generation frontend build tool for optimized development
- **Tailwind CSS**: Utility-first CSS framework for elegant and responsive design
- **Axios**: HTTP client for seamless API communication
- **Context API**: State management for application-level data

### Backend
- **Node.js**: JavaScript runtime for server-side execution
- **Express.js**: Minimal and flexible web application framework
- **MongoDB**: NoSQL database for flexible data modeling
- **JWT (JSON Web Tokens)**: Secure authentication mechanism
- **bcrypt**: Password hashing for enhanced security
- **Nodemailer**: Email service for automated notifications

### Development Tools
- **Concurrently**: Run multiple npm scripts simultaneously
- **dotenv**: Environment variable management
- **CORS**: Cross-Origin Resource Sharing middleware

## 📁 Project Structure

```
Eventora/
├── client/                 # React Frontend Application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── context/       # Context API setup
│   │   ├── utils/         # Utility functions
│   │   ├── styles/        # Tailwind CSS configs
│   │   └── App.jsx        # Main App component
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── server/                 # Node.js Backend Application
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API endpoints
│   ├── controllers/       # Business logic handlers
│   ├── middleware/        # Custom middleware
│   ├── utils/             # Utility functions
│   ├── .env               # Environment variables
│   ├── server.js          # Entry point
│   └── package.json
│
├── Eventora_Postman_Collection.json  # API testing collection
├── SETUP_GUIDE.md         # Detailed setup documentation
├── package.json           # Root package.json
└── README.md             # This file
```

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js** v14 or higher ([Download](https://nodejs.org/))
- **npm** v6 or higher (comes with Node.js)
- **MongoDB** account ([MongoDB Atlas Free Tier](https://www.mongodb.com/cloud/atlas/register))

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd Eventora
```

### Step 2: Environment Variables Configuration

Navigate to the `server/` directory and create a `.env` file with the following variables:

```env
# Database Configuration
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/eventora

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_change_in_production

# Email Configuration (Gmail)
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_PASS=your_gmail_app_password

# Server Configuration
PORT=5000
NODE_ENV=development
```

> **Important Note**: For `EMAIL_PASS`, you must generate an "App Password" from your [Google Account Security Settings](https://myaccount.google.com/apppasswords). Regular passwords will not work due to Google's 2FA requirements.

### Step 3: Install Dependencies

**Option A: Install Everything from Root (Recommended)**
```bash
npm install
npm run install:all
```

**Option B: Install Separately**

Backend:
```bash
cd server
npm install --legacy-peer-deps
```

Frontend:
```bash
cd client
npm install
```

### Step 4: Run the Application

**Option A: Run Both from Root (Recommended)**
```bash
npm run dev
```

**Option B: Run Separately**

Backend Terminal:
```bash
cd server
npm run dev
```
Server runs on `http://localhost:5000`

Frontend Terminal:
```bash
cd client
npm run dev
```
Client runs on `http://localhost:5173` (or port shown in terminal)

## 📝 Available Scripts

### Root Level
- `npm run install:all` - Install dependencies for both server and client
- `npm run dev` - Start both backend and frontend using Concurrently
- `npm run dev:all` - Install dependencies and start both in one command
- `npm start` - Run backend start + frontend preview

### Backend (server/)
- `npm run dev` - Run backend in development mode with nodemon
- `npm start` - Start backend server
- `npm run seed` - Seed database with initial data (if available)

### Frontend (client/)
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🔐 Security Features

- **Password Encryption**: All passwords are hashed using bcrypt with salt rounds for security
- **JWT Authentication**: Secure token-based authentication mechanism
- **OTP Verification**: Two-factor authentication via email for critical operations
- **Role-Based Access Control**: Strict database-level authorization for admin functions
- **Input Validation**: Server-side validation of all incoming requests
- **Environment Variables**: Sensitive information kept in .env files, never committed to version control

## 📊 API Documentation

A comprehensive Postman collection is provided: **`Eventora_Postman_Collection.json`**

To import and use:
1. Open Postman
2. Click "Import" → Select the JSON file
3. Configure environment variables in Postman
4. Start testing API endpoints

### Key API Endpoints

**Authentication**
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/verify-otp` - OTP verification

**Events**
- `GET /api/events` - Get all events
- `GET /api/events/:id` - Get event details
- `POST /api/events` - Create event (Admin only)
- `PUT /api/events/:id` - Update event (Admin only)
- `DELETE /api/events/:id` - Delete event (Admin only)

**Bookings**
- `POST /api/bookings` - Create booking request
- `GET /api/bookings` - Get user bookings
- `PUT /api/bookings/:id` - Update booking status (Admin only)
- `DELETE /api/bookings/:id` - Cancel booking

## 🐛 Troubleshooting

### Port Already in Use
If port 5000 or 5173 is already in use:
```bash
# Find process using port 5000
lsof -i :5000
# Kill process
kill -9 <PID>
```

### MongoDB Connection Issues
- Verify MongoDB URI in `.env` is correct
- Check MongoDB Atlas IP whitelist includes your current IP
- Ensure MongoDB Atlas cluster is active

### Email Not Sending
- Verify Gmail App Password is correct (not regular password)
- Enable "Less secure app access" if using Gmail (not recommended)
- Check EMAIL_USER and EMAIL_PASS in `.env`
- Verify internet connection

### Dependencies Installation Fails
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install --legacy-peer-deps
```

## 📱 Responsive Design

Eventora is fully responsive and optimized for:
- Desktop browsers (1920px and above)
- Tablets (768px - 1024px)
- Mobile devices (320px - 767px)

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
```bash
cd client
npm run build
```
Deploy the `dist/` folder to your preferred hosting platform.

### Backend Deployment (Heroku/Railway)
1. Update environment variables on your hosting platform
2. Push code to repository
3. Configure automatic deployments from repository
4. Backend will run on provided URL

## 📚 Additional Resources

- [MERN Stack Documentation](https://www.mongodb.com/languages/mern-stack)
- [Express.js Guide](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)

