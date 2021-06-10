import { AuthActionTypes, AUTHENTICATION_ERROR, AUTHENTICATION_ERROR_CLEAR } from '../../../redux/actions-types/auth';
import { authenticateSuccess, logout } from '../../../redux/actions/auth';
import { authInitialState, authReducer } from '../../../redux/reducers';
import { AuthState } from '../../../redux/types';

jest.mock('next/config', () => () => ({ publicRuntimeConfig: {} }));

describe('authReducer', () => {
  it('should return the initial state', () => {
    expect(authReducer(authInitialState, {} as AuthActionTypes)).toEqual(authInitialState);
  });

  it('should handle AUTHENTICATE_SUCCESS', () => {
    const mockedState: AuthState = {
      ...authInitialState,
      authorization: '123',
    };
    expect(authReducer(authInitialState, authenticateSuccess({ token: '123' }))).toEqual(mockedState);
  });

  it('should handle AUTHENTICATION_ERROR', () => {
    const mockedState: AuthState = {
      ...authInitialState,
      authenticateError: true,
      authorization: '',
    };
    expect(authReducer(authInitialState, { type: AUTHENTICATION_ERROR })).toEqual(mockedState);
  });

  it('should handle AUTHENTICATION_ERROR_CLEAR', () => {
    const mockedState: AuthState = {
      ...authInitialState,
      authenticateError: false,
    };
    expect(authReducer(authInitialState, { type: AUTHENTICATION_ERROR_CLEAR })).toEqual(mockedState);
  });

  it('should handle LOGOUT', () => {
    expect(authReducer(authInitialState, logout())).toEqual(authInitialState);
  });
});

