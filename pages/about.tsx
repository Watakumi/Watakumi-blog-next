import Link from 'next/link';
import { TitleContent } from '../components/TitleContent';

export default function About() {
  return (
    <div>
      <TitleContent title="About" />
      <div className="flex flex-col items-center">
        <h2 className="text-3xl">好きなことを好きなだけ</h2>
        <Link href={'https://github.com/Watakumi'} passHref>
          <a className="text-2xl">
            Github: <span className="border-b-2 border-gray-500">Watakumi</span>
          </a>
        </Link>
      </div>
    </div>
  );
}
