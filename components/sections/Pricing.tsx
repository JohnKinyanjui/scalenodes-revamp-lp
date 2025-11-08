'use client';

import { useState } from 'react';
import Container from '../ui/Container';
import Section from '../ui/Section';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('webapps');

  const pricingData = {
    webapps: {
      title: 'WebApps',
      subtitle: 'Deploy and run applications with ready-to-use environments',
      plans: [
        {
          name: 'Starter',
          price: '500',
          description: 'Perfect for hobby projects',
          features: [
            '0.5 vCPU',
            '512Mi RAM',
            '5Gi storage',
            'Basic SSL',
            'Community support',
            '99.9% uptime SLA'
          ],
          popular: false
        },
        {
          name: 'Basic',
          price: '1,200',
          description: 'For small applications',
          features: [
            '1 vCPU',
            '2Gi RAM',
            '15Gi storage',
            'Custom domain',
            'Email support',
            '99.95% uptime SLA',
            'Auto-scaling'
          ],
          popular: false
        },
        {
          name: 'Pro',
          price: '2,500',
          description: 'For production workloads',
          features: [
            '2 vCPU',
            '4Gi RAM',
            '30Gi storage',
            'Priority support',
            'Advanced monitoring',
            '99.99% uptime SLA',
            'Load balancing'
          ],
          popular: true
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          description: 'For mission-critical apps',
          features: [
            'Custom vCPU',
            'Custom RAM',
            'Custom storage',
            'Dedicated support',
            'Multi-region',
            'White-label options'
          ],
          popular: false
        }
      ]
    },
    postgres: {
      title: 'Postgres Database',
      subtitle: 'Fully managed PostgreSQL databases with automated backups',
      plans: [
        {
          name: 'Starter',
          price: '500',
          description: 'For development and testing',
          features: [
            '0.5 vCPU',
            '512Mi RAM',
            '5Gi storage',
            'Daily backups',
            'Community support',
            '99.9% uptime SLA'
          ],
          popular: false
        },
        {
          name: 'Basic',
          price: '1,500',
          description: 'For small databases',
          features: [
            '1 vCPU',
            '2Gi RAM',
            '15Gi storage',
            'Point-in-time recovery',
            'Email support',
            '99.95% uptime SLA',
            'Connection pooling'
          ],
          popular: false
        },
        {
          name: 'Pro',
          price: '3,000',
          description: 'For high-performance DBs',
          features: [
            '2 vCPU',
            '4Gi RAM',
            '30Gi storage',
            'Read replicas',
            'Priority support',
            '99.99% uptime SLA',
            'Advanced monitoring'
          ],
          popular: true
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          description: 'For enterprise databases',
          features: [
            'Custom vCPU',
            'Custom RAM',
            'Custom storage',
            'Dedicated support',
            'Multi-region',
            'Custom compliance'
          ],
          popular: false
        }
      ]
    },
    platform: {
      title: 'Platform',
      subtitle: 'Complete hosting solution for services, APIs, and custom workloads',
      plans: [
        {
          name: 'Starter',
          price: '500',
          description: 'Complete hosting solution',
          features: [
            '0.5 vCPU',
            '1Gi RAM',
            '5Gi storage',
            '2Gi database',
            'Basic monitoring',
            '99.9% uptime SLA'
          ],
          popular: false
        },
        {
          name: 'Basic',
          price: '1,500',
          description: 'For growing applications',
          features: [
            '1 vCPU',
            '2Gi RAM',
            '15Gi storage',
            '5Gi database',
            'Advanced monitoring',
            '99.95% uptime SLA',
            'Auto-scaling'
          ],
          popular: false
        },
        {
          name: 'Pro',
          price: '3,500',
          description: 'For production apps',
          features: [
            '2 vCPU',
            '4Gi RAM',
            '30Gi storage',
            '15Gi database',
            'Load balancing',
            '99.99% uptime SLA',
            'Priority support'
          ],
          popular: true
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          description: 'For enterprise platforms',
          features: [
            'Custom vCPU',
            'Custom RAM',
            'Custom storage',
            'Custom database',
            'Dedicated support',
            'White-label options'
          ],
          popular: false
        }
      ]
    }
  };

  const currentCategory = pricingData[activeTab as keyof typeof pricingData];

  return (
    <Section background="white" className="bg-zinc-950" id="pricing">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-zinc-400">
            Choose the perfect plan for your needs. Servers in Kenya & Europe with M-Pesa payments.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12 animate-fadeIn">
          <div className="inline-flex bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm p-1.5 gap-1">
            {[
              { key: 'webapps', label: 'WebApps' },
              { key: 'postgres', label: 'Postgres' },
              { key: 'platform', label: 'Platform' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 transition-all duration-300 border-l-4 ${
                  activeTab === tab.key
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30 border-l-white/20'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50 border-l-transparent hover:border-l-primary-500'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Description */}
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fadeIn">
          <h3 className="text-xl text-white mb-2">{currentCategory.title}</h3>
          <p className="text-zinc-400">{currentCategory.subtitle}</p>
        </div>

        {/* 4-Column Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {currentCategory.plans.map((plan, index) => (
            <div
              key={index}
              className="relative flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-3 py-1 text-xs shadow-lg border-l-4 border-white/30">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Pricing Card */}
              <div className={`relative flex flex-col h-full p-8 border transition-all duration-300 border-l-4 ${
                plan.popular
                  ? 'bg-zinc-900/80 border-primary-500/50 shadow-xl shadow-primary-500/10 border-l-primary-500'
                  : 'bg-zinc-900/50 border-zinc-800/50 hover:border-zinc-700 border-l-transparent hover:border-l-primary-500'
              }`}>
                {/* Title */}
                <h3 className="text-xl text-white mb-1">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  {plan.price === 'Custom' ? (
                    <div className="text-4xl text-white my-4">Custom</div>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="text-zinc-400 text-xs">KES</span>
                      <span className="text-4xl text-white">{plan.price}</span>
                      <span className="text-zinc-400 text-xs">/mo</span>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3.5 mb-6 transition-all duration-300 border-l-4 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white shadow-lg shadow-primary-500/30 border-l-white/20'
                    : 'bg-zinc-800/50 hover:bg-zinc-800 text-white border border-zinc-700/50 border-l-zinc-600 hover:border-l-primary-500'
                }`}>
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </button>

                {/* Divider */}
                <div className="border-t border-zinc-800 mb-6"></div>

                {/* Description */}
                <p className="text-zinc-400 text-sm mb-6">
                  {plan.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                      <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="text-center mt-12 p-6 bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 max-w-4xl mx-auto border-l-4 border-l-primary-500/30">
          <p className="text-zinc-400 mb-4">
            All plans include free SSL, automatic backups, and DDoS protection
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-400">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Pay with M-Pesa
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Credit/Debit Cards
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Bank Transfer
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
