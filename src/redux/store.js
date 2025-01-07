import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import userReducer from './reducers/useReducer';
import { createTransform } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // You can add transforms here to modify the persisted state
  transforms: [
    createTransform(
      // Transform inbound state (before it's stored in AsyncStorage)
      (inboundState) => {
        // Convert any non-serializable data (e.g., Realm) to plain objects
        if (inboundState && inboundState.user) {
          return { ...inboundState, user: { ...inboundState.user } }; // Example
        }
        return inboundState;
      },
      // Transform outbound state (before it's restored from AsyncStorage)
      (outboundState) => outboundState,
      { whitelist: ['user'] } // Specify which parts of the state should be transformed
    ),
  ],
};

const rootReducer = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // Add serializableCheck option to prevent serialization errors in Redux Toolkit
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore specific parts of the state if they are not serializable
        ignoredActions: ['persist/PERSIST'],
        ignoredPaths: ['user'], // Specify paths that can contain non-serializable data
      },
    }),
});

export const persistor = persistStore(store);
