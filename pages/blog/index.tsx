import { InferGetStaticPropsType } from 'next';
import { Card } from '../../components/Card';
import { TitleContent } from '../../components/TitleContent';
import { getAllPosts } from '../../lib/utils';

type Props = InferGetStaticPropsType<typeof getStaticProps>;
export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'slug',
    'title',
    'date',
    'tags',
    'summary',
    'draft',
  ]);
  const filteredPosts = allPosts.filter((post) => post.draft == false);
  return {
    props: { filteredPosts },
  };
};

export default function Blog({ filteredPosts }: Props): JSX.Element {
  return (
    <div>
      <TitleContent title="All Posts" />
      {filteredPosts?.map((post) => (
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
