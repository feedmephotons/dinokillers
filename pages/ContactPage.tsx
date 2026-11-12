import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowUpRight, Copy } from "lucide-react";
import { services } from "../data/services";
import { PageIntro } from "../components/Shared";
export default function ContactPage() {
  const [params] = useSearchParams();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  useEffect(() => {
    const requested = params.get("service");
    const project = params.get("project");
    setForm((current) => ({
      ...current,
      service: services.some((s) => s.title === requested) ? requested! : "",
      message: project
        ? "I have a project similar to " + project + ". "
        : current.message,
    }));
  }, [params]);
  const [draft, setDraft] = useState<{ body: string; href: string } | null>(
    null,
  );
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const change = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setDraft(null);
    setCopied(false);
  };
  const prepare = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      "Name: " + form.name,
      "Email: " + form.email,
      "Company: " + (form.company || "Not provided"),
      "Interested in: " + (form.service || "Not sure yet"),
      "",
      "Project brief:",
      form.message,
    ].join("\n");
    setDraft({
      body,
      href:
        "mailto:hello@dinokillers.com?subject=" +
        encodeURIComponent("Project inquiry: " + (form.company || form.name)) +
        "&body=" +
        encodeURIComponent(body),
    });
  };
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(draft!.body);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  };
  return (
    <>
      <PageIntro
        title="Show us the dinosaur."
      >
        <p>
          A tool your team works around, a process held together by one
          spreadsheet, or a product you want built. Start with what you know.
        </p>
      </PageIntro>
      <section className="container section contact-layout">
        <div className="contact-info">
          <h2>What happens next</h2>
          <p>
            One of us reads your note and replies, usually to set up a call.
            On that call we look at what you’re using today and tell you
            honestly whether it needs replacing.
          </p>
          <a className="text-link" href="mailto:hello@dinokillers.com">
            hello@dinokillers.com <ArrowUpRight size={18} />
          </a>
          <p>Based in Southwest Florida.</p>
          <div className="info-panel">
            <h3>Helpful to include</h3>
            <ul>
              <li>What your business does and how big the team is</li>
              <li>The problem, in your own words</li>
              <li>The tools involved today</li>
              <li>Any deadline or budget we should know about</li>
            </ul>
          </div>
        </div>
        <form className="contact-form" onSubmit={prepare}>
          <div className="field">
            <label htmlFor="name">
              Your name <span aria-hidden="true">*</span>
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              required
              maxLength={120}
              placeholder="Your name"
              value={form.name}
              onChange={change}
            />
          </div>
          <div className="field">
            <label htmlFor="email">
              Email address <span aria-hidden="true">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
              maxLength={254}
              placeholder="you@company.com"
              value={form.email}
              onChange={change}
            />
          </div>
          <div className="field">
            <label htmlFor="company">
              Company <span className="muted">(optional)</span>
            </label>
            <input
              id="company"
              name="company"
              autoComplete="organization"
              maxLength={160}
              placeholder="Your company"
              value={form.company}
              onChange={change}
            />
          </div>
          <div className="field">
            <label htmlFor="service">What do you need?</label>
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={change}
            >
              <option value="">Not sure yet</option>
              {services.map((s) => (
                <option key={s.id}>{s.title}</option>
              ))}
            </select>
          </div>
          <div className="field field-wide">
            <label htmlFor="message">
              What’s the problem? <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              minLength={10}
              maxLength={3500}
              placeholder="What are you using today, and where does it fall down?"
              value={form.message}
              onChange={change}
            />
          </div>
          <p className="form-note field-wide">
            This form writes an email for you. You review and send it from
            your own email app, and nothing is stored on this website.
          </p>
          <div className="field-wide">
            <button className="button" type="submit">
              Write my email <ArrowUpRight size={18} />
            </button>
          </div>
          {draft && (
            <div className="form-status field-wide" role="status">
              <p>
                <strong>Your email is ready.</strong>
                <br />
                Open your email app to review and send it to
                hello@dinokillers.com.
              </p>
              <div className="button-row" style={{ marginTop: 18 }}>
                <a className="button button-small" href={draft.href}>
                  Open email app <ArrowUpRight size={16} />
                </a>
                <button
                  className="button button-small button-outline"
                  type="button"
                  onClick={copy}
                >
                  {copied ? "Brief copied" : "Copy project brief"}
                  <Copy size={16} />
                </button>
              </div>
              {copyError && (
                <>
                  <p style={{ marginTop: 15 }}>
                    Select and copy your brief below:
                  </p>
                  <textarea
                    readOnly
                    aria-label="Your project email text"
                    value={draft.body}
                  />
                </>
              )}
            </div>
          )}
        </form>
      </section>
    </>
  );
}
