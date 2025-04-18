import { useState, useEffect } from 'react';

import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ModeToggle } from '@/components/mode-toggle';
import { Toaster } from '@/components/shadcn/sonner';
import { supabase } from '@/lib/supabase';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { cn } from '@/lib/utils/cn';

function NavLink({ isActive, title }: { isActive: boolean; title: string }) {
  return (
    <span
      className={cn(
        'px-3 py-2 rounded-md text-sm font-medium relative transition-all duration-200 ease-in-out',
        'hover:text-primary',
        'focus:outline-none focus:ring-2 focus:ring-primary/20',
        "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-transform after:duration-200",
        isActive ? 'text-primary after:scale-x-100' : 'text-foreground/80 after:scale-x-0 hover:after:scale-x-100'
      )}
    >
      {title}
    </span>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <div className="mx-auto mt-20 max-w-[500px]">
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
      </div>
    );
  } else {
    return (
      <>
        <header className="px-10 border-b h-16 flex justify-between items-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
          <nav className="flex gap-4 items-center">
            <Link to="/">{({ isActive }) => <NavLink isActive={isActive} title={'Home'} />}</Link>
            <Link to="/reports">{({ isActive }) => <NavLink isActive={isActive} title={'Reports'} />}</Link>
            <Link to="/add">{({ isActive }) => <NavLink isActive={isActive} title={'Add Transaction'} />}</Link>
          </nav>
          <div className="flex gap-4 items-center">
            <Link to="/settings">{({ isActive }) => <NavLink isActive={isActive} title={'Settings'} />}</Link>
            <ModeToggle />
          </div>
        </header>
        <div className="px-10 py-8">
          <Outlet />
        </div>
        <Toaster position="top-right" />
        <ReactQueryDevtools initialIsOpen={false} />
        <TanStackRouterDevtools />
      </>
    );
  }
}
