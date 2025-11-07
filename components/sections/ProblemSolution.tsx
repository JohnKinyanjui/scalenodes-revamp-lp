import Container from '../ui/Container';
import Section from '../ui/Section';

export default function ProblemSolution() {
  return (
    <Section background="white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem */}
          <div className="space-y-6">
            <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-lg text-sm font-semibold">
              The Problem
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              International hosting platforms are expensive for Kenyan businesses
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <div>
                  <strong className="text-gray-900">High dollar-based pricing</strong>
                  <p className="text-gray-600">Paying in USD with unfavorable exchange rates cuts into your profits</p>
                </div>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <div>
                  <strong className="text-gray-900">Data hosted overseas</strong>
                  <p className="text-gray-600">Your users experience slow load times and you have no data sovereignty</p>
                </div>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <div>
                  <strong className="text-gray-900">Complex international payments</strong>
                  <p className="text-gray-600">International credit cards, wire transfers, and payment complications</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div className="space-y-6">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-semibold">
              The Solution
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              ScaleNodes brings world-class hosting to Kenya
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <strong className="text-gray-900">Affordable local pricing</strong>
                  <p className="text-gray-600">Pay in KES with M-Pesa and other local payment methods</p>
                </div>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <strong className="text-gray-900">Servers in Nairobi</strong>
                  <p className="text-gray-600">Lightning-fast load times for your Kenyan users with full data sovereignty</p>
                </div>
              </li>
              <li className="flex gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <strong className="text-gray-900">Built for African businesses</strong>
                  <p className="text-gray-600">By Kenyans, for Kenyans, with the features you actually need</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
