import type { CSSProperties, PointerEvent } from "react";
import { Link } from "react-router-dom";
import { getProjectById } from "../data/projects";
import { getCaseStudyByProjectId } from "../data/caseStudies";
import { kindLabel } from "./Shared";

type Note = { text: string; x: number; y: number };

const featured: {
  id: string;
  accent: string;
  prop: string;
  notes: Note[];
}[] = [
  {
    id: "slotica",
    accent: "#a855f7",
    prop: "/images/art/prop-slotica.webp",
    notes: [
      { text: "AI-generated game art", x: 30, y: 46 },
      { text: "Live game preview", x: 44, y: 76 },
      { text: "Animation and audio tools", x: 6, y: 16 },
    ],
  },
  {
    id: "hoa-cloud",
    accent: "#5b74ff",
    prop: "/images/art/prop-hoa-cloud.webp",
    notes: [
      { text: "One workspace per association", x: 28, y: 2 },
      { text: "Reminders and notices", x: 52, y: 62 },
      { text: "AI document search", x: 12, y: 80 },
    ],
  },
  {
    id: "hoa-hunter",
    accent: "#ff7a1a",
    prop: "/images/art/prop-hoa-hunter.webp",
    notes: [
      { text: "Florida association records", x: 8, y: 34 },
      { text: "Search by location", x: 48, y: 52 },
      { text: "Outreach from the same record", x: 10, y: 78 },
    ],
  },
  {
    id: "metal-caddie",
    accent: "#ef3340",
    prop: "/images/art/prop-metal-caddie.webp",
    notes: [
      { text: "Quote to sales order", x: 10, y: 32 },
      { text: "Sheet inventory", x: 56, y: 56 },
      { text: "Invoices and payments", x: 22, y: 82 },
    ],
  },
  {
    id: "dinoclaw",
    accent: "#7dff5a",
    prop: "/images/art/prop-dinoclaw.webp",
    notes: [
      { text: "Talk to the agent", x: 46, y: 41 },
      { text: "CRM and invoicing built in", x: 40, y: 64 },
      { text: "Agent-assisted tasks", x: 10, y: 84 },
    ],
  },
  {
    id: "caso-comply",
    accent: "#2f8bff",
    prop: "/images/art/prop-caso-comply.webp",
    notes: [
      { text: "Scans your documents", x: 14, y: 81 },
      { text: "AI does the first pass", x: 50, y: 55 },
      { text: "People review the result", x: 50, y: 90 },
    ],
  },
];

function tilt(e: PointerEvent<HTMLElement>) {
  if (e.pointerType !== "mouse") return;
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width - 0.5;
  const py = (e.clientY - r.top) / r.height - 0.5;
  el.style.setProperty("--px", px.toFixed(3));
  el.style.setProperty("--py", py.toFixed(3));
}

function settle(e: PointerEvent<HTMLElement>) {
  e.currentTarget.style.setProperty("--px", "0");
  e.currentTarget.style.setProperty("--py", "0");
}

export function FeaturedProjects() {
  return (
    <div className="feature-grid">
      {featured.map((f) => {
        const project = getProjectById(f.id)!;
        const study = getCaseStudyByProjectId(f.id);
        const href = study
          ? "/case-studies/" + study.slug
          : "/portfolio/" + project.id;
        return (
          <article
            className="feature"
            key={f.id}
            style={{ "--accent": f.accent } as CSSProperties}
          >
            <Link to={href} className="feature-link">
              <div
                className="feature-stage"
                onPointerMove={tilt}
                onPointerLeave={settle}
              >
                <div className="feature-tilt">
                  <div className="feature-frame">
                    <img
                      src={project.thumb}
                      alt={project.name + " interface"}
                      width="1400"
                      height="875"
                      loading="lazy"
                    />
                    <span className="feature-shine" aria-hidden="true" />
                  </div>
                  <img
                    className="feature-prop"
                    src={f.prop}
                    alt=""
                    width="640"
                    height="640"
                    loading="lazy"
                  />
                  <ul className="feature-notes">
                    {f.notes.map((n, i) => (
                      <li
                        key={n.text}
                        style={
                          {
                            "--x": n.x + "%",
                            "--y": n.y + "%",
                            "--i": i,
                          } as CSSProperties
                        }
                      >
                        {n.text}
                      </li>
                    ))}
                  </ul>
                </div>
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
      })}
    </div>
  );
}
