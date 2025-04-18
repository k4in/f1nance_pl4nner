import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { supabase } from '@/lib/supabase';
import { type Session } from '@/types/auth';

export type LoginInputs = {
  email: string;
  password: string;
};

const defaultValues = {
  email: (import.meta.env.VITE_TESTUSER_EMAIL as string) || '',
  password: (import.meta.env.VITE_TESTUSER_PASSWORD as string) || '',
};

export function LoginForm() {
  const queryClient = useQueryClient();
  const { register, handleSubmit, formState } = useForm<LoginInputs>({ defaultValues });
  const { errors } = formState;

  const loginMutation = useMutation<Session, Error, LoginInputs>({
    mutationFn: (creds) =>
      supabase.auth.signInWithPassword(creds).then(({ data, error }) => {
        if (error) throw error;
        return data.session;
      }),
    onSuccess: (session) => {
      queryClient.setQueryData(['auth', 'session'], session);
    },
  });

  const onSubmit = (values: LoginInputs) => {
    loginMutation.mutate(values);
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-4 border rounded">
      <h2 className="text-xl mb-4">Log in</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm">Email</label>
          <input
            type="email"
            autoComplete="off"
            {...register('email', { required: 'Email is required' })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm">Password</label>
          <input
            type="password"
            autoComplete="off"
            {...register('password', {
              required: 'Password is required',
            })}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
        </div>
        <button type="submit" disabled={loginMutation.isPending} className="w-full bg-primary text-white py-2 rounded">
          {loginMutation.isPending ? 'Logging in…' : 'Log in'}
        </button>
        {loginMutation.isError && <p className="text-red-600 text-sm mt-2">{loginMutation.error.message}</p>}
      </form>
    </div>
  );
}
