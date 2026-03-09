import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import Section from '../components/ui/Section';
import { blogPosts } from '../data/blog';

const formatDate = (dateStr: string) =>
  new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

/**
 * Renders a paragraph string, replacing **text** with <strong> tags.
 */
const renderParagraph = (text: string, key: number) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return (
    <p key={key} className="text-gray-300 text-lg leading-relaxed">
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="text-white font-semibold">
            {part}
          </strong>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </p>
  );
};

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="bg-brand-black min-h-screen flex items-center justify-center pt-20">
        <div className="text-center px-4">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Post Not Found
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-gray-400 text-lg mb-8">
              The article you're looking for doesn't exist or has been moved.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Link
              to="/blog"
              className="inline-flex items-center text-brand-cyan font-semibold hover:gap-2 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </ScrollReveal>
        </div>
      </div>
    );
  }

  const paragraphs = post.content.split('\n\n');

  return (
    <div className="bg-brand-black min-h-screen">

      {/* ─── Back Link ─── */}
      <div className="pt-28 md:pt-32 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <Link
            to="/blog"
            className="inline-flex items-center text-gray-400 hover:text-brand-cyan text-sm font-medium transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </ScrollReveal>
      </div>

      {/* ─── Article Header ─── */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              {post.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 mb-8">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-brand-cyan" />
                {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-brand-cyan" />
                {post.readTime}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <User className="w-4 h-4 text-brand-cyan" />
                {post.author}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="h-px bg-gradient-to-r from-brand-purple/40 via-brand-cyan/20 to-transparent mb-12" />
          </ScrollReveal>

          {/* ─── Article Body ─── */}
          <ScrollReveal delay={200}>
            <div className="space-y-6">
              {paragraphs.map((paragraph, index) =>
                renderParagraph(paragraph, index)
              )}
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* ─── Bottom CTA ─── */}
      <Section dark>
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />
          </ScrollReveal>

          <div className="text-center">
            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Want to talk about this?
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto font-light">
                We're always happy to dig deeper on these topics. Drop us a line.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black transition-all duration-200 bg-white rounded-full hover:bg-brand-cyan hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-cyan"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </Section>

    </div>
  );
};

export default BlogPostPage;
