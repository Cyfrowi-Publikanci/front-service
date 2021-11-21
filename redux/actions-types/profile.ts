export const LOAD_PROFILE_SUCCESS = 'LOAD_PROFILE_SUCCESS';

export interface LoadProfileSuccessAction {
  type: typeof LOAD_PROFILE_SUCCESS;
  payload: {
    bgColor: string,
    fontSize: string
  };
}

export type ProfileActionTypes =
  | LoadProfileSuccessAction;
