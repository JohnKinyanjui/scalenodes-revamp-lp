import Container from '../ui/Container';
import Section from '../ui/Section';
import Button from '../ui/Button';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '0',
      period: 'Forever Free',
      description: 'Perfect for side projects and testing',
      features: [
        '1 project',
        '100GB bandwidth',
        '1GB storage',
        'SSL certificate',
        'Community support',
        '.scalenodes.app domain'
      ],
      cta: 'Get Started Free',
      popular: false
    },
    {
      name: 'Professional',
      price: '2,500',
      period: 'per month',
      description: 'For growing businesses and developers',
      features: [
        '10 projects',
        '1TB bandwidth',
        '10GB storage',
        'SSL certificates',
        'Priority support',
        'Custom domains',
        'Staging environments',
        'Basic analytics'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Business',
      price: '7,500',
      period: 'per month',
      description: 'For agencies and teams',
      features: [
        'Unlimited projects',
        'Unlimited bandwidth',
        '50GB storage',
        'SSL certificates',
        '24/7 support',
        'Custom domains',
        'Team collaboration',
        'Advanced analytics',
        'Custom integrations'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Contact us',
      description: 'For large-scale applications',
      features: [
        'Everything in Business',
        'Dedicated resources',
        'Custom SLA',
        'Dedicated support',
        'White-label options',
        'Custom solutions',
        'On-site training'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <Section background="white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Start free, scale as you grow. All prices in KES.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Pay with M-Pesa</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Credit/Debit Card</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Bank Transfer</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-primary-600 text-white shadow-2xl scale-105 z-10'
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="mb-2">
                  {plan.price === 'Custom' ? (
                    <div className="text-3xl font-bold">Custom</div>
                  ) : (
                    <>
                      <span className="text-sm">KES</span>
                      <span className="text-4xl font-bold ml-1">{plan.price}</span>
                    </>
                  )}
                </div>
                <div className={`text-sm ${plan.popular ? 'text-primary-100' : 'text-gray-600'}`}>
                  {plan.period}
                </div>
              </div>

              <p className={`text-center mb-6 ${plan.popular ? 'text-primary-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'text-accent-300' : 'text-green-500'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={`text-sm ${plan.popular ? 'text-white' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? 'secondary' : 'primary'}
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 p-6 bg-blue-50 rounded-xl">
          <p className="text-gray-700 text-lg">
            <strong>All plans include:</strong> Free SSL, Automatic backups, DDoS protection, 99.9% uptime SLA
          </p>
        </div>
      </Container>
    </Section>
  );
}
