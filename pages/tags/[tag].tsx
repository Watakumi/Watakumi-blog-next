import { InferGetStaticPropsType } from 'next';
import { Card } from '../../components/Card';
import { TitleContent } from '../../components/TitleContent';
import { getAllPosts, getAllTags } from '../../lib/utils';

type Props = InferGetStaticPropsType<typeof getStaticProps>;
export async function getStaticPaths() {
  const tags = getAllTags();

  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  };
}

export const getStaticProps = ({ params }: any) => {
  const allPosts = getAllPosts(['slug', 'title', 'date', 'tags', 'summary']);
  const filteredPosts = allPosts.filter((post) =>
    post.tags?.map((tag) => tag.includes(params.tag))
  );

  return { props: { posts: filteredPosts, tag: params.tag } };
};
export default function Tag({ posts, tag }: Props) {
  return (
    <div>
      <TitleContent title={tag} />
      {posts?.map((post) => (
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
