import type { User } from './auth.types';
import { createStoreHook } from 'store/config';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { useShallow } from 'zustand/shallow';

type AuthState = {
  selectedUsers: Record<string, User>;
};

type AuthActions = {
  selectUser: (user: User | null) => void;
  removeUser: (id: string) => void;
  changeUser: ({ id, updates }: { id: string; updates: Partial<User> }) => void;
  reset: () => void;
};

const initialState: AuthState = {
  selectedUsers: {},
};

export const authStore = create(
  immer<AuthState & AuthActions>(set => ({
    ...initialState,
    selectUser: (user: User | null) => {
      set((state) => {
        if (!user) {
          return state.selectedUsers;
        }
        state.selectedUsers[user.id] = user;
      });
    },
    removeUser: (id: string) => {
      set((state) => {
        delete state.selectedUsers[id];
      });
    },
    changeUser: ({ id, updates }: { id: string; updates: Partial<User> }) => {
      set((state) => {
        if (!state.selectedUsers[id]) {
          return;
        }

        state.selectedUsers[id] = {
          ...state.selectedUsers[id],
          ...updates,
        };
      });
    },
    reset: () => {
      set({ ...initialState });
    },
  })),
);

export const useAuthStore = createStoreHook<AuthState & AuthActions>({
  store: authStore,
  useShallow,
});
