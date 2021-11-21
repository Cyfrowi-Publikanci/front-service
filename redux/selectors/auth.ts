import { createSelector } from 'reselect';
import jwt_decode from "jwt-decode";

import { AppState } from '../rootReducer';
import { AuthState } from '../types';

const getAuthState = (state: AppState): AuthState => state.auth;

export const selectAuthorizationToken = createSelector(getAuthState, authState => authState.authorization);

export const selectAuthenticateError = createSelector(getAuthState, authState => authState.authenticateError);

export const selectState = createSelector(getAuthState, authState => authState.state);

export const decodedToken = createSelector(getAuthState, authState => authState.authorization ? jwt_decode(authState.authorization) as { exp: string; iat: string; usr: string;} : { exp: '', iat: '', usr: ''});
