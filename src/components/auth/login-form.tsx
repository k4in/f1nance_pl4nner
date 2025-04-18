import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { supabase } from '@/lib/supabase';
import { type Session } from '@/types/auth';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormMessage, FormItem, FormField, FormLabel } from '../shadcn/form';
import { toast } from 'sonner';
import { RequiredMarker } from '../form/required-marker';
import { Input } from '../shadcn/input';
import { Button } from '../shadcn/button';
import { KeyRoundIcon } from 'lucide-react';

const schema = z.object({
  email: z.string().min(1, 'Please enter your email').email('Please enter a valid email address'),
  password: z.string().min(5, 'Please enter your password'),
});

type FormValues = z.infer<typeof schema>;

const defaultValues = {
  email: (import.meta.env.VITE_TESTUSER_EMAIL as string) || '',
  password: (import.meta.env.VITE_TESTUSER_PASSWORD as string) || '',
} satisfies FormValues;

export function LoginForm() {
  const queryClient = useQueryClient();
  const methods = useForm<FormValues>({ defaultValues, resolver: zodResolver(schema) });

  const { mutate: login, isPending } = useMutation<Session, Error, FormValues>({
    mutationFn: async (creds: FormValues) => {
      const { error, data } = await supabase.auth.signInWithPassword(creds);
      if (error) throw error;
      return data.session;
    },
    onSuccess: (session) => {
      queryClient.setQueryData(['auth', 'session'], session);
      toast.success('Login successful!');
    },
    onError: () => {
      toast.error('Could not login!');
    },
  });

  const onSubmit = (values: FormValues) => {
    login(values);
  };

  return (
    <div className="max-w-sm mx-auto mt-20">
      <div className="flex justify-between items-center border-b mb-6">
        <h1 className="text-2xl font-bold">Login</h1>
        <KeyRoundIcon className="size-4" />
      </div>
      <Form {...methods}>
        <form className="flex flex-col gap-6" onSubmit={methods.handleSubmit(onSubmit)}>
          <FormField
            control={methods.control}
            name="email"
            shouldUnregister={true}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  e-Mail
                  <RequiredMarker />
                </FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="password"
            shouldUnregister={true}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Password
                  <RequiredMarker />
                </FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="block self-start" disabled={isPending}>
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
}
