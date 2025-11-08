import Container from '../ui/Container';
import Section from '../ui/Section';

export default function Enterprise() {
  const features = [
    {
      icon: '🏢',
      title: 'Dedicated Resources',
      description: 'Isolated compute and database resources for maximum performance and security'
    },
    {
      icon: '🔐',
      title: 'Advanced Security',
      description: 'SOC 2 compliance, SSO/SAML, audit logs, and private networking'
    },
    {
      icon: '📊',
      title: 'Priority Support',
      description: '24/7 dedicated support with guaranteed response times and SLA'
    },
    {
      icon: '⚙️',
      title: 'Custom Infrastructure',
      description: 'Tailored deployment solutions to meet your specific requirements'
    },
    {
      icon: '👥',
      title: 'Team Management',
      description: 'Advanced role-based access control and team collaboration tools'
    },
    {
      icon: '📈',
      title: 'Analytics & Insights',
      description: 'Comprehensive monitoring, logging, and performance analytics'
    }
  ];

  return (
    <Section background="primary" id="enterprise">
      <Container>
        <div className="relative">
          {/* Background blobs */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-[128px] animate-float"></div>
          </div>

          <div className="relative text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-zinc-400">
              Enterprise-grade infrastructure for mission-critical applications
            </p>
          </div>

          <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-zinc-800/50 via-zinc-800/30 to-zinc-900/50 backdrop-blur-sm border border-zinc-700/40 p-8 hover:border-primary-500/50 transition-all duration-300 animate-scaleIn border-l-4 border-l-transparent hover:border-l-primary-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-zinc-100 mb-3">
                  {feature.title}
                </h3>
                <p className="text-zinc-400">
                  {feature.description}
                </p>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/5 group-hover:to-accent-500/5 transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="relative text-center animate-fadeIn">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-600 hover:from-primary-400 hover:to-accent-500 text-white text-base font-semibold shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105 border-l-4 border-white/20 hover:border-white/40">
                Contact Sales
              </button>
              <button className="px-8 py-4 bg-zinc-800/60 hover:bg-zinc-800/80 border-2 border-zinc-700/60 hover:border-primary-500/60 text-zinc-100 text-base font-semibold backdrop-blur-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-zinc-600 hover:border-l-primary-500">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
