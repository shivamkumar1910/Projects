import { Router } from 'express';
import { z } from 'zod';
import { requireAuth } from '../middleware/auth.js';
import { organizationSchema } from '../validation/schemas.js';
import { AppError } from '../utils/errors.js';
import { appStore } from '../data/store.js';
import { listOrganizationsForUser, getOrganizationById } from '../services/organizationService.js';

const router = Router();

router.use(requireAuth);

router.get('/', (req, res) => {
  const userId = (req as any).auth.userId;
  res.json(listOrganizationsForUser(userId));
});

router.get('/:id', (req, res) => {
  const userId = (req as any).auth.userId;
  const organization = getOrganizationById(req.params.id);
  if (!organization.members.some((member) => member.userId === userId)) {
    throw new AppError('Access denied', 403);
  }
  res.json(organization);
});

router.post('/', (req, res) => {
  const parsed = organizationSchema.safeParse(req.body);
  if (!parsed.success) {
    throw new AppError('Invalid organization payload', 400, parsed.error.flatten());
  }

  const userId = (req as any).auth.userId;
  const nextOrg = {
    id: `org_${Date.now()}`,
    name: parsed.data.name,
    members: [{ userId, role: 'Admin' as const }],
    projects: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  appStore.organizations.push(nextOrg);
  res.status(201).json(nextOrg);
});

export default router;
