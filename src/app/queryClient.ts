import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 30, // 30s — prices go stale fast, matches your "Delayed · last update" pattern
      refetchOnWindowFocus: true,
      retry: 1,
    },
  },
});