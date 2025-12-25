'use client';

import { useState } from 'react';
import Card from './Card';
import Button from './Button';
import ScrollReveal from './ScrollReveal';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[var(--color-bg)]">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <ScrollReveal>
              <h2 className="mb-4">Get in Touch</h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl text-[var(--color-text-muted)]">
                Ready to streamline your operations? Let's discuss how automation and integrations can transform your business.
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal delay={200}>
            <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 border-2 border-[var(--color-border)] rounded-lg bg-[var(--color-bg)] text-[var(--color-text)] text-base transition-colors focus:border-[var(--color-primary)] focus:outline-none focus:ring-4 focus:ring-[rgba(15,76,182,0.1)]"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 border-2 border-[var(--color-border)] rounded-lg bg-[var(--color-bg)] text-[var(--color-text)] text-base transition-colors focus:border-[var(--color-primary)] focus:outline-none focus:ring-4 focus:ring-[rgba(15,76,182,0.1)]"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  minLength={120}
                  className="w-full px-4 py-3.5 border-2 border-[var(--color-border)] rounded-lg bg-[var(--color-bg)] text-[var(--color-text)] text-base resize-y transition-colors focus:border-[var(--color-primary)] focus:outline-none focus:ring-4 focus:ring-[rgba(15,76,182,0.1)]"
                  placeholder="Tell me about your integration needs..."
                />
              </div>
              
              <Button type="submit" variant="primary" size="default" className="w-full">
                Send Message
              </Button>
            </form>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

