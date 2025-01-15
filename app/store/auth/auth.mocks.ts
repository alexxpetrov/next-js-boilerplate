import type { User } from './auth.types';
import { v4 as uuid } from 'uuid';

export function getMockUser(overrides: Partial<User> = {}): User {
  return {
    id: uuid(),
    name: 'John Doe',
    email: 'test@example.com',
    ...overrides,
  };
}
