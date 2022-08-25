import { Button, Result } from 'antd';
import { history } from 'umi';
export default function Page() {
  const handleClick = () => {
    history.replace('/');
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle="对不起，该页面不存在"
      extra={
        <Button type="primary" onClick={handleClick}>
          返回首页
        </Button>
      }
    />
  );
}
