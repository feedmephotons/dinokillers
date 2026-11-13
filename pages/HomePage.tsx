import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { services } from "../data/services";
import { blogPosts } from "../data/blog";
import { team } from "../data/team";
import { ContactCTA, TextLink } from "../components/Shared";
import { FeaturedProjects } from "../components/Featured";
import { Strata } from "../components/Art";

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
  return (
    <>
      <section className="hero">
        <div className="hero-stage">
          <div className="hero-dots" aria-hidden="true" />
          <div className="hero-dots hero-dots-cyan" aria-hidden="true" />
          <div className="hero-window" aria-hidden="true">
            <div className="hero-window-bar">
              <i />
              <i />
              <i />
              <span>legacy-software.exe</span>
            </div>
          </div>
          <h1>
            <span>Break</span>
            <span>the</span>
            <span>system.</span>
          </h1>
          <img
            className="hero-art hero-claw"
            src="/images/art/hero-claw.webp"
            alt=""
            width="1672"
            height="941"
            fetchPriority="high"
          />
          <img
            className="hero-art hero-tear"
            src="/images/art/hero-tear.webp"
            alt=""
            width="2172"
            height="724"
          />
          <img
            className="hero-art hero-shards"
            src="/images/art/hero-shards.webp"
            alt=""
            width="1672"
            height="941"
          />
          <div className="hero-body">
            <p>
              Replace your legacy software with custom software and AI built
              around how your business actually works.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="button">
                Start a project <ArrowUpRight size={20} />
              </Link>
              <TextLink to="/portfolio">See what we’ve built</TextLink>
            </div>
          </div>
        </div>
        <div className="container">
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

      <section className="container section trailer" id="trailer">
        <div className="section-heading">
          <h2>Watch the extinction.</h2>
          <p>
            Forty seconds on what happens to old software when we show up.
            Sound on.
          </p>
        </div>
        <div className="trailer-frame">
          <video
            controls
            playsInline
            preload="none"
            poster="/video/dk-promo-poster.webp"
            width="1280"
            height="720"
            aria-label="Dino Killers promo video"
          >
            <source src="/video/dk-promo.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="container section" id="work">
        <div className="section-heading">
          <h2>What we built in their place.</h2>
          <TextLink to="/portfolio">All work</TextLink>
        </div>
        <FeaturedProjects />
      </section>

      <section className="container section">
        <div className="section-heading">
          <h2>How we do the killing.</h2>
          <p>
            Strategy, design, and development from the same small team, so the
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
            Michael has sold software, real estate, and trade work, and he is
            the one who gets projects finished.
          </p>
          <p>
            We’ve chased the invoices, sat in the production meetings, and
            fought the same tools you’re fighting. When you describe the
            problem, you won’t have to explain why it matters.
          </p>
          <TextLink to="/about">Meet the team</TextLink>
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
