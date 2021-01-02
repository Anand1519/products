import { createStore,applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { rootReducer } from 'store/reducers/index';

export const store = createStore(rootReducer,applyMiddleware(thunk));