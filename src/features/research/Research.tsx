import { useState } from "react";
import { useNavigate } from "react-router";
import { Header } from "../../components/layout/Header";
import { useAppDispatch } from "../../app/hooks";
import { startOrder, goToReview } from "../trade/orderSlice";
import { useWatchlistQuery } from "../markets/useWatchlistQuery";

// TEMPORARY mock bar heights for the static chart — swap for real chart later
const MOCK_BARS = [40, 65, 45, 80, 60];

function MockBarChart() {
  return (
    <div className="flex items-end justify-between gap-2 sm:gap-3 h-40 sm:h-48 px-2">
      {MOCK_BARS.map((height, i) => (
        <div
          key={i}
          className={`flex-1 rounded-t-[4px] ${
            i % 2 === 0 ? "bg-signal" : "bg-action"
          }`}
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}

export function Research() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { data: watchlist = [] } = useWatchlistQuery();

  // Selected symbol lives as internal state — defaults to first watchlist item once loaded
  const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null);

  const activeSymbol = selectedSymbol ?? watchlist[0]?.symbol ?? null;
  const activeItem = watchlist.find((item) => item.symbol === activeSymbol);

  const price = activeItem?.price ?? 0;
  const change = activeItem?.change ?? 0;
  const isPositive = change >= 0;
  // Bid/ask aren't in the watchlist data yet — mocked as a small spread around price
  const bid = price - 0.2;
  const ask = price + 0.2;

  const handleTrade = () => {
    if (!activeSymbol) return;
    dispatch(startOrder({ symbol: activeSymbol, side: "buy", price }));
    navigate(`/trade/${activeSymbol}`);
  };

  const handleReview = () => {
    if (!activeSymbol) return;
    dispatch(startOrder({ symbol: activeSymbol, side: "buy", price }));
    dispatch(goToReview());
    navigate(`/trade/${activeSymbol}`);
  };

  if (!activeSymbol) {
    return (
      <div className="min-h-screen bg-navy text-ice flex flex-col">
        <Header />
        <div className="max-w-[1440px] mx-auto w-full p-6 text-center flex-1 flex items-center justify-center">
          <p className="text-xl sm:text-2xl font-bold">
            Add an instrument to your watchlist to start researching
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy text-ice flex flex-col">
      <Header />
      <div className="max-w-[1440px] mx-auto w-full py-6 sm:py-10 px-6 flex-1 flex flex-col">
        {/* Mobile symbol header — hidden on desktop, shown inline in center rail instead */}
        <div className="lg:hidden bg-d-blue border-2 border-card-border rounded-[12px] px-6 py-4 mb-4">
          <h1 className="text-sm sm:text-base text-ice/70">
            {activeSymbol} ·{" "}
            <span className="text-ice font-semibold tabular-nums">
              {price.toFixed(2)}
            </span>{" "}
            ·{" "}
            <span
              className={`font-semibold tabular-nums ${
                isPositive ? "text-signal" : "text-alert"
              }`}
            >
              {isPositive ? "+" : ""}
              {change}%
            </span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 flex-1 items-stretch">
          {/* Left rail — Watchlist (desktop only). Clicking a row selects it here, doesn't navigate. */}
          <div className="hidden lg:flex flex-col bg-panel rounded-[12px] p-4 w-64 border-2 border-card-border">
            <h2 className="text-ice/60 text-sm uppercase tracking-wide mb-3">
              Watchlist
            </h2>
            {watchlist.map((item) => {
              const isActive = item.symbol === activeSymbol;
              const rowIsPositive = item.change >= 0;
              return (
                <button
                  key={item.symbol}
                  onClick={() => setSelectedSymbol(item.symbol)}
                  className={`flex justify-between items-center px-3 py-2 rounded-[6px] border-b-2 border-card-border last:border-b-0 text-sm transition-colors text-left ${
                    isActive ? "bg-navy/60" : "hover:bg-navy/40"
                  }`}
                >
                  <span className="text-ice/80 uppercase text-sm sm:text-[16px]">
                    {item.symbol}
                  </span>
                  <span
                    className={`text-sm sm:text-lg tabular-nums ${
                      rowIsPositive ? "text-signal" : "text-alert"
                    }`}
                  >
                    {rowIsPositive ? "+" : ""}
                    {item.change.toFixed(2)}%
                  </span>
                </button>
              );
            })}
          </div>

          {/* Center rail — Chart + tabs */}
          <div className="flex-1 flex flex-col gap-4 lg:gap-6">
            <div className="bg-panel border-2 border-card-border rounded-[12px] p-4 sm:p-6 flex flex-col gap-4">
              {/* Desktop-only inline header inside center rail */}
              <h2 className="hidden lg:block text-ice/80 text-sm sm:text-base tabular-nums">
                {activeSymbol} ·{" "}
                <span className="font-semibold">{price.toFixed(2)}</span> ·{" "}
                <span
                  className={
                    isPositive
                      ? "text-signal font-semibold"
                      : "text-alert font-semibold"
                  }
                >
                  {isPositive ? "+" : ""}
                  {change}%
                </span>{" "}
                · Bid {bid.toFixed(2)} / Ask {ask.toFixed(2)}
              </h2>

              <MockBarChart />
            </div>

            <div className="bg-panel border-2 border-card-border rounded-[12px] px-4 sm:px-6 py-3">
              <span className="text-ice/60 text-xs sm:text-sm uppercase tracking-wide">
                Fundamentals · News · Filings
              </span>
            </div>

            {/* Mobile-only Trade CTA — placeholder fields + button, pinned per design */}
            <div className="lg:hidden flex flex-col gap-3">
              <div className="bg-panel border-2 border-card-border rounded-[10px] h-11" />
              <div className="bg-panel border-2 border-card-border rounded-[10px] h-11" />
              <button
                onClick={handleTrade}
                className="bg-action hover:brightness-110 transition-all text-white font-bold py-3 rounded-[10px] shadow-md shadow-black/10"
              >
                Trade
              </button>
            </div>
          </div>

          {/* Right rail — Order panel (desktop only) */}
          <div className="hidden lg:flex flex-col gap-3 bg-panel rounded-[12px] p-4 w-64 border-2 border-card-border">
            <h2 className="text-ice/60 text-sm uppercase tracking-wide mb-1">
              Order
            </h2>
            <div className="bg-navy border-2 border-card-border rounded-[10px] h-11" />
            <div className="bg-navy border-2 border-card-border rounded-[10px] h-11" />
            <div className="bg-navy border-2 border-card-border rounded-[10px] h-11" />
            <div className="bg-navy border-2 border-card-border rounded-[10px] h-11" />
            <button
              onClick={handleReview}
              className="mt-2 bg-signal hover:brightness-110 transition-all text-white font-bold py-3 rounded-[10px] shadow-md shadow-black/10"
            >
              Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}