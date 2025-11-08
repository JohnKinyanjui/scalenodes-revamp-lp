'use client';

import { useEffect, useRef, useState } from 'react';
import Container from '../ui/Container';
import Section from '../ui/Section';

export default function Enterprise() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => [...new Set([...prev, index])]);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(card);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const features = [
    {
      title: 'Dedicated Infrastructure',
      description: 'Enterprise-grade isolated resources with guaranteed performance and security for your mission-critical applications.',
      benefits: [
        '99.99% uptime SLA guarantee',
        'Dedicated compute and storage resources',
        'Isolated database instances',
        'Custom resource allocation',
        'Priority hardware allocation'
      ],
      imageUrl: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/illustrations/work-from-home-illustration.svg'
    },
    {
      title: 'Advanced Security & Compliance',
      description: 'Meet the highest security standards with SOC 2 Type II compliance, enterprise SSO, and comprehensive audit logging.',
      benefits: [
        'SOC 2 Type II & ISO 27001 certified',
        'SSO/SAML authentication',
        'Private networking & VPN support',
        'Comprehensive audit logs',
        'Data sovereignty in Kenya & Europe'
      ],
      imageUrl: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/illustrations/security-illustration.svg'
    },
    {
      title: 'Enterprise Support & Analytics',
      description: 'Get 24/7 dedicated support with guaranteed response times, plus comprehensive monitoring and custom analytics dashboards.',
      benefits: [
        '24/7 dedicated support team',
        '<15 minute response time SLA',
        'Dedicated Slack/Teams channel',
        'Custom analytics dashboards',
        'Real-time performance monitoring'
      ],
      imageUrl: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/illustrations/analytics-illustration.svg'
    }
  ];

  const stats = [
    { label: 'Cost Savings', value: 'Up to 60%' },
    { label: 'Deployment Speed', value: '10x Faster' },
    { label: 'Local Compliance', value: '100%' }
  ];

  return (
    <Section background="primary" id="enterprise">
      <Container>
        <div className="relative">
          {/* Background effects */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-500 mix-blend-multiply filter blur-[128px] animate-float"></div>
          </div>

          {/* Header */}
          <div className="relative text-center max-w-4xl mx-auto mb-16 animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 mb-6 border-l-4 border-l-primary-500">
              <span className="text-sm text-primary-400 font-medium">For Large Teams & Enterprises</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-6">
              Built for Mission-Critical
              <span className="block mt-2 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Production Workloads
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Enterprise-grade infrastructure trusted by leading African businesses. Deploy with confidence, scale without limits.
            </p>
          </div>

          {/* Stats */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20 animate-fadeIn">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-zinc-800/30 border border-zinc-700/40 hover:border-primary-500/40 transition-all duration-300 border-l-4 border-l-transparent hover:border-l-primary-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl font-bold text-primary-400 mb-2">{stat.value}</div>
                <div className="text-sm text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Timeline Tree Structure */}
          <div className="relative max-w-6xl mx-auto">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500/50 via-primary-500/30 to-primary-500/50 hidden md:block"></div>

            {/* Feature Cards */}
            <div className="relative space-y-16">
              {features.map((feature, index) => {
                const isImageRight = index % 2 === 0;
                const isVisible = visibleCards.includes(index);

                return (
                  <div
                    key={index}
                    ref={(el) => { cardRefs.current[index] = el; }}
                    className={`relative transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Timeline Node */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block z-10">
                        <div className="relative">
                          {/* Outer pulse ring */}
                          <div className={`absolute inset-0 w-6 h-6 bg-primary-500/30 animate-ping ${isVisible ? 'block' : 'hidden'}`}></div>
                          {/* Inner solid circle */}
                          <div className="relative w-6 h-6 bg-primary-500 border-4 border-zinc-950"></div>
                        </div>
                      </div>

                      {/* Image Side */}
                      <div className={`relative ${isImageRight ? 'md:order-2 md:pl-12' : 'md:order-1 md:pr-12'}`}>
                        <div className="relative aspect-square bg-gradient-to-br from-zinc-800/50 via-zinc-800/30 to-zinc-900/50 border border-zinc-700/40 p-8 group hover:border-primary-500/50 transition-all duration-500 border-l-4 border-l-transparent hover:border-l-primary-500 overflow-hidden">
                          {/* Placeholder for Flowbite Illustration */}
                          <div className="relative w-full h-full flex items-center justify-center">
                            <div className="text-center space-y-4">
                              <div className="text-8xl opacity-20 group-hover:opacity-30 transition-opacity group-hover:scale-110 duration-500">
                                {index === 0 ? '🏢' : index === 1 ? '🔐' : '📊'}
                              </div>
                              <p className="text-xs text-zinc-500 max-w-xs mx-auto">
                                Add Flowbite illustration:<br />
                                <span className="text-primary-400">{feature.imageUrl.split('/').pop()}</span>
                              </p>
                            </div>
                          </div>

                          {/* Decorative corner accents */}
                          <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-primary-500/30"></div>
                          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-primary-500/30"></div>

                          {/* Connection line to timeline */}
                          <div className={`absolute top-1/2 -translate-y-1/2 w-12 h-1 bg-primary-500/30 hidden md:block ${isImageRight ? '-left-12' : '-right-12'}`}></div>
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className={`relative ${isImageRight ? 'md:order-1 md:pr-12' : 'md:order-2 md:pl-12'}`}>
                        <div className="space-y-6">
                          {/* Title */}
                          <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-500/10 border border-primary-500/30 mb-4 border-l-2 border-l-primary-500">
                              <span className="text-xs text-primary-400 font-medium">0{index + 1}</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-4">
                              {feature.title}
                            </h3>
                            <p className="text-lg text-zinc-400">
                              {feature.description}
                            </p>
                          </div>

                          {/* Benefits Grid - Square Containers */}
                          <div className="grid grid-cols-1 gap-3">
                            {feature.benefits.map((benefit, idx) => (
                              <div
                                key={idx}
                                className={`relative p-4 bg-zinc-800/30 border border-zinc-700/30 hover:border-primary-500/40 transition-all duration-300 border-l-4 border-l-transparent hover:border-l-primary-500 group ${
                                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                                }`}
                                style={{
                                  transitionDelay: isVisible ? `${(idx + 1) * 100}ms` : '0ms'
                                }}
                              >
                                <div className="flex items-start gap-3">
                                  {/* Square checkbox icon container */}
                                  <div className="flex-shrink-0 w-6 h-6 bg-primary-500/10 border border-primary-500/30 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors border-l-2 border-l-primary-500">
                                    <svg className="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                  <span className="text-zinc-300 text-sm flex-1">{benefit}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Trust Section */}
          <div className="relative max-w-4xl mx-auto mt-24 p-8 bg-zinc-800/30 border border-zinc-700/40 border-l-4 border-l-primary-500/40 animate-fadeIn">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-zinc-100 mb-3">
                  Trusted by Leading Organizations
                </h3>
                <p className="text-zinc-400 mb-4">
                  Join hundreds of enterprises, startups, and government agencies using ScaleNodes for their critical infrastructure.
                </p>
                <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-500">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Data sovereignty guaranteed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Local support team</span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="flex items-center gap-4 text-zinc-400">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-zinc-100">500+</div>
                    <div className="text-xs">Organizations</div>
                  </div>
                  <div className="w-px h-12 bg-zinc-700"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-zinc-100">10K+</div>
                    <div className="text-xs">Deployments</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="relative text-center mt-16 animate-fadeIn">
            <p className="text-zinc-400 mb-6">
              Schedule a personalized demo to see how ScaleNodes can transform your infrastructure
            </p>
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <button className="px-10 py-4 bg-gradient-to-r from-primary-500 to-accent-600 hover:from-primary-400 hover:to-accent-500 text-white text-base font-semibold shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105 border-l-4 border-white/20 hover:border-white/40">
                Contact Sales Team
              </button>
              <button className="px-10 py-4 bg-zinc-800/60 hover:bg-zinc-800/80 border-2 border-zinc-700/60 hover:border-primary-500/60 text-zinc-100 text-base font-semibold backdrop-blur-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-zinc-600 hover:border-l-primary-500">
                Schedule Demo
              </button>
            </div>
            <p className="text-sm text-zinc-500 mt-4">
              Custom pricing available • Volume discounts • Flexible contracts
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
