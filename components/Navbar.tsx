import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["Work", "/portfolio"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Field notes", "/blog"],
];

export function Wordmark() {
  return (
    <span className="wordmark-text">
      Dino <span>Killers</span>
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <header className="site-header">
      <div className="container nav-bar">
        <Link to="/" className="wordmark" aria-label="Dino Killers home">
          <img src="/images/dk-mark.png" width="40" height="40" alt="" />
          <Wordmark />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, path]) => (
            <NavLink key={path} to={path}>
              {label}
            </NavLink>
          ))}
        </nav>
        <Link className="button button-small nav-cta" to="/contact">
          Start a project <ArrowUpRight size={17} />
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {links.map(([label, path]) => (
          <NavLink key={path} to={path}>
            {label}
          </NavLink>
        ))}
        <Link to="/case-studies">Case studies</Link>
        <Link to="/contact">Start a project</Link>
      </nav>
    </header>
  );
}
