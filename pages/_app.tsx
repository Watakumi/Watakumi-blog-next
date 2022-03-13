import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { SEO } from '../components/SEO';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <SEO title="WatakumiBlog" />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
