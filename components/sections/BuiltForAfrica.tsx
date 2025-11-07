import Container from '../ui/Container';
import Section from '../ui/Section';
import Button from '../ui/Button';

export default function BuiltForAfrica() {
  return (
    <Section background="gradient">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🌍 Our Story
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Built for Africa,
              <span className="block text-primary-600">By Africans</span>
            </h2>

            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                ScaleNodes was founded by a Kenyan developer frustrated with paying expensive international hosting fees and dealing with slow load times for local users.
              </p>
              <p>
                We believe African businesses deserve world-class infrastructure at fair prices, with servers close to their customers and payment methods that make sense.
              </p>
              <p className="font-semibold text-primary-700">
                Your success shouldn't depend on expensive overseas infrastructure.
              </p>
            </div>

            <div className="pt-4">
              <Button size="lg" variant="primary">
                Join the Movement
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Local?</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Data Sovereignty</h4>
                  <p className="text-gray-600">Your data stays in Kenya, complying with local regulations and giving you full control.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Lightning Speed</h4>
                  <p className="text-gray-600">Sub-50ms latency for Kenyan users means faster page loads and better user experience.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Local Support</h4>
                  <p className="text-gray-600">Support team in your timezone who understand the Kenyan market and business landscape.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Support Local Innovation</h4>
                  <p className="text-gray-600">Every shilling you spend helps grow Kenya's tech ecosystem and creates local jobs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
