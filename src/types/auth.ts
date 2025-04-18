export type Session = {
  access_token: string;
  user: { id: string; email?: string };
} | null;
