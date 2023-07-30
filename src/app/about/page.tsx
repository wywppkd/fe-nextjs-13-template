import { getUserList } from '@/api/about';
import CreateForm from './_components/CreateForm';
import styles from './page.module.scss';

const AboutPage = async () => {
  const res = await getUserList({
    platformType: 'SYSTEM',
  });

  return (
    <div className={styles.green}>
      About
      <CreateForm />
      <pre>{JSON.stringify(res, null, 2)}</pre>
    </div>
  );
};

export default AboutPage;
