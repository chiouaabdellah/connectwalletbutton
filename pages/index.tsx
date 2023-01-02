import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Event Project</title>
      </Head>

      <main className={styles.main}>
        <ConnectButton />

      </main>
      <footer className={styles.footer}>
        <a>
          Event server page
        </a>
      </footer>
    </div>

  );
};

export default Home;
