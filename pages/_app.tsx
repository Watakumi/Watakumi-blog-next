import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { SEO } from '../components/SEO';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <SEO title="WatakumiBlog" ogImage="/images/logo.png" />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
