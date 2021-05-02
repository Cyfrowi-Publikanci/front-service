import { AlertType } from '../../components/common/alerts/types';

export const SHOW_GLOBAL_LOADER = 'SHOW_GLOBAL_LOADER';
export const HIDE_GLOBAL_LOADER = 'HIDE_GLOBAL_LOADER';
export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';

export interface ShowGlobalLoader {
  type: typeof SHOW_GLOBAL_LOADER;
}

export interface HideGlobalLoader {
  type: typeof HIDE_GLOBAL_LOADER;
}

export interface ShowAlertAction {
  type: typeof SHOW_ALERT;
  payload: {
    message: string;
    type: AlertType;
  };
}

export interface HideAlertAction {
  type: typeof HIDE_ALERT;
}

export type ComponentsActionTypes =
  | ShowGlobalLoader
  | HideGlobalLoader
  | ShowAlertAction
  | HideAlertAction;
