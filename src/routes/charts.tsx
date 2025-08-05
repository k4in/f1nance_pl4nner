import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/charts')({
  component: Charts,
});

function Charts() {
  return <div>Hello from Charts!</div>;
}
