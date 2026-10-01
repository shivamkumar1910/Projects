import { z } from 'zod';

export const projectStatusEnum = ['Planning', 'Active', 'On Hold', 'Completed'] as const;
export const taskStatusEnum = ['TODO', 'IN_PROGRESS', 'IN_REVIEW', 'DONE'] as const;
export const taskPriorityEnum = ['LOW', 'MEDIUM', 'HIGH', 'URGENT'] as const;

export const createProjectSchema = z.object({
  name: z.string().min(2).max(120),
  description: z.string().min(10).max(2000).optional().or(z.literal('')),
  status: z.enum(projectStatusEnum).default('Planning'),
  startDate: z.string().datetime({ local: true }).or(z.string().regex(/^\d{4}-\d{2}-\d{2}$/)).optional(),
  dueDate: z.string().datetime({ local: true }).or(z.string().regex(/^\d{4}-\d{2}-\d{2}$/)).optional(),
});

export const updateProjectSchema = createProjectSchema.partial();

export const createTaskSchema = z.object({
  title: z.string().min(2).max(150),
  description: z.string().min(10).max(3000).optional().or(z.literal('')),
  projectId: z.string().min(1),
  status: z.enum(taskStatusEnum).default('TODO'),
  priority: z.enum(taskPriorityEnum).default('MEDIUM'),
  assignedTo: z.string().min(1).optional(),
  dueDate: z.string().datetime({ local: true }).or(z.string().regex(/^\d{4}-\d{2}-\d{2}$/)).optional(),
});

export const updateTaskSchema = createTaskSchema.partial();

export const organizationSchema = z.object({
  name: z.string().min(2).max(120),
});
