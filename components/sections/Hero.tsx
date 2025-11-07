import Container from '../ui/Container';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900 text-white overflow-hidden min-h-screen flex items-center pt-24">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3f3f4610_1px,transparent_1px),linear-gradient(to_bottom,#3f3f4610_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <Container className="relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slideInLeft">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 rounded-full backdrop-blur-sm animate-fadeIn">
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-zinc-300 font-medium">🇰🇪 Proudly Built in Kenya</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-white">Deploy Your Apps</span>
              <span className="block mt-2 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 bg-clip-text text-transparent animate-gradient bg-300%">
                in Kenya.
              </span>
              <span className="block mt-2 text-zinc-300">Scale Globally.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-2xl">
              Kenya's first locally-hosted deployment platform. Lightning-fast performance with sub-50ms latency for your African users.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="relative group">
                <Button size="lg" className="relative z-10 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white shadow-xl">
                  Get Started Free
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-primary-500 rounded-lg blur opacity-40 group-hover:opacity-70 transition duration-500"></div>
              </div>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-zinc-700 text-zinc-300 hover:border-primary-500 hover:text-white hover:bg-zinc-800/50">
                View Pricing
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-6 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Free tier available</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>M-Pesa accepted</span>
              </div>
            </div>
          </div>

          {/* Right Content - Stats Dashboard */}
          <div className="relative animate-slideInRight">
            {/* Main stats card */}
            <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-xl rounded-2xl p-8 border border-zinc-700/50 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '99.9%', label: 'Uptime', color: 'from-primary-400 to-primary-500' },
                  { value: '<50ms', label: 'Latency', color: 'from-accent-400 to-accent-500' },
                  { value: '100%', label: 'In Kenya', color: 'from-primary-500 to-accent-500' },
                  { value: '24/7', label: 'Support', color: 'from-accent-500 to-primary-500' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="relative group p-6 bg-zinc-800/50 rounded-xl border border-zinc-700/30 hover:border-primary-500/50 transition-all duration-300 animate-scaleIn"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-zinc-400">{stat.label}</div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl blur opacity-50"></div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-xl shadow-2xl transform rotate-3 animate-float">
              <div className="text-sm font-semibold flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
                Servers in Nairobi
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-zinc-800 border border-zinc-700 text-white px-6 py-3 rounded-xl shadow-xl transform -rotate-3 animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-sm font-semibold flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
                500+ Projects Deployed
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-zinc-700 rounded-full p-1">
            <div className="w-1 h-3 bg-primary-400 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
