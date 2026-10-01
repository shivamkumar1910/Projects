# Netflix Clone - Frontend

A modern video streaming platform clone built with React. Part of the MERN Stack project collection.

## 📋 Project Description

This is the frontend component of a comprehensive video streaming application inspired by Netflix. Users can browse extensive catalogs of movies and TV series, view detailed information about content, manage watchlists, create personalized playlists, track viewing history, and stream content seamlessly. The application delivers a premium streaming experience with an intuitive interface that mirrors Netflix's modern design and user experience patterns.

## 🛠️ Technology Stack

### Core Technologies
- **React**: Modern JavaScript library for building interactive user interfaces
- **Create React App**: Standardized React application setup with webpack and Babel
- **Tailwind CSS**: Utility-first CSS framework for responsive and elegant design
- **JavaScript (ES6+)**: Modern JavaScript for application logic

### State Management & HTTP
- **Context API**: Built-in React state management for application-wide data
- **Redux** (optional): For complex state management across components
- **Axios**: Promise-based HTTP client for seamless API communication
- **React Router**: Client-side routing for navigation between pages

### Development Tools
- **ESLint**: JavaScript linting for code quality
- **Webpack**: Module bundler (managed by Create React App)
- **Babel**: JavaScript transpiler for ES6+ support
- **npm**: Package management

## 📁 Project Structure

```
src/
├── components/              # Reusable React components
│   ├── MovieCard/          # Movie/show card component
│   ├── MovieRow/           # Horizontal scroll rows
│   ├── Hero/               # Hero banner section
│   ├── Header/             # Navigation header
│   ├── Player/             # Video player component
│   ├── Sidebar/            # Navigation sidebar
│   ├── SearchBar/          # Search functionality
│   └── ...
├── pages/                  # Page-level components
│   ├── Home/               # Homepage with trending content
│   ├── Browse/             # Content browsing page
│   ├── Search/             # Search results page
│   ├── MovieDetail/        # Movie/show details page
│   ├── Watch/              # Video player page
│   ├── MyList/             # Watchlist/favorites
│   ├── Account/            # Account settings
│   └── Profile/            # User profile
├── context/                # React Context for state management
│   ├── AuthContext.jsx     # Authentication state
│   ├── ContentContext.jsx  # Movies/shows state
│   ├── PlayerContext.jsx   # Video player state
│   └── UserContext.jsx     # User preferences and data
├── hooks/                  # Custom React hooks
├── services/               # API service functions
├── styles/                 # Global CSS and Tailwind config
├── utils/                  # Utility functions
├── assets/                 # Images, logos, and static assets
├── App.jsx                 # Main App component
└── index.js                # Entry point
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js v14+ ([Download](https://nodejs.org/))
- npm v6+ (comes with Node.js)
- Git for version control

### Steps

1. **Navigate to frontend directory**
   ```bash
   cd netflix\ clone/frontend/netflix
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root of the frontend directory:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key_here
   REACT_APP_APP_NAME=Netflix Clone
   ```

4. **Start development server**
   ```bash
   npm start
   ```
   The application will automatically open at `http://localhost:3000`

## 📝 Available Scripts

### `npm start`
Runs the application in development mode. The page will automatically reload when you make changes. Lint errors will be visible in the console.

### `npm run build`
Builds the application for production to the `build` folder. The build is minified and optimized for the best performance. Your app is ready to be deployed!

### `npm test`
Launches the test runner in interactive watch mode for running unit tests.

### `npm run eject`
**Warning**: This is a one-way operation. Once you eject, you can't go back! Use only if you need full control over configuration.

## ✨ Features

### Content Discovery
- **Homepage**: Personalized homepage with trending and recommended content
- **Browse by Category**: Filter and browse content by genre and type
- **Search Functionality**: Full-text search across entire content library
- **Advanced Filtering**: Filter by rating, release year, popularity, and more
- **Recommendations**: AI-powered content recommendations based on viewing history

### Content Information
- **Movie/Show Details**: Comprehensive information including plot, cast, ratings, duration
- **Trailers**: Watch trailers before deciding what to watch
- **Ratings & Reviews**: Community ratings and user reviews
- **Cast Information**: Details about actors and crew
- **Similar Titles**: Suggestions for similar movies or shows

### Streaming & Playback
- **Video Player**: Full-featured video player with controls
- **Playback Quality**: Adaptive streaming quality based on connection
- **Playback Resume**: Continue watching from where you left off
- **Playback Speed**: Adjustable playback speed controls
- **Subtitles & Audio**: Multiple subtitle and audio language options

### Personalization
- **User Profiles**: Create and manage multiple user profiles
- **Watchlist**: Save movies/shows to watch later
- **Continue Watching**: Quick access to partially watched content
- **Viewing History**: Track all watched content
- **Recommendations**: Personalized content suggestions

### Account Management
- **User Authentication**: Secure login and registration system
- **Profile Management**: Create and edit user profiles
- **Account Settings**: Manage account preferences and security
- **Subscription Plans** (optional): Support for different subscription tiers
- **Payment Management** (optional): Manage subscription payments

## 🔗 Integration with Backend

The frontend communicates with the backend API through:
- **REST API**: For CRUD operations on content, users, and watchlists
- **Authentication**: JWT tokens stored securely for authenticated requests
- **Content Streaming**: Direct video streaming from backend or external CDN
- **External APIs** (optional): Integration with TMDB API for content metadata

### API Base URL
Configure the `REACT_APP_API_URL` environment variable to point to your backend server.

