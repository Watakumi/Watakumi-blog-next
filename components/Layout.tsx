const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
      <header></header>
      <main>{children}</main>
      <footer>
        <div>&copy; 2022 WatakumiBlog</div>
      </footer>
    </div>
  );
};

export default Layout;
