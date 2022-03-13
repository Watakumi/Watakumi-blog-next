import Link from 'next/link';

type Props = {
  name: string;
};
export function Tag({ name }: Props): JSX.Element {
  return (
    <Link href={`/tags/${name}`} passHref>
      <a className="text-cyan-600	hover:text-cyan-800">{name}</a>
    </Link>
  );
}
