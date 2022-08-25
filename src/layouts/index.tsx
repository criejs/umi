import { Outlet } from 'umi';
import './index.less';
export default function Layout() {
  return (
    <div className="lego-container">
      <Outlet />
    </div>
  );
}
