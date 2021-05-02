import {
  ComponentsActionTypes,
  HIDE_ALERT,
  HIDE_GLOBAL_LOADER,
  SHOW_ALERT,
  SHOW_GLOBAL_LOADER,
} from '../actions-types/components';
import { ComponentsState } from '../types';

export const componentsInitialState: ComponentsState = {
  loader: false,
  showAlert: false,
  alert: {
    message: '',
    type: undefined,
  },
};

export function componentsReducer(state = componentsInitialState, action: ComponentsActionTypes): ComponentsState {
  switch (action.type) {
    case SHOW_GLOBAL_LOADER:
      return {
        ...state,
        loader: true,
      };
    case HIDE_GLOBAL_LOADER:
      return {
        ...state,
        loader: false,
      };
    case SHOW_ALERT:
      return {
        ...state,
        showAlert: true,
        alert: {
          message: action.payload.message,
          type: action.payload.type,
        },
      };
    case HIDE_ALERT:
      return {
        ...state,
        showAlert: false,
        alert: {
          message: '',
          type: undefined,
        },
      };
    default:
      return state;
  }
}
