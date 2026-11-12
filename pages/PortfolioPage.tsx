import { useState } from "react";
import { projects } from "../data/projects";
import {
  ContactCTA,
  PageIntro,
  ProjectCard,
  TextLink,
} from "../components/Shared";
export default function PortfolioPage() {
  const [filter, setFilter] = useState("all");
  const sorted = [...projects].sort(
    (a, b) =>
      (a.category === "client" ? 0 : 1) - (b.category === "client" ? 0 : 1),
  );
  const selected = sorted.filter(
    (p) => filter === "all" || p.category === filter,
  );
  return (
    <>
      <PageIntro
        title="Software in use. Dinosaurs retired."
      >
        <p>
          Platforms we’ve built for clients and products we run ourselves.
          Every one started as a problem somebody was tired of working around.
        </p>
      </PageIntro>
      <section className="container section">
        <div className="filter-bar" role="group" aria-label="Filter projects">
          {[
            ["all", "All work"],
            ["client", "Client builds"],
            ["product", "Our products"],
          ].map(([value, label]) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              aria-pressed={filter === value}
            >
              {label}
            </button>
          ))}
          <span className="results-count" role="status">
            {selected.length} projects
          </span>
        </div>
        <div className="project-grid">
          {selected.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
        <div style={{ marginTop: 50 }}>
          <TextLink to="/case-studies">
            Read the case studies
          </TextLink>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
