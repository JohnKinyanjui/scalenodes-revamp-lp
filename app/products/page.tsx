import Navbar from '@/components/sections/Navbar';
import Container from '@/components/ui/Container';
import Footer from '@/components/sections/Footer';

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
    <main className="min-h-screen bg-zinc-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900 text-white overflow-hidden pt-36 pb-20">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500 rounded-full mix-blend-multiply filter blur-[128px] animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-500 rounded-full mix-blend-multiply filter blur-[128px] animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full">
              <span className="text-sm text-primary-400 font-medium">Our Products</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Everything You Need to
              <span className="block mt-2 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Deploy & Scale
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto">
              Powerful deployment platform with managed databases, auto-scaling, and seamless CI/CD integration.
            </p>
          </div>
        </Container>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-zinc-950">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 backdrop-blur-xl border border-zinc-700/50 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {product.icon}
                </div>
                <h3 className="text-2xl font-bold text-zinc-100 mb-3">
                  {product.name}
                </h3>
                <p className="text-zinc-400 mb-6">
                  {product.description}
                </p>

                <div className="mb-6">
                  <div className="text-sm text-zinc-500 mb-2">Starting at</div>
                  <div className="text-2xl font-bold text-primary-400">
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

                <button className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-primary-500/30">
                  Get Started
                </button>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/5 group-hover:to-accent-500/5 rounded-2xl transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Features Comparison */}
      <section className="py-24 bg-zinc-900/50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
              Why Choose ScaleNodes?
            </h2>
            <p className="text-xl text-zinc-400">
              Built for African developers, optimized for global reach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '⚡', title: 'Lightning Fast', description: 'Sub-50ms latency for local users' },
              { icon: '🔒', title: 'Secure by Default', description: 'Automatic SSL and DDoS protection' },
              { icon: '💰', title: 'Affordable', description: 'Pay in KES with M-Pesa support' },
              { icon: '🌍', title: 'Local & Global', description: 'Servers in Kenya and Europe' }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-zinc-800/30 border border-zinc-700/40 rounded-xl p-6 hover:border-primary-500/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
