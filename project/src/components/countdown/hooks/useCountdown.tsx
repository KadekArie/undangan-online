import { useEffect, useRef, useState } from "react";

export default function useCountdown(to: Date) {
  const [secondLeft, setSecondLeft] = useState<number>(
    Math.max(0, Math.ceil((to.getTime() - Date.now()) / 1000)),
  );
  const interval = useRef<number | null>(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      setSecondLeft(Math.max(0, Math.ceil((to.getTime() - Date.now()) / 1000)));
    }, 1000);

    return () => {
      if (interval.current) clearInterval(interval.current);
    };
  }, []);

  return secondLeft;
}
