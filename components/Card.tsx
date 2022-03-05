import Link from 'next/link';
import { Tag } from './Tag';

type Props = {
  title: string;
  summary: string;
  tags?: string[];
  date: string;
};

export function Card({ title, date, tags, summary }: Props): JSX.Element {
  return (
    <div className="pb-10">
      <hr />
      <div className="flex flex-row mt-10">
        <p className="w-1/4">{date}</p>
        <div className="w-3/4">
          <p className="text-3xl">{title}</p>
          <div className="flex flex-row gap-4">
            {tags?.map((tag) => (
              <Tag name={tag} key={tag} />
            ))}
          </div>
          <p className="text-gray-600 mt-8">{summary}</p>
          <Link href={'#'} passHref>
            <a className="inline-block mt-4 text-cyan-600	hover:text-cyan-800">
              Read More &rarr;
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
