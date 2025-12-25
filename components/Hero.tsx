import Button from './Button';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[var(--color-bg-tint)] via-[var(--color-bg)] to-[var(--color-bg-tint)] dark:from-[var(--color-bg-tint)] dark:via-[var(--color-bg)] dark:to-[var(--color-bg-tint)]">
      <div className="container mx-auto px-5 sm:px-8 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="mb-6">
              Integration & Automation Specialist
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-xl md:text-2xl text-[var(--color-text-muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
              Streamlining aviation operations through seamless platform integrations and intelligent automation solutions
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="large" href="#projects">
                View Projects
              </Button>
              <Button variant="secondary" size="large" href="#contact">
                Get in Touch
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-[var(--color-text-muted)]"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

