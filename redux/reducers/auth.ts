import {
  AuthActionTypes,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATION_ERROR,
  AUTHENTICATION_ERROR_CLEAR,
  LOGOUT,
  SIGN_IN_GOOGLE,
} from '../actions-types/auth';
import { AuthState } from '../types';

export const authInitialState: AuthState = {
  authorization: '',
  authenticateError: false,
  state: '',
};

export function authReducer(state = authInitialState, action: AuthActionTypes): AuthState {
  switch (action.type) {
    case AUTHENTICATE_SUCCESS:
      return {
        ...state,
        authorization: action.payload.token,
      };
    case AUTHENTICATION_ERROR_CLEAR: {
      return { 
        ...state,
        authenticateError: false
      };
    }
    case AUTHENTICATION_ERROR:
      return {
        ...state,
        authenticateError: true,
        authorization: '',
      };
    case LOGOUT:
      return {
        ...authInitialState,
      };
    case SIGN_IN_GOOGLE:
      return {
        ...state,
        state: action.payload.state,
      };
    default:
      return state;
  }
}
