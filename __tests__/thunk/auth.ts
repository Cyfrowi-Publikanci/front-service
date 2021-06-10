import { authServiceClient } from '../../api/rpc';
import { AlertType } from '../../components/common/alerts/types';
import { AuthenticateSuccessAction, AUTHENTICATE_SUCCESS } from '../../redux/actions-types/auth';
import { HideGlobalLoader, HIDE_GLOBAL_LOADER, ShowAlertAction, ShowGlobalLoader, SHOW_ALERT, SHOW_GLOBAL_LOADER } from '../../redux/actions-types/components';
import { loginByEmail } from '../../redux/actions/auth';
import { mockStore } from '../config/mock-store';
import { createLoginByEmailPayload, createLoginByEmailResponse } from './__mocks__/auth';


jest.mock('next/config', () => () => ({ publicRuntimeConfig: {} }));

jest.mock('~/api/rpc');

// eslint-disable-next-line
const mockLoginByEmail = (authServiceClient as jest.Mocked<any>).loginByEmail.mockImplementation(() => {
  const response = createLoginByEmailResponse();
  return Promise.resolve(response);
});

describe('auth', () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });

  describe('loginByEmail', () => {
    it('should send request', async () => {
      const store = mockStore();
      const actions = store.getActions();
      const payload = createLoginByEmailPayload();
      const successfulCallback = jest.fn();

      await store.dispatch(loginByEmail(payload, successfulCallback));
      expect(actions[0]).toEqual<ShowGlobalLoader>({ type: SHOW_GLOBAL_LOADER });
      expect(actions[1]).toEqual<AuthenticateSuccessAction>({
        type: AUTHENTICATE_SUCCESS,
        payload: { token: '123' },
      });
      expect(actions[2]).toEqual<ShowAlertAction>({ type: SHOW_ALERT, payload: { type: AlertType.SUCCESS, message: undefined } });
      expect(actions[3]).toEqual<HideGlobalLoader>({ type: HIDE_GLOBAL_LOADER });
      expect(successfulCallback).toBeCalled();
    });

    it('should receive undefined', async () => {
      // eslint-disable-next-line
      mockLoginByEmail.mockImplementationOnce(() => Promise.reject({ message: undefined }));
      const store = mockStore();
      const actions = store.getActions();
      const payload = createLoginByEmailPayload();
      const successfulCallback = jest.fn();

      await store.dispatch(loginByEmail(payload, successfulCallback));
      expect(actions[0]).toEqual<ShowGlobalLoader>({ type: SHOW_GLOBAL_LOADER });
      expect(actions[1]).toEqual<ShowAlertAction>({ type: SHOW_ALERT, payload: { type: AlertType.ERROR, message: undefined } });
      expect(actions[2]).toEqual<HideGlobalLoader>({ type: HIDE_GLOBAL_LOADER });
      expect(successfulCallback).toBeCalledTimes(0);
    });
  });
});
