export const LOGOUT = 'LOGOUT';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const AUTHENTICATION_ERROR_CLEAR = 'AUTHENTICATION_ERROR_CLEAR';
export const AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS';
export const SIGN_IN_GOOGLE = 'SIGN_IN_GOOGLE';
export const GET_ALL_NOTIFICATIONS = 'GET_ALL_NOTIFICATIONS';

export interface AuthenticateSuccessAction {
  type: typeof AUTHENTICATE_SUCCESS;
  payload: {
    token: string;
  };
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export interface AuthenticateErrorAction {
  type: typeof AUTHENTICATION_ERROR;
}

export interface AuthenticateErrorClearAction {
  type: typeof AUTHENTICATION_ERROR_CLEAR;
}

export interface AuthenticateSignInGoogleAction {
  type: typeof SIGN_IN_GOOGLE;
  payload: {
    state: string;
  };
}

export interface GetAllNotificationsAction {
  type: typeof GET_ALL_NOTIFICATIONS;
}

export type AuthActionTypes =
  | AuthenticateSuccessAction
  | LogoutAction
  | AuthenticateErrorAction
  | AuthenticateErrorClearAction
  | AuthenticateSignInGoogleAction
  | GetAllNotificationsAction;
