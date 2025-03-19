import { createFileRoute } from "@tanstack/react-router";

/**Monthly breakdown
Category spending distribution
Category comparison charts
Filterable by multiple categories */

export const Route = createFileRoute("/reports/monthly")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/reports/monthly"!</div>;
}
