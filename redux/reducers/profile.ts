import { LOAD_PROFILE_SUCCESS, ProfileActionTypes } from '../actions-types/profile';
import { ProfileState } from '../types';

export const profileInitialState: ProfileState = {
  bgColor: '',
  fontSize: ''
};

export function profileReducer(state = profileInitialState, action: ProfileActionTypes): ProfileState {
  switch (action.type) {
    case LOAD_PROFILE_SUCCESS:
      return {
        ...state,
        bgColor: action.payload.bgColor,
        fontSize: action.payload.fontSize
      };
    default:
      return state;
  }
}
