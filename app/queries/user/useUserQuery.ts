import type { User } from 'store/auth';
import { useSuspenseQuery } from '@tanstack/react-query';
import { authApi } from '../../services/user/api';

export const useSuspenseUsersQuery = () => {
  return useSuspenseQuery<User[] | null>({
    queryKey: ['users'],
    queryFn: authApi.getUsers,
  });
};

export const useSuspenseUserQuery = (id: string) => {
  return useSuspenseQuery<User | null>({ queryKey: [id, 'user'], queryFn: () => authApi.getUser(id) });
};
export const useSuspenseUserEmailQuery = (id: string) => {
  return useSuspenseQuery<User | null>({ queryKey: [id, 'user'], queryFn: () => authApi.getUser(id) }).data?.email;
};
