import { useAuthStore } from './auth.store';

export function useCurrentUsers() {
  return useAuthStore(state => Object.keys(state.selectedUsers));
}

export function useCurrentUser(id: string) {
  return useAuthStore(state => state.selectedUsers[id]);
}
export function useCurrentUserName(id: string) {
  return useAuthStore(state => state.selectedUsers[id].name);
}
export function useCurrentUserEmail(id: string) {
  return useAuthStore(state => state.selectedUsers[id].email);
}
