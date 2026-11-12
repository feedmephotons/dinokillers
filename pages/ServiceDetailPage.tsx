import { Link, useParams } from "react-router-dom";
import { services } from "../data/services";
import { projects } from "../data/projects";
import { ContactCTA, PageIntro, ProjectCard } from "../components/Shared";
import NotFoundPage from "./NotFoundPage";
export default function ServiceDetailPage() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);
  if (!service) return <NotFoundPage />;
  const related = service.projectIds.map(
    (id) => projects.find((p) => p.id === id)!,
  );
  return (
    <>
      <PageIntro kicker={service.title} title={service.pain}>
        <p>{service.description}</p>
      </PageIntro>
      <section className="container section detail-layout">
        <aside className="detail-aside">
          <nav className="service-index" aria-label="All services">
            {services.map((s) => (
              <Link
                key={s.id}
                to={"/services/" + s.id}
                aria-current={s.id === id ? "page" : undefined}
              >
                {s.title}
              </Link>
            ))}
          </nav>
        </aside>
        <div className="prose">
          <h2>The short version</h2>
          <p>{service.intro}</p>
          <h2>When it’s the right call</h2>
          <p>{service.fit}</p>
          <div className="service-delivery">
            <div>
              <h3>What we build</h3>
              <ul>
                {service.examples.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>What you get</h3>
              <ul>
                {service.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
          <h2>How we run it</h2>
          <p>{service.process}</p>
          <h2>What to bring to the first call</h2>
          <p>
            Show us the dinosaur. Screenshots, a sample document, or a
            walk-through of one real task tell us more than a polished spec.
            Tell us what your team is trying to do and where it breaks down.
          </p>
          <Link to={"/contact?service=" + encodeURIComponent(service.title)}>
            Talk through your project
          </Link>
        </div>
      </section>
      <section className="container section">
        <div className="section-heading">
          <h2>Where we’ve done it.</h2>
        </div>
        <div className="project-grid">
          {related.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
