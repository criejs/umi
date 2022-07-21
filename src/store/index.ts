import { configureStore, ThunkAction, Action  } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import counter from './counter';
import test from './test';

const store = configureStore({
  reducer: {
    counter,
    test,
  },
  devTools: process.env.NODE_ENV !== 'production'  // 不让生产环境调试
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type StoreState = typeof store.getState;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;