import React, { useState } from 'react';
import { Send, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import Section from '../components/ui/Section';

type FormStatus = 'idle' | 'sending' | 'success';

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  company: '',
  service: '',
  message: '',
};

const serviceOptions = [
  { value: '', label: 'Choose one...' },
  { value: 'Custom Software / CRM', label: 'Custom Software / CRM' },
  { value: 'AI Integration', label: 'AI Integration' },
  { value: 'Website / Branding', label: 'Website / Branding' },
  { value: 'Workflow Automation', label: 'Workflow Automation' },
  { value: 'Something Else', label: 'Something Else' },
];

const inputClasses =
  'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/50 focus:outline-none transition-colors';

const labelClasses = 'block text-sm font-medium text-gray-400 mb-2';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setFormData(initialFormData);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="pt-20">
      <Section>
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Talk
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Tell us about your business and what's not working. We'll tell you
              honestly if we can help.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Left Column — Info */}
          <ScrollReveal delay={100}>
            <div className="flex flex-col justify-center space-y-10">
              <div>
                <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
                <p className="text-gray-400 leading-relaxed">
                  Whether you need a custom CRM, AI-powered workflows, or a
                  complete digital overhaul — we'd love to hear what you're
                  working on. No sales pitch, just a real conversation about
                  what's possible.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a
                      href="mailto:hello@dinokillers.com"
                      className="text-white hover:text-brand-cyan transition-colors"
                    >
                      hello@dinokillers.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">Southwest Florida</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column — Form */}
          <ScrollReveal delay={200}>
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                <CheckCircle2 className="w-16 h-16 text-brand-cyan mb-6" />
                <h3 className="text-2xl font-bold mb-2">Message sent!</h3>
                <p className="text-gray-400">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className={labelClasses}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClasses}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="company" className={labelClasses}>
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company (optional)"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="service" className={labelClasses}>
                    What do you need help with?
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none cursor-pointer`}
                  >
                    {serviceOptions.map((opt) => (
                      <option
                        key={opt.value}
                        value={opt.value}
                        className="bg-brand-dark text-white"
                      >
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={labelClasses}>
                    Tell us more
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What are you working on? What's the pain point?"
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-brand-cyan text-black font-bold py-3 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </Section>
    </div>
  );
};

export default ContactPage;
