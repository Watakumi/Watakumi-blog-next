import { InferGetStaticPropsType } from 'next';
import { TagItem } from '../../components/TagItem';
import { getAllTags } from '../../lib/utils';

type Props = InferGetStaticPropsType<typeof getStaticProps>;
export default function Tags({ tags }: Props): JSX.Element {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a]);
  return (
    <div className="mt-36">
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
        <h1 className="border-b-2 border-gray-400 pb-2 text-3xl sm:text-4xl md:border-b-0 md:border-r-2 md:pb-0 md:pr-8 md:text-5xl">
          Tags
        </h1>
        <div className="flex max-w-lg flex-wrap gap-4">
          {sortedTags.map((t) => {
            return <TagItem key={t} title={t} count={tags[t]} />;
          })}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = () => {
  const tags = getAllTags();
  return { props: { tags } };
};
