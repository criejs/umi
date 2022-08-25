// 运行时配置
import store from '@/store';
import { Provider } from 'react-redux';

export function rootContainer(root: JSX.Element): JSX.Element {
  return <Provider store={store}>{root}</Provider>;
}
// 页面布局配置
export const layout = () => {
  return {
    title: '希望学APP配置后台',
    logo: 'https://static0.saasz.vdyoo.com/bcc-mall/quality-app/xiwang-logo.png',
    menu: {
      locale: false,
      inlineCollapsed: true,
    },
    fixSiderbar: true,
    navTheme: 'dark',
    layout: 'mix',
    contentWidth: 'Fluid',
    headerHeight: 48,
    primaryColor: '#1890ff',
    fixedHeader: true,
    splitMenus: false,
    // rightRender(){}
  };
};

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
