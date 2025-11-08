import Navbar from '@/components/sections/Navbar';
import Container from '@/components/ui/Container';
import Footer from '@/components/sections/Footer';

export default function Blog() {
  const posts = [
    {
      category: 'Product Updates',
      title: 'Introducing European Servers: Global Reach from ScaleNodes',
      excerpt: 'We\'re excited to announce the launch of our European data centers, bringing you closer to your international users.',
      date: 'Nov 8, 2024',
      readTime: '5 min read',
      author: 'ScaleNodes Team'
    },
    {
      category: 'Tutorials',
      title: 'Deploying Your First Next.js App on ScaleNodes',
      excerpt: 'A step-by-step guide to deploying your Next.js application on ScaleNodes in under 5 minutes.',
      date: 'Nov 5, 2024',
      readTime: '8 min read',
      author: 'David Otieno'
    },
    {
      category: 'Case Study',
      title: 'How Shoppie Kenya Reduced Infrastructure Costs by 60%',
      excerpt: 'Learn how Shoppie Kenya migrated from international platforms to ScaleNodes and cut costs significantly.',
      date: 'Nov 1, 2024',
      readTime: '6 min read',
      author: 'James Kimani'
    },
    {
      category: 'Best Practices',
      title: 'Optimizing Database Performance on Postgres',
      excerpt: 'Tips and tricks for getting the most out of your PostgreSQL databases on ScaleNodes.',
      date: 'Oct 28, 2024',
      readTime: '10 min read',
      author: 'Linda Muthoni'
    },
    {
      category: 'Company News',
      title: 'ScaleNodes Raises Seed Funding to Expand Across Africa',
      excerpt: 'We\'re thrilled to announce our seed funding round to bring cloud infrastructure to more African markets.',
      date: 'Oct 25, 2024',
      readTime: '4 min read',
      author: 'ScaleNodes Team'
    },
    {
      category: 'Tutorials',
      title: 'Setting Up CI/CD with GitHub Actions',
      excerpt: 'Automate your deployment workflow with GitHub Actions and ScaleNodes integration.',
      date: 'Oct 20, 2024',
      readTime: '12 min read',
      author: 'Peter Omondi'
    }
  ];

  const categories = ['All', 'Product Updates', 'Tutorials', 'Case Study', 'Best Practices', 'Company News'];

  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900 text-white overflow-hidden pt-36 pb-20">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500 rounded-full mix-blend-multiply filter blur-[128px] animate-float"></div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full">
              <span className="text-sm text-primary-400 font-medium">Our Blog</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Insights & Updates
              <span className="block mt-2 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                from ScaleNodes
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto">
              Learn about product updates, best practices, and success stories from the African cloud.
            </p>
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="py-12 bg-zinc-950 border-b border-zinc-800">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2.5 rounded-full transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-zinc-800/50 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 border border-zinc-700/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-zinc-950">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="group bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 backdrop-blur-xl border border-zinc-700/50 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all duration-300 cursor-pointer animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                  <div className="text-6xl opacity-50">📝</div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-primary-500/10 border border-primary-500/30 rounded-full text-xs text-primary-400 font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-100 group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-zinc-400 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-700/40 text-sm text-zinc-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 hover:border-primary-500/50 text-zinc-100 font-semibold rounded-xl transition-all duration-300">
              Load More Posts
            </button>
          </div>
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-zinc-900/50">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-zinc-700/50 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">
              Stay Updated
            </h2>
            <p className="text-lg text-zinc-400">
              Get the latest product updates, tutorials, and insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-primary-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white font-semibold rounded-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
