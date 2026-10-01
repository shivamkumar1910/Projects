import { Router } from 'express';
import { createTaskSchema, updateTaskSchema } from '../validation/schemas.js';
import { AppError } from '../utils/errors.js';
import { createTask, deleteTask, getTaskById, listTasks, updateTask } from '../services/taskService.js';

const router = Router();

router.get('/', (req, res) => {
  const userId = (req as any).auth.userId;
  const organizationId = req.query.organizationId as string | undefined;
  const projectId = req.query.projectId as string | undefined;
  res.json(listTasks(userId, organizationId, projectId));
});

router.post('/', (req, res) => {
  const parsed = createTaskSchema.safeParse(req.body);
  if (!parsed.success) {
    throw new AppError('Invalid task payload', 400, parsed.error.flatten());
  }

  const userId = (req as any).auth.userId;
  const task = createTask({
    ...parsed.data,
    organizationId: req.body.organizationId,
    createdBy: userId,
    assignedTo: parsed.data.assignedTo ?? null,
    status: parsed.data.status ?? 'TODO',
    priority: parsed.data.priority ?? 'MEDIUM',
    dueDate: parsed.data.dueDate ?? null,
    description: parsed.data.description ?? undefined,
  }, userId);

  res.status(201).json(task);
});

router.get('/:id', (req, res) => {
  const userId = (req as any).auth.userId;
  res.json(getTaskById(req.params.id, userId));
});

router.put('/:id', (req, res) => {
  const parsed = updateTaskSchema.safeParse(req.body);
  if (!parsed.success) {
    throw new AppError('Invalid task payload', 400, parsed.error.flatten());
  }

  const userId = (req as any).auth.userId;
  res.json(updateTask(req.params.id, parsed.data as any, userId));
});

router.delete('/:id', (req, res) => {
  const userId = (req as any).auth.userId;
  res.json(deleteTask(req.params.id, userId));
});

export default router;
