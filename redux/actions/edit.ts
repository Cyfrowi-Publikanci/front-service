import { ThunkDispatch } from 'redux-thunk';
import i18n from 'i18next';
import { AppState } from '../rootReducer';
import { hideGlobalLoader, showAlert, showGlobalLoader } from './components';
import { AuthActionTypes } from '../actions-types/auth';
import { ComponentsActionTypes } from '../actions-types/components';
import { AlertType } from '../../components/common/alerts/types';
import { EditPasswordPayload  } from '../../proto-generated/authentication_pb';
import { authServiceClient, settingsServiceClient } from '../../api/rpc';
import { ChangeProfilePayload, LoadProfilePayload, LoadProfileResponse } from '../../proto-generated/settings_pb';
import { LoadProfileSuccessAction, LOAD_PROFILE_SUCCESS, ProfileActionTypes } from '../actions-types/profile';

export const loadProfileSuccess = (payload: { bgColor: string, fontSize: string }): LoadProfileSuccessAction => ({
  type: LOAD_PROFILE_SUCCESS,
  payload,
});

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

export const changeProfile = (payload: ChangeProfilePayload, successfulCallback: () => void) => async (
  dispatch: ThunkDispatch<AppState, void, AuthActionTypes | ComponentsActionTypes>,
  ) => {
    try {
      console.log('xd1')
      dispatch(showGlobalLoader());
      await settingsServiceClient.changeProfile(payload, {});
  
      successfulCallback();
      dispatch(showAlert(i18n.t('Profile changed successfully'), AlertType.SUCCESS));
    } catch (error) {
      dispatch(showAlert(i18n.t(error.message ?? 'Change failed'), AlertType.ERROR));
    } finally {
      dispatch(hideGlobalLoader());
    }
};


export const loadProfile = (payload: LoadProfilePayload) => async (
  dispatch: ThunkDispatch<AppState, void, AuthActionTypes | ComponentsActionTypes | ProfileActionTypes>,
  ) => {
    try {
      dispatch(showGlobalLoader());
      const response = await settingsServiceClient.loadProfile(payload, {});
      const profile = response.toObject();

      if (profile) dispatch(loadProfileSuccess({ bgColor: profile.bgcolor, fontSize: profile.fontsize }));

    } catch (error) {
      dispatch(showAlert(i18n.t(error.message ?? 'Loading Profile failed'), AlertType.ERROR));
    } finally {
      dispatch(hideGlobalLoader());
    }
};
