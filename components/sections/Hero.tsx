'use client';

import { useState, useEffect } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function Hero() {
  const [terminalText, setTerminalText] = useState('');
  const fullText = 'git push scalenodes main';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTerminalText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900 text-white overflow-hidden pt-24 pb-32 min-h-[90vh] flex items-center">
      {/* Enhanced animated mesh gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 -left-48 w-[700px] h-[700px] bg-primary-500 rounded-full mix-blend-multiply filter blur-[140px] animate-float"></div>
        <div className="absolute top-1/3 -right-48 w-[600px] h-[600px] bg-accent-500 rounded-full mix-blend-multiply filter blur-[140px] animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-[650px] h-[650px] bg-primary-600 rounded-full mix-blend-multiply filter blur-[140px] animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98115_1px,transparent_1px),linear-gradient(to_bottom,#10b98115_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_60%,transparent_100%)]"></div>

      {/* Floating orbs */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-40 h-40 bg-accent-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <Container className="relative z-10">
        {/* Main Content - Centered */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-8 animate-fadeIn">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-zinc-800/60 to-zinc-900/60 border border-primary-500/30 rounded-full backdrop-blur-xl shadow-2xl shadow-primary-500/10">
              <div className="relative flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-primary-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2.5 h-2.5 bg-primary-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-sm font-medium text-zinc-200 tracking-wide">🌍 Kenya & Europe Servers</span>
              <span className="px-3 py-1 bg-primary-500/20 border border-primary-500/40 rounded-full text-xs text-primary-300">Live Now</span>
            </div>

            {/* Massive Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight max-w-6xl mx-auto">
              <span className="block text-white font-bold">Deploy Apps in</span>
              <span className="block mt-3 bg-gradient-to-r from-primary-300 via-accent-300 to-primary-400 bg-clip-text text-transparent animate-gradient bg-300% font-bold">
                Seconds, Not Hours
              </span>
            </h1>

            {/* Enhanced Subheadline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-zinc-300 leading-relaxed max-w-4xl mx-auto font-light">
              Africa's premier deployment platform. Lightning-fast <span className="text-primary-400 font-medium">&lt;50ms</span> latency for local users,
              <span className="text-accent-400 font-medium"> global reach</span> for everyone else.
            </p>

            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6">
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-100 transition duration-500 animate-gradient bg-300%"></div>
                <button className="relative px-10 py-5 bg-gradient-to-r from-primary-500 via-primary-600 to-accent-600 text-white text-lg font-semibold rounded-xl shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-3 border border-primary-400/30">
                  Start Deploying Free
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
              <button className="px-10 py-5 bg-zinc-800/60 hover:bg-zinc-800/80 border-2 border-zinc-700/60 hover:border-primary-500/60 text-white text-lg font-semibold rounded-xl backdrop-blur-xl transition-all duration-300 hover:scale-105 shadow-xl">
                View Live Demo
              </button>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-10 pt-8">
              {[
                { icon: '🎁', text: 'KES 500 Free Credits' },
                { icon: '⚡', text: 'Deploy in 30 Seconds' },
                { icon: '💳', text: 'M-Pesa Accepted' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group cursor-pointer">
                  <div className="text-2xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                    {item.icon}
                  </div>
                  <span className="text-base text-zinc-400 group-hover:text-zinc-200 transition-colors font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal + Stats Grid */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            {/* Animated Terminal */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-xl border border-zinc-700/50 rounded-2xl overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-5 py-4 bg-zinc-800/60 border-b border-zinc-700/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="ml-4 text-sm text-zinc-400 font-mono">terminal</span>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-primary-400">$</span>
                    <span className="text-zinc-300">{terminalText}</span>
                    <span className="w-2 h-4 bg-primary-400 animate-pulse"></span>
                  </div>
                  <div className="text-zinc-500 pl-4">
                    <div className="flex items-center gap-2 animate-fadeIn" style={{ animationDelay: '2s' }}>
                      <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Compressing source code...</span>
                    </div>
                    <div className="flex items-center gap-2 animate-fadeIn" style={{ animationDelay: '2.3s' }}>
                      <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Building Docker image...</span>
                    </div>
                    <div className="flex items-center gap-2 animate-fadeIn" style={{ animationDelay: '2.6s' }}>
                      <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Deploying to Nairobi...</span>
                    </div>
                    <div className="flex items-center gap-2 mt-4 text-primary-400 animate-fadeIn" style={{ animationDelay: '3s' }}>
                      <span>✨</span>
                      <span className="font-semibold">Deployed! https://app.scalenodes.app</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  value: '99.9%',
                  label: 'Uptime SLA',
                  gradient: 'from-primary-500 to-primary-600',
                  icon: '🛡️',
                  bg: 'from-primary-500/10 to-primary-600/5'
                },
                {
                  value: '<50ms',
                  label: 'Avg Latency',
                  gradient: 'from-accent-500 to-accent-600',
                  icon: '⚡',
                  bg: 'from-accent-500/10 to-accent-600/5'
                },
                {
                  value: '500+',
                  label: 'Apps Deployed',
                  gradient: 'from-primary-400 to-accent-500',
                  icon: '🚀',
                  bg: 'from-primary-400/10 to-accent-500/5'
                },
                {
                  value: '24/7',
                  label: 'Local Support',
                  gradient: 'from-accent-400 to-primary-500',
                  icon: '💬',
                  bg: 'from-accent-400/10 to-primary-500/5'
                }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-br ${stat.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
                  <div className={`relative bg-gradient-to-br ${stat.bg} backdrop-blur-xl border border-zinc-700/50 rounded-2xl p-6 hover:border-zinc-600/60 transition-all duration-300 h-full`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className={`text-5xl font-bold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <span className="text-3xl opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all">
                        {stat.icon}
                      </span>
                    </div>
                    <div className="text-sm text-zinc-400 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-16 text-center animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            <p className="text-zinc-500 text-sm mb-6">Trusted by leading Kenyan startups and developers</p>
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
              {['Shoppie', 'PayFlow', 'AgriConnect', 'EduHub', 'WebCraft'].map((company, i) => (
                <div key={i} className="text-2xl font-bold text-zinc-600 hover:text-zinc-400 transition-colors cursor-pointer">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
