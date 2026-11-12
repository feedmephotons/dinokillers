import { Link, useParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { getProjectById } from "../data/projects";
import { getCaseStudyByProjectId } from "../data/caseStudies";
import { ContactCTA, PageIntro, kindLabel } from "../components/Shared";
import NotFoundPage from "./NotFoundPage";
export default function ProjectDetail() {
  const { id } = useParams();
  const p = getProjectById(id || "");
  if (!p) return <NotFoundPage />;
  const study = getCaseStudyByProjectId(p.id);
  return (
    <>
      <PageIntro
        kicker={kindLabel(p) + ", " + p.industry.toLowerCase()}
        title={p.name}
      >
        <p>{p.tagline}</p>
      </PageIntro>
      <section className="container section detail-layout">
        <aside className="detail-aside">
          <dl>
            <div>
              <dt>Industry</dt>
              <dd>{p.industry}</dd>
            </div>
            <div>
              <dt>Built for</dt>
              <dd>{p.targetMarket}</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>
                {p.techStack.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </aside>
        <div className="prose">
          <h2>What it is</h2>
          <p>{p.description}</p>
          <h2>What it does</h2>
          <ul>
            {p.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <h2>Why it matters</h2>
          <p>{p.impactStatement}</p>
          {p.image && (
            <figure className="detail-image">
              <img
                src={p.image}
                alt={p.name + " project interface"}
                loading="lazy"
                width="1400"
                height="900"
              />
              <figcaption>{p.name} interface</figcaption>
            </figure>
          )}
          <div className="button-row">
            {study && (
              <Link className="button" to={"/case-studies/" + study.slug}>
                Read the case study <ArrowUpRight size={18} />
              </Link>
            )}
            <Link className="text-link" to="/portfolio">
              More work
            </Link>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
