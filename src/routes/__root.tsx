import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ModeToggle } from '@/components/mode-toggle';
import { AuthWrapper } from '@/components/auth/auth-wrapper';
import { NavLink } from '@/components/ui/nav-link';
import { LogoutButton } from '@/components/auth/logout-button';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <AuthWrapper>
      <header className="px-10 border-b h-16 flex justify-between items-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
        <nav className="flex gap-4 items-center">
          <Link to="/">{({ isActive }) => <NavLink isActive={isActive} title={'Home'} />}</Link>
          <Link to="/reports">{({ isActive }) => <NavLink isActive={isActive} title={'Reports'} />}</Link>
          <Link to="/add">{({ isActive }) => <NavLink isActive={isActive} title={'Add Transaction'} />}</Link>
        </nav>
        <div className="flex gap-4 items-center">
          <Link to="/settings">{({ isActive }) => <NavLink isActive={isActive} title={'Settings'} />}</Link>
          <ModeToggle />
          <LogoutButton />
        </div>
      </header>
      <div className="px-10 py-8">
        <Outlet />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
      <TanStackRouterDevtools />
    </AuthWrapper>
  );
}
