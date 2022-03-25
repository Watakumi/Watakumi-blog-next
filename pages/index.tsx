import Head from 'next/head';
import { InferGetStaticPropsType } from 'next';
import { Card } from '../components/Card';
import { TitleContent } from '../components/TitleContent';
import { getAllPosts } from '../lib/utils';
import Image from 'next/image';
type Props = InferGetStaticPropsType<typeof getStaticProps>;
export const getStaticProps = async () => {
  const allPosts = getAllPosts(['slug', 'title', 'date', 'tags', 'summary']);
  return {
    props: { allPosts },
  };
};

export default function Home({ allPosts }: Props) {
  return (
    <div>
      <Head>
        <title>WatakumiBlog</title>
        <meta name="description" content="This is Watakumi Blog." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center">
        <Image
          src={'/images/logo.png'}
          alt={'logo'}
          width={120 * 8}
          height={63 * 8}
        />
      </div>
      <TitleContent
        title={'Latest'}
        description={'RubyやJavaScriptに関する記事を公開しています。'}
      />
      {allPosts?.map((post) => (
        <Card
          key={post.slug}
          title={post.title}
          summary={post.summary}
          tags={post.tags}
          date={post.date}
          slug={post.slug}
        />
      ))}
    </div>
  );
}
