# Job Portal - Frontend

A modern job search and application platform built with React and Vite. Part of the MERN Stack project collection.

## 📋 Project Description

This is the frontend component of a comprehensive job portal application that connects job seekers with employers. Users can search for job opportunities, apply to positions, track application status, and manage their professional profiles. Employers can post jobs, review applications, and manage their job listings through an intuitive and responsive interface.

## 🛠️ Technology Stack

### Core Technologies
- **React**: Modern JavaScript library for building interactive user interfaces
- **Vite**: Lightning-fast frontend build tool with Hot Module Replacement (HMR)
- **Tailwind CSS**: Utility-first CSS framework for responsive and elegant design
- **JavaScript (ES6+)**: Modern JavaScript for application logic

### State Management & HTTP
- **Context API**: Built-in React state management for application-wide data
- **Axios**: Promise-based HTTP client for seamless API communication
- **React Router**: Client-side routing for navigation between pages

### Development Tools
- **ESLint**: JavaScript linting for code quality
- **Babel/SWC**: Fast refresh capability for development
- **npm**: Package management

## 📁 Project Structure

```
src/
├── components/              # Reusable React components
│   ├── JobCard/            # Job listing card component
│   ├── JobDetails/         # Detailed job view
│   ├── SearchFilter/       # Search and filter components
│   ├── ApplicationForm/    # Job application form
│   ├── Header/             # Navigation header
│   ├── Profile/            # User profile components
│   └── ...
├── pages/                  # Page-level components
│   ├── Home/               # Homepage with job listings
│   ├── JobSearch/          # Advanced job search page
│   ├── JobDetails/         # Single job details page
│   ├── Profile/            # User profile management
│   ├── MyApplications/     # Track application status
│   ├── PostJob/            # Post a job (for employers)
│   ├── Dashboard/          # Employer dashboard
│   └── Settings/           # Account settings
├── context/                # React Context for state management
│   ├── AuthContext.jsx     # Authentication state
│   ├── JobContext.jsx      # Jobs and job listings state
│   ├── ApplicationContext.jsx  # Applications state
│   └── UserContext.jsx     # User data state
├── hooks/                  # Custom React hooks
├── services/               # API service functions
├── styles/                 # Global CSS and Tailwind config
├── utils/                  # Utility functions and helpers
├── assets/                 # Images and static assets
├── App.jsx                 # Main App component
└── main.jsx                # Entry point
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js v16+ ([Download](https://nodejs.org/))
- npm v7+ or yarn (comes with Node.js)
- Git for version control

### Steps

1. **Navigate to frontend directory**
   ```bash
   cd job\ portal/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root of the frontend directory:
   ```
   VITE_API_BASE_URL=http://localhost:5000/api
   VITE_APP_NAME=Job Portal
   VITE_ITEMS_PER_PAGE=10
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   The application will open at `http://localhost:5173`

## 📝 Available Scripts

### `npm run dev`
Runs the application in development mode with Hot Module Replacement (HMR) for instant updates as you make changes.

### `npm run build`
Builds the application for production. The optimized build is output to the `dist` folder ready for deployment.

### `npm run preview`
Locally preview the production build before deployment.

### `npm run lint`
Runs ESLint to check code quality and identify potential issues. Use `npm run lint -- --fix` to auto-fix issues.

## ✨ Features

### For Job Seekers
- **Job Search**: Browse comprehensive job listings with advanced search capabilities
- **Filter & Sort**: Filter by location, salary, job type, experience level, and industry
- **Job Details**: View detailed job descriptions, requirements, and company information
- **Apply to Jobs**: Submit applications directly through the platform
- **Application Tracking**: Monitor application status in real-time
- **Profile Management**: Create and update professional profile with resume and experience
- **Save Jobs**: Bookmark favorite job listings for later review
- **Job Alerts**: Set up notifications for relevant job postings
- **Application History**: View complete history of submitted applications

### For Employers
- **Post Jobs**: Create and publish job openings with detailed descriptions
- **Manage Listings**: Edit, update, or remove job postings
- **Application Management**: Review and manage job applications from candidates
- **Candidate Screening**: View candidate profiles and resumes
- **Dashboard**: Track job performance and application metrics
- **Analytics**: Monitor job views, clicks, and application rates
- **Company Profile**: Showcase company information and culture

### Common Features
- **User Authentication**: Secure login and registration system
- **Account Types**: Support for both job seeker and employer accounts
- **Responsive Design**: Fully responsive UI for all device sizes
- **Search Functionality**: Powerful search across jobs and candidates
- **Messaging**: In-app communication between employers and candidates (if implemented)

## 🔗 Integration with Backend

The frontend communicates with the backend API through:
- **REST API**: For CRUD operations on jobs, applications, and user profiles
- **Authentication**: JWT tokens stored in localStorage for authenticated requests
- **File Upload**: Resume and profile image uploads to server/cloud storage

