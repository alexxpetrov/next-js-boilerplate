import { usePrefetchQuery } from '@tanstack/react-query';
import { memo } from 'react';
import { authApi } from 'services/user/api';
import { Comments } from './Comments';
import { Select } from './Select';
import { UserInfo } from './UserInfo';

type UserListProps = {
  id: string;
};

export const User = memo(({ id }: UserListProps) => {
  usePrefetchQuery({
    queryKey: [id, 'comments'],
    queryFn: () => authApi.getComments(id),
    staleTime: 1000 * 60 * 10,
  });

  return (
    <li className="my-4">
      <div className="flex max-w-sm items-start space-x-4 rounded-xl bg-white p-6 shadow-lg">
        <div>
          <div className="flex items-start justify-between">
            <UserInfo id={id} />
            <Select id={id} />
          </div>
          <Comments id={id} />
        </div>
      </div>
    </li>
  );
});
