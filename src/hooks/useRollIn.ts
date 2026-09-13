import { useEffect, useState } from 'react';

export function useRollIn(value: string, delay = 300) {
  const zeroed = value.replace(/\d/g, '0');
  const [display, setDisplay] = useState(zeroed);

  useEffect(() => {
    function startRoll() {
      setTimeout(() => setDisplay(value), delay);
    }
    if (document.readyState === 'complete') {
      startRoll();
    } else {
      window.addEventListener('load', startRoll);
      return () => window.removeEventListener('load', startRoll);
    }
  }, [value, delay]);

  return display;
}