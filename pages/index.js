import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <h1><Link href="/About">Click here to go to Avatars.</Link></h1>
    </div>
  );
}
