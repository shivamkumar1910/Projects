import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
});

export const hasDatabaseConfig = Boolean(process.env.DATABASE_URL);

export const getDbOrFallback = async <T>(fallback: T, task: () => Promise<T>): Promise<T> => {
  if (!hasDatabaseConfig) {
    return fallback;
  }

  try {
    return await task();
  } catch (error) {
    console.warn('Falling back to in-memory data because database is unavailable:', error);
    return fallback;
  }
};
