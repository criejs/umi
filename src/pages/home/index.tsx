import Guide from '@/components/Guide';
import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';

const name = 'test';

export default function Page() {
  return (
    <PageContainer>
      <div className={styles.container}>
        <Guide name={name} />
      </div>
    </PageContainer>
  );
}
