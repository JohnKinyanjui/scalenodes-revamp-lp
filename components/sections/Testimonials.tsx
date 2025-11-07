import Container from '../ui/Container';
import Section from '../ui/Section';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Switching to ScaleNodes cut our hosting costs by 60% and our users in Nairobi now experience blazing fast load times. It's a no-brainer for Kenyan businesses.",
      author: "James Kimani",
      role: "CTO, Shoppie Kenya",
      avatar: "JK"
    },
    {
      quote: "Finally, a platform that understands the Kenyan market. M-Pesa payments and local support make everything so much easier. My clients love the performance.",
      author: "Sarah Wanjiku",
      role: "Freelance Developer",
      avatar: "SW"
    },
    {
      quote: "We manage 50+ client websites and ScaleNodes has been a game-changer. The team dashboard and white-label options are exactly what we needed.",
      author: "David Otieno",
      role: "CEO, WebCraft Agency",
      avatar: "DO"
    },
    {
      quote: "Data sovereignty was a major concern for our fintech startup. Having our servers in Kenya gives us peace of mind and keeps us compliant with local regulations.",
      author: "Linda Muthoni",
      role: "Founder, PayFlow",
      avatar: "LM"
    },
    {
      quote: "The migration process was seamless and their support team walked us through every step. Our app performance improved immediately and costs went down.",
      author: "Peter Omondi",
      role: "Tech Lead, EduHub",
      avatar: "PO"
    },
    {
      quote: "The KES 500 free credits let us test everything before committing. The performance and support convinced us to stay. Now we're on Pro and couldn't be happier.",
      author: "Grace Akinyi",
      role: "Co-founder, AgriConnect",
      avatar: "GA"
    }
  ];

  return (
    <Section background="white" id="testimonials">
      <Container>
        <div className="relative">
          {/* Background blobs */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-[128px] animate-float"></div>
            <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-[128px] animate-float" style={{ animationDelay: '3s' }}></div>
          </div>

          <div className="relative text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Kenyan Businesses
            </h2>
            <p className="text-xl text-zinc-400">
              See what developers and founders are saying about ScaleNodes
            </p>
          </div>

          <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-zinc-800/50 via-zinc-800/30 to-zinc-900/50 backdrop-blur-sm border border-zinc-700/40 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300 animate-scaleIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Quote */}
                <div className="mb-6">
                  <svg className="w-8 h-8 text-primary-500/30 mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-zinc-300 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-700/40">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-500 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-zinc-400">{testimonial.role}</div>
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/5 group-hover:to-accent-500/5 rounded-xl transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="relative mt-16 grid md:grid-cols-4 gap-6">
            <div className="group text-center p-6 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm border border-zinc-700/40 rounded-xl hover:border-primary-500/50 transition-all animate-fadeIn">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-zinc-400">Active Projects</div>
            </div>
            <div className="group text-center p-6 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm border border-zinc-700/40 rounded-xl hover:border-accent-500/50 transition-all animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent mb-2">99.9%</div>
              <div className="text-zinc-400">Uptime</div>
            </div>
            <div className="group text-center p-6 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm border border-zinc-700/40 rounded-xl hover:border-primary-500/50 transition-all animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-2">200+</div>
              <div className="text-zinc-400">Happy Customers</div>
            </div>
            <div className="group text-center p-6 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm border border-zinc-700/40 rounded-xl hover:border-accent-500/50 transition-all animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent mb-2">&lt;50ms</div>
              <div className="text-zinc-400">Avg Latency</div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
