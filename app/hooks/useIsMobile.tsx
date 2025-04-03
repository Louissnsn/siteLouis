import { useState, useEffect } from "react";

const mobileBreakpoint = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${mobileBreakpoint - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < mobileBreakpoint);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
