import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router';
import { type QueryClient } from '@tanstack/react-query';

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootComponent,
  notFoundComponent: () => {
    return (
      <div>
        <p>This is the notFoundComponent configured on root route</p>
        <Link to="/">Start Over</Link>
      </div>
    );
  },
});

function RootComponent() {
  return (
    <>
      <nav className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/charts" className="[&.active]:font-bold">
          Charts
        </Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
