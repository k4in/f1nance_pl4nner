import { createContext } from "react";
import { type ModeProviderState } from "./mode-provider";

export const ModeProviderContext = createContext<ModeProviderState | null>(
  null
);
