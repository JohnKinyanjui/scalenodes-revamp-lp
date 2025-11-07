import Container from '../ui/Container';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900 text-white overflow-hidden pt-32 pb-20">
      {/* Complex animated mesh gradient background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 -left-48 w-[600px] h-[600px] bg-primary-500 rounded-full mix-blend-multiply filter blur-[128px] animate-float"></div>
        <div className="absolute top-1/3 -right-48 w-[500px] h-[500px] bg-accent-500 rounded-full mix-blend-multiply filter blur-[128px] animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-[550px] h-[550px] bg-primary-600 rounded-full mix-blend-multiply filter blur-[128px] animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3f3f4608_1px,transparent_1px),linear-gradient(to_bottom,#3f3f4608_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #3f3f46 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slideInLeft">
            {/* Badge with enhanced design */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-zinc-800/40 border border-zinc-700/60 rounded-full backdrop-blur-md animate-fadeIn shadow-lg shadow-primary-500/5">
              <div className="relative">
                <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 bg-primary-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-sm text-zinc-300 tracking-wide">🌍 Servers in Kenya & Europe</span>
            </div>

            {/* Headline with letter spacing */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
              <span className="block text-white">Deploy Your Apps</span>
              <span className="block mt-2 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 bg-clip-text text-transparent animate-gradient bg-300%">
                Globally.
              </span>
              <span className="block mt-2 text-zinc-400">Scale Seamlessly.</span>
            </h1>

            {/* Subheadline with improved typography */}
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl">
              Deploy on servers in Kenya and Europe. Lightning-fast performance with sub-50ms latency for African users and global reach for international customers.
            </p>

            {/* CTA Buttons with sophisticated hover effects */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 rounded-xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-300 animate-gradient bg-300%"></div>
                <Button size="lg" className="relative bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white shadow-xl border border-primary-500/20">
                  Get Started
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </div>
              <Button size="lg" variant="outline" className="bg-zinc-900/50 border-2 border-zinc-700/70 text-zinc-200 hover:border-primary-500/50 hover:text-white hover:bg-zinc-800/70 backdrop-blur-sm transition-all duration-300">
                View Pricing
              </Button>
            </div>

            {/* Trust Indicators with refined design */}
            <div className="flex flex-wrap items-center gap-8 pt-6 text-sm text-zinc-500">
              {[
                'No credit card required',
                'KES 500 free credits',
                'M-Pesa accepted'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 group">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="group-hover:text-zinc-400 transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Enhanced Stats Dashboard */}
          <div className="relative animate-slideInRight">
            {/* Main stats card with sophisticated design */}
            <div className="relative bg-gradient-to-br from-zinc-900/60 via-zinc-900/40 to-zinc-800/60 backdrop-blur-2xl rounded-3xl p-10 border border-zinc-700/40 shadow-2xl shadow-primary-500/5">
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 rounded-3xl"></div>

              <div className="relative grid grid-cols-2 gap-8">
                {[
                  { value: '99.9%', label: 'Uptime Guarantee', color: 'from-primary-400 to-primary-500', icon: '🛡️' },
                  { value: '<50ms', label: 'Local Latency', color: 'from-accent-400 to-accent-500', icon: '⚡' },
                  { value: '2', label: 'Server Regions', color: 'from-primary-500 to-accent-500', icon: '🌍' },
                  { value: '24/7', label: 'Expert Support', color: 'from-accent-500 to-primary-500', icon: '💬' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="relative group p-6 bg-zinc-800/30 rounded-2xl border border-zinc-700/30 hover:border-primary-500/40 transition-all duration-500 animate-scaleIn hover:bg-zinc-800/50"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className={`text-4xl md:text-5xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <span className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity">{stat.icon}</span>
                    </div>
                    <div className="text-sm text-zinc-400 tracking-wide">{stat.label}</div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/5 group-hover:to-accent-500/5 rounded-2xl transition-all duration-500"></div>
                  </div>
                ))}
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary-500/20 rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-accent-500/20 rounded-br-3xl"></div>
            </div>

            {/* Floating badges with refined design */}
            <div className="absolute -top-8 -right-8 group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl blur opacity-40 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3.5 rounded-xl shadow-2xl transform rotate-3 animate-float">
                <div className="text-sm flex items-center gap-2.5 tracking-wide">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                  </svg>
                  Kenya & Europe
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 group">
              <div className="absolute -inset-2 bg-zinc-700/40 rounded-2xl blur"></div>
              <div className="relative bg-zinc-800/90 backdrop-blur-sm border border-zinc-700/60 text-white px-6 py-3.5 rounded-xl shadow-xl transform -rotate-3 animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-sm flex items-center gap-2.5 tracking-wide">
                  <div className="relative">
                    <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                    <div className="absolute inset-0 w-2 h-2 bg-primary-400 rounded-full animate-ping"></div>
                  </div>
                  500+ Projects Deployed
                </div>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}
