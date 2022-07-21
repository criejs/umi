import React from "react";
import { Provider } from "react-redux";
import store from '@/store'

export function rootContainer(root: JSX.Element): JSX.Element {
  return <Provider store={store}>{root}</Provider>;
}
