import { team } from "../data/team";
import { ContactCTA, PageIntro, TextLink } from "../components/Shared";

const bios: Record<string, string> = {
  winston:
    "Winston writes the software and shapes how it looks. He came up through marketing, photography, and video before development took over, and he has spent years working inside Florida construction and roofing companies. He builds for the person who has to use the thing on a Tuesday afternoon.",
  brance:
    "Brance runs Roof Wars, a commercial roofing company working in Naples and Dallas, and sits across the table from condo and HOA boards every week. He founded the geofencing startup GeoAI and co-founded HOA Hunter and HOA Cloud. He is usually the first customer for what we build.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro title="Two operators who got tired of bad software.">
        <p>
          Dino Killers is Winston Fowlkes and Brance Wages. We build custom
          software, AI tools, and websites for businesses like the ones we’ve
          worked in and run.
        </p>
      </PageIntro>
      <section className="container section statement">
        <h2>Why the name?</h2>
        <div>
          <p>
            Every business we’ve worked in had a dinosaur. A spreadsheet that
            had quietly become the system of record. A CRM bought years ago
            that nobody trusted. A process that existed because the software
            couldn’t do it any other way.
          </p>
          <p>
            They hang on because replacing them looks risky and expensive, and
            because the people selling replacements have never done the job.
            We have. So we started building the tools we wanted, first for our
            own companies, then for other people’s.
          </p>
        </div>
      </section>
      <section className="container section">
        <div className="section-heading">
          <h2>You work with the founders.</h2>
          <p>
            No account managers and no handoff to a junior team. The people
            you talk to are the people who build it.
          </p>
        </div>
        <div className="team-grid">
          {team.map((person) => (
            <article className="team-card" key={person.id}>
              <img
                src={person.image}
                alt={person.name + ", co-founder of Dino Killers"}
                width="600"
                height="750"
                loading="lazy"
              />
              <div>
                <h3>{person.name}</h3>
                <p className="kicker">
                  {person.role}, {person.location}
                </p>
                <p>{bios[person.id]}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="container section">
        <div className="section-heading">
          <h2>How we work.</h2>
          <TextLink to="/case-studies">See it in the case studies</TextLink>
        </div>
        <ul className="process-list principles">
          <li>
            <h3>Useful beats impressive.</h3>
            <p>
              If it doesn’t make the work faster, clearer, or easier to manage,
              it doesn’t ship. Clever features nobody opens are just new
              fossils.
            </p>
          </li>
          <li>
            <h3>Scope in plain English.</h3>
            <p>
              You’ll know what we’re building, what it costs, and what’s
              waiting for a later phase before we write a line of code.
            </p>
          </li>
          <li>
            <h3>Built with the people using it.</h3>
            <p>
              The crew lead and the office manager know things the org chart
              doesn’t. They see the work early, and their feedback changes it.
            </p>
          </li>
        </ul>
      </section>
      <ContactCTA />
    </>
  );
}
