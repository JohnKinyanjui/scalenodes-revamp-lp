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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perfect for Every Stage of Growth
          </h2>
          <p className="text-xl text-gray-600">
            Whether you're a solo developer or a large enterprise, we've got you covered
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((useCase, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{useCase.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {useCase.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {useCase.description}
              </p>
              <ul className="space-y-2">
                {useCase.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
