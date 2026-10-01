# Food App - Frontend

A modern, type-safe food delivery application built with React, TypeScript, and Vite. Part of the MERN Stack project collection.

## 📋 Project Description

This is the frontend component of a full-stack food delivery platform that enables users to browse restaurants, explore menus, place orders, and track deliveries in real-time. The application features an intuitive user interface with modern design patterns and seamless user experience built with TypeScript for enhanced code reliability and safety.

## 🛠️ Technology Stack

### Core Technologies
- **React**: Modern JavaScript library for building interactive user interfaces
- **TypeScript**: Strongly-typed JavaScript for improved code quality and developer experience
- **Vite**: Lightning-fast frontend build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for responsive and elegant design

### State Management & HTTP
- **Context API**: Built-in React state management for application-wide data
- **Axios**: Promise-based HTTP client for seamless API communication
- **React Router**: Client-side routing for navigation between pages

### Development Tools
- **ESLint**: JavaScript/TypeScript linting for code quality
- **Babel/SWC**: Fast refresh capability for development
- **TypeScript Compiler**: Type checking and compilation

## 📁 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── Header/          # Navigation and header components
│   ├── Menu/            # Food menu display components
│   ├── Cart/            # Shopping cart components
│   └── ...
├── pages/               # Page-level components
│   ├── Home/            # Homepage
│   ├── Restaurants/     # Restaurant listing
│   ├── Menu/            # Food menu page
│   ├── Cart/            # Shopping cart page
│   └── Checkout/        # Order checkout
├── context/             # React Context for state management
│   ├── AuthContext.tsx  # Authentication state
│   ├── CartContext.tsx  # Shopping cart state
│   └── ...
├── hooks/               # Custom React hooks
├── types/               # TypeScript type definitions
├── services/            # API service functions
├── styles/              # Global CSS and Tailwind config
├── utils/               # Utility functions
├── App.tsx              # Main App component
└── main.tsx             # Entry point
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js v16+ ([Download](https://nodejs.org/))
- npm v7+ or yarn (comes with Node.js)
- Git for version control

### Steps

1. **Navigate to frontend directory**
   ```bash
   cd food\ app/client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root of the client directory:
   ```
   VITE_API_BASE_URL=http://localhost:3000/api
   VITE_API_TIMEOUT=10000
   VITE_APP_NAME=Food Delivery App
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

- **Restaurant Browsing**: Explore various restaurants with detailed information
- **Menu Exploration**: View comprehensive menus with food descriptions and pricing
- **Smart Shopping Cart**: Add/remove items with real-time cart updates
- **Order Management**: 
  - Place food orders with delivery address
  - Track order status in real-time
  - View order history
- **User Authentication**: Secure login and registration system
- **User Profile**: Manage personal information and delivery addresses
- **Search & Filter**: Find restaurants and food items by category or name
- **Responsive Design**: Fully responsive UI for desktop, tablet, and mobile devices
- **Real-time Updates**: Live order tracking and status notifications
- **Payment Integration**: Seamless checkout process with multiple payment options

## 🔗 Integration with Backend

The frontend communicates with the backend API through:
- **REST API**: For CRUD operations and data fetching
- **HTTP Client**: Axios for all API requests
- **Authentication**: JWT tokens stored in localStorage

### API Base URL
Configure the `VITE_API_BASE_URL` environment variable to point to your backend server.

## 📦 Dependencies

### Core Dependencies
- `react`: UI library
- `react-dom`: React DOM rendering
- `react-router-dom`: Client-side routing
- `typescript`: Type system for JavaScript
- `axios`: HTTP client library
- `tailwindcss`: CSS framework

### Dev Dependencies
- `vite`: Build tool
- `@vitejs/plugin-react`: Vite React plugin
- `@vitejs/plugin-react-swc`: Fast refresh with SWC
- `eslint`: Code linting
- `@typescript-eslint/eslint-plugin`: TypeScript linting support

## 🎨 Styling

This project uses **Tailwind CSS** for styling. Key features:
- Utility-first CSS approach
- Fully responsive design system
- Customizable theme configuration in `tailwind.config.js`
- Post-CSS processing for production optimization

### Tailwind Configuration
Modify `tailwind.config.js` to customize:
- Color schemes
- Typography
- Spacing
- Breakpoints
- Plugins

## 🔧 TypeScript Configuration

TypeScript configurations are split into two files:

- **tsconfig.json**: Application code configuration
- **tsconfig.node.json**: Build tools and Node.js specific configuration

Key features:
- Strict type checking enabled
- JSX support for React
- Module resolution configured for optimal imports

## 🧪 Development Workflow

### Hot Module Replacement (HMR)
Changes to React components and TypeScript files are instantly reflected in the browser without full page reload, significantly improving development speed.

### Type Safety
TypeScript ensures:
- Type checking at compile time
- IntelliSense support in IDEs
- Prevention of common runtime errors
- Better code documentation through types

### ESLint Integration
Configured ESLint rules ensure:
- Consistent code style
- Best practices adherence
- Prevention of common mistakes
- Automatic fixing capabilities

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
- Check backend server is running on the configured port
- Verify CORS configuration on backend allows frontend domain
- Check browser console for detailed error messages

### Build Failures
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install

# Clear build cache
rm -rf dist
npm run build
```

### TypeScript Errors
- Ensure all dependencies are properly typed
- Check TypeScript version compatibility
- Run `npm run lint` to identify type issues
- Use `// @ts-ignore` only as last resort

## 📱 Responsive Design

The application is optimized for all screen sizes:
- **Mobile**: 320px - 767px (Portrait & Landscape)
- **Tablet**: 768px - 1024px
- **Desktop**: 1025px and above
- **Large Screens**: Full responsive support

## 🚀 Production Build

### Building for Production
```bash
npm run build
```

The `dist` folder contains:
- Minified JavaScript bundles
- Optimized CSS with tree-shaking
- Hash-based filenames for cache busting
- Source maps for debugging (optional)

### Deployment
Deploy the contents of the `dist` folder to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## 📊 Performance Optimization

- **Code Splitting**: Automatic route-based code splitting with React Router
- **Lazy Loading**: Components loaded on-demand to reduce initial bundle size
- **Tree Shaking**: Unused code automatically removed during build
- **Image Optimization**: Compressed images for faster loading
- **Caching**: Browser caching strategies for static assets

## 🔐 Security Considerations

- **XSS Protection**: React automatically escapes JSX content
- **CSRF Tokens**: Included in API requests where applicable
- **Secure Storage**: Authentication tokens stored securely (HttpOnly cookies recommended)
- **API Rate Limiting**: Respect backend rate limits
- **Input Validation**: Client-side validation before server submission

## 📚 Learning Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [ESLint Documentation](https://eslint.org/docs/)
- [Axios Documentation](https://axios-http.com/)

