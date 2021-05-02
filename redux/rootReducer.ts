import { combineReducers } from 'redux';

import {
  authReducer,
  componentsReducer,
} from './reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  components: componentsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
