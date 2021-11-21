import { combineReducers } from 'redux';

import {
  authReducer,
  componentsReducer,
} from './reducers';
import { profileReducer } from './reducers/profile';

const rootReducer = combineReducers({
  auth: authReducer,
  components: componentsReducer,
  profile: profileReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
