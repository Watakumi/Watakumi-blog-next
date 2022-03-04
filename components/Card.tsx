import Link from 'next/link';

export function Card(): JSX.Element {
  return (
    <div className="pb-10">
      <hr />
      <div className="flex flex-row mt-10">
        <p className="w-1/4">May 29, 2022</p>
        <div>
          <p className="text-3xl">Title</p>
          <div className="flex flex-row gap-4">
            <p>Ruby</p>
            <p>JavaScript</p>
          </div>
          <p className="text-gray-600 mt-8">Note. This is description.</p>
          <Link href={'#'} passHref>
            <a className="inline-block mt-4">Read More &rarr;</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
