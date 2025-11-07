import Container from '../ui/Container';
import Section from '../ui/Section';

export default function ProblemSolution() {
  return (
    <Section background="white" className="bg-zinc-950 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-[128px] animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-[128px] animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <Container className="relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Problem */}
          <div className="space-y-6 animate-slideInLeft">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-500/10 border border-red-500/20 backdrop-blur-sm rounded-xl">
              <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-red-300 tracking-wide">The Problem</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-white">
              International hosting platforms are
              <span className="block mt-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                expensive for Kenyan businesses
              </span>
            </h2>

            <ul className="space-y-6 pt-4">
              <li className="flex gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                  <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-lg mb-2">High dollar-based pricing</h3>
                  <p className="text-zinc-400 leading-relaxed">Paying in USD with unfavorable exchange rates cuts into your profits</p>
                </div>
              </li>
              <li className="flex gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                  <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-lg mb-2">Data hosted overseas</h3>
                  <p className="text-zinc-400 leading-relaxed">Your users experience slow load times and you have no data sovereignty</p>
                </div>
              </li>
              <li className="flex gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                  <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-lg mb-2">Complex international payments</h3>
                  <p className="text-zinc-400 leading-relaxed">International credit cards, wire transfers, and payment complications</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div className="space-y-6 animate-slideInRight">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500/10 border border-primary-500/20 backdrop-blur-sm rounded-xl">
              <svg className="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-primary-300 tracking-wide">The Solution</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-white">
              ScaleNodes brings
              <span className="block mt-2 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                world-class hosting to Kenya
              </span>
            </h2>

            <ul className="space-y-6 pt-4">
              <li className="flex gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                  <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-lg mb-2">Affordable local pricing</h3>
                  <p className="text-zinc-400 leading-relaxed">Pay in KES with M-Pesa and other local payment methods</p>
                </div>
              </li>
              <li className="flex gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                  <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-lg mb-2">Servers in Nairobi</h3>
                  <p className="text-zinc-400 leading-relaxed">Lightning-fast load times for your Kenyan users with full data sovereignty</p>
                </div>
              </li>
              <li className="flex gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                  <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-lg mb-2">Built for African businesses</h3>
                  <p className="text-zinc-400 leading-relaxed">By Kenyans, for Kenyans, with the features you actually need</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
