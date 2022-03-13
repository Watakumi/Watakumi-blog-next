import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
export function MobileMenu(): JSX.Element {
  const [navShow, setNavShow] = useState(false);

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto';
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden';
      }
      return !status;
    });
  };

  return (
    <div className="sm:hidden">
      <button onClick={onToggleNav}>
        {navShow ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>
      <div
        className={`fixed top-24 right-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className="fixed h-full w-full cursor-auto focus:outline-none"
          onClick={onToggleNav}
        ></button>
        <div className="fixed mt-8 h-full">
          <div className="px-12 py-4">
            <Link href={'/blog'} passHref>
              <a
                className="rounded-md px-4 py-[0.10rem] text-2xl font-bold tracking-widest text-gray-900 duration-100 hover:bg-zinc-800 hover:text-white"
                onClick={onToggleNav}
              >
                Blog
              </a>
            </Link>
          </div>
          <div className="px-12 py-4">
            <Link href={'/tags'} passHref>
              <a
                className="rounded-md px-4 py-[0.10rem] text-2xl font-bold tracking-widest text-gray-900 duration-100 hover:bg-zinc-800 hover:text-white"
                onClick={onToggleNav}
              >
                Tags
              </a>
            </Link>
          </div>
          <div className="px-12 py-4">
            <Link href={'/projects'} passHref>
              <a
                className="rounded-md px-4 py-[0.10rem] text-2xl font-bold tracking-widest text-gray-900 duration-100 hover:bg-zinc-800 hover:text-white"
                onClick={onToggleNav}
              >
                Projects
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
