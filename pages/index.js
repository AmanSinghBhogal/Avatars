import Link from 'next/link';
import styles from '../styles/Home.module.css';
import NavBar from '../src/components/NavBar';

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Link href="/About">
          <div id={styles.link}>
              Click here to go to Avatars.
          </div>
      </Link>
    </div>
  );
}
