import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import Section from '../components/ui/Section';
import { blogPosts } from '../data/blog';

const formatDate = (dateStr: string) =>
  new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

const BlogPage: React.FC = () => {
  return (
    <div className="bg-brand-black min-h-screen">

      {/* ─── Page Hero ─── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/15 via-transparent to-brand-cyan/10" />
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-brand-cyan/8 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block font-mono text-xs md:text-sm tracking-[0.25em] uppercase text-brand-cyan mb-6">
              Blog
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8">
              Insights
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
              What we've learned building software for real businesses.
            </p>
          </ScrollReveal>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-black to-transparent pointer-events-none z-20" />
      </section>

      {/* ─── Blog Grid ─── */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.slug} delay={index * 150}>
              <Link
                to={`/blog/${post.slug}`}
                className="group block bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:border-brand-cyan/30 transition-all duration-300 h-full"
              >
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors duration-300">
                  {post.title}
                </h2>

                <p className="text-gray-400 leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(post.date)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    {post.author}
                  </span>
                </div>

                <span className="inline-flex items-center text-brand-cyan text-sm font-semibold group-hover:gap-2 transition-all duration-300">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>

    </div>
  );
};

export default BlogPage;
