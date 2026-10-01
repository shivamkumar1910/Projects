import { AppError } from '../utils/errors.js';
import { appStore, type Project } from '../data/store.js';
import { canAccessOrganization, isAdmin } from './organizationService.js';

export const listProjects = (userId: string, organizationId?: string) => {
  if (organizationId) {
    if (!canAccessOrganization(userId, organizationId)) {
      throw new AppError('Access denied', 403);
    }

    return appStore.projects.filter((project) => project.organizationId === organizationId);
  }

  return appStore.projects.filter((project) =>
    appStore.organizations.some(
      (organization) =>
        organization.id === project.organizationId &&
        organization.members.some((member) => member.userId === userId),
    ),
  );
};

export const createProject = (input: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>, userId: string) => {
  if (!canAccessOrganization(userId, input.organizationId)) {
    throw new AppError('Access denied', 403);
  }

  const project: Project = {
    ...input,
    id: `project_${Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  appStore.projects.push(project);
  const organization = appStore.organizations.find((entry) => entry.id === input.organizationId);
  if (organization) {
    organization.projects.push(project.id);
    organization.updatedAt = new Date().toISOString();
  }

  return project;
};

export const getProjectById = (projectId: string, userId: string) => {
  const project = appStore.projects.find((entry) => entry.id === projectId);
  if (!project) {
    throw new AppError('Project not found', 404);
  }

  if (!canAccessOrganization(userId, project.organizationId)) {
    throw new AppError('Access denied', 403);
  }

  return project;
};

export const updateProject = (projectId: string, updates: Partial<Project>, userId: string) => {
  const project = getProjectById(projectId, userId);
  if (!isAdmin(userId, project.organizationId)) {
    throw new AppError('Only admins can edit projects', 403);
  }

  const nextProject = { ...project, ...updates, updatedAt: new Date().toISOString() };;
  const index = appStore.projects.findIndex((entry) => entry.id === projectId);
  appStore.projects[index] = nextProject;
  return nextProject;
};

export const deleteProject = (projectId: string, userId: string) => {
  const project = getProjectById(projectId, userId);
  if (!isAdmin(userId, project.organizationId)) {
    throw new AppError('Only admins can delete projects', 403);
  }

  appStore.projects = appStore.projects.filter((entry) => entry.id !== projectId);
  appStore.tasks = appStore.tasks.filter((entry) => entry.projectId !== projectId);
  return { success: true };
};
