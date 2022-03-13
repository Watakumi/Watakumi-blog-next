import Head from 'next/head';
import siteMetadata from '../data/siteMetadata';

type Props = {
  title?: string;
  description?: string;
  ogType?: string;
};
export function SEO({ title, description, ogType }: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
    </Head>
  );
}
