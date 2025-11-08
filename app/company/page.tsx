import Navbar from '@/components/sections/Navbar';
import Container from '@/components/ui/Container';
import Footer from '@/components/sections/Footer';

export default function Company() {
  const team = [
    { name: 'James Kimani', role: 'CEO & Co-Founder', avatar: 'JK' },
    { name: 'Sarah Wanjiku', role: 'CTO & Co-Founder', avatar: 'SW' },
    { name: 'David Otieno', role: 'Head of Engineering', avatar: 'DO' },
    { name: 'Linda Muthoni', role: 'Head of Product', avatar: 'LM' }
  ];

  const values = [
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible in African cloud infrastructure'
    },
    {
      icon: '🤝',
      title: 'Customer First',
      description: 'Your success is our success. We\'re here to help you grow'
    },
    {
      icon: '🌍',
      title: 'Local Impact',
      description: 'Building technology that serves African businesses and developers'
    },
    {
      icon: '💪',
      title: 'Reliability',
      description: 'Enterprise-grade infrastructure you can depend on 24/7'
    }
  ];

  const milestones = [
    { year: '2023', event: 'ScaleNodes founded in Nairobi' },
    { year: '2023', event: 'First 100 customers' },
    { year: '2024', event: 'Launched Postgres & Platform products' },
    { year: '2024', event: 'European data centers go live' },
    { year: '2024', event: 'Reached 500+ active projects' }
  ];

  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900 text-white overflow-hidden pt-36 pb-20">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/3 w-[700px] h-[700px] bg-primary-500 rounded-full mix-blend-multiply filter blur-[140px] animate-float"></div>
          <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-accent-500 rounded-full mix-blend-multiply filter blur-[140px] animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500/10 border border-primary-500/30 rounded-full">
              <span className="text-sm text-primary-400 font-medium">About ScaleNodes</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Building Africa's
              <span className="block mt-3 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Cloud Future
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to make world-class cloud infrastructure accessible to every African developer and business.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-zinc-950">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-zinc-400 leading-relaxed">
                To empower African businesses with reliable, affordable, and locally-hosted cloud infrastructure.
                We believe that every developer and business in Africa deserves access to world-class tools
                without the complexities of international platforms.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-zinc-900/50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-zinc-800/30 border border-zinc-700/40 rounded-xl p-8 hover:border-primary-500/40 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-zinc-100 mb-3">
                  {value.title}
                </h3>
                <p className="text-zinc-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-zinc-950">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-zinc-400">
              Passionate technologists building for Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="group text-center animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 mx-auto w-32 h-32 bg-gradient-to-br from-primary-600 to-primary-500 text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-zinc-100 mb-1">
                  {member.name}
                </h3>
                <p className="text-zinc-400">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-zinc-900/50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
              Our Journey
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex gap-6 items-start bg-zinc-800/30 border border-zinc-700/40 rounded-xl p-6 hover:border-primary-500/40 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-primary-500/10 border border-primary-500/30 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-400">{milestone.year}</span>
                </div>
                <div className="flex-1 pt-4">
                  <p className="text-lg text-zinc-100">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Careers CTA */}
      <section className="py-24 bg-gradient-to-br from-zinc-900/90 to-zinc-800/90">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">
              Join Our Mission
            </h2>
            <p className="text-xl text-zinc-300">
              We're always looking for talented people who share our vision
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-primary-500 to-accent-600 hover:from-primary-400 hover:to-accent-500 text-white text-lg font-semibold rounded-xl shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105">
              View Open Positions
            </button>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
