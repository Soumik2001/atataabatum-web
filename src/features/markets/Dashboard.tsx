import { WatchlistRow } from "../../components/ui/WatchlistRow";
import { StatCard } from "../../components/ui/StatCard";
import { IndexChart } from "../../components/ui/IndexChart";
import { Header } from "../../components/layout/Header";

const watchlist = [
  { symbol: "GTCO", price: 128.4, change: 1.8 },
  { symbol: "MTNN", price: 96.2, change: -0.6 },
  { symbol: "DANGCEM", price: 212.75, change: 1.8 },
  { symbol: "ZENITH", price: 41.05, change: -0.6 },
  { symbol: "SEPLAT", price: 75.6, change: 1.8 },
];

export function Dashboard() {
  return (
    <div className="min-h-screen bg-navy text-ice flex flex-col">
      <Header />
      <div className="max-w-[1440px] mx-auto w-full py-10 px-6 flex flex-col flex-1">
        <div className="flex gap-4 mb-6">
          <StatCard label="Index" value="1.24%" tone="signal" />
          <StatCard label="Volume" value="18.4M" />
          <StatCard label="Advancers" value="132" tone="signal" />
          <StatCard label="Decliners" value="77" tone="alert" />
        </div>

        <div className="flex gap-4 flex-1 items-stretch">
          <IndexChart />
          <div className="bg-panel rounded-lg p-4 w-80 flex flex-col">
            <h2 className="text-xl text-ice/70 tracking-wide mb-2">Watchlist</h2>
            {watchlist.map((item) => (
              <WatchlistRow key={item.symbol} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
