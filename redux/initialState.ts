import {
  authInitialState, 
  componentsInitialState,
} from './reducers';
import { offlineInitialState } from './reducers/offline';
import { profileInitialState } from './reducers/profile';
import { AppState } from './rootReducer';

export const appInitialState: AppState = {
  auth: authInitialState,
  components: componentsInitialState,
  profile: profileInitialState,
  offline: offlineInitialState
};
