import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { Button } from '../shadcn/button';
import { LogOutIcon } from 'lucide-react';
import { toast } from 'sonner';

export function LogoutButton() {
  const queryClient = useQueryClient();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: async () => {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success('Logout successful!');
      queryClient.setQueryData(['auth', 'session'], null);
    },
    onError: () => toast.error('Could not log out!'),
  });

  return (
    <div>
      <Button variant="destructive" onClick={() => logout()} disabled={isPending} type="button">
        <LogOutIcon />
      </Button>
    </div>
  );
}
