import { useAppDispatch, useAppSelector } from '@/store';
import { incrementAsync, selectCount } from '@/store/test';
import { useEffect } from 'react';
import { history } from 'umi';

interface IProps {
  [prop: string]: any;
}

// HOC-中心化管理权限
export default (Page: React.FC) => {
  return (props: IProps) => {
    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();

    useEffect(() => {
      setTimeout(() => {
        dispatch(incrementAsync(100));
        setTimeout(() => {
          history.replace('/go/1');
        }, 1000);
      }, 2000);
    }, []);

    // 校验权限
    if (!count) {
      return <div>is not login</div>;
    }
    // 校验通过，渲染页面
    return <Page {...props} />;
  };
};
