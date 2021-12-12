export const EDIT_PROFILE_OFFLINE = 'EDIT_PROFILE_OFFLINE';
export const CLEAR_EDIT_PROFILE_OFFLINE = 'CLEAR_EDIT_PROFILE_OFFLINE';

export interface EditProfileOfflineAction {
  type: typeof EDIT_PROFILE_OFFLINE;
  payload: {
    bgColor: string,
    fontSize: string
  };
}

export interface ClearEditProfileOfflineAction {
  type: typeof CLEAR_EDIT_PROFILE_OFFLINE;
}

export type OfflineActionTypes =
  | EditProfileOfflineAction
  | ClearEditProfileOfflineAction;
