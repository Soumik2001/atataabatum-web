type WatchlistRowProps = {
  symbol: string;
  price: number;
  change: number;
};

export function WatchlistRow({ symbol, price, change }: WatchlistRowProps) {
  const isPositive = change >= 0;

  return (
    <div className="flex justify-between px-3 py-2 border-b border-panel text-sm">
      <span className="text-ice">{symbol}</span>
      <span className={isPositive ? 'text-signal' : 'text-alert'}>
        {isPositive ? '+' : ''}{change}%
      </span>
    </div>
  );
}