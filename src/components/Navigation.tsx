import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Works", path: "/works" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navigation = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="flex items-center justify-between px-8 py-6">
          <Link to="/" className="text-display text-2xl font-bold tracking-tight" style={{ color: 'white' }}>
            Arturo
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-xs uppercase tracking-[0.2em] font-body transition-opacity hover:opacity-60"
                style={{ color: location.pathname === item.path ? 'white' : 'rgba(255,255,255,0.7)' }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 z-50"
          >
            <span className="block w-6 h-px transition-all" style={{ background: 'white', transform: menuOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none' }} />
            <span className="block w-6 h-px transition-all" style={{ background: 'white', opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-6 h-px transition-all" style={{ background: 'white', transform: menuOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-gallery-espresso flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-display text-4xl font-bold text-primary-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
