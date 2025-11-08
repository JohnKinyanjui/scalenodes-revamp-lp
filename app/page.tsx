import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Enterprise from '@/components/sections/Enterprise';
import Pricing from '@/components/sections/Pricing';
import Features from '@/components/sections/Features';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Enterprise />
      <Pricing />
      <Features />
      <Footer />
    </main>
  )
}
