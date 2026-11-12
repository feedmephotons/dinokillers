import { Link } from "react-router-dom";
import { blogPosts } from "../data/blog";
import { ContactCTA, PageIntro } from "../components/Shared";
export default function BlogPage() {
  return (
    <>
      <PageIntro
        title="Field notes."
      >
        <p>
          What we’ve learned building software and AI for working
          businesses, written for the people who run them.
        </p>
      </PageIntro>
      <section className="container section">
        <div className="article-grid article-grid-wide">
          {blogPosts.map((p) => (
            <article className="article-card" key={p.slug}>
              <p className="kicker">{p.category}</p>
              <h2>
                <Link to={"/blog/" + p.slug}>{p.title}</Link>
              </h2>
              <p>{p.excerpt}</p>
              <p className="form-note">
                {p.author}, {p.readTime}
              </p>
            </article>
          ))}
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
