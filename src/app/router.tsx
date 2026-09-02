import { createBrowserRouter } from 'react-router';
import { Dashboard } from '../features/markets/Dashboard';

export const router = createBrowserRouter([
  { path: '/', element: <Dashboard /> },
  { path: '/markets', element: <div className="text-ice p-6 text-center font-bold text-3xl">Markets page — coming soon</div> },
  { path: '/trade', element: <div className="text-ice p-6 text-center font-bold text-3xl">Trade page — coming soon</div> },
  { path: '/portfolio', element: <div className="text-ice p-6 text-center font-bold text-3xl">Portfolio page — coming soon</div> },
  { path: '/research', element: <div className="text-ice p-6 text-center font-bold text-3xl">Research page — coming soon</div> },
]);