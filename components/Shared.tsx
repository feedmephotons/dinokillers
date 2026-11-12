import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";
import { getCaseStudyByProjectId } from "../data/caseStudies";
import { Strata } from "./Art";

/* Screenshots that only show a sign-in screen or a modal: use the type card instead. */
const noScreenshot = new Set([
  "brandeezy",
  "caso-book",
  "seegarsone",
  "cougar-companies",
]);

export const kindLabel = (p: Project) =>
  p.category === "client" ? "Client build" : "Our product";

export function PageIntro({
  kicker,
  title,
  children,
}: {
  kicker?: React.ReactNode;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-intro">
      <div className="container">
        {kicker && <p className="kicker">{kicker}</p>}
        <h1>{title}</h1>
        {children && <div className="intro-copy">{children}</div>}
      </div>
      <Strata />
    </section>
  );
}

export function ContactCTA({
  title = "What’s your dinosaur?",
  body = "Tell us about the tool, spreadsheet, or process your business has outgrown. We’ll tell you honestly whether it needs replacing, and what that would take.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="cta-section">
      <Strata flip />
      <div className="container cta-inner">
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div className="cta-actions">
          <Link to="/contact" className="button">
            Start a project <ArrowUpRight size={20} />
          </Link>
          <a className="text-link" href="mailto:hello@dinokillers.com">
            hello@dinokillers.com
          </a>
        </div>
      </div>
    </section>
  );
}

export function ProjectCard({
  project,
  wide = false,
}: {
  project: Project;
  wide?: boolean;
}) {
  const study = getCaseStudyByProjectId(project.id);
  const href = study
    ? "/case-studies/" + study.slug
    : "/portfolio/" + project.id;
  const shot = project.image && !noScreenshot.has(project.id);
  return (
    <article className={"project-card" + (wide ? " project-card-wide" : "")}>
      <Link to={href} className="project-link">
        <div className={"project-visual" + (shot ? "" : " project-visual-type")}>
          {shot ? (
            <img
              src={project.image}
              alt={project.name + " interface"}
              width="1400"
              height="900"
              loading="lazy"
            />
          ) : (
            <span aria-hidden="true">{project.name}</span>
          )}
        </div>
        <div className="project-caption">
          <div>
            <h3>{project.name}</h3>
            <p>{project.tagline}</p>
          </div>
          <p className="project-meta">
            <span>{kindLabel(project)}</span>
            <span>{project.industry}</span>
          </p>
        </div>
      </Link>
    </article>
  );
}

export function TextLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="text-link" to={to}>
      {children}
      <ArrowRight size={18} />
    </Link>
  );
}
