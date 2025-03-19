import { createFileRoute } from "@tanstack/react-router";

/**Settings landing page
Navigation to specific settings */

export const Route = createFileRoute("/settings/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/settings/"!</div>;
}
