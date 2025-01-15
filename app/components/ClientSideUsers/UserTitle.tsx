import type { ChangeEventHandler } from 'react';
import type { User } from 'store/auth';
import { useQueryClient } from '@tanstack/react-query';
import { memo } from 'react';
import { useAuthStore, useCurrentUserName } from 'store/auth';

export const UserTitle = memo(({ id }: { id: string }) => {
  const { changeUser } = useAuthStore(['changeUser']);
  const userName = useCurrentUserName(id);
  const queryClient = useQueryClient();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    changeUser({ id, updates: { name: e.target.value } });

    queryClient.setQueryData<User>([Number(id), 'user'], prev => ({ ...prev!, name: e.target.value }));
  };
  return (
    <h2 className="max-w-[200px] text-lg font-semibold text-gray-800">
      <input
        type="text"
        className="w-[190px] "
        value={userName}
        onChange={handleChange}
      />
    </h2>
  );
});
