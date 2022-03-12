import Link from 'next/link';
import { MobileMenu } from './MobileMenu';

export function Menu(): JSX.Element {
  return (
    <>
      <div className="hidden w-1/4 justify-end sm:flex">
        <div className="flex flex-row items-center justify-center gap-2 text-center">
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
      <MobileMenu />
    </>
  );
}
