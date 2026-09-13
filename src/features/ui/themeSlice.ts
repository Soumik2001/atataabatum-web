import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type ThemeMode = 'dark' | 'light';

const savedTheme = (localStorage.getItem('theme') as ThemeMode) || 'dark';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { mode: savedTheme },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', state.mode); 
    },
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
      localStorage.setItem('theme', state.mode);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;