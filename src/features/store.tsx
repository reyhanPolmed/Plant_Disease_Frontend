import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit"
import AuthReducer from "../features/user/AuthSlice";
import CartReducer from "./cart/CartSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const presistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "cart"],
};
const reducer = combineReducers({
  auth: AuthReducer,
  cart: CartReducer,
});

const persistedReducer = persistReducer(presistConfig, reducer);
export const store = configureStore({
    reducer: {
        persistedReducer,
    },
    devTools: true
})
export type RootState = ReturnType<typeof store.getState>;
