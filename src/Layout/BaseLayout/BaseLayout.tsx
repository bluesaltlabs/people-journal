import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface BaseLayoutProps {
  children: React.ReactNode;
}

function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="base-layout">
      <Header />
      <div className="base-layout__content">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default BaseLayout;