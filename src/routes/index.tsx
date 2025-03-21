import { createFileRoute } from "@tanstack/react-router";
import { supabase } from "@/lib/supabase";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

/**
 * Dashboard with current month overview
Quick-access features
Category summary cards
 */

async function getTransactions() {
  return await supabase.from("transactions").select();
}

const transactionsQueryOptions = queryOptions({
  queryKey: ["transactions"],
  queryFn: getTransactions,
});

export const Route = createFileRoute("/")({
  component: Index,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(transactionsQueryOptions),
});

function Index() {
  const { data: transactions } = useSuspenseQuery(transactionsQueryOptions);

  return (
    <div>{transactions ? JSON.stringify(transactions) : "no data yet"}</div>
  );
}