### Key API Endpoints
- `GET /api/content` - Get all movies/shows
- `GET /api/content/trending` - Get trending content
- `GET /api/content/search` - Search content
- `GET /api/content/:id` - Get content details
- `GET /api/watchlist` - Get user watchlist
- `POST /api/watchlist` - Add to watchlist
- `DELETE /api/watchlist/:id` - Remove from watchlist
- `GET /api/users/profile` - Get user profile

## 📦 Dependencies

### Core Dependencies
- `react`: UI library
- `react-dom`: React DOM rendering
- `react-router-dom`: Client-side routing
- `axios`: HTTP client library
- `tailwindcss`: CSS framework

### Optional Dependencies
- `redux`: Advanced state management
- `react-redux`: Redux bindings for React
- `react-player`: Video player component
- `react-icons`: Icon library

## 🎨 Styling

This project uses **Tailwind CSS** for styling. Key features:
- Utility-first CSS approach
- Fully responsive design system
- Customizable theme configuration in `tailwind.config.js`
- Post-CSS processing for production optimization

### Customization
Modify `tailwind.config.js` to customize:
- Color schemes matching Netflix branding
- Typography and spacing
- Responsive breakpoints
- Custom components

## 🎬 Video Player Implementation

### Player Features
- Play, pause, rewind, and fast-forward controls
- Volume control and mute button
- Fullscreen mode
- Picture-in-picture mode
- Playback speed adjustment
- Quality selection
- Subtitle and audio track selection
- Progress bar with hover preview

### Adaptive Streaming
- Automatic quality adjustment based on network speed
- Multiple quality options for user selection
- Smooth bitrate switching without interruption
- Bandwidth monitoring and optimization

## 🧪 Development Workflow

### Hot Module Replacement (HMR)
Changes to React components are instantly reflected in the browser without full page reload, improving development speed significantly.

### Component Reusability
The project follows component-based architecture with:
- Reusable UI components for content cards, rows, and players
- Shared business logic through custom hooks
- Centralized state management with Context API
- Service layer for all API calls

### Responsive Design
- Mobile-first approach
- Flexible layouts that adapt to all screen sizes
- Touch-friendly interface for mobile devices
- Optimized images for different devices

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is already in use:
```bash
# Set custom port
PORT=3001 npm start
```

### API Connection Issues
- Verify `REACT_APP_API_URL` in `.env` points to running backend
- Check backend server is running on the configured port
- Verify CORS configuration on backend allows frontend domain
- Check browser console for detailed error messages

### Video Playback Issues
- Verify video files are accessible and correctly formatted
- Check browser supports required video codecs (H.264, VP9)
- Verify streaming server is running and accessible
- Check bandwidth is sufficient for video quality

### Build Failures
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install

# Clear build cache
rm -rf build
npm run build
```

### TMDB API Issues
- Verify API key is correctly set in `.env` file
- Check API key has appropriate permissions
- Verify API rate limits haven't been exceeded
- Check TMDB API status

## 📱 Responsive Design

The application is optimized for all screen sizes:
- **Mobile**: 320px - 767px (Portrait & Landscape)
- **Tablet**: 768px - 1024px
- **Desktop**: 1025px - 1920px
- **Large Screens**: 1921px and above

### Mobile Optimizations
- Touch-friendly navigation and controls
- Optimized video player for small screens
- Simplified layout for compact viewports
- Efficient image loading

## 🚀 Production Build

### Building for Production
```bash
npm run build
```

The `build` folder contains:
- Minified JavaScript bundles
- Optimized CSS with tree-shaking
- Hash-based filenames for cache busting
- Compressed assets

### Deployment
Deploy the contents of the `build` folder to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Heroku
- DigitalOcean
- Any static hosting service

## 📊 Performance Optimization

- **Code Splitting**: Automatic route-based code splitting with React Router
- **Lazy Loading**: Components and images loaded on-demand
- **Image Optimization**: Compressed and responsive images
- **Caching**: Browser caching strategies for static assets
- **CDN Integration**: Serve content through CDN for faster delivery
- **Minification**: Automatic minification in production builds
- **Tree Shaking**: Unused code removed during build process

## 🔐 Security Considerations

- **XSS Protection**: React automatically escapes JSX content
- **CSRF Tokens**: Included in API requests where applicable
- **Secure Storage**: Authentication tokens stored securely (HttpOnly cookies recommended)
- **API Rate Limiting**: Respect backend rate limits
- **Input Validation**: Client-side validation before submission
- **Sensitive Data**: Never store passwords or API keys in localStorage
- **HTTPS**: Always use HTTPS in production

## 🎥 Content Management

### Content Categories
- Movies
- TV Shows
- Documentaries
- Stand-up Comedy
- Kids Content
- Genres (Action, Comedy, Drama, Horror, Thriller, etc.)

### Metadata
- Title and description
- Release date and duration
- Cast and crew information
- Genre and ratings
- Poster and thumbnail images
- Trailers and promotional content

## 👥 User Profiles

- Create multiple profiles per account
- Profile-specific watchlist and history
- Profile-specific recommendations
- Kids profile with parental controls
- Avatar customization

## 📚 Learning Resources

- [React Documentation](https://react.dev/)
- [Create React App Documentation](https://create-react-app.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com/)
- [Axios Documentation](https://axios-http.com/)
- [TMDB API Documentation](https://developer.themoviedb.org/docs)
- [ESLint Documentation](https://eslint.org/docs/)


