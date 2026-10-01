import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut, SignIn, SignUp, UserButton } from '@clerk/clerk-react';
import { DashboardPage } from './pages/DashboardPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { TasksPage } from './pages/TasksPage';
import { SettingsPage } from './pages/SettingsPage';
import './App.css';

const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || 'pk_test_placeholder';

function AuthShell() {
  return (
    <>
      <SignedOut>
        <div className="auth-shell">
          <div className="auth-card">
            <div className="auth-header">
              <div className="brand-mark">PM</div>
              <h1>ProjectFlow</h1>
              <p>Organize work across projects, teams, and deadlines.</p>
            </div>
            <div className="auth-forms">
              <SignIn routing="hash" />
              <SignUp routing="hash" />
            </div>
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="app-shell">
          <aside className="sidebar">
            <div className="brand-row">
              <div className="brand-mark">PM</div>
              <div>
                <div className="brand-name">ProjectFlow</div>
                <div className="brand-subtitle">Workspace</div>
              </div>
            </div>

            <nav className="nav">
              <a href="/">Dashboard</a>
              <a href="/projects">Projects</a>
              <a href="/tasks">My Tasks</a>
              <a href="/settings">Settings</a>
            </nav>

            <div className="user-box">
              <UserButton afterSignOutUrl="/" />
            </div>
          </aside>

          <main className="content-panel">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </SignedIn>
    </>
  );
}

function App() {
  return (
    <ClerkProvider publishableKey={clerkKey}>
      <BrowserRouter>
        <AuthShell />
      </BrowserRouter>
    </ClerkProvider>
  );
}

export default App;
