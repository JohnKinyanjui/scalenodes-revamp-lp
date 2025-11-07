import Container from '../ui/Container';
import Section from '../ui/Section';
import Button from '../ui/Button';

export default function BuiltForAfrica() {
  return (
    <Section background="gradient">
      <Container>
        <div className="relative">
          {/* Background blobs */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-[128px] animate-float"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-[128px] animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slideInLeft">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-accent-500/20 to-accent-600/20 border border-accent-500/30 text-accent-300 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                  🌍 Our Story
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Built for Africa,
                <span className="block bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">By Africans</span>
              </h2>

              <div className="space-y-4 text-lg text-zinc-300 leading-relaxed">
                <p>
                  ScaleNodes was founded by a Kenyan developer frustrated with paying expensive international hosting fees and dealing with slow load times for local users.
                </p>
                <p>
                  We believe African businesses deserve world-class infrastructure at fair prices, with servers close to their customers and payment methods that make sense.
                </p>
                <p className="font-semibold text-primary-400">
                  Your success shouldn't depend on expensive overseas infrastructure.
                </p>
              </div>

              <div className="pt-4">
                <Button size="lg" variant="primary">
                  Join the Movement
                </Button>
              </div>
            </div>

            <div className="relative group animate-slideInRight">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>

              <div className="relative bg-gradient-to-br from-zinc-800/50 via-zinc-800/30 to-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/40">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Local?</h3>
                <div className="space-y-6">
                  <div className="flex gap-4 group/item">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-lg flex items-center justify-center font-bold group-hover/item:bg-primary-500/20 transition-colors">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Data Sovereignty</h4>
                      <p className="text-zinc-400">Your data stays in Kenya, complying with local regulations and giving you full control.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 group/item">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-500/10 border border-accent-500/20 text-accent-400 rounded-lg flex items-center justify-center font-bold group-hover/item:bg-accent-500/20 transition-colors">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Lightning Speed</h4>
                      <p className="text-zinc-400">Sub-50ms latency for Kenyan users means faster page loads and better user experience.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 group/item">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-lg flex items-center justify-center font-bold group-hover/item:bg-primary-500/20 transition-colors">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Local Support</h4>
                      <p className="text-zinc-400">Support team in your timezone who understand the Kenyan market and business landscape.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 group/item">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-500/10 border border-accent-500/20 text-accent-400 rounded-lg flex items-center justify-center font-bold group-hover/item:bg-accent-500/20 transition-colors">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Support Local Innovation</h4>
                      <p className="text-zinc-400">Every shilling you spend helps grow Kenya's tech ecosystem and creates local jobs.</p>
                    </div>
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary-500/20 rounded-tr-2xl"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-accent-500/20 rounded-bl-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
