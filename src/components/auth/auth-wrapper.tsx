import type { Session } from '@/types/auth';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { LoginForm } from './login-form';

export function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { data: session, isLoading } = useQuery<Session>({
    queryKey: ['auth', 'session'],
    queryFn: async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      return session;
    },
  });

  if (isLoading) return <div>Loading…</div>;
  if (!session) return <LoginForm />;
  return <>{children}</>;
}
