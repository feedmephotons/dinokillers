import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { services } from "../data/services";
import { ContactCTA, PageIntro } from "../components/Shared";
export default function ServicesPage() {
  return (
    <>
      <PageIntro
        title="Five ways to retire a dinosaur."
      >
        <p>
          Most projects use more than one. Start with whichever sounds most
          like your problem.
        </p>
      </PageIntro>
      <section className="container section">
        <div className="service-rows">
          {services.map((s) => (
            <Link to={"/services/" + s.id} className="service-row" key={s.id}>
              <h2>{s.title}</h2>
              <div>
                <p>{s.description}</p>
                <p>{s.examples.join(", ")}</p>
              </div>
              <ArrowUpRight />
            </Link>
          ))}
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
