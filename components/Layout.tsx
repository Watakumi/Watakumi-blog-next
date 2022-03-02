const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col px-2 sm:px-8 md:px-24 lg:px-48 xl:px-60">
      <header className="px-6 pb-12 antialiased">
        <nav className="z-50 h-24 select-none">
          <div className="flex h-24 flex-wrap items-center justify-between border-b border-gray-200 px-2 font-medium">
            <div className="flex h-full w-1/4 items-center pr-4">image</div>
            <div className="flex w-1/4 justify-end">
              <div className="flex flex-row items-center justify-center text-center">
                <a
                  href="#"
                  className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-zinc-800 duration-100 hover:bg-zinc-800 hover:text-white"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-zinc-800 duration-100 hover:bg-zinc-800 hover:text-white"
                >
                  Tags
                </a>
                <a
                  href="#"
                  className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-zinc-800 duration-100 hover:bg-zinc-800 hover:text-white"
                >
                  Projects
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <div>&copy; 2022 WatakumiBlog</div>
      </footer>
    </div>
  );
};

export default Layout;
