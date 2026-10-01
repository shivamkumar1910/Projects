import type { Request, Response, NextFunction } from 'express';
import { getAuth } from '@clerk/express';
import { AppError } from '../utils/errors.js';

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const { userId, sessionClaims } = getAuth(req);

  if (!userId || !sessionClaims) {
    return next(new AppError('Authentication required', 401));
  }

  (req as Request & { auth: { userId: string; sessionClaims: unknown } }).auth = {
    userId,
    sessionClaims,
  };

  return next();
};
