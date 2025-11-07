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
      quote: "As a startup, the free tier gave us time to validate our product before spending on infrastructure. Now we're on Pro and couldn't be happier.",
      author: "Grace Akinyi",
      role: "Co-founder, AgriConnect",
      avatar: "GA"
    }
  ];

  return (
    <Section background="white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Kenyan Businesses
          </h2>
          <p className="text-xl text-gray-600">
            See what developers and founders are saying about ScaleNodes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              {/* Quote */}
              <div className="mb-6">
                <svg className="w-8 h-8 text-primary-300 mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-primary-50 rounded-xl">
            <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-gray-700">Active Projects</div>
          </div>
          <div className="text-center p-6 bg-accent-50 rounded-xl">
            <div className="text-4xl font-bold text-accent-600 mb-2">99.9%</div>
            <div className="text-gray-700">Uptime</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
            <div className="text-gray-700">Happy Customers</div>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="text-4xl font-bold text-blue-600 mb-2">&lt;50ms</div>
            <div className="text-gray-700">Avg Latency</div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
