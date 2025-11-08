'use client';

import { useState, useEffect } from 'react';
import Container from '../ui/Container';

export default function Hero() {
  const [terminalText, setTerminalText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
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

    // Blinking cursor
    const cursorTimer = setInterval(() => {
      setCursorVisible(v => !v);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900 text-white overflow-hidden pt-28 pb-20 min-h-[75vh] flex items-center">
      {/* Enhanced animated mesh gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 -left-48 w-[700px] h-[700px] bg-primary-500 rounded-full mix-blend-multiply filter blur-[140px] animate-float"></div>
        <div className="absolute top-1/3 -right-48 w-[600px] h-[600px] bg-accent-500 rounded-full mix-blend-multiply filter blur-[140px] animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-[650px] h-[650px] bg-primary-600 rounded-full mix-blend-multiply filter blur-[140px] animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98115_1px,transparent_1px),linear-gradient(to_bottom,#10b98115_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_60%,transparent_100%)]"></div>

      {/* Diagonal lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 50px, #10b981 50px, #10b981 51px)',
        }}></div>
      </div>

      <Container className="relative z-10">
        {/* Main Content - Centered */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-6 animate-fadeIn">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-5xl mx-auto animate-slideInUp" style={{ animationDelay: '0.1s' }}>
              <span className="block text-white font-bold">Deploy Apps in</span>
              <span className="block mt-2 text-white font-bold">
                Seconds, Not Hours
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg lg:text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto font-light animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Africa's premier deployment platform. Lightning-fast <span className="text-primary-400 font-medium border-b-2 border-primary-400/50">&lt;50ms</span> latency for local users,
              <span className="text-accent-400 font-medium"> global reach</span> for everyone else.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600 opacity-50 group-hover:opacity-100 transition duration-500 animate-gradient bg-300% blur-sm rounded-lg"></div>
                <button className="relative px-8 py-4 bg-gradient-to-r from-primary-500 via-primary-600 to-accent-600 text-white text-base font-semibold shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-3 rounded-lg">
                  Start Deploying Free
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
              <button className="px-8 py-4 bg-zinc-800/60 hover:bg-zinc-800/80 border-2 border-zinc-700/60 hover:border-primary-500/60 text-zinc-100 text-base font-semibold backdrop-blur-xl transition-all duration-300 hover:scale-105 shadow-xl rounded-lg">
                View Live Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-6 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              {[
                { icon: '🎁', text: 'KES 500 Free Credits' },
                { icon: '⚡', text: 'Deploy in 30 Seconds' },
                { icon: '💳', text: 'M-Pesa Accepted' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 px-4 py-2 bg-zinc-900/40 backdrop-blur-sm rounded-full group cursor-pointer transform hover:scale-105 transition-all duration-300 hover:bg-zinc-800/50">
                  <div className="text-xl opacity-80 group-hover:opacity-100 transition-all">
                    {item.icon}
                  </div>
                  <span className="text-sm text-zinc-400 group-hover:text-zinc-100 transition-colors font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal + Stats Grid */}
          <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            {/* Animated Terminal */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent-600 opacity-20 group-hover:opacity-40 transition duration-500 blur rounded-xl"></div>
              <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-xl border border-zinc-700/50 overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-300 rounded-xl">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-5 py-3 bg-zinc-800/60 border-b border-zinc-700/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500/80 hover:bg-red-400 transition-colors cursor-pointer rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500/80 hover:bg-yellow-400 transition-colors cursor-pointer rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500/80 hover:bg-green-400 transition-colors cursor-pointer rounded-full"></div>
                  </div>
                  <span className="ml-4 text-sm text-zinc-400 font-mono">terminal</span>
                  <div className="ml-auto flex gap-2">
                    <div className="w-4 h-1 bg-zinc-600"></div>
                    <div className="w-4 h-1 bg-zinc-600"></div>
                    <div className="w-4 h-1 bg-zinc-600"></div>
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-5 font-mono text-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-primary-400">$</span>
                    <span className="text-zinc-300">{terminalText}</span>
                    <span className={`w-2 h-4 bg-primary-400 ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
                  </div>
                  <div className="text-zinc-500 pl-4 space-y-2">
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
                    <div className="flex items-center gap-2 mt-3 text-primary-400 animate-fadeIn" style={{ animationDelay: '3s' }}>
                      <span>✨</span>
                      <span className="font-semibold">Deployed! https://app.scalenodes.app</span>
                    </div>
                  </div>
                </div>
                {/* Bottom accent */}
                <div className="h-1 bg-gradient-to-r from-primary-500 to-accent-500"></div>
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
                  className="relative group cursor-pointer transform hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-30 transition duration-500 blur rounded-lg`}></div>
                  <div className={`relative bg-gradient-to-br ${stat.bg} backdrop-blur-xl border border-zinc-700/50 p-5 hover:border-zinc-600/60 transition-all duration-300 h-full rounded-lg`}>
                    <div className="flex items-start justify-between mb-2">
                      <div className={`text-4xl font-bold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <span className="text-2xl opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all">
                        {stat.icon}
                      </span>
                    </div>
                    <div className="text-xs text-zinc-400 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-8 text-center animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <p className="text-zinc-500 text-xs mb-3 tracking-wider uppercase">Trusted by leading Kenyan startups</p>
            <div className="flex flex-wrap items-center justify-center gap-6 opacity-40">
              {['Shoppie', 'PayFlow', 'AgriConnect', 'EduHub', 'WebCraft'].map((company, i) => (
                <div key={i} className="text-base font-semibold text-zinc-600 hover:text-zinc-300 transition-all duration-300 cursor-pointer transform hover:scale-110">
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
