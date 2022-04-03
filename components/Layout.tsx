import { Footer } from './Footer';
import { Header } from './Header';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-60">
      <div className="flex h-screen flex-col justify-between whitespace-normal">
        <Header />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
