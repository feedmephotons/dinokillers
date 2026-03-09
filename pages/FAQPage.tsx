import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import Section from '../components/ui/Section';
import { faqItems } from '../data/faq';

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-brand-black">
      {/* Hero */}
      <Section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-400 leading-relaxed">
              Everything you need to know about working with us.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* FAQ Accordion */}
      <Section dark>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`border-b border-white/10 ${index === 0 ? 'border-t' : ''}`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 py-6 text-left group cursor-pointer"
                >
                  <span className="text-lg font-semibold text-white group-hover:text-brand-green transition-colors duration-200">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 group-hover:text-brand-green shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 text-gray-400 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      {/* Bottom CTA */}
      <Section>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-10 md:p-14 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Still have questions?
              </h2>
              <p className="mt-4 text-gray-400 text-lg leading-relaxed">
                Reach out — we're happy to chat.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center justify-center px-8 py-3 rounded-lg bg-brand-green text-brand-black font-semibold hover:brightness-110 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </div>
  );
};

export default FAQPage;
