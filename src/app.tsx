import store from '@/store';
import { StrictMode } from 'React';
import { Provider } from 'react-redux';

export function rootContainer(root: JSX.Element): JSX.Element {
  return (
    <StrictMode>
      <Provider store={store}>{root}</Provider>
    </StrictMode>
  );
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
if (process.env.mode === 'dev') {
  console.log(process.env.mode);
}
export function onRouteChange(params: IRouteParams) {
  console.log('onRouteChange', params);
}
