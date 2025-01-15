'use client';

import { useSuspenseUsersQuery } from 'queries/user/useUserQuery';
import { Suspense } from 'react';
import { User } from './User';

export default function UserList() {
  const { data: users } = useSuspenseUsersQuery();

  return (
    <ul>
      <h3>Users fetched server-side via Tanstack Query</h3>
      <Suspense fallback={<div>Loading users</div>}>
        {users?.map(user => (
          <User key={user.id} id={user.id} />
        ))}
      </Suspense>
    </ul>
  );
}
