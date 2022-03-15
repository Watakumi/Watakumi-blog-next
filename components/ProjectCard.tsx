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
    <div className="p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
      <div className="overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700">
        <Link href={href} passHref>
          <a>
            <Image
              alt={title}
              src={src}
              width={800}
              height={450}
              className="object-cover object-center md:h-36 lg:h-48"
            />
          </a>
        </Link>
        <div className="h-[250px] w-auto p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {title}
          </h2>
          <p className="mb-3 max-w-none text-gray-600">{description}</p>

          <Link href={href} passHref>
            <a className="inline-block font-medium text-cyan-600 hover:text-cyan-800">
              Learn More &rarr;
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
