import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router';
import { type QueryClient } from '@tanstack/react-query';
import { ThemeToggleButton } from '@/components/theme-toggle';
import { Topnav } from '@/components/ui/topnav';

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
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="px-4 md:px-20 h-16 flex items-center justify-between">
          <Topnav />
          <ThemeToggleButton />
        </div>
      </header>
      <main className="px-4 md:px-20 py-4 md:py-10">
        <Outlet />
      </main>
    </>
  );
}
