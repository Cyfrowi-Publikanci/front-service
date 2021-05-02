import {
  authInitialState, 
  componentsInitialState,
} from './reducers';
import { AppState } from './rootReducer';

export const appInitialState: AppState = {
  auth: authInitialState,
  components: componentsInitialState,
};
