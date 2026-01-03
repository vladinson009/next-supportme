import { PropsWithChildren } from 'react';
import MainMenu from './components/main-menu';
import MobileNavDrawer from './mobile-nav';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="md:grid md:grid-cols-[250px_1fr] h-screen">
      <MainMenu className="hidden md:flex" />
      <MobileNavDrawer />
      <div className="overflow-auto py-2 px-4">
        <h1 className="pb-4">Welcome back, Vladimir!</h1>
        {children}
      </div>
    </div>
  );
}
