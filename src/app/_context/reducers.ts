import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from "./userSlice";
import createOrderReducer from "./CreateOrderSessionSlice";

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    user: userReducer,
    createOrderSession: createOrderReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
