import { createFileRoute } from "@tanstack/react-router";

/**
 * Dashboard with current month overview
Quick-access features
Category summary cards
 */

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <h3>
        Dashboard with current month overview <br />
        Quick-access features <br />
        Category summary cards
      </h3>
    </div>
  );
}
