import { Button } from "@/components/ui/button";

const navLinks = ["Services", "About Us", "Projects", "Team", "Contacts"];

const toHref = (label: string) =>
  `#${label.toLowerCase().replace(/\s+/g, "-")}`;

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-5">
      {/* Left: Logo */}
      <a
        href="#"
        className="text-foreground text-xl font-semibold tracking-tight"
      >
        SENTINEL
      </a>

      {/* Center: Nav links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((label) => (
          <a
            key={label}
            href={toHref(label)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
          >
            {label}
          </a>
        ))}
      </div>

      {/* Right: CTA */}
      <Button
        variant="navCta"
        size="lg"
        className="hidden md:inline-flex rounded-lg uppercase text-xs tracking-widest px-6"
      >
        Get Quote
      </Button>
    </nav>
  );
};

export default Navbar;
