import Container from '../ui/Container';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0a0b0e] via-[#12141a] to-[#1a1d26] text-white overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-600 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <Container className="relative py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slideInLeft">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                🇰🇪 Proudly Kenyan
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Deploy Your Apps
              <span className="block bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mt-2">
                in Kenya.
              </span>
              <span className="block text-white mt-2">Scale Globally.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Kenya's first locally-hosted deployment platform. Fast, affordable, and built for African developers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" variant="secondary" className="group bg-primary-600 hover:bg-primary-700 shadow-xl">
                Get Started Free
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white">
                View Pricing
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-300">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-300">Local payment methods</span>
              </div>
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="relative animate-slideInRight">
            <div className="bg-dark-card/50 backdrop-blur-xl rounded-2xl p-8 border border-primary-500/30 shadow-2xl animate-glow">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-dark-elevated rounded-xl animate-scaleIn" style={{ animationDelay: '0.1s' }}>
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">99.9%</div>
                  <div className="text-sm text-gray-400 mt-2">Uptime SLA</div>
                </div>
                <div className="text-center p-4 bg-dark-elevated rounded-xl animate-scaleIn" style={{ animationDelay: '0.2s' }}>
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">&lt;50ms</div>
                  <div className="text-sm text-gray-400 mt-2">Local Latency</div>
                </div>
                <div className="text-center p-4 bg-dark-elevated rounded-xl animate-scaleIn" style={{ animationDelay: '0.3s' }}>
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">100%</div>
                  <div className="text-sm text-gray-400 mt-2">Data in Kenya</div>
                </div>
                <div className="text-center p-4 bg-dark-elevated rounded-xl animate-scaleIn" style={{ animationDelay: '0.4s' }}>
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">24/7</div>
                  <div className="text-sm text-gray-400 mt-2">Support</div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-3 rounded-full shadow-2xl transform rotate-12 animate-float">
              <div className="text-sm font-semibold">Servers in Nairobi 🚀</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
