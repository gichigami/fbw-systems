import Card from './Card';
import ScrollReveal from './ScrollReveal';

interface Service {
  name: string;
  description: string;
  logo?: string;
}

const services: Service[] = [
  {
    name: 'Salesforce',
    description: 'Customer relationship management platform for managing sales, customer service, and marketing operations',
  },
  {
    name: 'QuickBooks',
    description: 'Cloud-based accounting solution for managing finances, invoicing, and expense tracking',
  },
  {
    name: 'AvSight',
    description: 'Comprehensive aviation platform for aftermarket operations including sales, MRO, operations, and finance',
  },
  {
    name: 'ILS',
    description: 'Leading aviation marketplace connecting buyers and sellers of aircraft parts and services worldwide',
  },
  {
    name: 'PartsBase',
    description: 'Online community and marketplace for aviation parts and services',
  },
  {
    name: 'Zenkraft',
    description: 'Shipping and logistics platform integrated with Salesforce for streamlined operations',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-[var(--color-bg-subtle)]">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="mb-4">Platforms & Services</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto">
              Seamlessly connecting the tools and platforms that power your aviation business
            </p>
          </ScrollReveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.name} delay={index * 100}>
              <Card hover className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-[var(--color-bg-tint)] dark:bg-[var(--color-bg-subtle)] flex items-center justify-center">
                  <span className="text-2xl font-bold text-[var(--color-primary)]">
                    {service.name.charAt(0)}
                  </span>
                </div>
              </div>
              <h4 className="mb-3">{service.name}</h4>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                {service.description}
              </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

