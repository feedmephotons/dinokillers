import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../data/blog";
import { services } from "../data/services";
import { ContactCTA, PageIntro } from "../components/Shared";
import NotFoundPage from "./NotFoundPage";
const dateLabel = (date: string) =>
  new Date(date + "T12:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
function inline(text: string) {
  return text
    .split(/(\*\*.*?\*\*)/g)
    .map((part, i) =>
      part.startsWith("**") ? (
        <strong key={i}>{part.slice(2, -2)}</strong>
      ) : (
        part
      ),
    );
}
export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return <NotFoundPage />;
  const service = services.find((s) => s.id === post.serviceId)!;
  return (
    <>
      <PageIntro kicker={post.category} title={post.title}>
        <p>{post.excerpt}</p>
        <div className="article-meta">
          <Link to="/about">{post.author}</Link>
          <span>{post.readTime}</span>
          <span>
            {post.updated ? "Updated " : ""}
            <time dateTime={post.updated || post.date}>
              {dateLabel(post.updated || post.date)}
            </time>
          </span>
        </div>
      </PageIntro>
      <section className="container section article-body">
        <article className="prose">
          {post.content
            .split("\n")
            .filter(Boolean)
            .map((line, i) =>
              line.startsWith("## ") ? (
                <h2 key={i}>{line.slice(3)}</h2>
              ) : (
                <p key={i}>{inline(line)}</p>
              ),
            )}
          <aside className="info-panel">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link to={"/services/" + service.id}>See how we do it</Link>
          </aside>
          <Link to="/blog">All field notes</Link>
        </article>
      </section>
      <ContactCTA />
    </>
  );
}
