import { useEffect } from "react";
import { useAppSelector } from "./hooks";

export function ThemeWatcher() {
  const mode = useAppSelector((state) => state.theme.mode);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  return null; // renders nothing, just runs the side effect
}
