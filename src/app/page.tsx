import Marquee from 'react-fast-marquee';
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <Marquee gradient={false}>
        <h1 className={styles.center}>Hello Next.js</h1>
      </Marquee>
    </>
  );
}
