export const LOGOUT = 'LOGOUT';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const AUTHENTICATION_ERROR_CLEAR = 'AUTHENTICATION_ERROR_CLEAR';
export const AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS';

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

export type AuthActionTypes =
  | AuthenticateSuccessAction
  | LogoutAction
  | AuthenticateErrorAction
  | AuthenticateErrorClearAction;
