'use client';

import { useState } from 'react';
import Container from '../ui/Container';
import Section from '../ui/Section';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What makes ScaleNodes different from platforms like Vercel or DigitalOcean?",
      answer: "ScaleNodes is specifically built for African businesses. Our servers are located in Kenya, giving you sub-50ms latency for local users, full data sovereignty, and pricing in KES. We accept M-Pesa and other local payment methods, and our support team operates in EAT timezone."
    },
    {
      question: "Can I migrate my existing application to ScaleNodes?",
      answer: "Absolutely! We support all major frameworks including React, Next.js, Vue, Node.js, and Golang. Our team can help you migrate from platforms like Vercel, Netlify, or Heroku with minimal downtime. The free tier is perfect for testing the migration process."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept M-Pesa (via Paybill and Till), credit/debit cards, bank transfers, and we're integrated with Paystack and Dodo Payments. All pricing is in Kenyan Shillings (KES) to avoid exchange rate surprises."
    },
    {
      question: "Is my data really stored in Kenya?",
      answer: "Yes! All our servers are physically located in Nairobi data centers. Your data never leaves Kenya, ensuring full data sovereignty and compliance with local data protection regulations. This also means faster load times for your Kenyan users."
    },
    {
      question: "What kind of support do you provide?",
      answer: "All paid plans include priority email support with responses within 24 hours. Business and Enterprise plans get 24/7 support via email, chat, and phone. Our support team is based in Kenya and operates in EAT timezone, so no more waiting for US business hours."
    },
    {
      question: "Can I use my own domain name?",
      answer: "Yes! All paid plans include custom domain support with free SSL certificates. You can connect multiple domains to your projects. We provide step-by-step guides for all major domain registrars."
    },
    {
      question: "What happens if I exceed my plan's limits?",
      answer: "We'll notify you via email when you reach 80% of your bandwidth or storage limit. You can upgrade your plan anytime, and we'll only charge you the prorated difference. We never shut down your site without warning."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes! We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied within the first 30 days, we'll refund your payment in full, no questions asked."
    },
    {
      question: "Can I host WordPress sites on ScaleNodes?",
      answer: "Yes! We offer managed WordPress hosting with automatic updates, daily backups, and optimized performance. Our WordPress hosting is specifically tuned for Kenyan internet speeds and traffic patterns."
    },
    {
      question: "Is there a free tier?",
      answer: "Yes! Our Starter plan is free forever and includes 1 project, 100GB bandwidth, SSL certificate, and community support. It's perfect for personal projects, portfolios, and testing ScaleNodes before upgrading."
    }
  ];

  return (
    <Section background="gray" id="faq">
      <Container>
        <div className="relative">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3f3f4608_1px,transparent_1px),linear-gradient(to_bottom,#3f3f4608_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

          <div className="relative text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-zinc-400">
              Everything you need to know about ScaleNodes
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-zinc-800/50 via-zinc-800/30 to-zinc-900/50 backdrop-blur-sm rounded-xl border border-zinc-700/40 overflow-hidden animate-scaleIn hover:border-primary-500/30 transition-all"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-zinc-800/40 transition-colors"
                >
                  <span className="font-semibold text-white pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-primary-400 flex-shrink-0 transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5 border-t border-zinc-700/40">
                    <p className="text-zinc-300 leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="relative mt-12 text-center animate-fadeIn">
            <p className="text-zinc-400 mb-4">
              Still have questions?
            </p>
            <button className="group text-primary-400 font-semibold hover:text-primary-300 inline-flex items-center gap-2 transition-colors">
              Contact our support team
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
