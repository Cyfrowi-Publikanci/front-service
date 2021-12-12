import { createSelector } from 'reselect';
import { AppState } from '../rootReducer';

import { OfflineState } from '../types';

const getOfflineState = (state: AppState): OfflineState => state.offline;

export const selectOfflineEditProfileRequest = createSelector(getOfflineState, offline => offline.editProfile);
