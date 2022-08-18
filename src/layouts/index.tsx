import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          {/* 页面重新加载了 */}
          <a href="/go/1">go</a>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
