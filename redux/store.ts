import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import rootReducer from './rootReducer';
import { appInitialState } from './initialState';

const persistConfig = {
  key: 'root:PubLab',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [];

const logger = createLogger({ collapsed: true });

if (process.env && process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const composeEnhancers = composeWithDevTools({
  trace: process.env?.NODE_ENV === 'development',
});

const store = createStore(persistedReducer, appInitialState, composeEnhancers(applyMiddleware(thunk, ...middlewares)));

const persistor = persistStore(store);

export { store, persistor };
