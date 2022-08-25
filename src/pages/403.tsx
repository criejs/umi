import { Button, Result } from 'antd';
import { history } from 'umi';
export default function Page() {
  const handleClick = () => {
    history.replace('/');
  };
  return (
    <Result
      status="403"
      title="403"
      subTitle="对不起，你没有操作权限"
      extra={
        <Button type="primary" onClick={handleClick}>
          返回首页
        </Button>
      }
    />
  );
}
