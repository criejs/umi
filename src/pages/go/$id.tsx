import { useAppDispatch, useAppSelector } from '@/store';
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  selectCount,
} from '@/store/counter';
import { history, useParams } from 'umi';

const Page = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const params = useParams();
  console.log(params);
  return (
    <div>
      <div>
        <button type="button" onClick={() => dispatch(increment())}>
          +
        </button>
        <span>{count}</span>
        <button type="button" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
      <button type="button" onClick={() => dispatch(incrementByAmount(10))}>
        +10
      </button>
      <button type="button" onClick={() => dispatch(incrementAsync(5))}>
        async
      </button>
      {/* 这里省略了额外的 render 代码 */}

      <button type="button" onClick={() => history.push('/docs')}>
        back
      </button>
      <button type="button" onClick={() => history.push('/go/2')}>
        go/2
      </button>
    </div>
  );
};

export default Page;
