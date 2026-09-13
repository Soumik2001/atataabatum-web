type StaleFeedBadgeProps = {
  lastUpdate: string; // e.g. "09:41"
};

export function StaleFeedBadge({ lastUpdate }: StaleFeedBadgeProps) {
  return (
    <span className="text-alert text-[10px] sm:text-xs">
      Delayed · last update {lastUpdate}
    </span>
  );
}