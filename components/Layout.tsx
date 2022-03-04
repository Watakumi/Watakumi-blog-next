import { Footer } from './Footer';
import { Header } from './Header';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col px-2 sm:px-8 md:px-24 lg:px-48 xl:px-60">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
