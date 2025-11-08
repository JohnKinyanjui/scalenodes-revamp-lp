import Container from '../ui/Container';
import Section from '../ui/Section';

export default function Enterprise() {
  const features = [
    {
      icon: '🏢',
      title: 'Dedicated Infrastructure',
      description: 'Isolated compute, storage, and database resources with guaranteed performance',
      metric: '99.99% uptime SLA'
    },
    {
      icon: '🔐',
      title: 'Enterprise Security',
      description: 'SOC 2 Type II compliance, SSO/SAML, private networking, and audit logs',
      metric: 'ISO 27001 certified'
    },
    {
      icon: '⚡',
      title: 'Priority Support',
      description: '24/7 dedicated support team with <15min response time guarantee',
      metric: 'Dedicated Slack channel'
    },
    {
      icon: '🌍',
      title: 'Multi-Region Deployment',
      description: 'Deploy across Kenya, Europe, and custom regions for global reach',
      metric: '<50ms latency'
    },
    {
      icon: '👥',
      title: 'Advanced Team Management',
      description: 'Role-based access control, team workspaces, and collaboration tools',
      metric: 'Unlimited team members'
    },
    {
      icon: '📊',
      title: 'Custom Analytics',
      description: 'Real-time monitoring, custom dashboards, and detailed performance insights',
      metric: 'Data retention: 90 days'
    }
  ];

  const benefits = [
    { label: 'Cost Savings', value: 'Up to 60%' },
    { label: 'Deployment Speed', value: '10x Faster' },
    { label: 'Local Compliance', value: '100%' }
  ];

  return (
    <Section background="primary" id="enterprise">
      <Container>
        <div className="relative">
          {/* Background blobs */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-500 mix-blend-multiply filter blur-[128px] animate-float"></div>
          </div>

          {/* Header */}
          <div className="relative text-center max-w-4xl mx-auto mb-16 animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 mb-6 border-l-4 border-l-primary-500">
              <span className="text-sm text-primary-400 font-medium">For Large Teams & Enterprises</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-6">
              Built for Mission-Critical
              <span className="block mt-2 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Production Workloads
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Enterprise-grade infrastructure trusted by leading African businesses. Deploy with confidence, scale without limits.
            </p>
          </div>

          {/* Stats */}
          <div className="relative grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-16 animate-fadeIn">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-zinc-800/30 border border-zinc-700/40 hover:border-primary-500/40 transition-all duration-300 border-l-4 border-l-transparent hover:border-l-primary-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl font-bold text-primary-400 mb-2">{benefit.value}</div>
                <div className="text-sm text-zinc-400">{benefit.label}</div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-zinc-800/50 via-zinc-800/30 to-zinc-900/50 backdrop-blur-sm border border-zinc-700/40 p-6 hover:border-primary-500/50 transition-all duration-300 animate-scaleIn border-l-4 border-l-transparent hover:border-l-primary-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-zinc-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-4">
                  {feature.description}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-500/10 border border-primary-500/30 text-xs text-primary-400 font-medium border-l-2 border-l-primary-500">
                  {feature.metric}
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/5 group-hover:to-accent-500/5 transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Trust Section */}
          <div className="relative max-w-4xl mx-auto mb-12 p-8 bg-zinc-800/30 border border-zinc-700/40 border-l-4 border-l-primary-500/40 animate-fadeIn">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-zinc-100 mb-3">
                  Trusted by Leading Organizations
                </h3>
                <p className="text-zinc-400 mb-4">
                  Join hundreds of enterprises, startups, and government agencies using ScaleNodes for their critical infrastructure.
                </p>
                <div className="flex items-center gap-6 text-sm text-zinc-500">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Data sovereignty guaranteed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Local support team</span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="flex items-center gap-4 text-zinc-400">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-zinc-100">500+</div>
                    <div className="text-xs">Organizations</div>
                  </div>
                  <div className="w-px h-12 bg-zinc-700"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-zinc-100">10K+</div>
                    <div className="text-xs">Deployments</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="relative text-center animate-fadeIn">
            <p className="text-zinc-400 mb-6">
              Schedule a personalized demo to see how ScaleNodes can transform your infrastructure
            </p>
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <button className="px-10 py-4 bg-gradient-to-r from-primary-500 to-accent-600 hover:from-primary-400 hover:to-accent-500 text-white text-base font-semibold shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105 border-l-4 border-white/20 hover:border-white/40">
                Contact Sales Team
              </button>
              <button className="px-10 py-4 bg-zinc-800/60 hover:bg-zinc-800/80 border-2 border-zinc-700/60 hover:border-primary-500/60 text-zinc-100 text-base font-semibold backdrop-blur-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-zinc-600 hover:border-l-primary-500">
                Schedule Demo
              </button>
            </div>
            <p className="text-sm text-zinc-500 mt-4">
              Custom pricing available • Volume discounts • Flexible contracts
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
