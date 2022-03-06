import { InferGetStaticPropsType, NextPage } from 'next';
import { getAllPosts, getPostBySlug } from '../../lib/utils';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import emoji from 'remark-emoji';

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
  <article>
    <h2>{post.title}</h2>
    <p>{post.date}</p>
    <ul>
      {post.tags?.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
    <section>
      <ReactMarkdown remarkPlugins={[emoji, remarkGfm]}>
        {post.content}
      </ReactMarkdown>
    </section>
  </article>
);

export default Post;
