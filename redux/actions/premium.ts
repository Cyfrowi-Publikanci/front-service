import { ThunkDispatch } from 'redux-thunk';
import i18n from 'i18next';
import { AppState } from '../rootReducer';
import { hideGlobalLoader, showAlert, showGlobalLoader } from './components';
import { AuthActionTypes, AUTHENTICATE_SUCCESS, LOGOUT, LogoutAction } from '../actions-types/auth';
import { ComponentsActionTypes } from '../actions-types/components';
import { AlertType } from '../../components/common/alerts/types';
import { authServiceClient } from '../../api/rpc';
import { BuyPremiumPayload } from '../../proto-generated/authentication_pb';


export const buyPremium = (payload: BuyPremiumPayload, successfulCallback: () => void) => async (
    dispatch: ThunkDispatch<AppState, void, AuthActionTypes | ComponentsActionTypes>,
    ) => {
      try {
        dispatch(showGlobalLoader());
        await authServiceClient.buyPremium(payload, {});
        successfulCallback();
        dispatch(showAlert(i18n.t('Premium accout purchased successfully'), AlertType.SUCCESS));
      } catch (error) {
        dispatch(showAlert(i18n.t(error.message ?? 'Premium accout purchase failed'), AlertType.ERROR));
      } finally {
        dispatch(hideGlobalLoader());
      }
};