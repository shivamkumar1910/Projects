export type ProjectStatus = 'Planning' | 'Active' | 'On Hold' | 'Completed';
export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'IN_REVIEW' | 'DONE';
export type TaskPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';

export type Organization = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type Project = {
  id: string;
  name: string;
  description?: string | null;
  status: ProjectStatus;
  startDate?: string | null;
  dueDate?: string | null;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  organizationId: string;
};

export type Task = {
  id: string;
  title: string;
  description?: string | null;
  projectId: string;
  organizationId: string;
  assignedTo?: string | null;
  createdBy: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate?: string | null;
  createdAt: string;
  updatedAt: string;
};
