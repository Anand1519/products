import { createStore,applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { rootReducer } from 'store/reducers/index';
import { saveToStorage } from 'localStore';


export const store = createStore(rootReducer,applyMiddleware(thunk));

store.subscribe(()=>{
    saveToStorage("cart", store.getState().cart)
    console.log(" store by subscribe",store.getState().cart)
});