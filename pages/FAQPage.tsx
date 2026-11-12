import { faqItems } from "../data/faq";
import { ContactCTA, PageIntro } from "../components/Shared";
export default function FAQPage() {
  return (
    <>
      <PageIntro
        title="Questions people ask before we start."
      >
        <p>
          Scope, cost, timing, and what happens after launch. If yours isn’t
          here, email us.
        </p>
      </PageIntro>
      <section className="container section">
        <div className="faq-list">
          {faqItems.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
