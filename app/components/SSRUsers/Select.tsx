import { useQueryClient } from '@tanstack/react-query';
import { memo } from 'react';
import { useAuthStore } from 'store/auth';

export const Select = memo(({ id }: { id: string }) => {
  const setUsers = useAuthStore(state => state.selectUser);

  const queryClient = useQueryClient();

  const handleSelect = () => {
    setUsers(queryClient.getQueryData([Number(id), 'user'])!);
  };

  return (
    <button onClick={handleSelect} type="button">
      Select
    </button>
  );
});
