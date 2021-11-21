import {
  authInitialState, 
  componentsInitialState,
} from './reducers';
import { profileInitialState } from './reducers/profile';
import { AppState } from './rootReducer';

export const appInitialState: AppState = {
  auth: authInitialState,
  components: componentsInitialState,
  profile: profileInitialState
};
