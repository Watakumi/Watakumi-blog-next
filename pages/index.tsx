import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import Top from '../components/Top';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WatakumiBlog</title>
        <meta name="description" content="This is Watakumi Blog." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Top />
      </Layout>
    </div>
  );
}
