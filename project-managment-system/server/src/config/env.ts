import dotenv from 'dotenv';

dotenv.config();

export const env = {
  port: Number(process.env.PORT ?? 4000),
  clientUrl: process.env.CLIENT_URL ?? 'http://localhost:5173',
  serverUrl: process.env.SERVER_URL ?? 'http://localhost:4000',
  databaseUrl: process.env.DATABASE_URL ?? '',
  clerkSecretKey: process.env.CLERK_SECRET_KEY ?? '',
  clerkPublishableKey: process.env.VITE_CLERK_PUBLISHABLE_KEY ?? '',
  resendApiKey: process.env.RESEND_API_KEY ?? '',
  inngestEventKey: process.env.INNGEST_EVENT_KEY ?? '',
  inngestSigningKey: process.env.INNGEST_SIGNING_KEY ?? '',
  nodeEnv: process.env.NODE_ENV ?? 'development',
};
