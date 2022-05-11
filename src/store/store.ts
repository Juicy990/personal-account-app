import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { userApi } from "../services/UserService";

const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userApi.middleware),
  });
};
