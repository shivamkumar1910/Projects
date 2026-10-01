import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { env } from './config/env.js';
import { requireAuth } from './middleware/auth.js';
import { AppError } from './utils/errors.js';
import organizationRoutes from './routes/organizations.js';
import projectRoutes from './routes/projects.js';
import taskRoutes from './routes/tasks.js';

const app = express();

app.use(helmet());
app.use(cors({ origin: env.clientUrl, credentials: true }));
app.use(express.json());
app.use(morgan('dev'));

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api/organizations', requireAuth, organizationRoutes);
app.use('/api/projects', requireAuth, projectRoutes);
app.use('/api/tasks', requireAuth, taskRoutes);

app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message, details: err.details });
  }

  if (err instanceof Error) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }

  return res.status(500).json({ message: 'Unknown error' });
});

app.listen(env.port, () => {
  console.log(`Server listening on http://localhost:${env.port}`);
});

export default app;
