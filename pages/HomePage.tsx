import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import { services } from "../data/services";
import { blogPosts } from "../data/blog";
import { team } from "../data/team";
import { ContactCTA, ProjectCard, TextLink } from "../components/Shared";
import { Meteor, Sky, Strata } from "../components/Art";

const specimens = [
  {
    latin: "Spreadsheetus rex",
    name: "The master spreadsheet",
    image: "/images/art/fossil-paper.webp",
    alt: "Dot-matrix spreadsheet paper and a clipboard fossilized in rock",
    habitat:
      "A shared drive. Forty tabs, three colors of highlighting, and one person who knows how it works.",
    killer: "Custom software built around the job",
    to: "/services/custom-software",
  },
  {
    latin: "Rolodocus",
    name: "The CRM everyone works around",
    image: "/images/art/fossil-floppy.webp",
    alt: "Floppy disks and a rolodex fossilized in rock",
    habitat:
      "Paid for monthly, updated never. The real pipeline lives in texts, inboxes, and somebody’s head.",
    killer: "A CRM and automation that follow your process",
    to: "/services/automation",
  },
  {
    latin: "Faxosaurus",
    name: "Paperwork retyped by hand",
    image: "/images/art/fossil-fax.webp",
    alt: "A fax machine fossilized in rock",
    habitat:
      "Purchase orders, meeting notes, and PDFs that a person reads, then types into another system.",
    killer: "AI that reads it, with your team reviewing",
    to: "/services/ai-integration",
  },
  {
    latin: "Legaciraptor",
    name: "The system nobody dares touch",
    image: "/images/art/fossil-crt.webp",
    alt: "A CRT monitor and keyboard fossilized in rock",
    habitat:
      "Still runs the business. Nobody remembers who set it up, and every report takes five exports.",
    killer: "Migration into systems that share one picture",
    to: "/services/operations",
  },
];

export default function HomePage() {
  const [lead, ...rest] = ["buildx", "metalcrafters", "hoa-cloud"].map(
    (id) => projects.find((p) => p.id === id)!,
  );
  return (
    <>
      <section className="hero">
        <Sky />
        <div className="container hero-inner">
          <h1>
            <span>We kill</span>
            <span>dinosaurs.</span>
          </h1>
          <div className="hero-scene" aria-hidden="true">
            <img
              className="hero-skull"
              src="/images/art/skull.webp"
              alt=""
              width="1459"
              height="1024"
              fetchPriority="high"
            />
            <div className="meteor">
              <Meteor />
            </div>
          </div>
          <div className="hero-body">
            <div>
              <p>
                The spreadsheet that runs your company. The CRM your team
                works around. The software you’ve been renting since 2009.
              </p>
              <p>
                Dino Killers replaces them with custom software and AI built
                around how your business actually works.
              </p>
            </div>
            <div className="hero-actions">
              <Link to="/contact" className="button">
                Start a project <ArrowUpRight size={20} />
              </Link>
              <TextLink to="/portfolio">See what we’ve built</TextLink>
            </div>
          </div>
          <p className="hero-foot">
            <span>
              Software for construction, roofing, fabrication, associations,
              and document-heavy teams.
            </span>
            <span>Southwest Florida</span>
          </p>
        </div>
      </section>

      <section className="fossils" id="fossil-record">
        <Strata />
        <div className="container section">
          <div className="section-heading">
            <h2>The fossil record.</h2>
            <p>
              Four species we get called in to finish off. If one of them is
              still roaming your office, it’s costing you more than the
              subscription.
            </p>
          </div>
          <div className="specimens">
            {specimens.map((s) => (
              <article className="specimen" key={s.latin}>
                <img
                  src={s.image}
                  alt={s.alt}
                  width="900"
                  height="900"
                  loading="lazy"
                />
                <div>
                  <p className="specimen-latin">{s.latin}</p>
                  <h3>{s.name}</h3>
                  <dl>
                    <div>
                      <dt>Habitat</dt>
                      <dd>{s.habitat}</dd>
                    </div>
                    <div>
                      <dt>Cause of extinction</dt>
                      <dd>
                        <Link to={s.to}>{s.killer}</Link>
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
        <Strata flip />
      </section>

      <section className="container section" id="work">
        <div className="section-heading">
          <h2>What we built in their place.</h2>
          <TextLink to="/portfolio">All work</TextLink>
        </div>
        <div className="project-grid">
          <ProjectCard project={lead} wide />
          {rest.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section-heading">
          <h2>How we do the killing.</h2>
          <p>
            Strategy, design, and development from the same two people, so the
            thing that gets built is the thing you actually needed.
          </p>
        </div>
        <div className="service-rows">
          {services.map((s) => (
            <Link className="service-row" to={"/services/" + s.id} key={s.id}>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <ArrowUpRight />
            </Link>
          ))}
        </div>
      </section>

      <section className="container section operators">
        <div className="operators-photos">
          {team.map((person) => (
            <figure key={person.id}>
              <img
                src={person.image}
                alt={person.name}
                width="600"
                height="750"
                loading="lazy"
              />
              <figcaption>
                <strong>{person.name}</strong>
                {person.role}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="operators-copy">
          <h2>Built by people who’ve run the business.</h2>
          <p>
            Brance runs a commercial roofing company and works with condo
            boards every week. Winston has spent years inside construction and
            roofing companies, building their software and their marketing.
          </p>
          <p>
            We’ve chased the invoices, sat in the production meetings, and
            fought the same tools you’re fighting. When you describe the
            problem, you won’t have to explain why it matters.
          </p>
          <TextLink to="/about">Meet Winston and Brance</TextLink>
        </div>
      </section>

      <section className="container section">
        <div className="section-heading">
          <h2>Dig, build, bury.</h2>
          <p>Every project runs in the same three stages.</p>
        </div>
        <ol className="process-list">
          <li>
            <h3>Dig</h3>
            <p>
              We follow one real job through your business, start to finish,
              and find where the time and information go missing. You get a
              scope in plain English.
            </p>
          </li>
          <li>
            <h3>Build</h3>
            <p>
              You see working screens early and often. We build the smallest
              release that does a whole job, then grow it from what your team
              tells us.
            </p>
          </li>
          <li>
            <h3>Bury</h3>
            <p>
              We move the data, train the team, and stay close while the old
              tool is retired. A dinosaur isn’t dead until nobody opens it.
            </p>
          </li>
        </ol>
      </section>

      <section className="container section">
        <div className="section-heading">
          <h2>Field notes.</h2>
          <TextLink to="/blog">All field notes</TextLink>
        </div>
        <div className="article-grid">
          {blogPosts.slice(0, 3).map((post) => (
            <article className="article-card" key={post.slug}>
              <p className="kicker">{post.category}</p>
              <h3>
                <Link to={"/blog/" + post.slug}>{post.title}</Link>
              </h3>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
