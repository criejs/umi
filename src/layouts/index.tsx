import routes from '@/routes';
import { UserOutlined } from '@ant-design/icons';
import { ProLayout } from '@ant-design/pro-layout';
import { Avatar } from 'antd';
import { history, Outlet } from 'umi';

const route = {
  path: '/',
  routes,
};
const settings = {
  fixSiderbar: true,
  navTheme: 'realDark',
  layout: 'mix',
  contentWidth: 'Fluid',
  headerHeight: 48,
  primaryColor: '#1890ff',
  fixedHeader: true,
  splitMenus: false,
};

export default function Layout() {
  return (
    <ProLayout
      route={route}
      location={{
        pathname: '/',
      }}
      onMenuHeaderClick={(e) => console.log(e)}
      menuItemRender={(item, dom) => (
        <a
          onClick={() => {
            history.push(item.path || '/');
          }}
        >
          {dom}
        </a>
      )}
      rightContentRender={() => (
        <div>
          <Avatar shape="square" size="small" icon={<UserOutlined />} />
        </div>
      )}
      {...settings}
    >
      <Outlet />
    </ProLayout>
  );
}
