import { AppError } from '../utils/errors.js';
import { appStore } from '../data/store.js';

export const listOrganizationsForUser = (userId: string) =>
  appStore.organizations.filter((organization) =>
    organization.members.some((member) => member.userId === userId),
  );

export const getOrganizationById = (organizationId: string) => {
  const organization = appStore.organizations.find((entry) => entry.id === organizationId);
  if (!organization) {
    throw new AppError('Organization not found', 404);
  }

  return organization;
};

export const canAccessOrganization = (userId: string, organizationId: string) =>
  getOrganizationById(organizationId).members.some((member) => member.userId === userId);

export const isAdmin = (userId: string, organizationId: string) => {
  const organization = getOrganizationById(organizationId);
  return organization.members.some(
    (member) => member.userId === userId && member.role === 'Admin',
  );
};
