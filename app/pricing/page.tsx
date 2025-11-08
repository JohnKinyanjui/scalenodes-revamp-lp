import Navbar from '@/components/sections/Navbar';
import Container from '@/components/ui/Container';
import Pricing from '@/components/sections/Pricing';
import Footer from '@/components/sections/Footer';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900 text-white overflow-hidden pt-36 pb-20">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary-500 rounded-full mix-blend-multiply filter blur-[128px] animate-float"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-accent-500 rounded-full mix-blend-multiply filter blur-[128px] animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full">
              <span className="text-sm text-primary-400 font-medium">Simple, Transparent Pricing</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Pay Only for
              <span className="block mt-2 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                What You Use
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto">
              Transparent pricing in Kenyan Shillings. No hidden fees, no surprises. Get KES 500 in free credits to start.
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <Pricing />

      {/* FAQ Section */}
      <section className="py-24 bg-zinc-900/50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: 'What payment methods do you accept?',
                  answer: 'We accept M-Pesa (Paybill and Till), credit/debit cards, and bank transfers. All pricing is in Kenyan Shillings (KES).'
                },
                {
                  question: 'Can I change plans later?',
                  answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we prorate charges.'
                },
                {
                  question: 'What happens if I exceed my plan limits?',
                  answer: 'We\'ll notify you when you reach 80% of your limits. You can upgrade anytime, or we\'ll charge overage fees at reasonable rates.'
                },
                {
                  question: 'Do you offer refunds?',
                  answer: 'Yes! We offer a 30-day money-back guarantee for all paid plans. No questions asked.'
                },
                {
                  question: 'Is there a free trial?',
                  answer: 'All new users receive KES 500 in free credits. No credit card required to get started.'
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-zinc-800/30 border border-zinc-700/40 rounded-xl p-8 hover:border-primary-500/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-zinc-100 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-zinc-400">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
