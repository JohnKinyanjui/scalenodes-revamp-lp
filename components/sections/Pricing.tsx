'use client';

import { useState } from 'react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import Button from '../ui/Button';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('webapps');

  const pricingData = {
    webapps: {
      title: 'WebApps',
      subtitle: 'Deploy and run applications with ready-to-use environments',
      plans: [
        {
          name: 'Starter',
          price: '250',
          period: 'per month',
          description: 'For hobby and staging sites',
          features: [
            '0.5 vCPU',
            '512Mi RAM',
            'Basic SSL',
            'Community support',
            '99.9% uptime SLA'
          ],
          cta: 'Get Started',
          popular: false
        },
        {
          name: 'Basic',
          price: '1200',
          period: 'per month',
          description: 'For small applications',
          features: [
            '1 vCPU',
            '2Gi RAM',
            'Custom domain',
            'Email support',
            '99.95% uptime SLA',
            'Auto-scaling'
          ],
          cta: 'Choose Basic',
          popular: true
        },
        {
          name: 'Pro',
          price: '2500',
          period: 'per month',
          description: 'For production workloads',
          features: [
            '2 vCPU',
            '4Gi RAM',
            'Priority support',
            'Advanced monitoring',
            '99.99% uptime SLA',
            'Load balancing'
          ],
          cta: 'Choose Pro',
          popular: false
        }
      ]
    },
    postgres: {
      title: 'Postgres',
      subtitle: 'Fully managed databases with automated backups and scaling',
      plans: [
        {
          name: 'Starter',
          price: '500',
          period: 'per month',
          description: 'For development and testing',
          features: [
            '0.5 vCPU',
            '512Mi RAM',
            '2Gi storage',
            'Daily backups',
            'Community support'
          ],
          cta: 'Get Started',
          popular: false
        },
        {
          name: 'Basic',
          price: '1500',
          period: 'per month',
          description: 'For small to medium databases',
          features: [
            '1 vCPU',
            '2Gi RAM',
            '10Gi storage',
            'Point-in-time recovery',
            'Email support',
            'Connection pooling'
          ],
          cta: 'Choose Basic',
          popular: true
        },
        {
          name: 'Pro',
          price: '3000',
          period: 'per month',
          description: 'For high-performance databases',
          features: [
            '2 vCPU',
            '4Gi RAM',
            '20Gi storage',
            'Read replicas',
            'Priority support',
            'Advanced monitoring'
          ],
          cta: 'Choose Pro',
          popular: false
        }
      ]
    },
    platform: {
      title: 'Platform',
      subtitle: 'General compute for services, APIs, and custom workloads',
      plans: [
        {
          name: 'Starter',
          price: '500',
          period: 'per month',
          description: 'Complete hosting solution',
          features: [
            '0.5 vCPU',
            '1Gi RAM',
            '5Gi storage',
            '2Gi database',
            'Basic monitoring'
          ],
          cta: 'Get Started',
          popular: false
        },
        {
          name: 'Basic',
          price: '1500',
          period: 'per month',
          description: 'For growing applications',
          features: [
            '1 vCPU',
            '2Gi RAM',
            '15Gi storage',
            '5Gi database',
            'Advanced monitoring',
            'Auto-scaling'
          ],
          cta: 'Choose Basic',
          popular: true
        },
        {
          name: 'Pro',
          price: '3500',
          period: 'per month',
          description: 'For production applications',
          features: [
            '2 vCPU',
            '4Gi RAM',
            '30Gi storage',
            '15Gi database',
            'Load balancing',
            'Priority support'
          ],
          cta: 'Choose Pro',
          popular: false
        }
      ]
    }
  };

  const currentCategory = pricingData[activeTab as keyof typeof pricingData];

  return (
    <Section background="white" className="bg-zinc-950">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find the right plan
            <span className="block bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mt-2">for your needs</span>
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12 animate-fadeInUp">
          <div className="inline-flex bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm rounded-xl p-1.5 gap-1">
            <button
              onClick={() => setActiveTab('webapps')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 relative ${
                activeTab === 'webapps'
                  ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/20'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
              }`}
            >
              WebApps
            </button>
            <button
              onClick={() => setActiveTab('postgres')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'postgres'
                  ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/20'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
              }`}
            >
              Postgres
            </button>
            <button
              onClick={() => setActiveTab('platform')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'platform'
                  ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/20'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
              }`}
            >
              Platform
            </button>
          </div>
        </div>

        {/* Category Description */}
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fadeIn">
          <h3 className="text-2xl font-bold text-white mb-2">{currentCategory.title}</h3>
          <p className="text-zinc-400 text-lg">{currentCategory.subtitle}</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {currentCategory.plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02] animate-scaleIn group ${
                plan.popular
                  ? 'bg-gradient-to-br from-primary-600/90 to-primary-700/90 shadow-2xl shadow-primary-500/20 border-2 border-primary-400/50'
                  : 'bg-zinc-900/50 border border-zinc-800 hover:border-primary-500/50 backdrop-blur-sm'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                    </svg>
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-sm text-zinc-400">KES</span>
                  <span className="text-5xl font-bold text-white ml-1">{plan.price}</span>
                </div>
                <div className={`text-sm ${plan.popular ? 'text-white/80' : 'text-zinc-400'}`}>
                  {plan.period}
                </div>
              </div>

              <p className={`text-center mb-6 ${plan.popular ? 'text-white/90' : 'text-zinc-400'}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-primary-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className={`text-sm ${plan.popular ? 'text-white' : 'text-zinc-300'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? 'secondary' : 'primary'}
                className={`w-full ${plan.popular ? 'bg-white text-primary-700 hover:bg-zinc-100' : 'bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400'}`}
              >
                {plan.cta}
              </Button>

              {/* Hover glow effect */}
              {!plan.popular && (
                <div className="absolute -inset-px bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 p-6 bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-zinc-800 max-w-4xl mx-auto animate-fadeIn">
          <p className="text-zinc-300 text-lg mb-4">
            <strong className="text-white">All plans include:</strong> Free SSL, Automatic backups, DDoS protection, Local Kenya servers
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center">
                <svg className="w-3 h-3 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Pay with M-Pesa</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center">
                <svg className="w-3 h-3 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Credit/Debit Card</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center">
                <svg className="w-3 h-3 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Bank Transfer</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
