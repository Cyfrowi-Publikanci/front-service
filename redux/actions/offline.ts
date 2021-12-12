import { CLEAR_EDIT_PROFILE_OFFLINE, EDIT_PROFILE_OFFLINE, OfflineActionTypes } from '../actions-types/offline';

export const editProfileOffline = (bgColor: string, fontSize: string): OfflineActionTypes => ({
  type: EDIT_PROFILE_OFFLINE,
  payload: {
    bgColor: bgColor,
    fontSize: fontSize
  }
});

export const clearEditProfileOffline = (): OfflineActionTypes => ({
  type: CLEAR_EDIT_PROFILE_OFFLINE,
});
