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
    <Section background="white" className="bg-dark-elevated">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find the right plan
            <span className="block text-primary-400">for your needs</span>
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12 animate-fadeInUp">
          <div className="inline-flex bg-dark-card rounded-xl p-2 gap-2">
            <button
              onClick={() => setActiveTab('webapps')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'webapps'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-dark-elevated'
              }`}
            >
              WebApps
            </button>
            <button
              onClick={() => setActiveTab('postgres')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'postgres'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-dark-elevated'
              }`}
            >
              Postgres
            </button>
            <button
              onClick={() => setActiveTab('platform')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'platform'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-dark-elevated'
              }`}
            >
              Platform
            </button>
          </div>
        </div>

        {/* Category Description */}
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fadeIn">
          <h3 className="text-2xl font-bold text-white mb-2">{currentCategory.title}</h3>
          <p className="text-gray-400 text-lg">{currentCategory.subtitle}</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {currentCategory.plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 animate-scaleIn ${
                plan.popular
                  ? 'bg-gradient-to-br from-primary-600 to-primary-800 shadow-2xl ring-2 ring-primary-400 animate-glow'
                  : 'bg-dark-card border border-gray-700 hover:border-primary-600'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-float">
                  <span className="bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-sm text-gray-400">KES</span>
                  <span className="text-5xl font-bold text-white ml-1">{plan.price}</span>
                </div>
                <div className={`text-sm ${plan.popular ? 'text-primary-100' : 'text-gray-400'}`}>
                  {plan.period}
                </div>
              </div>

              <p className={`text-center mb-6 ${plan.popular ? 'text-primary-100' : 'text-gray-400'}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 ${
                        plan.popular ? 'text-primary-200' : 'text-primary-400'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={`text-sm ${plan.popular ? 'text-white' : 'text-gray-300'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? 'secondary' : 'primary'}
                className={`w-full ${plan.popular ? 'bg-white text-primary-700 hover:bg-gray-100' : ''}`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 p-6 bg-dark-card rounded-xl border border-gray-700 max-w-4xl mx-auto animate-fadeIn">
          <p className="text-gray-300 text-lg">
            <strong className="text-white">All plans include:</strong> Free SSL, Automatic backups, DDoS protection, Local Kenya servers
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Pay with M-Pesa</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Credit/Debit Card</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Bank Transfer</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
