import { caseStudies } from "../data/caseStudies";
import { projects } from "../data/projects";
import { ContactCTA, PageIntro, ProjectCard } from "../components/Shared";
export default function CaseStudiesPage() {
  return (
    <>
      <PageIntro
        title="The problem, the decisions, the build."
      >
        <p>
          How each project started, what we chose to build, and why we built
          it that way.
        </p>
      </PageIntro>
      <section className="container section">
        <div className="project-grid">
          {caseStudies.map((s) => (
            <div key={s.slug}>
              <ProjectCard
                project={projects.find((p) => p.id === s.projectId)!}
              />
              <p className="case-summary">{s.summary}</p>
            </div>
          ))}
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
