import Container from '../ui/Container';
import Section from '../ui/Section';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '500',
      description: 'Perfect for testing and small projects',
      features: [
        '0.5 vCPU',
        '512Mi RAM',
        '5Gi storage',
        'Basic SSL',
        'Community support',
        'Daily backups',
        '99.9% uptime SLA'
      ],
      popular: false
    },
    {
      name: 'Basic',
      price: '1,500',
      description: 'For growing applications',
      features: [
        '1 vCPU',
        '2Gi RAM',
        '15Gi storage',
        'Custom domain',
        'Email support',
        'Point-in-time recovery',
        '99.95% uptime SLA',
        'Auto-scaling'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '3,000',
      description: 'For production workloads',
      features: [
        '2 vCPU',
        '4Gi RAM',
        '30Gi storage',
        'Priority support',
        'Advanced monitoring',
        'Read replicas',
        '99.99% uptime SLA',
        'Load balancing',
        'Custom SLA'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For mission-critical applications',
      features: [
        'Custom vCPU',
        'Custom RAM',
        'Custom storage',
        'Dedicated support',
        'Custom compliance',
        'Multi-region',
        '99.995% uptime SLA',
        'Advanced security',
        'White-label options'
      ],
      popular: false
    }
  ];

  return (
    <Section background="white" className="bg-zinc-950">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-zinc-400">
            Choose the perfect plan for your needs. All plans include local Kenya servers and M-Pesa payments.
          </p>
        </div>

        {/* 4-Column Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-3 py-1 rounded-full text-xs shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Pricing Card */}
              <div className={`relative flex flex-col h-full rounded-2xl p-8 border transition-all duration-300 ${
                plan.popular
                  ? 'bg-zinc-900/80 border-primary-500/50 shadow-xl shadow-primary-500/10'
                  : 'bg-zinc-900/50 border-zinc-800/50 hover:border-zinc-700'
              }`}>
                {/* Title */}
                <h3 className="text-2xl text-white mb-1">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  {plan.price === 'Custom' ? (
                    <div className="text-5xl text-white my-4">Custom</div>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="text-zinc-400 text-sm">KES</span>
                      <span className="text-5xl text-white">{plan.price}</span>
                      <span className="text-zinc-400 text-sm">/mo</span>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3.5 rounded-lg mb-6 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-zinc-800/50 hover:bg-zinc-800 text-white border border-zinc-700/50'
                }`}>
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </button>

                {/* Divider */}
                <div className="border-t border-zinc-800 mb-6"></div>

                {/* Description */}
                <p className="text-zinc-400 text-sm mb-6">
                  {plan.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                      <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="text-center mt-12 p-6 bg-zinc-900/30 backdrop-blur-sm rounded-xl border border-zinc-800/50 max-w-4xl mx-auto">
          <p className="text-zinc-400 mb-4">
            All plans include free SSL, automatic backups, and DDoS protection
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-400">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Pay with M-Pesa
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Credit/Debit Cards
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Bank Transfer
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
