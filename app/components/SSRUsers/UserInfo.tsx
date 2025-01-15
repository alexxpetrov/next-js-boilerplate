import type { ChangeEventHandler } from 'react';
import type { User } from 'store/auth';
import { useQueryClient } from '@tanstack/react-query';
import { useSuspenseUserQuery } from 'queries/user/useUserQuery';
import { memo } from 'react';
import { useAuthStore } from 'store/auth';
import { Email } from './Email';

export const UserInfo = memo(({ id }: { id: string }) => {
  const { changeUser } = useAuthStore(['changeUser']);
  const { data } = useSuspenseUserQuery(id);
  const queryClient = useQueryClient();
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    changeUser({ id, updates: { name: e.target.value } });

    queryClient.setQueryData<User>([Number(id), 'user'], prev => ({ ...prev!, name: e.target.value }));
  };
  return (
    <div className="flex flex-col">
      <h2 className="max-w-[200px] text-lg font-semibold text-gray-800">
        <input
          type="text"
          className="w-[190px] "
          value={data?.name}
          onChange={handleChange}
        />
      </h2>
      <Email id={id} />
    </div>
  );
});