### API Base URL
Configure the `VITE_API_BASE_URL` environment variable to point to your backend server.

### Key API Endpoints
- `GET /api/jobs` - Get all job listings
- `GET /api/jobs/:id` - Get job details
- `POST /api/jobs` - Post a new job (employer only)
- `POST /api/applications` - Submit job application
- `GET /api/applications` - Get user applications
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

## 📦 Dependencies

### Core Dependencies
- `react`: UI library
- `react-dom`: React DOM rendering
- `react-router-dom`: Client-side routing
- `axios`: HTTP client library
- `tailwindcss`: CSS framework

### Dev Dependencies
- `vite`: Build tool
- `@vitejs/plugin-react`: Vite React plugin
- `eslint`: Code linting
- `eslint-plugin-react`: React linting rules

## 🎨 Styling

This project uses **Tailwind CSS** for styling. Key features:
- Utility-first CSS approach
- Fully responsive design system
- Customizable theme configuration in `tailwind.config.js`
- Post-CSS processing for production optimization

### Customization
Modify `tailwind.config.js` to customize:
- Color schemes (job portal branding)
- Typography and spacing
- Responsive breakpoints
- Custom components

## 🧪 Development Workflow

### Hot Module Replacement (HMR)
Changes to React components are instantly reflected in the browser without full page reload, significantly improving development speed.

### Component Reusability
The project follows component-based architecture with:
- Reusable UI components for job cards, filters, forms
- Shared business logic through custom hooks
- Centralized state management with Context API
- Service layer for all API calls

### Pagination & Search
- Efficient pagination for large job listings
- Real-time search capabilities
- Advanced filtering options
- Sort options (newest, salary, relevance)

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is already in use:
```bash
# Vite will automatically use the next available port
npm run dev
# Check terminal output for the assigned port
```

### API Connection Issues
- Verify `VITE_API_BASE_URL` in `.env` points to running backend
- Check backend server is running on port 5000
- Verify CORS configuration on backend allows frontend domain
- Check browser console for detailed error messages

### Authentication Issues
- Ensure JWT token is being saved correctly in localStorage
- Check that authentication headers are being sent with API requests
- Verify token expiration and refresh token mechanism

### File Upload Issues
- Verify backend file upload endpoint is configured correctly
- Check file size limits on both client and server
- Ensure proper MIME type validation

### Build Failures
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install

# Clear build cache
rm -rf dist
npm run build
```

## 📱 Responsive Design

The application is optimized for all screen sizes:
- **Mobile**: 320px - 767px (Portrait & Landscape)
- **Tablet**: 768px - 1024px
- **Desktop**: 1025px and above
- **Large Screens**: Full responsive support with optimized layouts

### Mobile Optimizations
- Touch-friendly buttons and form inputs
- Vertical layout for small screens
- Simplified navigation menu
- Optimized images for mobile devices

## 🚀 Production Build

### Building for Production
```bash
npm run build
```

The `dist` folder contains:
- Minified JavaScript bundles
- Optimized CSS with tree-shaking
- Hash-based filenames for cache busting
- Compressed assets

### Deployment
Deploy the contents of the `dist` folder to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- DigitalOcean
- Any static hosting service

## 📊 Performance Optimization

- **Code Splitting**: Automatic route-based code splitting with React Router
- **Lazy Loading**: Components loaded on-demand to reduce initial bundle size
- **Image Optimization**: Compressed and lazy-loaded images
- **Tree Shaking**: Unused code automatically removed during build
- **Caching**: Browser caching strategies for static assets
- **Minification**: Production builds are automatically minified

## 🔐 Security Considerations

- **XSS Protection**: React automatically escapes JSX content
- **CSRF Tokens**: Included in API requests where applicable
- **Secure Storage**: Authentication tokens stored securely (HttpOnly cookies recommended)
- **API Rate Limiting**: Respect backend rate limits
- **Input Validation**: Client-side validation before server submission
- **Sensitive Data**: Never store passwords in localStorage

## 🔍 Search & Filtering

### Search Capabilities
- Full-text search across job titles and descriptions
- Search by company name
- Search by location
- Combined search with filters

### Filter Options
- **Job Type**: Full-time, Part-time, Contract, Freelance
- **Experience Level**: Fresher, Mid-level, Senior, Lead
- **Salary Range**: Customizable minimum and maximum salary
- **Location**: By city, state, or remote options
- **Industry**: By sector or category
- **Posted Date**: Last 24 hours, week, month, or all

## 📋 Pagination

- Efficient pagination for large datasets
- Configurable items per page
- Previous/Next navigation
- Jump to page functionality
- Total results display

## 📚 Learning Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com/)
- [Axios Documentation](https://axios-http.com/)
- [ESLint Documentation](https://eslint.org/docs/)


