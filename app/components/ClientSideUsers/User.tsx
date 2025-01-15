import { memo } from 'react';
import { useAuthStore, useCurrentUserEmail } from 'store/auth';
import { Comments } from './Comments';
import { UserTitle } from './UserTitle';

export const User = memo(({ id }: { id: string }) => {
  const email = useCurrentUserEmail(id);
  const { removeUser } = useAuthStore(['removeUser']);

  const handleRemoveUser = () => {
    removeUser(id);
  };

  return (
    <li className="my-4">
      <div className="flex max-w-sm items-start space-x-4 rounded-xl bg-white p-6 shadow-lg">
        <div>
          <div className="flex justify-between">
            <UserTitle id={id} />
            <button onClick={handleRemoveUser} type="button">
              Remove
            </button>
          </div>
          <p className="text-sm text-gray-600">
            {email}
          </p>
          <Comments id={id} />
        </div>
      </div>
    </li>
  );
});
