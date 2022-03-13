import Link from 'next/link';

type Props = {
  title: string;
  count: number;
};

export function TagItem({ title, count }: Props): JSX.Element {
  return (
    <div>
      <Link href={`/tags/${title}`} passHref>
        <a className="mr-2">{title}</a>
      </Link>
      <Link href={`/tags/${title}`} passHref>
        <a>({count})</a>
      </Link>
    </div>
  );
}
