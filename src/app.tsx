import store from '@/store';
import { Provider } from 'react-redux';

export function rootContainer(root: JSX.Element): JSX.Element {
  return <Provider store={store}>{root}</Provider>;
}

// 渲染时权限校验
export function render(oldRender: () => void) {
  console.log('render');
  oldRender();
  // fetch('/api/auth').then(auth => {
  //   if (auth.isLogin) { oldRender() }
  //   else {
  //     location.href = '/login';
  //     oldRender()
  //   }
  // });
}
interface IRouteParams {
  routes: any;
  clientRoutes: any;
  location: any;
  action: any;
}

export function onRouteChange(params: IRouteParams) {
  console.log('onRouteChange', params);
}
