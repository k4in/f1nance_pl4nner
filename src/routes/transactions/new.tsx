import { createFileRoute } from "@tanstack/react-router";

/**Transaction creation form
Category selector dropdown
Recurring transaction options */

export const Route = createFileRoute("/transactions/new")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/transactions/new"!</div>;
}
