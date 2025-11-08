import Navbar from '@/components/sections/Navbar';
import Container from '@/components/ui/Container';
import Footer from '@/components/sections/Footer';

export default function Resources() {
  const resourceCategories = [
    {
      icon: '📚',
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      items: [
        { name: 'Getting Started', desc: 'Deploy your first app in 5 minutes' },
        { name: 'API Reference', desc: 'Complete API documentation' },
        { name: 'CLI Tools', desc: 'Command-line interface guide' },
        { name: 'SDKs & Libraries', desc: 'Official SDKs for popular languages' }
      ]
    },
    {
      icon: '🎓',
      title: 'Tutorials & Guides',
      description: 'Step-by-step tutorials for common tasks',
      items: [
        { name: 'Deploy Next.js Apps', desc: 'Full-stack deployment guide' },
        { name: 'Database Migration', desc: 'Move your data to ScaleNodes' },
        { name: 'Custom Domains', desc: 'Set up your domain with SSL' },
        { name: 'CI/CD Integration', desc: 'Automate your deployments' }
      ]
    },
    {
      icon: '🎬',
      title: 'Video Tutorials',
      description: 'Watch and learn from our video library',
      items: [
        { name: 'Platform Overview', desc: '10-minute platform tour' },
        { name: 'Advanced Features', desc: 'Deep dive into scaling' },
        { name: 'Best Practices', desc: 'Tips from our experts' },
        { name: 'Customer Stories', desc: 'Learn from other users' }
      ]
    },
    {
      icon: '💬',
      title: 'Community & Support',
      description: 'Connect with other developers',
      items: [
        { name: 'Community Forum', desc: 'Ask questions and share ideas' },
        { name: 'Discord Server', desc: 'Real-time chat with developers' },
        { name: 'GitHub Discussions', desc: 'Open source contributions' },
        { name: 'Support Portal', desc: 'Get help from our team' }
      ]
    }
  ];

  const tools = [
    { name: 'Status Page', description: 'Real-time system status', icon: '📊' },
    { name: 'Changelog', description: 'Latest updates and features', icon: '📝' },
    { name: 'Migration Tool', description: 'Import from other platforms', icon: '🔄' },
    { name: 'Cost Calculator', description: 'Estimate your monthly costs', icon: '💰' }
  ];

  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900 text-white overflow-hidden pt-36 pb-20">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500 mix-blend-multiply filter blur-[128px] animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-500 mix-blend-multiply filter blur-[128px] animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 border-l-4 border-l-primary-500">
              <span className="text-sm text-primary-400 font-medium">Resources</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Everything You Need
              <span className="block mt-2 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                to Succeed
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto">
              Comprehensive documentation, tutorials, and community support to help you build and scale.
            </p>
          </div>
        </Container>
      </section>

      {/* Resource Categories */}
      <section className="py-24 bg-zinc-950">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 backdrop-blur-xl border border-zinc-700/50 p-8 hover:border-primary-500/50 transition-all duration-300 animate-fadeIn border-l-4 border-l-transparent hover:border-l-primary-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-zinc-100 mb-2">
                  {category.title}
                </h3>
                <p className="text-zinc-400 mb-6">
                  {category.description}
                </p>
                <div className="space-y-3">
                  {category.items.map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="group flex items-start gap-3 p-3 hover:bg-zinc-800/50 transition-colors border-l-2 border-transparent hover:border-primary-500"
                    >
                      <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="text-zinc-100 font-semibold group-hover:text-primary-400 transition-colors">
                          {item.name}
                        </div>
                        <div className="text-sm text-zinc-500">
                          {item.desc}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tools Section */}
      <section className="py-24 bg-zinc-900/50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
              Helpful Tools
            </h2>
            <p className="text-xl text-zinc-400">
              Utilities to make your development easier
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <a
                key={index}
                href="#"
                className="group bg-zinc-800/30 border border-zinc-700/40 p-6 hover:border-primary-500/50 transition-all duration-300 cursor-pointer border-l-4 border-l-transparent hover:border-l-primary-500"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                <h3 className="text-base font-bold text-zinc-100 mb-2 group-hover:text-primary-400 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-zinc-400 text-sm">
                  {tool.description}
                </p>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-zinc-900/90 to-zinc-800/90">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">
              Need Help?
            </h2>
            <p className="text-xl text-zinc-300">
              Our support team is here to help you succeed
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-600 hover:from-primary-400 hover:to-accent-500 text-white text-base font-semibold shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105 border-l-4 border-white/20 hover:border-white/40">
                Contact Support
              </button>
              <button className="px-8 py-4 bg-zinc-800/60 hover:bg-zinc-800/80 border-2 border-zinc-700/60 hover:border-primary-500/60 text-zinc-100 text-base font-semibold backdrop-blur-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-zinc-600 hover:border-l-primary-500">
                Join Community
              </button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
