import { InferGetStaticPropsType } from 'next';
import { Card } from '../../components/Card';
import { TitleContent } from '../../components/TitleContent';
import { getAllPosts } from '../../lib/utils';

type Props = InferGetStaticPropsType<typeof getStaticProps>;
export const getStaticProps = async () => {
  const allPosts = getAllPosts(['slug', 'title', 'date', 'tags', 'summary']);
  return {
    props: { allPosts },
  };
};

export default function Blog({ allPosts }: Props): JSX.Element {
  return (
    <div>
      <TitleContent title="All Posts" />
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
