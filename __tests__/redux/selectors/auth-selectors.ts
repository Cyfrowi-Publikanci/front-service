import { authInitialState } from '../../../redux/reducers';
import { AppState } from '../../../redux/rootReducer';
import { selectAuthenticateError, selectAuthorizationToken } from '../../../redux/selectors';
import { AuthState } from '../../../redux/types';

describe('auth selectors', () => {
  describe('selectAuthorizationToken', () => {
    it('should return selected authorization token', () => {
      const mockedState: AuthState = {
        ...authInitialState,
        authorization: '123',
      };

      expect(selectAuthorizationToken({ auth: mockedState } as AppState)).toEqual('123');
    });
  });

  describe('selectAuthenticateError', () => {
    it('should return selected authentication error flag', () => {
      const mockedState: AuthState = {
        ...authInitialState,
        authenticateError: true,
      };

      expect(selectAuthenticateError({ auth: mockedState } as AppState)).toEqual(true);
    });
  });
});
