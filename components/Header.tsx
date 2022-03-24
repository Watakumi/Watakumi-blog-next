import Image from 'next/image';
import Link from 'next/link';
import { Menu } from './Menu';

export function Header(): JSX.Element {
  return (
    <header className="px-6 pb-12 antialiased">
      <nav className="z-50 h-24 select-none">
        <div className="flex h-24 flex-wrap items-center justify-between border-b border-gray-200 px-2 font-medium">
          <div className="flex h-full w-1/4 items-center pr-4">
            <Link href={'/'} passHref>
              <a>
                <Image
                  src={'/images/header_logo.png'}
                  alt={'HeaderLogo'}
                  width={10 * 12}
                  height={4 * 12}
                />
              </a>
            </Link>
          </div>
          <Menu />
        </div>
      </nav>
    </header>
  );
}
