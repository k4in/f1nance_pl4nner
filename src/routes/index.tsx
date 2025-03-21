import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

/**
 * Dashboard with current month overview
Quick-access features
Category summary cards
 */

const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseURL, supabaseKey);

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions();
  }, []);

  async function getTransactions() {
    const { data } = await supabase.from("transactions").select();
    setTransactions(data);
  }

  return (
    <div>{transactions ? JSON.stringify(transactions) : "no data yet"}</div>
  );
}
