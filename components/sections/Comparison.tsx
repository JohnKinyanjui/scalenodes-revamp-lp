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
      scalenodes: 'From KES 500 + Free Credits',
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
        <div className="relative">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3f3f4608_1px,transparent_1px),linear-gradient(to_bottom,#3f3f4608_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

          <div className="relative text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How We Compare to International Platforms
            </h2>
            <p className="text-xl text-zinc-400">
              See why Kenyan businesses are choosing ScaleNodes
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Mobile View */}
            <div className="lg:hidden space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-zinc-800/50 via-zinc-800/30 to-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border ${
                    feature.highlight ? 'border-primary-500/50' : 'border-zinc-700/40'
                  }`}
                >
                  <h3 className="font-bold text-white mb-4">{feature.name}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-zinc-400">ScaleNodes</span>
                      <span className="font-semibold text-primary-400">{feature.scalenodes}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-zinc-400">Others</span>
                      <span className="text-zinc-300">{feature.others}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop View */}
            <div className="hidden lg:block bg-gradient-to-br from-zinc-800/50 via-zinc-800/30 to-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-700/40 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-zinc-800 to-zinc-900 border-b border-zinc-700/40">
                    <th className="py-6 px-6 text-left text-white font-bold text-lg">Feature</th>
                    <th className="py-6 px-6 text-center text-white font-bold text-lg">
                      <div className="flex flex-col items-center">
                        <span className="text-2xl mb-2">ScaleNodes</span>
                        <span className="bg-gradient-to-r from-accent-500 to-accent-600 px-3 py-1 rounded-full text-xs border border-accent-400/30">Local & Better</span>
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
                      className={`border-b border-zinc-700/30 transition-colors ${
                        feature.highlight ? 'bg-primary-500/10' : index % 2 === 0 ? 'bg-zinc-800/20' : 'bg-zinc-900/20'
                      } hover:bg-zinc-800/40`}
                    >
                      <td className="py-4 px-6 font-semibold text-white">
                        {feature.name}
                        {feature.highlight && (
                          <span className="ml-2 text-xs bg-accent-500 text-white px-2 py-0.5 rounded-full border border-accent-400/30">
                            Key Advantage
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="inline-flex items-center gap-2 font-semibold text-primary-400">
                          {feature.scalenodes.includes('✓') ? (
                            <svg className="w-6 h-6 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            feature.scalenodes
                          )}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center text-zinc-300">
                        {feature.others.includes('✓') ? (
                          <svg className="w-6 h-6 text-zinc-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
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

            <div className="mt-8 text-center animate-fadeIn">
              <p className="text-zinc-400 mb-4">
                Ready to experience the difference?
              </p>
              <button className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg blur opacity-25 group-hover:opacity-60 transition duration-300"></div>
                <span className="relative bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-block hover:from-primary-500 hover:to-primary-400 shadow-lg hover:shadow-xl transition-all">
                  Get Started with Free Credits
                </span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
