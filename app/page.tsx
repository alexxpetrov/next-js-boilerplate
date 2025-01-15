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

  queryClient.prefetchQuery({
    queryKey: ['users'],
    queryFn: authApi.getUsers,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="m-auto box-border grid w-2/3 grid-cols-2 gap-x-6 p-8">
        <UserList />
        <UserDetail />
      </div>
    </HydrationBoundary>
  );
}
