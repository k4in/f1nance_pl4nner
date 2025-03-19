import { useContext } from "react";
import { ModeProviderContext } from "@/provider/mode-provider-context";

export function useMode() {
  const context = useContext(ModeProviderContext);

  if (!context) throw new Error("useMode must be used within a ThemeProvider");

  return context;
}
