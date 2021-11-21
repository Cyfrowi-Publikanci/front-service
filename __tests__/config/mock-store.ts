import createMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

import { AuthActionTypes } from '../../redux/actions-types/auth';
import { ComponentsActionTypes } from '../../redux/actions-types/components';
import { AppState } from '../../redux/rootReducer';

type ActionsTypes = AuthActionTypes & ComponentsActionTypes;

type DispatchExts = ThunkDispatch<AppState, void, ActionsTypes>;

const middleware = [thunk];

export const mockStore = createMockStore<AppState, DispatchExts>(middleware);
