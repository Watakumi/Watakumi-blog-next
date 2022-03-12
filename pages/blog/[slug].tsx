import { InferGetStaticPropsType, NextPage } from 'next';
import { Markdown } from '../../components/Markdown';
import { Tag } from '../../components/Tag';
import { getAllPosts, getPostBySlug } from '../../lib/utils';

type Props = InferGetStaticPropsType<typeof getStaticProps>;
export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const post = getPostBySlug(params.slug, [
    'slug',
    'title',
    'date',
    'tags',
    'content',
  ]);

  return {
    props: {
      post,
    },
  };
};

const Post: NextPage<Props> = ({ post }) => (
  <article className="flex flex-col">
    <div className="flex flex-col items-center border-b-2 pb-8">
      <p className="text-gray-600">{post.date}</p>
      <h1 className="md:leading-14 text-3xl font-bold leading-9 sm:text-4xl sm:leading-10 md:text-5xl">
        {post.title}
      </h1>
    </div>
    <div className="mt-8 flex flex-row">
      <div className="w-1/4">
        <p>TAGS</p>
        <div className="flex flex-wrap gap-4">
          {post.tags?.map((tag) => (
            <Tag name={tag} key={tag} />
          ))}
        </div>
      </div>
      <section className="markdown w-3/4">
        <Markdown markdown={post.content} />
      </section>
    </div>
  </article>
);

export default Post;
