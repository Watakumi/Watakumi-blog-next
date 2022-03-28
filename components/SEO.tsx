import Head from 'next/head';
import { useRouter } from 'next/router';
import siteMetadata from '../data/siteMetadata';

type Props = {
  title?: string;
  description?: string;
  ogType?: string;
  ogImage?: string;
  canonicalUrl?: string;
};
export function SEO({
  title,
  description,
  ogType,
  ogImage,
  canonicalUrl,
}: Props) {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      {ogImage && <meta property="og:image" content={ogImage} key={ogImage} />}
      <link
        rel="canonical"
        href={
          canonicalUrl
            ? canonicalUrl
            : `${siteMetadata.siteUrl}${router.asPath}`
        }
      />
    </Head>
  );
}
