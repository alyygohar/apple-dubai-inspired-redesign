import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ConsultationModal from "./ConsultationModal";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "#", disabled: true },
  { label: "Off-Plan", href: "#", disabled: true },
  { label: "Sell", href: "#", disabled: true },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  const renderLink = (link: typeof navLinks[0], className: string, onClick?: () => void) => {
    if (link.disabled) {
      return (
        <span className={`${className} opacity-40 cursor-not-allowed`}>
          {link.label}
        </span>
      );
    }
    if (link.href.startsWith("/")) {
      return (
        <Link
          to={link.href}
          onClick={onClick}
          className={`${className} ${isActive(link.href) ? "text-foreground" : ""}`}
        >
          {link.label}
        </Link>
      );
    }
    return (
      <a href={link.href} onClick={onClick} className={className}>
        {link.label}
      </a>
    );
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
        <nav className="flex items-center justify-between h-12 md:h-14 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
          <Link to="/" className="text-lg font-semibold tracking-tight">
            <span className="text-gradient-gold">Golden Key</span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                {renderLink(
                  link,
                  "text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide uppercase"
                )}
              </li>
            ))}
          </ul>

          <button
            onClick={() => setModalOpen(true)}
            className="hidden md:inline-flex text-xs font-medium bg-accent text-accent-foreground px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Book Consultation
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
            >
              <ul className="flex flex-col items-center gap-6 py-8">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    {renderLink(
                      link,
                      "text-sm font-medium text-foreground tracking-wide",
                      () => setMobileOpen(false)
                    )}
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      setModalOpen(true);
                    }}
                    className="text-sm font-medium bg-accent text-accent-foreground px-6 py-2.5 rounded-full"
                  >
                    Book Consultation
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <ConsultationModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};

export default Header;
