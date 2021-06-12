import { ThunkDispatch } from 'redux-thunk';
import i18n from 'i18next';
import { AppState } from '../rootReducer';
import { hideGlobalLoader, showAlert, showGlobalLoader } from './components';
import { AuthActionTypes, AUTHENTICATE_SUCCESS, LOGOUT, LogoutAction } from '../actions-types/auth';
import { ComponentsActionTypes } from '../actions-types/components';
import { AlertType } from '../../components/common/alerts/types';
import { EditPasswordPayload } from '../../proto-generated/authentication_pb';
import { authServiceClient } from '../../api/rpc';


export const editPassword = (payload: EditPasswordPayload, successfulCallback: () => void) => async (
    dispatch: ThunkDispatch<AppState, void, AuthActionTypes | ComponentsActionTypes>,
    ) => {
      try {
        dispatch(showGlobalLoader());
        await authServiceClient.editPassword(payload, {});
    
        successfulCallback();
        dispatch(showAlert(i18n.t('Password changed successfully'), AlertType.SUCCESS));
      } catch (error) {
        dispatch(showAlert(i18n.t(error.message ?? 'Password change failed'), AlertType.ERROR));
      } finally {
        dispatch(hideGlobalLoader());
      }
};
