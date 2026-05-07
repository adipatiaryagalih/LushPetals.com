import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Response from './pages/Response';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/products" element={<PageWrapper><Products /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
              <Route path="/response" element={<PageWrapper><Response /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>
        <footer className="py-12 px-6 text-center text-sm opacity-60 border-t border-primary/10">
          <p>© 2026 LushPetals. Aesthetic Digital Florist.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
