const Footer = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-12 bg-background border-t border-border">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-lg font-semibold tracking-tight text-gradient-gold">
            Golden Key
          </span>
          <p className="text-xs text-muted-foreground mt-1">
            Luxury Real Estate Advisory — Dubai
          </p>
        </div>

        <div className="flex items-center gap-8">
          {["Home", "About", "Services", "Gallery", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} The Golden Key. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
