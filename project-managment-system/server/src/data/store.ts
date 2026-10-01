export type OrganizationMemberRole = 'Admin' | 'Member';

export type Organization = {
  id: string;
  name: string;
  members: Array<{ userId: string; role: OrganizationMemberRole }>;
  projects: string[];
  createdAt: string;
  updatedAt: string;
};

export type Project = {
  id: string;
  name: string;
  description?: string;
  status: 'Planning' | 'Active' | 'On Hold' | 'Completed';
  startDate?: string | null;
  dueDate?: string | null;
  organizationId: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
};

export type Task = {
  id: string;
  title: string;
  description?: string;
  projectId: string;
  organizationId: string;
  assignedTo?: string | null;
  createdBy: string;
  status: 'TODO' | 'IN_PROGRESS' | 'IN_REVIEW' | 'DONE';
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
  dueDate?: string | null;
  createdAt: string;
  updatedAt: string;
};

export const appStore = {
  organizations: [] as Organization[],
  projects: [] as Project[],
  tasks: [] as Task[],
};

export const seedSampleData = () => {
  if (appStore.organizations.length > 0) {
    return;
  }

  const orgId = 'org_demo_1';
  appStore.organizations.push({
    id: orgId,
    name: 'ProjectFlow Studio',
    members: [
      { userId: 'user_demo_1', role: 'Admin' },
      { userId: 'user_demo_2', role: 'Member' },
    ],
    projects: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  const projectId = 'project_demo_1';
  appStore.projects.push({
    id: projectId,
    name: 'Customer portal refresh',
    description: 'Improve onboarding and project visibility for the customer portal.',
    status: 'Active',
    startDate: '2026-09-01',
    dueDate: '2026-09-28',
    organizationId: orgId,
    createdBy: 'user_demo_1',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  appStore.tasks.push({
    id: 'task_demo_1',
    title: 'Set up authentication flow',
    description: 'Finalize Clerk-based access and role checks.',
    projectId,
    organizationId: orgId,
    assignedTo: 'user_demo_2',
    createdBy: 'user_demo_1',
    status: 'IN_PROGRESS',
    priority: 'HIGH',
    dueDate: '2026-09-18',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
};

seedSampleData();
