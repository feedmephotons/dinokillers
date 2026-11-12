import { Link, useParams } from "react-router-dom";
import { Check, ArrowUpRight } from "lucide-react";
import { getCaseStudyBySlug, caseStudies } from "../data/caseStudies";
import { getProjectById } from "../data/projects";
import { services } from "../data/services";
import { ContactCTA, PageIntro, ProjectCard } from "../components/Shared";
import NotFoundPage from "./NotFoundPage";
export default function CaseStudyPage() {
  const { slug } = useParams();
  const study = getCaseStudyBySlug(slug || "");
  if (!study) return <NotFoundPage />;
  const project = getProjectById(study.projectId)!;
  const next =
    caseStudies[(caseStudies.indexOf(study) + 1) % caseStudies.length];
  return (
    <>
      <PageIntro
        kicker={study.client + ", " + study.industry.toLowerCase()}
        title={study.title}
      >
        <p>{study.summary}</p>
      </PageIntro>
      <section className="container section">
        <nav className="case-nav" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/case-studies">Case studies</Link>
          <span>/</span>
          <span aria-current="page">{study.client}</span>
        </nav>
        <div className="detail-layout">
          <aside className="detail-aside">
            <dl>
              <div>
                <dt>Project</dt>
                <dd>{study.client}</dd>
              </div>
              <div>
                <dt>Type</dt>
                <dd>{study.kind}</dd>
              </div>
              <div>
                <dt>Industry</dt>
                <dd>{study.industry}</dd>
              </div>
              <div>
                <dt>Services</dt>
                <dd>
                  {study.serviceIds.map((id) => (
                    <p key={id}>
                      <Link to={"/services/" + id}>
                        {services.find((s) => s.id === id)?.title}
                      </Link>
                    </p>
                  ))}
                </dd>
              </div>
            </dl>
            <Link className="text-link" to={"/portfolio/" + project.id}>
              Project overview <ArrowUpRight size={16} />
            </Link>
          </aside>
          <article className="prose">
            <h2>The problem</h2>
            <p>{study.problem}</p>
            <h2>What we did</h2>
            <p>{study.approach}</p>
            <h2>The decisions that shaped it</h2>
            {study.decisions.map((d) => (
              <section key={d.title}>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </section>
            ))}
            <h2>What we built</h2>
            <ul className="case-deliverables">
              {study.impact.map((item) => (
                <li key={item}>
                  <Check size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="info-panel">
              <h3>The takeaway</h3>
              <p>{study.takeaway}</p>
            </div>
            <p>
              <Link to={"/contact?project=" + encodeURIComponent(study.client)}>
                Got a problem like this one? Tell us about it.
              </Link>
            </p>
          </article>
        </div>
      </section>
      <section className="container section">
        <div className="section-heading">
          <h2>Keep digging.</h2>
        </div>
        <div className="project-grid">
          <ProjectCard project={project} />
          <ProjectCard project={getProjectById(next.projectId)!} />
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
