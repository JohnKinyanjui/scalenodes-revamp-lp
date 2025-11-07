import Container from '../ui/Container';
import Section from '../ui/Section';

export default function UseCases() {
  const cases = [
    {
      icon: '🚀',
      title: 'Startups',
      description: 'Launch your MVP quickly and scale affordably as you grow.',
      features: ['Free tier to start', 'Easy scaling', 'Local payment methods']
    },
    {
      icon: '💼',
      title: 'Agencies',
      description: 'Manage multiple client projects with team collaboration tools.',
      features: ['Multi-project dashboard', 'Client billing', 'White-label options']
    },
    {
      icon: '👨‍💻',
      title: 'Developers',
      description: 'Focus on code while we handle infrastructure and DevOps.',
      features: ['Git integration', 'CI/CD pipelines', 'Staging environments']
    },
    {
      icon: '🏢',
      title: 'Enterprises',
      description: 'Enterprise-grade infrastructure with dedicated support.',
      features: ['SLA guarantees', 'Dedicated resources', 'Custom solutions']
    }
  ];

  return (
    <Section background="white">
      <Container>
        <div className="relative">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3f3f4608_1px,transparent_1px),linear-gradient(to_bottom,#3f3f4608_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

          <div className="relative text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect for Every Stage of Growth
            </h2>
            <p className="text-xl text-zinc-400">
              Whether you're a solo developer or a large enterprise, we've got you covered
            </p>
          </div>

          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cases.map((useCase, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-zinc-800/50 via-zinc-800/30 to-zinc-900/50 backdrop-blur-sm border border-zinc-700/40 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300 animate-scaleIn hover:bg-zinc-800/60"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-zinc-400 mb-4">
                  {useCase.description}
                </p>
                <ul className="space-y-2">
                  {useCase.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-zinc-300">
                      <svg className="w-4 h-4 text-primary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/5 group-hover:to-accent-500/5 rounded-xl transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
