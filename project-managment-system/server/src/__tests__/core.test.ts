import { describe, expect, it } from 'vitest';
import { createProjectSchema, createTaskSchema } from '../validation/schemas.js';

describe('validation schemas', () => {
  it('accepts valid project input', () => {
    const result = createProjectSchema.safeParse({
      name: 'Website redesign',
      description: 'Refresh the user experience and design system.',
      status: 'Planning',
      startDate: '2026-09-16',
      dueDate: '2026-09-30',
    });

    expect(result.success).toBe(true);
  });

  it('rejects invalid task values', () => {
    const result = createTaskSchema.safeParse({
      title: '',
      description: 'Need a better description',
      status: 'INVALID',
      priority: 'MEDIUM',
      dueDate: 'nope',
    });

    expect(result.success).toBe(false);
  });
});
