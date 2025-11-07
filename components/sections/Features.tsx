import Container from '../ui/Container';
import Section from '../ui/Section';

export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Support for Modern Frameworks',
      description: 'Deploy React, Next.js, Vue, Golang, Node.js, and more with zero configuration.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: 'Managed Services',
      description: 'Managed WordPress, MySQL, PostgreSQL, and Redis - fully optimized and maintained.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: 'Custom Domains & SSL',
      description: 'Free SSL certificates and easy custom domain setup for your professional presence.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Local Infrastructure',
      description: 'Servers physically located in Kenya for compliance and lightning-fast performance.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: 'Exclusive Apps',
      description: 'One-click deployment for popular business apps - simplified setup for non-developers.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Developer Tools',
      description: 'Git integration, CI/CD pipelines, staging environments, and real-time logs.'
    }
  ];

  return (
    <Section background="gray" className="bg-zinc-900 relative overflow-hidden" id="features">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3f3f4608_1px,transparent_1px),linear-gradient(to_bottom,#3f3f4608_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Everything You Need to
            <span className="block mt-2 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Deploy and Scale
            </span>
          </h2>
          <p className="text-xl text-zinc-400">
            Built with the features that African developers and businesses actually need
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group animate-scaleIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-full bg-gradient-to-br from-zinc-800/50 via-zinc-800/30 to-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/40 hover:border-primary-500/50 transition-all duration-500">
                {/* Icon container */}
                <div className="relative w-16 h-16 bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-primary-400">
                    {feature.icon}
                  </div>
                </div>

                <h3 className="text-xl text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/5 group-hover:to-accent-500/5 rounded-2xl transition-all duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
