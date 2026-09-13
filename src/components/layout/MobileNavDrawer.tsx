import { useEffect } from "react";
import { Link, useLocation } from "react-router";

type NavItem = { label: string; path: string };

type MobileNavDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
};

export function MobileNavDrawer({
  isOpen,
  onClose,
  navItems,
}: MobileNavDrawerProps) {
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/70 z-[100] transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />
      <div
        className={`fixed top-0 right-0 h-full min-h-dvh w-[260px] bg-d-blue z-[101] shadow-lg
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col gap-0 mt-20 px-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`py-3 px-3 border-t border-nav-divider text-base transition-colors duration-200
  ${
    isActive
      ? "text-ice font-semibold bg-action/20 border-l-4 border-l-action"
      : "text-ice/80 hover:text-ice hover:bg-action/10"
  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
