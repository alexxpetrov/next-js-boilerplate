import { useSuspenseQuery } from '@tanstack/react-query';
import { memo } from 'react';
import { authApi } from 'services/user/api';

export const Comments = memo(({ id }: { id: string }) => {
  const { data } = useSuspenseQuery({
    queryKey: [id, 'comments'],
    queryFn: () => authApi.getComments(id),
  });

  return (
    <div className="mt-2 text-sm text-gray-600">
      Comment:
      {' '}
      {data.body}
    </div>
  );
});
