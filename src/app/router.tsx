import { createBrowserRouter } from "react-router";
import { Dashboard } from "../features/markets/Dashboard";
import { MarketsList } from "../features/markets/MarketsList";
import { InstrumentDetail } from "../features/markets/InstrumentDetail";
import { OrderTicket } from "../features/trade/OrderTicket";
import { Header } from "../components/layout/Header";
import { Portfolio } from "../features/portfolio/Portfolio";

export const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/markets", element: <MarketsList /> },
  {
    path: "/markets/:symbol",
    element: <InstrumentDetail />,
  },
  {
    path: "/trade",
    element: (
      <div className="min-h-screen bg-navy text-ice flex flex-col">
        <Header />
        <div className="max-w-[1440px] mx-auto w-full p-6 text-center flex-1 flex items-center justify-center">
          <p className="text-xl sm:text-2xl font-bold">
            Select an instrument from Markets to trade
          </p>
        </div>
      </div>
    ),
  },
  {
    path: "/trade/:symbol",
    element: <OrderTicket />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/research",
    element: (
      <div className="min-h-screen bg-navy text-ice flex flex-col">
        <Header />
        <div className="max-w-[1440px] mx-auto w-full p-6 text-center flex-1 flex items-center justify-center">
          <p className="text-xl sm:text-2xl font-bold">
            Select an instrument to research
          </p>
        </div>
      </div>
    ),
  },
  {
    path: "/research/:symbol",
    element: (
      <div className="min-h-screen bg-navy text-ice flex flex-col">
        <Header />
        <div className="max-w-[1440px] mx-auto w-full p-6 text-center flex-1 flex items-center justify-center">
          <p className="text-xl sm:text-2xl font-bold">
            Research page — coming soon
          </p>
        </div>
      </div>
    ),
  },
]);