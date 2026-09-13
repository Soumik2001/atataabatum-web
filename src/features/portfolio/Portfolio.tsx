import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "../../components/layout/Header";
import { StatCard } from "../../components/ui/StatCard";
import { EmptyState } from "../../components/feedback/EmptyState";
import { SkeletonList } from "../../components/feedback/SkeletonList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// TEMPORARY mock data — replace with real holdings from API/store
const holdings = [
  { symbol: "GTCO", qty: 500, value: 64200, pl: 4.2 },
  { symbol: "MTNN", qty: 150, value: 14430, pl: -0.7 },
  { symbol: "DANGCEM", qty: 80, value: 17020, pl: 0.4 },
  { symbol: "ZENITH", qty: 400, value: 16420, pl: 2.6 },
  { symbol: "SEPLAT", qty: 120, value: 9072, pl: -1.4 },
];

const TOTAL_VALUE = 842300;
const TODAY_CHANGE = 1.9;
const CASH = 24100;

export function Portfolio() {
  // TEMPORARY: swap for real isLoading from TanStack Query once wired up
  const [isLoading] = useState(false);

  return (
    <div className="min-h-screen bg-navy text-ice flex flex-col">
      <Header />
      <div className="max-w-[1440px] mx-auto w-full py-10 px-6 flex flex-col flex-1">
        <div className="bg-d-blue border-2 border-card-border rounded-[12px] px-6 py-4 mb-6">
          <h1 className="text-sm sm:text-base text-ice/70">
            Portfolio · <span className="text-ice font-semibold">Holdings</span>
          </h1>
        </div>

        <div className="grid grid-cols-2 md:flex gap-4 lg:gap-6 mb-6">
          <StatCard label="Total value" value={TOTAL_VALUE.toLocaleString()} />
          <StatCard
            label="Today"
            value={`${TODAY_CHANGE >= 0 ? "+" : ""}${TODAY_CHANGE}%`}
            tone={TODAY_CHANGE >= 0 ? "signal" : "alert"}
          />
          <StatCard label="Cash" value={CASH.toLocaleString()} tone="action" />
        </div>

        {isLoading ? (
          <div className="bg-panel border-2 border-card-border rounded-[12px] p-4 sm:p-6">
            <SkeletonList rows={5} />
          </div>
        ) : holdings.length === 0 ? (
          <div className="bg-panel border-2 border-card-border rounded-[12px]">
            <EmptyState
              icon={<FontAwesomeIcon icon={faPlus} size="2x" />}
              title="No holdings yet"
              message="Place your first trade to start building your portfolio."
              actionLabel="Go to Markets"
              onAction={() => {}}
            />
          </div>
        ) : (
          <div className="bg-panel border-2 px-2 lg:px-3.5 pb-3 border-card-border rounded-[12px] overflow-hidden">
            <div
              className="grid gap-2 sm:gap-4 px-4 sm:px-6 py-3 text-sm sm:text-lg uppercase text-ice/60 tracking-wider"
              style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr" }}
            >
              <span>Holding</span>
              <span>Qty</span>
              <span>Value</span>
              <span className="text-right pr-1">P/L</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key="holdings"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {holdings.map((item, i) => (
                  <motion.div
                    key={item.symbol}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.05,
                      ease: "easeOut",
                    }}
                  >
                    <Link
                      to={`/markets/${item.symbol}`}
                      style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr" }}
                      className={`grid gap-2 sm:gap-4 px-4 sm:px-6 py-3 border-card-border hover:bg-navy/40 transition-colors text-[12px] sm:text-[16px]
                        ${i !== holdings.length - 1 ? "border-b-2 lg:border-b-3" : ""}`}
                    >
                      <span className="text-[12px] sm:text-[16px] text-ice/80 truncate">
                        {item.symbol}
                      </span>
                      <span className="text-[12px] sm:text-[16px] text-ice/80 tabular-nums">
                        {item.qty}
                      </span>
                      <span className="text-[12px] sm:text-[16px] text-ice/80 tabular-nums">
                        {item.value.toLocaleString()}
                      </span>
                      <span
                        className={`text-right pr-1 tabular-nums ${
                          item.pl >= 0 ? "text-signal" : "text-alert"
                        }`}
                      >
                        {item.pl >= 0 ? "+" : ""}
                        {item.pl}%
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
