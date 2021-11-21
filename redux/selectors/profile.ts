import { createSelector } from 'reselect';

import { AppState } from '../rootReducer';
import { ProfileState } from '../types';

const getProfileState = (state: AppState): ProfileState => state.profile;

export const selectProfileBackgroundColor = createSelector(getProfileState, profile => profile.bgColor);

export const selectProfileFontSize = createSelector(getProfileState, profile => profile.fontSize);
