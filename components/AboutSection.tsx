import ScrollReveal from './ScrollReveal';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-[var(--color-bg)]">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="mb-6 text-center">About</h2>
          </ScrollReveal>
          <div className="space-y-6 text-lg text-[var(--color-text-muted)]">
            <ScrollReveal delay={100}>
              <p>
                I specialize in creating seamless integrations and automation solutions for the aviation industry. 
                With expertise in connecting diverse platforms and systems, I help businesses streamline their 
                operations, reduce manual work, and improve overall efficiency.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p>
                My work focuses on solving complex integration challenges, automating repetitive tasks, and 
                enabling real-time data synchronization between critical business systems. Whether it's connecting 
                CRM platforms with accounting software, automating inventory management, or enabling seamless 
                data exchange between aviation marketplaces, I build solutions that deliver measurable value.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p>
                Every integration is designed with reliability, scalability, and maintainability in mind, 
                ensuring your business operations continue to run smoothly as you grow.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

