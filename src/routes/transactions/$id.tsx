import { createFileRoute } from "@tanstack/react-router";

/**Detailed transaction view
Edit form with category selection
Transaction history */

export const Route = createFileRoute("/transactions/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/transactions/$id"!</div>;
}
