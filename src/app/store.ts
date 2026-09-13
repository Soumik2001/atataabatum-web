import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/ui/themeSlice';
import orderReducer from '../features/trade/orderSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;