import { createSelector, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { NAVIGATION } from '../../../config/navigationConfig';
import utils from '../../../utils';
import i18next from '../../../i18n';
import merge from 'lodash/merge';
import { RootState } from '~/types';

const navigationAdapter = createEntityAdapter();
const emptyInitialState = navigationAdapter.getInitialState();
const initialState = navigationAdapter.upsertMany(emptyInitialState, NAVIGATION);

export const appendNavigationItem = (item: any, parentId: string) => (dispatch: any, getState: any) => {
  const navigation = selectNavigationAll(getState());

  return dispatch(setNavigation(utils.appendNavItem(navigation, item, parentId)));
};

export const prependNavigationItem = (item: any, parentId: string) => (dispatch: any, getState: any) => {
  const navigation = selectNavigationAll(getState());

  return dispatch(setNavigation(utils.prependNavItem(navigation, item, parentId)));
};

export const updateNavigationItem = (id: any, item: any) => (dispatch: any, getState: any) => {
  const navigation = selectNavigationAll(getState());

  return dispatch(setNavigation(utils.updateNavItem(navigation, id, item)));
};

export const removeNavigationItem = (id: any) => (dispatch: any, getState: any) => {
  const navigation = selectNavigationAll(getState());

  return dispatch(setNavigation(utils.removeNavItem(navigation, id)));
};

export const {
  selectAll: selectNavigationAll,
  selectIds: selectNavigationIds,
  selectById: selectNavigationItemById,
} = navigationAdapter.getSelectors((state: RootState) => state.app.navigation);

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setNavigation: navigationAdapter.setAll,
    resetNavigation: (state, action) => initialState,
  },
});

export const { setNavigation, resetNavigation } = navigationSlice.actions;

const getUserRole = (state: RootState) => state.auth.user?.role;

export const selectNavigation = createSelector(
  [selectNavigationAll, ({ i18n }) => i18n.language, getUserRole],
  (navigation, language, userRole) => {
    function setTranslationValues(data: any) {
      // loop through every object in the array
      return data.map((item: any) => {
        if (item.translate && item.title) {
          item.title = i18next.t(`navigation:${item.translate}`);
        }

        // see if there is a children node
        if (item.children) {
          // run this function recursively on the children array
          item.children = setTranslationValues(item.children);
        }
        return item;
      });
    }

    return setTranslationValues(
      merge(
        [],
        utils.filterRecursive(navigation, (item: any) =>
          utils.hasPermission(item.auth, userRole)
        )
      )
    );
  }
);

export const selectFlatNavigation = createSelector([selectNavigation], (navigation) =>
  utils.getFlatNavigation(navigation)
);

export default navigationSlice.reducer;
