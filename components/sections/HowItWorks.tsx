import Container from '../ui/Container';
import Section from '../ui/Section';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Connect Your Repository',
      description: 'Link your GitHub, GitLab, or Bitbucket repository in seconds.',
      details: 'We support all major version control platforms with automatic deployments on every push.'
    },
    {
      number: '02',
      title: 'Configure & Deploy',
      description: 'Auto-detect your framework or customize your build settings.',
      details: 'Smart detection for React, Next.js, Vue, and more. Or configure manually if you prefer.'
    },
    {
      number: '03',
      title: 'Go Live Instantly',
      description: 'Your app is live on our Kenya servers with SSL and a custom domain.',
      details: 'Get a .scalenodes.app subdomain or use your own custom domain with free SSL.'
    }
  ];

  return (
    <Section background="primary" id="how-it-works">
      <Container>
        <div className="relative">
          {/* Background blobs */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-[128px] animate-float"></div>
          </div>

          <div className="relative text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Deploy in Minutes, Not Hours
            </h2>
            <p className="text-xl text-zinc-400">
              From code to production in three simple steps
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent" style={{ width: 'calc(100% - 200px)', margin: '0 100px' }}></div>

            <div className="grid lg:grid-cols-3 gap-8 relative">
              {steps.map((step, index) => (
                <div key={index} className="relative group animate-scaleIn" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="relative bg-gradient-to-br from-zinc-800/50 via-zinc-800/30 to-zinc-900/50 backdrop-blur-sm rounded-xl p-8 border border-zinc-700/40 hover:border-primary-500/50 transition-all duration-300">
                    {/* Step Number Badge */}
                    <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg border border-accent-400/30">
                      {index + 1}
                    </div>

                    <div className="pt-8">
                      <div className="text-sm font-semibold text-primary-400 mb-2 tracking-wider">
                        STEP {step.number}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-lg text-zinc-300 mb-4 font-medium">
                        {step.description}
                      </p>
                      <p className="text-zinc-400">
                        {step.details}
                      </p>
                    </div>

                    {/* Icon/Visual Element */}
                    <div className="mt-6 pt-6 border-t border-zinc-700/40">
                      {index === 0 && (
                        <svg className="w-12 h-12 text-primary-400 group-hover:text-primary-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg className="w-12 h-12 text-primary-400 group-hover:text-primary-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg className="w-12 h-12 text-primary-400 group-hover:text-primary-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      )}
                    </div>

                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/5 group-hover:to-accent-500/5 rounded-xl transition-all duration-500 pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12 animate-fadeIn">
            <p className="text-lg text-zinc-400 mb-4">
              Ready to get started?
            </p>
            <div className="inline-flex items-center gap-2 bg-zinc-800/50 border border-zinc-700/40 backdrop-blur-sm px-6 py-3 rounded-lg">
              <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-white">Free tier available - No credit card required</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
