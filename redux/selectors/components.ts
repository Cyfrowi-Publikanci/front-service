import { createSelector } from 'reselect';

import { AppState } from '../rootReducer';
import { ComponentsState } from '../types';

const getComponentsState = (state: AppState): ComponentsState => state.components;

export const selectGlobalLoader = createSelector(getComponentsState, components => components.loader);

export const selectShowAlert = createSelector(getComponentsState, components => components.showAlert);

export const selectAlert = createSelector(getComponentsState, components => components.alert);
