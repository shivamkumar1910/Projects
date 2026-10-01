import { Router } from 'express';
import { createProjectSchema, updateProjectSchema } from '../validation/schemas.js';
import { AppError } from '../utils/errors.js';
import { listProjects, createProject, getProjectById, updateProject, deleteProject } from '../services/projectService.js';

const router = Router();

router.get('/', (req, res) => {
  const userId = (req as any).auth.userId;
  const organizationId = req.query.organizationId as string | undefined;
  res.json(listProjects(userId, organizationId));
});

router.post('/', (req, res) => {
  const parsed = createProjectSchema.safeParse(req.body);
  if (!parsed.success) {
    throw new AppError('Invalid project payload', 400, parsed.error.flatten());
  }

  const userId = (req as any).auth.userId;
  const project = createProject({
    ...parsed.data,
    organizationId: req.body.organizationId,
    createdBy: userId,
    status: parsed.data.status ?? 'Planning',
  }, userId);

  res.status(201).json(project);
});

router.get('/:id', (req, res) => {
  const userId = (req as any).auth.userId;
  res.json(getProjectById(req.params.id, userId));
});

router.put('/:id', (req, res) => {
  const parsed = updateProjectSchema.safeParse(req.body);
  if (!parsed.success) {
    throw new AppError('Invalid project payload', 400, parsed.error.flatten());
  }

  const userId = (req as any).auth.userId;
  res.json(updateProject(req.params.id, parsed.data as any, userId));
});

router.delete('/:id', (req, res) => {
  const userId = (req as any).auth.userId;
  res.json(deleteProject(req.params.id, userId));
});

export default router;
