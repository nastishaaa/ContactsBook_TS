import contactsReducer from './contacts/slice';
import filtersReducer from './filters/slice';
import authReducer from './auth/slice';
import type { AuthSlice } from './auth/slice';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer<AuthSlice>(authPersistConfig, authReducer),
        contacts: contactsReducer,
        filters: filtersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
      devTools: process.env.NODE_ENV === 'development',
});


export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
