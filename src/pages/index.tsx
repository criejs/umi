import yayJpg from '@/assets/yay.jpg';
import Foo from '@/components/Foo';
import { Helmet } from 'react-helmet';

export default function Page() {
  return (
    <>
      <Helmet>
        <title>index</title>
      </Helmet>
      <div>
        <Foo />
        <h2>Yay! Welcome to umi!</h2>
        <p>
          <img src={yayJpg} width="388" />
        </p>
        <p>
          To get started, edit <code>pages/index.tsx</code> and save to reload.
        </p>
      </div>
    </>
  );
}
