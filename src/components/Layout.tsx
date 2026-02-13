import { Outlet } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useScrollReveal } from './useScrollReveal';

export function Layout() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#F5F3EE] flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
