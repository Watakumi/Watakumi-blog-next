import Link from 'next/link';

export function Header(): JSX.Element {
  return (
    <header className="px-6 pb-12 antialiased">
      <nav className="z-50 h-24 select-none">
        <div className="flex h-24 flex-wrap items-center justify-between border-b border-gray-200 px-2 font-medium">
          <div className="flex h-full w-1/4 items-center pr-4">
            <Link href={'/'} passHref>
              <a>image</a>
            </Link>
          </div>
          <div className="flex w-1/4 justify-end">
            <div className="flex flex-row items-center justify-center text-center gap-2">
              <Link href="/blog" passHref>
                <a className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-zinc-800 duration-100 hover:bg-zinc-800 hover:text-white">
                  Blog
                </a>
              </Link>
              <Link href="/tags" passHref>
                <a className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-zinc-800 duration-100 hover:bg-zinc-800 hover:text-white">
                  Tags
                </a>
              </Link>
              <Link href="/projects" passHref>
                <a className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-zinc-800 duration-100 hover:bg-zinc-800 hover:text-white">
                  Projects
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
