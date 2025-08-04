import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/charts')({
  component: Charts,
});

function Charts() {
  return <div className="p-2">Hello from Charts!</div>;
}
