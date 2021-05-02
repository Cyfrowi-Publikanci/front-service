import { AlertType } from '../../components/common/alerts/types';
import {
  ComponentsActionTypes,
  HIDE_ALERT,
  HIDE_GLOBAL_LOADER,
  SHOW_ALERT,
  SHOW_GLOBAL_LOADER,
} from '../actions-types/components';

export const showGlobalLoader = (): ComponentsActionTypes => ({ type: SHOW_GLOBAL_LOADER });

export const hideGlobalLoader = (): ComponentsActionTypes => ({ type: HIDE_GLOBAL_LOADER });

export const hideAlert = (): ComponentsActionTypes => ({ type: HIDE_ALERT });

export const showAlert = (message: string, type: AlertType): ComponentsActionTypes => ({
  type: SHOW_ALERT,
  payload: { message, type },
});
