import { useAppDispatch, useAppSelector } from '@/store';
import { useEffect } from 'react';

import { incrementAsync, selectCount } from '@/store/users';

const Page = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(incrementAsync(100));
  }, []);
  return (
    <>
      <div>
        <p>This is umi docs.{count}</p>
      </div>
    </>
  );
};

export default Page;
