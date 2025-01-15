'use client';

import { useCurrentUsers } from 'store/auth';
import { User } from './User';

export default function UserDetail() {
  const users = useCurrentUsers();
  return (
    <ul>
      <h3>Users managed client-side with Zustand</h3>
      {users?.map(user => (
        <User key={user} id={user} />
      ))}
    </ul>
  );
}
