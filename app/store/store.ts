import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counter-slice';

const rootReducer = combineReducers({
  counter: counterReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    })
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
