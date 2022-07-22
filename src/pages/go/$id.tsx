import React, { useState } from 'react';
import { history } from 'umi';
import { useAppSelector, useAppDispatch } from '@/store';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount
} from '@/store/counter';

const Page = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button 
          type="button" 
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span>{count}</span>
        <button
          type="button"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <button
        type="button"
        onClick={() => dispatch(incrementByAmount(10))}
      >
        +10
      </button>
      <button
        type="button"
        onClick={() => dispatch(incrementAsync(5))}
      >
        async
      </button>
      {/* 这里省略了额外的 render 代码 */}

      <span onClick={() => history.push('/docs')}>back</span>
    </div>
  );
};

export default Page;
