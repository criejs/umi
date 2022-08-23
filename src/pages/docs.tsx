import { useAppDispatch, useAppSelector } from '@/store';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { incrementAsync, selectCount } from '@/store/test';
import auth from '@/wrappers/auth';

const Page = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(incrementAsync(100));
  }, []);
  return (
    <>
      <Helmet>
        <title>docs</title>
      </Helmet>
      <div>
        <p>This is umi docs.{count}</p>
      </div>
    </>
  );
};

export default auth(Page);
