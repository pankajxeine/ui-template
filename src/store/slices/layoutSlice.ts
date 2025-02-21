import { createSlice } from '@reduxjs/toolkit';
import { LAYOUTCONFIG } from "config/layoutConfig";
interface LayoutState {
  foldedOpen: boolean;
  themeMode: string;
}

const initialState: LayoutState = {
  foldedOpen: LAYOUTCONFIG.defaultSidebarCollapsed,
  themeMode: LAYOUTCONFIG.themeMode
}

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    navbarToggleFolded: (state) => {
      console.log("navbarToggleFolded");
      state.foldedOpen = !state.foldedOpen;
    },
    navbarOpenFolded: (state) => {
      state.foldedOpen = true;
    },
    navbarCloseFolded: (state) => {
      state.foldedOpen = false;
    },
    themeChange: (state) => {
      console.log(state.themeMode);
      state.themeMode = state.themeMode == "light" ? "dark" : "light";
    }
  },
});

export const {
  navbarToggleFolded,
  navbarOpenFolded,
  navbarCloseFolded,
  themeChange
} = navbarSlice.actions;

export default navbarSlice.reducer;
