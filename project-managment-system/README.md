# Project Management System

A full-stack project management platform inspired by Jira, Linear, and Trello, built with React, Express, Prisma, Clerk, and Inngest.

## Overview

This application helps organizations manage projects, tasks, team members, deadlines, and notifications in one place. It includes authenticated organization membership, role-based access, project and task management, and background workflows for email reminders.

## Features

- Clerk authentication and organization membership
- Role-based organization access (Admin / Member)
- Project creation, editing, deletion, and overview
- Task management with Kanban workflow and filtering
- Dashboard metrics for projects and tasks
- Search and filtering by assignee, status, and priority
- Notification email workflows via Inngest + Resend
- Prisma PostgreSQL persistence
- Responsive SaaS-style React UI

## Tech Stack

- Frontend: React, TypeScript, Vite, Tailwind CSS, React Router
- Backend: Node.js, Express, TypeScript, Zod
- Database: PostgreSQL, Prisma ORM
- Auth: Clerk + Clerk Organizations
- Background jobs: Inngest
- Email: Resend
- Validation: Zod

## Architecture

- Client app: `client/`
- Server API: `server/`
- Prisma schema: `server/prisma/schema.prisma`
- Inngest jobs: `server/src/inngest/`

## Folder Structure

```text
project-management-system/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── App.tsx
│   └── ...
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── inngest/
│   │   ├── utils/
│   │   └── server.ts
│   ├── prisma/
│   ├── .env.example
│   └── package.json
├── package.json
├── .gitignore
├── README.md
└── .env.example
```

## Prerequisites

- Node.js 20+
- npm 10+
- PostgreSQL database
- Clerk account
- Resend account
- Inngest account

## Clerk Setup

1. Create a Clerk app.
2. Enable Organizations.
3. Add your publishable key to the frontend `.env` file.
4. Add the secret key to the backend `.env` file.
5. Configure allowed sign-in and organization settings in Clerk.

## Neon PostgreSQL Setup

1. Create a Neon project.
2. Copy the database connection string.
3. Add it to `DATABASE_URL` in `server/.env`.
4. Run Prisma migrations.

## Prisma Setup

```bash
cd server
npx prisma init
npx prisma migrate dev --name init
npx prisma generate
```

## Inngest Setup

1. Create an Inngest project.
2. Add `INNGEST_EVENT_KEY` and `INNGEST_SIGNING_KEY`.
3. Start the local dev server with the Inngest CLI.

## Resend Setup

1. Create a Resend account.
2. Add your API key in `RESEND_API_KEY`.
3. Use the email sender domain you configure in Resend.

## Environment Variables

Create `server/.env` and `client/.env` from the examples.

### Server variables

```bash
DATABASE_URL=
CLERK_SECRET_KEY=
VITE_CLERK_PUBLISHABLE_KEY=
RESEND_API_KEY=
INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=
CLIENT_URL=http://localhost:5173
SERVER_URL=http://localhost:4000
PORT=4000
NODE_ENV=development
```

### Client variables

```bash
VITE_CLERK_PUBLISHABLE_KEY=
VITE_API_URL=http://localhost:4000/api
```

## Database Migration Commands

```bash
cd server
npx prisma migrate dev
npx prisma migrate deploy
npx prisma generate
```

## Run Frontend

```bash
cd client
npm install
npm run dev
```

## Run Backend

```bash
cd server
npm install
npm run dev
```

## Run Inngest Locally

```bash
cd server
npx inngest-cli@latest dev
```

## Production Deployment

- Build the frontend with `npm --prefix client run build`
- Build the backend with `npm --prefix server run build`
- Deploy the Express server, Prisma database, and static frontend assets to your hosting provider
- Configure environment variables securely on the host
- Provision the Clerk, Resend, and Inngest credentials in production

## API Endpoints

- `GET /health`
- `GET /api/organizations`
- `GET /api/organizations/:id`
- `GET /api/organizations/:id/members`
- `GET /api/projects`
- `POST /api/projects`
- `GET /api/projects/:id`
- `PUT /api/projects/:id`
- `DELETE /api/projects/:id`
- `GET /api/tasks`
- `POST /api/tasks`
- `GET /api/tasks/:id`
- `PUT /api/tasks/:id`
- `DELETE /api/tasks/:id`

## Notes

This project is structured for a real production-ready SaaS workflow and can be extended with Clerk webhooks, Prisma migrations, richer task comments, and a dedicated admin console.
