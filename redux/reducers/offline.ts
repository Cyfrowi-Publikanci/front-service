import { CLEAR_EDIT_PROFILE_OFFLINE, EDIT_PROFILE_OFFLINE, OfflineActionTypes } from '../actions-types/offline';
import { OfflineState } from '../types';

export const offlineInitialState: OfflineState = {
  editProfile: undefined
};

export function offlineReducer(state = offlineInitialState, action: OfflineActionTypes): OfflineState {
  switch (action.type) {
    case EDIT_PROFILE_OFFLINE:
      return {
        ...state,
        editProfile: {
          bgColor: action.payload.bgColor,
          fontSize: action.payload.fontSize
        }
      };
    case CLEAR_EDIT_PROFILE_OFFLINE:
      return {
        ...state,
        editProfile: undefined
      }
    default:
      return state;
  }
}
