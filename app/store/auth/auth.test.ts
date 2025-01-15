import { authApi } from 'services/user/api';
import { afterAll, describe, expect, it, vi } from 'vitest';
import { getMockUser } from './auth.mocks';

describe('Auth Store', () => {
  const mockUser = getMockUser({ id: '1' });
  const getCurrentUserSpy = vi.spyOn(authApi, 'getUser');

  afterAll(() => {
    getCurrentUserSpy.mockRestore();
  });

  it('should fetch the current user', async () => {
    getCurrentUserSpy.mockResolvedValue(mockUser);
    const user = await authApi.getUser('1');

    expect(user).toEqual(mockUser);
  });

  it('should set to null if no user', async () => {
    getCurrentUserSpy.mockResolvedValue(null);
    const user = await authApi.getUser('1');

    expect(user).toBeNull();
  });
});
