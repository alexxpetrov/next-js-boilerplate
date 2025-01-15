import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { authApi } from 'services/user/api';
import UserDetail from './components/ClientSideUsers/UserDetails';
import UserList from './components/SSRUsers/UserList';

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['users'],
    queryFn: authApi.getUsers,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="m-auto grid w-1/2 grid-cols-2 p-8">
        <UserList />
        <UserDetail />
      </div>
    </HydrationBoundary>
  );
}
