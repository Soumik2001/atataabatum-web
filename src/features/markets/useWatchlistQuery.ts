import { useQuery } from "@tanstack/react-query";

type WatchlistItem = {
  symbol: string;
  price: number;
  change: number;
};

// Mock fetch for now — swap the body for a real fetch() once there's an API
async function fetchWatchlist(): Promise<WatchlistItem[]> {
  await new Promise((resolve) => setTimeout(resolve, 800)); // simulate network delay
  return [
    { symbol: "GTCO", price: 128.4, change: 1.8 },
    { symbol: "MTNN", price: 96.2, change: -0.6 },
    { symbol: "DANGCEM", price: 212.75, change: 1.8 },
    { symbol: "ZENITH", price: 41.05, change: -0.6 },
    { symbol: "SEPLAT", price: 75.6, change: 1.8 },
  ];
}

export function useWatchlistQuery() {
  return useQuery({
    queryKey: ["watchlist"],
    queryFn: fetchWatchlist,
  });
}
