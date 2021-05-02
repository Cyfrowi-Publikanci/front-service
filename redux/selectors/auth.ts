import { createSelector } from 'reselect';

import { AppState } from '../rootReducer';
import { AuthState } from '../types';

const getAuthState = (state: AppState): AuthState => state.auth;

export const selectAuthorizationToken = createSelector(getAuthState, authState => authState.authorization);

export const selectAuthenticateError = createSelector(getAuthState, authState => authState.authenticateError);
