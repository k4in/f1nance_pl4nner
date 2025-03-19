import { createFileRoute } from "@tanstack/react-router";

/**Category management interface
Add/edit/delete categories
Default category restoration
Category ordering */

export const Route = createFileRoute("/settings/categories")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/settings/categories"!</div>;
}
