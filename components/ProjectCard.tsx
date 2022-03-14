import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  src: string;
  href: string;
};
export function ProjectCard({
  title,
  description,
  src,
  href,
}: Props): JSX.Element {
  return (
    <div className="w-1/2 p-4">
      <div className="">
        <Link href={href} passHref>
          <a>
            <Image alt={title} src={src} width={800} height={450} />
          </a>
        </Link>
      </div>
      <div className="w-auto space-y-4 p-6">
        <h2 className="text-2xl">FirstProject</h2>
        <p className="w-full text-gray-600">{description}</p>
        <Link href={href} passHref>
          <a className="inline-block py-2 text-cyan-600	hover:text-cyan-800">
            Learn More &rarr;
          </a>
        </Link>
      </div>
    </div>
  );
}
