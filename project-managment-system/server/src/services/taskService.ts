import { AppError } from '../utils/errors.js';
import { appStore, type Task } from '../data/store.js';
import { canAccessOrganization, isAdmin } from './organizationService.js';

export const listTasks = (userId: string, organizationId?: string, projectId?: string) => {
  const organizationScope = appStore.tasks.filter((task) => {
    if (organizationId && task.organizationId !== organizationId) return false;
    if (projectId && task.projectId !== projectId) return false;
    return canAccessOrganization(userId, task.organizationId);
  });

  return organizationScope;
};

export const createTask = (input: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>, userId: string) => {
  if (!canAccessOrganization(userId, input.organizationId)) {
    throw new AppError('Access denied', 403);
  }

  const task: Task = {
    ...input,
    id: `task_${Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  appStore.tasks.push(task);

  return task;
};

export const getTaskById = (taskId: string, userId: string) => {
  const task = appStore.tasks.find((entry) => entry.id === taskId);
  if (!task) {
    throw new AppError('Task not found', 404);
  }

  if (!canAccessOrganization(userId, task.organizationId)) {
    throw new AppError('Access denied', 403);
  }

  return task;
};

export const updateTask = (taskId: string, updates: Partial<Task>, userId: string) => {
  const task = getTaskById(taskId, userId);
  if (!isAdmin(userId, task.organizationId) && task.assignedTo !== userId) {
    throw new AppError('You can only edit your assigned tasks or be an admin', 403);
  }

  const nextTask = { ...task, ...updates, updatedAt: new Date().toISOString() };
  const index = appStore.tasks.findIndex((entry) => entry.id === taskId);
  appStore.tasks[index] = nextTask;
  return nextTask;
};

export const deleteTask = (taskId: string, userId: string) => {
  const task = getTaskById(taskId, userId);
  if (!isAdmin(userId, task.organizationId)) {
    throw new AppError('Only admins can delete tasks', 403);
  }

  appStore.tasks = appStore.tasks.filter((entry) => entry.id !== taskId);
  return { success: true };
};
