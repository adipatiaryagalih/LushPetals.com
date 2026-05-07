import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Produk', path: '/products' },
    { name: 'Kontak', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-primary/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif tracking-tight font-bold text-ink">
          Florist<span className="text-accent">.</span>
        </Link>
        <div className="flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative text-[13px] uppercase tracking-[1px] font-medium hover:text-accent transition-colors ${
                location.pathname === item.path ? 'text-accent' : 'text-sage'
              }`}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
