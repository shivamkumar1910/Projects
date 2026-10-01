# Chat App - Frontend

A real-time messaging application built with React and Socket.io. Part of the MERN Stack project collection.

## 📋 Project Description

This is the frontend component of a full-stack chat application that enables real-time communication between users. The application provides an intuitive interface for sending and receiving messages with live updates powered by Socket.io technology.

## 🛠️ Technology Stack

- **React**: JavaScript library for building user interfaces
- **Socket.io Client**: Real-time bidirectional communication
- **Tailwind CSS**: Utility-first CSS framework for styling
- **JavaScript (ES6+)**: Modern JavaScript for application logic

## 📁 Project Structure

```
src/
├── components/        # Reusable React components
├── pages/            # Page components
├── services/         # API and Socket.io services
├── hooks/            # Custom React hooks
├── utils/            # Utility functions
├── styles/           # Global and component styles
├── App.jsx           # Main App component
└── index.js          # Entry point
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14+)
- npm or yarn package manager

### Steps

1. **Navigate to frontend directory**
   ```bash
   cd chat\ app/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root of the frontend directory:
   ```
   REACT_APP_API_URL=http://localhost:5000
   REACT_APP_SOCKET_URL=http://localhost:5000
   ```

4. **Start development server**
   ```bash
   npm start
   ```
   The application will open in your browser at `http://localhost:3000`

## 📝 Available Scripts

### `npm start`
Runs the application in development mode. The page will automatically reload when you make changes.

### `npm run build`
Builds the application for production and creates an optimized build folder for deployment.

### `npm test`
Launches the test runner in interactive watch mode.

## ✨ Features

- **Real-time Messaging**: Send and receive messages instantly using Socket.io
- **User Authentication**: Secure login and registration system
- **Chat History**: View conversation history with other users
- **Online Status**: See which users are currently online
- **Responsive Design**: Fully responsive UI that works on desktop and mobile devices
- **User-friendly Interface**: Clean and intuitive design for seamless communication

## 🔗 Integration with Backend

This frontend communicates with the backend API via:
- **REST API**: For user authentication and data retrieval
- **Socket.io**: For real-time messaging and notifications

Ensure the backend server is running on the configured port before starting the frontend.

## 📦 Dependencies

Key dependencies include:
- `react`: Core React library
- `socket.io-client`: Socket.io client for real-time communication
- `axios`: HTTP client for API requests
- `tailwindcss`: CSS framework for styling

## 🐛 Troubleshooting

- **Port already in use**: If port 3000 is already in use, React will prompt you to use a different port
- **API Connection Issues**: Ensure the backend server is running and the API URL is correctly configured in `.env`
- **Socket.io Connection Failed**: Check that the backend socket server is running and accessible

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Socket.io Documentation](https://socket.io/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
