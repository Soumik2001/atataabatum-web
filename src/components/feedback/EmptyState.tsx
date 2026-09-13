import type { ReactNode } from "react";

type EmptyStateProps = {
  icon?: ReactNode;
  title: string;
  message: string;
  actionLabel: string;
  onAction: () => void;
};

export function EmptyState({
  icon,
  title,
  message,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-10 px-6 gap-3">
      {icon && <div className="text-ice/40 mb-1">{icon}</div>}
      <h3 className="text-ice font-semibold text-base sm:text-lg">{title}</h3>
      <p className="text-ice/60 text-sm sm:text-base max-w-xs">{message}</p>
      <button
        onClick={onAction}
        className="mt-2 btn-primary hover:brightness-110 hover:cursor-pointer hover:-translate-y-0.5 active:translate-y-0 active:brightness-95 transition-all duration-200 text-white font-semibold px-5 py-2.5 rounded-[10px] text-sm sm:text-base"
      >
        {actionLabel}
      </button>
    </div>
  );
}
