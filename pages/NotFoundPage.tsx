import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (
    <section className="container not-found">
      <h1>This page is extinct.</h1>
      <p>
        Error 404. Whatever lived at this address is gone, and for once it
        wasn’t us.
      </p>
      <Link className="button" to="/portfolio">
        See our work
      </Link>
    </section>
  );
}
