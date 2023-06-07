import { configureStore,combineReducers} from "@reduxjs/toolkit";
import  storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import MealSlice from "../redux/MealSlice";
const persistConfig={
    key:'root',
    storage
}
const rootReducer=combineReducers({
    meal:MealSlice

})
const persistedReducer=persistReducer(persistConfig,rootReducer);
const Store=configureStore({
    reducer:persistedReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

})
export default Store;