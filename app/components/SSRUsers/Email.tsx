import type { User } from 'store/auth';
import { useQueryClient } from '@tanstack/react-query';
import { memo, useMemo } from 'react';

export const Email = memo(({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  const userData = useMemo<User | undefined>(() => queryClient.getQueryData([Number(id), 'user']), [id, queryClient]);

  return (
    <p className="text-sm text-gray-600">
      {userData?.email}
    </p>
  );
});
