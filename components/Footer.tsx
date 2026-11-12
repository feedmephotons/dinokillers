import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="wordmark" aria-label="Dino Killers home">
              <img
                src="/images/dk-logo-stacked.webp"
                width="720"
                height="354"
                alt="Dino Killers"
                loading="lazy"
              />
            </Link>
            <p>
              Custom software, AI, and websites for businesses that have
              outgrown their tools. Built in Southwest Florida.
            </p>
            <a className="text-link" href="mailto:hello@dinokillers.com">
              hello@dinokillers.com
            </a>
          </div>
          <nav aria-label="Footer navigation">
            <Link to="/portfolio">Work</Link>
            <Link to="/case-studies">Case studies</Link>
            <Link to="/services">Services</Link>
          </nav>
          <nav aria-label="Company">
            <Link to="/about">About</Link>
            <Link to="/blog">Field notes</Link>
            <Link to="/faq">Questions</Link>
            <Link to="/contact">Start a project</Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Dino Killers</span>
          <span>Evolve or get dug up later.</span>
          <a href="#main-content">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
