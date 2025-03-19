import { createFileRoute } from "@tanstack/react-router";

/**Report selector
Category-based filtering controls
Date range selection */

export const Route = createFileRoute("/reports/")({
  component: About,
});

function About() {
  return <div className="p-2">Hello from Reports!</div>;
}
