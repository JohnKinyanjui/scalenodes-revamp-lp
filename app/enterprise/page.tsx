import Navbar from '@/components/sections/Navbar';
import Container from '@/components/ui/Container';
import Footer from '@/components/sections/Footer';

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

  const benefits = [
    {
      title: 'Data Sovereignty',
      description: 'Keep your data in Kenya with full compliance with local regulations and data protection laws.'
    },
    {
      title: 'Local Expertise',
      description: 'Our team operates in EAT timezone, providing support when you need it most.'
    },
    {
      title: 'Scalable Infrastructure',
      description: 'Start small and scale to thousands of users without infrastructure headaches.'
    },
    {
      title: 'Custom SLAs',
      description: 'Get guaranteed uptime and performance metrics tailored to your business needs.'
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900 text-white overflow-hidden pt-36 pb-24">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/3 w-[700px] h-[700px] bg-primary-500 rounded-full mix-blend-multiply filter blur-[140px] animate-float"></div>
          <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-accent-500 rounded-full mix-blend-multiply filter blur-[140px] animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500/10 border border-primary-500/30 rounded-full">
              <span className="text-sm text-primary-400 font-medium">Enterprise Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Enterprise-Grade
              <span className="block mt-3 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Cloud Infrastructure
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
              Powerful, secure, and compliant infrastructure for large organizations. Deploy with confidence on Africa's premier cloud platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button className="px-10 py-5 bg-gradient-to-r from-primary-500 to-accent-600 hover:from-primary-400 hover:to-accent-500 text-white text-lg font-semibold rounded-xl shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105">
                Contact Sales
              </button>
              <button className="px-10 py-5 bg-zinc-800/60 hover:bg-zinc-800/80 border-2 border-zinc-700/60 hover:border-primary-500/60 text-zinc-100 text-lg font-semibold rounded-xl backdrop-blur-xl transition-all duration-300 hover:scale-105">
                Schedule Demo
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-zinc-950">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
              Enterprise Features
            </h2>
            <p className="text-xl text-zinc-400">
              Everything you need for mission-critical applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 backdrop-blur-xl border border-zinc-700/50 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-100 mb-3">
                  {feature.title}
                </h3>
                <p className="text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-zinc-900/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
                Why Enterprises Choose ScaleNodes
              </h2>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-zinc-800/30 border border-zinc-700/40 rounded-xl p-8 hover:border-primary-500/40 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-zinc-100 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-zinc-400 text-lg">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-zinc-900/90 to-zinc-800/90">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zinc-300">
              Talk to our enterprise team about your specific needs
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-primary-500 to-accent-600 hover:from-primary-400 hover:to-accent-500 text-white text-lg font-semibold rounded-xl shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105">
              Contact Enterprise Sales
            </button>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
