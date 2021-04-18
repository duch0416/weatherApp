import { useEffect, useRef } from "react"

export const useEffectAfterMount = (effect: () => void,  deps: unknown[]) => {
  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    if (effect) return effect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}