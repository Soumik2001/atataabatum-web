import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

export function HeaderControlsPortal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed top-0 left-0 right-0 h-24 z-[110] pointer-events-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-full relative">
        <div className="absolute top-5 sm:top-7 right-4 sm:right-6 flex items-center gap-3 pointer-events-auto">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}