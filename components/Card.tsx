import Link from 'next/link';
import { Tag } from './Tag';

type Props = {
  title: string;
  summary: string;
  tags?: string[];
  date: string;
  slug: string;
};

export function Card({ title, date, tags, summary, slug }: Props): JSX.Element {
  return (
    <div className="pb-10">
      <hr />
      <div className="mt-10 flex flex-col sm:flex-row">
        <p className="w-full text-xl sm:text-base md:w-1/4">{date}</p>
        <div className="w-full md:w-3/4">
          <p className="break-words text-3xl">
            <Link href={`/blog/${slug}`}>
              <a>{title}</a>
            </Link>
          </p>
          <div className="flex flex-row gap-4">
            {tags?.map((tag) => (
              <Tag name={tag} key={tag} />
            ))}
          </div>
          <p className="mt-4 text-gray-600">{summary}</p>
          <Link href={`/blog/${slug}`} passHref>
            <a className="mt-4 inline-block text-cyan-600	hover:text-cyan-800">
              Read More &rarr;
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
