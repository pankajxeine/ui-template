import { createTheme, getContrastRatio } from '@mui/material/styles';
import { createSlice, createSelector } from '@reduxjs/toolkit';
import merge from 'lodash/merge';
import {
  defaultThemes,
  mainThemeVariations,
  extendThemeWithMixins,
  mustHaveThemeOptions,
  defaultThemeOptions,
  getParsedQuerySettings,
  defaultSettings,
} from '~/core/default-settings';
import AppSettingsConfig from '~/core/config/settingsConfig';
import AppThemesConfig from '~/core/config/themesConfig';
import AppLayoutConfigs from '~/core/config/layoutConfig';
import { RootState } from '~/types';

function getInitialSettings() {
  const defaultLayoutStyle =
    AppSettingsConfig.layout && AppSettingsConfig.layout.style
      ? AppSettingsConfig.layout.style
      : 'layout1';
  const layout = {
    style: defaultLayoutStyle,
    //@ts-ignore
    config: AppLayoutConfigs[defaultLayoutStyle].defaults,
  };
  return merge({}, defaultSettings, { layout }, AppSettingsConfig, getParsedQuerySettings());
}

export function generateSettings(_defaultSettings: any, _newSettings: any) {
  const response = merge(
    {},
    _defaultSettings,
    //@ts-ignore
    { layout: { config: AppLayoutConfigs[_newSettings?.layout?.style]?.defaults } },
    _newSettings
  );

  /**
   * Making theme values failsafe
   */
  Object.entries(response.theme).forEach(([key, value]) => {
    //@ts-ignore
    if (value !== 'mainThemeDark' && value !== 'mainThemeLight' && !AppThemesConfig[value]) {
      response.theme[key] = 'default';
    }
  });

  return response;
}

const getThemes = (state: RootState) => state.app.settings.themes;
const getDirection = (state: RootState) => state.app.settings.current.direction;
const getMainThemeId = (state: RootState) => state.app.settings.current.theme.main;
const getNavbarThemeId = (state: RootState) => state.app.settings.current.theme.navbar;
const getToolbarThemeId = (state: RootState) => state.app.settings.current.theme.toolbar;
const getFooterThemeId = (state: RootState) => state.app.settings.current.theme.footer;

function generateMuiTheme(themes: any, id: any, direction: any) {
  const data = merge({}, defaultThemeOptions, themes[id], mustHaveThemeOptions);
  const response = createTheme(
    merge({}, data, {
      mixins: extendThemeWithMixins(data),
      direction,
    })
  );
  return response;
}

export const selectFuseThemeById = (id: any) =>
  createSelector([getThemes, getDirection], (themes, direction) =>
    generateMuiTheme(themes, id, direction)
  );

export const selectContrastMainTheme = (bgColor: string) => {
  function isDark(color: any) {
    return getContrastRatio(color, '#ffffff') >= 3;
  }
  return isDark(bgColor) ? selectMainThemeDark : selectMainThemeLight;
};

//@ts-ignore
export const selectMainTheme = createSelector(
  [getThemes, getDirection, getMainThemeId],
  (themes, direction, id) => generateMuiTheme(themes, id, direction)
);

//@ts-ignore
export const selectMainThemeDark = createSelector(
  [getThemes, getDirection],
  (themes, direction, id) => generateMuiTheme(themes, 'mainThemeDark', direction)
);
//@ts-ignore
export const selectMainThemeLight = createSelector(
  [getThemes, getDirection],
  (themes, direction, id) => generateMuiTheme(themes, 'mainThemeLight', direction)
);

export const selectNavbarTheme = createSelector(
  [getThemes, getDirection, getNavbarThemeId],
  (themes, direction, id) => generateMuiTheme(themes, id, direction)
);

export const selectToolbarTheme = createSelector(
  [getThemes, getDirection, getToolbarThemeId],
  (themes, direction, id) => generateMuiTheme(themes, id, direction)
);

export const selectFooterTheme = createSelector(
  [getThemes, getDirection, getFooterThemeId],
  (themes, direction, id) => generateMuiTheme(themes, id, direction)
);

const themesObjRaw = Object.keys(AppThemesConfig).length !== 0 ? AppThemesConfig : defaultThemes;
const initialSettings = getInitialSettings();
const initialThemes = {
  ...themesObjRaw,
  //@ts-ignore
  ...mainThemeVariations(themesObjRaw[initialSettings.theme.main]),
};

export const initialState = {
  initial: initialSettings,
  defaults: merge({}, initialSettings),
  current: merge({}, initialSettings),
  themes: initialThemes,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSettings: (state, action) => {
      const current = generateSettings(state.defaults, action.payload);
      const themes =
        current.theme.main !== state.current.theme.main
          //@ts-ignore
          ? { ...state.themes, ...mainThemeVariations(themesObjRaw[current.theme.main]) }
          : state.themes;
      return {
        ...state,
        current,
        themes,
      };
    },
    setDefaultSettings: (state, action) => {
      const defaults = generateSettings(state.defaults, action.payload);
      const themes =
        defaults.theme.main !== state.defaults.theme.main
          //@ts-ignore
          ? { ...state.themes, ...mainThemeVariations(themesObjRaw[defaults.theme.main]) }
          : state.themes;
      return {
        ...state,
        defaults: merge({}, defaults),
        current: merge({}, defaults),
        themes,
      };
    },
    setInitialSettings: (state) => {
      return merge({}, initialState);
    },
    resetSettings: (state) => {
      const themes = {
        ...state.themes,
        //@ts-ignore
        ...mainThemeVariations(themesObjRaw[state.defaults.theme.main]),
      };
      return {
        ...state,
        defaults: merge({}, state.defaults),
        current: merge({}, state.defaults),
        themes,
      };
    },
  },
});

export const { resetSettings, setDefaultSettings, setInitialSettings, setSettings } =
  settingsSlice.actions;

export default settingsSlice.reducer;
