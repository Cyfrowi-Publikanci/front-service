import { ThunkDispatch } from 'redux-thunk';
import i18n from 'i18next';

import { AppState } from '../rootReducer';
import { hideGlobalLoader, showAlert, showGlobalLoader } from './components';
import { AuthActionTypes, AUTHENTICATE_SUCCESS, LOGOUT, LogoutAction, SIGN_IN_GOOGLE } from '../actions-types/auth';
import { ComponentsActionTypes } from '../actions-types/components';
import { AlertType } from '../../components/common/alerts/types';
import { EmptyPayload, LoginByEmailPayload, RegisterByEmailPayload } from '../../proto-generated/authentication_pb';
import { authServiceClient } from '../../api/rpc';

export const logout = (): LogoutAction => ({
  type: LOGOUT,
});

export const authenticateSuccess = (payload: { token: string }): AuthActionTypes => ({
  type: AUTHENTICATE_SUCCESS,
  payload,
});

export const signInGoogle = (payload: { state: string }): AuthActionTypes => ({
  type: SIGN_IN_GOOGLE,
  payload,
});

export const loginByEmail = (payload: LoginByEmailPayload, successfulCallback: () => void) => async (
  dispatch: ThunkDispatch<AppState, void, AuthActionTypes | ComponentsActionTypes>,
) => {
  try {
    dispatch(showGlobalLoader());
    const response = await authServiceClient.loginByEmail(payload, {});
    const { token } = response.toObject();

    if (token) dispatch(authenticateSuccess({ token }));
    successfulCallback();
    dispatch(showAlert(i18n.t('Login successfully'), AlertType.SUCCESS));
  } catch (error) {
    dispatch(showAlert(i18n.t(error.message ?? 'Login failed'), AlertType.ERROR));
  } finally {
    dispatch(hideGlobalLoader());
  }
};

export const register = (payload: RegisterByEmailPayload, successfulCallback: () => void) => async (
  dispatch: ThunkDispatch<AppState, void, AuthActionTypes | ComponentsActionTypes>,
) => {
  try {
    dispatch(showGlobalLoader());
    await authServiceClient.registerByEmail(payload, {});

    successfulCallback();
    dispatch(showAlert(i18n.t('Registered successfully'), AlertType.SUCCESS));
  } catch (error) {
    dispatch(showAlert(i18n.t(error.message ?? 'Registered failed'), AlertType.ERROR));
  } finally {
    dispatch(hideGlobalLoader());
  }
};

export const getAllNotyfications = () => async (
  dispatch: ThunkDispatch<AppState, void, AuthActionTypes | ComponentsActionTypes>,
) => {
  try {
    const payload = new EmptyPayload();
    const response = await authServiceClient.getAllNotifications(payload, {})
    const notifications = response.getNotyficationsList()

    dispatch(showAlert(notifications.toString(), AlertType.SUCCESS));
  } catch (error) {
    console.log(error)
  }
};
