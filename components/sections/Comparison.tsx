import Container from '../ui/Container';
import Section from '../ui/Section';

export default function Comparison() {
  const features = [
    {
      name: 'Server Location',
      scalenodes: 'Nairobi, Kenya',
      others: 'USA/Europe',
      highlight: true
    },
    {
      name: 'Latency for Kenyan Users',
      scalenodes: '<50ms',
      others: '200-400ms'
    },
    {
      name: 'Starting Price (Monthly)',
      scalenodes: 'KES 0 (Free)',
      others: '$5-20 (~KES 650-2,600)',
      highlight: true
    },
    {
      name: 'Payment Methods',
      scalenodes: 'M-Pesa, Cards, Bank Transfer',
      others: 'International Cards Only'
    },
    {
      name: 'Data Sovereignty',
      scalenodes: 'Full (Kenya-based)',
      others: 'Limited (Overseas)',
      highlight: true
    },
    {
      name: 'Local Support',
      scalenodes: 'EAT timezone',
      others: 'PST/EST timezone'
    },
    {
      name: 'Currency',
      scalenodes: 'KES',
      others: 'USD/EUR',
      highlight: true
    },
    {
      name: 'Custom Domains & SSL',
      scalenodes: '✓ Free',
      others: '✓ Free'
    },
    {
      name: 'Git Integration',
      scalenodes: '✓',
      others: '✓'
    },
    {
      name: 'Automatic Deployments',
      scalenodes: '✓',
      others: '✓'
    }
  ];

  return (
    <Section background="gray">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Compare to International Platforms
          </h2>
          <p className="text-xl text-gray-600">
            See why Kenyan businesses are choosing ScaleNodes
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Mobile View */}
          <div className="lg:hidden space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-sm ${
                  feature.highlight ? 'border-2 border-primary-500' : ''
                }`}
              >
                <h3 className="font-bold text-gray-900 mb-4">{feature.name}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">ScaleNodes</span>
                    <span className="font-semibold text-primary-600">{feature.scalenodes}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Others</span>
                    <span className="text-gray-700">{feature.others}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View */}
          <div className="hidden lg:block bg-white rounded-2xl shadow-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-primary-600 to-primary-700">
                  <th className="py-6 px-6 text-left text-white font-bold text-lg">Feature</th>
                  <th className="py-6 px-6 text-center text-white font-bold text-lg">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl mb-2">ScaleNodes</span>
                      <span className="bg-accent-500 px-3 py-1 rounded-full text-xs">Local & Better</span>
                    </div>
                  </th>
                  <th className="py-6 px-6 text-center text-white font-bold text-lg">
                    International Platforms
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-200 ${
                      feature.highlight ? 'bg-primary-50' : index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="py-4 px-6 font-semibold text-gray-900">
                      {feature.name}
                      {feature.highlight && (
                        <span className="ml-2 text-xs bg-accent-500 text-white px-2 py-0.5 rounded-full">
                          Key Advantage
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center gap-2 font-semibold text-primary-600">
                        {feature.scalenodes.includes('✓') ? (
                          <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          feature.scalenodes
                        )}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center text-gray-700">
                      {feature.others.includes('✓') ? (
                        <svg className="w-6 h-6 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        feature.others
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Ready to experience the difference?
            </p>
            <button className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 shadow-lg hover:shadow-xl transition-all">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
