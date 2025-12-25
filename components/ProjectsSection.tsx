import ProjectCard from './ProjectCard';
import Card from './Card';
import ScrollReveal from './ScrollReveal';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Aviation Marketplace Integration',
      challenge: 'Manual searching and updating of inventory data across multiple platforms, requiring constant attention and prone to errors',
      solution: 'Automated system that queries aviation marketplace data and syncs availability information with your primary platform in real-time',
      benefits: [
        'Real-time availability information at your fingertips',
        'Automated nightly inventory uploads',
        'Configurable filters for inventory line, owner code, and part number',
        'Eliminates manual data entry and reduces errors',
        'Seamless integration with existing workflows',
      ],
      technicalDetails: 'Cross-platform automation, Selenium WebDriver, Salesforce integration, scheduled batch processing',
    },
    {
      title: 'AEX Upload Automation',
      challenge: 'Manual data exchange with AeroXchange\'s AeroBuy platform, requiring time-consuming file preparation and FTP uploads',
      solution: 'Automated FTP upload system running twice daily that processes Salesforce reports, formats data, and uploads to AeroBuy',
      benefits: [
        'Seamless handling of quotes, sales, shipments, and invoicing',
        'Automatic RFQ scoring based on configurable criteria',
        'Reduced processing time from hours to minutes',
        'Error-free data formatting and transfer',
        'Configurable catalog management',
      ],
      technicalDetails: 'AWS Lambda, scheduled execution, FTP integration, Salesforce report processing, multi-catalog support',
    },
    {
      title: 'QuickBooks-AvSight Sync',
      challenge: 'Manual data entry between QuickBooks and AvSight creating duplicate work and potential for errors between sales and finance teams',
      solution: 'Real-time bidirectional sync of financial data that automatically creates invoices in QuickBooks when shipments are processed in AvSight',
      benefits: [
        'Automatic invoice creation within seconds of shipment processing',
        'Eliminated duplicate data entry between systems',
        'Aligned sales and finance departments with real-time data',
        'Incremental sync for efficient processing',
        'Automated scheduling ensures data is always current',
      ],
      technicalDetails: 'AWS Lambda, QuickBooks Online API, Salesforce AvSight integration, incremental sync, automated scheduling',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-[var(--color-bg-subtle)]">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="mb-4">Featured Projects</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto">
              Real-world solutions that streamline operations and drive efficiency for aviation businesses
            </p>
          </ScrollReveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <ProjectCard
                title={project.title}
                challenge={project.challenge}
                solution={project.solution}
                benefits={project.benefits}
                technicalDetails={project.technicalDetails}
              />
            </ScrollReveal>
          ))}
        </div>
        
        {/* AvSight Context Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card>
            <h3 className="mb-4 text-[var(--color-primary)]">About AvSight</h3>
            <p className="text-[var(--color-text-muted)] mb-4 leading-relaxed">
              AvSight is a comprehensive aviation platform designed specifically for the aviation aftermarket. 
              It provides feature-rich tools that improve communication, provide real-time insights, and 
              streamline complex tasks, ultimately saving time and money for aviation businesses.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div>
                <h5 className="font-semibold mb-2">Key Features:</h5>
                <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Sales Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>MRO (Maintenance, Repair, Overhaul)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Operations Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Financial Management</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Integration Benefits:</h5>
                <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Real-time data synchronization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Reduced manual data entry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Enhanced operational efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Seamless workflow automation</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

