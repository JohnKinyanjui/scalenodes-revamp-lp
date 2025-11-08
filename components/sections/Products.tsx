import Container from '../ui/Container';
import Section from '../ui/Section';

export default function Products() {
  const products = [
    {
      icon: '🚀',
      name: 'WebApps',
      description: 'Deploy and run applications with ready-to-use environments',
      features: [
        'Next.js, React, Vue support',
        'Automatic SSL certificates',
        'Custom domains',
        'Auto-scaling',
        'Git integration',
        'Zero-downtime deployments'
      ],
      startingPrice: 'KES 500/month'
    },
    {
      icon: '🗄️',
      name: 'Postgres Database',
      description: 'Fully managed PostgreSQL databases with automated backups',
      features: [
        'Automated daily backups',
        'Point-in-time recovery',
        'Read replicas',
        'Connection pooling',
        'Monitoring & alerts',
        'SSL encryption'
      ],
      startingPrice: 'KES 500/month'
    },
    {
      icon: '⚙️',
      name: 'Platform',
      description: 'Complete hosting solution for services, APIs, and custom workloads',
      features: [
        'Docker container support',
        'Custom runtime environments',
        'Load balancing',
        'Private networking',
        'CI/CD pipelines',
        'Team collaboration'
      ],
      startingPrice: 'KES 500/month'
    }
  ];

  return (
    <Section background="gray" id="products">
      <Container>
        <div className="relative">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3f3f4608_1px,transparent_1px),linear-gradient(to_bottom,#3f3f4608_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

          <div className="relative text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
              Our Products
            </h2>
            <p className="text-xl text-zinc-400">
              Everything you need to deploy and scale your applications
            </p>
          </div>

          <div className="relative grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-zinc-800/50 via-zinc-800/30 to-zinc-900/50 backdrop-blur-sm border border-zinc-700/40 p-8 hover:border-primary-500/50 transition-all duration-300 animate-scaleIn border-l-4 border-l-transparent hover:border-l-primary-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-100 mb-3">
                  {product.name}
                </h3>
                <p className="text-zinc-400 mb-6">
                  {product.description}
                </p>

                <div className="mb-6">
                  <div className="text-xs text-zinc-500 mb-2">Starting at</div>
                  <div className="text-xl font-bold text-primary-400">
                    {product.startingPrice}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-zinc-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-primary-500/30 border-l-4 border-white/20">
                  Get Started
                </button>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/5 group-hover:to-accent-500/5 transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
