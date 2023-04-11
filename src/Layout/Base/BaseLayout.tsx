import './BaseLayout.scss';

interface BaseLayoutProps {
  children: React.ReactNode;
}

function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="base-layout">
      {children}
    </div>
  );
}

export default BaseLayout;
