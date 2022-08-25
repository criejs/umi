import { useAppDispatch, useAppSelector } from '@/store';
import { incrementAsync, selectCount } from '@/store/users';
import { useEffect } from 'react';
import { Outlet } from 'umi';

// 中心化管理权限
export default () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  console.log(123);
  useEffect(() => {
    setTimeout(() => {
      dispatch(incrementAsync(100));
    }, 2000);
  }, []);

  // 校验权限
  if (!count) {
    return null;
  }
  // 校验通过，渲染页面
  return <Outlet />;
};
