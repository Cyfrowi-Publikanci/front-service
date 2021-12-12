import { combineReducers } from 'redux';

import {
  authReducer,
  componentsReducer,
} from './reducers';
import { offlineReducer } from './reducers/offline';
import { profileReducer } from './reducers/profile';

const rootReducer = combineReducers({
  auth: authReducer,
  components: componentsReducer,
  profile: profileReducer,
  offline: offlineReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
