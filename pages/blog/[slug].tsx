import { InferGetStaticPropsType, NextPage } from 'next';
import { Markdown } from '../../components/Markdown';
import { Scrap } from '../../components/Scrap';
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
    'style',
  ]);

  return {
    props: {
      post,
    },
  };
};

const StyledContent = (style: string, content: string) => {
  if (style === 'article') {
    return (
      <section className="markdown sm:w-3/4">
        <Markdown markdown={content} />
      </section>
    );
  } else {
    return (
      <section className="scrap sm:w-3/4">
        <Scrap markdown={content} />
      </section>
    );
  }
};

const Post: NextPage<Props> = ({ post }) => (
  <article className="flex flex-col">
    <div className="flex flex-col items-center border-b-2 px-4 pb-8 md:px-2">
      <p className="text-gray-600">{post.date}</p>
      <h1 className="text-center text-2xl font-bold leading-9 sm:text-4xl sm:leading-10 md:text-5xl md:leading-[3.5rem]">
        {post.title}
      </h1>
    </div>
    <div className="mt-8 flex flex-col sm:flex-row">
      <div className="w-1/4">
        <p className="text-2xl sm:text-lg">TAGS</p>
        <div className="flex flex-row gap-2 md:flex-row md:flex-wrap md:gap-4">
          {post.tags?.map((tag) => (
            <Tag name={tag} key={tag} />
          ))}
        </div>
      </div>
      <hr className="my-8 sm:hidden" />
      {StyledContent(post.style, post.content)}
    </div>
  </article>
);

export default Post;
