import { createSelector } from '@reduxjs/toolkit';

const selectSelf = (state: any) => state;

export const selectLayout = createSelector(selectSelf, state => state.layout);
