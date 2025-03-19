import { createFileRoute } from "@tanstack/react-router";

/**Transaction history with category filtering
Advanced sorting and filtering
Bulk actions */
export const Route = createFileRoute("/transactions/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Transaction history with category filtering Advanced sorting and filtering
      Bulk actions!
    </div>
  );
}
