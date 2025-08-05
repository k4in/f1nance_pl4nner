import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router';
import { type QueryClient } from '@tanstack/react-query';
import { ThemeToggleButton } from '../components/theme-toggle';

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
      <header className="px-4 md:px-20 h-16 flex items-center bg-card shadow sticky top-0 justify-between">
        <nav className="flex gap-4 items-center">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{' '}
          <Link to="/charts" className="[&.active]:font-bold">
            Charts
          </Link>
        </nav>
        <ThemeToggleButton />
      </header>
      <main className="px-4 md:px-20 py-4 md:py-10">
        <Outlet />
      </main>
    </>
  );
}
