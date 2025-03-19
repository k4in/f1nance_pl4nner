import { useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { ModeProviderContext } from "./mode-provider-context";

type Mode = "dark" | "light";

type ModeProviderProps = {
  children: React.ReactNode;
};

export type ModeProviderState = {
  mode: Mode;
  setMode: Dispatch<SetStateAction<Mode>>;
};

export function ModeProvider({ children }: ModeProviderProps) {
  const [mode, setMode] = useState<Mode>("dark");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(mode);
  }, [mode]);

  const value = {
    mode,
    setMode,
  };

  return (
    <ModeProviderContext.Provider value={value}>
      {children}
    </ModeProviderContext.Provider>
  );
}
